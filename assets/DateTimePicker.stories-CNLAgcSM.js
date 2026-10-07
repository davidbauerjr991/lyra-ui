import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DhMLlvMY.js";import{a as p,D as x}from"./date-time-picker-rrR2z14y.js";import{S as v,a as T,b as k,R as D}from"./DateTimePicker.shared-ZYSv8fVv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./calendar-9k0C0Giy.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-right-BP9ksYh_.js";import"./number-field-BLpGx-3v.js";import"./error-icon-solid-eVlwMcX6.js";import"./chevron-up-dmEEfYqc.js";import"./chevron-down-gMYAX9-q.js";import"./calendar-t4SqpSdm.js";const Y={title:"Custom Primitives/DateTimePicker",component:p,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function S({mode:t="single",fieldState:n="default",startingValue:o="none",label:c="Date & Time",labelHelpText:m="",placeholder:b="",size:g="md"}){const[h,u]=r.useState(o==="filled"?v():void 0),[y,f]=r.useState(o==="filled"?T():void 0),l={label:c,labelHelpText:m||void 0,placeholder:b||void 0,required:n==="required",disabled:n==="disabled",readonly:n==="readOnly",size:g};return t==="single"?e.jsx("div",{className:k,children:e.jsx(p,{...l,value:h,onChange:u})}):e.jsx("div",{className:D,children:e.jsx(x,{...l,value:y,onChange:f})})}const a={parameters:{controls:{include:["mode","fieldState","startingValue","label","labelHelpText","placeholder","size","Picker","Field state","Starting value","Label","Label help text","Placeholder","Size"],sort:"none"}},args:{mode:"single",fieldState:"default",startingValue:"none",label:"Date & Time",labelHelpText:"",placeholder:"",size:"md"},argTypes:{mode:{name:"Picker",control:"radio",options:["single","range"],description:"A single date and time (`DateTimePicker`) or a start and end date with times (`DateRangeTimePicker`).",table:{category:"Behavior"}},fieldState:{name:"Field state",control:"radio",options:["default","required","disabled","readOnly"],description:"Editable, required (label indicator), disabled (non-interactive), or read-only (shows the value, locked).",table:{category:"Behavior"}},startingValue:{name:"Starting value",control:"radio",options:["none","filled"],description:"Empty, or pre-filled with today's date and a time (a range for the range picker). Disabled and read-only fields look best filled.",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Field label (`label`).",table:{category:"Content"}},labelHelpText:{name:"Label help text",control:"text",description:"Optional help text beside the label (`labelHelpText`). Leave empty for none.",table:{category:"Content"}},placeholder:{name:"Placeholder",control:"text",description:"Input placeholder (`placeholder`). Empty uses the component's own default.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Field height — sm (32px) for dense contexts, md (36px, default).",table:{category:"Appearance"}}},render:t=>e.jsx(S,{...t},JSON.stringify(t))};var i,d,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so the
  // Docs page's autodocs table still lists every real DateTimePicker prop.
  // Storybook matches \`include\` against each control's display \`name\`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: ["mode", "fieldState", "startingValue", "label", "labelHelpText", "placeholder", "size", "Picker", "Field state", "Starting value", "Label", "Label help text", "Placeholder", "Size"],
      sort: "none"
    }
  },
  args: {
    mode: "single",
    fieldState: "default",
    startingValue: "none",
    label: "Date & Time",
    labelHelpText: "",
    placeholder: "",
    size: "md"
  },
  argTypes: {
    mode: {
      name: "Picker",
      control: "radio",
      options: ["single", "range"],
      description: "A single date and time (\`DateTimePicker\`) or a start and end date with times (\`DateRangeTimePicker\`).",
      table: {
        category: "Behavior"
      }
    },
    fieldState: {
      name: "Field state",
      control: "radio",
      options: ["default", "required", "disabled", "readOnly"],
      description: "Editable, required (label indicator), disabled (non-interactive), or read-only (shows the value, locked).",
      table: {
        category: "Behavior"
      }
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["none", "filled"],
      description: "Empty, or pre-filled with today's date and a time (a range for the range picker). Disabled and read-only fields look best filled.",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Field label (\`label\`).",
      table: {
        category: "Content"
      }
    },
    labelHelpText: {
      name: "Label help text",
      control: "text",
      description: "Optional help text beside the label (\`labelHelpText\`). Leave empty for none.",
      table: {
        category: "Content"
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Input placeholder (\`placeholder\`). Empty uses the component's own default.",
      table: {
        category: "Content"
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Field height — sm (32px) for dense contexts, md (36px, default).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo whenever a control changes — \`useState\`'s
  // initial value only applies on first mount.
  <DateTimePickerDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const Z=["Default"];export{a as Default,Z as __namedExportsOrder,Y as default};
