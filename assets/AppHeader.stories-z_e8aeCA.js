import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CXOcBcs0.js";import{r as ue}from"./index-DWcjTdiE.js";import{R as X,T as V,P as Z,C as K}from"./index-Cfrq8Ckk.js";import{A as i}from"./app-header-CVfCEhUs.js";import{A as Q}from"./app-name-D8AShuYG.js";import{A as q,C as Y}from"./cxone-logo-CS0SsXdD.js";import{A as fe}from"./ai-panel-Dz6wFVHg.js";import{A as n}from"./actions-BW8gVFRB.js";import{T as ge}from"./tooltip-DsDWII6n.js";import{P as b,d as P}from"./profile-menu-gvLUDIDs.js";import{A as he}from"./agent-profile-CeF7_3Ro.js";import{N as Ae,A as xe}from"./notifications-bell-C4j3XvF_.js";import{D as S}from"./dashboard-icon-B7LvtM-U.js";import{d as ee}from"./app-icon-BTTpRY0S.js";import{S as Ne}from"./search-aUstRSOi.js";import{S as be}from"./settings-Ddbozet5.js";import{C as v}from"./circle-help-Bj2MpUE2.js";import{B as I}from"./bell-BjgN3fdD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DujEZ9g2.js";import"./index-DNfP5j1O.js";import"./Combination-BD090wx7.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./container-header-Bfsb3MJm.js";import"./x-N8aIqrq2.js";import"./ai-input-Bmdm9_dH.js";import"./plus-B2SVJpWV.js";import"./arrow-up-C-teBDU4.js";import"./draggable-CBELq2q1.js";import"./panel-right-CgZ2ABSM.js";import"./house-7dsFQekL.js";import"./index-1evVQkiP.js";import"./menu-C3iBPI2b.js";import"./chevron-right-DZKRY3zX.js";import"./sun-BZYaDLgK.js";import"./log-out-DlmIeUuQ.js";import"./popover-B7lHmnGD.js";import"./favorite-button-DNbJO1Tv.js";import"./star-BBKukw_S.js";import"./status-badge-D0LQdY0j.js";import"./input-BgypaUyl.js";import"./error-icon-DM5nl_7y.js";import"./label-DRpt0Xe7.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./agent-notifications-C-4All98.js";import"./list-item-D5ds9YHd.js";import"./trash-2-yAnBWR5t.js";import"./triangle-alert-Btkn3DL5.js";import"./message-square-BpbTPZlK.js";const St={title:"UI/AppHeader",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},te=[{items:[{label:"Admin"},{label:"Supervisor"},{label:"Agent",active:!0},{label:"Conginity AI"}]},{items:[{label:"Workforce Management"},{label:"Quality Management"},{label:"Interaction Hub"},{label:"My Zone"}]},{items:[{label:"Dashboard"},{label:"Analytics"}]}];function j({name:A,alt:o}){const[d,x]=a.useState(!1);return e.jsxs(X,{open:d,onOpenChange:x,children:[e.jsx(V,{asChild:!0,children:e.jsx(Q,{icon:e.jsx("img",{src:ee,alt:o,className:"h-6 w-6"}),name:A,"aria-expanded":d})}),e.jsx(Z,{children:e.jsx(K,{side:"bottom",align:"start",sideOffset:6,onOpenAutoFocus:r=>r.preventDefault(),className:"z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100",children:e.jsx(q,{groups:te,footer:e.jsx(Y,{})})})})]})}const m={render:()=>e.jsx(i,{appName:e.jsx(j,{name:"Agent Workspace Premium",alt:"Desk"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Help",children:e.jsx(v,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(S,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:4,children:e.jsx(I,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(b,{initials:"JS",avatarColor:"#5d6a79",groups:P,className:"ml-1"})]})})},Pe=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"13m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"18m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"24m ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"37m ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"51m ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!0},{id:"7",type:"escalation",title:"Escalation",subtitle:"Sarah Johnson",timestamp:"1h ago",read:!0},{id:"8",type:"new-case",title:"New Case",subtitle:"James Carter",timestamp:"2h ago",read:!0}],u={name:"Agent Next Gen Header",render:()=>{const[A,o]=a.useState(Pe),[d,x]=a.useState("available"),[r,y]=a.useState(0),[C,ae]=a.useState(!1),[l,B]=a.useState(!1),[p,ne]=a.useState({top:0,left:0}),[se,O]=a.useState(700),N=a.useRef(null),k=420,oe=860,ie=8,w=t=>Math.min(window.innerHeight-t-ie,oe),re=()=>{if(N.current){const t=N.current.getBoundingClientRect(),s=t.bottom+6;ne({top:s,left:t.right-k}),O(w(s))}B(t=>!t)};a.useEffect(()=>{if(!l)return;const t=()=>O(w(p.top));return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[l,p.top]),a.useEffect(()=>{const t=setInterval(()=>y(s=>s+1),1e3);return()=>clearInterval(t)},[]);const le=Math.floor(r/3600),ce=Math.floor(r%3600/60),de=r%60,pe=`${String(le).padStart(2,"0")}:${String(ce).padStart(2,"0")}:${String(de).padStart(2,"0")}`,me=t=>{x(t),y(0)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{appName:e.jsxs(X,{open:C,onOpenChange:ae,children:[e.jsx(V,{asChild:!0,children:e.jsx(Q,{icon:e.jsx("img",{src:ee,alt:"Agent Next Gen",className:"h-6 w-6"}),name:"Agent Next Gen","aria-expanded":C})}),e.jsx(Z,{children:e.jsx(K,{side:"bottom",align:"start",sideOffset:6,onOpenAutoFocus:t=>t.preventDefault(),className:"z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100",children:e.jsx(q,{groups:te,footer:e.jsx(Y,{})})})})]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(Ae,{notifications:A,onMarkAllRead:()=>o(t=>t.map(s=>({...s,read:!0}))),onClearAll:()=>o([]),onDismiss:t=>o(s=>s.filter(c=>c.id!==t)),onNotificationClick:t=>o(s=>s.map(c=>c.id===t.id?{...c,read:!0}:c))}),e.jsx(ge,{content:"Ask AI",placement:"bottom",asLabel:!0,children:e.jsx("button",{ref:N,type:"button","aria-label":"Ask AI","aria-expanded":l,onClick:re,className:`relative flex h-10 w-10 items-center justify-center rounded-lyra-lg text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus ${l?"bg-lyra-state-hover":""}`,children:e.jsx(xe,{})})}),e.jsx(he,{name:"John Smith",initials:"JS",status:d,onStatusChange:me,timer:pe,className:"ml-1"})]})}),l&&ue.createPortal(e.jsx("div",{style:{position:"fixed",top:p.top,left:p.left,zIndex:9999},className:"animate-in fade-in-0 slide-in-from-top-2 duration-150",children:e.jsx(fe,{draggable:!0,draggableVariant:"float",defaultDraggableWidth:k,defaultDraggableHeight:se,userName:"John",suggestions:[{id:"1",label:"Summarise this contact's history"},{id:"2",label:"Suggest a response to the customer"},{id:"3",label:"What changed since yesterday?"}],onClose:()=>B(!1)})}),document.body)]})}},f={name:"AppName Only",render:()=>e.jsx(i,{appName:e.jsx(j,{name:"Agent Workspace Premium",alt:"Desk"})})},g={name:"Actions Only",render:()=>e.jsx(i,{appName:e.jsx("div",{}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Search",children:e.jsx(Ne,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Settings",children:e.jsx(be,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Help",children:e.jsx(v,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(S,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:12,children:e.jsx(I,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(b,{initials:"DB",avatarColor:"#5d6a79",groups:P,className:"ml-1"})]})})},h={name:"With Background",render:()=>e.jsx(i,{className:"bg-lyra-bg-surface-base border-b border-lyra-border-subtle",appName:e.jsx(j,{name:"Agent Workspace Premium",alt:"Desk"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Help",children:e.jsx(v,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(S,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:4,children:e.jsx(I,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(b,{initials:"JS",avatarColor:"#5d6a79",groups:P,className:"ml-1"})]})})};var H,D,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <AppHeader appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />} actions={<>
          <ActionIconButton size="xl" title="Help">
            <CircleHelp className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Dashboards">
            <DashboardIcon className="text-lyra-fg-default" />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Notifications" badge={4}>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ProfileMenu initials="JS" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} className="ml-1" />
        </>} />
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var W,z,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Agent Next Gen Header",
  render: () => {
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
    const [agentStatus, setAgentStatus] = useState<AgentStatus>("available");
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [appMenuOpen, setAppMenuOpen] = useState(false);
    const [aiPanelOpen, setAiPanelOpen] = useState(false);
    const [aiPanelPos, setAiPanelPos] = useState({
      top: 0,
      left: 0
    });
    const [aiPanelHeight, setAiPanelHeight] = useState(700);
    const aiBtnRef = useRef<HTMLButtonElement>(null);
    const AI_PANEL_WIDTH = 420;
    const MAX_PANEL_HEIGHT = 860;
    const BOTTOM_PADDING = 8;
    const computeAiHeight = (top: number) => Math.min(window.innerHeight - top - BOTTOM_PADDING, MAX_PANEL_HEIGHT);
    const handleAiButtonClick = () => {
      if (aiBtnRef.current) {
        const rect = aiBtnRef.current.getBoundingClientRect();
        const top = rect.bottom + 6;
        setAiPanelPos({
          top,
          left: rect.right - AI_PANEL_WIDTH
        });
        setAiPanelHeight(computeAiHeight(top));
      }
      setAiPanelOpen(v => !v);
    };

    // Update AI panel height on viewport resize while open
    useEffect(() => {
      if (!aiPanelOpen) return;
      const onResize = () => setAiPanelHeight(computeAiHeight(aiPanelPos.top));
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, [aiPanelOpen, aiPanelPos.top]);
    useEffect(() => {
      const interval = setInterval(() => setElapsedSeconds(s => s + 1), 1000);
      return () => clearInterval(interval);
    }, []);
    const h = Math.floor(elapsedSeconds / 3600);
    const m = Math.floor(elapsedSeconds % 3600 / 60);
    const s = elapsedSeconds % 60;
    const formattedTimer = \`\${String(h).padStart(2, "0")}:\${String(m).padStart(2, "0")}:\${String(s).padStart(2, "0")}\`;
    const handleStatusChange = (status: AgentStatus) => {
      setAgentStatus(status);
      setElapsedSeconds(0);
    };
    return <>
      <AppHeader appName={<PopoverPrimitive.Root open={appMenuOpen} onOpenChange={setAppMenuOpen}>
            <PopoverPrimitive.Trigger asChild>
              <AppName icon={<img src={appIcon} alt="Agent Next Gen" className="h-6 w-6" />} name="Agent Next Gen" aria-expanded={appMenuOpen} />
            </PopoverPrimitive.Trigger>
            <PopoverPrimitive.Portal>
              <PopoverPrimitive.Content side="bottom" align="start" sideOffset={6} onOpenAutoFocus={e => e.preventDefault()} className="z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100">
                <AppMenu groups={APP_MENU_GROUPS} footer={<CXoneLogo />} />
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
          </PopoverPrimitive.Root>} actions={<>
            <NotificationsBell notifications={notifications} onMarkAllRead={() => setNotifications(prev => prev.map(n => ({
          ...n,
          read: true
        })))} onClearAll={() => setNotifications([])} onDismiss={id => setNotifications(prev => prev.filter(n => n.id !== id))} onNotificationClick={n => setNotifications(prev => prev.map(i => i.id === n.id ? {
          ...i,
          read: true
        } : i))} />
            <Tooltip content="Ask AI" placement="bottom" asLabel>
              <button ref={aiBtnRef} type="button" aria-label="Ask AI" aria-expanded={aiPanelOpen} onClick={handleAiButtonClick} className={\`relative flex h-10 w-10 items-center justify-center rounded-lyra-lg text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus \${aiPanelOpen ? "bg-lyra-state-hover" : ""}\`}>
                <AiSparkleIcon />
              </button>
            </Tooltip>
            <AgentProfile name="John Smith" initials="JS" status={agentStatus} onStatusChange={handleStatusChange} timer={formattedTimer} className="ml-1" />
          </>} />
      {aiPanelOpen && ReactDOM.createPortal(<div style={{
        position: "fixed",
        top: aiPanelPos.top,
        left: aiPanelPos.left,
        zIndex: 9999
      }} className="animate-in fade-in-0 slide-in-from-top-2 duration-150">
          <AiPanel draggable draggableVariant="float" defaultDraggableWidth={AI_PANEL_WIDTH} defaultDraggableHeight={aiPanelHeight} userName="John" suggestions={[{
          id: "1",
          label: "Summarise this contact's history"
        }, {
          id: "2",
          label: "Suggest a response to the customer"
        }, {
          id: "3",
          label: "What changed since yesterday?"
        }]} onClose={() => setAiPanelOpen(false)} />
        </div>, document.body)}
      </>;
  }
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var T,_,R;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "AppName Only",
  render: () => <AppHeader appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />} />
}`,...(R=(_=f.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var G,L,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Actions Only",
  render: () => <AppHeader appName={<div />} actions={<>
          <ActionIconButton size="xl" title="Search">
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Settings">
            <Settings className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Help">
            <CircleHelp className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Dashboards">
            <DashboardIcon className="text-lyra-fg-default" />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Notifications" badge={12}>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ProfileMenu initials="DB" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} className="ml-1" />
        </>} />
}`,...(J=(L=g.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var F,$,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With Background",
  render: () => <AppHeader className="bg-lyra-bg-surface-base border-b border-lyra-border-subtle" appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />} actions={<>
          <ActionIconButton size="xl" title="Help">
            <CircleHelp className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Dashboards">
            <DashboardIcon className="text-lyra-fg-default" />
          </ActionIconButton>
          <ActionIconButton size="xl" title="Notifications" badge={4}>
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </ActionIconButton>
          <ProfileMenu initials="JS" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} className="ml-1" />
        </>} />
}`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const vt=["Default","AgentNextGen","AppNameOnly","ActionsOnly","WithBackground"];export{g as ActionsOnly,u as AgentNextGen,f as AppNameOnly,m as Default,h as WithBackground,vt as __namedExportsOrder,St as default};
