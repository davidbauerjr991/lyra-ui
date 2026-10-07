import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as i}from"./sparkline-BywDx1SH.js";import{C as h,T as b}from"./Sparkline.shared-BNMdzeh4.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chart-C8WwCP2A.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";const A={title:"Custom Primitives/Sparkline",component:i,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function m({trend:e="up",color:l="default",smooth:c=!1,strokeWidth:d=2,accessibility:n="label",accessibleLabel:p="Calls trend, last 12 hours"}){return a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(i,{data:b[e],colorVar:h[l],smooth:c,strokeWidth:d,decorative:n==="decorative","aria-label":n==="label"?p:void 0})})}const t={parameters:{controls:{include:["accessibility","accessibleLabel","trend","color","smooth","strokeWidth","Accessibility","Accessible label","Trend","Color","Smooth curve","Line width"],sort:"none"}},args:{accessibility:"label",accessibleLabel:"Calls trend, last 12 hours",trend:"up",color:"default",smooth:!1,strokeWidth:2},argTypes:{accessibility:{name:"Accessibility",control:"radio",options:["label","decorative"],description:"Label: announces a text alternative (`aria-label`). Decorative: hides the chart from assistive tech (`decorative`) when the value is already shown as text nearby.",table:{category:"Behavior"}},accessibleLabel:{name:"Accessible label",control:"text",description:"The text alternative announced for the chart (`aria-label`).",if:{arg:"accessibility",eq:"label"},table:{category:"Behavior"}},trend:{name:"Trend",control:"radio",options:["up","flat","down"],description:"Which sample series is plotted (`data`).",table:{category:"Content"}},color:{name:"Color",control:"radio",options:["default","success","warning","critical"],description:"Line and fill color (`colorVar`). Default is the active blue; success / warning / critical match DashboardCard's trend arrows.",table:{category:"Appearance"}},smooth:{name:"Smooth curve",control:"boolean",description:"Smoothed curve instead of straight segments between points (`smooth`).",table:{category:"Appearance"}},strokeWidth:{name:"Line width",control:"radio",options:[1,2,3,4],description:"Line stroke width in px (`strokeWidth`).",table:{category:"Appearance"}}},render:e=>a.jsx(m,{...e},JSON.stringify(e))};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so the
  // Docs page's autodocs table still lists every real Sparkline prop.
  // Storybook matches \`include\` against each control's display \`name\`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: ["accessibility", "accessibleLabel", "trend", "color", "smooth", "strokeWidth", "Accessibility", "Accessible label", "Trend", "Color", "Smooth curve", "Line width"],
      sort: "none"
    }
  },
  args: {
    accessibility: "label",
    accessibleLabel: "Calls trend, last 12 hours",
    trend: "up",
    color: "default",
    smooth: false,
    strokeWidth: 2
  },
  argTypes: {
    accessibility: {
      name: "Accessibility",
      control: "radio",
      options: ["label", "decorative"],
      description: "Label: announces a text alternative (\`aria-label\`). Decorative: hides the chart from assistive tech (\`decorative\`) when the value is already shown as text nearby.",
      table: {
        category: "Behavior"
      }
    },
    accessibleLabel: {
      name: "Accessible label",
      control: "text",
      description: "The text alternative announced for the chart (\`aria-label\`).",
      if: {
        arg: "accessibility",
        eq: "label"
      },
      table: {
        category: "Behavior"
      }
    },
    trend: {
      name: "Trend",
      control: "radio",
      options: ["up", "flat", "down"],
      description: "Which sample series is plotted (\`data\`).",
      table: {
        category: "Content"
      }
    },
    color: {
      name: "Color",
      control: "radio",
      options: ["default", "success", "warning", "critical"],
      description: "Line and fill color (\`colorVar\`). Default is the active blue; success / warning / critical match DashboardCard's trend arrows.",
      table: {
        category: "Appearance"
      }
    },
    smooth: {
      name: "Smooth curve",
      control: "boolean",
      description: "Smoothed curve instead of straight segments between points (\`smooth\`).",
      table: {
        category: "Appearance"
      }
    },
    strokeWidth: {
      name: "Line width",
      control: "radio",
      options: [1, 2, 3, 4],
      description: "Line stroke width in px (\`strokeWidth\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes.
  <SparklineDemo key={JSON.stringify(args)} {...args} />
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,A as default};
