import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DhMLlvMY.js";import{S as l}from"./search-input-DbdcjRuV.js";import{S as y}from"./SearchInput.shared-CtoUZUpq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./clear-button-Cb_QiePp.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";const N={title:"Custom Primitives/SearchInput",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function g({state:e="default",startingValue:d="empty",submitButton:c=!1,placeholder:m="Search",size:p="md",maxWidth:u=!1}){const[h,b]=o.useState(d==="filled"?y:""),[a,f]=o.useState(null);return n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx(l,{placeholder:m,size:p,value:h,onValueChange:b,disabled:e==="disabled",readonly:e==="read-only",onSubmit:c?f:void 0,className:u?"min-w-[240px] max-w-[320px]":void 0}),a!==null&&n.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:["Submitted: ",a]})]})}const t={args:{state:"default",startingValue:"empty",submitButton:!1,placeholder:"Search",size:"md",maxWidth:!1},parameters:{controls:{include:["state","startingValue","submitButton","placeholder","size","maxWidth","State","Starting value","Submit button","Placeholder","Size","Max width"],sort:"none"}},argTypes:{state:{name:"State",control:"radio",options:["default","disabled","read-only"],description:"Disabled blocks input. Read-only drops the hover, focus and clear button (`disabled`, `readonly`).",table:{category:"Behavior"}},startingValue:{name:"Starting value",control:"radio",options:["empty","filled"],description:"Whether the field starts empty or with text in it, which shows the clear button.",table:{category:"Behavior"}},submitButton:{name:"Submit button",control:"boolean",description:"Adds an arrow button that appears once there is text. Clicking it, or pressing Enter, runs the search (`onSubmit`).",table:{category:"Behavior"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"sm is 32px for dense contexts like a table toolbar. md is the 36px default every other field uses.",table:{category:"Appearance"}},maxWidth:{name:"Max width",control:"boolean",description:"Bounds the field between 240px and 320px instead of full width, matching Input. Off stretches it across its container.",table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:e=>n.jsx(g,{...e},JSON.stringify(e))};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingValue: "empty",
    submitButton: false,
    placeholder: "Search",
    size: "md",
    maxWidth: false
  },
  parameters: {
    controls: {
      include: ["state", "startingValue", "submitButton", "placeholder", "size", "maxWidth", "State", "Starting value", "Submit button", "Placeholder", "Size", "Max width"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "disabled", "read-only"],
      description: "Disabled blocks input. Read-only drops the hover, focus and clear button (\`disabled\`, \`readonly\`).",
      table: {
        category: "Behavior"
      }
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "filled"],
      description: "Whether the field starts empty or with text in it, which shows the clear button.",
      table: {
        category: "Behavior"
      }
    },
    submitButton: {
      name: "Submit button",
      control: "boolean",
      description: "Adds an arrow button that appears once there is text. Clicking it, or pressing Enter, runs the search (\`onSubmit\`).",
      table: {
        category: "Behavior"
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
      description: "sm is 32px for dense contexts like a table toolbar. md is the 36px default every other field uses.",
      table: {
        category: "Appearance"
      }
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the field between 240px and 320px instead of full width, matching Input. Off stretches it across its container.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <SearchInputDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,N as default};
