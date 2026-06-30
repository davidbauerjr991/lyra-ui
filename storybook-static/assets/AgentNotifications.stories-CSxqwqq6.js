import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CXOcBcs0.js";import{A as n}from"./agent-notifications-cFQMDhm3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./list-item-B2NyYzfW.js";import"./createLucideIcon-DEcfmm_F.js";import"./status-badge-D0LQdY0j.js";import"./index-1evVQkiP.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./draggable-CGvgTH-H.js";import"./panel-right-CgZ2ABSM.js";import"./container-header-Bo-bv7NH.js";import"./x-N8aIqrq2.js";import"./menu-BPKqDbWq.js";import"./chevron-right-DZKRY3zX.js";import"./bell-BjgN3fdD.js";import"./trash-2-yAnBWR5t.js";import"./triangle-alert-Btkn3DL5.js";const K={title:"UI/AgentNotifications",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},g=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"51m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"56m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"1h ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"1h ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"1h ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!1},{id:"7",type:"new-case",title:"New Case",subtitle:"Mia Torres",timestamp:"2h ago",read:!0},{id:"8",type:"escalation",title:"Escalation",subtitle:"James Wilson",timestamp:"2h ago",read:!0}],s={name:"Default",render:()=>{const[f,i]=h.useState(g);return o.jsx("div",{className:"relative w-full h-screen",children:o.jsx("div",{className:"absolute top-4 left-4",children:o.jsx(n,{notifications:f,onMarkAllRead:()=>i(e=>e.map(t=>({...t,read:!0}))),onClearAll:()=>i([]),onClose:()=>alert("Close"),onDismiss:e=>i(t=>t.filter(a=>a.id!==e)),onNotificationClick:e=>i(t=>t.map(a=>a.id===e.id?{...a,read:!0}:a))})})})}},r={name:"Empty state",render:()=>o.jsx(n,{notifications:[],onClose:()=>{}})};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty state",
  render: () => <AgentNotifications notifications={[]} onClose={() => {}} />
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const T=["Default","Empty"];export{s as Default,r as Empty,T as __namedExportsOrder,K as default};
