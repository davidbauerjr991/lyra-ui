import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DhMLlvMY.js";import{S as p,a as k}from"./slider-CxnAySKk.js";import{S as g}from"./Slider.shared-CjwlJCEw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-pcZVUfq6.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-CylpBFcA.js";import"./index-4W-125c9.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const _={title:"Headless Primitives/Slider",component:p,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function S({mode:n="single",disabled:s=!1,showTicks:r=!0,scale:h="0-10-by-1",label:u}){const a=g[h],[l,y]=c.useState(a.single),[t,x]=c.useState(a.range),i=u||a.label;return e.jsx("div",{className:"w-full max-w-xl px-4 py-6",children:n==="single"?e.jsxs(e.Fragment,{children:[e.jsx(p,{label:i,value:l,onChange:y,min:a.min,max:a.max,step:a.step,disabled:s,showTicks:r}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-4",children:["Value: ",l]})]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{label:i,value:t,onChange:x,min:a.min,max:a.max,step:a.step,disabled:s,showTicks:r}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-4",children:["Range: ",t[0]," – ",t[1]]})]})})}const o={args:{mode:"single",disabled:!1,showTicks:!0,scale:"0-10-by-1",label:""},parameters:{controls:{include:["mode","disabled","showTicks","scale","label","Mode","Disabled","Tick marks","Scale","Label"],sort:"none"}},argTypes:{mode:{name:"Mode",control:"radio",options:["single","range"],description:"One thumb (`Slider`) or two thumbs for a low–high range (`SliderRange`).",table:{category:"Behavior"}},disabled:{name:"Disabled",control:"boolean",description:"Locks the thumbs (`disabled`).",table:{category:"Behavior"}},showTicks:{name:"Tick marks",control:"boolean",description:"Shows tick marks and numbers under the track (`showTicks`).",table:{category:"Behavior"}},scale:{name:"Scale",control:"radio",options:Object.keys(g),description:"The limits and step size: 0 to 10 by 1, or 0 to 5 by 0.5 (`min`, `max`, `step`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Text above the slider (`label`). Leave empty to use the scale's own label.",table:{category:"Content"}}},render:n=>e.jsx(S,{...n},JSON.stringify(n))};var m,d,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mode: "single",
    disabled: false,
    showTicks: true,
    scale: "0-10-by-1",
    label: ""
  },
  parameters: {
    controls: {
      include: ["mode", "disabled", "showTicks", "scale", "label", "Mode", "Disabled", "Tick marks", "Scale", "Label"],
      sort: "none"
    }
  },
  argTypes: {
    mode: {
      name: "Mode",
      control: "radio",
      options: ["single", "range"],
      description: "One thumb (\`Slider\`) or two thumbs for a low–high range (\`SliderRange\`).",
      table: {
        category: "Behavior"
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Locks the thumbs (\`disabled\`).",
      table: {
        category: "Behavior"
      }
    },
    showTicks: {
      name: "Tick marks",
      control: "boolean",
      description: "Shows tick marks and numbers under the track (\`showTicks\`).",
      table: {
        category: "Behavior"
      }
    },
    scale: {
      name: "Scale",
      control: "radio",
      options: Object.keys(SCALES),
      description: "The limits and step size: 0 to 10 by 1, or 0 to 5 by 0.5 (\`min\`, \`max\`, \`step\`).",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Text above the slider (\`label\`). Leave empty to use the scale's own label.",
      table: {
        category: "Content"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <SliderDemo key={JSON.stringify(args)} {...args} />
}`,...(b=(d=o.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,_ as default};
