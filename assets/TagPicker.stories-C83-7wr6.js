import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{T as l}from"./tag-picker-DzadWJ3R.js";import{T as m}from"./TagPicker.shared-Bwo293pN.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./actions-BGguinZO.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-CfX6-3Wq.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./tag-D8yJ2lBD.js";const X={title:"Custom Primitives/TagPicker",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function c({startOpen:t=!1,startingApplied:a="some",triggerLabel:s="Add tag",placement:p="bottom",triggerSize:g="sm"}){return i.jsx(m,{startOpen:t,startingApplied:a,triggerLabel:s,placement:p,triggerSize:g})}const e={args:{startOpen:!1,startingApplied:"some",triggerLabel:"Add tag",placement:"bottom",triggerSize:"sm"},parameters:{controls:{include:["startOpen","startingApplied","triggerLabel","placement","triggerSize","Starts open","Starting tags","Trigger label","List placement","Trigger size"],sort:"none"}},argTypes:{startOpen:{name:"Starts open",control:"boolean",description:"Whether the tag list is open on first render (`open`).",table:{category:"Behavior"}},startingApplied:{name:"Starting tags",control:"radio",options:["none","some","all"],description:"Which tags are already applied, shown checked in the list and as pills.",table:{category:"Behavior"}},triggerLabel:{name:"Trigger label",control:"text",description:"Tooltip and accessible name of the trigger button (`triggerLabel`).",table:{category:"Content"}},placement:{name:"List placement",control:"radio",options:["top","bottom","left","right"],description:"Which side of the trigger the list opens on (`placement`).",table:{category:"Appearance"}},triggerSize:{name:"Trigger size",control:"radio",options:["sm","default","lg","xl"],description:"Size of the trigger button (`triggerSize`).",table:{category:"Appearance"}}},render:t=>i.jsx(c,{...t},JSON.stringify(t))};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,X as default};
