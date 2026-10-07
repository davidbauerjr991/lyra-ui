import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as a}from"./email-input-C32ZqlFJ.js";import{a as h,I as A,V as o}from"./EmailInput.shared-z_v0hjRl.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./mail-BgfsS5Lx.js";const W={title:"Custom Primitives/EmailInput/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{label:"Default",value:"",onChange:()=>{}}),e.jsx(a,{label:"Required",value:"",onChange:()=>{},required:!0}),e.jsx(a,{label:"Disabled",value:o,onChange:()=>{},disabled:!0}),e.jsx(a,{label:"Read Only",value:o,onChange:()=>{},readonly:!0}),e.jsx(a,{label:"Error",value:A,error:h,onChange:()=>{}})]})},l={name:"Valid value",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:o,onChange:()=>{}})})},n={name:"Invalid (with error)",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:A,error:h,onChange:()=>{}})})},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{label:"Small (32px)",value:"",onChange:()=>{},size:"sm"}),e.jsx(a,{label:"Medium (36px, default)",value:"",onChange:()=>{},size:"md"})]})};var i,t,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Default" value="" onChange={() => {}} />
      <EmailInput label="Required" value="" onChange={() => {}} required />
      <EmailInput label="Disabled" value={VALID_EMAIL} onChange={() => {}} disabled />
      <EmailInput label="Read Only" value={VALID_EMAIL} onChange={() => {}} readonly />
      <EmailInput label="Error" value={INVALID_EMAIL} error={INVALID_EMAIL_ERROR} onChange={() => {}} />
    </div>
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var d,u,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Valid value",
  render: () => <div className="w-80">
      <EmailInput label="Email Address" value={VALID_EMAIL} onChange={() => {}} />
    </div>
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,I,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Invalid (with error)",
  render: () => <div className="w-80">
      <EmailInput label="Email Address" value={INVALID_EMAIL} error={INVALID_EMAIL_ERROR} onChange={() => {}} />
    </div>
}`,...(v=(I=n.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var E,x,g;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Small (32px)" value="" onChange={() => {}} size="sm" />
      <EmailInput label="Medium (36px, default)" value="" onChange={() => {}} size="md" />
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const k=["States","WithValue","Invalid","Sizes"];export{n as Invalid,s as Sizes,r as States,l as WithValue,k as __namedExportsOrder,W as default};
