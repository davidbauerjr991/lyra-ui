import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{V as p,C as c,R as u,N as h}from"./VoiceCallControls.shared-DQRd453n.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./badge-DnlHYDBX.js";import"./index-1evVQkiP.js";import"./avatar-CJbM1faC.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-t1I_d-Gy.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./info-icon-CVWl96lq.js";import"./hold-sla-GrIMLDD5.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./slider-gXcIhODR.js";import"./index-pcZVUfq6.js";import"./index-CylpBFcA.js";import"./index-4W-125c9.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./circle-CiULE-tD.js";import"./grid-3x3-jse_dUe0.js";import"./file-text-DK8c8V5C.js";import"./mic-BV_p_-VJ.js";import"./ellipsis-DX1Uroy1.js";import"./clock-C3xVexPO.js";import"./play-AEg57g5O.js";const yt={title:"UI/VoiceCallControls",component:p,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function b({layout:t,startOnHold:a,transcript:o,showAddVideo:e,customerLabel:n,customerInitials:i}){return m.jsx(c,{layout:t==="rail"?"rail":"bar",width:t==="rail"?u:t==="narrow"?h:void 0,startOnHold:a,transcript:o,showAddVideo:e,customerLabel:n||void 0,customerInitials:i||void 0},JSON.stringify({layout:t,startOnHold:a,transcript:o,showAddVideo:e,customerLabel:n,customerInitials:i}))}const r={render:t=>m.jsx(b,{...t}),args:{layout:"bar",startOnHold:!1,transcript:!0,showAddVideo:!0,customerLabel:"Marcus Webb",customerInitials:"MW"},parameters:{controls:{include:["startOnHold","transcript","showAddVideo","customerLabel","customerInitials","layout","Start on hold","Transcript available","Add video","Customer","Initials","Layout"],sort:"none"}},argTypes:{startOnHold:{name:"Start on hold",control:"boolean",description:'Opens the call on hold, with the "On hold" timer under the call timer (`onHold`, `onHoldElapsedSeconds`). Hold / Resume still toggles it.',table:{category:"Behavior",defaultValue:{summary:"false"}}},transcript:{name:"Transcript available",control:"boolean",description:'Whether this call has a transcript (`onToggleTranscript` passed). Off, the Transcript button stays but is disabled, with a "Transcript not available" tooltip.',table:{category:"Behavior",defaultValue:{summary:"available when onToggleTranscript is set"}}},showAddVideo:{name:"Add video",control:"boolean",description:"Shows the Add video button (`showAddVideo`).",table:{category:"Behavior",defaultValue:{summary:"true"}}},customerLabel:{name:"Customer",control:"text",description:"Name, number or email shown with the avatar (`customerLabel`). Clear it to hide both.",table:{category:"Content"}},customerInitials:{name:"Initials",control:"text",description:"Initials in the avatar (`customerInitials`). Clear it for an unmatched caller: the generic person icon.",table:{category:"Content"}},layout:{name:"Layout",control:{type:"radio",labels:{bar:"Bar",narrow:"Bar, narrow (under 600px)",rail:"Left rail"}},options:["bar","narrow","rail"],description:'Bar: the full-width call bar under the transcript. Narrow: the same bar in a 520px container, where Mask, Record, Keypad and Transcript fold into a "…" menu. Left rail: the stacked card for a narrow column (`layout="rail"`).',table:{category:"Appearance",defaultValue:{summary:"bar"}}}}};var l,s,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Playground {...args} />,
  args: {
    layout: "bar",
    startOnHold: false,
    transcript: true,
    showAddVideo: true,
    customerLabel: "Marcus Webb",
    customerInitials: "MW"
  },
  parameters: {
    controls: {
      include: ["startOnHold", "transcript", "showAddVideo", "customerLabel", "customerInitials", "layout", "Start on hold", "Transcript available", "Add video", "Customer", "Initials", "Layout"],
      sort: "none"
    }
  },
  argTypes: {
    startOnHold: {
      name: "Start on hold",
      control: "boolean",
      description: "Opens the call on hold, with the \\"On hold\\" timer under the call timer (\`onHold\`, \`onHoldElapsedSeconds\`). Hold / Resume still toggles it.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    transcript: {
      name: "Transcript available",
      control: "boolean",
      description: "Whether this call has a transcript (\`onToggleTranscript\` passed). Off, the Transcript button stays but is disabled, with a \\"Transcript not available\\" tooltip.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "available when onToggleTranscript is set"
        }
      }
    },
    showAddVideo: {
      name: "Add video",
      control: "boolean",
      description: "Shows the Add video button (\`showAddVideo\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    customerLabel: {
      name: "Customer",
      control: "text",
      description: "Name, number or email shown with the avatar (\`customerLabel\`). Clear it to hide both.",
      table: {
        category: "Content"
      }
    },
    customerInitials: {
      name: "Initials",
      control: "text",
      description: "Initials in the avatar (\`customerInitials\`). Clear it for an unmatched caller: the generic person icon.",
      table: {
        category: "Content"
      }
    },
    layout: {
      name: "Layout",
      control: {
        type: "radio",
        labels: {
          bar: "Bar",
          narrow: "Bar, narrow (under 600px)",
          rail: "Left rail"
        }
      },
      options: ["bar", "narrow", "rail"],
      description: "Bar: the full-width call bar under the transcript. Narrow: the same bar in a 520px container, where Mask, Record, Keypad and Transcript fold into a \\"…\\" menu. Left rail: the stacked card for a narrow column (\`layout=\\"rail\\"\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "bar"
        }
      }
    }
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const gt=["Default"];export{r as Default,gt as __namedExportsOrder,yt as default};
