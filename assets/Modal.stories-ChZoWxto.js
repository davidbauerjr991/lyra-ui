import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-DhMLlvMY.js";import{M as r}from"./modal-Bot481lx.js";import{B as a}from"./button-C_xtDadR.js";import{I as b}from"./input-BalbX2Cc.js";import{S as N}from"./select-CaAOxWdC.js";import{R as ne,a as y}from"./radio-DXzMZqVT.js";import{T as re}from"./tooltip-B7WaxDQZ.js";import{E as oe}from"./error-icon-BKl2xMq_.js";import{I as te}from"./info-icon-CVWl96lq.js";import{c as le}from"./utils-BLSKlp9E.js";import{X as ie}from"./x-CzxgOx-T.js";import{M as de,a as ce}from"./minimize-2-8DCE4oLK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./overlay-D2lank0-.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./container-CKx-TDg4.js";import"./container-header-D2yZ6g4C.js";import"./badge-CSIGLv9X.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DV0nvecx.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./index-pcZVUfq6.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./popover-Di03N3uO.js";import"./index-BmfIz0--.js";import"./checkbox-BRQPSInb.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./index-BuRg0FgW.js";import"./index-DDAUwIz-.js";const g=j.forwardRef(({className:s,...l},t)=>e.jsx("svg",{ref:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,...l,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.62572 2.00001C7.23631 0.814808 8.76277 0.814808 9.37336 2.00001L15.7852 13.3328C16.3957 14.518 15.6321 16 14.4109 16H1.58834C0.367362 15.9997 -0.395627 14.5179 0.214906 13.3328L6.62572 2.00001ZM8.00003 11.8015C7.33729 11.8015 6.80004 12.3388 6.80004 13.0015C6.80028 13.6641 7.33744 14.2015 8.00003 14.2015C8.66235 14.2012 9.19979 13.6639 9.20003 13.0015C9.20003 12.339 8.6625 11.8018 8.00003 11.8015ZM8.00003 4.99988C7.44775 4.99988 7.00004 5.4476 7.00004 5.99989V8.99993C7.00013 9.55214 7.44781 9.99994 8.00003 9.99994C8.55206 9.9997 8.99993 9.55199 9.00003 8.99993V5.99989C9.00003 5.44775 8.55211 5.00012 8.00003 4.99988Z",fill:"#8E6800"})}));g.displayName="WarningIcon";g.__docgenInfo={description:"",methods:[],displayName:"WarningIcon"};const w=j.forwardRef(({className:s,...l},t)=>e.jsxs("svg",{ref:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,...l,children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"#1B6B2A"}),e.jsx("path",{d:"M4.5 8.5L6.5 10.5L11.5 5.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}));w.displayName="SuccessIcon";w.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};const ra={title:"UI/Modal",component:r,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function n({label:s="Close dialog",onClick:l}){return e.jsx(re,{content:s,placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":s,onClick:l,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:e.jsx(ie,{className:"h-5 w-5",strokeWidth:1.5,"aria-hidden":"true"})})})}const o={sm:"w-[360px]",md:"w-[480px]",lg:"w-[640px]"};function C(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-5 px-5",children:[e.jsx(b,{label:"Input Label",placeholder:"Text"}),e.jsx(N,{label:"Input Label",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}]}),e.jsxs(ne,{label:"Input Label",defaultValue:"option1",name:"modal-radio",children:[e.jsx(y,{value:"option1",label:"Radio label"}),e.jsx(y,{value:"option2",label:"Radio label"}),e.jsx(y,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Save"})]})]})}const i={name:"Small (360px)",render:()=>e.jsx(r,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(n,{}),className:o.sm,children:e.jsx(C,{})})},d={name:"Medium (480px)",render:()=>e.jsx(r,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(n,{}),className:o.md,children:e.jsx(C,{})})},c={name:"Large (640px)",render:()=>e.jsx(r,{open:!0,headerTitle:"Dialog Title",headerActions:e.jsx(n,{}),className:o.lg,children:e.jsx(C,{})})},m={render:()=>e.jsxs(r,{open:!0,headerTitle:"Exit without saving?",headerIcon:e.jsx(g,{className:"h-5 w-5"}),headerActions:e.jsx(n,{}),className:o.md,children:[e.jsx("div",{className:"flex flex-col gap-4 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a warning modal whenever an action might have permanent implications. Clearly describe what will happen if they proceed, and always offer a safe way to exit."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Continue"})]})]})},p={render:()=>e.jsxs(r,{open:!0,headerTitle:"Delete Policy?",headerIcon:e.jsx(g,{className:"h-5 w-5"}),headerActions:e.jsx(n,{}),className:o.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use a destructive modal for irreversible actions with high impact on the system. This action cannot be undone."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"destructive",children:"Delete"})]})]})},u={render:()=>e.jsxs(r,{open:!0,headerTitle:"Action failed",headerIcon:e.jsx(oe,{className:"h-5 w-5"}),headerActions:e.jsx(n,{}),className:o.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"The action could not be completed. Review the errors below and try again."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{variant:"outline",children:"Retry"}),e.jsx(a,{children:"OK"})]})]})},x={render:()=>e.jsxs(r,{open:!0,headerTitle:"Important notice!",headerIcon:e.jsx(te,{className:"h-5 w-5"}),headerActions:e.jsx(n,{}),className:o.md,children:[e.jsx("div",{className:"px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Use an info modal only when the message is important enough to interrupt the user's workflow."})}),e.jsx("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:e.jsx(a,{children:"OK"})})]})},h={render:()=>e.jsxs(r,{open:!0,headerTitle:"Action Completed",headerIcon:e.jsx(w,{className:"h-5 w-5"}),headerActions:e.jsx(n,{}),className:o.md,children:[e.jsx("div",{className:"flex flex-col gap-2 px-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Your changes have been saved successfully."})}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(a,{variant:"outline",children:"View Details"}),e.jsx(a,{children:"Done"})]})]})};function me(){const[s,l]=j.useState(!1),t=e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(re,{content:s?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":s?"Restore modal size":"Expand to fullscreen",onClick:()=>l(B=>!B),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:s?e.jsx(de,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(ce,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}),e.jsx(n,{label:"Close dialog"})]});return e.jsxs(r,{open:!0,headerTitle:"Query Builder",headerActions:t,className:le("flex flex-col transition-all duration-200",s?"w-screen h-screen rounded-none":"w-[1024px] max-w-[calc(100vw-2rem)] h-[768px] max-h-[calc(100vh-2rem)] rounded-lyra-lg"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:10},(B,I)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",I+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(b,{placeholder:"Condition...",className:"flex-1"}),e.jsx(N,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},I))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})}const f={name:"Fullscreen (toggleable)",parameters:{layout:"fullscreen"},render:()=>e.jsx(me,{})},v={name:"Overflow (fixed header + footer)",render:()=>e.jsxs(r,{open:!0,headerTitle:"Query Builder",headerActions:e.jsx(n,{label:"Close Query Builder"}),className:le(o.lg,"flex flex-col max-h-[80vh]"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx("div",{className:"flex flex-col gap-4",children:Array.from({length:8},(s,l)=>e.jsxs("div",{className:"p-3 rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["Row ",l+1," — scrollable content area"]}),e.jsxs("div",{className:"flex gap-3 mt-2",children:[e.jsx(b,{placeholder:"Condition...",className:"flex-1"}),e.jsx(N,{options:[{value:"eq",label:"Equals"},{value:"ne",label:"Not Equals"}],className:"w-40"})]})]},l))})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(a,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Apply"})]})]})};var M,S,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Small (360px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.sm}>
      <FormContent />
    </Modal>
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var A,R,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Medium (480px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.md}>
      <FormContent />
    </Modal>
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,k,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Large (640px)",
  render: () => <Modal open headerTitle="Dialog Title" headerActions={<CloseButton />} className={widths.lg}>
      <FormContent />
    </Modal>
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var L,O,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var q,_,U;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var Q,V,K;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(K=(V=u.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var z,Z,G;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var P,Y,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var X,J,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Fullscreen (toggleable)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <FullscreenDemo />
}`,...($=(J=f.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var ee,ae,se;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const la=["Small","Medium","Large","Warning","Destructive","Error","Info","Success","Fullscreen","Overflow"];export{p as Destructive,u as Error,f as Fullscreen,x as Info,c as Large,d as Medium,v as Overflow,i as Small,h as Success,m as Warning,la as __namedExportsOrder,ra as default};
