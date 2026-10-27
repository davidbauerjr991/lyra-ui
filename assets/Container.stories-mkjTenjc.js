import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./utils-BLSKlp9E.js";import{C as S}from"./container-C7yiAi4_.js";import{A as x,T as I,F,f as W,h as O,a as p,b as R,D as k,B as b,H as z,w as L,c as P}from"./Container.shared-D9Nc0eKH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./badge-DnlHYDBX.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./tag-DQ3sj_Kb.js";import"./tabs-CB4kH1Fe.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const We={title:"Custom Primitives/Container",component:S,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function j({variant:r="default",radius:A="lg",borders:v=["top","right","bottom","left"],accent:T="none",showHeader:e=!0,titleSize:E="md",showSubhead:C=!1,showTitle:H=!0,showDraggable:d=!1,showIcon:V=!1,tagPlacement:c="none",showActions:B=!1,showTabs:s=!1,headerBordered:_=!1,footerAlign:h="none",footerBordered:D=!1,footerScrollEffect:i="none"}){const f=e&&_&&!s,n=h!=="none",a=n&&i!=="none",m=t.jsx(S,{variant:r,radius:A,borders:v,accent:T,headerTitle:e&&H?"Container":void 0,headerClassName:e&&d?k:void 0,headerTitleClassName:R[E],headerSubhead:e&&C?"Supporting description":void 0,headerIcon:e?L(V?P:void 0,d):void 0,headerTitleBadge:e&&c==="inline"?p:void 0,headerTopSlot:e&&c==="above"?p:void 0,headerActions:e&&B?O:void 0,headerTabs:e&&s?t.jsx(z,{}):void 0,headerBordered:f,footerActions:n?W:void 0,footerAlign:n?h:void 0,footerBordered:n&&D,footerScrollShadow:a&&i==="shadow",footerScrollFade:a&&i==="fade",footerClassName:a?"sticky bottom-0 bg-inherit":void 0,className:N(!a&&"max-w-xl",!e&&"pt-5",!n&&"pb-5"),children:t.jsxs("div",{className:n?"pb-5":void 0,children:[t.jsx(b,{belowDivider:f||e&&s,children:"Use the Controls panel below to switch variant, header and footer options."}),a&&Array.from({length:6},(G,u)=>t.jsxs(b,{children:["Sample content ",u+1,". Scroll to see the footer shadow."]},u))]})});return a?t.jsx("div",{className:"max-h-72 max-w-xl overflow-y-auto rounded-lyra-lg",children:m}):m}const o={if:{arg:"showHeader",truthy:!0}},l={name:"Default",parameters:{controls:{include:["Header","Title","Draggable","Subtitle","Icon","Alert tag","Actions","Tabs","Footer","Title size","Style","Corner radius","Borders","Accent bar","Header divider","Footer border","Footer scroll effect","showHeader","showTitle","showDraggable","showSubhead","showIcon","tagPlacement","showActions","showTabs","footerAlign","titleSize","variant","radius","borders","accent","headerBordered","footerBordered","footerScrollEffect"],sort:"none"}},args:{variant:"default",radius:"lg",borders:["top","right","bottom","left"],accent:"none",showHeader:!0,showTitle:!0,showDraggable:!1,titleSize:"md",showSubhead:!1,showIcon:!1,tagPlacement:"none",showActions:!1,showTabs:!1,headerBordered:!1,footerAlign:"none",footerBordered:!1,footerScrollEffect:"none"},argTypes:{showHeader:{name:"Header",control:"boolean",description:"Show the header (title) at the top of the container.",table:{category:"Content",defaultValue:{summary:"true"}}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",...o,table:{category:"Content",defaultValue:{summary:"true"}}},showDraggable:{name:"Draggable",control:"boolean",description:"Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},tagPlacement:{name:"Alert tag",control:"radio",options:["none","above","inline"],description:"Show a status tag above the title (`headerTopSlot`) or inline right after it (`headerTitleBadge`).",...o,table:{category:"Content",defaultValue:{summary:"none"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a tab row below the title (`headerTabs`). Tabs draw their own bottom border, so the header divider is ignored while on.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer",control:"radio",options:F,description:"Show a footer with two buttons, aligned left, right, or stretched to full width (`footerActions`, `footerAlign`).",table:{category:"Content",defaultValue:{summary:"none"}}},titleSize:{name:"Title size",control:"select",options:I,description:"Heading size of the title (`headerTitleClassName`, lyra-heading-{size}).",...o,table:{category:"Appearance",defaultValue:{summary:"md"}}},variant:{name:"Style",control:"select",options:x,description:"Color and border style, as {color}-{border}. Popover and modal are overlay surfaces.",table:{category:"Appearance",defaultValue:{summary:"default"}}},radius:{name:"Corner radius",control:"select",options:["none","xs","sm","md","lg","xl"],description:"Corner radius token (`radius`): none 0, xs 4, sm 6, md 8, lg 12, xl 16px.",table:{category:"Appearance",defaultValue:{summary:"lg"}}},borders:{name:"Borders",control:"check",options:["top","right","bottom","left"],description:"Which sides draw the variant's border (`borders`). All four is the default; none ticked removes the border. Needs a style that has a border (not the “-none” styles).",table:{category:"Appearance",defaultValue:{summary:"all four sides"}}},accent:{name:"Accent bar",control:"select",options:["none","left","right","top","bottom"],labels:{none:"None",left:"Left",right:"Right",top:"Top",bottom:"Bottom"},description:"A thick (4px) bar on one side in the style's strong color (`accent`). It follows the corner radius and sits on top of Borders, so Borders off with a left bar gives a bar alone.",table:{category:"Appearance",defaultValue:{summary:"none"}}},headerBordered:{name:"Header divider",control:"boolean",description:"Show a dividing line below the header (`headerBordered`).",...o,table:{category:"Appearance",defaultValue:{summary:"false"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`footerBordered`). Only visible when a footer is on.",if:{arg:"footerScrollEffect",neq:"fade"},table:{category:"Appearance",defaultValue:{summary:"false"}}},footerScrollEffect:{name:"Footer scroll effect",control:"radio",options:["none","shadow","fade"],labels:{none:"None",shadow:"Shadow",fade:"Fade"},description:"What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",table:{category:"Appearance",defaultValue:{summary:"none"}}}},render:r=>t.jsx(j,{...r},JSON.stringify(r))};var g,y,w;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\`
      // is set, so both the labels and the prop keys are listed.
      include: ["Header", "Title", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs", "Footer", "Title size", "Style", "Corner radius", "Borders", "Accent bar", "Header divider", "Footer border", "Footer scroll effect", "showHeader", "showTitle", "showDraggable", "showSubhead", "showIcon", "tagPlacement", "showActions", "showTabs", "footerAlign", "titleSize", "variant", "radius", "borders", "accent", "headerBordered", "footerBordered", "footerScrollEffect"],
      sort: "none"
    }
  },
  args: {
    variant: "default",
    radius: "lg",
    borders: ["top", "right", "bottom", "left"],
    accent: "none",
    showHeader: true,
    showTitle: true,
    showDraggable: false,
    titleSize: "md",
    showSubhead: false,
    showIcon: false,
    tagPlacement: "none",
    showActions: false,
    showTabs: false,
    headerBordered: false,
    footerAlign: "none",
    footerBordered: false,
    footerScrollEffect: "none"
  },
  argTypes: {
    showHeader: {
      name: "Header",
      control: "boolean",
      description: "Show the header (title) at the top of the container.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (\`headerTitle\`). Off gives an icon-only or action-only header.",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showDraggable: {
      name: "Draggable",
      control: "boolean",
      description: "Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (\`headerSubhead\`).",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show an icon to the left of the title (\`headerIcon\`).",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    tagPlacement: {
      name: "Alert tag",
      control: "radio",
      options: ["none", "above", "inline"],
      description: "Show a status tag above the title (\`headerTopSlot\`) or inline right after it (\`headerTitleBadge\`).",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "none"
        }
      }
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show an action button on the right of the header (\`headerActions\`).",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Show a tab row below the title (\`headerTabs\`). Tabs draw their own bottom border, so the header divider is ignored while on.",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    footerAlign: {
      name: "Footer",
      control: "radio",
      options: FOOTER_ALIGNS,
      description: "Show a footer with two buttons, aligned left, right, or stretched to full width (\`footerActions\`, \`footerAlign\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "none"
        }
      }
    },
    titleSize: {
      name: "Title size",
      control: "select",
      options: TITLE_SIZES,
      description: "Heading size of the title (\`headerTitleClassName\`, lyra-heading-{size}).",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    variant: {
      name: "Style",
      control: "select",
      options: ALL_VARIANTS,
      description: "Color and border style, as {color}-{border}. Popover and modal are overlay surfaces.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    radius: {
      name: "Corner radius",
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Corner radius token (\`radius\`): none 0, xs 4, sm 6, md 8, lg 12, xl 16px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "lg"
        }
      }
    },
    borders: {
      name: "Borders",
      control: "check",
      options: ["top", "right", "bottom", "left"],
      description: "Which sides draw the variant's border (\`borders\`). All four is the default; none ticked removes the border. Needs a style that has a border (not the “-none” styles).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "all four sides"
        }
      }
    },
    accent: {
      name: "Accent bar",
      control: "select",
      options: ["none", "left", "right", "top", "bottom"],
      labels: {
        none: "None",
        left: "Left",
        right: "Right",
        top: "Top",
        bottom: "Bottom"
      },
      description: "A thick (4px) bar on one side in the style's strong color (\`accent\`). It follows the corner radius and sits on top of Borders, so Borders off with a left bar gives a bar alone.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "none"
        }
      }
    },
    headerBordered: {
      name: "Header divider",
      control: "boolean",
      description: "Show a dividing line below the header (\`headerBordered\`).",
      ...SHOW_WHEN_HEADER,
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Show a border along the top edge of the footer (\`footerBordered\`). Only visible when a footer is on.",
      if: {
        arg: "footerScrollEffect",
        neq: "fade"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    footerScrollEffect: {
      name: "Footer scroll effect",
      control: "radio",
      options: ["none", "shadow", "fade"],
      labels: {
        none: "None",
        shadow: "Shadow",
        fade: "Fade"
      },
      description: "What shows while content scrolls behind the footer: nothing, a soft shadow above it (\`footerScrollShadow\`), or the content fading out into it (\`footerScrollFade\`). Shadow and fade are alternatives; Fade also hides Footer border.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "none"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <ContainerDemo key={JSON.stringify(args)} {...args} />
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const Oe=["Default"];export{l as Default,Oe as __namedExportsOrder,We as default};
