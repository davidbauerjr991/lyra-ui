import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DhMLlvMY.js";import{A as m}from"./ai-input-CluMDecE.js";import{C as k}from"./conversation-message-Cb4MW441.js";import{D as w}from"./AIInput.shared-DYHR2PJP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./clear-button-Cb_QiePp.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./plus-BKUBo5Qt.js";import"./paperclip-52JUKXJ-.js";import"./arrow-up-DehsnLlv.js";import"./mic-BV_p_-VJ.js";import"./ai-process-EXvIT69L.js";import"./icon-h0iptIZc.js";import"./index-1evVQkiP.js";import"./chevron-down-gMYAX9-q.js";import"./clock-C3xVexPO.js";import"./circle-alert-DucVQP5w.js";import"./loader-D8U98l95.js";import"./check-Dr3vGcdY.js";import"./rotate-ccw-DAuhNo5i.js";import"./copy-CtBWyGKZ.js";import"./triangle-alert-C66Fwj6V.js";const ot={title:"UI/AIInput",component:m,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function S({startingText:e="empty",showAttach:u=!0,disabled:b=!1,placeholder:g="Ask anything...",helperText:x="AI assistant can make mistakes. Double check responses.",layout:y="stacked"}){const[f,i]=s.useState(e==="draft"?w:""),[l,A]=s.useState([]),[c,a]=s.useState(null);return t.jsxs("div",{className:"w-[480px] flex flex-col gap-3",children:[l.length>0&&t.jsx("div",{className:"flex flex-col gap-2",children:l.map((o,r)=>t.jsx(k,{role:"user",children:o},r))}),t.jsx(m,{value:f,onChange:i,onSubmit:o=>{A(r=>[...r,o]),i("")},onClear:()=>a("Cleared the input"),onAttachFiles:()=>a("Add files or photos selected"),onAttachFolder:()=>a("Add folder selected"),showAttach:u,disabled:b,placeholder:g,helperText:x,singleLine:y==="single-line"}),c&&t.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:c})]})}const n={args:{startingText:"empty",showAttach:!0,disabled:!1,placeholder:"Ask anything...",helperText:"AI assistant can make mistakes. Double check responses.",layout:"stacked"},parameters:{controls:{include:["startingText","showAttach","disabled","placeholder","helperText","layout","Starting text","Attach button","Disabled","Placeholder","Helper text","Layout"],sort:"none"}},argTypes:{startingText:{name:"Starting text",control:"radio",options:["empty","draft"],description:"Whether the field starts empty or pre-filled with a draft. The clear (x) button only appears once there is text.",table:{category:"Behavior"}},showAttach:{name:"Attach button",control:"boolean",description:"Shows the + button that opens the attach menu (`showAttach`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Disables the field, the attach button and the submit button.",table:{category:"Behavior"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content"}},helperText:{name:"Helper text",control:"text",description:"Caption under the field. Clear it for no caption.",table:{category:"Content"}},layout:{name:"Layout",control:"radio",options:["stacked","single-line"],description:"Stacked puts the text above a toolbar. Single line puts attach, input and submit in one compact row (`singleLine`).",table:{category:"Appearance"}}},render:e=>t.jsx(S,{...e},JSON.stringify(e))};var p,d,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    startingText: "empty",
    showAttach: true,
    disabled: false,
    placeholder: "Ask anything...",
    helperText: "AI assistant can make mistakes. Double check responses.",
    layout: "stacked"
  },
  parameters: {
    controls: {
      include: ["startingText", "showAttach", "disabled", "placeholder", "helperText", "layout", "Starting text", "Attach button", "Disabled", "Placeholder", "Helper text", "Layout"],
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
    helperText: {
      name: "Helper text",
      control: "text",
      description: "Caption under the field. Clear it for no caption.",
      table: {
        category: "Content"
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
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <AIInputDemo key={JSON.stringify(args)} {...args} />
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const rt=["Default"];export{n as Default,rt as __namedExportsOrder,ot as default};
