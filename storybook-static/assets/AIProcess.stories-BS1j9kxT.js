import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n}from"./ai-process-DLF6vZ7r.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./clock-xCVatdV-.js";import"./check-DrRFj5bn.js";const R={title:"Atoms/AIProcess",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"All steps done",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Verifying 2FA configuration",status:"done"},{id:"4",label:"Identifying likely root cause",status:"done"},{id:"5",label:"Generating recommended action",status:"done"}]})})},t={name:"In progress",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Verifying 2FA configuration",status:"active",description:"Analysing device fingerprint…"},{id:"4",label:"Identifying likely root cause",status:"pending"},{id:"5",label:"Generating recommended action",status:"pending"}]})})},a={name:"With error",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"error",description:"Unable to retrieve login logs — service timeout"},{id:"3",label:"Verifying 2FA configuration",status:"pending"}]})})},i={name:"With step descriptions",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Analysing conversation sentiment",status:"done",description:"3 frustrated signals detected"},{id:"2",label:"Pulling CRM profile",status:"done",description:"Customer since 2019 · Tier: Premium"},{id:"3",label:"Checking SLA status",status:"active",description:"Billing queue — projected breach in ~8 min"},{id:"4",label:"Drafting escalation recommendation",status:"pending"}]})})},r={name:"Collapsed (default)",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{steps:[{id:"1",label:"Step one",status:"done"},{id:"2",label:"Step two",status:"done"},{id:"3",label:"Step three",status:"active"}]})})};var d,o,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All steps done",
  render: () => <div className="max-w-md">
      <AIProcess defaultExpanded steps={[{
      id: "1",
      label: "Reviewing account history",
      status: "done"
    }, {
      id: "2",
      label: "Checking recent login events",
      status: "done"
    }, {
      id: "3",
      label: "Verifying 2FA configuration",
      status: "done"
    }, {
      id: "4",
      label: "Identifying likely root cause",
      status: "done"
    }, {
      id: "5",
      label: "Generating recommended action",
      status: "done"
    }]} />
    </div>
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "In progress",
  render: () => <div className="max-w-md">
      <AIProcess defaultExpanded steps={[{
      id: "1",
      label: "Reviewing account history",
      status: "done"
    }, {
      id: "2",
      label: "Checking recent login events",
      status: "done"
    }, {
      id: "3",
      label: "Verifying 2FA configuration",
      status: "active",
      description: "Analysing device fingerprint…"
    }, {
      id: "4",
      label: "Identifying likely root cause",
      status: "pending"
    }, {
      id: "5",
      label: "Generating recommended action",
      status: "pending"
    }]} />
    </div>
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With error",
  render: () => <div className="max-w-md">
      <AIProcess defaultExpanded steps={[{
      id: "1",
      label: "Reviewing account history",
      status: "done"
    }, {
      id: "2",
      label: "Checking recent login events",
      status: "error",
      description: "Unable to retrieve login logs — service timeout"
    }, {
      id: "3",
      label: "Verifying 2FA configuration",
      status: "pending"
    }]} />
    </div>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,f,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With step descriptions",
  render: () => <div className="max-w-md">
      <AIProcess defaultExpanded steps={[{
      id: "1",
      label: "Analysing conversation sentiment",
      status: "done",
      description: "3 frustrated signals detected"
    }, {
      id: "2",
      label: "Pulling CRM profile",
      status: "done",
      description: "Customer since 2019 · Tier: Premium"
    }, {
      id: "3",
      label: "Checking SLA status",
      status: "active",
      description: "Billing queue — projected breach in ~8 min"
    }, {
      id: "4",
      label: "Drafting escalation recommendation",
      status: "pending"
    }]} />
    </div>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Collapsed (default)",
  render: () => <div className="max-w-md">
      <AIProcess steps={[{
      id: "1",
      label: "Step one",
      status: "done"
    }, {
      id: "2",
      label: "Step two",
      status: "done"
    }, {
      id: "3",
      label: "Step three",
      status: "active"
    }]} />
    </div>
}`,...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const W=["AllDone","InProgress","WithError","WithDescriptions","Collapsed"];export{s as AllDone,r as Collapsed,t as InProgress,i as WithDescriptions,a as WithError,W as __namedExportsOrder,R as default};
