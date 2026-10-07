import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DhMLlvMY.js";import{D as d}from"./draggable-QUbvgQ_x.js";import{C as f}from"./container-header-i6DKumQe.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./createLucideIcon-aII_sYFw.js";import"./panel-right-D5VBrIHO.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";const P={title:"Custom Primitives/Draggable",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function k({variant:o="float",lockVariant:c=!1,showHeaderControls:h=!0,dockedResizable:m=!0,title:g="Panel"}){const[t,p]=r.useState(o),[u,b]=r.useState(320),a=e.jsxs(d,{variant:t,defaultWidth:320,defaultHeight:420,minWidth:280,minHeight:200,onVariantChange:p,onWidthChange:b,lockVariant:c,showHeaderControls:h,dockedResizable:m,className:["rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",t==="float"?"shadow-lg":""].join(" "),children:[e.jsx(f,{title:g,bordered:!1}),e.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary text-center",children:["Currently ",e.jsx("strong",{children:t}),", ",Math.round(u),"px wide.",e.jsx("br",{}),t==="float"?"Drag the header to move it; resize from the bottom-right corner.":"Drag the left edge to resize."]})})]});return e.jsxs("div",{className:"relative flex h-screen overflow-hidden bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Main content area"})}),t==="docked"?e.jsx("div",{className:"h-full pr-3 pb-3",children:a}):e.jsx("div",{className:"absolute top-16 left-16 pointer-events-none",children:a})]})}const n={args:{variant:"float",lockVariant:!1,showHeaderControls:!0,dockedResizable:!0,title:"Panel"},parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:520}},controls:{include:["variant","lockVariant","showHeaderControls","dockedResizable","title","Starts as","Lock mode","Header controls","Docked resize handle","Title"],sort:"none"}},argTypes:{variant:{name:"Starts as",control:"radio",options:["float","docked"],description:"Float is freely draggable. Docked is pinned to the right edge (`variant`).",table:{category:"Behavior"}},lockVariant:{name:"Lock mode",control:"boolean",description:"Removes the dock/undock button so the panel can't change mode (`lockVariant`).",table:{category:"Behavior"}},showHeaderControls:{name:"Header controls",control:"boolean",description:"Shows the built-in grip and dock/undock buttons (`showHeaderControls`).",table:{category:"Behavior"}},dockedResizable:{name:"Docked resize handle",control:"boolean",description:"Shows the left-edge resize handle while docked (`dockedResizable`).",table:{category:"Behavior"}},title:{name:"Title",control:"text",description:"Text in the panel's header.",table:{category:"Content"}}},render:o=>e.jsx(k,{...o},JSON.stringify(o))};var s,l,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "float",
    lockVariant: false,
    showHeaderControls: true,
    dockedResizable: true,
    title: "Panel"
  },
  parameters: {
    layout: "fullscreen",
    // Full-viewport demo — render in an iframe on the Docs page so
    // \`h-screen\` has a bounded height to fill.
    docs: {
      story: {
        inline: false,
        iframeHeight: 520
      }
    },
    controls: {
      include: ["variant", "lockVariant", "showHeaderControls", "dockedResizable", "title", "Starts as", "Lock mode", "Header controls", "Docked resize handle", "Title"],
      sort: "none"
    }
  },
  argTypes: {
    variant: {
      name: "Starts as",
      control: "radio",
      options: ["float", "docked"],
      description: "Float is freely draggable. Docked is pinned to the right edge (\`variant\`).",
      table: {
        category: "Behavior"
      }
    },
    lockVariant: {
      name: "Lock mode",
      control: "boolean",
      description: "Removes the dock/undock button so the panel can't change mode (\`lockVariant\`).",
      table: {
        category: "Behavior"
      }
    },
    showHeaderControls: {
      name: "Header controls",
      control: "boolean",
      description: "Shows the built-in grip and dock/undock buttons (\`showHeaderControls\`).",
      table: {
        category: "Behavior"
      }
    },
    dockedResizable: {
      name: "Docked resize handle",
      control: "boolean",
      description: "Shows the left-edge resize handle while docked (\`dockedResizable\`).",
      table: {
        category: "Behavior"
      }
    },
    title: {
      name: "Title",
      control: "text",
      description: "Text in the panel's header.",
      table: {
        category: "Content"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <DraggableDemo key={JSON.stringify(args)} {...args} />
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const W=["Default"];export{n as Default,W as __namedExportsOrder,P as default};
