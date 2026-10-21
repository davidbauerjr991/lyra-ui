import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as s,T as f}from"./toast-B8uQgBEj.js";import{T as r,a as l}from"./ToastrNotification.shared-CstLORTY.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-4W-125c9.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./tooltip-E_6y_wR5.js";import"./utils-BLSKlp9E.js";import"./button-D4EbXLB3.js";import"./index-1evVQkiP.js";import"./badge-BpOJAIFg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./x-CzxgOx-T.js";const E={title:"Headless Primitives/Toastr Notification",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"radio",options:r},title:{control:"text"},duration:{control:"select",options:[0,3e3,5e3,1e4]}}};function b({variant:t="info",title:c="Info",body:d=l.info.message,duration:m=0,withAction:u=!1,actionLabel:p="Undo"}){return o.jsx(f,{className:"static inset-auto w-[400px]",children:o.jsx(s,{variant:t,title:c||void 0,duration:m,onDismiss:()=>{},actionLabel:u?p||"Undo":void 0,onAction:()=>{},children:d})})}const n={render:t=>o.jsx(b,{...t},JSON.stringify(t)),args:{variant:"info",title:"Info",body:l.info.message,duration:0,withAction:!1,actionLabel:"Undo"},parameters:{controls:{include:["Variant","Auto-dismiss","Title","Message","With action","Action label","variant","duration","title","body","withAction","actionLabel"],sort:"none"}},argTypes:{variant:{name:"Variant",control:"radio",options:r,description:"Sets the color and icon: info, success, warning or error.",table:{category:"Behavior",defaultValue:{summary:"info"}}},duration:{name:"Auto-dismiss",control:"select",options:[0,3e3,5e3,1e4],description:"Milliseconds before the toast closes by itself (`duration`). 0 keeps it open until dismissed. When it closes, change any control to show it again.",table:{category:"Behavior",defaultValue:{summary:"0"}}},title:{name:"Title",control:"text",description:"Bold text at the top. Clear it for a toast with only a message.",table:{category:"Content",defaultValue:{summary:"Info"}}},withAction:{name:"With action",control:"boolean",description:"Adds an action button under the message (`actionLabel`, `onAction`). Clicking it runs `onAction` and dismisses the toast.",table:{category:"Content",defaultValue:{summary:"false"}}},actionLabel:{name:"Action label",control:"text",description:'Text on the action button, such as Undo or View (`actionLabel`). Clear it to fall back to "Undo".',if:{arg:"withAction",truthy:!0},table:{category:"Content",defaultValue:{summary:"Undo"}}},body:{name:"Message",control:"text",description:"The toast's body text (its children).",table:{category:"Content"}}}};var e,a,i;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: args => <ToastDemo key={JSON.stringify(args)} {...args} />,
  args: {
    variant: "info",
    title: "Info",
    body: TOAST_COPY.info.message,
    duration: 0,
    withAction: false,
    actionLabel: "Undo"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Variant", "Auto-dismiss", "Title", "Message", "With action", "Action label", "variant", "duration", "title", "body", "withAction", "actionLabel"],
      sort: "none"
    }
  },
  argTypes: {
    variant: {
      name: "Variant",
      control: "radio",
      options: TOAST_VARIANTS,
      description: "Sets the color and icon: info, success, warning or error.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "info"
        }
      }
    },
    duration: {
      name: "Auto-dismiss",
      control: "select",
      options: [0, 3000, 5000, 10000],
      description: "Milliseconds before the toast closes by itself (\`duration\`). 0 keeps it open until dismissed. When it closes, change any control to show it again.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "0"
        }
      }
    },
    title: {
      name: "Title",
      control: "text",
      description: "Bold text at the top. Clear it for a toast with only a message.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Info"
        }
      }
    },
    withAction: {
      name: "With action",
      control: "boolean",
      description: "Adds an action button under the message (\`actionLabel\`, \`onAction\`). Clicking it runs \`onAction\` and dismisses the toast.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    actionLabel: {
      name: "Action label",
      control: "text",
      description: "Text on the action button, such as Undo or View (\`actionLabel\`). Clear it to fall back to \\"Undo\\".",
      if: {
        arg: "withAction",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "Undo"
        }
      }
    },
    body: {
      name: "Message",
      control: "text",
      description: "The toast's body text (its children).",
      table: {
        category: "Content"
      }
    }
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const J=["Default"];export{n as Default,J as __namedExportsOrder,E as default};
