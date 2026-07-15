import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as t}from"./divider-DYVqOECW.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";const u={title:"Atoms/Divider",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},a={name:"Horizontal",render:()=>e.jsxs("div",{className:"w-96 rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Section one"}),e.jsx(t,{className:"my-4"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Section two"})]})},r={name:"Vertical",render:()=>e.jsxs("div",{className:"flex h-6 items-center gap-3",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Item one"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Item two"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Item three"})]})};var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Horizontal",
  render: () => <div className="w-96 rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5">
      <span className="lyra-body-md text-lyra-fg-default">Section one</span>
      <Divider className="my-4" />
      <span className="lyra-body-md text-lyra-fg-default">Section two</span>
    </div>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var o,d,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Vertical",
  render: () => <div className="flex h-6 items-center gap-3">
      <span className="lyra-body-md text-lyra-fg-default">Item one</span>
      <Divider orientation="vertical" />
      <span className="lyra-body-md text-lyra-fg-default">Item two</span>
      <Divider orientation="vertical" />
      <span className="lyra-body-md text-lyra-fg-default">Item three</span>
    </div>
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const x=["Horizontal","Vertical"];export{a as Horizontal,r as Vertical,x as __namedExportsOrder,u as default};
