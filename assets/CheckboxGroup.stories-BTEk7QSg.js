import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-CXOcBcs0.js";import{E as le}from"./error-icon-Jj0G9Pna.js";import{c as S}from"./utils-BLSKlp9E.js";import{C as se}from"./checkbox-DtQgK1Hc.js";import{L as te}from"./label-C1mTHcP9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./tooltip-ughTrHl0.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./createLucideIcon-DEcfmm_F.js";import"./check-DrRFj5bn.js";const o=G.forwardRef(({label:l,labelHelpText:x,required:f,readonly:k,disabled:t,error:C,options:U,values:y,defaultValues:X,onChange:g,direction:Y="vertical",className:Z},ee)=>{const q=y!==void 0,[oe,ae]=G.useState(X??[]),n=q?y:oe,re=r=>{if(k||t)return;const s=n.includes(r)?n.filter(v=>v!==r):[...n,r];q||ae(s),g==null||g(s)};return e.jsxs("fieldset",{ref:ee,disabled:t,className:S("border-0 p-0 m-0 min-w-0",Z),children:[l&&e.jsx("legend",{className:"mb-2 float-none p-0 w-full",children:e.jsx(te,{label:l,labelHelpText:x,required:f,disabled:t,readonly:k})}),e.jsx("div",{className:S(Y==="horizontal"?"flex flex-wrap items-center gap-x-6 gap-y-2":"flex flex-col gap-2"),children:U.map(r=>{const s=n.includes(r.value),v=t||r.disabled;return e.jsx(se,{id:`cbg-${r.value}`,label:r.label,checked:s,disabled:v,readonly:k,error:!!C&&!s,onCheckedChange:()=>re(r.value)},r.value)})}),C&&e.jsxs("div",{role:"alert",className:"flex items-center gap-1 mt-2",children:[e.jsx(le,{className:"h-3.5 w-3.5 flex-shrink-0","aria-hidden":"true"}),e.jsx("span",{className:"lyra-body-sm text-lyra-status-critical-strong",children:C})]})]})});o.displayName="CheckboxGroup";o.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label displayed above the options"},labelHelpText:{required:!1,tsType:{name:"string"},description:"Help text shown in a tooltip on the group label"},required:{required:!1,tsType:{name:"boolean"},description:"Shows required asterisk on the group label"},readonly:{required:!1,tsType:{name:"boolean"},description:"Makes all options non-interactive (preserves current values)"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the entire group"},error:{required:!1,tsType:{name:"string"},description:"Error message shown below the group"},options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxGroupOption"}],raw:"CheckboxGroupOption[]"},description:"Options to render"},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled selected values"},defaultValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected values (uncontrolled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Called when the selection changes"},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Layout direction of the options",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};const ye={title:"Custom Primitives/Checkbox Group",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a=[{value:"option-1",label:"Checkbox label"},{value:"option-2",label:"Checkbox label"},{value:"option-3",label:"Checkbox label"}],i={name:"Group Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a})},p={name:"Group Selected Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a,defaultValues:["option-1","option-3"]})},u={name:"Group Readonly Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a,defaultValues:["option-1"],readonly:!0,labelHelpText:"These values cannot be changed."})},c={name:"Group Disabled Checkbox",render:()=>e.jsx(o,{label:"Input Label",options:a,defaultValues:["option-2"],disabled:!0})},d={name:"Group Required Checkbox",render:()=>{const[l,x]=G.useState([]),f=l.length===0;return e.jsx(o,{label:"Input Label",options:a,values:l,onChange:x,required:!0,error:f?"At least one option is required":void 0})}},b={name:"Checkbox Group With Options",render:()=>e.jsx(o,{label:"Desktop Types",labelHelpText:"Select all desktop types that apply to this role.",required:!0,options:[{value:"back-office",label:"Back Office"},{value:"knowledge-worker",label:"Knowledge Worker"},{value:"bpo",label:"BPO"},{value:"collections",label:"Collections"},{value:"retail",label:"Retail Agents"}],defaultValues:["back-office"]})},m={name:"Horizontal Group",render:()=>e.jsx(o,{label:"Notifications",options:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push"}],direction:"horizontal",defaultValues:["email"]})},h={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(o,{label:"Default",options:a}),e.jsx(o,{label:"With Selection",options:a,defaultValues:["option-1","option-2"]}),e.jsx(o,{label:"Required",options:a,required:!0}),e.jsx(o,{label:"Readonly",options:a,defaultValues:["option-2"],readonly:!0,labelHelpText:"These values cannot be changed."}),e.jsx(o,{label:"Disabled",options:a,defaultValues:["option-1"],disabled:!0}),e.jsx(o,{label:"Error",options:a,error:"At least one option is required"})]})};var w,O,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Group Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} />
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,V,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Group Selected Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} defaultValues={["option-1", "option-3"]} />
}`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var A,N,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Group Readonly Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} defaultValues={["option-1"]} readonly labelHelpText="These values cannot be changed." />
}`,...(D=(N=u.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,I,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Group Disabled Checkbox",
  render: () => <CheckboxGroup label="Input Label" options={baseOptions} defaultValues={["option-2"]} disabled />
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var H,z,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Group Required Checkbox",
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const showError = values.length === 0;
    return <CheckboxGroup label="Input Label" options={baseOptions} values={values} onChange={setValues} required error={showError ? "At least one option is required" : undefined} />;
  }
}`,...(W=(z=d.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var P,B,_;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var M,K,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(K=m.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var F,J,Q;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-8">
      <CheckboxGroup label="Default" options={baseOptions} />
      <CheckboxGroup label="With Selection" options={baseOptions} defaultValues={["option-1", "option-2"]} />
      <CheckboxGroup label="Required" options={baseOptions} required />
      <CheckboxGroup label="Readonly" options={baseOptions} defaultValues={["option-2"]} readonly labelHelpText="These values cannot be changed." />
      <CheckboxGroup label="Disabled" options={baseOptions} defaultValues={["option-1"]} disabled />
      <CheckboxGroup label="Error" options={baseOptions} error="At least one option is required" />
    </div>
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const qe=["GroupCheckbox","GroupSelectedCheckbox","GroupReadonlyCheckbox","GroupDisabledCheckbox","GroupRequiredCheckbox","CheckboxGroupWithOptions","HorizontalGroup","AllStates"];export{h as AllStates,b as CheckboxGroupWithOptions,i as GroupCheckbox,c as GroupDisabledCheckbox,u as GroupReadonlyCheckbox,d as GroupRequiredCheckbox,p as GroupSelectedCheckbox,m as HorizontalGroup,qe as __namedExportsOrder,ye as default};
