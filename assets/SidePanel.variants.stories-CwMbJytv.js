import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DhMLlvMY.js";import{S as i,P as w}from"./side-panel-Bi455hz9.js";import{S as N}from"./select-BkRdK3tQ.js";import{T as B}from"./tree-menu-BQrQoyaz.js";import{a as t}from"./InteriorPanel.shared-p8RQa4cd.js";import{U as F}from"./user-BnR-bf5w.js";import{C as A}from"./chevron-down-gMYAX9-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-footer-BSIaMmWX.js";import"./utils-BLSKlp9E.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./maximize-2--TlG5VuC.js";import"./minimize-2-DJw-t-cB.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./popover-DnJ7ZSnw.js";import"./index-BY5kmD2Q.js";import"./checkbox-wvqFL4jd.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./input-CpMudak3.js";import"./tabs-sC7PiW5A.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";const Ue={title:"Custom Primitives/SidePanel/Variants",component:i,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function l({label:r,side:n="right",children:a}){const j=e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content"})});return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary",children:r}),e.jsxs("div",{className:"relative flex h-[320px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[n==="left"&&a,j,n==="right"&&a]})]})}const s={name:"States (Pinned, Unpinned, Closed, Side, Resizable)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-5xl",children:[e.jsx(l,{label:"Pinned — right (pushes content)",children:e.jsx(i,{side:"right",pinned:!0,headerTitle:"Pinned",children:e.jsx(t,{})})}),e.jsx(l,{label:"Pinned — left",side:"left",children:e.jsx(i,{side:"left",pinned:!0,headerTitle:"Pinned",children:e.jsx(t,{})})}),e.jsx(l,{label:"Unpinned — overlay",children:e.jsx(i,{side:"right",headerTitle:"Overlay",children:e.jsx(t,{})})}),e.jsx(l,{label:"Closed (open=false)",children:e.jsx(i,{side:"right",pinned:!0,open:!1,headerTitle:"Closed",children:e.jsx(t,{})})}),e.jsx(l,{label:"Not resizable (resizable=false)",children:e.jsx(i,{side:"right",pinned:!0,resizable:!1,headerTitle:"Fixed width",children:e.jsx(t,{})})})]})},C=[{label:"Financial Services",children:[{label:"FS_HCI"},{label:"FS_Manual"}]},{label:"Hospitality",children:[{label:"H_HCI"},{label:"H_Manual"}]}],_=[{label:"Team Alpha",children:[{label:"Alpha_Primary"},{label:"Alpha_Backup"}]},{label:"Team Beta",children:[{label:"Beta_Primary"},{label:"Beta_Backup"}]}],d={name:"Side Panel — View Switcher (headerTitleBadge)",render:()=>{const[r,n]=p.useState("treeA");return e.jsxs("div",{className:"relative h-[420px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(i,{side:"left",pinned:!0,headerTitle:r==="treeA"?"Tree A":"Tree B",headerTitleBadge:e.jsx(N,{options:[{value:"treeA",label:"Tree A"},{value:"treeB",label:"Tree B"}],value:r,onValueChange:a=>n(a),trigger:e.jsx(A,{className:"h-4 w-4","aria-hidden":"true"}),dropdownAlign:"left"}),children:e.jsx(B,{className:"px-2",items:r==="treeA"?C:_},r)}),e.jsx("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content column."})})]})}},o={name:"PanelPinButton",render:()=>{const[r,n]=p.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(w,{pinned:r,onToggle:()=>n(a=>!a)}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned":"Unpinned"})]})}},m={name:"PanelPinButton — Custom Icon (Designer panel trigger)",render:()=>{const[r,n]=p.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(w,{pinned:r,onToggle:()=>n(a=>!a),icon:e.jsx(F,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),pinnedLabel:"Unpin Designer panel",unpinnedLabel:"Pin Designer panel"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:r?"Pinned":"Unpinned"})]})}};var c,u,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,P,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "PanelPinButton",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var y,v,T;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "PanelPinButton — Custom Icon (Designer panel trigger)",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />} pinnedLabel="Unpin Designer panel" unpinnedLabel="Pin Designer panel" />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(T=(v=m.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const Me=["States","ViewSwitcher","PinButton","PinButtonCustomIcon"];export{o as PinButton,m as PinButtonCustomIcon,s as States,d as ViewSwitcher,Me as __namedExportsOrder,Ue as default};
