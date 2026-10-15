import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./avatar-eVOlsmvc.js";import{A as p,a as m,b as d,c as A}from"./Avatar.shared-CkD31gU_.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./bell-16x-NcfM.js";import"./bot-DgIAlNMp.js";import"./headphones-BPvLrNMv.js";const _={title:"Custom Primitives/Avatar",component:t,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function g({content:n="initials",size:r="md",shape:a="circle",color:i="shell"}){return n==="initials"?o.jsx(t,{initials:"AB",size:r,shape:a,color:i}):o.jsx(t,{icon:A[n],size:r,shape:a,color:i})}const e={args:{content:"initials",size:"md",shape:"circle",color:"shell"},parameters:{controls:{include:["content","size","shape","color","Content","Size","Shape","Color"],sort:"none"}},argTypes:{content:{name:"Content",control:"select",options:["initials","user","headphones","bot","bell"],description:"Initials (a known person) or a fallback glyph (`icon`) for an unidentified or generic one.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:m,description:"xs 28px, sm 32px, md 36px, lg 44px.",table:{category:"Appearance"}},shape:{name:"Shape",control:"radio",options:p,description:"Circle, or the small rounded square used by the collapsed left-nav tile.",table:{category:"Appearance"}},color:{name:"Color",control:"select",options:d.map(([n])=>n),description:"Background and glyph color pair.",table:{category:"Appearance"}}},render:n=>o.jsx(g,{...n},JSON.stringify(n))};var s,l,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: "initials",
    size: "md",
    shape: "circle",
    color: "shell"
  },
  parameters: {
    controls: {
      include: ["content", "size", "shape", "color", "Content", "Size", "Shape", "Color"],
      sort: "none"
    }
  },
  argTypes: {
    content: {
      name: "Content",
      control: "select",
      options: ["initials", "user", "headphones", "bot", "bell"],
      description: "Initials (a known person) or a fallback glyph (\`icon\`) for an unidentified or generic one.",
      table: {
        category: "Content"
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: AVATAR_SIZES,
      description: "xs 28px, sm 32px, md 36px, lg 44px.",
      table: {
        category: "Appearance"
      }
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: AVATAR_SHAPES,
      description: "Circle, or the small rounded square used by the collapsed left-nav tile.",
      table: {
        category: "Appearance"
      }
    },
    color: {
      name: "Color",
      control: "select",
      options: AVATAR_COLORS.map(([color]) => color),
      description: "Background and glyph color pair.",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <AvatarDemo key={JSON.stringify(args)} {...args} />
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,_ as default};
