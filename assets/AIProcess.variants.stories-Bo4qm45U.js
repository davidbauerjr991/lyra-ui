import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n}from"./ai-process-DKgPSbgS.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./icon-J1e0iagV.js";import"./index-1evVQkiP.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./progress-bar-CuQqxcLC.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./clock-C3xVexPO.js";import"./circle-alert-DucVQP5w.js";import"./loader-D8U98l95.js";import"./check-Dr3vGcdY.js";const ce={title:"UI/AIProcess/Variants",component:n,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"All steps done",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Verifying 2FA configuration",status:"done"},{id:"4",label:"Identifying likely root cause",status:"done"},{id:"5",label:"Generating recommended action",status:"done"}]})})},o={name:"In progress",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Verifying 2FA configuration",status:"active",description:"Analysing device fingerprint…"},{id:"4",label:"Identifying likely root cause",status:"pending"},{id:"5",label:"Generating recommended action",status:"pending"}]})})},d={name:"With error",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"error",description:"Unable to retrieve login logs — service timeout"},{id:"3",label:"Verifying 2FA configuration",status:"pending"}]})})},l={name:"With step descriptions",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,steps:[{id:"1",label:"Analysing conversation sentiment",status:"done",description:"3 frustrated signals detected"},{id:"2",label:"Pulling CRM profile",status:"done",description:"Customer since 2019 · Tier: Premium"},{id:"3",label:"Checking SLA status",status:"active",description:"Billing queue — projected breach in ~8 min"},{id:"4",label:"Drafting escalation recommendation",status:"pending"}]})})},c={name:"Collapsed (default)",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{steps:[{id:"1",label:"Step one",status:"done"},{id:"2",label:"Step two",status:"done"},{id:"3",label:"Step three",status:"active"}]})})},s={name:"Progress (subtle and strong)",render:()=>e.jsx("div",{className:"flex max-w-md flex-col gap-8",children:["subtle","strong"].map(t=>e.jsx(n,{variant:"progress",intensity:t,title:"Refund review",meta:"Back office · stage 3 of 5",steps:[{id:"1",label:"Review opened",status:"done",at:"2:00"},{id:"2",label:"Photo verified",status:"done",at:"2:01"},{id:"3",label:"Waiting on approval",status:"active"},{id:"4",label:"Refund issued",status:"pending"}]},t))})},i={name:"Numbered (subtle and strong)",render:()=>e.jsx("div",{className:"flex max-w-md flex-col gap-8",children:["subtle","strong"].map(t=>e.jsx(n,{variant:"numbered",intensity:t,title:"Warranty replacement",steps:[{id:"1",label:"Confirm the delivery date",description:"It is on the account, so the customer needs no receipt."},{id:"2",label:"Check the light pattern",description:"A steady blinking red light confirms the board fault."},{id:"3",label:"Raise a replacement claim",description:"Choose “Board fault” as the reason; a technician swaps the unit on site."}]},t))})},a={name:"Strong colors (thought process)",render:()=>e.jsx("div",{className:"max-w-md",children:e.jsx(n,{defaultExpanded:!0,intensity:"strong",steps:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"error",description:"Unable to retrieve login logs — service timeout"},{id:"3",label:"Verifying 2FA configuration",status:"active",description:"Analysing device fingerprint…"},{id:"4",label:"Generating recommended action",status:"pending"}]})})};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,f,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,w,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,k,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var I,j,N,S,R;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Progress (subtle and strong)",
  render: () => <div className="flex max-w-md flex-col gap-8">
      {(["subtle", "strong"] as const).map(intensity => <AIProcess key={intensity} variant="progress" intensity={intensity} title="Refund review" meta="Back office · stage 3 of 5" steps={[{
      id: "1",
      label: "Review opened",
      status: "done",
      at: "2:00"
    }, {
      id: "2",
      label: "Photo verified",
      status: "done",
      at: "2:01"
    }, {
      id: "3",
      label: "Waiting on approval",
      status: "active"
    }, {
      id: "4",
      label: "Refund issued",
      status: "pending"
    }]} />)}
    </div>
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:'`variant="progress"`: a titled process with a progress bar and the time each step happened.',...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.description}}};var E,W,V,F,B;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Numbered (subtle and strong)",
  render: () => <div className="flex max-w-md flex-col gap-8">
      {(["subtle", "strong"] as const).map(intensity => <AIProcess key={intensity} variant="numbered" intensity={intensity} title="Warranty replacement" steps={[{
      id: "1",
      label: "Confirm the delivery date",
      description: "It is on the account, so the customer needs no receipt."
    }, {
      id: "2",
      label: "Check the light pattern",
      description: "A steady blinking red light confirms the board fault."
    }, {
      id: "3",
      label: "Raise a replacement claim",
      description: "Choose “Board fault” as the reason; a technician swaps the unit on site."
    }]} />)}
    </div>
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source},description:{story:'`variant="numbered"`: instructions to follow in order, with a number instead of a status.',...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var D,G,U,q,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Strong colors (thought process)",
  render: () => <div className="max-w-md">
      <AIProcess defaultExpanded intensity="strong" steps={[{
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
      status: "active",
      description: "Analysing device fingerprint…"
    }, {
      id: "4",
      label: "Generating recommended action",
      status: "pending"
    }]} />
    </div>
}`,...(U=(G=a.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:'`intensity="strong"` on the thought-process list: solid circles with white glyphs.',...(L=(q=a.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};const pe=["AllDone","InProgress","WithError","WithDescriptions","Collapsed","Progress","Numbered","StrongColors"];export{r as AllDone,c as Collapsed,o as InProgress,i as Numbered,s as Progress,a as StrongColors,l as WithDescriptions,d as WithError,pe as __namedExportsOrder,ce as default};
