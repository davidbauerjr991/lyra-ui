import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DhMLlvMY.js";import{M as d}from"./modal-vamPJIhM.js";import{B as C}from"./button-BLVj2C8E.js";import{c as v}from"./utils-BLSKlp9E.js";import{t as w,T as B,w as x,C as S}from"./Modal.shared-DS3ZMt9l.js";import"./_commonjsHelpers-CqkleIqs.js";import"./overlay-fWttkD6o.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./container-4ho-TAYP.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./input-CHxvM1hc.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./select-DJKQGHZg.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./radio-sgkaDL_k.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./error-icon-BKl2xMq_.js";import"./info-icon-CVWl96lq.js";const ve={title:"UI/Modal",component:d,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function A({size:n="md",tone:t="standard",fullscreen:m=!1,backdrop:p="dark",closeOnBackdropClick:u=!1,alert:f=!1,preventClose:g=!1}){const[k,o]=s.useState(!1),[h,r]=s.useState(!1),{title:b,icon:y}=w[t];return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>{r(!1),o(!0)},children:"Open modal"}),e.jsx(d,{open:k,onClose:()=>o(!1),alert:f,preventClose:g,onCloseAttempt:()=>r(!0),variant:p,closeOnBackdropClick:u,headerTitle:b,headerIcon:y,headerActions:e.jsx(S,{onClick:()=>o(!1)}),className:v("transition-all duration-200",m?"w-screen h-screen rounded-none":x[n]),children:e.jsx(B,{tone:t,onClose:()=>o(!1),note:h?e.jsx("p",{role:"status",className:"lyra-body-sm text-lyra-status-critical-strong",children:"Close blocked: you have unsaved changes. Use a button to leave."}):void 0})})]})}const a={args:{size:"md",tone:"standard",fullscreen:!1,backdrop:"dark",closeOnBackdropClick:!1,alert:!1,preventClose:!1},parameters:{controls:{include:["Close on backdrop click","Alert dialog","Prevent close","Tone","Fullscreen","Size","Backdrop","closeOnBackdropClick","alert","preventClose","tone","fullscreen","size","backdrop"],sort:"none"}},argTypes:{closeOnBackdropClick:{name:"Close on backdrop click",control:"boolean",description:"Clicking the backdrop or pressing Escape closes the modal. Off, only the close and action buttons do.",table:{category:"Behavior",defaultValue:{summary:"false"}}},alert:{name:"Alert dialog",control:"boolean",description:"Announced as an alert dialog, and focus starts on the Cancel button (marked data-modal-cancel) instead of the first control. Try it with the Warning or Destructive tone.",table:{category:"Behavior",defaultValue:{summary:"false"}}},preventClose:{name:"Prevent close",control:"boolean",description:"Escape and backdrop click are blocked and call onCloseAttempt instead (for unsaved changes). Turn on Close on backdrop click too, then press Escape to see the note.",table:{category:"Behavior",defaultValue:{summary:"false"}}},tone:{name:"Tone",control:"select",options:["standard","warning","destructive","error","info","success"],labels:{standard:"Standard (form)",warning:"Warning",destructive:"Destructive",error:"Error",info:"Info",success:"Success"},description:"Header icon, title, message and footer buttons. Standard is a form.",table:{category:"Content",defaultValue:{summary:"standard"}}},fullscreen:{name:"Fullscreen",control:"boolean",description:"Fills the whole viewport with square corners.",table:{category:"Appearance",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["sm","md","lg"],labels:{sm:"Small (360px)",md:"Medium (480px)",lg:"Large (640px)"},description:"Modal width.",if:{arg:"fullscreen",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"md"}}},backdrop:{name:"Backdrop",control:"radio",options:["dark","light"],labels:{dark:"Dark",light:"Light"},description:"Dark dims the page behind the modal. Light is a frosted white blur.",table:{category:"Appearance",defaultValue:{summary:"dark"}}}},render:n=>e.jsx(A,{...n},JSON.stringify(n))};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "md",
    tone: "standard",
    fullscreen: false,
    backdrop: "dark",
    closeOnBackdropClick: false,
    alert: false,
    preventClose: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Close on backdrop click", "Alert dialog", "Prevent close", "Tone", "Fullscreen", "Size", "Backdrop", "closeOnBackdropClick", "alert", "preventClose", "tone", "fullscreen", "size", "backdrop"],
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
      description: "Escape and backdrop click are blocked and call onCloseAttempt instead (for unsaved changes). Turn on Close on backdrop click too, then press Escape to see the note.",
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
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const we=["Default"];export{a as Default,we as __namedExportsOrder,ve as default};
