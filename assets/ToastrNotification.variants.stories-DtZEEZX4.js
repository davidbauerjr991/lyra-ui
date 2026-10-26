import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as l}from"./avatar-CJbM1faC.js";import{B as I}from"./button-DxuJ7r2Z.js";import{T as O}from"./tag-Dcg-2iAh.js";import{a as s,T as n,u as P}from"./toast-tWOEE3ly.js";import{a as p,T as S,b as d}from"./ToastrNotification.shared-CstLORTY.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./x-CzxgOx-T.js";import"./index-4W-125c9.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";const ma={title:"Headless Primitives/Toastr Notification/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded"}},i={name:"All Variants",render:()=>a.jsx(n,{className:"static inset-auto w-[400px]",children:["warning","error","info","success"].map(e=>a.jsx(s,{variant:e,title:p[e].title,onDismiss:()=>{},children:p[e].message},e))})},W=()=>{const{toasts:e,addToast:N,dismissToast:V}=P();return a.jsxs("div",{className:"flex gap-2",children:[S.map(t=>a.jsxs(I,{variant:"outline",size:"sm",onClick:()=>N({variant:t,...d[t],duration:5e3}),children:[d[t].title," Toast"]},t)),a.jsx(n,{children:e.map(t=>a.jsx(s,{variant:t.variant,title:t.title,duration:t.duration,onDismiss:()=>V(t.id),children:t.message},t.id))})]})},r={name:"Interactive Demo",parameters:{layout:"fullscreen"},render:()=>a.jsx(W,{})},o={name:"With Action",render:()=>a.jsxs(n,{className:"static inset-auto w-[400px]",children:[a.jsx(s,{variant:"success",title:"Conversation archived",actionLabel:"Undo",onAction:()=>{},onDismiss:()=>{},children:"It moved to your archive."}),a.jsx(s,{variant:"info",title:"New transcript ready",actionLabel:"View",onAction:()=>{},onDismiss:()=>{},children:"The call from 2:14 PM has been transcribed."})]})},c={name:"With Leading Avatar",render:()=>a.jsxs(n,{className:"static inset-auto w-[400px]",children:[a.jsx(s,{variant:"info",title:"Maya Chen",leading:a.jsx(l,{initials:"MC",size:"sm"}),actionLabel:"View",onAction:()=>{},onDismiss:()=>{},children:a.jsxs("span",{className:"flex flex-col items-start gap-1",children:[a.jsx(O,{shape:"pill",variant:"teal",label:"Chat"}),a.jsx("span",{children:"Is the replacement tank shipping today?"})]})}),a.jsx(s,{variant:"warning",title:"Lucas Thomas",leading:a.jsx(l,{initials:"LT",size:"sm"}),actionLabel:"View",onAction:()=>{},onDismiss:()=>{},children:"Checkout AI Agent requested approval."})]})},m={name:"Keyboard Focus",render:()=>a.jsx(n,{className:"static inset-auto w-[400px]",children:a.jsx(s,{variant:"warning",title:"Warning",actionLabel:"Review",onAction:()=>{},onDismiss:()=>{},children:"Press Tab to reach the buttons."})})};var u,T,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      {(["warning", "error", "info", "success"] as ToastVariant[]).map(v => <Toast key={v} variant={v} title={TOAST_COPY[v].title} onDismiss={() => {}}>
          {TOAST_COPY[v].message}
        </Toast>)}
    </ToastContainer>
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,x,A;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Interactive Demo",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <ToastPlayground />
}`,...(A=(x=r.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var g,b,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With Action",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="success" title="Conversation archived" actionLabel="Undo" onAction={() => {}} onDismiss={() => {}}>
        It moved to your archive.
      </Toast>
      <Toast variant="info" title="New transcript ready" actionLabel="View" onAction={() => {}} onDismiss={() => {}}>
        The call from 2:14 PM has been transcribed.
      </Toast>
    </ToastContainer>
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var C,f,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "With Leading Avatar",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="info" title="Maya Chen" leading={<Avatar initials="MC" size="sm" />} actionLabel="View" onAction={() => {}} onDismiss={() => {}}>
        <span className="flex flex-col items-start gap-1">
          <Tag shape="pill" variant="teal" label="Chat" />
          <span>Is the replacement tank shipping today?</span>
        </span>
      </Toast>
      <Toast variant="warning" title="Lucas Thomas" leading={<Avatar initials="LT" size="sm" />} actionLabel="View" onAction={() => {}} onDismiss={() => {}}>
        Checkout AI Agent requested approval.
      </Toast>
    </ToastContainer>
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,D,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Keyboard Focus",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" actionLabel="Review" onAction={() => {}} onDismiss={() => {}}>
        Press Tab to reach the buttons.
      </Toast>
    </ToastContainer>
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const la=["AllVariants","InteractiveDemo","WithAction","WithLeadingAvatar","KeyboardFocus"];export{i as AllVariants,r as InteractiveDemo,m as KeyboardFocus,o as WithAction,c as WithLeadingAvatar,la as __namedExportsOrder,ma as default};
