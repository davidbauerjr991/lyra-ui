import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DhMLlvMY.js";import{A as a}from"./accordion-D2Z-FgW6.js";import{C as f}from"./container-CuG4Jt_a.js";import{c as R}from"./utils-BLSKlp9E.js";import{s as _,r as d,m as L}from"./Accordion.shared-BD2D8wDJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CSgTdu41.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-CBF9FTDx.js";import"./index-CylpBFcA.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./index-1evVQkiP.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./tag-CePNn257.js";import"./button-DGWscpRe.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./dashboard-card-B89HgAxS.js";import"./separator-97dXnQFu.js";import"./filter-chip-D1SHYby4.js";import"./error-icon-solid-eVlwMcX6.js";import"./select-N0jJDdGd.js";import"./index-pcZVUfq6.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./popover-tSwa707i.js";import"./index-BY5kmD2Q.js";import"./checkbox-wvqFL4jd.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sparkline-BywDx1SH.js";import"./chart-C8WwCP2A.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";import"./table-B_IJf8T5.js";import"./search-input-DGfFydY0.js";import"./clear-button-DgMj9nmX.js";import"./arrow-right-DLDQNhbU.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./input-CpMudak3.js";import"./sliders-horizontal-DYIYVQYC.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./clock-C3xVexPO.js";import"./box-DjPaLKGI.js";const it={title:"Headless Primitives/Accordion",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{items:{table:{disable:!0}},type:{table:{disable:!0}},value:{table:{disable:!0}},values:{table:{disable:!0}},defaultValue:{table:{disable:!0}},defaultValues:{table:{disable:!0}},onValueChange:{table:{disable:!0}},onValuesChange:{table:{disable:!0}},className:{table:{disable:!0}},variant:{table:{disable:!0}}}},M=["slate","red","orange","yellow","lime","green","teal","blue","purple","pink"],q={slate:"bg-lyra-accent-slate-soft",red:"bg-lyra-accent-red-soft",orange:"bg-lyra-accent-orange-soft",yellow:"bg-lyra-accent-yellow-soft",lime:"bg-lyra-accent-lime-soft",green:"bg-lyra-accent-green-soft",teal:"bg-lyra-accent-teal-soft",blue:"bg-lyra-accent-blue-soft",purple:"bg-lyra-accent-purple-soft",pink:"bg-lyra-accent-pink-soft"};function z({multi:e=!1,showIcons:w=!0,disabledItem:v=!1,defaultOpen:n="none",showSubhead:S=!1,showEndSlot:$=!1,richHeader:c=!1,richContent:x=!1,container:p=!1,separateContainers:E=!1,padding:I=!0,headerColor:N=!1,headerColorValue:V="purple",headerPadding:A="comfortable",variant:m="default"}){const u=I?"p-4":"overflow-hidden",T=A==="compact"?"py-2.5":void 0,i=_.map(t=>({...t,icon:w?t.icon:void 0,disabled:v&&t.id==="2",title:c?d.title:t.title,subhead:c?d.subhead:S?"Supporting description text":void 0,endSlot:$?L(t.id):void 0,content:x?d.content:t.content,headerClassName:R(N?q[V]:void 0,T)})),[P,j]=l.useState(n==="none"?"":n),[D,k]=l.useState(n==="none"?[]:[n]),[O,W]=l.useState(n==="none"?[]:[n]);if(p&&E)return o.jsx("div",{className:"flex flex-col gap-3",children:i.map(t=>o.jsx(f,{className:u,children:o.jsx(a,{type:"single",items:[t],value:O.includes(t.id)?t.id:"",onValueChange:H=>W(b=>H?[...b.filter(s=>s!==t.id),t.id]:b.filter(s=>s!==t.id))})},t.id))});const h=e?o.jsx(a,{type:"multiple",items:i,values:D,onValuesChange:k,variant:m}):o.jsx(a,{type:"single",items:i,value:P,onValueChange:j,variant:m});return p?o.jsx(f,{className:u,children:h}):h}const r={args:{multi:!1,showIcons:!0,disabledItem:!1,defaultOpen:"none",showSubhead:!1,showEndSlot:!1,richHeader:!1,richContent:!1,container:!1,separateContainers:!1,padding:!0,headerColor:!1,headerColorValue:"purple",headerPadding:"comfortable",variant:"default"},argTypes:{multi:{control:"boolean",description:'When true, multiple items can stay open at once (type="multiple"). When false, opening one closes the rest (type="single").'},showIcons:{control:"boolean"},disabledItem:{control:"boolean",description:'Disables the second item ("Section 2")'},defaultOpen:{control:"select",options:["none","1","2","3"],description:"Which item starts open"},showSubhead:{control:"boolean",description:"Supporting text under each title (`subhead`)"},showEndSlot:{control:"boolean",description:"Display-only content between the title and chevron (`endSlot`) — here two `Metric`s"},richHeader:{control:"boolean",description:`Every item's title/subhead become ReactNode content (name + status Tag, multi-line summary) instead of plain text — overrides "showSubhead" while on.`},richContent:{control:"boolean",description:"Every item's content becomes a Table instead of placeholder text"},container:{control:"boolean",description:'Wraps the Accordion in a `Container` ("default" variant — white surface, subtle border)'},separateContainers:{control:"boolean",description:"Puts each item in its own Container instead of one shared Container",if:{arg:"container",truthy:!0}},padding:{control:"boolean",description:"Padding inside the Container(s) (`p-4`) — off removes it entirely",if:{arg:"container",truthy:!0}},headerColor:{control:"boolean",description:"Tints every item's trigger row background (`headerClassName`)"},headerColorValue:{control:"select",options:M,description:"Accent color used for the header tint (`bg-lyra-accent-{color}-soft`)",if:{arg:"headerColor",truthy:!0}},variant:{control:"select",options:["default","contained"],description:"default — rows sit on the page with dividers between them. contained — the whole group sits in one bordered, rounded card (`variant`). Not used by “separate containers”, which already draws a card per item.",if:{arg:"separateContainers",truthy:!1}},headerPadding:{control:"select",options:["comfortable","compact"],description:"Trigger row vertical padding — comfortable is 14px top/bottom (default), compact is 10px top/bottom"}},render:e=>o.jsx(z,{...e},`${e.multi}-${e.showIcons}-${e.disabledItem}-${e.defaultOpen}-${e.showSubhead}-${e.showEndSlot}-${e.richHeader}-${e.richContent}-${e.container}-${e.separateContainers}-${e.padding}-${e.headerColor}-${e.headerColorValue}-${e.headerPadding}-${e.variant}`)};var g,y,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    headerPadding: "comfortable",
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
    headerPadding: {
      control: "select",
      options: ["comfortable", "compact"],
      description: "Trigger row vertical padding — comfortable is 14px top/bottom (default), compact is 10px top/bottom"
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — \`useState\`'s initial
  // value only applies on first mount.
  <AccordionDemo key={\`\${args.multi}-\${args.showIcons}-\${args.disabledItem}-\${args.defaultOpen}-\${args.showSubhead}-\${args.showEndSlot}-\${args.richHeader}-\${args.richContent}-\${args.container}-\${args.separateContainers}-\${args.padding}-\${args.headerColor}-\${args.headerColorValue}-\${args.headerPadding}-\${args.variant}\`} {...args} />
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const st=["Default"];export{r as Default,st as __namedExportsOrder,it as default};
