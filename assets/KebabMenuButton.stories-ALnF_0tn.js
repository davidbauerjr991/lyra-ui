import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{K as s}from"./kebab-menu-button-BG6m3PIv.js";import{P as c}from"./pencil-DdhzNlrF.js";import{R as p}from"./refresh-cw-BqNuqggj.js";import{T as b}from"./trash-2-yAnBWR5t.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./menu-C3iBPI2b.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./ellipsis-vertical-CZvSBcNM.js";const m=[{id:"edit",label:"Edit",icon:e.jsx(c,{className:"h-4 w-4",strokeWidth:1.5})},{id:"refresh",label:"Refresh",icon:e.jsx(p,{className:"h-4 w-4",strokeWidth:1.5})},{id:"remove",label:"Remove",icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5})}],T={title:"Atoms/KebabMenuButton",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{items:{table:{disable:!0}}}},r={render:()=>e.jsxs("div",{className:"flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default mr-auto",children:"Card header"}),e.jsx(s,{items:m,ariaLabel:"More options"})]})},a={name:"AllVariants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Trigger"}),e.jsxs("div",{className:"flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default mr-auto",children:"Card header"}),e.jsx(s,{items:m,ariaLabel:"More options"})]})]}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Click the trigger above to open the dropdown — it renders via a portal to `document.body`, so it isn't clipped by this frame."})]})};var t,o,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72">
      <span className="lyra-body-md text-lyra-fg-default mr-auto">Card header</span>
      <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" />
    </div>
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "AllVariants",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Trigger</p>
        <div className="flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72">
          <span className="lyra-body-md text-lyra-fg-default mr-auto">Card header</span>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" />
        </div>
      </div>
      <p className="lyra-body-sm text-lyra-fg-secondary">Click the trigger above to open the dropdown — it renders via a portal to \`document.body\`, so it isn't clipped by this frame.</p>
    </div>
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const k=["Default","AllVariants"];export{a as AllVariants,r as Default,k as __namedExportsOrder,T as default};
