import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as o}from"./separator-97dXnQFu.js";import{S as d,T as r,I as p}from"./Separator.shared-eXWxvjSH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";const v={title:"Custom Primitives/Separator/Variants",component:o,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={name:"Horizontal",render:()=>e.jsxs(d,{children:[e.jsx(r,{children:"Section one"}),e.jsx(o,{className:"my-4"}),e.jsx(r,{children:"Section two"})]})},a={name:"Vertical",render:()=>e.jsxs(p,{children:[e.jsx(r,{children:"Item one"}),e.jsx(o,{orientation:"vertical"}),e.jsx(r,{children:"Item two"}),e.jsx(o,{orientation:"vertical"}),e.jsx(r,{children:"Item three"})]})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Horizontal",
  render: () => <StackedFrame>
      <Text>Section one</Text>
      <Separator className="my-4" />
      <Text>Section two</Text>
    </StackedFrame>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Vertical",
  render: () => <InlineRow>
      <Text>Item one</Text>
      <Separator orientation="vertical" />
      <Text>Item two</Text>
      <Separator orientation="vertical" />
      <Text>Item three</Text>
    </InlineRow>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const V=["Horizontal","Vertical"];export{t as Horizontal,a as Vertical,V as __namedExportsOrder,v as default};
