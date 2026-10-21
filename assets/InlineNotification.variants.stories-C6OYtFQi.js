import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-DhMLlvMY.js";import{B as w}from"./button-DxuJ7r2Z.js";import{I as s}from"./inline-notification-CgfrlBB5.js";import{V as n,M as c,I as T,H as g}from"./InlineNotification.shared-ByjILtpZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./x-CzxgOx-T.js";const ee={title:"Custom Primitives/Inline Notification/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded"}},t={name:"All Variants",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,onDismiss:()=>{},children:c[e]},e))})},o={name:"With Title",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,heading:g[e],onDismiss:()=>{},children:c[e]},e))})},l={name:"Inline Action",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,actionPlacement:"inline",action:i.jsx("a",{href:"#details",className:T,onClick:r=>r.preventDefault(),children:"View details"}),children:c[e]},e))})};function b(){const[e,r]=V.useState([...n]);return i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[n.filter(a=>e.includes(a)).map(a=>i.jsx(s,{variant:a,heading:g[a],onDismiss:()=>r(E=>E.filter(j=>j!==a)),children:c[a]},a)),i.jsx("div",{children:i.jsx(w,{variant:"outline",size:"sm",onClick:()=>r([...n]),children:"Show all again"})})]})}const m={name:"Dismissible",render:()=>i.jsx(b,{})};var p,d,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant} onDismiss={() => {}}>
          {MESSAGES[variant]}
        </InlineNotification>)}
    </div>
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,x,N;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "With Title",
  render: () => <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant} heading={HEADINGS[variant]} onDismiss={() => {}}>
          {MESSAGES[variant]}
        </InlineNotification>)}
    </div>
}`,...(N=(x=o.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var S,I,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Inline Action",
  render: () => <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant} actionPlacement="inline" action={<a href="#details" className={INLINE_LINK_CLASS} onClick={e => e.preventDefault()}>View details</a>}>
          {MESSAGES[variant]}
        </InlineNotification>)}
    </div>
}`,...(A=(I=l.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var h,v,D;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Dismissible",
  render: () => <DismissibleDemo />
}`,...(D=(v=m.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const ie=["AllVariants","WithTitle","InlineAction","Dismissible"];export{t as AllVariants,m as Dismissible,l as InlineAction,o as WithTitle,ie as __namedExportsOrder,ee as default};
