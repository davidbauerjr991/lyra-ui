import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./index-DhMLlvMY.js";import{P as b}from"./page-header-D2DB6A_7.js";import{B as i}from"./button-Cje2PXGX.js";import{L as _}from"./link-DjKY0n2y.js";import{A as J}from"./avatar-CJbM1faC.js";import{B as Q}from"./badge-DnlHYDBX.js";import{T as $}from"./tag-CFhiOrCN.js";import{M as K}from"./menu-radix-Bz1NtL8K.js";import{T as Y,a as Z}from"./tabs-CB4kH1Fe.js";import{M as ee,W as te}from"./channel-row-BOUha6QQ.js";import{A as ae}from"./ai-icon-cgiye6KN.js";import{c as ne}from"./utils-BLSKlp9E.js";import{c as re}from"./createLucideIcon-aII_sYFw.js";import{P as oe}from"./plus-BKUBo5Qt.js";import{P as ie}from"./phone-call-LXWpUPVm.js";import{C as se}from"./chevron-right-BP9ksYh_.js";import{C as le}from"./check-Dr3vGcdY.js";import{C as ce}from"./chevron-down-gMYAX9-q.js";import{P as ue}from"./phone-BRlsjax8.js";import{M as me}from"./mail-BgfsS5Lx.js";import{M as de}from"./message-square-BL8DSnhx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./breadcrumb-vlQxlIY5.js";import"./kebab-menu-button-RTa_65iY.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./index-1evVQkiP.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./user-BnR-bf5w.js";import"./x-CzxgOx-T.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./hold-sla-GrIMLDD5.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./container-header-CRBwP-Mp.js";import"./arrow-left-Bi_-X62A.js";import"./warning-icon-solid-B8WDO-kD.js";import"./phone-input-CUXtUNnJ.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./outcome-panel-C4mapXbI.js";import"./select-CqLB1K6d.js";import"./index-pcZVUfq6.js";import"./checkbox-BvtSqiEO.js";import"./minus-CVnigrff.js";import"./search-CZxBQJsH.js";import"./search-input-DMWMFm0V.js";import"./clear-button-dDMqPq-B.js";import"./arrow-right-DLDQNhbU.js";import"./favorite-button-bBLqjC8I.js";import"./star-CKl-uXvS.js";import"./textarea-DlQm-U_8.js";import"./circle-alert-DucVQP5w.js";import"./triangle-alert-C66Fwj6V.js";import"./circle-CiULE-tD.js";import"./clock-C3xVexPO.js";import"./circle-check-CVZLkmkV.js";import"./send-dvDSLghl.js";import"./phone-incoming-Cf4fZr2m.js";import"./arrow-left-right-Cg1yeikD.js";import"./circle-play-VUnuHOtC.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=re("ContactRound",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]),T=[{name:"Chat",icon:e.jsx(ee,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})},{name:"Voice",icon:e.jsx(ue,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})},{name:"Email",icon:e.jsx(me,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})},{name:"WhatsApp",icon:e.jsx(te,{className:"h-4 w-4"})},{name:"SMS",icon:e.jsx(de,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})}],he=t=>t.split(/\s+/).filter(Boolean).slice(0,2).map(a=>a[0].toUpperCase()).join(""),v=()=>e.jsx("span",{className:"h-4 w-px shrink-0 bg-lyra-border-strong","aria-hidden":"true"});function pe({channel:t,text:a,link:n}){const r=T.find(s=>s.name===t);return e.jsxs("span",{className:"flex min-w-0 items-center gap-3 lyra-body-sm text-lyra-fg-secondary",children:[r&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"inline-flex shrink-0 items-center gap-1.5",children:[t==="Voice"?e.jsx(ie,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):r.icon,r.name]}),a&&e.jsx(v,{})]}),a&&e.jsx("span",{className:"truncate",children:a}),n&&e.jsxs(e.Fragment,{children:[(a||r)&&e.jsx(v,{}),e.jsxs(_,{size:"sm",className:"inline-flex shrink-0 items-center gap-1",children:[n,e.jsx(se,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})]})]})]})}function ge({selected:t}){const a=[...T].reverse();return e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(i,{variant:"ghost",size:"icon-md",title:"Add Channel",children:e.jsx(oe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})}),a.map(n=>e.jsx(i,{variant:"outline",size:"icon-md",title:n.name,"aria-label":n.name,"aria-pressed":n.name===t,className:ne(n.name===t&&"border-lyra-border-active bg-lyra-bg-active-subtle text-lyra-fg-action hover:bg-lyra-bg-active-subtle"),children:n.icon},n.name))]})}const x=[{label:"Open",variant:"warning",dotColor:"var(--lyra-color-status-warning-strong)"},{label:"Pending",variant:"info",dotColor:"var(--lyra-color-status-info-strong)"},{label:"Escalated",variant:"purple",dotColor:"var(--lyra-color-accent-purple-strong)"},{label:"Resolved",variant:"success",dotColor:"var(--lyra-color-status-success-strong)"},{label:"Closed",variant:"critical",dotColor:"var(--lyra-color-status-critical-strong)"}];function ye({chip:t}){var s;const[a,n]=d.useState(t);d.useEffect(()=>n(t),[t]);const r=((s=x.find(o=>o.label===a))==null?void 0:s.variant)??"neutral";return e.jsxs("span",{className:"inline-flex items-center gap-3",children:[e.jsxs(i,{variant:"ghost",size:"sm",className:"text-lyra-fg-default",children:[e.jsx("span",{className:"inline-flex h-4 w-4 items-center justify-center rounded-full bg-lyra-bg-primary text-lyra-fg-on-primary","aria-hidden":"true",children:e.jsx(le,{className:"h-2.5 w-2.5",strokeWidth:3})}),"Outcome"]}),t&&e.jsx(K,{align:"end",modal:!1,items:x.map(o=>({id:o.label,label:o.label,icon:e.jsx("span",{"aria-hidden":"true",className:"block h-2 w-2 rounded-full",style:{backgroundColor:o.dotColor}}),active:o.label===a,onClick:()=>n(o.label)})),trigger:e.jsx("button",{type:"button","aria-label":`Status: ${a}. Change status`,className:"rounded-lyra-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:e.jsx($,{label:a,variant:r,trailingIcon:e.jsx(ce,{className:"h-3 w-3",strokeWidth:1.5})})})})]})}function fe({layout:t="agent",title:a="Lucas Thomas",showAvatar:n=!0,showAvatarStatus:r=!0,showBreadcrumb:s=!1,breadcrumbTrail:o="Dashboards, Sales",breadcrumbLinks:V=!1,showSubtitle:O=!0,subtitle:D="(282) 283-7606 · # CTX-20261021-63785",showSubtitleLink:L=!0,subtitleLinkText:N="Session Details",badge:P="",badgeColor:W="green",badgeVariant:z="subtle",titleSize:I="lg",bordered:M=!0,compact:R=!1,iconDivider:q=!1,panelToggle:h="none",showActions:p=!0,channel:g="Voice",showChannelButtons:H=!0,showOutcome:E=!0,outcomeChip:F="Open"}){const l=t==="agent",y=l,G=L?N:void 0,f=o.split(",").map(c=>c.trim()).filter(Boolean).map(c=>V?{label:c,href:"#"}:{label:c}),w=O?e.jsx(pe,{channel:l?g:void 0,text:D,link:G}):void 0,U=l&&H,X=l&&E?e.jsx(ye,{chip:F}):null;return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:a,subtitle:y?void 0:w,icon:n?e.jsx(J,{initials:he(a),size:"lg",color:"primary",badgePosition:"bottom-right",badge:r?e.jsx(Q,{shape:"circle",dot:!0,variant:"success",bordered:!0,size:"md"}):void 0}):void 0,iconDivider:q,breadcrumb:!n&&s&&f.length>0?f:void 0,badge:P||void 0,badgeColor:W,badgeVariant:z,titleSize:I,bordered:M,compact:R,panelToggle:h==="none"?void 0:h,actions:l?e.jsxs(e.Fragment,{children:[U&&e.jsx(ge,{selected:g}),p&&e.jsxs(i,{variant:"outline",children:[e.jsx(be,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),"Contact Details"]})]}):p?e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outline",children:"Secondary"}),e.jsx(i,{children:"Primary"}),e.jsx("div",{className:"mx-1 h-6 w-px bg-lyra-border-subtle"}),e.jsxs(i,{variant:"outline",children:[e.jsx(ae,{className:"h-4 w-4"}),"Ask AI"]})]}):void 0}),y&&e.jsx("div",{className:"px-6",children:e.jsxs("div",{className:"flex items-center justify-between gap-4 border-b border-lyra-border-subtle pb-3 pt-1",children:[e.jsx("div",{className:"min-w-0",children:w}),X]})})]})}const $t={title:"UI/PageHeader",component:b,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},u={name:"Default",parameters:{controls:{include:["Layout","Title","Avatar","Avatar status","Breadcrumb","Breadcrumb trail","Breadcrumb links","Subtitle","Subtitle text","Subtitle link","Subtitle link text","Badge","Badge color","Badge style","Actions","Channel","Channel buttons","Outcome","Outcome chip","Title size","Border","Compact","Icon divider","Panel toggle","layout","title","showAvatar","showAvatarStatus","showBreadcrumb","breadcrumbTrail","breadcrumbLinks","showSubtitle","subtitle","showSubtitleLink","subtitleLinkText","badge","badgeColor","badgeVariant","showActions","channel","showChannelButtons","showOutcome","outcomeChip","titleSize","bordered","compact","iconDivider","panelToggle"],sort:"none"}},args:{layout:"agent",title:"Lucas Thomas",showAvatar:!0,showAvatarStatus:!0,showBreadcrumb:!1,breadcrumbTrail:"Dashboards, Sales",breadcrumbLinks:!1,showSubtitle:!0,subtitle:"(282) 283-7606 · # CTX-20261021-63785",showSubtitleLink:!0,subtitleLinkText:"Session Details",badge:"",badgeColor:"green",badgeVariant:"subtle",showActions:!0,channel:"Voice",showChannelButtons:!0,showOutcome:!0,outcomeChip:"Open",titleSize:"lg",bordered:!0,compact:!1,iconDivider:!1,panelToggle:"none"},argTypes:{layout:{name:"Layout",control:"radio",options:["agent","admin"],labels:{agent:"Agent",admin:"Admin"},description:"Agent: the agent record header (Contact Details button, channel buttons, and a session details row under it holding the subtitle line and outcome). Admin: the standard page header with its Secondary / Primary / Ask AI buttons.",table:{category:"Content",defaultValue:{summary:"agent"}}},title:{name:"Title",control:"text",description:"Page title (`title`). The avatar initials come from it.",table:{category:"Content"}},showAvatar:{name:"Avatar",control:"boolean",description:"Circle avatar with initials before the title (`icon`). Takes precedence over Breadcrumb.",table:{category:"Content",defaultValue:{summary:"true"}}},showAvatarStatus:{name:"Avatar status",control:"boolean",description:"Green status dot on the avatar's corner.",if:{arg:"showAvatar"},table:{category:"Content",defaultValue:{summary:"true"}}},showBreadcrumb:{name:"Breadcrumb",control:"boolean",description:"Show a breadcrumb trail before the title (`breadcrumb`). Hidden while Avatar is on, since an avatar takes precedence.",if:{arg:"showAvatar",truthy:!1},table:{category:"Breadcrumb",defaultValue:{summary:"false"}}},breadcrumbTrail:{name:"Breadcrumb trail",control:"text",description:"Parent crumbs, comma-separated (`breadcrumb`). The title is the last crumb. One crumb gives a single parent, several give a deeper trail.",if:{arg:"showBreadcrumb"},table:{category:"Breadcrumb",defaultValue:{summary:"Dashboards, Sales"}}},breadcrumbLinks:{name:"Breadcrumb links",control:"boolean",description:"Render each parent crumb as a real link (`href` on each crumb) instead of a button.",if:{arg:"showBreadcrumb"},table:{category:"Breadcrumb",defaultValue:{summary:"false"}}},showSubtitle:{name:"Subtitle",control:"boolean",description:"Show a line under the title (`subtitle`). In the Agent layout it starts with the channel and sits in the session details row under the header.",table:{category:"Subtitle",defaultValue:{summary:"true"}}},subtitle:{name:"Subtitle text",control:"text",description:"The subtitle string. Only used while Subtitle is on.",if:{arg:"showSubtitle"},table:{category:"Subtitle"}},showSubtitleLink:{name:"Subtitle link",control:"boolean",description:"Add a link at the end of the subtitle. Only used while Subtitle is on.",if:{arg:"showSubtitle"},table:{category:"Subtitle",defaultValue:{summary:"true"}}},subtitleLinkText:{name:"Subtitle link text",control:"text",description:"The link's label.",if:{arg:"showSubtitleLink"},table:{category:"Subtitle",defaultValue:{summary:"Session Details"}}},badge:{name:"Badge",control:"text",description:'Badge text shown after the title (`badge`), for example "Active Call". Leave empty for none.',table:{category:"Content"}},badgeColor:{name:"Badge color",control:"select",options:["slate","red","orange","yellow","lime","green","teal","blue","purple","pink","success","info","warning","critical"],description:"Badge color (`badgeColor`).",table:{category:"Appearance",defaultValue:{summary:"green"}}},badgeVariant:{name:"Badge style",control:"radio",options:["subtle","solid"],description:"Badge variant (`badgeVariant`).",table:{category:"Appearance",defaultValue:{summary:"subtle"}}},showActions:{name:"Actions",control:"boolean",description:"Show the action buttons on the right (`actions`): Contact Details in the Agent layout, Secondary / Primary / Ask AI in the Admin layout.",table:{category:"Content",defaultValue:{summary:"true"}}},channel:{name:"Channel",control:"select",options:["Chat","Voice","Email","WhatsApp","SMS"],description:"Agent layout: the current channel. Shown at the start of the subtitle line and as the selected channel button.",if:{arg:"layout",eq:"agent"},table:{category:"Agent",defaultValue:{summary:"Voice"}}},showChannelButtons:{name:"Channel buttons",control:"boolean",description:'Agent layout: channel icon buttons with a "+", to the left of Contact Details.',if:{arg:"layout",eq:"agent"},table:{category:"Agent",defaultValue:{summary:"true"}}},showOutcome:{name:"Outcome",control:"boolean",description:"Agent layout: the Outcome control and status chip.",if:{arg:"layout",eq:"agent"},table:{category:"Agent",defaultValue:{summary:"true"}}},outcomeChip:{name:"Outcome chip",control:"text",description:"Status chip next to Outcome. Leave empty for none.",if:{arg:"showOutcome"},table:{category:"Agent",defaultValue:{summary:"Open"}}},titleSize:{name:"Title size",control:"radio",options:["lg","2xl"],description:"Title heading size (`titleSize`): lg is 20px, 2xl is 28px for greeting-style headers.",table:{category:"Appearance",defaultValue:{summary:"lg"}}},bordered:{name:"Border",control:"boolean",description:"Bottom border (`bordered`).",table:{category:"Appearance",defaultValue:{summary:"true"}}},compact:{name:"Compact",control:"boolean",description:"Shorter row (`compact`).",table:{category:"Appearance",defaultValue:{summary:"false"}}},iconDivider:{name:"Icon divider",control:"boolean",description:"Divider between the avatar and the title (`iconDivider`).",if:{arg:"showAvatar"},table:{category:"Appearance",defaultValue:{summary:"false"}}},panelToggle:{name:"Panel toggle",control:"radio",options:["none","left","right","both"],description:"Which panel toggle buttons show (`panelToggle`).",table:{category:"Behavior",defaultValue:{summary:"none"}}}},render:t=>e.jsx(fe,{...t})};function we(){const t=["Dashboard","Customers","Accounts","Tickets"],[a,n]=d.useState(t[0]);return e.jsxs("div",{className:"bg-lyra-bg-surface-base",children:[e.jsx(b,{title:"Good morning John",subtitle:"User Name: jsmith",actions:e.jsx(i,{variant:"secondary",children:"My Assignment Queue: 3"}),tabs:e.jsx(Y,{className:"px-6",overflowMenu:!0,children:t.map(r=>e.jsx(Z,{active:a===r,onClick:()=>n(r),children:r},r))})}),e.jsx("div",{className:"p-6 lyra-body-md text-lyra-fg-secondary",children:a})]})}const m={name:"With tabs",render:()=>e.jsx(we,{})};var S,A,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display name, so names and keys are both listed.
      include: ["Layout", "Title", "Avatar", "Avatar status", "Breadcrumb", "Breadcrumb trail", "Breadcrumb links", "Subtitle", "Subtitle text", "Subtitle link", "Subtitle link text", "Badge", "Badge color", "Badge style", "Actions", "Channel", "Channel buttons", "Outcome", "Outcome chip", "Title size", "Border", "Compact", "Icon divider", "Panel toggle", "layout", "title", "showAvatar", "showAvatarStatus", "showBreadcrumb", "breadcrumbTrail", "breadcrumbLinks", "showSubtitle", "subtitle", "showSubtitleLink", "subtitleLinkText", "badge", "badgeColor", "badgeVariant", "showActions", "channel", "showChannelButtons", "showOutcome", "outcomeChip", "titleSize", "bordered", "compact", "iconDivider", "panelToggle"],
      sort: "none"
    }
  },
  args: {
    layout: "agent",
    title: "Lucas Thomas",
    showAvatar: true,
    showAvatarStatus: true,
    showBreadcrumb: false,
    breadcrumbTrail: "Dashboards, Sales",
    breadcrumbLinks: false,
    showSubtitle: true,
    subtitle: "(282) 283-7606 · # CTX-20261021-63785",
    showSubtitleLink: true,
    subtitleLinkText: "Session Details",
    badge: "",
    badgeColor: "green",
    badgeVariant: "subtle",
    showActions: true,
    channel: "Voice",
    showChannelButtons: true,
    showOutcome: true,
    outcomeChip: "Open",
    titleSize: "lg",
    bordered: true,
    compact: false,
    iconDivider: false,
    panelToggle: "none"
  },
  argTypes: {
    layout: {
      name: "Layout",
      control: "radio",
      options: ["agent", "admin"],
      labels: {
        agent: "Agent",
        admin: "Admin"
      },
      description: "Agent: the agent record header (Contact Details button, channel buttons, and a session details row under it holding the subtitle line and outcome). Admin: the standard page header with its Secondary / Primary / Ask AI buttons.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "agent"
        }
      }
    },
    title: {
      name: "Title",
      control: "text",
      description: "Page title (\`title\`). The avatar initials come from it.",
      table: {
        category: "Content"
      }
    },
    showAvatar: {
      name: "Avatar",
      control: "boolean",
      description: "Circle avatar with initials before the title (\`icon\`). Takes precedence over Breadcrumb.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showAvatarStatus: {
      name: "Avatar status",
      control: "boolean",
      description: "Green status dot on the avatar's corner.",
      if: {
        arg: "showAvatar"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showBreadcrumb: {
      name: "Breadcrumb",
      control: "boolean",
      description: "Show a breadcrumb trail before the title (\`breadcrumb\`). Hidden while Avatar is on, since an avatar takes precedence.",
      if: {
        arg: "showAvatar",
        truthy: false
      },
      table: {
        category: "Breadcrumb",
        defaultValue: {
          summary: "false"
        }
      }
    },
    breadcrumbTrail: {
      name: "Breadcrumb trail",
      control: "text",
      description: "Parent crumbs, comma-separated (\`breadcrumb\`). The title is the last crumb. One crumb gives a single parent, several give a deeper trail.",
      if: {
        arg: "showBreadcrumb"
      },
      table: {
        category: "Breadcrumb",
        defaultValue: {
          summary: "Dashboards, Sales"
        }
      }
    },
    breadcrumbLinks: {
      name: "Breadcrumb links",
      control: "boolean",
      description: "Render each parent crumb as a real link (\`href\` on each crumb) instead of a button.",
      if: {
        arg: "showBreadcrumb"
      },
      table: {
        category: "Breadcrumb",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showSubtitle: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a line under the title (\`subtitle\`). In the Agent layout it starts with the channel and sits in the session details row under the header.",
      table: {
        category: "Subtitle",
        defaultValue: {
          summary: "true"
        }
      }
    },
    subtitle: {
      name: "Subtitle text",
      control: "text",
      description: "The subtitle string. Only used while Subtitle is on.",
      if: {
        arg: "showSubtitle"
      },
      table: {
        category: "Subtitle"
      }
    },
    showSubtitleLink: {
      name: "Subtitle link",
      control: "boolean",
      description: "Add a link at the end of the subtitle. Only used while Subtitle is on.",
      if: {
        arg: "showSubtitle"
      },
      table: {
        category: "Subtitle",
        defaultValue: {
          summary: "true"
        }
      }
    },
    subtitleLinkText: {
      name: "Subtitle link text",
      control: "text",
      description: "The link's label.",
      if: {
        arg: "showSubtitleLink"
      },
      table: {
        category: "Subtitle",
        defaultValue: {
          summary: "Session Details"
        }
      }
    },
    badge: {
      name: "Badge",
      control: "text",
      description: "Badge text shown after the title (\`badge\`), for example \\"Active Call\\". Leave empty for none.",
      table: {
        category: "Content"
      }
    },
    badgeColor: {
      name: "Badge color",
      control: "select",
      options: ["slate", "red", "orange", "yellow", "lime", "green", "teal", "blue", "purple", "pink", "success", "info", "warning", "critical"],
      description: "Badge color (\`badgeColor\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "green"
        }
      }
    },
    badgeVariant: {
      name: "Badge style",
      control: "radio",
      options: ["subtle", "solid"],
      description: "Badge variant (\`badgeVariant\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "subtle"
        }
      }
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show the action buttons on the right (\`actions\`): Contact Details in the Agent layout, Secondary / Primary / Ask AI in the Admin layout.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    channel: {
      name: "Channel",
      control: "select",
      options: ["Chat", "Voice", "Email", "WhatsApp", "SMS"],
      description: "Agent layout: the current channel. Shown at the start of the subtitle line and as the selected channel button.",
      if: {
        arg: "layout",
        eq: "agent"
      },
      table: {
        category: "Agent",
        defaultValue: {
          summary: "Voice"
        }
      }
    },
    showChannelButtons: {
      name: "Channel buttons",
      control: "boolean",
      description: "Agent layout: channel icon buttons with a \\"+\\", to the left of Contact Details.",
      if: {
        arg: "layout",
        eq: "agent"
      },
      table: {
        category: "Agent",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showOutcome: {
      name: "Outcome",
      control: "boolean",
      description: "Agent layout: the Outcome control and status chip.",
      if: {
        arg: "layout",
        eq: "agent"
      },
      table: {
        category: "Agent",
        defaultValue: {
          summary: "true"
        }
      }
    },
    outcomeChip: {
      name: "Outcome chip",
      control: "text",
      description: "Status chip next to Outcome. Leave empty for none.",
      if: {
        arg: "showOutcome"
      },
      table: {
        category: "Agent",
        defaultValue: {
          summary: "Open"
        }
      }
    },
    titleSize: {
      name: "Title size",
      control: "radio",
      options: ["lg", "2xl"],
      description: "Title heading size (\`titleSize\`): lg is 20px, 2xl is 28px for greeting-style headers.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "lg"
        }
      }
    },
    bordered: {
      name: "Border",
      control: "boolean",
      description: "Bottom border (\`bordered\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    compact: {
      name: "Compact",
      control: "boolean",
      description: "Shorter row (\`compact\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    iconDivider: {
      name: "Icon divider",
      control: "boolean",
      description: "Divider between the avatar and the title (\`iconDivider\`).",
      if: {
        arg: "showAvatar"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    panelToggle: {
      name: "Panel toggle",
      control: "radio",
      options: ["none", "left", "right", "both"],
      description: "Which panel toggle buttons show (\`panelToggle\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "none"
        }
      }
    }
  },
  render: args => <PageHeaderDemo {...args} />
}`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var k,B,j;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "With tabs",
  render: () => <PageHeaderWithTabsDemo />
}`,...(j=(B=m.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const Kt=["Default","WithTabs"];export{u as Default,m as WithTabs,Kt as __namedExportsOrder,$t as default};
