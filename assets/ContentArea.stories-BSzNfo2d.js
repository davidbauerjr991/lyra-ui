import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./content-area-DGpmyfD5.js";import{C as m}from"./container-Ccjj9lGu.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./container-header-an86y9Fl.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";const k={title:"UI/ContentArea",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},a={name:"Default",render:()=>e.jsxs("div",{className:"flex h-[400px] bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell"}),e.jsx(s,{children:e.jsx(m,{className:"flex flex-1 items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"ContentArea provides the inset padding (right & bottom) between the shell and the Container."})})})]})},r={name:"Custom Padding",render:()=>e.jsxs("div",{className:"flex h-[400px] bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell"}),e.jsx(s,{padding:"p-6",children:e.jsx(m,{className:"flex flex-1 items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Custom padding override (p-6 = 24px all around)."})})})]})};var n,t,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,i,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const D=["Default","CustomPadding"];export{r as CustomPadding,a as Default,D as __namedExportsOrder,k as default};
