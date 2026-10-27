import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DhMLlvMY.js";import{O as c}from"./overlay-CAl4KWqN.js";import{B as m}from"./button-Cje2PXGX.js";import{F as k,S as h}from"./Overlay.shared-BsLuGpma.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./container-C7yiAi4_.js";import"./container-header-CRBwP-Mp.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";const q={title:"Headless Primitives/Overlay",component:c,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function y({look:e="dark",closeOnBackdropClick:i=!1,closeOnEscape:l=!0}){const[p,r]=d.useState(!1);return o.jsxs("div",{className:k,children:[o.jsx(m,{onClick:()=>r(!0),children:"Open overlay"}),o.jsx(c,{open:p,variant:e,closeOnBackdropClick:i,closeOnEscape:l,onClose:()=>r(!1),children:o.jsx(h,{onClose:()=>r(!1)})})]})}const a={parameters:{controls:{include:["look","closeOnBackdropClick","closeOnEscape","Look","Dismiss on backdrop click","Dismiss on Escape"],sort:"none"}},args:{look:"dark",closeOnBackdropClick:!1,closeOnEscape:!0},argTypes:{closeOnBackdropClick:{name:"Dismiss on backdrop click",control:"boolean",description:"Clicking the backdrop closes the overlay (`closeOnBackdropClick`, default off).",table:{category:"Behavior"}},closeOnEscape:{name:"Dismiss on Escape",control:"boolean",description:"Escape closes the overlay (`closeOnEscape`, default on). Independent of backdrop click.",table:{category:"Behavior"}},look:{name:"Look",control:"radio",options:["dark","light"],description:"Dark: semi-transparent black. Light: frosted white with backdrop blur (`variant`). Both are deliberately static, theme-independent looks.",table:{category:"Appearance"}}},render:e=>o.jsx(y,{...e},JSON.stringify(e))};var n,s,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so the
  // Docs page's autodocs table still lists every real Overlay prop.
  // Storybook matches \`include\` against each control's display \`name\`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: ["look", "closeOnBackdropClick", "closeOnEscape", "Look", "Dismiss on backdrop click", "Dismiss on Escape"],
      sort: "none"
    }
  },
  args: {
    look: "dark",
    closeOnBackdropClick: false,
    closeOnEscape: true
  },
  argTypes: {
    closeOnBackdropClick: {
      name: "Dismiss on backdrop click",
      control: "boolean",
      description: "Clicking the backdrop closes the overlay (\`closeOnBackdropClick\`, default off).",
      table: {
        category: "Behavior"
      }
    },
    closeOnEscape: {
      name: "Dismiss on Escape",
      control: "boolean",
      description: "Escape closes the overlay (\`closeOnEscape\`, default on). Independent of backdrop click.",
      table: {
        category: "Behavior"
      }
    },
    look: {
      name: "Look",
      control: "radio",
      options: ["dark", "light"],
      description: "Dark: semi-transparent black. Light: frosted white with backdrop blur (\`variant\`). Both are deliberately static, theme-independent looks.",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes, closing any open overlay.
  <OverlayDemo key={JSON.stringify(args)} {...args} />
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,q as default};
