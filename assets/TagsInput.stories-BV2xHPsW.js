import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{T as s,S as b,R as x}from"./TagsInput.shared-Ce8l_24A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./x-CzxgOx-T.js";const P={title:"Custom Primitives/Tags Input",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function u({state:e="default",startingTags:i="none",maxTags:n=0,label:d="Tags",labelHelpText:p="",placeholder:m="Add a tag…"}){const[c,g]=h.useState(i==="some"?b:[]);return a.jsx("div",{className:"w-96",children:a.jsx(s,{label:d,labelHelpText:p||void 0,placeholder:m,value:c,onChange:g,maxTags:n>0?n:void 0,required:e==="required"||e==="error",disabled:e==="disabled",readonly:e==="read-only",error:e==="error"?x:void 0})})}const t={args:{state:"default",startingTags:"none",maxTags:0,label:"Tags",labelHelpText:"",placeholder:"Add a tag…"},parameters:{controls:{include:["state","startingTags","maxTags","label","labelHelpText","placeholder","State","Starting tags","Max tags","Label","Label help text","Placeholder"],sort:"none"}},argTypes:{state:{name:"State",control:"select",options:["default","required","error","disabled","read-only"],description:"Required adds the required marker. Error shows an error message (`error`). Disabled and read-only lock the field.",table:{category:"Behavior"}},startingTags:{name:"Starting tags",control:"radio",options:["none","some"],description:"Whether the field starts empty or with tags already added.",table:{category:"Behavior"}},maxTags:{name:"Max tags",control:{type:"number",min:0},description:"Most tags the field accepts. 0 means no limit (`maxTags`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text above the field (`label`).",table:{category:"Content"}},labelHelpText:{name:"Label help text",control:"text",description:"Help text shown next to the label (`labelHelpText`). Empty for none.",table:{category:"Content"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content"}}},render:e=>a.jsx(u,{...e},JSON.stringify(e))};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingTags: "none",
    maxTags: 0,
    label: "Tags",
    labelHelpText: "",
    placeholder: "Add a tag…"
  },
  parameters: {
    controls: {
      include: ["state", "startingTags", "maxTags", "label", "labelHelpText", "placeholder", "State", "Starting tags", "Max tags", "Label", "Label help text", "Placeholder"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "required", "error", "disabled", "read-only"],
      description: "Required adds the required marker. Error shows an error message (\`error\`). Disabled and read-only lock the field.",
      table: {
        category: "Behavior"
      }
    },
    startingTags: {
      name: "Starting tags",
      control: "radio",
      options: ["none", "some"],
      description: "Whether the field starts empty or with tags already added.",
      table: {
        category: "Behavior"
      }
    },
    maxTags: {
      name: "Max tags",
      control: {
        type: "number",
        min: 0
      },
      description: "Most tags the field accepts. 0 means no limit (\`maxTags\`).",
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
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: {
        category: "Content"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <TagsInputDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,P as default};
