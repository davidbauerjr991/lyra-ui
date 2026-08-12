import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n}from"./ai-process-qi054P4V.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./icon-DdukfRb_.js";import"./index-1evVQkiP.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./clock-xCVatdV-.js";import"./circle-alert-B0P0YYAI.js";import"./loader-DdNAb2KA.js";import"./check-DrRFj5bn.js";const L={title:"UI/AIProcess",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={name:"All steps done",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Verifying 2FA configuration",status:"done"},{id:"4",label:"Identifying likely root cause",status:"done"},{id:"5",label:"Generating recommended action",status:"done"}]})})},s={name:"In progress",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Verifying 2FA configuration",status:"active",description:"Analysing device fingerprint…"},{id:"4",label:"Identifying likely root cause",status:"pending"},{id:"5",label:"Generating recommended action",status:"pending"}]})})},i={name:"With error",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"error",description:"Unable to retrieve login logs — service timeout"},{id:"3",label:"Verifying 2FA configuration",status:"pending"}]})})},a={name:"With step descriptions",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Analysing conversation sentiment",status:"done",description:"3 frustrated signals detected"},{id:"2",label:"Pulling CRM profile",status:"done",description:"Customer since 2019 · Tier: Premium"},{id:"3",label:"Checking SLA status",status:"active",description:"Billing queue — projected breach in ~8 min"},{id:"4",label:"Drafting escalation recommendation",status:"pending"}]})})},r={name:"Collapsed (default)",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{steps:[{id:"1",label:"Step one",status:"done"},{id:"2",label:"Step two",status:"done"},{id:"3",label:"Step three",status:"active"}]})})};var o,d,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,f,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,A;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const M=["AllDone","InProgress","WithError","WithDescriptions","Collapsed"];export{t as AllDone,r as Collapsed,s as InProgress,a as WithDescriptions,i as WithError,M as __namedExportsOrder,L as default};
