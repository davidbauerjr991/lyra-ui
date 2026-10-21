import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DhMLlvMY.js";import{A as h}from"./ai-input-yATEZrm7.js";import{C as k}from"./conversation-message-CLe7kmN6.js";import{D as S}from"./AIInput.shared-CYfaWrfo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DjOBIGyd.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./tooltip-E_6y_wR5.js";import"./clear-button-C7HPU1Rg.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./plus-BKUBo5Qt.js";import"./paperclip-52JUKXJ-.js";import"./arrow-up-DehsnLlv.js";import"./mic-BV_p_-VJ.js";import"./ai-process-BMeBaUcA.js";import"./icon-J1e0iagV.js";import"./index-1evVQkiP.js";import"./progress-bar-BUzWCp3j.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./chevron-down-gMYAX9-q.js";import"./clock-C3xVexPO.js";import"./circle-alert-DucVQP5w.js";import"./loader-D8U98l95.js";import"./check-Dr3vGcdY.js";import"./rotate-ccw-DAuhNo5i.js";import"./copy-CtBWyGKZ.js";import"./triangle-alert-C66Fwj6V.js";const pe={title:"UI/AIInput",component:h,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function v({startingText:t="empty",showAttach:u=!0,disabled:g=!1,placeholder:y="Ask anything...",showLegal:b=!0,helperText:x="AI assistant can make mistakes. Double check responses.",layout:f="stacked",rounded:w=!1,maxRows:A=6}){const[L,l]=r.useState(t==="draft"?S:""),[i,T]=r.useState([]),[d,a]=r.useState(null);return e.jsxs("div",{className:"w-[480px] flex flex-col gap-3",children:[i.length>0&&e.jsx("div",{className:"flex flex-col gap-2",children:i.map((o,s)=>e.jsx(k,{role:"user",children:o},s))}),e.jsx(h,{value:L,onChange:l,onSubmit:o=>{T(s=>[...s,o]),l("")},onClear:()=>a("Cleared the input"),onAttachFiles:()=>a("Add files or photos selected"),onAttachFolder:()=>a("Add folder selected"),showAttach:u,disabled:g,placeholder:y,helperText:b?x:"",singleLine:f==="single-line",rounded:w,maxRows:A}),d&&e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:d})]})}const n={args:{startingText:"empty",showAttach:!0,disabled:!1,placeholder:"Ask anything...",showLegal:!0,helperText:"AI assistant can make mistakes. Double check responses.",layout:"stacked",rounded:!1,maxRows:6},parameters:{controls:{include:["startingText","showAttach","disabled","placeholder","showLegal","helperText","layout","rounded","maxRows","Starting text","Attach button","Disabled","Placeholder","Legal statement","Legal statement text","Layout","Rounded edges","Max rows"],sort:"none"}},argTypes:{startingText:{name:"Starting text",control:"radio",options:["empty","draft"],description:"Whether the field starts empty or pre-filled with a draft. The clear (x) button only appears once there is text.",table:{category:"Behavior"}},showAttach:{name:"Attach button",control:"boolean",description:"Shows the + button that opens the attach menu (`showAttach`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Disables the field, the attach button and the submit button.",table:{category:"Behavior"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content"}},showLegal:{name:"Legal statement",control:"boolean",description:"Shows the AI disclaimer caption under the field (`helperText`). Off removes the caption.",table:{category:"Content",defaultValue:{summary:"true"}}},helperText:{name:"Legal statement text",control:"text",description:"The caption's wording (`helperText`). Only used while Legal statement is on.",if:{arg:"showLegal",truthy:!0},table:{category:"Content"}},maxRows:{name:"Max rows",control:{type:"number",min:2,max:20,step:1},description:"How many lines of text the field grows to before it stops and scrolls inside (`maxRows`, default 6). Applies to both layouts.",table:{category:"Behavior",defaultValue:{summary:"6"}}},layout:{name:"Layout",control:"radio",options:["stacked","single-line"],description:"Stacked puts the text above a toolbar. Single line puts attach, input and submit in one compact row (`singleLine`).",table:{category:"Appearance"}},rounded:{name:"Rounded edges",control:"boolean",description:"Pill-shaped ends on the field and its buttons (`rounded`). Only available with the single-line layout.",if:{arg:"layout",eq:"single-line"},table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:t=>e.jsx(v,{...t},JSON.stringify(t))};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    startingText: "empty",
    showAttach: true,
    disabled: false,
    placeholder: "Ask anything...",
    showLegal: true,
    helperText: "AI assistant can make mistakes. Double check responses.",
    layout: "stacked",
    rounded: false,
    maxRows: 6
  },
  parameters: {
    controls: {
      include: ["startingText", "showAttach", "disabled", "placeholder", "showLegal", "helperText", "layout", "rounded", "maxRows", "Starting text", "Attach button", "Disabled", "Placeholder", "Legal statement", "Legal statement text", "Layout", "Rounded edges", "Max rows"],
      sort: "none"
    }
  },
  argTypes: {
    startingText: {
      name: "Starting text",
      control: "radio",
      options: ["empty", "draft"],
      description: "Whether the field starts empty or pre-filled with a draft. The clear (x) button only appears once there is text.",
      table: {
        category: "Behavior"
      }
    },
    showAttach: {
      name: "Attach button",
      control: "boolean",
      description: "Shows the + button that opens the attach menu (\`showAttach\`).",
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the field, the attach button and the submit button.",
      table: {
        category: "Behavior"
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: {
        category: "Content"
      }
    },
    showLegal: {
      name: "Legal statement",
      control: "boolean",
      description: "Shows the AI disclaimer caption under the field (\`helperText\`). Off removes the caption.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    helperText: {
      name: "Legal statement text",
      control: "text",
      description: "The caption's wording (\`helperText\`). Only used while Legal statement is on.",
      if: {
        arg: "showLegal",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
    maxRows: {
      name: "Max rows",
      control: {
        type: "number",
        min: 2,
        max: 20,
        step: 1
      },
      description: "How many lines of text the field grows to before it stops and scrolls inside (\`maxRows\`, default 6). Applies to both layouts.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "6"
        }
      }
    },
    layout: {
      name: "Layout",
      control: "radio",
      options: ["stacked", "single-line"],
      description: "Stacked puts the text above a toolbar. Single line puts attach, input and submit in one compact row (\`singleLine\`).",
      table: {
        category: "Appearance"
      }
    },
    rounded: {
      name: "Rounded edges",
      control: "boolean",
      description: "Pill-shaped ends on the field and its buttons (\`rounded\`). Only available with the single-line layout.",
      if: {
        arg: "layout",
        eq: "single-line"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <AIInputDemo key={JSON.stringify(args)} {...args} />
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const me=["Default"];export{n as Default,me as __namedExportsOrder,pe as default};
