import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{K as r}from"./kebab-menu-button-CUREWany.js";import{H as t,G as s}from"./KebabMenuButton.shared-BBly5RMZ.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-radix-9vcg5XDz.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-BIS9woDA.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";const W={title:"Custom Primitives/KebabMenuButton/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"States (Default, With Badge, Disabled)",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Default"}),e.jsx(t,{children:e.jsx(r,{items:s,ariaLabel:"More options"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"With badge"}),e.jsx(t,{children:e.jsx(r,{items:s,ariaLabel:"More options",badge:3})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Disabled"}),e.jsx(t,{children:e.jsx(r,{items:s,ariaLabel:"More options",disabled:!0})})]}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Click a trigger to open the dropdown — it renders via a portal to `document.body`, so it isn't clipped by this frame."})]})};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "States (Default, With Badge, Disabled)",
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Default</p>
        <HeaderRow>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" />
        </HeaderRow>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">With badge</p>
        <HeaderRow>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" badge={3} />
        </HeaderRow>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Disabled</p>
        <HeaderRow>
          <KebabMenuButton items={GENERIC_ITEMS} ariaLabel="More options" disabled />
        </HeaderRow>
      </div>
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Click a trigger to open the dropdown — it renders via a portal to \`document.body\`, so it isn't clipped by this frame.
      </p>
    </div>
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const k=["States"];export{a as States,k as __namedExportsOrder,W as default};
