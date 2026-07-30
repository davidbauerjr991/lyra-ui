import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CXOcBcs0.js";import{I as s}from"./interior-panel-aXRC0HMC.js";import{P as m}from"./page-header-j--iyvIP.js";import{B as t}from"./button-C9HuGDNI.js";import{I as r}from"./input-B6wjqCOy.js";import{T as E,a as B}from"./tabs-DarM_pAT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-yODun0G6.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./minimize-2-BOwQ4FVI.js";import"./badge-go1ZjKcF.js";import"./index-1evVQkiP.js";import"./breadcrumb-C3rAp30t.js";import"./index-BDkVnVO1.js";import"./kebab-menu-button-CH1sKapZ.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./ellipsis-chVl1-lO.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./error-icon-Jj0G9Pna.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";const ve={title:"Custom Primitives/InteriorPanel",component:s,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{allowFullScreen:{control:"boolean",name:"Allow full screen"}}},d={name:"Interior Panel — Right",args:{allowFullScreen:!1},render:n=>{const[a,l]=o.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(m,{title:"Page Title",actions:e.jsx(t,{onClick:()=>l(u=>!u),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(s,{side:"right",open:a,headerTitle:"Dialog Title",allowFullScreen:n.allowFullScreen,onClose:()=>l(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{children:"Save"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})]})}},c={name:"Interior Panel — With Full Screen Toggle",render:()=>{const[n,a]=o.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(m,{title:"Page Title",actions:e.jsx(t,{onClick:()=>a(l=>!l),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(s,{side:"right",open:n,headerTitle:"Wide Report",headerSubhead:"Click the full-screen icon in the header to expand",allowFullScreen:!0,onClose:()=>a(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})]})}},p={name:"Interior Panel — With Tabs",render:()=>{const[n,a]=o.useState(!0),[l,u]=o.useState(0),C=["Overview","Detail","History"];return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(m,{title:"Page Title",actions:e.jsx(t,{onClick:()=>a(i=>!i),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(s,{side:"right",open:n,headerTitle:"Customer Information",headerSubhead:"Noah Bennett · CST-10296",headerTabs:e.jsx(E,{className:"px-4",children:C.map((i,b)=>e.jsx(B,{active:l===b,onClick:()=>u(b),children:i},i))}),onClose:()=>a(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})]})}},h={name:"Interior Panel — Left",render:()=>{const[n,a]=o.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(m,{title:"Page Title",actions:e.jsx(t,{onClick:()=>a(l=>!l),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx(s,{side:"left",open:n,headerTitle:"Filters",onClose:()=>a(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"Reset"}),e.jsx(t,{children:"Apply"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Search",placeholder:"Filter by name..."}),e.jsx(r,{label:"Category",placeholder:"Select category..."})]})}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}};var x,f,g;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Interior Panel — Right",
  args: {
    allowFullScreen: false
  },
  render: args => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters: \`InteriorPanel\` switches to \`position:
            absolute; top: 0; height: 100%\` below 1024px of THIS row's own
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
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var N,T,j;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var P,S,I;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Interior Panel — Left",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters: \`InteriorPanel\` switches to \`position:
            absolute; top: 0; height: 100%\` below 1024px of THIS row's own
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
}`,...(I=(S=h.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const ye=["Right","WithFullScreen","WithTabs","Left"];export{h as Left,d as Right,c as WithFullScreen,p as WithTabs,ye as __namedExportsOrder,ve as default};
