import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./status-badge-D0LQdY0j.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const O={title:"Atoms/StatusBadge",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["default","info","success","warning","critical","neutral"]},size:{control:"select",options:["sm","md","lg"]},count:{control:{type:"number"}},max:{control:{type:"number"}},dot:{control:"boolean"}}},n={args:{count:5,variant:"default",size:"md"}},r={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Number badges"}),e.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:["default","info","success","warning","critical","neutral"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{variant:s,count:7}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary capitalize",children:s})]},s))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Dot badges"}),e.jsx("div",{className:"flex items-center gap-4 flex-wrap",children:["default","info","success","warning","critical","neutral"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{variant:s,dot:!0,size:"md"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary capitalize",children:s})]},s))})]})]})},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Number — sm / md / lg"}),e.jsx("div",{className:"flex items-end gap-4",children:["sm","md","lg"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{size:s,count:12}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:s})]},s))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Dot — sm / md / lg"}),e.jsx("div",{className:"flex items-end gap-4",children:["sm","md","lg"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{variant:"critical",dot:!0,size:s}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:s})]},s))})]})]})},l={name:"Count overflow (max cap)",render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{count:5}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"5"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{count:99}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"99"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{count:100}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"100 → 99+"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(a,{count:999,max:999}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"custom max 999"})]})]})},c={name:"Positioned on element",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-10 h-10 rounded-lyra-sm bg-lyra-bg-surface-base border border-lyra-border-subtle flex items-center justify-center",children:e.jsx("svg",{className:"w-5 h-5 text-lyra-fg-default",fill:"none",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})})}),e.jsx(a,{count:3,variant:"critical",size:"sm",className:"absolute -top-1.5 -right-1.5"})]}),e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center lyra-label text-lyra-fg-active-strong",children:"JD"}),e.jsx(a,{dot:!0,variant:"success",size:"sm",className:"absolute bottom-0 right-0 ring-2 ring-lyra-bg-surface-base"})]}),e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-lyra-bg-surface-container-subtle flex items-center justify-center lyra-label text-lyra-fg-secondary",children:"AB"}),e.jsx(a,{dot:!0,variant:"neutral",size:"sm",className:"absolute bottom-0 right-0 ring-2 ring-lyra-bg-surface-base"})]})]})},i={name:"Text / custom content",render:()=>e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx(a,{variant:"success",children:"New"}),e.jsx(a,{variant:"warning",children:"Beta"}),e.jsx(a,{variant:"info",children:"Pro"}),e.jsx(a,{variant:"critical",children:"!"}),e.jsx(a,{variant:"neutral",size:"lg",children:"Draft"})]})};var d,o,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    count: 5,
    variant: "default",
    size: "md"
  }
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var x,g,u;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6">
      {/* Number badges */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Number badges</p>
        <div className="flex items-center gap-3 flex-wrap">
          {(["default", "info", "success", "warning", "critical", "neutral"] as const).map(v => <div key={v} className="flex flex-col items-center gap-1">
              <StatusBadge variant={v} count={7} />
              <span className="lyra-body-xs text-lyra-fg-secondary capitalize">{v}</span>
            </div>)}
        </div>
      </div>

      {/* Dot badges */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Dot badges</p>
        <div className="flex items-center gap-4 flex-wrap">
          {(["default", "info", "success", "warning", "critical", "neutral"] as const).map(v => <div key={v} className="flex flex-col items-center gap-1">
              <StatusBadge variant={v} dot size="md" />
              <span className="lyra-body-xs text-lyra-fg-secondary capitalize">{v}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,p,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Number — sm / md / lg</p>
        <div className="flex items-end gap-4">
          {(["sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col items-center gap-1">
              <StatusBadge size={s} count={12} />
              <span className="lyra-body-xs text-lyra-fg-secondary">{s}</span>
            </div>)}
        </div>
      </div>
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Dot — sm / md / lg</p>
        <div className="flex items-end gap-4">
          {(["sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col items-center gap-1">
              <StatusBadge variant="critical" dot size={s} />
              <span className="lyra-body-xs text-lyra-fg-secondary">{s}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var y,b,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Count overflow (max cap)",
  render: () => <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <StatusBadge count={5} />
        <span className="lyra-body-xs text-lyra-fg-secondary">5</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <StatusBadge count={99} />
        <span className="lyra-body-xs text-lyra-fg-secondary">99</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <StatusBadge count={100} />
        <span className="lyra-body-xs text-lyra-fg-secondary">100 → 99+</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <StatusBadge count={999} max={999} />
        <span className="lyra-body-xs text-lyra-fg-secondary">custom max 999</span>
      </div>
    </div>
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var j,h,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Positioned on element",
  render: () => <div className="flex items-center gap-8">
      {/* Bell with count */}
      <div className="relative inline-flex">
        <div className="w-10 h-10 rounded-lyra-sm bg-lyra-bg-surface-base border border-lyra-border-subtle flex items-center justify-center">
          <svg className="w-5 h-5 text-lyra-fg-default" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </div>
        <StatusBadge count={3} variant="critical" size="sm" className="absolute -top-1.5 -right-1.5" />
      </div>

      {/* Avatar with dot status */}
      <div className="relative inline-flex">
        <div className="w-10 h-10 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center lyra-label text-lyra-fg-active-strong">
          JD
        </div>
        <StatusBadge dot variant="success" size="sm" className="absolute bottom-0 right-0 ring-2 ring-lyra-bg-surface-base" />
      </div>

      {/* Avatar offline */}
      <div className="relative inline-flex">
        <div className="w-10 h-10 rounded-full bg-lyra-bg-surface-container-subtle flex items-center justify-center lyra-label text-lyra-fg-secondary">
          AB
        </div>
        <StatusBadge dot variant="neutral" size="sm" className="absolute bottom-0 right-0 ring-2 ring-lyra-bg-surface-base" />
      </div>
    </div>
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,B,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Text / custom content",
  render: () => <div className="flex items-center gap-3 flex-wrap">
      <StatusBadge variant="success">New</StatusBadge>
      <StatusBadge variant="warning">Beta</StatusBadge>
      <StatusBadge variant="info">Pro</StatusBadge>
      <StatusBadge variant="critical">!</StatusBadge>
      <StatusBadge variant="neutral" size="lg">Draft</StatusBadge>
    </div>
}`,...(z=(B=i.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};const T=["Default","Variants","Sizes","Overflow","PositionedOnIcon","TextContent"];export{n as Default,l as Overflow,c as PositionedOnIcon,t as Sizes,i as TextContent,r as Variants,T as __namedExportsOrder,O as default};
