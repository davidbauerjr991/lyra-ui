import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DhMLlvMY.js";import{T as a,R as v,S as b}from"./TagsInput.shared-Ce8l_24A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./x-CzxgOx-T.js";const _={title:"Custom Primitives/Tags Input/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"States",render:()=>{const[s,t]=o.useState(["React","TypeScript"]);return e.jsxs("div",{className:"flex flex-col gap-6 max-w-sm",children:[e.jsx(a,{label:"Default",value:[],onChange:()=>{}}),e.jsx(a,{label:"With values",value:s,onChange:t}),e.jsx(a,{label:"Max 3 tags",value:["Tag 1","Tag 2"],onChange:()=>{},maxTags:3}),e.jsx(a,{label:"Readonly",value:["React","TypeScript"],readonly:!0}),e.jsx(a,{label:"Disabled",value:["React"],disabled:!0}),e.jsx(a,{label:"Error",value:[],onChange:()=>{},error:v,required:!0})]})}},n={name:"Max Tags",render:()=>{const[s,t]=o.useState(["Tag 1","Tag 2"]);return e.jsx("div",{className:"w-96",children:e.jsx(a,{label:"Labels (max 3)",value:s,onChange:t,maxTags:3})})}},l={name:"With Help Text",render:()=>{const[s,t]=o.useState(b);return e.jsx("div",{className:"w-96",children:e.jsx(a,{label:"Technologies",labelHelpText:"Press Enter or Tab to add.",value:s,onChange:t})})}};var g,u,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "States",
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript"]);
    return <div className="flex flex-col gap-6 max-w-sm">
        <TagsInput label="Default" value={[]} onChange={() => {}} />
        <TagsInput label="With values" value={tags} onChange={setTags} />
        <TagsInput label="Max 3 tags" value={["Tag 1", "Tag 2"]} onChange={() => {}} maxTags={3} />
        <TagsInput label="Readonly" value={["React", "TypeScript"]} readonly />
        <TagsInput label="Disabled" value={["React"]} disabled />
        <TagsInput label="Error" value={[]} onChange={() => {}} error={REQUIRED_ERROR} required />
      </div>;
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,i,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Max Tags",
  render: () => {
    const [tags, setTags] = useState(["Tag 1", "Tag 2"]);
    return <div className="w-96">
        <TagsInput label="Labels (max 3)" value={tags} onChange={setTags} maxTags={3} />
      </div>;
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,T,x;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With Help Text",
  render: () => {
    const [tags, setTags] = useState(SAMPLE_TAGS);
    return <div className="w-96">
        <TagsInput label="Technologies" labelHelpText="Press Enter or Tab to add." value={tags} onChange={setTags} />
      </div>;
  }
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const P=["AllStates","MaxTags","WithHelpText"];export{r as AllStates,n as MaxTags,l as WithHelpText,P as __namedExportsOrder,_ as default};
