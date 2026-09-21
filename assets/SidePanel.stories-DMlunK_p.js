import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DhMLlvMY.js";import{S as c,P as C}from"./side-panel-BEQVoXcQ.js";import{B as A}from"./button-C_xtDadR.js";import{S as _}from"./select-DDPZKH4f.js";import{T as E}from"./tree-menu-DflqyBPj.js";import{U as O}from"./user-BnR-bf5w.js";import{C as V}from"./chevron-down-gMYAX9-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-an86y9Fl.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-Cv3To089.js";import"./index-1evVQkiP.js";import"./badge-CSIGLv9X.js";import"./index-pcZVUfq6.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DV0nvecx.js";import"./circle-help-DYnzmdO5.js";import"./popover-DUzeR3mw.js";import"./index-BmfIz0--.js";import"./checkbox-BRQPSInb.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";const Pe={title:"Custom Primitives/SidePanel",component:c,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"Side Panel — Left",render:()=>{const[n,a]=t.useState(!0),[r,m]=t.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(c,{side:"left",open:n,pinned:r,headerTitle:"Designer",onPinToggle:()=>m(s=>!s),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Side panel content."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(A,{onClick:()=>a(s=>!s),variant:"outline",children:n?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},i={name:"Side Panel — Right",render:()=>{const[n,a]=t.useState(!0),[r,m]=t.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(A,{onClick:()=>a(s=>!s),variant:"outline",children:n?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned":"Overlay"})]}),e.jsx(c,{side:"right",open:n,pinned:r,headerTitle:"Details",onPinToggle:()=>m(s=>!s),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Right side panel content."})})})]})}},D=[{label:"Financial Services",children:[{label:"FS_HCI"},{label:"FS_Manual"}]},{label:"Hospitality",children:[{label:"H_HCI"},{label:"H_Manual"}]}],R=[{label:"Team Alpha",children:[{label:"Alpha_Primary"},{label:"Alpha_Backup"}]},{label:"Team Beta",children:[{label:"Beta_Primary"},{label:"Beta_Backup"}]}],o={name:"Side Panel — View Switcher (headerTitleBadge)",render:()=>{const[n,a]=t.useState("treeA");return e.jsxs("div",{className:"relative h-[420px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(c,{side:"left",pinned:!0,headerTitle:n==="treeA"?"Tree A":"Tree B",headerTitleBadge:e.jsx(_,{options:[{value:"treeA",label:"Tree A"},{value:"treeB",label:"Tree B"}],value:n,onValueChange:r=>a(r),trigger:e.jsx(V,{className:"h-4 w-4","aria-hidden":"true"}),dropdownAlign:"left"}),children:e.jsx(E,{className:"px-2",items:n==="treeA"?D:R},n)}),e.jsx("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content column."})})]})}},d={name:"PanelPinButton",render:()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(C,{pinned:n,onToggle:()=>a(r=>!r)}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}},p={name:"PanelPinButton — Custom Icon (Designer panel trigger)",render:()=>{const[n,a]=t.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(C,{pinned:n,onToggle:()=>a(r=>!r),icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),pinnedLabel:"Unpin Designer panel",unpinnedLabel:"Pin Designer panel"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}};var u,y,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
