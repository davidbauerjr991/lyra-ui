import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-DhMLlvMY.js";import{w as k}from"./storyControls-D66O-f8g.js";import{B as t}from"./badge-DnlHYDBX.js";import{B as q,C as v,P as N,a as B}from"./Badge.shared-CcH10gYD.js";import{I as z}from"./info-DsZieFkE.js";import{X as _}from"./x-CzxgOx-T.js";import{B as D}from"./bell-16x-NcfM.js";import{M as L}from"./minus-CVnigrff.js";import{C as E}from"./check-Dr3vGcdY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";const{useArgs:W}=__STORYBOOK_MODULE_PREVIEW_API__,nn={title:"Custom Primitives/Badge",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},u={check:E,minus:L,bell:D,x:_,info:z},R={sm:"h-2 w-2",md:"h-2.5 w-2.5",lg:"h-3 w-3"};function F({label:h="Badge",circleContent:n="number",circleNumber:r=5,circleWord:a="New",circleIcon:o="check",shape:I="pill",pillColor:A="slate",pillVariant:O="subtle",showIcon:f=!1,iconPosition:g="left",pillIcon:b="check",pillFontSize:m="Default",circleVariant:l="default",circleFill:c="solid",circleBorder:s=!1,size:i="md",circlePulse:x=!1}){const S=u[b];if(I==="pill")return e.jsx(t,{shape:"pill",color:A,variant:O,icon:f?(()=>{const d=u[b];return e.jsx(d,{strokeWidth:2})})():void 0,iconPosition:g,fontSize:m==="Default"?void 0:Number.parseInt(m,10),children:h});switch(n){case"dot":return e.jsx(t,{shape:"circle",variant:l,fill:c,bordered:s,size:i,dot:!0,pulse:x});case"word":return e.jsx(t,{shape:"circle",variant:l,fill:c,bordered:s,size:i,icon:f?e.jsx(S,{strokeWidth:2}):void 0,iconPosition:g,children:a});case"icon":{const d=u[o];return e.jsx(t,{shape:"circle",variant:l,fill:c,bordered:s,size:i,className:"px-0","aria-label":o,children:e.jsx(d,{className:R[i],strokeWidth:3,"aria-hidden":"true"})})}default:return e.jsx(t,{shape:"circle",variant:l,fill:c,bordered:s,size:i,count:r})}}const p=k({args:{label:"Badge",circleContent:"number",circleNumber:5,circleWord:"New",circleIcon:"check",shape:"pill",pillColor:"slate",pillVariant:"subtle",showIcon:!1,iconPosition:"left",pillIcon:"check",pillFontSize:"Default",circleVariant:"default",circleFill:"solid",circleBorder:!1,size:"md",circlePulse:!1,circlePulseOn:!1},parameters:{controls:{sort:"none"}},argTypes:{label:{name:"Label",control:"text",description:"Text inside a pill badge.",if:{arg:"shape",eq:"pill"},table:{category:"Content"}},circleContent:{name:"Circle content",control:"radio",options:["number","icon","dot","word"],description:"What a circle badge shows: a number (`count`, capped at 99+), an icon glyph, a plain dot (`dot`), or a word.",if:{arg:"shape",eq:"circle"},table:{category:"Content"}},circleNumber:{name:"Number",control:{type:"number",min:0,max:999},description:"The count shown (`count`). Anything over 99 renders as 99+.",if:{arg:"circleContent",eq:"number"},table:{category:"Content"}},circleIcon:{name:"Icon",control:"select",options:["check","minus","bell","x"],description:"Glyph passed as the badge's child; sized to the badge.",if:{arg:"circleContent",eq:"icon"},table:{category:"Content"}},circleWord:{name:"Word",control:"text",description:"Short text passed as the badge's child.",if:{arg:"circleContent",eq:"word"},table:{category:"Content"}},shape:{name:"Shape",control:"radio",options:["pill","circle"],description:"Pill is the labeled tag (formerly Chip). Circle is the count / status badge (formerly StatusBadge).",table:{category:"Appearance"}},pillColor:{name:"Color",options:B,control:{type:"select",labels:{critical:"critical (error)"}},description:"Accent color family, or a semantic status color: success, info, warning, critical (error) (`color`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},pillVariant:{name:"Fill",control:"radio",options:N,description:"Subtle tint or solid fill (`variant`).",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},showIcon:{name:"Show icon",control:"boolean",description:"Adds a decorative icon (`icon`). Available on a pill, and on a circle showing a word.",if:{arg:"showIconOn",truthy:!0},table:{category:"Content"}},iconPosition:{name:"Icon position",control:"radio",options:["left","right","both"],description:"Icon before the label, after it, or on both sides (`iconPosition`).",if:{arg:"showIcon",truthy:!0},table:{category:"Content"}},pillIcon:{name:"Icon glyph",control:"select",options:["check","info","bell","minus","x"],description:"Which icon is passed as `icon`.",if:{arg:"showIcon",truthy:!0},table:{category:"Content"}},pillFontSize:{name:"Font size",control:"radio",options:["Default","12px","14px","16px"],description:"Pill font size (`fontSize`): 12, 14 or 16px. Default keeps the standard pill text style.",if:{arg:"shape",eq:"pill"},table:{category:"Appearance"}},circlePulse:{name:"Pulse",control:"boolean",description:"A ring of the dot's color radiates outward and fades on a loop — the new-assignment indicator look (`pulse`). Dot content only; off for reduced-motion users.",if:{arg:"circlePulseOn",truthy:!0},table:{category:"Appearance"}},circlePulseOn:{table:{disable:!0}},showIconOn:{table:{disable:!0}},circleVariant:{name:"Color",control:"select",options:v,description:"Semantic color role (`variant`): default, info, success, warning, critical or neutral.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleFill:{name:"Fill",control:"radio",options:["solid","subtle"],description:"Solid (strong background) or subtle (tinted background) (`fill`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},circleBorder:{name:"Border",control:"boolean",description:"Adds a 1px border (`bordered`): white on a solid fill, the solid version of the selected Color on a subtle fill.",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}},size:{name:"Size",control:"radio",options:q,description:"Circle diameter and text size (`size`).",if:{arg:"shape",eq:"circle"},table:{category:"Appearance"}}},render:function(n){const[,r]=W(),a=n.shape==="circle"&&n.circleContent==="dot",o=n.shape==="pill"||n.shape==="circle"&&n.circleContent==="word";return P.useEffect(()=>{n.circlePulseOn!==a&&r({circlePulseOn:a}),n.showIconOn!==o&&r({showIconOn:o})},[n.circlePulseOn,a,n.showIconOn,o,r]),e.jsx(F,{...n},JSON.stringify(n))}});var y,C,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`withControlsFor({
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
      description: "Adds a decorative icon (\`icon\`). Available on a pill, and on a circle showing a word.",
      if: {
        arg: "showIconOn",
        truthy: true
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
    showIconOn: {
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
    // Show icon applies to a pill and to a circle showing a word.
    const iconOn = args.shape === "pill" || args.shape === "circle" && args.circleContent === "word";
    useEffect(() => {
      if (args.circlePulseOn !== pulseOn) updateArgs({
        circlePulseOn: pulseOn
      });
      if (args.showIconOn !== iconOn) updateArgs({
        showIconOn: iconOn
      });
    }, [args.circlePulseOn, pulseOn, args.showIconOn, iconOn, updateArgs]);
    return (
      // \`key\` remounts the demo when a control changes.
      <BadgeDemo key={JSON.stringify(args)} {...args} />
    );
  }
})`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const en=["Default"];export{p as Default,en as __namedExportsOrder,nn as default};
