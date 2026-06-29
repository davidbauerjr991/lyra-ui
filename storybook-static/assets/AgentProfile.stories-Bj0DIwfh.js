import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CXOcBcs0.js";import{A as c}from"./agent-profile-BwKl609F.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CF9u0XqS.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./Combination-PupZwBmU.js";import"./menu-BPKqDbWq.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./status-badge-D0LQdY0j.js";import"./index-1evVQkiP.js";import"./moon-twi9AqRm.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";const x=[{id:"sf",name:"Salesforce",initial:"S",latencyMs:42,uptimePct:99.9,status:"healthy"},{id:"adp",name:"ADP Workforce",initial:"A",latencyMs:88,uptimePct:99.7,status:"healthy"},{id:"o365",name:"Outlook 365",initial:"O",latencyMs:31,uptimePct:100,status:"healthy"},{id:"mst",name:"MS Teams",initial:"T",latencyMs:29,uptimePct:100,status:"healthy"},{id:"zd",name:"Zendesk",initial:"Z",latencyMs:340,uptimePct:97.2,status:"warning"},{id:"jira",name:"Jira Cloud",initial:"J",latencyMs:67,uptimePct:99.8,status:"healthy"},{id:"gh",name:"GitHub",initial:"G",latencyMs:55,uptimePct:99.5,status:"healthy"},{id:"sf2",name:"ServiceNow",initial:"S",latencyMs:120,uptimePct:98.1,status:"healthy"}],U={title:"UI/AgentProfile",component:c,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function J(t){const[e,s]=i.useState(0);i.useEffect(()=>{if(!t){s(0);return}const P=setInterval(()=>s(M=>M+1),1e3);return()=>clearInterval(P)},[t]);const l=String(Math.floor(e/3600)).padStart(2,"0"),A=String(Math.floor(e%3600/60)).padStart(2,"0"),y=String(e%60).padStart(2,"0");return`${l}:${A}:${y}`}const n={name:"Interactive",render:()=>{const[t,e]=i.useState("offline"),s=J(t!=="offline");return a.jsx("div",{className:"p-8",children:a.jsx(c,{name:"Sarah Johnson",initials:"SJ",status:t,onStatusChange:e,timer:s,connectedApps:x,onReconnect:l=>alert(`Reconnecting ${l}…`),onDarkModeToggle:()=>alert("Dark mode toggled"),onLogOut:()=>alert("Log out")})})}},r={name:"All statuses",render:()=>a.jsx("div",{className:"flex flex-col gap-4 p-8",children:["available","busy","away","offline"].map(t=>a.jsx(c,{name:"Sarah Johnson",initials:"SJ",status:t,timer:"00:04:22",connectedAppsCount:1},t))})},o={name:"With avatar photo",render:()=>{const[t,e]=i.useState("available");return a.jsx("div",{className:"p-8",children:a.jsx(c,{name:"Greg Martinez",initials:"GM",avatarSrc:"https://i.pravatar.cc/150?img=12",status:t,onStatusChange:e,timer:"00:00:11",connectedAppsCount:1,onLogOut:()=>alert("Log out")})})}};var m,u,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => {
    const [status, setStatus] = useState<AgentStatus>("offline");
    const timer = useTimer(status !== "offline");
    return <div className="p-8">
        <AgentProfile name="Sarah Johnson" initials="SJ" status={status} onStatusChange={setStatus} timer={timer} connectedApps={APPS} onReconnect={id => alert(\`Reconnecting \${id}…\`)} onDarkModeToggle={() => alert("Dark mode toggled")} onLogOut={() => alert("Log out")} />
      </div>;
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,S,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All statuses",
  render: () => <div className="flex flex-col gap-4 p-8">
      {(["available", "busy", "away", "offline"] as AgentStatus[]).map(s => <AgentProfile key={s} name="Sarah Johnson" initials="SJ" status={s} timer="00:04:22" connectedAppsCount={1} />)}
    </div>
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With avatar photo",
  render: () => {
    const [status, setStatus] = useState<AgentStatus>("available");
    return <div className="p-8">
        <AgentProfile name="Greg Martinez" initials="GM" avatarSrc="https://i.pravatar.cc/150?img=12" status={status} onStatusChange={setStatus} timer="00:00:11" connectedAppsCount={1} onLogOut={() => alert("Log out")} />
      </div>;
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const q=["Interactive","AllStatuses","WithAvatar"];export{r as AllStatuses,n as Interactive,o as WithAvatar,q as __namedExportsOrder,U as default};
