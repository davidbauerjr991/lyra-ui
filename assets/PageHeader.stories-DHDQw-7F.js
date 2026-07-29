import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x,R as oe}from"./index-CXOcBcs0.js";import{P as o}from"./page-header-rKFZyt_p.js";import{S as te}from"./side-panel-aPoRsfnJ.js";import{I as le}from"./interior-panel-aXRC0HMC.js";import{B as s}from"./button-C9HuGDNI.js";import{A as se}from"./ai-icon-DMp4CKb6.js";import{U as ie}from"./user-rDz6zf5M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./badge-go1ZjKcF.js";import"./index-1evVQkiP.js";import"./breadcrumb-KE2OrVzD.js";import"./index-BDkVnVO1.js";import"./kebab-menu-button-B41D96xJ.js";import"./menu-radix-BemP-mIi.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./ellipsis-chVl1-lO.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./container-header-yODun0G6.js";import"./x-N8aIqrq2.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./minimize-2-BOwQ4FVI.js";const ze={title:"UI/PageHeader",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},r=e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",children:"Secondary"}),e.jsx(s,{children:"Primary"}),e.jsx("div",{className:"mx-1 h-6 w-px bg-lyra-border-subtle"}),e.jsxs(s,{variant:"outline",children:[e.jsx(se,{className:"h-4 w-4"}),"Ask AI"]})]}),l={name:"Default",args:{title:"Desktop Designs",actions:r}},i={name:"With Badge",args:{title:"Desktop Designs",badge:"Active",badgeColor:"green",badgeVariant:"subtle",actions:r}},d={name:"Title Only",args:{title:"Settings"}},c={name:"Single Action",args:{title:"User Management",actions:e.jsx(s,{children:"Add User"})}},m={name:"With Panel Toggle",args:{title:"Desktop Designs",panelToggle:"left",actions:r}},p={name:"Record Header (Icon + Subtitle)",args:{icon:e.jsx(ie,{className:"h-5 w-5",strokeWidth:1.5}),title:"Jamie Torres",subtitle:"CS-1239930",actions:e.jsxs(s,{variant:"outline",children:[e.jsx(se,{className:"h-4 w-4"}),"Ask AI"]})}},u={name:"With Breadcrumb",args:{title:"Page Title",breadcrumb:{label:"ParentName"},actions:r}},g={name:"With Breadcrumbs",args:{title:"Dashboard Name",breadcrumb:[{label:"Dashboards"},{label:"Sales"}],actions:r}},b={name:"With Breadcrumbs (Narrow / Collapsed)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{width:420,border:"1px solid var(--lyra-color-border-subtle)",borderRadius:8,overflow:"hidden"},children:e.jsx(o,{title:"This is a very long parent name that needs to truncate",breadcrumb:[{label:"Dashboards"},{label:"Sales"},{label:"Q3 Reports"}]})})},f={name:"Panel Toggle (Pinned)",render:()=>{const[t,a]=x.useState(!0);return e.jsxs("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(te,{side:"left",open:t,pinned:!0,headerTitle:"Designer"}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(o,{title:"Page Title",panelToggle:"left",panelPinned:!0,onPanelToggle:()=>a(n=>!n),breadcrumb:{label:"ParentName"},actions:r}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},h={name:"Panel Toggle (Overlay on Hover)",render:()=>{const[t,a]=x.useState(!1),n=oe.useRef(),P=()=>{clearTimeout(n.current),a(!0)},y=()=>{n.current=setTimeout(()=>a(!1),300)};return e.jsxs("div",{className:"relative flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(te,{side:"left",open:t,pinned:!1,headerTitle:"Designer",onMouseEnter:P,onMouseLeave:y}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(o,{title:"Page Title",panelToggle:"left",panelPinned:!1,onPanelHoverStart:P,onPanelHoverEnd:y,breadcrumb:{label:"ParentName"},actions:r}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},v={name:"Interior Panel Toggle",render:()=>{const[t,a]=x.useState(!1);return e.jsx("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(o,{title:"Page Title",panelToggle:"right",onInnerPanelToggle:()=>a(n=>!n),actions:r}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(le,{side:"right",open:t,headerTitle:"Details",onClose:()=>a(!1),children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Panel content goes here."})})})]})]})})}};var T,S,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Desktop Designs",
    actions: defaultActions
  }
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,j,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "With Badge",
  args: {
    title: "Desktop Designs",
    badge: "Active",
    badgeColor: "green",
    badgeVariant: "subtle",
    actions: defaultActions
  }
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var O,D,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Title Only",
  args: {
    title: "Settings"
  }
}`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,H,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Single Action",
  args: {
    title: "User Management",
    actions: <Button>Add User</Button>
  }
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var I,k,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "With Panel Toggle",
  args: {
    title: "Desktop Designs",
    panelToggle: "left",
    actions: defaultActions
  }
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,U,M;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Record Header (Icon + Subtitle)",
  args: {
    icon: <User className="h-5 w-5" strokeWidth={1.5} />,
    title: "Jamie Torres",
    subtitle: "CS-1239930",
    actions: <Button variant="outline">
        <AiIcon className="h-4 w-4" />
        Ask AI
      </Button>
  }
}`,...(M=(U=p.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var F,J,L;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With Breadcrumb",
  args: {
    title: "Page Title",
    breadcrumb: {
      label: "ParentName"
    },
    actions: defaultActions
  }
}`,...(L=(J=u.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var Q,V,_;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "With Breadcrumbs",
  args: {
    title: "Dashboard Name",
    // \`breadcrumb\` also accepts an array for a deeper trail — each entry
    // renders as its own parent crumb before the title, composed from the
    // shared Breadcrumb parts (see breadcrumb.tsx / Custom Primitives/Breadcrumb).
    breadcrumb: [{
      label: "Dashboards"
    }, {
      label: "Sales"
    }],
    actions: defaultActions
  }
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,z,G;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "With Breadcrumbs (Narrow / Collapsed)",
  parameters: {
    layout: "padded"
  },
  render: () =>
  // Forces the collapse — \`.lyra-page-header-breadcrumb-wrap\` is a CSS
  // container-query boundary (see lyra-tokens.css/storybook.css), so it
  // reacts to this wrapper's actual rendered width, not the viewport.
  // Below 480px of the breadcrumb slot's own width, every parent crumb
  // collapses behind a single ellipsis trigger (far left) and the title
  // truncates with an ellipsis instead of wrapping onto a second line.
  <div style={{
    width: 420,
    border: "1px solid var(--lyra-color-border-subtle)",
    borderRadius: 8,
    overflow: "hidden"
  }}>
      <PageHeader title="This is a very long parent name that needs to truncate" breadcrumb={[{
      label: "Dashboards"
    }, {
      label: "Sales"
    }, {
      label: "Q3 Reports"
    }]} />
    </div>
}`,...(G=(z=b.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,X,Y;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Panel Toggle (Pinned)",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(true);
    return <div className="flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <SidePanel side="left" open={panelOpen} pinned headerTitle="Designer" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader title="Page Title" panelToggle="left" panelPinned onPanelToggle={() => setPanelOpen(v => !v)} breadcrumb={{
          label: "ParentName"
        }} actions={defaultActions} />
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>;
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Panel Toggle (Overlay on Hover)",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(false);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
    const onHoverStart = () => {
      clearTimeout(timeoutRef.current);
      setPanelOpen(true);
    };
    const onHoverEnd = () => {
      timeoutRef.current = setTimeout(() => setPanelOpen(false), 300);
    };
    return <div className="relative flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <SidePanel side="left" open={panelOpen} pinned={false} headerTitle="Designer" onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader title="Page Title" panelToggle="left" panelPinned={false} onPanelHoverStart={onHoverStart} onPanelHoverEnd={onHoverEnd} breadcrumb={{
          label: "ParentName"
        }} actions={defaultActions} />
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>;
  }
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Interior Panel Toggle",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(false);
    return <div className="flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader title="Page Title" panelToggle="right" onInnerPanelToggle={() => setPanelOpen(v => !v)} actions={defaultActions} />
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 bg-lyra-bg-surface-base" />
            <InteriorPanel side="right" open={panelOpen} headerTitle="Details" onClose={() => setPanelOpen(false)}>
              <div className="p-4">
                <p className="lyra-body-md text-lyra-fg-secondary">Panel content goes here.</p>
              </div>
            </InteriorPanel>
          </div>
        </div>
      </div>;
  }
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const Ge=["Default","WithBadge","TitleOnly","WithSingleAction","WithPanelToggle","RecordHeader","WithBreadcrumb","WithBreadcrumbs","WithBreadcrumbsNarrow","WithTogglePinned","WithToggleOverlay","WithInnerPanelToggle"];export{l as Default,p as RecordHeader,d as TitleOnly,i as WithBadge,u as WithBreadcrumb,g as WithBreadcrumbs,b as WithBreadcrumbsNarrow,v as WithInnerPanelToggle,m as WithPanelToggle,c as WithSingleAction,h as WithToggleOverlay,f as WithTogglePinned,Ge as __namedExportsOrder,ze as default};
