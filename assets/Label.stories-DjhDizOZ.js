import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./label-nFez4jEO.js";import{I as r}from"./input-Bj9llYuD.js";import{S as b}from"./select-DfePZdut.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./error-icon-Jj0G9Pna.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./popover-CyPBLJW1.js";import"./index-DhUdNGNr.js";import"./index-MFm5DvZf.js";import"./container-header-Ca2x66t9.js";import"./x-N8aIqrq2.js";import"./checkbox-cemurMBH.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";const ye={title:"Headless Primitives/Label",component:l,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},showHelp:{control:"boolean",name:"Help"},showSupportingText:{control:"boolean",name:"Supporting text"},showInput:{control:"boolean",name:"Input box"}}},t={name:"Basic Label",args:{label:"Field label",labelFor:"basic-input"},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"basic-input",placeholder:"Enter value..."})]})},n={name:"Label With Help Text",args:{label:"API Key",labelFor:"help-input",labelHelpText:"Your API key can be found in your account settings under Security."},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"help-input",placeholder:"sk-••••••••"})]})},s={name:"Required Label",args:{label:"Email Address",labelFor:"required-input",required:!0},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"required-input",placeholder:"you@example.com",required:!0})]})},i={name:"Disabled Label",args:{label:"Username",labelFor:"disabled-input",required:!0,labelHelpText:"This field is currently unavailable.",disabled:!0},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"disabled-input",placeholder:"Enter username",disabled:!0})]})},o={name:"Readonly Label",args:{label:"Account ID",labelFor:"readonly-input",required:!0,labelHelpText:"Your account ID cannot be changed.",readonly:!0},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"readonly-input",value:"acc-00123",readonly:!0})]})},d={name:"Label With Supporting Text",args:{label:"Input Label",labelFor:"supporting-text-input",required:!0,labelHelpText:"Helpful context about this field.",supportingText:"Supporting text with additional info"},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"supporting-text-input",placeholder:"Enter value..."})]})},p={args:{label:"Default Label",labelFor:"default-input",required:!0,showHelp:!0,showSupportingText:!1,showInput:!0},render:a=>{const{showHelp:O,showSupportingText:C,showInput:U,..._}=a;return e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{..._,labelHelpText:O?"Helpful context about this field.":void 0,supportingText:C?"Supporting text with additional info":void 0}),U&&e.jsx(r,{id:"default-input",placeholder:"Enter value..."})]})}},u={name:"With Select",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(b,{label:"Desktop type",labelHelpText:"Choose the desktop layout for this role.",required:!0,placeholder:"Select a type...",options:[{value:"back-office",label:"Back office"},{value:"knowledge-worker",label:"Knowledge Worker"},{value:"bpo",label:"BPO"}]}),e.jsx(b,{label:"Status",disabled:!0,placeholder:"Select status...",options:[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]}),e.jsx(b,{label:"Region",readonly:!0,placeholder:"Select region...",options:[{value:"na1",label:"North America 1"},{value:"eu1",label:"Europe 1"}]})]})},c={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-5 w-80",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Default",labelFor:"s-default"}),e.jsx(r,{id:"s-default",placeholder:"Default state"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"With help text",labelFor:"s-help",labelHelpText:"Additional context about this field."}),e.jsx(r,{id:"s-help",placeholder:"With help text"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required",labelFor:"s-required",required:!0}),e.jsx(r,{id:"s-required",placeholder:"Required field",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required with help",labelFor:"s-req-help",required:!0,labelHelpText:"This field is required and has additional context."}),e.jsx(r,{id:"s-req-help",placeholder:"Required with help",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Disabled",labelFor:"s-disabled",required:!0,disabled:!0}),e.jsx(r,{id:"s-disabled",placeholder:"Disabled",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Readonly",labelFor:"s-readonly",required:!0,labelHelpText:"This value cannot be edited.",readonly:!0}),e.jsx(r,{id:"s-readonly",value:"Read-only value",readonly:!0})]})]})};var x,m,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Basic Label",
  args: {
    label: "Field label",
    labelFor: "basic-input"
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="basic-input" placeholder="Enter value..." />
    </div>
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,g,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var q,y,w;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var S,j,L;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var T,H,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var N,F,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Label With Supporting Text",
  args: {
    label: "Input Label",
    labelFor: "supporting-text-input",
    required: true,
    labelHelpText: "Helpful context about this field.",
    supportingText: "Supporting text with additional info"
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="supporting-text-input" placeholder="Enter value..." />
    </div>
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var D,k,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Default Label",
    labelFor: "default-input",
    required: true,
    showHelp: true,
    showSupportingText: false,
    showInput: true
  } as Story["args"],
  render: (args: any) => {
    const {
      showHelp,
      showSupportingText,
      showInput,
      ...rest
    } = args;
    return <div className="flex flex-col gap-1 w-72">
        <Label {...rest} labelHelpText={showHelp ? "Helpful context about this field." : undefined} supportingText={showSupportingText ? "Supporting text with additional info" : undefined} />
        {showInput && <Input id="default-input" placeholder="Enter value..." />}
      </div>;
  }
}`,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var A,E,B;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(E=u.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var P,K,Y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const we=["BasicLabel","LabelWithHelpText","RequiredLabel","DisabledLabel","ReadonlyLabel","LabelWithSupportingText","Default","WithSelect","AllStates"];export{c as AllStates,t as BasicLabel,p as Default,i as DisabledLabel,n as LabelWithHelpText,d as LabelWithSupportingText,o as ReadonlyLabel,s as RequiredLabel,u as WithSelect,we as __namedExportsOrder,ye as default};
