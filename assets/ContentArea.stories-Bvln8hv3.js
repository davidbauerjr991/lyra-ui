import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./content-area-DGpmyfD5.js";import{C as m}from"./container-4ho-TAYP.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";const P={title:"UI/ContentArea",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},r={name:"Default",render:()=>e.jsxs("div",{className:"flex h-[400px] bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell"}),e.jsx(s,{children:e.jsx(m,{className:"flex flex-1 items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"ContentArea provides the inset padding (right & bottom) between the shell and the Container."})})})]})},a={name:"Custom Padding",render:()=>e.jsxs("div",{className:"flex h-[400px] bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell"}),e.jsx(s,{padding:"p-6",children:e.jsx(m,{className:"flex flex-1 items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Custom padding override (p-6 = 24px all around)."})})})]})};var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="flex h-[400px] bg-lyra-bg-surface-shell">
      {/* Simulated sidebar */}
      <div className="w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell" />
      <ContentArea>
        <Container className="flex flex-1 items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">
            ContentArea provides the inset padding (right &amp; bottom) between the shell and the Container.
          </p>
        </Container>
      </ContentArea>
    </div>
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Custom Padding",
  render: () => <div className="flex h-[400px] bg-lyra-bg-surface-shell">
      <div className="w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell" />
      <ContentArea padding="p-6">
        <Container className="flex flex-1 items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">
            Custom padding override (p-6 = 24px all around).
          </p>
        </Container>
      </ContentArea>
    </div>
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["Default","CustomPadding"];export{a as CustomPadding,r as Default,S as __namedExportsOrder,P as default};
