import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{A as y,a}from"./AICard.shared-Dx-GdZ2p.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./accordion-D2Z-FgW6.js";import"./index-CSgTdu41.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-CBF9FTDx.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./container-footer-BSIaMmWX.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./external-link-Ck0ibvsS.js";import"./avatar-eVOlsmvc.js";import"./user-BnR-bf5w.js";import"./checkbox-wvqFL4jd.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./date-picker-CmvT16Qf.js";import"./index-BY5kmD2Q.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./calendar-ChwVK3N4.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-right-BP9ksYh_.js";import"./date-picker-shared-BPkLGVzf.js";import"./error-icon-solid-eVlwMcX6.js";import"./calendar-t4SqpSdm.js";import"./input-CpMudak3.js";import"./progress-bar-DiX3DXMU.js";import"./tag-CePNn257.js";import"./select-N0jJDdGd.js";import"./index-pcZVUfq6.js";import"./popover-tSwa707i.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./separator-97dXnQFu.js";import"./time-picker-Di5Itspx.js";import"./time-picker-shared-DuVCWR-s.js";import"./number-field-hJRj5hJh.js";import"./clock-C3xVexPO.js";import"./toggle-group-DM3OCh1I.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-item-uivF4bHz.js";import"./textarea-CCnTGxxJ.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./sparkles-PRtIBnGT.js";import"./plus-BKUBo5Qt.js";import"./pencil-IFm_bK0G.js";import"./copy-CtBWyGKZ.js";import"./file-text-DK8c8V5C.js";import"./arrow-left-right-Cg1yeikD.js";import"./smile-C5saXL09.js";import"./triangle-alert-C66Fwj6V.js";import"./trash-2-DTLo779S.js";import"./calendar-days-soqEfQAB.js";const g=a.map(([e])=>e);function b({card:e="Autosummary",color:r="default",accordion:o="default",defaultOpen:i=!0,showIcon:p=!0,showDismiss:c=!1,showOpenWindow:u=!1,customerInfoLayout:f="list"}){var s;const h=((s=a.find(([w])=>w===e))==null?void 0:s[1])??a[0][1];return t.jsx("div",{className:"w-full",children:t.jsx(h,{o:{color:r==="default"?void 0:r,accordion:o==="default"?void 0:o==="on",defaultOpen:o==="default"?void 0:i,showIcon:p,showDismiss:c,showOpenWindow:u,customerInfoLayout:f}},`${e}-${o}-${i}`)})}const Ge={title:"UI/AICard",component:y,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={parameters:{controls:{include:["Card","Color","Accordion","Starts open","Icon","Layout","Open in new window","Dismiss","card","color","accordion","defaultOpen","showIcon","showOpenWindow","showDismiss","customerInfoLayout"],sort:"none"}},args:{card:"Autosummary",color:"default",accordion:"default",defaultOpen:!0,showIcon:!0,showDismiss:!1,showOpenWindow:!1,customerInfoLayout:"list"},argTypes:{card:{name:"Card",control:"select",options:g,description:"Which card to show. These are the same cards as the Variants page.",table:{category:"Content",defaultValue:{summary:"Autosummary"}}},color:{name:"Color",control:"radio",options:["default","purple","blue","yellow","green","red","neutral"],labels:{default:"Card default",purple:"Purple",blue:"Blue",yellow:"Yellow",green:"Green",red:"Red",neutral:"Neutral"},description:"Header tint (`color`). Card default keeps the picked card's own color.",table:{category:"Appearance",defaultValue:{summary:"default"}}},showIcon:{name:"Icon",control:"boolean",description:"Show the icon left of the title (`icon`). It takes the color's strong tone.",table:{category:"Appearance",defaultValue:{summary:"true"}}},customerInfoLayout:{name:"Layout",control:"radio",options:["list","conversational"],labels:{list:"List",conversational:"Conversational"},description:"How Customer Info presents the customer: label and value rows (list), or an avatar, tags and a written summary (conversational). Only applies to the Customer Info card.",if:{arg:"card",eq:"Customer Info"},table:{category:"Content",defaultValue:{summary:"list"}}},showOpenWindow:{name:"Open in new window",control:"boolean",description:"Show an open-in-new-window icon button in the header, before the dismiss X (`onOpenInNewWindow`). Does nothing here.",table:{category:"Appearance",defaultValue:{summary:"false"}}},showDismiss:{name:"Dismiss",control:"boolean",description:"Show a dismiss X at the right end of the header (`onDismiss`). Clicking it hides the card; the demo leaves a Restore card button.",table:{category:"Appearance",defaultValue:{summary:"false"}}},accordion:{name:"Accordion",control:"radio",options:["default","on","off"],labels:{default:"Card default",on:"On",off:"Off"},description:"Make the card collapsible: a chevron on the header toggles the body (`accordion`). Off is a plain card with the body always shown. Card default keeps the picked card's own setting.",table:{category:"Behavior",defaultValue:{summary:"default"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"Whether the accordion starts expanded (`defaultOpen`).",if:{arg:"accordion",eq:"on"},table:{category:"Behavior",defaultValue:{summary:"true"}}}},render:e=>t.jsx(b,{...e})};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display name, so names and keys are both listed.
      include: ["Card", "Color", "Accordion", "Starts open", "Icon", "Layout", "Open in new window", "Dismiss", "card", "color", "accordion", "defaultOpen", "showIcon", "showOpenWindow", "showDismiss", "customerInfoLayout"],
      sort: "none"
    }
  },
  args: {
    card: "Autosummary",
    color: "default",
    accordion: "default",
    defaultOpen: true,
    showIcon: true,
    showDismiss: false,
    showOpenWindow: false,
    customerInfoLayout: "list"
  },
  argTypes: {
    card: {
      name: "Card",
      control: "select",
      options: CARD_NAMES,
      description: "Which card to show. These are the same cards as the Variants page.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Autosummary"
        }
      }
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["default", "purple", "blue", "yellow", "green", "red", "neutral"],
      labels: {
        default: "Card default",
        purple: "Purple",
        blue: "Blue",
        yellow: "Yellow",
        green: "Green",
        red: "Red",
        neutral: "Neutral"
      },
      description: "Header tint (\`color\`). Card default keeps the picked card's own color.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show the icon left of the title (\`icon\`). It takes the color's strong tone.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    customerInfoLayout: {
      name: "Layout",
      control: "radio",
      options: ["list", "conversational"],
      labels: {
        list: "List",
        conversational: "Conversational"
      },
      description: "How Customer Info presents the customer: label and value rows (list), or an avatar, tags and a written summary (conversational). Only applies to the Customer Info card.",
      if: {
        arg: "card",
        eq: "Customer Info"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "list"
        }
      }
    },
    showOpenWindow: {
      name: "Open in new window",
      control: "boolean",
      description: "Show an open-in-new-window icon button in the header, before the dismiss X (\`onOpenInNewWindow\`). Does nothing here.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showDismiss: {
      name: "Dismiss",
      control: "boolean",
      description: "Show a dismiss X at the right end of the header (\`onDismiss\`). Clicking it hides the card; the demo leaves a Restore card button.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    accordion: {
      name: "Accordion",
      control: "radio",
      options: ["default", "on", "off"],
      labels: {
        default: "Card default",
        on: "On",
        off: "Off"
      },
      description: "Make the card collapsible: a chevron on the header toggles the body (\`accordion\`). Off is a plain card with the body always shown. Card default keeps the picked card's own setting.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "default"
        }
      }
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the accordion starts expanded (\`defaultOpen\`).",
      if: {
        arg: "accordion",
        eq: "on"
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    }
  },
  render: args => <AICardDemo {...args} />
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Pe=["Default"];export{n as Default,Pe as __namedExportsOrder,Ge as default};
