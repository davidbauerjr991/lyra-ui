import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-DhMLlvMY.js";import{A as m,C as l}from"./Autocomplete.shared-BKCNgmH2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./clear-button-Cb_QiePp.js";import"./x-CzxgOx-T.js";import"./spinner-xIhFAlhc.js";import"./index-1evVQkiP.js";const Q={title:"Custom Primitives/Autocomplete",component:m,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function w({size:t="md",showAll:r=!0,disabledOption:h=!1,required:u=!1,fieldState:i="normal",loading:f=!1,filterOptions:y=!0}){var s;const b=l.map(e=>e.value==="jp"&&h?{...e,label:"Japan — (Unavailable)",disabled:!0}:e),[a,g]=O.useState();return n.jsxs("div",{className:"w-72",children:[n.jsx(m,{label:"Country",options:b,value:a,onChange:g,placeholder:r?"Search countries…":"Type to search…",showAllOnEmpty:r,required:u,disabled:i==="disabled",readonly:i==="readOnly",size:t,loading:f,filterOptions:y}),a&&n.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Selected: ",(s=l.find(e=>e.value===a))==null?void 0:s.label]})]})}const o={parameters:{controls:{include:["showAll","required","fieldState","disabledOption","size","loading","filterOptions"],sort:"none"}},args:{size:"md",showAll:!0,disabledOption:!1,required:!1,fieldState:"normal",loading:!1,filterOptions:!0},argTypes:{showAll:{name:"Show All On Empty",control:"boolean",description:"On (default): opens with the full option list before typing. Off: the dropdown stays empty until the user types a query.",table:{category:"Behavior"}},required:{name:"Required",control:"boolean",description:"Shows the required-field indicator on the label.",table:{category:"Behavior"}},fieldState:{name:"Field State",control:"radio",options:["normal","disabled","readOnly"],description:"Normal (editable), Disabled (non-interactive, muted), or Read Only (locked — shows the selected value without allowing changes).",table:{category:"Behavior"}},disabledOption:{name:"Disabled Option",control:"boolean",description:"Marks one option (Japan) as unselectable, to show the disabled-row treatment.",table:{category:"Content"}},loading:{name:"Loading",control:"boolean",description:"While the dropdown is open, shows a spinner and “Loading…” instead of the options, and screen readers hear “Loading…” (`loading`, `loadingMessage`). Open the field to see it.",table:{category:"Behavior"}},filterOptions:{name:"Filter Options",control:"boolean",description:"On (default): the field filters the options by what is typed. Off: every option stays listed, for results already filtered by a server (`filterOptions`). See Variants → Async Search.",table:{category:"Behavior"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Field height — sm (32px) for dense contexts, md (36px, default).",table:{category:"Appearance"}}},render:t=>n.jsx(w,{...t},JSON.stringify(t))};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so
  // the Docs page's autodocs table still lists every real Autocomplete
  // prop — only this story's own Controls panel is scoped down to the
  // handful of args its render function actually reads.
  parameters: {
    controls: {
      include: ["showAll", "required", "fieldState", "disabledOption", "size", "loading", "filterOptions"],
      sort: "none"
    }
  },
  args: {
    size: "md",
    showAll: true,
    disabledOption: false,
    required: false,
    fieldState: "normal",
    loading: false,
    filterOptions: true
  },
  argTypes: {
    showAll: {
      name: "Show All On Empty",
      control: "boolean",
      description: "On (default): opens with the full option list before typing. Off: the dropdown stays empty until the user types a query.",
      table: {
        category: "Behavior"
      }
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Shows the required-field indicator on the label.",
      table: {
        category: "Behavior"
      }
    },
    fieldState: {
      name: "Field State",
      control: "radio",
      options: ["normal", "disabled", "readOnly"],
      description: "Normal (editable), Disabled (non-interactive, muted), or Read Only (locked — shows the selected value without allowing changes).",
      table: {
        category: "Behavior"
      }
    },
    disabledOption: {
      name: "Disabled Option",
      control: "boolean",
      description: "Marks one option (Japan) as unselectable, to show the disabled-row treatment.",
      table: {
        category: "Content"
      }
    },
    loading: {
      name: "Loading",
      control: "boolean",
      description: "While the dropdown is open, shows a spinner and “Loading…” instead of the options, and screen readers hear “Loading…” (\`loading\`, \`loadingMessage\`). Open the field to see it.",
      table: {
        category: "Behavior"
      }
    },
    filterOptions: {
      name: "Filter Options",
      control: "boolean",
      description: "On (default): the field filters the options by what is typed. Off: every option stays listed, for results already filtered by a server (\`filterOptions\`). See Variants → Async Search.",
      table: {
        category: "Behavior"
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Field height — sm (32px) for dense contexts, md (36px, default).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo whenever a control changes — \`useState\`'s
  // initial value only applies on first mount.
  <AutocompleteDemo key={JSON.stringify(args)} {...args} />
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,Q as default};
