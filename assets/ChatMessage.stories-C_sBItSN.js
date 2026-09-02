import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-CXOcBcs0.js";import{C as u}from"./chat-message-CnIgCPA_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./actions-7Lttvy0h.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./button-C72EbL54.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-BsM2Tnvd.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./tag-Lo5TNvOI.js";import"./x-N8aIqrq2.js";import"./tag-picker-CTaEi2u6.js";import"./popover-CcjbzLVC.js";import"./index-BCx7cCMR.js";import"./index-DGPY9VoV.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header--vgxnvXX.js";import"./checkbox-ExbItJLA.js";import"./index-CoT6TaLL.js";import"./label-DTtDlf5k.js";import"./circle-help-Bj2MpUE2.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";import"./copy-BRsdvqrt.js";const v=[{label:"Billing",variant:"warning"},{label:"Technical",variant:"info"},{label:"Escalated",variant:"critical"},{label:"Follow-Up",variant:"purple"},{label:"Resolved",variant:"success"}],ha={title:"UI/ChatMessage",component:u,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["agent","customer"]},narrow:{control:"boolean"}}},m={render:()=>{const[r,n]=s.useState([{id:"t1",label:"Billing",variant:"warning"}]),[o,p]=s.useState(!1);return i.jsx("div",{className:"w-[420px]",children:i.jsx(u,{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:51 AM",text:"Thank you for contacting us. How can I assist you today?",onCopy:a=>{var t;return(t=navigator.clipboard)==null?void 0:t.writeText(a)},tagOptions:v,tags:r,tagPickerOpen:o,onTagPickerOpenChange:p,onAddTag:a=>n(t=>[...t,{id:`t${t.length+2}`,label:a.label,variant:a.variant}]),onRemoveTag:a=>n(t=>t.filter(e=>e.id!==a)),onClearTags:()=>n([])})})}},c={render:()=>{const[r,n]=s.useState([]),[o,p]=s.useState(!1);return i.jsx("div",{className:"w-[420px]",children:i.jsx(u,{variant:"customer",name:"Sofia Martinez",initials:"SM",timestamp:"9:52 AM",text:"Hi, I'm having trouble accessing my account. Can you help?",onCopy:a=>{var t;return(t=navigator.clipboard)==null?void 0:t.writeText(a)},tagOptions:v,tags:r,tagPickerOpen:o,onTagPickerOpenChange:p,onAddTag:a=>n(t=>[...t,{id:`t${t.length+1}`,label:a.label,variant:a.variant}]),onRemoveTag:a=>n(t=>t.filter(e=>e.id!==a)),onClearTags:()=>n([])})})}},g={args:{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:51 AM",text:"Thank you for contacting us. How can I assist you today?"},decorators:[r=>i.jsx("div",{className:"w-[320px]",children:i.jsx(r,{})})]},l={name:"Narrow — Forced via Prop",args:{variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:51 AM",text:"Thank you for contacting us. How can I assist you today?",narrow:!0}},J=[{id:"m1",variant:"customer",name:"Sofia Martinez",initials:"SM",timestamp:"9:48 AM",text:"Hi, I'm having trouble accessing my account. Can you help?"},{id:"m2",variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:49 AM",text:"Thank you for contacting us. How can I assist you today?"},{id:"m3",variant:"customer",name:"Sofia Martinez",initials:"SM",timestamp:"9:50 AM",text:"It says my password is incorrect, but I'm sure I'm typing it right."},{id:"m4",variant:"agent",name:"John Smith",initials:"JS",timestamp:"9:51 AM",text:"No problem — I'll send a password reset link to your email on file now."}],d={render:()=>{const[r,n]=s.useState({}),[o,p]=s.useState(null);return i.jsx("div",{className:"flex w-[520px] flex-col gap-3",children:J.map(a=>i.jsx(u,{variant:a.variant,name:a.name,initials:a.initials,timestamp:a.timestamp,text:a.text,onCopy:t=>{var e;return(e=navigator.clipboard)==null?void 0:e.writeText(t)},tagOptions:v,tags:r[a.id]??[],tagPickerOpen:o===a.id,onTagPickerOpenChange:t=>p(t?a.id:null),onAddTag:t=>n(e=>({...e,[a.id]:[...e[a.id]??[],{id:`${a.id}-${t.label}`,label:t.label,variant:t.variant}]})),onRemoveTag:t=>n(e=>({...e,[a.id]:(e[a.id]??[]).filter(N=>N.id!==t)})),onClearTags:()=>n(t=>({...t,[a.id]:[]}))},a.id))})}};var T,S,h;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<ChatMessageTag[]>([{
      id: "t1",
      label: "Billing",
      variant: "warning"
    }]);
    const [pickerOpen, setPickerOpen] = useState(false);
    return <div className="w-[420px]">
        <ChatMessage variant="agent" name="John Smith" initials="JS" timestamp="9:51 AM" text="Thank you for contacting us. How can I assist you today?" onCopy={text => navigator.clipboard?.writeText(text)} tagOptions={DEMO_TAG_OPTIONS} tags={tags} tagPickerOpen={pickerOpen} onTagPickerOpenChange={setPickerOpen} onAddTag={option => setTags(prev => [...prev, {
        id: \`t\${prev.length + 2}\`,
        label: option.label,
        variant: option.variant
      }])} onRemoveTag={id => setTags(prev => prev.filter(t => t.id !== id))} onClearTags={() => setTags([])} />
      </div>;
  }
}`,...(h=(S=m.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,O,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<ChatMessageTag[]>([]);
    const [pickerOpen, setPickerOpen] = useState(false);
    return <div className="w-[420px]">
        <ChatMessage variant="customer" name="Sofia Martinez" initials="SM" timestamp="9:52 AM" text="Hi, I'm having trouble accessing my account. Can you help?" onCopy={text => navigator.clipboard?.writeText(text)} tagOptions={DEMO_TAG_OPTIONS} tags={tags} tagPickerOpen={pickerOpen} onTagPickerOpenChange={setPickerOpen} onAddTag={option => setTags(prev => [...prev, {
        id: \`t\${prev.length + 1}\`,
        label: option.label,
        variant: option.variant
      }])} onRemoveTag={id => setTags(prev => prev.filter(t => t.id !== id))} onClearTags={() => setTags([])} />
      </div>;
  }
}`,...(y=(O=c.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var M,k,w;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "agent",
    name: "John Smith",
    initials: "JS",
    timestamp: "9:51 AM",
    text: "Thank you for contacting us. How can I assist you today?"
  },
  decorators: [Story => <div className="w-[320px]"><Story /></div>]
}`,...(w=(k=g.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,I,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Narrow — Forced via Prop",
  args: {
    variant: "agent",
    name: "John Smith",
    initials: "JS",
    timestamp: "9:51 AM",
    text: "Thank you for contacting us. How can I assist you today?",
    narrow: true
  }
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var f,P,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [tagsByMessageId, setTagsByMessageId] = useState<Record<string, ChatMessageTag[]>>({});
    const [tagPickerOpenId, setTagPickerOpenId] = useState<string | null>(null);
    return <div className="flex w-[520px] flex-col gap-3">
        {CONVERSATION_MESSAGES.map(msg => <ChatMessage key={msg.id} variant={msg.variant} name={msg.name} initials={msg.initials} timestamp={msg.timestamp} text={msg.text} onCopy={text => navigator.clipboard?.writeText(text)} tagOptions={DEMO_TAG_OPTIONS} tags={tagsByMessageId[msg.id] ?? []} tagPickerOpen={tagPickerOpenId === msg.id} onTagPickerOpenChange={open => setTagPickerOpenId(open ? msg.id : null)} onAddTag={option => setTagsByMessageId(prev => ({
        ...prev,
        [msg.id]: [...(prev[msg.id] ?? []), {
          id: \`\${msg.id}-\${option.label}\`,
          label: option.label,
          variant: option.variant
        }]
      }))} onRemoveTag={id => setTagsByMessageId(prev => ({
        ...prev,
        [msg.id]: (prev[msg.id] ?? []).filter(t => t.id !== id)
      }))} onClearTags={() => setTagsByMessageId(prev => ({
        ...prev,
        [msg.id]: []
      }))} />)}
      </div>;
  }
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const xa=["Agent","Customer","Narrow","NarrowForced","Conversation"];export{m as Agent,d as Conversation,c as Customer,g as Narrow,l as NarrowForced,xa as __namedExportsOrder,ha as default};
