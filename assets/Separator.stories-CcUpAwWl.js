import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./separator-CVEAaEyG.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";const g={title:"Custom Primitives/Separator",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},e={name:"Horizontal",render:()=>a.jsxs("div",{className:"w-96 rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5",children:[a.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Section one"}),a.jsx(t,{className:"my-4"}),a.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Section two"})]})},r={name:"Vertical",render:()=>a.jsxs("div",{className:"flex h-6 items-center gap-3",children:[a.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Item one"}),a.jsx(t,{orientation:"vertical"}),a.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Item two"}),a.jsx(t,{orientation:"vertical"}),a.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Item three"})]})};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Horizontal",
  render: () => <div className="w-96 rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5">
      <span className="lyra-body-md text-lyra-fg-default">Section one</span>
      <Separator className="my-4" />
      <span className="lyra-body-md text-lyra-fg-default">Section two</span>
    </div>
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Vertical",
  render: () => <div className="flex h-6 items-center gap-3">
      <span className="lyra-body-md text-lyra-fg-default">Item one</span>
      <Separator orientation="vertical" />
      <span className="lyra-body-md text-lyra-fg-default">Item two</span>
      <Separator orientation="vertical" />
      <span className="lyra-body-md text-lyra-fg-default">Item three</span>
    </div>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["Horizontal","Vertical"];export{e as Horizontal,r as Vertical,b as __namedExportsOrder,g as default};
