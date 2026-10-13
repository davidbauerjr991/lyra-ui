import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as A}from"./utils-BLSKlp9E.js";import{C as p}from"./container-D2ud9AWn.js";import{A as T,T as v,F as E,f as H,h as C,a as c,b as _,c as B,B as I,H as V}from"./Container.shared-C8FhVtPt.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./container-header-5uZSWjxx.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./badge-Bcxq6Iyh.js";import"./button-CRbHmIRe.js";import"./spinner-xIhFAlhc.js";import"./tag-D8yJ2lBD.js";import"./tabs-ClByxZoj.js";import"./kebab-menu-button-BsRniZjC.js";import"./menu-radix-9vcg5XDz.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";const Se={title:"Custom Primitives/Container",component:p,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function N({variant:a="default",showHeader:e=!0,titleSize:f="md",showSubhead:b=!1,showIcon:g=!1,tagPlacement:l="none",showActions:y=!1,showTabs:i=!1,headerBordered:S=!1,footerAlign:s="none",footerBordered:w=!1}){const d=e&&S&&!i,t=s!=="none";return n.jsx(p,{variant:a,headerTitle:e?"Container":void 0,headerTitleClassName:B[f],headerSubhead:e&&b?"Supporting description":void 0,headerIcon:e&&g?_:void 0,headerTitleBadge:e&&l==="inline"?c:void 0,headerTopSlot:e&&l==="above"?c:void 0,headerActions:e&&y?C:void 0,headerTabs:e&&i?n.jsx(V,{}):void 0,headerBordered:d,footerActions:t?H:void 0,footerAlign:t?s:void 0,footerBordered:t&&w,className:A("max-w-xl",!e&&"pt-5",!t&&"pb-5"),children:n.jsx("div",{className:t?"pb-5":void 0,children:n.jsx(I,{belowDivider:d||e&&i,children:"Use the Controls panel below to switch variant, header and footer options."})})})}const o={if:{arg:"showHeader",truthy:!0}},r={name:"Default",parameters:{controls:{include:["Header","Subtitle","Icon","Alert tag","Actions","Tabs","Footer","Title size","Style","Header divider","Footer border","showHeader","showSubhead","showIcon","tagPlacement","showActions","showTabs","footerAlign","titleSize","variant","headerBordered","footerBordered"],sort:"none"}},args:{variant:"default",showHeader:!0,titleSize:"md",showSubhead:!1,showIcon:!1,tagPlacement:"none",showActions:!1,showTabs:!1,headerBordered:!1,footerAlign:"none",footerBordered:!1},argTypes:{showHeader:{name:"Header",control:"boolean",description:"Show the header (title) at the top of the container.",table:{category:"Content",defaultValue:{summary:"true"}}},showSubhead:{name:"Subtitle",control:"boolean",description:"Show a supporting line under the title (`headerSubhead`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Show an icon to the left of the title (`headerIcon`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},tagPlacement:{name:"Alert tag",control:"radio",options:["none","above","inline"],description:"Show a status tag above the title (`headerTopSlot`) or inline right after it (`headerTitleBadge`).",...o,table:{category:"Content",defaultValue:{summary:"none"}}},showActions:{name:"Actions",control:"boolean",description:"Show an action button on the right of the header (`headerActions`).",...o,table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Show a tab row below the title (`headerTabs`). Tabs draw their own bottom border, so the header divider is ignored while on.",...o,table:{category:"Content",defaultValue:{summary:"false"}}},footerAlign:{name:"Footer",control:"radio",options:E,description:"Show a footer with two buttons, aligned left, right, or stretched to full width (`footerActions`, `footerAlign`).",table:{category:"Content",defaultValue:{summary:"none"}}},titleSize:{name:"Title size",control:"select",options:v,description:"Heading size of the title (`headerTitleClassName`, lyra-heading-{size}).",...o,table:{category:"Appearance",defaultValue:{summary:"md"}}},variant:{name:"Style",control:"select",options:T,description:"Color and border style, as {color}-{border}. Popover and modal are overlay surfaces.",table:{category:"Appearance",defaultValue:{summary:"default"}}},headerBordered:{name:"Header divider",control:"boolean",description:"Show a dividing line below the header (`headerBordered`).",...o,table:{category:"Appearance",defaultValue:{summary:"false"}}},footerBordered:{name:"Footer border",control:"boolean",description:"Show a border along the top edge of the footer (`footerBordered`). Only visible when a footer is on.",table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:a=>n.jsx(N,{...a},JSON.stringify(a))};var h,m,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches \`include\` against a control's display name when \`name\`
      // is set, so both the labels and the prop keys are listed.
      include: ["Header", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs", "Footer", "Title size", "Style", "Header divider", "Footer border", "showHeader", "showSubhead", "showIcon", "tagPlacement", "showActions", "showTabs", "footerAlign", "titleSize", "variant", "headerBordered", "footerBordered"],
      sort: "none"
    }
  },
  args: {
    variant: "default",
    showHeader: true,
    titleSize: "md",
    showSubhead: false,
    showIcon: false,
    tagPlacement: "none",
    showActions: false,
    showTabs: false,
    headerBordered: false,
    footerAlign: "none",
    footerBordered: false
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
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <ContainerDemo key={JSON.stringify(args)} {...args} />
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const we=["Default"];export{r as Default,we as __namedExportsOrder,Se as default};
