import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as d}from"./favorite-button-BJq5peE4.js";import{D as c}from"./FavoriteButton.shared-BTZHIBRH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./star-CKl-uXvS.js";import"./createLucideIcon-aII_sYFw.js";const S={title:"Custom Primitives/FavoriteButton",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function m({startsFavorited:e=!1,disabled:i=!1,label:s="Jamie Torres",placement:l="left"}){return a.jsx("div",{className:"w-72",children:a.jsx(c,{name:s,initiallyFavorited:e,disabled:i,placement:l})})}const t={args:{startsFavorited:!1,disabled:!1,label:"Jamie Torres",placement:"left"},parameters:{controls:{include:["startsFavorited","disabled","label","placement","Starts favorited","At favorites cap","Row name","Tooltip placement"],sort:"none"}},argTypes:{startsFavorited:{name:"Starts favorited",control:"boolean",description:"Whether the row starts favorited. A favorited star stays visible without hovering (`favorited`).",table:{category:"Behavior"}},disabled:{name:"At favorites cap",control:"boolean",description:"Mutes and locks an un-favorited star, as when a cap on favorites is reached (`disabled`). A favorited one can still be removed.",table:{category:"Behavior"}},label:{name:"Row name",control:"text",description:"Name of the thing being favorited. Used in the accessible name (`label`).",table:{category:"Content"}},placement:{name:"Tooltip placement",control:"radio",options:["top","bottom","left","right"],description:"Which side of the star the tooltip opens on (`placement`).",table:{category:"Appearance"}}},render:e=>a.jsx(m,{...e},JSON.stringify(e))};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    startsFavorited: false,
    disabled: false,
    label: "Jamie Torres",
    placement: "left"
  },
  parameters: {
    controls: {
      include: ["startsFavorited", "disabled", "label", "placement", "Starts favorited", "At favorites cap", "Row name", "Tooltip placement"],
      sort: "none"
    }
  },
  argTypes: {
    startsFavorited: {
      name: "Starts favorited",
      control: "boolean",
      description: "Whether the row starts favorited. A favorited star stays visible without hovering (\`favorited\`).",
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      name: "At favorites cap",
      control: "boolean",
      description: "Mutes and locks an un-favorited star, as when a cap on favorites is reached (\`disabled\`). A favorited one can still be removed.",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Row name",
      control: "text",
      description: "Name of the thing being favorited. Used in the accessible name (\`label\`).",
      table: {
        category: "Content"
      }
    },
    placement: {
      name: "Tooltip placement",
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "Which side of the star the tooltip opens on (\`placement\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <FavoriteButtonDemo key={JSON.stringify(args)} {...args} />
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,S as default};
