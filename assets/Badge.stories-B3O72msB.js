import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-DhMLlvMY.js";import{w as O}from"./storyControls-D66O-f8g.js";import{B as o}from"./badge-BpOJAIFg.js";import{B as q,C as k,P as N,a as B}from"./Badge.shared-CcH10gYD.js";import{I as v}from"./info-DsZieFkE.js";import{X as z}from"./x-CzxgOx-T.js";import{B as _}from"./bell-16x-NcfM.js";import{M as D}from"./minus-CVnigrff.js";import{C as L}from"./check-Dr3vGcdY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";const{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,$={title:"Custom Primitives/Badge",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},f={check:L,minus:D,bell:_,x:z,info:v},R={sm:"h-2 w-2",md:"h-2.5 w-2.5",lg:"h-3 w-3"};function W({label:d="Badge",circleContent:e="number",circleNumber:i=5,circleWord:t="New",circleIcon:u="check",shape:y="pill",pillColor:C="slate",pillVariant:A="subtle",showIcon:w=!1,iconPosition:x="left",pillIcon:I="check",pillFontSize:h="Default",circleVariant:a="default",circleFill:l="solid",circleBorder:c=!1,size:r="md",circlePulse:S=!1}){if(y==="pill")return n.jsx(o,{shape:"pill",color:C,variant:A,icon:w?(()=>{const p=f[I];return n.jsx(p,{strokeWidth:2})})():void 0,iconPosition:x,fontSize:h==="Default"?void 0:Number.parseInt(h,10),children:d});switch(e){case"dot":return n.jsx(o,{shape:"circle",variant:a,fill:l,bordered:c,size:r,dot:!0,pulse:S});case"word":return n.jsx(o,{shape:"circle",variant:a,fill:l,bordered:c,size:r,children:t});case"icon":{const p=f[u];return n.jsx(o,{shape:"circle",variant:a,fill:l,bordered:c,size:r,className:"px-0","aria-label":u,children:n.jsx(p,{className:R[r],strokeWidth:3,"aria-hidden":"true"})})}default:return n.jsx(o,{shape:"circle",variant:a,fill:l,bordered:c,size:r,count:i})}}const s=O({args:{label:"Badge",circleContent:"number",circleNumber:5,circleWord:"New",circleIcon:"check",shape:"pill",pillColor:"slate",pillVariant:"subtle",showIcon:!1,iconPosition:"left",pillIcon:"check",pillFontSize:"Default",circleVariant:"default",circleFill:"solid",circleBorder:!1,size:"md",circlePulse:!1,circlePulseOn:!1},parameters:{controls:{sort:"none"}},argTypes:{label:{name:"Label",control:"text",description:"Text inside a pill badge.",if:{arg:"shape",eq:"pill"},table:{category:"Content"}},circleContent:{name:"Circle content",control:"radio",options:["number","icon","dot","word"],description:"What a circle badge shows: a number (`count`, capped at 99+), an icon glyph, a plain dot (`dot`), or a word.",if:{arg:"shape",eq:"circle"},table:{category:"Content"}},circleNumber:{name:"Number",control:{type:"number",min:0,max:999},description:"The count shown (`count`). Anything over 99 renders as 99+.",if:{arg:"circleContent",eq:"number"},table:{category:"Content"}},circleIcon:{name:"Icon",control:"select",options:["check","minus","bell","x"],description:"Glyph passed as the badge's child; sized to the badge.",if:{arg:"circleContent",eq:"icon"},table:{category:"Content"}},circleWord:{name:"Word",control:"text",description:"Short text passed as the badge's child.",if:{arg:"circleContent",eq:"word"},table:{category:"Content"}},shape:{name:"Shape",control:"radio",options:["pill","circle"],description:"Pill is the labeled tag (formerly Chip). Circle is the count / status badge (formerly StatusBadge).",table:{category:"Appearance"}},pillColor:{name:"Color",options:B,control:{type:"select",labels:{critical:"critical (error)"}},description:"Accent color family, or a semantic status color: success, info, warning, critical (error) (`color`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},pillVariant:{name:"Fill",control:"radio",options:N,description:"Subtle tint or solid fill (`variant`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},showIcon:{name:"Show icon",control:"boolean",description:"Adds a decorative icon to the pill (`icon`).",if:{arg:"shape",eq:"pill"},table:{category:"Content"}},iconPosition:{name:"Icon position",control:"radio",options:["left","right","both"],description:"Icon before the label, after it, or on both sides (`iconPosition`).",if:{arg:"showIcon",truthy:!0},table:{category:"Content"}},pillIcon:{name:"Icon glyph",control:"select",options:["check","info","bell","minus","x"],description:"Which icon is passed as `icon`.",if:{arg:"showIcon",truthy:!0},table:{category:"Content"}},pillFontSize:{name:"Font size",control:"radio",options:["Default","12px","14px","16px"],description:"Pill font size (`fontSize`): 12, 14 or 16px. Default keeps the standard pill text style.",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},circlePulse:{name:"Pulse",control:"boolean",description:"A ring of the dot's color radiates outward and fades on a loop — the new-assignment indicator look (`pulse`). Dot content only; off for reduced-motion users.",if:{arg:"circlePulseOn",truthy:!0},table:{category:"Appearance"}},circlePulseOn:{table:{disable:!0}},circleVariant:{name:"Color",control:"select",options:k,description:"Semantic color role (`variant`): default, info, success, warning, critical or neutral.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleFill:{name:"Fill",control:"radio",options:["solid","subtle"],description:"Solid (strong background) or subtle (tinted background) (`fill`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleBorder:{name:"Border",control:"boolean",description:"Adds a 1px border (`bordered`): white on a solid fill, the solid version of the selected Color on a subtle fill.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},size:{name:"Size",control:"radio",options:q,description:"Circle diameter and text size (`size`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}}},render:function(e){const[,i]=E(),t=e.shape==="circle"&&e.circleContent==="dot";return P.useEffect(()=>{e.circlePulseOn!==t&&i({circlePulseOn:t})},[e.circlePulseOn,t,i]),n.jsx(W,{...e},JSON.stringify(e))}});var g,m,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`withControlsFor({
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
    size: "md",
    circlePulse: false,
    circlePulseOn: false
  },
  parameters: {
    controls: {
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
    circlePulse: {
      name: "Pulse",
      control: "boolean",
      description: "A ring of the dot's color radiates outward and fades on a loop — the new-assignment indicator look (\`pulse\`). Dot content only; off for reduced-motion users.",
      if: {
        arg: "circlePulseOn",
        truthy: true
      },
      table: {
        category: "Appearance"
      }
    },
    circlePulseOn: {
      table: {
        disable: true
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
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync so Pulse only shows for a circle dot.
    const pulseOn = args.shape === "circle" && args.circleContent === "dot";
    useEffect(() => {
      if (args.circlePulseOn !== pulseOn) updateArgs({
        circlePulseOn: pulseOn
      });
    }, [args.circlePulseOn, pulseOn, updateArgs]);
    return (
      // \`key\` remounts the demo when a control changes.
      <BadgeDemo key={JSON.stringify(args)} {...args} />
    );
  }
})`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const ee=["Default"];export{s as Default,ee as __namedExportsOrder,$ as default};
