import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./label-C1mTHcP9.js";import{I as a}from"./input-Bda-12ZL.js";import{S as p}from"./select-YTRlqLlV.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./createLucideIcon-DEcfmm_F.js";import"./error-icon-Jj0G9Pna.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./popover-DKyW4KG9.js";import"./index-DhUdNGNr.js";import"./index-MFm5DvZf.js";import"./container-header-CvNOYSQL.js";import"./x-N8aIqrq2.js";import"./checkbox-DtQgK1Hc.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";const pe={title:"Radix Primitives/Label",component:l,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"}}},s={name:"Basic Label",args:{label:"Field label",labelFor:"basic-input"},render:r=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...r}),e.jsx(a,{id:"basic-input",placeholder:"Enter value..."})]})},n={name:"Label With Help Text",args:{label:"API Key",labelFor:"help-input",labelHelpText:"Your API key can be found in your account settings under Security."},render:r=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...r}),e.jsx(a,{id:"help-input",placeholder:"sk-••••••••"})]})},t={name:"Required Label",args:{label:"Email Address",labelFor:"required-input",required:!0},render:r=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...r}),e.jsx(a,{id:"required-input",placeholder:"you@example.com",required:!0})]})},i={name:"Disabled Label",args:{label:"Username",labelFor:"disabled-input",required:!0,labelHelpText:"This field is currently unavailable.",disabled:!0},render:r=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...r}),e.jsx(a,{id:"disabled-input",placeholder:"Enter username",disabled:!0})]})},d={name:"Readonly Label",args:{label:"Account ID",labelFor:"readonly-input",required:!0,labelHelpText:"Your account ID cannot be changed.",readonly:!0},render:r=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...r}),e.jsx(a,{id:"readonly-input",value:"acc-00123",readonly:!0})]})},o={args:{label:"Default Label",labelFor:"default-input",required:!0,labelHelpText:"Helpful context about this field."},render:r=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...r}),e.jsx(a,{id:"default-input",placeholder:"Enter value..."})]})},c={name:"With Select",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(p,{label:"Desktop type",labelHelpText:"Choose the desktop layout for this role.",required:!0,placeholder:"Select a type...",options:[{value:"back-office",label:"Back office"},{value:"knowledge-worker",label:"Knowledge Worker"},{value:"bpo",label:"BPO"}]}),e.jsx(p,{label:"Status",disabled:!0,placeholder:"Select status...",options:[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]}),e.jsx(p,{label:"Region",readonly:!0,placeholder:"Select region...",options:[{value:"na1",label:"North America 1"},{value:"eu1",label:"Europe 1"}]})]})},u={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-5 w-80",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Default",labelFor:"s-default"}),e.jsx(a,{id:"s-default",placeholder:"Default state"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"With help text",labelFor:"s-help",labelHelpText:"Additional context about this field."}),e.jsx(a,{id:"s-help",placeholder:"With help text"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required",labelFor:"s-required",required:!0}),e.jsx(a,{id:"s-required",placeholder:"Required field",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required with help",labelFor:"s-req-help",required:!0,labelHelpText:"This field is required and has additional context."}),e.jsx(a,{id:"s-req-help",placeholder:"Required with help",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Disabled",labelFor:"s-disabled",required:!0,disabled:!0}),e.jsx(a,{id:"s-disabled",placeholder:"Disabled",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Readonly",labelFor:"s-readonly",required:!0,labelHelpText:"This value cannot be edited.",readonly:!0}),e.jsx(a,{id:"s-readonly",value:"Read-only value",readonly:!0})]})]})};var b,x,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Basic Label",
  args: {
    label: "Field label",
    labelFor: "basic-input"
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="basic-input" placeholder="Enter value..." />
    </div>
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,h,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Label With Help Text",
  args: {
    label: "API Key",
    labelFor: "help-input",
    labelHelpText: "Your API key can be found in your account settings under Security."
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="help-input" placeholder="sk-••••••••" />
    </div>
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,q,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Required Label",
  args: {
    label: "Email Address",
    labelFor: "required-input",
    required: true
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="required-input" placeholder="you@example.com" required />
    </div>
}`,...(y=(q=t.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var j,L,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Disabled Label",
  args: {
    label: "Username",
    labelFor: "disabled-input",
    required: true,
    labelHelpText: "This field is currently unavailable.",
    disabled: true
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="disabled-input" placeholder="Enter username" disabled />
    </div>
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var N,R,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Readonly Label",
  args: {
    label: "Account ID",
    labelFor: "readonly-input",
    required: true,
    labelHelpText: "Your account ID cannot be changed.",
    readonly: true
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="readonly-input" value="acc-00123" readonly />
    </div>
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,F,D;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Default Label",
    labelFor: "default-input",
    required: true,
    labelHelpText: "Helpful context about this field."
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="default-input" placeholder="Enter value..." />
    </div>
}`,...(D=(F=o.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var I,H,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "With Select",
  render: () => <div className="flex flex-col gap-4 w-72">
      <Select label="Desktop type" labelHelpText="Choose the desktop layout for this role." required placeholder="Select a type..." options={[{
      value: "back-office",
      label: "Back office"
    }, {
      value: "knowledge-worker",
      label: "Knowledge Worker"
    }, {
      value: "bpo",
      label: "BPO"
    }]} />
      <Select label="Status" disabled placeholder="Select status..." options={[{
      value: "active",
      label: "Active"
    }, {
      value: "inactive",
      label: "Inactive"
    }]} />
      <Select label="Region" readonly placeholder="Select region..." options={[{
      value: "na1",
      label: "North America 1"
    }, {
      value: "eu1",
      label: "Europe 1"
    }]} />
    </div>
}`,...(k=(H=c.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var A,W,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-5 w-80">
      {/* Default */}
      <div className="flex flex-col gap-1">
        <Label label="Default" labelFor="s-default" />
        <Input id="s-default" placeholder="Default state" />
      </div>

      {/* With help text */}
      <div className="flex flex-col gap-1">
        <Label label="With help text" labelFor="s-help" labelHelpText="Additional context about this field." />
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
    </div>
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const be=["BasicLabel","LabelWithHelpText","RequiredLabel","DisabledLabel","ReadonlyLabel","Default","WithSelect","AllStates"];export{u as AllStates,s as BasicLabel,o as Default,i as DisabledLabel,n as LabelWithHelpText,d as ReadonlyLabel,t as RequiredLabel,c as WithSelect,be as __namedExportsOrder,pe as default};
