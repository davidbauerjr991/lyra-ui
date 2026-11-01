import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DhMLlvMY.js";import{A as x}from"./avatar-CJbM1faC.js";import{B as m}from"./button-Cje2PXGX.js";import{I as n}from"./inline-notification-DeWvekn2.js";import{T as d}from"./tag-DQ3sj_Kb.js";import{V as f,M as l,H as h,I as u}from"./InlineNotification.shared-X357hECO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./icon-C3nOw4uh.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./x-CzxgOx-T.js";const F={title:"Custom Primitives/Inline Notification/Variants",component:n,tags:["!autodocs"],parameters:{layout:"padded"}};function t({label:a,children:e}){return i.jsxs("div",{className:"flex flex-col gap-2",children:[i.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:a}),e]})}function v(){const[a,e]=p.useState(!0);return a?i.jsx(n,{variant:"info",onDismiss:()=>e(!1),children:l.info}):i.jsx("div",{children:i.jsx(m,{variant:"outline",size:"sm",autoFocus:!0,onClick:()=>e(!0),children:"Show again"})})}const s={name:"All Variants",render:()=>i.jsxs("div",{className:"flex flex-col gap-6 w-full",children:[i.jsx("div",{className:"flex flex-col gap-4",children:f.map(a=>i.jsx(n,{variant:a,children:l[a]},a))}),i.jsx(t,{label:"With Title",children:i.jsx(n,{variant:"warning",heading:h.warning,children:l.warning})}),i.jsx(t,{label:"With Action",children:i.jsx(n,{variant:"success",actionPlacement:"inline",action:i.jsx("a",{href:"#details",className:u,onClick:a=>a.preventDefault(),children:"View details"}),children:l.success})}),i.jsx(t,{label:"Dismissible",children:i.jsx(v,{})}),i.jsx(t,{label:"With Icon",children:i.jsx(n,{variant:"info",icon:i.jsx(x,{size:"xs",initials:"MC"}),heading:i.jsxs("span",{className:"flex items-center gap-2",children:["Maya Chen",i.jsx(d,{label:"Voice"})]}),actionPlacement:"inline",action:i.jsx(m,{variant:"outline",size:"sm",children:"View"}),children:"On call"})})]})};var r,o,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-4">
        {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant}>
            {MESSAGES[variant]}
          </InlineNotification>)}
      </div>
      <Example label="With Title">
        <InlineNotification variant="warning" heading={HEADINGS.warning}>
          {MESSAGES.warning}
        </InlineNotification>
      </Example>
      <Example label="With Action">
        <InlineNotification variant="success" actionPlacement="inline" action={<a href="#details" className={INLINE_LINK_CLASS} onClick={e => e.preventDefault()}>View details</a>}>
          {MESSAGES.success}
        </InlineNotification>
      </Example>
      <Example label="Dismissible">
        <DismissibleExample />
      </Example>
      {/* \`icon\` replaces the status glyph (here a person's avatar, for an item row). The avatar carries no label:
          the visible name beside it says it. A wider-than-20px icon pairs with \`actionPlacement="inline"\`. */}
      <Example label="With Icon">
        <InlineNotification variant="info" icon={<Avatar size="xs" initials="MC" />} heading={<span className="flex items-center gap-2">
              Maya Chen
              <Tag label="Voice" />
            </span>} actionPlacement="inline" action={<Button variant="outline" size="sm">View</Button>}>
          On call
        </InlineNotification>
      </Example>
    </div>
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const q=["AllVariants"];export{s as AllVariants,q as __namedExportsOrder,F as default};
