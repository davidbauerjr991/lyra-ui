import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DhMLlvMY.js";import{A as r}from"./agent-profile--hUidFss.js";import{B as h}from"./button-CRbHmIRe.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-BOmxrDJo.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./activity-CN8fWg6r.js";import"./popover-CZJZ8BOP.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-5uZSWjxx.js";import"./tooltip-DKTByY8R.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./favorite-button-BJq5peE4.js";import"./star-CKl-uXvS.js";import"./badge-Bcxq6Iyh.js";import"./index-1evVQkiP.js";import"./search-input-DbdcjRuV.js";import"./clear-button-Cb_QiePp.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";import"./modal-hXmIVEZK.js";import"./overlay-Cx0x67GM.js";import"./container-D2ud9AWn.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./sun-BCrCqAo4.js";import"./circle-help-DYnzmdO5.js";import"./log-out-POwLzLp_.js";import"./triangle-alert-C66Fwj6V.js";import"./spinner-xIhFAlhc.js";const O=[{id:"sf",name:"Salesforce",initial:"S",latencyMs:42,uptimePct:99.9,status:"healthy"},{id:"adp",name:"ADP Workforce",initial:"A",latencyMs:88,uptimePct:99.7,status:"healthy"},{id:"o365",name:"Outlook 365",initial:"O",latencyMs:31,uptimePct:100,status:"healthy"},{id:"mst",name:"MS Teams",initial:"T",latencyMs:29,uptimePct:100,status:"healthy"},{id:"zd",name:"Zendesk",initial:"Z",latencyMs:340,uptimePct:97.2,status:"warning"},{id:"jira",name:"Jira Cloud",initial:"J",latencyMs:67,uptimePct:99.8,status:"healthy"},{id:"gh",name:"GitHub",initial:"G",latencyMs:55,uptimePct:99.5,status:"healthy"},{id:"sf2",name:"ServiceNow",initial:"S",latencyMs:120,uptimePct:98.1,status:"healthy"}],jt={title:"UI/AgentProfile",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function H(e){const[n,a]=s.useState(0);s.useEffect(()=>{const i=setInterval(()=>a(l=>l+1),1e3);return()=>clearInterval(i)},[e]);const o=String(Math.floor(n/3600)).padStart(2,"0"),g=String(Math.floor(n%3600/60)).padStart(2,"0"),S=String(n%60).padStart(2,"0");return`${o}:${g}:${S}`}const c={name:"Interactive",render:()=>{const[e,n]=s.useState("available"),a=H(!0);return t.jsx("div",{className:"p-8",children:t.jsx(r,{name:"Sarah Johnson",initials:"SJ",status:e,onStatusChange:n,timer:a,connectedApps:O,onReconnect:o=>alert(`Reconnecting ${o}…`),onDarkModeToggle:()=>alert("Dark mode toggled"),onHelpClick:()=>alert("Help"),onLogOut:()=>alert("Log out")})})}},u={name:"Controlled agent leg",render:()=>{const[e,n]=s.useState("available"),[a,o]=s.useState("connected"),[g,S]=s.useState("—");s.useEffect(()=>{if(a!=="connecting")return;const l=setTimeout(()=>o("connected"),1500);return()=>clearTimeout(l)},[a]);const i=l=>o(l==="connect"?"connecting":"disconnected");return t.jsxs("div",{className:"flex flex-col items-start gap-4 p-8",children:[t.jsx(r,{name:"Sarah Johnson",initials:"SJ",status:e,onStatusChange:n,timer:"00:04:22",agentLegStatus:a,onAgentLegToggle:i,onAgentLegStatusChange:S,onLogOut:()=>alert("Log out")}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(h,{variant:"outline",size:"sm",disabled:a!=="connected",onClick:()=>i("disconnect"),children:"Disconnect externally"}),t.jsx(h,{variant:"outline",size:"sm",disabled:a!=="disconnected",onClick:()=>i("connect"),children:"Connect externally"})]}),t.jsxs("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Leg: ",a," · last settled change: ",g]})]})}},m={name:"Hidden agent leg",render:()=>{const[e,n]=s.useState("available");return t.jsx("div",{className:"p-8",children:t.jsx(r,{name:"Sarah Johnson",initials:"SJ",status:e,onStatusChange:n,timer:"00:04:22",hideAgentLeg:!0,onLogOut:()=>alert("Log out")})})}},d={name:"All statuses",render:()=>t.jsx("div",{className:"flex flex-col gap-4 p-8",children:["available","unavailable"].map(e=>t.jsx(r,{name:"Sarah Johnson",initials:"SJ",status:e,timer:"00:04:22",connectedAppsCount:1},e))})},p={name:"With avatar photo",render:()=>{const[e,n]=s.useState("available");return t.jsx("div",{className:"p-8",children:t.jsx(r,{name:"Greg Martinez",initials:"GM",avatarSrc:"https://i.pravatar.cc/150?img=12",status:e,onStatusChange:n,timer:"00:00:11",connectedAppsCount:1,onLogOut:()=>alert("Log out")})})}};var v,f,A;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => {
    const [status, setStatus] = useState<AgentStatus>("available");
    // No more "offline" state to gate on — only Available/Unavailable
    // remain, and the agent is always in one of those, so the timer just
    // runs continuously.
    const timer = useTimer(true);
    return <div className="p-8">
        <AgentProfile name="Sarah Johnson" initials="SJ" status={status} onStatusChange={setStatus} timer={timer} connectedApps={APPS} onReconnect={id => alert(\`Reconnecting \${id}…\`)} onDarkModeToggle={() => alert("Dark mode toggled")} onHelpClick={() => alert("Help")} onLogOut={() => alert("Log out")} />
      </div>;
  }
}`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var y,L,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Controlled agent leg",
  render: () => {
    const [status, setStatus] = useState<AgentStatus>("available");
    const [leg, setLeg] = useState<AgentLegStatus>("connected");
    const [lastSettled, setLastSettled] = useState<string>("—");
    useEffect(() => {
      if (leg !== "connecting") return;
      const id = setTimeout(() => setLeg("connected"), 1500);
      return () => clearTimeout(id);
    }, [leg]);
    const apply = (action: "connect" | "disconnect") => setLeg(action === "connect" ? "connecting" : "disconnected");
    return <div className="flex flex-col items-start gap-4 p-8">
        <AgentProfile name="Sarah Johnson" initials="SJ" status={status} onStatusChange={setStatus} timer="00:04:22" agentLegStatus={leg} onAgentLegToggle={apply} onAgentLegStatusChange={setLastSettled} onLogOut={() => alert("Log out")} />
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled={leg !== "connected"} onClick={() => apply("disconnect")}>
            Disconnect externally
          </Button>
          <Button variant="outline" size="sm" disabled={leg !== "disconnected"} onClick={() => apply("connect")}>
            Connect externally
          </Button>
        </div>
        <span className="lyra-body-sm text-lyra-fg-secondary">
          Leg: {leg} · last settled change: {lastSettled}
        </span>
      </div>;
  }
}`,...(x=(L=u.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var C,b,P;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Hidden agent leg",
  render: () => {
    const [status, setStatus] = useState<AgentStatus>("available");
    return <div className="p-8">
        <AgentProfile name="Sarah Johnson" initials="SJ" status={status} onStatusChange={setStatus} timer="00:04:22" hideAgentLeg onLogOut={() => alert("Log out")} />
      </div>;
  }
}`,...(P=(b=m.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var j,J,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "All statuses",
  render: () => <div className="flex flex-col gap-4 p-8">
      {(["available", "unavailable"] as AgentStatus[]).map(s => <AgentProfile key={s} name="Sarah Johnson" initials="SJ" status={s} timer="00:04:22" connectedAppsCount={1} />)}
    </div>
}`,...(M=(J=d.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var N,k,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "With avatar photo",
  render: () => {
    const [status, setStatus] = useState<AgentStatus>("available");
    return <div className="p-8">
        <AgentProfile name="Greg Martinez" initials="GM" avatarSrc="https://i.pravatar.cc/150?img=12" status={status} onStatusChange={setStatus} timer="00:00:11" connectedAppsCount={1} onLogOut={() => alert("Log out")} />
      </div>;
  }
}`,...(T=(k=p.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const Jt=["Interactive","ControlledAgentLeg","HiddenAgentLeg","AllStatuses","WithAvatar"];export{d as AllStatuses,u as ControlledAgentLeg,m as HiddenAgentLeg,c as Interactive,p as WithAvatar,Jt as __namedExportsOrder,jt as default};
