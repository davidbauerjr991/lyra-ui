import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DhMLlvMY.js";import{R as g,a as x}from"./radio-sgkaDL_k.js";import{L as R}from"./label-amkU61wz.js";import{E as L}from"./error-icon-solid-eVlwMcX6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-ufxNB_-2.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const W={title:"Headless Primitives/Radio",component:g,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},orientation:{control:"radio",options:["vertical","horizontal"]}}},O="This selection cannot be changed.",V="At least one field must be selected";function N({selected:a="option1",groupLabel:t=!0,disabled:l=!1,readonly:n=!1,required:r=!1,orientation:y="vertical",itemLabel:f="Radio label"}){const d=s.useId(),c=s.useId(),[u,v]=s.useState(r||a==="none"?void 0:a),i=r&&!l&&!n&&!u;return e.jsxs("div",{className:"flex flex-col",children:[t&&e.jsx(R,{id:d,label:"Input Label",required:r,disabled:l,readonly:n,labelHelpText:n?O:void 0,className:"mb-1.5"}),e.jsx(g,{"aria-labelledby":t?d:void 0,"aria-label":t?void 0:"Input Label","aria-describedby":i?c:void 0,name:"radio-default-demo",value:u??"",onValueChange:v,disabled:l||n,orientation:y,children:["option1","option2","option3"].map(p=>e.jsx(x,{value:p,label:f,className:i?"[&>button]:!border-lyra-status-critical-strong":void 0},p))}),i&&e.jsxs("div",{id:c,className:"flex items-center gap-1 mt-2",children:[e.jsx(L,{className:"h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong","aria-hidden":"true"}),e.jsx("span",{className:"lyra-body-sm text-lyra-status-critical-strong",children:V})]})]})}const o={render:a=>e.jsx(N,{...a},JSON.stringify(a)),args:{selected:"option1",groupLabel:!0,disabled:!1,readonly:!1,required:!1,orientation:"vertical",itemLabel:"Radio label"},parameters:{controls:{include:["Selected option","Disabled","Read-only","Required","Label","Option label","Orientation","selected","groupLabel","disabled","readonly","required","itemLabel","orientation"],sort:"none"}},argTypes:{selected:{name:"Selected option",control:{type:"select",labels:{none:"None",option1:"Option 1",option2:"Option 2",option3:"Option 3"}},options:["none","option1","option2","option3"],description:"Which radio starts selected (`defaultValue`). “None” leaves all unselected. Turning Required on clears it.",table:{category:"Behavior",defaultValue:{summary:"none"}}},disabled:{name:"Disabled",control:"boolean",description:"Disables every radio in the group and dims the group label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Mutes the group label, adds a help icon with a tooltip, and stops the selection from changing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the group label and a red “At least one field must be selected” helper line with an error icon and red outlines on the radio circles until one is picked, and clears the selection. Needs the label showing.",if:{arg:"groupLabel",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"false"}}},groupLabel:{name:"Label",control:"boolean",description:"Shows the group label above the radios.",table:{category:"Content",defaultValue:{summary:"true"}}},itemLabel:{name:"Option label",control:"text",description:"Text shown next to each radio.",table:{category:"Content",defaultValue:{summary:"Radio label"}}},orientation:{name:"Orientation",control:"radio",options:["vertical","horizontal"],description:"Stacks the radios in a column or lines them up in a row.",table:{category:"Appearance",defaultValue:{summary:"vertical"}}}}};var m,b,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <RadioDemo key={JSON.stringify(args)} {...args} />,
  args: {
    selected: "option1",
    groupLabel: true,
    disabled: false,
    readonly: false,
    required: false,
    orientation: "vertical",
    itemLabel: "Radio label"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Selected option", "Disabled", "Read-only", "Required", "Label", "Option label", "Orientation", "selected", "groupLabel", "disabled", "readonly", "required", "itemLabel", "orientation"],
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
          option3: "Option 3"
        }
      },
      options: ["none", "option1", "option2", "option3"],
      description: "Which radio starts selected (\`defaultValue\`). “None” leaves all unselected. Turning Required on clears it.",
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
      description: "Disables every radio in the group and dims the group label.",
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
      description: "Mutes the group label, adds a help icon with a tooltip, and stops the selection from changing.",
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
      description: "Adds a red asterisk after the group label and a red “At least one field must be selected” helper line with an error icon and red outlines on the radio circles until one is picked, and clears the selection. Needs the label showing.",
      if: {
        arg: "groupLabel",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    groupLabel: {
      name: "Label",
      control: "boolean",
      description: "Shows the group label above the radios.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    itemLabel: {
      name: "Option label",
      control: "text",
      description: "Text shown next to each radio.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Radio label"
        }
      }
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "Stacks the radios in a column or lines them up in a row.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "vertical"
        }
      }
    }
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
