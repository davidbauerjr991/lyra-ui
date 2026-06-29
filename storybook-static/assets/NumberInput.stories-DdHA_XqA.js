import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CXOcBcs0.js";import{N as a}from"./number-input-BbZdSiB1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-98nUxQ8o.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./createLucideIcon-DEcfmm_F.js";import"./error-icon-DM5nl_7y.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";const q={title:"Atoms/Number Input",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},n={render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Quantity",value:r,onChange:t})})}},s={name:"With Min / Max",render:()=>{const[r,t]=m.useState(5);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Rating (1–10)",value:r,min:1,max:10,onChange:t})})}},l={name:"Wrapping (0–59)",render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Minutes",value:r,min:0,max:59,wrap:!0,padWidth:2,onChange:t})})}},o={name:"Custom Step",render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Percentage",value:r,min:0,max:100,step:5,onChange:t})})}},u={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-48",children:[e.jsx(a,{label:"Default",defaultValue:42}),e.jsx(a,{label:"Disabled",defaultValue:42,disabled:!0}),e.jsx(a,{label:"Readonly",defaultValue:42,readonly:!0}),e.jsx(a,{label:"Error",defaultValue:-1,min:0,error:"Must be 0 or greater"})]})};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40"><NumberInput label="Quantity" value={v} onChange={setV} /></div>;
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,v,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With Min / Max",
  render: () => {
    const [v, setV] = useState(5);
    return <div className="w-40">
        <NumberInput label="Rating (1–10)" value={v} min={1} max={10} onChange={setV} />
      </div>;
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,g,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Wrapping (0–59)",
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40">
        <NumberInput label="Minutes" value={v} min={0} max={59} wrap padWidth={2} onChange={setV} />
      </div>;
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,N,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Custom Step",
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40">
        <NumberInput label="Percentage" value={v} min={0} max={100} step={5} onChange={setV} />
      </div>;
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,j,W;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-4 w-48">
      <NumberInput label="Default" defaultValue={42} />
      <NumberInput label="Disabled" defaultValue={42} disabled />
      <NumberInput label="Readonly" defaultValue={42} readonly />
      <NumberInput label="Error" defaultValue={-1} min={0} error="Must be 0 or greater" />
    </div>
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const z=["Default","WithMinMax","WithWrap","WithStep","AllStates"];export{u as AllStates,n as Default,s as WithMinMax,o as WithStep,l as WithWrap,z as __namedExportsOrder,q as default};
