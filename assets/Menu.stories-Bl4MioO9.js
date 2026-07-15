import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{within as le,userEvent as ne}from"./index-CH2Su9EI.js";import{M as s}from"./menu-C3iBPI2b.js";import{I as te}from"./input-BgypaUyl.js";import{B as i}from"./box-Gl1aLw8q.js";import{C as t}from"./copy-BRsdvqrt.js";import{S as l}from"./share-2-C7RbsKn4.js";import{D as N}from"./download-DQY7JPv0.js";import{S as y}from"./scissors-BWG8HrAt.js";import{c as W}from"./createLucideIcon-DEcfmm_F.js";import{F as a}from"./file-text-D-AW36xm.js";import{T as n}from"./trash-2-yAnBWR5t.js";import{M as w}from"./mail-CGsQAUqz.js";import{S as ie}from"./search-aUstRSOi.js";import{X as re}from"./x-N8aIqrq2.js";import{U as ee}from"./users-CNa7Nyqi.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./chevron-right-DZKRY3zX.js";import"./error-icon-DM5nl_7y.js";import"./label-DRpt0Xe7.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=W("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=W("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=W("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Ve={title:"Atoms/Menu",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},oe=[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"},"separator",{id:"4",label:"Menu Item"},{id:"5",label:"Menu Item",submenu:[{id:"5a",label:"Sub Item 1"},{id:"5b",label:"Sub Item 2"},{id:"5c",label:"Sub Item 3"}]},"separator",{id:"6",label:"Delete",destructive:!0}],r={name:"Default",render:()=>e.jsx(s,{items:oe,className:"w-64"})},o={name:"Width Scale",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap items-start gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"sm — 200px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"Simple item-only menus, no header or search row"})]}),e.jsx(s,{items:[{id:"1",label:"Cut",icon:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Copy",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Paste",icon:e.jsx(f,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"md — 256px (w-64)"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A search/filter row above the list (e.g. agent-profile.tsx)"})]}),e.jsxs("div",{className:"w-64 overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",children:[e.jsx("div",{className:"px-3 py-2.5 border-b border-lyra-border-subtle",children:e.jsx(te,{type:"text",placeholder:"Search statuses",startIcon:e.jsx(ie,{className:"h-4 w-4 text-lyra-fg-disabled",strokeWidth:1.4,"aria-hidden":"true"})})}),e.jsx(s,{items:[{id:"1",label:"Available"},{id:"2",label:"Away"},{id:"3",label:"Do not disturb"}],className:"rounded-none border-0 bg-transparent p-1 shadow-none"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-default",children:"lg — 320px"}),e.jsx("p",{className:"lyra-body-xs text-lyra-fg-secondary",children:"A title header + close button, or icon items (e.g. create-new.tsx)"})]}),e.jsxs("div",{className:"w-[320px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3",children:[e.jsx("span",{className:"lyra-body-lg-emphasis text-lyra-fg-default",children:"New Outbound"}),e.jsx(re,{className:"h-4 w-4 text-lyra-fg-secondary",strokeWidth:1.5,"aria-hidden":"true"})]}),e.jsx(s,{items:[{id:"1",label:"Call",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Email",icon:e.jsx(w,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"SMS",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})}],className:"rounded-none border-0 bg-transparent p-2 shadow-none"})]})]})]})},d={name:"Simple",render:()=>e.jsx(s,{items:[{id:"1",label:"Cut",icon:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(f,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}],className:"w-64"})},c={name:"With Icons & Shortcuts",render:()=>e.jsx(s,{items:[{id:"1",label:"New File",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘N"},{id:"2",label:"Open Recent",icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(v,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(w,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(ee,{className:"h-4 w-4",strokeWidth:1.5})}]},{id:"4",label:"Export",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌫"}],className:"w-64"})},m={name:"With Submenus",render:()=>e.jsx("div",{className:"pl-4 pt-4",style:{minHeight:400},children:e.jsx(s,{items:[{id:"1",label:"New File",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(v,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(w,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(ee,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3c1",label:"From contacts"},{id:"3c2",label:"By email"}]}]},{id:"4",label:"Export",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-64"})})},h={name:"Submenu Open",render:()=>e.jsx("div",{className:"pl-4 pt-4",style:{minHeight:320},children:e.jsx(s,{items:[{id:"1",label:"New File",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(v,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(w,{className:"h-4 w-4",strokeWidth:1.5})}]},"separator",{id:"4",label:"Delete",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-64"})}),play:async({canvasElement:se})=>{const ae=await le(se).findByText("Open Recent");await ne.click(ae)}},b={name:"With Disabled Items",render:()=>e.jsx(s,{items:[{id:"1",label:"Edit",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Archive",disabled:!0},{id:"4",label:"Move",submenu:[{id:"4a",label:"Folder A"},{id:"4b",label:"Folder B"}]},"separator",{id:"5",label:"Delete",destructive:!0,icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[200px]"})},p={name:"With Descriptions",render:()=>e.jsx(s,{items:[{id:"1",label:"Item label"},{id:"2",label:"Item label",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),description:"Secondary Text"},"separator",{id:"3",label:"Import from file",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"4",label:"Connect service",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}],className:"w-64"})},u={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Without icons"}),e.jsx(s,{items:[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With icons"}),e.jsx(s,{items:[{id:"1",label:"Copy",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Share",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Download",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With shortcuts"}),e.jsx(s,{items:[{id:"1",label:"Cut",icon:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(f,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With dividers"}),e.jsx(s,{items:[{id:"1",label:"Edit",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Download",icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With disabled items"}),e.jsx(s,{items:[{id:"1",label:"Edit",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Archive",disabled:!0},"separator",{id:"3",label:"Delete",destructive:!0,icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With descriptions"}),e.jsx(s,{items:[{id:"1",label:"Import from file",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"2",label:"Connect service",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}],className:"w-64"})]})]})},x={name:"All Item States",render:()=>e.jsxs("div",{className:"flex flex-col gap-1 w-[320px]",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-2",children:"Hover and click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants."}),e.jsx(s,{items:[{id:"1",label:"Menu Item",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",submenu:[{id:"1a",label:"Sub Item"}]},{id:"2",label:"Menu Item (no icon)",shortcut:"⌘⌥S",submenu:[{id:"2a",label:"Sub Item"}]},"separator",{id:"3",label:"Menu Item",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S"},{id:"4",label:"Disabled Item",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",disabled:!0},"separator",{id:"5",label:"Destructive Item",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌘⌥S"}],className:"w-[320px]"})]})};var j,g,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Default",
  render: () => <Menu items={defaultItems} className="w-64" />
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var I,C,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <div className="w-64 overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg">
          <div className="px-3 py-2.5 border-b border-lyra-border-subtle">
            <Input type="text" placeholder="Search statuses" startIcon={<Search className="h-4 w-4 text-lyra-fg-disabled" strokeWidth={1.4} aria-hidden="true" />} />
          </div>
          <Menu items={[{
          id: "1",
          label: "Available"
        }, {
          id: "2",
          label: "Away"
        }, {
          id: "3",
          label: "Do not disturb"
        }]} className="rounded-none border-0 bg-transparent p-1 shadow-none" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <p className="lyra-body-sm-emphasis text-lyra-fg-default">lg — 320px</p>
          <p className="lyra-body-xs text-lyra-fg-secondary">A title header + close button, or icon items (e.g. create-new.tsx)</p>
        </div>
        <div className="w-[320px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg">
          <div className="flex items-center justify-between border-b border-lyra-border-subtle px-4 py-3">
            <span className="lyra-body-lg-emphasis text-lyra-fg-default">New Outbound</span>
            <X className="h-4 w-4 text-lyra-fg-secondary" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <Menu items={[{
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
        }]} className="rounded-none border-0 bg-transparent p-2 shadow-none" />
        </div>
      </div>
    </div>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var M,F,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Simple",
  render: () => <Menu items={[{
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
  }]} className="w-64" />
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var A,E,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "With Icons & Shortcuts",
  render: () => <Menu items={[{
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
  }]} className="w-64" />
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var V,L,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "With Submenus",
  render: () => <div className="pl-4 pt-4" style={{
    minHeight: 400
  }}>
      <Menu items={[{
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
    }]} className="w-64" />
    </div>
}`,...(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var B,H,R;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Submenu Open",
  render: () => <div className="pl-4 pt-4" style={{
    minHeight: 320
  }}>
      <Menu items={[{
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
    }]} className="w-64" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByText("Open Recent");
    await userEvent.click(trigger);
  }
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var J,U,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "With Disabled Items",
  render: () => <Menu items={[{
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
  }]} className="w-[200px]" />
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var q,_,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "With Descriptions",
  render: () => <Menu items={[{
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
  }]} className="w-64" />
}`,...(z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var G,K,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-wrap gap-8 items-start">
      {/* No icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Without icons</p>
        <Menu items={[{
        id: "1",
        label: "Menu Item"
      }, {
        id: "2",
        label: "Menu Item"
      }, {
        id: "3",
        label: "Menu Item"
      }]} className="w-[200px]" />
      </div>

      {/* With icons */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With icons</p>
        <Menu items={[{
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
      }]} className="w-[200px]" />
      </div>

      {/* With shortcuts */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With shortcuts</p>
        <Menu items={[{
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
      }]} className="w-[200px]" />
      </div>

      {/* With dividers */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With dividers</p>
        <Menu items={[{
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
      }]} className="w-[200px]" />
      </div>

      {/* With disabled items */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With disabled items</p>
        <Menu items={[{
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
      }]} className="w-[200px]" />
      </div>

      {/* With descriptions */}
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With descriptions</p>
        <Menu items={[{
        id: "1",
        label: "Import from file",
        icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
        description: "Upload a CSV or JSON file"
      }, {
        id: "2",
        label: "Connect service",
        icon: <Share2 className="h-4 w-4" strokeWidth={1.5} />,
        description: "Link an external data source"
      }]} className="w-64" />
      </div>
    </div>
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "All Item States",
  render: () => <div className="flex flex-col gap-1 w-[320px]">
      <p className="lyra-body-sm text-lyra-fg-secondary mb-2">
        Hover and click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants.
      </p>
      <Menu items={[{
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
    }]} className="w-[320px]" />
    </div>
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Le=["Default","WidthScale","Simple","WithIconsAndShortcuts","WithSubmenus","SubmenuOpen","WithDisabled","WithDescriptions","AllVariants","AllStates"];export{x as AllStates,u as AllVariants,r as Default,d as Simple,h as SubmenuOpen,o as WidthScale,p as WithDescriptions,b as WithDisabled,c as WithIconsAndShortcuts,m as WithSubmenus,Le as __namedExportsOrder,Ve as default};
