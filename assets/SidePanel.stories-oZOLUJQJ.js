import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-CXOcBcs0.js";import{S as c,P as j}from"./side-panel-CeCV4IAt.js";import{B}from"./button-GxCpv2fL.js";import{U as C}from"./user-rDz6zf5M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-CvNOYSQL.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-go1ZjKcF.js";const K={title:"Custom Primitives/SidePanel",component:c,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},d={name:"Side Panel — Left",render:()=>{const[n,a]=t.useState(!0),[r,p]=t.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(c,{side:"left",open:n,pinned:r,headerTitle:"Designer",onPinToggle:()=>p(s=>!s),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Side panel content."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(B,{onClick:()=>a(s=>!s),variant:"outline",children:n?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},l={name:"Side Panel — Right",render:()=>{const[n,a]=t.useState(!0),[r,p]=t.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(B,{onClick:()=>a(s=>!s),variant:"outline",children:n?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned":"Overlay"})]}),e.jsx(c,{side:"right",open:n,pinned:r,headerTitle:"Details",onPinToggle:()=>p(s=>!s),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Right side panel content."})})})]})}},o={name:"PanelPinButton",render:()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(j,{pinned:n,onToggle:()=>a(r=>!r)}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}},i={name:"PanelPinButton — Custom Icon (Designer panel trigger)",render:()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(j,{pinned:n,onToggle:()=>a(r=>!r),icon:e.jsx(C,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),pinnedLabel:"Unpin Designer panel",unpinnedLabel:"Pin Designer panel"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}};var m,u,y;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,x,P;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var b,f,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "PanelPinButton",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,N,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "PanelPinButton — Custom Icon (Designer panel trigger)",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />} pinnedLabel="Unpin Designer panel" unpinnedLabel="Pin Designer panel" />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const M=["Left","Right","PinButton","PinButtonCustomIcon"];export{d as Left,o as PinButton,i as PinButtonCustomIcon,l as Right,M as __namedExportsOrder,K as default};
