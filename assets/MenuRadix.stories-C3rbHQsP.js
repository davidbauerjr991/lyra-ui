import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as C,u as D}from"./index-C3Z0PGzo.js";import{M as a}from"./menu-radix-CtpLdDaB.js";import{B as s}from"./button-BLVj2C8E.js";import{M as j}from"./menu-BOmxrDJo.js";import{P as A}from"./popover-Cbqqiubp.js";import{I as ke}from"./input-CHxvM1hc.js";import{B as o}from"./box-DjPaLKGI.js";import{C as l}from"./copy-CtBWyGKZ.js";import{S as n}from"./share-2-D8PdytSi.js";import{D as d}from"./download-BLBOXyII.js";import{S}from"./scissors-9SMedI4E.js";import{c as M}from"./createLucideIcon-aII_sYFw.js";import{F as t}from"./file-text-DK8c8V5C.js";import{T as i}from"./trash-2-DTLo779S.js";import{M as W}from"./mail-BgfsS5Lx.js";import{S as We}from"./search-CZxBQJsH.js";import{X as je}from"./x-CzxgOx-T.js";import{U as ge}from"./users-jAzTZfU5.js";import{E as Se}from"./ellipsis-vertical-D6ttVBVO.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./index-1evVQkiP.js";import"./tooltip-DKTByY8R.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./menu-item-5A6Jq-l-.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=M("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=M("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=M("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Wa={title:"Headless Primitives/Menu",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},ye=[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"},"separator",{id:"4",label:"Menu Item"},{id:"5",label:"Menu Item",submenu:[{id:"5a",label:"Sub Item 1"},{id:"5b",label:"Sub Item 2"},{id:"5c",label:"Sub Item 3"}]},"separator",{id:"6",label:"Delete",destructive:!0}],m={name:"Default",args:{modal:!0},parameters:{controls:{include:["Modal","modal"],sort:"none"}},argTypes:{modal:{name:"Modal",control:"boolean",description:"While open, hide the rest of the page from assistive tech and block outside clicks (`modal`, Radix's default). Off leaves the page exposed; use it where an accessibility checker flags the hidden trigger.",table:{category:"Behavior",defaultValue:{summary:"true"}}}},render:({modal:r=!0})=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),items:ye,className:"w-64",modal:r},String(r))},h={name:"Keyboard Focus",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Tab to the button, press Enter, then ↓ / ↑."}),e.jsx("div",{children:e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),items:ye,className:"w-64"})})]})},p={name:"Simple",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Cut",icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}]})},u={name:"With Icons & Shortcuts",render:()=>e.jsx(a,{trigger:e.jsxs(s,{variant:"ghost",size:"sm",children:[e.jsx(Se,{className:"h-4 w-4",strokeWidth:1.5}),"Actions"]}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘N"},{id:"2",label:"Open Recent",icon:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(ge,{className:"h-4 w-4",strokeWidth:1.5})}]},{id:"4",label:"Export",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌫"}]})},b={name:"With Submenus",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(ge,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3c1",label:"From contacts"},{id:"3c2",label:"By email"}]}]},{id:"4",label:"Export",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})},x={name:"Submenu Open",render:()=>e.jsx("div",{style:{minHeight:320},children:e.jsx(a,{modal:!1,trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})}]},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})}),play:async({canvasElement:r})=>{const c=C(document.body),ve=await C(r).findByText("Open Menu");await D.click(ve);const fe=await c.findByText("Open Recent");await D.click(fe)}},N={name:"With Disabled Items",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Archive",disabled:!0},{id:"4",label:"Move",submenu:[{id:"4a",label:"Folder A"},{id:"4b",label:"Folder B"}]},"separator",{id:"5",label:"Delete",destructive:!0,icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5})}]})},w={name:"With Active Item",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Overview",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Analytics",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),active:!0},{id:"3",label:"Settings",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5})}]})},g={name:"With Descriptions",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Item label"},{id:"2",label:"Item label",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),description:"Secondary Text"},"separator",{id:"3",label:"Import from file",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"4",label:"Connect service",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}]})},y={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Without icons"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With icons"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Download",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5})}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With shortcuts"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Cut",icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With dividers"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Download",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With disabled items"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Archive",disabled:!0},"separator",{id:"3",label:"Delete",destructive:!0,icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5})}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Active (current) item"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Overview"},{id:"2",label:"Analytics",active:!0},{id:"3",label:"Settings"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With descriptions"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Import from file",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"2",label:"Connect service",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}]})]})]})},v={name:"Long List (Scroll Chevrons)",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:Array.from({length:20},(r,c)=>({id:`item-${c+1}`,label:`Item label ${c+1}`}))})},f={name:"All Item States",render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Open the menu, then hover/click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants."}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[320px]",items:[{id:"1",label:"Menu Item",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",submenu:[{id:"1a",label:"Sub Item"}]},{id:"2",label:"Menu Item (no icon)",shortcut:"⌘⌥S",submenu:[{id:"2a",label:"Sub Item"}]},"separator",{id:"3",label:"Menu Item",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S"},{id:"4",label:"Disabled Item",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",disabled:!0},"separator",{id:"5",label:"Destructive Item",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌘⌥S"}]})]})},k={name:"Width Scale",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap items-start gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"sm — 200px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Simple item-only menus, no header or search row"})]}),e.jsx(j,{items:[{id:"1",label:"Cut",icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Paste",icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"md — 256px (w-64)"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A search/filter row above the list (e.g. agent-profile.tsx)"})]}),e.jsx(A,{"aria-label":"Menu with search",open:!0,placement:"bottom",align:"start",showArrow:!1,bodyPadding:!1,header:e.jsx("div",{className:"px-3 py-2.5 border-b border-lyra-border-subtle",children:e.jsx(ke,{type:"text",placeholder:"Search statuses",startIcon:e.jsx(We,{className:"h-4 w-4 text-lyra-fg-disabled",strokeWidth:1.4,"aria-hidden":"true"})})}),content:e.jsx(j,{bare:!0,items:[{id:"1",label:"Available"},{id:"2",label:"Away"},{id:"3",label:"Do not disturb"}],className:"w-64"}),children:e.jsx("span",{className:"inline-block w-64 h-0","aria-hidden":"true"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"lg — 320px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A title header + close button, or icon items (e.g. create-new.tsx)"})]}),e.jsx(A,{"aria-label":"Menu with title and close button",open:!0,placement:"bottom",align:"start",showArrow:!1,maxWidth:"320px",bodyPadding:!1,header:e.jsxs("div",{className:"flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3",children:[e.jsx("span",{className:"lyra-body-lg-emphasis text-lyra-fg-default",children:"New Outbound"}),e.jsx(je,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5,"aria-hidden":"true"})]}),content:e.jsx(j,{bare:!0,items:[{id:"1",label:"Call",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"SMS",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[320px] p-2"}),children:e.jsx("span",{className:"inline-block w-[320px] h-0","aria-hidden":"true"})})]})]})};var F,R,T;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Default",
  args: {
    modal: true
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Modal", "modal"],
      sort: "none"
    }
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
    }
  },
  render: ({
    modal = true
  }) => <MenuRadix key={String(modal)} trigger={<Button variant="outline">Open Menu</Button>} items={defaultItems} className="w-64" modal={modal} />
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var E,P,L;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Keyboard Focus",
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab to the button, press Enter, then ↓ / ↑.</p>
      <div>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} items={defaultItems} className="w-64" />
      </div>
    </div>
}`,...(L=(P=h.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var V,J,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Simple",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
    id: "1",
    label: "Cut",
    icon: <Scissors className="h-4 w-4" strokeWidth={1.5} />,
    shortcut: "⌘X"
  }, {
    id: "2",
    label: "Copy",
    icon: <Copy className="h-4 w-4" strokeWidth={1.5} />,
    shortcut: "⌘C"
  }, {
    id: "3",
    label: "Paste",
    icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} />,
    shortcut: "⌘V"
  }]} />
}`,...(U=(J=p.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var H,X,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With Icons & Shortcuts",
  render: () => <MenuRadix trigger={<Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          Actions
        </Button>} className="w-64" items={[{
    id: "1",
    label: "New File",
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
    shortcut: "⌘N"
  }, {
    id: "2",
    label: "Open Recent",
    icon: <FolderOpen className="h-4 w-4" strokeWidth={1.5} />,
    submenu: [{
      id: "2a",
      label: "project-alpha.ts"
    }, {
      id: "2b",
      label: "dashboard.tsx"
    }, {
      id: "2c",
      label: "settings.json"
    }]
  }, "separator", {
    id: "3",
    label: "Share",
    icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
    submenu: [{
      id: "3a",
      label: "Copy Link",
      icon: <Link className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "3b",
      label: "Email",
      icon: <Mail className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "3c",
      label: "Invite People",
      icon: <Users className="h-4 w-4" strokeWidth={1.5} />
    }]
  }, {
    id: "4",
    label: "Export",
    icon: <Download className="h-4 w-4" strokeWidth={1.5} />,
    submenu: [{
      id: "4a",
      label: "PDF"
    }, {
      id: "4b",
      label: "CSV"
    }, {
      id: "4c",
      label: "JSON"
    }]
  }, "separator", {
    id: "5",
    label: "Delete",
    icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />,
    destructive: true,
    shortcut: "⌫"
  }]} />
}`,...(K=(X=u.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var _,$,q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "With Submenus",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
    id: "1",
    label: "New File",
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
  }, {
    id: "2",
    label: "Open Recent",
    icon: <FolderOpen className="h-4 w-4" strokeWidth={1.5} />,
    submenu: [{
      id: "2a",
      label: "project-alpha.ts"
    }, {
      id: "2b",
      label: "dashboard.tsx"
    }, {
      id: "2c",
      label: "settings.json"
    }]
  }, "separator", {
    id: "3",
    label: "Share",
    icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
    submenu: [{
      id: "3a",
      label: "Copy Link",
      icon: <Link className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "3b",
      label: "Email",
      icon: <Mail className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "3c",
      label: "Invite People",
      icon: <Users className="h-4 w-4" strokeWidth={1.5} />,
      submenu: [{
        id: "3c1",
        label: "From contacts"
      }, {
        id: "3c2",
        label: "By email"
      }]
    }]
  }, {
    id: "4",
    label: "Export",
    icon: <Download className="h-4 w-4" strokeWidth={1.5} />,
    submenu: [{
      id: "4a",
      label: "PDF"
    }, {
      id: "4b",
      label: "CSV"
    }, {
      id: "4c",
      label: "JSON"
    }]
  }, "separator", {
    id: "5",
    label: "Delete",
    icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />,
    destructive: true
  }]} />
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,G,Q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Submenu Open",
  render: () => <div style={{
    minHeight: 320
  }}>
      <MenuRadix
    // Not modal: Radix's modal mode marks the rest of the page (including
    // this focusable trigger) aria-hidden while open, which accessibility
    // checkers report as \`aria-hidden-focus\`.
    modal={false} trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
      id: "1",
      label: "New File",
      icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "2",
      label: "Open Recent",
      icon: <FolderOpen className="h-4 w-4" strokeWidth={1.5} />,
      submenu: [{
        id: "2a",
        label: "project-alpha.ts"
      }, {
        id: "2b",
        label: "dashboard.tsx"
      }, {
        id: "2c",
        label: "settings.json"
      }]
    }, "separator", {
      id: "3",
      label: "Share",
      icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
      submenu: [{
        id: "3a",
        label: "Copy Link",
        icon: <Link className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "3b",
        label: "Email",
        icon: <Mail className="h-4 w-4" strokeWidth={1.5} />
      }]
    }, "separator", {
      id: "4",
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />,
      destructive: true
    }]} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    // Radix portals the menu to document.body, so search from document
    // level rather than scoping to canvasElement.
    const body = within(document.body);
    const canvas = within(canvasElement);
    const trigger = await canvas.findByText("Open Menu");
    await userEvent.click(trigger);
    const submenuTrigger = await body.findByText("Open Recent");
    await userEvent.click(submenuTrigger);
  }
}`,...(Q=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Y,Z,ee;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "With Disabled Items",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
    id: "1",
    label: "Edit",
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
  }, {
    id: "2",
    label: "Duplicate",
    icon: <Copy className="h-4 w-4" strokeWidth={1.5} />
  }, "separator", {
    id: "3",
    label: "Archive",
    disabled: true
  }, {
    id: "4",
    label: "Move",
    submenu: [{
      id: "4a",
      label: "Folder A"
    }, {
      id: "4b",
      label: "Folder B"
    }]
  }, "separator", {
    id: "5",
    label: "Delete",
    destructive: true,
    icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />
  }]} />
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,se,te;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "With Active Item",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
    id: "1",
    label: "Overview",
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
  }, {
    id: "2",
    label: "Analytics",
    icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
    active: true
  }, {
    id: "3",
    label: "Settings",
    icon: <Download className="h-4 w-4" strokeWidth={1.5} />
  }]} />
}`,...(te=(se=w.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,ie,le;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "With Descriptions",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
    id: "1",
    label: "Item label"
  }, {
    id: "2",
    label: "Item label",
    icon: <Box className="h-4 w-4" strokeWidth={1.5} />,
    description: "Secondary Text"
  }, "separator", {
    id: "3",
    label: "Import from file",
    icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
    description: "Upload a CSV or JSON file"
  }, {
    id: "4",
    label: "Connect service",
    icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
    description: "Link an external data source"
  }]} />
}`,...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,oe,de;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-wrap gap-8 items-start">
      {/* No icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Without icons</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
        id: "1",
        label: "Menu Item"
      }, {
        id: "2",
        label: "Menu Item"
      }, {
        id: "3",
        label: "Menu Item"
      }]} />
      </div>

      {/* With icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With icons</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
        id: "1",
        label: "Copy",
        icon: <Copy className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "2",
        label: "Share",
        icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "3",
        label: "Download",
        icon: <Download className="h-4 w-4" strokeWidth={1.5} />
      }]} />
      </div>

      {/* With shortcuts */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With shortcuts</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
        id: "1",
        label: "Cut",
        icon: <Scissors className="h-4 w-4" strokeWidth={1.5} />,
        shortcut: "⌘X"
      }, {
        id: "2",
        label: "Copy",
        icon: <Copy className="h-4 w-4" strokeWidth={1.5} />,
        shortcut: "⌘C"
      }, {
        id: "3",
        label: "Paste",
        icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} />,
        shortcut: "⌘V"
      }]} />
      </div>

      {/* With dividers */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With dividers</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
        id: "1",
        label: "Edit",
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "2",
        label: "Duplicate",
        icon: <Copy className="h-4 w-4" strokeWidth={1.5} />
      }, "separator", {
        id: "3",
        label: "Download",
        icon: <Download className="h-4 w-4" strokeWidth={1.5} />
      }, "separator", {
        id: "4",
        label: "Delete",
        icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />,
        destructive: true
      }]} />
      </div>

      {/* With disabled items */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With disabled items</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
        id: "1",
        label: "Edit",
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "2",
        label: "Archive",
        disabled: true
      }, "separator", {
        id: "3",
        label: "Delete",
        destructive: true,
        icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />
      }]} />
      </div>

      {/* Active (current) item */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Active (current) item</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[200px]" items={[{
        id: "1",
        label: "Overview"
      }, {
        id: "2",
        label: "Analytics",
        active: true
      }, {
        id: "3",
        label: "Settings"
      }]} />
      </div>

      {/* With descriptions */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With descriptions</p>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
        id: "1",
        label: "Import from file",
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
        description: "Upload a CSV or JSON file"
      }, {
        id: "2",
        label: "Connect service",
        icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
        description: "Link an external data source"
      }]} />
      </div>
    </div>
}`,...(de=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,me,he;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Long List (Scroll Chevrons)",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={Array.from({
    length: 20
  }, (_, i) => ({
    id: \`item-\${i + 1}\`,
    label: \`Item label \${i + 1}\`
  }))} />
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ue,be;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "All Item States",
  render: () => <div className="flex flex-col gap-2">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Open the menu, then hover/click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants.
      </p>
      <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-[320px]" items={[{
      id: "1",
      label: "Menu Item",
      icon: <Box className="h-4 w-4" strokeWidth={1.5} />,
      shortcut: "⌘⌥S",
      submenu: [{
        id: "1a",
        label: "Sub Item"
      }]
    }, {
      id: "2",
      label: "Menu Item (no icon)",
      shortcut: "⌘⌥S",
      submenu: [{
        id: "2a",
        label: "Sub Item"
      }]
    }, "separator", {
      id: "3",
      label: "Menu Item",
      icon: <Box className="h-4 w-4" strokeWidth={1.5} />,
      shortcut: "⌘⌥S"
    }, {
      id: "4",
      label: "Disabled Item",
      icon: <Box className="h-4 w-4" strokeWidth={1.5} />,
      shortcut: "⌘⌥S",
      disabled: true
    }, "separator", {
      id: "5",
      label: "Destructive Item",
      icon: <Box className="h-4 w-4" strokeWidth={1.5} />,
      destructive: true,
      shortcut: "⌘⌥S"
    }]} />
    </div>
}`,...(be=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var xe,Ne,we;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "Width Scale",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-wrap items-start gap-8">
      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">sm — 200px</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">Simple item-only menus, no header or search row</p>
        </div>
        <Menu items={[{
        id: "1",
        label: "Cut",
        icon: <Scissors className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "2",
        label: "Copy",
        icon: <Copy className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "3",
        label: "Paste",
        icon: <Clipboard className="h-4 w-4" strokeWidth={1.5} />
      }, "separator", {
        id: "4",
        label: "Delete",
        icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />,
        destructive: true
      }]} className="w-[200px]" />
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">md — 256px (w-64)</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">A search/filter row above the list (e.g. agent-profile.tsx)</p>
        </div>
        {/* Real Popover as the container (not a hand-rolled bordered div) —
            Menu renders \`bare\` so it stretches to fill Popover's own surface
            instead of drawing a second nested border/shadow/background. */}
        <Popover aria-label="Menu with search" open placement="bottom" align="start" showArrow={false}
      // Menu's rows are edge-to-edge with their own p-1 inset — opt out
      // of Popover's default 20px body padding.
      bodyPadding={false} header={<div className="px-3 py-2.5 border-b border-lyra-border-subtle">
              <Input type="text" placeholder="Search statuses" startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />} />
            </div>} content={<Menu bare items={[{
        id: "1",
        label: "Available"
      }, {
        id: "2",
        label: "Away"
      }, {
        id: "3",
        label: "Do not disturb"
      }]} className="w-64" />}>
          <span className="inline-block w-64 h-0" aria-hidden="true" />
        </Popover>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">lg — 320px</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">A title header + close button, or icon items (e.g. create-new.tsx)</p>
        </div>
        <Popover aria-label="Menu with title and close button" open placement="bottom" align="start" showArrow={false} maxWidth="320px"
      // Menu's rows are edge-to-edge with their own p-2 inset — opt out
      // of Popover's default 20px body padding.
      bodyPadding={false} header={<div className="flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3">
              <span className="lyra-body-lg-emphasis text-lyra-fg-default">New Outbound</span>
              <X className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
            </div>} content={<Menu bare items={[{
        id: "1",
        label: "Call",
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "2",
        label: "Email",
        icon: <Mail className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "3",
        label: "SMS",
        icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />
      }]} className="w-[320px] p-2" />}>
          <span className="inline-block w-[320px] h-0" aria-hidden="true" />
        </Popover>
      </div>
    </div>
}`,...(we=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};const ja=["Default","KeyboardFocus","Simple","WithIconsAndShortcuts","WithSubmenus","SubmenuOpen","WithDisabled","WithActive","WithDescriptions","AllVariants","LongList","AllStates","WidthScale"];export{f as AllStates,y as AllVariants,m as Default,h as KeyboardFocus,v as LongList,p as Simple,x as SubmenuOpen,k as WidthScale,w as WithActive,g as WithDescriptions,N as WithDisabled,u as WithIconsAndShortcuts,b as WithSubmenus,ja as __namedExportsOrder,Wa as default};
