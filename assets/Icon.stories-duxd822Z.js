import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./icon-h0iptIZc.js";import{I as m,a as y,b as u,c as S,d as s}from"./Icon.shared-BkXanFkb.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./download-BLBOXyII.js";import"./createLucideIcon-aII_sYFw.js";import"./mail-BgfsS5Lx.js";import"./search-CZxBQJsH.js";import"./user-BnR-bf5w.js";import"./settings-B3RqFsd1.js";import"./bell-16x-NcfM.js";import"./star-CKl-uXvS.js";const T={title:"Custom Primitives/Icon",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function f({accessibility:e="decorative",spin:c=!1,glyph:l="star",label:p="Notifications",size:d="md",background:b="none",color:h="inherit",shape:g="rounded"}){return i.jsx(r,{icon:s[l],size:d,background:b,color:h,shape:g,spin:c,decorative:e==="decorative",label:e==="decorative"?void 0:p,tooltip:e==="tooltip"})}const n={args:{accessibility:"decorative",spin:!1,glyph:"star",label:"Notifications",size:"md",background:"none",color:"inherit",shape:"rounded"},parameters:{controls:{include:["accessibility","spin","glyph","label","size","background","color","shape","Accessibility","Spin","Glyph","Label","Size","Background","Color","Shape"],sort:"none"}},argTypes:{accessibility:{name:"Accessibility",control:"radio",options:["decorative","label","tooltip"],description:"Decorative hides the icon from screen readers (`decorative`). Label gives it an accessible name (`label`). Tooltip also shows that label on hover (`tooltip`).",table:{category:"Behavior"}},spin:{name:"Spin",control:"boolean",description:"Rotates the glyph continuously, for an in-progress state (`spin`).",table:{category:"Behavior"}},glyph:{name:"Glyph",control:"select",options:Object.keys(s),description:"Which icon to draw (`icon`).",table:{category:"Content"}},label:{name:"Label",control:"text",description:"Accessible name, and tooltip text when Accessibility is set to tooltip.",if:{arg:"accessibility",neq:"decorative"},table:{category:"Content"}},size:{name:"Size",control:"radio",options:S,description:"Glyph and container size (`size`).",table:{category:"Appearance"}},background:{name:"Background",control:"select",options:u,description:"Fill behind the glyph. None draws the glyph alone (`background`).",table:{category:"Appearance"}},color:{name:"Color",control:"select",options:y,description:"Glyph color. Only used when there is no background; a background sets its own color (`color`).",if:{arg:"background",eq:"none"},table:{category:"Appearance"}},shape:{name:"Shape",control:"radio",options:m,description:"Container shape. Only used when a background is set (`shape`).",if:{arg:"background",neq:"none"},table:{category:"Appearance"}}},render:e=>i.jsx(f,{...e},JSON.stringify(e))};var o,t,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    accessibility: "decorative",
    spin: false,
    glyph: "star",
    label: "Notifications",
    size: "md",
    background: "none",
    color: "inherit",
    shape: "rounded"
  },
  parameters: {
    controls: {
      include: ["accessibility", "spin", "glyph", "label", "size", "background", "color", "shape", "Accessibility", "Spin", "Glyph", "Label", "Size", "Background", "Color", "Shape"],
      sort: "none"
    }
  },
  argTypes: {
    accessibility: {
      name: "Accessibility",
      control: "radio",
      options: ["decorative", "label", "tooltip"],
      description: "Decorative hides the icon from screen readers (\`decorative\`). Label gives it an accessible name (\`label\`). Tooltip also shows that label on hover (\`tooltip\`).",
      table: {
        category: "Behavior"
      }
    },
    spin: {
      name: "Spin",
      control: "boolean",
      description: "Rotates the glyph continuously, for an in-progress state (\`spin\`).",
      table: {
        category: "Behavior"
      }
    },
    glyph: {
      name: "Glyph",
      control: "select",
      options: Object.keys(ICON_GLYPHS),
      description: "Which icon to draw (\`icon\`).",
      table: {
        category: "Content"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Accessible name, and tooltip text when Accessibility is set to tooltip.",
      if: {
        arg: "accessibility",
        neq: "decorative"
      },
      table: {
        category: "Content"
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ICON_SIZES,
      description: "Glyph and container size (\`size\`).",
      table: {
        category: "Appearance"
      }
    },
    background: {
      name: "Background",
      control: "select",
      options: ICON_BACKGROUNDS,
      description: "Fill behind the glyph. None draws the glyph alone (\`background\`).",
      table: {
        category: "Appearance"
      }
    },
    color: {
      name: "Color",
      control: "select",
      options: ICON_COLORS,
      description: "Glyph color. Only used when there is no background; a background sets its own color (\`color\`).",
      if: {
        arg: "background",
        eq: "none"
      },
      table: {
        category: "Appearance"
      }
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: ICON_SHAPES,
      description: "Container shape. Only used when a background is set (\`shape\`).",
      if: {
        arg: "background",
        neq: "none"
      },
      table: {
        category: "Appearance"
      }
    }
  },
  render: args => <IconDemo key={JSON.stringify(args)} {...args} />
}`,...(a=(t=n.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const F=["Default"];export{n as Default,F as __namedExportsOrder,T as default};
