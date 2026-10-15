import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as D}from"./utils-BLSKlp9E.js";import{C as y}from"./container-Dkw7t9NN.js";import{A as x,T as N,F,f as B,h as I,a as p,b as W,D as O,B as g,H as R,w as z,c as L}from"./Container.shared-lzEDtO3L.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./badge-Bcxq6Iyh.js";import"./button-DGWscpRe.js";import"./spinner-xIhFAlhc.js";import"./tag-CePNn257.js";import"./tabs-sC7PiW5A.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const Ne={title:"Custom Primitives/Container",component:y,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function P({variant:r="default",radius:A="lg",showHeader:e=!0,titleSize:T="md",showSubhead:v=!1,showTitle:E=!0,showDraggable:d=!1,showIcon:C=!1,tagPlacement:c="none",showActions:H=!1,showTabs:i=!1,headerBordered:_=!1,footerAlign:h="none",footerBordered:V=!1,footerScrollEffect:s="none"}){const m=e&&_&&!i,t=h!=="none",a=t&&s!=="none",f=n.jsx(y,{variant:r,radius:A,headerTitle:e&&E?"Container":void 0,headerClassName:e&&d?O:void 0,headerTitleClassName:W[T],headerSubhead:e&&v?"Supporting description":void 0,headerIcon:e?z(C?L:void 0,d):void 0,headerTitleBadge:e&&c==="inline"?p:void 0,headerTopSlot:e&&c==="above"?p:void 0,headerActions:e&&H?I:void 0,headerTabs:e&&i?n.jsx(R,{}):void 0,headerBordered:m,footerActions:t?B:void 0,footerAlign:t?h:void 0,footerBordered:t&&V,footerScrollShadow:a&&s==="shadow",footerScrollFade:a&&s==="fade",footerClassName:a?"sticky bottom-0 bg-inherit":void 0,className:D(!a&&"max-w-xl",!e&&"pt-5",!t&&"pb-5"),children:n.jsxs("div",{className:t?"pb-5":void 0,children:[n.jsx(g,{belowDivider:m||e&&i,children:"Use the Controls panel below to switch variant, header and footer options."}),a&&Array.from({length:6},(j,u)=>n.jsxs(g,{children:["Sample content ",u+1,". Scroll to see the footer shadow."]},u))]})});return a?n.jsx("div",{className:"max-h-72 max-w-xl overflow-y-auto rounded-lyra-lg",children:f}):f}const o={if:{arg:"showHeader",truthy:!0}},l={name:"Default",parameters:{controls:{include:["Header","Title","Draggable","Subtitle","Icon","Alert tag","Actions","Tabs","Footer","Title size","Style","Corner radius","Header divider","Footer border","Footer scroll effect","showHeader","showTitle","showDraggable","showSubhead","showIcon","tagPlacement","showActions","showTabs","footerAlign","titleSize","variant","radius","headerBordered","footerBordered","footerScrollEffect"],sort:"none"}},args:{variant:"default",radius:"lg",showHeader:!0,showTitle:!0,showDraggable:!1,titleSize:"md",showSubhead:!1,showIcon:!1,tagPlacement:"none",showActions:!1,showTabs:!1,headerBordered:!1,footerAlign:"none",footerBordered:!1,footerScrollEffect:"none"},argTypes:{showHeader:{name:"Header",control:"boolean",description:"Show the header (title) at the top of the container.",table:{category:"Content",defaultValue:{summary:"true"}}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",...o,table:{category:"Content",defaultValue:{summary:"true"}}},showDraggable:{name:"Draggable",control:"boolean",description:"Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},tagPlacement:{name:"Alert tag",control:"radio",options:["none","above","inline"],description:"Show a status tag above the title (`headerTopSlot`) or inline right after it (`headerTitleBadge`).",...o,table:{category:"Content",defaultValue:{summary:"none"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a tab row below the title (`headerTabs`). Tabs draw their own bottom border, so the header divider is ignored while on.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer",control:"radio",options:F,description:"Show a footer with two buttons, aligned left, right, or stretched to full width (`footerActions`, `footerAlign`).",table:{category:"Content",defaultValue:{summary:"none"}}},titleSize:{name:"Title size",control:"select",options:N,description:"Heading size of the title (`headerTitleClassName`, lyra-heading-{size}).",...o,table:{category:"Appearance",defaultValue:{summary:"md"}}},variant:{name:"Style",control:"select",options:x,description:"Color and border style, as {color}-{border}. Popover and modal are overlay surfaces.",table:{category:"Appearance",defaultValue:{summary:"default"}}},radius:{name:"Corner radius",control:"select",options:["none","xs","sm","md","lg","xl"],description:"Corner radius token (`radius`): none 0, xs 4, sm 6, md 8, lg 12, xl 16px.",table:{category:"Appearance",defaultValue:{summary:"lg"}}},headerBordered:{name:"Header divider",control:"boolean",description:"Show a dividing line below the header (`headerBordered`).",...o,table:{category:"Appearance",defaultValue:{summary:"false"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`footerBordered`). Only visible when a footer is on.",if:{arg:"footerScrollEffect",neq:"fade"},table:{category:"Appearance",defaultValue:{summary:"false"}}},footerScrollEffect:{name:"Footer scroll effect",control:"radio",options:["none","shadow","fade"],labels:{none:"None",shadow:"Shadow",fade:"Fade"},description:"What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",table:{category:"Appearance",defaultValue:{summary:"none"}}}},render:r=>n.jsx(P,{...r},JSON.stringify(r))};var b,w,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\`
      // is set, so both the labels and the prop keys are listed.
      include: ["Header", "Title", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs", "Footer", "Title size", "Style", "Corner radius", "Header divider", "Footer border", "Footer scroll effect", "showHeader", "showTitle", "showDraggable", "showSubhead", "showIcon", "tagPlacement", "showActions", "showTabs", "footerAlign", "titleSize", "variant", "radius", "headerBordered", "footerBordered", "footerScrollEffect"],
      sort: "none"
    }
  },
  args: {
    variant: "default",
    radius: "lg",
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
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const Fe=["Default"];export{l as Default,Fe as __namedExportsOrder,Ne as default};
