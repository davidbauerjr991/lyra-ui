import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t,R as ye}from"./index-CXOcBcs0.js";import{P as T}from"./page-header-Bz2spt8-.js";import{A as Pe,S as de}from"./ai-icon-B1U3_kgB.js";import{C as Te}from"./container-header-Bo-bv7NH.js";import{a as Ne}from"./panel-footer-D8KKnVD3.js";import{c as we}from"./utils-BLSKlp9E.js";import{B as P}from"./button-Dd7BgKlB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./chip-CgDre8Tq.js";import"./panel-left-CWVFPQ0g.js";import"./createLucideIcon-DEcfmm_F.js";import"./panel-right-CgZ2ABSM.js";import"./x-N8aIqrq2.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";const j=t.forwardRef(({className:o,headerTitle:r,headerIcon:a,headerActions:l,onClose:i,footer:O,width:W=340,minWidth:D=200,maxWidth:R=800,side:n,open:d,children:ce,...ue},me)=>{const N=typeof W=="number"?W:340,[w,pe]=t.useState(null),c=t.useRef(!1),S=t.useRef(0),A=t.useRef(0),u=w??N,ge=t.useCallback(H=>{H.preventDefault(),c.current=!0,S.current=H.clientX,A.current=w??N;const I=E=>{if(!c.current)return;const ve=n==="right"?S.current-E.clientX:E.clientX-S.current,xe=Math.min(R,Math.max(D,A.current+ve));pe(xe)},C=()=>{c.current=!1,document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",C),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="col-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",I),document.addEventListener("mouseup",C)},[n,w,N,D,R]),fe=n==="right"?d?"border-l border-lyra-border-subtle":"":n==="left"?d?"border-r border-lyra-border-subtle":"":"border-x border-lyra-border-subtle",he=n?{width:d?u:0,minWidth:0,transition:c.current?"none":"width 250ms cubic-bezier(0.4, 0, 0.2, 1)",overflow:"hidden"}:{width:u},be=e.jsx("div",{onMouseDown:ge,className:"absolute top-0 bottom-0 z-10 flex items-center justify-center group",style:{[n==="right"||!n?"left":"right"]:-4,width:8,cursor:"col-resize"},"aria-hidden":"true",children:e.jsx("div",{className:"w-0.5 h-8 rounded-full bg-lyra-border-default opacity-0 group-hover:opacity-100 transition-opacity"})});return e.jsx("div",{ref:me,className:we("relative flex flex-col h-full bg-lyra-bg-surface-overlay shrink-0",fe,o),style:he,...ue,children:e.jsxs("div",{className:"flex flex-col h-full",style:{width:u,minWidth:u,position:n==="left"?"absolute":void 0,right:n==="left"?0:void 0,top:n==="left"?0:void 0,bottom:n==="left"?0:void 0},children:[(!n||d)&&be,r&&e.jsx(Te,{title:r,icon:a,actions:l,onClose:i}),e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0",children:ce}),O&&e.jsx(Ne,{children:O})]})})});j.displayName="InteriorPanel";j.__docgenInfo={description:"",methods:[],displayName:"InteriorPanel",props:{headerTitle:{required:!1,tsType:{name:"string"},description:"Panel title rendered in the header"},headerIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon rendered to the left of the header title"},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional actions rendered to the right of the header title"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Show a close button in the header — calls onClose when clicked"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content pinned to the bottom of the panel, outside the scroll area"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the panel (default: 340px)",defaultValue:{value:"340",computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:"Min width when resizing (default: 200px)",defaultValue:{value:"200",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"Max width when resizing (default: 800px)",defaultValue:{value:"800",computed:!1}},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:`Which side the panel slides in from.
Determines which border is shown: left → border-right, right → border-left.
Omit for a static panel (no animation, border on both sides).`},open:{required:!1,tsType:{name:"boolean"},description:"Whether the panel is visible — required when using `side` for animation"}}};const _e={title:"UI/PageHeader",component:T,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},s=e.jsxs(e.Fragment,{children:[e.jsx(P,{variant:"outline",children:"Secondary"}),e.jsx(P,{children:"Primary"}),e.jsx("div",{className:"mx-1 h-6 w-px bg-lyra-border-subtle"}),e.jsxs(P,{variant:"outline",children:[e.jsx(Pe,{className:"h-4 w-4"}),"Ask AI"]})]}),m={name:"Default",args:{title:"Desktop Designs",actions:s}},p={name:"With Chip",args:{title:"Desktop Designs",chip:"Active",chipColor:"green",chipVariant:"subtle",actions:s}},g={name:"Title Only",args:{title:"Settings"}},f={name:"Single Action",args:{title:"User Management",actions:e.jsx(P,{children:"Add User"})}},h={name:"With Panel Toggle",args:{title:"Desktop Designs",panelToggle:"left",actions:s}},b={name:"With Breadcrumb",args:{title:"Page Title",breadcrumb:{label:"ParentName"},actions:s}},v={name:"Panel Toggle (Pinned)",render:()=>{const[o,r]=t.useState(!0);return e.jsxs("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(de,{open:o,pinned:!0,headerTitle:"Designer"}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(T,{title:"Page Title",panelToggle:"left",panelPinned:!0,onPanelToggle:()=>r(a=>!a),breadcrumb:{label:"ParentName"},actions:s}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},x={name:"Panel Toggle (Overlay on Hover)",render:()=>{const[o,r]=t.useState(!1),a=ye.useRef(),l=()=>{clearTimeout(a.current),r(!0)},i=()=>{a.current=setTimeout(()=>r(!1),300)};return e.jsxs("div",{className:"relative flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsx(de,{open:o,pinned:!1,headerTitle:"Designer",onMouseEnter:l,onMouseLeave:i}),e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(T,{title:"Page Title",panelToggle:"left",panelPinned:!1,onPanelHoverStart:l,onPanelHoverEnd:i,breadcrumb:{label:"ParentName"},actions:s}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}},y={name:"Interior Panel Toggle",render:()=>{const[o,r]=t.useState(!1);return e.jsx("div",{className:"flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(T,{title:"Page Title",panelToggle:"right",onInnerPanelToggle:()=>r(a=>!a),actions:s}),e.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(j,{side:"right",open:o,headerTitle:"Details",onClose:()=>r(!1),children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Panel content goes here."})})})]})]})})}};var M,k,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Desktop Designs",
    actions: defaultActions
  }
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,z,L;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "With Chip",
  args: {
    title: "Desktop Designs",
    chip: "Active",
    chipColor: "green",
    chipVariant: "subtle",
    actions: defaultActions
  }
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var U,V,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Title Only",
  args: {
    title: "Settings"
  }
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var _,F,G;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Single Action",
  args: {
    title: "User Management",
    actions: <Button>Add User</Button>
  }
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "With Panel Toggle",
  args: {
    title: "Desktop Designs",
    panelToggle: "left",
    actions: defaultActions
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With Breadcrumb",
  args: {
    title: "Page Title",
    breadcrumb: {
      label: "ParentName"
    },
    actions: defaultActions
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Panel Toggle (Pinned)",
  render: () => {
    const [panelOpen, setPanelOpen] = useState(true);
    return <div className="flex h-[600px] rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
        <SidePanel open={panelOpen} pinned headerTitle="Designer" />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader title="Page Title" panelToggle="left" panelPinned onPanelToggle={() => setPanelOpen(v => !v)} breadcrumb={{
          label: "ParentName"
        }} actions={defaultActions} />
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>;
  }
}`,...(re=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,ae,oe;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
        <SidePanel open={panelOpen} pinned={false} headerTitle="Designer" onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <PageHeader title="Page Title" panelToggle="left" panelPinned={false} onPanelHoverStart={onHoverStart} onPanelHoverEnd={onHoverEnd} breadcrumb={{
          label: "ParentName"
        }} actions={defaultActions} />
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>;
  }
}`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,le,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Fe=["Default","WithChip","TitleOnly","WithSingleAction","WithPanelToggle","WithBreadcrumb","WithTogglePinned","WithToggleOverlay","WithInnerPanelToggle"];export{m as Default,g as TitleOnly,b as WithBreadcrumb,p as WithChip,y as WithInnerPanelToggle,h as WithPanelToggle,f as WithSingleAction,x as WithToggleOverlay,v as WithTogglePinned,Fe as __namedExportsOrder,_e as default};
