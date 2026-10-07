import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./badge-BIS9woDA.js";import{B as y,C as S,P as A,a as x}from"./Badge.shared-DH6GtVe_.js";import{X as w}from"./x-CzxgOx-T.js";import{B as N}from"./bell-16x-NcfM.js";import{M as q}from"./minus-CVnigrff.js";import{C as B}from"./check-Dr3vGcdY.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";const P={title:"Custom Primitives/Badge",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},I={check:B,minus:q,bell:N,x:w},k={sm:"h-2 w-2",md:"h-2.5 w-2.5",lg:"h-3 w-3"};function v({label:o="Badge",circleContent:m="number",circleNumber:b=5,circleWord:g="New",circleIcon:c="check",shape:h="pill",pillColor:u="slate",pillVariant:f="subtle",circleVariant:a="default",circleFill:t="solid",circleBorder:l=!1,size:r="md"}){if(h==="pill")return e.jsx(n,{shape:"pill",color:u,variant:f,children:o});switch(m){case"dot":return e.jsx(n,{shape:"circle",variant:a,fill:t,bordered:l,size:r,dot:!0});case"word":return e.jsx(n,{shape:"circle",variant:a,fill:t,bordered:l,size:r,children:g});case"icon":{const C=I[c];return e.jsx(n,{shape:"circle",variant:a,fill:t,bordered:l,size:r,className:"px-0","aria-label":c,children:e.jsx(C,{className:k[r],strokeWidth:3,"aria-hidden":"true"})})}default:return e.jsx(n,{shape:"circle",variant:a,fill:t,bordered:l,size:r,count:b})}}const i={args:{label:"Badge",circleContent:"number",circleNumber:5,circleWord:"New",circleIcon:"check",shape:"pill",pillColor:"slate",pillVariant:"subtle",circleVariant:"default",circleFill:"solid",circleBorder:!1,size:"md"},parameters:{controls:{include:["shape","label","pillColor","pillVariant","circleContent","circleNumber","circleWord","circleIcon","circleVariant","circleFill","circleBorder","size","Shape","Label","Color","Fill","Circle content","Number","Word","Icon","Border","Size"],sort:"none"}},argTypes:{label:{name:"Label",control:"text",description:"Text inside a pill badge.",if:{arg:"shape",eq:"pill"},table:{category:"Content"}},circleContent:{name:"Circle content",control:"radio",options:["number","icon","dot","word"],description:"What a circle badge shows: a number (`count`, capped at 99+), an icon glyph, a plain dot (`dot`), or a word.",if:{arg:"shape",eq:"circle"},table:{category:"Content"}},circleNumber:{name:"Number",control:{type:"number",min:0,max:999},description:"The count shown (`count`). Anything over 99 renders as 99+.",if:{arg:"circleContent",eq:"number"},table:{category:"Content"}},circleIcon:{name:"Icon",control:"select",options:["check","minus","bell","x"],description:"Glyph passed as the badge's child; sized to the badge.",if:{arg:"circleContent",eq:"icon"},table:{category:"Content"}},circleWord:{name:"Word",control:"text",description:"Short text passed as the badge's child.",if:{arg:"circleContent",eq:"word"},table:{category:"Content"}},shape:{name:"Shape",control:"radio",options:["pill","circle"],description:"Pill is the labeled tag (formerly Chip). Circle is the count / status badge (formerly StatusBadge).",table:{category:"Appearance"}},pillColor:{name:"Color",control:"select",options:x,description:"Accent color family (`color`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},pillVariant:{name:"Fill",control:"radio",options:A,description:"Subtle tint or solid fill (`variant`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},circleVariant:{name:"Color",control:"select",options:S,description:"Semantic color role (`variant`): default, info, success, warning, critical or neutral.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleFill:{name:"Fill",control:"radio",options:["solid","subtle"],description:"Solid (strong background) or subtle (tinted background) (`fill`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleBorder:{name:"Border",control:"boolean",description:"Adds a 1px border (`bordered`): white on a solid fill, the solid version of the selected Color on a subtle fill.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},size:{name:"Size",control:"radio",options:y,description:"Circle diameter and text size (`size`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}}},render:o=>e.jsx(v,{...o},JSON.stringify(o))};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Badge",
    circleContent: "number",
    circleNumber: 5,
    circleWord: "New",
    circleIcon: "check",
    shape: "pill",
    pillColor: "slate",
    pillVariant: "subtle",
    circleVariant: "default",
    circleFill: "solid",
    circleBorder: false,
    size: "md"
  },
  parameters: {
    controls: {
      include: ["shape", "label", "pillColor", "pillVariant", "circleContent", "circleNumber", "circleWord", "circleIcon", "circleVariant", "circleFill", "circleBorder", "size", "Shape", "Label", "Color", "Fill", "Circle content", "Number", "Word", "Icon", "Border", "Size"],
      sort: "none"
    }
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Text inside a pill badge.",
      if: {
        arg: "shape",
        eq: "pill"
      },
      table: {
        category: "Content"
      }
    },
    circleContent: {
      name: "Circle content",
      control: "radio",
      options: ["number", "icon", "dot", "word"],
      description: "What a circle badge shows: a number (\`count\`, capped at 99+), an icon glyph, a plain dot (\`dot\`), or a word.",
      if: {
        arg: "shape",
        eq: "circle"
      },
      table: {
        category: "Content"
      }
    },
    circleNumber: {
      name: "Number",
      control: {
        type: "number",
        min: 0,
        max: 999
      },
      description: "The count shown (\`count\`). Anything over 99 renders as 99+.",
      if: {
        arg: "circleContent",
        eq: "number"
      },
      table: {
        category: "Content"
      }
    },
    circleIcon: {
      name: "Icon",
      control: "select",
      options: ["check", "minus", "bell", "x"],
      description: "Glyph passed as the badge's child; sized to the badge.",
      if: {
        arg: "circleContent",
        eq: "icon"
      },
      table: {
        category: "Content"
      }
    },
    circleWord: {
      name: "Word",
      control: "text",
      description: "Short text passed as the badge's child.",
      if: {
        arg: "circleContent",
        eq: "word"
      },
      table: {
        category: "Content"
      }
    },
    shape: {
      name: "Shape",
      control: "radio",
      options: ["pill", "circle"],
      description: "Pill is the labeled tag (formerly Chip). Circle is the count / status badge (formerly StatusBadge).",
      table: {
        category: "Appearance"
      }
    },
    pillColor: {
      name: "Color",
      control: "select",
      options: COLORS,
      description: "Accent color family (\`color\`).",
      if: {
        arg: "shape",
        eq: "pill"
      },
      table: {
        category: "Appearance"
      }
    },
    pillVariant: {
      name: "Fill",
      control: "radio",
      options: PILL_VARIANTS,
      description: "Subtle tint or solid fill (\`variant\`).",
      if: {
        arg: "shape",
        eq: "pill"
      },
      table: {
        category: "Appearance"
      }
    },
    circleVariant: {
      name: "Color",
      control: "select",
      options: CIRCLE_VARIANTS,
      description: "Semantic color role (\`variant\`): default, info, success, warning, critical or neutral.",
      if: {
        arg: "shape",
        eq: "circle"
      },
      table: {
        category: "Appearance"
      }
    },
    circleFill: {
      name: "Fill",
      control: "radio",
      options: ["solid", "subtle"],
      description: "Solid (strong background) or subtle (tinted background) (\`fill\`).",
      if: {
        arg: "shape",
        eq: "circle"
      },
      table: {
        category: "Appearance"
      }
    },
    circleBorder: {
      name: "Border",
      control: "boolean",
      description: "Adds a 1px border (\`bordered\`): white on a solid fill, the solid version of the selected Color on a subtle fill.",
      if: {
        arg: "shape",
        eq: "circle"
      },
      table: {
        category: "Appearance"
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: BADGE_SIZES,
      description: "Circle diameter and text size (\`size\`).",
      if: {
        arg: "shape",
        eq: "circle"
      },
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <BadgeDemo key={JSON.stringify(args)} {...args} />
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const G=["Default"];export{i as Default,G as __namedExportsOrder,P as default};
