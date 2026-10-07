import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as s}from"./radio-button-group-DL29POWk.js";import{E as y,H as h,F as g,D as v}from"./RadioButtonGroup.shared-xY-lVT3a.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./radio-sgkaDL_k.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-ufxNB_-2.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-DDAUwIz-.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const z={title:"Custom Primitives/Radio Button Group",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"},orientation:{control:"radio",options:["vertical","horizontal"]}}};function O({label:e="Input Label",selected:n="option1",disabled:d=!1,readonly:p=!1,required:u=!1,disabledOptions:c=!1,helpText:m=!1,error:b=!1,orientation:f="vertical"}){return i.jsx(s,{label:e,name:"radio-button-group-default-demo",options:g.map(t=>({...t,disabled:c&&v.includes(t.value)})),defaultValue:n==="none"?void 0:n,disabled:d,readonly:p,required:u,labelHelpText:m?h:void 0,error:b?y:void 0,orientation:f})}const o={render:e=>i.jsx(O,{...e},JSON.stringify(e)),args:{label:"Input Label",selected:"option1",disabled:!1,readonly:!1,required:!1,disabledOptions:!1,helpText:!1,error:!1,orientation:"vertical"},parameters:{controls:{include:["Selected option","Disabled","Read-only","Required","Disabled options","Label","Help text","Error","Orientation","selected","disabled","readonly","required","disabledOptions","label","helpText","error","orientation"],sort:"none"}},argTypes:{selected:{name:"Selected option",control:{type:"select",labels:{none:"None",option1:"Option 1",option2:"Option 2",option3:"Option 3",option4:"Option 4"}},options:["none","option1","option2","option3","option4"],description:"Which option starts selected (`defaultValue`). “None” leaves all unselected.",table:{category:"Behavior",defaultValue:{summary:"none"}}},disabled:{name:"Disabled",control:"boolean",description:"Disables the whole group and dims the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Mutes the group and stops the selection from changing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the group label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},disabledOptions:{name:"Disabled options",control:"boolean",description:"Disables options 2 and 4 only (each option’s own `disabled`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"The group label shown above the options.",table:{category:"Content",defaultValue:{summary:"Input Label"}}},helpText:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the group label (`labelHelpText`).",table:{category:"Content",defaultValue:{summary:"false"}}},error:{name:"Error",control:"boolean",description:"Shows an error message under the group (`error`).",table:{category:"Content",defaultValue:{summary:"false"}}},orientation:{name:"Orientation",control:"radio",options:["vertical","horizontal"],description:"Stacks the options in a column or lines them up in a row.",table:{category:"Appearance",defaultValue:{summary:"vertical"}}}}};var a,l,r;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <RadioButtonGroupDemo key={JSON.stringify(args)} {...args} />,
  args: {
    label: "Input Label",
    selected: "option1",
    disabled: false,
    readonly: false,
    required: false,
    disabledOptions: false,
    helpText: false,
    error: false,
    orientation: "vertical"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Selected option", "Disabled", "Read-only", "Required", "Disabled options", "Label", "Help text", "Error", "Orientation", "selected", "disabled", "readonly", "required", "disabledOptions", "label", "helpText", "error", "orientation"],
      sort: "none"
    }
  },
  argTypes: {
    selected: {
      name: "Selected option",
      control: {
        type: "select",
        labels: {
          none: "None",
          option1: "Option 1",
          option2: "Option 2",
          option3: "Option 3",
          option4: "Option 4"
        }
      },
      options: ["none", "option1", "option2", "option3", "option4"],
      description: "Which option starts selected (\`defaultValue\`). “None” leaves all unselected.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "none"
        }
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the whole group and dims the label.",
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
      description: "Mutes the group and stops the selection from changing.",
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
      description: "Adds a red asterisk after the group label.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    disabledOptions: {
      name: "Disabled options",
      control: "boolean",
      description: "Disables options 2 and 4 only (each option’s own \`disabled\`).",
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
      description: "The group label shown above the options.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Input Label"
        }
      }
    },
    helpText: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the group label (\`labelHelpText\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    error: {
      name: "Error",
      control: "boolean",
      description: "Shows an error message under the group (\`error\`).",
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
      description: "Stacks the options in a column or lines them up in a row.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "vertical"
        }
      }
    }
  }
}`,...(r=(l=o.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,z as default};
