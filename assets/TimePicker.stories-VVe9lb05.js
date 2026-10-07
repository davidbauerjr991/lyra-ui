import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-DhMLlvMY.js";import{T as m}from"./time-picker-BygXvaGp.js";import{t as o,E as v,H as T,f as V}from"./TimePicker.shared-CK07UbXq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-amkU61wz.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./time-picker-shared-C9vANgr4.js";import"./number-field-OvOJuudh.js";import"./error-icon-solid-eVlwMcX6.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";import"./select-DJKQGHZg.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./popover-Cbqqiubp.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-BLVj2C8E.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./search-CZxBQJsH.js";import"./date-picker-shared-SHAoPv3f.js";import"./calendar-t4SqpSdm.js";import"./clock-C3xVexPO.js";const Me={title:"Custom Primitives/TimePicker",component:m,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},size:{control:"radio",options:["sm","md"]}}};function S({disabled:e=!1,readonly:d=!1,required:p=!1,error:c=!1,label:u="Time",placeholder:y="HH:MM AM",value:f=!1,help:h=!1,menu:b=!1,ampmSelect:g=!0,size:M="md",allowed:l="any",step:w=30,iconPlacement:k="inside"}){const[a,x]=A.useState(f?o(9,30):void 0);return t.jsxs("div",{className:"w-56",children:[t.jsx(m,{label:u||void 0,labelHelpText:h?T:void 0,placeholder:y,value:a,onChange:x,disabled:e,readonly:d,required:p,size:M,menu:b,ampmSelect:g,error:c?v:void 0,minTime:l==="business"?o(9):void 0,maxTime:l==="business"?o(17):void 0,step:w,iconPlacement:k}),a&&t.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Selected: ",V(a)]})]})}const n={render:e=>t.jsx(S,{...e},JSON.stringify(e)),args:{disabled:!1,readonly:!1,required:!1,error:!1,label:"Time",placeholder:"HH:MM AM",value:!1,help:!1,menu:!1,ampmSelect:!0,size:"md",allowed:"any",step:30,iconPlacement:"inside"},parameters:{controls:{include:["Disabled","Read-only","Required","Error","Allowed times","Label","Placeholder","Value","Help text","Menu","Step","AM/PM select","Size","Icon placement","disabled","readonly","required","error","allowed","label","placeholder","value","help","menu","step","ampmSelect","size","iconPlacement"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Dims the picker and stops it opening or typing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Locks the picker and mutes the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},error:{name:"Error",control:"boolean",description:"Error message from the app (`error`): red field, \"Required\" under it, `aria-invalid`. Separately, typing text that isn't a time (e.g. 25:99) and leaving the field, or pressing Enter, shows the picker's own message.",table:{category:"Behavior",defaultValue:{summary:"false"}}},allowed:{name:"Allowed times",control:"radio",options:["any","business"],labels:{any:"Any time",business:"9:00 AM – 5:00 PM"},description:"Earliest and latest time (`minTime` / `maxTime`). The Menu list only shows times in range, and a typed or spun time outside it shows an error.",table:{category:"Behavior",defaultValue:{summary:"Any time"}}},label:{name:"Label",control:"text",description:"Text above the field. Clear it for a picker with no label.",table:{category:"Content",defaultValue:{summary:"Time"}}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while no time is picked.",table:{category:"Content",defaultValue:{summary:"HH:MM AM"}}},value:{name:"Value",control:"boolean",description:"Starts the picker at 9:30 AM (`value`). Off starts it empty.",table:{category:"Content",defaultValue:{summary:"false"}}},help:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",table:{category:"Content",defaultValue:{summary:"false"}}},menu:{name:"Menu",control:"boolean",description:"Opens a scrollable list of times instead of the hour/minute spinners (`menu`). Typing a time still works; Arrow Up/Down open and move through the list and Enter picks.",table:{category:"Appearance",defaultValue:{summary:"false"}}},step:{name:"Step",control:"radio",options:[15,30,60],labels:{15:"15 min",30:"30 min",60:"1 hour"},description:"Minutes between times in the Menu list (`step`).",if:{arg:"menu",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"30"}}},ampmSelect:{name:"AM/PM select",control:"boolean",description:"Makes AM/PM a dropdown instead of a toggle button in the hour/minute panel (`ampmSelect`). Not used while Menu is on.",if:{arg:"menu",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"true"}}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Small is 32px tall, medium is 36px.",table:{category:"Appearance",defaultValue:{summary:"md"}}},iconPlacement:{name:"Icon placement",control:"radio",options:["inside","outside"],labels:{inside:"Inside the field",outside:"Outside (old layout)"},description:"Where the clock icon sits (`iconPlacement`). Outside keeps the old layout, where a narrow field pushes the clock past its right edge; agent-next-gen-v3's quick-reply form uses it.",table:{category:"Appearance",defaultValue:{summary:"inside"}}}}};var r,i,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <TimePickerDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Time",
    placeholder: "HH:MM AM",
    value: false,
    help: false,
    menu: false,
    ampmSelect: true,
    size: "md",
    allowed: "any",
    step: 30,
    iconPlacement: "inside"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Error", "Allowed times", "Label", "Placeholder", "Value", "Help text", "Menu", "Step", "AM/PM select", "Size", "Icon placement", "disabled", "readonly", "required", "error", "allowed", "label", "placeholder", "value", "help", "menu", "step", "ampmSelect", "size", "iconPlacement"],
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
      description: "Error message from the app (\`error\`): red field, \\"Required\\" under it, \`aria-invalid\`. Separately, typing text that isn't a time (e.g. 25:99) and leaving the field, or pressing Enter, shows the picker's own message.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    allowed: {
      name: "Allowed times",
      control: "radio",
      options: ["any", "business"],
      labels: {
        any: "Any time",
        business: "9:00 AM – 5:00 PM"
      },
      description: "Earliest and latest time (\`minTime\` / \`maxTime\`). The Menu list only shows times in range, and a typed or spun time outside it shows an error.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "Any time"
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
          summary: "Time"
        }
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while no time is picked.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "HH:MM AM"
        }
      }
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Starts the picker at 9:30 AM (\`value\`). Off starts it empty.",
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
    menu: {
      name: "Menu",
      control: "boolean",
      description: "Opens a scrollable list of times instead of the hour/minute spinners (\`menu\`). Typing a time still works; Arrow Up/Down open and move through the list and Enter picks.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    step: {
      name: "Step",
      control: "radio",
      options: [15, 30, 60],
      labels: {
        15: "15 min",
        30: "30 min",
        60: "1 hour"
      },
      description: "Minutes between times in the Menu list (\`step\`).",
      if: {
        arg: "menu",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "30"
        }
      }
    },
    ampmSelect: {
      name: "AM/PM select",
      control: "boolean",
      description: "Makes AM/PM a dropdown instead of a toggle button in the hour/minute panel (\`ampmSelect\`). Not used while Menu is on.",
      if: {
        arg: "menu",
        truthy: false
      },
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
    },
    iconPlacement: {
      name: "Icon placement",
      control: "radio",
      options: ["inside", "outside"],
      labels: {
        inside: "Inside the field",
        outside: "Outside (old layout)"
      },
      description: "Where the clock icon sits (\`iconPlacement\`). Outside keeps the old layout, where a narrow field pushes the clock past its right edge; agent-next-gen-v3's quick-reply form uses it.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "inside"
        }
      }
    }
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const we=["Default"];export{n as Default,we as __namedExportsOrder,Me as default};
