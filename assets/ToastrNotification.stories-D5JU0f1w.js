import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{B as o}from"./button-C72EbL54.js";import{T as e,a as t,u as z}from"./toast-EgFrQD8i.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./badge-BsM2Tnvd.js";import"./icon-Dr3-xnV3.js";import"./warning-icon-solid-C2gh2Y-U.js";import"./error-icon-solid-C6_pXXD0.js";import"./info-icon-solid-BHK4S1rL.js";import"./success-icon-solid-DxWMLn7-.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";const ns={title:"Headless Primitives/Toastr Notification",tags:["autodocs"],parameters:{layout:"padded"}},r={name:"Toast — All Variants",render:()=>s.jsxs(e,{className:"static inset-auto w-[400px]",children:[s.jsx(t,{variant:"warning",title:"Warning",onDismiss:()=>{},children:"Advise users of conditions that might cause issues."}),s.jsx(t,{variant:"error",title:"Error",onDismiss:()=>{},children:"A critical action has failed and needs attention."}),s.jsx(t,{variant:"info",title:"Info",onDismiss:()=>{},children:"Important background information or system updates."}),s.jsx(t,{variant:"success",title:"Success",onDismiss:()=>{},children:"Action completed successfully."})]})},i={name:"Toast — Warning",render:()=>s.jsx(e,{className:"static inset-auto w-[400px]",children:s.jsx(t,{variant:"warning",title:"Warning",onDismiss:()=>{},children:"Advise users of conditions that might cause issues."})})},c={name:"Toast — Error",render:()=>s.jsx(e,{className:"static inset-auto w-[400px]",children:s.jsx(t,{variant:"error",title:"Error",onDismiss:()=>{},children:"A critical action has failed and needs attention."})})},m={name:"Toast — Info",render:()=>s.jsx(e,{className:"static inset-auto w-[400px]",children:s.jsx(t,{variant:"info",title:"Info",onDismiss:()=>{},children:"Important background information or system updates."})})},l={name:"Toast — Success",render:()=>s.jsx(e,{className:"static inset-auto w-[400px]",children:s.jsx(t,{variant:"success",title:"Success",onDismiss:()=>{},children:"Action completed successfully."})})},P=()=>{const{toasts:W,addToast:k,dismissToast:b}=z(),n=a=>{k({variant:a,...{warning:{title:"Warning",message:"This action may have unintended consequences."},error:{title:"Error",message:"Something went wrong. Please try again."},info:{title:"Info",message:"A new version is available for download."},success:{title:"Success",message:"Your changes have been saved."}}[a],duration:5e3})};return s.jsxs("div",{className:"flex gap-2",children:[s.jsx(o,{variant:"outline",size:"sm",onClick:()=>n("warning"),children:"Warning Toast"}),s.jsx(o,{variant:"outline",size:"sm",onClick:()=>n("error"),children:"Error Toast"}),s.jsx(o,{variant:"outline",size:"sm",onClick:()=>n("info"),children:"Info Toast"}),s.jsx(o,{variant:"outline",size:"sm",onClick:()=>n("success"),children:"Success Toast"}),s.jsx(e,{children:W.map(a=>s.jsx(t,{variant:a.variant,title:a.title,duration:a.duration,onDismiss:()=>b(a.id),children:a.message},a.id))})]})},d={name:"Toast — Interactive Demo",parameters:{layout:"fullscreen"},render:()=>s.jsx(P,{})};var u,p,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Toast — All Variants",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" onDismiss={() => {}}>
        Advise users of conditions that might cause issues.
      </Toast>
      <Toast variant="error" title="Error" onDismiss={() => {}}>
        A critical action has failed and needs attention.
      </Toast>
      <Toast variant="info" title="Info" onDismiss={() => {}}>
        Important background information or system updates.
      </Toast>
      <Toast variant="success" title="Success" onDismiss={() => {}}>
        Action completed successfully.
      </Toast>
    </ToastContainer>
}`,...(T=(p=r.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var g,f,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Toast — Warning",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="warning" title="Warning" onDismiss={() => {}}>
        Advise users of conditions that might cause issues.
      </Toast>
    </ToastContainer>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,x,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Toast — Error",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="error" title="Error" onDismiss={() => {}}>
        A critical action has failed and needs attention.
      </Toast>
    </ToastContainer>
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var w,D,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Toast — Info",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="info" title="Info" onDismiss={() => {}}>
        Important background information or system updates.
      </Toast>
    </ToastContainer>
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var A,S,y;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Toast — Success",
  render: () => <ToastContainer className="static inset-auto w-[400px]">
      <Toast variant="success" title="Success" onDismiss={() => {}}>
        Action completed successfully.
      </Toast>
    </ToastContainer>
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,E,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Toast — Interactive Demo",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <ToastPlayground />
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const os=["ToastAll","ToastWarning","ToastError","ToastInfo","ToastSuccess","ToastInteractive"];export{r as ToastAll,c as ToastError,m as ToastInfo,d as ToastInteractive,l as ToastSuccess,i as ToastWarning,os as __namedExportsOrder,ns as default};
