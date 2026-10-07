import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DhMLlvMY.js";import{N as d}from"./number-field-BLpGx-3v.js";import{N as w}from"./NumberField.shared-IxX_a8t3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";const F={title:"Custom Primitives/Number Field",component:d,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function M({state:e="default",required:m=!1,label:c="Quantity",labelHelpText:u="",limitRange:n=!1,min:r=0,max:o=10,wrap:b=!1,step:h=1,size:g="md"}){const i=n?Math.min(r,o):void 0,x=n?Math.max(r,o):void 0,[y,f]=v.useState(i??0);return a.jsx("div",{className:"w-40",children:a.jsx(d,{label:c,labelHelpText:u||void 0,value:y,onChange:f,min:i,max:x,step:h,wrap:n&&b,size:g,required:m,disabled:e==="disabled",readonly:e==="read-only",error:e==="error"?w:void 0})})}const t={args:{state:"default",required:!1,label:"Quantity",labelHelpText:"",limitRange:!1,min:0,max:10,wrap:!1,step:1,size:"md"},parameters:{controls:{include:["state","required","label","labelHelpText","limitRange","min","max","wrap","step","size","State","Required","Label","Label help text","Limit range","Min","Max","Wrap around","Step","Size"],sort:"none"}},argTypes:{state:{name:"State",control:"select",options:["default","error","disabled","read-only"],description:"Error shows an error message (`error`). Disabled and read-only lock the field.",table:{category:"Behavior"}},required:{name:"Required",control:"boolean",description:"Adds the required marker to the label (`required`). Works alongside any state.",table:{category:"Behavior"}},limitRange:{name:"Limit range",control:"boolean",description:"Turns on the Min and Max limits. Off leaves the value unbounded.",table:{category:"Behavior"}},min:{name:"Min",control:{type:"number"},description:"Lowest allowed value (`min`). The field starts here. Swapped with Max if set above it.",if:{arg:"limitRange",truthy:!0},table:{category:"Behavior"}},max:{name:"Max",control:{type:"number"},description:"Highest allowed value (`max`).",if:{arg:"limitRange",truthy:!0},table:{category:"Behavior"}},wrap:{name:"Wrap around",control:"boolean",description:"Stepping past Max returns to Min, and past Min goes to Max (`wrap`). Needs Min and Max.",if:{arg:"limitRange",truthy:!0},table:{category:"Behavior"}},step:{name:"Step",control:{type:"number",min:1},description:"How much the stepper buttons and arrow keys change the value (`step`). PageUp / PageDown move by 10 steps.",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text above the field (`label`).",table:{category:"Content"}},labelHelpText:{name:"Label help text",control:"text",description:"Help text shown next to the label (`labelHelpText`). Empty for none.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"sm is 32px for dense contexts. md is the 36px default every other field uses.",table:{category:"Appearance"}}},render:e=>a.jsx(M,{...e},JSON.stringify(e))};var l,s,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    state: "default",
    required: false,
    label: "Quantity",
    labelHelpText: "",
    limitRange: false,
    min: 0,
    max: 10,
    wrap: false,
    step: 1,
    size: "md"
  },
  parameters: {
    controls: {
      include: ["state", "required", "label", "labelHelpText", "limitRange", "min", "max", "wrap", "step", "size", "State", "Required", "Label", "Label help text", "Limit range", "Min", "Max", "Wrap around", "Step", "Size"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "error", "disabled", "read-only"],
      description: "Error shows an error message (\`error\`). Disabled and read-only lock the field.",
      table: {
        category: "Behavior"
      }
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds the required marker to the label (\`required\`). Works alongside any state.",
      table: {
        category: "Behavior"
      }
    },
    limitRange: {
      name: "Limit range",
      control: "boolean",
      description: "Turns on the Min and Max limits. Off leaves the value unbounded.",
      table: {
        category: "Behavior"
      }
    },
    min: {
      name: "Min",
      control: {
        type: "number"
      },
      description: "Lowest allowed value (\`min\`). The field starts here. Swapped with Max if set above it.",
      if: {
        arg: "limitRange",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    },
    max: {
      name: "Max",
      control: {
        type: "number"
      },
      description: "Highest allowed value (\`max\`).",
      if: {
        arg: "limitRange",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    },
    wrap: {
      name: "Wrap around",
      control: "boolean",
      description: "Stepping past Max returns to Min, and past Min goes to Max (\`wrap\`). Needs Min and Max.",
      if: {
        arg: "limitRange",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    },
    step: {
      name: "Step",
      control: {
        type: "number",
        min: 1
      },
      description: "How much the stepper buttons and arrow keys change the value (\`step\`). PageUp / PageDown move by 10 steps.",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the field (\`label\`).",
      table: {
        category: "Content"
      }
    },
    labelHelpText: {
      name: "Label help text",
      control: "text",
      description: "Help text shown next to the label (\`labelHelpText\`). Empty for none.",
      table: {
        category: "Content"
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "sm is 32px for dense contexts. md is the 36px default every other field uses.",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <NumberFieldDemo key={JSON.stringify(args)} {...args} />
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Q=["Default"];export{t as Default,Q as __namedExportsOrder,F as default};
