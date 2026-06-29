import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CXOcBcs0.js";import{r as Q}from"./index-DWcjTdiE.js";import{R as ne,T as se,P as oe,C as ie}from"./index-CF9u0XqS.js";import{c as M}from"./utils-BLSKlp9E.js";import{A as I,a as w}from"./app-icon-DSPf3d6H.js";import{A as re,C as le}from"./cxone-logo-BBh8hrJE.js";import{A as ce}from"./ai-panel-Bo9a8mjW.js";import{a as n}from"./actions-rDMhHy-A.js";import{T as Y}from"./tooltip-3keU6E-A.js";import{P as H,d as O}from"./profile-menu-B1AxbGgH.js";import{A as de}from"./agent-profile-BwKl609F.js";import{S as pe}from"./status-badge-D0LQdY0j.js";import{A as me}from"./agent-notifications-DKjisy5q.js";import{B}from"./bell-BjgN3fdD.js";import{S as ue}from"./search-aUstRSOi.js";import{S as fe}from"./settings-Ddbozet5.js";import{C as D}from"./circle-help-Bj2MpUE2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DujEZ9g2.js";import"./index-DNfP5j1O.js";import"./Combination-PupZwBmU.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./container-header-Bo-bv7NH.js";import"./x-N8aIqrq2.js";import"./ai-input-DBFgvdbN.js";import"./plus-B2SVJpWV.js";import"./arrow-up-C-teBDU4.js";import"./draggable-CnnyPBOw.js";import"./panel-right-CgZ2ABSM.js";import"./house-7dsFQekL.js";import"./index-1evVQkiP.js";import"./menu-BPKqDbWq.js";import"./chevron-right-DZKRY3zX.js";import"./moon-twi9AqRm.js";import"./chevron-left-C6DiQdwt.js";import"./list-item-B2NyYzfW.js";import"./trash-2-yAnBWR5t.js";import"./triangle-alert-Btkn3DL5.js";const c=a.forwardRef(({className:o,appName:s,actions:i,...u},d)=>e.jsxs("header",{ref:d,className:M("flex h-14 items-center justify-between pl-2 pr-4",o),...u,children:[e.jsx("div",{className:"flex items-center",children:s}),i&&e.jsx("div",{className:"flex items-center gap-1",children:i})]}));c.displayName="AppHeader";c.__docgenInfo={description:"",methods:[],displayName:"AppHeader",props:{appName:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left side content — typically an AppName component"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right side content — typically ActionIconButtons + ActionAvatarButton"}}};const R=a.forwardRef(({notifications:o=[],onClearAll:s,onMarkAllRead:i,onNotificationClick:u,onDismiss:d,className:N},A)=>{const[f,m]=a.useState(!1),[g,b]=a.useState({top:0,left:0}),h=a.useRef(null),r=o.filter(l=>!l.read).length,L=320,k=()=>{if(h.current){const l=h.current.getBoundingClientRect();b({top:l.bottom+6,left:l.right-L})}m(l=>!l)};return e.jsxs("div",{ref:A,className:N,children:[e.jsx(Y,{content:"Notifications",placement:"bottom",asLabel:!0,children:e.jsxs("button",{ref:h,type:"button","aria-label":`Notifications${r>0?`, ${r} unread`:""}`,"aria-expanded":f,onClick:k,className:M("relative flex h-10 w-10 items-center justify-center rounded-lyra-lg","text-lyra-fg-default transition-colors","hover:bg-lyra-state-hover active:bg-lyra-state-pressed","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",f&&"bg-lyra-state-hover"),children:[e.jsx(B,{className:"h-5 w-5",strokeWidth:1.5}),r>0&&e.jsx(pe,{variant:"critical",size:"sm",count:r,className:"absolute -top-0.5 -right-0.5"})]})}),f&&Q.createPortal(e.jsx("div",{style:{position:"fixed",top:g.top,left:g.left,zIndex:9999},className:"animate-in fade-in-0 slide-in-from-top-2 duration-150",children:e.jsx(me,{notifications:o,onClearAll:s,onMarkAllRead:i,onClose:()=>m(!1),onNotificationClick:u,onDismiss:d})}),document.body)]})});R.displayName="NotificationsBell";R.__docgenInfo={description:"",methods:[],displayName:"NotificationsBell",props:{notifications:{required:!1,tsType:{name:"Array",elements:[{name:"AgentNotification"}],raw:"AgentNotification[]"},description:"",defaultValue:{value:"[]",computed:!1}},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMarkAllRead:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNotificationClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(notification: AgentNotification) => void",signature:{arguments:[{type:{name:"AgentNotification"},name:"notification"}],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const x=a.forwardRef(({className:o,...s},i)=>e.jsx("svg",{ref:i,width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:M("h-5 w-5",o),...s,children:e.jsx("path",{d:"M16.6992 1.50293C18.0371 1.50302 18.999 2.69964 18.999 4.01465V13.4463C18.9989 14.7612 18.0371 15.9579 16.6992 15.958H10.625V17.2471H13.4893C13.8343 17.2471 14.1141 17.527 14.1143 17.8721C14.1143 18.2172 13.8344 18.4971 13.4893 18.4971H6.51074C6.16557 18.4971 5.88574 18.2172 5.88574 17.8721C5.88589 17.527 6.16566 17.2471 6.51074 17.2471H9.375V15.958H3.30078C1.96286 15.958 1.00106 14.7613 1.00098 13.4463V4.01465C1.00098 2.6996 1.9628 1.50295 3.30078 1.50293H16.6992ZM3.30078 2.75293C2.78881 2.75295 2.25098 3.24601 2.25098 4.01465V13.4463C2.25106 14.2148 2.78885 14.708 3.30078 14.708H16.6992C17.2111 14.7079 17.7489 14.2148 17.749 13.4463V4.01465C17.749 3.24607 17.2112 2.75303 16.6992 2.75293H3.30078ZM10.5469 9.23828C10.823 9.23834 11.0469 9.46217 11.0469 9.73828V12.8018C11.0466 13.0777 10.8228 13.3017 10.5469 13.3018H4.21973C3.94373 13.3018 3.71996 13.0777 3.71973 12.8018V9.73828C3.71973 9.46214 3.94358 9.23828 4.21973 9.23828H10.5469ZM15.7803 9.23828C16.0564 9.23828 16.2803 9.46214 16.2803 9.73828V12.8018C16.28 13.0777 16.0563 13.3018 15.7803 13.3018H12.5938C12.3178 13.3018 12.094 13.0777 12.0938 12.8018V9.73828C12.0938 9.46214 12.3176 9.23828 12.5938 9.23828H15.7803ZM7.40625 4.15918C7.68235 4.15918 7.90618 4.3831 7.90625 4.65918V7.72266C7.90613 7.99869 7.68232 8.22266 7.40625 8.22266H4.21973C3.94366 8.22266 3.71985 7.99869 3.71973 7.72266V4.65918C3.7198 4.3831 3.94363 4.15918 4.21973 4.15918H7.40625ZM15.7803 4.15918C16.0564 4.15918 16.2802 4.3831 16.2803 4.65918V7.72266C16.2802 7.99869 16.0563 8.22266 15.7803 8.22266H9.45312C9.1771 8.2226 8.95325 7.99866 8.95312 7.72266V4.65918C8.9532 4.38313 9.17707 4.15924 9.45312 4.15918H15.7803Z",fill:"currentColor"})}));x.displayName="DashboardIcon";x.__docgenInfo={description:"",methods:[],displayName:"DashboardIcon"};const ge=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17 10C17 9.94181 16.9795 9.88562 16.9424 9.84082C16.9051 9.79597 16.8532 9.76559 16.7959 9.75488L16.7949 9.75391L12.6279 8.96582C12.2329 8.89119 11.8693 8.69934 11.585 8.41504C11.3007 8.13074 11.1088 7.76715 11.0342 7.37207L10.2461 3.20508L10.2451 3.2041C10.2344 3.14679 10.204 3.09487 10.1592 3.05762C10.1144 3.02051 10.0582 3 10 3C9.94182 3 9.88563 3.02051 9.84082 3.05762C9.79597 3.09486 9.76559 3.14679 9.75488 3.2041L9.75391 3.20508L8.96582 7.37207C8.89119 7.76715 8.69934 8.13074 8.41504 8.41504C8.13074 8.69934 7.76715 8.89119 7.37207 8.96582L3.20508 9.75391L3.2041 9.75488C3.14679 9.76559 3.09486 9.79597 3.05762 9.84082C3.02051 9.88563 3 9.94182 3 10C3 10.0582 3.02051 10.1144 3.05762 10.1592C3.07625 10.1816 3.09828 10.2013 3.12305 10.2158L3.2041 10.2451L3.20508 10.2461L7.37207 11.0342C7.76715 11.1088 8.13074 11.3007 8.41504 11.585C8.69934 11.8693 8.89119 12.2329 8.96582 12.6279L9.75391 16.7949L9.75488 16.7959C9.76559 16.8532 9.79597 16.9051 9.84082 16.9424C9.88562 16.9795 9.94181 17 10 17C10.0582 17 10.1144 16.9795 10.1592 16.9424C10.204 16.9051 10.2344 16.8532 10.2451 16.7959L10.2461 16.7949L11.0342 12.6279C11.1088 12.2329 11.3007 11.8693 11.585 11.585C11.8693 11.3007 12.2329 11.1088 12.6279 11.0342L16.7949 10.2461L16.7959 10.2451C16.8532 10.2344 16.9051 10.204 16.9424 10.1592C16.9795 10.1144 17 10.0582 17 10ZM5.00098 15.999C5.00098 15.4469 4.55306 14.999 4.00098 14.999C3.4491 14.9993 3.00195 15.4471 3.00195 15.999C3.0022 16.5507 3.44925 16.9978 4.00098 16.998C4.55291 16.998 5.00073 16.5509 5.00098 15.999ZM6.00098 15.999C6.00073 17.1032 5.1052 17.998 4.00098 17.998C2.89697 17.9978 2.0022 17.103 2.00195 15.999C2.00195 14.8948 2.89682 13.9993 4.00098 13.999C5.10535 13.999 6.00098 14.8947 6.00098 15.999ZM18 10C18 10.2917 17.8983 10.5745 17.7119 10.7988C17.5256 11.0232 17.2662 11.174 16.9795 11.2275L16.9805 11.2285L12.8135 12.0166C12.616 12.0539 12.4341 12.1499 12.292 12.292C12.1499 12.4341 12.0539 12.616 12.0166 12.8135L11.2285 16.9805C11.1748 17.2668 11.023 17.5257 10.7988 17.7119C10.5745 17.8983 10.2917 18 10 18C9.70834 18 9.42555 17.8983 9.20117 17.7119C8.97704 17.5257 8.82516 17.2668 8.77148 16.9805L7.9834 12.8135C7.94609 12.616 7.85013 12.4341 7.70801 12.292C7.56588 12.1499 7.38403 12.0539 7.18652 12.0166L3.01953 11.2285V11.2275C2.73324 11.1738 2.47421 11.0229 2.28809 10.7988C2.10174 10.5745 2 10.2917 2 10C2 9.70834 2.10174 9.42554 2.28809 9.20117C2.47425 8.97704 2.73317 8.82516 3.01953 8.77148L7.18652 7.9834C7.38403 7.94609 7.56588 7.85013 7.70801 7.70801C7.85013 7.56588 7.94609 7.38403 7.9834 7.18652L8.77148 3.01953C8.82516 2.73317 8.97704 2.47425 9.20117 2.28809C9.42554 2.10174 9.70834 2 10 2C10.2917 2 10.5745 2.10174 10.7988 2.28809C11.023 2.47425 11.1748 2.73317 11.2285 3.01953L12.0166 7.18652C12.0539 7.38403 12.1499 7.56588 12.292 7.70801C12.4341 7.85013 12.616 7.94609 12.8135 7.9834L16.9805 8.77148H16.9795C17.2662 8.82503 17.5256 8.97683 17.7119 9.20117C17.8983 9.42555 18 9.70834 18 10ZM17.8271 4.0791C17.8271 4.22843 17.775 4.37334 17.6797 4.48828C17.5842 4.60329 17.4507 4.68056 17.3037 4.70801L17.3047 4.70898L16.6699 4.82812L16.5498 5.46191C16.5224 5.60887 16.4451 5.74238 16.3301 5.83789C16.2151 5.93334 16.0703 5.98532 15.9209 5.98535C15.7715 5.98535 15.6267 5.93328 15.5117 5.83789C15.3971 5.74266 15.3187 5.6103 15.291 5.46387L15.1709 4.82812L14.5361 4.70898V4.70801C14.3898 4.68032 14.2573 4.6029 14.1621 4.48828C14.0907 4.40218 14.0436 4.29937 14.0244 4.19043L14.0146 4.0791L14.0244 3.96875C14.0436 3.85949 14.0904 3.75624 14.1621 3.66992C14.2576 3.55499 14.3903 3.47672 14.5371 3.44922L15.1709 3.3291L15.291 2.69531C15.3186 2.54862 15.3969 2.41569 15.5117 2.32031L15.6025 2.25781C15.6989 2.20264 15.8086 2.17285 15.9209 2.17285L16.0312 2.18262C16.1041 2.19538 16.174 2.22111 16.2383 2.25781L16.3301 2.32031L16.4092 2.39941C16.4808 2.48388 16.5302 2.58618 16.5508 2.69629H16.5498L16.6699 3.3291L17.3027 3.44922H17.3037C17.4138 3.46978 17.5161 3.5192 17.6006 3.59082L17.6797 3.66992L17.7422 3.76172C17.7971 3.85791 17.8271 3.96706 17.8271 4.0791Z",fill:"currentColor"})}),st={title:"UI/AppHeader",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},v={render:()=>e.jsx(c,{appName:e.jsx(I,{icon:e.jsx("img",{src:w,alt:"Desk",className:"h-6 w-6"}),name:"Agent Workspace Premium"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Help",children:e.jsx(D,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(x,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:4,children:e.jsx(B,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(H,{initials:"JS",avatarColor:"#5d6a79",groups:O,className:"ml-1"})]})})},he=[{items:[{label:"Admin"},{label:"Supervisor"},{label:"Agent",active:!0},{label:"Conginity AI"}]},{items:[{label:"Workforce Management"},{label:"Quality Management"},{label:"Interaction Hub"},{label:"My Zone"}]},{items:[{label:"Dashboard"},{label:"Analytics"}]}],Ce=[{id:"1",type:"new-case",title:"New Case",subtitle:"Noah Patel",timestamp:"13m ago",read:!1},{id:"2",type:"new-chat",title:"New Chat",subtitle:"Sarah Miller",timestamp:"18m ago",read:!1},{id:"3",type:"escalation",title:"Escalation",subtitle:"Lauren Kim",timestamp:"24m ago",read:!1},{id:"4",type:"new-case",title:"New Case",subtitle:"Ethan Zhang",timestamp:"37m ago",read:!0},{id:"5",type:"new-chat",title:"New Chat",subtitle:"Olivia Reed",timestamp:"51m ago",read:!0},{id:"6",type:"missed-call",title:"Missed Call",subtitle:"David Brown",timestamp:"1h ago",read:!0},{id:"7",type:"escalation",title:"Escalation",subtitle:"Sarah Johnson",timestamp:"1h ago",read:!0},{id:"8",type:"new-case",title:"New Case",subtitle:"James Carter",timestamp:"2h ago",read:!0}],y={name:"Agent Next Gen",render:()=>{const[o,s]=a.useState(Ce),[i,u]=a.useState("available"),[d,N]=a.useState(0),[A,f]=a.useState(!1),[m,g]=a.useState(!1),[b,h]=a.useState({top:0,left:0}),r=a.useRef(null),L=()=>{if(r.current){const t=r.current.getBoundingClientRect();h({top:t.bottom+6,left:t.right-420})}g(t=>!t)};a.useEffect(()=>{const t=setInterval(()=>N(p=>p+1),1e3);return()=>clearInterval(t)},[]);const k=Math.floor(d/3600),l=Math.floor(d%3600/60),ee=d%60,te=`${String(k).padStart(2,"0")}:${String(l).padStart(2,"0")}:${String(ee).padStart(2,"0")}`,ae=t=>{u(t),N(0)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{appName:e.jsxs(ne,{open:A,onOpenChange:f,children:[e.jsx(se,{asChild:!0,children:e.jsx(I,{icon:e.jsx("img",{src:w,alt:"Agent Next Gen",className:"h-6 w-6"}),name:"Agent Next Gen","aria-expanded":A})}),e.jsx(oe,{children:e.jsx(ie,{side:"bottom",align:"start",sideOffset:6,onOpenAutoFocus:t=>t.preventDefault(),className:"z-[9999] animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100",children:e.jsx(re,{groups:he,footer:e.jsx(le,{})})})})]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(R,{notifications:o,onMarkAllRead:()=>s(t=>t.map(p=>({...p,read:!0}))),onClearAll:()=>s([]),onDismiss:t=>s(p=>p.filter(C=>C.id!==t)),onNotificationClick:t=>s(p=>p.map(C=>C.id===t.id?{...C,read:!0}:C))}),e.jsx(Y,{content:"Ask AI",placement:"bottom",asLabel:!0,children:e.jsx("button",{ref:r,type:"button","aria-label":"Ask AI","aria-expanded":m,onClick:L,className:`relative flex h-10 w-10 items-center justify-center rounded-lyra-lg text-lyra-fg-default transition-colors hover:bg-lyra-state-hover active:bg-lyra-state-pressed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus ${m?"bg-lyra-state-hover":""}`,children:e.jsx(ge,{})})}),e.jsx(de,{name:"John Smith",initials:"JS",status:i,onStatusChange:ae,timer:te,className:"ml-1"})]})}),m&&Q.createPortal(e.jsx("div",{style:{position:"fixed",top:b.top,left:b.left,zIndex:9999},className:"animate-in fade-in-0 slide-in-from-top-2 duration-150",children:e.jsx(ce,{draggable:!0,draggableVariant:"float",defaultDraggableWidth:420,defaultDraggableHeight:700,userName:"John",suggestions:[{id:"1",label:"Summarise this contact's history"},{id:"2",label:"Suggest a response to the customer"},{id:"3",label:"What changed since yesterday?"}],onClose:()=>g(!1)})}),document.body)]})}},S={name:"AppName Only",render:()=>e.jsx(c,{appName:e.jsx(I,{icon:e.jsx("img",{src:w,alt:"Desk",className:"h-6 w-6"}),name:"Agent Workspace Premium"})})},j={name:"Actions Only",render:()=>e.jsx(c,{appName:e.jsx("div",{}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Search",children:e.jsx(ue,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Settings",children:e.jsx(fe,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Help",children:e.jsx(D,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(x,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:12,children:e.jsx(B,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(H,{initials:"DB",avatarColor:"#5d6a79",groups:O,className:"ml-1"})]})})},P={name:"With Background",render:()=>e.jsx(c,{className:"bg-lyra-bg-surface-base border-b border-lyra-border-subtle",appName:e.jsx(I,{icon:e.jsx("img",{src:w,alt:"Desk",className:"h-6 w-6"}),name:"Agent Workspace Premium"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"xl",title:"Help",children:e.jsx(D,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(n,{size:"xl",title:"Dashboards",children:e.jsx(x,{className:"text-lyra-fg-default"})}),e.jsx(n,{size:"xl",title:"Notifications",badge:4,children:e.jsx(B,{className:"h-5 w-5",strokeWidth:1.5})}),e.jsx(H,{initials:"JS",avatarColor:"#5d6a79",groups:O,className:"ml-1"})]})})};var W,z,T;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <AppHeader appName={<AppName icon={<img src={appIcon} alt="Desk" className="h-6 w-6" />} name="Agent Workspace Premium" />} actions={<>
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
}`,...(T=(z=v.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var V,E,_;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Agent Next Gen",
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
    const aiBtnRef = useRef<HTMLButtonElement>(null);
    const handleAiButtonClick = () => {
      if (aiBtnRef.current) {
        const rect = aiBtnRef.current.getBoundingClientRect();
        setAiPanelPos({
          top: rect.bottom + 6,
          left: rect.right - 420
        });
      }
      setAiPanelOpen(v => !v);
    };
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
          <AiPanel draggable draggableVariant="float" defaultDraggableWidth={420} defaultDraggableHeight={700} userName="John" suggestions={[{
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
}`,...(_=(E=y.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var G,Z,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "AppName Only",
  render: () => <AppHeader appName={<AppName icon={<img src={appIcon} alt="Desk" className="h-6 w-6" />} name="Agent Workspace Premium" />} />
}`,...(J=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var F,$,q;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=($=j.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var U,X,K;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With Background",
  render: () => <AppHeader className="bg-lyra-bg-surface-base border-b border-lyra-border-subtle" appName={<AppName icon={<img src={appIcon} alt="Desk" className="h-6 w-6" />} name="Agent Workspace Premium" />} actions={<>
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
}`,...(K=(X=P.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};const ot=["Default","AgentNextGen","AppNameOnly","ActionsOnly","WithBackground"];export{j as ActionsOnly,y as AgentNextGen,S as AppNameOnly,v as Default,P as WithBackground,ot as __namedExportsOrder,st as default};
