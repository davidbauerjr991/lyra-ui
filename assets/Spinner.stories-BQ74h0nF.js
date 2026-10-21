import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./spinner-C_wii8DA.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";const g={title:"Custom Primitives/Spinner",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"radio",options:["bar","circle","ring"]},size:{control:"radio",options:["sm","md","lg"]},color:{control:"radio",options:["primary","inverse"]}}},e={render:n=>n.color==="inverse"?r.jsx("div",{className:"flex items-center justify-center p-6 rounded-lyra-md bg-lyra-bg-surface-inverse",children:r.jsx(a,{...n})}):r.jsx(a,{...n}),args:{variant:"bar",size:"md",color:"primary",label:"Loading",showLabel:!1},parameters:{controls:{include:["Label","Show label","Variant","Size","Color","label","showLabel","variant","size","color"],sort:"none"}},argTypes:{label:{name:"Label",control:"text",description:"Text announced by screen readers. Not shown on screen.",table:{category:"Content",defaultValue:{summary:"Loading"}}},showLabel:{name:"Show label",control:"boolean",description:"Also shows the label as text next to the spinner (`showLabel`). Off keeps it for screen readers only.",table:{category:"Content",defaultValue:{summary:"false"}}},variant:{name:"Variant",control:"radio",options:["bar","circle","ring"],description:"Three pulsing bars, a pulsing circle, or a small turning ring (for inline use, e.g. a checklist row).",table:{category:"Appearance",defaultValue:{summary:"bar"}}},size:{name:"Size",control:"radio",options:["sm","md","lg"],description:"Spinner size.",table:{category:"Appearance",defaultValue:{summary:"md"}}},color:{name:"Color",control:"radio",options:["primary","inverse"],description:"Primary (blue) for light surfaces, inverse (white) for dark surfaces. Inverse shows on a dark panel.",table:{category:"Appearance",defaultValue:{summary:"primary"}}}}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      options: ["bar", "circle", "ring"],
      description: "Three pulsing bars, a pulsing circle, or a small turning ring (for inline use, e.g. a checklist row).",
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
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,g as default};
