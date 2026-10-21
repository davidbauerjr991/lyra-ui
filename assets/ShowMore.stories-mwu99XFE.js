import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{S as i}from"./show-more-zdMS6Dq2.js";import{w as s}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C3zmQXEb.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";const v={title:"Headless Primitives/Show More",component:i,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},e=s({parameters:{controls:{sort:"none"}},args:{label:"Show more",openLabel:"Show less",textSize:"md",emphasis:!1,chevronPosition:"end",chevronDirection:"down",defaultOpen:!1},argTypes:{label:{name:"Label",control:"text",description:"The trigger text (`label`).",table:{category:"Content"}},openLabel:{name:"Label when open",control:"text",description:'The trigger text while open (`openLabel`), e.g. "Show less". Empty keeps the label.',table:{category:"Content"}},textSize:{name:"Text size",control:"radio",options:["sm","md","lg"],description:"Size of the trigger text and chevron (`textSize`): sm 12px, md 14px, lg 16px.",table:{category:"Appearance",defaultValue:{summary:"md"}}},emphasis:{name:"Bold",control:"boolean",description:"Bolder trigger text (`emphasis`).",table:{category:"Appearance",defaultValue:{summary:"false"}}},chevronPosition:{name:"Chevron position",control:"radio",options:["start","end"],description:"Which side of the label the chevron is on (`chevronPosition`).",table:{category:"Appearance",defaultValue:{summary:"end"}}},chevronDirection:{name:"Chevron direction",control:"radio",options:["down","up","right","left"],description:"Which way the chevron points while closed (`chevronDirection`). Down turns up when open; up, right and left turn down. Unset: right with the chevron at the start, down at the end.",table:{category:"Appearance",defaultValue:{summary:"down (end) / right (start)"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"Whether the content is open on first render (`defaultOpen`).",table:{category:"State",defaultValue:{summary:"false"}}}},render:t=>n.jsx("div",{className:"w-full max-w-md",children:n.jsx(i,{...t,children:n.jsx("p",{className:"mt-2 lyra-body-md text-lyra-fg-default",children:"The extra content. It folds away under the trigger and opens with a short height animation; keyboard users open it with Enter or Space."})},String(t.defaultOpen))})});var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`withControlsFor({
  parameters: {
    controls: {
      sort: "none"
    }
  },
  args: {
    label: "Show more",
    openLabel: "Show less",
    textSize: "md",
    emphasis: false,
    chevronPosition: "end",
    chevronDirection: "down",
    defaultOpen: false
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "The trigger text (\`label\`).",
      table: {
        category: "Content"
      }
    },
    openLabel: {
      name: "Label when open",
      control: "text",
      description: "The trigger text while open (\`openLabel\`), e.g. \\"Show less\\". Empty keeps the label.",
      table: {
        category: "Content"
      }
    },
    textSize: {
      name: "Text size",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size of the trigger text and chevron (\`textSize\`): sm 12px, md 14px, lg 16px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    emphasis: {
      name: "Bold",
      control: "boolean",
      description: "Bolder trigger text (\`emphasis\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    chevronPosition: {
      name: "Chevron position",
      control: "radio",
      options: ["start", "end"],
      description: "Which side of the label the chevron is on (\`chevronPosition\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "end"
        }
      }
    },
    chevronDirection: {
      name: "Chevron direction",
      control: "radio",
      options: ["down", "up", "right", "left"],
      description: "Which way the chevron points while closed (\`chevronDirection\`). Down turns up when open; up, right and left turn down. Unset: right with the chevron at the start, down at the end.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "down (end) / right (start)"
        }
      }
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the content is open on first render (\`defaultOpen\`).",
      table: {
        category: "State",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args => <div className="w-full max-w-md">
      {/* key: Starts open only applies on first render, so remount when it changes */}
      <ShowMore key={String(args.defaultOpen)} {...args}>
        <p className="mt-2 lyra-body-md text-lyra-fg-default">
          The extra content. It folds away under the trigger and opens with a short height animation; keyboard users open it with Enter or Space.
        </p>
      </ShowMore>
    </div>
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,v as default};
