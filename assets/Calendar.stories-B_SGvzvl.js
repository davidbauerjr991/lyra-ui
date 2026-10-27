import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./calendar-D5XP0l57.js";import{C as l}from"./Calendar.shared-BhBcezJF.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./chevron-left-CtyUClJQ.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-right-BP9ksYh_.js";const D={title:"Headless Primitives/Calendar",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},a={args:{mode:"single",defaultMonth:void 0,disablePast:!1,size:"md",showMarkers:!1},parameters:{controls:{include:["Mode","Disable past dates","Starting month","Size","Show date markers","mode","disablePast","defaultMonth","size","showMarkers"],sort:"none"}},argTypes:{mode:{name:"Mode",control:"radio",options:["single","range","week"],labels:{single:"Single date",range:"Date range",week:"Week"},description:"What a click selects: one date, a start–end range, or a whole week.",table:{category:"Behavior",defaultValue:{summary:"single"}}},disablePast:{name:"Disable past dates",control:"boolean",description:"Blocks every date before today (`disabled={{ before: today }}`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["md","lg"],description:"Day-cell size: medium (36px, default) or large (40px, with a taller month/year button) (`size`).",table:{category:"Appearance",defaultValue:{summary:"md"}}},showMarkers:{name:"Show date markers",control:"boolean",description:"Puts a colored dot under sample dates this month (`modifiers`). Each has a label that screen readers read after the date.",table:{category:"Content",defaultValue:{summary:"false"}}},defaultMonth:{name:"Starting month",control:"date",description:"Month shown first. Leave empty to start on the current month.",table:{category:"Content"}}},render:e=>r.jsx(l,{mode:e.mode??"single",defaultMonth:e.defaultMonth!=null?new Date(e.defaultMonth):void 0,disablePast:e.disablePast,size:e.size,showMarkers:e.showMarkers},JSON.stringify(e))};var t,n,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    mode: "single",
    defaultMonth: undefined,
    disablePast: false,
    size: "md",
    showMarkers: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Mode", "Disable past dates", "Starting month", "Size", "Show date markers", "mode", "disablePast", "defaultMonth", "size", "showMarkers"],
      sort: "none"
    }
  },
  argTypes: {
    mode: {
      name: "Mode",
      control: "radio",
      options: ["single", "range", "week"],
      labels: {
        single: "Single date",
        range: "Date range",
        week: "Week"
      },
      description: "What a click selects: one date, a start–end range, or a whole week.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "single"
        }
      }
    },
    disablePast: {
      name: "Disable past dates",
      control: "boolean",
      description: "Blocks every date before today (\`disabled={{ before: today }}\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["md", "lg"],
      description: "Day-cell size: medium (36px, default) or large (40px, with a taller month/year button) (\`size\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    showMarkers: {
      name: "Show date markers",
      control: "boolean",
      description: "Puts a colored dot under sample dates this month (\`modifiers\`). Each has a label that screen readers read after the date.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    defaultMonth: {
      name: "Starting month",
      control: "date",
      description: "Month shown first. Leave empty to start on the current month.",
      table: {
        category: "Content"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — each mode has its own
  // initial selection, which only applies on first mount.
  <CalendarDemo key={JSON.stringify(args)} mode={args.mode ?? "single"} defaultMonth={args.defaultMonth != null ? new Date(args.defaultMonth) : undefined} disablePast={args.disablePast} size={args.size} showMarkers={args.showMarkers} />
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,D as default};
