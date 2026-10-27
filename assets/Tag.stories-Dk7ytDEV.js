import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{w as g}from"./storyControls-D66O-f8g.js";import{r as f}from"./index-DhMLlvMY.js";import{T as s}from"./tag-DQ3sj_Kb.js";import{T as h,a as v}from"./Tag.shared-BDvc4Lnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const H={title:"Custom Primitives/Tag",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function y({label:e="Tag label",removable:i=!1,disabled:d=!1,variant:c="default",shape:m="default",dot:p=!1,dotPulse:b=!1}){const[u,a]=f.useState(!1);return u?t.jsx("button",{type:"button",className:"lyra-body-sm text-lyra-fg-link hover:underline",onClick:()=>a(!1),children:"Tag removed — bring it back"}):t.jsx(s,{label:e,variant:c,shape:m,dot:p,dotPulse:b,disabled:d,onRemove:i?()=>a(!0):void 0})}const o=g({args:{label:"Tag label",removable:!1,disabled:!1,variant:"default",shape:"default",dot:!1,dotPulse:!1},parameters:{controls:{sort:"none"}},argTypes:{dotPulse:{name:"Pulse",control:"boolean",description:"Pulse the dot — a ring radiates out and fades (`dotPulse`).",if:{arg:"dot",truthy:!0},table:{category:"Appearance"}},removable:{name:"Removable",control:"boolean",description:"Shows a remove (×) button on the tag (`onRemove`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Dims the tag and blocks its remove button (`disabled`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text inside the tag (`label`).",table:{category:"Content"}},variant:{name:"Color",control:"select",options:v,description:"Color of the tag (`variant`).",table:{category:"Appearance"}},shape:{name:"Shape",control:"radio",options:h,description:"Default has rounded corners. Pill is fully rounded (`shape`).",table:{category:"Appearance"}},dot:{name:"Dot",control:"boolean",description:"A small status dot before the label, in the tag's color (`dot`). Same spacing as the remove (×) button.",table:{category:"Appearance"}}},render:e=>t.jsx(y,{...e},JSON.stringify(e))});var n,r,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`withControlsFor({
  args: {
    label: "Tag label",
    removable: false,
    disabled: false,
    variant: "default",
    shape: "default",
    dot: false,
    dotPulse: false
  },
  parameters: {
    controls: {
      sort: "none"
    }
  },
  argTypes: {
    dotPulse: {
      name: "Pulse",
      control: "boolean",
      description: "Pulse the dot — a ring radiates out and fades (\`dotPulse\`).",
      if: {
        arg: "dot",
        truthy: true
      },
      table: {
        category: "Appearance"
      }
    },
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
    },
    dot: {
      name: "Dot",
      control: "boolean",
      description: "A small status dot before the label, in the tag's color (\`dot\`). Same spacing as the remove (×) button.",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <TagDemo key={JSON.stringify(args)} {...args} />
})`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,H as default};
