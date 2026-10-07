import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as f,u as v}from"./index-C3Z0PGzo.js";import{M as a}from"./menu-radix-9vcg5XDz.js";import{B as s}from"./button-CLz1-b9g.js";import{M as w}from"./menu-BOmxrDJo.js";import{P as W}from"./popover-Cbqqiubp.js";import{I as se}from"./input-CHxvM1hc.js";import{B as l}from"./box-DjPaLKGI.js";import{C as b}from"./copy-CtBWyGKZ.js";import{S as n}from"./share-2-D8PdytSi.js";import{D as x}from"./download-BLBOXyII.js";import{S as q}from"./scissors-9SMedI4E.js";import{c as G}from"./createLucideIcon-aII_sYFw.js";import{F as t}from"./file-text-DK8c8V5C.js";import{T as i}from"./trash-2-DTLo779S.js";import{L as y}from"./link-B2UeFp_8.js";import{M as N}from"./mail-BgfsS5Lx.js";import{S as te}from"./search-CZxBQJsH.js";import{X as ne}from"./x-CzxgOx-T.js";import{U as Q}from"./users-jAzTZfU5.js";import{E as ie}from"./ellipsis-vertical-D6ttVBVO.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./index-1evVQkiP.js";import"./tooltip-DKTByY8R.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./menu-item-5A6Jq-l-.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=G("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=G("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),le=[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"},"separator",{id:"4",label:"Menu Item"},{id:"5",label:"Menu Item",submenu:[{id:"5a",label:"Sub Item 1"},{id:"5b",label:"Sub Item 2"},{id:"5c",label:"Sub Item 3"}]},"separator",{id:"6",label:"Delete",destructive:!0}],ia={title:"Headless Primitives/Menu/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"Keyboard Focus",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Tab to the button, press Enter, then ↓ / ↑."}),e.jsx("div",{children:e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),items:le,className:"w-64"})})]})},o={name:"With Icons & Shortcuts",render:()=>e.jsx(a,{trigger:e.jsxs(s,{variant:"ghost",size:"sm",children:[e.jsx(ie,{className:"h-4 w-4",strokeWidth:1.5}),"Actions"]}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘N"},{id:"2",label:"Open Recent",icon:e.jsx(g,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5})}]},{id:"4",label:"Export",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌫"}]})},d={name:"With Submenus",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(g,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3c1",label:"From contacts"},{id:"3c2",label:"By email"}]}]},{id:"4",label:"Export",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})},c={name:"Submenu Open",render:()=>e.jsx("div",{style:{minHeight:320},children:e.jsx(a,{modal:!1,trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(g,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})}]},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})}),play:async({canvasElement:Z})=>{const $=f(document.body),ee=await f(Z).findByText("Open Menu");await v.click(ee);const ae=await $.findByText("Open Recent");await v.click(ae)}},m={name:"With Descriptions",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Item label"},{id:"2",label:"Item label",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),description:"Secondary Text"},"separator",{id:"3",label:"Import from file",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"4",label:"Connect service",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}]})},h={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Without icons"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With icons"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Copy",icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Download",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With shortcuts"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Cut",icon:e.jsx(q,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(Y,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With dividers"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Download",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With disabled items"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Archive",disabled:!0},"separator",{id:"3",label:"Delete",destructive:!0,icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5})}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Active (current) item"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Overview"},{id:"2",label:"Analytics",active:!0},{id:"3",label:"Settings"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With descriptions"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Import from file",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"2",label:"Connect service",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}]})]})]})},p={name:"States (All Item States)",render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Open the menu, then hover/click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants."}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[320px]",items:[{id:"1",label:"Menu Item",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",submenu:[{id:"1a",label:"Sub Item"}]},{id:"2",label:"Menu Item (no icon)",shortcut:"⌘⌥S",submenu:[{id:"2a",label:"Sub Item"}]},"separator",{id:"3",label:"Menu Item",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S"},{id:"4",label:"Disabled Item",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",disabled:!0},"separator",{id:"5",label:"Destructive Item",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌘⌥S"}]})]})},u={name:"Width Scale",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap items-start gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"sm — 200px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Simple item-only menus, no header or search row"})]}),e.jsx(w,{items:[{id:"1",label:"Cut",icon:e.jsx(q,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Copy",icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Paste",icon:e.jsx(Y,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"md — 256px (w-64)"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A search/filter row above the list (e.g. agent-profile.tsx)"})]}),e.jsx(W,{"aria-label":"Menu with search",open:!0,placement:"bottom",align:"start",showArrow:!1,bodyPadding:!1,header:e.jsx("div",{className:"px-3 py-2.5 border-b border-lyra-border-subtle",children:e.jsx(se,{type:"text",placeholder:"Search statuses",startIcon:e.jsx(te,{className:"h-4 w-4 text-lyra-fg-disabled",strokeWidth:1.4,"aria-hidden":"true"})})}),content:e.jsx(w,{bare:!0,items:[{id:"1",label:"Available"},{id:"2",label:"Away"},{id:"3",label:"Do not disturb"}],className:"w-64"}),children:e.jsx("span",{className:"inline-block w-64 h-0","aria-hidden":"true"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"lg — 320px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A title header + close button, or icon items (e.g. create-new.tsx)"})]}),e.jsx(W,{"aria-label":"Menu with title and close button",open:!0,placement:"bottom",align:"start",showArrow:!1,maxWidth:"320px",bodyPadding:!1,header:e.jsxs("div",{className:"flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3",children:[e.jsx("span",{className:"lyra-body-lg-emphasis text-lyra-fg-default",children:"New Outbound"}),e.jsx(ne,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5,"aria-hidden":"true"})]}),content:e.jsx(w,{bare:!0,items:[{id:"1",label:"Call",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Email",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"SMS",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[320px] p-2"}),children:e.jsx("span",{className:"inline-block w-[320px] h-0","aria-hidden":"true"})})]})]})};var j,k,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Keyboard Focus",
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab to the button, press Enter, then ↓ / ↑.</p>
      <div>
        <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} items={defaultItems} className="w-64" />
      </div>
    </div>
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var M,O,I;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(O=o.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var C,B,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var A,F,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var T,P,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,L,J;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(L=h.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var U,H,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "States (All Item States)",
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
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var X,z,_;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(_=(z=u.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const la=["KeyboardFocus","WithIconsAndShortcuts","WithSubmenus","SubmenuOpen","WithDescriptions","AllVariants","AllStates","WidthScale"];export{p as AllStates,h as AllVariants,r as KeyboardFocus,c as SubmenuOpen,u as WidthScale,m as WithDescriptions,o as WithIconsAndShortcuts,d as WithSubmenus,la as __namedExportsOrder,ia as default};
