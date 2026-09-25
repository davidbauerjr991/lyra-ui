import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as E}from"./index-1evVQkiP.js";import{c as F}from"./utils-BLSKlp9E.js";import{U as P}from"./user-BnR-bf5w.js";import{H as K}from"./headphones-BPvLrNMv.js";import{c as D}from"./createLucideIcon-aII_sYFw.js";import{B as G}from"./bell-16x-NcfM.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=D("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Q=E("inline-flex shrink-0 items-center justify-center",{variants:{size:{xs:"h-7 w-7",sm:"h-8 w-8",md:"h-9 w-9",lg:"h-11 w-11"},shape:{circle:"rounded-full",rounded:"rounded-lyra-sm"},color:{primary:"bg-lyra-bg-primary text-lyra-fg-on-primary",active:"bg-lyra-bg-active-subtle text-lyra-fg-active-strong",success:"bg-lyra-status-success-subtle text-lyra-status-success-strong",warning:"bg-lyra-status-warning-subtle text-lyra-status-warning-strong",critical:"bg-lyra-status-critical-subtle text-lyra-status-critical-strong",info:"bg-lyra-accent-purple-soft text-lyra-accent-purple-strong",neutral:"bg-lyra-bg-surface-container-subtle text-lyra-fg-secondary",surface:"bg-lyra-bg-surface-base border border-lyra-border-subtle text-lyra-fg-default",shell:"bg-lyra-bg-surface-shell text-lyra-fg-secondary",customer:"bg-lyra-accent-green-soft text-lyra-accent-green-strong"}},defaultVariants:{size:"md",shape:"circle",color:"shell"}}),X={xs:"select-none lyra-body-sm-emphasis",sm:"select-none lyra-label",md:"select-none lyra-label",lg:"select-none lyra-label"},Y={xs:"h-3.5 w-3.5",sm:"h-4 w-4",md:"h-4 w-4",lg:"h-5 w-5"};function s({initials:a,icon:o=P,size:d="md",shape:_="circle",color:H="shell",className:L,...O}){const m=O["aria-label"];return e.jsx("span",{className:F(Q({size:d,shape:_,color:H}),L),...m?{role:"img","aria-label":m}:{"aria-hidden":!0},children:a?e.jsx("span",{className:X[d],children:a}):e.jsx(o,{className:Y[d],strokeWidth:1.5,"aria-hidden":"true"})})}s.__docgenInfo={description:"A person/contact avatar — initials when identity is known, a generic\nfallback glyph otherwise. Every avatar-shaped chip already hand-built\nacross this app (`VoiceCallControls`'s customer chip, `ContactOverview`'s\nidentity card, `InteractionNavItem`'s collapsed-tile avatar, and\nagent-next-gen-v3's own record-header avatar) followed this exact same\n`initials ?? fallbackIcon` shape independently — this component is that\nshared shape pulled out once, not a new pattern. Existing call sites are\nleft as-is (no lyra-ui component changes without being asked); new call\nsites (starting with agent-next-gen-v3's record header) use this.",methods:[],displayName:"Avatar",props:{initials:{required:!1,tsType:{name:"string"},description:"Initials text (typically 1–2 characters, e.g. `initialsFor(name)`).\nTakes priority over `icon` when both are given — an identified person\ngets their initials, an unidentified/generic one gets the fallback\nglyph. Omit both to render an empty (color-only) circle/square."},icon:{required:!1,tsType:{name:"LucideIcon"},description:"Fallback glyph shown when `initials` is omitted or falsy — e.g. a\nplain `User` for an unmatched contact, `Headphones` for an\nagent-to-agent call. Defaults to lucide's `User` so a caller with no\nreal identity yet (and no explicit icon) still gets a sensible\ngeneric-contact look rather than an empty circle.",defaultValue:{value:"User",computed:!0}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "rounded"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"rounded"'}]},description:"`circle` (the default, matching the call-controls/contact-overview\navatar chips already in this app) or `rounded` (the small square\ncorners `InteractionNavItem`'s own collapsed-tile avatar uses).",defaultValue:{value:'"circle"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "primary"
| "active"
| "success"
| "warning"
| "critical"
| "info"
| "neutral"
| "surface"
| "shell"
/**
 * The "customer" chat-bubble accent (\`bg-lyra-accent-green-soft\`/
 * \`text-lyra-accent-green-strong\`) — \`InteractionTranscript\`'s own
 * customer-side message avatar and "customer is typing" indicator
 * (agent-next-gen-transcript.tsx) both already used this exact pair
 * hand-rolled; distinct from \`success\` (\`status-success-*\`, a
 * completion/positive-outcome color, not a person's identity color).
 */
| "customer"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"active"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"critical"'},{name:"literal",value:'"info"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"surface"'},{name:"literal",value:'"shell"'},{name:"literal",value:'"customer"'}]},description:"One of this library's own `Icon`-style background tokens.",defaultValue:{value:'"shell"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:`Accessible name. Omit for a purely decorative avatar sitting next to
visible name text elsewhere (the common case — matches every existing
avatar chip in this app, all of which are \`aria-hidden\`); pass one
only when this avatar is the sole way to identify who/what it stands
for.`}}};const ie={title:"Custom Primitives/Avatar",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{initials:{control:"text"},size:{control:"select",options:["xs","sm","md","lg"]},shape:{control:"select",options:["circle","rounded"]},color:{control:"select",options:["primary","active","success","warning","critical","info","neutral","surface","shell","customer"]}},args:{initials:"AB",size:"md",shape:"circle",color:"primary"}},r={},l={name:"Initials vs. fallback icon",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{initials:"NC",color:"primary"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:'Known — "Nathan Cole"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:"shell"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Unknown — generic User"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:K,color:"active"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Agent call"})]})]})},i={render:()=>e.jsx("div",{className:"flex items-end gap-6",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{initials:"AB",color:"primary",size:a}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:a})]},a))})},t={render:()=>e.jsx("div",{className:"flex items-center gap-6",children:["circle","rounded"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{initials:"AB",color:"primary",shape:a}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:a})]},a))})},c={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6 p-4",children:[["primary","Primary"],["active","Active"],["success","Success"],["warning","Warning"],["critical","Critical"],["info","Info"],["neutral","Neutral"],["surface","Surface"],["shell","Shell"],["customer","Customer"]].map(([a,o])=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{initials:"AB",color:a}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:o})]},a))})},n={name:"Real-world usage",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{initials:"NC",color:"primary",size:"md",shape:"circle"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Nathan Cole"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Voice call / record header"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{initials:"MW",color:"warning",size:"sm",shape:"rounded"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Marcus Webb"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Collapsed left-nav tile (on hold)"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{initials:"NC",color:"customer",size:"xs"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:'"Customer is typing…"'}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"InteractionTranscript's typing indicator"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{icon:J,size:"xs",className:"bg-[#6149C1] text-white"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Cognigy AI Agent"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Marcus Webb chat bubble — one-off hex color via className"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{icon:G,color:"critical",size:"md",shape:"circle"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Notification"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Any glyph works, not just User/Headphones"})]})]})]})};var p,y,x,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:`The default, fully-controlled story — use the Controls panel to try
every size/shape/color/initials-vs-icon combination.`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var f,g,v,b,N;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Initials vs. fallback icon",
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar initials="NC" color="primary" />
        <span className="lyra-body-sm text-lyra-fg-secondary">Known — "Nathan Cole"</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar color="shell" />
        <span className="lyra-body-sm text-lyra-fg-secondary">Unknown — generic User</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar icon={Headphones} color="active" />
        <span className="lyra-body-sm text-lyra-fg-secondary">Agent call</span>
      </div>
    </div>
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"A known identity gets its initials (`initialsFor(name)`); an\nunidentified/generic one falls back to a plain glyph (`User` by\ndefault). This is the split every hand-built avatar chip in\nagent-next-gen-v3 already follows — `Avatar` is that shape as one\nreusable component.",...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.description}}};var w,j,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {(["xs", "sm", "md", "lg"] as AvatarSize[]).map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" size={size} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
        </div>)}
    </div>
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var C,k,I,S,z;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {(["circle", "rounded"] as AvatarShape[]).map(shape => <div key={shape} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" shape={shape} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{shape}</span>
        </div>)}
    </div>
}`,...(I=(k=t.parameters)==null?void 0:k.docs)==null?void 0:I.source},description:{story:"`circle` — the call-controls/contact-overview/record-header avatar\nchips already in this app. `rounded` — `InteractionNavItem`'s own\ncollapsed left-nav tile avatar (a small square, not a circle).",...(z=(S=t.parameters)==null?void 0:S.docs)==null?void 0:z.description}}};var T,V,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-4">
      {([["primary", "Primary"], ["active", "Active"], ["success", "Success"], ["warning", "Warning"], ["critical", "Critical"], ["info", "Info"], ["neutral", "Neutral"], ["surface", "Surface"], ["shell", "Shell"], ["customer", "Customer"]] as [AvatarColor, string][]).map(([color, label]) => <div key={color} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color={color} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{label}</span>
        </div>)}
    </div>
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var U,q,M,W,R;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Real-world usage",
  render: () => <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-3">
        <Avatar initials="NC" color="primary" size="md" shape="circle" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Nathan Cole</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Voice call / record header</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar initials="MW" color="warning" size="sm" shape="rounded" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Marcus Webb</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Collapsed left-nav tile (on hold)</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar initials="NC" color="customer" size="xs" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">"Customer is typing…"</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">InteractionTranscript's typing indicator</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar icon={Bot} size="xs" className="bg-[#6149C1] text-white" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Cognigy AI Agent</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Marcus Webb chat bubble — one-off hex color via className</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar icon={Bell} color="critical" size="md" shape="circle" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Notification</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Any glyph works, not just User/Headphones</span>
        </div>
      </div>
    </div>
}`,...(M=(q=n.parameters)==null?void 0:q.docs)==null?void 0:M.source},description:{story:"Real call sites this component matches the look of — no visual change\nto any of them, just the shared shape:\n- `VoiceCallControls`'s customer chip (purple circle, `md`)\n- agent-next-gen-v3's record-header avatar (purple circle, `md`)\n- `InteractionNavItem`'s collapsed-tile avatar (rounded square, `sm`,\n  per-severity tone)",...(R=(W=n.parameters)==null?void 0:W.docs)==null?void 0:R.description}}};const ce=["Playground","InitialsVsFallbackIcon","Sizes","Shapes","Colors","RealWorldUsage"];export{c as Colors,l as InitialsVsFallbackIcon,r as Playground,n as RealWorldUsage,t as Shapes,i as Sizes,ce as __namedExportsOrder,ie as default};
