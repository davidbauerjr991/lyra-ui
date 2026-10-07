import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./label-amkU61wz.js";import{I as a}from"./input-CHxvM1hc.js";import{S as i}from"./select-DJKQGHZg.js";import{H as o,S as y,a as g,r as f,t as v,s as T}from"./Label.shared-CBhIMW5e.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-BLVj2C8E.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";const de={title:"Headless Primitives/Label/Variants",component:l,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},r={name:"With Select",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(i,{label:"Desktop type",labelHelpText:"Choose the desktop layout for this role.",required:!0,placeholder:"Select a type...",options:v}),e.jsx(i,{label:"Status",disabled:!0,placeholder:"Select status...",options:T}),e.jsx(i,{label:"Region",readonly:!0,placeholder:"Select region...",options:f})]})},s={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-5 w-80",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Default",labelFor:"s-default"}),e.jsx(a,{id:"s-default",placeholder:"Default state"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"With help text",labelFor:"s-help",labelHelpText:o}),e.jsx(a,{id:"s-help",placeholder:"With help text"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required",labelFor:"s-required",required:!0}),e.jsx(a,{id:"s-required",placeholder:"Required field",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required with help",labelFor:"s-req-help",required:!0,labelHelpText:"This field is required and has additional context."}),e.jsx(a,{id:"s-req-help",placeholder:"Required with help",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"With supporting text",labelFor:"s-supporting",required:!0,labelHelpText:o,supportingText:y}),e.jsx(a,{id:"s-supporting",placeholder:"Enter value..."})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Disabled",labelFor:"s-disabled",required:!0,disabled:!0}),e.jsx(a,{id:"s-disabled",placeholder:"Disabled",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Readonly",labelFor:"s-readonly",required:!0,labelHelpText:"This value cannot be edited.",readonly:!0}),e.jsx(a,{id:"s-readonly",value:"Read-only value",readonly:!0})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{label:"Horizontal"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:g})]})]})},t={name:"Keyboard Help",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-72",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Press Tab to reach each help icon."}),e.jsx(a,{label:"Display name",labelHelpText:o,placeholder:"Enter value..."}),e.jsx(i,{label:"Region",labelHelpText:o,options:f})]})};var d,n,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "With Select",
  render: () => <div className="flex flex-col gap-4 w-72">
      <Select label="Desktop type" labelHelpText="Choose the desktop layout for this role." required placeholder="Select a type..." options={typeOptions} />
      <Select label="Status" disabled placeholder="Select status..." options={statusOptions} />
      <Select label="Region" readonly placeholder="Select region..." options={regionOptions} />
    </div>
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,u,x;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-5 w-80">
      {/* Default */}
      <div className="flex flex-col gap-1">
        <Label label="Default" labelFor="s-default" />
        <Input id="s-default" placeholder="Default state" />
      </div>

      {/* With help text */}
      <div className="flex flex-col gap-1">
        <Label label="With help text" labelFor="s-help" labelHelpText={HELP_TEXT} />
        <Input id="s-help" placeholder="With help text" />
      </div>

      {/* Required */}
      <div className="flex flex-col gap-1">
        <Label label="Required" labelFor="s-required" required />
        <Input id="s-required" placeholder="Required field" required />
      </div>

      {/* Required + help */}
      <div className="flex flex-col gap-1">
        <Label label="Required with help" labelFor="s-req-help" required labelHelpText="This field is required and has additional context." />
        <Input id="s-req-help" placeholder="Required with help" required />
      </div>

      {/* Supporting text */}
      <div className="flex flex-col gap-1">
        <Label label="With supporting text" labelFor="s-supporting" required labelHelpText={HELP_TEXT} supportingText={SUPPORTING_TEXT} />
        <Input id="s-supporting" placeholder="Enter value..." />
      </div>

      {/* Disabled */}
      <div className="flex flex-col gap-1">
        <Label label="Disabled" labelFor="s-disabled" required disabled />
        <Input id="s-disabled" placeholder="Disabled" disabled />
      </div>

      {/* Readonly */}
      <div className="flex flex-col gap-1">
        <Label label="Readonly" labelFor="s-readonly" required labelHelpText="This value cannot be edited." readonly />
        <Input id="s-readonly" value="Read-only value" readonly />
      </div>

      {/* Horizontal */}
      <div className="flex items-center justify-between">
        <Label label="Horizontal" />
        <span className="lyra-body-md text-lyra-fg-secondary">{HORIZONTAL_VALUE}</span>
      </div>
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,b,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Keyboard Help",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-col gap-6 w-72">
      <p className="lyra-body-sm text-lyra-fg-secondary">Press Tab to reach each help icon.</p>
      <Input label="Display name" labelHelpText={HELP_TEXT} placeholder="Enter value..." />
      <Select label="Region" labelHelpText={HELP_TEXT} options={regionOptions} />
    </div>
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const ne=["WithSelect","AllVariants","KeyboardHelp"];export{s as AllVariants,t as KeyboardHelp,r as WithSelect,ne as __namedExportsOrder,de as default};
