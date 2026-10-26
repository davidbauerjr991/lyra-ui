import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{A as O}from"./agentic-task-parts-CNUUlXyG.js";import{A as s}from"./Avatar.shared-OjuAMTrE.js";import{P as T,N as _,J as N,A as D,d as M,S as k,e as H,f as I,W as j,C as B,R as q,K as P,a as Y,b as J,c as G}from"./AgenticAICard.shared-4A_0eFwc.js";import{w as L}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./ai-card-C_xhENyM.js";import"./createLucideIcon-aII_sYFw.js";import"./accordion-aheRZdMc.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./chevron-down-gMYAX9-q.js";import"./container-footer-BSIaMmWX.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./button-DxuJ7r2Z.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./external-link-Ck0ibvsS.js";import"./tag-Dcg-2iAh.js";import"./progress-bar-BUzWCp3j.js";import"./show-more-zdMS6Dq2.js";import"./skeleton-DWrO-N3-.js";import"./container-ipFdrjaG.js";import"./inline-notification-CgfrlBB5.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./menu-item-uivF4bHz.js";import"./link-ktxUHw_e.js";import"./circle-CiULE-tD.js";import"./circle-x-DWiWalIH.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./file-text-DK8c8V5C.js";import"./lock-CXrNv7Qc.js";import"./pencil-IFm_bK0G.js";import"./bot-DgIAlNMp.js";import"./sparkles-PRtIBnGT.js";import"./circle-play-VUnuHOtC.js";import"./clock-C3xVexPO.js";import"./check-Dr3vGcdY.js";import"./zap-CIij0ToD.js";import"./bell-16x-NcfM.js";import"./headphones-BPvLrNMv.js";import"./ai-process-BMeBaUcA.js";import"./citation-CApf8U1b.js";import"./trending-up-VJi9q_0I.js";import"./minus-CVnigrff.js";import"./workflow-dSSDBiiz.js";import"./activity-CN8fWg6r.js";import"./copy-CtBWyGKZ.js";import"./play-AEg57g5O.js";const m=350;function U({widget:e="Customer Sentiment",sentimentFrame:u="Neutral",summaryFrame:p="Live",answerFrame:h="Answer",journeyFrame:w="Journey found",nbaFrame:y="Say or ask",processFrame:f="Capturing",processView:g="Guided form",showDetail:b=!0,status:A="auto",showSubhead:S=!0,forYou:C=!0,color:F="white",avatarColor:x,accordion:r=!0,defaultOpen:i=!0,showDismiss:R=!1,showOpenWindow:W=!1,density:v="compact",radius:V="md",width:E="max-width"}){const t={statusOverride:A,showSubhead:S,forYou:C,color:F,avatarColor:x,accordion:r,defaultOpen:i,density:v,radius:V,onDismiss:R?()=>{}:void 0,onOpenInNewWindow:W?()=>{}:void 0},a=`${e}-${r}-${i}`;return n.jsxs("div",{className:E==="max-width"?"w-full max-w-[var(--lyra-size-card-max-width)]":"w-full",children:[e==="Customer Sentiment"&&n.jsx(B,{frame:u,...t},a),e==="Real-Time Summary"&&n.jsx(q,{frame:p,...t},a),e==="Knowledge Base Answer"&&n.jsx(P,{frame:h,...t},a),e==="Journey Summary"&&n.jsx(Y,{frame:w,showDetail:b,...t},a),e==="Next Best Action"&&n.jsx(J,{frame:y,...t},a),e==="Process Automation"&&n.jsx(G,{frame:f,view:g,...t},a)]})}const un={title:"UI/AgenticAICard",component:O,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-base"}}},o=L({parameters:{controls:{sort:"none"}},args:{widget:"Customer Sentiment",sentimentFrame:"Neutral",summaryFrame:"Live",answerFrame:"Answer",journeyFrame:"Journey found",nbaFrame:"Say or ask",processFrame:"Capturing",processView:"Guided form",showDetail:!0,status:"auto",showSubhead:!0,forYou:!0,color:"white",accordion:!0,defaultOpen:!0,showDismiss:!1,showOpenWindow:!1,density:"compact",radius:"md",width:"max-width"},argTypes:{widget:{name:"Widget",control:"select",options:[...j],description:"Which widget to show. These are the cards on the Widgets page.",table:{category:"Content",defaultValue:{summary:"Customer Sentiment"}}},sentimentFrame:{name:"Frame",control:"radio",options:[...k],description:"Which reading the card shows.",if:{arg:"widget",eq:"Customer Sentiment"},table:{category:"Content"}},summaryFrame:{name:"Frame",control:"radio",options:[...M],description:"Nothing yet, a summary that just changed, or the finished summary.",if:{arg:"widget",eq:"Real-Time Summary"},table:{category:"Content"}},answerFrame:{name:"Frame",control:"select",options:[...D],description:"Which state the answer is in.",if:{arg:"widget",eq:"Knowledge Base Answer"},table:{category:"Content"}},journeyFrame:{name:"Frame",control:"radio",options:[...N],description:"Which state the journey is in.",if:{arg:"widget",eq:"Journey Summary"},table:{category:"Content"}},nbaFrame:{name:"Frame",control:"select",options:[..._],description:"Which state the suggestion is in.",if:{arg:"widget",eq:"Next Best Action"},table:{category:"Content"}},processFrame:{name:"Frame",control:"select",options:[...T],description:"Which stage the process is at: capturing, ready to review, running, a task failed, or done.",if:{arg:"widget",eq:"Process Automation"},table:{category:"Content"}},processView:{name:"Capture view",control:"radio",options:[...I],description:"While capturing, open with the form (Guided form) or with the task list (Tasks first). Same widget, same data.",if:{arg:"widget",eq:"Process Automation"},table:{category:"Content",defaultValue:{summary:"Guided form"}}},showDetail:{name:"Detailed view",control:"boolean",description:"Show the per-contact lines under the summary.",if:{arg:"widget",eq:"Journey Summary"},table:{category:"Content",defaultValue:{summary:"true"}}},status:{name:"Status",control:"select",options:H,labels:{auto:"Auto (the frame's own)"},description:"The header pill (`status`). Auto keeps the pill the frame normally has.",table:{category:"Header",defaultValue:{summary:"auto"}}},showSubhead:{name:"Subhead",control:"boolean",description:"Show the line under the title (`subhead`). The header turns comfortable by itself to make room.",table:{category:"Header",defaultValue:{summary:"true"}}},forYou:{name:"For you note",control:"boolean",description:"Show the “For you · not part of the conversation” note (`forYou`).",table:{category:"Header",defaultValue:{summary:"true"}}},color:{name:"Color",control:"radio",options:["white","purple","blue","yellow","green","red","neutral"],labels:{white:"White",purple:"Purple",blue:"Blue",yellow:"Yellow",green:"Green",red:"Red",neutral:"Neutral"},description:"Header tint (`color`). White is the default for agentic cards.",table:{category:"Appearance",defaultValue:{summary:"white"}}},avatarColor:{name:"Avatar color",control:"select",options:s.map(([e])=>e),labels:Object.fromEntries(s),description:"Color of the avatar behind the header icon (`avatarColor`, white header only). Sentiment follows its reading when none is picked.",if:{arg:"color",eq:"white"},table:{category:"Appearance"}},density:{name:"Density",control:"radio",options:["comfortable","compact"],labels:{comfortable:"Comfortable",compact:"Compact"},description:"Header height (`density`): compact is 40px (default), comfortable is 48px. Hidden while Subhead is on, because a subhead sets its own header height.",if:{arg:"showSubhead",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"compact"}}},width:{name:"Width",control:"radio",options:["max-width","full"],labels:{"max-width":`Max width (${m}px)`,full:"Full screen"},description:`Max width caps the card at ${m}px (the --lyra-size-card-max-width token), like a narrow side panel. Full screen lets it take all the width available.`,table:{category:"Appearance",defaultValue:{summary:"max-width"}}},radius:{name:"Corner radius",control:"select",options:["none","xs","sm","md","lg","xl"],description:"Corner radius token (`radius`).",table:{category:"Appearance",defaultValue:{summary:"md"}}},accordion:{name:"Accordion",control:"boolean",description:"Header collapses the body (`accordion`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"Initial open state when Accordion is on (`defaultOpen`).",if:{arg:"accordion"},table:{category:"Behavior",defaultValue:{summary:"true"}}},showDismiss:{name:"Dismiss button",control:"boolean",description:"Header “X” (`onDismiss`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},showOpenWindow:{name:"Open in window button",control:"boolean",description:"Header “open in new window” button (`onOpenInNewWindow`).",table:{category:"Behavior",defaultValue:{summary:"false"}}}},render:e=>n.jsx(U,{...e})});var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`withControlsFor({
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
        "max-width": \`Max width (\${LYRA_CARD_MAX_WIDTH}px)\`,
        full: "Full screen"
      },
      description: \`Max width caps the card at \${LYRA_CARD_MAX_WIDTH}px (the --lyra-size-card-max-width token), like a narrow side panel. Full screen lets it take all the width available.\`,
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
})`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const pn=["Default"];export{o as Default,pn as __namedExportsOrder,un as default};
