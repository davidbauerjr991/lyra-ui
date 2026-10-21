import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-DhMLlvMY.js";import{A as i}from"./avatar-CJbM1faC.js";import{B}from"./badge-DnlHYDBX.js";import{w as C}from"./storyControls-D66O-f8g.js";import{A as O,a as S,b as x,c as v}from"./Avatar.shared-OjuAMTrE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./bell-16x-NcfM.js";import"./bot-DgIAlNMp.js";import"./headphones-BPvLrNMv.js";const{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,q={title:"Custom Primitives/Avatar",component:i,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},_={xs:"sm",sm:"sm",md:"md",lg:"md"};function E({content:t="initials",size:n="md",shape:o="circle",color:e="shell",badge:b=!1,badgeType:s="dot",badgeCount:m=3,badgeVariant:h="critical",badgeFill:f="solid",badgeBordered:y=!0,badgeSize:d="auto",badgePosition:l="top-right"}){const c=b?r.jsx(B,{shape:"circle",dot:s==="dot",count:s==="count"?m:void 0,variant:h,fill:f,bordered:y,size:d==="auto"?_[n]:d}):void 0;return t==="initials"?r.jsx(i,{initials:"AB",size:n,shape:o,color:e,badge:c,badgePosition:l}):r.jsx(i,{icon:v[t],size:n,shape:o,color:e,badge:c,badgePosition:l})}const a=C({args:{content:"initials",size:"md",shape:"circle",color:"shell",badge:!1,badgeType:"dot",badgeCount:3,badgeVariant:"critical",badgeFill:"solid",badgeBordered:!0,badgeSize:"auto",badgePosition:"top-right",badgeCountOn:!1},parameters:{controls:{sort:"none"}},argTypes:{content:{name:"Content",control:"select",options:["initials","user","headphones","bot","bell"],description:"Initials (a known person) or a fallback glyph (`icon`) for an unidentified or generic one.",table:{category:"Content"}},size:{name:"Size",control:"radio",options:x,description:"xs 28px, sm 32px, md 36px, lg 44px.",table:{category:"Appearance"}},shape:{name:"Shape",control:"radio",options:S,description:"Circle, or the small rounded square used by the collapsed left-nav tile.",table:{category:"Appearance"}},color:{name:"Color",control:"select",options:O.map(([t])=>t),description:"Background and glyph color pair.",table:{category:"Appearance"}},badge:{name:"Badge",control:"boolean",description:"A small circle `Badge` on the avatar's corner (`badge`). Its sub-controls are the circle badge's props.",table:{category:"Badge"}},badgeType:{name:"Badge type",control:"radio",options:["dot","count"],description:"A plain status dot (`dot`), or a number (`count`).",if:{arg:"badge",truthy:!0},table:{category:"Badge"}},badgeCount:{name:"Count",control:{type:"number",min:0,max:200},description:'The number shown (`count`); above 99 it reads "99+".',if:{arg:"badgeCountOn",truthy:!0},table:{category:"Badge"}},badgeVariant:{name:"Badge variant",control:"select",options:["default","info","success","warning","critical","neutral"],description:"Semantic color role (`variant`).",if:{arg:"badge",truthy:!0},table:{category:"Badge"}},badgeFill:{name:"Badge fill",control:"radio",options:["solid","subtle"],description:"Strong fill or tinted fill (`fill`).",if:{arg:"badge",truthy:!0},table:{category:"Badge"}},badgeBordered:{name:"Badge border",control:"boolean",description:"A 1px border that separates the badge from the avatar (`bordered`).",if:{arg:"badge",truthy:!0},table:{category:"Badge"}},badgeSize:{name:"Badge size",control:"radio",options:["auto","sm","md","lg"],description:"`auto` picks `sm` for xs/sm avatars and `md` for md/lg ones.",if:{arg:"badge",truthy:!0},table:{category:"Badge"}},badgePosition:{name:"Badge position",control:"radio",options:["top-right","bottom-right"],description:"Which corner the badge sits on (`badgePosition`). Status dots usually go bottom-right.",if:{arg:"badge",truthy:!0},table:{category:"Badge"}},badgeCountOn:{table:{disable:!0}}},render:function(n){const[,o]=T(),e=!!(n.badge&&n.badgeType==="count");return A.useEffect(()=>{n.badgeCountOn!==e&&o({badgeCountOn:e})},[n.badgeCountOn,e,o]),r.jsx(E,{...n},JSON.stringify(n))}});var g,p,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`withControlsFor({
  args: {
    content: "initials",
    size: "md",
    shape: "circle",
    color: "shell",
    badge: false,
    badgeType: "dot",
    badgeCount: 3,
    badgeVariant: "critical",
    badgeFill: "solid",
    badgeBordered: true,
    badgeSize: "auto",
    badgePosition: "top-right",
    badgeCountOn: false
  },
  parameters: {
    controls: {
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
    },
    badge: {
      name: "Badge",
      control: "boolean",
      description: "A small circle \`Badge\` on the avatar's corner (\`badge\`). Its sub-controls are the circle badge's props.",
      table: {
        category: "Badge"
      }
    },
    badgeType: {
      name: "Badge type",
      control: "radio",
      options: ["dot", "count"],
      description: "A plain status dot (\`dot\`), or a number (\`count\`).",
      if: {
        arg: "badge",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgeCount: {
      name: "Count",
      control: {
        type: "number",
        min: 0,
        max: 200
      },
      description: "The number shown (\`count\`); above 99 it reads \\"99+\\".",
      if: {
        arg: "badgeCountOn",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgeVariant: {
      name: "Badge variant",
      control: "select",
      options: ["default", "info", "success", "warning", "critical", "neutral"],
      description: "Semantic color role (\`variant\`).",
      if: {
        arg: "badge",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgeFill: {
      name: "Badge fill",
      control: "radio",
      options: ["solid", "subtle"],
      description: "Strong fill or tinted fill (\`fill\`).",
      if: {
        arg: "badge",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgeBordered: {
      name: "Badge border",
      control: "boolean",
      description: "A 1px border that separates the badge from the avatar (\`bordered\`).",
      if: {
        arg: "badge",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgeSize: {
      name: "Badge size",
      control: "radio",
      options: ["auto", "sm", "md", "lg"],
      description: "\`auto\` picks \`sm\` for xs/sm avatars and \`md\` for md/lg ones.",
      if: {
        arg: "badge",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgePosition: {
      name: "Badge position",
      control: "radio",
      options: ["top-right", "bottom-right"],
      description: "Which corner the badge sits on (\`badgePosition\`). Status dots usually go bottom-right.",
      if: {
        arg: "badge",
        truthy: true
      },
      table: {
        category: "Badge"
      }
    },
    badgeCountOn: {
      table: {
        disable: true
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync so Count only shows for a counted badge.
    const countOn = Boolean(args.badge && args.badgeType === "count");
    useEffect(() => {
      if (args.badgeCountOn !== countOn) updateArgs({
        badgeCountOn: countOn
      });
    }, [args.badgeCountOn, countOn, updateArgs]);
    return (
      // \`key\` remounts the demo when a control changes.
      <AvatarDemo key={JSON.stringify(args)} {...args} />
    );
  }
})`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const H=["Default"];export{a as Default,H as __namedExportsOrder,q as default};
