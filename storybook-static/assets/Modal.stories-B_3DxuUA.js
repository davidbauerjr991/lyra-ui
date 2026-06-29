import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./index-CXOcBcs0.js";import{C as s}from"./container-ChblM6WT.js";import{B as a}from"./button-Dd7BgKlB.js";import{I as g}from"./input-sI5l2AlR.js";import{S as j}from"./select-BDPJ0PwS.js";import{R as le,a as v}from"./radio-udrh3r0o.js";import{T as y}from"./tooltip-3keU6E-A.js";import{W as ae}from"./warning-icon-D1eWDXY6.js";import{E as te}from"./error-icon-DM5nl_7y.js";import{I as oe}from"./info-icon-kjQaNeot.js";import{S as ie}from"./success-icon-D1EB_SYY.js";import{c as b}from"./utils-BLSKlp9E.js";import{X as se}from"./x-N8aIqrq2.js";import{M as ce,a as de}from"./minimize-2-BOwQ4FVI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./container-header-Bo-bv7NH.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./label-98nUxQ8o.js";import"./createLucideIcon-DEcfmm_F.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./checkbox-BcqoGlbx.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";import"./index-Daj_FiNg.js";const Ue={title:"Atoms/Modal",component:s,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function r({label:n="Close dialog"}){return e.jsx(y,{content:n,placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":n,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:e.jsx(se,{className:"h-5 w-5",strokeWidth:1.5,"aria-hidden":"true"})})})}const l={sm:"w-[360px]",md:"w-[480px]",lg:"w-[640px]"};function N(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-5 px-5",children:[e.jsx(g,{label:"Input Label",placeholder:"Text"}),e.jsx(j,{label:"Input Label",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]}),e.jsxs(le,{label:"Input Label",defaultValue:"option1",name:"modal-radio",children:[e.jsx(v,{value:"option1",label:"Radio label"}),e.jsx(v,{value:"option2",label:"Radio label"}),e.jsx(v,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Save"})]})]})}const o={name:"Small (360px)",render:()=>e.jsx(s,{variant:"modal",headerTitle:"Dialog Title",headerActions:e.jsx(r,{}),className:l.sm,children:e.jsx(N,{})})},i={name:"Medium (480px)",render:()=>e.jsx(s,{variant:"modal",headerTitle:"Dialog Title",headerActions:e.jsx(r,{}),className:l.md,children:e.jsx(N,{})})},c={name:"Large (640px)",render:()=>e.jsx(s,{variant:"modal",headerTitle:"Dialog Title",headerActions:e.jsx(r,{}),className:l.lg,children:e.jsx(N,{})})},d={render:()=>e.jsxs(s,{variant:"modal",headerTitle:"Exit without saving?",headerIcon:e.jsx(ae,{className:"h-5 w-5"}),headerActions:e.jsx(r,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-4 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a warning modal whenever an action might have permanent implications. Clearly describe what will happen if they proceed, and always offer a safe way to exit."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Continue"})]})]})},m={render:()=>e.jsxs(s,{variant:"modal",headerTitle:"Delete Policy?",headerIcon:e.jsx(ae,{className:"h-5 w-5"}),headerActions:e.jsx(r,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a destructive modal for irreversible actions with high impact on the system. This action cannot be undone."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"destructive",children:"Delete"})]})]})},u={render:()=>e.jsxs(s,{variant:"modal",headerTitle:"Action failed",headerIcon:e.jsx(te,{className:"h-5 w-5"}),headerActions:e.jsx(r,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"The action could not be completed. Review the errors below and try again."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"outline",children:"Retry"}),e.jsx(a,{children:"OK"})]})]})},p={render:()=>e.jsxs(s,{variant:"modal",headerTitle:"Important notice!",headerIcon:e.jsx(oe,{className:"h-5 w-5"}),headerActions:e.jsx(r,{}),className:l.md,children:[e.jsx("div",{className:"px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use an info modal only when the message is important enough to interrupt the user's workflow."})}),e.jsx("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:e.jsx(a,{children:"OK"})})]})},x={render:()=>e.jsxs(s,{variant:"modal",headerTitle:"Action Completed",headerIcon:e.jsx(ie,{className:"h-5 w-5"}),headerActions:e.jsx(r,{}),className:l.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Your changes have been saved successfully."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"View Details"}),e.jsx(a,{children:"Done"})]})]})},h={name:"Fullscreen (toggleable)",parameters:{layout:"fullscreen"},render:()=>{const[n,t]=re.useState(!1),ne=e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(y,{content:n?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":n?"Restore modal size":"Expand to fullscreen",onClick:()=>t(w=>!w),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:n?e.jsx(ce,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(de,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}),e.jsx(y,{content:"Close dialog",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":"Close dialog",className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:e.jsx(se,{className:"h-5 w-5",strokeWidth:1.5,"aria-hidden":"true"})})})]});return e.jsx("div",{className:b("flex items-center justify-center w-screen h-screen bg-lyra-bg-surface-canvas",n&&"bg-black/40"),children:e.jsxs(s,{variant:"modal",headerTitle:"Query Builder",headerActions:ne,className:b("flex flex-col transition-all duration-200",n?"w-screen h-screen rounded-none":"w-[1024px] max-w-[calc(100vw-2rem)] h-[768px] max-h-[calc(100vh-2rem)] rounded-lyra-lg"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:10},(w,C)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",C+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(g,{placeholder:"Condition...",className:"flex-1"}),e.jsx(j,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},C))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})})}},f={name:"Overflow (fixed header + footer)",render:()=>e.jsxs(s,{variant:"modal",headerTitle:"Query Builder",headerActions:e.jsx(r,{label:"Close Query Builder"}),className:b(l.lg,"flex flex-col max-h-[80vh]"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:8},(n,t)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",t+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(g,{placeholder:"Condition...",className:"flex-1"}),e.jsx(j,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},t))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})};var B,I,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Small (360px)",
  render: () => <Container variant="modal" headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.sm}>
      <FormContent />
    </Container>
}`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,S,F;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Medium (480px)",
  render: () => <Container variant="modal" headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.md}>
      <FormContent />
    </Container>
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var k,E,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Large (640px)",
  render: () => <Container variant="modal" headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.lg}>
      <FormContent />
    </Container>
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var D,W,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Container variant="modal" headerTitle="Exit without saving?" headerIcon={<WarningIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
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
    </Container>
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var L,O,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Container variant="modal" headerTitle="Delete Policy?" headerIcon={<WarningIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
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
    </Container>
}`,...(M=(O=m.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var z,Q,U;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Container variant="modal" headerTitle="Action failed" headerIcon={<ErrorIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
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
    </Container>
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var _,K,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Container variant="modal" headerTitle="Important notice!" headerIcon={<InfoIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Use an info modal only when the message is important enough to interrupt the user's workflow.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button>OK</Button>
      </div>
    </Container>
}`,...(V=(K=p.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var G,P,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Container variant="modal" headerTitle="Action Completed" headerIcon={<SuccessIcon className="h-5 w-5" />} headerActions={<CloseButton />} className={widths.md}>
      <div className="flex flex-col gap-2 px-5">
        <p className="lyra-body-md text-lyra-fg-default">
          Your changes have been saved successfully.
        </p>
      </div>
      <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
        <Button variant="outline">View Details</Button>
        <Button>Done</Button>
      </div>
    </Container>
}`,...(X=(P=x.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,H,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Fullscreen (toggleable)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const headerActions = <div className="flex items-center gap-1">
        <Tooltip content={isFullscreen ? "Restore" : "Fullscreen"} placement="bottom" asLabel>
          <button aria-label={isFullscreen ? "Restore modal size" : "Expand to fullscreen"} onClick={() => setIsFullscreen(v => !v)} className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
            {isFullscreen ? <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" /> : <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </Tooltip>
        <Tooltip content="Close dialog" placement="bottom" asLabel>
          <button aria-label="Close dialog" className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2">
            <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </Tooltip>
      </div>;
    return <div className={cn("flex items-center justify-center w-screen h-screen bg-lyra-bg-surface-canvas", isFullscreen && "bg-black/40")}>
        <Container variant="modal" headerTitle="Query Builder" headerActions={headerActions} className={cn("flex flex-col transition-all duration-200", isFullscreen ? "w-screen h-screen rounded-none" : "w-[1024px] max-w-[calc(100vw-2rem)] h-[768px] max-h-[calc(100vh-2rem)] rounded-lyra-lg")}>
          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto min-h-0 px-5 py-4">
            <div className="flex flex-col gap-4">
              {Array.from({
              length: 10
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
        </Container>
      </div>;
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Overflow (fixed header + footer)",
  render: () => <Container variant="modal" headerTitle="Query Builder" headerActions={<CloseButton label="Close Query Builder" />} className={cn(widths.lg, "flex flex-col max-h-[80vh]")}>
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
    </Container>
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const _e=["Small","Medium","Large","Warning","Destructive","Error","Info","Success","Fullscreen","Overflow"];export{m as Destructive,u as Error,h as Fullscreen,p as Info,c as Large,i as Medium,f as Overflow,o as Small,x as Success,d as Warning,_e as __namedExportsOrder,Ue as default};
