import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DhMLlvMY.js";import{B as I}from"./button-Cje2PXGX.js";import{I as r}from"./interior-panel-B470R1B0.js";import{I as S}from"./info-icon-CVWl96lq.js";import{b as n,a as o,P as T,p as w}from"./InteriorPanel.shared-Bq_sNakH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./container-header-CRBwP-Mp.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./container-footer-BSIaMmWX.js";import"./minimize-2-DJw-t-cB.js";import"./maximize-2--TlG5VuC.js";import"./input-DV2xaBHs.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./tabs-CB4kH1Fe.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";const Ie={title:"Custom Primitives/InteriorPanel/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={name:"States (Open, Closed, Side, Resizable)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(n,{label:"Open — right (default)",children:e.jsx(r,{side:"right",open:!0,headerTitle:"Open",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Open — left",side:"left",children:e.jsx(r,{side:"left",open:!0,headerTitle:"Left",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Closed (open=false)",children:e.jsx(r,{side:"right",open:!1,headerTitle:"Closed",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Not resizable (resizable=false)",children:e.jsx(r,{side:"right",open:!0,resizable:!1,headerTitle:"Fixed width",onClose:()=>{},children:e.jsx(o,{})})})]})},s={name:"Header and Footer Options",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(n,{label:"Subtitle and icon",children:e.jsx(r,{open:!0,headerTitle:"Customer Information",headerSubhead:"Noah Bennett · CST-10296",headerIcon:e.jsx(S,{className:"h-5 w-5"}),onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Tabs in header",children:e.jsx(r,{open:!0,headerTitle:"Customer Information",headerTabs:e.jsx(T,{}),onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Footer",children:e.jsx(r,{open:!0,headerTitle:"With footer",footer:w,onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(n,{label:"Full screen button",children:e.jsx(r,{open:!0,headerTitle:"Wide Report",allowFullScreen:!0,onClose:()=>{},children:e.jsx(o,{})})})]})};function N(){const[a,j]=d.useState("A"),[m,C]=d.useState({});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-3xl",children:[e.jsx("div",{className:"flex gap-2",children:["A","B"].map(l=>e.jsx(I,{variant:l===a?"default":"outline",onClick:()=>j(l),children:`Assignment ${l}`},l))}),e.jsx(n,{label:`Assignment ${a} · full screen: ${m[a]?"on":"off"}`,children:e.jsx(r,{open:!0,headerTitle:`Assignment ${a}`,allowFullScreen:!0,defaultFullScreen:!!m[a],onFullScreenChange:l=>C(g=>({...g,[a]:l})),onClose:()=>{},children:e.jsx(o,{})},a)})]})}const i={name:"Full Screen Remembered per Context",render:()=>e.jsx(N,{})};var p,c,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var u,x,F;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var P,f,b;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Full Screen Remembered per Context",
  render: () => <RememberedFullScreen />
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const Se=["States","HeaderAndFooter","FullScreenRemembered"];export{i as FullScreenRemembered,s as HeaderAndFooter,t as States,Se as __namedExportsOrder,Ie as default};
