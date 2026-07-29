#!/usr/bin/env node
/* Prototype-kit render smoke test — verifies a built prototype ACTUALLY
   RENDERS, without a browser. Use this instead of ever trying to install
   Chromium/Playwright/system libraries in the sandbox (no root; it always
   fails after wasting minutes — this is the supported alternative).

   Usage:
     node prototype-kit/smoke-test.mjs --file /path/proto.html [--expect "Some visible text"] [--expect "More text"]

   Passes when: #root mounts with children, no runtime errors fire, and every
   --expect string is present in the rendered text. Exits non-zero otherwise.
   Requires jsdom; installs it into the sandbox copy on demand (--no-save). */
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const get = (k) => { const i = args.indexOf("--" + k); return i > -1 ? args[i + 1] : undefined; };
const file = get("file");
const expects = args.flatMap((a, i) => (a === "--expect" ? [args[i + 1]] : []));
if (!file || !existsSync(file)) { console.error("Missing/bad --file"); process.exit(1); }

try { require.resolve("jsdom"); } catch {
  console.log("Installing jsdom (sandbox only, --no-save)...");
  execSync("npm install jsdom --no-save --no-audit --no-fund", { stdio: "inherit" });
}
const { JSDOM } = require("jsdom");

const html = readFileSync(file, "utf8");
const dom = new JSDOM(html, {
  runScripts: "dangerously", pretendToBeVisual: true, url: "file:///proto.html",
  beforeParse(w) {
    /* jsdom lacks these browser APIs; real browsers have them all. */
    w.fetch = () => Promise.resolve({ json: () => Promise.resolve({}) });
    w.ResizeObserver = class { observe(){} unobserve(){} disconnect(){} };
    w.IntersectionObserver = class { observe(){} unobserve(){} disconnect(){} };
    w.matchMedia = w.matchMedia || (() => ({ matches: false, addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){} }));
    w.scrollTo = () => {};
    w.HTMLElement.prototype.scrollIntoView = w.HTMLElement.prototype.scrollIntoView || function(){};
  },
});
const errors = [];
dom.window.addEventListener("error", (e) => errors.push(e.message));

setTimeout(() => {
  const root = dom.window.document.getElementById("root");
  const text = root ? root.textContent : "";
  const missing = expects.filter((s) => !text.includes(s));
  const mounted = root && root.children.length > 0;
  console.log("mounted:", mounted, "| runtime errors:", errors.length, "| missing expected text:", missing.length);
  if (errors.length) console.error("errors:", errors.slice(0, 5));
  if (missing.length) console.error("missing:", missing);
  if (mounted && errors.length === 0 && missing.length === 0) {
    console.log("SMOKE TEST PASSED");
    process.exit(0);
  }
  console.error("SMOKE TEST FAILED — do not deliver");
  process.exit(1);
}, 3000);
