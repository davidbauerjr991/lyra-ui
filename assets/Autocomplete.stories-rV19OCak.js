import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-DhMLlvMY.js";import{A as h,C as l}from"./Autocomplete.shared-DwIt5RQK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./clear-button-Cb_QiePp.js";import"./x-CzxgOx-T.js";import"./spinner-xIhFAlhc.js";import"./index-1evVQkiP.js";const ee={title:"Custom Primitives/Autocomplete",component:h,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function A({size:e="md",showAll:i=!0,disabledOption:g=!1,required:u=!1,fieldState:r="normal",loading:b=!1,filterOptions:y=!0,startingValue:s="none",label:f="Country",labelHelpText:O="",placeholder:w="",loadingMessage:x="Loading…"}){var d;const S=l.map(n=>n.value==="jp"&&g?{...n,label:"Japan — (Unavailable)",disabled:!0}:n),[a,v]=L.useState(s==="none"?void 0:s);return o.jsxs("div",{className:"w-72",children:[o.jsx(h,{label:f,labelHelpText:O||void 0,loadingMessage:x,options:S,value:a,onChange:v,placeholder:w||(i?"Search countries…":"Type to search…"),showAllOnEmpty:i,required:u,disabled:r==="disabled",readonly:r==="readOnly",size:e,loading:b,filterOptions:y}),a&&o.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Selected: ",(d=l.find(n=>n.value===a))==null?void 0:d.label]})]})}const t={parameters:{controls:{include:["fieldState","startingValue","required","label","labelHelpText","placeholder","showAll","disabledOption","loading","loadingMessage","filterOptions","size","Field State","Starting Value","Required","Label","Label Help Text","Placeholder","Show All On Empty","Disabled Option","Loading","Loading Message","Filter Options","Size"],sort:"none"}},args:{size:"md",showAll:!0,disabledOption:!1,required:!1,fieldState:"normal",loading:!1,filterOptions:!0,startingValue:"none",label:"Country",labelHelpText:"",placeholder:"",loadingMessage:"Loading…"},argTypes:{startingValue:{name:"Starting Value",control:"select",options:["none",...l.map(e=>e.value)],description:"Which option is selected when the field first renders (`value`).",table:{category:"Content"}},label:{name:"Label",control:"text",description:"Field label (`label`).",table:{category:"Content"}},labelHelpText:{name:"Label Help Text",control:"text",description:"Optional help text beside the label (`labelHelpText`). Leave empty for none.",table:{category:"Content"}},placeholder:{name:"Placeholder",control:"text",description:"Input placeholder (`placeholder`). Empty uses a default that follows Show All On Empty.",table:{category:"Content"}},loadingMessage:{name:"Loading Message",control:"text",description:"Text shown and announced while loading (`loadingMessage`).",if:{arg:"loading",truthy:!0},table:{category:"Content"}},showAll:{name:"Show All On Empty",control:"boolean",description:"On (default): opens with the full option list before typing. Off: the dropdown stays empty until the user types a query.",table:{category:"Behavior"}},required:{name:"Required",control:"boolean",description:"Shows the required-field indicator on the label.",table:{category:"Behavior"}},fieldState:{name:"Field State",control:"radio",options:["normal","disabled","readOnly"],description:"Normal (editable), Disabled (non-interactive, muted), or Read Only (locked — shows the selected value without allowing changes).",table:{category:"Behavior"}},disabledOption:{name:"Disabled Option",control:"boolean",description:"Marks one option (Japan) as unselectable, to show the disabled-row treatment.",table:{category:"Content"}},loading:{name:"Loading",control:"boolean",description:"While the dropdown is open, shows a spinner and “Loading…” instead of the options, and screen readers hear “Loading…” (`loading`, `loadingMessage`). Open the field to see it.",table:{category:"Behavior"}},filterOptions:{name:"Filter Options",control:"boolean",description:"On (default): the field filters the options by what is typed. Off: every option stays listed, for results already filtered by a server (`filterOptions`). See Variants → Async Search.",table:{category:"Behavior"}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Field height — sm (32px) for dense contexts, md (36px, default).",table:{category:"Appearance"}}},render:e=>o.jsx(A,{...e},JSON.stringify(e))};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so
  // the Docs page's autodocs table still lists every real Autocomplete
  // prop — only this story's own Controls panel is scoped down to the
  // handful of args its render function actually reads.
  parameters: {
    controls: {
      include: ["fieldState", "startingValue", "required", "label", "labelHelpText", "placeholder", "showAll", "disabledOption", "loading", "loadingMessage", "filterOptions", "size", "Field State", "Starting Value", "Required", "Label", "Label Help Text", "Placeholder", "Show All On Empty", "Disabled Option", "Loading", "Loading Message", "Filter Options", "Size"],
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
    filterOptions: true,
    startingValue: "none",
    label: "Country",
    labelHelpText: "",
    placeholder: "",
    loadingMessage: "Loading…"
  },
  argTypes: {
    startingValue: {
      name: "Starting Value",
      control: "select",
      options: ["none", ...COUNTRIES.map(c => c.value)],
      description: "Which option is selected when the field first renders (\`value\`).",
      table: {
        category: "Content"
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "Field label (\`label\`).",
      table: {
        category: "Content"
      }
    },
    labelHelpText: {
      name: "Label Help Text",
      control: "text",
      description: "Optional help text beside the label (\`labelHelpText\`). Leave empty for none.",
      table: {
        category: "Content"
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Input placeholder (\`placeholder\`). Empty uses a default that follows Show All On Empty.",
      table: {
        category: "Content"
      }
    },
    loadingMessage: {
      name: "Loading Message",
      control: "text",
      description: "Text shown and announced while loading (\`loadingMessage\`).",
      if: {
        arg: "loading",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const ne=["Default"];export{t as Default,ne as __namedExportsOrder,ee as default};
