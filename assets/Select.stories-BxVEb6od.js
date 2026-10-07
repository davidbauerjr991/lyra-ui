import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-DhMLlvMY.js";import{S as c}from"./select-Ct-JPb8f.js";import{L as $}from"./label-amkU61wz.js";import{B as E}from"./button-CLz1-b9g.js";import{m as M,s as K,H as Q,E as Y}from"./Select.shared-DlcXxgem.js";import{P as ee}from"./pencil-IFm_bK0G.js";import{S as te}from"./settings-B3RqFsd1.js";import{C as ne}from"./copy-CtBWyGKZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-pcZVUfq6.js";import"./index-DGBzHazk.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./tooltip-DKTByY8R.js";import"./utils-BLSKlp9E.js";import"./error-icon-solid-eVlwMcX6.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./spinner-xIhFAlhc.js";import"./index-1evVQkiP.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./circle-help-DYnzmdO5.js";import"./badge-BIS9woDA.js";const Ze={title:"Headless Primitives/Select",component:c,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},size:{control:"radio",options:["sm","md"]}}},oe={sm:"icon-sm",default:"icon-md",lg:"icon-lg",xl:"icon-xl"},ae=[ee,te,ne];function se({label:a="Input Label",placeholder:T="Select...",multiple:n=!1,searchable:p=!1,showSelectAll:z=!1,disabled:d=!1,readonly:m=!1,required:h=!1,help:N=!1,error:O=!1,size:P="md",maxWidth:I=!1,withButtons:H=!1,buttonsPosition:s="left",buttonVariant:f="ghost",iconButtons:D=!0,buttonSize:y="sm",buttonCount:g=2,loading:q=!1,empty:j=!1,loadError:b=!1,emptyMessage:W="",noResultsMessage:F="",groups:_=!1,triggerDisplay:U="count",applyFooter:G=!1,showClear:J=!1,showCount:X=!1,noResults:l=!1,openList:Z=!1}){const w=C.useRef(null);C.useEffect(()=>{if(!Z&&!l)return;const o=setTimeout(()=>{var V;const t=(V=w.current)==null?void 0:V.querySelector('[role="combobox"], button[aria-haspopup]');t==null||t.click(),l&&setTimeout(()=>{var A,v;const u=document.querySelector('input[aria-label="Search options"]');u&&((v=(A=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))==null?void 0:A.set)==null||v.call(u,"zzz"),u.dispatchEvent(new Event("input",{bubbles:!0})))},150)},100);return()=>clearTimeout(o)},[]);const S=N?Q:void 0,i=n||p||l?M:K,x={options:j?[]:_?i.map((o,t)=>({...o,group:`Group ${Math.floor(t/(i===M?5:3))+1}`})):i,loading:q,loadError:b?"Couldn't load options.":void 0,onRetry:b?()=>{}:void 0,emptyMessage:W||void 0,noResultsMessage:F||void 0,triggerDisplay:n?U:void 0,applyFooter:n&&G,showClear:n&&J,showCount:n&&X,placeholder:T||void 0,multiple:n,searchable:p||l,showSelectAll:n&&z,disabled:d,readonly:m,size:P,error:O?Y:void 0},B=()=>D?ae.slice(0,g).map((o,t)=>e.jsx(E,{variant:f,size:oe[y],title:"Placeholder action",children:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5})},t)):Array.from({length:g}).map((o,t)=>e.jsx(E,{variant:f,size:y,children:"Action"},t));return e.jsx("div",{ref:w,className:I?"min-w-[240px] max-w-[320px]":void 0,children:H?e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx($,{label:a,required:h,labelHelpText:S,disabled:d,readonly:m}),e.jsxs("div",{className:"flex items-start gap-0.5",children:[(s==="left"||s==="both")&&B(),e.jsx(c,{...x,className:"flex-1"}),(s==="right"||s==="both")&&B()]})]}):e.jsx(c,{...x,label:a,labelHelpText:S,required:h})})}const r={render:a=>e.jsx(se,{...a},JSON.stringify(a)),args:{label:"Input Label",placeholder:"Select...",multiple:!1,searchable:!1,showSelectAll:!1,disabled:!1,readonly:!1,required:!1,help:!1,error:!1,size:"md",maxWidth:!1,withButtons:!1,buttonsPosition:"left",buttonVariant:"ghost",iconButtons:!0,buttonSize:"sm",buttonCount:2,loading:!1,empty:!1,loadError:!1,emptyMessage:"",noResultsMessage:"",groups:!1,triggerDisplay:"count",applyFooter:!1,showClear:!1,showCount:!1,noResults:!1,openList:!1},parameters:{controls:{include:["Multiple","Searchable","Show select all","Show clear","Show count","Disabled","Read-only","Required","Label","Placeholder","Help text","Error","Size","Max width","With buttons","Buttons position","Button type","Icon buttons","Button size","Button count","Loading","Empty list","Load error","Empty message","No results message","No results","Option groups","Trigger shows","Apply / Cancel footer","Open list","multiple","searchable","showSelectAll","showClear","showCount","disabled","readonly","required","label","placeholder","help","error","size","maxWidth","withButtons","buttonsPosition","buttonVariant","iconButtons","buttonSize","buttonCount","loading","empty","loadError","emptyMessage","noResultsMessage","noResults","groups","triggerDisplay","applyFooter","openList"],sort:"none"}},argTypes:{loading:{name:"Loading",control:"boolean",description:"Shows a spinner row in the open list (`loading`).",table:{category:"States",defaultValue:{summary:"false"}}},empty:{name:"Empty list",control:"boolean",description:"Passes no options, so the open list shows the empty message.",table:{category:"States",defaultValue:{summary:"false"}}},loadError:{name:"Load error",control:"boolean",description:"Replaces the list with an error and a Retry button (`loadError`, `onRetry`).",table:{category:"States",defaultValue:{summary:"false"}}},emptyMessage:{name:"Empty message",control:"text",description:'Text for an empty list (`emptyMessage`). Blank uses "No results found".',table:{category:"States",defaultValue:{summary:"No results found"}}},noResultsMessage:{name:"No results message",control:"text",description:'Text when a search matches nothing (`noResultsMessage`). Turn on Searchable, open it and type something that doesn\'t match. Blank uses "No results found".',table:{category:"States",defaultValue:{summary:"No results found"}}},noResults:{name:"No results",control:"boolean",description:"Turns on search and types text that matches nothing, so the list shows the no-results message (`noResultsMessage`).",table:{category:"States",defaultValue:{summary:"false"}}},openList:{name:"Open list",control:"boolean",description:"Story only: opens the dropdown when the story loads, so the list states are visible without clicking.",table:{category:"States",defaultValue:{summary:"false"}}},groups:{name:"Option groups",control:"boolean",description:"Puts options under group headings (`group` on each option).",table:{category:"Content",defaultValue:{summary:"false"}}},triggerDisplay:{name:"Trigger shows",control:"radio",options:["count","values"],labels:{count:"Count (3 selected)",values:"Values (Item 1, Item 2 +1)"},description:"How a multi-select summarises two or more picks (`triggerDisplay`). Pick a few options to see it.",if:{arg:"multiple",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"count"}}},showClear:{name:"Show clear",control:"boolean",description:"Adds a Clear button that unselects everything (`showClear`). It sits on the Select All row and appears once something is selected.",if:{arg:"multiple",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"false"}}},showCount:{name:"Show count",control:"boolean",description:'Adds an "N items | M selected" line at the bottom of the dropdown (`showCount`). Pick a few options to watch it change.',if:{arg:"multiple",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"false"}}},applyFooter:{name:"Apply / Cancel footer",control:"boolean",description:"Holds changes until Apply is pressed; Cancel, Escape or clicking outside discards them (`applyFooter`).",if:{arg:"multiple",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"false"}}},multiple:{name:"Multiple",control:"boolean",description:"Lets people pick more than one option (`multiple`). Uses a longer option list.",table:{category:"Behavior",defaultValue:{summary:"false"}}},searchable:{name:"Searchable",control:"boolean",description:"Adds a search field to the dropdown (`searchable`). Uses a longer option list.",table:{category:"Behavior",defaultValue:{summary:"false"}}},showSelectAll:{name:"Show select all",control:"boolean",description:"Adds a “select all” checkbox (`showSelectAll`). Only works with Multiple.",if:{arg:"multiple",truthy:!0},table:{category:"Behavior",defaultValue:{summary:"false"}}},disabled:{name:"Disabled",control:"boolean",description:"Dims the field and stops it opening.",table:{category:"Behavior",defaultValue:{summary:"false"}}},readonly:{name:"Read-only",control:"boolean",description:"Mutes the field and stops it opening. Hides the required asterisk.",table:{category:"Behavior",defaultValue:{summary:"false"}}},required:{name:"Required",control:"boolean",description:"Adds a red asterisk after the label.",table:{category:"Behavior",defaultValue:{summary:"false"}}},label:{name:"Label",control:"text",description:"The label above the field.",table:{category:"Content",defaultValue:{summary:"Input Label"}}},placeholder:{name:"Placeholder",control:"text",description:"Text shown while nothing is selected. Leave empty for the default.",table:{category:"Content",defaultValue:{summary:"Select..."}}},help:{name:"Help text",control:"boolean",description:"Info icon with a tooltip next to the label (`labelHelpText`).",table:{category:"Content",defaultValue:{summary:"false"}}},error:{name:"Error",control:"boolean",description:"Shows an error message under the field and turns the border red (`error`).",table:{category:"Content",defaultValue:{summary:"false"}}},size:{name:"Size",control:"radio",options:["sm","md"],description:"Height of the closed field: sm 32px for dense toolbars, md 36px.",table:{category:"Appearance",defaultValue:{summary:"md"}}},maxWidth:{name:"Max width",control:"boolean",description:"Off: full width. On: between 240px and 320px.",table:{category:"Appearance",defaultValue:{summary:"false"}}},withButtons:{name:"With buttons",control:"boolean",description:"Places placeholder buttons beside the field.",table:{category:"Appearance",defaultValue:{summary:"false"}}},buttonsPosition:{name:"Buttons position",control:"radio",options:["left","right","both"],description:"Which side of the field the buttons sit on.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"left"}}},buttonVariant:{name:"Button type",control:"select",options:["default","destructive","warning","success","outline","ghost"],description:"Button style.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"ghost"}}},iconButtons:{name:"Icon buttons",control:"boolean",description:"Icon-only buttons instead of “Action” text buttons.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"true"}}},buttonSize:{name:"Button size",control:"radio",options:["sm","default","lg","xl"],description:"Button size.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"sm"}}},buttonCount:{name:"Button count",control:"radio",options:[1,2,3],description:"How many buttons to show.",if:{arg:"withButtons",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"2"}}}}};var R,k,L;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <SelectDemo key={JSON.stringify(args)} {...args} />,
  args: {
    label: "Input Label",
    placeholder: "Select...",
    multiple: false,
    searchable: false,
    showSelectAll: false,
    disabled: false,
    readonly: false,
    required: false,
    help: false,
    error: false,
    size: "md",
    maxWidth: false,
    withButtons: false,
    buttonsPosition: "left",
    buttonVariant: "ghost",
    iconButtons: true,
    buttonSize: "sm",
    buttonCount: 2,
    loading: false,
    empty: false,
    loadError: false,
    emptyMessage: "",
    noResultsMessage: "",
    groups: false,
    triggerDisplay: "count",
    applyFooter: false,
    showClear: false,
    showCount: false,
    noResults: false,
    openList: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Multiple", "Searchable", "Show select all", "Show clear", "Show count", "Disabled", "Read-only", "Required", "Label", "Placeholder", "Help text", "Error", "Size", "Max width", "With buttons", "Buttons position", "Button type", "Icon buttons", "Button size", "Button count", "Loading", "Empty list", "Load error", "Empty message", "No results message", "No results", "Option groups", "Trigger shows", "Apply / Cancel footer", "Open list", "multiple", "searchable", "showSelectAll", "showClear", "showCount", "disabled", "readonly", "required", "label", "placeholder", "help", "error", "size", "maxWidth", "withButtons", "buttonsPosition", "buttonVariant", "iconButtons", "buttonSize", "buttonCount", "loading", "empty", "loadError", "emptyMessage", "noResultsMessage", "noResults", "groups", "triggerDisplay", "applyFooter", "openList"],
      sort: "none"
    }
  },
  argTypes: {
    loading: {
      name: "Loading",
      control: "boolean",
      description: "Shows a spinner row in the open list (\`loading\`).",
      table: {
        category: "States",
        defaultValue: {
          summary: "false"
        }
      }
    },
    empty: {
      name: "Empty list",
      control: "boolean",
      description: "Passes no options, so the open list shows the empty message.",
      table: {
        category: "States",
        defaultValue: {
          summary: "false"
        }
      }
    },
    loadError: {
      name: "Load error",
      control: "boolean",
      description: "Replaces the list with an error and a Retry button (\`loadError\`, \`onRetry\`).",
      table: {
        category: "States",
        defaultValue: {
          summary: "false"
        }
      }
    },
    emptyMessage: {
      name: "Empty message",
      control: "text",
      description: "Text for an empty list (\`emptyMessage\`). Blank uses \\"No results found\\".",
      table: {
        category: "States",
        defaultValue: {
          summary: "No results found"
        }
      }
    },
    noResultsMessage: {
      name: "No results message",
      control: "text",
      description: "Text when a search matches nothing (\`noResultsMessage\`). Turn on Searchable, open it and type something that doesn't match. Blank uses \\"No results found\\".",
      table: {
        category: "States",
        defaultValue: {
          summary: "No results found"
        }
      }
    },
    noResults: {
      name: "No results",
      control: "boolean",
      description: "Turns on search and types text that matches nothing, so the list shows the no-results message (\`noResultsMessage\`).",
      table: {
        category: "States",
        defaultValue: {
          summary: "false"
        }
      }
    },
    openList: {
      name: "Open list",
      control: "boolean",
      description: "Story only: opens the dropdown when the story loads, so the list states are visible without clicking.",
      table: {
        category: "States",
        defaultValue: {
          summary: "false"
        }
      }
    },
    groups: {
      name: "Option groups",
      control: "boolean",
      description: "Puts options under group headings (\`group\` on each option).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    triggerDisplay: {
      name: "Trigger shows",
      control: "radio",
      options: ["count", "values"],
      labels: {
        count: "Count (3 selected)",
        values: "Values (Item 1, Item 2 +1)"
      },
      description: "How a multi-select summarises two or more picks (\`triggerDisplay\`). Pick a few options to see it.",
      if: {
        arg: "multiple",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "count"
        }
      }
    },
    showClear: {
      name: "Show clear",
      control: "boolean",
      description: "Adds a Clear button that unselects everything (\`showClear\`). It sits on the Select All row and appears once something is selected.",
      if: {
        arg: "multiple",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showCount: {
      name: "Show count",
      control: "boolean",
      description: "Adds an \\"N items | M selected\\" line at the bottom of the dropdown (\`showCount\`). Pick a few options to watch it change.",
      if: {
        arg: "multiple",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    applyFooter: {
      name: "Apply / Cancel footer",
      control: "boolean",
      description: "Holds changes until Apply is pressed; Cancel, Escape or clicking outside discards them (\`applyFooter\`).",
      if: {
        arg: "multiple",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    multiple: {
      name: "Multiple",
      control: "boolean",
      description: "Lets people pick more than one option (\`multiple\`). Uses a longer option list.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    searchable: {
      name: "Searchable",
      control: "boolean",
      description: "Adds a search field to the dropdown (\`searchable\`). Uses a longer option list.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showSelectAll: {
      name: "Show select all",
      control: "boolean",
      description: "Adds a “select all” checkbox (\`showSelectAll\`). Only works with Multiple.",
      if: {
        arg: "multiple",
        truthy: true
      },
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the field and stops it opening.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    readonly: {
      name: "Read-only",
      control: "boolean",
      description: "Mutes the field and stops it opening. Hides the required asterisk.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Adds a red asterisk after the label.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    label: {
      name: "Label",
      control: "text",
      description: "The label above the field.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Input Label"
        }
      }
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Text shown while nothing is selected. Leave empty for the default.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "Select..."
        }
      }
    },
    help: {
      name: "Help text",
      control: "boolean",
      description: "Info icon with a tooltip next to the label (\`labelHelpText\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    error: {
      name: "Error",
      control: "boolean",
      description: "Shows an error message under the field and turns the border red (\`error\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Height of the closed field: sm 32px for dense toolbars, md 36px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "Off: full width. On: between 240px and 320px.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    withButtons: {
      name: "With buttons",
      control: "boolean",
      description: "Places placeholder buttons beside the field.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    buttonsPosition: {
      name: "Buttons position",
      control: "radio",
      options: ["left", "right", "both"],
      description: "Which side of the field the buttons sit on.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "left"
        }
      }
    },
    buttonVariant: {
      name: "Button type",
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "ghost"],
      description: "Button style.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "ghost"
        }
      }
    },
    iconButtons: {
      name: "Icon buttons",
      control: "boolean",
      description: "Icon-only buttons instead of “Action” text buttons.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    buttonSize: {
      name: "Button size",
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      description: "Button size.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "sm"
        }
      }
    },
    buttonCount: {
      name: "Button count",
      control: "radio",
      options: [1, 2, 3],
      description: "How many buttons to show.",
      if: {
        arg: "withButtons",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "2"
        }
      }
    }
  }
}`,...(L=(k=r.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const $e=["Default"];export{r as Default,$e as __namedExportsOrder,Ze as default};
