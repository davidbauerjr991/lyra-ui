import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CXOcBcs0.js";import{S as i}from"./side-panel-B_8aHlc3.js";import{B as f}from"./button-5FlDPGRL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-Bfsb3MJm.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./panel-pin-button-B4dXEUQg.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";const E={title:"Atoms/SidePanel",component:i,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"Side Panel — Left",render:()=>{const[r,o]=l.useState(!0),[a,d]=l.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(i,{side:"left",open:r,pinned:a,headerTitle:"Designer",onPinToggle:()=>d(n=>!n),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Side panel content."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(f,{onClick:()=>o(n=>!n),variant:"outline",children:r?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:a?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},t={name:"Side Panel — Right",render:()=>{const[r,o]=l.useState(!0),[a,d]=l.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(f,{onClick:()=>o(n=>!n),variant:"outline",children:r?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:a?"Pinned":"Overlay"})]}),e.jsx(i,{side:"right",open:r,pinned:a,headerTitle:"Details",onPinToggle:()=>d(n=>!n),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Right side panel content."})})})]})}};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Side Panel — Left",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <SidePanel side="left" open={open} pinned={pinned} headerTitle="Designer" onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Side panel content.</p>
          </div>
        </SidePanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>;
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,x,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Side Panel — Right",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned" : "Overlay"}
          </p>
        </div>
        <SidePanel side="right" open={open} pinned={pinned} headerTitle="Details" onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Right side panel content.</p>
          </div>
        </SidePanel>
      </div>;
  }
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const U=["Left","Right"];export{s as Left,t as Right,U as __namedExportsOrder,E as default};
