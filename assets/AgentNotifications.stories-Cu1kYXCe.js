import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{A as m}from"./agent-notifications-DGuyBBNV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-item-4wA6Phz8.js";import"./badge-CSIGLv9X.js";import"./index-1evVQkiP.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./draggable-FYHnTOKY.js";import"./panel-right-D5VBrIHO.js";import"./createLucideIcon-aII_sYFw.js";import"./container-header-D2yZ6g4C.js";import"./x-CzxgOx-T.js";import"./menu-radix-C_ibCbQi.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-BuRg0FgW.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./bell-16x-NcfM.js";import"./trash-2-DTLo779S.js";import"./ellipsis-DX1Uroy1.js";import"./triangle-alert-C66Fwj6V.js";import"./users-jAzTZfU5.js";import"./message-square-BL8DSnhx.js";import"./user-plus-CaUNCbPY.js";const tt={title:"UI/AgentNotifications",component:m,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},g=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"51m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"56m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"1h ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"1h ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"1h ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!1},{id:"7",type:"new-case",title:"New Case",subtitle:"Mia Torres",timestamp:"2h ago",read:!0},{id:"8",type:"escalation",title:"Escalation",subtitle:"James Wilson",timestamp:"2h ago",read:!0}],r={name:"Default",render:()=>{const[f,a]=h.useState(g);return s.jsx("div",{className:"relative w-full h-screen",children:s.jsx("div",{className:"absolute top-4 left-4",children:s.jsx(m,{notifications:f,onMarkAllRead:()=>a(t=>t.map(e=>({...e,read:!0}))),onClearAll:()=>a([]),onClose:()=>alert("Close"),onDismiss:t=>a(e=>e.filter(i=>i.id!==t)),onNotificationClick:t=>a(e=>e.map(i=>i.id===t.id?{...i,read:!0}:i))})})})}},o={name:"Empty state",render:()=>s.jsx(m,{notifications:[],onClose:()=>{}})};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Empty state",
  render: () => <AgentNotifications notifications={[]} onClose={() => {}} />
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const et=["Default","Empty"];export{r as Default,o as Empty,et as __namedExportsOrder,tt as default};
