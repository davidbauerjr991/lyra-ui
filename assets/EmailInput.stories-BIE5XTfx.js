import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-CXOcBcs0.js";import{E as a}from"./email-input-OnhXPb2V.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-C6_pXXD0.js";import"./utils-BLSKlp9E.js";import"./label-KUce3kYB.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./tooltip-C4O8ztA7.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./mail-CGsQAUqz.js";const k={title:"Custom Primitives/EmailInput",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}}},r={name:"Default",args:{size:"md"},render:E=>{const[b,f]=C.useState("");return e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:b,onChange:f,size:E.size})})}},l={name:"Valid value",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:"dave@example.com",onChange:()=>{}})})},s={name:"Invalid (with error)",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(a,{label:"Email Address",value:"notanemail",error:"Enter a valid email address (e.g. name@example.com)",onChange:()=>{}})})},n={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{label:"Default",value:"",onChange:()=>{}}),e.jsx(a,{label:"Required",value:"",onChange:()=>{},required:!0}),e.jsx(a,{label:"Disabled",value:"dave@example.com",onChange:()=>{},disabled:!0}),e.jsx(a,{label:"Read Only",value:"dave@example.com",onChange:()=>{},readonly:!0})]})};var t,o,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "md"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <div className="w-80">
        <EmailInput label="Email Address" value={value} onChange={setValue} size={args.size} />
      </div>;
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var d,i,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Valid value",
  render: () => <div className="w-80">
      <EmailInput label="Email Address" value="dave@example.com" onChange={() => {}} />
    </div>
}`,...(u=(i=l.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,p,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Invalid (with error)",
  render: () => <div className="w-80">
      <EmailInput label="Email Address" value="notanemail" error="Enter a valid email address (e.g. name@example.com)" onChange={() => {}} />
    </div>
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,x,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <EmailInput label="Default" value="" onChange={() => {}} />
      <EmailInput label="Required" value="" onChange={() => {}} required />
      <EmailInput label="Disabled" value="dave@example.com" onChange={() => {}} disabled />
      <EmailInput label="Read Only" value="dave@example.com" onChange={() => {}} readonly />
    </div>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const P=["Default","WithValue","Invalid","States"];export{r as Default,s as Invalid,n as States,l as WithValue,P as __namedExportsOrder,k as default};
