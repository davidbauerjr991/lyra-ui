import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DhMLlvMY.js";import{N as a}from"./number-field-C16FT3SE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-DV0nvecx.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";const B={title:"Custom Primitives/Number Field",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}}},s={args:{size:"md"},render:r=>{const[t,w]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Quantity",value:t,onChange:w,size:r.size})})}},n={name:"With Min / Max",render:()=>{const[r,t]=m.useState(5);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Rating (1–10)",value:r,min:1,max:10,onChange:t})})}},l={name:"Wrapping (0–59)",render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Minutes",value:r,min:0,max:59,wrap:!0,padWidth:2,onChange:t})})}},o={name:"Custom Step",render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Percentage",value:r,min:0,max:100,step:5,onChange:t})})}},i={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-48",children:[e.jsx(a,{label:"Default",defaultValue:42}),e.jsx(a,{label:"Disabled",defaultValue:42,disabled:!0}),e.jsx(a,{label:"Readonly",defaultValue:42,readonly:!0}),e.jsx(a,{label:"Error",defaultValue:-1,min:0,error:"Must be 0 or greater"})]})};var d,u,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: args => {
    const [v, setV] = useState(0);
    return <div className="w-40"><NumberField label="Quantity" value={v} onChange={setV} size={args.size} /></div>;
  }
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,v,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With Min / Max",
  render: () => {
    const [v, setV] = useState(5);
    return <div className="w-40">
        <NumberField label="Rating (1–10)" value={v} min={1} max={10} onChange={setV} />
      </div>;
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,g,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Wrapping (0–59)",
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40">
        <NumberField label="Minutes" value={v} min={0} max={59} wrap padWidth={2} onChange={setV} />
      </div>;
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,f,N;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Custom Step",
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40">
        <NumberField label="Percentage" value={v} min={0} max={100} step={5} onChange={setV} />
      </div>;
  }
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var V,j,W;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-4 w-48">
      <NumberField label="Default" defaultValue={42} />
      <NumberField label="Disabled" defaultValue={42} disabled />
      <NumberField label="Readonly" defaultValue={42} readonly />
      <NumberField label="Error" defaultValue={-1} min={0} error="Must be 0 or greater" />
    </div>
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const G=["Default","WithMinMax","WithWrap","WithStep","AllStates"];export{i as AllStates,s as Default,n as WithMinMax,o as WithStep,l as WithWrap,G as __namedExportsOrder,B as default};
