import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-DhMLlvMY.js";import{A as m}from"./ai-input-CSPUm_5A.js";import{C as k}from"./conversation-message-BlMtx5r0.js";import{D as w}from"./AIInput.shared-CYfaWrfo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DjOBIGyd.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./tooltip-E_6y_wR5.js";import"./clear-button-C7HPU1Rg.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./plus-BKUBo5Qt.js";import"./paperclip-52JUKXJ-.js";import"./arrow-up-DehsnLlv.js";import"./mic-BV_p_-VJ.js";import"./ai-process-DKgPSbgS.js";import"./icon-J1e0iagV.js";import"./index-1evVQkiP.js";import"./progress-bar-CuQqxcLC.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./chevron-down-gMYAX9-q.js";import"./clock-C3xVexPO.js";import"./circle-alert-DucVQP5w.js";import"./loader-D8U98l95.js";import"./check-Dr3vGcdY.js";import"./rotate-ccw-DAuhNo5i.js";import"./copy-CtBWyGKZ.js";import"./triangle-alert-C66Fwj6V.js";const lt={title:"UI/AIInput",component:m,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function S({startingText:e="empty",showAttach:u=!0,disabled:b=!1,placeholder:g="Ask anything...",helperText:x="AI assistant can make mistakes. Double check responses.",layout:y="stacked"}){const[f,i]=s.useState(e==="draft"?w:""),[l,A]=s.useState([]),[p,o]=s.useState(null);return t.jsxs("div",{className:"w-[480px] flex flex-col gap-3",children:[l.length>0&&t.jsx("div",{className:"flex flex-col gap-2",children:l.map((a,r)=>t.jsx(k,{role:"user",children:a},r))}),t.jsx(m,{value:f,onChange:i,onSubmit:a=>{A(r=>[...r,a]),i("")},onClear:()=>o("Cleared the input"),onAttachFiles:()=>o("Add files or photos selected"),onAttachFolder:()=>o("Add folder selected"),showAttach:u,disabled:b,placeholder:g,helperText:x,singleLine:y==="single-line"}),p&&t.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",role:"status",children:p})]})}const n={args:{startingText:"empty",showAttach:!0,disabled:!1,placeholder:"Ask anything...",helperText:"AI assistant can make mistakes. Double check responses.",layout:"stacked"},parameters:{controls:{include:["startingText","showAttach","disabled","placeholder","helperText","layout","Starting text","Attach button","Disabled","Placeholder","Helper text","Layout"],sort:"none"}},argTypes:{startingText:{name:"Starting text",control:"radio",options:["empty","draft"],description:"Whether the field starts empty or pre-filled with a draft. The clear (x) button only appears once there is text.",table:{category:"Behavior"}},showAttach:{name:"Attach button",control:"boolean",description:"Shows the + button that opens the attach menu (`showAttach`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Disables the field, the attach button and the submit button.",table:{category:"Behavior"}},placeholder:{name:"Placeholder",control:"text",description:"Hint text shown while the field is empty.",table:{category:"Content"}},helperText:{name:"Helper text",control:"text",description:"Caption under the field. Clear it for no caption.",table:{category:"Content"}},layout:{name:"Layout",control:"radio",options:["stacked","single-line"],description:"Stacked puts the text above a toolbar. Single line puts attach, input and submit in one compact row (`singleLine`).",table:{category:"Appearance"}}},render:e=>t.jsx(S,{...e},JSON.stringify(e))};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const pt=["Default"];export{n as Default,pt as __namedExportsOrder,lt as default};
