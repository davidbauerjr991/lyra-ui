import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as a,c as R,B,A as V,a as T}from"./Avatar.shared-ChkrSizy.js";import{H as U}from"./headphones-BPvLrNMv.js";import{B as W}from"./bell-16x-NcfM.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";const Z={title:"Custom Primitives/Avatar/Variants",component:a,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},l={name:"Initials vs. fallback icon",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"NC",color:"primary"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:'Known — "Nathan Cole"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:"shell"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Unknown — generic User"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{icon:U,color:"active"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Agent call"})]})]})},c={render:()=>e.jsx("div",{className:"flex items-end gap-6",children:T.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"AB",color:"primary",size:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:s})]},s))})},r={render:()=>e.jsx("div",{className:"flex items-center gap-6",children:V.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"AB",color:"primary",shape:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:s})]},s))})},i={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6 p-4",children:R.map(([s,z])=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"AB",color:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:z})]},s))})},n={name:"Real-world usage",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{initials:"NC",color:"primary",size:"md",shape:"circle"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Nathan Cole"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Voice call / record header"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{initials:"MW",color:"warning",size:"sm",shape:"rounded"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Marcus Webb"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Collapsed left-nav tile (on hold)"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{initials:"NC",color:"customer",size:"xs"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:'"Customer is typing…"'}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"InteractionTranscript's typing indicator"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:B,size:"xs",className:"bg-[#6149C1] text-white"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Cognigy AI Agent"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Marcus Webb chat bubble — one-off hex color via className"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:W,color:"critical",size:"md",shape:"circle"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Notification"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Any glyph works, not just User/Headphones"})]})]})]})};var t,o,d,m,p;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(o=l.parameters)==null?void 0:o.docs)==null?void 0:d.source},description:{story:"A known identity gets its initials (`initialsFor(name)`); an\nunidentified/generic one falls back to a plain glyph (`User` by\ndefault). This is the split every hand-built avatar chip in\nagent-next-gen-v3 already follows — `Avatar` is that shape as one\nreusable component.",...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var x,y,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {AVATAR_SIZES.map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" size={size} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
        </div>)}
    </div>
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,h,v,N,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {AVATAR_SHAPES.map(shape => <div key={shape} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" shape={shape} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{shape}</span>
        </div>)}
    </div>
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"`circle` — the call-controls/contact-overview/record-header avatar\nchips already in this app. `rounded` — `InteractionNavItem`'s own\ncollapsed left-nav tile avatar (a small square, not a circle).",...(u=(N=r.parameters)==null?void 0:N.docs)==null?void 0:u.description}}};var b,j,A;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-4">
      {AVATAR_COLORS.map(([color, label]) => <div key={color} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color={color} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{label}</span>
        </div>)}
    </div>
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var C,S,w,I,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Real call sites this component matches the look of — no visual change\nto any of them, just the shared shape:\n- `VoiceCallControls`'s customer chip (purple circle, `md`)\n- agent-next-gen-v3's record-header avatar (purple circle, `md`)\n- `InteractionNavItem`'s collapsed-tile avatar (rounded square, `sm`,\n  per-severity tone)",...(k=(I=n.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};const D=["InitialsVsFallbackIcon","Sizes","Shapes","Colors","RealWorldUsage"];export{i as Colors,l as InitialsVsFallbackIcon,n as RealWorldUsage,r as Shapes,c as Sizes,D as __namedExportsOrder,Z as default};
