import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-CXOcBcs0.js";import{I as H}from"./icon-DhDr6fDF.js";import{T as _}from"./tooltip-ughTrHl0.js";import{c as T}from"./index-1evVQkiP.js";import{c as P}from"./utils-BLSKlp9E.js";import{W as R}from"./warning-icon-DSfiePr3.js";import{E as z}from"./error-icon-Jj0G9Pna.js";import{I as L}from"./info-icon-DZC0cSDr.js";import{S as M}from"./success-icon-DLb2ANhf.js";import{X as O}from"./x-N8aIqrq2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./createLucideIcon-DEcfmm_F.js";const X=T("flex min-h-[48px] items-start gap-3 rounded-lyra-md px-4 py-3",{variants:{variant:{warning:"bg-lyra-status-warning-subtle",error:"bg-lyra-status-critical-subtle",info:"bg-lyra-status-info-subtle",success:"bg-lyra-status-success-subtle"}},defaultVariants:{variant:"info"}}),B={warning:R,error:z,info:L,success:M},e=V.forwardRef(({className:E,variant:l="info",onDismiss:c,children:A,...C},W)=>{const q=B[l];return n.jsxs("div",{ref:W,className:P(X({variant:l}),E),role:"alert",...C,children:[n.jsx(H,{icon:q,size:"md",decorative:!0,className:"shrink-0 pt-0.5"}),n.jsx("p",{className:"flex-1 lyra-body-md text-lyra-fg-default",children:A}),c&&n.jsx(_,{content:"Dismiss alert",placement:"left",asLabel:!0,children:n.jsx("button",{onClick:c,className:"flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action transition-colors hover:text-lyra-fg-default","aria-label":"Dismiss",children:n.jsx(O,{className:"h-4 w-4",strokeWidth:1.5})})})]})});e.displayName="InlineNotification";e.__docgenInfo={description:"",methods:[],displayName:"InlineNotification",props:{onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked"},variant:{defaultValue:{value:'"info"',computed:!1},required:!1}},composes:["VariantProps"]};const cn={title:"Custom Primitives/Inline Notification",tags:["autodocs"],parameters:{layout:"padded"}},i={name:"Default",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."})})},s={name:"Inline — All Variants",render:()=>n.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[n.jsx(e,{variant:"warning",onDismiss:()=>{},children:"Advise users of conditions that need attention or could cause future problems if ignored."}),n.jsx(e,{variant:"error",onDismiss:()=>{},children:"Highlight critical issues or failed requirements that prevent the user from completing a workflow."}),n.jsx(e,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."}),n.jsx(e,{variant:"success",onDismiss:()=>{},children:"Confirm completion of a major page-level process"})]})},r={name:"Inline — Warning",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"warning",onDismiss:()=>{},children:"Advise users of conditions that need attention or could cause future problems if ignored."})})},a={name:"Inline — Error",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"error",onDismiss:()=>{},children:"Highlight critical issues or failed requirements that prevent the user from completing a workflow."})})},o={name:"Inline — Info",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."})})},t={name:"Inline — Success",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"success",onDismiss:()=>{},children:"Confirm completion of a major page-level process"})})};var m,u,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,p,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Inline — All Variants",
  render: () => <div className="flex flex-col gap-4 w-full">
      <InlineNotification variant="warning" onDismiss={() => {}}>
        Advise users of conditions that need attention or could cause future problems if ignored.
      </InlineNotification>
      <InlineNotification variant="error" onDismiss={() => {}}>
        Highlight critical issues or failed requirements that prevent the user from completing a workflow.
      </InlineNotification>
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
      <InlineNotification variant="success" onDismiss={() => {}}>
        Confirm completion of a major page-level process
      </InlineNotification>
    </div>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var I,v,h;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Inline — Warning",
  render: () => <div className="w-full">
      <InlineNotification variant="warning" onDismiss={() => {}}>
        Advise users of conditions that need attention or could cause future problems if ignored.
      </InlineNotification>
    </div>
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,x,w;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Inline — Error",
  render: () => <div className="w-full">
      <InlineNotification variant="error" onDismiss={() => {}}>
        Highlight critical issues or failed requirements that prevent the user from completing a workflow.
      </InlineNotification>
    </div>
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var j,y,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Inline — Info",
  render: () => <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var b,k,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Inline — Success",
  render: () => <div className="w-full">
      <InlineNotification variant="success" onDismiss={() => {}}>
        Confirm completion of a major page-level process
      </InlineNotification>
    </div>
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const mn=["Default","InlineAll","InlineWarning","InlineError","InlineInfo","InlineSuccess"];export{i as Default,s as InlineAll,a as InlineError,o as InlineInfo,t as InlineSuccess,r as InlineWarning,mn as __namedExportsOrder,cn as default};
