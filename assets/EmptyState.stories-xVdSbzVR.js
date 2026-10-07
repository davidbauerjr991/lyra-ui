import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{E as r}from"./empty-state-aA-_Z9ee.js";import{E as l,s as m}from"./EmptyState.shared-BrmjBuCl.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./chart-column-N6fAo0kL.js";import"./createLucideIcon-aII_sYFw.js";const I={title:"UI/EmptyState",component:r,tags:["autodocs"],parameters:{layout:"padded"}};function p({showIcon:e=!1,message:i="No data available",description:c="",tone:d="secondary"}){return o.jsx(l,{children:o.jsx(r,{icon:e?m:void 0,message:i,description:c||void 0,tone:d})})}const n={args:{showIcon:!1,message:"No data available",description:"",tone:"secondary"},parameters:{controls:{include:["showIcon","message","description","tone","Icon","Message","Description","Tone"],sort:"none"}},argTypes:{showIcon:{name:"Icon",control:"boolean",description:"Shows an icon above the message (`icon`).",table:{category:"Content"}},message:{name:"Message",control:"text",description:"Main line of text (`message`).",table:{category:"Content"}},description:{name:"Description",control:"text",description:"Smaller secondary line under the message (`description`). Empty for none.",table:{category:"Content"}},tone:{name:"Tone",control:"radio",options:["secondary","disabled"],description:"Secondary is the readable default. Disabled is the most muted tone and is below WCAG contrast for real text.",table:{category:"Appearance"}}},render:e=>o.jsx(p,{...e},JSON.stringify(e))};var t,a,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    message: "No data available",
    description: "",
    tone: "secondary"
  },
  parameters: {
    controls: {
      include: ["showIcon", "message", "description", "tone", "Icon", "Message", "Description", "Tone"],
      sort: "none"
    }
  },
  argTypes: {
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Shows an icon above the message (\`icon\`).",
      table: {
        category: "Content"
      }
    },
    message: {
      name: "Message",
      control: "text",
      description: "Main line of text (\`message\`).",
      table: {
        category: "Content"
      }
    },
    description: {
      name: "Description",
      control: "text",
      description: "Smaller secondary line under the message (\`description\`). Empty for none.",
      table: {
        category: "Content"
      }
    },
    tone: {
      name: "Tone",
      control: "radio",
      options: ["secondary", "disabled"],
      description: "Secondary is the readable default. Disabled is the most muted tone and is below WCAG contrast for real text.",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args => <EmptyStateDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Default"];export{n as Default,E as __namedExportsOrder,I as default};
