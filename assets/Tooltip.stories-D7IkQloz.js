import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./tooltip-DKTByY8R.js";import{B as f}from"./button-BLVj2C8E.js";import{T as u,S as l}from"./Tooltip.shared-B0QnOrWH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";const E={title:"Headless Primitives/Tooltip",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{content:{control:"text"},placement:{control:"radio",options:u},delayMs:{control:"select",options:[0,200,500,1e3]},disabled:{control:"boolean"},asLabel:{control:"boolean"}}};function b({content:t=l,placement:r="top",delayMs:s=200,alwaysOpen:i=!1,disabled:c=!1,asLabel:p=!1,onlyWhenTruncated:y=!1}){return y?e.jsx("div",{className:"flex flex-col gap-8 px-40 py-24",children:[{id:"cut",text:"A long label that gets cut off by its container"},{id:"fits",text:"Fits"}].map(o=>e.jsx(a,{content:t,placement:r,delayMs:s,forceOpen:i&&o.id==="cut",disabled:c,asLabel:p,onlyWhenTruncated:!0,children:e.jsx("span",{tabIndex:0,className:"lyra-body-md block w-32 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1",children:o.text})},o.id))}):e.jsx("div",{className:"px-40 py-24",children:e.jsx(a,{content:t,placement:r,delayMs:s,forceOpen:i,disabled:c,asLabel:p,children:e.jsx(f,{variant:"outline",size:"sm",children:"Hover me"})})})}const n={render:t=>e.jsx(b,{...t},JSON.stringify(t)),args:{content:l,placement:"top",delayMs:200,alwaysOpen:!1,disabled:!1,asLabel:!1,onlyWhenTruncated:!1},parameters:{controls:{include:["Always open","Disabled","Delay","Use as label","Only when truncated","Content","Placement","alwaysOpen","disabled","delayMs","asLabel","onlyWhenTruncated","content","placement"],sort:"none"}},argTypes:{alwaysOpen:{name:"Always open",control:"boolean",description:"Keeps the tooltip showing instead of waiting for hover (`forceOpen`). Handy for adjusting the other controls.",table:{category:"Behavior",defaultValue:{summary:"false"}}},disabled:{name:"Disabled",control:"boolean",description:"Stops the tooltip from ever opening.",table:{category:"Behavior",defaultValue:{summary:"false"}}},delayMs:{name:"Delay",control:"select",options:[0,200,500,1e3],description:"Milliseconds the pointer waits on the trigger before the tooltip opens (`delayMs`).",table:{category:"Behavior",defaultValue:{summary:"200"}}},asLabel:{name:"Use as label",control:"boolean",description:"Also gives the trigger the tooltip text as its accessible name (`asLabel`). For icon-only triggers with no visible text.",table:{category:"Behavior",defaultValue:{summary:"false"}}},onlyWhenTruncated:{name:"Only when truncated",control:"boolean",description:"Swaps the trigger for two labels in a narrow box: the one that is cut off shows the tooltip on hover or focus, the one that fits doesn't (`onlyWhenTruncated`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},content:{name:"Content",control:"text",description:"The tooltip text. Long text wraps onto several lines.",table:{category:"Content",defaultValue:{summary:l}}},placement:{name:"Placement",control:"radio",options:u,description:"Which side of the trigger the tooltip appears on. It flips if there isn't room.",table:{category:"Appearance",defaultValue:{summary:"top"}}}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <TooltipDemo key={JSON.stringify(args)} {...args} />,
  args: {
    content: SHORT_TEXT,
    placement: "top",
    delayMs: 200,
    alwaysOpen: false,
    disabled: false,
    asLabel: false,
    onlyWhenTruncated: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Always open", "Disabled", "Delay", "Use as label", "Only when truncated", "Content", "Placement", "alwaysOpen", "disabled", "delayMs", "asLabel", "onlyWhenTruncated", "content", "placement"],
      sort: "none"
    }
  },
  argTypes: {
    alwaysOpen: {
      name: "Always open",
      control: "boolean",
      description: "Keeps the tooltip showing instead of waiting for hover (\`forceOpen\`). Handy for adjusting the other controls.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Stops the tooltip from ever opening.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    delayMs: {
      name: "Delay",
      control: "select",
      options: [0, 200, 500, 1000],
      description: "Milliseconds the pointer waits on the trigger before the tooltip opens (\`delayMs\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "200"
        }
      }
    },
    asLabel: {
      name: "Use as label",
      control: "boolean",
      description: "Also gives the trigger the tooltip text as its accessible name (\`asLabel\`). For icon-only triggers with no visible text.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    onlyWhenTruncated: {
      name: "Only when truncated",
      control: "boolean",
      description: "Swaps the trigger for two labels in a narrow box: the one that is cut off shows the tooltip on hover or focus, the one that fits doesn't (\`onlyWhenTruncated\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    content: {
      name: "Content",
      control: "text",
      description: "The tooltip text. Long text wraps onto several lines.",
      table: {
        category: "Content",
        defaultValue: {
          summary: SHORT_TEXT
        }
      }
    },
    placement: {
      name: "Placement",
      control: "radio",
      options: TOOLTIP_PLACEMENTS,
      description: "Which side of the trigger the tooltip appears on. It flips if there isn't room.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "top"
        }
      }
    }
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const P=["Default"];export{n as Default,P as __namedExportsOrder,E as default};
