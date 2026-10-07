import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as o,b as a,a as x,R as f,d as h}from"./CheckboxGroup.shared-C2nEb0D5.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./checkbox-CfX6-3Wq.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-DGBzHazk.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";const q={title:"Custom Primitives/Checkbox Group/Variants",component:o,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={name:"With Options",render:()=>e.jsx(o,{label:"Desktop Types",labelHelpText:"Select all desktop types that apply to this role.",required:!0,options:h,defaultValues:["back-office"]})},s={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(o,{label:"Default",options:a}),e.jsx(o,{label:"With Selection",options:a,defaultValues:["option-1","option-2"]}),e.jsx(o,{label:"Required",options:a,required:!0}),e.jsx(o,{label:"Readonly",options:a,defaultValues:["option-2"],readonly:!0,labelHelpText:x}),e.jsx(o,{label:"Disabled",options:a,defaultValues:["option-1"],disabled:!0}),e.jsx(o,{label:"Error",options:a,error:f})]})},l={name:"Keyboard Focus",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Press Tab to move through the options."}),e.jsx(o,{label:"Editable",options:a,defaultValues:["option-1"]}),e.jsx(o,{label:"Read-only",options:a,defaultValues:["option-2"],readonly:!0,labelHelpText:x})]})};var r,p,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "With Options",
  render: () => <CheckboxGroup label="Desktop Types" labelHelpText="Select all desktop types that apply to this role." required options={desktopTypeOptions} defaultValues={["back-office"]} />
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var n,d,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-8">
      <CheckboxGroup label="Default" options={baseOptions} />
      <CheckboxGroup label="With Selection" options={baseOptions} defaultValues={["option-1", "option-2"]} />
      <CheckboxGroup label="Required" options={baseOptions} required />
      <CheckboxGroup label="Readonly" options={baseOptions} defaultValues={["option-2"]} readonly labelHelpText={READONLY_HELP_TEXT} />
      <CheckboxGroup label="Disabled" options={baseOptions} defaultValues={["option-1"]} disabled />
      <CheckboxGroup label="Error" options={baseOptions} error={REQUIRED_ERROR} />
    </div>
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,b,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Keyboard Focus",
  render: () => <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Press Tab to move through the options.</p>
      <CheckboxGroup label="Editable" options={baseOptions} defaultValues={["option-1"]} />
      <CheckboxGroup label="Read-only" options={baseOptions} defaultValues={["option-2"]} readonly labelHelpText={READONLY_HELP_TEXT} />
    </div>
}`,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const L=["WithOptions","AllVariants","KeyboardFocus"];export{s as AllVariants,l as KeyboardFocus,t as WithOptions,L as __namedExportsOrder,q as default};
