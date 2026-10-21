import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DhMLlvMY.js";import{D as i}from"./date-picker-8K7LclcN.js";import{d as n,D as w}from"./DatePicker.shared-D-u23ly9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DjOBIGyd.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./label-Cmi0QrKL.js";import"./tooltip-E_6y_wR5.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./calendar-9BUMPdJf.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-right-BP9ksYh_.js";import"./button-DxuJ7r2Z.js";import"./index-1evVQkiP.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./date-picker-shared-5yzUfWxo.js";import"./error-icon-solid-eVlwMcX6.js";import"./calendar-t4SqpSdm.js";import"./date-time-picker-Bx-8Uq6w.js";import"./number-field-D2F4aNfQ.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";import"./date-range-picker-DYFGgUgv.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";const ie={title:"Custom Primitives/DatePicker",component:i,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function S({value:e="none",size:d="md",disabled:m=!1,readonly:p=!1,required:c=!1,helpText:u=!1,error:y="",constraints:a="none",showDaySteppers:f=!1,displayFormat:h="numeric"}){const b=a==="next30"?n(0):a==="past30"?n(-30):void 0,g=a==="next30"?n(30):a==="past30"?n(0):void 0,[x,D]=v.useState(e==="today"?new Date:void 0);return o.jsx("div",{className:"w-72",children:o.jsx(i,{label:"Date",labelHelpText:u?w:void 0,value:x,onChange:D,size:d,disabled:m,readonly:p,required:c,error:y||void 0,minDate:b,maxDate:g,showDaySteppers:f,displayFormat:h})})}const t={args:{value:"none",size:"md",disabled:!1,readonly:!1,required:!1,helpText:!1,error:"",constraints:"none",showDaySteppers:!1,displayFormat:"numeric"},parameters:{controls:{include:["Disabled","Read-only","Required","Error","Allowed dates","Value","Help text","Size","Day steppers","Display format","disabled","readonly","required","error","constraints","value","helpText","size","showDaySteppers","displayFormat"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Blocks interaction and dims the field.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Keeps the current value but blocks changes.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds an asterisk to the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},error:{name:"Error",control:"text",description:"Error message from the app (`error`): red field, message below, `aria-invalid`. Separately, typing text that isn't a real date (e.g. 13/45/2026) and leaving the field shows the picker's own message.",table:{category:"Behavior",defaultValue:{summary:"none"}}},constraints:{name:"Allowed dates",control:"radio",options:["none","next30","past30"],labels:{none:"Any date",next30:"Next 30 days",past30:"Past 30 days"},description:"Earliest and latest date (`minDate` / `maxDate`). Other days are disabled in the calendar, and a typed date outside the range shows an error.",table:{category:"Behavior",defaultValue:{summary:"Any date"}}},value:{name:"Value",control:"radio",options:["none","today"],labels:{none:"Empty",today:"Today"},description:"Starting value. Typing or picking a date changes it.",table:{category:"Content",defaultValue:{summary:"none"}}},helpText:{name:"Help text",control:"boolean",description:"Info icon with a tooltip on the label (`labelHelpText`).",table:{category:"Content",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["md","sm"],labels:{md:"Medium (36px)",sm:"Small (32px)"},description:"Field height. Small is for dense contexts.",table:{category:"Appearance",defaultValue:{summary:"md"}}},showDaySteppers:{name:"Day steppers",control:"boolean",description:"Previous / next day buttons beside the field (`showDaySteppers`).",table:{category:"Appearance",defaultValue:{summary:"false"}}},displayFormat:{name:"Display format",control:"radio",options:["numeric","medium"],labels:{numeric:"01/04/2026",medium:"Jan 4, 2026"},description:"How the date is shown and typed (`displayFormat`).",table:{category:"Appearance",defaultValue:{summary:"numeric"}}}},render:e=>o.jsx(S,{...e},JSON.stringify(e))};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: "none",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
    helpText: false,
    error: "",
    constraints: "none",
    showDaySteppers: false,
    displayFormat: "numeric"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Error", "Allowed dates", "Value", "Help text", "Size", "Day steppers", "Display format", "disabled", "readonly", "required", "error", "constraints", "value", "helpText", "size", "showDaySteppers", "displayFormat"],
      sort: "none"
    }
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Blocks interaction and dims the field.",
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
      description: "Keeps the current value but blocks changes.",
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
      description: "Adds an asterisk to the label.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    error: {
      name: "Error",
      control: "text",
      description: "Error message from the app (\`error\`): red field, message below, \`aria-invalid\`. Separately, typing text that isn't a real date (e.g. 13/45/2026) and leaving the field shows the picker's own message.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "none"
        }
      }
    },
    constraints: {
      name: "Allowed dates",
      control: "radio",
      options: ["none", "next30", "past30"],
      labels: {
        none: "Any date",
        next30: "Next 30 days",
        past30: "Past 30 days"
      },
      description: "Earliest and latest date (\`minDate\` / \`maxDate\`). Other days are disabled in the calendar, and a typed date outside the range shows an error.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "Any date"
        }
      }
    },
    value: {
      name: "Value",
      control: "radio",
      options: ["none", "today"],
      labels: {
        none: "Empty",
        today: "Today"
      },
      description: "Starting value. Typing or picking a date changes it.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "none"
        }
      }
    },
    helpText: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip on the label (\`labelHelpText\`).",
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
      options: ["md", "sm"],
      labels: {
        md: "Medium (36px)",
        sm: "Small (32px)"
      },
      description: "Field height. Small is for dense contexts.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    showDaySteppers: {
      name: "Day steppers",
      control: "boolean",
      description: "Previous / next day buttons beside the field (\`showDaySteppers\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    displayFormat: {
      name: "Display format",
      control: "radio",
      options: ["numeric", "medium"],
      labels: {
        numeric: "01/04/2026",
        medium: "Jan 4, 2026"
      },
      description: "How the date is shown and typed (\`displayFormat\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "numeric"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <DatePickerDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const de=["Default"];export{t as Default,de as __namedExportsOrder,ie as default};
