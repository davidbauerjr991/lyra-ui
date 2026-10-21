import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as l}from"./citation-CApf8U1b.js";import{w as c}from"./storyControls-D66O-f8g.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";const k={title:"Custom Primitives/Citation",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a="Yes. Tablet units carry a 24-month parts warranty that runs from the delivery date, not the order date. A frozen display with a blinking red light is a board fault, so it is replaced rather than repaired.",m=[{text:"24-month parts warranty that runs from the delivery date",source:"Tablet warranty coverage, section 2"},{text:"board fault, so it is replaced rather than repaired",source:"Board faults — replace, not repair"}],e=c({parameters:{controls:{sort:"none"}},args:{text:a,sources:2,defaultOpen:!1},argTypes:{text:{name:"Text",control:"text",description:"The full text (`text`). The sample sources only mark up the sample text.",table:{category:"Content"}},sources:{name:"Sources",control:{type:"range",min:0,max:2,step:1},description:"How many of the sample passages are cited (`citations`). 0 shows the plain text with no sources link.",table:{category:"Content",defaultValue:{summary:"2"}}},defaultOpen:{name:"Starts open",control:"boolean",description:"The sources list starts open (`defaultOpen`).",table:{category:"Behavior",defaultValue:{summary:"false"}}}},render:({text:i=a,sources:p=2,defaultOpen:t=!1})=>n.jsx("div",{className:"max-w-xl",children:n.jsx(l,{text:i,citations:m.slice(0,p),defaultOpen:t},String(t))})});var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`withControlsFor({
  parameters: {
    controls: {
      sort: "none"
    }
  },
  args: {
    text: SAMPLE_TEXT,
    sources: 2,
    defaultOpen: false
  },
  argTypes: {
    text: {
      name: "Text",
      control: "text",
      description: "The full text (\`text\`). The sample sources only mark up the sample text.",
      table: {
        category: "Content"
      }
    },
    sources: {
      name: "Sources",
      control: {
        type: "range",
        min: 0,
        max: 2,
        step: 1
      },
      description: "How many of the sample passages are cited (\`citations\`). 0 shows the plain text with no sources link.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "2"
        }
      }
    },
    defaultOpen: {
      name: "Starts open",
      control: "boolean",
      description: "The sources list starts open (\`defaultOpen\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: ({
    text = SAMPLE_TEXT,
    sources = 2,
    defaultOpen = false
  }) => <div className="max-w-xl">
      {/* \`key\` remounts when the open state control changes. */}
      <Citation key={String(defaultOpen)} text={text} citations={SAMPLE_SOURCES.slice(0, sources)} defaultOpen={defaultOpen} />
    </div>
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,k as default};
