import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CXOcBcs0.js";import{N as a}from"./number-field-1X01EDph.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-BSWV0633.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./error-icon-Jj0G9Pna.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";const B={title:"Custom Primitives/Number Field",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},s={render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Quantity",value:r,onChange:t})})}},n={name:"With Min / Max",render:()=>{const[r,t]=m.useState(5);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Rating (1–10)",value:r,min:1,max:10,onChange:t})})}},l={name:"Wrapping (0–59)",render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Minutes",value:r,min:0,max:59,wrap:!0,padWidth:2,onChange:t})})}},o={name:"Custom Step",render:()=>{const[r,t]=m.useState(0);return e.jsx("div",{className:"w-40",children:e.jsx(a,{label:"Percentage",value:r,min:0,max:100,step:5,onChange:t})})}},i={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-48",children:[e.jsx(a,{label:"Default",defaultValue:42}),e.jsx(a,{label:"Disabled",defaultValue:42,disabled:!0}),e.jsx(a,{label:"Readonly",defaultValue:42,readonly:!0}),e.jsx(a,{label:"Error",defaultValue:-1,min:0,error:"Must be 0 or greater"})]})};var u,d,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40"><NumberField label="Quantity" value={v} onChange={setV} /></div>;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,v,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,N,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Custom Step",
  render: () => {
    const [v, setV] = useState(0);
    return <div className="w-40">
        <NumberField label="Percentage" value={v} min={0} max={100} step={5} onChange={setV} />
      </div>;
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,j,W;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-4 w-48">
      <NumberField label="Default" defaultValue={42} />
      <NumberField label="Disabled" defaultValue={42} disabled />
      <NumberField label="Readonly" defaultValue={42} readonly />
      <NumberField label="Error" defaultValue={-1} min={0} error="Must be 0 or greater" />
    </div>
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const G=["Default","WithMinMax","WithWrap","WithStep","AllStates"];export{i as AllStates,s as Default,n as WithMinMax,o as WithStep,l as WithWrap,G as __namedExportsOrder,B as default};
