import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./spinner-xIhFAlhc.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const u={title:"Custom Primitives/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"radio",options:["bar","circle"]},size:{control:"radio",options:["sm","md","lg"]},color:{control:"radio",options:["primary","inverse"]}}},e={render:n=>n.color==="inverse"?a.jsx("div",{className:"flex items-center justify-center p-6 rounded-lyra-md bg-lyra-bg-surface-inverse",children:a.jsx(r,{...n})}):a.jsx(r,{...n}),args:{variant:"bar",size:"md",color:"primary",label:"Loading",showLabel:!1},parameters:{controls:{include:["Label","Show label","Variant","Size","Color","label","showLabel","variant","size","color"],sort:"none"}},argTypes:{label:{name:"Label",control:"text",description:"Text announced by screen readers. Not shown on screen.",table:{category:"Content",defaultValue:{summary:"Loading"}}},showLabel:{name:"Show label",control:"boolean",description:"Also shows the label as text next to the spinner (`showLabel`). Off keeps it for screen readers only.",table:{category:"Content",defaultValue:{summary:"false"}}},variant:{name:"Variant",control:"radio",options:["bar","circle"],description:"Three pulsing bars or a pulsing circle.",table:{category:"Appearance",defaultValue:{summary:"bar"}}},size:{name:"Size",control:"radio",options:["sm","md","lg"],description:"Spinner size.",table:{category:"Appearance",defaultValue:{summary:"md"}}},color:{name:"Color",control:"radio",options:["primary","inverse"],description:"Primary (blue) for light surfaces, inverse (white) for dark surfaces. Inverse shows on a dark panel.",table:{category:"Appearance",defaultValue:{summary:"primary"}}}}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => args.color === "inverse" ? <div className="flex items-center justify-center p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
        <Spinner {...args} />
      </div> : <Spinner {...args} />,
  args: {
    variant: "bar",
    size: "md",
    color: "primary",
    label: "Loading",
    showLabel: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Label", "Show label", "Variant", "Size", "Color", "label", "showLabel", "variant", "size", "color"],
      sort: "none"
    }
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Text announced by screen readers. Not shown on screen.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Loading"
        }
      }
    },
    showLabel: {
      name: "Show label",
      control: "boolean",
      description: "Also shows the label as text next to the spinner (\`showLabel\`). Off keeps it for screen readers only.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    variant: {
      name: "Variant",
      control: "radio",
      options: ["bar", "circle"],
      description: "Three pulsing bars or a pulsing circle.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "bar"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Spinner size.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["primary", "inverse"],
      description: "Primary (blue) for light surfaces, inverse (white) for dark surfaces. Inverse shows on a dark panel.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "primary"
        }
      }
    }
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,u as default};
