import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CXOcBcs0.js";import{A as m}from"./agent-notifications-Db5H855H.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-item-CR5qklhf.js";import"./badge-go1ZjKcF.js";import"./index-1evVQkiP.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./draggable-NOBAerju.js";import"./panel-right-CgZ2ABSM.js";import"./createLucideIcon-DEcfmm_F.js";import"./container-header-yODun0G6.js";import"./x-N8aIqrq2.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./bell-BjgN3fdD.js";import"./trash-2-yAnBWR5t.js";import"./ellipsis-chVl1-lO.js";import"./triangle-alert-Btkn3DL5.js";import"./users-CNa7Nyqi.js";import"./message-square-BpbTPZlK.js";import"./user-plus-Dfrp8n7C.js";const X={title:"UI/AgentNotifications",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},g=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"51m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"56m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"1h ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"1h ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"1h ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!1},{id:"7",type:"new-case",title:"New Case",subtitle:"Mia Torres",timestamp:"2h ago",read:!0},{id:"8",type:"escalation",title:"Escalation",subtitle:"James Wilson",timestamp:"2h ago",read:!0}],r={name:"Default",render:()=>{const[f,a]=h.useState(g);return o.jsx("div",{className:"relative w-full h-screen",children:o.jsx("div",{className:"absolute top-4 left-4",children:o.jsx(m,{notifications:f,onMarkAllRead:()=>a(t=>t.map(e=>({...e,read:!0}))),onClearAll:()=>a([]),onClose:()=>alert("Close"),onDismiss:t=>a(e=>e.filter(i=>i.id!==t)),onNotificationClick:t=>a(e=>e.map(i=>i.id===t.id?{...i,read:!0}:i))})})})}},s={name:"Empty state",render:()=>o.jsx(m,{notifications:[],onClose:()=>{}})};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty state",
  render: () => <AgentNotifications notifications={[]} onClose={() => {}} />
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Y=["Default","Empty"];export{r as Default,s as Empty,Y as __namedExportsOrder,X as default};
