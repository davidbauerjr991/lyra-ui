import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as t}from"./interior-panel-BSGl5pBS.js";import{B as o}from"./button-GxCpv2fL.js";import{I as r}from"./input-Bj9llYuD.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-Ca2x66t9.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-go1ZjKcF.js";import"./error-icon-Jj0G9Pna.js";import"./label-nFez4jEO.js";import"./circle-help-Bj2MpUE2.js";const L={title:"Custom Primitives/InteriorPanel",component:t,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={name:"Interior Panel — Right",render:()=>e.jsxs("div",{className:"h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(t,{side:"right",open:!0,headerTitle:"Dialog Title",onClose:()=>{},footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{children:"Save"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Name",placeholder:"Enter name"}),e.jsx(r,{label:"Description",placeholder:"Enter description"}),e.jsx(r,{label:"Value",placeholder:"Enter value"})]})})]})},a={name:"Interior Panel — Left",render:()=>e.jsxs("div",{className:"h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(t,{side:"left",open:!0,headerTitle:"Filters",onClose:()=>{},footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",children:"Reset"}),e.jsx(o,{children:"Apply"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(r,{label:"Search",placeholder:"Filter by name..."}),e.jsx(r,{label:"Category",placeholder:"Select category..."})]})}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})};var n,s,i;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Interior Panel — Right",
  render: () => <div className="h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      <div className="flex-1 bg-lyra-bg-surface-base" />
      <InteriorPanel side="right" open headerTitle="Dialog Title" onClose={() => {}} footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}>
        <div className="flex flex-col gap-4 px-4 py-4">
          <Input label="Name" placeholder="Enter name" />
          <Input label="Description" placeholder="Enter description" />
          <Input label="Value" placeholder="Enter value" />
        </div>
      </InteriorPanel>
    </div>
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Interior Panel — Left",
  render: () => <div className="h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      <InteriorPanel side="left" open headerTitle="Filters" onClose={() => {}} footer={<><Button variant="outline">Reset</Button><Button>Apply</Button></>}>
        <div className="flex flex-col gap-4 px-4 py-4">
          <Input label="Search" placeholder="Filter by name..." />
          <Input label="Category" placeholder="Select category..." />
        </div>
      </InteriorPanel>
      <div className="flex-1 bg-lyra-bg-surface-base" />
    </div>
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const A=["Right","Left"];export{a as Left,l as Right,A as __namedExportsOrder,L as default};
