import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./input-BgypaUyl.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-DM5nl_7y.js";import"./utils-BLSKlp9E.js";import"./label-DRpt0Xe7.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./createLucideIcon-DEcfmm_F.js";const z={title:"Atoms/Input",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"Default",args:{label:"Input Label",placeholder:"Text"}},l={name:"Filled",args:{label:"Input Label",defaultValue:"Text"}},t={name:"Disabled",args:{label:"Input Label",placeholder:"Text",disabled:!0}},n={name:"Readonly",args:{label:"Input Label",value:"Read-only value",readonly:!0}},s={name:"Error",args:{label:"Input Label",defaultValue:"Text",error:"Required"}},o={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[400px]",children:[e.jsx(a,{label:"Input Label",placeholder:"Text"}),e.jsx(a,{label:"Input Label",defaultValue:"Text"}),e.jsx(a,{label:"Input Label",disabled:!0,placeholder:"Text"}),e.jsx(a,{label:"Input Label",defaultValue:"Text",error:"Required"})]})};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Input Label",
    placeholder: "Text"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,i;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Filled",
  args: {
    label: "Input Label",
    defaultValue: "Text"
  }
}`,...(i=(m=l.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var b,x,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    label: "Input Label",
    placeholder: "Text",
    disabled: true
  }
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var f,g,L;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Readonly",
  args: {
    label: "Input Label",
    value: "Read-only value",
    readonly: true
  }
}`,...(L=(g=n.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var T,R,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Error",
  args: {
    label: "Input Label",
    defaultValue: "Text",
    error: "Required"
  }
}`,...(h=(R=s.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var y,S,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Input Label" placeholder="Text" />
      <Input label="Input Label" defaultValue="Text" />
      <Input label="Input Label" disabled placeholder="Text" />
      <Input label="Input Label" defaultValue="Text" error="Required" />
    </div>
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const B=["Default","Filled","Disabled","Readonly","Error","AllStates"];export{o as AllStates,r as Default,t as Disabled,s as Error,l as Filled,n as Readonly,B as __namedExportsOrder,z as default};
