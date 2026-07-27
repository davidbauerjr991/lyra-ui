import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,D as c}from"./conversation-message-tpCjj25K.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./ai-process-Bq0VQ-Yn.js";import"./icon-DdukfRb_.js";import"./index-1evVQkiP.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./clock-xCVatdV-.js";import"./loader-X1Xxmygt.js";import"./check-DrRFj5bn.js";import"./copy-BRsdvqrt.js";import"./triangle-alert-Btkn3DL5.js";const U={title:"UI/ConversationMessage",component:a,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["user","ai","agent","dark"]}}};function l({initials:N,color:T="bg-lyra-bg-active-subtle text-lyra-fg-active-strong"}){return e.jsx("div",{className:`flex h-8 w-8 rounded-full items-center justify-center lyra-label shrink-0 ${T}`,children:N})}const s={args:{variant:"user",children:"How can I reset my password?"}},t={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 max-w-xl pt-10",children:[e.jsx(a,{variant:"user",children:"How can I reset my password?"}),e.jsxs(a,{variant:"ai",process:[{id:"1",label:"Verifying identity requirements",status:"done"},{id:"2",label:"Checking password policy",status:"done"},{id:"3",label:"Preparing reset flow",status:"done"}],processExpanded:!0,children:["Go to ",e.jsx("strong",{children:"Settings → Security → Reset password"})," and follow the steps."]}),e.jsx(a,{variant:"agent",children:"Let me pull up your account details now."}),e.jsxs(a,{variant:"dark",senderName:"Agent Name",children:["Your verification code is ",e.jsx("strong",{children:"482913"}),". It expires in 10 minutes."]})]})},r={name:"With avatars",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-xl pt-10",children:[e.jsx(a,{variant:"user",children:"I've been waiting for 20 minutes, this is frustrating."}),e.jsx(a,{variant:"agent",avatar:e.jsx(l,{initials:"SJ"}),senderName:"Sarah J.",children:"I sincerely apologize for the wait. Let me prioritize your case right now."}),e.jsx(a,{variant:"ai",avatar:e.jsx(l,{initials:"AI",color:"bg-lyra-bg-active-subtle text-lyra-fg-active-strong"}),senderName:"AI Assistant",children:"Based on the account history, this customer has contacted us 3 times in the past week."})]})},n={name:"Timestamps & date separator",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-xl pt-10",children:[e.jsx(c,{label:"Yesterday"}),e.jsx(a,{variant:"user",timestamp:"4:12 PM",children:"Can you check my order status?"}),e.jsx(a,{variant:"agent",timestamp:"4:13 PM",senderName:"Marcus T.",children:"Of course! Your order #84721 is currently in transit."}),e.jsx(c,{label:"Today"}),e.jsx(a,{variant:"user",timestamp:"9:04 AM",children:"It still hasn't arrived. It was supposed to be here yesterday."}),e.jsx(a,{variant:"agent",timestamp:"9:06 AM",senderName:"Marcus T.",children:"I'm escalating this to our logistics team immediately."})]})},i={name:"With alert helper messages",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 max-w-xl pt-10",children:[e.jsx(a,{variant:"user",alert:"Frustrated sentiment detected",timestamp:"2:31 PM",children:"This is absolutely ridiculous, I've called 4 times already!"}),e.jsx(a,{variant:"user",alert:{message:"Possible churn risk detected — consider retention offer",icon:e.jsx("span",{className:"text-sm",children:"⚠️"})},timestamp:"2:32 PM",children:"I'm considering switching providers at this point."}),e.jsx(a,{variant:"agent",timestamp:"2:33 PM",senderName:"Lisa K.",children:"I completely understand your frustration. Let me make this right."})]})},o={name:"Full conversation thread",render:()=>e.jsxs("div",{className:"flex flex-col gap-5 max-w-xl pt-10",children:[e.jsx(c,{label:"June 4, 2026"}),e.jsx(a,{variant:"user",timestamp:"10:41 AM",children:"Hi, I can't seem to access my account."}),e.jsx(a,{variant:"ai",process:[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"done"},{id:"3",label:"Identifying likely root cause",status:"active",description:"Analysing device fingerprint…"},{id:"4",label:"Generating recommended action",status:"pending"}],processExpanded:!0,children:"I can help with that. Could you tell me what error message you're seeing?"}),e.jsx(a,{variant:"user",timestamp:"10:42 AM",alert:"Frustrated sentiment detected",children:'It just says "access denied" every single time. Very frustrating.'}),e.jsx(a,{variant:"agent",senderName:"Rachel M.",timestamp:"10:43 AM",avatar:e.jsx(l,{initials:"RM"}),children:"I'm taking over to help you directly. Let me look into this right away."}),e.jsxs(a,{variant:"dark",senderName:"Rachel M.",timestamp:"10:44 AM",avatar:e.jsx(l,{initials:"RM"}),children:["Your temporary access code is ",e.jsx("strong",{children:"7829-XK"}),". Valid for 15 minutes."]}),e.jsx(a,{variant:"user",timestamp:"10:45 AM",children:"That worked! Thank you so much."})]})};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "user",
    children: "How can I reset my password?"
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex flex-col gap-8 max-w-xl pt-10">
      <ConversationMessage variant="user">
        How can I reset my password?
      </ConversationMessage>
      <ConversationMessage variant="ai" process={[{
      id: "1",
      label: "Verifying identity requirements",
      status: "done"
    }, {
      id: "2",
      label: "Checking password policy",
      status: "done"
    }, {
      id: "3",
      label: "Preparing reset flow",
      status: "done"
    }]} processExpanded>
        Go to <strong>Settings → Security → Reset password</strong> and follow the steps.
      </ConversationMessage>
      <ConversationMessage variant="agent">
        Let me pull up your account details now.
      </ConversationMessage>
      <ConversationMessage variant="dark" senderName="Agent Name">
        Your verification code is <strong>482913</strong>. It expires in 10 minutes.
      </ConversationMessage>
    </div>
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,x,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With avatars",
  render: () => <div className="flex flex-col gap-6 max-w-xl pt-10">
      <ConversationMessage variant="user">
        I've been waiting for 20 minutes, this is frustrating.
      </ConversationMessage>
      <ConversationMessage variant="agent" avatar={<Avatar initials="SJ" />} senderName="Sarah J.">
        I sincerely apologize for the wait. Let me prioritize your case right now.
      </ConversationMessage>
      <ConversationMessage variant="ai" avatar={<Avatar initials="AI" color="bg-lyra-bg-active-subtle text-lyra-fg-active-strong" />} senderName="AI Assistant">
        Based on the account history, this customer has contacted us 3 times in the past week.
      </ConversationMessage>
    </div>
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var M,f,C;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Timestamps & date separator",
  render: () => <div className="flex flex-col gap-6 max-w-xl pt-10">
      <ConversationDateStamp label="Yesterday" />
      <ConversationMessage variant="user" timestamp="4:12 PM">
        Can you check my order status?
      </ConversationMessage>
      <ConversationMessage variant="agent" timestamp="4:13 PM" senderName="Marcus T.">
        Of course! Your order #84721 is currently in transit.
      </ConversationMessage>
      <ConversationDateStamp label="Today" />
      <ConversationMessage variant="user" timestamp="9:04 AM">
        It still hasn't arrived. It was supposed to be here yesterday.
      </ConversationMessage>
      <ConversationMessage variant="agent" timestamp="9:06 AM" senderName="Marcus T.">
        I'm escalating this to our logistics team immediately.
      </ConversationMessage>
    </div>
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var w,j,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "With alert helper messages",
  render: () => <div className="flex flex-col gap-8 max-w-xl pt-10">
      <ConversationMessage variant="user" alert="Frustrated sentiment detected" timestamp="2:31 PM">
        This is absolutely ridiculous, I've called 4 times already!
      </ConversationMessage>
      <ConversationMessage variant="user" alert={{
      message: "Possible churn risk detected — consider retention offer",
      icon: <span className="text-sm">⚠️</span>
    }} timestamp="2:32 PM">
        I'm considering switching providers at this point.
      </ConversationMessage>
      <ConversationMessage variant="agent" timestamp="2:33 PM" senderName="Lisa K.">
        I completely understand your frustration. Let me make this right.
      </ConversationMessage>
    </div>
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var A,I,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Full conversation thread",
  render: () => <div className="flex flex-col gap-5 max-w-xl pt-10">
      <ConversationDateStamp label="June 4, 2026" />
      {/* user = customer, no avatar — they're the only one on their side */}
      <ConversationMessage variant="user" timestamp="10:41 AM">
        Hi, I can't seem to access my account.
      </ConversationMessage>
      <ConversationMessage variant="ai" process={[{
      id: "1",
      label: "Reviewing account history",
      status: "done"
    }, {
      id: "2",
      label: "Checking recent login events",
      status: "done"
    }, {
      id: "3",
      label: "Identifying likely root cause",
      status: "active",
      description: "Analysing device fingerprint…"
    }, {
      id: "4",
      label: "Generating recommended action",
      status: "pending"
    }]} processExpanded>
        I can help with that. Could you tell me what error message you're seeing?
      </ConversationMessage>
      <ConversationMessage variant="user" timestamp="10:42 AM" alert="Frustrated sentiment detected">
        It just says "access denied" every single time. Very frustrating.
      </ConversationMessage>
      {/* agent/dark = multi-party chat, avatars distinguish speakers */}
      <ConversationMessage variant="agent" senderName="Rachel M." timestamp="10:43 AM" avatar={<Avatar initials="RM" />}>
        I'm taking over to help you directly. Let me look into this right away.
      </ConversationMessage>
      <ConversationMessage variant="dark" senderName="Rachel M." timestamp="10:44 AM" avatar={<Avatar initials="RM" />}>
        Your temporary access code is <strong>7829-XK</strong>. Valid for 15 minutes.
      </ConversationMessage>
      <ConversationMessage variant="user" timestamp="10:45 AM">
        That worked! Thank you so much.
      </ConversationMessage>
    </div>
}`,...(k=(I=o.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const $=["Default","AllVariants","WithAvatars","WithTimestamps","WithAlerts","FullThread"];export{t as AllVariants,s as Default,o as FullThread,i as WithAlerts,r as WithAvatars,n as WithTimestamps,$ as __namedExportsOrder,U as default};
