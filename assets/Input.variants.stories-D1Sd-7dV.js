import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./input-CHxvM1hc.js";import{L as n}from"./label-amkU61wz.js";import{S}from"./separator-97dXnQFu.js";import{P as w}from"./Input.shared-CNhhhO-7.js";import{M as N}from"./mail-BgfsS5Lx.js";import{S as C}from"./search-CZxBQJsH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./pencil-IFm_bK0G.js";import"./settings-B3RqFsd1.js";import"./copy-CtBWyGKZ.js";const $={title:"Custom Primitives/Input/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[400px]",children:[e.jsx(a,{label:"Default",placeholder:"Text"}),e.jsx(a,{label:"Filled",defaultValue:"Text"}),e.jsx(a,{label:"Disabled",disabled:!0,placeholder:"Text"}),e.jsx(a,{label:"Read-only",readonly:!0,value:"Read-only value"}),e.jsx(a,{label:"Error",defaultValue:"Text",error:"Required"}),e.jsx(a,{label:"With icons",placeholder:"Search",startIcon:e.jsx(C,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5}),endIcon:e.jsx(N,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5})}),e.jsx(a,{label:"Small",size:"sm",placeholder:"Text"})]})},r={name:"Label Only",render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{label:"Input Label",supportingText:"Read-only value"})})},t={name:"Label With Buttons",render:()=>e.jsxs("div",{className:"flex flex-col gap-0 w-72",children:[e.jsx(n,{label:"Campaign State"}),e.jsx("div",{className:"flex items-center gap-0.5",children:e.jsx(w,{})})]})},s={name:"Label Horizontal With Separator",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(n,{label:"Agent Name"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:"Sarah Connor"})]}),e.jsx(S,{})]})},o={name:"Character Counter",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[400px]",children:[e.jsx(a,{label:"Display name",maxLength:20,showCount:!0,defaultValue:"Sarah"}),e.jsx(a,{label:"At the limit",maxLength:10,showCount:!0,defaultValue:"0123456789"}),e.jsx(a,{placeholder:"No label, with counter",maxLength:30,showCount:!0})]})};var i,m,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Default" placeholder="Text" />
      <Input label="Filled" defaultValue="Text" />
      <Input label="Disabled" disabled placeholder="Text" />
      <Input label="Read-only" readonly value="Read-only value" />
      <Input label="Error" defaultValue="Text" error="Required" />
      <Input label="With icons" placeholder="Search" startIcon={<Search className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />} endIcon={<Mail className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} />} />
      <Input label="Small" size="sm" placeholder="Text" />
    </div>
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Label Only",
  render: () => <div className="w-72">
      <Label label="Input Label" supportingText="Read-only value" />
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,h,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Label With Buttons",
  render: () => <div className="flex flex-col gap-0 w-72">
      <Label label="Campaign State" />
      <div className="flex items-center gap-0.5">
        <PlaceholderButtons />
      </div>
    </div>
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Label Horizontal With Separator",
  render: () => <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <Label label="Agent Name" />
        <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span>
      </div>
      <Separator />
    </div>
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var j,v,L;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Character Counter",
  render: () => <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Display name" maxLength={20} showCount defaultValue="Sarah" />
      <Input label="At the limit" maxLength={10} showCount defaultValue="0123456789" />
      <Input placeholder="No label, with counter" maxLength={30} showCount />
    </div>
}`,...(L=(v=o.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const ee=["AllVariants","LabelOnly","LabelWithButtons","LabelHorizontalWithSeparator","CharacterCounter"];export{l as AllVariants,o as CharacterCounter,s as LabelHorizontalWithSeparator,r as LabelOnly,t as LabelWithButtons,ee as __namedExportsOrder,$ as default};
