import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{S as r}from"./spinner-xIhFAlhc.js";import{B as y}from"./button-BLVj2C8E.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./badge-CJVmnMhy.js";const I={title:"Custom Primitives/Spinner/Variants",component:r,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function S(){const[s,u]=h.useState({1:!0,2:!0}),f=a=>u(t=>({...t,[a]:!t[a]}));return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{className:"flex gap-3",children:[1,2,3,4].map(a=>e.jsxs(y,{variant:s[a]?"default":"outline",size:"sm",onClick:()=>f(a),children:["Toggle ",a]},a))}),e.jsx("div",{className:"flex items-center gap-8 h-10",children:[1,2,3,4].map(a=>s[a]?e.jsx(r,{variant:"bar",size:"md",label:`Loading ${a}`},a):null)})]})}const n={name:"Multiple Spinner",render:()=>e.jsx(S,{})},i={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[["sm","md","lg"].map(s=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary w-6",children:s}),e.jsx(r,{variant:"bar",size:s}),e.jsx(r,{variant:"circle",size:s})]},s)),e.jsxs("div",{className:"flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-inverse w-6",children:"Inverse"}),e.jsx(r,{variant:"bar",color:"inverse",size:"md"}),e.jsx(r,{variant:"circle",color:"inverse",size:"md"})]})]})},l={name:"With Label",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{variant:"bar",size:"md",label:"Loading conversations",showLabel:!0}),e.jsx(r,{variant:"circle",size:"md",label:"Saving",showLabel:!0})]}),e.jsxs("div",{className:"flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse",children:[e.jsx(r,{variant:"bar",size:"md",color:"inverse",label:"Loading",showLabel:!0}),e.jsx(r,{variant:"circle",size:"md",color:"inverse",label:"Saving",showLabel:!0})]})]})};var o,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Multiple Spinner",
  render: () => <MultipleSpinnerDemo />
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-8">
          <span className="lyra-body-sm text-lyra-fg-secondary w-6">{size}</span>
          <Spinner variant="bar" size={size} />
          <Spinner variant="circle" size={size} />
        </div>)}
      <div className="flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
        <span className="lyra-body-sm text-lyra-fg-inverse w-6">Inverse</span>
        <Spinner variant="bar" color="inverse" size="md" />
        <Spinner variant="circle" color="inverse" size="md" />
      </div>
    </div>
}`,...(v=(p=i.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,g,b;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="flex flex-col gap-6">
      <div className="flex items-center gap-8">
        <Spinner variant="bar" size="md" label="Loading conversations" showLabel />
        <Spinner variant="circle" size="md" label="Saving" showLabel />
      </div>
      <div className="flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
        <Spinner variant="bar" size="md" color="inverse" label="Loading" showLabel />
        <Spinner variant="circle" size="md" color="inverse" label="Saving" showLabel />
      </div>
    </div>
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const _=["MultipleSpinner","AllVariants","WithLabel"];export{i as AllVariants,n as MultipleSpinner,l as WithLabel,_ as __namedExportsOrder,I as default};
