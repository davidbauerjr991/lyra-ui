import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{T as l}from"./tag-picker-Cd7vzLWc.js";import{T as m}from"./TagPicker.shared-CpreYjle.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./actions-BtK16UWn.js";import"./utils-BLSKlp9E.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./button-DxuJ7r2Z.js";import"./index-1evVQkiP.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-down-gMYAX9-q.js";import"./popover-6UELhi_J.js";import"./index-DjOBIGyd.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-KP4UZ6Eo.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./tag-rDr5isNl.js";const Z={title:"Custom Primitives/TagPicker",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function c({startOpen:t=!1,startingApplied:a="some",triggerLabel:s="Add tag",placement:p="bottom",triggerSize:g="sm"}){return i.jsx(m,{startOpen:t,startingApplied:a,triggerLabel:s,placement:p,triggerSize:g})}const e={args:{startOpen:!1,startingApplied:"some",triggerLabel:"Add tag",placement:"bottom",triggerSize:"sm"},parameters:{controls:{include:["startOpen","startingApplied","triggerLabel","placement","triggerSize","Starts open","Starting tags","Trigger label","List placement","Trigger size"],sort:"none"}},argTypes:{startOpen:{name:"Starts open",control:"boolean",description:"Whether the tag list is open on first render (`open`).",table:{category:"Behavior"}},startingApplied:{name:"Starting tags",control:"radio",options:["none","some","all"],description:"Which tags are already applied, shown checked in the list and as pills.",table:{category:"Behavior"}},triggerLabel:{name:"Trigger label",control:"text",description:"Tooltip and accessible name of the trigger button (`triggerLabel`).",table:{category:"Content"}},placement:{name:"List placement",control:"radio",options:["top","bottom","left","right"],description:"Which side of the trigger the list opens on (`placement`).",table:{category:"Appearance"}},triggerSize:{name:"Trigger size",control:"radio",options:["sm","default","lg","xl"],description:"Size of the trigger button (`triggerSize`).",table:{category:"Appearance"}}},render:t=>i.jsx(c,{...t},JSON.stringify(t))};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    startOpen: false,
    startingApplied: "some",
    triggerLabel: "Add tag",
    placement: "bottom",
    triggerSize: "sm"
  },
  parameters: {
    controls: {
      include: ["startOpen", "startingApplied", "triggerLabel", "placement", "triggerSize", "Starts open", "Starting tags", "Trigger label", "List placement", "Trigger size"],
      sort: "none"
    }
  },
  argTypes: {
    startOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the tag list is open on first render (\`open\`).",
      table: {
        category: "Behavior"
      }
    },
    startingApplied: {
      name: "Starting tags",
      control: "radio",
      options: ["none", "some", "all"],
      description: "Which tags are already applied, shown checked in the list and as pills.",
      table: {
        category: "Behavior"
      }
    },
    triggerLabel: {
      name: "Trigger label",
      control: "text",
      description: "Tooltip and accessible name of the trigger button (\`triggerLabel\`).",
      table: {
        category: "Content"
      }
    },
    placement: {
      name: "List placement",
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "Which side of the trigger the list opens on (\`placement\`).",
      table: {
        category: "Appearance"
      }
    },
    triggerSize: {
      name: "Trigger size",
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      description: "Size of the trigger button (\`triggerSize\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <TagPickerPlayground key={JSON.stringify(args)} {...args} />
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
