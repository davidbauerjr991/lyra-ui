import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-CXOcBcs0.js";import{S as a}from"./select-CzSY58Al.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./error-icon-DM5nl_7y.js";import"./utils-BLSKlp9E.js";import"./checkbox-BbegBx1f.js";import"./index-DNfP5j1O.js";import"./tooltip-DsDWII6n.js";import"./index-CoT6TaLL.js";import"./label-DRpt0Xe7.js";import"./createLucideIcon-DEcfmm_F.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";import"./x-N8aIqrq2.js";const de={title:"Atoms/Select",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t=[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"},{value:"opt4",label:"Option 4"},{value:"opt5",label:"Option 5"},{value:"opt6",label:"Option 6"}],v=Array.from({length:20},(s,l)=>({value:`item-${l+1}`,label:`Item label ${l+1}`})),r={name:"Default",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:t})})},n={name:"With Placeholder",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",placeholder:"Choose an option...",options:t})})},o={name:"Disabled",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:t,disabled:!0})})},p={name:"Error",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:t,error:"Required"})})},c={name:"Searchable",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:v,searchable:!0})})},i={name:"Multi-Select",render:()=>{const[s,l]=x.useState(["item-1","item-2","item-3"]);return e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:v,multiple:!0,searchable:!0,showSelectAll:!0,values:s,onValuesChange:l})})}},m={name:"Max Selection",render:()=>{const[s,l]=x.useState([]),J=[{value:"yellow",label:"Yellow"},{value:"blue",label:"Blue"},{value:"white",label:"White"},{value:"selected-white",label:"Selected White"},{value:"red",label:"Red"},{value:"magenta",label:"Magenta"},{value:"cyan",label:"Cyan"},{value:"dark-red",label:"Dark Red"},{value:"green",label:"Green"},{value:"orange",label:"Orange"}];return e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Color",options:J,multiple:!0,searchable:!0,maxSelection:4,values:s,onValuesChange:l})})}},u={name:"Multi-Select (Empty)",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:v,multiple:!0,searchable:!0,showSelectAll:!0})})},d={name:"Controlled",render:()=>{const[s,l]=x.useState("opt2");return e.jsxs("div",{className:"max-w-[320px] flex flex-col gap-4",children:[e.jsx(a,{label:"Input Label",options:t,value:s,onValueChange:l}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Selected: ",e.jsx("span",{className:"text-lyra-fg-default",children:s})]})]})}},b={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[320px]",children:[e.jsx(a,{label:"Input Label",placeholder:"Select...",options:t}),e.jsx(a,{label:"Input Label",options:t,disabled:!0}),e.jsx(a,{label:"Input Label",options:t,error:"Required"})]})};var S,h,g;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} />
    </div>
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,y,j;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "With Placeholder",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" placeholder="Choose an option..." options={sampleOptions} />
    </div>
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var O,f,N;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} disabled />
    </div>
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var I,L,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Error",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var V,M,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Searchable",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={manyOptions} searchable />
    </div>
}`,...(E=(M=c.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var A,D,R;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Multi-Select",
  render: () => {
    const [vals, setVals] = useState<string[]>(["item-1", "item-2", "item-3"]);
    return <div className="max-w-[320px]">
        <Select label="Input Label" options={manyOptions} multiple searchable showSelectAll values={vals} onValuesChange={setVals} />
      </div>;
  }
}`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,k,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Max Selection",
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const colorOptions: SelectOption[] = [{
      value: "yellow",
      label: "Yellow"
    }, {
      value: "blue",
      label: "Blue"
    }, {
      value: "white",
      label: "White"
    }, {
      value: "selected-white",
      label: "Selected White"
    }, {
      value: "red",
      label: "Red"
    }, {
      value: "magenta",
      label: "Magenta"
    }, {
      value: "cyan",
      label: "Cyan"
    }, {
      value: "dark-red",
      label: "Dark Red"
    }, {
      value: "green",
      label: "Green"
    }, {
      value: "orange",
      label: "Orange"
    }];
    return <div className="max-w-[320px]">
        <Select label="Color" options={colorOptions} multiple searchable maxSelection={4} values={values} onValuesChange={setValues} />
      </div>;
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var P,_,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Multi-Select (Empty)",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={manyOptions} multiple searchable showSelectAll />
    </div>
}`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,Y,$;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Controlled",
  render: () => {
    const [val, setVal] = useState("opt2");
    return <div className="max-w-[320px] flex flex-col gap-4">
        <Select label="Input Label" options={sampleOptions} value={val} onValueChange={setVal} />
        <p className="lyra-body-sm text-lyra-fg-secondary">
          Selected: <span className="text-lyra-fg-default">{val}</span>
        </p>
      </div>;
  }
}`,...($=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,F,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-6 max-w-[320px]">
      <Select label="Input Label" placeholder="Select..." options={sampleOptions} />
      <Select label="Input Label" options={sampleOptions} disabled />
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
}`,...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const be=["Default","WithPlaceholder","Disabled","ErrorState","Searchable","MultiSelect","MaxSelectionSelect","MultiSelectEmpty","Controlled","AllStates"];export{b as AllStates,d as Controlled,r as Default,o as Disabled,p as ErrorState,m as MaxSelectionSelect,i as MultiSelect,u as MultiSelectEmpty,c as Searchable,n as WithPlaceholder,be as __namedExportsOrder,de as default};
