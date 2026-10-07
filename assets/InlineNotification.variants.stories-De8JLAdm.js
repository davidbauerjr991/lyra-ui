import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-DhMLlvMY.js";import{B as w}from"./button-CLz1-b9g.js";import{I as s,V as n,M as c,a as T,H as g}from"./InlineNotification.shared-Dy76qrWh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./icon-h0iptIZc.js";import"./warning-icon-solid-CYvTRq-W.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./success-icon-solid-BP6tJnyF.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const Z={title:"Custom Primitives/Inline Notification/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded"}},t={name:"All Variants",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,onDismiss:()=>{},children:c[e]},e))})},o={name:"With Title",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,heading:g[e],onDismiss:()=>{},children:c[e]},e))})},l={name:"Inline Action",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,actionPlacement:"inline",action:i.jsx("a",{href:"#details",className:T,onClick:r=>r.preventDefault(),children:"View details"}),children:c[e]},e))})};function b(){const[e,r]=V.useState([...n]);return i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[n.filter(a=>e.includes(a)).map(a=>i.jsx(s,{variant:a,heading:g[a],onDismiss:()=>r(E=>E.filter(j=>j!==a)),children:c[a]},a)),i.jsx("div",{children:i.jsx(w,{variant:"outline",size:"sm",onClick:()=>r([...n]),children:"Show all again"})})]})}const m={name:"Dismissible",render:()=>i.jsx(b,{})};var p,d,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(D=(v=m.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const $=["AllVariants","WithTitle","InlineAction","Dismissible"];export{t as AllVariants,m as Dismissible,l as InlineAction,o as WithTitle,$ as __namedExportsOrder,Z as default};
