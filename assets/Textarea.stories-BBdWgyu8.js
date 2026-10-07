import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./utils-BLSKlp9E.js";import{T as l}from"./textarea-DqEeGScW.js";import{M as V,S as v,H as R}from"./Textarea.shared-jRsY784b.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const N={title:"Custom Primitives/Textarea",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},rows:{control:"select",options:[2,3,4,5,6,8]}}};function L({disabled:e=!1,readonly:s=!1,required:i=!1,error:d=!1,label:u="Input Label",placeholder:c="Placeholder",value:m=!1,help:p=!1,counter:f=!0,rows:b=4,autoGrow:h=!1,maxRows:y=10,resizable:g=!0,maxWidth:w=!1}){return r.jsx(l,{label:u||void 0,labelHelpText:p?R:void 0,placeholder:c,defaultValue:m?v:void 0,required:i,readonly:s,disabled:e,error:d?"Required":void 0,maxLength:f?V:void 0,rows:b,autoGrow:h,maxRows:y,className:x(w&&"min-w-[240px] max-w-[320px]",!g&&"[&_textarea]:resize-none")})}const a={render:e=>r.jsx(L,{...e},JSON.stringify(e)),args:{disabled:!1,readonly:!1,required:!1,error:!1,label:"Input Label",placeholder:"Placeholder",value:!1,help:!1,counter:!0,rows:4,autoGrow:!1,maxRows:10,resizable:!0,maxWidth:!1},parameters:{controls:{include:["Disabled","Read-only","Required","Error","Label","Placeholder","Value","Help text","Character counter","Rows","Auto-grow","Max rows","Resizable","Max width","disabled","readonly","required","error","label","placeholder","value","help","counter","rows","autoGrow","maxRows","resizable","maxWidth"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Dims the field and stops typing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Locks the field and mutes the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},error:{name:"Error",control:"boolean",description:'Shows the red error style and a "Required" message under the field (`error`).',table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"Text above the field. Clear it for a field with no label.",table:{category:"Content",defaultValue:{summary:"Input Label"}}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content",defaultValue:{summary:"Placeholder"}}},value:{name:"Value",control:"boolean",description:"Starts the field with sample text in it (`defaultValue`).",table:{category:"Content",defaultValue:{summary:"false"}}},help:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",table:{category:"Content",defaultValue:{summary:"false"}}},counter:{name:"Character counter",control:"boolean",description:"Limits the text to 100 characters and shows a counter beside the label (`maxLength`).",table:{category:"Content",defaultValue:{summary:"true"}}},rows:{name:"Rows",control:"select",options:[2,3,4,5,6,8],description:"How many lines of text are visible before it scrolls (`rows`).",table:{category:"Appearance",defaultValue:{summary:"4"}}},autoGrow:{name:"Auto-grow",control:"boolean",description:"The field gets taller as people type, starting at Rows and stopping at Max rows (`autoGrow`). The drag handle is hidden while on.",table:{category:"Behavior",defaultValue:{summary:"false"}}},maxRows:{name:"Max rows",control:{type:"number",min:2,max:20,step:1},description:"Tallest an auto-grow field gets before it scrolls (`maxRows`). Only applies with Auto-grow on.",if:{arg:"autoGrow",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"10"}}},resizable:{name:"Resizable",control:"boolean",description:"Lets people drag the bottom-right corner to make the field taller. Off removes the drag handle. Read-only and disabled fields never resize.",table:{category:"Appearance",defaultValue:{summary:"true"}}},maxWidth:{name:"Max width",control:"boolean",description:"Bounds the field between 240px and 320px. Off stretches it across its container.",table:{category:"Appearance",defaultValue:{summary:"false"}}}}};var t,n,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <TextareaDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Input Label",
    placeholder: "Placeholder",
    value: false,
    help: false,
    counter: true,
    rows: 4,
    autoGrow: false,
    maxRows: 10,
    resizable: true,
    maxWidth: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Error", "Label", "Placeholder", "Value", "Help text", "Character counter", "Rows", "Auto-grow", "Max rows", "Resizable", "Max width", "disabled", "readonly", "required", "error", "label", "placeholder", "value", "help", "counter", "rows", "autoGrow", "maxRows", "resizable", "maxWidth"],
      sort: "none"
    }
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the field and stops typing.",
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
      description: "Locks the field and mutes the label.",
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
    error: {
      name: "Error",
      control: "boolean",
      description: "Shows the red error style and a \\"Required\\" message under the field (\`error\`).",
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
      description: "Text above the field. Clear it for a field with no label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Input Label"
        }
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Placeholder"
        }
      }
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Starts the field with sample text in it (\`defaultValue\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
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
    counter: {
      name: "Character counter",
      control: "boolean",
      description: "Limits the text to 100 characters and shows a counter beside the label (\`maxLength\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    rows: {
      name: "Rows",
      control: "select",
      options: [2, 3, 4, 5, 6, 8],
      description: "How many lines of text are visible before it scrolls (\`rows\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "4"
        }
      }
    },
    autoGrow: {
      name: "Auto-grow",
      control: "boolean",
      description: "The field gets taller as people type, starting at Rows and stopping at Max rows (\`autoGrow\`). The drag handle is hidden while on.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    maxRows: {
      name: "Max rows",
      control: {
        type: "number",
        min: 2,
        max: 20,
        step: 1
      },
      description: "Tallest an auto-grow field gets before it scrolls (\`maxRows\`). Only applies with Auto-grow on.",
      if: {
        arg: "autoGrow",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "10"
        }
      }
    },
    resizable: {
      name: "Resizable",
      control: "boolean",
      description: "Lets people drag the bottom-right corner to make the field taller. Off removes the drag handle. Read-only and disabled fields never resize.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the field between 240px and 320px. Off stretches it across its container.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,N as default};
