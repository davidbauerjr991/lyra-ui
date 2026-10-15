import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{T as l}from"./tag-picker-B_PqrBzb.js";import{T as m}from"./TagPicker.shared-Coz7l34J.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./actions-LJrS1Xfw.js";import"./utils-BLSKlp9E.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./popover-DnJ7ZSnw.js";import"./index-BY5kmD2Q.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-ChWz-swr.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./checkbox-wvqFL4jd.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./tag-CePNn257.js";const X={title:"Custom Primitives/TagPicker",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function c({startOpen:t=!1,startingApplied:a="some",triggerLabel:s="Add tag",placement:p="bottom",triggerSize:g="sm"}){return i.jsx(m,{startOpen:t,startingApplied:a,triggerLabel:s,placement:p,triggerSize:g})}const e={args:{startOpen:!1,startingApplied:"some",triggerLabel:"Add tag",placement:"bottom",triggerSize:"sm"},parameters:{controls:{include:["startOpen","startingApplied","triggerLabel","placement","triggerSize","Starts open","Starting tags","Trigger label","List placement","Trigger size"],sort:"none"}},argTypes:{startOpen:{name:"Starts open",control:"boolean",description:"Whether the tag list is open on first render (`open`).",table:{category:"Behavior"}},startingApplied:{name:"Starting tags",control:"radio",options:["none","some","all"],description:"Which tags are already applied, shown checked in the list and as pills.",table:{category:"Behavior"}},triggerLabel:{name:"Trigger label",control:"text",description:"Tooltip and accessible name of the trigger button (`triggerLabel`).",table:{category:"Content"}},placement:{name:"List placement",control:"radio",options:["top","bottom","left","right"],description:"Which side of the trigger the list opens on (`placement`).",table:{category:"Appearance"}},triggerSize:{name:"Trigger size",control:"radio",options:["sm","default","lg","xl"],description:"Size of the trigger button (`triggerSize`).",table:{category:"Appearance"}}},render:t=>i.jsx(c,{...t},JSON.stringify(t))};var r,n,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
