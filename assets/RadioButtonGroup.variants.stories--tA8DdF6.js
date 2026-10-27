import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as a}from"./radio-button-group-D9H8MF78.js";import{B as o,H as R,F as E,D as B,E as N}from"./RadioButtonGroup.shared-xY-lVT3a.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./radio-DpaXkgfs.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-DiXulCDa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-DDAUwIz-.js";import"./index-Bbt6qZUg.js";import"./label-FhkANc9R.js";import"./tooltip-BnyLRSaS.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const C={title:"Custom Primitives/Radio Button Group/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"Horizontal Responsive",render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{label:"Input Label",name:"responsive",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],orientation:"horizontal",defaultValue:"option1",className:"[&_.flex-row]:flex-wrap"})})},n={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(a,{label:"Default",name:"s-default",options:o}),e.jsx(a,{label:"Selected",name:"s-selected",options:o,defaultValue:"option2"}),e.jsx(a,{label:"Required",name:"s-required",options:o,required:!0}),e.jsx(a,{label:"Read-only",name:"s-readonly",options:o,defaultValue:"option1",readonly:!0,labelHelpText:R}),e.jsx(a,{label:"Disabled",name:"s-disabled",options:o,defaultValue:"option1",disabled:!0}),e.jsx(a,{label:"Selectively disabled options",name:"s-selective",options:E.map(r=>({...r,disabled:B.includes(r.value)})),defaultValue:"option1"}),e.jsx(a,{label:"Error",name:"s-error",options:o,error:N})]})},t={name:"Keyboard",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Tab into a group, then press ←/→/↑/↓, Home or End."}),e.jsx(a,{label:"Horizontal",name:"kb-h",orientation:"horizontal",options:o,defaultValue:o[0].value}),e.jsx(a,{label:"Vertical",name:"kb-v",options:o,defaultValue:o[0].value})]})},s={name:"Disabled With Reason",render:()=>e.jsx(a,{label:"Select Channel",name:"disabled-reason",options:[{value:"voice",label:"Voice",disabled:!0,disabledReason:"Go Available to call"},{value:"sms",label:"SMS"},{value:"email",label:"Email"}],defaultValue:"sms"})};var i,d,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var c,S,v;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Keyboard",
  render: () => <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab into a group, then press ←/→/↑/↓, Home or End.</p>
      <RadioButtonGroup label="Horizontal" name="kb-h" orientation="horizontal" options={BASE_OPTIONS} defaultValue={BASE_OPTIONS[0].value} />
      <RadioButtonGroup label="Vertical" name="kb-v" options={BASE_OPTIONS} defaultValue={BASE_OPTIONS[0].value} />
    </div>
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var O,f,x;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Disabled With Reason",
  render: () => <RadioButtonGroup label="Select Channel" name="disabled-reason" options={[{
    value: "voice",
    label: "Voice",
    disabled: true,
    disabledReason: "Go Available to call"
  }, {
    value: "sms",
    label: "SMS"
  }, {
    value: "email",
    label: "Email"
  }]} defaultValue="sms" />
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const F=["HorizontalResponsive","AllStates","Keyboard","DisabledWithReason"];export{n as AllStates,s as DisabledWithReason,l as HorizontalResponsive,t as Keyboard,F as __namedExportsOrder,C as default};
