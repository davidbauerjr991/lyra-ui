import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-CXOcBcs0.js";import{I as i}from"./interior-panel-DzP2yDxs.js";import{P as x}from"./page-header-Db9cZg39.js";import{B as r}from"./button-C9HuGDNI.js";import{I as o}from"./input-B6wjqCOy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-2Nit70wB.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./badge-go1ZjKcF.js";import"./index-1evVQkiP.js";import"./breadcrumb-KE2OrVzD.js";import"./index-BDkVnVO1.js";import"./kebab-menu-button-B41D96xJ.js";import"./menu-radix-BemP-mIi.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./ellipsis-chVl1-lO.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./error-icon-Jj0G9Pna.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";const re={title:"Custom Primitives/InteriorPanel",component:i,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"Interior Panel — Right",render:()=>{const[l,t]=f.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(x,{title:"Page Title",actions:e.jsx(r,{onClick:()=>t(s=>!s),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(i,{side:"right",open:l,headerTitle:"Dialog Title",onClose:()=>t(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Save"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(o,{label:"Name",placeholder:"Enter name"}),e.jsx(o,{label:"Description",placeholder:"Enter description"}),e.jsx(o,{label:"Value",placeholder:"Enter value"})]})})]})]})}},n={name:"Interior Panel — Left",render:()=>{const[l,t]=f.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(x,{title:"Page Title",actions:e.jsx(r,{onClick:()=>t(s=>!s),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx(i,{side:"left",open:l,headerTitle:"Filters",onClose:()=>t(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Reset"}),e.jsx(r,{children:"Apply"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(o,{label:"Search",placeholder:"Filter by name..."}),e.jsx(o,{label:"Category",placeholder:"Select category..."})]})}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Interior Panel — Right",
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
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Dialog Title" onClose={() => setOpen(false)} footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,h,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const te=["Right","Left"];export{n as Left,a as Right,te as __namedExportsOrder,re as default};
