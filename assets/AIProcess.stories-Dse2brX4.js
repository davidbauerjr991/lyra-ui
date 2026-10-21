import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{A as l}from"./ai-process-DKgPSbgS.js";import{w as h}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./icon-J1e0iagV.js";import"./index-1evVQkiP.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./progress-bar-CuQqxcLC.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./clock-C3xVexPO.js";import"./circle-alert-DucVQP5w.js";import"./loader-D8U98l95.js";import"./check-Dr3vGcdY.js";const D={title:"UI/AIProcess",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},m=[{id:"1",label:"Reviewing account history",status:"done"},{id:"2",label:"Checking recent login events",status:"error",description:"Unable to retrieve login logs — service timeout"},{id:"3",label:"Verifying 2FA configuration",status:"active",description:"Analysing device fingerprint…"},{id:"4",label:"Generating recommended action",status:"pending"}],g=[{id:"1",label:"Review opened",status:"done",at:"2:00"},{id:"2",label:"Photo verified",status:"done",at:"2:01"},{id:"3",label:"Waiting on approval",status:"active"},{id:"4",label:"Refund issued",status:"pending"}],b=[{id:"1",label:"Confirm the delivery date",description:"It is on the account, so the customer needs no receipt."},{id:"2",label:"Check the light pattern",description:"A steady blinking red light confirms the board fault."},{id:"3",label:"Raise a replacement claim",description:"Choose “Board fault” as the reason; a technician swaps the unit on site."}],t=h({parameters:{controls:{sort:"none"}},args:{variant:"thought",intensity:"subtle",label:"Thought process",title:"Refund review",meta:"Back office · stage 3 of 5",collapsible:!0,defaultExpanded:!0},argTypes:{variant:{name:"Variant",control:"radio",options:["thought","progress","numbered"],description:"Thought process (collapsible, status icons), progress (title, bar, times) or numbered instructions (`variant`).",table:{category:"Appearance",defaultValue:{summary:"thought"}}},intensity:{name:"Color intensity",control:"radio",options:["subtle","strong"],description:"Step colors (`intensity`): subtle is a tinted circle with a colored glyph, strong is a solid circle with a white glyph.",table:{category:"Appearance",defaultValue:{summary:"subtle"}}},label:{name:"Label",control:"text",description:"Heading of the thought-process list (`label`).",if:{arg:"variant",eq:"thought"},table:{category:"Content",defaultValue:{summary:"Thought process"}}},title:{name:"Title",control:"text",description:"Heading for the progress and numbered variants (`title`). Leave empty for none.",if:{arg:"variant",neq:"thought"},table:{category:"Content"}},meta:{name:"Meta text",control:"text",description:"Text at the right of the heading (`meta`).",if:{arg:"variant",neq:"thought"},table:{category:"Content"}},collapsible:{name:"Collapsible",control:"boolean",description:"The heading folds the steps away (`collapsible`). On by default for Thought, off for the others.",table:{category:"Behavior"}},defaultExpanded:{name:"Starts open",control:"boolean",description:"Initial open state when Collapsible is on (`defaultExpanded`).",if:{arg:"collapsible",truthy:!0},table:{category:"Behavior"}}},render:({variant:e="thought",intensity:d="subtle",label:c,title:p,meta:u,collapsible:n,defaultExpanded:a})=>o.jsx("div",{className:"max-w-md",children:o.jsx(l,{variant:e,intensity:d,label:c||void 0,title:p||void 0,meta:u||void 0,collapsible:n,defaultExpanded:a,steps:e==="progress"?g:e==="numbered"?b:m},`${e}-${n}-${a}`)})});var i,r,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`withControlsFor({
  parameters: {
    controls: {
      sort: "none"
    }
  },
  args: {
    variant: "thought",
    intensity: "subtle",
    label: "Thought process",
    title: "Refund review",
    meta: "Back office · stage 3 of 5",
    collapsible: true,
    defaultExpanded: true
  },
  argTypes: {
    variant: {
      name: "Variant",
      control: "radio",
      options: ["thought", "progress", "numbered"],
      description: "Thought process (collapsible, status icons), progress (title, bar, times) or numbered instructions (\`variant\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "thought"
        }
      }
    },
    intensity: {
      name: "Color intensity",
      control: "radio",
      options: ["subtle", "strong"],
      description: "Step colors (\`intensity\`): subtle is a tinted circle with a colored glyph, strong is a solid circle with a white glyph.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "subtle"
        }
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Heading of the thought-process list (\`label\`).",
      if: {
        arg: "variant",
        eq: "thought"
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "Thought process"
        }
      }
    },
    title: {
      name: "Title",
      control: "text",
      description: "Heading for the progress and numbered variants (\`title\`). Leave empty for none.",
      if: {
        arg: "variant",
        neq: "thought"
      },
      table: {
        category: "Content"
      }
    },
    meta: {
      name: "Meta text",
      control: "text",
      description: "Text at the right of the heading (\`meta\`).",
      if: {
        arg: "variant",
        neq: "thought"
      },
      table: {
        category: "Content"
      }
    },
    collapsible: {
      name: "Collapsible",
      control: "boolean",
      description: "The heading folds the steps away (\`collapsible\`). On by default for Thought, off for the others.",
      table: {
        category: "Behavior"
      }
    },
    defaultExpanded: {
      name: "Starts open",
      control: "boolean",
      description: "Initial open state when Collapsible is on (\`defaultExpanded\`).",
      if: {
        arg: "collapsible",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    }
  },
  render: ({
    variant = "thought",
    intensity = "subtle",
    label,
    title,
    meta,
    collapsible,
    defaultExpanded
  }) => <div className="max-w-md">
      <AIProcess
    // \`key\` remounts when the open-state controls change.
    key={\`\${variant}-\${collapsible}-\${defaultExpanded}\`} variant={variant} intensity={intensity} label={label || undefined} title={title || undefined} meta={meta || undefined} collapsible={collapsible} defaultExpanded={defaultExpanded} steps={variant === "progress" ? PROGRESS_STEPS : variant === "numbered" ? NUMBERED_STEPS : THOUGHT_STEPS} />
    </div>
})`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,D as default};
