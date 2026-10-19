import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as V}from"./ai-card-DK-PZuqK.js";import{M as r}from"./AICard.shared-WbzJqq7v.js";import"./createLucideIcon-aII_sYFw.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./accordion-mz2LH1c-.js";import"./index-CSgTdu41.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-CBF9FTDx.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./container-footer-BSIaMmWX.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./external-link-Ck0ibvsS.js";import"./avatar-eVOlsmvc.js";import"./user-BnR-bf5w.js";import"./checkbox-wvqFL4jd.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./date-picker-CmvT16Qf.js";import"./index-BY5kmD2Q.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./calendar-ChwVK3N4.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-right-BP9ksYh_.js";import"./date-picker-shared-BPkLGVzf.js";import"./error-icon-solid-eVlwMcX6.js";import"./calendar-t4SqpSdm.js";import"./input-CpMudak3.js";import"./link-BFT11_ys.js";import"./progress-bar-DiX3DXMU.js";import"./tag-CePNn257.js";import"./select-D9KdkaGD.js";import"./index-pcZVUfq6.js";import"./popover-tSwa707i.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./separator-97dXnQFu.js";import"./time-picker-ezdt8Wga.js";import"./time-picker-shared-8gqNHptY.js";import"./number-field-hJRj5hJh.js";import"./clock-C3xVexPO.js";import"./toggle-group-DM3OCh1I.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-item-uivF4bHz.js";import"./textarea-CCnTGxxJ.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./sparkles-PRtIBnGT.js";import"./paperclip-52JUKXJ-.js";import"./plus-BKUBo5Qt.js";import"./pencil-IFm_bK0G.js";import"./copy-CtBWyGKZ.js";import"./file-text-DK8c8V5C.js";import"./arrow-left-right-Cg1yeikD.js";import"./smile-C5saXL09.js";import"./triangle-alert-C66Fwj6V.js";import"./trash-2-DTLo779S.js";import"./calendar-days-soqEfQAB.js";const O=r.map(([t])=>t).sort((t,e)=>t.localeCompare(e));function x({card:t="Autosummary",color:e="default",accordion:n="default",defaultOpen:i=!0,showIcon:d=!0,showDismiss:u=!1,showOpenWindow:h=!1,customerInfoLayout:f="list",populated:y=!1,autosummaryFormat:g="summary",sentimentLevel:b="neutral",checklistState:w="start",appointmentStep:C="start",ratingStep:S="start",density:A="compact",radius:v="md"}){var l;const k=((l=r.find(([I])=>I===t))==null?void 0:l[1])??r[0][1],s={Autosummary:g,"Customer Sentiment":b,"Warranty Claim Checklist":w,"Schedule Your Appointment":C,"Rate Your Copilot Experience":S}[t];return a.jsx("div",{className:"w-full",children:a.jsx(k,{o:{color:e==="default"?void 0:e,accordion:n==="default"?void 0:n==="on",defaultOpen:n==="default"?void 0:i,showIcon:d,showDismiss:u,showOpenWindow:h,customerInfoLayout:f,populated:y,variant:s,density:A,radius:v}},`${t}-${s}-${n}-${i}`)})}const ne={title:"UI/AICard",component:V,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o={parameters:{controls:{include:["Card","Color","Density","Corner radius","Accordion","Starts open","Icon","Format","Sentiment","Checklist state","Appointment step","Rating step","Layout","Populated","Open in new window","Dismiss","card","color","density","radius","accordion","defaultOpen","showIcon","showOpenWindow","showDismiss","customerInfoLayout","populated","autosummaryFormat","sentimentLevel","checklistState","appointmentStep","ratingStep"],sort:"none"}},args:{card:"Autosummary",color:"default",accordion:"default",defaultOpen:!0,showIcon:!0,showDismiss:!1,showOpenWindow:!1,customerInfoLayout:"list",populated:!1,autosummaryFormat:"summary",sentimentLevel:"neutral",checklistState:"start",appointmentStep:"start",ratingStep:"start",density:"compact",radius:"md"},argTypes:{card:{name:"Card",control:"select",options:O,description:"Which card to show. These are the same cards as the Variants page.",table:{category:"Content",defaultValue:{summary:"Autosummary"}}},color:{name:"Color",control:"radio",options:["default","purple","blue","yellow","green","red","neutral"],labels:{default:"Card default",purple:"Purple",blue:"Blue",yellow:"Yellow",green:"Green",red:"Red",neutral:"Neutral"},description:"Header tint (`color`). Card default keeps the picked card's own color.",table:{category:"Appearance",defaultValue:{summary:"default"}}},density:{name:"Density",control:"radio",options:["comfortable","compact"],labels:{comfortable:"Comfortable",compact:"Compact"},description:"Header height (`density`): compact is 40px (default), comfortable is 48px.",table:{category:"Appearance",defaultValue:{summary:"compact"}}},radius:{name:"Corner radius",control:"select",options:["none","xs","sm","md","lg","xl"],description:"Corner radius token (`radius`): none 0, xs 4, sm 6, md 8 (default), lg 12, xl 16px.",table:{category:"Appearance",defaultValue:{summary:"md"}}},showIcon:{name:"Icon",control:"boolean",description:"Show the icon left of the title (`icon`). It takes the color's strong tone.",table:{category:"Appearance",defaultValue:{summary:"true"}}},autosummaryFormat:{name:"Format",control:"radio",options:["summary","page"],labels:{summary:"Summary",page:"Page"},description:"Autosummary only: the short summary with edit and copy, or the full page with headed sections.",if:{arg:"card",eq:"Autosummary"},table:{category:"Content",defaultValue:{summary:"summary"}}},sentimentLevel:{name:"Sentiment",control:"radio",options:["negative","neutral","positive"],labels:{negative:"Negative",neutral:"Neutral",positive:"Positive"},description:"Customer Sentiment only: which read of the customer to show. Each has its own color, which the Color control can still override.",if:{arg:"card",eq:"Customer Sentiment"},table:{category:"Content",defaultValue:{summary:"neutral"}}},checklistState:{name:"Checklist state",control:"radio",options:["start","items","complete"],labels:{start:"Start",items:"Items",complete:"Complete"},description:"Warranty Claim Checklist only: the intro with an Open button, the checkable items, or the completed card.",if:{arg:"card",eq:"Warranty Claim Checklist"},table:{category:"Content",defaultValue:{summary:"start"}}},appointmentStep:{name:"Appointment step",control:"radio",options:["start","form"],labels:{start:"Start",form:"Form"},description:"Schedule Your Appointment only: the intro with an Open button, or the scheduling form.",if:{arg:"card",eq:"Schedule Your Appointment"},table:{category:"Content",defaultValue:{summary:"start"}}},ratingStep:{name:"Rating step",control:"radio",options:["start","rating","thanks"],labels:{start:"Start",rating:"Rating",thanks:"Thanks"},description:"Rate Your Copilot Experience only: the invitation, the thumbs rating form, or the thank-you.",if:{arg:"card",eq:"Rate Your Copilot Experience"},table:{category:"Content",defaultValue:{summary:"start"}}},customerInfoLayout:{name:"Layout",control:"radio",options:["list","conversational"],labels:{list:"List",conversational:"Conversational"},description:"How Customer Info presents the customer: label and value rows (list), or an avatar, tags and a written summary (conversational). Only applies to the Customer Info card.",if:{arg:"card",eq:"Customer Info"},table:{category:"Content",defaultValue:{summary:"list"}}},populated:{name:"Populated",control:"boolean",description:`Artifacts only: show the interaction's artifacts as a list of links (on), or the "No artifacts on this interaction yet." message (off).`,if:{arg:"card",eq:"~New - Artifacts"},table:{category:"Content",defaultValue:{summary:"false"}}},showOpenWindow:{name:"Open in new window",control:"boolean",description:"Show an open-in-new-window icon button in the header, before the dismiss X (`onOpenInNewWindow`). Does nothing here.",table:{category:"Appearance",defaultValue:{summary:"false"}}},showDismiss:{name:"Dismiss",control:"boolean",description:"Show a dismiss X at the right end of the header (`onDismiss`). Clicking it hides the card; the demo leaves a Restore card button.",table:{category:"Appearance",defaultValue:{summary:"false"}}},accordion:{name:"Accordion",control:"radio",options:["default","on","off"],labels:{default:"Card default",on:"On",off:"Off"},description:"Make the card collapsible: a chevron on the header toggles the body (`accordion`). Off is a plain card with the body always shown. Card default keeps the picked card's own setting.",table:{category:"Behavior",defaultValue:{summary:"default"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"Whether the accordion starts expanded (`defaultOpen`).",if:{arg:"accordion",eq:"on"},table:{category:"Behavior",defaultValue:{summary:"true"}}}},render:t=>a.jsx(x,{...t})};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display name, so names and keys are both listed.
      include: ["Card", "Color", "Density", "Corner radius", "Accordion", "Starts open", "Icon", "Format", "Sentiment", "Checklist state", "Appointment step", "Rating step", "Layout", "Populated", "Open in new window", "Dismiss", "card", "color", "density", "radius", "accordion", "defaultOpen", "showIcon", "showOpenWindow", "showDismiss", "customerInfoLayout", "populated", "autosummaryFormat", "sentimentLevel", "checklistState", "appointmentStep", "ratingStep"],
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
    customerInfoLayout: "list",
    populated: false,
    autosummaryFormat: "summary",
    sentimentLevel: "neutral",
    checklistState: "start",
    appointmentStep: "start",
    ratingStep: "start",
    density: "compact",
    radius: "md"
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
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      labels: {
        comfortable: "Comfortable",
        compact: "Compact"
      },
      description: "Header height (\`density\`): compact is 40px (default), comfortable is 48px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "compact"
        }
      }
    },
    radius: {
      name: "Corner radius",
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Corner radius token (\`radius\`): none 0, xs 4, sm 6, md 8 (default), lg 12, xl 16px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
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
    autosummaryFormat: {
      name: "Format",
      control: "radio",
      options: ["summary", "page"],
      labels: {
        summary: "Summary",
        page: "Page"
      },
      description: "Autosummary only: the short summary with edit and copy, or the full page with headed sections.",
      if: {
        arg: "card",
        eq: "Autosummary"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "summary"
        }
      }
    },
    sentimentLevel: {
      name: "Sentiment",
      control: "radio",
      options: ["negative", "neutral", "positive"],
      labels: {
        negative: "Negative",
        neutral: "Neutral",
        positive: "Positive"
      },
      description: "Customer Sentiment only: which read of the customer to show. Each has its own color, which the Color control can still override.",
      if: {
        arg: "card",
        eq: "Customer Sentiment"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "neutral"
        }
      }
    },
    checklistState: {
      name: "Checklist state",
      control: "radio",
      options: ["start", "items", "complete"],
      labels: {
        start: "Start",
        items: "Items",
        complete: "Complete"
      },
      description: "Warranty Claim Checklist only: the intro with an Open button, the checkable items, or the completed card.",
      if: {
        arg: "card",
        eq: "Warranty Claim Checklist"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "start"
        }
      }
    },
    appointmentStep: {
      name: "Appointment step",
      control: "radio",
      options: ["start", "form"],
      labels: {
        start: "Start",
        form: "Form"
      },
      description: "Schedule Your Appointment only: the intro with an Open button, or the scheduling form.",
      if: {
        arg: "card",
        eq: "Schedule Your Appointment"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "start"
        }
      }
    },
    ratingStep: {
      name: "Rating step",
      control: "radio",
      options: ["start", "rating", "thanks"],
      labels: {
        start: "Start",
        rating: "Rating",
        thanks: "Thanks"
      },
      description: "Rate Your Copilot Experience only: the invitation, the thumbs rating form, or the thank-you.",
      if: {
        arg: "card",
        eq: "Rate Your Copilot Experience"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "start"
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
    populated: {
      name: "Populated",
      control: "boolean",
      description: "Artifacts only: show the interaction's artifacts as a list of links (on), or the \\"No artifacts on this interaction yet.\\" message (off).",
      if: {
        arg: "card",
        eq: "~New - Artifacts"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const oe=["Default"];export{o as Default,oe as __namedExportsOrder,ne as default};
