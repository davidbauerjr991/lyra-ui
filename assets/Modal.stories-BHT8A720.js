import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./index-CXOcBcs0.js";import{R as je,T as Ne,P as we,b as Te,o as Ce,C as Be,c as Re,D as Ie}from"./overlay-BeuoP20h.js";import{c as j}from"./utils-BLSKlp9E.js";import{c as Ae}from"./container-B2u1160h.js";import{C as Me}from"./container-header-Ca2x66t9.js";import{B as a}from"./button-GxCpv2fL.js";import{I as C}from"./input-Bj9llYuD.js";import{S as B}from"./select-DfePZdut.js";import{R as Se,a as T}from"./radio-Cs5SiZTO.js";import{T as me}from"./tooltip-ughTrHl0.js";import{W as pe}from"./warning-icon-DSfiePr3.js";import{E as De}from"./error-icon-Jj0G9Pna.js";import{I as qe}from"./info-icon-DZC0cSDr.js";import{S as ke}from"./success-icon-DLb2ANhf.js";import{X as Ee}from"./x-N8aIqrq2.js";import{M as Oe,a as Fe}from"./minimize-2-BOwQ4FVI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./index-MFm5DvZf.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./index-BDkVnVO1.js";import"./badge-go1ZjKcF.js";import"./label-nFez4jEO.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./popover-CyPBLJW1.js";import"./index-DhUdNGNr.js";import"./checkbox-cemurMBH.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";import"./index-C5pUL7te.js";const r=ce.forwardRef(({open:n,onClose:s,closeOnBackdropClick:i=!1,variant:d,container:c,overlayClassName:ue,className:he,headerTitle:N,headerIcon:I,headerActions:A,headerTitleBadge:M,headerTopSlot:S,headerSubhead:D,headerBordered:xe=!1,headerTitleClassName:q,headerClassName:fe,ariaTitle:ye,description:w,children:ge},ve)=>{const be=!!(N||I||A||M||S||D);return e.jsxs(je,{open:n,onOpenChange:o=>{o||s==null||s()},children:[e.jsx(Ne,{asChild:!0,children:e.jsx("span",{"aria-hidden":"true",className:"sr-only"})}),e.jsxs(we,{container:c,children:[e.jsx(Te,{className:j(Ce({variant:d}),ue)}),e.jsxs(Be,{className:"fixed inset-0 z-50 flex items-center justify-center focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onInteractOutside:o=>o.preventDefault(),onEscapeKeyDown:o=>{i||o.preventDefault()},onClick:o=>{i&&o.target===o.currentTarget&&(s==null||s())},...w?{}:{"aria-describedby":void 0},children:[e.jsx(Re,{className:"sr-only",children:N||ye||"Dialog"}),w&&e.jsx(Ie,{className:"sr-only",children:w}),e.jsxs("div",{ref:ve,className:j(Ae({variant:"modal"}),he),children:[be&&e.jsx(Me,{title:N,icon:I,actions:A,titleBadge:M,topSlot:S,subhead:D,bordered:xe,className:fe,...q?{titleClassName:q}:{}}),ge]})]})]})]})});r.displayName="Modal";r.__docgenInfo={description:'Modal — the accessible, portal-rendered dialog surface for the design\nsystem. Built directly on `@radix-ui/react-dialog` (`Root`/`Portal`/\n`Overlay`/`Content`/`Title`), so every modal gets focus trapping,\nEscape-to-dismiss, portal rendering, and a real accessible name for\nfree — instead of every consumer hand-composing `Overlay` +\n`Container variant="modal"` itself (the old pattern — see\n`CampaignDetailsModal.tsx` / `AgentNextGenPage.tsx`\'s welcome modal\nprior to this change) and risking drift, like forgetting `Overlay`\'s\nhidden trigger or Radix\'s `Title` requirement — the reason the\nStorybook-only "Modal" used to be a bare `Container` with no real\ndialog semantics (no focus trap, no portal, no Escape handling) at all.\n\nRenders the exact same visual surface `Container variant="modal"`\nalways has (same `containerVariants`) plus the same header row\n(`ContainerHeader`) — this *is* that composition, just with the Radix\nDialog wiring built in rather than left to every call site.',methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controls visibility — `Modal` owns no internal open state (mirrors `Overlay`)."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the dialog should close — Escape, or backdrop click when `closeOnBackdropClick` is true."},closeOnBackdropClick:{required:!1,tsType:{name:"boolean"},description:'Close when the backdrop is clicked, and allow Escape to dismiss.\nDefault: false — matches `Overlay`. Use `true` for anything without a\nmandatory confirm/cancel flow; leave `false` for modals that must be\ndismissed via an explicit button (warning/destructive confirmations,\n"welcome" modals with a forced choice).',defaultValue:{value:"false",computed:!1}},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"Portal container — defaults to `document.body`"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Additional className on the backdrop (`Overlay`'s own `className` equivalent)"},className:{required:!1,tsType:{name:"string"},description:"Additional className on the modal surface itself — width/height/rounded overrides"},headerTitle:{required:!1,tsType:{name:"string"},description:""},headerIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerTitleBadge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerTopSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerSubhead:{required:!1,tsType:{name:"string"},description:""},headerBordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},headerTitleClassName:{required:!1,tsType:{name:"string"},description:""},headerClassName:{required:!1,tsType:{name:"string"},description:""},ariaTitle:{required:!1,tsType:{name:"string"},description:'Accessible name for screen readers (Radix `Dialog.Title`, sr-only)\nwhen there\'s no visible `headerTitle`-driven header row to double as\none — e.g. a modal whose body content renders its own heading\ndirectly (`AgentWelcomeMessage`, `LoginCard`), composed as `children`\nrather than through `headerTitle`. Ignored when `headerTitle` is set,\nsince that already supplies both the visible heading and the\naccessible name. Falls back to a generic "Dialog" if neither is set.'},description:{required:!1,tsType:{name:"string"},description:`Accessible description for screen readers (Radix \`Dialog.Description\`)
— sr-only, never rendered visibly. Optional: Radix only warns in the
console when it's missing, it isn't a hard requirement, and most
modals' visible body content already makes the purpose clear.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const Ra={title:"UI/Modal",component:r,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function t({label:n="Close dialog",onClick:s}){return e.jsx(me,{content:n,placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":n,onClick:s,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:e.jsx(Ee,{className:"h-5 w-5",strokeWidth:1.5,"aria-hidden":"true"})})})}const l={sm:"w-[360px]",md:"w-[480px]",lg:"w-[640px]"};function R(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-5 px-5",children:[e.jsx(C,{label:"Input Label",placeholder:"Text"}),e.jsx(B,{label:"Input Label",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]}),e.jsxs(Se,{label:"Input Label",defaultValue:"option1",name:"modal-radio",children:[e.jsx(T,{value:"option1",label:"Radio label"}),e.jsx(T,{value:"option2",label:"Radio label"}),e.jsx(T,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Save"})]})]})}const m={name:"Small (360px)",render:()=>e.jsx(r,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(t,{}),className:l.sm,children:e.jsx(R,{})})},p={name:"Medium (480px)",render:()=>e.jsx(r,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(t,{}),className:l.md,children:e.jsx(R,{})})},u={name:"Large (640px)",render:()=>e.jsx(r,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(t,{}),className:l.lg,children:e.jsx(R,{})})},h={render:()=>e.jsxs(r,{open:!0,headerTitle:"Exit without saving?",headerIcon:e.jsx(pe,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-4 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a warning modal whenever an action might have permanent implications. Clearly describe what will happen if they proceed, and always offer a safe way to exit."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Continue"})]})]})},x={render:()=>e.jsxs(r,{open:!0,headerTitle:"Delete Policy?",headerIcon:e.jsx(pe,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a destructive modal for irreversible actions with high impact on the system. This action cannot be undone."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"destructive",children:"Delete"})]})]})},f={render:()=>e.jsxs(r,{open:!0,headerTitle:"Action failed",headerIcon:e.jsx(De,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"The action could not be completed. Review the errors below and try again."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"outline",children:"Retry"}),e.jsx(a,{children:"OK"})]})]})},y={render:()=>e.jsxs(r,{open:!0,headerTitle:"Important notice!",headerIcon:e.jsx(qe,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use an info modal only when the message is important enough to interrupt the user's workflow."})}),e.jsx("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:e.jsx(a,{children:"OK"})})]})},g={render:()=>e.jsxs(r,{open:!0,headerTitle:"Action Completed",headerIcon:e.jsx(ke,{className:"h-5 w-5"}),headerActions:e.jsx(t,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Your changes have been saved successfully."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"View Details"}),e.jsx(a,{children:"Done"})]})]})};function Le(){const[n,s]=ce.useState(!1),i=e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(me,{content:n?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":n?"Restore modal size":"Expand to fullscreen",onClick:()=>s(d=>!d),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:n?e.jsx(Oe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(Fe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}),e.jsx(t,{label:"Close dialog"})]});return e.jsxs(r,{open:!0,headerTitle:"Query Builder",headerActions:i,className:j("flex flex-col transition-all duration-200",n?"w-screen h-screen rounded-none":"w-[1024px] max-w-[calc(100vw-2rem)] h-[768px] max-h-[calc(100vh-2rem)] rounded-lyra-lg"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:10},(d,c)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",c+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(C,{placeholder:"Condition...",className:"flex-1"}),e.jsx(B,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},c))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})}const v={name:"Fullscreen (toggleable)",parameters:{layout:"fullscreen"},render:()=>e.jsx(Le,{})},b={name:"Overflow (fixed header + footer)",render:()=>e.jsxs(r,{open:!0,headerTitle:"Query Builder",headerActions:e.jsx(t,{label:"Close Query Builder"}),className:j(l.lg,"flex flex-col max-h-[80vh]"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:8},(n,s)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",s+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(C,{placeholder:"Condition...",className:"flex-1"}),e.jsx(B,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},s))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})};var k,E,O;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Small (360px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.sm}>
      <FormContent />
    </Modal>
}`,...(O=(E=m.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var F,L,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Medium (480px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.md}>
      <FormContent />
    </Modal>
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var V,P,U;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Large (640px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.lg}>
      <FormContent />
    </Modal>
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,H,K;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(H=h.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,z,G;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(G=(z=x.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Y,X,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=f.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,se,re;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,te,le;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Fullscreen (toggleable)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <FullscreenDemo />
}`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ie,de;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Ia=["Small","Medium","Large","Warning","Destructive","Error","Info","Success","Fullscreen","Overflow"];export{x as Destructive,f as Error,v as Fullscreen,y as Info,u as Large,p as Medium,b as Overflow,m as Small,g as Success,h as Warning,Ia as __namedExportsOrder,Ra as default};
