import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{B as u}from"./button-5FlDPGRL.js";import{r}from"./index-CXOcBcs0.js";import{T as ps}from"./tooltip-DsDWII6n.js";import{c as gs}from"./index-1evVQkiP.js";import{c as b}from"./utils-BLSKlp9E.js";import{W as vs}from"./warning-icon-D1eWDXY6.js";import{E as hs}from"./error-icon-DM5nl_7y.js";import{I as xs}from"./info-icon-kjQaNeot.js";import{S as ys}from"./success-icon-D1EB_SYY.js";import{X as Is}from"./x-N8aIqrq2.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./createLucideIcon-DEcfmm_F.js";const Ss=gs("flex min-h-[48px] items-start gap-3 rounded-lyra-md px-4 py-3",{variants:{variant:{warning:"bg-lyra-status-warning-subtle",error:"bg-lyra-status-critical-subtle",info:"bg-lyra-status-info-subtle",success:"bg-lyra-status-success-subtle"}},defaultVariants:{variant:"info"}}),As={warning:vs,error:hs,info:xs,success:ys},i=r.forwardRef(({className:c,variant:a="info",onDismiss:t,children:e,...n},l)=>{const m=As[a];return s.jsxs("div",{ref:l,className:b(Ss({variant:a}),c),role:"alert",...n,children:[s.jsx("span",{className:"flex-shrink-0 pt-0.5","aria-hidden":"true",children:s.jsx(m,{className:"h-5 w-5"})}),s.jsx("p",{className:"flex-1 lyra-body-md text-lyra-fg-default",children:e}),t&&s.jsx(ps,{content:"Dismiss alert",placement:"left",asLabel:!0,children:s.jsx("button",{onClick:t,className:"flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default","aria-label":"Dismiss",children:s.jsx(Is,{className:"h-4 w-4",strokeWidth:1.5})})})]})});i.displayName="InlineNotification";i.__docgenInfo={description:"",methods:[],displayName:"InlineNotification",props:{onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked"},variant:{defaultValue:{value:'"info"',computed:!1},required:!1}},composes:["VariantProps"]};const ks=gs("flex min-h-[48px] w-[380px] items-start gap-3 rounded-lyra-lg border bg-lyra-bg-surface-overlay px-4 py-3 shadow-lg",{variants:{variant:{warning:"border-lyra-status-warning-strong bg-lyra-status-warning-subtle",error:"border-lyra-status-critical-strong bg-lyra-status-critical-subtle",info:"border-lyra-status-info-strong bg-lyra-status-info-subtle",success:"border-lyra-status-success-strong bg-lyra-status-success-subtle"}},defaultVariants:{variant:"info"}}),Es={warning:"text-lyra-status-warning-strong",error:"text-lyra-status-critical-strong",info:"text-lyra-status-info-strong",success:"text-lyra-status-success-strong"},Cs={warning:vs,error:hs,info:xs,success:ys},D=200,o=r.forwardRef(({className:c,variant:a="info",title:t,onDismiss:e,duration:n=0,children:l,style:m,...d},ws)=>{const Ts=Cs[a],A=r.useRef(void 0),[k,Ns]=r.useState(!1),[E,js]=r.useState(!1);r.useLayoutEffect(()=>{const Ds=requestAnimationFrame(()=>{Ns(!0)});return()=>cancelAnimationFrame(Ds)},[]),r.useEffect(()=>{if(n>0&&e)return A.current=setTimeout(()=>C(),n),()=>clearTimeout(A.current)},[n,e]);const C=r.useCallback(()=>{js(!0),setTimeout(()=>{e==null||e()},D)},[e]),bs={transition:`transform ${D}ms ease-out, opacity ${D}ms ease-out`,transform:k&&!E?"translateX(0)":"translateX(calc(100% + 16px))",opacity:k&&!E?1:0,...m};return s.jsxs("div",{ref:ws,className:b(ks({variant:a}),c),role:"alert",style:bs,...d,children:[s.jsx("span",{className:"flex-shrink-0 pt-0.5","aria-hidden":"true",children:s.jsx(Ts,{className:"h-5 w-5"})}),s.jsxs("div",{className:"flex-1 min-w-0",children:[t&&s.jsx("p",{className:b("lyra-body-md-emphasis",Es[a]),children:t}),l&&s.jsx("p",{className:"lyra-body-md text-lyra-fg-default mt-0.5",children:l})]}),e&&s.jsx(ps,{content:"Dismiss notification",placement:"left",asLabel:!0,children:s.jsx("button",{onClick:C,className:"flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-lyra-xs text-lyra-fg-secondary transition-colors hover:text-lyra-fg-default","aria-label":"Dismiss",children:s.jsx(Is,{className:"h-4 w-4",strokeWidth:1.5})})})]})});o.displayName="Toast";const S=r.forwardRef(({className:c,children:a,...t},e)=>s.jsx("div",{ref:e,"aria-live":"polite","aria-relevant":"additions removals",className:b("fixed bottom-4 right-4 z-50 flex flex-col gap-3 overflow-hidden",c),style:{pointerEvents:"none"},...t,children:s.jsx("div",{style:{pointerEvents:"auto"},className:"flex flex-col gap-3",children:a})}));S.displayName="ToastContainer";function Ws(){const[c,a]=r.useState([]),t=r.useRef(0),e=r.useCallback(l=>{const m=`toast-${++t.current}`;return a(d=>[...d,{...l,id:m}]),m},[]),n=r.useCallback(l=>{a(m=>m.filter(d=>d.id!==l))},[]);return{toasts:c,addToast:e,dismissToast:n}}o.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{variant:{required:!1,tsType:{name:"union",raw:'"warning" | "error" | "info" | "success"',elements:[{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Bold title text"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dismiss button is clicked"},duration:{required:!1,tsType:{name:"number"},description:"Auto-dismiss after this many ms (0 = no auto-dismiss)",defaultValue:{value:"0",computed:!1}}}};S.__docgenInfo={description:"",methods:[],displayName:"ToastContainer"};const Qs={title:"Atoms/Alerts",tags:["autodocs"],parameters:{layout:"padded"}},f={name:"Default",render:()=>s.jsx("div",{className:"w-full",children:s.jsx(i,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."})})},p={name:"Inline — All Variants",render:()=>s.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[s.jsx(i,{variant:"warning",onDismiss:()=>{},children:"Advise users of conditions that need attention or could cause future problems if ignored."}),s.jsx(i,{variant:"error",onDismiss:()=>{},children:"Highlight critical issues or failed requirements that prevent the user from completing a workflow."}),s.jsx(i,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."}),s.jsx(i,{variant:"success",onDismiss:()=>{},children:"Confirm completion of a major page-level process"})]})},g={name:"Inline — Warning",render:()=>s.jsx("div",{className:"w-full",children:s.jsx(i,{variant:"warning",onDismiss:()=>{},children:"Advise users of conditions that need attention or could cause future problems if ignored."})})},v={name:"Inline — Error",render:()=>s.jsx("div",{className:"w-full",children:s.jsx(i,{variant:"error",onDismiss:()=>{},children:"Highlight critical issues or failed requirements that prevent the user from completing a workflow."})})},h={name:"Inline — Info",render:()=>s.jsx("div",{className:"w-full",children:s.jsx(i,{variant:"info",onDismiss:()=>{},children:"Important background information, upcoming changes, or neutral system status updates."})})},x={name:"Inline — Success",render:()=>s.jsx("div",{className:"w-full",children:s.jsx(i,{variant:"success",onDismiss:()=>{},children:"Confirm completion of a major page-level process"})})},y={name:"Toast — All Variants",render:()=>s.jsxs("div",{className:"flex flex-col gap-3 w-[380px]",children:[s.jsx(o,{variant:"warning",title:"Warning",onDismiss:()=>{},children:"Advise users of conditions that might cause issues."}),s.jsx(o,{variant:"error",title:"Error",onDismiss:()=>{},children:"A critical action has failed and needs attention."}),s.jsx(o,{variant:"info",title:"Info",onDismiss:()=>{},children:"Important background information or system updates."}),s.jsx(o,{variant:"success",title:"Success",onDismiss:()=>{},children:"Action completed successfully."})]})},I={name:"Toast — Warning",render:()=>s.jsx("div",{className:"w-[380px]",children:s.jsx(o,{variant:"warning",title:"Warning",onDismiss:()=>{},children:"Advise users of conditions that might cause issues."})})},w={name:"Toast — Error",render:()=>s.jsx("div",{className:"w-[380px]",children:s.jsx(o,{variant:"error",title:"Error",onDismiss:()=>{},children:"A critical action has failed and needs attention."})})},T={name:"Toast — Info",render:()=>s.jsx("div",{className:"w-[380px]",children:s.jsx(o,{variant:"info",title:"Info",onDismiss:()=>{},children:"Important background information or system updates."})})},N={name:"Toast — Success",render:()=>s.jsx("div",{className:"w-[380px]",children:s.jsx(o,{variant:"success",title:"Success",onDismiss:()=>{},children:"Action completed successfully."})})},Vs=()=>{const{toasts:c,addToast:a,dismissToast:t}=Ws(),e=n=>{a({variant:n,...{warning:{title:"Warning",message:"This action may have unintended consequences."},error:{title:"Error",message:"Something went wrong. Please try again."},info:{title:"Info",message:"A new version is available for download."},success:{title:"Success",message:"Your changes have been saved."}}[n],duration:5e3})};return s.jsxs("div",{className:"flex gap-2",children:[s.jsx(u,{variant:"outline",size:"sm",onClick:()=>e("warning"),children:"Warning Toast"}),s.jsx(u,{variant:"outline",size:"sm",onClick:()=>e("error"),children:"Error Toast"}),s.jsx(u,{variant:"outline",size:"sm",onClick:()=>e("info"),children:"Info Toast"}),s.jsx(u,{variant:"outline",size:"sm",onClick:()=>e("success"),children:"Success Toast"}),s.jsx(S,{children:c.map(n=>s.jsx(o,{variant:n.variant,title:n.title,duration:n.duration,onDismiss:()=>t(n.id),children:n.message},n.id))})]})},j={name:"Toast — Interactive Demo",parameters:{layout:"fullscreen"},render:()=>s.jsx(Vs,{})};var W,V,q;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
}`,...(q=(V=f.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,R,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var M,H,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Inline — Warning",
  render: () => <div className="w-full">
      <InlineNotification variant="warning" onDismiss={() => {}}>
        Advise users of conditions that need attention or could cause future problems if ignored.
      </InlineNotification>
    </div>
}`,...(P=(H=g.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var $,B,L;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Inline — Error",
  render: () => <div className="w-full">
      <InlineNotification variant="error" onDismiss={() => {}}>
        Highlight critical issues or failed requirements that prevent the user from completing a workflow.
      </InlineNotification>
    </div>
}`,...(L=(B=v.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var X,F,O;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Inline — Info",
  render: () => <div className="w-full">
      <InlineNotification variant="info" onDismiss={() => {}}>
        Important background information, upcoming changes, or neutral system status updates.
      </InlineNotification>
    </div>
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var Y,G,J;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Inline — Success",
  render: () => <div className="w-full">
      <InlineNotification variant="success" onDismiss={() => {}}>
        Confirm completion of a major page-level process
      </InlineNotification>
    </div>
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Toast — All Variants",
  render: () => <div className="flex flex-col gap-3 w-[380px]">
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
    </div>
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,ss,es;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Toast — Warning",
  render: () => <div className="w-[380px]">
      <Toast variant="warning" title="Warning" onDismiss={() => {}}>
        Advise users of conditions that might cause issues.
      </Toast>
    </div>
}`,...(es=(ss=I.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};var ns,as,rs;w.parameters={...w.parameters,docs:{...(ns=w.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  name: "Toast — Error",
  render: () => <div className="w-[380px]">
      <Toast variant="error" title="Error" onDismiss={() => {}}>
        A critical action has failed and needs attention.
      </Toast>
    </div>
}`,...(rs=(as=w.parameters)==null?void 0:as.docs)==null?void 0:rs.source}}};var ts,is,os;T.parameters={...T.parameters,docs:{...(ts=T.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  name: "Toast — Info",
  render: () => <div className="w-[380px]">
      <Toast variant="info" title="Info" onDismiss={() => {}}>
        Important background information or system updates.
      </Toast>
    </div>
}`,...(os=(is=T.parameters)==null?void 0:is.docs)==null?void 0:os.source}}};var cs,ls,ms;N.parameters={...N.parameters,docs:{...(cs=N.parameters)==null?void 0:cs.docs,source:{originalSource:`{
  name: "Toast — Success",
  render: () => <div className="w-[380px]">
      <Toast variant="success" title="Success" onDismiss={() => {}}>
        Action completed successfully.
      </Toast>
    </div>
}`,...(ms=(ls=N.parameters)==null?void 0:ls.docs)==null?void 0:ms.source}}};var ds,us,fs;j.parameters={...j.parameters,docs:{...(ds=j.parameters)==null?void 0:ds.docs,source:{originalSource:`{
  name: "Toast — Interactive Demo",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <ToastPlayground />
}`,...(fs=(us=j.parameters)==null?void 0:us.docs)==null?void 0:fs.source}}};const Us=["Default","InlineAll","InlineWarning","InlineError","InlineInfo","InlineSuccess","ToastAll","ToastWarning","ToastError","ToastInfo","ToastSuccess","ToastInteractive"];export{f as Default,p as InlineAll,v as InlineError,h as InlineInfo,x as InlineSuccess,g as InlineWarning,y as ToastAll,w as ToastError,T as ToastInfo,j as ToastInteractive,N as ToastSuccess,I as ToastWarning,Us as __namedExportsOrder,Qs as default};
