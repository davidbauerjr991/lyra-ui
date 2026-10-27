import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{I as c}from"./inline-notification-U7dcRTWk.js";import{B as a}from"./button-Cje2PXGX.js";import{M as m,I as y}from"./InlineNotification.shared-ByjILtpZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-C3nOw4uh.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";const R={title:"Custom Primitives/Inline Notification",component:c,tags:["autodocs"],parameters:{layout:"padded"}};function w({variant:e="info",message:d=m.info,action:u=!1,actionPlacement:o="below",dismissible:p=!1,heading:g=""}){const[f,i]=h.useState(!1);return f?n.jsx(a,{variant:"outline",size:"sm",onClick:()=>i(!1),children:"Show again"}):n.jsx("div",{className:"w-full",children:n.jsx(c,{variant:e,heading:g||void 0,onDismiss:p?()=>i(!0):void 0,action:u?o==="inline"?n.jsx("a",{href:"#details",className:y,onClick:b=>b.preventDefault(),children:"View details"}):n.jsx(a,{variant:"outline",size:"sm",children:"Action"}):void 0,actionPlacement:o,children:d})})}const t={args:{variant:"info",message:m.info,action:!1,actionPlacement:"below",dismissible:!1,heading:""},parameters:{controls:{include:["Dismissible","Title","Message","Action button","Action placement","Type","dismissible","heading","message","action","actionPlacement","variant"],sort:"none"}},argTypes:{dismissible:{name:"Dismissible",control:"boolean",description:"Shows a close button (`onDismiss`, 24×24 target). Closing hides the notification until you click Show again. Closing it from the keyboard moves focus to the next control on the page instead of losing it (see Variants → Dismissible).",table:{category:"Behavior",defaultValue:{summary:"false"}}},heading:{name:"Title",control:"text",description:"Optional bold first line above the message (`heading`).",table:{category:"Content",defaultValue:{summary:"none"}}},message:{name:"Message",control:"text",description:"The notification text (`children`).",table:{category:"Content"}},action:{name:"Action button",control:"boolean",description:"Adds an action (`action`): a button row under the message, or a text link at the end of the message row (see Action placement).",table:{category:"Content",defaultValue:{summary:"false"}}},actionPlacement:{name:"Action placement",control:"radio",options:["below","inline"],labels:{below:"Below (button)",inline:"Inline (link)"},description:"Where the action goes (`actionPlacement`).",if:{arg:"action",truthy:!0},table:{category:"Content",defaultValue:{summary:"below"}}},variant:{name:"Type",control:"radio",options:["warning","error","info","success"],labels:{warning:"Warning",error:"Error",info:"Info",success:"Success"},description:'Sets the color and icon. Info and success are announced politely (`role="status"`); warning and error interrupt (`role="alert"`).',table:{category:"Appearance",defaultValue:{summary:"info"}}}},render:e=>n.jsx(w,{...e},JSON.stringify(e))};var s,r,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "info",
    message: MESSAGES.info,
    action: false,
    actionPlacement: "below",
    dismissible: false,
    heading: ""
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Dismissible", "Title", "Message", "Action button", "Action placement", "Type", "dismissible", "heading", "message", "action", "actionPlacement", "variant"],
      sort: "none"
    }
  },
  argTypes: {
    dismissible: {
      name: "Dismissible",
      control: "boolean",
      description: "Shows a close button (\`onDismiss\`, 24×24 target). Closing hides the notification until you click Show again. Closing it from the keyboard moves focus to the next control on the page instead of losing it (see Variants → Dismissible).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    heading: {
      name: "Title",
      control: "text",
      description: "Optional bold first line above the message (\`heading\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "none"
        }
      }
    },
    message: {
      name: "Message",
      control: "text",
      description: "The notification text (\`children\`).",
      table: {
        category: "Content"
      }
    },
    action: {
      name: "Action button",
      control: "boolean",
      description: "Adds an action (\`action\`): a button row under the message, or a text link at the end of the message row (see Action placement).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    actionPlacement: {
      name: "Action placement",
      control: "radio",
      options: ["below", "inline"],
      labels: {
        below: "Below (button)",
        inline: "Inline (link)"
      },
      description: "Where the action goes (\`actionPlacement\`).",
      if: {
        arg: "action",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "below"
        }
      }
    },
    variant: {
      name: "Type",
      control: "radio",
      options: ["warning", "error", "info", "success"],
      labels: {
        warning: "Warning",
        error: "Error",
        info: "Info",
        success: "Success"
      },
      description: "Sets the color and icon. Info and success are announced politely (\`role=\\"status\\"\`); warning and error interrupt (\`role=\\"alert\\"\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "info"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes, so the dismissed state
  // resets.
  <InlineNotificationDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,R as default};
