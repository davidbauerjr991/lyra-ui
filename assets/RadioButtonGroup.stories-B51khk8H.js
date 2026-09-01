import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-CXOcBcs0.js";import{R as a}from"./radio-button-group-D2WN6WHM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-C6_pXXD0.js";import"./utils-BLSKlp9E.js";import"./radio-DU5uc1z_.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./index-ZkoUpr8J.js";import"./index-CoT6TaLL.js";import"./label-DTtDlf5k.js";import"./tooltip-Dp368zAN.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";const ue={title:"Custom Primitives/Radio Button Group",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o=[{value:"option1",label:"Radio label"},{value:"option2",label:"Radio label"},{value:"option3",label:"Radio label"}],n={name:"Basic Radio Button Group",render:()=>e.jsx(a,{label:"Input Label",name:"basic",options:o,defaultValue:"option1"})},t={name:"Fully Disabled Group",render:()=>e.jsx(a,{label:"Input Label",name:"fully-disabled",options:o,defaultValue:"option1",disabled:!0})},l={name:"Selectively Disabled Items",render:()=>e.jsx(a,{label:"Input Label",name:"selective",options:[{value:"option1",label:"Radio label"},{value:"option2",label:"Radio label (disabled)",disabled:!0},{value:"option3",label:"Radio label"},{value:"option4",label:"Radio label (disabled)",disabled:!0}],defaultValue:"option1"})},r={name:"Vertical Radio Button",render:()=>e.jsx(a,{label:"Input Label",name:"vertical",options:o,orientation:"vertical",defaultValue:"option1"})},s={name:"Horizontal Radio Button",render:()=>e.jsx(a,{label:"Input Label",name:"horizontal",options:o,orientation:"horizontal",defaultValue:"option1"})},i={name:"With Error Message",render:()=>{const[b,_]=k.useState("");return e.jsx(a,{label:"Input Label",name:"with-error",options:o,value:b,onValueChange:_,error:b?void 0:"Please select an option"})}},p={name:"Horizontal Responsive",render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{label:"Input Label",name:"responsive",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],orientation:"horizontal",defaultValue:"option1",className:"[&_.flex-row]:flex-wrap"})})},u={name:"Readonly Group",render:()=>e.jsx(a,{label:"Input Label",name:"readonly",options:o,defaultValue:"option2",readonly:!0,labelHelpText:"This selection cannot be changed."})},d={name:"Required Group",render:()=>e.jsx(a,{label:"Input Label",name:"required",options:o,required:!0})},m={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{label:"Default",name:"s-default",options:o}),e.jsx(a,{label:"Selected",name:"s-selected",options:o,defaultValue:"option2"}),e.jsx(a,{label:"Required",name:"s-required",options:o,required:!0}),e.jsx(a,{label:"Readonly",name:"s-readonly",options:o,defaultValue:"option1",readonly:!0,labelHelpText:"Cannot be changed."}),e.jsx(a,{label:"Disabled",name:"s-disabled",options:o,defaultValue:"option1",disabled:!0}),e.jsx(a,{label:"Error",name:"s-error",options:o,error:"Please select an option"})]})};var c,R,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Basic Radio Button Group",
  render: () => <RadioButtonGroup label="Input Label" name="basic" options={baseOptions} defaultValue="option1" />
}`,...(v=(R=n.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var f,x,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Fully Disabled Group",
  render: () => <RadioButtonGroup label="Input Label" name="fully-disabled" options={baseOptions} defaultValue="option1" disabled />
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var G,V,y;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Selectively Disabled Items",
  render: () => <RadioButtonGroup label="Input Label" name="selective" options={[{
    value: "option1",
    label: "Radio label"
  }, {
    value: "option2",
    label: "Radio label (disabled)",
    disabled: true
  }, {
    value: "option3",
    label: "Radio label"
  }, {
    value: "option4",
    label: "Radio label (disabled)",
    disabled: true
  }]} defaultValue="option1" />
}`,...(y=(V=l.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};var g,h,O;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Vertical Radio Button",
  render: () => <RadioButtonGroup label="Input Label" name="vertical" options={baseOptions} orientation="vertical" defaultValue="option1" />
}`,...(O=(h=r.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var I,S,j;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Horizontal Radio Button",
  render: () => <RadioButtonGroup label="Input Label" name="horizontal" options={baseOptions} orientation="horizontal" defaultValue="option1" />
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,q,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "With Error Message",
  render: () => {
    const [value, setValue] = useState("");
    return <RadioButtonGroup label="Input Label" name="with-error" options={baseOptions} value={value} onValueChange={setValue} error={!value ? "Please select an option" : undefined} />;
  }
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,H,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Horizontal Responsive",
  render: () => <div className="max-w-sm">
      <RadioButtonGroup label="Input Label" name="responsive" options={[{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }, {
      value: "option4",
      label: "Option 4"
    }]} orientation="horizontal" defaultValue="option1" className="[&_.flex-row]:flex-wrap" />
    </div>
}`,...(E=(H=p.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var w,N,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Readonly Group",
  render: () => <RadioButtonGroup label="Input Label" name="readonly" options={baseOptions} defaultValue="option2" readonly labelHelpText="This selection cannot be changed." />
}`,...(T=(N=u.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,P,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Required Group",
  render: () => <RadioButtonGroup label="Input Label" name="required" options={baseOptions} required />
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,M,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-8">
      <RadioButtonGroup label="Default" name="s-default" options={baseOptions} />
      <RadioButtonGroup label="Selected" name="s-selected" options={baseOptions} defaultValue="option2" />
      <RadioButtonGroup label="Required" name="s-required" options={baseOptions} required />
      <RadioButtonGroup label="Readonly" name="s-readonly" options={baseOptions} defaultValue="option1" readonly labelHelpText="Cannot be changed." />
      <RadioButtonGroup label="Disabled" name="s-disabled" options={baseOptions} defaultValue="option1" disabled />
      <RadioButtonGroup label="Error" name="s-error" options={baseOptions} error="Please select an option" />
    </div>
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const de=["BasicRadioButtonGroup","FullyDisabledGroup","SelectivelyDisabledItems","VerticalRadioButton","HorizontalRadioButton","WithErrorMessage","HorizontalResponsive","ReadonlyGroup","RequiredGroup","AllStates"];export{m as AllStates,n as BasicRadioButtonGroup,t as FullyDisabledGroup,s as HorizontalRadioButton,p as HorizontalResponsive,u as ReadonlyGroup,d as RequiredGroup,l as SelectivelyDisabledItems,r as VerticalRadioButton,i as WithErrorMessage,de as __namedExportsOrder,ue as default};
