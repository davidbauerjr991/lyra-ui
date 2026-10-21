import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as a}from"./avatar-CJbM1faC.js";import{B as t}from"./badge-BpOJAIFg.js";import{A as O,a as P,b as E}from"./Avatar.shared-OjuAMTrE.js";import{H}from"./headphones-BPvLrNMv.js";import{B as M}from"./bot-DgIAlNMp.js";import{B as F}from"./bell-16x-NcfM.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";const se={title:"Custom Primitives/Avatar/Variants",component:a,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},r={name:"Initials vs. fallback icon",render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"NC",color:"primary"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:'Known — "Nathan Cole"'})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:"shell"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Unknown — generic User"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{icon:H,color:"active"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Agent call"})]})]})},c={render:()=>e.jsx("div",{className:"flex items-end gap-6",children:E.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"AB",color:"primary",size:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:s})]},s))})},l={render:()=>e.jsx("div",{className:"flex items-center gap-6",children:P.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"AB",color:"primary",shape:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:s})]},s))})},o={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6 p-4",children:O.map(([s,_])=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"AB",color:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:_})]},s))})},i={name:"Real-world usage",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{initials:"NC",color:"primary",size:"md",shape:"circle"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Nathan Cole"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Voice call / record header"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{initials:"MW",color:"warning",size:"sm",shape:"rounded"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Marcus Webb"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Collapsed left-nav tile (on hold)"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{initials:"NC",color:"customer",size:"xs"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:'"Customer is typing…"'}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"InteractionTranscript's typing indicator"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:M,size:"xs",className:"bg-[#6149C1] text-white"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Cognigy AI Agent"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Marcus Webb chat bubble — one-off hex color via className"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:F,color:"critical",size:"md",shape:"circle"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"Notification"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Any glyph works, not just User/Headphones"})]})]})]})},n={name:"With badge",render:()=>e.jsxs("div",{className:"flex items-end gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"NC",color:"primary",size:"lg",badgePosition:"bottom-right",badge:e.jsx(t,{shape:"circle",dot:!0,variant:"success",bordered:!0,size:"md"})}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Online dot"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"NC",color:"primary",size:"lg",badge:e.jsx(t,{shape:"circle",count:3,variant:"critical",bordered:!0,size:"md"})}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Unread count"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{initials:"NC",color:"active",size:"md",shape:"rounded",badge:e.jsx(t,{shape:"circle",count:120,variant:"info",fill:"subtle",bordered:!0,size:"md"})}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Rounded, 99+"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{icon:H,color:"shell",size:"xs",badgePosition:"bottom-right",badge:e.jsx(t,{shape:"circle",dot:!0,variant:"warning",bordered:!0,size:"sm"})}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"xs + sm dot"})]})]})};var d,m,p,x,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"A known identity gets its initials (`initialsFor(name)`); an\nunidentified/generic one falls back to a plain glyph (`User` by\ndefault). This is the split every hand-built avatar chip in\nagent-next-gen-v3 already follows — `Avatar` is that shape as one\nreusable component.",...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var f,g,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {AVATAR_SIZES.map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" size={size} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
        </div>)}
    </div>
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,N,b,u,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {AVATAR_SHAPES.map(shape => <div key={shape} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" shape={shape} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{shape}</span>
        </div>)}
    </div>
}`,...(b=(N=l.parameters)==null?void 0:N.docs)==null?void 0:b.source},description:{story:"`circle` — the call-controls/contact-overview/record-header avatar\nchips already in this app. `rounded` — `InteractionNavItem`'s own\ncollapsed left-nav tile avatar (a small square, not a circle).",...(j=(u=l.parameters)==null?void 0:u.docs)==null?void 0:j.description}}};var A,z,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-4">
      {AVATAR_COLORS.map(([color, label]) => <div key={color} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color={color} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{label}</span>
        </div>)}
    </div>
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var B,S,w,k,I;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Real call sites this component matches the look of — no visual change\nto any of them, just the shared shape:\n- `VoiceCallControls`'s customer chip (purple circle, `md`)\n- agent-next-gen-v3's record-header avatar (purple circle, `md`)\n- `InteractionNavItem`'s collapsed-tile avatar (rounded square, `sm`,\n  per-severity tone)",...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var R,V,W,U,T;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "With badge",
  render: () => <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <Avatar initials="NC" color="primary" size="lg" badgePosition="bottom-right" badge={<Badge shape="circle" dot variant="success" bordered size="md" />} />
        <span className="lyra-body-sm text-lyra-fg-secondary">Online dot</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar initials="NC" color="primary" size="lg" badge={<Badge shape="circle" count={3} variant="critical" bordered size="md" />} />
        <span className="lyra-body-sm text-lyra-fg-secondary">Unread count</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar initials="NC" color="active" size="md" shape="rounded" badge={<Badge shape="circle" count={120} variant="info" fill="subtle" bordered size="md" />} />
        <span className="lyra-body-sm text-lyra-fg-secondary">Rounded, 99+</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar icon={Headphones} color="shell" size="xs" badgePosition="bottom-right" badge={<Badge shape="circle" dot variant="warning" bordered size="sm" />} />
        <span className="lyra-body-sm text-lyra-fg-secondary">xs + sm dot</span>
      </div>
    </div>
}`,...(W=(V=n.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"`badge` takes a circle `Badge` and pins it to the avatar's corner: a status dot\n(bottom-right is the usual spot) or an unread count (top-right). Size the badge to\nthe avatar — `sm` on xs/sm, `md` on md/lg.",...(T=(U=n.parameters)==null?void 0:U.docs)==null?void 0:T.description}}};const re=["InitialsVsFallbackIcon","Sizes","Shapes","Colors","RealWorldUsage","WithBadge"];export{o as Colors,r as InitialsVsFallbackIcon,i as RealWorldUsage,l as Shapes,c as Sizes,n as WithBadge,re as __namedExportsOrder,se as default};
