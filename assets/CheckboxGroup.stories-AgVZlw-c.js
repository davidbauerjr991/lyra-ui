import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DhMLlvMY.js";import{E as te}from"./error-icon-solid-eVlwMcX6.js";import{c as O}from"./utils-BLSKlp9E.js";import{C as ne}from"./checkbox-oHaKtVcR.js";import{L as ie}from"./label-DV0nvecx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-3Mvvhvj2.js";import"./minus-CVnigrff.js";import"./createLucideIcon-aII_sYFw.js";import"./check-Dr3vGcdY.js";import"./tooltip-B7WaxDQZ.js";import"./circle-help-DYnzmdO5.js";const o=f.forwardRef(({label:s,labelHelpText:k,required:g,readonly:v,disabled:t,error:n,options:Y,values:y,defaultValues:Z,onChange:C,direction:ee="vertical",className:oe},ae)=>{const q=y!==void 0,[re,se]=f.useState(Z??[]),i=q?y:re,S=f.useId(),w=`${S}-error`,le=r=>{if(v||t)return;const l=i.includes(r)?i.filter(G=>G!==r):[...i,r];q||se(l),C==null||C(l)};return e.jsxs("fieldset",{ref:ae,disabled:t,"aria-describedby":n?w:void 0,className:O("border-0 p-0 m-0 min-w-0",oe),children:[s&&e.jsx("legend",{className:"mb-2 float-none p-0 w-full",children:e.jsx(ie,{label:s,labelHelpText:k,required:g,disabled:t,readonly:v})}),e.jsx("div",{className:O(ee==="horizontal"?"flex flex-wrap items-center gap-x-6 gap-y-2":"flex flex-col gap-2"),children:Y.map(r=>{const l=i.includes(r.value),G=t||r.disabled;return e.jsx(ne,{id:`${S}-${r.value}`,label:r.label,checked:l,disabled:G,readonly:v,error:!!n&&!l,onCheckedChange:()=>le(r.value)},r.value)})}),n&&e.jsxs("div",{id:w,role:"alert",className:"flex items-center gap-1 mt-2",children:[e.jsx(te,{className:"h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong","aria-hidden":"true"}),e.jsx("span",{className:"lyra-body-sm text-lyra-status-critical-strong",children:n})]})]})});o.displayName="CheckboxGroup";o.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label displayed above the options"},labelHelpText:{required:!1,tsType:{name:"string"},description:"Help text shown in a tooltip on the group label"},required:{required:!1,tsType:{name:"boolean"},description:"Shows required asterisk on the group label"},readonly:{required:!1,tsType:{name:"boolean"},description:"Makes all options non-interactive (preserves current values)"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the entire group"},error:{required:!1,tsType:{name:"string"},description:"Error message shown below the group"},options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxGroupOption"}],raw:"CheckboxGroupOption[]"},description:"Options to render"},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled selected values"},defaultValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected values (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Called when the selection changes"},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Layout direction of the options",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};const Se={title:"Custom Primitives/Checkbox Group",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a=[{value:"option-1",label:"Checkbox label"},{value:"option-2",label:"Checkbox label"},{value:"option-3",label:"Checkbox label"}],p={name:"Group Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a})},u={name:"Group Selected Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a,defaultValues:["option-1","option-3"]})},c={name:"Group Readonly Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a,defaultValues:["option-1"],readonly:!0,labelHelpText:"These values cannot be changed."})},d={name:"Group Disabled Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a,defaultValues:["option-2"],disabled:!0})},b={name:"Group Required Checkbox",render:()=>{const[s,k]=f.useState([]),g=s.length===0;return e.jsx(o,{label:"Input Label",options:a,values:s,onChange:k,required:!0,error:g?"At least one option is required":void 0})}},m={name:"Checkbox Group With Options",render:()=>e.jsx(o,{label:"Desktop Types",labelHelpText:"Select all desktop types that apply to this role.",required:!0,options:[{value:"back-office",label:"Back Office"},{value:"knowledge-worker",label:"Knowledge Worker"},{value:"bpo",label:"BPO"},{value:"collections",label:"Collections"},{value:"retail",label:"Retail Agents"}],defaultValues:["back-office"]})},h={name:"Horizontal Group",render:()=>e.jsx(o,{label:"Notifications",options:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push"}],direction:"horizontal",defaultValues:["email"]})},x={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(o,{label:"Default",options:a}),e.jsx(o,{label:"With Selection",options:a,defaultValues:["option-1","option-2"]}),e.jsx(o,{label:"Required",options:a,required:!0}),e.jsx(o,{label:"Readonly",options:a,defaultValues:["option-2"],readonly:!0,labelHelpText:"These values cannot be changed."}),e.jsx(o,{label:"Disabled",options:a,defaultValues:["option-1"],disabled:!0}),e.jsx(o,{label:"Error",options:a,error:"At least one option is required"})]})};var T,j,V;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Group Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} />
}`,...(V=(j=p.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var I,R,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Group Selected Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} defaultValues={["option-1", "option-3"]} />
}`,...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var N,D,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Group Readonly Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} defaultValues={["option-1"]} readonly labelHelpText="These values cannot be changed." />
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,H,z;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Group Disabled Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} defaultValues={["option-2"]} disabled />
}`,...(z=(H=d.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var W,P,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Group Required Checkbox",
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const showError = values.length === 0;
    return <CheckboxGroup label="Input Label" options={baseOptions} values={values} onChange={setValues} required error={showError ? "At least one option is required" : undefined} />;
  }
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var _,M,$;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Checkbox Group With Options",
  render: () => <CheckboxGroup label="Desktop Types" labelHelpText="Select all desktop types that apply to this role." required options={[{
    value: "back-office",
    label: "Back Office"
  }, {
    value: "knowledge-worker",
    label: "Knowledge Worker"
  }, {
    value: "bpo",
    label: "BPO"
  }, {
    value: "collections",
    label: "Collections"
  }, {
    value: "retail",
    label: "Retail Agents"
  }]} defaultValues={["back-office"]} />
}`,...($=(M=m.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var K,F,J;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Horizontal Group",
  render: () => <CheckboxGroup label="Notifications" options={[{
    value: "email",
    label: "Email"
  }, {
    value: "sms",
    label: "SMS"
  }, {
    value: "push",
    label: "Push"
  }]} direction="horizontal" defaultValues={["email"]} />
}`,...(J=(F=h.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-8">
      <CheckboxGroup label="Default" options={baseOptions} />
      <CheckboxGroup label="With Selection" options={baseOptions} defaultValues={["option-1", "option-2"]} />
      <CheckboxGroup label="Required" options={baseOptions} required />
      <CheckboxGroup label="Readonly" options={baseOptions} defaultValues={["option-2"]} readonly labelHelpText="These values cannot be changed." />
      <CheckboxGroup label="Disabled" options={baseOptions} defaultValues={["option-1"]} disabled />
      <CheckboxGroup label="Error" options={baseOptions} error="At least one option is required" />
    </div>
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const we=["GroupCheckbox","GroupSelectedCheckbox","GroupReadonlyCheckbox","GroupDisabledCheckbox","GroupRequiredCheckbox","CheckboxGroupWithOptions","HorizontalGroup","AllStates"];export{x as AllStates,m as CheckboxGroupWithOptions,p as GroupCheckbox,d as GroupDisabledCheckbox,c as GroupReadonlyCheckbox,b as GroupRequiredCheckbox,u as GroupSelectedCheckbox,h as HorizontalGroup,we as __namedExportsOrder,Se as default};
