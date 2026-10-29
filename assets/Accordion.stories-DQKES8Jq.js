import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-DhMLlvMY.js";import{A as a}from"./accordion-aheRZdMc.js";import{C as g}from"./container-C-GZbWug.js";import{s as R,r as d,m as _}from"./Accordion.shared-DxiOi-vr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./index-1evVQkiP.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./tag-DQ3sj_Kb.js";import"./badge-DnlHYDBX.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./dashboard-card-8iqrU8M5.js";import"./separator-97dXnQFu.js";import"./filter-chip-C5aRaTvf.js";import"./error-icon-solid-eVlwMcX6.js";import"./select-CqLB1K6d.js";import"./index-pcZVUfq6.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./checkbox-BvtSqiEO.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sparkline-BywDx1SH.js";import"./chart-C8WwCP2A.js";import"./trending-up-VJi9q_0I.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";import"./table--4Qx2r7x.js";import"./show-more-zdMS6Dq2.js";import"./search-input-DMWMFm0V.js";import"./clear-button-dDMqPq-B.js";import"./arrow-right-DLDQNhbU.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./query-builder-Bas0a1uC.js";import"./input-DV2xaBHs.js";import"./toggle-group-DA1eutEW.js";import"./sliders-horizontal-DYIYVQYC.js";import"./copy-CtBWyGKZ.js";import"./plus-BKUBo5Qt.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./clock-C3xVexPO.js";import"./box-DjPaLKGI.js";const ut={title:"Headless Primitives/Accordion",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{items:{table:{disable:!0}},type:{table:{disable:!0}},value:{table:{disable:!0}},values:{table:{disable:!0}},defaultValue:{table:{disable:!0}},defaultValues:{table:{disable:!0}},onValueChange:{table:{disable:!0}},onValuesChange:{table:{disable:!0}},className:{table:{disable:!0}},variant:{table:{disable:!0}}}},P=["slate","red","orange","yellow","lime","green","teal","blue","purple","pink"],L={slate:"bg-lyra-accent-slate-soft",red:"bg-lyra-accent-red-soft",orange:"bg-lyra-accent-orange-soft",yellow:"bg-lyra-accent-yellow-soft",lime:"bg-lyra-accent-lime-soft",green:"bg-lyra-accent-green-soft",teal:"bg-lyra-accent-teal-soft",blue:"bg-lyra-accent-blue-soft",purple:"bg-lyra-accent-purple-soft",pink:"bg-lyra-accent-pink-soft"};function M({multi:e=!1,showIcons:v=!0,disabledItem:S=!1,defaultOpen:n="none",showSubhead:$=!1,showEndSlot:x=!1,richHeader:p=!1,richContent:E=!1,container:m=!1,separateContainers:I=!1,padding:N=!0,headerColor:V=!1,headerColorValue:A="purple",density:i="comfortable",variant:u="default"}){const h=N?"p-4":"overflow-hidden",s=R.map(t=>({...t,icon:v?t.icon:void 0,disabled:S&&t.id==="2",title:p?d.title:t.title,subhead:p?d.subhead:$?"Supporting description text":void 0,endSlot:x?_(t.id):void 0,content:E?d.content:t.content,headerClassName:V?L[A]:void 0})),[T,j]=c.useState(n==="none"?"":n),[D,H]=c.useState(n==="none"?[]:[n]),[k,O]=c.useState(n==="none"?[]:[n]);if(m&&I)return o.jsx("div",{className:"flex flex-col gap-3",children:s.map(t=>o.jsx(g,{className:h,children:o.jsx(a,{type:"single",items:[t],density:i,value:k.includes(t.id)?t.id:"",onValueChange:W=>O(f=>W?[...f.filter(l=>l!==t.id),t.id]:f.filter(l=>l!==t.id))})},t.id))});const b=e?o.jsx(a,{type:"multiple",items:s,density:i,values:D,onValuesChange:H,variant:u}):o.jsx(a,{type:"single",items:s,density:i,value:T,onValueChange:j,variant:u});return m?o.jsx(g,{className:h,children:b}):b}const r={args:{multi:!1,showIcons:!0,disabledItem:!1,defaultOpen:"none",showSubhead:!1,showEndSlot:!1,richHeader:!1,richContent:!1,container:!1,separateContainers:!1,padding:!0,headerColor:!1,headerColorValue:"purple",density:"comfortable",variant:"default"},argTypes:{multi:{control:"boolean",description:'When true, multiple items can stay open at once (type="multiple"). When false, opening one closes the rest (type="single").'},showIcons:{control:"boolean"},disabledItem:{control:"boolean",description:'Disables the second item ("Section 2")'},defaultOpen:{control:"select",options:["none","1","2","3"],description:"Which item starts open"},showSubhead:{control:"boolean",description:"Supporting text under each title (`subhead`)"},showEndSlot:{control:"boolean",description:"Display-only content between the title and chevron (`endSlot`) — here two `Metric`s"},richHeader:{control:"boolean",description:`Every item's title/subhead become ReactNode content (name + status Tag, multi-line summary) instead of plain text — overrides "showSubhead" while on.`},richContent:{control:"boolean",description:"Every item's content becomes a Table instead of placeholder text"},container:{control:"boolean",description:'Wraps the Accordion in a `Container` ("default" variant — white surface, subtle border)'},separateContainers:{control:"boolean",description:"Puts each item in its own Container instead of one shared Container",if:{arg:"container",truthy:!0}},padding:{control:"boolean",description:"Padding inside the Container(s) (`p-4`) — off removes it entirely",if:{arg:"container",truthy:!0}},headerColor:{control:"boolean",description:"Tints every item's trigger row background (`headerClassName`)"},headerColorValue:{control:"select",options:P,description:"Accent color used for the header tint (`bg-lyra-accent-{color}-soft`)",if:{arg:"headerColor",truthy:!0}},variant:{control:"select",options:["default","contained"],description:"default — rows sit on the page with dividers between them. contained — the whole group sits in one bordered, rounded card (`variant`). Not used by “separate containers”, which already draws a card per item.",if:{arg:"separateContainers",truthy:!1}},density:{control:"select",options:["comfortable","compact"],description:"Header row height (`density`) — comfortable is 48px (default), compact is 40px"}},render:e=>o.jsx(M,{...e},`${e.multi}-${e.showIcons}-${e.disabledItem}-${e.defaultOpen}-${e.showSubhead}-${e.showEndSlot}-${e.richHeader}-${e.richContent}-${e.container}-${e.separateContainers}-${e.padding}-${e.headerColor}-${e.headerColorValue}-${e.density}-${e.variant}`)};var y,C,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    multi: false,
    showIcons: true,
    disabledItem: false,
    defaultOpen: "none",
    showSubhead: false,
    showEndSlot: false,
    richHeader: false,
    richContent: false,
    container: false,
    separateContainers: false,
    padding: true,
    headerColor: false,
    headerColorValue: "purple",
    density: "comfortable",
    variant: "default"
  },
  argTypes: {
    multi: {
      control: "boolean",
      description: "When true, multiple items can stay open at once (type=\\"multiple\\"). When false, opening one closes the rest (type=\\"single\\")."
    },
    showIcons: {
      control: "boolean"
    },
    disabledItem: {
      control: "boolean",
      description: 'Disables the second item ("Section 2")'
    },
    defaultOpen: {
      control: "select",
      options: ["none", "1", "2", "3"],
      description: "Which item starts open"
    },
    showSubhead: {
      control: "boolean",
      description: "Supporting text under each title (\`subhead\`)"
    },
    showEndSlot: {
      control: "boolean",
      description: "Display-only content between the title and chevron (\`endSlot\`) — here two \`Metric\`s"
    },
    richHeader: {
      control: "boolean",
      description: 'Every item\\'s title/subhead become ReactNode content (name + status Tag, multi-line summary) instead of plain text — overrides "showSubhead" while on.'
    },
    richContent: {
      control: "boolean",
      description: "Every item's content becomes a Table instead of placeholder text"
    },
    container: {
      control: "boolean",
      description: 'Wraps the Accordion in a \`Container\` ("default" variant — white surface, subtle border)'
    },
    separateContainers: {
      control: "boolean",
      description: "Puts each item in its own Container instead of one shared Container",
      if: {
        arg: "container",
        truthy: true
      }
    },
    padding: {
      control: "boolean",
      description: "Padding inside the Container(s) (\`p-4\`) — off removes it entirely",
      if: {
        arg: "container",
        truthy: true
      }
    },
    headerColor: {
      control: "boolean",
      description: "Tints every item's trigger row background (\`headerClassName\`)"
    },
    headerColorValue: {
      control: "select",
      options: ACCENT_COLORS,
      description: "Accent color used for the header tint (\`bg-lyra-accent-{color}-soft\`)",
      if: {
        arg: "headerColor",
        truthy: true
      }
    },
    variant: {
      control: "select",
      options: ["default", "contained"],
      description: "default — rows sit on the page with dividers between them. contained — the whole group sits in one bordered, rounded card (\`variant\`). Not used by “separate containers”, which already draws a card per item.",
      if: {
        arg: "separateContainers",
        truthy: false
      }
    },
    density: {
      control: "select",
      options: ["comfortable", "compact"],
      description: "Header row height (\`density\`) — comfortable is 48px (default), compact is 40px"
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <AccordionDemo key={\`\${args.multi}-\${args.showIcons}-\${args.disabledItem}-\${args.defaultOpen}-\${args.showSubhead}-\${args.showEndSlot}-\${args.richHeader}-\${args.richContent}-\${args.container}-\${args.separateContainers}-\${args.padding}-\${args.headerColor}-\${args.headerColorValue}-\${args.density}-\${args.variant}\`} {...args} />
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const ht=["Default"];export{r as Default,ht as __namedExportsOrder,ut as default};
