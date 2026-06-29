import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CXOcBcs0.js";import{P as t}from"./panel-qVGpLKT4.js";import{B as n}from"./button-Dd7BgKlB.js";import{I as s}from"./input-sI5l2AlR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-Bo-bv7NH.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./panel-footer-D8KKnVD3.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./error-icon-DM5nl_7y.js";import"./label-98nUxQ8o.js";const J={title:"Atoms/Panel",component:t,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o={name:"Interior Panel",render:()=>e.jsxs("div",{className:"h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(t,{variant:"interior",side:"right",open:!0,headerTitle:"Dialog Title",onClose:()=>{},footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Cancel"}),e.jsx(n,{children:"Save"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(s,{label:"Name",placeholder:"Enter name"}),e.jsx(s,{label:"Description",placeholder:"Enter description"}),e.jsx(s,{label:"Value",placeholder:"Enter value"})]})})]})},i={name:"Side Panel",render:()=>{const[a,m]=c.useState(!0),[l,u]=c.useState(!0);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(t,{variant:"side",side:"left",open:a,pinned:l,headerTitle:"Designer",onPinToggle:()=>u(r=>!r),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Side panel content."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(n,{onClick:()=>m(r=>!r),variant:"outline",children:a?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:l?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},d={name:"Interior Panel — Left",render:()=>e.jsxs("div",{className:"h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(t,{variant:"interior",side:"left",open:!0,headerTitle:"Filters",onClose:()=>{},footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Reset"}),e.jsx(n,{children:"Apply"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(s,{label:"Search",placeholder:"Filter by name..."}),e.jsx(s,{label:"Category",placeholder:"Select category..."})]})}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})},p={name:"Side Panel — Right",render:()=>{const[a,m]=c.useState(!0),[l,u]=c.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(n,{onClick:()=>m(r=>!r),variant:"outline",children:a?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:l?"Pinned":"Overlay"})]}),e.jsx(t,{variant:"side",side:"right",open:a,pinned:l,headerTitle:"Details",onPinToggle:()=>u(r=>!r),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Right side panel content."})})})]})}};var x,v,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Interior Panel",
  render: () => <div className="h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      <div className="flex-1 bg-lyra-bg-surface-base" />
      <Panel variant="interior" side="right" open headerTitle="Dialog Title" onClose={() => {}} footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}>
        <div className="flex flex-col gap-4 px-4 py-4">
          <Input label="Name" placeholder="Enter name" />
          <Input label="Description" placeholder="Enter description" />
          <Input label="Value" placeholder="Enter value" />
        </div>
      </Panel>
    </div>
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,f,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Side Panel",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(true);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <Panel variant="side" side="left" open={open} pinned={pinned} headerTitle="Designer" onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Side panel content.</p>
          </div>
        </Panel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>;
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,P,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Interior Panel — Left",
  render: () => <div className="h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      <Panel variant="interior" side="left" open headerTitle="Filters" onClose={() => {}} footer={<><Button variant="outline">Reset</Button><Button>Apply</Button></>}>
        <div className="flex flex-col gap-4 px-4 py-4">
          <Input label="Search" placeholder="Filter by name..." />
          <Input label="Category" placeholder="Select category..." />
        </div>
      </Panel>
      <div className="flex-1 bg-lyra-bg-surface-base" />
    </div>
}`,...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var N,S,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Side Panel — Right",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned" : "Overlay"}
          </p>
        </div>
        <Panel variant="side" side="right" open={open} pinned={pinned} headerTitle="Details" onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Right side panel content.</p>
          </div>
        </Panel>
      </div>;
  }
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const K=["Interior","Side","InteriorLeft","SideRight"];export{o as Interior,d as InteriorLeft,i as Side,p as SideRight,K as __namedExportsOrder,J as default};
