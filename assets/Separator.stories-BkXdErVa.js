import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DhMLlvMY.js";import{S as o}from"./separator-97dXnQFu.js";import{S as m,T as p,I as y}from"./Separator.shared-eXWxvjSH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";const O={title:"Custom Primitives/Separator",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},v={16:"my-4",8:"my-2",4:"my-1",0:"my-0"},w={16:"mx-4",8:"mx-2",4:"mx-1",0:"mx-0"};function b({orientation:t="horizontal",decorative:r=!1,maxWidth:i=!1,margin:s="16",itemCount:f=3}){const x=Math.max(2,Math.min(8,Math.round(f))),c=Array.from({length:x},(a,g)=>g);return t==="horizontal"?e.jsx(m,{maxWidth:i,children:c.map(a=>e.jsxs(l.Fragment,{children:[a>0&&e.jsx(o,{className:v[s],decorative:r}),e.jsxs(p,{children:["Section ",a+1]})]},a))}):e.jsx(m,{maxWidth:i,children:e.jsx(y,{spread:!0,children:c.map(a=>e.jsxs(l.Fragment,{children:[a>0&&e.jsx(o,{orientation:"vertical",className:w[s],decorative:r}),e.jsxs(p,{className:"flex-1 text-center",children:["Item ",a+1]})]},a))})})}const n={args:{orientation:"horizontal",decorative:!1,maxWidth:!1,margin:"16",itemCount:3},parameters:{controls:{include:["orientation","decorative","maxWidth","margin","itemCount","Orientation","Decorative","Max width","Margin","Item count"],sort:"none"}},argTypes:{decorative:{name:"Decorative",control:"boolean",description:"Hides the separator from screen readers when it is purely visual (`decorative`).",table:{category:"Behavior"}},orientation:{name:"Orientation",control:"radio",options:["horizontal","vertical"],description:"Horizontal spans the width of a stacked layout. Vertical spans the height of a row with a set height (`orientation`).",table:{category:"Appearance"}},itemCount:{name:"Item count",control:{type:"number",min:2,max:8,step:1},description:"How many sections (horizontal) or items (vertical) the example has. A separator sits between each pair, so N items show N − 1 separators.",table:{category:"Content",defaultValue:{summary:"3"}}},margin:{name:"Margin",control:"radio",options:["16","8","4","0"],description:"Space in px on each side of the separator: above and below a horizontal one, left and right of a vertical one (`className`).",table:{category:"Appearance",defaultValue:{summary:"16"}}},maxWidth:{name:"Max width",control:"boolean",description:"Bounds the example card between 240px and 320px instead of full width, matching Input. Off stretches it across its container. Vertical items spread evenly across the width.",table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:t=>e.jsx(b,{...t},JSON.stringify(t))};var d,h,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    decorative: false,
    maxWidth: false,
    margin: "16",
    itemCount: 3
  },
  parameters: {
    controls: {
      include: ["orientation", "decorative", "maxWidth", "margin", "itemCount", "Orientation", "Decorative", "Max width", "Margin", "Item count"],
      sort: "none"
    }
  },
  argTypes: {
    decorative: {
      name: "Decorative",
      control: "boolean",
      description: "Hides the separator from screen readers when it is purely visual (\`decorative\`).",
      table: {
        category: "Behavior"
      }
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Horizontal spans the width of a stacked layout. Vertical spans the height of a row with a set height (\`orientation\`).",
      table: {
        category: "Appearance"
      }
    },
    itemCount: {
      name: "Item count",
      control: {
        type: "number",
        min: 2,
        max: 8,
        step: 1
      },
      description: "How many sections (horizontal) or items (vertical) the example has. A separator sits between each pair, so N items show N − 1 separators.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "3"
        }
      }
    },
    margin: {
      name: "Margin",
      control: "radio",
      options: ["16", "8", "4", "0"],
      description: "Space in px on each side of the separator: above and below a horizontal one, left and right of a vertical one (\`className\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "16"
        }
      }
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Bounds the example card between 240px and 320px instead of full width, matching Input. Off stretches it across its container. Vertical items spread evenly across the width.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args => <SeparatorDemo key={JSON.stringify(args)} {...args} />
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,O as default};
