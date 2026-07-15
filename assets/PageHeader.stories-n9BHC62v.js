import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v,R as Z}from"./index-CXOcBcs0.js";import{P as h}from"./page-header-DhvxSvkZ.js";import{S as X}from"./side-panel-B_8aHlc3.js";import{I as $}from"./interior-panel-DGBd5vkg.js";import{B as s}from"./button-5FlDPGRL.js";import{A as Y}from"./ai-icon-DMp4CKb6.js";import{U as ee}from"./user-rDz6zf5M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./chip-CgDre8Tq.js";import"./panel-left-CWVFPQ0g.js";import"./createLucideIcon-DEcfmm_F.js";import"./panel-right-CgZ2ABSM.js";import"./container-header-Bfsb3MJm.js";import"./x-N8aIqrq2.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./panel-pin-button-B4dXEUQg.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";const je={title:"UI/PageHeader",component:h,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},a=e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",children:"Secondary"}),e.jsx(s,{children:"Primary"}),e.jsx("div",{className:"mx-1 h-6 w-px bg-lyra-border-subtle"}),e.jsxs(s,{variant:"outline",children:[e.jsx(Y,{className:"h-4 w-4"}),"Ask AI"]})]}),o={name:"Default",args:{title:"Desktop Designs",actions:a}},l={name:"With Chip",args:{title:"Desktop Designs",chip:"Active",chipColor:"green",chipVariant:"subtle",actions:a}},i={name:"Title Only",args:{title:"Settings"}},d={name:"Single Action",args:{title:"User Management",actions:e.jsx(s,{children:"Add User"})}},c={name:"With Panel Toggle",args:{title:"Desktop Designs",panelToggle:"left",actions:a}},m={name:"Record Header (Icon + Subtitle)",args:{icon:e.jsx(ee,{className:"h-5 w-5",strokeWidth:1.5}),title:"Jamie Torres",subtitle:"CS-1239930",actions:e.jsxs(s,{variant:"outline",children:[e.jsx(Y,{className:"h-4 w-4"}),"Ask AI"]})}},p={name:"With Breadcrumb",args:{title:"Page Title",breadcrumb:{label:"ParentName"},actions:a}},g={name:"Panel Toggle (Pinned)",render:()=>{const[t,n]=v.useState(!0);return e.jsxs("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(X,{side:"left",open:t,pinned:!0,headerTitle:"Designer"}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(h,{title:"Page Title",panelToggle:"left",panelPinned:!0,onPanelToggle:()=>n(r=>!r),breadcrumb:{label:"ParentName"},actions:a}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},u={name:"Panel Toggle (Overlay on Hover)",render:()=>{const[t,n]=v.useState(!1),r=Z.useRef(),x=()=>{clearTimeout(r.current),n(!0)},b=()=>{r.current=setTimeout(()=>n(!1),300)};return e.jsxs("div",{className:"relative flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(X,{side:"left",open:t,pinned:!1,headerTitle:"Designer",onMouseEnter:x,onMouseLeave:b}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(h,{title:"Page Title",panelToggle:"left",panelPinned:!1,onPanelHoverStart:x,onPanelHoverEnd:b,breadcrumb:{label:"ParentName"},actions:a}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},f={name:"Interior Panel Toggle",render:()=>{const[t,n]=v.useState(!1);return e.jsx("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(h,{title:"Page Title",panelToggle:"right",onInnerPanelToggle:()=>n(r=>!r),actions:a}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx($,{side:"right",open:t,headerTitle:"Details",onClose:()=>n(!1),children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Panel content goes here."})})})]})]})})}};var P,T,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Desktop Designs",
    actions: defaultActions
  }
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var S,N,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "With Chip",
  args: {
    title: "Desktop Designs",
    chip: "Active",
    chipColor: "green",
    chipVariant: "subtle",
    actions: defaultActions
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var O,A,H;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Title Only",
  args: {
    title: "Settings"
  }
}`,...(H=(A=i.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var D,W,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Single Action",
  args: {
    title: "User Management",
    actions: <Button>Add User</Button>
  }
}`,...(w=(W=d.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var I,R,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "With Panel Toggle",
  args: {
    title: "Desktop Designs",
    panelToggle: "left",
    actions: defaultActions
  }
}`,...(k=(R=c.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var E,B,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var U,M,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With Breadcrumb",
  args: {
    title: "Page Title",
    breadcrumb: {
      label: "ParentName"
    },
    actions: defaultActions
  }
}`,...(J=(M=p.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var L,V,_;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var F,q,z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,K,Q;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Oe=["Default","WithChip","TitleOnly","WithSingleAction","WithPanelToggle","RecordHeader","WithBreadcrumb","WithTogglePinned","WithToggleOverlay","WithInnerPanelToggle"];export{o as Default,m as RecordHeader,i as TitleOnly,p as WithBreadcrumb,l as WithChip,f as WithInnerPanelToggle,c as WithPanelToggle,d as WithSingleAction,u as WithToggleOverlay,g as WithTogglePinned,Oe as __namedExportsOrder,je as default};
