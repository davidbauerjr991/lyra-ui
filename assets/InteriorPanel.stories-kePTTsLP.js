import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DhMLlvMY.js";import{I as i}from"./interior-panel-DpYEopTh.js";import{P as f}from"./page-header-C-uMNvRR.js";import{B as o}from"./button-BLVj2C8E.js";import{I as r}from"./input-CHxvM1hc.js";import{T as H,a as B}from"./tabs-6i-SsgbO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./utils-BLSKlp9E.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-5yYjQ41o.js";import"./panel-footer-CovEXd4d.js";import"./minimize-2-8DCE4oLK.js";import"./badge-CJVmnMhy.js";import"./index-1evVQkiP.js";import"./breadcrumb-B7SFl9AG.js";import"./kebab-menu-button-ELtDHAkh.js";import"./menu-radix-CtpLdDaB.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./spinner-xIhFAlhc.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./trash-2-DTLo779S.js";const We={title:"Custom Primitives/InteriorPanel",component:i,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{allowFullScreen:{control:"boolean",name:"Allow full screen"}}},c={name:"Interior Panel — Right",args:{allowFullScreen:!1},render:t=>{const[a,n]=s.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(f,{title:"Page Title",actions:e.jsx(o,{onClick:()=>n(l=>!l),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(i,{side:"right",open:a,headerTitle:"Dialog Title",allowFullScreen:t.allowFullScreen,onClose:()=>n(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{children:"Save"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})]})}},p={name:"Interior Panel — With Full Screen Toggle",render:()=>{const[t,a]=s.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(f,{title:"Page Title",actions:e.jsx(o,{onClick:()=>a(n=>!n),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(i,{side:"right",open:t,headerTitle:"Wide Report",headerSubhead:"Click the full-screen icon in the header to expand",allowFullScreen:!0,onClose:()=>a(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})]})}},h={name:"Interior Panel — With Tabs",render:()=>{const[t,a]=s.useState(!0),[n,l]=s.useState(0),b=["Overview","Detail","History"];return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(f,{title:"Page Title",actions:e.jsx(o,{onClick:()=>a(d=>!d),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(i,{side:"right",open:t,headerTitle:"Customer Information",headerSubhead:"Noah Bennett · CST-10296",headerTabs:e.jsx(H,{className:"px-4",children:b.map((d,g)=>e.jsx(B,{active:n===g,onClick:()=>l(g),children:d},d))}),onClose:()=>a(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})]})}},m={name:"Interior Panel — Left",render:()=>{const[t,a]=s.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(f,{title:"Page Title",actions:e.jsx(o,{onClick:()=>a(n=>!n),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx(i,{side:"left",open:t,headerTitle:"Filters",onClose:()=>a(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Reset"}),e.jsx(o,{children:"Apply"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Search",placeholder:"Filter by name..."}),e.jsx(r,{label:"Category",placeholder:"Select category..."})]})}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}};function F({overlayHeader:t=!0,containerWidth:a=1600}){const[n,l]=s.useState(!0);return e.jsxs("div",{className:"h-[500px] relative flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",style:{width:a},children:[e.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-lyra-border-subtle bg-lyra-bg-surface-base px-4 py-3",children:[e.jsx("span",{className:"lyra-heading-sm text-lyra-fg-default",children:"Liam Whitfield"}),e.jsx(o,{onClick:()=>l(b=>!b),children:"Toggle Panel"})]}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(i,{side:"right",open:n,headerTitle:"Customer Information",headerSubhead:"Liam Whitfield · CST-10296",allowFullScreen:!0,overlayHeader:t,className:"z-[5]",onClose:()=>l(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})}const u={name:"Interior Panel — In-Contact Configuration (agent-next-gen-v3)",parameters:{controls:{include:["overlayHeader","containerWidth"]}},args:{overlayHeader:!0,containerWidth:1600},argTypes:{overlayHeader:{control:"boolean",description:`Same prop as InteriorPanel's own. On: always the absolute-overlay layout, so it covers the "Liam Whitfield" header row above (mounted inside the same relative box the panel measures as its parent). Off: falls back to InteriorPanel's plain width-squeezing docked behavior, which never covers anything.`},containerWidth:{control:{type:"range",min:600,max:1800,step:20},description:`Width of the row InteriorPanel measures as its parent. With overlayHeader off, drag below 1440px (the Right story's own default breakpoint) to see it switch into the same overlay layout "On" forces permanently — and, since the header is co-located here, cover the header too, purely as a side effect of width rather than intent. That's the difference overlayHeader is for: a deliberate, width-independent guarantee instead of an incidental one.`}},render:t=>e.jsx(F,{...t})};var x,v,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Interior Panel — Right",
  args: {
    allowFullScreen: false
  },
  render: args => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters: \`InteriorPanel\` switches to \`position:
            absolute; top: 0; height: 100%\` below 1440px of THIS row's own
            width (see interior-panel.tsx's \`isNarrow\` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Dialog Title" allowFullScreen={args.allowFullScreen} onClose={() => setOpen(false)} footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,j,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Interior Panel — With Full Screen Toggle",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters — see the Right story's own doc comment
            on this same div for why. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Wide Report" headerSubhead="Click the full-screen icon in the header to expand" allowFullScreen onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(T=(j=p.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var I,N,P;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Interior Panel — With Tabs",
  render: () => {
    const [open, setOpen] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Overview", "Detail", "History"];
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters — see the Right/Left stories' own doc
            comment on this same div for why. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Customer Information" headerSubhead="Noah Bennett · CST-10296" headerTabs={<TabList className="px-4">
                {tabs.map((label, i) => <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                    {label}
                  </Tab>)}
              </TabList>} onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(P=(N=h.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var S,C,O;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Interior Panel — Left",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters: \`InteriorPanel\` switches to \`position:
            absolute; top: 0; height: 100%\` below 1440px of THIS row's own
            width (see interior-panel.tsx's \`isNarrow\` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <InteriorPanel side="left" open={open} headerTitle="Filters" onClose={() => setOpen(false)} footer={<><Button variant="outline">Reset</Button><Button>Apply</Button></>}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Search" placeholder="Filter by name..." />
              <Input label="Category" placeholder="Select category..." />
            </div>
          </InteriorPanel>
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>;
  }
}`,...(O=(C=m.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var k,W,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Interior Panel — In-Contact Configuration (agent-next-gen-v3)",
  // \`meta.component\` is \`InteriorPanel\`, so the Controls addon auto-infers
  // a control for every ONE of ITS props (side/open/resizable/minWidth/
  // storageKey/headerTitle/...) — real for the plain InteriorPanel stories
  // above, but this story renders \`InContactConfigurationDemo\` instead
  // (its own args don't map 1:1 onto InteriorPanel — same reason
  // AgentSearch.stories.tsx's own \`AgentSearchDemo\` wrapper exists), which
  // only reads \`overlayHeader\`/\`containerWidth\` out of \`args\` — every
  // other inferred control was doing nothing when clicked, exactly the
  // "controls don't seem to do anything" bug report. \`controls.include\`
  // scopes the panel to just the two args this story's \`render\` actually
  // consumes, instead of quietly ignoring the rest.
  parameters: {
    controls: {
      include: ["overlayHeader", "containerWidth"]
    }
  },
  args: {
    overlayHeader: true,
    containerWidth: 1600
  },
  argTypes: {
    overlayHeader: {
      control: "boolean",
      description: "Same prop as InteriorPanel's own. On: always the absolute-overlay layout, so it covers the \\"Liam Whitfield\\" header row above (mounted inside the same relative box the panel measures as its parent). Off: falls back to InteriorPanel's plain width-squeezing docked behavior, which never covers anything."
    },
    containerWidth: {
      control: {
        type: "range",
        min: 600,
        max: 1800,
        step: 20
      },
      description: "Width of the row InteriorPanel measures as its parent. With overlayHeader off, drag below 1440px (the Right story's own default breakpoint) to see it switch into the same overlay layout \\"On\\" forces permanently \\u2014 and, since the header is co-located here, cover the header too, purely as a side effect of width rather than intent. That's the difference overlayHeader is for: a deliberate, width-independent guarantee instead of an incidental one."
    }
  },
  render: args => <InContactConfigurationDemo {...args} />
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const Ee=["Right","WithFullScreen","WithTabs","Left","InContactConfiguration"];export{u as InContactConfiguration,m as Left,c as Right,p as WithFullScreen,h as WithTabs,Ee as __namedExportsOrder,We as default};
