import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as E}from"./agentic-task-parts-MEYX73qT.js";import{A as s}from"./Avatar.shared-OjuAMTrE.js";import{P as O,N,J as T,A as M,S as k,a as D,b as _,c as j,W as B,C as q,R as H,K as I,d as P,e as J,f as Y}from"./AgenticAICard.shared-D4l3z9nB.js";import{w as G}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./ai-card-C_xhENyM.js";import"./createLucideIcon-aII_sYFw.js";import"./accordion-aheRZdMc.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./chevron-down-gMYAX9-q.js";import"./container-footer-BSIaMmWX.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./button-DxuJ7r2Z.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./external-link-Ck0ibvsS.js";import"./tag-rDr5isNl.js";import"./progress-bar-BUzWCp3j.js";import"./show-more-zdMS6Dq2.js";import"./skeleton-DWrO-N3-.js";import"./container-ipFdrjaG.js";import"./inline-notification-CgfrlBB5.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./menu-item-uivF4bHz.js";import"./link-yO95ye2w.js";import"./circle-CiULE-tD.js";import"./circle-x-DWiWalIH.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./file-text-DK8c8V5C.js";import"./lock-CXrNv7Qc.js";import"./pencil-IFm_bK0G.js";import"./bot-DgIAlNMp.js";import"./sparkles-PRtIBnGT.js";import"./circle-play-VUnuHOtC.js";import"./clock-C3xVexPO.js";import"./check-Dr3vGcdY.js";import"./zap-CIij0ToD.js";import"./bell-16x-NcfM.js";import"./headphones-BPvLrNMv.js";import"./ai-process-BMeBaUcA.js";import"./citation-CApf8U1b.js";import"./trending-up-VJi9q_0I.js";import"./minus-CVnigrff.js";import"./workflow-dSSDBiiz.js";import"./activity-CN8fWg6r.js";import"./copy-CtBWyGKZ.js";import"./play-AEg57g5O.js";function U({widget:e="Customer Sentiment",sentimentFrame:c="Neutral",summaryFrame:u="Live",answerFrame:p="Answer",journeyFrame:h="Journey found",nbaFrame:w="Say or ask",processFrame:f="Capturing",processView:y="Guided form",showDetail:g=!0,status:b="auto",showSubhead:S=!0,forYou:A=!0,color:C="white",avatarColor:F,accordion:r=!0,defaultOpen:i=!0,showDismiss:x=!1,showOpenWindow:W=!1,density:V="compact",radius:v="md",width:R="max-width"}){const t={statusOverride:b,showSubhead:S,forYou:A,color:C,avatarColor:F,accordion:r,defaultOpen:i,density:V,radius:v,onDismiss:x?()=>{}:void 0,onOpenInNewWindow:W?()=>{}:void 0},o=`${e}-${r}-${i}`;return n.jsxs("div",{className:R==="max-width"?"w-full max-w-[350px]":"w-full",children:[e==="Customer Sentiment"&&n.jsx(q,{frame:c,...t},o),e==="Real-Time Summary"&&n.jsx(H,{frame:u,...t},o),e==="Knowledge Base Answer"&&n.jsx(I,{frame:p,...t},o),e==="Journey Summary"&&n.jsx(P,{frame:h,showDetail:g,...t},o),e==="Next Best Action"&&n.jsx(J,{frame:w,...t},o),e==="Process Automation"&&n.jsx(Y,{frame:f,view:y,...t},o)]})}const cn={title:"UI/AgenticAICard",component:E,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-base"}}},a=G({parameters:{controls:{sort:"none"}},args:{widget:"Customer Sentiment",sentimentFrame:"Neutral",summaryFrame:"Live",answerFrame:"Answer",journeyFrame:"Journey found",nbaFrame:"Say or ask",processFrame:"Capturing",processView:"Guided form",showDetail:!0,status:"auto",showSubhead:!0,forYou:!0,color:"white",accordion:!0,defaultOpen:!0,showDismiss:!1,showOpenWindow:!1,density:"compact",radius:"md",width:"max-width"},argTypes:{widget:{name:"Widget",control:"select",options:[...B],description:"Which widget to show. These are the cards on the Widgets page.",table:{category:"Content",defaultValue:{summary:"Customer Sentiment"}}},sentimentFrame:{name:"Frame",control:"radio",options:[...D],description:"Which reading the card shows.",if:{arg:"widget",eq:"Customer Sentiment"},table:{category:"Content"}},summaryFrame:{name:"Frame",control:"radio",options:[...k],description:"Nothing yet, a summary that just changed, or the finished summary.",if:{arg:"widget",eq:"Real-Time Summary"},table:{category:"Content"}},answerFrame:{name:"Frame",control:"select",options:[...M],description:"Which state the answer is in.",if:{arg:"widget",eq:"Knowledge Base Answer"},table:{category:"Content"}},journeyFrame:{name:"Frame",control:"radio",options:[...T],description:"Which state the journey is in.",if:{arg:"widget",eq:"Journey Summary"},table:{category:"Content"}},nbaFrame:{name:"Frame",control:"select",options:[...N],description:"Which state the suggestion is in.",if:{arg:"widget",eq:"Next Best Action"},table:{category:"Content"}},processFrame:{name:"Frame",control:"select",options:[...O],description:"Which stage the process is at: capturing, ready to review, running, a task failed, or done.",if:{arg:"widget",eq:"Process Automation"},table:{category:"Content"}},processView:{name:"Capture view",control:"radio",options:[...j],description:"While capturing, open with the form (Guided form) or with the task list (Tasks first). Same widget, same data.",if:{arg:"widget",eq:"Process Automation"},table:{category:"Content",defaultValue:{summary:"Guided form"}}},showDetail:{name:"Detailed view",control:"boolean",description:"Show the per-contact lines under the summary.",if:{arg:"widget",eq:"Journey Summary"},table:{category:"Content",defaultValue:{summary:"true"}}},status:{name:"Status",control:"select",options:_,labels:{auto:"Auto (the frame's own)"},description:"The header pill (`status`). Auto keeps the pill the frame normally has.",table:{category:"Header",defaultValue:{summary:"auto"}}},showSubhead:{name:"Subhead",control:"boolean",description:"Show the line under the title (`subhead`). The header turns comfortable by itself to make room.",table:{category:"Header",defaultValue:{summary:"true"}}},forYou:{name:"For you note",control:"boolean",description:"Show the “For you · not part of the conversation” note (`forYou`).",table:{category:"Header",defaultValue:{summary:"true"}}},color:{name:"Color",control:"radio",options:["white","purple","blue","yellow","green","red","neutral"],labels:{white:"White",purple:"Purple",blue:"Blue",yellow:"Yellow",green:"Green",red:"Red",neutral:"Neutral"},description:"Header tint (`color`). White is the default for agentic cards.",table:{category:"Appearance",defaultValue:{summary:"white"}}},avatarColor:{name:"Avatar color",control:"select",options:s.map(([e])=>e),labels:Object.fromEntries(s),description:"Color of the avatar behind the header icon (`avatarColor`, white header only). Sentiment follows its reading when none is picked.",if:{arg:"color",eq:"white"},table:{category:"Appearance"}},density:{name:"Density",control:"radio",options:["comfortable","compact"],labels:{comfortable:"Comfortable",compact:"Compact"},description:"Header height (`density`): compact is 40px (default), comfortable is 48px. Hidden while Subhead is on, because a subhead sets its own header height.",if:{arg:"showSubhead",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"compact"}}},width:{name:"Width",control:"radio",options:["max-width","full"],labels:{"max-width":"Max width (350px)",full:"Full screen"},description:"Max width caps the card at 350px, like a narrow side panel. Full screen lets it take all the width available.",table:{category:"Appearance",defaultValue:{summary:"max-width"}}},radius:{name:"Corner radius",control:"select",options:["none","xs","sm","md","lg","xl"],description:"Corner radius token (`radius`).",table:{category:"Appearance",defaultValue:{summary:"md"}}},accordion:{name:"Accordion",control:"boolean",description:"Header collapses the body (`accordion`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"Initial open state when Accordion is on (`defaultOpen`).",if:{arg:"accordion"},table:{category:"Behavior",defaultValue:{summary:"true"}}},showDismiss:{name:"Dismiss button",control:"boolean",description:"Header “X” (`onDismiss`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},showOpenWindow:{name:"Open in window button",control:"boolean",description:"Header “open in new window” button (`onOpenInNewWindow`).",table:{category:"Behavior",defaultValue:{summary:"false"}}}},render:e=>n.jsx(U,{...e})});var m,l,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`withControlsFor({
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
    nbaFrame: "Say or ask",
    processFrame: "Capturing",
    processView: "Guided form",
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
    radius: "md",
    width: "max-width"
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
    nbaFrame: {
      name: "Frame",
      control: "select",
      options: [...NBA_FRAMES],
      description: "Which state the suggestion is in.",
      if: {
        arg: "widget",
        eq: "Next Best Action"
      },
      table: {
        category: "Content"
      }
    },
    processFrame: {
      name: "Frame",
      control: "select",
      options: [...PROCESS_FRAMES],
      description: "Which stage the process is at: capturing, ready to review, running, a task failed, or done.",
      if: {
        arg: "widget",
        eq: "Process Automation"
      },
      table: {
        category: "Content"
      }
    },
    processView: {
      name: "Capture view",
      control: "radio",
      options: [...PROCESS_VIEWS],
      description: "While capturing, open with the form (Guided form) or with the task list (Tasks first). Same widget, same data.",
      if: {
        arg: "widget",
        eq: "Process Automation"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "Guided form"
        }
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
    width: {
      name: "Width",
      control: "radio",
      options: ["max-width", "full"],
      labels: {
        "max-width": "Max width (350px)",
        full: "Full screen"
      },
      description: "Max width caps the card at 350px, like a narrow side panel. Full screen lets it take all the width available.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "max-width"
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
})`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const un=["Default"];export{a as Default,un as __namedExportsOrder,cn as default};
