import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CXOcBcs0.js";import{A as n}from"./agent-notifications-D77PgjwB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./list-item-D5ds9YHd.js";import"./createLucideIcon-DEcfmm_F.js";import"./badge-go1ZjKcF.js";import"./index-1evVQkiP.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./draggable-Dnmku3zT.js";import"./panel-right-CgZ2ABSM.js";import"./container-header-CvNOYSQL.js";import"./x-N8aIqrq2.js";import"./menu-radix-D2E6cDL6.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-right-DZKRY3zX.js";import"./bell-BjgN3fdD.js";import"./trash-2-yAnBWR5t.js";import"./ellipsis-chVl1-lO.js";import"./triangle-alert-Btkn3DL5.js";import"./message-square-BpbTPZlK.js";const H={title:"UI/AgentNotifications",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},g=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"51m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"56m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"1h ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"1h ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"1h ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!1},{id:"7",type:"new-case",title:"New Case",subtitle:"Mia Torres",timestamp:"2h ago",read:!0},{id:"8",type:"escalation",title:"Escalation",subtitle:"James Wilson",timestamp:"2h ago",read:!0}],s={name:"Default",render:()=>{const[f,a]=h.useState(g);return o.jsx("div",{className:"relative w-full h-screen",children:o.jsx("div",{className:"absolute top-4 left-4",children:o.jsx(n,{notifications:f,onMarkAllRead:()=>a(t=>t.map(e=>({...e,read:!0}))),onClearAll:()=>a([]),onClose:()=>alert("Close"),onDismiss:t=>a(e=>e.filter(i=>i.id!==t)),onNotificationClick:t=>a(e=>e.map(i=>i.id===t.id?{...i,read:!0}:i))})})})}},r={name:"Empty state",render:()=>o.jsx(n,{notifications:[],onClose:()=>{}})};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [items, setItems] = useState<AgentNotification[]>(SAMPLE);
    return <div className="relative w-full h-screen">
      <div className="absolute top-4 left-4">
      <AgentNotifications notifications={items} onMarkAllRead={() => setItems(prev => prev.map(i => ({
          ...i,
          read: true
        })))} onClearAll={() => setItems([])} onClose={() => alert("Close")} onDismiss={id => setItems(prev => prev.filter(i => i.id !== id))} onNotificationClick={n => setItems(prev => prev.map(i => i.id === n.id ? {
          ...i,
          read: true
        } : i))} />
      </div>
      </div>;
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty state",
  render: () => <AgentNotifications notifications={[]} onClose={() => {}} />
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Q=["Default","Empty"];export{s as Default,r as Empty,Q as __namedExportsOrder,H as default};
