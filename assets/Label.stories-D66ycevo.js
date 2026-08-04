import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./label-DjGdKyh0.js";import{I as r}from"./input-B6wjqCOy.js";import{S as x}from"./select-Crmq7WdN.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./error-icon-Jj0G9Pna.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./popover-DzlchCUr.js";import"./index-C2HVhtBy.js";import"./index-C1YDQLuO.js";import"./container-header-BbK1XDO0.js";import"./x-N8aIqrq2.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";const He={title:"Headless Primitives/Label",component:l,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"},showHelp:{control:"boolean",name:"Help"},showSupportingText:{control:"boolean",name:"Supporting text"},showInput:{control:"boolean",name:"Input box"}}},n={name:"Basic Label",args:{label:"Field label",labelFor:"basic-input"},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"basic-input",placeholder:"Enter value..."})]})},t={name:"Label With Help Text",args:{label:"API Key",labelFor:"help-input",labelHelpText:"Your API key can be found in your account settings under Security."},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"help-input",placeholder:"sk-••••••••"})]})},s={name:"Required Label",args:{label:"Email Address",labelFor:"required-input",required:!0},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"required-input",placeholder:"you@example.com",required:!0})]})},o={name:"Disabled Label",args:{label:"Username",labelFor:"disabled-input",required:!0,labelHelpText:"This field is currently unavailable.",disabled:!0},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"disabled-input",placeholder:"Enter username",disabled:!0})]})},i={name:"Readonly Label",args:{label:"Account ID",labelFor:"readonly-input",required:!0,labelHelpText:"Your account ID cannot be changed.",readonly:!0},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"readonly-input",value:"acc-00123",readonly:!0})]})},d={name:"Label With Supporting Text",args:{label:"Input Label",labelFor:"supporting-text-input",required:!0,labelHelpText:"Helpful context about this field.",supportingText:"Supporting text with additional info"},render:a=>e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...a}),e.jsx(r,{id:"supporting-text-input",placeholder:"Enter value..."})]})},p={name:"Horizontal",render:()=>e.jsxs("div",{className:"flex items-center justify-between w-72",children:[e.jsx(l,{label:"Agent Name"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:"Sarah Connor"})]})},u={args:{label:"Default Label",labelFor:"default-input",required:!0,showHelp:!0,showSupportingText:!1,showInput:!0},render:a=>{const{showHelp:_,showSupportingText:G,showInput:J,...M}=a;return e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(l,{...M,labelHelpText:_?"Helpful context about this field.":void 0,supportingText:G?"Supporting text with additional info":void 0}),J&&e.jsx(r,{id:"default-input",placeholder:"Enter value..."})]})}},c={name:"With Select",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(x,{label:"Desktop type",labelHelpText:"Choose the desktop layout for this role.",required:!0,placeholder:"Select a type...",options:[{value:"back-office",label:"Back office"},{value:"knowledge-worker",label:"Knowledge Worker"},{value:"bpo",label:"BPO"}]}),e.jsx(x,{label:"Status",disabled:!0,placeholder:"Select status...",options:[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]}),e.jsx(x,{label:"Region",readonly:!0,placeholder:"Select region...",options:[{value:"na1",label:"North America 1"},{value:"eu1",label:"Europe 1"}]})]})},b={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-5 w-80",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Default",labelFor:"s-default"}),e.jsx(r,{id:"s-default",placeholder:"Default state"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"With help text",labelFor:"s-help",labelHelpText:"Additional context about this field."}),e.jsx(r,{id:"s-help",placeholder:"With help text"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required",labelFor:"s-required",required:!0}),e.jsx(r,{id:"s-required",placeholder:"Required field",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Required with help",labelFor:"s-req-help",required:!0,labelHelpText:"This field is required and has additional context."}),e.jsx(r,{id:"s-req-help",placeholder:"Required with help",required:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Disabled",labelFor:"s-disabled",required:!0,disabled:!0}),e.jsx(r,{id:"s-disabled",placeholder:"Disabled",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{label:"Readonly",labelFor:"s-readonly",required:!0,labelHelpText:"This value cannot be edited.",readonly:!0}),e.jsx(r,{id:"s-readonly",value:"Read-only value",readonly:!0})]})]})};var m,h,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Basic Label",
  args: {
    label: "Field label",
    labelFor: "basic-input"
  },
  render: args => <div className="flex flex-col gap-1 w-72">
      <Label {...args} />
      <Input id="basic-input" placeholder="Enter value..." />
    </div>
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,v,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var q,w,j;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var S,L,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var H,N,I;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var F,R,D;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var A,k,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Horizontal",
  render: () => <div className="flex items-center justify-between w-72">
      <Label label="Agent Name" />
      <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span>
    </div>
}`,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var E,B,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(B=u.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var z,C,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(C=c.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var Y,O,U;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(U=(O=b.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const Ne=["BasicLabel","LabelWithHelpText","RequiredLabel","DisabledLabel","ReadonlyLabel","LabelWithSupportingText","Horizontal","Default","WithSelect","AllStates"];export{b as AllStates,n as BasicLabel,u as Default,o as DisabledLabel,p as Horizontal,t as LabelWithHelpText,d as LabelWithSupportingText,i as ReadonlyLabel,s as RequiredLabel,c as WithSelect,Ne as __namedExportsOrder,He as default};
