import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{P as s}from"./password-input-DIAmNtQe.js";import{S as y,R as g}from"./PasswordInput.shared-CMJ8Q64V.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DGBzHazk.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./eye-ChmIsCN2.js";import"./check-Dr3vGcdY.js";import"./x-CzxgOx-T.js";const A={title:"Headless Primitives/PasswordInput",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function f({state:e="default",startingValue:i="empty",showRequirements:l=!1,label:d="Password",placeholder:p,size:m="md"}){const[c,u]=h.useState(i==="filled"?y:"");return r.jsx("div",{className:"w-80",children:r.jsx(s,{label:d,placeholder:p||void 0,value:c,onChange:u,showRequirements:l,size:m,required:e==="required",disabled:e==="disabled",readonly:e==="read-only",error:e==="error"?g:void 0})})}const t={args:{state:"default",startingValue:"empty",showRequirements:!1,label:"Password",placeholder:"",size:"md"},parameters:{controls:{include:["state","startingValue","showRequirements","label","placeholder","size","State","Starting value","Requirements tooltip","Label","Placeholder","Size"],sort:"none"}},argTypes:{state:{name:"State",control:"select",options:["default","required","error","disabled","read-only"],description:"Required adds the required marker. Error shows an error message (`error`). Disabled and read-only lock the field.",table:{category:"Behavior"}},startingValue:{name:"Starting value",control:"radio",options:["empty","filled"],description:"Whether the field starts empty or already holding a password.",table:{category:"Behavior"}},showRequirements:{name:"Requirements tooltip",control:"boolean",description:"Shows the password requirements checklist in a tooltip (`showRequirements`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text above the field (`label`).",table:{category:"Content"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty. Empty uses the component's own.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"sm is 32px for dense contexts. md is the 36px default every other field uses.",table:{category:"Appearance"}}},render:e=>r.jsx(f,{...e},JSON.stringify(e))};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingValue: "empty",
    showRequirements: false,
    label: "Password",
    placeholder: "",
    size: "md"
  },
  parameters: {
    controls: {
      include: ["state", "startingValue", "showRequirements", "label", "placeholder", "size", "State", "Starting value", "Requirements tooltip", "Label", "Placeholder", "Size"],
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
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "filled"],
      description: "Whether the field starts empty or already holding a password.",
      table: {
        category: "Behavior"
      }
    },
    showRequirements: {
      name: "Requirements tooltip",
      control: "boolean",
      description: "Shows the password requirements checklist in a tooltip (\`showRequirements\`).",
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
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty. Empty uses the component's own.",
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
  <PasswordInputDemo key={JSON.stringify(args)} {...args} />
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,A as default};
