import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./progress-bar-DiX3DXMU.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const f={title:"Headless Primitives/Progress Bar",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["default","success","warning","critical","neutral"]},size:{control:"radio",options:["sm","md","lg"]},showLabel:{control:"boolean"}}},e={render:a=>n.jsx("div",{className:"w-full max-w-md",children:n.jsx(r,{...a,label:a.label||void 0})}),args:{value:60,variant:"default",size:"md",showLabel:!1,label:"",indeterminate:!1},parameters:{controls:{include:["Value","Indeterminate","Show label","Label text","Variant","Size","value","indeterminate","showLabel","label","variant","size"],sort:"none"}},argTypes:{value:{name:"Value",control:{type:"range",min:0,max:100,step:1},description:"How far along the bar is, 0–100.",table:{category:"Behavior",defaultValue:{summary:"0"}}},indeterminate:{name:"Indeterminate",control:"boolean",description:"Unknown progress: a segment slides along the track and no value is reported to assistive tech. Value is ignored and the percentage is hidden. Honors reduced motion.",table:{category:"Behavior",defaultValue:{summary:"false"}}},showLabel:{name:"Show label",control:"boolean",description:"Shows a label under the track (`showLabel`).",table:{category:"Content",defaultValue:{summary:"false"}}},label:{name:"Label text",control:"text",description:"Replaces the default “{value}%” text. Leave empty for the percentage. Only shows when Show label is on.",if:{arg:"showLabel",truthy:!0},table:{category:"Content",defaultValue:{summary:"{value}%"}}},variant:{name:"Variant",control:"select",options:["default","success","warning","critical","neutral"],description:"Color of the fill.",table:{category:"Appearance",defaultValue:{summary:"default"}}},size:{name:"Size",control:"radio",options:["sm","md","lg"],description:"Height of the track: sm 4px, md 8px, lg 12px.",table:{category:"Appearance",defaultValue:{summary:"md"}}}}};var t,l,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-md">
      {/* \`label\` is "" when the Label text control is cleared — fall back to
          the component's own "{value}%". */}
      <ProgressBar {...args} label={args.label || undefined} />
    </div>,
  args: {
    value: 60,
    variant: "default",
    size: "md",
    showLabel: false,
    label: "",
    indeterminate: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Value", "Indeterminate", "Show label", "Label text", "Variant", "Size", "value", "indeterminate", "showLabel", "label", "variant", "size"],
      sort: "none"
    }
  },
  argTypes: {
    value: {
      name: "Value",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      },
      description: "How far along the bar is, 0–100.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "0"
        }
      }
    },
    indeterminate: {
      name: "Indeterminate",
      control: "boolean",
      description: "Unknown progress: a segment slides along the track and no value is reported to assistive tech. Value is ignored and the percentage is hidden. Honors reduced motion.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showLabel: {
      name: "Show label",
      control: "boolean",
      description: "Shows a label under the track (\`showLabel\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    label: {
      name: "Label text",
      control: "text",
      description: "Replaces the default “{value}%” text. Leave empty for the percentage. Only shows when Show label is on.",
      if: {
        arg: "showLabel",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "{value}%"
        }
      }
    },
    variant: {
      name: "Variant",
      control: "select",
      options: ["default", "success", "warning", "critical", "neutral"],
      description: "Color of the fill.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Height of the track: sm 4px, md 8px, lg 12px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    }
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,f as default};
