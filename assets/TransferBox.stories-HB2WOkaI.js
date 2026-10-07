import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DhMLlvMY.js";import{T as r}from"./transfer-box-CuScf7nw.js";import{T as s,P as y,F as S,R as h,S as u}from"./TransferBox.shared-rP8REwuy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./search-input-DbdcjRuV.js";import"./clear-button-Cb_QiePp.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./error-icon-solid-eVlwMcX6.js";import"./table-D1rGpBC3.js";import"./select-Ct-JPb8f.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./input-CHxvM1hc.js";import"./filter-chip-CakUwLBw.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";const Le={title:"Custom Primitives/TransferBox",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},x={none:[],few:S,several:y};function L({state:e="default",startingSelection:m="none",max:a=0,availableLabel:p="Available",selectedLabel:c="Selected",availableLabelTooltip:b=s}){const[d,v]=g.useState([...x[m]]);return i.jsx(r,{options:u,value:d,onChange:v,max:a>0?a:void 0,availableLabel:p,selectedLabel:c,availableLabelTooltip:b||void 0,disabled:e==="disabled",readonly:e==="read-only",error:e==="error"?h:void 0})}const t={args:{state:"default",startingSelection:"none",max:0,availableLabel:"Available",selectedLabel:"Selected",availableLabelTooltip:s},parameters:{controls:{include:["state","startingSelection","max","availableLabel","selectedLabel","availableLabelTooltip","State","Starting selection","Max selection","Available list title","Selected list title","Available list tooltip"],sort:"none"}},argTypes:{state:{name:"State",control:"radio",options:["default","error","disabled","read-only"],description:"Error shows an error message (`error`). Disabled blocks all interaction. Read-only shows the selection but blocks changes (`readonly`).",table:{category:"Behavior"}},startingSelection:{name:"Starting selection",control:"radio",options:["none","few","several"],description:"How many items start in the Selected list.",table:{category:"Behavior"}},max:{name:"Max selection",control:{type:"number",min:0},description:"Most items that can be selected. 0 means no limit (`max`).",table:{category:"Behavior"}},availableLabel:{name:"Available list title",control:"text",description:"Heading over the list of items still available (`availableLabel`).",table:{category:"Content"}},selectedLabel:{name:"Selected list title",control:"text",description:"Heading over the list of chosen items (`selectedLabel`).",table:{category:"Content"}},availableLabelTooltip:{name:"Available list tooltip",control:"text",description:"Help tooltip next to the Available heading (`availableLabelTooltip`). Empty for none.",table:{category:"Content"}}},render:e=>i.jsx(L,{...e},JSON.stringify(e))};var o,n,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    state: "default",
    startingSelection: "none",
    max: 0,
    availableLabel: "Available",
    selectedLabel: "Selected",
    availableLabelTooltip: TOOLTIP
  },
  parameters: {
    controls: {
      include: ["state", "startingSelection", "max", "availableLabel", "selectedLabel", "availableLabelTooltip", "State", "Starting selection", "Max selection", "Available list title", "Selected list title", "Available list tooltip"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "error", "disabled", "read-only"],
      description: "Error shows an error message (\`error\`). Disabled blocks all interaction. Read-only shows the selection but blocks changes (\`readonly\`).",
      table: {
        category: "Behavior"
      }
    },
    startingSelection: {
      name: "Starting selection",
      control: "radio",
      options: ["none", "few", "several"],
      description: "How many items start in the Selected list.",
      table: {
        category: "Behavior"
      }
    },
    max: {
      name: "Max selection",
      control: {
        type: "number",
        min: 0
      },
      description: "Most items that can be selected. 0 means no limit (\`max\`).",
      table: {
        category: "Behavior"
      }
    },
    availableLabel: {
      name: "Available list title",
      control: "text",
      description: "Heading over the list of items still available (\`availableLabel\`).",
      table: {
        category: "Content"
      }
    },
    selectedLabel: {
      name: "Selected list title",
      control: "text",
      description: "Heading over the list of chosen items (\`selectedLabel\`).",
      table: {
        category: "Content"
      }
    },
    availableLabelTooltip: {
      name: "Available list tooltip",
      control: "text",
      description: "Help tooltip next to the Available heading (\`availableLabelTooltip\`). Empty for none.",
      table: {
        category: "Content"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <TransferBoxDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const fe=["Default"];export{t as Default,fe as __namedExportsOrder,Le as default};
