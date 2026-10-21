import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./skeleton-DWrO-N3-.js";import{w as i}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const h={title:"Custom Primitives/Skeleton",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},e=i({parameters:{controls:{sort:"none"}},args:{lines:3,size:"md",gap:"md",lastLineWidth:55},argTypes:{lines:{name:"Lines",control:{type:"range",min:1,max:8,step:1},description:"Number of placeholder lines (`lines`).",table:{category:"Content",defaultValue:{summary:"3"}}},lastLineWidth:{name:"Last line width",control:{type:"range",min:20,max:100,step:5},description:"Width of the last line, in percent (`lastLineWidth`). 100 makes every line equal.",table:{category:"Content",defaultValue:{summary:"55"}}},size:{name:"Line height",control:"radio",options:["sm","md","lg"],description:"Height of each line (`size`): sm 8px, md 10px, lg 14px.",table:{category:"Appearance",defaultValue:{summary:"md"}}},gap:{name:"Gap",control:"radio",options:["sm","md","lg"],description:"Space between lines (`gap`).",table:{category:"Appearance",defaultValue:{summary:"md"}}}},render:o=>n.jsx("div",{className:"w-full max-w-md",children:n.jsx(s,{...o})})});var a,t,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`withControlsFor({
  parameters: {
    controls: {
      sort: "none"
    }
  },
  args: {
    lines: 3,
    size: "md",
    gap: "md",
    lastLineWidth: 55
  },
  argTypes: {
    lines: {
      name: "Lines",
      control: {
        type: "range",
        min: 1,
        max: 8,
        step: 1
      },
      description: "Number of placeholder lines (\`lines\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "3"
        }
      }
    },
    lastLineWidth: {
      name: "Last line width",
      control: {
        type: "range",
        min: 20,
        max: 100,
        step: 5
      },
      description: "Width of the last line, in percent (\`lastLineWidth\`). 100 makes every line equal.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "55"
        }
      }
    },
    size: {
      name: "Line height",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Height of each line (\`size\`): sm 8px, md 10px, lg 14px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    gap: {
      name: "Gap",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Space between lines (\`gap\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    }
  },
  render: args => <div className="w-full max-w-md">
      <Skeleton {...args} />
    </div>
})`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,h as default};
