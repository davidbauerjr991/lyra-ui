import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-DhMLlvMY.js";import{Q as i,e as g}from"./query-builder-CZ4lmIty.js";import{w as A}from"./storyControls-D66O-f8g.js";import{s as h}from"./QueryBuilder.shared-DlHmQIuB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./index-DjOBIGyd.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./button-DxuJ7r2Z.js";import"./index-1evVQkiP.js";import"./tooltip-E_6y_wR5.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./input-D4o1YJ5A.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./popover-6UELhi_J.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./filter-chip-J1borD9B.js";import"./select-D9dW4MIp.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-KP4UZ6Eo.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./toggle-group-CKd_DaOS.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sliders-horizontal-DYIYVQYC.js";import"./copy-CtBWyGKZ.js";import"./plus-BKUBo5Qt.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,Te={title:"Custom Primitives/QueryBuilder",component:i,tags:["autodocs"],parameters:{layout:"padded"}};function S({popover:s,showDescription:e,save:r,footer:l,label:f="Query Builder",appliedLabel:w="Applied Filters",showSummary:C=!0,showClear:x=!0}){const[u,m]=a.useState(g),[d,n]=a.useState("—"),c=r?t=>n(`Save Search “${t}”`):void 0;return s?o.jsxs("div",{className:"flex max-w-[720px] flex-col gap-3",children:[o.jsx(i,{popover:!0,criteria:h,value:u,onChange:t=>{m(t),n(t.chips.length||t.subGroups.length?"Apply":"Clear")},showDescription:e,label:f.trim()||void 0,appliedLabel:w.trim()||void 0,showSummary:C,showClear:x,onSave:c}),o.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Last action: ",d]})]}):o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx("div",{className:"max-w-[880px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:o.jsx(i,{criteria:h,value:u,onChange:m,showDescription:e,footer:l,onApply:()=>n("Apply"),onCancel:()=>n("Cancel"),onSave:c})}),l&&o.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Last footer action: ",d]})]})}const p=A({args:{popover:!0,showDescription:!0,save:!1,footer:!1,label:"Query Builder",appliedLabel:"Applied Filters",showSummary:!0,showClear:!0,popoverControlsOn:!0},argTypes:{popover:{name:"Popover",control:"boolean",description:"A button that opens the builder in a popover, then shows what was applied with a Clear button (`popover`). Off: the builder sits inline."},showDescription:{name:"Description",control:"boolean",description:"The text description of the query under the builder, with a copy button that appears on hover (`showDescription`)."},footer:{name:"Footer",control:"boolean",description:"Cancel and Apply buttons below the builder (`footer`, with `onApply` / `onCancel`). Inline only — the popover always has them."},save:{name:"Save",control:"boolean",description:"A Save Search button in the footer that asks for a name (`onSave`). Needs Footer on when inline."},label:{name:"Button text",control:"text",description:"Text while nothing is applied (`label`).",if:{arg:"popoverControlsOn",truthy:!0}},appliedLabel:{name:"Applied button text",control:"text",description:"Text once a query is applied (`appliedLabel`).",if:{arg:"popoverControlsOn",truthy:!0}},showSummary:{name:"Summary",control:"boolean",description:"The applied query as text next to the button (`showSummary`).",if:{arg:"popoverControlsOn",truthy:!0}},showClear:{name:"Clear",control:"boolean",description:"The Clear button while a query is applied (`showClear`).",if:{arg:"popoverControlsOn",truthy:!0}},popoverControlsOn:{table:{disable:!0}}},render:function(e){const[,r]=O();return a.useEffect(()=>{e.popoverControlsOn!==e.popover&&r({popoverControlsOn:e.popover})},[e.popover,e.popoverControlsOn,r]),o.jsx(S,{...e})}});var b,y,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`withControlsFor({
  args: {
    popover: true,
    showDescription: true,
    save: false,
    footer: false,
    label: "Query Builder",
    appliedLabel: "Applied Filters",
    showSummary: true,
    showClear: true,
    popoverControlsOn: true
  },
  argTypes: {
    popover: {
      name: "Popover",
      control: "boolean",
      description: "A button that opens the builder in a popover, then shows what was applied with a Clear button (\`popover\`). Off: the builder sits inline."
    },
    showDescription: {
      name: "Description",
      control: "boolean",
      description: "The text description of the query under the builder, with a copy button that appears on hover (\`showDescription\`)."
    },
    footer: {
      name: "Footer",
      control: "boolean",
      description: "Cancel and Apply buttons below the builder (\`footer\`, with \`onApply\` / \`onCancel\`). Inline only — the popover always has them."
    },
    save: {
      name: "Save",
      control: "boolean",
      description: "A Save Search button in the footer that asks for a name (\`onSave\`). Needs Footer on when inline."
    },
    label: {
      name: "Button text",
      control: "text",
      description: "Text while nothing is applied (\`label\`).",
      if: {
        arg: "popoverControlsOn",
        truthy: true
      }
    },
    appliedLabel: {
      name: "Applied button text",
      control: "text",
      description: "Text once a query is applied (\`appliedLabel\`).",
      if: {
        arg: "popoverControlsOn",
        truthy: true
      }
    },
    showSummary: {
      name: "Summary",
      control: "boolean",
      description: "The applied query as text next to the button (\`showSummary\`).",
      if: {
        arg: "popoverControlsOn",
        truthy: true
      }
    },
    showClear: {
      name: "Clear",
      control: "boolean",
      description: "The Clear button while a query is applied (\`showClear\`).",
      if: {
        arg: "popoverControlsOn",
        truthy: true
      }
    },
    popoverControlsOn: {
      table: {
        disable: true
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    // Keep the hidden plumbing arg in sync with Popover so the popover-only controls show/hide.
    useEffect(() => {
      if (args.popoverControlsOn !== args.popover) updateArgs({
        popoverControlsOn: args.popover
      });
    }, [args.popover, args.popoverControlsOn, updateArgs]);
    return <Demo {...args} />;
  }
})`,...(v=(y=p.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const De=["Default"];export{p as Default,De as __namedExportsOrder,Te as default};
