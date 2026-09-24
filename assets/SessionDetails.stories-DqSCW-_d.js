import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DhMLlvMY.js";import{S as r,a as j}from"./session-details-NyjjlMEK.js";import{C as _}from"./chat-message-Cc-HGh-2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CojK3Emx.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./actions-C1Yi6SFh.js";import"./tooltip-B7WaxDQZ.js";import"./button-C7ty1faS.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./tag-DKZdDztl.js";import"./x-CzxgOx-T.js";import"./label-DV0nvecx.js";import"./circle-help-DYnzmdO5.js";import"./chevron-right-BP9ksYh_.js";import"./chevrons-up-down-DzGeAFqz.js";import"./trash-2-DTLo779S.js";import"./tag-picker-8Cgybdwf.js";import"./popover-BCWMVAq6.js";import"./index-BmfIz0--.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-an86y9Fl.js";import"./checkbox-oHaKtVcR.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./user-BnR-bf5w.js";import"./copy-CtBWyGKZ.js";const u=[{variant:"customer",name:"Alex Rivera",initials:"AR",timestamp:"9:37 AM",text:"Hi, I was charged twice for my last order — can you help?"},{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:39 AM",text:"Of course — let me pull up your account and take a look."},{variant:"customer",name:"Alex Rivera",initials:"AR",timestamp:"9:41 AM",text:"Thank you, order #48213."},{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:44 AM",text:"I've confirmed the duplicate charge and issued a refund — you should see it within 3–5 business days."}],i={contactId:"CTX-20260825-99439",date:"August 25, 2026",startTime:"9:37 AM",endTime:"—",channel:"WhatsApp",skill:"General Support",agent:"John Smith",status:"Open",fingerprint:{os:"Windows 10",browser:"Edge v.150.0.0.0",language:"en-US",deviceType:"Desktop",applicationType:"Browser"}},he={title:"UI/SessionDetails",component:r,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},tags:["autodocs"]},p={name:"Draft — 0 Messages, Delete Draft",render:()=>{const[s,t]=a.useState(!0);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:i,open:s,onToggle:()=>t(n=>!n),messageCount:0,onDeleteDraft:()=>{}})})}},l={name:"In Progress — With Messages",render:()=>{const[s,t]=a.useState(!0);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:{...i,channel:"Voice",status:"Open"},open:s,onToggle:()=>t(n=>!n),messageCount:12})})}},m={name:"Collapsed",render:()=>{const[s,t]=a.useState(!1);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:i,open:s,onToggle:()=>t(n=>!n),messageCount:0,onDeleteDraft:()=>{}})})}},c={name:"Closed — Status Pill + Collapse",render:()=>{const[s,t]=a.useState(!0),[n,A]=a.useState(!1);return e.jsx("div",{className:"w-[900px]",children:e.jsx(r,{session:{...i,status:"Closed",endTime:"10:14 AM"},open:s,onToggle:()=>t(o=>!o),messageCount:u.length,collapsed:n,onToggleCollapsed:()=>A(o=>!o),children:e.jsx("div",{className:"flex flex-col gap-4 px-1",children:u.map((o,y)=>e.jsx(_,{...o},y))})})})}},d={name:"Card Only (No Toggle Row)",render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(j,{session:i})})};var S,g,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const fe=["Draft","InProgress","Collapsed","Closed","CardOnly"];export{d as CardOnly,c as Closed,m as Collapsed,p as Draft,l as InProgress,fe as __namedExportsOrder,he as default};
