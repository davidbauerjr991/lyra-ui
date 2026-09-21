import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DhMLlvMY.js";import{C as y,P as r}from"./password-input-CG_ujWqo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-3Mvvhvj2.js";import"./index-0SMGJ9Xv.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./label-DV0nvecx.js";import"./tooltip-B7WaxDQZ.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./eye-ChmIsCN2.js";import"./check-Dr3vGcdY.js";import"./x-CzxgOx-T.js";const J={title:"Headless Primitives/PasswordInput",tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={name:"Default",argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}},args:{size:"md"},render:a=>{const[s,q]=S.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Password",value:s,onChange:q,size:a.size})})}},o={name:"With requirements tooltip",render:()=>{const[a,s]=S.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"New password",value:a,onChange:s,showRequirements:!0,required:!0})})}},t={name:"Error",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(r,{label:"Password",value:"short",onChange:()=>{},error:"Password does not meet requirements"})})},l={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{label:"Default",value:"",onChange:()=>{}}),e.jsx(r,{label:"With value",value:"mypassword123",onChange:()=>{}}),e.jsx(r,{label:"Required",value:"",onChange:()=>{},required:!0}),e.jsx(r,{label:"Disabled",value:"hidden",onChange:()=>{},disabled:!0}),e.jsx(r,{label:"Read only",value:"readonly-pass",onChange:()=>{},readonly:!0}),e.jsx(r,{label:"Error",value:"bad",onChange:()=>{},error:"Password does not meet requirements"})]})},d={name:"Change Password",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(y,{onSubmit:({current:a,next:s})=>alert(`Current: ${a}
New: ${s}`)})})};var u,i,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Default",
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: {
      control: "select",
      options: ["sm", "md"],
      name: "Size"
    }
  },
  args: {
    size: "md"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="w-80">
        <PasswordInput label="Password" value={value} onChange={setValue} size={args.size} />
      </div>;
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With requirements tooltip",
  render: () => {
    const [value, setValue] = useState("");
    return <div className="w-80">
        <PasswordInput label="New password" value={value} onChange={setValue} showRequirements required />
      </div>;
  }
}`,...(h=(c=o.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var w,v,g;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Error",
  render: () => <div className="w-80">
      <PasswordInput label="Password" value="short" onChange={() => {}} error="Password does not meet requirements" />
    </div>
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,b,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <PasswordInput label="Default" value="" onChange={() => {}} />
      <PasswordInput label="With value" value="mypassword123" onChange={() => {}} />
      <PasswordInput label="Required" value="" onChange={() => {}} required />
      <PasswordInput label="Disabled" value="hidden" onChange={() => {}} disabled />
      <PasswordInput label="Read only" value="readonly-pass" onChange={() => {}} readonly />
      <PasswordInput label="Error" value="bad" onChange={() => {}} error="Password does not meet requirements" />
    </div>
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var P,f,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Change Password",
  render: () => <div className="w-80">
      <ChangePassword onSubmit={({
      current,
      next
    }) => alert(\`Current: \${current}\\nNew: \${next}\`)} />
    </div>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const K=["Default","WithRequirements","WithError","States","ChangePasswordForm"];export{d as ChangePasswordForm,n as Default,l as States,t as WithError,o as WithRequirements,K as __namedExportsOrder,J as default};
