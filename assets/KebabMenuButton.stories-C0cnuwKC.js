import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DhMLlvMY.js";import{K as i}from"./kebab-menu-button-CUREWany.js";import{H as u,G as y}from"./KebabMenuButton.shared-BBly5RMZ.js";import{E as f}from"./ellipsis-DX1Uroy1.js";import{E as w}from"./ellipsis-vertical-D6ttVBVO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-radix-9vcg5XDz.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-BIS9woDA.js";import"./index-1evVQkiP.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";const Z={title:"Custom Primitives/KebabMenuButton",component:i,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function B({disabled:t=!1,ariaLabel:s="More options",withBadge:l=!1,badge:d=3,glyph:g="vertical",align:c="right"}){const[p,b]=m.useState(!1),h=g==="horizontal"?f:w;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(u,{children:e.jsx(i,{items:y,ariaLabel:s,disabled:t,badge:l?d:0,align:c,icon:e.jsx(h,{className:"h-3.5 w-3.5",strokeWidth:1.5,"aria-hidden":"true"}),onOpenChange:b})}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:["Menu is ",p?"open":"closed"]})]})}const n={args:{disabled:!1,ariaLabel:"More options",withBadge:!1,badge:3,glyph:"vertical",align:"right"},parameters:{controls:{include:["disabled","ariaLabel","withBadge","badge","glyph","align","Disabled","Accessible label","With badge","Badge count","Glyph","Dropdown alignment"],sort:"none"}},argTypes:{disabled:{name:"Disabled",control:"boolean",description:"Keeps the trigger visible but locked, with no dropdown (`disabled`).",table:{category:"Behavior"}},ariaLabel:{name:"Accessible label",control:"text",description:"Name read by screen readers for the trigger (`ariaLabel`).",table:{category:"Content"}},withBadge:{name:"With badge",control:"boolean",description:"Shows a count badge on the trigger's top-right corner (`badge`).",table:{category:"Content"}},badge:{name:"Badge count",control:{type:"number",min:1},description:"The number shown in the badge. Anything over 99 renders as 99+.",if:{arg:"withBadge",truthy:!0},table:{category:"Content"}},glyph:{name:"Glyph",control:"radio",options:["vertical","horizontal"],description:"Three dots stacked vertically (kebab) or side by side (`icon`).",table:{category:"Appearance"}},align:{name:"Dropdown alignment",control:"radio",options:["right","left"],description:"Which edge of the trigger the dropdown lines up with. Right suits a trigger at the end of a row, left one nearer the screen's left edge (`align`).",table:{category:"Appearance"}}},render:t=>e.jsx(B,{...t},JSON.stringify(t))};var r,a,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    disabled: false,
    ariaLabel: "More options",
    withBadge: false,
    badge: 3,
    glyph: "vertical",
    align: "right"
  },
  parameters: {
    controls: {
      include: ["disabled", "ariaLabel", "withBadge", "badge", "glyph", "align", "Disabled", "Accessible label", "With badge", "Badge count", "Glyph", "Dropdown alignment"],
      sort: "none"
    }
  },
  argTypes: {
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Keeps the trigger visible but locked, with no dropdown (\`disabled\`).",
      table: {
        category: "Behavior"
      }
    },
    ariaLabel: {
      name: "Accessible label",
      control: "text",
      description: "Name read by screen readers for the trigger (\`ariaLabel\`).",
      table: {
        category: "Content"
      }
    },
    withBadge: {
      name: "With badge",
      control: "boolean",
      description: "Shows a count badge on the trigger's top-right corner (\`badge\`).",
      table: {
        category: "Content"
      }
    },
    badge: {
      name: "Badge count",
      control: {
        type: "number",
        min: 1
      },
      description: "The number shown in the badge. Anything over 99 renders as 99+.",
      if: {
        arg: "withBadge",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
    glyph: {
      name: "Glyph",
      control: "radio",
      options: ["vertical", "horizontal"],
      description: "Three dots stacked vertically (kebab) or side by side (\`icon\`).",
      table: {
        category: "Appearance"
      }
    },
    align: {
      name: "Dropdown alignment",
      control: "radio",
      options: ["right", "left"],
      description: "Which edge of the trigger the dropdown lines up with. Right suits a trigger at the end of a row, left one nearer the screen's left edge (\`align\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <KebabMenuButtonDemo key={JSON.stringify(args)} {...args} />
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,Z as default};
