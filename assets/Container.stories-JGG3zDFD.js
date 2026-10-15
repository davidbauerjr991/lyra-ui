import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as D}from"./utils-BLSKlp9E.js";import{C as y}from"./container-CuG4Jt_a.js";import{A as V,T as N,F,f as B,h as I,a as p,b as W,D as O,B as b,H as x,w as R,c as z}from"./Container.shared-B0A6FWHY.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./badge-Bcxq6Iyh.js";import"./button-DGWscpRe.js";import"./spinner-xIhFAlhc.js";import"./tag-CePNn257.js";import"./tabs-sC7PiW5A.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const Ne={title:"Custom Primitives/Container",component:y,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function L({variant:r="default",showHeader:e=!0,titleSize:A="md",showSubhead:T=!1,showTitle:v=!0,showDraggable:d=!1,showIcon:E=!1,tagPlacement:h="none",showActions:H=!1,showTabs:i=!1,headerBordered:C=!1,footerAlign:c="none",footerBordered:_=!1,footerScrollEffect:s="none"}){const f=e&&C&&!i,n=c!=="none",a=n&&s!=="none",m=t.jsx(y,{variant:r,headerTitle:e&&v?"Container":void 0,headerClassName:e&&d?O:void 0,headerTitleClassName:W[A],headerSubhead:e&&T?"Supporting description":void 0,headerIcon:e?R(E?z:void 0,d):void 0,headerTitleBadge:e&&h==="inline"?p:void 0,headerTopSlot:e&&h==="above"?p:void 0,headerActions:e&&H?I:void 0,headerTabs:e&&i?t.jsx(x,{}):void 0,headerBordered:f,footerActions:n?B:void 0,footerAlign:n?c:void 0,footerBordered:n&&_,footerScrollShadow:a&&s==="shadow",footerScrollFade:a&&s==="fade",footerClassName:a?"sticky bottom-0 bg-inherit":void 0,className:D(!a&&"max-w-xl",!e&&"pt-5",!n&&"pb-5"),children:t.jsxs("div",{className:n?"pb-5":void 0,children:[t.jsx(b,{belowDivider:f||e&&i,children:"Use the Controls panel below to switch variant, header and footer options."}),a&&Array.from({length:6},(P,u)=>t.jsxs(b,{children:["Sample content ",u+1,". Scroll to see the footer shadow."]},u))]})});return a?t.jsx("div",{className:"max-h-72 max-w-xl overflow-y-auto rounded-lyra-lg",children:m}):m}const o={if:{arg:"showHeader",truthy:!0}},l={name:"Default",parameters:{controls:{include:["Header","Title","Draggable","Subtitle","Icon","Alert tag","Actions","Tabs","Footer","Title size","Style","Header divider","Footer border","Footer scroll effect","showHeader","showTitle","showDraggable","showSubhead","showIcon","tagPlacement","showActions","showTabs","footerAlign","titleSize","variant","headerBordered","footerBordered","footerScrollEffect"],sort:"none"}},args:{variant:"default",showHeader:!0,showTitle:!0,showDraggable:!1,titleSize:"md",showSubhead:!1,showIcon:!1,tagPlacement:"none",showActions:!1,showTabs:!1,headerBordered:!1,footerAlign:"none",footerBordered:!1,footerScrollEffect:"none"},argTypes:{showHeader:{name:"Header",control:"boolean",description:"Show the header (title) at the top of the container.",table:{category:"Content",defaultValue:{summary:"true"}}},showTitle:{name:"Title",control:"boolean",description:"Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",...o,table:{category:"Content",defaultValue:{summary:"true"}}},showDraggable:{name:"Draggable",control:"boolean",description:"Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},tagPlacement:{name:"Alert tag",control:"radio",options:["none","above","inline"],description:"Show a status tag above the title (`headerTopSlot`) or inline right after it (`headerTitleBadge`).",...o,table:{category:"Content",defaultValue:{summary:"none"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a tab row below the title (`headerTabs`). Tabs draw their own bottom border, so the header divider is ignored while on.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer",control:"radio",options:F,description:"Show a footer with two buttons, aligned left, right, or stretched to full width (`footerActions`, `footerAlign`).",table:{category:"Content",defaultValue:{summary:"none"}}},titleSize:{name:"Title size",control:"select",options:N,description:"Heading size of the title (`headerTitleClassName`, lyra-heading-{size}).",...o,table:{category:"Appearance",defaultValue:{summary:"md"}}},variant:{name:"Style",control:"select",options:V,description:"Color and border style, as {color}-{border}. Popover and modal are overlay surfaces.",table:{category:"Appearance",defaultValue:{summary:"default"}}},headerBordered:{name:"Header divider",control:"boolean",description:"Show a dividing line below the header (`headerBordered`).",...o,table:{category:"Appearance",defaultValue:{summary:"false"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`footerBordered`). Only visible when a footer is on.",if:{arg:"footerScrollEffect",neq:"fade"},table:{category:"Appearance",defaultValue:{summary:"false"}}},footerScrollEffect:{name:"Footer scroll effect",control:"radio",options:["none","shadow","fade"],labels:{none:"None",shadow:"Shadow",fade:"Fade"},description:"What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",table:{category:"Appearance",defaultValue:{summary:"none"}}}},render:r=>t.jsx(L,{...r},JSON.stringify(r))};var g,w,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\`
      // is set, so both the labels and the prop keys are listed.
      include: ["Header", "Title", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs", "Footer", "Title size", "Style", "Header divider", "Footer border", "Footer scroll effect", "showHeader", "showTitle", "showDraggable", "showSubhead", "showIcon", "tagPlacement", "showActions", "showTabs", "footerAlign", "titleSize", "variant", "headerBordered", "footerBordered", "footerScrollEffect"],
      sort: "none"
    }
  },
  args: {
    variant: "default",
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
