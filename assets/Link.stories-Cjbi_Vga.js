import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DhMLlvMY.js";import{L as s}from"./link-BFT11_ys.js";import{L as l,e as y,c as x}from"./Link.shared-r00HOtYx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./pencil-IFm_bK0G.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-right-BP9ksYh_.js";const T={title:"Custom Primitives/Link",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function L({renders:n="button",disabled:c=!1,label:d=l,leadingIcon:p=!1,trailingIcon:m=!1,size:g="md",underline:b="hover"}){const[a,h]=f.useState(0);return o.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[o.jsxs(s,{size:g,underline:b,disabled:c,href:n==="anchor"?"#example":void 0,onClick:()=>h(u=>u+1),children:[p&&y,d,m&&x]}),o.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:["Clicked ",a," ",a===1?"time":"times"]})]})}const e={args:{renders:"button",disabled:!1,label:l,leadingIcon:!1,trailingIcon:!1,size:"md",underline:"hover"},parameters:{controls:{include:["renders","disabled","label","leadingIcon","trailingIcon","size","underline","Renders as","Disabled","Label","Leading icon","Trailing icon","Size","Underline"],sort:"none"}},argTypes:{renders:{name:"Renders as",control:"radio",options:["button","anchor"],description:"Button for in-app actions (the default). Anchor for real navigation to a URL — set by giving the link an `href`.",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Dims the link and blocks clicks (`disabled`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Link text.",table:{category:"Content"}},leadingIcon:{name:"Leading icon",control:"boolean",description:"Shows an icon before the text.",table:{category:"Content"}},trailingIcon:{name:"Trailing icon",control:"boolean",description:"Shows a right-pointing chevron after the text.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Text size (`size`).",table:{category:"Appearance"}},underline:{name:"Underline",control:"radio",options:["hover","always"],description:"Hover underlines on hover only. Always underlines at rest, for links inside running text (`underline`).",table:{category:"Appearance"}}},render:n=>o.jsx(L,{...n},JSON.stringify(n))};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    renders: "button",
    disabled: false,
    label: LINK_LABEL,
    leadingIcon: false,
    trailingIcon: false,
    size: "md",
    underline: "hover"
  },
  parameters: {
    controls: {
      include: ["renders", "disabled", "label", "leadingIcon", "trailingIcon", "size", "underline", "Renders as", "Disabled", "Label", "Leading icon", "Trailing icon", "Size", "Underline"],
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const R=["Default"];export{e as Default,R as __namedExportsOrder,T as default};
