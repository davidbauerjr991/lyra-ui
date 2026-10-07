import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DhMLlvMY.js";import{T as s}from"./tag-D8yJ2lBD.js";import{T as u,a as g}from"./Tag.shared-BDvc4Lnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const P={title:"Custom Primitives/Tag",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function v({label:e="Tag label",removable:i=!1,disabled:d=!1,variant:m="default",shape:c="default"}){const[p,n]=b.useState(!1);return p?o.jsx("button",{type:"button",className:"lyra-body-sm text-lyra-fg-link hover:underline",onClick:()=>n(!1),children:"Tag removed — bring it back"}):o.jsx(s,{label:e,variant:m,shape:c,disabled:d,onRemove:i?()=>n(!0):void 0})}const a={args:{label:"Tag label",removable:!1,disabled:!1,variant:"default",shape:"default"},parameters:{controls:{include:["removable","disabled","label","variant","shape","Removable","Disabled","Label","Color","Shape"],sort:"none"}},argTypes:{removable:{name:"Removable",control:"boolean",description:"Shows a remove (×) button on the tag (`onRemove`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Dims the tag and blocks its remove button (`disabled`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text inside the tag (`label`).",table:{category:"Content"}},variant:{name:"Color",control:"select",options:g,description:"Color of the tag (`variant`).",table:{category:"Appearance"}},shape:{name:"Shape",control:"radio",options:u,description:"Default has rounded corners. Pill is fully rounded (`shape`).",table:{category:"Appearance"}}},render:e=>o.jsx(v,{...e},JSON.stringify(e))};var t,r,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Tag label",
    removable: false,
    disabled: false,
    variant: "default",
    shape: "default"
  },
  parameters: {
    controls: {
      include: ["removable", "disabled", "label", "variant", "shape", "Removable", "Disabled", "Label", "Color", "Shape"],
      sort: "none"
    }
  },
  argTypes: {
    removable: {
      name: "Removable",
      control: "boolean",
      description: "Shows a remove (×) button on the tag (\`onRemove\`).",
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the tag and blocks its remove button (\`disabled\`).",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text inside the tag (\`label\`).",
      table: {
        category: "Content"
      }
    },
    variant: {
      name: "Color",
      control: "select",
      options: TAG_VARIANTS,
      description: "Color of the tag (\`variant\`).",
      table: {
        category: "Appearance"
      }
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: TAG_SHAPES,
      description: "Default has rounded corners. Pill is fully rounded (\`shape\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <TagDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,P as default};
