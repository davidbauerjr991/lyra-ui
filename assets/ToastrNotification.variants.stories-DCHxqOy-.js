import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as C}from"./button-CLz1-b9g.js";import{a as e,T as c,u as D}from"./toast-ck3ZhP5d.js";import{a as m,T as N,b as l}from"./ToastrNotification.shared-CstLORTY.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./index-4W-125c9.js";import"./icon-h0iptIZc.js";import"./warning-icon-solid-CYvTRq-W.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./success-icon-solid-BP6tJnyF.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const $={title:"Headless Primitives/Toastr Notification/Variants",component:e,tags:["!autodocs"],parameters:{layout:"padded"}},r={name:"All Variants",render:()=>a.jsx(c,{className:"static inset-auto w-[400px]",children:["warning","error","info","success"].map(s=>a.jsx(e,{variant:s,title:m[s].title,onDismiss:()=>{},children:m[s].message},s))})},O=()=>{const{toasts:s,addToast:j,dismissToast:y}=D();return a.jsxs("div",{className:"flex gap-2",children:[N.map(t=>a.jsxs(C,{variant:"outline",size:"sm",onClick:()=>j({variant:t,...l[t],duration:5e3}),children:[l[t].title," Toast"]},t)),a.jsx(c,{children:s.map(t=>a.jsx(e,{variant:t.variant,title:t.title,duration:t.duration,onDismiss:()=>y(t.id),children:t.message},t.id))})]})},o={name:"Interactive Demo",parameters:{layout:"fullscreen"},render:()=>a.jsx(O,{})},n={name:"With Action",render:()=>a.jsxs(c,{className:"static inset-auto w-[400px]",children:[a.jsx(e,{variant:"success",title:"Conversation archived",actionLabel:"Undo",onAction:()=>{},onDismiss:()=>{},children:"It moved to your archive."}),a.jsx(e,{variant:"info",title:"New transcript ready",actionLabel:"View",onAction:()=>{},onDismiss:()=>{},children:"The call from 2:14 PM has been transcribed."})]})},i={name:"Keyboard Focus",render:()=>a.jsx(c,{className:"static inset-auto w-[400px]",children:a.jsx(e,{variant:"warning",title:"Warning",actionLabel:"Review",onAction:()=>{},onDismiss:()=>{},children:"Press Tab to reach the buttons."})})};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      {(["warning", "error", "info", "success"] as ToastVariant[]).map(v => <Toast key={v} variant={v} title={TOAST_COPY[v].title} onDismiss={() => {}}>
          {TOAST_COPY[v].message}
        </Toast>)}
    </ToastContainer>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var T,h,v;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Interactive Demo",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <ToastPlayground />
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,A,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "With Action",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="success" title="Conversation archived" actionLabel="Undo" onAction={() => {}} onDismiss={() => {}}>
        It moved to your archive.
      </Toast>
      <Toast variant="info" title="New transcript ready" actionLabel="View" onAction={() => {}} onDismiss={() => {}}>
        The call from 2:14 PM has been transcribed.
      </Toast>
    </ToastContainer>
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var g,w,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Keyboard Focus",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" actionLabel="Review" onAction={() => {}} onDismiss={() => {}}>
        Press Tab to reach the buttons.
      </Toast>
    </ToastContainer>
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const aa=["AllVariants","InteractiveDemo","WithAction","KeyboardFocus"];export{r as AllVariants,o as InteractiveDemo,i as KeyboardFocus,n as WithAction,aa as __namedExportsOrder,$ as default};
