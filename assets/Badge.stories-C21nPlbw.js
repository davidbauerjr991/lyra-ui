import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./badge-Bcxq6Iyh.js";import{B as A,C as q,P as z,a as N}from"./Badge.shared-CcH10gYD.js";import{I as k}from"./info-DsZieFkE.js";import{X as B}from"./x-CzxgOx-T.js";import{B as P}from"./bell-16x-NcfM.js";import{M as v}from"./minus-CVnigrff.js";import{C as F}from"./check-Dr3vGcdY.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";const H={title:"Custom Primitives/Badge",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},d={check:F,minus:v,bell:P,x:B,info:k},L={sm:"h-2 w-2",md:"h-2.5 w-2.5",lg:"h-3 w-3"};function W({label:t="Badge",circleContent:g="number",circleNumber:u=5,circleWord:f="New",circleIcon:s="check",shape:y="pill",pillColor:C="slate",pillVariant:I="subtle",showIcon:S=!1,iconPosition:x="left",pillIcon:w="check",pillFontSize:p="Default",circleVariant:r="default",circleFill:i="solid",circleBorder:l=!1,size:o="md"}){if(y==="pill")return e.jsx(n,{shape:"pill",color:C,variant:I,icon:S?(()=>{const c=d[w];return e.jsx(c,{strokeWidth:2})})():void 0,iconPosition:x,fontSize:p==="Default"?void 0:Number.parseInt(p,10),children:t});switch(g){case"dot":return e.jsx(n,{shape:"circle",variant:r,fill:i,bordered:l,size:o,dot:!0});case"word":return e.jsx(n,{shape:"circle",variant:r,fill:i,bordered:l,size:o,children:f});case"icon":{const c=d[s];return e.jsx(n,{shape:"circle",variant:r,fill:i,bordered:l,size:o,className:"px-0","aria-label":s,children:e.jsx(c,{className:L[o],strokeWidth:3,"aria-hidden":"true"})})}default:return e.jsx(n,{shape:"circle",variant:r,fill:i,bordered:l,size:o,count:u})}}const a={args:{label:"Badge",circleContent:"number",circleNumber:5,circleWord:"New",circleIcon:"check",shape:"pill",pillColor:"slate",pillVariant:"subtle",showIcon:!1,iconPosition:"left",pillIcon:"check",pillFontSize:"Default",circleVariant:"default",circleFill:"solid",circleBorder:!1,size:"md"},parameters:{controls:{include:["shape","label","pillColor","pillVariant","showIcon","iconPosition","pillIcon","pillFontSize","circleContent","circleNumber","circleWord","circleIcon","circleVariant","circleFill","circleBorder","size","Shape","Label","Color","Fill","Show icon","Icon position","Icon glyph","Font size","Circle content","Number","Word","Icon","Border","Size"],sort:"none"}},argTypes:{label:{name:"Label",control:"text",description:"Text inside a pill badge.",if:{arg:"shape",eq:"pill"},table:{category:"Content"}},circleContent:{name:"Circle content",control:"radio",options:["number","icon","dot","word"],description:"What a circle badge shows: a number (`count`, capped at 99+), an icon glyph, a plain dot (`dot`), or a word.",if:{arg:"shape",eq:"circle"},table:{category:"Content"}},circleNumber:{name:"Number",control:{type:"number",min:0,max:999},description:"The count shown (`count`). Anything over 99 renders as 99+.",if:{arg:"circleContent",eq:"number"},table:{category:"Content"}},circleIcon:{name:"Icon",control:"select",options:["check","minus","bell","x"],description:"Glyph passed as the badge's child; sized to the badge.",if:{arg:"circleContent",eq:"icon"},table:{category:"Content"}},circleWord:{name:"Word",control:"text",description:"Short text passed as the badge's child.",if:{arg:"circleContent",eq:"word"},table:{category:"Content"}},shape:{name:"Shape",control:"radio",options:["pill","circle"],description:"Pill is the labeled tag (formerly Chip). Circle is the count / status badge (formerly StatusBadge).",table:{category:"Appearance"}},pillColor:{name:"Color",options:N,control:{type:"select",labels:{critical:"critical (error)"}},description:"Accent color family, or a semantic status color: success, info, warning, critical (error) (`color`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},pillVariant:{name:"Fill",control:"radio",options:z,description:"Subtle tint or solid fill (`variant`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},showIcon:{name:"Show icon",control:"boolean",description:"Adds a decorative icon to the pill (`icon`).",if:{arg:"shape",eq:"pill"},table:{category:"Content"}},iconPosition:{name:"Icon position",control:"radio",options:["left","right","both"],description:"Icon before the label, after it, or on both sides (`iconPosition`).",if:{arg:"showIcon",truthy:!0},table:{category:"Content"}},pillIcon:{name:"Icon glyph",control:"select",options:["check","info","bell","minus","x"],description:"Which icon is passed as `icon`.",if:{arg:"showIcon",truthy:!0},table:{category:"Content"}},pillFontSize:{name:"Font size",control:"radio",options:["Default","12px","14px","16px"],description:"Pill font size (`fontSize`): 12, 14 or 16px. Default keeps the standard pill text style.",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},circleVariant:{name:"Color",control:"select",options:q,description:"Semantic color role (`variant`): default, info, success, warning, critical or neutral.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleFill:{name:"Fill",control:"radio",options:["solid","subtle"],description:"Solid (strong background) or subtle (tinted background) (`fill`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleBorder:{name:"Border",control:"boolean",description:"Adds a 1px border (`bordered`): white on a solid fill, the solid version of the selected Color on a subtle fill.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},size:{name:"Size",control:"radio",options:A,description:"Circle diameter and text size (`size`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}}},render:t=>e.jsx(W,{...t},JSON.stringify(t))};var h,b,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Badge",
    circleContent: "number",
    circleNumber: 5,
    circleWord: "New",
    circleIcon: "check",
    shape: "pill",
    pillColor: "slate",
    pillVariant: "subtle",
    showIcon: false,
    iconPosition: "left",
    pillIcon: "check",
    pillFontSize: "Default",
    circleVariant: "default",
    circleFill: "solid",
    circleBorder: false,
    size: "md"
  },
  parameters: {
    controls: {
      include: ["shape", "label", "pillColor", "pillVariant", "showIcon", "iconPosition", "pillIcon", "pillFontSize", "circleContent", "circleNumber", "circleWord", "circleIcon", "circleVariant", "circleFill", "circleBorder", "size", "Shape", "Label", "Color", "Fill", "Show icon", "Icon position", "Icon glyph", "Font size", "Circle content", "Number", "Word", "Icon", "Border", "Size"],
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
      options: PILL_COLORS,
      control: {
        type: "select",
        labels: {
          critical: "critical (error)"
        }
      },
      description: "Accent color family, or a semantic status color: success, info, warning, critical (error) (\`color\`).",
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
    showIcon: {
      name: "Show icon",
      control: "boolean",
      description: "Adds a decorative icon to the pill (\`icon\`).",
      if: {
        arg: "shape",
        eq: "pill"
      },
      table: {
        category: "Content"
      }
    },
    iconPosition: {
      name: "Icon position",
      control: "radio",
      options: ["left", "right", "both"],
      description: "Icon before the label, after it, or on both sides (\`iconPosition\`).",
      if: {
        arg: "showIcon",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
    pillIcon: {
      name: "Icon glyph",
      control: "select",
      options: ["check", "info", "bell", "minus", "x"],
      description: "Which icon is passed as \`icon\`.",
      if: {
        arg: "showIcon",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
    pillFontSize: {
      name: "Font size",
      control: "radio",
      options: ["Default", "12px", "14px", "16px"],
      description: "Pill font size (\`fontSize\`): 12, 14 or 16px. Default keeps the standard pill text style.",
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
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const K=["Default"];export{a as Default,K as __namedExportsOrder,H as default};
