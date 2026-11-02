import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DhMLlvMY.js";import{B as v}from"./button-Cje2PXGX.js";import{I as r}from"./interior-panel-C7cvV7TK.js";import{I as R}from"./info-icon-CVWl96lq.js";import{b as t,a as o,P as y,p as N}from"./InteriorPanel.shared-Bq_sNakH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./container-header-CRBwP-Mp.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./container-footer-BSIaMmWX.js";import"./minimize-2-DJw-t-cB.js";import"./maximize-2--TlG5VuC.js";import"./input-DV2xaBHs.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./tabs-CB4kH1Fe.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";const Re={title:"Custom Primitives/InteriorPanel/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},m={name:"States (Open, Closed, Side, Resizable)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(t,{label:"Open — right (default)",children:e.jsx(r,{side:"right",open:!0,headerTitle:"Open",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(t,{label:"Open — left",side:"left",children:e.jsx(r,{side:"left",open:!0,headerTitle:"Left",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(t,{label:"Closed (open=false)",children:e.jsx(r,{side:"right",open:!1,headerTitle:"Closed",onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(t,{label:"Not resizable (resizable=false)",children:e.jsx(r,{side:"right",open:!0,resizable:!1,headerTitle:"Fixed width",onClose:()=>{},children:e.jsx(o,{})})})]})},p={name:"Header and Footer Options",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(t,{label:"Subtitle and icon",children:e.jsx(r,{open:!0,headerTitle:"Customer Information",headerSubhead:"Noah Bennett · CST-10296",headerIcon:e.jsx(R,{className:"h-5 w-5"}),onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(t,{label:"Tabs in header",children:e.jsx(r,{open:!0,headerTitle:"Customer Information",headerTabs:e.jsx(y,{}),onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(t,{label:"Footer",children:e.jsx(r,{open:!0,headerTitle:"With footer",footer:N,onClose:()=>{},children:e.jsx(o,{})})}),e.jsx(t,{label:"Full screen button",children:e.jsx(r,{open:!0,headerTitle:"Wide Report",allowFullScreen:!0,onClose:()=>{},children:e.jsx(o,{})})})]})};function W(){const[n,l]=d.useState("A"),[s,i]=d.useState({});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-3xl",children:[e.jsx("div",{className:"flex gap-2",children:["A","B"].map(a=>e.jsx(v,{variant:a===n?"default":"outline",onClick:()=>l(a),children:`Assignment ${a}`},a))}),e.jsx(t,{label:`Assignment ${n} · full screen: ${s[n]?"on":"off"}`,children:e.jsx(r,{open:!0,headerTitle:`Assignment ${n}`,allowFullScreen:!0,defaultFullScreen:!!s[n],onFullScreenChange:a=>i(u=>({...u,[n]:a})),onClose:()=>{},children:e.jsx(o,{})},n)})]})}const c={name:"Full Screen Remembered per Context",render:()=>e.jsx(W,{})};function O(){const n=d.useRef(null),[l,s]=d.useState();return d.useLayoutEffect(()=>{const i=n.current;if(!i)return;s(i.getBoundingClientRect().width);const a=new ResizeObserver(([u])=>s(u.contentRect.width));return a.observe(i),()=>a.disconnect()},[]),e.jsxs("div",{ref:n,className:"relative flex h-[420px] max-w-4xl overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[e.jsx("div",{className:"flex-1 min-w-0 p-6 lyra-body-md text-lyra-fg-secondary",children:"The page column"}),l!==void 0&&l>0&&e.jsx("div",{style:{display:"contents"},children:e.jsx(r,{open:!0,headerTitle:"Docked beside the column",containerWidth:l,absoluteBreakpoint:0,resizable:!0,allowFullScreen:!0,autoFullScreen:!0,onClose:()=>{},children:e.jsx(o,{})})})]})}const h={name:"Container Width (portaled host)",render:()=>e.jsx(O,{})};var x,b,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,P,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var C,g,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Full Screen Remembered per Context",
  render: () => <RememberedFullScreen />
}`,...(S=(g=c.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var I,T,w;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Container Width (portaled host)",
  render: () => <ContainerWidthDemo />
}`,...(w=(T=h.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const ye=["States","HeaderAndFooter","FullScreenRemembered","ContainerWidth"];export{h as ContainerWidth,c as FullScreenRemembered,p as HeaderAndFooter,m as States,ye as __namedExportsOrder,Re as default};
