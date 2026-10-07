import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-DhMLlvMY.js";import{I as O}from"./input-CHxvM1hc.js";import{L as h}from"./label-amkU61wz.js";import{S as j}from"./separator-97dXnQFu.js";import{T as J}from"./tooltip-DKTByY8R.js";import{E as X}from"./error-icon-BKl2xMq_.js";import{c as I}from"./utils-BLSKlp9E.js";import{H as G,P as K}from"./Input.shared-CNhhhO-7.js";import{X as Q}from"./x-CzxgOx-T.js";import{M as U}from"./mail-BgfsS5Lx.js";import{S as Y}from"./search-CZxBQJsH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./pencil-IFm_bK0G.js";import"./settings-B3RqFsd1.js";import"./copy-CtBWyGKZ.js";const Se={title:"Custom Primitives/Input",component:O,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},size:{control:"radio",options:["sm","md"]}}};function Z({disabled:a=!1,readonly:i=!1,required:o=!1,error:y=!1,label:l="Input Label",placeholder:T="Text",value:g=!1,help:N=!1,size:x="md",startIcon:z=!1,endIcon:k=!1,clearButton:E=!1,labelOnly:w=!1,vertical:H=!0,withButtons:t=!1,buttonsPosition:u="right",iconButtons:R=!0,buttonType:W="ghost",buttonSize:M="sm",buttonCount:D=2,maxWidth:c=!1,showCount:v=!1,maxLength:q=40}){const[V,B]=F.useState(g?"Text":""),p=g?"Read-only value":"",P=E&&!a&&!i&&V.length>0,r=!H,s=N?G:void 0,d=u==="left"||u==="both",m=u==="right"||u==="both",n=e.jsx(K,{iconOnly:R,variant:W,size:M,count:D}),C=y&&e.jsxs("div",{className:"flex items-center gap-1 mt-1.5",children:[e.jsx(X,{className:"h-3.5 w-3.5 flex-shrink-0","aria-hidden":"true"}),e.jsx("span",{className:"lyra-body-sm text-lyra-status-critical-strong",children:"Required"})]}),b=e.jsx(O,{label:t||r?void 0:l,labelHelpText:t||r?void 0:s,required:o,readonly:i,disabled:a,size:x,placeholder:T,value:V,onChange:_=>B(_.target.value),showCount:v,maxLength:v?q:void 0,error:y?"Required":void 0,startIcon:z?e.jsx(Y,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5}):void 0,endIcon:P?e.jsx(J,{content:"Clear",placement:"top",children:e.jsx("button",{type:"button","aria-label":"Clear",onClick:()=>B(""),className:"pointer-events-auto flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:e.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}):k?e.jsx(U,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5}):void 0,className:r?c?"min-w-[240px] max-w-[320px]":"w-full":t?"flex-1 min-w-0":c?"min-w-[240px] max-w-[320px]":void 0});return r&&w?e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx(h,{label:l,required:o,labelHelpText:s}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[t&&d&&n,e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:p}),t&&m&&n]})]}),C,e.jsx(j,{className:"mt-3"})]}):r?e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsx("div",{className:x==="sm"?"flex h-8 items-center":"flex h-9 items-center",children:e.jsx(h,{label:l,required:o,labelHelpText:s,disabled:a,readonly:i})}),e.jsxs("div",{className:I("flex items-start gap-0.5",!c&&"flex-1 min-w-0"),children:[t&&d&&n,b,t&&m&&n]})]}),e.jsx(j,{className:"mt-3"})]}):w?e.jsxs("div",{className:"w-72",children:[e.jsx(h,{label:l,required:o,labelHelpText:s,supportingText:t?void 0:p||void 0}),t&&e.jsxs("div",{className:"flex items-center gap-0.5",children:[d&&n,e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:p}),m&&n]}),C]}):t?e.jsxs("div",{className:I("flex flex-col gap-1.5",c?"min-w-[240px] max-w-[320px]":"w-full"),children:[e.jsx(h,{label:l,required:o,labelHelpText:s,disabled:a,readonly:i}),e.jsxs("div",{className:"flex items-start gap-0.5",children:[d&&n,b,m&&n]})]}):b}const f={render:a=>e.jsx(Z,{...a},JSON.stringify(a)),args:{disabled:!1,readonly:!1,required:!1,error:!1,label:"Input Label",placeholder:"Text",value:!1,help:!1,size:"md",startIcon:!1,endIcon:!1,clearButton:!1,labelOnly:!1,vertical:!0,withButtons:!1,buttonsPosition:"right",iconButtons:!0,buttonType:"ghost",buttonSize:"sm",buttonCount:2,maxWidth:!1,showCount:!1,maxLength:40},parameters:{controls:{include:["Disabled","Read-only","Required","Error","Label","Placeholder","Value","Help text","Label only","Vertical","Size","Start icon","End icon","Clear button","With buttons","Buttons position","Icon buttons","Button type","Button size","Button count","Max width","Character counter","Max length","disabled","readonly","required","error","label","placeholder","value","help","labelOnly","vertical","size","startIcon","endIcon","clearButton","withButtons","buttonsPosition","iconButtons","buttonType","buttonSize","buttonCount","maxWidth","showCount","maxLength"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Dims the field and stops typing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Locks the field and mutes the label. Doesn't apply when Label only is on.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},error:{name:"Error",control:"boolean",description:'Shows the red error style and a "Required" message under the field (`error`).',table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"Text above the field. Clear it for a field with no label.",table:{category:"Content",defaultValue:{summary:"Input Label"}}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content",defaultValue:{summary:"Text"}}},value:{name:"Value",control:"boolean",description:"Fills in a sample value: text in the field, or the read-only value shown with the label when Label only is on.",table:{category:"Content",defaultValue:{summary:"false"}}},help:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`). Needs a label.",table:{category:"Content",defaultValue:{summary:"false"}}},labelOnly:{name:"Label only",control:"boolean",description:"Shows the label with a read-only value and no input box.",table:{category:"Appearance",defaultValue:{summary:"false"}}},vertical:{name:"Vertical",control:"boolean",description:"On stacks the label above the field or value. Off puts the label on the left and the field or value on the right, with a divider underneath.",table:{category:"Appearance",defaultValue:{summary:"true"}}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Small is 32px tall, medium is 36px.",if:{arg:"labelOnly",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"md"}}},startIcon:{name:"Start icon",control:"boolean",description:"Search icon at the start of the field (`startIcon`).",if:{arg:"labelOnly",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}},endIcon:{name:"End icon",control:"boolean",description:"Mail icon at the end of the field (`endIcon`).",if:{arg:"labelOnly",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}},clearButton:{name:"Clear button",control:"boolean",description:"An × inside the field that clears the text. Shows once there is text to clear, and replaces the end icon while it does.",if:{arg:"labelOnly",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}},withButtons:{name:"With buttons",control:"boolean",description:"Adds placeholder action buttons beside the field or value.",table:{category:"Appearance",defaultValue:{summary:"false"}}},buttonsPosition:{name:"Buttons position",control:"select",options:["left","right","both"],description:"Which side of the field or value the buttons sit on.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"right"}}},iconButtons:{name:"Icon buttons",control:"boolean",description:'On shows icon-only buttons. Off shows text buttons labeled "Action".',if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"true"}}},buttonType:{name:"Button type",control:"select",options:["default","destructive","warning","success","outline","ghost"],description:"Color and style of the buttons. Works for icon and text buttons.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"ghost"}}},buttonSize:{name:"Button size",control:"select",options:["sm","default","lg","xl"],description:"Button height: 24, 32, 36 or 40px.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"sm"}}},buttonCount:{name:"Button count",control:"select",options:[1,2,3],description:"How many placeholder buttons show.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"2"}}},showCount:{name:"Character counter",control:"boolean",description:'Shows a live "12/40" counter above the field (`showCount`, needs `maxLength`). Typing stops at the limit.',table:{category:"Content",defaultValue:{summary:"false"}}},maxLength:{name:"Max length",control:{type:"number",min:5,max:200},description:"Character limit used by the counter (`maxLength`).",if:{arg:"showCount",truthy:!0},table:{category:"Content",defaultValue:{summary:"40"}}},maxWidth:{name:"Max width",control:"boolean",description:"Bounds the field between 240px and 320px instead of full width. Off stretches the input across the row (with Vertical off, from the label to the right edge).",if:{arg:"labelOnly",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}}}};var S,A,L;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <InputDemo key={JSON.stringify(args)} {...args} />,
  args: {
    disabled: false,
    readonly: false,
    required: false,
    error: false,
    label: "Input Label",
    placeholder: "Text",
    value: false,
    help: false,
    size: "md",
    startIcon: false,
    endIcon: false,
    clearButton: false,
    labelOnly: false,
    vertical: true,
    withButtons: false,
    buttonsPosition: "right",
    iconButtons: true,
    buttonType: "ghost",
    buttonSize: "sm",
    buttonCount: 2,
    maxWidth: false,
    showCount: false,
    maxLength: 40
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Disabled", "Read-only", "Required", "Error", "Label", "Placeholder", "Value", "Help text", "Label only", "Vertical", "Size", "Start icon", "End icon", "Clear button", "With buttons", "Buttons position", "Icon buttons", "Button type", "Button size", "Button count", "Max width", "Character counter", "Max length", "disabled", "readonly", "required", "error", "label", "placeholder", "value", "help", "labelOnly", "vertical", "size", "startIcon", "endIcon", "clearButton", "withButtons", "buttonsPosition", "iconButtons", "buttonType", "buttonSize", "buttonCount", "maxWidth", "showCount", "maxLength"],
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
      description: "Locks the field and mutes the label. Doesn't apply when Label only is on.",
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
          summary: "Text"
        }
      }
    },
    value: {
      name: "Value",
      control: "boolean",
      description: "Fills in a sample value: text in the field, or the read-only value shown with the label when Label only is on.",
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
    labelOnly: {
      name: "Label only",
      control: "boolean",
      description: "Shows the label with a read-only value and no input box.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    vertical: {
      name: "Vertical",
      control: "boolean",
      description: "On stacks the label above the field or value. Off puts the label on the left and the field or value on the right, with a divider underneath.",
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
      if: {
        arg: "labelOnly",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    startIcon: {
      name: "Start icon",
      control: "boolean",
      description: "Search icon at the start of the field (\`startIcon\`).",
      if: {
        arg: "labelOnly",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    endIcon: {
      name: "End icon",
      control: "boolean",
      description: "Mail icon at the end of the field (\`endIcon\`).",
      if: {
        arg: "labelOnly",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    clearButton: {
      name: "Clear button",
      control: "boolean",
      description: "An × inside the field that clears the text. Shows once there is text to clear, and replaces the end icon while it does.",
      if: {
        arg: "labelOnly",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    withButtons: {
      name: "With buttons",
      control: "boolean",
      description: "Adds placeholder action buttons beside the field or value.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    buttonsPosition: {
      name: "Buttons position",
      control: "select",
      options: ["left", "right", "both"],
      description: "Which side of the field or value the buttons sit on.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "right"
        }
      }
    },
    iconButtons: {
      name: "Icon buttons",
      control: "boolean",
      description: "On shows icon-only buttons. Off shows text buttons labeled \\"Action\\".",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    buttonType: {
      name: "Button type",
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "ghost"],
      description: "Color and style of the buttons. Works for icon and text buttons.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "ghost"
        }
      }
    },
    buttonSize: {
      name: "Button size",
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "Button height: 24, 32, 36 or 40px.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "sm"
        }
      }
    },
    buttonCount: {
      name: "Button count",
      control: "select",
      options: [1, 2, 3],
      description: "How many placeholder buttons show.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "2"
        }
      }
    },
    showCount: {
      name: "Character counter",
      control: "boolean",
      description: "Shows a live \\"12/40\\" counter above the field (\`showCount\`, needs \`maxLength\`). Typing stops at the limit.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    maxLength: {
      name: "Max length",
      control: {
        type: "number",
        min: 5,
        max: 200
      },
      description: "Character limit used by the counter (\`maxLength\`).",
      if: {
        arg: "showCount",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "40"
        }
      }
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the field between 240px and 320px instead of full width. Off stretches the input across the row (with Vertical off, from the label to the right edge).",
      if: {
        arg: "labelOnly",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
}`,...(L=(A=f.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const Ae=["Default"];export{f as Default,Ae as __namedExportsOrder,Se as default};
