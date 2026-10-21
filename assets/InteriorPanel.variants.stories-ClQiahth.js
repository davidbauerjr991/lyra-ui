import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./interior-panel-Bu5X53OX.js";import{I as h}from"./info-icon-CVWl96lq.js";import{b as n,a as o,P as c,p as P}from"./InteriorPanel.shared-KgKtjfE0.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./utils-BLSKlp9E.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./container-footer-CU6hpAek.js";import"./minimize-2-DJw-t-cB.js";import"./maximize-2--TlG5VuC.js";import"./input-D4o1YJ5A.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./button-D4EbXLB3.js";import"./index-1evVQkiP.js";import"./badge-BpOJAIFg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./tabs-avQ6Dfxp.js";import"./kebab-menu-button-CK5VcSsn.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";const de={title:"Custom Primitives/InteriorPanel/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"States (Open, Closed, Side, Resizable)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(n,{label:"Open — right (default)",children:e.jsx(r,{side:"right",open:!0,headerTitle:"Open",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Open — left",side:"left",children:e.jsx(r,{side:"left",open:!0,headerTitle:"Left",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Closed (open=false)",children:e.jsx(r,{side:"right",open:!1,headerTitle:"Closed",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Not resizable (resizable=false)",children:e.jsx(r,{side:"right",open:!0,resizable:!1,headerTitle:"Fixed width",onClose:()=>{},children:e.jsx(o,{})})})]})},l={name:"Header and Footer Options",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(n,{label:"Subtitle and icon",children:e.jsx(r,{open:!0,headerTitle:"Customer Information",headerSubhead:"Noah Bennett · CST-10296",headerIcon:e.jsx(h,{className:"h-5 w-5"}),onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Tabs in header",children:e.jsx(r,{open:!0,headerTitle:"Customer Information",headerTabs:e.jsx(c,{}),onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Footer",children:e.jsx(r,{open:!0,headerTitle:"With footer",footer:P,onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Full screen button",children:e.jsx(r,{open:!0,headerTitle:"Wide Report",allowFullScreen:!0,onClose:()=>{},children:e.jsx(o,{})})})]})};var t,i,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "States (Open, Closed, Side, Resizable)",
  render: () => <div className="grid grid-cols-2 gap-6 max-w-5xl">
      <PanelFrame label="Open — right (default)">
        <InteriorPanel side="right" open headerTitle="Open" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Open — left" side="left">
        <InteriorPanel side="left" open headerTitle="Left" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Closed (open=false)">
        <InteriorPanel side="right" open={false} headerTitle="Closed" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Not resizable (resizable=false)">
        <InteriorPanel side="right" open resizable={false} headerTitle="Fixed width" onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
    </div>
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,d,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Header and Footer Options",
  render: () => <div className="grid grid-cols-2 gap-6 max-w-5xl">
      <PanelFrame label="Subtitle and icon">
        <InteriorPanel open headerTitle="Customer Information" headerSubhead="Noah Bennett · CST-10296" headerIcon={<InfoIcon className="h-5 w-5" />} onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Tabs in header">
        <InteriorPanel open headerTitle="Customer Information" headerTabs={<PanelTabs />} onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Footer">
        <InteriorPanel open headerTitle="With footer" footer={panelFooter} onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
      <PanelFrame label="Full screen button">
        <InteriorPanel open headerTitle="Wide Report" allowFullScreen onClose={() => {}}>
          <PanelForm />
        </InteriorPanel>
      </PanelFrame>
    </div>
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const pe=["States","HeaderAndFooter"];export{l as HeaderAndFooter,a as States,pe as __namedExportsOrder,de as default};
