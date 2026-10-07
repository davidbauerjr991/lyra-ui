import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as o}from"./radio-button-group-DL29POWk.js";import{B as a,H as S,F as f,D as v,E as x}from"./RadioButtonGroup.shared-xY-lVT3a.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./radio-sgkaDL_k.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-ufxNB_-2.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-DDAUwIz-.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const k={title:"Custom Primitives/Radio Button Group/Variants",component:o,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"Horizontal Responsive",render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(o,{label:"Input Label",name:"responsive",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],orientation:"horizontal",defaultValue:"option1",className:"[&_.flex-row]:flex-wrap"})})},t={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(o,{label:"Default",name:"s-default",options:a}),e.jsx(o,{label:"Selected",name:"s-selected",options:a,defaultValue:"option2"}),e.jsx(o,{label:"Required",name:"s-required",options:a,required:!0}),e.jsx(o,{label:"Read-only",name:"s-readonly",options:a,defaultValue:"option1",readonly:!0,labelHelpText:S}),e.jsx(o,{label:"Disabled",name:"s-disabled",options:a,defaultValue:"option1",disabled:!0}),e.jsx(o,{label:"Selectively disabled options",name:"s-selective",options:f.map(r=>({...r,disabled:v.includes(r.value)})),defaultValue:"option1"}),e.jsx(o,{label:"Error",name:"s-error",options:a,error:x})]})},n={name:"Keyboard",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Tab into a group, then press ←/→/↑/↓, Home or End."}),e.jsx(o,{label:"Horizontal",name:"kb-h",orientation:"horizontal",options:a,defaultValue:a[0].value}),e.jsx(o,{label:"Vertical",name:"kb-v",options:a,defaultValue:a[0].value})]})};var s,i,p;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(i=l.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-8">
      <RadioButtonGroup label="Default" name="s-default" options={BASE_OPTIONS} />
      <RadioButtonGroup label="Selected" name="s-selected" options={BASE_OPTIONS} defaultValue="option2" />
      <RadioButtonGroup label="Required" name="s-required" options={BASE_OPTIONS} required />
      <RadioButtonGroup label="Read-only" name="s-readonly" options={BASE_OPTIONS} defaultValue="option1" readonly labelHelpText={HELP_TEXT} />
      <RadioButtonGroup label="Disabled" name="s-disabled" options={BASE_OPTIONS} defaultValue="option1" disabled />
      <RadioButtonGroup label="Selectively disabled options" name="s-selective" options={FOUR_OPTIONS.map(o => ({
      ...o,
      disabled: DISABLED_OPTION_VALUES.includes(o.value)
    }))} defaultValue="option1" />
      <RadioButtonGroup label="Error" name="s-error" options={BASE_OPTIONS} error={ERROR_MESSAGE} />
    </div>
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,b,O;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Keyboard",
  render: () => <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab into a group, then press ←/→/↑/↓, Home or End.</p>
      <RadioButtonGroup label="Horizontal" name="kb-h" orientation="horizontal" options={BASE_OPTIONS} defaultValue={BASE_OPTIONS[0].value} />
      <RadioButtonGroup label="Vertical" name="kb-v" options={BASE_OPTIONS} defaultValue={BASE_OPTIONS[0].value} />
    </div>
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const K=["HorizontalResponsive","AllStates","Keyboard"];export{t as AllStates,l as HorizontalResponsive,n as Keyboard,K as __namedExportsOrder,k as default};
