import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{P as l}from"./progress-bar-BUzWCp3j.js";import{w as s}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const w={title:"Headless Primitives/Progress Bar",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["default","success","warning","critical","neutral"]},size:{control:"radio",options:["sm","md","lg"]},showLabel:{control:"boolean"}}},e=s({render:a=>n.jsx("div",{className:"w-full max-w-md",children:n.jsx(l,{...a,label:a.label||void 0})}),args:{shape:"bar",ringSize:40,value:60,variant:"default",size:"md",showLabel:!1,label:"",labelAlign:"start",indeterminate:!1},parameters:{controls:{sort:"none"}},argTypes:{shape:{name:"Shape",control:"radio",options:["bar","ring"],description:"A horizontal bar, or a ring: the same progress as a circle, small enough to sit beside a label or inside a Badge (`shape`). A ring ignores Size and the label controls.",table:{category:"Appearance",defaultValue:{summary:"bar"}}},ringSize:{name:"Ring size",control:{type:"range",min:12,max:80,step:2},description:"Ring diameter in px (`ringSize`). Over 30px the stroke gets thicker.",if:{arg:"shape",eq:"ring"},table:{category:"Appearance",defaultValue:{summary:"18"}}},value:{name:"Value",control:{type:"range",min:0,max:100,step:1},description:"How far along the bar is, 0–100.",table:{category:"Behavior",defaultValue:{summary:"0"}}},indeterminate:{name:"Indeterminate",control:"boolean",description:"Unknown progress: a segment slides along the track and no value is reported to assistive tech. Value is ignored and the percentage is hidden. Honors reduced motion.",table:{category:"Behavior",defaultValue:{summary:"false"}}},showLabel:{name:"Show label",control:"boolean",description:"Shows a label under the track (`showLabel`). Bar only.",if:{arg:"shape",eq:"bar"},table:{category:"Content",defaultValue:{summary:"false"}}},labelAlign:{name:"Label alignment",control:"radio",options:["start","center","end"],description:"Where the label sits under the track: left (default), centered or right (`labelAlign`).",if:{arg:"showLabel",truthy:!0},table:{category:"Content",defaultValue:{summary:"start"}}},label:{name:"Label text",control:"text",description:"Replaces the default “{value}%” text. Leave empty for the percentage. Only shows when Show label is on.",if:{arg:"showLabel",truthy:!0},table:{category:"Content",defaultValue:{summary:"{value}%"}}},variant:{name:"Variant",control:"select",options:["default","success","warning","critical","neutral"],description:"Color of the fill.",table:{category:"Appearance",defaultValue:{summary:"default"}}},size:{name:"Size",control:"radio",options:["sm","md","lg"],description:"Height of the track: sm 4px, md 8px, lg 12px. Bar only.",if:{arg:"shape",eq:"bar"},table:{category:"Appearance",defaultValue:{summary:"md"}}}}});var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`withControlsFor({
  render: args => <div className="w-full max-w-md">
      {/* \`label\` is "" when the Label text control is cleared — fall back to
          the component's own "{value}%". */}
      <ProgressBar {...args} label={args.label || undefined} />
    </div>,
  args: {
    shape: "bar",
    ringSize: 40,
    value: 60,
    variant: "default",
    size: "md",
    showLabel: false,
    label: "",
    labelAlign: "start",
    indeterminate: false
  },
  parameters: {
    controls: {
      sort: "none"
    }
  },
  argTypes: {
    shape: {
      name: "Shape",
      control: "radio",
      options: ["bar", "ring"],
      description: "A horizontal bar, or a ring: the same progress as a circle, small enough to sit beside a label or inside a Badge (\`shape\`). A ring ignores Size and the label controls.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "bar"
        }
      }
    },
    ringSize: {
      name: "Ring size",
      control: {
        type: "range",
        min: 12,
        max: 80,
        step: 2
      },
      description: "Ring diameter in px (\`ringSize\`). Over 30px the stroke gets thicker.",
      if: {
        arg: "shape",
        eq: "ring"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "18"
        }
      }
    },
    value: {
      name: "Value",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1
      },
      description: "How far along the bar is, 0–100.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "0"
        }
      }
    },
    indeterminate: {
      name: "Indeterminate",
      control: "boolean",
      description: "Unknown progress: a segment slides along the track and no value is reported to assistive tech. Value is ignored and the percentage is hidden. Honors reduced motion.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showLabel: {
      name: "Show label",
      control: "boolean",
      description: "Shows a label under the track (\`showLabel\`). Bar only.",
      if: {
        arg: "shape",
        eq: "bar"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    labelAlign: {
      name: "Label alignment",
      control: "radio",
      options: ["start", "center", "end"],
      description: "Where the label sits under the track: left (default), centered or right (\`labelAlign\`).",
      if: {
        arg: "showLabel",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "start"
        }
      }
    },
    label: {
      name: "Label text",
      control: "text",
      description: "Replaces the default “{value}%” text. Leave empty for the percentage. Only shows when Show label is on.",
      if: {
        arg: "showLabel",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "{value}%"
        }
      }
    },
    variant: {
      name: "Variant",
      control: "select",
      options: ["default", "success", "warning", "critical", "neutral"],
      description: "Color of the fill.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Height of the track: sm 4px, md 8px, lg 12px. Bar only.",
      if: {
        arg: "shape",
        eq: "bar"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    }
  }
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,w as default};
