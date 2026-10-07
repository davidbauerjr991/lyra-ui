import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DhMLlvMY.js";import{D as i}from"./date-range-picker-1qOAUQTZ.js";import{d as n,n as k,R as T}from"./DatePicker.shared-BHHkqFwE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./calendar-9k0C0Giy.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-right-BP9ksYh_.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./date-picker-shared-SHAoPv3f.js";import"./error-icon-solid-eVlwMcX6.js";import"./calendar-t4SqpSdm.js";import"./date-picker-CiFGPBOr.js";import"./button-BLVj2C8E.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./date-time-picker-D3nKUGhR.js";import"./number-field-OvOJuudh.js";const se={title:"Custom Primitives/DateRangePicker",component:i,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function V({value:e="none",size:d="md",disabled:m=!1,readonly:p=!1,required:c=!1,helpText:u=!1,error:y="",constraints:a="none",presets:g=!1}){const f=a==="past90"?n(-90):a==="next90"?n(0):void 0,h=a==="past90"?n(0):a==="next90"?n(90):void 0,[b,x]=v.useState(e==="nextWeek"?k():void 0);return o.jsx("div",{className:"w-96",children:o.jsx(i,{label:"Date Range",labelHelpText:u?T:void 0,value:b,onChange:x,size:d,disabled:m,readonly:p,required:c,error:y||void 0,minDate:f,maxDate:h,presets:g})})}const t={args:{value:"none",size:"md",disabled:!1,readonly:!1,required:!1,helpText:!1,error:"",constraints:"none",presets:!1},parameters:{controls:{include:["Disabled","Read-only","Required","Error","Allowed dates","Presets","Value","Help text","Size","disabled","readonly","required","error","constraints","presets","value","helpText","size"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Blocks interaction and dims the field.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Keeps the current value but blocks changes.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds an asterisk to the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},error:{name:"Error",control:"text",description:"Error message from the app (`error`): red field, message below, `aria-invalid`. Separately, typing text that isn't a full range of real dates (e.g. 10/05/2026 alone) and leaving the field shows the picker's own message.",table:{category:"Behavior",defaultValue:{summary:"none"}}},constraints:{name:"Allowed dates",control:"radio",options:["none","past90","next90"],labels:{none:"Any date",past90:"Last 90 days",next90:"Next 90 days"},description:"Earliest and latest date (`minDate` / `maxDate`). Other days are disabled in the calendar, presets outside the range are disabled, and a typed range outside it shows an error.",table:{category:"Behavior",defaultValue:{summary:"Any date"}}},presets:{name:"Presets",control:"boolean",description:"Quick ranges beside the calendar: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month (`presets`). Pass your own list to customize.",table:{category:"Behavior",defaultValue:{summary:"false"}}},value:{name:"Value",control:"radio",options:["none","nextWeek"],labels:{none:"Empty",nextWeek:"Today to next week"},description:"Starting value. Typing or picking dates changes it.",table:{category:"Content",defaultValue:{summary:"none"}}},helpText:{name:"Help text",control:"boolean",description:"Info icon with a tooltip on the label (`labelHelpText`).",table:{category:"Content",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["md","sm"],labels:{md:"Medium (36px)",sm:"Small (32px)"},description:"Field height. Small is for dense contexts.",table:{category:"Appearance",defaultValue:{summary:"md"}}}},render:e=>o.jsx(V,{...e},JSON.stringify(e))};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    value: "none",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
    helpText: false,
    error: "",
    constraints: "none",
    presets: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Error", "Allowed dates", "Presets", "Value", "Help text", "Size", "disabled", "readonly", "required", "error", "constraints", "presets", "value", "helpText", "size"],
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
      description: "Error message from the app (\`error\`): red field, message below, \`aria-invalid\`. Separately, typing text that isn't a full range of real dates (e.g. 10/05/2026 alone) and leaving the field shows the picker's own message.",
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
      options: ["none", "past90", "next90"],
      labels: {
        none: "Any date",
        past90: "Last 90 days",
        next90: "Next 90 days"
      },
      description: "Earliest and latest date (\`minDate\` / \`maxDate\`). Other days are disabled in the calendar, presets outside the range are disabled, and a typed range outside it shows an error.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "Any date"
        }
      }
    },
    presets: {
      name: "Presets",
      control: "boolean",
      description: "Quick ranges beside the calendar: Today, Yesterday, Last 7 days, Last 30 days, This month, Last month (\`presets\`). Pass your own list to customize.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    value: {
      name: "Value",
      control: "radio",
      options: ["none", "nextWeek"],
      labels: {
        none: "Empty",
        nextWeek: "Today to next week"
      },
      description: "Starting value. Typing or picking dates changes it.",
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
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <DateRangePickerDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const le=["Default"];export{t as Default,le as __namedExportsOrder,se as default};
