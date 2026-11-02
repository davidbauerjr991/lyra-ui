import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DhMLlvMY.js";import{S as a,P as A}from"./side-panel-D__2Cgap.js";import{P as _}from"./page-header-D2DB6A_7.js";import{u as g}from"./use-side-panel-toggle-CskLXFcQ.js";import{S as E}from"./select-CqLB1K6d.js";import{T as H}from"./tree-menu-CDitykJT.js";import{a as l}from"./InteriorPanel.shared-Bq_sNakH.js";import{U as V}from"./user-BnR-bf5w.js";import{C as M}from"./chevron-down-gMYAX9-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-footer-BSIaMmWX.js";import"./utils-BLSKlp9E.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./skip-link-SpPGsDu6.js";import"./link-DjKY0n2y.js";import"./index-1evVQkiP.js";import"./tag-CFhiOrCN.js";import"./badge-DnlHYDBX.js";import"./maximize-2--TlG5VuC.js";import"./minimize-2-DJw-t-cB.js";import"./breadcrumb-vlQxlIY5.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./index-pcZVUfq6.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./checkbox-BvtSqiEO.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./search-CZxBQJsH.js";import"./input-DV2xaBHs.js";import"./tabs-CB4kH1Fe.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";const Ye={title:"Custom Primitives/SidePanel/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function s({label:n,side:r="right",children:i}){const C=e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content"})});return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary",children:n}),e.jsxs("div",{className:"relative flex h-[320px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[r==="left"&&i,C,r==="right"&&i]})]})}const t={name:"States (Pinned, Unpinned, Closed, Side, Resizable)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(s,{label:"Pinned — right (pushes content)",children:e.jsx(a,{side:"right",pinned:!0,headerTitle:"Pinned",children:e.jsx(l,{})})}),e.jsx(s,{label:"Pinned — left",side:"left",children:e.jsx(a,{side:"left",pinned:!0,headerTitle:"Pinned",children:e.jsx(l,{})})}),e.jsx(s,{label:"Unpinned — overlay",children:e.jsx(a,{side:"right",headerTitle:"Overlay",children:e.jsx(l,{})})}),e.jsx(s,{label:"Closed (open=false)",children:e.jsx(a,{side:"right",pinned:!0,open:!1,headerTitle:"Closed",children:e.jsx(l,{})})}),e.jsx(s,{label:"Not resizable (resizable=false)",children:e.jsx(a,{side:"right",pinned:!0,resizable:!1,headerTitle:"Fixed width",children:e.jsx(l,{})})})]})},U=[{label:"Financial Services",children:[{label:"FS_HCI"},{label:"FS_Manual"}]},{label:"Hospitality",children:[{label:"H_HCI"},{label:"H_Manual"}]}],D=[{label:"Team Alpha",children:[{label:"Alpha_Primary"},{label:"Alpha_Backup"}]},{label:"Team Beta",children:[{label:"Beta_Primary"},{label:"Beta_Backup"}]}],d={name:"Side Panel — View Switcher (headerTitleBadge)",render:()=>{const[n,r]=c.useState("treeA");return e.jsxs("div",{className:"relative h-[420px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(a,{side:"left",pinned:!0,headerTitle:n==="treeA"?"Tree A":"Tree B",headerTitleBadge:e.jsx(E,{options:[{value:"treeA",label:"Tree A"},{value:"treeB",label:"Tree B"}],value:n,onValueChange:i=>r(i),trigger:e.jsx(M,{className:"h-4 w-4","aria-hidden":"true"}),dropdownAlign:"left"}),children:e.jsx(H,{className:"px-2",items:n==="treeA"?U:D},n)}),e.jsx("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content column."})})]})}},o={name:"PanelPinButton",render:()=>{const[n,r]=c.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(A,{pinned:n,onToggle:()=>r(i=>!i)}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}},p={name:"PanelPinButton — Custom Icon (Designer panel trigger)",render:()=>{const[n,r]=c.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(A,{pinned:n,onToggle:()=>r(i=>!i),icon:e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),pinnedLabel:"Unpin Designer panel",unpinnedLabel:"Pin Designer panel"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}},m={name:"PageHeader Toggles (useSidePanelToggle)",render:()=>{const n=g({side:"left",defaultOpen:!0,defaultPinned:!0}),r=g({side:"right"});return e.jsxs("div",{className:"relative flex h-[420px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[e.jsx(a,{side:"left",...n.sidePanelProps,headerTitle:"Assignments",skipToMain:!1,className:"focus:outline-none",children:e.jsx(l,{})}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[e.jsx(_,{title:"Page Title",panelToggle:"both",panelToggleBadge:3,panelToggleLabel:"Assignments, 3 active",innerPanelToggleLabel:"Show details",...n.pageHeaderProps,...r.pageHeaderProps}),e.jsx("div",{className:"flex-1 p-4",children:e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Left: ",n.pinned?"pinned":"unpinned",", ",n.open?"open":n.previewing?"previewing":"closed",". Right:"," ",r.open?"open":"closed","."]})})]}),e.jsx(a,{side:"right",...r.sidePanelProps,headerTitle:"Details",className:"focus:outline-none",children:e.jsx(l,{})})]})}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "States (Pinned, Unpinned, Closed, Side, Resizable)",
  render: () => <div className="grid grid-cols-2 gap-6 max-w-5xl">
      <StateFrame label="Pinned — right (pushes content)">
        <SidePanel side="right" pinned headerTitle="Pinned"><PanelForm /></SidePanel>
      </StateFrame>
      <StateFrame label="Pinned — left" side="left">
        <SidePanel side="left" pinned headerTitle="Pinned"><PanelForm /></SidePanel>
      </StateFrame>
      <StateFrame label="Unpinned — overlay">
        <SidePanel side="right" headerTitle="Overlay"><PanelForm /></SidePanel>
      </StateFrame>
      <StateFrame label="Closed (open=false)">
        <SidePanel side="right" pinned open={false} headerTitle="Closed"><PanelForm /></SidePanel>
      </StateFrame>
      <StateFrame label="Not resizable (resizable=false)">
        <SidePanel side="right" pinned resizable={false} headerTitle="Fixed width"><PanelForm /></SidePanel>
      </StateFrame>
    </div>
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,P,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(P=d.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var y,S,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "PanelPinButton",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var T,w,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "PanelPinButton — Custom Icon (Designer panel trigger)",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />} pinnedLabel="Unpin Designer panel" unpinnedLabel="Pin Designer panel" />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,B,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "PageHeader Toggles (useSidePanelToggle)",
  render: () => {
    const left = useSidePanelToggle({
      side: "left",
      defaultOpen: true,
      defaultPinned: true
    });
    const right = useSidePanelToggle({
      side: "right"
    });
    return <div className="relative flex h-[420px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
        <SidePanel side="left" {...left.sidePanelProps} headerTitle="Assignments" skipToMain={false} className="focus:outline-none">
          <PanelForm />
        </SidePanel>
        <div className="flex min-w-0 flex-1 flex-col">
          <PageHeader title="Page Title" panelToggle="both" panelToggleBadge={3}
        // The badge is hidden from assistive tech: the count is in the name.
        panelToggleLabel="Assignments, 3 active" innerPanelToggleLabel="Show details" {...left.pageHeaderProps} {...right.pageHeaderProps} />
          <div className="flex-1 p-4">
            <p className="lyra-body-sm text-lyra-fg-secondary">
              Left: {left.pinned ? "pinned" : "unpinned"}, {left.open ? "open" : left.previewing ? "previewing" : "closed"}. Right:{" "}
              {right.open ? "open" : "closed"}.
            </p>
          </div>
        </div>
        <SidePanel side="right" {...right.sidePanelProps} headerTitle="Details" className="focus:outline-none">
          <PanelForm />
        </SidePanel>
      </div>;
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Ze=["States","ViewSwitcher","PinButton","PinButtonCustomIcon","PageHeaderToggles"];export{m as PageHeaderToggles,o as PinButton,p as PinButtonCustomIcon,t as States,d as ViewSwitcher,Ze as __namedExportsOrder,Ye as default};
