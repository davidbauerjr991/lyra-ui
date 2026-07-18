import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as X}from"./index-CXOcBcs0.js";import{E as le}from"./error-icon-Jj0G9Pna.js";import{c as se}from"./utils-BLSKlp9E.js";import{R as ie,a as ue}from"./radio-Dyl65d9V.js";import{L as de}from"./label-C1mTHcP9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-C5pUL7te.js";import"./index-CoT6TaLL.js";import"./createLucideIcon-DEcfmm_F.js";const a=X.forwardRef(({label:t,labelHelpText:v,required:Y,readonly:f,disabled:R,error:y,options:Z,value:$,defaultValue:ee,onValueChange:ae,name:oe,orientation:te="vertical",className:ne},re)=>{const h=R||f;return e.jsxs("div",{ref:re,className:se("flex flex-col",ne),children:[t&&e.jsx(de,{label:t,labelHelpText:v,required:Y,disabled:R,readonly:f,className:"block mb-2"}),e.jsx(ie,{value:$,defaultValue:ee,onValueChange:f?void 0:ae,name:oe,disabled:h,orientation:te,children:Z.map(n=>e.jsx(ue,{value:n.value,label:n.label,disabled:h||n.disabled},n.value))}),y&&e.jsxs("div",{role:"alert",className:"flex items-center gap-1 mt-2",children:[e.jsx(le,{className:"h-3.5 w-3.5 flex-shrink-0","aria-hidden":"true"}),e.jsx("span",{className:"lyra-body-sm text-lyra-status-critical-strong",children:y})]})]})});a.displayName="RadioButtonGroup";a.__docgenInfo={description:"",methods:[],displayName:"RadioButtonGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label displayed above the options"},labelHelpText:{required:!1,tsType:{name:"string"},description:"Help text shown in a tooltip on the group label"},required:{required:!1,tsType:{name:"boolean"},description:"Shows required asterisk on the group label"},readonly:{required:!1,tsType:{name:"boolean"},description:"Marks the group as read-only — visually muted, non-interactive"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the entire group"},error:{required:!1,tsType:{name:"string"},description:"Error message shown below the group"},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioButtonGroupOption"}],raw:"RadioButtonGroupOption[]"},description:"Radio options to render"},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value (uncontrolled)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the selection changes"},name:{required:!1,tsType:{name:"string"},description:"Shared name for the radio inputs"},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Layout direction",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};const je={title:"Custom Primitives/Radio Button Group",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o=[{value:"option1",label:"Radio label"},{value:"option2",label:"Radio label"},{value:"option3",label:"Radio label"}],r={name:"Basic Radio Button Group",render:()=>e.jsx(a,{label:"Input Label",name:"basic",options:o,defaultValue:"option1"})},l={name:"Fully Disabled Group",render:()=>e.jsx(a,{label:"Input Label",name:"fully-disabled",options:o,defaultValue:"option1",disabled:!0})},s={name:"Selectively Disabled Items",render:()=>e.jsx(a,{label:"Input Label",name:"selective",options:[{value:"option1",label:"Radio label"},{value:"option2",label:"Radio label (disabled)",disabled:!0},{value:"option3",label:"Radio label"},{value:"option4",label:"Radio label (disabled)",disabled:!0}],defaultValue:"option1"})},i={name:"Vertical Radio Button",render:()=>e.jsx(a,{label:"Input Label",name:"vertical",options:o,orientation:"vertical",defaultValue:"option1"})},u={name:"Horizontal Radio Button",render:()=>e.jsx(a,{label:"Input Label",name:"horizontal",options:o,orientation:"horizontal",defaultValue:"option1"})},d={name:"With Error Message",render:()=>{const[t,v]=X.useState("");return e.jsx(a,{label:"Input Label",name:"with-error",options:o,value:t,onValueChange:v,error:t?void 0:"Please select an option"})}},p={name:"Horizontal Responsive",render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{label:"Input Label",name:"responsive",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],orientation:"horizontal",defaultValue:"option1",className:"[&_.flex-row]:flex-wrap"})})},m={name:"Readonly Group",render:()=>e.jsx(a,{label:"Input Label",name:"readonly",options:o,defaultValue:"option2",readonly:!0,labelHelpText:"This selection cannot be changed."})},c={name:"Required Group",render:()=>e.jsx(a,{label:"Input Label",name:"required",options:o,required:!0})},b={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{label:"Default",name:"s-default",options:o}),e.jsx(a,{label:"Selected",name:"s-selected",options:o,defaultValue:"option2"}),e.jsx(a,{label:"Required",name:"s-required",options:o,required:!0}),e.jsx(a,{label:"Readonly",name:"s-readonly",options:o,defaultValue:"option1",readonly:!0,labelHelpText:"Cannot be changed."}),e.jsx(a,{label:"Disabled",name:"s-disabled",options:o,defaultValue:"option1",disabled:!0}),e.jsx(a,{label:"Error",name:"s-error",options:o,error:"Please select an option"})]})};var x,g,G;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Basic Radio Button Group",
  render: () => <RadioButtonGroup label="Input Label" name="basic" options={baseOptions} defaultValue="option1" />
}`,...(G=(g=r.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};var B,V,q;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Fully Disabled Group",
  render: () => <RadioButtonGroup label="Input Label" name="fully-disabled" options={baseOptions} defaultValue="option1" disabled />
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var j,I,O;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var S,L,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Vertical Radio Button",
  render: () => <RadioButtonGroup label="Input Label" name="vertical" options={baseOptions} orientation="vertical" defaultValue="option1" />
}`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var w,z,D;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Horizontal Radio Button",
  render: () => <RadioButtonGroup label="Input Label" name="horizontal" options={baseOptions} orientation="horizontal" defaultValue="option1" />
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var N,H,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "With Error Message",
  render: () => {
    const [value, setValue] = useState("");
    return <RadioButtonGroup label="Input Label" name="with-error" options={baseOptions} value={value} onValueChange={setValue} error={!value ? "Please select an option" : undefined} />;
  }
}`,...(E=(H=d.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var C,A,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(A=p.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var k,M,P;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Readonly Group",
  render: () => <RadioButtonGroup label="Input Label" name="readonly" options={baseOptions} defaultValue="option2" readonly labelHelpText="This selection cannot be changed." />
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var F,W,J;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Required Group",
  render: () => <RadioButtonGroup label="Input Label" name="required" options={baseOptions} required />
}`,...(J=(W=c.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-8">
      <RadioButtonGroup label="Default" name="s-default" options={baseOptions} />
      <RadioButtonGroup label="Selected" name="s-selected" options={baseOptions} defaultValue="option2" />
      <RadioButtonGroup label="Required" name="s-required" options={baseOptions} required />
      <RadioButtonGroup label="Readonly" name="s-readonly" options={baseOptions} defaultValue="option1" readonly labelHelpText="Cannot be changed." />
      <RadioButtonGroup label="Disabled" name="s-disabled" options={baseOptions} defaultValue="option1" disabled />
      <RadioButtonGroup label="Error" name="s-error" options={baseOptions} error="Please select an option" />
    </div>
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ie=["BasicRadioButtonGroup","FullyDisabledGroup","SelectivelyDisabledItems","VerticalRadioButton","HorizontalRadioButton","WithErrorMessage","HorizontalResponsive","ReadonlyGroup","RequiredGroup","AllStates"];export{b as AllStates,r as BasicRadioButtonGroup,l as FullyDisabledGroup,u as HorizontalRadioButton,p as HorizontalResponsive,m as ReadonlyGroup,c as RequiredGroup,s as SelectivelyDisabledItems,i as VerticalRadioButton,d as WithErrorMessage,Ie as __namedExportsOrder,je as default};
