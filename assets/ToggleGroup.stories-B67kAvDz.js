import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DhMLlvMY.js";import{T as l}from"./toggle-group-ejI1TxD4.js";import{m as B}from"./ToggleGroup.shared-BMpaIdg5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./kebab-menu-button-ELtDHAkh.js";import"./menu-radix-CtpLdDaB.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-CJVmnMhy.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./list-erMbBqpB.js";import"./layout-grid-Be0M4-D4.js";import"./calendar-t4SqpSdm.js";import"./clock-C3xVexPO.js";import"./settings-B3RqFsd1.js";import"./pencil-IFm_bK0G.js";import"./copy-CtBWyGKZ.js";import"./trash-2-DTLo779S.js";const ge={title:"Custom Primitives/Toggle Group",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{type:{control:"radio",options:["single","multiple"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"},allowDeselect:{control:"boolean"},itemMaxWidth:{control:"number"},ariaLabel:{control:"text"},ariaLabelledBy:{control:"text"},showTruncationTooltip:{control:"boolean"},menuAriaLabel:{control:"text"},items:{table:{disable:!0}},onValueChange:{table:{disable:!0}},onValuesChange:{table:{disable:!0}}}};function S({type:e="single",disabled:i=!1,disabledItem:g=!1,withMenu:f=!1,itemCount:y=3,withIcons:w=!1,withLabel:V=!0,withBadge:x=!1,badgeType:T="number",fullWidth:s=!1,allowDeselect:v=!1,itemMaxWidth:r="none",ariaLabel:m="View"}){const n=r==="none"?void 0:Number(r),I=n!==void 0,[L,W]=c.useState("a"),[C,D]=c.useState(["a"]),d=B(y,g,{icons:w,label:V,menu:f,badge:x,badgeType:T}),u=I?d.map((a,M)=>a.label==="Toggle"?{...a,label:`Toggle option ${M+1}`}:a):d;return e==="multiple"?o.jsx(l,{type:"multiple",items:u,values:C,onValuesChange:D,disabled:i,fullWidth:s,itemMaxWidth:n,ariaLabel:m||void 0,showTruncationTooltip:!0}):o.jsx(l,{items:u,value:L,onValueChange:W,disabled:i,fullWidth:s,allowDeselect:v,itemMaxWidth:n,ariaLabel:m||void 0,showTruncationTooltip:!0})}const t={render:e=>o.jsx(S,{...e},JSON.stringify(e)),args:{type:"single",disabled:!1,disabledItem:!1,withMenu:!1,itemCount:3,withIcons:!1,withLabel:!0,withBadge:!1,badgeType:"number",fullWidth:!1,allowDeselect:!1,itemMaxWidth:"none",ariaLabel:"View"},parameters:{controls:{include:["Selection","Allow deselect","Disabled","Disabled item","With menu","Items","Icons","Label","Group name","With badge","Badge type","Full width","Max item width","type","allowDeselect","disabled","disabledItem","withMenu","itemCount","withIcons","withLabel","ariaLabel","withBadge","badgeType","fullWidth","itemMaxWidth"],sort:"none"}},argTypes:{type:{name:"Selection",control:"radio",options:["single","multiple"],description:"Single lets one item be on at a time: the group is one Tab stop, and ←/→ (or ↑/↓, Home, End) move and select. Multiple lets any number be on: each item is its own Tab stop, and Space or Enter toggles it (`type`).",table:{category:"Behavior",defaultValue:{summary:"single"}}},allowDeselect:{name:"Allow deselect",control:"boolean",description:"Single only. Clicking the selected item again clears the selection (`allowDeselect`). Off, the selected item stays selected, like a radio group.",if:{arg:"type",eq:"single"},table:{category:"Behavior",defaultValue:{summary:"false"}}},disabled:{name:"Disabled",control:"boolean",description:"Dims the whole group and stops it changing.",table:{category:"Behavior",defaultValue:{summary:"false"}}},disabledItem:{name:"Disabled item",control:"boolean",description:"Disables one item (`disabled` on one item): the middle one, or the last when there are only two.",table:{category:"Behavior",defaultValue:{summary:"false"}}},withMenu:{name:"With menu",control:"boolean",description:'Adds a kebab (⋮) button inside each toggle that opens a menu (`menuItems`). It is its own button after the toggle in the Tab order, with a "More options" tooltip on hover and focus. Clicking it doesn\'t select the toggle.',table:{category:"Behavior",defaultValue:{summary:"false"}}},itemCount:{name:"Items",control:{type:"range",min:2,max:5,step:1},description:"How many toggles are in the group.",table:{category:"Content",defaultValue:{summary:"3"}}},withIcons:{name:"Icons",control:"boolean",description:"Shows an icon before each label.",table:{category:"Content",defaultValue:{summary:"false"}}},ariaLabel:{name:"Group name",control:"text",description:'What a screen reader calls the group, e.g. "View" (`ariaLabel`). Not shown on screen.',table:{category:"Content",defaultValue:{summary:"none"}}},withLabel:{name:"Label",control:"boolean",description:"Shows the text label. Off leaves icon-only toggles, which show their label in a tooltip on hover and keyboard focus (`tooltip` + `ariaLabel` on each item).",if:{arg:"withIcons",truthy:!0},table:{category:"Content",defaultValue:{summary:"true"}}},withBadge:{name:"With badge",control:"boolean",description:"Adds a red badge to each toggle.",table:{category:"Appearance",defaultValue:{summary:"false"}}},badgeType:{name:"Badge type",control:"radio",options:["number","alert"],description:'Number shows a count in the badge. Alert shows an "!".',if:{arg:"withBadge",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"number"}}},fullWidth:{name:"Full width",control:"boolean",description:"Stretches the group across the full width of the page, with equal-width items. A label that gets cut off shows in full in a tooltip on hover.",table:{category:"Appearance",defaultValue:{summary:"false"}}},itemMaxWidth:{name:"Max item width",control:"select",options:["none","80","120"],description:"Caps each item's width in px (`itemMaxWidth`). Longer labels are cut off with an ellipsis and show in full in a tooltip on hover and focus (`showTruncationTooltip`). The demo lengthens the labels so the cut-off shows.",table:{category:"Appearance",defaultValue:{summary:"none"}}}}};var h,p,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ToggleGroupDemo key={JSON.stringify(args)} {...args} />,
  args: {
    type: "single",
    disabled: false,
    disabledItem: false,
    withMenu: false,
    itemCount: 3,
    withIcons: false,
    withLabel: true,
    withBadge: false,
    badgeType: "number",
    fullWidth: false,
    allowDeselect: false,
    itemMaxWidth: "none",
    ariaLabel: "View"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Selection", "Allow deselect", "Disabled", "Disabled item", "With menu", "Items", "Icons", "Label", "Group name", "With badge", "Badge type", "Full width", "Max item width", "type", "allowDeselect", "disabled", "disabledItem", "withMenu", "itemCount", "withIcons", "withLabel", "ariaLabel", "withBadge", "badgeType", "fullWidth", "itemMaxWidth"],
      sort: "none"
    }
  },
  argTypes: {
    type: {
      name: "Selection",
      control: "radio",
      options: ["single", "multiple"],
      description: "Single lets one item be on at a time: the group is one Tab stop, and ←/→ (or ↑/↓, Home, End) move and select. Multiple lets any number be on: each item is its own Tab stop, and Space or Enter toggles it (\`type\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "single"
        }
      }
    },
    allowDeselect: {
      name: "Allow deselect",
      control: "boolean",
      description: "Single only. Clicking the selected item again clears the selection (\`allowDeselect\`). Off, the selected item stays selected, like a radio group.",
      if: {
        arg: "type",
        eq: "single"
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
      description: "Dims the whole group and stops it changing.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    disabledItem: {
      name: "Disabled item",
      control: "boolean",
      description: "Disables one item (\`disabled\` on one item): the middle one, or the last when there are only two.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    withMenu: {
      name: "With menu",
      control: "boolean",
      description: "Adds a kebab (⋮) button inside each toggle that opens a menu (\`menuItems\`). It is its own button after the toggle in the Tab order, with a \\"More options\\" tooltip on hover and focus. Clicking it doesn't select the toggle.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    itemCount: {
      name: "Items",
      control: {
        type: "range",
        min: 2,
        max: 5,
        step: 1
      },
      description: "How many toggles are in the group.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "3"
        }
      }
    },
    withIcons: {
      name: "Icons",
      control: "boolean",
      description: "Shows an icon before each label.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    ariaLabel: {
      name: "Group name",
      control: "text",
      description: "What a screen reader calls the group, e.g. \\"View\\" (\`ariaLabel\`). Not shown on screen.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "none"
        }
      }
    },
    withLabel: {
      name: "Label",
      control: "boolean",
      description: "Shows the text label. Off leaves icon-only toggles, which show their label in a tooltip on hover and keyboard focus (\`tooltip\` + \`ariaLabel\` on each item).",
      if: {
        arg: "withIcons",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    withBadge: {
      name: "With badge",
      control: "boolean",
      description: "Adds a red badge to each toggle.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    badgeType: {
      name: "Badge type",
      control: "radio",
      options: ["number", "alert"],
      description: "Number shows a count in the badge. Alert shows an \\"!\\".",
      if: {
        arg: "withBadge",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "number"
        }
      }
    },
    fullWidth: {
      name: "Full width",
      control: "boolean",
      description: "Stretches the group across the full width of the page, with equal-width items. A label that gets cut off shows in full in a tooltip on hover.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    itemMaxWidth: {
      name: "Max item width",
      control: "select",
      options: ["none", "80", "120"],
      description: "Caps each item's width in px (\`itemMaxWidth\`). Longer labels are cut off with an ellipsis and show in full in a tooltip on hover and focus (\`showTruncationTooltip\`). The demo lengthens the labels so the cut-off shows.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "none"
        }
      }
    }
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const fe=["Default"];export{t as Default,fe as __namedExportsOrder,ge as default};
