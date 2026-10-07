import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DhMLlvMY.js";import{O as c}from"./overlay-Cx0x67GM.js";import{B as m}from"./button-CLz1-b9g.js";import{F as k,S as h}from"./Overlay.shared-Wz28MQik.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./container-4ho-TAYP.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";const T={title:"Headless Primitives/Overlay",component:c,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function y({look:o="dark",closeOnBackdropClick:l=!1,closeOnEscape:i=!0}){const[p,n]=d.useState(!1);return e.jsxs("div",{className:k,children:[e.jsx(m,{onClick:()=>n(!0),children:"Open overlay"}),e.jsx(c,{open:p,variant:o,closeOnBackdropClick:l,closeOnEscape:i,onClose:()=>n(!1),children:e.jsx(h,{onClose:()=>n(!1)})})]})}const a={parameters:{controls:{include:["look","closeOnBackdropClick","closeOnEscape","Look","Dismiss on backdrop click","Dismiss on Escape"],sort:"none"}},args:{look:"dark",closeOnBackdropClick:!1,closeOnEscape:!0},argTypes:{closeOnBackdropClick:{name:"Dismiss on backdrop click",control:"boolean",description:"Clicking the backdrop closes the overlay (`closeOnBackdropClick`, default off).",table:{category:"Behavior"}},closeOnEscape:{name:"Dismiss on Escape",control:"boolean",description:"Escape closes the overlay (`closeOnEscape`, default on). Independent of backdrop click.",table:{category:"Behavior"}},look:{name:"Look",control:"radio",options:["dark","light"],description:"Dark: semi-transparent black. Light: frosted white with backdrop blur (`variant`). Both are deliberately static, theme-independent looks.",table:{category:"Appearance"}}},render:o=>e.jsx(y,{...o},JSON.stringify(o))};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,T as default};
