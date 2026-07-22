import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-CXOcBcs0.js";import{E as a}from"./email-input-BsAC1BDt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-Jj0G9Pna.js";import"./utils-BLSKlp9E.js";import"./label-nFez4jEO.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./mail-CGsQAUqz.js";const k={title:"Custom Primitives/EmailInput",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"Default",render:()=>{const[E,b]=f.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:E,onChange:b})})}},l={name:"Valid value",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:"dave@example.com",onChange:()=>{}})})},n={name:"Invalid (with error)",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:"notanemail",error:"Enter a valid email address (e.g. name@example.com)",onChange:()=>{}})})},s={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{label:"Default",value:"",onChange:()=>{}}),e.jsx(a,{label:"Required",value:"",onChange:()=>{},required:!0}),e.jsx(a,{label:"Disabled",value:"dave@example.com",onChange:()=>{},disabled:!0}),e.jsx(a,{label:"Read Only",value:"dave@example.com",onChange:()=>{},readonly:!0})]})};var t,o,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [value, setValue] = useState("");
    return <div className="w-80">
        <EmailInput label="Email Address" value={value} onChange={setValue} />
      </div>;
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,i,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Valid value",
  render: () => <div className="w-80">
      <EmailInput label="Email Address" value="dave@example.com" onChange={() => {}} />
    </div>
}`,...(u=(i=l.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,p,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Invalid (with error)",
  render: () => <div className="w-80">
      <EmailInput label="Email Address" value="notanemail" error="Enter a valid email address (e.g. name@example.com)" onChange={() => {}} />
    </div>
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,g,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Default" value="" onChange={() => {}} />
      <EmailInput label="Required" value="" onChange={() => {}} required />
      <EmailInput label="Disabled" value="dave@example.com" onChange={() => {}} disabled />
      <EmailInput label="Read Only" value="dave@example.com" onChange={() => {}} readonly />
    </div>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const P=["Default","WithValue","Invalid","States"];export{r as Default,n as Invalid,s as States,l as WithValue,P as __namedExportsOrder,k as default};
