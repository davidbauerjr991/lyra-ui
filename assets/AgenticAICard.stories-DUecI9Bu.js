import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as v}from"./agentic-parts-CntPBPPf.js";import{A as s}from"./Avatar.shared-OjuAMTrE.js";import{J as R,A as W,S as T,a as V,b as E,W as D,C as N,R as x,K as j,c as H}from"./AgenticAICard.shared-BBQI8wqP.js";import{w as _}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./ai-card-Y6384akd.js";import"./accordion-aheRZdMc.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./container-footer-CU6hpAek.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./button-D4EbXLB3.js";import"./badge-BpOJAIFg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./external-link-Ck0ibvsS.js";import"./tag-CyzxDD7d.js";import"./progress-bar-CuQqxcLC.js";import"./show-more-zdMS6Dq2.js";import"./skeleton-DWrO-N3-.js";import"./container-DJxnCK6G.js";import"./inline-notification-CgfrlBB5.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./menu-item-uivF4bHz.js";import"./link-Ds4ntLOd.js";import"./circle-CiULE-tD.js";import"./circle-x-DWiWalIH.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./file-text-DK8c8V5C.js";import"./lock-CXrNv7Qc.js";import"./bell-16x-NcfM.js";import"./bot-DgIAlNMp.js";import"./headphones-BPvLrNMv.js";import"./ai-process-DKgPSbgS.js";import"./clock-C3xVexPO.js";import"./check-Dr3vGcdY.js";import"./citation-CApf8U1b.js";import"./trending-up-VJi9q_0I.js";import"./minus-CVnigrff.js";import"./sparkles-PRtIBnGT.js";import"./activity-CN8fWg6r.js";import"./copy-CtBWyGKZ.js";import"./thumbs-up-BI80B7Q2.js";function I({widget:e="Customer Sentiment",sentimentFrame:d="Neutral",summaryFrame:c="Live",answerFrame:p="Answer",journeyFrame:h="Journey found",showDetail:y=!0,status:w="auto",showSubhead:f=!0,forYou:g=!0,color:b="white",avatarColor:S,accordion:r=!0,defaultOpen:i=!0,showDismiss:A=!1,showOpenWindow:C=!1,density:F="compact",radius:O="md"}){const t={statusOverride:w,showSubhead:f,forYou:g,color:b,avatarColor:S,accordion:r,defaultOpen:i,density:F,radius:O,onDismiss:A?()=>{}:void 0,onOpenInNewWindow:C?()=>{}:void 0},o=`${e}-${r}-${i}`;return n.jsxs("div",{className:"w-full max-w-[560px]",children:[e==="Customer Sentiment"&&n.jsx(N,{frame:d,...t},o),e==="Real-Time Summary"&&n.jsx(x,{frame:c,...t},o),e==="Knowledge Base Answer"&&n.jsx(j,{frame:p,...t},o),e==="Journey Summary"&&n.jsx(H,{frame:h,showDetail:y,...t},o)]})}const ze={title:"UI/AgenticAICard",component:v,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a=_({parameters:{controls:{sort:"none"}},args:{widget:"Customer Sentiment",sentimentFrame:"Neutral",summaryFrame:"Live",answerFrame:"Answer",journeyFrame:"Journey found",showDetail:!0,status:"auto",showSubhead:!0,forYou:!0,color:"white",accordion:!0,defaultOpen:!0,showDismiss:!1,showOpenWindow:!1,density:"compact",radius:"md"},argTypes:{widget:{name:"Widget",control:"select",options:[...D],description:"Which widget to show. These are the cards on the Widgets page.",table:{category:"Content",defaultValue:{summary:"Customer Sentiment"}}},sentimentFrame:{name:"Frame",control:"radio",options:[...V],description:"Which reading the card shows.",if:{arg:"widget",eq:"Customer Sentiment"},table:{category:"Content"}},summaryFrame:{name:"Frame",control:"radio",options:[...T],description:"Nothing yet, a summary that just changed, or the finished summary.",if:{arg:"widget",eq:"Real-Time Summary"},table:{category:"Content"}},answerFrame:{name:"Frame",control:"select",options:[...W],description:"Which state the answer is in.",if:{arg:"widget",eq:"Knowledge Base Answer"},table:{category:"Content"}},journeyFrame:{name:"Frame",control:"radio",options:[...R],description:"Which state the journey is in.",if:{arg:"widget",eq:"Journey Summary"},table:{category:"Content"}},showDetail:{name:"Detailed view",control:"boolean",description:"Show the per-contact lines under the summary.",if:{arg:"widget",eq:"Journey Summary"},table:{category:"Content",defaultValue:{summary:"true"}}},status:{name:"Status",control:"select",options:E,labels:{auto:"Auto (the frame's own)"},description:"The header pill (`status`). Auto keeps the pill the frame normally has.",table:{category:"Header",defaultValue:{summary:"auto"}}},showSubhead:{name:"Subhead",control:"boolean",description:"Show the line under the title (`subhead`). The header turns comfortable by itself to make room.",table:{category:"Header",defaultValue:{summary:"true"}}},forYou:{name:"For you note",control:"boolean",description:"Show the “For you · not part of the conversation” note (`forYou`).",table:{category:"Header",defaultValue:{summary:"true"}}},color:{name:"Color",control:"radio",options:["white","purple","blue","yellow","green","red","neutral"],labels:{white:"White",purple:"Purple",blue:"Blue",yellow:"Yellow",green:"Green",red:"Red",neutral:"Neutral"},description:"Header tint (`color`). White is the default for agentic cards.",table:{category:"Appearance",defaultValue:{summary:"white"}}},avatarColor:{name:"Avatar color",control:"select",options:s.map(([e])=>e),labels:Object.fromEntries(s),description:"Color of the avatar behind the header icon (`avatarColor`, white header only). Sentiment follows its reading when none is picked.",if:{arg:"color",eq:"white"},table:{category:"Appearance"}},density:{name:"Density",control:"radio",options:["comfortable","compact"],labels:{comfortable:"Comfortable",compact:"Compact"},description:"Header height (`density`): compact is 40px (default), comfortable is 48px. Hidden while Subhead is on, because a subhead sets its own header height.",if:{arg:"showSubhead",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"compact"}}},radius:{name:"Corner radius",control:"select",options:["none","xs","sm","md","lg","xl"],description:"Corner radius token (`radius`).",table:{category:"Appearance",defaultValue:{summary:"md"}}},accordion:{name:"Accordion",control:"boolean",description:"Header collapses the body (`accordion`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"Initial open state when Accordion is on (`defaultOpen`).",if:{arg:"accordion"},table:{category:"Behavior",defaultValue:{summary:"true"}}},showDismiss:{name:"Dismiss button",control:"boolean",description:"Header “X” (`onDismiss`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},showOpenWindow:{name:"Open in window button",control:"boolean",description:"Header “open in new window” button (`onOpenInNewWindow`).",table:{category:"Behavior",defaultValue:{summary:"false"}}}},render:e=>n.jsx(I,{...e})});var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`withControlsFor({
  parameters: {
    controls: {
      sort: "none"
    }
  },
  args: {
    widget: "Customer Sentiment",
    sentimentFrame: "Neutral",
    summaryFrame: "Live",
    answerFrame: "Answer",
    journeyFrame: "Journey found",
    showDetail: true,
    status: "auto",
    showSubhead: true,
    forYou: true,
    color: "white",
    accordion: true,
    defaultOpen: true,
    showDismiss: false,
    showOpenWindow: false,
    density: "compact",
    radius: "md"
  },
  argTypes: {
    widget: {
      name: "Widget",
      control: "select",
      options: [...WIDGET_NAMES],
      description: "Which widget to show. These are the cards on the Widgets page.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Customer Sentiment"
        }
      }
    },
    sentimentFrame: {
      name: "Frame",
      control: "radio",
      options: [...SENTIMENT_FRAMES],
      description: "Which reading the card shows.",
      if: {
        arg: "widget",
        eq: "Customer Sentiment"
      },
      table: {
        category: "Content"
      }
    },
    summaryFrame: {
      name: "Frame",
      control: "radio",
      options: [...SUMMARY_FRAMES],
      description: "Nothing yet, a summary that just changed, or the finished summary.",
      if: {
        arg: "widget",
        eq: "Real-Time Summary"
      },
      table: {
        category: "Content"
      }
    },
    answerFrame: {
      name: "Frame",
      control: "select",
      options: [...ANSWER_FRAMES],
      description: "Which state the answer is in.",
      if: {
        arg: "widget",
        eq: "Knowledge Base Answer"
      },
      table: {
        category: "Content"
      }
    },
    journeyFrame: {
      name: "Frame",
      control: "radio",
      options: [...JOURNEY_FRAMES],
      description: "Which state the journey is in.",
      if: {
        arg: "widget",
        eq: "Journey Summary"
      },
      table: {
        category: "Content"
      }
    },
    showDetail: {
      name: "Detailed view",
      control: "boolean",
      description: "Show the per-contact lines under the summary.",
      if: {
        arg: "widget",
        eq: "Journey Summary"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    status: {
      name: "Status",
      control: "select",
      options: STATUS_OPTIONS,
      labels: {
        auto: "Auto (the frame's own)"
      },
      description: "The header pill (\`status\`). Auto keeps the pill the frame normally has.",
      table: {
        category: "Header",
        defaultValue: {
          summary: "auto"
        }
      }
    },
    showSubhead: {
      name: "Subhead",
      control: "boolean",
      description: "Show the line under the title (\`subhead\`). The header turns comfortable by itself to make room.",
      table: {
        category: "Header",
        defaultValue: {
          summary: "true"
        }
      }
    },
    forYou: {
      name: "For you note",
      control: "boolean",
      description: "Show the “For you · not part of the conversation” note (\`forYou\`).",
      table: {
        category: "Header",
        defaultValue: {
          summary: "true"
        }
      }
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["white", "purple", "blue", "yellow", "green", "red", "neutral"],
      labels: {
        white: "White",
        purple: "Purple",
        blue: "Blue",
        yellow: "Yellow",
        green: "Green",
        red: "Red",
        neutral: "Neutral"
      },
      description: "Header tint (\`color\`). White is the default for agentic cards.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "white"
        }
      }
    },
    avatarColor: {
      name: "Avatar color",
      control: "select",
      options: AVATAR_COLORS.map(([value]) => value),
      labels: Object.fromEntries(AVATAR_COLORS),
      description: "Color of the avatar behind the header icon (\`avatarColor\`, white header only). Sentiment follows its reading when none is picked.",
      if: {
        arg: "color",
        eq: "white"
      },
      table: {
        category: "Appearance"
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
      description: "Header height (\`density\`): compact is 40px (default), comfortable is 48px. Hidden while Subhead is on, because a subhead sets its own header height.",
      if: {
        arg: "showSubhead",
        truthy: false
      },
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
      description: "Corner radius token (\`radius\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    accordion: {
      name: "Accordion",
      control: "boolean",
      description: "Header collapses the body (\`accordion\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Initial open state when Accordion is on (\`defaultOpen\`).",
      if: {
        arg: "accordion"
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    showDismiss: {
      name: "Dismiss button",
      control: "boolean",
      description: "Header “X” (\`onDismiss\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showOpenWindow: {
      name: "Open in window button",
      control: "boolean",
      description: "Header “open in new window” button (\`onOpenInNewWindow\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args => <AgenticAICardDemo {...args} />
})`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const Qe=["Default"];export{a as Default,Qe as __namedExportsOrder,ze as default};
