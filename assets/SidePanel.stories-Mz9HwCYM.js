import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DhMLlvMY.js";import{S as m}from"./side-panel-Bi455hz9.js";import{B as T}from"./button-DGWscpRe.js";import{a as be,P as ye}from"./InteriorPanel.shared-p8RQa4cd.js";import{h as we,a as ve,D as xe,w as Se,c as Pe}from"./Container.shared-B0A6FWHY.js";import{s as Be,M as Oe}from"./SidePanel.shared-D2dRa44_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-footer-BSIaMmWX.js";import"./utils-BLSKlp9E.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./use-panel-drag-resize-nDX-ge6k.js";import"./maximize-2--TlG5VuC.js";import"./minimize-2-DJw-t-cB.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./input-CpMudak3.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./tabs-sC7PiW5A.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./container-CuG4Jt_a.js";import"./tag-CePNn257.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const Fn={title:"Custom Primitives/SidePanel",component:m,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function Ce({children:t,className:r="absolute left-0 top-full z-10 mt-1",style:a,...i}){const[o,g]=n.useState(!1);return n.useEffect(()=>{const b=requestAnimationFrame(()=>g(!0));return()=>cancelAnimationFrame(b)},[]),e.jsx("div",{className:r,...i,style:{...a,opacity:o?1:0,transform:o?"translateY(0) scale(1)":"translateY(-6px) scale(0.98)",transformOrigin:"top left",transition:"opacity 160ms ease-out, transform 160ms ease-out"},children:t})}function Te({side:t="right",startOpen:r=!0,startPinned:a=!0,showPinButton:i=!0,showCloseButton:o=!1,resizable:g=!0,width:b=256,limitMinWidth:K=!0,minWidth:Q=200,limitMaxWidth:X=!0,maxWidth:Z=425,autoFullScreen:$=!0,overlayAtBreakpoint:ee=!1,breakpoint:ne=768,hoverPreview:l=!1,hoverPopover:u=!1,title:te="Details",showSubhead:oe=!1,showTitle:ae=!0,showDraggable:W=!1,showIcon:re=!1,showTag:ie=!1,showActions:le=!1,showTabs:se=!1,showFooter:de=!1,footerAlign:he="right",footerBordered:ue=!1,footerScrollEffect:F="shadow"}){const[h,y]=n.useState(r),[w,V]=n.useState(a),[k,v]=n.useState(!1),A=n.useRef(void 0),x=()=>{clearTimeout(A.current),v(!0)},S=()=>{A.current=setTimeout(()=>v(!1),150)},M=n.useRef(void 0),N=n.useRef(!1),ce=()=>{clearTimeout(M.current),l&&!u&&x()},pe=()=>{l&&!u&&S(),!w&&h&&(M.current=setTimeout(()=>{N.current||y(!1)},200))},D=K?Q:0,P=l&&u,B=n.useRef(null),O=n.useRef(null),j=(s={})=>e.jsx(m,{side:t,open:h,pinned:w,preview:l&&!u&&k,onMouseEnter:ce,onMouseLeave:pe,onResizeStateChange:d=>{N.current=d},onPinToggle:i?()=>V(d=>!d):void 0,showCloseButton:o,onClose:()=>y(!1),resizable:g,width:b,minWidth:D,maxWidth:X?Math.max(Z,D):1/0,autoFullScreen:$,absoluteBreakpoint:ee?ne:void 0,headerTitle:ae?te:void 0,headerWithoutTitle:!0,headerClassName:W?xe:void 0,headerSubhead:oe?"Supporting description":void 0,headerIcon:Se(re?Pe:void 0,W),headerTitleBadge:ie?ve:void 0,headerActions:le?we:void 0,headerTabs:se?e.jsx(ye,{}):void 0,footer:de?Be:void 0,footerAlign:he,footerBordered:ue,footerScrollShadow:F==="shadow",footerScrollFade:F==="fade",...s,children:e.jsx(be,{})}),R=j(),fe=e.jsxs(Oe,{children:[e.jsx("div",{ref:O,className:"relative self-start",onMouseEnter:l?x:void 0,onMouseLeave:l?S:void 0,children:e.jsx(T,{onClick:()=>{P&&!h&&V(!0),y(s=>!s),v(!1)},variant:"outline",children:h?"Close Panel":"Open Panel"})}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:w?"Pinned — pushes content":"Unpinned — hovers as overlay"})]}),[C,me]=n.useState(!1);let E={left:0,top:0};if(P&&B.current&&O.current){const s=B.current.getBoundingClientRect(),d=O.current.getBoundingClientRect();E={left:d.left-s.left,top:d.bottom-s.top+4}}const ge=P&&!h&&(k||C)?e.jsx(Ce,{className:"absolute z-10",style:C?{inset:0}:E,onMouseEnter:x,onMouseLeave:S,children:j({open:!0,pinned:!1,resizable:!1,autoFullScreen:!1,allowFullScreen:!0,onFullScreenChange:me,onPinToggle:void 0,className:C?"rounded-none":"static h-[360px] rounded-lyra-lg border border-lyra-border-subtle shadow-lg",onMouseEnter:void 0,onMouseLeave:void 0})}):null;return e.jsxs("div",{ref:B,className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[t==="left"&&R,fe,t==="right"&&R,ge]})}const We={if:{arg:"showFooter",truthy:!0}},c={name:"Default",parameters:{controls:{include:["Side","Starts open","Pinned","Pin / unpin button","Close button","Resizable","Width (px)","Min width","Min width (px)","Max width","Max width (px)","Auto full screen at 90%","Overlay breakpoint","Overlay breakpoint (px)","Hover preview","Show as popover","Title","Title text","Draggable","Subtitle","Icon","Alert tag","Actions","Tabs","Footer","Footer alignment","Footer border","Footer scroll effect","side","startOpen","startPinned","showPinButton","showCloseButton","resizable","width","limitMinWidth","minWidth","limitMaxWidth","maxWidth","autoFullScreen","overlayAtBreakpoint","breakpoint","hoverPreview","hoverPopover","showTitle","title","showDraggable","showSubhead","showIcon","showTag","showActions","showTabs","showFooter","footerAlign","footerBordered","footerScrollEffect"],sort:"none"}},args:{side:"right",startOpen:!0,startPinned:!0,showPinButton:!0,showCloseButton:!1,resizable:!0,width:256,limitMinWidth:!0,minWidth:200,limitMaxWidth:!0,maxWidth:425,autoFullScreen:!0,overlayAtBreakpoint:!1,breakpoint:768,hoverPreview:!1,hoverPopover:!1,showTitle:!0,showDraggable:!1,title:"Details",showSubhead:!1,showIcon:!1,showTag:!1,showActions:!1,showTabs:!1,showFooter:!1,footerAlign:"right",footerBordered:!1,footerScrollEffect:"shadow"},argTypes:{side:{name:"Side",control:"radio",options:["left","right"],description:"Which edge of the layout the panel is docked to.",table:{category:"Behavior",defaultValue:{summary:"right"}}},startOpen:{name:"Starts open",control:"boolean",description:'Whether the panel is open when the story loads. Use "Close Panel" / "Open Panel" to toggle it afterwards.',table:{category:"Behavior",defaultValue:{summary:"true"}}},startPinned:{name:"Pinned",control:"boolean",description:"On: the panel sits inline and pushes the content. Off: it floats over the content as a hover overlay (`pinned`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},showPinButton:{name:"Pin / unpin button",control:"boolean",description:"On: the header shows a pin/unpin button (`onPinToggle`) that switches between pinned and overlay. Off: no pin option is shown.",table:{category:"Behavior",defaultValue:{summary:"true"}}},showCloseButton:{name:"Close button",control:"boolean",description:"Show a close button at the far right of the header (`showCloseButton`, `onClose`). Clicking it closes the panel.",table:{category:"Behavior",defaultValue:{summary:"false"}}},resizable:{name:"Resizable",control:"boolean",description:"Allow drag-to-resize on the panel's inner edge.",table:{category:"Behavior",defaultValue:{summary:"true"}}},width:{name:"Width (px)",control:{type:"number",min:0,step:5},description:"Width the panel opens at, in pixels (`width`). Default is the panel's own 256.",table:{category:"Behavior",defaultValue:{summary:"256"}}},limitMinWidth:{name:"Min width",control:"boolean",description:"On: the panel can't be dragged narrower than the width set next. Off: no minimum while resizing.",if:{arg:"resizable",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"true"}}},minWidth:{name:"Min width (px)",control:{type:"number",min:200,step:5},description:"Narrowest the panel can be dragged, in pixels (`minWidth`). Default is the panel's own 200, which is also the lowest allowed here.",if:{arg:"limitMinWidth",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"200"}}},limitMaxWidth:{name:"Max width",control:"boolean",description:"On: the panel can't be dragged wider than the width set next. Off: no maximum while resizing.",if:{arg:"resizable",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"true"}}},maxWidth:{name:"Max width (px)",control:{type:"number",min:200,step:5},description:"Widest the panel can be dragged, in pixels (`maxWidth`). Default is the panel's own 425; enter a larger value to allow a wider panel.",if:{arg:"limitMaxWidth",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"425"}}},autoFullScreen:{name:"Auto full screen at 90%",control:"boolean",description:"When the panel reaches 90% of its container (dragging it wider, or the container shrinking), it jumps to full screen, and the header shows an exit button (`autoFullScreen`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},overlayAtBreakpoint:{name:"Overlay breakpoint",control:"boolean",description:"On: a pinned panel floats over the content (instead of pushing it) once its container gets narrower than the breakpoint (`absoluteBreakpoint`). Off: pinned always pushes.",table:{category:"Behavior",defaultValue:{summary:"false"}}},breakpoint:{name:"Overlay breakpoint (px)",control:{type:"number",min:0,step:10},description:"Container width below which a pinned panel becomes an overlay (`absoluteBreakpoint`). Defaults to 768, the width agent-next-gen-v3's Contact Details panel uses. Enter any pixel value; raise it to see the overlay sooner.",if:{arg:"overlayAtBreakpoint",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"768"}}},hoverPreview:{name:"Hover preview",control:"boolean",description:'When the panel is pinned and closed, hovering the "Open Panel" button slides it in as an overlay without pushing the content (`preview`).',table:{category:"Behavior",defaultValue:{summary:"false"}}},hoverPopover:{name:"Show as popover",control:"boolean",description:"Show the hover preview as a popover beneath the hovered button instead of sliding in from the side. Clicking the button pins the panel open; closing it brings the hover popover back.",if:{arg:"hoverPreview",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"false"}}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",table:{category:"Content",defaultValue:{summary:"true"}}},title:{name:"Title text",if:{arg:"showTitle",truthy:!0},control:"text",description:"Header title text (`headerTitle`).",table:{category:"Content"}},showDraggable:{name:"Draggable",control:"boolean",description:"Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",table:{category:"Content",defaultValue:{summary:"false"}}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",table:{category:"Content",defaultValue:{summary:"false"}}},showTag:{name:"Alert tag",control:"boolean",description:"Show a status tag inline right after the title (`headerTitleBadge`).",table:{category:"Content",defaultValue:{summary:"false"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a fixed tab row inside the header (`headerTabs`).",table:{category:"Content",defaultValue:{summary:"false"}}},showFooter:{name:"Footer",control:"boolean",description:"Show a footer with Cancel and Save buttons (`footer`).",table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer alignment",control:"radio",options:["left","right","full"],description:"Where the footer's buttons sit: left, right, or stretched to full width (`ContainerFooter` `align`).",...We,table:{category:"Content",defaultValue:{summary:"right"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`ContainerFooter` `bordered`).",if:{arg:"footerScrollEffect",neq:"fade"},table:{category:"Appearance",defaultValue:{summary:"false"}}},footerScrollEffect:{name:"Footer scroll effect",control:"radio",options:["none","shadow","fade"],labels:{none:"None",shadow:"Shadow",fade:"Fade"},description:"What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",if:{arg:"showFooter",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"shadow"}}}},render:t=>e.jsx(Te,{...t},JSON.stringify(t))},Y={controls:{disable:!0}},p={name:"Side Panel — Left",parameters:Y,render:()=>{const[t,r]=n.useState(!0),[a,i]=n.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(m,{side:"left",open:t,pinned:a,headerTitle:"Designer",onPinToggle:()=>i(o=>!o),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Side panel content."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(T,{onClick:()=>r(o=>!o),variant:"outline",children:t?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:a?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},f={name:"Side Panel — Right",parameters:Y,render:()=>{const[t,r]=n.useState(!0),[a,i]=n.useState(!1);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(T,{onClick:()=>r(o=>!o),variant:"outline",children:t?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:a?"Pinned":"Overlay"})]}),e.jsx(m,{side:"right",open:t,pinned:a,headerTitle:"Details",onPinToggle:()=>i(o=>!o),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Right side panel content."})})})]})}};var z,I,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\`
      // is set, so both the labels and the prop keys are listed.
      include: ["Side", "Starts open", "Pinned", "Pin / unpin button", "Close button", "Resizable", "Width (px)", "Min width", "Min width (px)", "Max width", "Max width (px)", "Auto full screen at 90%", "Overlay breakpoint", "Overlay breakpoint (px)", "Hover preview", "Show as popover", "Title", "Title text", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs", "Footer", "Footer alignment", "Footer border", "Footer scroll effect", "side", "startOpen", "startPinned", "showPinButton", "showCloseButton", "resizable", "width", "limitMinWidth", "minWidth", "limitMaxWidth", "maxWidth", "autoFullScreen", "overlayAtBreakpoint", "breakpoint", "hoverPreview", "hoverPopover", "showTitle", "title", "showDraggable", "showSubhead", "showIcon", "showTag", "showActions", "showTabs", "showFooter", "footerAlign", "footerBordered", "footerScrollEffect"],
      sort: "none"
    }
  },
  args: {
    side: "right",
    startOpen: true,
    startPinned: true,
    showPinButton: true,
    showCloseButton: false,
    resizable: true,
    width: 256,
    limitMinWidth: true,
    minWidth: 200,
    limitMaxWidth: true,
    maxWidth: 425,
    autoFullScreen: true,
    overlayAtBreakpoint: false,
    breakpoint: 768,
    hoverPreview: false,
    hoverPopover: false,
    showTitle: true,
    showDraggable: false,
    title: "Details",
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
  argTypes: {
    side: {
      name: "Side",
      control: "radio",
      options: ["left", "right"],
      description: "Which edge of the layout the panel is docked to.",
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
      description: "Whether the panel is open when the story loads. Use \\"Close Panel\\" / \\"Open Panel\\" to toggle it afterwards.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    startPinned: {
      name: "Pinned",
      control: "boolean",
      description: "On: the panel sits inline and pushes the content. Off: it floats over the content as a hover overlay (\`pinned\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showPinButton: {
      name: "Pin / unpin button",
      control: "boolean",
      description: "On: the header shows a pin/unpin button (\`onPinToggle\`) that switches between pinned and overlay. Off: no pin option is shown.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showCloseButton: {
      name: "Close button",
      control: "boolean",
      description: "Show a close button at the far right of the header (\`showCloseButton\`, \`onClose\`). Clicking it closes the panel.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    resizable: {
      name: "Resizable",
      control: "boolean",
      description: "Allow drag-to-resize on the panel's inner edge.",
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
        step: 5
      },
      description: "Width the panel opens at, in pixels (\`width\`). Default is the panel's own 256.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "256"
        }
      }
    },
    limitMinWidth: {
      name: "Min width",
      control: "boolean",
      description: "On: the panel can't be dragged narrower than the width set next. Off: no minimum while resizing.",
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
        min: 200,
        step: 5
      },
      description: "Narrowest the panel can be dragged, in pixels (\`minWidth\`). Default is the panel's own 200, which is also the lowest allowed here.",
      if: {
        arg: "limitMinWidth",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "200"
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
        min: 200,
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
    overlayAtBreakpoint: {
      name: "Overlay breakpoint",
      control: "boolean",
      description: "On: a pinned panel floats over the content (instead of pushing it) once its container gets narrower than the breakpoint (\`absoluteBreakpoint\`). Off: pinned always pushes.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
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
      description: "Container width below which a pinned panel becomes an overlay (\`absoluteBreakpoint\`). Defaults to 768, the width agent-next-gen-v3's Contact Details panel uses. Enter any pixel value; raise it to see the overlay sooner.",
      if: {
        arg: "overlayAtBreakpoint",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "768"
        }
      }
    },
    hoverPreview: {
      name: "Hover preview",
      control: "boolean",
      description: "When the panel is pinned and closed, hovering the \\"Open Panel\\" button slides it in as an overlay without pushing the content (\`preview\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    hoverPopover: {
      name: "Show as popover",
      control: "boolean",
      description: "Show the hover preview as a popover beneath the hovered button instead of sliding in from the side. Clicking the button pins the panel open; closing it brings the hover popover back.",
      if: {
        arg: "hoverPreview",
        truthy: true
      },
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
      description: "Where the footer's buttons sit: left, right, or stretched to full width (\`ContainerFooter\` \`align\`).",
      ...SHOW_WHEN_FOOTER,
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
  <SidePanelDemo key={JSON.stringify(args)} {...args} />
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var H,_,U;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Side Panel — Left",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <SidePanel side="left" open={open} pinned={pinned} headerTitle="Designer" onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Side panel content.</p>
          </div>
        </SidePanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>;
  }
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var q,G,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Side Panel — Right",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned" : "Overlay"}
          </p>
        </div>
        <SidePanel side="right" open={open} pinned={pinned} headerTitle="Details" onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Right side panel content.</p>
          </div>
        </SidePanel>
      </div>;
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Vn=["Default","Left","Right"];export{c as Default,p as Left,f as Right,Vn as __namedExportsOrder,Fn as default};
