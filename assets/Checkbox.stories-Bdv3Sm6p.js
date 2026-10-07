import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DhMLlvMY.js";import{C as d}from"./checkbox-CfX6-3Wq.js";import{S as a,a as g,L as f}from"./Checkbox.shared-ClIuIIKX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-DGBzHazk.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";const P={title:"Headless Primitives/Checkbox",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{checked:{control:"select",options:[!0,!1,"indeterminate"]},disabled:{control:"boolean"}}},k=e=>e==="indeterminate"?"indeterminate":e==="checked";function x({value:e="unchecked",disabled:i=!1,readonly:u=!1,required:m=!1,label:t=a,secondaryText:b=!1,longText:o=!1}){const[h,p]=y.useState(k(e));return c.jsx(d,{checked:h,onCheckedChange:p,disabled:i,readonly:u,required:m,label:o?f:t||void 0,secondaryText:b?g:void 0,"aria-label":o||t?void 0:"Checkbox"})}const n={args:{value:"unchecked",disabled:!1,readonly:!1,required:!1,label:a,secondaryText:!1,longText:!1},parameters:{controls:{include:["Value","Disabled","Read-only","Required","Label","Secondary text","Long text","value","disabled","readonly","required","label","secondaryText","longText"],sort:"none"}},argTypes:{value:{name:"Value",control:"radio",options:["unchecked","checked","indeterminate"],labels:{unchecked:"Unchecked",checked:"Checked",indeterminate:"Indeterminate"},description:"Starting value. Clicking the checkbox toggles it.",table:{category:"Behavior",defaultValue:{summary:"unchecked"}}},disabled:{name:"Disabled",control:"boolean",description:"Blocks interaction and dims the checkbox and label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Keeps the current value but blocks changes, muted rather than dimmed.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds an asterisk to the label. Needs a label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"Text beside the checkbox. Empty shows the checkbox alone.",table:{category:"Content",defaultValue:{summary:a}}},longText:{name:"Long text",control:"boolean",description:"Replaces the label with a long sentence, to show it wrapping.",table:{category:"Content",defaultValue:{summary:"false"}}},secondaryText:{name:"Secondary text",control:"boolean",description:"Supporting line under the label. Needs a label.",table:{category:"Content",defaultValue:{summary:"false"}}}},render:e=>c.jsx(x,{...e},JSON.stringify(e))};var l,r,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: "unchecked",
    disabled: false,
    readonly: false,
    required: false,
    label: SAMPLE_LABEL,
    secondaryText: false,
    longText: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Value", "Disabled", "Read-only", "Required", "Label", "Secondary text", "Long text", "value", "disabled", "readonly", "required", "label", "secondaryText", "longText"],
      sort: "none"
    }
  },
  argTypes: {
    value: {
      name: "Value",
      control: "radio",
      options: ["unchecked", "checked", "indeterminate"],
      labels: {
        unchecked: "Unchecked",
        checked: "Checked",
        indeterminate: "Indeterminate"
      },
      description: "Starting value. Clicking the checkbox toggles it.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "unchecked"
        }
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Blocks interaction and dims the checkbox and label.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Keeps the current value but blocks changes, muted rather than dimmed.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds an asterisk to the label. Needs a label.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text beside the checkbox. Empty shows the checkbox alone.",
      table: {
        category: "Content",
        defaultValue: {
          summary: SAMPLE_LABEL
        }
      }
    },
    longText: {
      name: "Long text",
      control: "boolean",
      description: "Replaces the label with a long sentence, to show it wrapping.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    secondaryText: {
      name: "Secondary text",
      control: "boolean",
      description: "Supporting line under the label. Needs a label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <CheckboxDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,P as default};
