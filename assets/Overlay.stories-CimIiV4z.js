import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-CXOcBcs0.js";import{O as S,a as d}from"./overlay-IAkPALR2.js";import{C as w}from"./container-D8MK8QBE.js";import{B as s}from"./button-DTrF7KLq.js";import{T as D}from"./tooltip-Cy9hcxi2.js";import{X as L}from"./x-N8aIqrq2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./index-C1YDQLuO.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./container-header-BbK1XDO0.js";import"./index-BDkVnVO1.js";import"./badge-BsM2Tnvd.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./createLucideIcon-DEcfmm_F.js";const $={title:"Headless Primitives/Overlay",tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function W({onClick:a}){return e.jsx(D,{content:"Close",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":"Close",onClick:a,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:e.jsx(L,{className:"h-5 w-5",strokeWidth:1.5})})})}function u({onClose:a}){return e.jsx(w,{variant:"modal",headerTitle:"Dialog Title",headerActions:e.jsx(W,{onClick:a}),className:"w-[480px] max-w-[calc(100vw-2rem)]",children:e.jsxs("div",{className:"flex flex-col gap-4 px-5 pb-5 pt-2",children:[e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["This modal appears above the overlay. Press ",e.jsx("kbd",{className:"lyra-body-sm bg-lyra-bg-surface-canvas border border-lyra-border-subtle rounded px-1",children:"Esc"})," or click outside to dismiss."]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(s,{variant:"outline",onClick:a,children:"Cancel"}),e.jsx(s,{onClick:a,children:"Confirm"})]})]})})}const t={name:"Dark overlay",render:()=>{const[a,r]=n.useState(!1);return e.jsxs("div",{className:"flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(s,{onClick:()=>r(!0),children:"Open with Dark Overlay"}),e.jsx(d,{open:a,variant:"dark",onClose:()=>r(!1),children:e.jsx(u,{onClose:()=>r(!1)})})]})}},o={name:"Light overlay",render:()=>{const[a,r]=n.useState(!1);return e.jsxs("div",{className:"flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(s,{onClick:()=>r(!0),children:"Open with Light Overlay"}),e.jsx(d,{open:a,variant:"light",onClose:()=>r(!1),children:e.jsx(u,{onClose:()=>r(!1)})})]})}},l={name:"Both Variants",render:()=>{const[a,r]=n.useState(null);return e.jsxs("div",{className:"flex gap-4 items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(s,{onClick:()=>r("dark"),children:"Dark"}),e.jsx(s,{variant:"outline",onClick:()=>r("light"),children:"Light"}),a&&e.jsx(d,{open:!0,variant:a,onClose:()=>r(null),children:e.jsx(u,{onClose:()=>r(null)})})]})}},i={name:"Dismiss on backdrop click",render:()=>{const[a,r]=n.useState(!1);return e.jsxs("div",{className:"flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(s,{onClick:()=>r(!0),children:"Open modal"}),e.jsx(d,{open:a,variant:"dark",closeOnBackdropClick:!0,onClose:()=>r(!1),children:e.jsx(u,{onClose:()=>r(!1)})})]})}},c={name:"Backdrop only (no portal)",render:()=>{const[a,r]=n.useState(!1);return e.jsxs("div",{className:"relative flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:"Page content behind the overlay"}),e.jsx(s,{className:"absolute bottom-4 right-4",onClick:()=>r(!0),children:"Show backdrop"}),a&&e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"dark",className:"absolute rounded-lyra-lg",onClick:()=>r(!1)}),e.jsx("div",{className:"absolute z-50",children:e.jsx(s,{variant:"outline",onClick:()=>r(!1),children:"Dismiss"})})]})]})}};var m,p,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Dark overlay",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle">
        <Button onClick={() => setOpen(true)}>Open with Dark Overlay</Button>

        <Overlay open={open} variant="dark" onClose={() => setOpen(false)}>
          <SampleModal onClose={() => setOpen(false)} />
        </Overlay>
      </div>;
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Light overlay",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle">
        <Button onClick={() => setOpen(true)}>Open with Light Overlay</Button>

        <Overlay open={open} variant="light" onClose={() => setOpen(false)}>
          <SampleModal onClose={() => setOpen(false)} />
        </Overlay>
      </div>;
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,g,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Both Variants",
  render: () => {
    const [which, setWhich] = useState<"dark" | "light" | null>(null);
    return <div className="flex gap-4 items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle">
        <Button onClick={() => setWhich("dark")}>Dark</Button>
        <Button variant="outline" onClick={() => setWhich("light")}>Light</Button>

        {which && <Overlay open variant={which} onClose={() => setWhich(null)}>
            <SampleModal onClose={() => setWhich(null)} />
          </Overlay>}
      </div>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,O,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Dismiss on backdrop click",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Overlay open={open} variant="dark" closeOnBackdropClick onClose={() => setOpen(false)}>
          <SampleModal onClose={() => setOpen(false)} />
        </Overlay>
      </div>;
  }
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var C,B,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Backdrop only (no portal)",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="relative flex items-center justify-center h-64 bg-lyra-bg-surface-base rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <p className="lyra-body-md text-lyra-fg-default">Page content behind the overlay</p>

        <Button className="absolute bottom-4 right-4" onClick={() => setOpen(true)}>
          Show backdrop
        </Button>

        {open && <>
            <OverlayBackdrop variant="dark" className="absolute rounded-lyra-lg" onClick={() => setOpen(false)} />
            <div className="absolute z-50">
              <Button variant="outline" onClick={() => setOpen(false)}>Dismiss</Button>
            </div>
          </>}
      </div>;
  }
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const ee=["Dark","Light","BothVariants","DismissOnClick","BackdropOnly"];export{c as BackdropOnly,l as BothVariants,t as Dark,i as DismissOnClick,o as Light,ee as __namedExportsOrder,$ as default};
