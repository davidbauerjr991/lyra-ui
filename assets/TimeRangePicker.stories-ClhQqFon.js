import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DhMLlvMY.js";import{T as m}from"./time-range-picker-D01YqYoK.js";import{t as r,T as H,H as k,f as o}from"./TimePicker.shared-CK07UbXq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-amkU61wz.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./time-picker-shared-C2GKxNBY.js";import"./number-field-BLpGx-3v.js";import"./error-icon-solid-eVlwMcX6.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";import"./select-Ct-JPb8f.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./popover-Cbqqiubp.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./search-CZxBQJsH.js";import"./clock-C3xVexPO.js";const ue={title:"Custom Primitives/TimeRangePicker",component:m,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},size:{control:"radio",options:["sm","md"]}}};function A({disabled:t=!1,readonly:d=!1,required:p=!1,error:c=!1,label:u="Time range",placeholder:f="HH:MM AM – HH:MM AM",value:b=!1,help:y=!1,ampmSelect:h=!0,size:g="md"}){const[e,M]=x.useState(b?{from:r(9,0),to:r(17,0)}:void 0);return a.jsxs("div",{className:"w-72",children:[a.jsx(H,{error:c,children:a.jsx(m,{label:u||void 0,labelHelpText:y?k:void 0,placeholder:f,value:e,onChange:M,disabled:t,readonly:d,required:p,ampmSelect:h,size:g})}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&a.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:[o(e.from)," – ",o(e.to)]})]})}const n={render:t=>a.jsx(A,{...t},JSON.stringify(t)),args:{disabled:!1,readonly:!1,required:!1,error:!1,label:"Time range",placeholder:"HH:MM AM – HH:MM AM",value:!1,help:!1,ampmSelect:!0,size:"md"},parameters:{controls:{include:["Disabled","Read-only","Required","Error","Label","Placeholder","Value","Help text","AM/PM select","Size","disabled","readonly","required","error","label","placeholder","value","help","ampmSelect","size"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Dims the picker and stops it opening or typing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Locks the picker and mutes the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},error:{name:"Error",control:"boolean",description:'Shows the red error style and a "Required" message under the field.',table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"Text above the field. Clear it for a picker with no label.",table:{category:"Content",defaultValue:{summary:"Time range"}}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while no range is picked.",table:{category:"Content",defaultValue:{summary:"HH:MM AM – HH:MM AM"}}},value:{name:"Value",control:"boolean",description:"Starts the picker at 9:00 AM – 5:00 PM (`value`). Off starts it empty.",table:{category:"Content",defaultValue:{summary:"false"}}},help:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",table:{category:"Content",defaultValue:{summary:"false"}}},ampmSelect:{name:"AM/PM select",control:"boolean",description:"Makes AM/PM a dropdown instead of a toggle button in the start and end panels (`ampmSelect`).",table:{category:"Appearance",defaultValue:{summary:"true"}}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Small is 32px tall, medium is 36px.",table:{category:"Appearance",defaultValue:{summary:"md"}}}}};var l,i,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <TimeRangePickerDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Time range",
    placeholder: "HH:MM AM – HH:MM AM",
    value: false,
    help: false,
    ampmSelect: true,
    size: "md"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Error", "Label", "Placeholder", "Value", "Help text", "AM/PM select", "Size", "disabled", "readonly", "required", "error", "label", "placeholder", "value", "help", "ampmSelect", "size"],
      sort: "none"
    }
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the picker and stops it opening or typing.",
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
      description: "Locks the picker and mutes the label.",
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
      description: "Shows the red error style and a \\"Required\\" message under the field.",
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
      description: "Text above the field. Clear it for a picker with no label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Time range"
        }
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while no range is picked.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "HH:MM AM – HH:MM AM"
        }
      }
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Starts the picker at 9:00 AM – 5:00 PM (\`value\`). Off starts it empty.",
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
    ampmSelect: {
      name: "AM/PM select",
      control: "boolean",
      description: "Makes AM/PM a dropdown instead of a toggle button in the start and end panels (\`ampmSelect\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Small is 32px tall, medium is 36px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    }
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,ue as default};
