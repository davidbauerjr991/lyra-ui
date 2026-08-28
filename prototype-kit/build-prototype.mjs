#!/usr/bin/env node
/* Prototype-kit builder — the ONE known-good pipeline for turning a Lyra UI
   template into a self-contained prototype html. Run from the repo root of a
   SANDBOX copy (it patches story source in place to inject the product name).

   Usage:
     node prototype-kit/build-prototype.mjs \
       --type admin|agent \
       --product "Outbound Engagement" \
       --title "Dave Test Prototype" \
       --sha <lyra-ui commit sha> \
       --out /path/to/prototype.html

   Does, in order: product-name injection → esbuild bundle → Tailwind compile
   (storybook.css, which @imports the full lyra tokens — light AND dark) →
   single-file assembly (data-theme, commit stamp, update-notice script) →
   programmatic dark-mode + integrity verification. Exits non-zero with a
   clear message if any check fails: do NOT deliver a file that failed. */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const arg = (k, req = true) => {
  const i = process.argv.indexOf("--" + k);
  if (i === -1 || !process.argv[i + 1]) {
    if (req) { console.error("Missing --" + k); process.exit(1); }
    return undefined;
  }
  return process.argv[i + 1];
};

const type = arg("type");
const product = arg("product");
const title = arg("title");
const sha = arg("sha");
const out = arg("out");
if (!["admin", "agent"].includes(type)) { console.error("--type must be admin|agent"); process.exit(1); }

/* 1 ── Inject product name into the SANDBOX story copy (anchors documented
   in README-FIRST.md; if an anchor is missing the template changed — stop). */
const storyFile = type === "admin"
  ? "src/components/__stories__/AdminShell.stories.tsx"
  : "src/components/__stories__/AgentNextGenTemplate.stories.tsx";
const anchor = type === "admin" ? 'name="Outbound Engagement"' : 'name="Agent Next Gen"';
let story = readFileSync(storyFile, "utf8");
if (!story.includes(anchor)) {
  console.error(`Anchor ${anchor} not found in ${storyFile} — template changed; update prototype-kit.`);
  process.exit(1);
}
writeFileSync(storyFile, story.replaceAll(anchor, `name="${product}"`));

/* 2 ── Bundle */
execSync(
  `npx esbuild prototype-kit/entry-${type}.tsx --bundle --minify --format=iife ` +
  `--platform=browser --jsx=automatic --define:process.env.NODE_ENV='"production"' ` +
  `--loader:.png=dataurl --loader:.svg=dataurl --loader:.css=text --outfile=/tmp/proto-bundle.js`,
  { stdio: "inherit" }
);

/* 3 ── Compile CSS — storybook.css already @imports the FULL lyra tokens
   (light :root + [data-theme="dark"]). Never concatenate a second copy. */
execSync(
  `npx tailwindcss -c tailwind.config.js -i src/storybook.css -o /tmp/proto.css --minify`,
  { stdio: "inherit" }
);

/* 4 ── Assemble */
const css = readFileSync("/tmp/proto.css", "utf8");
const js = readFileSync("/tmp/proto-bundle.js", "utf8");
const updateNotice = `
<script>
(function () {
  var m = document.querySelector('meta[name="lyra-ui-commit"]');
  if (!m) return;
  fetch("https://api.github.com/repos/davidbauerjr991/lyra-ui/commits/main")
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || !d.sha || d.sha === m.content) return;
      var file = decodeURIComponent((location.pathname.split("/").pop() || "this-prototype.html"));
      var rebuildPrompt =
        "Update this Lyra UI prototype to the latest components.\\n" +
        "- File: Prototypes/" + file + " in my connected folder (built at lyra-ui commit " + m.content + "; latest main is " + d.sha + ").\\n" +
        "- Follow CLAUDE-INSTRUCTIONS.md Scenario C: clone the latest lyra-ui, rebuild this prototype on it (run the component-drift audit for every component used), verify (integrity checks + smoke test), overwrite the same file in place, and tell me to refresh. Never ask me to run commands.";
      var b = document.createElement("div");
      b.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999;background:#ecf5fe;border-bottom:1px solid #D3E6FD;color:#185ba4;font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:8px 40px 8px 16px;text-align:center;";
      var msg = document.createElement("span");
      msg.textContent = "Lyra UI has been updated since this prototype was built. ";
      b.appendChild(msg);
      var act = document.createElement("button");
      act.textContent = "Update components?";
      act.style.cssText = "border:none;background:none;color:#185ba4;font:inherit;font-weight:700;text-decoration:underline;cursor:pointer;padding:0;";
      act.onclick = function () {
        var done = function () {
          msg.textContent = "Prompt copied — paste it into Claude Cowork to update this prototype. ";
          act.textContent = "Copy again";
        };
        try {
          navigator.clipboard.writeText(rebuildPrompt).then(done, function () {
            window.prompt("Copy this prompt, then paste it into Claude Cowork:", rebuildPrompt); done();
          });
        } catch (e) {
          window.prompt("Copy this prompt, then paste it into Claude Cowork:", rebuildPrompt); done();
        }
      };
      b.appendChild(act);
      var x = document.createElement("button");
      x.textContent = "\\u00d7";
      x.style.cssText = "position:absolute;right:10px;top:4px;border:none;background:none;font-size:18px;cursor:pointer;color:inherit;";
      x.onclick = function () { b.remove(); };
      b.appendChild(x);
      document.body.prepend(b);
    })
    .catch(function () {});
})();
</script>`;

const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="lyra-ui-commit" content="${sha}" />
<title>${title}</title>
<style>${css}</style>
</head>
<body style="margin:0;background:var(--lyra-color-bg-surface-shell);">
<div id="root"></div>
<script>${js}</script>
${updateNotice}
</body>
</html>
`;

/* 5 ── Verify BEFORE writing anywhere near the user */
const fail = (msg) => { console.error("VERIFY FAILED: " + msg); process.exit(1); };
/* Minifiers may strip attribute-selector quotes: match both ["dark"] and [dark]. */
const DARK = /\[data-theme="?dark"?\]/;
const rootDecls = [...html.matchAll(/:root\s*{[^}]*--lyra-color-bg-surface-shell/g)].length;
const darkDecls = [...html.matchAll(new RegExp(DARK.source + '[^{]*{[^}]*--lyra-color-bg-surface-shell', "g"))].length;
if (rootDecls !== 1) fail(`expected exactly 1 :root token block, found ${rootDecls} (duplicate tokens kill dark mode)`);
if (darkDecls !== 1) fail(`expected exactly 1 dark token block, found ${darkDecls}`);
if (html.search(DARK) < html.indexOf(":root")) fail("dark block must come AFTER the :root block");
if (!html.includes(product)) fail("product name missing from bundle");
if (!/bg-lyra-bg-surface-shell{[^}]*var\(--lyra/.test(html.replace(/\s+/g, ""))) fail("lyra utilities must reference var(--lyra-...), not literals");
if (html.length < 200000) fail("output suspiciously small — bundle likely broken");

writeFileSync(resolve(out), html);
console.log(`OK: ${out} (${(html.length / 1024).toFixed(0)}KB) — all dark-mode/integrity checks passed`);
