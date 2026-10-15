import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./menu-radix-DwqQneqx.js";import{B as f}from"./button-DGWscpRe.js";import{F as w}from"./file-text-DK8c8V5C.js";import{C as y}from"./copy-CtBWyGKZ.js";import{L as v}from"./link-B2UeFp_8.js";import{S as x}from"./share-2-D8PdytSi.js";import{D}from"./download-BLBOXyII.js";import{M as R}from"./mail-BgfsS5Lx.js";import{U as A}from"./users-jAzTZfU5.js";import{c as S}from"./createLucideIcon-aII_sYFw.js";import{T as k}from"./trash-2-DTLo779S.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./index-1evVQkiP.js";import"./tooltip-B72fooV5.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=S("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),he={title:"Headless Primitives/Menu",component:u,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n=e=>i.jsx(e,{className:"h-4 w-4",strokeWidth:1.5}),M={sm:"w-[200px]",md:"w-64",lg:"w-[320px]"},L=[{id:"edit",label:"Edit",Icon:w,shortcut:"⌘E",description:"Change this item's details"},{id:"duplicate",label:"Duplicate",Icon:y,shortcut:"⌘D",description:"Make a copy of this item"},{id:"link",label:"Copy link",Icon:v,shortcut:"⌘L",description:"Copy a shareable link"},{id:"share",label:"Share",Icon:x,shortcut:"⌘⇧S",description:"Invite people to this item"},{id:"download",label:"Download",Icon:D,shortcut:"⌘S",description:"Save a local copy"}];function W({rowContent:e="icons",submenu:s=!1,dividers:a=!1,disabledRow:l=!1,activeRow:d=!1,destructiveRow:c=!1,listLength:b="short"}){const o=L.map((t,g)=>({id:t.id,label:t.label,icon:e==="text"?void 0:n(t.Icon),shortcut:e==="iconsShortcuts"?t.shortcut:void 0,description:e==="descriptions"?t.description:void 0,active:d&&g===1?!0:void 0,submenu:s&&t.id==="share"?[{id:"share-email",label:"Email",icon:e==="text"?void 0:n(R)},{id:"share-people",label:"Invite people",icon:e==="text"?void 0:n(A)}]:void 0}));if(b==="long")for(let t=1;t<=15;t++)o.push({id:`extra-${t}`,label:`Item label ${t}`});return a&&o.splice(2,0,"separator"),l&&o.push({id:"archive",label:"Archive",icon:e==="text"?void 0:n(C),disabled:!0}),c&&(a&&o.push("separator"),o.push({id:"delete",label:"Delete",icon:e==="text"?void 0:n(k),shortcut:e==="iconsShortcuts"?"⌫":void 0,destructive:!0})),o}function I(e){const{width:s="md",side:a="bottom",align:l="start",modal:d=!0,density:c="comfortable"}=e;return i.jsx("div",{className:"flex items-center justify-center",style:{minHeight:440,minWidth:560},children:i.jsx(u,{trigger:i.jsx(f,{variant:"outline",children:"Open Menu"}),items:W(e),className:M[s],side:a,align:l,modal:d,density:c})})}const r={parameters:{controls:{include:["modal","density","rowContent","submenu","dividers","disabledRow","activeRow","destructiveRow","listLength","width","side","align","Modal","Density","Row content","Submenu","Dividers","Disabled row","Active row","Destructive row","List length","Width","Opens toward","Alignment"],sort:"none"}},args:{modal:!0,density:"comfortable",rowContent:"icons",submenu:!1,dividers:!1,disabledRow:!1,activeRow:!1,destructiveRow:!1,listLength:"short",width:"md",side:"bottom",align:"start"},argTypes:{modal:{name:"Modal",control:"boolean",description:"While open, hide the rest of the page from assistive tech and block outside clicks (`modal`, Radix's default). Off leaves the page exposed; use it where an accessibility checker flags the hidden trigger.",table:{category:"Behavior",defaultValue:{summary:"true"}}},density:{name:"Density",control:"radio",options:["comfortable","compact"],description:"Row padding: comfortable (default) or compact, a tighter row (`density`).",table:{category:"Appearance",defaultValue:{summary:"comfortable"}}},rowContent:{name:"Row content",control:"radio",options:["text","icons","iconsShortcuts","descriptions"],description:"What each row shows: label only, label + icon, icon + keyboard shortcut, or icon + secondary description text.",table:{category:"Content"}},submenu:{name:"Submenu",control:"boolean",description:"Adds a nested flyout to the Share row (`submenu`).",table:{category:"Content"}},dividers:{name:"Dividers",control:"boolean",description:"Groups the rows with separator lines.",table:{category:"Content"}},disabledRow:{name:"Disabled row",control:"boolean",description:"Adds an Archive row that can't be selected (`disabled`).",table:{category:"Content"}},activeRow:{name:"Active row",control:"boolean",description:"Marks the second row as the persistently highlighted current item (`active`): blue background and accent bar.",table:{category:"Content"}},destructiveRow:{name:"Destructive row",control:"boolean",description:"Adds a red Delete row (`destructive`).",table:{category:"Content"}},listLength:{name:"List length",control:"radio",options:["short","long"],description:"Long adds 15 more rows so the list overflows and shows the scroll-chevron affordance instead of a native scrollbar.",table:{category:"Content"}},width:{name:"Width",control:"radio",options:["sm","md","lg"],description:"Menu surface width: sm 200px, md 256px, lg 320px (`className`). See Variants → Width Scale.",table:{category:"Appearance"}},side:{name:"Opens toward",control:"radio",options:["bottom","top","left","right"],description:"Which side of the trigger the menu opens on (`side`).",table:{category:"Appearance"}},align:{name:"Alignment",control:"radio",options:["start","center","end"],description:"How the menu lines up with the trigger along that side (`align`).",table:{category:"Appearance"}}},render:e=>i.jsx(I,{...e},JSON.stringify(e))};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so the
  // Docs page's autodocs table still lists every real MenuRadix prop.
  // Storybook matches \`include\` against each control's display \`name\`, so
  // both the names and the keys are listed.
  parameters: {
    controls: {
      include: ["modal", "density", "rowContent", "submenu", "dividers", "disabledRow", "activeRow", "destructiveRow", "listLength", "width", "side", "align", "Modal", "Density", "Row content", "Submenu", "Dividers", "Disabled row", "Active row", "Destructive row", "List length", "Width", "Opens toward", "Alignment"],
      sort: "none"
    }
  },
  args: {
    modal: true,
    density: "comfortable",
    rowContent: "icons",
    submenu: false,
    dividers: false,
    disabledRow: false,
    activeRow: false,
    destructiveRow: false,
    listLength: "short",
    width: "md",
    side: "bottom",
    align: "start"
  },
  argTypes: {
    modal: {
      name: "Modal",
      control: "boolean",
      description: "While open, hide the rest of the page from assistive tech and block outside clicks (\`modal\`, Radix's default). Off leaves the page exposed; use it where an accessibility checker flags the hidden trigger.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "true"
        }
      }
    },
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      description: "Row padding: comfortable (default) or compact, a tighter row (\`density\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "comfortable"
        }
      }
    },
    rowContent: {
      name: "Row content",
      control: "radio",
      options: ["text", "icons", "iconsShortcuts", "descriptions"],
      description: "What each row shows: label only, label + icon, icon + keyboard shortcut, or icon + secondary description text.",
      table: {
        category: "Content"
      }
    },
    submenu: {
      name: "Submenu",
      control: "boolean",
      description: "Adds a nested flyout to the Share row (\`submenu\`).",
      table: {
        category: "Content"
      }
    },
    dividers: {
      name: "Dividers",
      control: "boolean",
      description: "Groups the rows with separator lines.",
      table: {
        category: "Content"
      }
    },
    disabledRow: {
      name: "Disabled row",
      control: "boolean",
      description: "Adds an Archive row that can't be selected (\`disabled\`).",
      table: {
        category: "Content"
      }
    },
    activeRow: {
      name: "Active row",
      control: "boolean",
      description: "Marks the second row as the persistently highlighted current item (\`active\`): blue background and accent bar.",
      table: {
        category: "Content"
      }
    },
    destructiveRow: {
      name: "Destructive row",
      control: "boolean",
      description: "Adds a red Delete row (\`destructive\`).",
      table: {
        category: "Content"
      }
    },
    listLength: {
      name: "List length",
      control: "radio",
      options: ["short", "long"],
      description: "Long adds 15 more rows so the list overflows and shows the scroll-chevron affordance instead of a native scrollbar.",
      table: {
        category: "Content"
      }
    },
    width: {
      name: "Width",
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Menu surface width: sm 200px, md 256px, lg 320px (\`className\`). See Variants → Width Scale.",
      table: {
        category: "Appearance"
      }
    },
    side: {
      name: "Opens toward",
      control: "radio",
      options: ["bottom", "top", "left", "right"],
      description: "Which side of the trigger the menu opens on (\`side\`).",
      table: {
        category: "Appearance"
      }
    },
    align: {
      name: "Alignment",
      control: "radio",
      options: ["start", "center", "end"],
      description: "How the menu lines up with the trigger along that side (\`align\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes, closing any open menu.
  <MenuDemo key={JSON.stringify(args)} {...args} />
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const ue=["Default"];export{r as Default,ue as __namedExportsOrder,he as default};
