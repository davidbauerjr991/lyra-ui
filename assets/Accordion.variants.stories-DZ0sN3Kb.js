import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as r}from"./accordion-aheRZdMc.js";import{v as t,H as V,r as D}from"./Accordion.shared-IgezrG4_.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./tag-DQ3sj_Kb.js";import"./index-1evVQkiP.js";import"./tooltip-BnyLRSaS.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./x-CzxgOx-T.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./dashboard-card-DJPiByo-.js";import"./container-C7yiAi4_.js";import"./container-header-CRBwP-Mp.js";import"./arrow-left-Bi_-X62A.js";import"./container-footer-BSIaMmWX.js";import"./separator-97dXnQFu.js";import"./filter-chip-C5aRaTvf.js";import"./error-icon-solid-eVlwMcX6.js";import"./select-CqLB1K6d.js";import"./index-pcZVUfq6.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./checkbox-BvtSqiEO.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sparkline-BywDx1SH.js";import"./chart-C8WwCP2A.js";import"./trending-up-VJi9q_0I.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";import"./table--4Qx2r7x.js";import"./show-more-zdMS6Dq2.js";import"./search-input-DMWMFm0V.js";import"./clear-button-dDMqPq-B.js";import"./arrow-right-DLDQNhbU.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./query-builder-Bas0a1uC.js";import"./input-DV2xaBHs.js";import"./toggle-group-DA1eutEW.js";import"./sliders-horizontal-DYIYVQYC.js";import"./copy-CtBWyGKZ.js";import"./plus-BKUBo5Qt.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./clock-C3xVexPO.js";import"./box-DjPaLKGI.js";const ot={title:"Headless Primitives/Accordion/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"States (Closed, Open, Disabled)",render:()=>e.jsx(r,{type:"multiple",defaultValues:["open"],items:[t("closed","Closed"),t("open","Open"),t("disabled","Disabled",{disabled:!0})]})},o={name:"Without Icons",render:()=>e.jsx(r,{type:"multiple",items:[t("a","No icon",{icon:!1}),t("b","No icon, with subhead",{icon:!1,subhead:!0})]})},i={name:"Subhead",render:()=>e.jsx(r,{type:"multiple",items:[t("a","With subhead",{subhead:!0}),t("b","With subhead, disabled",{subhead:!0,disabled:!0})]})},s={name:"End Slot (Metrics)",render:()=>e.jsx(r,{type:"multiple",items:[t("a","With end slot",{endSlot:!0}),t("b","With subhead + end slot",{subhead:!0,endSlot:!0})]})},n={name:"Rich Header + Table Content",render:()=>e.jsx(r,{defaultValue:"rich",items:[D]})},d={name:"Headless",render:()=>e.jsx(V,{})},m={name:"Contained",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Single (one open at a time)"}),e.jsx(r,{variant:"contained",type:"single",defaultValue:"open",items:[t("closed","Closed"),t("open","Open"),t("disabled","Disabled",{disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Multiple, with subhead"}),e.jsx(r,{variant:"contained",type:"multiple",defaultValues:["a"],items:[t("a","First section",{subhead:!0}),t("b","Second section",{subhead:!0})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Single item"}),e.jsx(r,{variant:"contained",items:[t("only","Only section")]})]})]})};var p,l,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "States (Closed, Open, Disabled)",
  render: () => <Accordion type="multiple" defaultValues={["open"]} items={[variantRow("closed", "Closed"), variantRow("open", "Open"), variantRow("disabled", "Disabled", {
    disabled: true
  })]} />
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Without Icons",
  render: () => <Accordion type="multiple" items={[variantRow("a", "No icon", {
    icon: false
  }), variantRow("b", "No icon, with subhead", {
    icon: false,
    subhead: true
  })]} />
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,v,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Subhead",
  render: () => <Accordion type="multiple" items={[variantRow("a", "With subhead", {
    subhead: true
  }), variantRow("b", "With subhead, disabled", {
    subhead: true,
    disabled: true
  })]} />
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,f,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "End Slot (Metrics)",
  render: () => <Accordion type="multiple" items={[variantRow("a", "With end slot", {
    endSlot: true
  }), variantRow("b", "With subhead + end slot", {
    subhead: true,
    endSlot: true
  })]} />
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var R,w,j;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(A=m.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const it=["States","WithoutIcons","Subhead","EndSlot","RichHeader","Headless","Contained"];export{m as Contained,s as EndSlot,d as Headless,n as RichHeader,a as States,i as Subhead,o as WithoutIcons,it as __namedExportsOrder,ot as default};
