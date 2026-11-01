import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{w as g}from"./storyControls-D66O-f8g.js";import{r as h}from"./index-DhMLlvMY.js";import{T as s}from"./tag-CFhiOrCN.js";import{T as y,a as v}from"./Tag.shared-BDvc4Lnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const H={title:"Custom Primitives/Tag",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function A({label:e="Tag label",removable:i=!1,disabled:c=!1,variant:d="default",shape:p="default",dot:m=!1,dotPulse:b=!1,fullLabel:u=!1}){const[f,t]=h.useState(!1);return f?o.jsx("button",{type:"button",className:"lyra-body-sm text-lyra-fg-link hover:underline",onClick:()=>t(!1),children:"Tag removed — bring it back"}):o.jsx(s,{label:e,variant:d,shape:p,dot:m,dotPulse:b,fullLabel:u,disabled:c,onRemove:i?()=>t(!0):void 0})}const a=g({args:{label:"Tag label",removable:!1,disabled:!1,variant:"default",shape:"default",dot:!1,dotPulse:!1,fullLabel:!1},parameters:{controls:{sort:"none"}},argTypes:{dotPulse:{name:"Pulse",control:"boolean",description:"Pulse the dot — a ring radiates out and fades (`dotPulse`).",if:{arg:"dot",truthy:!0},table:{category:"Appearance"}},removable:{name:"Removable",control:"boolean",description:"Shows a remove (×) button on the tag (`onRemove`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Dims the tag and blocks its remove button (`disabled`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text inside the tag (`label`).",table:{category:"Content"}},fullLabel:{name:"Full label",control:"boolean",description:"Show the whole label instead of capping it at 200px with an ellipsis (`fullLabel`): for a short sentence such as a lock's reason.",table:{category:"Content"}},variant:{name:"Color",control:"select",options:v,description:"Color of the tag (`variant`).",table:{category:"Appearance"}},shape:{name:"Shape",control:"radio",options:y,description:"Default has rounded corners. Pill is fully rounded (`shape`).",table:{category:"Appearance"}},dot:{name:"Dot",control:"boolean",description:"A small status dot before the label, in the tag's color (`dot`). Same spacing as the remove (×) button.",table:{category:"Appearance"}}},render:e=>o.jsx(A,{...e},JSON.stringify(e))});var n,r,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`withControlsFor({
  args: {
    label: "Tag label",
    removable: false,
    disabled: false,
    variant: "default",
    shape: "default",
    dot: false,
    dotPulse: false,
    fullLabel: false
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
    fullLabel: {
      name: "Full label",
      control: "boolean",
      description: "Show the whole label instead of capping it at 200px with an ellipsis (\`fullLabel\`): for a short sentence such as a lock's reason.",
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
})`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,H as default};
