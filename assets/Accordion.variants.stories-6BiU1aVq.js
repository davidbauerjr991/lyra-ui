import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as a}from"./accordion-FejjsEz-.js";import{v as t,H as V,r as D}from"./Accordion.shared-DFRDkqih.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DiAOQKtY.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DGBzHazk.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./tag-D8yJ2lBD.js";import"./index-1evVQkiP.js";import"./tooltip-DKTByY8R.js";import"./x-CzxgOx-T.js";import"./button-CLz1-b9g.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./dashboard-card-BggZOAGJ.js";import"./container-4ho-TAYP.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./separator-97dXnQFu.js";import"./filter-chip-CakUwLBw.js";import"./error-icon-solid-eVlwMcX6.js";import"./select-Ct-JPb8f.js";import"./index-pcZVUfq6.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./kebab-menu-button-CUREWany.js";import"./menu-radix-9vcg5XDz.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sparkline-BywDx1SH.js";import"./chart-C8WwCP2A.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";import"./table-D1rGpBC3.js";import"./search-input-DbdcjRuV.js";import"./clear-button-Cb_QiePp.js";import"./arrow-right-DLDQNhbU.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./input-CHxvM1hc.js";import"./sliders-horizontal-DYIYVQYC.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./clock-C3xVexPO.js";import"./box-DjPaLKGI.js";const Qe={title:"Headless Primitives/Accordion/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"States (Closed, Open, Disabled)",render:()=>e.jsx(a,{type:"multiple",defaultValues:["open"],items:[t("closed","Closed"),t("open","Open"),t("disabled","Disabled",{disabled:!0})]})},o={name:"Without Icons",render:()=>e.jsx(a,{type:"multiple",items:[t("a","No icon",{icon:!1}),t("b","No icon, with subhead",{icon:!1,subhead:!0})]})},s={name:"Subhead",render:()=>e.jsx(a,{type:"multiple",items:[t("a","With subhead",{subhead:!0}),t("b","With subhead, disabled",{subhead:!0,disabled:!0})]})},i={name:"End Slot (Metrics)",render:()=>e.jsx(a,{type:"multiple",items:[t("a","With end slot",{endSlot:!0}),t("b","With subhead + end slot",{subhead:!0,endSlot:!0})]})},n={name:"Rich Header + Table Content",render:()=>e.jsx(a,{defaultValue:"rich",items:[D]})},d={name:"Headless",render:()=>e.jsx(V,{})},m={name:"Contained",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Single (one open at a time)"}),e.jsx(a,{variant:"contained",type:"single",defaultValue:"open",items:[t("closed","Closed"),t("open","Open"),t("disabled","Disabled",{disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Multiple, with subhead"}),e.jsx(a,{variant:"contained",type:"multiple",defaultValues:["a"],items:[t("a","First section",{subhead:!0}),t("b","Second section",{subhead:!0})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Single item"}),e.jsx(a,{variant:"contained",items:[t("only","Only section")]})]})]})};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "States (Closed, Open, Disabled)",
  render: () => <Accordion type="multiple" defaultValues={["open"]} items={[variantRow("closed", "Closed"), variantRow("open", "Open"), variantRow("disabled", "Disabled", {
    disabled: true
  })]} />
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Without Icons",
  render: () => <Accordion type="multiple" items={[variantRow("a", "No icon", {
    icon: false
  }), variantRow("b", "No icon, with subhead", {
    icon: false,
    subhead: true
  })]} />
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,v,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Subhead",
  render: () => <Accordion type="multiple" items={[variantRow("a", "With subhead", {
    subhead: true
  }), variantRow("b", "With subhead, disabled", {
    subhead: true,
    disabled: true
  })]} />
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,f,g;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "End Slot (Metrics)",
  render: () => <Accordion type="multiple" items={[variantRow("a", "With end slot", {
    endSlot: true
  }), variantRow("b", "With subhead + end slot", {
    subhead: true,
    endSlot: true
  })]} />
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var R,w,j;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Rich Header + Table Content",
  render: () => <Accordion defaultValue="rich" items={[richItem]} />
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var C,H,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Headless",
  render: () => <HeadlessDemo />
}`,...(N=(H=d.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,A,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Contained",
  render: () => <div className="flex flex-col gap-8">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Single (one open at a time)</span>
        <Accordion variant="contained" type="single" defaultValue="open" items={[variantRow("closed", "Closed"), variantRow("open", "Open"), variantRow("disabled", "Disabled", {
        disabled: true
      })]} />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Multiple, with subhead</span>
        <Accordion variant="contained" type="multiple" defaultValues={["a"]} items={[variantRow("a", "First section", {
        subhead: true
      }), variantRow("b", "Second section", {
        subhead: true
      })]} />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">Single item</span>
        <Accordion variant="contained" items={[variantRow("only", "Only section")]} />
      </div>
    </div>
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const Ue=["States","WithoutIcons","Subhead","EndSlot","RichHeader","Headless","Contained"];export{m as Contained,i as EndSlot,d as Headless,n as RichHeader,r as States,s as Subhead,o as WithoutIcons,Ue as __namedExportsOrder,Qe as default};
