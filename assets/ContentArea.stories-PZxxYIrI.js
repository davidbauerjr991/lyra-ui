import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as l}from"./content-area-DGpmyfD5.js";import{C as i}from"./container-Dkw7t9NN.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";const m={default:void 0,none:"p-0",small:"p-2",all:"p-6"};function p({padding:n="default",showNav:s=!0,showContainer:d=!0}){return e.jsxs("div",{className:"flex h-[400px] bg-lyra-bg-surface-shell",children:[s&&e.jsx("div",{className:"w-[256px] flex-shrink-0 bg-lyra-bg-surface-shell"}),e.jsx(l,{padding:m[n],children:d?e.jsx(i,{className:"flex flex-1 items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"ContentArea provides the inset between the shell and the Container."})}):e.jsx("div",{className:"flex-1 rounded-lyra-lg border border-dashed border-lyra-border-strong"})})]})}const T={title:"Custom Primitives/ContentArea",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},a={parameters:{controls:{include:["Padding","Left nav","Container","padding","showNav","showContainer"],sort:"none"}},args:{padding:"default",showNav:!0,showContainer:!0},argTypes:{padding:{name:"Padding",control:"radio",options:["default","none","small","all"],labels:{default:"Default (right and bottom, 12px)",none:"None",small:"Small (8px all around)",all:"Large (24px all around)"},description:"The inset around the content (`padding`, a Tailwind class). Default leaves a 12px gap on the right and bottom only.",table:{category:"Appearance",defaultValue:{summary:"default"}}},showNav:{name:"Left nav",control:"boolean",description:"Show a stand-in for the LeftNav that normally sits beside the area.",table:{category:"Appearance",defaultValue:{summary:"true"}}},showContainer:{name:"Container",control:"boolean",description:"Place a Container inside the area. Off shows a dashed outline of the area's own bounds.",table:{category:"Content",defaultValue:{summary:"true"}}}},render:n=>e.jsx(p,{...n})};var t,o,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display name, so names and keys are both listed.
      include: ["Padding", "Left nav", "Container", "padding", "showNav", "showContainer"],
      sort: "none"
    }
  },
  args: {
    padding: "default",
    showNav: true,
    showContainer: true
  },
  argTypes: {
    padding: {
      name: "Padding",
      control: "radio",
      options: ["default", "none", "small", "all"],
      labels: {
        default: "Default (right and bottom, 12px)",
        none: "None",
        small: "Small (8px all around)",
        all: "Large (24px all around)"
      },
      description: "The inset around the content (\`padding\`, a Tailwind class). Default leaves a 12px gap on the right and bottom only.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    showNav: {
      name: "Left nav",
      control: "boolean",
      description: "Show a stand-in for the LeftNav that normally sits beside the area.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showContainer: {
      name: "Container",
      control: "boolean",
      description: "Place a Container inside the area. Off shows a dashed outline of the area's own bounds.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    }
  },
  render: args => <ContentAreaDemo {...args} />
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,T as default};
