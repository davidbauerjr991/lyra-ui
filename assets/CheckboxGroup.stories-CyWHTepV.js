import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DhMLlvMY.js";import{C as d,R as x,b as k,S as v,L as T,a as R,G as S}from"./CheckboxGroup.shared-C2nEb0D5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./checkbox-CfX6-3Wq.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-DGBzHazk.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";const K={title:"Custom Primitives/Checkbox Group",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function O({disabled:e=!1,readonly:o=!1,required:t=!1,selected:p=[],secondaryText:u=!1,longText:m=!1,orientation:y="vertical"}){const[a,b]=f.useState(p),g={label:S,labelHelpText:o?R:void 0,options:k.map((r,h)=>({...r,label:m?T:`${r.label} ${h+1}`,secondaryText:u?v:void 0})),values:a,onChange:b,disabled:e,readonly:o,required:t,direction:y,error:t&&a.length===0?x:void 0};return c.jsx(d,{...g})}const n={args:{disabled:!1,readonly:!1,required:!1,selected:[],secondaryText:!1,longText:!1,orientation:"vertical"},parameters:{controls:{include:["Disabled","Read-only","Required","Selected options","Secondary text","Long text","Orientation","disabled","readonly","required","selected","secondaryText","longText","orientation"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Blocks interaction and dims the whole group.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Keeps the current selection but blocks changes.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds an asterisk to the group label and an error while nothing is selected.",table:{category:"Behavior",defaultValue:{summary:"false"}}},selected:{name:"Selected options",control:"check",options:["option-1","option-2","option-3"],labels:{"option-1":"Option 1","option-2":"Option 2","option-3":"Option 3"},description:"Which options start checked. Clicking an option toggles it.",table:{category:"Content",defaultValue:{summary:"none"}}},secondaryText:{name:"Secondary text",control:"boolean",description:"Supporting line under each option's label.",table:{category:"Content",defaultValue:{summary:"false"}}},longText:{name:"Long text",control:"boolean",description:"Replaces every option's label with a long sentence, to show it wrapping.",table:{category:"Content",defaultValue:{summary:"false"}}},orientation:{name:"Orientation",control:"radio",options:["vertical","horizontal"],labels:{vertical:"Vertical",horizontal:"Horizontal"},description:"Stack the options in a column or lay them out in a row.",table:{category:"Appearance",defaultValue:{summary:"vertical"}}}},render:e=>c.jsx(O,{...e},JSON.stringify(e))};var l,i,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: false,
    readonly: false,
    required: false,
    selected: [],
    secondaryText: false,
    longText: false,
    orientation: "vertical"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Selected options", "Secondary text", "Long text", "Orientation", "disabled", "readonly", "required", "selected", "secondaryText", "longText", "orientation"],
      sort: "none"
    }
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Blocks interaction and dims the whole group.",
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
      description: "Keeps the current selection but blocks changes.",
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
      description: "Adds an asterisk to the group label and an error while nothing is selected.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    selected: {
      name: "Selected options",
      control: "check",
      options: ["option-1", "option-2", "option-3"],
      labels: {
        "option-1": "Option 1",
        "option-2": "Option 2",
        "option-3": "Option 3"
      },
      description: "Which options start checked. Clicking an option toggles it.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "none"
        }
      }
    },
    secondaryText: {
      name: "Secondary text",
      control: "boolean",
      description: "Supporting line under each option's label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    longText: {
      name: "Long text",
      control: "boolean",
      description: "Replaces every option's label with a long sentence, to show it wrapping.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["vertical", "horizontal"],
      labels: {
        vertical: "Vertical",
        horizontal: "Horizontal"
      },
      description: "Stack the options in a column or lay them out in a row.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "vertical"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <CheckboxGroupDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,K as default};
