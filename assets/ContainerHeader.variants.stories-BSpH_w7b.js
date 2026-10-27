import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./container-header-CRBwP-Mp.js";import{B as a}from"./button-Cje2PXGX.js";import{B as b}from"./badge-DnlHYDBX.js";import{I as u}from"./info-icon-CVWl96lq.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./utils-BLSKlp9E.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-1evVQkiP.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";const V={title:"Custom Primitives/ContainerHeader/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base",children:[e.jsx(r,{title:"Title only",bordered:!1}),e.jsx(r,{title:"With close",bordered:!1,onClose:()=>{}}),e.jsx(r,{title:"With icon",icon:e.jsx(u,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}}),e.jsx(r,{title:"With actions",bordered:!1,onClose:()=>{},actions:e.jsx(a,{variant:"outline",size:"md",children:"Action"})}),e.jsx(r,{title:"With buttons",bordered:!1,onClose:()=>{},actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"md",children:"Action"}),e.jsx(a,{variant:"outline",size:"md",children:"Action"})]})}),e.jsx(r,{title:"With badge",bordered:!1,onClose:()=>{},titleBadge:e.jsx(b,{shape:"circle",count:3,variant:"default",size:"sm"})}),e.jsx(r,{title:"With subhead",subhead:"Secondary description text",bordered:!1,onClose:()=>{}})]})},o={name:"Truncated Title",render:()=>e.jsxs("div",{className:"flex w-64 flex-col divide-y divide-lyra-border-subtle rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[e.jsx(r,{title:"Service level by queue for the spring returns window",bordered:!1}),e.jsx(r,{title:"Pipeline",bordered:!1})]})};var i,n,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base">
      <ContainerHeader title="Title only" bordered={false} />
      <ContainerHeader title="With close" bordered={false} onClose={() => {}} />
      <ContainerHeader title="With icon" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
      <ContainerHeader title="With actions" bordered={false} onClose={() => {}} actions={<Button variant="outline" size="md">Action</Button>} />
      <ContainerHeader title="With buttons" bordered={false} onClose={() => {}} actions={<>
            <Button variant="outline" size="md">Action</Button>
            <Button variant="outline" size="md">Action</Button>
          </>} />
      <ContainerHeader title="With badge" bordered={false} onClose={() => {}} titleBadge={<Badge shape="circle" count={3} variant="default" size="sm" />} />
      <ContainerHeader title="With subhead" subhead="Secondary description text" bordered={false} onClose={() => {}} />
    </div>
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Truncated Title",
  render: () => <div className="flex w-64 flex-col divide-y divide-lyra-border-subtle rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      <ContainerHeader title="Service level by queue for the spring returns window" bordered={false} />
      <ContainerHeader title="Pipeline" bordered={false} />
    </div>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const q=["AllVariants","TruncatedTitle"];export{t as AllVariants,o as TruncatedTitle,q as __namedExportsOrder,V as default};
