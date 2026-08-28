import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-CXOcBcs0.js";import{I as H}from"./icon-DgdCffbn.js";import{T}from"./tooltip-C4O8ztA7.js";import{c as _}from"./index-1evVQkiP.js";import{c as O}from"./utils-BLSKlp9E.js";import{W as M}from"./warning-icon-solid-C2gh2Y-U.js";import{E as P}from"./error-icon-solid-C6_pXXD0.js";import{I as z}from"./info-icon-solid-BHK4S1rL.js";import{S as B}from"./success-icon-solid-DxWMLn7-.js";import{X as L}from"./x-N8aIqrq2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./createLucideIcon-DEcfmm_F.js";const X=_("flex min-h-[48px] flex-col gap-3 rounded-lyra-md px-4 py-3",{variants:{variant:{warning:"bg-lyra-status-warning-subtle",error:"bg-lyra-status-critical-subtle",info:"bg-lyra-status-info-subtle",success:"bg-lyra-status-success-subtle"}},defaultVariants:{variant:"info"}}),F={warning:M,error:P,info:z,success:B},G={warning:"status-warning",error:"status-critical",info:"status-info",success:"status-success"},e=V.forwardRef(({className:A,variant:l="info",onDismiss:c,action:m,children:C,...q},W)=>{const R=F[l];return n.jsxs("div",{ref:W,className:O(X({variant:l}),A),role:"alert",...q,children:[n.jsxs("div",{className:"flex items-start gap-3",children:[n.jsx(H,{icon:R,size:"md",color:G[l],decorative:!0,className:"shrink-0 pt-0.5"}),n.jsx("p",{className:"flex-1 lyra-body-md text-lyra-fg-default",children:C}),c&&n.jsx(T,{content:"Dismiss alert",placement:"left",asLabel:!0,children:n.jsx("button",{onClick:c,className:"flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-action transition-colors hover:text-lyra-fg-default","aria-label":"Dismiss",children:n.jsx(L,{className:"h-4 w-4",strokeWidth:1.5})})})]}),m&&n.jsx("div",{className:"pl-8",children:m})]})});e.displayName="InlineNotification";e.__docgenInfo={description:"",methods:[],displayName:"InlineNotification",props:{onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional footer content (e.g. a `Button`) rendered as its own row below\n the icon/text row, indented to align under the message text (past the\n `md` icon's 20px + the row's `gap-3` 12px = 32px / `pl-8`). Omitted by\n default so every pre-existing call site (plain text, no action) renders\n exactly as before — this only affects notifications that opt in."},variant:{defaultValue:{value:'"info"',computed:!1},required:!1}},composes:["VariantProps"]};const dn={title:"Custom Primitives/Inline Notification",tags:["autodocs"],parameters:{layout:"padded"}},i={name:"Default",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."})})},s={name:"Inline — All Variants",render:()=>n.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[n.jsx(e,{variant:"warning",onDismiss:()=>{},children:"Advise users of conditions that need attention or could cause future problems if ignored."}),n.jsx(e,{variant:"error",onDismiss:()=>{},children:"Highlight critical issues or failed requirements that prevent the user from completing a workflow."}),n.jsx(e,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."}),n.jsx(e,{variant:"success",onDismiss:()=>{},children:"Confirm completion of a major page-level process"})]})},r={name:"Inline — Warning",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"warning",onDismiss:()=>{},children:"Advise users of conditions that need attention or could cause future problems if ignored."})})},a={name:"Inline — Error",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"error",onDismiss:()=>{},children:"Highlight critical issues or failed requirements that prevent the user from completing a workflow."})})},o={name:"Inline — Info",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."})})},t={name:"Inline — Success",render:()=>n.jsx("div",{className:"w-full",children:n.jsx(e,{variant:"success",onDismiss:()=>{},children:"Confirm completion of a major page-level process"})})};var d,u,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var I,v,x;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Inline — Warning",
  render: () => <div className="w-full">
      <InlineNotification variant="warning" onDismiss={() => {}}>
        Advise users of conditions that need attention or could cause future problems if ignored.
      </InlineNotification>
    </div>
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,w,j;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Inline — Error",
  render: () => <div className="w-full">
      <InlineNotification variant="error" onDismiss={() => {}}>
        Highlight critical issues or failed requirements that prevent the user from completing a workflow.
      </InlineNotification>
    </div>
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var y,b,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Inline — Info",
  render: () => <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,k,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Inline — Success",
  render: () => <div className="w-full">
      <InlineNotification variant="success" onDismiss={() => {}}>
        Confirm completion of a major page-level process
      </InlineNotification>
    </div>
}`,...(E=(k=t.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const un=["Default","InlineAll","InlineWarning","InlineError","InlineInfo","InlineSuccess"];export{i as Default,s as InlineAll,a as InlineError,o as InlineInfo,t as InlineSuccess,r as InlineWarning,un as __namedExportsOrder,dn as default};
