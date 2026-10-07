import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DhMLlvMY.js";import{I as E}from"./input-CHxvM1hc.js";import{M as i}from"./modal-vamPJIhM.js";import{C as M}from"./container-4ho-TAYP.js";import{c as R}from"./utils-BLSKlp9E.js";import{B as n}from"./button-BLVj2C8E.js";import{w as c,t as A,T as b,C as h,a as I,Q}from"./Modal.shared-DS3ZMt9l.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./overlay-fWttkD6o.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./select-DJKQGHZg.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./radio-sgkaDL_k.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./error-icon-BKl2xMq_.js";import"./info-icon-CVWl96lq.js";const De={title:"UI/Modal/Variants",component:i,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},p={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"flex flex-wrap gap-6",children:I.map(o=>{const{title:t,icon:s}=A[o];return e.jsx(M,{variant:"modal",headerTitle:t,headerIcon:s,headerActions:e.jsx(h,{}),className:c.md,children:e.jsx(b,{tone:o})},o)})})},m={name:"Overflow (fixed header + footer)",render:()=>e.jsxs(i,{open:!0,headerTitle:"Query Builder",headerActions:e.jsx(h,{label:"Close Query Builder"}),className:R(c.lg,"flex flex-col max-h-[80vh]"),children:[e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-5 py-4",children:e.jsx(Q,{count:8})}),e.jsxs("div",{className:"flex-shrink-0 flex justify-end gap-2 px-5 py-4",children:[e.jsx(n,{variant:"outline",children:"Save Search"}),e.jsx("div",{className:"flex-1"}),e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{children:"Apply"})]})]})},u={name:"Alert Dialog (Destructive)",render:()=>{const[o,t]=l.useState(!1),{title:s,icon:d}=A.destructive;return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"destructive",onClick:()=>t(!0),children:"Delete policy…"}),e.jsx(i,{open:o,onClose:()=>t(!1),closeOnBackdropClick:!0,alert:!0,description:"This permanently deletes the policy.",headerTitle:s,headerIcon:d,headerActions:e.jsx(h,{onClick:()=>t(!1)}),className:c.sm,children:e.jsx(b,{tone:"destructive",onClose:()=>t(!1)})})]})}},f={name:"Prevent Close (Unsaved Changes)",render:()=>{const[o,t]=l.useState(!1),[s,d]=l.useState(!1),[D,a]=l.useState(!1),x=l.useRef(null),r=()=>{a(!1),d(!1),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Edit details"}),e.jsxs(i,{open:o,onClose:r,closeOnBackdropClick:!0,preventClose:s,onCloseAttempt:()=>a(!0),headerTitle:"Edit details",headerActions:e.jsx(h,{onClick:()=>s?a(!0):r()}),className:c.md,children:[e.jsxs("div",{className:"flex flex-col gap-5 px-5",children:[e.jsx(E,{label:"Name",placeholder:"Type to make changes",onChange:()=>d(!0)}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:s?"Unsaved changes: Escape and backdrop clicks now ask first.":"No changes yet: Escape closes normally."})]}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(n,{variant:"outline",onClick:()=>s?a(!0):r(),children:"Cancel"}),e.jsx(n,{onClick:r,children:"Save"})]})]}),e.jsxs(i,{open:D,onClose:()=>a(!1),alert:!0,initialFocusRef:x,headerTitle:"Discard changes?",className:c.sm,children:[e.jsx("p",{className:"lyra-body-md text-lyra-fg-default px-5",children:"Your edits will be lost."}),e.jsxs("div",{className:"flex justify-end gap-2 px-5 pb-5 mt-6",children:[e.jsx(n,{ref:x,variant:"outline",onClick:()=>a(!1),children:"Keep editing"}),e.jsx(n,{variant:"destructive",onClick:r,children:"Discard"})]})]})]})}};var C,v,y;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-wrap gap-6">
      {TONES.map(tone => {
      const {
        title,
        icon
      } = toneConfig[tone];
      return <Container key={tone} variant="modal" headerTitle={title} headerIcon={icon} headerActions={<CloseButton />} className={widths.md}>
            <ToneContent tone={tone} />
          </Container>;
    })}
    </div>
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,j,k;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Overflow (fixed header + footer)",
  render: () => <Modal open headerTitle="Query Builder" headerActions={<CloseButton label="Close Query Builder" />} className={cn(widths.lg, "flex flex-col max-h-[80vh]")}>
      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto min-h-0 px-5 py-4">
        <QueryRows count={8} />
      </div>

      {/* Fixed footer */}
      <div className="flex-shrink-0 flex justify-end gap-2 px-5 py-4">
        <Button variant="outline">Save Search</Button>
        <div className="flex-1" />
        <Button variant="outline">Cancel</Button>
        <Button>Apply</Button>
      </div>
    </Modal>
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var B,N,w;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Alert Dialog (Destructive)",
  render: () => {
    const [open, setOpen] = useState(false);
    const {
      title,
      icon
    } = toneConfig.destructive;
    return <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete policy…</Button>
        <Modal open={open} onClose={() => setOpen(false)} closeOnBackdropClick alert description="This permanently deletes the policy." headerTitle={title} headerIcon={icon} headerActions={<CloseButton onClick={() => setOpen(false)} />} className={widths.sm}>
          <ToneContent tone="destructive" onClose={() => setOpen(false)} />
        </Modal>
      </>;
  }
}`,...(w=(N=u.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var O,S,T;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Prevent Close (Unsaved Changes)",
  render: () => {
    const [open, setOpen] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const keepRef = useRef<HTMLButtonElement>(null);
    const close = () => {
      setConfirm(false);
      setDirty(false);
      setOpen(false);
    };
    return <>
        <Button onClick={() => setOpen(true)}>Edit details</Button>
        <Modal open={open} onClose={close} closeOnBackdropClick preventClose={dirty} onCloseAttempt={() => setConfirm(true)} headerTitle="Edit details" headerActions={<CloseButton onClick={() => dirty ? setConfirm(true) : close()} />} className={widths.md}>
          <div className="flex flex-col gap-5 px-5">
            <Input label="Name" placeholder="Type to make changes" onChange={() => setDirty(true)} />
            <p className="lyra-body-sm text-lyra-fg-secondary">
              {dirty ? "Unsaved changes: Escape and backdrop clicks now ask first." : "No changes yet: Escape closes normally."}
            </p>
          </div>
          <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
            <Button variant="outline" onClick={() => dirty ? setConfirm(true) : close()}>Cancel</Button>
            <Button onClick={close}>Save</Button>
          </div>
        </Modal>
        <Modal open={confirm} onClose={() => setConfirm(false)} alert initialFocusRef={keepRef} headerTitle="Discard changes?" className={widths.sm}>
          <p className="lyra-body-md text-lyra-fg-default px-5">Your edits will be lost.</p>
          <div className="flex justify-end gap-2 px-5 pb-5 mt-6">
            <Button ref={keepRef} variant="outline" onClick={() => setConfirm(false)}>Keep editing</Button>
            <Button variant="destructive" onClick={close}>Discard</Button>
          </div>
        </Modal>
      </>;
  }
}`,...(T=(S=f.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const Ee=["AllVariants","Overflow","AlertDialog","PreventClose"];export{u as AlertDialog,p as AllVariants,m as Overflow,f as PreventClose,Ee as __namedExportsOrder,De as default};
