import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-CXOcBcs0.js";import{A as n}from"./ai-panel-B-jKoF20.js";import{D as j,C as s}from"./conversation-message-CdlAesFu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-CvNOYSQL.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./ai-input-i2EsY0WY.js";import"./index-DhUdNGNr.js";import"./index-MFm5DvZf.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./plus-B2SVJpWV.js";import"./arrow-up-C-teBDU4.js";import"./draggable-Dnmku3zT.js";import"./panel-right-CgZ2ABSM.js";import"./house-7dsFQekL.js";import"./ai-process-BiyvBKV2.js";import"./icon-DhDr6fDF.js";import"./index-1evVQkiP.js";import"./chevron-down-BRCsRsv-.js";import"./clock-xCVatdV-.js";import"./loader-X1Xxmygt.js";import"./check-DrRFj5bn.js";import"./copy-BRsdvqrt.js";import"./triangle-alert-Btkn3DL5.js";const ie={title:"UI/AiPanel",component:n,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},b=[{id:"1",label:"Create an AI Agent"},{id:"2",label:"See what has changed since yesterday"},{id:"3",label:"How can I manually configure AI Agents?"}],a={name:"Welcome (empty state)",render:()=>e.jsx("div",{style:{height:700,display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{userName:"John",suggestions:b,historyContent:e.jsx(l,{}),onSuggestion:t=>alert(`Selected: ${t.label}`),onClose:()=>alert("Close")})})},o={name:"Active conversation",render:()=>{const[t,d]=S.useState("");return e.jsx("div",{style:{width:380,height:700},children:e.jsxs(n,{userName:"John",inputProps:{value:t,onChange:d,onSubmit:x=>{d(""),alert(`Sent: ${x}`)}},children:[e.jsx(j,{label:"Today"}),e.jsx(s,{variant:"user",timestamp:"9:31 AM",children:"How do I create an AI Agent?"}),e.jsxs(s,{variant:"ai",process:[{id:"1",label:"Searching documentation",status:"done"},{id:"2",label:"Reviewing agent configuration",status:"done"},{id:"3",label:"Composing response",status:"done"}],children:["To create an AI Agent, go to ",e.jsx("strong",{children:"Admin → AI Agents → New Agent"}),". Define the agent's name, select a model, and configure the skills and routing rules. Once saved, it will be available for assignment."]}),e.jsx(s,{variant:"user",timestamp:"9:33 AM",children:"What models are supported?"}),e.jsx(s,{variant:"ai",children:"Currently supported models include GPT-4o, Claude 3.5, and Gemini 1.5 Pro. You can select the model per agent in the configuration panel."})]})})}},I=[{id:"h1",title:"Create an AI Agent",date:"4:59 pm",preview:"To create an AI Agent, go to Admin → AI Agents…"},{id:"h2",title:"Configure routing rules",date:"Tue",preview:"Routing rules determine how contacts are distributed…"},{id:"h3",title:"What changed since yesterday?",date:"Tue",preview:"There were 3 configuration changes and 1 new agent…"},{id:"h4",title:"How to set up skills-based routing",date:"Tue",preview:"Skills-based routing matches contacts to agents…"},{id:"h5",title:"Agent availability reporting",date:"Mon",preview:"To view availability reports, navigate to Analytics…"},{id:"h6",title:"Escalation policy configuration",date:"Fri",preview:"Escalation policies define when and how contacts…"},{id:"h7",title:"AI Agent sentiment thresholds",date:"May 20",preview:"You can adjust sentiment detection thresholds in…"},{id:"h8",title:"Workforce management overview",date:"May 6",preview:"Workforce management helps you forecast and schedule…"},{id:"h9",title:"Setting up outbound campaigns",date:"May 6",preview:"Outbound campaigns allow proactive customer outreach…"},{id:"h10",title:"Contact flow design best practices",date:"Apr 3",preview:"When designing contact flows, keep routing logic simple…"}],l=()=>e.jsx(e.Fragment,{children:I.map(t=>e.jsxs("button",{type:"button",className:"text-left w-full px-3 py-2.5 rounded-lyra-md hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[e.jsx("p",{className:"lyra-body-md text-lyra-fg-default truncate",children:t.title}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary shrink-0",children:t.date})]}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary truncate",children:t.preview})]},t.id))}),i={name:"History",render:()=>e.jsx("div",{style:{width:380,height:700},children:e.jsx(n,{defaultView:"history",historyContent:e.jsx(l,{}),onClose:()=>alert("Close")})})},r={name:"With history toggle",render:()=>e.jsx("div",{style:{width:380,height:700},children:e.jsx(n,{userName:"John",suggestions:b,historyContent:e.jsx(l,{}),onClose:()=>alert("Close")})})};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Welcome (empty state)",
  render: () => <div style={{
    height: 700,
    display: "flex",
    justifyContent: "flex-end"
  }}>
      <AiPanel userName="John" suggestions={SUGGESTIONS} historyContent={<HistoryList />} onSuggestion={s => alert(\`Selected: \${s.label}\`)} onClose={() => alert("Close")} />
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Active conversation",
  render: () => {
    const [value, setValue] = useState("");
    return <div style={{
      width: 380,
      height: 700
    }}>
        <AiPanel userName="John" inputProps={{
        value,
        onChange: setValue,
        onSubmit: v => {
          setValue("");
          alert(\`Sent: \${v}\`);
        }
      }}>
          <ConversationDateStamp label="Today" />
          <ConversationMessage variant="user" timestamp="9:31 AM">
            How do I create an AI Agent?
          </ConversationMessage>
          <ConversationMessage variant="ai" process={[{
          id: "1",
          label: "Searching documentation",
          status: "done"
        }, {
          id: "2",
          label: "Reviewing agent configuration",
          status: "done"
        }, {
          id: "3",
          label: "Composing response",
          status: "done"
        }]}>
            To create an AI Agent, go to <strong>Admin → AI Agents → New Agent</strong>. Define the agent's name, select a model, and configure the skills and routing rules. Once saved, it will be available for assignment.
          </ConversationMessage>
          <ConversationMessage variant="user" timestamp="9:33 AM">
            What models are supported?
          </ConversationMessage>
          <ConversationMessage variant="ai">
            Currently supported models include GPT-4o, Claude 3.5, and Gemini 1.5 Pro. You can select the model per agent in the configuration panel.
          </ConversationMessage>
        </AiPanel>
      </div>;
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,y,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "History",
  render: () => <div style={{
    width: 380,
    height: 700
  }}>
      <AiPanel defaultView="history" historyContent={<HistoryList />} onClose={() => alert("Close")} />
    </div>
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var A,C,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "With history toggle",
  render: () => <div style={{
    width: 380,
    height: 700
  }}>
      <AiPanel userName="John" suggestions={SUGGESTIONS} historyContent={<HistoryList />} onClose={() => alert("Close")} />
    </div>
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const re=["Welcome","WithConversation","History","WithHistory"];export{i as History,a as Welcome,o as WithConversation,r as WithHistory,re as __namedExportsOrder,ie as default};
