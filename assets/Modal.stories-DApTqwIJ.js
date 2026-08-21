import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-CXOcBcs0.js";import{R as Ne,T as we,P as Ce,b as Te,o as Be,C as Re,c as Ie,D as Me}from"./overlay-IAkPALR2.js";import{c as j}from"./utils-BLSKlp9E.js";import{c as Ae}from"./container-D8MK8QBE.js";import{C as Se}from"./container-header-BbK1XDO0.js";import{B as a}from"./button-DTrF7KLq.js";import{I as R}from"./input-ClCC3Kj0.js";import{S as I}from"./select-DX3ulS80.js";import{R as De,a as B}from"./radio-BEZUIC79.js";import{T as ue}from"./tooltip-Cy9hcxi2.js";import{E as qe}from"./error-icon-Jj0G9Pna.js";import{I as ke}from"./info-icon-DZC0cSDr.js";import{X as Ee}from"./x-N8aIqrq2.js";import{M as Oe,a as Le}from"./minimize-2-BOwQ4FVI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./index-C1YDQLuO.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./index-BDkVnVO1.js";import"./badge-BsM2Tnvd.js";import"./error-icon-solid-C6_pXXD0.js";import"./label-DjGdKyh0.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./popover-DzlchCUr.js";import"./index-C2HVhtBy.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";import"./index-CWPvdnBY.js";const n=N.forwardRef(({open:r,onClose:s,closeOnBackdropClick:o=!1,variant:d,container:c,overlayClassName:he,className:xe,headerTitle:C,headerIcon:S,headerActions:D,headerTitleBadge:q,headerTopSlot:k,headerSubhead:E,headerBordered:fe=!1,headerTitleClassName:O,headerClassName:ge,ariaTitle:ye,description:T,children:ve},be)=>{const je=!!(C||S||D||q||k||E);return e.jsxs(Ne,{open:r,onOpenChange:i=>{i||s==null||s()},children:[e.jsx(we,{asChild:!0,children:e.jsx("span",{"aria-hidden":"true",className:"sr-only"})}),e.jsxs(Ce,{container:c,children:[e.jsx(Te,{className:j(Be({variant:d}),he)}),e.jsxs(Re,{className:"fixed inset-0 z-50 flex items-center justify-center focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onInteractOutside:i=>i.preventDefault(),onEscapeKeyDown:i=>{o||i.preventDefault()},onClick:i=>{o&&i.target===i.currentTarget&&(s==null||s())},...T?{}:{"aria-describedby":void 0},children:[e.jsx(Ie,{className:"sr-only",children:C||ye||"Dialog"}),T&&e.jsx(Me,{className:"sr-only",children:T}),e.jsxs("div",{ref:be,className:j(Ae({variant:"modal"}),xe),children:[je&&e.jsx(Se,{title:C,icon:S,actions:D,titleBadge:q,topSlot:k,subhead:E,bordered:fe,className:ge,...O?{titleClassName:O}:{}}),ve]})]})]})]})});n.displayName="Modal";n.__docgenInfo={description:'Modal — the accessible, portal-rendered dialog surface for the design\nsystem. Built directly on `@radix-ui/react-dialog` (`Root`/`Portal`/\n`Overlay`/`Content`/`Title`), so every modal gets focus trapping,\nEscape-to-dismiss, portal rendering, and a real accessible name for\nfree — instead of every consumer hand-composing `Overlay` +\n`Container variant="modal"` itself (the old pattern — see\n`CampaignDetailsModal.tsx` / `AgentNextGenPage.tsx`\'s welcome modal\nprior to this change) and risking drift, like forgetting `Overlay`\'s\nhidden trigger or Radix\'s `Title` requirement — the reason the\nStorybook-only "Modal" used to be a bare `Container` with no real\ndialog semantics (no focus trap, no portal, no Escape handling) at all.\n\nRenders the exact same visual surface `Container variant="modal"`\nalways has (same `containerVariants`) plus the same header row\n(`ContainerHeader`) — this *is* that composition, just with the Radix\nDialog wiring built in rather than left to every call site.',methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controls visibility — `Modal` owns no internal open state (mirrors `Overlay`)."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dialog should close — Escape, or backdrop click when `closeOnBackdropClick` is true."},closeOnBackdropClick:{required:!1,tsType:{name:"boolean"},description:'Close when the backdrop is clicked, and allow Escape to dismiss.\nDefault: false — matches `Overlay`. Use `true` for anything without a\nmandatory confirm/cancel flow; leave `false` for modals that must be\ndismissed via an explicit button (warning/destructive confirmations,\n"welcome" modals with a forced choice).',defaultValue:{value:"false",computed:!1}},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Portal container — defaults to `document.body`"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Additional className on the backdrop (`Overlay`'s own `className` equivalent)"},className:{required:!1,tsType:{name:"string"},description:"Additional className on the modal surface itself — width/height/rounded overrides"},headerTitle:{required:!1,tsType:{name:"string"},description:""},headerIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerTitleBadge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerTopSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerSubhead:{required:!1,tsType:{name:"string"},description:""},headerBordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},headerTitleClassName:{required:!1,tsType:{name:"string"},description:""},headerClassName:{required:!1,tsType:{name:"string"},description:""},ariaTitle:{required:!1,tsType:{name:"string"},description:'Accessible name for screen readers (Radix `Dialog.Title`, sr-only)\nwhen there\'s no visible `headerTitle`-driven header row to double as\none — e.g. a modal whose body content renders its own heading\ndirectly (`AgentWelcomeMessage`, `LoginCard`), composed as `children`\nrather than through `headerTitle`. Ignored when `headerTitle` is set,\nsince that already supplies both the visible heading and the\naccessible name. Falls back to a generic "Dialog" if neither is set.'},description:{required:!1,tsType:{name:"string"},description:`Accessible description for screen readers (Radix \`Dialog.Description\`)
— sr-only, never rendered visibly. Optional: Radix only warns in the
console when it's missing, it isn't a hard requirement, and most
modals' visible body content already makes the purpose clear.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const w=N.forwardRef(({className:r,...s},o)=>e.jsx("svg",{ref:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r,...s,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.62572 2.00001C7.23631 0.814808 8.76277 0.814808 9.37336 2.00001L15.7852 13.3328C16.3957 14.518 15.6321 16 14.4109 16H1.58834C0.367362 15.9997 -0.395627 14.5179 0.214906 13.3328L6.62572 2.00001ZM8.00003 11.8015C7.33729 11.8015 6.80004 12.3388 6.80004 13.0015C6.80028 13.6641 7.33744 14.2015 8.00003 14.2015C8.66235 14.2012 9.19979 13.6639 9.20003 13.0015C9.20003 12.339 8.6625 11.8018 8.00003 11.8015ZM8.00003 4.99988C7.44775 4.99988 7.00004 5.4476 7.00004 5.99989V8.99993C7.00013 9.55214 7.44781 9.99994 8.00003 9.99994C8.55206 9.9997 8.99993 9.55199 9.00003 8.99993V5.99989C9.00003 5.44775 8.55211 5.00012 8.00003 4.99988Z",fill:"#8E6800"})}));w.displayName="WarningIcon";w.__docgenInfo={description:"",methods:[],displayName:"WarningIcon"};const M=N.forwardRef(({className:r,...s},o)=>e.jsxs("svg",{ref:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r,...s,children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"#1B6B2A"}),e.jsx("path",{d:"M4.5 8.5L6.5 10.5L11.5 5.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}));M.displayName="SuccessIcon";M.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};const Ia={title:"UI/Modal",component:n,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function t({label:r="Close dialog",onClick:s}){return e.jsx(ue,{content:r,placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":r,onClick:s,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:e.jsx(Ee,{className:"h-5 w-5",strokeWidth:1.5,"aria-hidden":"true"})})})}const l={sm:"w-[360px]",md:"w-[480px]",lg:"w-[640px]"};function A(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-5 px-5",children:[e.jsx(R,{label:"Input Label",placeholder:"Text"}),e.jsx(I,{label:"Input Label",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]}),e.jsxs(De,{label:"Input Label",defaultValue:"option1",name:"modal-radio",children:[e.jsx(B,{value:"option1",label:"Radio label"}),e.jsx(B,{value:"option2",label:"Radio label"}),e.jsx(B,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Save"})]})]})}const m={name:"Small (360px)",render:()=>e.jsx(n,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(t,{}),className:l.sm,children:e.jsx(A,{})})},p={name:"Medium (480px)",render:()=>e.jsx(n,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(t,{}),className:l.md,children:e.jsx(A,{})})},u={name:"Large (640px)",render:()=>e.jsx(n,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(t,{}),className:l.lg,children:e.jsx(A,{})})},h={render:()=>e.jsxs(n,{open:!0,headerTitle:"Exit without saving?",headerIcon:e.jsx(w,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-4 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a warning modal whenever an action might have permanent implications. Clearly describe what will happen if they proceed, and always offer a safe way to exit."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Continue"})]})]})},x={render:()=>e.jsxs(n,{open:!0,headerTitle:"Delete Policy?",headerIcon:e.jsx(w,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a destructive modal for irreversible actions with high impact on the system. This action cannot be undone."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"destructive",children:"Delete"})]})]})},f={render:()=>e.jsxs(n,{open:!0,headerTitle:"Action failed",headerIcon:e.jsx(qe,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"The action could not be completed. Review the errors below and try again."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"outline",children:"Retry"}),e.jsx(a,{children:"OK"})]})]})},g={render:()=>e.jsxs(n,{open:!0,headerTitle:"Important notice!",headerIcon:e.jsx(ke,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use an info modal only when the message is important enough to interrupt the user's workflow."})}),e.jsx("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:e.jsx(a,{children:"OK"})})]})},y={render:()=>e.jsxs(n,{open:!0,headerTitle:"Action Completed",headerIcon:e.jsx(M,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Your changes have been saved successfully."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"View Details"}),e.jsx(a,{children:"Done"})]})]})};function Fe(){const[r,s]=N.useState(!1),o=e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(ue,{content:r?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":r?"Restore modal size":"Expand to fullscreen",onClick:()=>s(d=>!d),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:r?e.jsx(Oe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(Le,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}),e.jsx(t,{label:"Close dialog"})]});return e.jsxs(n,{open:!0,headerTitle:"Query Builder",headerActions:o,className:j("flex flex-col transition-all duration-200",r?"w-screen h-screen rounded-none":"w-[1024px] max-w-[calc(100vw-2rem)] h-[768px] max-h-[calc(100vh-2rem)] rounded-lyra-lg"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:10},(d,c)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",c+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(R,{placeholder:"Condition...",className:"flex-1"}),e.jsx(I,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},c))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})}const v={name:"Fullscreen (toggleable)",parameters:{layout:"fullscreen"},render:()=>e.jsx(Fe,{})},b={name:"Overflow (fixed header + footer)",render:()=>e.jsxs(n,{open:!0,headerTitle:"Query Builder",headerActions:e.jsx(t,{label:"Close Query Builder"}),className:j(l.lg,"flex flex-col max-h-[80vh]"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:8},(r,s)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",s+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(R,{placeholder:"Condition...",className:"flex-1"}),e.jsx(I,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},s))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})};var L,F,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Small (360px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.sm}>
      <FormContent />
    </Modal>
}`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,_,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Medium (480px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.md}>
      <FormContent />
    </Modal>
}`,...(P=(_=p.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var U,H,K;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Large (640px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.lg}>
      <FormContent />
    </Modal>
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,z,G;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Modal open headerTitle="Exit without saving?" headerIcon={<WarningIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="flex flex-col gap-4 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use a warning modal whenever an action might have permanent implications.
          Clearly describe what will happen if they proceed, and always offer a safe way to exit.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </div>
    </Modal>
}`,...(G=(z=h.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Z,Y,X;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Modal open headerTitle="Delete Policy?" headerIcon={<WarningIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use a destructive modal for irreversible actions with high impact on the system.
          This action cannot be undone.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </Modal>
}`,...(X=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,$,ee;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Modal open headerTitle="Action failed" headerIcon={<ErrorIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          The action could not be completed. Review the errors below and try again.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Retry</Button>
        <Button>OK</Button>
      </div>
    </Modal>
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Modal open headerTitle="Important notice!" headerIcon={<InfoIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use an info modal only when the message is important enough to interrupt the user's workflow.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button>OK</Button>
      </div>
    </Modal>
}`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,te,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Modal open headerTitle="Action Completed" headerIcon={<SuccessIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Your changes have been saved successfully.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">View Details</Button>
        <Button>Done</Button>
      </div>
    </Modal>
}`,...(le=(te=y.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,de;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Fullscreen (toggleable)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <FullscreenDemo />
}`,...(de=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,me,pe;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Overflow (fixed header + footer)",
  render: () => <Modal open headerTitle="Query Builder" headerActions={<CloseButton label="Close Query Builder" />} className={cn(widths.lg, "flex flex-col max-h-[80vh]")}>
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto min-h-0 px-5 py-4">
        <div className="flex flex-col gap-4">
          {Array.from({
          length: 8
        }, (_, i) => <div key={i} className="p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas">
              <p className="lyra-body-md text-lyra-fg-default">Row {i + 1} — scrollable content area</p>
              <div className="flex gap-3 mt-2">
                <Input placeholder="Condition..." className="flex-1" />
                <Select options={[{
              value: "eq",
              label: "Equals"
            }, {
              value: "ne",
              label: "Not Equals"
            }]} className="w-40" />
              </div>
            </div>)}
        </div>
      </div>

      {/* Fixed footer */}
      <div className="flex-shrink-0 flex justify-end gap-2 px-5 py-4">
        <Button variant="outline">Save Search</Button>
        <div className="flex-1" />
        <Button variant="outline">Cancel</Button>
        <Button>Apply</Button>
      </div>
    </Modal>
}`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ma=["Small","Medium","Large","Warning","Destructive","Error","Info","Success","Fullscreen","Overflow"];export{x as Destructive,f as Error,v as Fullscreen,g as Info,u as Large,p as Medium,b as Overflow,m as Small,y as Success,h as Warning,Ma as __namedExportsOrder,Ia as default};
