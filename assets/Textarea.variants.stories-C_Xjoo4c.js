import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./textarea-DqEeGScW.js";import{M as r,S as b,H as u}from"./Textarea.shared-jRsY784b.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const R={title:"Custom Primitives/Textarea/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-sm",children:[e.jsx(a,{label:"Default",placeholder:"Placeholder",maxLength:r,rows:4}),e.jsx(a,{label:"Filled",defaultValue:b,maxLength:r,rows:4}),e.jsx(a,{label:"Hover",placeholder:"Placeholder",maxLength:r,rows:4,className:"[&_textarea]:border-lyra-state-border-hover-neutral"}),e.jsx(a,{label:"Focus",placeholder:"Placeholder",maxLength:r,rows:4,className:"[&_textarea]:border-lyra-border-active [&_textarea]:ring-2 [&_textarea]:ring-lyra-border-active/20"}),e.jsx(a,{label:"Read-only",placeholder:"Placeholder",maxLength:r,rows:4,readonly:!0}),e.jsx(a,{label:"Disabled",placeholder:"Placeholder",maxLength:r,rows:4,disabled:!0}),e.jsx(a,{label:"Error",maxLength:r,rows:4,error:"Required"}),e.jsx(a,{label:"Required with help",labelHelpText:u,required:!0,placeholder:"Enter description...",maxLength:500,rows:5})]})},o={name:"Auto-grow",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-sm",children:[e.jsx(a,{label:"Auto-grow (2 to 6 rows)",placeholder:"Keep typing…",rows:2,maxRows:6,autoGrow:!0}),e.jsx(a,{label:"Starts filled",defaultValue:`Line 1
Line 2
Line 3
Line 4
Line 5`,rows:2,maxRows:4,autoGrow:!0})]})},t={name:"Keyboard Help",render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(a,{label:"Notes",labelHelpText:u,placeholder:"Tab from the label's info icon into the field",rows:3})})};var s,n,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6 max-w-sm">
      <Textarea label="Default" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} />
      <Textarea label="Filled" defaultValue={SAMPLE_VALUE} maxLength={MAX_LENGTH} rows={4} />
      <Textarea label="Hover" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} className="[&_textarea]:border-lyra-state-border-hover-neutral" />
      <Textarea label="Focus" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} className="[&_textarea]:border-lyra-border-active [&_textarea]:ring-2 [&_textarea]:ring-lyra-border-active/20" />
      <Textarea label="Read-only" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} readonly />
      <Textarea label="Disabled" placeholder="Placeholder" maxLength={MAX_LENGTH} rows={4} disabled />
      <Textarea label="Error" maxLength={MAX_LENGTH} rows={4} error="Required" />
      <Textarea label="Required with help" labelHelpText={HELP_TEXT} required placeholder="Enter description..." maxLength={500} rows={5} />
    </div>
}`,...(d=(n=l.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Auto-grow",
  render: () => <div className="flex flex-col gap-6 max-w-sm">
      <Textarea label="Auto-grow (2 to 6 rows)" placeholder="Keep typing…" rows={2} maxRows={6} autoGrow />
      <Textarea label="Starts filled" defaultValue={"Line 1\\nLine 2\\nLine 3\\nLine 4\\nLine 5"} rows={2} maxRows={4} autoGrow />
    </div>
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var x,p,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Keyboard Help",
  render: () => <div className="max-w-sm">
      <Textarea label="Notes" labelHelpText={HELP_TEXT} placeholder="Tab from the label's info icon into the field" rows={3} />
    </div>
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const V=["AllVariants","AutoGrow","KeyboardHelp"];export{l as AllVariants,o as AutoGrow,t as KeyboardHelp,V as __namedExportsOrder,R as default};
