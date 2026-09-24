import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DhMLlvMY.js";import{S as s,a as r}from"./slider-DqpGSUFb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pcZVUfq6.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-CylpBFcA.js";import"./index-Cjx2M-Ur.js";import"./utils-BLSKlp9E.js";import"./label-DV0nvecx.js";import"./tooltip-B7WaxDQZ.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const Y={title:"Headless Primitives/Slider",tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},m={name:"Single value",render:()=>{const[a,l]=n.useState(3);return e.jsxs("div",{className:"w-full max-w-xl px-4 py-6",children:[e.jsx(s,{label:"Slider Label",value:a,onChange:l,min:0,max:10,step:1}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-4",children:["Value: ",a]})]})}},i={name:"Range",render:()=>{const[a,l]=n.useState([2,6]);return e.jsxs("div",{className:"w-full max-w-xl px-4 py-6",children:[e.jsx(r,{label:"Slider Label",value:a,onChange:l,min:0,max:10,step:1}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-4",children:["Range: ",a[0]," – ",a[1]]})]})}},o={name:"Both variants",render:()=>{const[a,l]=n.useState(3),[t,x]=n.useState([2,6]);return e.jsxs("div",{className:"w-full max-w-xl px-4 flex flex-col gap-10",children:[e.jsx(s,{label:"Slider Label",value:a,onChange:l,min:0,max:10,step:1}),e.jsx(r,{label:"Slider Label",value:t,onChange:x,min:0,max:10,step:1})]})}},d={name:"States",render:()=>e.jsxs("div",{className:"w-full max-w-xl px-4 flex flex-col gap-10",children:[e.jsx(s,{label:"Default",value:4,onChange:()=>{},min:0,max:10}),e.jsx(s,{label:"No ticks",value:4,onChange:()=>{},min:0,max:10,showTicks:!1}),e.jsx(s,{label:"Disabled",value:4,onChange:()=>{},min:0,max:10,disabled:!0}),e.jsx(r,{label:"Range",value:[2,7],onChange:()=>{},min:0,max:10}),e.jsx(r,{label:"Range disabled",value:[2,7],onChange:()=>{},min:0,max:10,disabled:!0})]})},c={name:"Custom step (0.5)",render:()=>{const[a,l]=n.useState(2.5);return e.jsxs("div",{className:"w-full max-w-xl px-4 py-6",children:[e.jsx(s,{label:"Volume",value:a,onChange:l,min:0,max:5,step:.5}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-4",children:["Value: ",a]})]})}};function T(){const[a,l]=n.useState(4),[t,x]=n.useState([2,7]),[p,E]=n.useState(2.5);return e.jsxs("div",{className:"w-full max-w-xl px-4 flex flex-col gap-10",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Single value"}),e.jsx(s,{label:"Slider Label",value:a,onChange:l,min:0,max:10,step:1}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Value: ",a]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Range"}),e.jsx(r,{label:"Slider Label",value:t,onChange:x,min:0,max:10,step:1}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Range: ",t[0]," – ",t[1]]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Custom step (0.5)"}),e.jsx(s,{label:"Volume",value:p,onChange:E,min:0,max:5,step:.5}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Value: ",p]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Without tick marks"}),e.jsx(s,{label:"Slider Label",value:4,onChange:()=>{},min:0,max:10,showTicks:!1})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Disabled (single)"}),e.jsx(s,{label:"Slider Label",value:4,onChange:()=>{},min:0,max:10,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Disabled (range)"}),e.jsx(r,{label:"Slider Label",value:[2,7],onChange:()=>{},min:0,max:10,disabled:!0})]})]})}const u={name:"All Variants",render:()=>e.jsx(T,{})};var g,b,y;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Single value",
  render: () => {
    const [value, setValue] = useState(3);
    return <div className="w-full max-w-xl px-4 py-6">
        <Slider label="Slider Label" value={value} onChange={setValue} min={0} max={10} step={1} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Value: {value}</p>
      </div>;
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,v,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Range",
  render: () => {
    const [value, setValue] = useState<[number, number]>([2, 6]);
    return <div className="w-full max-w-xl px-4 py-6">
        <SliderRange label="Slider Label" value={value} onChange={setValue} min={0} max={10} step={1} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Range: {value[0]} – {value[1]}</p>
      </div>;
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,j,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Both variants",
  render: () => {
    const [single, setSingle] = useState(3);
    const [range, setRange] = useState<[number, number]>([2, 6]);
    return <div className="w-full max-w-xl px-4 flex flex-col gap-10">
        <Slider label="Slider Label" value={single} onChange={setSingle} min={0} max={10} step={1} />
        <SliderRange label="Slider Label" value={range} onChange={setRange} min={0} max={10} step={1} />
      </div>;
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var N,V,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="w-full max-w-xl px-4 flex flex-col gap-10">
      <Slider label="Default" value={4} onChange={() => {}} min={0} max={10} />
      <Slider label="No ticks" value={4} onChange={() => {}} min={0} max={10} showTicks={false} />
      <Slider label="Disabled" value={4} onChange={() => {}} min={0} max={10} disabled />
      <SliderRange label="Range" value={[2, 7]} onChange={() => {}} min={0} max={10} />
      <SliderRange label="Range disabled" value={[2, 7]} onChange={() => {}} min={0} max={10} disabled />
    </div>
}`,...(w=(V=d.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var R,L,k;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Custom step (0.5)",
  render: () => {
    const [value, setValue] = useState(2.5);
    return <div className="w-full max-w-xl px-4 py-6">
        <Slider label="Volume" value={value} onChange={setValue} min={0} max={5} step={0.5} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-4">Value: {value}</p>
      </div>;
  }
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var D,A,B;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <AllVariantsDemo />
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Z=["Single","Range","BothVariants","States","CustomStep","AllVariants"];export{u as AllVariants,o as BothVariants,c as CustomStep,i as Range,m as Single,d as States,Z as __namedExportsOrder,Y as default};
