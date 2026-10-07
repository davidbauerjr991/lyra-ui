import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DhMLlvMY.js";import{P as d}from"./phone-input-Brv_jdcT.js";import{C as c}from"./PhoneInput.shared-LpFtG9Xd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./x-CzxgOx-T.js";const K={title:"Custom Primitives/PhoneInput",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function S({state:e="default",startingValue:m="empty",defaultCountry:o="us",hideCountrySelector:u=!1,label:p="Phone number",size:h="md"}){var a;const y=((a=c.find(b=>b.code===o))==null?void 0:a.sample)??"",[n,f]=g.useState({countryCode:o,number:m==="filled"?y:""});return r.jsxs("div",{className:"w-80",children:[r.jsx(d,{label:p,value:n,onChange:f,defaultCountry:o,hideCountrySelector:u,size:h,required:e==="required",disabled:e==="disabled",readonly:e==="read-only",forceShowError:e==="error"}),n.number&&r.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Full number: +",n.number]})]})}const t={args:{state:"default",startingValue:"empty",defaultCountry:"us",hideCountrySelector:!1,label:"Phone number",size:"md"},parameters:{controls:{include:["state","startingValue","defaultCountry","hideCountrySelector","label","size","State","Starting value","Default country","Hide country selector","Label","Size"],sort:"none"}},argTypes:{state:{name:"State",control:"select",options:["default","required","error","disabled","read-only"],description:"Required adds the required marker. Error shows the validation message right away (`forceShowError`). Disabled and read-only lock the field.",table:{category:"Behavior"}},startingValue:{name:"Starting value",control:"radio",options:["empty","filled"],description:"Whether the field starts empty or already holding a number for the chosen country.",table:{category:"Behavior"}},defaultCountry:{name:"Default country",control:"radio",options:c.map(e=>e.code),description:"Country the field starts on, which sets the flag, dial code and number format (`defaultCountry`).",table:{category:"Behavior"}},hideCountrySelector:{name:"Hide country selector",control:"boolean",description:"Removes the flag and dial-code picker, for an app that only ever needs one known country. The format still comes from the default country (`hideCountrySelector`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text above the field (`label`).",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"sm is 32px for dense contexts. md is the 36px default every other field uses.",table:{category:"Appearance"}}},render:e=>r.jsx(S,{...e},JSON.stringify(e))};var i,l,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingValue: "empty",
    defaultCountry: "us",
    hideCountrySelector: false,
    label: "Phone number",
    size: "md"
  },
  parameters: {
    controls: {
      include: ["state", "startingValue", "defaultCountry", "hideCountrySelector", "label", "size", "State", "Starting value", "Default country", "Hide country selector", "Label", "Size"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "select",
      options: ["default", "required", "error", "disabled", "read-only"],
      description: "Required adds the required marker. Error shows the validation message right away (\`forceShowError\`). Disabled and read-only lock the field.",
      table: {
        category: "Behavior"
      }
    },
    startingValue: {
      name: "Starting value",
      control: "radio",
      options: ["empty", "filled"],
      description: "Whether the field starts empty or already holding a number for the chosen country.",
      table: {
        category: "Behavior"
      }
    },
    defaultCountry: {
      name: "Default country",
      control: "radio",
      options: COUNTRIES.map(c => c.code),
      description: "Country the field starts on, which sets the flag, dial code and number format (\`defaultCountry\`).",
      table: {
        category: "Behavior"
      }
    },
    hideCountrySelector: {
      name: "Hide country selector",
      control: "boolean",
      description: "Removes the flag and dial-code picker, for an app that only ever needs one known country. The format still comes from the default country (\`hideCountrySelector\`).",
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
  <PhoneInputDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,K as default};
