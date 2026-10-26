import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DhMLlvMY.js";import{T as W}from"./tooltip-E_6y_wR5.js";import{a as P,c as q,h as R}from"./Container.shared-4iJXl9OC.js";import{M as p}from"./modal-DEMcnn-D.js";import{B as J}from"./button-DxuJ7r2Z.js";import{c as h}from"./utils-BLSKlp9E.js";import{t as _,T as G,w as K,a as Q,C as U}from"./Modal.shared-D8YouIoI.js";import{M as X}from"./minimize-2-DJw-t-cB.js";import{M as Y}from"./maximize-2--TlG5VuC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./container-ipFdrjaG.js";import"./index-1evVQkiP.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./badge-DnlHYDBX.js";import"./tag-Dcg-2iAh.js";import"./tabs-CPD8_j1Z.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";import"./overlay-CAl4KWqN.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./input-D4o1YJ5A.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./select-D9dW4MIp.js";import"./index-pcZVUfq6.js";import"./popover-6UELhi_J.js";import"./index-DjOBIGyd.js";import"./checkbox-KP4UZ6Eo.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./radio-BHoD6kFR.js";import"./error-icon-BKl2xMq_.js";import"./info-icon-CVWl96lq.js";const uo={title:"Custom Primitives/Modal",component:p,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function Z({size:t="md",tone:r="standard",fullscreen:l=!1,fullscreenToggle:b=!1,draggable:y=!1,title:w="",showSubhead:k=!1,showTitle:T=!0,showIcon:v=!0,showTag:B=!1,showActions:C=!1,showCloseButton:A=!0,headerBordered:S=!1,footerAlign:x="right",footerBordered:V=!1,backdrop:F="dark",closeOnBackdropClick:H=!1,alert:D=!1,preventClose:s=!1}){const[I,n]=d.useState(!1),[O,i]=d.useState(!1),c=()=>{s?i(!0):n(!1)},[o,u]=d.useState(l),z=l&&b,{title:E,icon:j}=_[r],M=w||E,N=v?j??q:void 0;return e.jsxs(e.Fragment,{children:[e.jsx(J,{onClick:()=>{i(!1),u(l),n(!0)},children:"Open modal"}),e.jsx(p,{open:I,onClose:()=>n(!1),alert:D,preventClose:s,draggable:y&&!o,onCloseAttempt:()=>i(!0),variant:F,closeOnBackdropClick:H||s,headerTitle:T?M:void 0,headerIcon:N,headerSubhead:k?"Supporting text under the title":void 0,headerTitleBadge:B?P:void 0,headerBordered:S,headerActions:e.jsxs("div",{className:"flex items-center gap-1",children:[z&&e.jsx(W,{content:o?"Exit full screen":"Full screen",placement:"bottom",asLabel:!0,children:e.jsx("button",{type:"button","aria-label":o?"Exit full screen":"Full screen","aria-pressed":o,onClick:()=>u(L=>!L),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:o?e.jsx(X,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(Y,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}),C&&R,A&&e.jsx(U,{onClick:c})]}),footerActions:Q(r,c),footerAlign:x,footerBordered:V,className:h("transition-[width,height,border-radius] duration-300 ease-in-out [interpolate-size:allow-keywords]",o?"w-screen h-screen rounded-none":h(K[t],"h-auto")),children:e.jsx(G,{tone:r,note:O?e.jsxs("p",{role:"status",className:"lyra-body-sm text-lyra-status-critical-strong",children:["Close blocked: you have unsaved changes."," ",e.jsx("button",{type:"button",className:"underline",onClick:()=>n(!1),children:"Discard and close"})]}):void 0})})]})}const a={args:{size:"md",tone:"standard",fullscreen:!1,fullscreenToggle:!1,draggable:!1,showTitle:!0,title:"",showSubhead:!1,showIcon:!0,showTag:!1,showActions:!1,showCloseButton:!0,headerBordered:!1,footerAlign:"right",footerBordered:!1,backdrop:"dark",closeOnBackdropClick:!1,alert:!1,preventClose:!1},parameters:{controls:{include:["Close on backdrop click","Alert dialog","Prevent close","Tone","Fullscreen","Fullscreen toggle","Draggable","Title","Title text","Subtitle","Icon","Alert tag","Actions","Close button","Header border","Footer align","Footer border","Size","Backdrop","closeOnBackdropClick","alert","preventClose","tone","fullscreen","fullscreenToggle","draggable","showTitle","title","showSubhead","showIcon","showTag","showActions","showCloseButton","headerBordered","footerAlign","footerBordered","size","backdrop"],sort:"none"}},argTypes:{closeOnBackdropClick:{name:"Close on backdrop click",control:"boolean",description:"Clicking the backdrop or pressing Escape closes the modal. Off, only the close and action buttons do.",table:{category:"Behavior",defaultValue:{summary:"false"}}},alert:{name:"Alert dialog",control:"boolean",description:"Announced as an alert dialog, and focus starts on the Cancel button (marked data-modal-cancel) instead of the first control. Try it with the Warning or Destructive tone.",table:{category:"Behavior",defaultValue:{summary:"false"}}},preventClose:{name:"Prevent close",control:"boolean",description:'Escape and backdrop click are blocked and call onCloseAttempt instead (for unsaved changes). Turning it on also enables Escape and backdrop dismissal in this playground; press Escape or click the backdrop to see the "Close blocked" note. The close button and Cancel are guarded too, and the note offers "Discard and close".',table:{category:"Behavior",defaultValue:{summary:"false"}}},tone:{name:"Tone",control:"select",options:["standard","warning","destructive","error","info","success"],labels:{standard:"Standard (form)",warning:"Warning",destructive:"Destructive",error:"Error",info:"Info",success:"Success"},description:"Header icon, title, message and footer buttons. Standard is a form.",table:{category:"Content",defaultValue:{summary:"standard"}}},fullscreen:{name:"Fullscreen",control:"boolean",description:"Fills the whole viewport with square corners.",table:{category:"Appearance",defaultValue:{summary:"false"}}},fullscreenToggle:{name:"Fullscreen toggle",control:"boolean",description:"Adds a header button that switches between full screen and the normal size. Only available while Fullscreen is on.",if:{arg:"fullscreen",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"false"}}},draggable:{name:"Draggable",control:"boolean",description:"Drag the modal by its header (`draggable`). It stays inside the viewport and re-centers when reopened. Position only: no docking or resizing. Not available in full screen.",table:{category:"Behavior",defaultValue:{summary:"false"}}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",table:{category:"Header",defaultValue:{summary:"true"}}},title:{name:"Title text",if:{arg:"showTitle",truthy:!0},control:"text",description:"Text in the modal's header (`headerTitle`). Empty uses the tone's own title.",table:{category:"Header"}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",table:{category:"Header",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",table:{category:"Header",defaultValue:{summary:"true"}}},showTag:{name:"Alert tag",control:"boolean",description:"Show a status tag inline right after the title (`headerTitleBadge`).",table:{category:"Header",defaultValue:{summary:"false"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",table:{category:"Header",defaultValue:{summary:"false"}}},showCloseButton:{name:"Close button",control:"boolean",description:"Show the close button at the far right of the header.",table:{category:"Header",defaultValue:{summary:"true"}}},headerBordered:{name:"Header border",control:"boolean",description:"Border along the bottom edge of the header (`headerBordered`).",table:{category:"Header",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer align",control:"radio",options:["left","right","full"],labels:{left:"Left",right:"Right",full:"Full width"},description:"Where the footer buttons sit (`footerAlign`): grouped left, grouped right, or stretched to fill the row.",table:{category:"Footer",defaultValue:{summary:"right"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Border along the top edge of the footer (`footerBordered`).",table:{category:"Footer",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["sm","md","lg"],labels:{sm:"Small (360px)",md:"Medium (480px)",lg:"Large (640px)"},description:"Modal width.",if:{arg:"fullscreen",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"md"}}},backdrop:{name:"Backdrop",control:"radio",options:["dark","light"],labels:{dark:"Dark",light:"Light"},description:"Dark dims the page behind the modal. Light is a frosted white blur.",table:{category:"Appearance",defaultValue:{summary:"dark"}}}},render:t=>e.jsx(Z,{...t},JSON.stringify(t))};var m,f,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "md",
    tone: "standard",
    fullscreen: false,
    fullscreenToggle: false,
    draggable: false,
    showTitle: true,
    title: "",
    showSubhead: false,
    showIcon: true,
    showTag: false,
    showActions: false,
    showCloseButton: true,
    headerBordered: false,
    footerAlign: "right",
    footerBordered: false,
    backdrop: "dark",
    closeOnBackdropClick: false,
    alert: false,
    preventClose: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Close on backdrop click", "Alert dialog", "Prevent close", "Tone", "Fullscreen", "Fullscreen toggle", "Draggable", "Title", "Title text", "Subtitle", "Icon", "Alert tag", "Actions", "Close button", "Header border", "Footer align", "Footer border", "Size", "Backdrop", "closeOnBackdropClick", "alert", "preventClose", "tone", "fullscreen", "fullscreenToggle", "draggable", "showTitle", "title", "showSubhead", "showIcon", "showTag", "showActions", "showCloseButton", "headerBordered", "footerAlign", "footerBordered", "size", "backdrop"],
      sort: "none"
    }
  },
  argTypes: {
    closeOnBackdropClick: {
      name: "Close on backdrop click",
      control: "boolean",
      description: "Clicking the backdrop or pressing Escape closes the modal. Off, only the close and action buttons do.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    alert: {
      name: "Alert dialog",
      control: "boolean",
      description: "Announced as an alert dialog, and focus starts on the Cancel button (marked data-modal-cancel) instead of the first control. Try it with the Warning or Destructive tone.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    preventClose: {
      name: "Prevent close",
      control: "boolean",
      description: "Escape and backdrop click are blocked and call onCloseAttempt instead (for unsaved changes). Turning it on also enables Escape and backdrop dismissal in this playground; press Escape or click the backdrop to see the \\"Close blocked\\" note. The close button and Cancel are guarded too, and the note offers \\"Discard and close\\".",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    tone: {
      name: "Tone",
      control: "select",
      options: ["standard", "warning", "destructive", "error", "info", "success"],
      labels: {
        standard: "Standard (form)",
        warning: "Warning",
        destructive: "Destructive",
        error: "Error",
        info: "Info",
        success: "Success"
      },
      description: "Header icon, title, message and footer buttons. Standard is a form.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "standard"
        }
      }
    },
    fullscreen: {
      name: "Fullscreen",
      control: "boolean",
      description: "Fills the whole viewport with square corners.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    fullscreenToggle: {
      name: "Fullscreen toggle",
      control: "boolean",
      description: "Adds a header button that switches between full screen and the normal size. Only available while Fullscreen is on.",
      if: {
        arg: "fullscreen",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    draggable: {
      name: "Draggable",
      control: "boolean",
      description: "Drag the modal by its header (\`draggable\`). It stays inside the viewport and re-centers when reopened. Position only: no docking or resizing. Not available in full screen.",
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
        category: "Header",
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
      description: "Text in the modal's header (\`headerTitle\`). Empty uses the tone's own title.",
      table: {
        category: "Header"
      }
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (\`headerSubhead\`).",
      table: {
        category: "Header",
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
        category: "Header",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showTag: {
      name: "Alert tag",
      control: "boolean",
      description: "Show a status tag inline right after the title (\`headerTitleBadge\`).",
      table: {
        category: "Header",
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
        category: "Header",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showCloseButton: {
      name: "Close button",
      control: "boolean",
      description: "Show the close button at the far right of the header.",
      table: {
        category: "Header",
        defaultValue: {
          summary: "true"
        }
      }
    },
    headerBordered: {
      name: "Header border",
      control: "boolean",
      description: "Border along the bottom edge of the header (\`headerBordered\`).",
      table: {
        category: "Header",
        defaultValue: {
          summary: "false"
        }
      }
    },
    footerAlign: {
      name: "Footer align",
      control: "radio",
      options: ["left", "right", "full"],
      labels: {
        left: "Left",
        right: "Right",
        full: "Full width"
      },
      description: "Where the footer buttons sit (\`footerAlign\`): grouped left, grouped right, or stretched to fill the row.",
      table: {
        category: "Footer",
        defaultValue: {
          summary: "right"
        }
      }
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Border along the top edge of the footer (\`footerBordered\`).",
      table: {
        category: "Footer",
        defaultValue: {
          summary: "false"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      labels: {
        sm: "Small (360px)",
        md: "Medium (480px)",
        lg: "Large (640px)"
      },
      description: "Modal width.",
      if: {
        arg: "fullscreen",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    backdrop: {
      name: "Backdrop",
      control: "radio",
      options: ["dark", "light"],
      labels: {
        dark: "Dark",
        light: "Light"
      },
      description: "Dark dims the page behind the modal. Light is a frosted white blur.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "dark"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes, so it closes again.
  <ModalDemo key={JSON.stringify(args)} {...args} />
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const ho=["Default"];export{a as Default,ho as __namedExportsOrder,uo as default};
