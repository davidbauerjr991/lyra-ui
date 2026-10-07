import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DhMLlvMY.js";import{P as a,C as g}from"./password-input-DIAmNtQe.js";import{S as b,R as C}from"./PasswordInput.shared-CMJ8Q64V.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DGBzHazk.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./eye-ChmIsCN2.js";import"./check-Dr3vGcdY.js";import"./x-CzxgOx-T.js";const L={title:"Headless Primitives/PasswordInput/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{label:"Default",value:"",onChange:()=>{}}),e.jsx(a,{label:"With value",value:b,onChange:()=>{}}),e.jsx(a,{label:"Required",value:"",onChange:()=>{},required:!0}),e.jsx(a,{label:"Disabled",value:"hidden",onChange:()=>{},disabled:!0}),e.jsx(a,{label:"Read only",value:"readonly-pass",onChange:()=>{},readonly:!0}),e.jsx(a,{label:"Error",value:"bad",onChange:()=>{},error:C})]})},s={name:"With requirements tooltip",render:()=>{const[t,o]=v.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"New password",value:t,onChange:o,showRequirements:!0,required:!0})})}},n={name:"Change Password",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(g,{onSubmit:({current:t,next:o})=>alert(`Current: ${t}
New: ${o}`)})})};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <PasswordInput label="Default" value="" onChange={() => {}} />
      <PasswordInput label="With value" value={SAMPLE_PASSWORD} onChange={() => {}} />
      <PasswordInput label="Required" value="" onChange={() => {}} required />
      <PasswordInput label="Disabled" value="hidden" onChange={() => {}} disabled />
      <PasswordInput label="Read only" value="readonly-pass" onChange={() => {}} readonly />
      <PasswordInput label="Error" value="bad" onChange={() => {}} error={REQUIREMENTS_ERROR} />
    </div>
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With requirements tooltip",
  render: () => {
    const [value, setValue] = useState("");
    return <div className="w-80">
        <PasswordInput label="New password" value={value} onChange={setValue} showRequirements required />
      </div>;
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,h,w;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Change Password",
  render: () => <div className="w-80">
      <ChangePassword onSubmit={({
      current,
      next
    }) => alert(\`Current: \${current}\\nNew: \${next}\`)} />
    </div>
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const Q=["States","WithRequirements","ChangePasswordForm"];export{n as ChangePasswordForm,r as States,s as WithRequirements,Q as __namedExportsOrder,L as default};
