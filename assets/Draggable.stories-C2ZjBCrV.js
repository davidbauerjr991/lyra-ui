import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DhMLlvMY.js";import{A as g}from"./actions-BNYl_tAG.js";import{D as W,M as Q}from"./draggable-qAsePa7D.js";import{T as d}from"./tooltip-BnyLRSaS.js";import{C as z}from"./container-header-CRBwP-Mp.js";import{a as X}from"./container-footer-BSIaMmWX.js";import{s as Y}from"./SidePanel.shared-DNVkiUqa.js";import{P as N}from"./InteriorPanel.shared-Bq_sNakH.js";import{a as D,c as p,h as H}from"./Container.shared-D9Nc0eKH.js";import{G as Z}from"./grip-vertical-B5uO6fqM.js";import{M as $}from"./minimize-2-DJw-t-cB.js";import{M as ee}from"./maximize-2--TlG5VuC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./button-Cje2PXGX.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-down-gMYAX9-q.js";import"./panel-right-D5VBrIHO.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./input-DV2xaBHs.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./tabs-CB4kH1Fe.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./container-C7yiAi4_.js";import"./tag-DQ3sj_Kb.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";const at={title:"Custom Primitives/Draggable",component:W,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function te({variant:a="float",lockVariant:r=!1,showHeaderControls:h=!0,dockedResizable:P=!0,showFullScreen:f=!1,title:y="Panel",showTitle:w=!0,showSubhead:S=!1,showIcon:u=!1,showTag:x=!1,showActions:m=!1,showTabs:v=!1,showFooter:L=!1,footerAlign:M="right",footerBordered:O=!1,footerScrollEffect:F="shadow"}){const[n,k]=o.useState(a),[q,U]=o.useState(350),[l,b]=o.useState(!1),[G,T]=o.useState(!1),[s,C]=o.useState(!1),i=o.useRef(void 0);o.useEffect(()=>{if(l){clearTimeout(i.current),T(!0);let t=0;const K=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>C(!0))});return()=>{cancelAnimationFrame(K),cancelAnimationFrame(t)}}return C(!1),clearTimeout(i.current),i.current=setTimeout(()=>T(!1),180),()=>clearTimeout(i.current)},[l]);const J=f?e.jsx(d,{content:"Full Screen",placement:"bottom",asLabel:!0,children:e.jsx(g,{"aria-label":"Full Screen",size:"sm",onClick:()=>b(!0),className:"text-lyra-fg-secondary hover:text-lyra-fg-secondary",children:e.jsx(ee,{className:"h-3.5 w-3.5",strokeWidth:1.5})})}):null,j=t=>e.jsx(z,{title:w?y:void 0,subhead:S?"Supporting description":void 0,icon:t&&t.variant==="float"?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{...t.gripProps,children:e.jsx(Z,{className:"h-4 w-4",strokeWidth:1.5})}),u?p:null]}):u?p:void 0,titleBadge:x?D:void 0,actions:m||f||t&&!r?e.jsxs(e.Fragment,{children:[m?H:null,J,t&&!r?e.jsx(d,{content:t.dockButtonProps["aria-label"],placement:"bottom",asLabel:!0,children:e.jsx("button",{...t.dockButtonProps,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:t.dockIcon})}):null]}):void 0,tabs:v?e.jsx(N,{}):void 0,bordered:!1}),A=e.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto flex items-center justify-center p-4",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary text-center",children:l?"Full screen — fills the container.":e.jsxs(e.Fragment,{children:["Currently ",e.jsx("strong",{children:n}),", ",Math.round(q),"px wide.",e.jsx("br",{}),n==="float"?"Drag the header to move it; resize from the bottom-right corner.":"Drag the left edge to resize."]})})}),V=L?e.jsx(X,{align:M,bordered:O,scrollShadow:F==="shadow",scrollFade:F==="fade",children:Y}):null,B=e.jsxs(W,{variant:n,defaultWidth:350,defaultHeight:420,minWidth:350,minHeight:200,onVariantChange:k,onWidthChange:U,lockVariant:r,showHeaderControls:h,dockedResizable:P,renderHeaderControls:h?j:void 0,className:["rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",n==="float"?"shadow-lg":""].join(" "),children:[!h&&j(),A,V]}),_=f&&G?e.jsxs("div",{className:"absolute top-0 left-0 right-3 bottom-3 z-[9] flex flex-col rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden",style:{opacity:s?1:0,transform:s?"scale(1)":"scale(0.98)",transition:s?"opacity 200ms ease, transform 200ms cubic-bezier(0.4, 0, 0.2, 1)":"opacity 150ms ease, transform 150ms ease",pointerEvents:s?"auto":"none"},children:[e.jsx(z,{title:w?y:void 0,subhead:S?"Supporting description":void 0,icon:u?p:void 0,titleBadge:x?D:void 0,actions:e.jsxs(e.Fragment,{children:[m?H:null,e.jsx(d,{content:"Exit Full Screen",placement:"bottom",asLabel:!0,children:e.jsx(g,{"aria-label":"Exit Full Screen",size:"sm",onClick:()=>b(!1),className:"text-lyra-fg-secondary hover:text-lyra-fg-secondary",children:e.jsx($,{className:"h-3.5 w-3.5",strokeWidth:1.5})})}),!r&&e.jsx(d,{content:"Undock",placement:"bottom",asLabel:!0,children:e.jsx(g,{"aria-label":"Undock",size:"sm",onClick:()=>{k("float"),b(!1)},className:"text-lyra-fg-secondary hover:text-lyra-fg-secondary",children:e.jsx(Q,{className:"h-3.5 w-3.5",strokeWidth:1.5})})})]}),tabs:v?e.jsx(N,{}):void 0,bordered:!1}),A,V]}):null;return e.jsxs("div",{className:"relative flex h-screen overflow-hidden bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Main content area"})}),_,l?null:n==="docked"?e.jsx("div",{className:"h-full pr-3 pb-3",children:B}):e.jsx("div",{className:"absolute top-16 left-16 pointer-events-none",children:B})]})}const c={args:{variant:"float",lockVariant:!1,showHeaderControls:!0,dockedResizable:!0,showFullScreen:!1,showTitle:!0,title:"Panel",showSubhead:!1,showIcon:!1,showTag:!1,showActions:!1,showTabs:!1,showFooter:!1,footerAlign:"right",footerBordered:!1,footerScrollEffect:"shadow"},parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:520}},controls:{include:["variant","lockVariant","showHeaderControls","dockedResizable","showFullScreen","showTitle","title","Title text","showSubhead","showIcon","showTag","showActions","showTabs","showFooter","footerAlign","footerBordered","footerScrollEffect","Starts as","Lock mode","Header controls","Docked resize handle","Full screen button","Title","Subtitle","Icon","Alert tag","Actions","Tabs","Footer","Footer alignment","Footer border","Footer scroll effect"],sort:"none"}},argTypes:{variant:{name:"Starts as",control:"radio",options:["float","docked"],description:"Float is freely draggable. Docked is pinned to the right edge (`variant`).",table:{category:"Behavior"}},lockVariant:{name:"Lock mode",control:"boolean",description:"Removes the dock/undock button so the panel can't change mode (`lockVariant`).",table:{category:"Behavior"}},showHeaderControls:{name:"Header controls",control:"boolean",description:"Puts the grip and dock/undock buttons in the header (`showHeaderControls`). In float mode the whole header drags the panel.",table:{category:"Behavior"}},dockedResizable:{name:"Docked resize handle",control:"boolean",description:"Shows the left-edge resize handle while docked (`dockedResizable`).",table:{category:"Behavior"}},showFullScreen:{name:"Full screen button",control:"boolean",description:"Adds a full-screen button to the header. The panel expands to fill the container with a short fade-and-scale, and an exit button (plus Undock) takes it back.",table:{category:"Behavior"}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",table:{category:"Content",defaultValue:{summary:"true"}}},title:{name:"Title text",if:{arg:"showTitle",truthy:!0},control:"text",description:"Text in the panel's header.",table:{category:"Content"}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`subhead`).",table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`icon`). In float mode the drag grip takes this spot.",table:{category:"Content",defaultValue:{summary:"false"}}},showTag:{name:"Alert tag",control:"boolean",description:"Show a status tag inline right after the title (`titleBadge`).",table:{category:"Content",defaultValue:{summary:"false"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`actions`).",table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a fixed tab row inside the header (`tabs`).",table:{category:"Content",defaultValue:{summary:"false"}}},showFooter:{name:"Footer",control:"boolean",description:"Show a footer with Cancel and Save buttons (`ContainerFooter`).",table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer alignment",control:"radio",options:["left","right","full"],description:"Where the footer's buttons sit: left, right, or stretched to full width (`ContainerFooter` `align`).",if:{arg:"showFooter",truthy:!0},table:{category:"Content",defaultValue:{summary:"right"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`ContainerFooter` `bordered`).",if:{arg:"footerScrollEffect",neq:"fade"},table:{category:"Appearance",defaultValue:{summary:"false"}}},footerScrollEffect:{name:"Footer scroll effect",control:"radio",options:["none","shadow","fade"],labels:{none:"None",shadow:"Shadow",fade:"Fade"},description:"What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",if:{arg:"showFooter",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"shadow"}}}},render:a=>e.jsx(te,{...a},JSON.stringify(a))};var I,E,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "float",
    lockVariant: false,
    showHeaderControls: true,
    dockedResizable: true,
    showFullScreen: false,
    showTitle: true,
    title: "Panel",
    showSubhead: false,
    showIcon: false,
    showTag: false,
    showActions: false,
    showTabs: false,
    showFooter: false,
    footerAlign: "right",
    footerBordered: false,
    footerScrollEffect: "shadow"
  },
  parameters: {
    layout: "fullscreen",
    // Full-viewport demo — render in an iframe on the Docs page so
    // \`h-screen\` has a bounded height to fill.
    docs: {
      story: {
        inline: false,
        iframeHeight: 520
      }
    },
    controls: {
      include: ["variant", "lockVariant", "showHeaderControls", "dockedResizable", "showFullScreen", "showTitle", "title", "Title text", "showSubhead", "showIcon", "showTag", "showActions", "showTabs", "showFooter", "footerAlign", "footerBordered", "footerScrollEffect", "Starts as", "Lock mode", "Header controls", "Docked resize handle", "Full screen button", "Title", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs", "Footer", "Footer alignment", "Footer border", "Footer scroll effect"],
      sort: "none"
    }
  },
  argTypes: {
    variant: {
      name: "Starts as",
      control: "radio",
      options: ["float", "docked"],
      description: "Float is freely draggable. Docked is pinned to the right edge (\`variant\`).",
      table: {
        category: "Behavior"
      }
    },
    lockVariant: {
      name: "Lock mode",
      control: "boolean",
      description: "Removes the dock/undock button so the panel can't change mode (\`lockVariant\`).",
      table: {
        category: "Behavior"
      }
    },
    showHeaderControls: {
      name: "Header controls",
      control: "boolean",
      description: "Puts the grip and dock/undock buttons in the header (\`showHeaderControls\`). In float mode the whole header drags the panel.",
      table: {
        category: "Behavior"
      }
    },
    dockedResizable: {
      name: "Docked resize handle",
      control: "boolean",
      description: "Shows the left-edge resize handle while docked (\`dockedResizable\`).",
      table: {
        category: "Behavior"
      }
    },
    showFullScreen: {
      name: "Full screen button",
      control: "boolean",
      description: "Adds a full-screen button to the header. The panel expands to fill the container with a short fade-and-scale, and an exit button (plus Undock) takes it back.",
      table: {
        category: "Behavior"
      }
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (\`headerTitle\`). Off gives an icon-only or action-only header.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    title: {
      name: "Title text",
      if: {
        arg: "showTitle",
        truthy: true
      },
      control: "text",
      description: "Text in the panel's header.",
      table: {
        category: "Content"
      }
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (\`subhead\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show an icon to the left of the title (\`icon\`). In float mode the drag grip takes this spot.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showTag: {
      name: "Alert tag",
      control: "boolean",
      description: "Show a status tag inline right after the title (\`titleBadge\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show an action button on the right of the header (\`actions\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Show a fixed tab row inside the header (\`tabs\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showFooter: {
      name: "Footer",
      control: "boolean",
      description: "Show a footer with Cancel and Save buttons (\`ContainerFooter\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    footerAlign: {
      name: "Footer alignment",
      control: "radio",
      options: ["left", "right", "full"],
      description: "Where the footer's buttons sit: left, right, or stretched to full width (\`ContainerFooter\` \`align\`).",
      if: {
        arg: "showFooter",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "right"
        }
      }
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Show a border along the top edge of the footer (\`ContainerFooter\` \`bordered\`).",
      if: {
        arg: "footerScrollEffect",
        neq: "fade"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    footerScrollEffect: {
      name: "Footer scroll effect",
      control: "radio",
      options: ["none", "shadow", "fade"],
      labels: {
        none: "None",
        shadow: "Shadow",
        fade: "Fade"
      },
      description: "What shows while content scrolls behind the footer: nothing, a soft shadow above it (\`footerScrollShadow\`), or the content fading out into it (\`footerScrollFade\`). Shadow and fade are alternatives; Fade also hides Footer border.",
      if: {
        arg: "showFooter",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "shadow"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <DraggableDemo key={JSON.stringify(args)} {...args} />
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const rt=["Default"];export{c as Default,rt as __namedExportsOrder,at as default};
