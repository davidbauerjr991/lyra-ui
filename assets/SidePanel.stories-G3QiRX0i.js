import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-CXOcBcs0.js";import{S as c,P as C}from"./side-panel-DiNN0HDI.js";import{B as A}from"./button-DTrF7KLq.js";import{S as _}from"./select-De_NRQsE.js";import{T as E}from"./tree-menu-Clac48HE.js";import{U as O}from"./user-rDz6zf5M.js";import{C as V}from"./chevron-down-BRCsRsv-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-BbK1XDO0.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-CoDT4W-X.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-BsM2Tnvd.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-Jj0G9Pna.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./popover-DzlchCUr.js";import"./index-C2HVhtBy.js";import"./index-C1YDQLuO.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";const Pe={title:"Custom Primitives/SidePanel",component:c,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"Side Panel — Left",render:()=>{const[n,a]=t.useState(!0),[r,m]=t.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(c,{side:"left",open:n,pinned:r,headerTitle:"Designer",onPinToggle:()=>m(s=>!s),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Side panel content."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(A,{onClick:()=>a(s=>!s),variant:"outline",children:n?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},i={name:"Side Panel — Right",render:()=>{const[n,a]=t.useState(!0),[r,m]=t.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(A,{onClick:()=>a(s=>!s),variant:"outline",children:n?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned":"Overlay"})]}),e.jsx(c,{side:"right",open:n,pinned:r,headerTitle:"Details",onPinToggle:()=>m(s=>!s),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Right side panel content."})})})]})}},D=[{label:"Financial Services",children:[{label:"FS_HCI"},{label:"FS_Manual"}]},{label:"Hospitality",children:[{label:"H_HCI"},{label:"H_Manual"}]}],R=[{label:"Team Alpha",children:[{label:"Alpha_Primary"},{label:"Alpha_Backup"}]},{label:"Team Beta",children:[{label:"Beta_Primary"},{label:"Beta_Backup"}]}],o={name:"Side Panel — View Switcher (headerTitleBadge)",render:()=>{const[n,a]=t.useState("treeA");return e.jsxs("div",{className:"relative h-[420px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(c,{side:"left",pinned:!0,headerTitle:n==="treeA"?"Tree A":"Tree B",headerTitleBadge:e.jsx(_,{options:[{value:"treeA",label:"Tree A"},{value:"treeB",label:"Tree B"}],value:n,onValueChange:r=>a(r),trigger:e.jsx(V,{className:"h-4 w-4","aria-hidden":"true"}),dropdownAlign:"left"}),children:e.jsx(E,{className:"px-2",items:n==="treeA"?D:R},n)}),e.jsx("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content column."})})]})}},d={name:"PanelPinButton",render:()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(C,{pinned:n,onToggle:()=>a(r=>!r)}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}},p={name:"PanelPinButton — Custom Icon (Designer panel trigger)",render:()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(C,{pinned:n,onToggle:()=>a(r=>!r),icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),pinnedLabel:"Unpin Designer panel",unpinnedLabel:"Pin Designer panel"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}};var u,y,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,x,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,v,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Side Panel — View Switcher (headerTitleBadge)",
  render: () => {
    const [view, setView] = useState<ViewSwitcherView>("treeA");
    return <div className="relative h-[420px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <SidePanel side="left" pinned headerTitle={view === "treeA" ? "Tree A" : "Tree B"} headerTitleBadge={<Select options={[{
        value: "treeA",
        label: "Tree A"
      }, {
        value: "treeB",
        label: "Tree B"
      }]} value={view} onValueChange={v => setView(v as ViewSwitcherView)} trigger={<ChevronDown className="h-4 w-4" aria-hidden="true" />} dropdownAlign="left" />}>
          <TreeMenu key={view} className="px-2" items={view === "treeA" ? TREE_A_ITEMS : TREE_B_ITEMS} />
        </SidePanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4">
          <p className="lyra-body-sm text-lyra-fg-secondary">Main content column.</p>
        </div>
      </div>;
  }
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var S,N,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "PanelPinButton",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var w,B,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "PanelPinButton — Custom Icon (Designer panel trigger)",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />} pinnedLabel="Unpin Designer panel" unpinnedLabel="Pin Designer panel" />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(j=(B=p.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const Se=["Left","Right","ViewSwitcher","PinButton","PinButtonCustomIcon"];export{l as Left,d as PinButton,p as PinButtonCustomIcon,i as Right,o as ViewSwitcher,Se as __namedExportsOrder,Pe as default};
