import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DhMLlvMY.js";import{N as r}from"./number-field-BLpGx-3v.js";import{N as w,R as p}from"./NumberField.shared-IxX_a8t3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";const K={title:"Custom Primitives/Number Field/Variants",component:r,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},l={name:"States",render:()=>a.jsxs("div",{className:"flex flex-col gap-4 w-48",children:[a.jsx(r,{label:"Default",defaultValue:42}),a.jsx(r,{label:"Required",defaultValue:42,required:!0}),a.jsx(r,{label:"Disabled",defaultValue:42,disabled:!0}),a.jsx(r,{label:"Readonly",defaultValue:42,readonly:!0}),a.jsx(r,{label:"Error",defaultValue:-1,min:0,error:w})]})},n={name:"With Min / Max",render:()=>{const e=p["1-10"],[t,s]=d.useState(e.start);return a.jsx("div",{className:"w-40",children:a.jsx(r,{label:e.label,value:t,min:e.min,max:e.max,onChange:s})})}},m={name:"Wrapping (0–59)",render:()=>{const e=p["0-59-wrap"],[t,s]=d.useState(e.start);return a.jsx("div",{className:"w-40",children:a.jsx(r,{label:e.label,value:t,min:e.min,max:e.max,wrap:!0,padWidth:e.padWidth,onChange:s})})}},i={name:"Custom Step",render:()=>{const e=p["0-100-step-5"],[t,s]=d.useState(e.start);return a.jsx("div",{className:"w-40",children:a.jsx(r,{label:e.label,value:t,min:e.min,max:e.max,step:e.step,onChange:s})})}},o={name:"Sizes",render:()=>a.jsxs("div",{className:"flex flex-col gap-4 w-48",children:[a.jsx(r,{label:"Small (32px)",defaultValue:42,size:"sm"}),a.jsx(r,{label:"Medium (36px, default)",defaultValue:42,size:"md"})]})};var u,c,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-48">
      <NumberField label="Default" defaultValue={42} />
      <NumberField label="Required" defaultValue={42} required />
      <NumberField label="Disabled" defaultValue={42} disabled />
      <NumberField label="Readonly" defaultValue={42} readonly />
      <NumberField label="Error" defaultValue={-1} min={0} error={NEGATIVE_ERROR} />
    </div>
}`,...(x=(c=l.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var b,S,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With Min / Max",
  render: () => {
    const p = RANGE_PRESETS["1-10"];
    const [v, setV] = useState(p.start);
    return <div className="w-40">
        <NumberField label={p.label} value={v} min={p.min} max={p.max} onChange={setV} />
      </div>;
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,N,V;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Wrapping (0–59)",
  render: () => {
    const p = RANGE_PRESETS["0-59-wrap"];
    const [v, setV] = useState(p.start);
    return <div className="w-40">
        <NumberField label={p.label} value={v} min={p.min} max={p.max} wrap padWidth={p.padWidth} onChange={setV} />
      </div>;
  }
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var h,E,R;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Custom Step",
  render: () => {
    const p = RANGE_PRESETS["0-100-step-5"];
    const [v, setV] = useState(p.start);
    return <div className="w-40">
        <NumberField label={p.label} value={v} min={p.min} max={p.max} step={p.step} onChange={setV} />
      </div>;
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var g,j,W;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-4 w-48">
      <NumberField label="Small (32px)" defaultValue={42} size="sm" />
      <NumberField label="Medium (36px, default)" defaultValue={42} size="md" />
    </div>
}`,...(W=(j=o.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const L=["AllStates","WithMinMax","WithWrap","WithStep","Sizes"];export{l as AllStates,o as Sizes,n as WithMinMax,i as WithStep,m as WithWrap,L as __namedExportsOrder,K as default};
