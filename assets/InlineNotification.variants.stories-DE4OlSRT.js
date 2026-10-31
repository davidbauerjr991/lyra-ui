import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-DhMLlvMY.js";import{A as T}from"./avatar-CJbM1faC.js";import{B as j}from"./button-Cje2PXGX.js";import{I as s}from"./inline-notification-DeWvekn2.js";import{T as b}from"./tag-DQ3sj_Kb.js";import{V as n,M as m,I as C,H as D}from"./InlineNotification.shared-ByjILtpZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./icon-C3nOw4uh.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./x-CzxgOx-T.js";const ti={title:"Custom Primitives/Inline Notification/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded"}},r={name:"All Variants",render:()=>i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[n.map(e=>i.jsx(s,{variant:e,onDismiss:()=>{},children:m[e]},e)),i.jsx(s,{variant:"info",icon:i.jsx(T,{size:"xs",initials:"MC"}),heading:i.jsxs("span",{className:"flex items-center gap-2",children:["Maya Chen",i.jsx(b,{label:"Voice"})]}),actionPlacement:"inline",action:i.jsx(j,{variant:"outline",size:"sm",children:"View"}),children:"On call"})]})},o={name:"With Title",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,heading:D[e],onDismiss:()=>{},children:m[e]},e))})},l={name:"Inline Action",render:()=>i.jsx("div",{className:"flex flex-col gap-4 w-full",children:n.map(e=>i.jsx(s,{variant:e,actionPlacement:"inline",action:i.jsx("a",{href:"#details",className:C,onClick:t=>t.preventDefault(),children:"View details"}),children:m[e]},e))})};function M(){const[e,t]=E.useState([...n]);return i.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[n.filter(a=>e.includes(a)).map(a=>i.jsx(s,{variant:a,heading:D[a],onDismiss:()=>t(V=>V.filter(w=>w!==a)),children:m[a]},a)),i.jsx("div",{children:i.jsx(j,{variant:"outline",size:"sm",onClick:()=>t([...n]),children:"Show all again"})})]})}const c={name:"Dismissible",render:()=>i.jsx(M,{})};var p,d,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant} onDismiss={() => {}}>
          {MESSAGES[variant]}
        </InlineNotification>)}
      {/* \`icon\` replaces the status glyph (here a person's avatar, for an item row). The avatar carries no label:
          the visible name beside it says it. A wider-than-20px icon pairs with \`actionPlacement="inline"\`. */}
      <InlineNotification variant="info" icon={<Avatar size="xs" initials="MC" />} heading={<span className="flex items-center gap-2">
            Maya Chen
            <Tag label="Voice" />
          </span>} actionPlacement="inline" action={<Button variant="outline" size="sm">View</Button>}>
        On call
      </InlineNotification>
    </div>
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var x,u,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "With Title",
  render: () => <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant} heading={HEADINGS[variant]} onDismiss={() => {}}>
          {MESSAGES[variant]}
        </InlineNotification>)}
    </div>
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var N,v,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Inline Action",
  render: () => <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map(variant => <InlineNotification key={variant} variant={variant} actionPlacement="inline" action={<a href="#details" className={INLINE_LINK_CLASS} onClick={e => e.preventDefault()}>View details</a>}>
          {MESSAGES[variant]}
        </InlineNotification>)}
    </div>
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var I,S,g;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Dismissible",
  render: () => <DismissibleDemo />
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const ri=["AllVariants","WithTitle","InlineAction","Dismissible"];export{r as AllVariants,c as Dismissible,l as InlineAction,o as WithTitle,ri as __namedExportsOrder,ti as default};
