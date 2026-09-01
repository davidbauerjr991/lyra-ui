import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CXOcBcs0.js";import{S as r,a as j}from"./session-details-CzH63-uo.js";import{C as _}from"./chat-message-hRJBM3RG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DLLcVL9-.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./actions-DHRV90Ma.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./button-C72EbL54.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-BsM2Tnvd.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./tag-Lo5TNvOI.js";import"./x-N8aIqrq2.js";import"./label-DTtDlf5k.js";import"./circle-help-Bj2MpUE2.js";import"./chevron-right-DZKRY3zX.js";import"./chevrons-up-down-X1w2pWEE.js";import"./trash-2-yAnBWR5t.js";import"./tag-picker-tTs9Ozkd.js";import"./popover-CVGTw0br.js";import"./index-BCx7cCMR.js";import"./index-DGPY9VoV.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-nDAu7P_l.js";import"./checkbox-ExbItJLA.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";import"./copy-BRsdvqrt.js";const u=[{variant:"customer",name:"Alex Rivera",initials:"AR",timestamp:"9:37 AM",text:"Hi, I was charged twice for my last order — can you help?"},{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:39 AM",text:"Of course — let me pull up your account and take a look."},{variant:"customer",name:"Alex Rivera",initials:"AR",timestamp:"9:41 AM",text:"Thank you, order #48213."},{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:44 AM",text:"I've confirmed the duplicate charge and issued a refund — you should see it within 3–5 business days."}],i={contactId:"CTX-20260825-99439",date:"August 25, 2026",startTime:"9:37 AM",endTime:"—",channel:"WhatsApp",skill:"General Support",agent:"John Smith",status:"Open",fingerprint:{os:"Windows 10",browser:"Edge v.150.0.0.0",language:"en-US",deviceType:"Desktop",applicationType:"Browser"}},fe={title:"UI/SessionDetails",component:r,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},tags:["autodocs"]},p={name:"Draft — 0 Messages, Delete Draft",render:()=>{const[s,t]=a.useState(!0);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:i,open:s,onToggle:()=>t(n=>!n),messageCount:0,onDeleteDraft:()=>{}})})}},l={name:"In Progress — With Messages",render:()=>{const[s,t]=a.useState(!0);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:{...i,channel:"Voice",status:"Open"},open:s,onToggle:()=>t(n=>!n),messageCount:12})})}},m={name:"Collapsed",render:()=>{const[s,t]=a.useState(!1);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:i,open:s,onToggle:()=>t(n=>!n),messageCount:0,onDeleteDraft:()=>{}})})}},c={name:"Closed — Status Pill + Collapse",render:()=>{const[s,t]=a.useState(!0),[n,A]=a.useState(!1);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:{...i,status:"Closed",endTime:"10:14 AM"},open:s,onToggle:()=>t(o=>!o),messageCount:u.length,collapsed:n,onToggleCollapsed:()=>A(o=>!o),children:e.jsx("div",{className:"flex flex-col gap-4 px-1",children:u.map((o,y)=>e.jsx(_,{...o},y))})})})}},d={name:"Card Only (No Toggle Row)",render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(j,{session:i})})};var S,g,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Draft — 0 Messages, Delete Draft",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="w-[900px]">
        <SessionDetailsSection session={DEMO_SESSION} open={open} onToggle={() => setOpen(v => !v)} messageCount={0} onDeleteDraft={() => {}} />
      </div>;
  }
}`,...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var O,C,v;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "In Progress — With Messages",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="w-[900px]">
        <SessionDetailsSection session={{
        ...DEMO_SESSION,
        channel: "Voice",
        status: "Open"
      }} open={open} onToggle={() => setOpen(v => !v)} messageCount={12} />
      </div>;
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var D,h,f;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Collapsed",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="w-[900px]">
        <SessionDetailsSection session={DEMO_SESSION} open={open} onToggle={() => setOpen(v => !v)} messageCount={0} onDeleteDraft={() => {}} />
      </div>;
  }
}`,...(f=(h=m.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,N,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Closed — Status Pill + Collapse",
  render: () => {
    const [open, setOpen] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    return <div className="w-[900px]">
        <SessionDetailsSection session={{
        ...DEMO_SESSION,
        status: "Closed",
        endTime: "10:14 AM"
      }} open={open} onToggle={() => setOpen(v => !v)} messageCount={CLOSED_SESSION_MESSAGES.length} collapsed={collapsed} onToggleCollapsed={() => setCollapsed(v => !v)}>
          <div className="flex flex-col gap-4 px-1">
            {CLOSED_SESSION_MESSAGES.map((msg, i) => <ChatMessage key={i} {...msg} />)}
          </div>
        </SessionDetailsSection>
      </div>;
  }
}`,...(M=(N=c.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var T,w,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Card Only (No Toggle Row)",
  render: () => <div className="w-[500px]">
      <SessionDetailsCard session={DEMO_SESSION} />
    </div>
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const Ee=["Draft","InProgress","Collapsed","Closed","CardOnly"];export{d as CardOnly,c as Closed,m as Collapsed,p as Draft,l as InProgress,Ee as __namedExportsOrder,fe as default};
