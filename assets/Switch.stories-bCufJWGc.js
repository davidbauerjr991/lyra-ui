import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DhMLlvMY.js";import{S as u}from"./switch-BcDXqIbO.js";import{c as s}from"./utils-BLSKlp9E.js";import{R as S,H as k}from"./Switch.shared-DrarV60A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-1evVQkiP.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./check-Dr3vGcdY.js";import"./minus-CVnigrff.js";const F={title:"Headless Primitives/Switch",component:u,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{disabled:{control:"boolean"},size:{control:"radio",options:["lg","sm"]},label:{control:"text"}}};function V({on:e=!1,disabled:n=!1,readonly:l=!1,required:o=!1,label:m="Switch Label",help:p=!1,size:f="lg",withIcon:b=!0,labelPosition:g="right",fullWidth:i=!1}){const[r,y]=x.useState(e),w=o&&!r&&!n&&!l;return a.jsx("div",{className:s("flex flex-col",i&&"w-full",!b&&"[&_[role=switch]_svg]:hidden"),children:a.jsx(u,{checked:r,onCheckedChange:y,disabled:n,readonly:l,required:o,label:m||void 0,labelHelpText:p?k:void 0,size:f,className:s(g==="left"&&"flex-row-reverse",i?"w-full justify-between":"self-start"),error:w?S:void 0})})}const t={render:e=>a.jsx(V,{...e},JSON.stringify(e)),args:{on:!1,disabled:!1,readonly:!1,required:!1,label:"Switch Label",help:!1,size:"lg",withIcon:!0,labelPosition:"right",fullWidth:!1},parameters:{controls:{include:["On","Disabled","Read-only","Required","Label","Help text","Size","With icon","Label position","Full width","on","disabled","readonly","required","label","help","size","withIcon","labelPosition","fullWidth"],sort:"none"}},argTypes:{on:{name:"On",control:"boolean",description:"Whether the switch starts on (`checked`). Clicking it toggles it.",table:{category:"Behavior",defaultValue:{summary:"false"}}},disabled:{name:"Disabled",control:"boolean",description:"Dims the switch and stops it toggling.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Shows the current value but blocks changes: muted track, default cursor, still focusable. Different from Disabled, which dims it.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label, and shows a red error (`error`) under the switch, with a red outline on the track, until it is switched on.",table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"Text next to the switch. Clear it for a switch with no label.",table:{category:"Content",defaultValue:{summary:"Switch Label"}}},help:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",table:{category:"Content",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["lg","sm"],description:"Large is 40×24px, small is 32×16px.",table:{category:"Appearance",defaultValue:{summary:"lg"}}},withIcon:{name:"With icon",control:"boolean",description:"Shows the check or minus inside the thumb. Off hides it.",table:{category:"Appearance",defaultValue:{summary:"true"}}},labelPosition:{name:"Label position",control:"radio",options:["left","right"],description:"Which side of the switch the label sits on. Needs a label.",if:{arg:"label",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"right"}}},fullWidth:{name:"Full width",control:"boolean",description:"Stretches the row to the full width of its container and pushes the label and switch to opposite ends.",table:{category:"Appearance",defaultValue:{summary:"false"}}}}};var c,d,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <SwitchDemo key={JSON.stringify(args)} {...args} />,
  args: {
    on: false,
    disabled: false,
    readonly: false,
    required: false,
    label: "Switch Label",
    help: false,
    size: "lg",
    withIcon: true,
    labelPosition: "right",
    fullWidth: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["On", "Disabled", "Read-only", "Required", "Label", "Help text", "Size", "With icon", "Label position", "Full width", "on", "disabled", "readonly", "required", "label", "help", "size", "withIcon", "labelPosition", "fullWidth"],
      sort: "none"
    }
  },
  argTypes: {
    on: {
      name: "On",
      control: "boolean",
      description: "Whether the switch starts on (\`checked\`). Clicking it toggles it.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the switch and stops it toggling.",
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
      description: "Shows the current value but blocks changes: muted track, default cursor, still focusable. Different from Disabled, which dims it.",
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
      description: "Adds a red asterisk after the label, and shows a red error (\`error\`) under the switch, with a red outline on the track, until it is switched on.",
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
      description: "Text next to the switch. Clear it for a switch with no label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Switch Label"
        }
      }
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (\`labelHelpText\`). Needs a label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["lg", "sm"],
      description: "Large is 40×24px, small is 32×16px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "lg"
        }
      }
    },
    withIcon: {
      name: "With icon",
      control: "boolean",
      description: "Shows the check or minus inside the thumb. Off hides it.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    labelPosition: {
      name: "Label position",
      control: "radio",
      options: ["left", "right"],
      description: "Which side of the switch the label sits on. Needs a label.",
      if: {
        arg: "label",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "right"
        }
      }
    },
    fullWidth: {
      name: "Full width",
      control: "boolean",
      description: "Stretches the row to the full width of its container and pushes the label and switch to opposite ends.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,F as default};
