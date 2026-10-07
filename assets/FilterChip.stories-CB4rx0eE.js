import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DhMLlvMY.js";import{F as h}from"./filter-chip-CakUwLBw.js";import{B as w}from"./button-CLz1-b9g.js";import{S as l,s as p,a as C}from"./FilterChip.shared-B1Ivgqty.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./error-icon-solid-eVlwMcX6.js";import"./select-Ct-JPb8f.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-pcZVUfq6.js";import"./index-DGBzHazk.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./tooltip-DKTByY8R.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./badge-BIS9woDA.js";const me={title:"Custom Primitives/FilterChip",component:h,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function A({state:e="default",startingSelection:a="none",removable:g=!1,operators:t=!1,label:b="Filter",dropdownAlign:u="left"}){const[v,i]=r.useState(a==="some"?l:[]),[f,S]=r.useState(p[0].value),[y,s]=r.useState(!1);return y?n.jsx(w,{variant:"ghost",size:"sm",onClick:()=>{s(!1),i(a==="some"?l:[])},children:"Chip removed — bring it back"}):n.jsx(h,{label:b,options:C,selectedValues:v,onSelectionChange:i,operators:t?p:void 0,selectedOperator:t?f:void 0,onOperatorChange:t?S:void 0,error:e==="error",disabled:e==="disabled",onRemove:g?()=>s(!0):void 0,dropdownAlign:u})}const o={args:{state:"default",startingSelection:"none",removable:!1,operators:!1,label:"Filter",dropdownAlign:"left"},parameters:{controls:{include:["state","startingSelection","removable","operators","label","dropdownAlign","State","Starting selection","Removable","Operator selector","Label","Dropdown alignment"],sort:"none"}},argTypes:{state:{name:"State",control:"radio",options:["default","error","disabled"],description:"Normal, error (red styling and icon, `error`) or disabled (`disabled`).",table:{category:"Behavior"}},startingSelection:{name:"Starting selection",control:"radio",options:["none","some"],description:"Whether the chip starts empty or with values already chosen (active styling).",table:{category:"Behavior"}},removable:{name:"Removable",control:"boolean",description:"Shows a remove (×) button on the chip (`onRemove`).",table:{category:"Behavior"}},operators:{name:"Operator selector",control:"boolean",description:"Adds an operator picker (Contains, Equals, Starts With) between the label and value (`operators`).",table:{category:"Behavior"}},label:{name:"Label",control:"text",description:"Filter name shown on the chip, e.g. Status or Region (`label`).",table:{category:"Content"}},dropdownAlign:{name:"Dropdown alignment",control:"radio",options:["left","right"],description:"Which edge of the chip the dropdown lines up with. Use right for a chip near the right edge of its container (`dropdownAlign`).",table:{category:"Appearance"}}},render:e=>n.jsx(A,{...e},JSON.stringify(e))};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingSelection: "none",
    removable: false,
    operators: false,
    label: "Filter",
    dropdownAlign: "left"
  },
  parameters: {
    controls: {
      include: ["state", "startingSelection", "removable", "operators", "label", "dropdownAlign", "State", "Starting selection", "Removable", "Operator selector", "Label", "Dropdown alignment"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "error", "disabled"],
      description: "Normal, error (red styling and icon, \`error\`) or disabled (\`disabled\`).",
      table: {
        category: "Behavior"
      }
    },
    startingSelection: {
      name: "Starting selection",
      control: "radio",
      options: ["none", "some"],
      description: "Whether the chip starts empty or with values already chosen (active styling).",
      table: {
        category: "Behavior"
      }
    },
    removable: {
      name: "Removable",
      control: "boolean",
      description: "Shows a remove (×) button on the chip (\`onRemove\`).",
      table: {
        category: "Behavior"
      }
    },
    operators: {
      name: "Operator selector",
      control: "boolean",
      description: "Adds an operator picker (Contains, Equals, Starts With) between the label and value (\`operators\`).",
      table: {
        category: "Behavior"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Filter name shown on the chip, e.g. Status or Region (\`label\`).",
      table: {
        category: "Content"
      }
    },
    dropdownAlign: {
      name: "Dropdown alignment",
      control: "radio",
      options: ["left", "right"],
      description: "Which edge of the chip the dropdown lines up with. Use right for a chip near the right edge of its container (\`dropdownAlign\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <FilterChipDemo key={JSON.stringify(args)} {...args} />
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const de=["Default"];export{o as Default,de as __namedExportsOrder,me as default};
