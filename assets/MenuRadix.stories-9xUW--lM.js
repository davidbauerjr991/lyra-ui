import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as C,u as D}from"./index-UUuKwP6t.js";import{M as a}from"./menu-radix-BemP-mIi.js";import{B as s}from"./button-C9HuGDNI.js";import{M as f}from"./menu-B5sfcyl8.js";import{P as B}from"./popover-B46F7YEu.js";import{I as we}from"./input-B6wjqCOy.js";import{B as r}from"./box-Gl1aLw8q.js";import{C as l}from"./copy-BRsdvqrt.js";import{S as n}from"./share-2-C7RbsKn4.js";import{D as o}from"./download-DQY7JPv0.js";import{S as k}from"./scissors-BWG8HrAt.js";import{c as j}from"./createLucideIcon-DEcfmm_F.js";import{F as t}from"./file-text-D-AW36xm.js";import{T as i}from"./trash-2-yAnBWR5t.js";import{M as W}from"./mail-CGsQAUqz.js";import{S as ge}from"./search-aUstRSOi.js";import{X as ye}from"./x-N8aIqrq2.js";import{U as be}from"./users-CNa7Nyqi.js";import{E as ve}from"./ellipsis-vertical-CZvSBcNM.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./index-1evVQkiP.js";import"./tooltip-Cy9hcxi2.js";import"./badge-go1ZjKcF.js";import"./menu-item-CR5qklhf.js";import"./index-5dOKg3EE.js";import"./index-C1YDQLuO.js";import"./container-header-yODun0G6.js";import"./error-icon-Jj0G9Pna.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=j("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=j("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=j("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),xa={title:"Headless Primitives/Menu",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},We=[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"},"separator",{id:"4",label:"Menu Item"},{id:"5",label:"Menu Item",submenu:[{id:"5a",label:"Sub Item 1"},{id:"5b",label:"Sub Item 2"},{id:"5c",label:"Sub Item 3"}]},"separator",{id:"6",label:"Delete",destructive:!0}],c={name:"Default",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),items:We,className:"w-64"})},m={name:"Simple",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Cut",icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}]})},h={name:"With Icons & Shortcuts",render:()=>e.jsx(a,{trigger:e.jsxs(s,{variant:"ghost",size:"sm",children:[e.jsx(ve,{className:"h-4 w-4",strokeWidth:1.5}),"Actions"]}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘N"},{id:"2",label:"Open Recent",icon:e.jsx(M,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(be,{className:"h-4 w-4",strokeWidth:1.5})}]},{id:"4",label:"Export",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌫"}]})},p={name:"With Submenus",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(M,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(be,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3c1",label:"From contacts"},{id:"3c2",label:"By email"}]}]},{id:"4",label:"Export",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})},u={name:"Submenu Open",render:()=>e.jsx("div",{style:{minHeight:320},children:e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"New File",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(M,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})}]},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})}),play:async({canvasElement:I})=>{const d=C(document.body),xe=await C(I).findByText("Open Menu");await D.click(xe);const Ne=await d.findByText("Open Recent");await D.click(Ne)}},b={name:"With Disabled Items",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Archive",disabled:!0},{id:"4",label:"Move",submenu:[{id:"4a",label:"Folder A"},{id:"4b",label:"Folder B"}]},"separator",{id:"5",label:"Delete",destructive:!0,icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5})}]})},x={name:"With Active Item",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Overview",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Analytics",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),active:!0},{id:"3",label:"Settings",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5})}]})},N={name:"With Descriptions",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Item label"},{id:"2",label:"Item label",icon:e.jsx(r,{className:"h-4 w-4",strokeWidth:1.5}),description:"Secondary Text"},"separator",{id:"3",label:"Import from file",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"4",label:"Connect service",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}]})},w={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Without icons"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With icons"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Share",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Download",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5})}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With shortcuts"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Cut",icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With dividers"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Download",icon:e.jsx(o,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With disabled items"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Edit",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Archive",disabled:!0},"separator",{id:"3",label:"Delete",destructive:!0,icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5})}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Active (current) item"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[200px]",items:[{id:"1",label:"Overview"},{id:"2",label:"Analytics",active:!0},{id:"3",label:"Settings"}]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With descriptions"}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:[{id:"1",label:"Import from file",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"2",label:"Connect service",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}]})]})]})},g={name:"Long List (Scroll Chevrons)",render:()=>e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-64",items:Array.from({length:20},(I,d)=>({id:`item-${d+1}`,label:`Item label ${d+1}`}))})},y={name:"All Item States",render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Open the menu, then hover/click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants."}),e.jsx(a,{trigger:e.jsx(s,{variant:"outline",children:"Open Menu"}),className:"w-[320px]",items:[{id:"1",label:"Menu Item",icon:e.jsx(r,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",submenu:[{id:"1a",label:"Sub Item"}]},{id:"2",label:"Menu Item (no icon)",shortcut:"⌘⌥S",submenu:[{id:"2a",label:"Sub Item"}]},"separator",{id:"3",label:"Menu Item",icon:e.jsx(r,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S"},{id:"4",label:"Disabled Item",icon:e.jsx(r,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",disabled:!0},"separator",{id:"5",label:"Destructive Item",icon:e.jsx(r,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌘⌥S"}]})]})},v={name:"Width Scale",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap items-start gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"sm — 200px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Simple item-only menus, no header or search row"})]}),e.jsx(f,{items:[{id:"1",label:"Cut",icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Paste",icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"md — 256px (w-64)"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A search/filter row above the list (e.g. agent-profile.tsx)"})]}),e.jsx(B,{open:!0,placement:"bottom",align:"start",showArrow:!1,bodyPadding:!1,header:e.jsx("div",{className:"px-3 py-2.5 border-b border-lyra-border-subtle",children:e.jsx(we,{type:"text",placeholder:"Search statuses",startIcon:e.jsx(ge,{className:"h-4 w-4 text-lyra-fg-disabled",strokeWidth:1.4,"aria-hidden":"true"})})}),content:e.jsx(f,{bare:!0,items:[{id:"1",label:"Available"},{id:"2",label:"Away"},{id:"3",label:"Do not disturb"}],className:"w-64"}),children:e.jsx("span",{className:"inline-block w-64 h-0","aria-hidden":"true"})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"lg — 320px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A title header + close button, or icon items (e.g. create-new.tsx)"})]}),e.jsx(B,{open:!0,placement:"bottom",align:"start",showArrow:!1,maxWidth:"320px",bodyPadding:!1,header:e.jsxs("div",{className:"flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3",children:[e.jsx("span",{className:"lyra-body-lg-emphasis text-lyra-fg-default",children:"New Outbound"}),e.jsx(ye,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5,"aria-hidden":"true"})]}),content:e.jsx(f,{bare:!0,items:[{id:"1",label:"Call",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Email",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"SMS",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[320px] p-2"}),children:e.jsx("span",{className:"inline-block w-[320px] h-0","aria-hidden":"true"})})]})]})};var A,F,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Default",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} items={defaultItems} className="w-64" />
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,T,E;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var L,V,J;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(J=(V=h.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var U,H,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(H=p.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var _,$,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Submenu Open",
  render: () => <div style={{
    minHeight: 320
  }}>
      <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={[{
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
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,G,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Y,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,se;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,ne,ie;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,re,oe;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Long List (Scroll Chevrons)",
  render: () => <MenuRadix trigger={<Button variant="outline">Open Menu</Button>} className="w-64" items={Array.from({
    length: 20
  }, (_, i) => ({
    id: \`item-\${i + 1}\`,
    label: \`Item label \${i + 1}\`
  }))} />
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var de,ce,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var he,pe,ue;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
        <Popover open placement="bottom" align="start" showArrow={false}
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
        <Popover open placement="bottom" align="start" showArrow={false} maxWidth="320px"
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
}`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Na=["Default","Simple","WithIconsAndShortcuts","WithSubmenus","SubmenuOpen","WithDisabled","WithActive","WithDescriptions","AllVariants","LongList","AllStates","WidthScale"];export{y as AllStates,w as AllVariants,c as Default,g as LongList,m as Simple,u as SubmenuOpen,v as WidthScale,x as WithActive,N as WithDescriptions,b as WithDisabled,h as WithIconsAndShortcuts,p as WithSubmenus,Na as __namedExportsOrder,xa as default};
