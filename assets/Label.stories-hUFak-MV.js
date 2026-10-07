import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DhMLlvMY.js";import{L as o}from"./label-amkU61wz.js";import{I as x}from"./input-CHxvM1hc.js";import{S as g,H as T,a as k}from"./Label.shared-CBhIMW5e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";const N={title:"Headless Primitives/Label",component:o,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"}}};function H({label:n="Field label",required:r=!1,disabled:t=!1,readonly:s=!1,helpText:i=!1,supportingText:d=!1,layout:h="stacked",helpTextId:p=""}){const a=f.useId(),u={label:n,required:r,disabled:t,readonly:s,labelHelpText:i?T:void 0,supportingText:d?g:void 0,helpTextId:p||void 0},y=[i&&!t?p||`${a}-help`:null,d&&!t?`${a}-supporting`:null].filter(Boolean).join(" ")||void 0;return h==="horizontal"?e.jsxs("div",{className:"flex items-center justify-between w-72",children:[e.jsx(o,{...u}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:k})]}):e.jsxs("div",{className:"flex flex-col gap-1 w-72",children:[e.jsx(o,{...u,labelFor:a}),e.jsx(x,{id:a,placeholder:"Enter value...","aria-describedby":y,required:r,disabled:t,readonly:s})]})}const l={args:{label:"Field label",required:!1,disabled:!1,readonly:!1,helpText:!1,supportingText:!1,layout:"stacked",helpTextId:""},parameters:{controls:{include:["Disabled","Read-only","Required","Label","Help text","Supporting text","Layout","Help text id","disabled","readonly","required","label","helpText","supportingText","layout","helpTextId"],sort:"none"}},argTypes:{helpTextId:{name:"Help text id",control:"text",description:"`id` of the hidden copy of the help text that the field points `aria-describedby` at (`helpTextId`). Blank uses `<labelFor>-help`. Turn on Help text first.",if:{arg:"helpText",truthy:!0},table:{category:"Accessibility",defaultValue:{summary:"<labelFor>-help"}}},disabled:{name:"Disabled",control:"boolean",description:"Dims the label. Hides the required asterisk, help text and supporting text.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Mutes the label. Hides the required asterisk; help text stays.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"The label text.",table:{category:"Content",defaultValue:{summary:"Field label"}}},helpText:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`).",table:{category:"Content",defaultValue:{summary:"false"}}},supportingText:{name:"Supporting text",control:"boolean",description:"Always-visible description under the label (`supportingText`).",table:{category:"Content",defaultValue:{summary:"false"}}},layout:{name:"Layout",control:"radio",options:["stacked","horizontal"],labels:{stacked:"Stacked",horizontal:"Horizontal"},description:"Stacked puts the label above an input. Horizontal puts the label left and a value right.",table:{category:"Appearance",defaultValue:{summary:"stacked"}}}},render:n=>e.jsx(H,{...n})};var c,b,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Field label",
    required: false,
    disabled: false,
    readonly: false,
    helpText: false,
    supportingText: false,
    layout: "stacked",
    helpTextId: ""
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Label", "Help text", "Supporting text", "Layout", "Help text id", "disabled", "readonly", "required", "label", "helpText", "supportingText", "layout", "helpTextId"],
      sort: "none"
    }
  },
  argTypes: {
    helpTextId: {
      name: "Help text id",
      control: "text",
      description: "\`id\` of the hidden copy of the help text that the field points \`aria-describedby\` at (\`helpTextId\`). Blank uses \`<labelFor>-help\`. Turn on Help text first.",
      if: {
        arg: "helpText",
        truthy: true
      },
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "<labelFor>-help"
        }
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the label. Hides the required asterisk, help text and supporting text.",
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
      description: "Mutes the label. Hides the required asterisk; help text stays.",
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
      description: "Adds a red asterisk after the label.",
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
      description: "The label text.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Field label"
        }
      }
    },
    helpText: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (\`labelHelpText\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    supportingText: {
      name: "Supporting text",
      control: "boolean",
      description: "Always-visible description under the label (\`supportingText\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    layout: {
      name: "Layout",
      control: "radio",
      options: ["stacked", "horizontal"],
      labels: {
        stacked: "Stacked",
        horizontal: "Horizontal"
      },
      description: "Stacked puts the label above an input. Horizontal puts the label left and a value right.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "stacked"
        }
      }
    }
  },
  render: args => <LabelDemo {...args} />
}`,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const P=["Default"];export{l as Default,P as __namedExportsOrder,N as default};
