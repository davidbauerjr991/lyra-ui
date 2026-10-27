import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{S as f}from"./stepper-DwDsrshs.js";import{w as q}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./separator-97dXnQFu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./progress-bar-BUzWCp3j.js";import"./index-C-870Axa.js";import"./button-Cje2PXGX.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./container-footer-BSIaMmWX.js";import"./check-Dr3vGcdY.js";const{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,lt={title:"Custom Primitives/Stepper",component:f,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-base"}}},l="Step title",d=["default","destructive","warning","success","outline","ghost"];function E({stepCount:n=3,titles:a=l,currentStep:e=2,orientation:s="horizontal",labelPlacement:y="inline",fill:c=!0,optional:x=!0,optionalLabel:v="Optional",compact:p="auto",disabledStep:B=0,errorStep:w=0,navigation:V="below",navigationAlign:k,backLabel:L="Back",nextLabel:A="Next",finishLabel:S="Finish",backVariant:N="outline",nextVariant:T="default",buttonSize:u="lg",onCurrentStepChange:t}){const z=a.split(",").map(m=>m.trim()),P=Array.from({length:n},(m,r)=>({title:z[r]||l,optional:x,disabled:B===r+1,error:w===r+1})),O=e-1;return i.jsx("div",{className:s==="vertical"?c?"h-[calc(100vh-2rem)]":"":"w-full",children:i.jsx(f,{"aria-label":"Progress",steps:P,currentStep:O,orientation:s,labelPlacement:y,fill:c,optionalLabel:v,compact:p==="auto"?"auto":p==="always",navigation:V,navigationAlign:k,backLabel:L,nextLabel:A,finishLabel:S,backButtonProps:{variant:N,size:u},nextButtonProps:{variant:T,size:u},onBack:()=>t==null?void 0:t(Math.max(1,e-1)),onNext:()=>t==null?void 0:t(e+1),onFinish:()=>t==null?void 0:t(n+1)})})}const o=q({render:n=>{const[,a]=F();return i.jsx(E,{...n,onCurrentStepChange:e=>a({currentStep:e})})},args:{stepCount:3,titles:l,currentStep:2,orientation:"horizontal",labelPlacement:"inline",fill:!0,optional:!0,optionalLabel:"Optional",compact:"auto",disabledStep:0,errorStep:0,navigation:"below",navigationAlign:"left",backLabel:"Back",nextLabel:"Next",finishLabel:"Finish",backVariant:"outline",nextVariant:"default",buttonSize:"lg"},parameters:{controls:{sort:"none"}},argTypes:{stepCount:{name:"Steps",control:{type:"range",min:2,max:6,step:1},description:"How many steps to show.",table:{category:"Content",defaultValue:{summary:"3"}}},titles:{name:"Step titles",control:"text",description:'The title of each step, comma-separated in order ("Details, Payment, Review"). Steps beyond the list keep "Step title". Each step\'s own title is `steps[i].title`. Long titles wrap onto more lines.',table:{category:"Content",defaultValue:{summary:"Step title"}}},currentStep:{name:"Current step",control:{type:"range",min:1,max:7,step:1},description:"Which step the person is on, counting from 1 (`currentStep` takes the 0-based index). Earlier steps get a check, later ones are outlined. Past the last step, every step is finished.",table:{category:"Behavior",defaultValue:{summary:"2"}}},optional:{name:"Optional",control:"boolean",description:'Shows the small "Optional" caption under each title (`optional` on each step).',table:{category:"Content",defaultValue:{summary:"true"}}},optionalLabel:{name:"Optional text",control:"text",description:"Wording of that caption (`optionalLabel`). Long text wraps onto more lines.",if:{arg:"optional",truthy:!0},table:{category:"Content",defaultValue:{summary:"Optional"}}},orientation:{name:"Orientation",control:"radio",options:["horizontal","vertical"],description:"A row of steps, or a column (`orientation`).",table:{category:"Appearance",defaultValue:{summary:"horizontal"}}},labelPlacement:{name:"Label placement",control:"radio",options:["inline","below"],description:"Title beside the circle, or underneath it (`labelPlacement`).",table:{category:"Appearance",defaultValue:{summary:"inline"}}},navigation:{name:"Back / Next buttons",control:"radio",options:["none","below","footer"],description:"Adds the Back and Next buttons: Below puts them right under the steps; Footer puts them in a bordered bar at the bottom (`navigation`). They move the Current step control.",table:{category:"Buttons",defaultValue:{summary:"none"}}},navigationAlign:{name:"Button alignment",control:"radio",options:["left","center","right","split","full"],description:"Where the buttons sit in their row: grouped left, center or right, split to opposite edges (Back left, Next right), or full (each stretches to share the row) (`navigationAlign`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"left (below) / right (footer)"}}},backLabel:{name:"Back text",control:"text",description:"Back button label (`backLabel`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"Back"}}},nextLabel:{name:"Next text",control:"text",description:"Next button label (`nextLabel`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"Next"}}},finishLabel:{name:"Finish text",control:"text",description:"Label of the Next button on the last step (`finishLabel`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"Finish"}}},backVariant:{name:"Back variant",control:"select",options:d,description:"The Back button's `Button` variant (`backButtonProps.variant`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"outline"}}},nextVariant:{name:"Next variant",control:"select",options:d,description:"The Next button's `Button` variant (`nextButtonProps.variant`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"default"}}},buttonSize:{name:"Button size",control:"radio",options:["sm","md","lg","xl"],description:"Size of both buttons (`size` in `backButtonProps` / `nextButtonProps`).",if:{arg:"navigation",neq:"none"},table:{category:"Buttons",defaultValue:{summary:"lg"}}},disabledStep:{name:"Disabled step",control:{type:"number",min:0,max:6,step:1},description:"Mutes one step with the disabled colors, counting from 1 (`disabled` on that step). 0 is none.",table:{category:"Behavior",defaultValue:{summary:"0"}}},errorStep:{name:"Error step",control:{type:"number",min:0,max:6,step:1},description:'Puts one step in the error state, counting from 1 (`error` on that step): its circle becomes a red "!". 0 is none.',table:{category:"Behavior",defaultValue:{summary:"0"}}},compact:{name:"Compact",control:"radio",options:["auto","always","never"],description:"The phone-sized look for horizontal steppers: the current step's title with \"Step 2 of 5\" and a segmented progress bar. Auto switches to it when the container is 480px wide or narrower, Lyra's small-screen breakpoint (`compact`); Always and Never force it. Vertical steppers never collapse.",if:{arg:"orientation",eq:"horizontal"},table:{category:"Appearance",defaultValue:{summary:"auto"}}},fill:{name:"Fill space",control:"boolean",description:"On, the connectors stretch to use the full width (horizontal) or height (vertical) of the container. Off, the stepper hugs its content with short connectors (`fill`).",table:{category:"Appearance",defaultValue:{summary:"false"}}}}});var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`withControlsFor({
  render: args => {
    // Back / Next move the "Current step" control, so the story works like a real flow.
    const [, updateArgs] = useArgs();
    return <StepperDemo {...args} onCurrentStepChange={currentStep => updateArgs({
      currentStep
    })} />;
  },
  args: {
    stepCount: 3,
    titles: DEFAULT_TITLE,
    currentStep: 2,
    orientation: "horizontal",
    labelPlacement: "inline",
    fill: true,
    optional: true,
    optionalLabel: "Optional",
    compact: "auto",
    disabledStep: 0,
    errorStep: 0,
    navigation: "below",
    navigationAlign: "left",
    backLabel: "Back",
    nextLabel: "Next",
    finishLabel: "Finish",
    backVariant: "outline",
    nextVariant: "default",
    buttonSize: "lg"
  },
  parameters: {
    controls: {
      sort: "none"
    }
  },
  argTypes: {
    stepCount: {
      name: "Steps",
      control: {
        type: "range",
        min: 2,
        max: 6,
        step: 1
      },
      description: "How many steps to show.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "3"
        }
      }
    },
    titles: {
      name: "Step titles",
      control: "text",
      description: "The title of each step, comma-separated in order (\\"Details, Payment, Review\\"). Steps beyond the list keep \\"Step title\\". Each step's own title is \`steps[i].title\`. Long titles wrap onto more lines.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Step title"
        }
      }
    },
    currentStep: {
      name: "Current step",
      control: {
        type: "range",
        min: 1,
        max: 7,
        step: 1
      },
      description: "Which step the person is on, counting from 1 (\`currentStep\` takes the 0-based index). Earlier steps get a check, later ones are outlined. Past the last step, every step is finished.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "2"
        }
      }
    },
    optional: {
      name: "Optional",
      control: "boolean",
      description: "Shows the small \\"Optional\\" caption under each title (\`optional\` on each step).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    optionalLabel: {
      name: "Optional text",
      control: "text",
      description: "Wording of that caption (\`optionalLabel\`). Long text wraps onto more lines.",
      if: {
        arg: "optional",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "Optional"
        }
      }
    },
    orientation: {
      name: "Orientation",
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "A row of steps, or a column (\`orientation\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "horizontal"
        }
      }
    },
    labelPlacement: {
      name: "Label placement",
      control: "radio",
      options: ["inline", "below"],
      description: "Title beside the circle, or underneath it (\`labelPlacement\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "inline"
        }
      }
    },
    navigation: {
      name: "Back / Next buttons",
      control: "radio",
      options: ["none", "below", "footer"],
      description: "Adds the Back and Next buttons: Below puts them right under the steps; Footer puts them in a bordered bar at the bottom (\`navigation\`). They move the Current step control.",
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "none"
        }
      }
    },
    navigationAlign: {
      name: "Button alignment",
      control: "radio",
      options: ["left", "center", "right", "split", "full"],
      description: "Where the buttons sit in their row: grouped left, center or right, split to opposite edges (Back left, Next right), or full (each stretches to share the row) (\`navigationAlign\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "left (below) / right (footer)"
        }
      }
    },
    backLabel: {
      name: "Back text",
      control: "text",
      description: "Back button label (\`backLabel\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "Back"
        }
      }
    },
    nextLabel: {
      name: "Next text",
      control: "text",
      description: "Next button label (\`nextLabel\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "Next"
        }
      }
    },
    finishLabel: {
      name: "Finish text",
      control: "text",
      description: "Label of the Next button on the last step (\`finishLabel\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "Finish"
        }
      }
    },
    backVariant: {
      name: "Back variant",
      control: "select",
      options: BUTTON_VARIANTS,
      description: "The Back button's \`Button\` variant (\`backButtonProps.variant\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "outline"
        }
      }
    },
    nextVariant: {
      name: "Next variant",
      control: "select",
      options: BUTTON_VARIANTS,
      description: "The Next button's \`Button\` variant (\`nextButtonProps.variant\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "default"
        }
      }
    },
    buttonSize: {
      name: "Button size",
      control: "radio",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of both buttons (\`size\` in \`backButtonProps\` / \`nextButtonProps\`).",
      if: {
        arg: "navigation",
        neq: "none"
      },
      table: {
        category: "Buttons",
        defaultValue: {
          summary: "lg"
        }
      }
    },
    disabledStep: {
      name: "Disabled step",
      control: {
        type: "number",
        min: 0,
        max: 6,
        step: 1
      },
      description: "Mutes one step with the disabled colors, counting from 1 (\`disabled\` on that step). 0 is none.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "0"
        }
      }
    },
    errorStep: {
      name: "Error step",
      control: {
        type: "number",
        min: 0,
        max: 6,
        step: 1
      },
      description: "Puts one step in the error state, counting from 1 (\`error\` on that step): its circle becomes a red \\"!\\". 0 is none.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "0"
        }
      }
    },
    compact: {
      name: "Compact",
      control: "radio",
      options: ["auto", "always", "never"],
      description: "The phone-sized look for horizontal steppers: the current step's title with \\"Step 2 of 5\\" and a segmented progress bar. Auto switches to it when the container is 480px wide or narrower, Lyra\\'s small-screen breakpoint (\`compact\`); Always and Never force it. Vertical steppers never collapse.",
      if: {
        arg: "orientation",
        eq: "horizontal"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "auto"
        }
      }
    },
    fill: {
      name: "Fill space",
      control: "boolean",
      description: "On, the connectors stretch to use the full width (horizontal) or height (vertical) of the container. Off, the stepper hugs its content with short connectors (\`fill\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
})`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const st=["Default"];export{o as Default,st as __namedExportsOrder,lt as default};
