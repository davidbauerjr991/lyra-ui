import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-CXOcBcs0.js";import{r as le}from"./index-DWcjTdiE.js";import{A as i}from"./app-header-CVfCEhUs.js";import{A as F}from"./app-name-menu-CsEhAjZY.js";import{A as ce}from"./ai-panel-BesbVF7k.js";import{C as U}from"./cxone-logo-CS0SsXdD.js";import{A as n}from"./actions-7Lttvy0h.js";import{P as N,d as x}from"./profile-menu-BDOagPkk.js";import{A as me}from"./agent-profile-B7fu_Kd3.js";import{N as pe}from"./notifications-bell-MS9xD8h-.js";import{D as S}from"./dashboard-icon-B7LvtM-U.js";import{A as de}from"./ai-sparkle-icon-BRpkHLs1.js";import{d as $}from"./app-icon-BTTpRY0S.js";import{S as ue}from"./search-aUstRSOi.js";import{S as he}from"./settings-Ddbozet5.js";import{C as b}from"./circle-help-Bj2MpUE2.js";import{B as P}from"./bell-BjgN3fdD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./index-BCx7cCMR.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DGPY9VoV.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./app-name-DzjI6G9T.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./container-header--vgxnvXX.js";import"./tooltip-Dp368zAN.js";import"./x-N8aIqrq2.js";import"./ai-input-BqlbXFuW.js";import"./clear-button-Bldem66W.js";import"./plus-B2SVJpWV.js";import"./paperclip-B8lN3ozv.js";import"./arrow-up-C-teBDU4.js";import"./draggable-BO6uxFda.js";import"./panel-right-CgZ2ABSM.js";import"./house-7dsFQekL.js";import"./history-DRSSFIcO.js";import"./button-C72EbL54.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-BsM2Tnvd.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./sun-BZYaDLgK.js";import"./log-out-DlmIeUuQ.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./activity-8sy2ztgG.js";import"./popover-CcjbzLVC.js";import"./favorite-button-N2jDD4ol.js";import"./star-BBKukw_S.js";import"./search-input-DYs2wuFz.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./agent-notifications-Dua1hI69.js";import"./trash-2-yAnBWR5t.js";import"./ellipsis-chVl1-lO.js";import"./triangle-alert-Btkn3DL5.js";import"./users-CNa7Nyqi.js";import"./message-square-BpbTPZlK.js";import"./user-plus-Dfrp8n7C.js";const Ot={title:"UI/AppHeader",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},X=[{items:[{label:"Admin"},{label:"Supervisor"},{label:"Agent",active:!0},{label:"Conginity AI"}]},{items:[{label:"Workforce Management"},{label:"Quality Management"},{label:"Interaction Hub"},{label:"My Zone"}]},{items:[{label:"Dashboard"},{label:"Analytics"}]}];function I({name:g,alt:o}){return e.jsx(F,{icon:e.jsx("img",{src:$,alt:o,className:"h-6 w-6"}),name:g,groups:X,menuFooter:e.jsx(U,{})})}const m={render:()=>e.jsx(i,{appName:e.jsx(I,{name:"Agent Workspace Premium",alt:"Desk"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Help",children:e.jsx(b,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(S,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:4,children:e.jsx(P,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(N,{initials:"JS",avatarColor:"#5d6a79",groups:x,showThemeToggle:!0,className:"ml-1"})]})})},ge=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"13m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"18m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"24m ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"37m ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"51m ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!0},{id:"7",type:"escalation",title:"Escalation",subtitle:"Sarah Johnson",timestamp:"1h ago",read:!0},{id:"8",type:"new-case",title:"New Case",subtitle:"James Carter",timestamp:"2h ago",read:!0}],p={name:"Agent Next Gen Header",render:()=>{const[g,o]=s.useState(ge),[V,Z]=s.useState("available"),[A,j]=s.useState(0),[K,Q]=s.useState(!1),[r,B]=s.useState(!1),[c,q]=s.useState({top:0,left:0}),[Y,w]=s.useState(700),f=s.useRef(null),k=420,ee=860,te=8,H=t=>Math.min(window.innerHeight-t-te,ee),ne=()=>{if(f.current){const t=f.current.getBoundingClientRect(),a=t.bottom+6;q({top:a,left:t.right-k}),w(H(a))}B(t=>!t)};s.useEffect(()=>{if(!r)return;const t=()=>w(H(c.top));return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[r,c.top]),s.useEffect(()=>{const t=setInterval(()=>j(a=>a+1),1e3);return()=>clearInterval(t)},[]);const ae=Math.floor(A/3600),se=Math.floor(A%3600/60),oe=A%60,ie=`${String(ae).padStart(2,"0")}:${String(se).padStart(2,"0")}:${String(oe).padStart(2,"0")}`,re=t=>{Z(t),j(0)};return e.jsxs(e.Fragment,{children:[e.jsx(i,{appName:e.jsx(F,{icon:e.jsx("img",{src:$,alt:"Agent Next Gen",className:"h-6 w-6"}),name:"Agent Next Gen",groups:X,menuFooter:e.jsx(U,{}),open:K,onOpenChange:Q}),actions:e.jsxs(e.Fragment,{children:[e.jsx(pe,{notifications:g,onMarkAllRead:()=>o(t=>t.map(a=>({...a,read:!0}))),onClearAll:()=>o([]),onDismiss:t=>o(a=>a.filter(l=>l.id!==t)),onNotificationClick:t=>o(a=>a.map(l=>l.id===t.id?{...l,read:!0}:l))}),e.jsx(n,{ref:f,size:"xl",title:"Ask AI","aria-expanded":r,onClick:ne,className:r?"bg-lyra-state-hover":void 0,children:e.jsx(de,{})}),e.jsx(me,{name:"John Smith",initials:"JS",status:V,onStatusChange:re,timer:ie,className:"ml-1"})]})}),r&&le.createPortal(e.jsx("div",{style:{position:"fixed",top:c.top,left:c.left,zIndex:9999},className:"animate-in fade-in-0 slide-in-from-top-2 duration-150",children:e.jsx(ce,{draggable:!0,draggableVariant:"float",defaultDraggableWidth:k,defaultDraggableHeight:Y,userName:"John",suggestions:[{id:"1",label:"Summarise this contact's history"},{id:"2",label:"Suggest a response to the customer"},{id:"3",label:"What changed since yesterday?"}],onClose:()=>B(!1)})}),document.body)]})}},d={name:"AppName Only",render:()=>e.jsx(i,{appName:e.jsx(I,{name:"Agent Workspace Premium",alt:"Desk"})})},u={name:"Actions Only",render:()=>e.jsx(i,{appName:e.jsx("div",{}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Search",children:e.jsx(ue,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Settings",children:e.jsx(he,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Help",children:e.jsx(b,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(S,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:12,children:e.jsx(P,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(N,{initials:"DB",avatarColor:"#5d6a79",groups:x,showThemeToggle:!0,className:"ml-1"})]})})},h={name:"With Background",render:()=>e.jsx(i,{className:"bg-lyra-bg-surface-base border-b border-lyra-border-subtle",appName:e.jsx(I,{name:"Agent Workspace Premium",alt:"Desk"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Help",children:e.jsx(b,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(S,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:4,children:e.jsx(P,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(N,{initials:"JS",avatarColor:"#5d6a79",groups:x,showThemeToggle:!0,className:"ml-1"})]})})};var y,C,M;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <ProfileMenu initials="JS" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} showThemeToggle className="ml-1" />
        </>} />
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var v,O,D;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      <AppHeader appName={<AppNameMenu icon={<img src={appIcon} alt="Agent Next Gen" className="h-6 w-6" />} name="Agent Next Gen" groups={APP_MENU_GROUPS} menuFooter={<CXoneLogo />} open={appMenuOpen} onOpenChange={setAppMenuOpen} />} actions={<>
            <NotificationsBell notifications={notifications} onMarkAllRead={() => setNotifications(prev => prev.map(n => ({
          ...n,
          read: true
        })))} onClearAll={() => setNotifications([])} onDismiss={id => setNotifications(prev => prev.filter(n => n.id !== id))} onNotificationClick={n => setNotifications(prev => prev.map(i => i.id === n.id ? {
          ...i,
          read: true
        } : i))} />
            <ActionIconButton ref={aiBtnRef} size="xl" title="Ask AI" aria-expanded={aiPanelOpen} onClick={handleAiButtonClick} className={aiPanelOpen ? "bg-lyra-state-hover" : undefined}>
              <AiSparkleIcon />
            </ActionIconButton>
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
}`,...(D=(O=p.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var W,z,T;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "AppName Only",
  render: () => <AppHeader appName={<AppNameWithMenu name="Agent Workspace Premium" alt="Desk" />} />
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var E,_,G;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
          <ProfileMenu initials="DB" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} showThemeToggle className="ml-1" />
        </>} />
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var R,L,J;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
          <ProfileMenu initials="JS" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} showThemeToggle className="ml-1" />
        </>} />
}`,...(J=(L=h.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};const Dt=["Default","AgentNextGen","AppNameOnly","ActionsOnly","WithBackground"];export{u as ActionsOnly,p as AgentNextGen,d as AppNameOnly,m as Default,h as WithBackground,Dt as __namedExportsOrder,Ot as default};
