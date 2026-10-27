import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DhMLlvMY.js";import{L as s}from"./link-q-Nu3g6t.js";import{L as l,e as w,c as v}from"./Link.shared-r00HOtYx.js";import{w as L}from"./storyControls-D66O-f8g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tag-DQ3sj_Kb.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./pencil-IFm_bK0G.js";import"./chevron-right-BP9ksYh_.js";const G={title:"Custom Primitives/Link",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function T({renders:n="button",disabled:c=!1,label:d=l,leadingIcon:g=!1,trailingIcon:p=!1,size:m="md",underline:h="hover",showTag:u=!1,tagLabel:f="Internal",tagVariant:b="warning"}){const[o,y]=k.useState(0);return t.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[t.jsxs(s,{size:m,underline:h,disabled:c,tag:u&&f||void 0,tagVariant:b,href:n==="anchor"?"#example":void 0,onClick:()=>y(x=>x+1),children:[g&&w,d,p&&v]}),t.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:["Clicked ",o," ",o===1?"time":"times"]})]})}const e=L({args:{renders:"button",disabled:!1,label:l,leadingIcon:!1,trailingIcon:!1,size:"md",underline:"hover",showTag:!1,tagLabel:"Internal",tagVariant:"warning"},parameters:{controls:{sort:"none"}},argTypes:{renders:{name:"Renders as",control:"radio",options:["button","anchor"],description:"Button for in-app actions (the default). Anchor for real navigation to a URL — set by giving the link an `href`.",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Dims the link and blocks clicks (`disabled`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Link text.",table:{category:"Content"}},leadingIcon:{name:"Leading icon",control:"boolean",description:"Shows an icon before the text.",table:{category:"Content"}},trailingIcon:{name:"Trailing icon",control:"boolean",description:"Shows a right-pointing chevron after the text.",table:{category:"Content"}},showTag:{name:"Tag",control:"boolean",description:"Shows a small tag after the link text (`tag`). The tag is not underlined.",table:{category:"Content"}},tagLabel:{name:"Tag text",control:"text",description:"Text of the tag (`tag`).",if:{arg:"showTag",truthy:!0},table:{category:"Content"}},tagVariant:{name:"Tag color",control:"select",options:["default","success","warning","critical","info","neutral","purple","teal","pink"],description:"Color of the tag (`tagVariant`).",if:{arg:"showTag",truthy:!0},table:{category:"Content",defaultValue:{summary:"info"}}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Text size (`size`).",table:{category:"Appearance"}},underline:{name:"Underline",control:"radio",options:["hover","always"],description:"Hover underlines on hover only. Always underlines at rest, for links inside running text (`underline`).",table:{category:"Appearance"}}},render:n=>t.jsx(T,{...n},JSON.stringify(n))});var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`withControlsFor({
  args: {
    renders: "button",
    disabled: false,
    label: LINK_LABEL,
    leadingIcon: false,
    trailingIcon: false,
    size: "md",
    underline: "hover",
    showTag: false,
    tagLabel: "Internal",
    tagVariant: "warning"
  },
  parameters: {
    controls: {
      sort: "none"
    }
  },
  argTypes: {
    renders: {
      name: "Renders as",
      control: "radio",
      options: ["button", "anchor"],
      description: "Button for in-app actions (the default). Anchor for real navigation to a URL — set by giving the link an \`href\`.",
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the link and blocks clicks (\`disabled\`).",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Link text.",
      table: {
        category: "Content"
      }
    },
    leadingIcon: {
      name: "Leading icon",
      control: "boolean",
      description: "Shows an icon before the text.",
      table: {
        category: "Content"
      }
    },
    trailingIcon: {
      name: "Trailing icon",
      control: "boolean",
      description: "Shows a right-pointing chevron after the text.",
      table: {
        category: "Content"
      }
    },
    showTag: {
      name: "Tag",
      control: "boolean",
      description: "Shows a small tag after the link text (\`tag\`). The tag is not underlined.",
      table: {
        category: "Content"
      }
    },
    tagLabel: {
      name: "Tag text",
      control: "text",
      description: "Text of the tag (\`tag\`).",
      if: {
        arg: "showTag",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
    tagVariant: {
      name: "Tag color",
      control: "select",
      options: ["default", "success", "warning", "critical", "info", "neutral", "purple", "teal", "pink"],
      description: "Color of the tag (\`tagVariant\`).",
      if: {
        arg: "showTag",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "info"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Text size (\`size\`).",
      table: {
        category: "Appearance"
      }
    },
    underline: {
      name: "Underline",
      control: "radio",
      options: ["hover", "always"],
      description: "Hover underlines on hover only. Always underlines at rest, for links inside running text (\`underline\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <LinkDemo key={JSON.stringify(args)} {...args} />
})`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,G as default};
