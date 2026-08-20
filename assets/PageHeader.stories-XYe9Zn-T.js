import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w,R as ge}from"./index-CXOcBcs0.js";import{P as s}from"./page-header-DPgYo3NA.js";import{S as ue}from"./side-panel-DiNN0HDI.js";import{I as be}from"./interior-panel-IUX6LlCl.js";import{B as n}from"./button-DTrF7KLq.js";import{A as P}from"./ai-icon-DMp4CKb6.js";import{I as he}from"./icon-DdukfRb_.js";import{U as fe}from"./user-rDz6zf5M.js";import{c as ve}from"./createLucideIcon-DEcfmm_F.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./badge-BsM2Tnvd.js";import"./index-1evVQkiP.js";import"./breadcrumb-DCFpQFcR.js";import"./index-BDkVnVO1.js";import"./kebab-menu-button-X2gEabCK.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./ellipsis-chVl1-lO.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./container-header-BbK1XDO0.js";import"./x-N8aIqrq2.js";import"./use-panel-drag-resize-CoDT4W-X.js";import"./minimize-2-BOwQ4FVI.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=ve("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]),sr={title:"UI/PageHeader",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},r=e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Secondary"}),e.jsx(n,{children:"Primary"}),e.jsx("div",{className:"mx-1 h-6 w-px bg-lyra-border-subtle"}),e.jsxs(n,{variant:"outline",children:[e.jsx(P,{className:"h-4 w-4"}),"Ask AI"]})]}),l={name:"Default",args:{title:"Desktop Designs",actions:r}},i={name:"With Badge",args:{title:"Desktop Designs",badge:"Active",badgeColor:"green",badgeVariant:"subtle",actions:r}},d={name:"Title Only",args:{title:"Settings"}},c={name:"Single Action",args:{title:"User Management",actions:e.jsx(n,{children:"Add User"})}},m={name:"With Panel Toggle",args:{title:"Desktop Designs",panelToggle:"left",actions:r}},p={name:"Record Header (Icon + Subtitle)",args:{icon:e.jsx(fe,{className:"h-5 w-5",strokeWidth:1.5}),title:"Jamie Torres",subtitle:"CS-1239930",actions:e.jsxs(n,{variant:"outline",children:[e.jsx(P,{className:"h-4 w-4"}),"Ask AI"]})}},u={name:"Record Header (Circle Avatar, No Divider)",args:{icon:e.jsx(he,{icon:xe,background:"info",shape:"circle",size:"md"}),iconDivider:!1,title:"Jamie Torres",subtitle:"CS-1239930",actions:e.jsxs(n,{variant:"outline",children:[e.jsx(P,{className:"h-4 w-4"}),"Ask AI"]})}},g={name:"Record Header (Compact, Borderless)",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle overflow-hidden bg-lyra-bg-surface-base",children:[e.jsx(s,{title:"Priya Shah",subtitle:"Email | 7/19/2025 03:41 PM",bordered:!1,compact:!0,actions:e.jsxs(n,{variant:"outline",children:[e.jsx(P,{className:"h-4 w-4"}),"Ask AI"]})}),e.jsx("div",{className:"flex items-center justify-between border-b border-lyra-border-subtle px-6 py-2",children:e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"# CTX-20250719-05532 · July 19, 2025"})}),e.jsx("div",{className:"p-6",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Transcript content goes here."})})]})},b={name:"With Breadcrumb",args:{title:"Page Title",breadcrumb:{label:"ParentName"},actions:r}},h={name:"With Breadcrumbs",args:{title:"Dashboard Name",breadcrumb:[{label:"Dashboards"},{label:"Sales"}],actions:r}},f={name:"With Breadcrumbs (Narrow / Collapsed)",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{width:420,border:"1px solid var(--lyra-color-border-subtle)",borderRadius:8,overflow:"hidden"},children:e.jsx(s,{title:"This is a very long parent name that needs to truncate",breadcrumb:[{label:"Dashboards"},{label:"Sales"},{label:"Q3 Reports"}]})})},v={name:"Panel Toggle (Pinned)",render:()=>{const[o,a]=w.useState(!0);return e.jsxs("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(ue,{side:"left",open:o,pinned:!0,headerTitle:"Designer"}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(s,{title:"Page Title",panelToggle:"left",panelPinned:!0,onPanelToggle:()=>a(t=>!t),breadcrumb:{label:"ParentName"},actions:r}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},x={name:"Panel Toggle (Overlay on Hover)",render:()=>{const[o,a]=w.useState(!1),t=ge.useRef(),T=()=>{clearTimeout(t.current),a(!0)},N=()=>{t.current=setTimeout(()=>a(!1),300)};return e.jsxs("div",{className:"relative flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(ue,{side:"left",open:o,pinned:!1,headerTitle:"Designer",onMouseEnter:T,onMouseLeave:N}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(s,{title:"Page Title",panelToggle:"left",panelPinned:!1,onPanelHoverStart:T,onPanelHoverEnd:N,breadcrumb:{label:"ParentName"},actions:r}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},y={name:"Interior Panel Toggle",render:()=>{const[o,a]=w.useState(!1);return e.jsx("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(s,{title:"Page Title",panelToggle:"right",onInnerPanelToggle:()=>a(t=>!t),actions:r}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(be,{side:"right",open:o,headerTitle:"Details",onClose:()=>a(!1),children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Panel content goes here."})})})]})]})})}};var S,j,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Desktop Designs",
    actions: defaultActions
  }
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var H,D,B;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With Badge",
  args: {
    title: "Desktop Designs",
    badge: "Active",
    badgeColor: "green",
    badgeVariant: "subtle",
    actions: defaultActions
  }
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var O,W,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Title Only",
  args: {
    title: "Settings"
  }
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var k,R,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Single Action",
  args: {
    title: "User Management",
    actions: <Button>Add User</Button>
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var E,M,U;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "With Panel Toggle",
  args: {
    title: "Desktop Designs",
    panelToggle: "left",
    actions: defaultActions
  }
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var J,q,z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var L,F,Q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Record Header (Circle Avatar, No Divider)",
  args: {
    // Per explicit request (agent-next-gen-v2's own interaction record
    // header, once it needed to tell an agent-to-agent call apart from a
    // real customer interaction): a colored circle avatar shell — \`Icon\`'s
    // own \`background\`/\`shape="circle"\` combo (icon.tsx), same treatment
    // the New Outbound "Choose group" Select's category rows already use —
    // reads as a complete, self-contained unit on its own, so \`iconDivider
    // ={false}\` drops the divider \`icon\` renders by default (see that
    // prop's own doc comment, page-header.tsx) rather than doubling up on
    // the separation the circle's own background already provides.
    icon: <Icon icon={Headphones} background="info" shape="circle" size="md" />,
    iconDivider: false,
    title: "Jamie Torres",
    subtitle: "CS-1239930",
    actions: <Button variant="outline">
        <AiIcon className="h-4 w-4" />
        Ask AI
      </Button>
  }
}`,...(Q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Q.source}}};var V,X,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Record Header (Compact, Borderless)",
  parameters: {
    layout: "padded"
  },
  render: () =>
  // Per explicit request (agent-next-gen-v2's own interaction record
  // header): \`bordered={false}\` + \`compact\` — a record header sitting
  // directly above other content that already draws its own divider
  // right underneath it (here, a plain mock "session row" standing in
  // for \`TranscriptSessionSeparator\`'s own bottom border) no longer
  // doubles that line up into two parallel ones with an empty gap
  // between them, and shrinks from the default \`min-h-[68px]\`/\`py-4\` to
  // \`min-h-[54px]\` with the bottom padding dropped — both together read
  // as one continuous, tightly-packed header instead of two stacked
  // bordered rows.
  <div className="rounded-lyra-lg border border-lyra-border-subtle overflow-hidden bg-lyra-bg-surface-base">
      <PageHeader title="Priya Shah" subtitle="Email | 7/19/2025 03:41 PM" bordered={false} compact actions={<Button variant="outline">
            <AiIcon className="h-4 w-4" />
            Ask AI
          </Button>} />
      <div className="flex items-center justify-between border-b border-lyra-border-subtle px-6 py-2">
        <span className="lyra-body-sm text-lyra-fg-secondary">
          # CTX-20250719-05532 · July 19, 2025
        </span>
      </div>
      <div className="p-6">
        <p className="lyra-body-md text-lyra-fg-secondary">Transcript content goes here.</p>
      </div>
    </div>
}`,...(_=(X=g.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var G,K,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "With Breadcrumb",
  args: {
    title: "Page Title",
    breadcrumb: {
      label: "ParentName"
    },
    actions: defaultActions
  }
}`,...(Y=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,de;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,me,pe;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=y.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const or=["Default","WithBadge","TitleOnly","WithSingleAction","WithPanelToggle","RecordHeader","RecordHeaderCircleAvatarNoDivider","RecordHeaderCompactBorderless","WithBreadcrumb","WithBreadcrumbs","WithBreadcrumbsNarrow","WithTogglePinned","WithToggleOverlay","WithInnerPanelToggle"];export{l as Default,p as RecordHeader,u as RecordHeaderCircleAvatarNoDivider,g as RecordHeaderCompactBorderless,d as TitleOnly,i as WithBadge,b as WithBreadcrumb,h as WithBreadcrumbs,f as WithBreadcrumbsNarrow,y as WithInnerPanelToggle,m as WithPanelToggle,c as WithSingleAction,x as WithToggleOverlay,v as WithTogglePinned,or as __namedExportsOrder,sr as default};
