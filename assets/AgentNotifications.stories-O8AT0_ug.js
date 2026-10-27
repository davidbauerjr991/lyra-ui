import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DhMLlvMY.js";import{A as V,u as I}from"./agent-notifications-Dt-tlnjo.js";import{C as E}from"./container-header-CRBwP-Mp.js";import{A as H}from"./actions-BNYl_tAG.js";import{T as z}from"./tooltip-BnyLRSaS.js";import{S as _,N as q}from"./AgentNotifications.shared-CHlbs00M.js";import{M as J}from"./minimize-2-DJw-t-cB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-item-uivF4bHz.js";import"./badge-DnlHYDBX.js";import"./index-1evVQkiP.js";import"./draggable-qAsePa7D.js";import"./grip-vertical-B5uO6fqM.js";import"./createLucideIcon-aII_sYFw.js";import"./panel-right-D5VBrIHO.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./empty-state-D8d0leFe.js";import"./maximize-2--TlG5VuC.js";import"./bell-16x-NcfM.js";import"./trash-2-DTLo779S.js";import"./ellipsis-DX1Uroy1.js";import"./triangle-alert-C66Fwj6V.js";import"./users-jAzTZfU5.js";import"./message-square-BL8DSnhx.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";const _e={title:"UI/AgentNotifications",component:V,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}};function L({variant:l="float",count:M="many",hasUnread:O=!0,showClose:f=!0,showFullScreen:h=!1,showMarkAllRead:R=!0,showClearAll:T=!0}){const[p,s]=a.useState(()=>_.slice(0,q[M]).map(t=>O?t:{...t,read:!0})),[j,b]=a.useState(!0),[g,B]=a.useState(l),[u,d]=a.useState(!1),[U,y]=a.useState(!1),[i,C]=a.useState(!1),c=a.useRef(void 0);a.useEffect(()=>{if(u){clearTimeout(c.current),y(!0);let t=0;const n=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>C(!0))});return()=>{cancelAnimationFrame(n),cancelAnimationFrame(t)}}return C(!1),clearTimeout(c.current),c.current=setTimeout(()=>y(!1),180),()=>clearTimeout(c.current)},[u]);const w=R?()=>s(t=>t.map(n=>({...n,read:!0}))):void 0,v=T?()=>s([]):void 0,A=t=>s(n=>n.filter(r=>r.id!==t)),S=t=>s(n=>n.map(r=>r.id===t.id?{...r,read:!0}:r)),o=I({notifications:p,onMarkAllRead:w,onClearAll:v,onDismiss:A,onNotificationClick:S}),D=h&&U?e.jsxs("div",{className:"absolute top-0 left-0 right-3 bottom-3 z-[9] flex flex-col rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden",style:{opacity:i?1:0,transform:i?"scale(1)":"scale(0.98)",transition:i?"opacity 200ms ease, transform 200ms cubic-bezier(0.4, 0, 0.2, 1)":"opacity 150ms ease, transform 150ms ease",pointerEvents:i?"auto":"none"},children:[e.jsx(E,{title:o.title,titleBadge:o.titleBadge,titleClassName:o.titleClassName,bordered:!0,actions:e.jsxs(e.Fragment,{children:[o.headerActions,e.jsx(z,{content:"Exit Full Screen",placement:"bottom",asLabel:!0,children:e.jsx(H,{"aria-label":"Exit Full Screen",size:"sm",onClick:()=>d(!1),className:"text-lyra-fg-secondary hover:text-lyra-fg-secondary",children:e.jsx(J,{className:"h-3.5 w-3.5",strokeWidth:1.5})})})]}),onClose:f?()=>{d(!1),b(!1)}:void 0}),o.body]}):null,k=j&&!u?e.jsx(V,{notifications:p,draggableVariant:g,onVariantChange:B,onMarkAllRead:w,onClearAll:v,onClose:f?()=>b(!1):void 0,onFullScreen:h?()=>d(!0):void 0,onDismiss:A,onNotificationClick:S}):null;return e.jsxs("div",{className:"relative flex h-screen overflow-hidden bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"flex-1"}),D,g==="docked"?e.jsx("div",{className:"h-full pr-3 pb-3",children:k}):e.jsx("div",{className:"absolute top-16 left-16 pointer-events-none",children:k})]})}const m={name:"Default",args:{variant:"float",count:"many",hasUnread:!0,showClose:!0,showFullScreen:!1,showMarkAllRead:!0,showClearAll:!0},parameters:{docs:{story:{inline:!1,iframeHeight:560}},controls:{include:["Starts as","Notifications","Unread","Close button","Full screen button","Mark all as read","Clear all","variant","count","hasUnread","showClose","showFullScreen","showMarkAllRead","showClearAll"],sort:"none"}},argTypes:{variant:{name:"Starts as",control:"radio",options:["float","docked"],description:"Float is freely draggable. Docked is pinned to the right edge (`draggableVariant`).",table:{category:"Behavior",defaultValue:{summary:"float"}}},showClose:{name:"Close button",control:"boolean",description:"Show the close (×) button in the header (`onClose`). Clicking it hides the panel.",table:{category:"Behavior",defaultValue:{summary:"true"}}},showFullScreen:{name:"Full screen button",control:"boolean",description:"Adds a full-screen button to the header (`onFullScreen`). The panel expands to fill the container with a short fade-and-scale, and an exit button takes it back.",table:{category:"Behavior",defaultValue:{summary:"false"}}},showMarkAllRead:{name:"Mark all as read",control:"boolean",description:'Offer "Mark all as read" in the header\'s overflow menu (`onMarkAllRead`). It only appears while something is unread.',table:{category:"Behavior",defaultValue:{summary:"true"}}},showClearAll:{name:"Clear all",control:"boolean",description:'Offer "Clear all" in the header\'s overflow menu (`onClearAll`).',table:{category:"Behavior",defaultValue:{summary:"true"}}},count:{name:"Notifications",control:"radio",options:["none","few","many"],description:"How many notifications to start with: none (empty state), 3, or 8 (`notifications`).",table:{category:"Content",defaultValue:{summary:"many"}}},hasUnread:{name:"Unread",control:"boolean",description:"On: some notifications start unread (highlighted, with a count badge in the header). Off: all start read.",table:{category:"Content",defaultValue:{summary:"true"}}}},render:l=>e.jsx(L,{...l},JSON.stringify(l))};var x,N,F;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "float",
    count: "many",
    hasUnread: true,
    showClose: true,
    showFullScreen: false,
    showMarkAllRead: true,
    showClearAll: true
  },
  parameters: {
    // Full-viewport demo — render in an iframe on the Docs page so \`h-screen\` has a bounded height.
    docs: {
      story: {
        inline: false,
        iframeHeight: 560
      }
    },
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\` is set,
      // so both the labels and the prop keys are listed.
      include: ["Starts as", "Notifications", "Unread", "Close button", "Full screen button", "Mark all as read", "Clear all", "variant", "count", "hasUnread", "showClose", "showFullScreen", "showMarkAllRead", "showClearAll"],
      sort: "none"
    }
  },
  argTypes: {
    variant: {
      name: "Starts as",
      control: "radio",
      options: ["float", "docked"],
      description: "Float is freely draggable. Docked is pinned to the right edge (\`draggableVariant\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "float"
        }
      }
    },
    showClose: {
      name: "Close button",
      control: "boolean",
      description: "Show the close (×) button in the header (\`onClose\`). Clicking it hides the panel.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showFullScreen: {
      name: "Full screen button",
      control: "boolean",
      description: "Adds a full-screen button to the header (\`onFullScreen\`). The panel expands to fill the container with a short fade-and-scale, and an exit button takes it back.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showMarkAllRead: {
      name: "Mark all as read",
      control: "boolean",
      description: "Offer \\"Mark all as read\\" in the header's overflow menu (\`onMarkAllRead\`). It only appears while something is unread.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showClearAll: {
      name: "Clear all",
      control: "boolean",
      description: "Offer \\"Clear all\\" in the header's overflow menu (\`onClearAll\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    count: {
      name: "Notifications",
      control: "radio",
      options: ["none", "few", "many"],
      description: "How many notifications to start with: none (empty state), 3, or 8 (\`notifications\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "many"
        }
      }
    },
    hasUnread: {
      name: "Unread",
      control: "boolean",
      description: "On: some notifications start unread (highlighted, with a count badge in the header). Off: all start read.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    }
  },
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial value only applies on first mount.
  render: args => <AgentNotificationsDemo key={JSON.stringify(args)} {...args} />
}`,...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const qe=["Default"];export{m as Default,qe as __namedExportsOrder,_e as default};
