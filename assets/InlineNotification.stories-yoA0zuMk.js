import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{M as c,I as m,a as y}from"./InlineNotification.shared-Dy76qrWh.js";import{B as a}from"./button-CLz1-b9g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./icon-h0iptIZc.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./warning-icon-solid-CYvTRq-W.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./success-icon-solid-BP6tJnyF.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";const J={title:"Custom Primitives/Inline Notification",component:m,tags:["autodocs"],parameters:{layout:"padded"}};function w({variant:e="info",message:d=c.info,action:u=!1,actionPlacement:o="below",dismissible:p=!1,heading:g=""}){const[f,i]=h.useState(!1);return f?n.jsx(a,{variant:"outline",size:"sm",onClick:()=>i(!1),children:"Show again"}):n.jsx("div",{className:"w-full",children:n.jsx(m,{variant:e,heading:g||void 0,onDismiss:p?()=>i(!0):void 0,action:u?o==="inline"?n.jsx("a",{href:"#details",className:y,onClick:b=>b.preventDefault(),children:"View details"}):n.jsx(a,{variant:"outline",size:"sm",children:"Action"}):void 0,actionPlacement:o,children:d})})}const t={args:{variant:"info",message:c.info,action:!1,actionPlacement:"below",dismissible:!1,heading:""},parameters:{controls:{include:["Dismissible","Title","Message","Action button","Action placement","Type","dismissible","heading","message","action","actionPlacement","variant"],sort:"none"}},argTypes:{dismissible:{name:"Dismissible",control:"boolean",description:"Shows a close button (`onDismiss`, 24×24 target). Closing hides the notification until you click Show again. Closing it from the keyboard moves focus to the next control on the page instead of losing it (see Variants → Dismissible).",table:{category:"Behavior",defaultValue:{summary:"false"}}},heading:{name:"Title",control:"text",description:"Optional bold first line above the message (`heading`).",table:{category:"Content",defaultValue:{summary:"none"}}},message:{name:"Message",control:"text",description:"The notification text (`children`).",table:{category:"Content"}},action:{name:"Action button",control:"boolean",description:"Adds an action (`action`): a button row under the message, or a text link at the end of the message row (see Action placement).",table:{category:"Content",defaultValue:{summary:"false"}}},actionPlacement:{name:"Action placement",control:"radio",options:["below","inline"],labels:{below:"Below (button)",inline:"Inline (link)"},description:"Where the action goes (`actionPlacement`).",if:{arg:"action",truthy:!0},table:{category:"Content",defaultValue:{summary:"below"}}},variant:{name:"Type",control:"radio",options:["warning","error","info","success"],labels:{warning:"Warning",error:"Error",info:"Info",success:"Success"},description:'Sets the color and icon. Info and success are announced politely (`role="status"`); warning and error interrupt (`role="alert"`).',table:{category:"Appearance",defaultValue:{summary:"info"}}}},render:e=>n.jsx(w,{...e},JSON.stringify(e))};var s,r,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const K=["Default"];export{t as Default,K as __namedExportsOrder,J as default};
