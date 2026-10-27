import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DhMLlvMY.js";import{I as s}from"./interior-panel-Bjg-uYp-.js";import{P as h}from"./page-header-BAlpFSY4.js";import{B as r}from"./button-DxuJ7r2Z.js";import{I as a}from"./input-D4o1YJ5A.js";import{T as ue,a as pe}from"./tabs-CPD8_j1Z.js";import{p as fe,a as me,P as ge}from"./InteriorPanel.shared-zm8t-HEW.js";import{h as be,a as we,D as ye,w as xe,c as ve}from"./Container.shared-4iJXl9OC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./utils-BLSKlp9E.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./container-footer-BSIaMmWX.js";import"./minimize-2-DJw-t-cB.js";import"./maximize-2--TlG5VuC.js";import"./badge-DnlHYDBX.js";import"./index-1evVQkiP.js";import"./breadcrumb-vlQxlIY5.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./container-ipFdrjaG.js";import"./tag-Dcg-2iAh.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const Ot={title:"Custom Primitives/InteriorPanel",component:s,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},x={controls:{disable:!0}};function Se({side:t="right",startOpen:n=!0,resizable:o=!0,width:v=350,showCloseButton:S=!0,limitMinWidth:l=!0,minWidth:d=350,limitMaxWidth:q=!0,maxWidth:_=425,autoFullScreen:U=!0,coverHeader:c=!1,overlayAtBreakpoint:u=!0,breakpoint:G=1440,rounded:J=!1,margin:K=!1,shadow:Q=!1,fullScreenToggle:X=!1,title:Y="Dialog Title",showSubhead:Z=!1,showTitle:$=!0,showDraggable:C=!1,showIcon:ee=!1,showTag:te=!1,showActions:ne=!1,showBack:ae=!1,showTabs:oe=!1,showFooter:re=!1,footerAlign:le="right",footerBordered:ie=!1,footerScrollEffect:B="shadow"}){const[se,N]=i.useState(n),[de,he]=i.useState(!0),p=e.jsxs("div",{className:"flex-1 min-w-0 overflow-hidden bg-lyra-bg-surface-base p-6",children:[e.jsx("h2",{className:"lyra-heading-md text-lyra-fg-default mb-3",children:"Main content"}),Array.from({length:6},(k,ce)=>e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-3",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},ce))]}),T=e.jsx(h,{title:"Page Title",actions:e.jsx(r,{onClick:()=>N(k=>!k),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),f=e.jsx(s,{side:t,open:se,resizable:o,minWidth:l?d:0,width:v,maxWidth:q?Math.max(_,l?d:0):1/0,absoluteBreakpoint:u?G:0,autoFullScreen:U,overlayHeader:c&&u,className:c&&u?"z-[5]":void 0,rounded:J,margin:K,shadow:Q,allowFullScreen:X,headerTitle:$?Y:void 0,headerWithoutTitle:!0,headerClassName:C?ye:void 0,headerSubhead:Z?"Supporting description":void 0,headerIcon:xe(ee?ve:void 0,C),headerTitleBadge:te?we:void 0,headerActions:ne?be:void 0,onBack:ae&&de?()=>he(!1):void 0,headerTabs:oe?e.jsx(ge,{}):void 0,footer:re?fe:void 0,footerAlign:le,footerBordered:ie,footerScrollShadow:B==="shadow",footerScrollFade:B==="fade",onClose:S?()=>N(!1):void 0,children:e.jsx(me,{})});return c&&u?e.jsxs("div",{className:"relative h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[T,p,f]}):c?e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[t==="left"&&f,e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col",children:[T,p]}),t==="right"&&f]}):e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[T,e.jsxs("div",{className:"relative flex flex-1 overflow-hidden bg-lyra-bg-surface-base",children:[t==="right"&&p,f,t==="left"&&p]})]})}const m={name:"Default",parameters:{controls:{include:["Side","Starts open","Resizable","Width (px)","Close button","Min width","Min width (px)","Max width","Max width (px)","Auto full screen at 90%","Cover page header","Overlay breakpoint","Overlay breakpoint (px)","Full screen button","Rounded corners","Margin","Shadow","Title","Title text","Draggable","Subtitle","Icon","Alert tag","Actions","Back button","Tabs","Footer","Footer alignment","Footer border","Footer scroll effect","side","startOpen","resizable","width","showCloseButton","limitMinWidth","minWidth","limitMaxWidth","maxWidth","autoFullScreen","coverHeader","overlayAtBreakpoint","breakpoint","fullScreenToggle","rounded","margin","shadow","showTitle","title","showDraggable","showSubhead","showIcon","showTag","showActions","showBack","showTabs","showFooter","footerAlign","footerBordered","footerScrollEffect"],sort:"none"}},args:{side:"right",startOpen:!0,resizable:!0,width:350,showCloseButton:!0,limitMinWidth:!0,minWidth:350,limitMaxWidth:!0,maxWidth:425,autoFullScreen:!0,coverHeader:!1,overlayAtBreakpoint:!0,breakpoint:1440,fullScreenToggle:!1,rounded:!1,margin:!1,shadow:!1,showTitle:!0,showDraggable:!1,title:"Dialog Title",showSubhead:!1,showIcon:!1,showTag:!1,showActions:!1,showBack:!1,showTabs:!1,showFooter:!1,footerAlign:"right",footerBordered:!1,footerScrollEffect:"shadow"},argTypes:{side:{name:"Side",control:"radio",options:["left","right"],description:"Which edge of the container the panel is docked to.",table:{category:"Behavior",defaultValue:{summary:"right"}}},startOpen:{name:"Starts open",control:"boolean",description:'Whether the panel is open when the story loads. Use "Toggle Panel" to open/close it afterwards.',table:{category:"Behavior",defaultValue:{summary:"true"}}},resizable:{name:"Resizable",control:"boolean",description:"Allow drag-to-resize on the panel's leading edge.",table:{category:"Behavior",defaultValue:{summary:"true"}}},width:{name:"Width (px)",control:{type:"number",min:0,step:10},description:"Width the panel opens at, in pixels (`width`). Default is the panel's own 350.",table:{category:"Behavior",defaultValue:{summary:"350"}}},showCloseButton:{name:"Close button",control:"boolean",description:"Show the close (×) button at the far right of the header (`onClose`). Clicking it closes the panel.",table:{category:"Behavior",defaultValue:{summary:"true"}}},limitMinWidth:{name:"Min width",control:"boolean",description:"On: the panel can't be dragged narrower than the width set next. Off: no minimum while resizing (it still opens at 350px).",if:{arg:"resizable",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"true"}}},minWidth:{name:"Min width (px)",control:{type:"number",min:350,step:5},description:"Narrowest the panel can be, and the width it opens at, in pixels (`minWidth`). Default is the panel's own 350, which is also the lowest allowed here.",if:{arg:"limitMinWidth",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"350"}}},limitMaxWidth:{name:"Max width",control:"boolean",description:"On: the panel can't be dragged wider than the width set next. Off: no maximum while resizing.",if:{arg:"resizable",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"true"}}},maxWidth:{name:"Max width (px)",control:{type:"number",min:350,step:5},description:"Widest the panel can be dragged, in pixels (`maxWidth`). Default is the panel's own 425; enter a larger value to allow a wider panel.",if:{arg:"limitMaxWidth",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"425"}}},autoFullScreen:{name:"Auto full screen at 90%",control:"boolean",description:"When the panel reaches 90% of its container (dragging it wider, or the container shrinking), it jumps to full screen, and the header shows an exit button (`autoFullScreen`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},coverHeader:{name:"Cover page header",control:"boolean",description:'On: the panel runs the full height of the container, over the page header (`overlayHeader`) — the setup agent-next-gen-v3 uses. With "Overlay breakpoint" off, it instead sits beside the header and content and pushes both.',table:{category:"Behavior",defaultValue:{summary:"false"}}},overlayAtBreakpoint:{name:"Overlay breakpoint",control:"boolean",description:"On: the panel floats over the content when its container gets narrow (below the width set next). Off: it never switches to the overlay and always sits beside the content. With Cover page header on, turning this off docks the panel beside the header and content so it pushes both.",table:{category:"Behavior",defaultValue:{summary:"true"}}},breakpoint:{name:"Overlay breakpoint (px)",control:{type:"number",min:0,step:10},description:"Container width below which the panel floats over the content instead of squeezing it (`absoluteBreakpoint`). Default is the panel's own 1440; enter any pixel value. Raise it to see the overlay layout sooner. Ignored while Cover page header is on, which always overlays (unless Overlay breakpoint is off).",if:{arg:"overlayAtBreakpoint",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"1440"}}},fullScreenToggle:{name:"Full screen button",control:"boolean",description:"Add a header button that expands the panel to the full width of its container (`allowFullScreen`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",table:{category:"Content",defaultValue:{summary:"true"}}},title:{name:"Title text",if:{arg:"showTitle",truthy:!0},control:"text",description:"Header title text (`headerTitle`).",table:{category:"Content"}},showDraggable:{name:"Draggable",control:"boolean",description:"Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",table:{category:"Content",defaultValue:{summary:"false"}}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",table:{category:"Content",defaultValue:{summary:"false"}}},showTag:{name:"Alert tag",control:"boolean",description:"Show a status tag inline right after the title (`headerTitleBadge`).",table:{category:"Content",defaultValue:{summary:"false"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",table:{category:"Content",defaultValue:{summary:"false"}}},showBack:{name:"Back button",control:"boolean",description:"Show a back arrow before the title (`onBack`). Click it to hide it, as when leaving a sub-view.",table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a fixed tab row inside the header (`headerTabs`).",table:{category:"Content",defaultValue:{summary:"false"}}},showFooter:{name:"Footer",control:"boolean",description:"Show a footer with Cancel and Save buttons (`footer`).",table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer alignment",control:"radio",options:["left","right","full"],description:"Where the footer's buttons sit: left, right, or stretched to full width (`footerAlign`).",if:{arg:"showFooter",truthy:!0},table:{category:"Content",defaultValue:{summary:"right"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`footerBordered`).",if:{arg:"footerScrollEffect",neq:"fade"},table:{category:"Appearance",defaultValue:{summary:"false"}}},footerScrollEffect:{name:"Footer scroll effect",control:"radio",options:["none","shadow","fade"],labels:{none:"None",shadow:"Shadow",fade:"Fade"},description:"What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",if:{arg:"showFooter",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"shadow"}}},rounded:{name:"Rounded corners",control:"boolean",description:"Round the panel's corners by 12px (`rounded`). With Margin on, all four corners round in any layout. Without it, only the inner corners (left when docked right, right when docked left) and only when the panel overlays the content (narrow container or Cover page header); a docked panel stays square.",table:{category:"Appearance",defaultValue:{summary:"false"}}},margin:{name:"Margin",control:"boolean",description:"Inset the panel 12px from every edge of its container, as a floating card (`margin`). Not applied while closed or full screen.",table:{category:"Appearance",defaultValue:{summary:"false"}}},shadow:{name:"Shadow",control:"boolean",description:"Drop shadow under the floating panel (`shadow`). Only applies together with Margin.",if:{arg:"margin",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:t=>e.jsx(Se,{...t},JSON.stringify(t))},g={name:"Interior Panel — Right",parameters:x,render:()=>{const[t,n]=i.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(h,{title:"Page Title",actions:e.jsx(r,{onClick:()=>n(o=>!o),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(s,{side:"right",open:t,headerTitle:"Dialog Title",onClose:()=>n(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Save"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(a,{label:"Name",placeholder:"Enter name"}),e.jsx(a,{label:"Description",placeholder:"Enter description"}),e.jsx(a,{label:"Value",placeholder:"Enter value"})]})})]})]})}},b={name:"Interior Panel — With Full Screen Toggle",parameters:x,render:()=>{const[t,n]=i.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(h,{title:"Page Title",actions:e.jsx(r,{onClick:()=>n(o=>!o),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(s,{side:"right",open:t,headerTitle:"Wide Report",headerSubhead:"Click the full-screen icon in the header to expand",allowFullScreen:!0,onClose:()=>n(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(a,{label:"Name",placeholder:"Enter name"}),e.jsx(a,{label:"Description",placeholder:"Enter description"}),e.jsx(a,{label:"Value",placeholder:"Enter value"})]})})]})]})}},w={name:"Interior Panel — With Tabs",parameters:x,render:()=>{const[t,n]=i.useState(!0),[o,v]=i.useState(0),S=["Overview","Detail","History"];return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(h,{title:"Page Title",actions:e.jsx(r,{onClick:()=>n(l=>!l),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"}),e.jsx(s,{side:"right",open:t,headerTitle:"Customer Information",headerSubhead:"Noah Bennett · CST-10296",headerTabs:e.jsx(ue,{className:"px-4",children:S.map((l,d)=>e.jsx(pe,{active:o===d,onClick:()=>v(d),children:l},l))}),onClose:()=>n(!1),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(a,{label:"Name",placeholder:"Enter name"}),e.jsx(a,{label:"Description",placeholder:"Enter description"}),e.jsx(a,{label:"Value",placeholder:"Enter value"})]})})]})]})}},y={name:"Interior Panel — Left",parameters:x,render:()=>{const[t,n]=i.useState(!0);return e.jsxs("div",{className:"h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(h,{title:"Page Title",actions:e.jsx(r,{onClick:()=>n(o=>!o),children:"Toggle Panel"}),className:"bg-lyra-bg-surface-base"}),e.jsxs("div",{className:"relative flex flex-1 overflow-hidden",children:[e.jsx(s,{side:"left",open:t,headerTitle:"Filters",onClose:()=>n(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Reset"}),e.jsx(r,{children:"Apply"})]}),children:e.jsxs("div",{className:"flex flex-col gap-4 px-4 py-4",children:[e.jsx(a,{label:"Search",placeholder:"Filter by name..."}),e.jsx(a,{label:"Category",placeholder:"Select category..."})]})}),e.jsx("div",{className:"flex-1 bg-lyra-bg-surface-base"})]})]})}};var O,W,j;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\`
      // is set, so both the labels and the prop keys are listed.
      include: ["Side", "Starts open", "Resizable", "Width (px)", "Close button", "Min width", "Min width (px)", "Max width", "Max width (px)", "Auto full screen at 90%", "Cover page header", "Overlay breakpoint", "Overlay breakpoint (px)", "Full screen button", "Rounded corners", "Margin", "Shadow", "Title", "Title text", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Back button", "Tabs", "Footer", "Footer alignment", "Footer border", "Footer scroll effect", "side", "startOpen", "resizable", "width", "showCloseButton", "limitMinWidth", "minWidth", "limitMaxWidth", "maxWidth", "autoFullScreen", "coverHeader", "overlayAtBreakpoint", "breakpoint", "fullScreenToggle", "rounded", "margin", "shadow", "showTitle", "title", "showDraggable", "showSubhead", "showIcon", "showTag", "showActions", "showBack", "showTabs", "showFooter", "footerAlign", "footerBordered", "footerScrollEffect"],
      sort: "none"
    }
  },
  args: {
    side: "right",
    startOpen: true,
    resizable: true,
    width: 350,
    showCloseButton: true,
    limitMinWidth: true,
    minWidth: 350,
    limitMaxWidth: true,
    maxWidth: 425,
    autoFullScreen: true,
    coverHeader: false,
    overlayAtBreakpoint: true,
    breakpoint: 1440,
    fullScreenToggle: false,
    rounded: false,
    margin: false,
    shadow: false,
    showTitle: true,
    showDraggable: false,
    title: "Dialog Title",
    showSubhead: false,
    showIcon: false,
    showTag: false,
    showActions: false,
    showBack: false,
    showTabs: false,
    showFooter: false,
    footerAlign: "right",
    footerBordered: false,
    footerScrollEffect: "shadow"
  },
  argTypes: {
    side: {
      name: "Side",
      control: "radio",
      options: ["left", "right"],
      description: "Which edge of the container the panel is docked to.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "right"
        }
      }
    },
    startOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the panel is open when the story loads. Use \\"Toggle Panel\\" to open/close it afterwards.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    resizable: {
      name: "Resizable",
      control: "boolean",
      description: "Allow drag-to-resize on the panel's leading edge.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    width: {
      name: "Width (px)",
      control: {
        type: "number",
        min: 0,
        step: 10
      },
      description: "Width the panel opens at, in pixels (\`width\`). Default is the panel's own 350.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "350"
        }
      }
    },
    showCloseButton: {
      name: "Close button",
      control: "boolean",
      description: "Show the close (×) button at the far right of the header (\`onClose\`). Clicking it closes the panel.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    limitMinWidth: {
      name: "Min width",
      control: "boolean",
      description: "On: the panel can't be dragged narrower than the width set next. Off: no minimum while resizing (it still opens at 350px).",
      if: {
        arg: "resizable",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    minWidth: {
      name: "Min width (px)",
      control: {
        type: "number",
        min: 350,
        step: 5
      },
      description: "Narrowest the panel can be, and the width it opens at, in pixels (\`minWidth\`). Default is the panel's own 350, which is also the lowest allowed here.",
      if: {
        arg: "limitMinWidth",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "350"
        }
      }
    },
    limitMaxWidth: {
      name: "Max width",
      control: "boolean",
      description: "On: the panel can't be dragged wider than the width set next. Off: no maximum while resizing.",
      if: {
        arg: "resizable",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    maxWidth: {
      name: "Max width (px)",
      control: {
        type: "number",
        min: 350,
        step: 5
      },
      description: "Widest the panel can be dragged, in pixels (\`maxWidth\`). Default is the panel's own 425; enter a larger value to allow a wider panel.",
      if: {
        arg: "limitMaxWidth",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "425"
        }
      }
    },
    autoFullScreen: {
      name: "Auto full screen at 90%",
      control: "boolean",
      description: "When the panel reaches 90% of its container (dragging it wider, or the container shrinking), it jumps to full screen, and the header shows an exit button (\`autoFullScreen\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    coverHeader: {
      name: "Cover page header",
      control: "boolean",
      description: "On: the panel runs the full height of the container, over the page header (\`overlayHeader\`) — the setup agent-next-gen-v3 uses. With \\"Overlay breakpoint\\" off, it instead sits beside the header and content and pushes both.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    overlayAtBreakpoint: {
      name: "Overlay breakpoint",
      control: "boolean",
      description: "On: the panel floats over the content when its container gets narrow (below the width set next). Off: it never switches to the overlay and always sits beside the content. With Cover page header on, turning this off docks the panel beside the header and content so it pushes both.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    breakpoint: {
      name: "Overlay breakpoint (px)",
      control: {
        type: "number",
        min: 0,
        step: 10
      },
      description: "Container width below which the panel floats over the content instead of squeezing it (\`absoluteBreakpoint\`). Default is the panel's own 1440; enter any pixel value. Raise it to see the overlay layout sooner. Ignored while Cover page header is on, which always overlays (unless Overlay breakpoint is off).",
      if: {
        arg: "overlayAtBreakpoint",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "1440"
        }
      }
    },
    fullScreenToggle: {
      name: "Full screen button",
      control: "boolean",
      description: "Add a header button that expands the panel to the full width of its container (\`allowFullScreen\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
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
      description: "Header title text (\`headerTitle\`).",
      table: {
        category: "Content"
      }
    },
    showDraggable: {
      name: "Draggable",
      control: "boolean",
      description: "Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (\`headerSubhead\`).",
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
      description: "Show an icon to the left of the title (\`headerIcon\`).",
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
      description: "Show a status tag inline right after the title (\`headerTitleBadge\`).",
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
      description: "Show an action button on the right of the header (\`headerActions\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showBack: {
      name: "Back button",
      control: "boolean",
      description: "Show a back arrow before the title (\`onBack\`). Click it to hide it, as when leaving a sub-view.",
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
      description: "Show a fixed tab row inside the header (\`headerTabs\`).",
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
      description: "Show a footer with Cancel and Save buttons (\`footer\`).",
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
      description: "Where the footer's buttons sit: left, right, or stretched to full width (\`footerAlign\`).",
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
      description: "Show a border along the top edge of the footer (\`footerBordered\`).",
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
    },
    rounded: {
      name: "Rounded corners",
      control: "boolean",
      description: "Round the panel's corners by 12px (\`rounded\`). With Margin on, all four corners round in any layout. Without it, only the inner corners (left when docked right, right when docked left) and only when the panel overlays the content (narrow container or Cover page header); a docked panel stays square.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    margin: {
      name: "Margin",
      control: "boolean",
      description: "Inset the panel 12px from every edge of its container, as a floating card (\`margin\`). Not applied while closed or full screen.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    shadow: {
      name: "Shadow",
      control: "boolean",
      description: "Drop shadow under the floating panel (\`shadow\`). Only applies together with Margin.",
      if: {
        arg: "margin",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <InteriorPanelDemo key={JSON.stringify(args)} {...args} />
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var F,V,I;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Interior Panel — Right",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters: \`InteriorPanel\` switches to \`position:
            absolute; top: 0; height: 100%\` below 1440px of THIS row's own
            width (see interior-panel.tsx's \`isNarrow\` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Dialog Title" onClose={() => setOpen(false)} footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(I=(V=g.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var A,P,D;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Interior Panel — With Full Screen Toggle",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters — see the Right story's own doc comment
            on this same div for why. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Wide Report" headerSubhead="Click the full-screen icon in the header to expand" allowFullScreen onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(D=(P=b.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var M,E,R;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Interior Panel — With Tabs",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Overview", "Detail", "History"];
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters — see the Right/Left stories' own doc
            comment on this same div for why. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel side="right" open={open} headerTitle="Customer Information" headerSubhead="Noah Bennett · CST-10296" headerTabs={<TabList className="px-4">
                {tabs.map((label, i) => <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                    {label}
                  </Tab>)}
              </TabList>} onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>;
  }
}`,...(R=(E=w.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var z,H,L;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Interior Panel — Left",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader title="Page Title" actions={<Button onClick={() => setOpen(v => !v)}>Toggle Panel</Button>} className="bg-lyra-bg-surface-base" />
        {/* \`relative\` here matters: \`InteriorPanel\` switches to \`position:
            absolute; top: 0; height: 100%\` below 1440px of THIS row's own
            width (see interior-panel.tsx's \`isNarrow\` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <InteriorPanel side="left" open={open} headerTitle="Filters" onClose={() => setOpen(false)} footer={<><Button variant="outline">Reset</Button><Button>Apply</Button></>}>
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Search" placeholder="Filter by name..." />
              <Input label="Category" placeholder="Select category..." />
            </div>
          </InteriorPanel>
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>;
  }
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const Wt=["Default","Right","WithFullScreen","WithTabs","Left"];export{m as Default,y as Left,g as Right,b as WithFullScreen,w as WithTabs,Wt as __namedExportsOrder,Ot as default};
