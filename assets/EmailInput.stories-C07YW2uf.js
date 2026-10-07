import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DhMLlvMY.js";import{E as o}from"./email-input-C32ZqlFJ.js";import{I as b,V as x,a as g}from"./EmailInput.shared-z_v0hjRl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./mail-BgfsS5Lx.js";const N={title:"Custom Primitives/EmailInput",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},y={empty:"",valid:x,invalid:b};function f({state:e="default",startingValue:i="empty",label:s="Email Address",labelHelpText:d="",placeholder:p="name@example.com",size:m="md"}){const[c,h]=u.useState(y[i]);return a.jsx("div",{className:"w-80",children:a.jsx(o,{label:s,labelHelpText:d||void 0,placeholder:p,size:m,value:c,onChange:h,required:e==="required",disabled:e==="disabled",readonly:e==="read-only",error:e==="error"?g:void 0})})}const t={args:{state:"default",startingValue:"empty",label:"Email Address",labelHelpText:"",placeholder:"name@example.com",size:"md"},parameters:{controls:{include:["state","startingValue","label","labelHelpText","placeholder","size","State","Starting value","Label","Label help text","Placeholder","Size"],sort:"none"}},argTypes:{state:{name:"State",control:"select",options:["default","required","error","disabled","read-only"],description:"Required adds the required marker. Error shows an external error message (`error`). Disabled and read-only lock the field.",table:{category:"Behavior"}},startingValue:{name:"Starting value",control:"radio",options:["empty","valid","invalid"],description:"What the field holds on first render. Typing an invalid address and leaving the field shows the built-in validation message.",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text above the field (`label`).",table:{category:"Content"}},labelHelpText:{name:"Label help text",control:"text",description:"Help text shown next to the label (`labelHelpText`). Empty for none.",table:{category:"Content"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"sm is 32px for dense contexts. md is the 36px default every other field uses.",table:{category:"Appearance"}}},render:e=>a.jsx(f,{...e},JSON.stringify(e))};var n,r,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingValue: "empty",
    label: "Email Address",
    labelHelpText: "",
    placeholder: "name@example.com",
    size: "md"
  },
  parameters: {
    controls: {
      include: ["state", "startingValue", "label", "labelHelpText", "placeholder", "size", "State", "Starting value", "Label", "Label help text", "Placeholder", "Size"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "required", "error", "disabled", "read-only"],
      description: "Required adds the required marker. Error shows an external error message (\`error\`). Disabled and read-only lock the field.",
      table: {
        category: "Behavior"
      }
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "valid", "invalid"],
      description: "What the field holds on first render. Typing an invalid address and leaving the field shows the built-in validation message.",
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
  <EmailInputDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,N as default};
