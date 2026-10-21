import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DhMLlvMY.js";import{T as r}from"./transfer-box-DQAlJmso.js";import{T as s,P as y,F as S,R as h,S as u}from"./TransferBox.shared-rP8REwuy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./search-input-B8DT-PCU.js";import"./clear-button-C7HPU1Rg.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./error-icon-solid-eVlwMcX6.js";import"./table-podQqpxA.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./chevron-down-gMYAX9-q.js";import"./select-BwiM5VQ2.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./popover-6UELhi_J.js";import"./index-DjOBIGyd.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./checkbox-KP4UZ6Eo.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-D4EbXLB3.js";import"./index-1evVQkiP.js";import"./badge-BpOJAIFg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./query-builder-DAaenB7i.js";import"./input-D4o1YJ5A.js";import"./filter-chip-D1EyXtgY.js";import"./toggle-group-B2Xa6rna.js";import"./kebab-menu-button-CK5VcSsn.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sliders-horizontal-DYIYVQYC.js";import"./copy-CtBWyGKZ.js";import"./plus-BKUBo5Qt.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";const ke={title:"Custom Primitives/TransferBox",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},x={none:[],few:S,several:y};function L({state:e="default",startingSelection:m="none",max:o=0,availableLabel:p="Available",selectedLabel:c="Selected",availableLabelTooltip:b=s}){const[d,v]=g.useState([...x[m]]);return l.jsx(r,{options:u,value:d,onChange:v,max:o>0?o:void 0,availableLabel:p,selectedLabel:c,availableLabelTooltip:b||void 0,disabled:e==="disabled",readonly:e==="read-only",error:e==="error"?h:void 0})}const t={args:{state:"default",startingSelection:"none",max:0,availableLabel:"Available",selectedLabel:"Selected",availableLabelTooltip:s},parameters:{controls:{include:["state","startingSelection","max","availableLabel","selectedLabel","availableLabelTooltip","State","Starting selection","Max selection","Available list title","Selected list title","Available list tooltip"],sort:"none"}},argTypes:{state:{name:"State",control:"radio",options:["default","error","disabled","read-only"],description:"Error shows an error message (`error`). Disabled blocks all interaction. Read-only shows the selection but blocks changes (`readonly`).",table:{category:"Behavior"}},startingSelection:{name:"Starting selection",control:"radio",options:["none","few","several"],description:"How many items start in the Selected list.",table:{category:"Behavior"}},max:{name:"Max selection",control:{type:"number",min:0},description:"Most items that can be selected. 0 means no limit (`max`).",table:{category:"Behavior"}},availableLabel:{name:"Available list title",control:"text",description:"Heading over the list of items still available (`availableLabel`).",table:{category:"Content"}},selectedLabel:{name:"Selected list title",control:"text",description:"Heading over the list of chosen items (`selectedLabel`).",table:{category:"Content"}},availableLabelTooltip:{name:"Available list tooltip",control:"text",description:"Help tooltip next to the Available heading (`availableLabelTooltip`). Empty for none.",table:{category:"Content"}}},render:e=>l.jsx(L,{...e},JSON.stringify(e))};var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const Me=["Default"];export{t as Default,Me as __namedExportsOrder,ke as default};
