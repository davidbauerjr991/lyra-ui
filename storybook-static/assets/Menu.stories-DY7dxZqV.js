import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as s}from"./menu-BPKqDbWq.js";import{B as n}from"./box-Gl1aLw8q.js";import{C as l}from"./copy-BRsdvqrt.js";import{c as r}from"./createLucideIcon-DEcfmm_F.js";import{D as x}from"./download-DQY7JPv0.js";import{S as J}from"./scissors-BWG8HrAt.js";import{F as a}from"./file-text-D-AW36xm.js";import{T as t}from"./trash-2-yAnBWR5t.js";import{M as U}from"./mail-CGsQAUqz.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./chevron-right-DZKRY3zX.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=r("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=r("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=r("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=r("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=r("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),oe={title:"Atoms/Menu",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},z=[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"},"separator",{id:"4",label:"Menu Item"},{id:"5",label:"Menu Item",submenu:[{id:"5a",label:"Sub Item 1"},{id:"5b",label:"Sub Item 2"},{id:"5c",label:"Sub Item 3"}]},"separator",{id:"6",label:"Delete",destructive:!0}],o={name:"Default",render:()=>e.jsx(s,{items:z,className:"w-[260px]"})},c={name:"Simple",render:()=>e.jsx(s,{items:[{id:"1",label:"Cut",icon:e.jsx(J,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(q,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}],className:"w-[240px]"})},d={name:"With Icons & Shortcuts",render:()=>e.jsx(s,{items:[{id:"1",label:"New File",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘N"},{id:"2",label:"Open Recent",icon:e.jsx(R,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(X,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(U,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(_,{className:"h-4 w-4",strokeWidth:1.5})}]},{id:"4",label:"Export",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌫"}],className:"w-[260px]"})},m={name:"With Submenus",render:()=>e.jsx("div",{className:"pl-4 pt-4",style:{minHeight:400},children:e.jsx(s,{items:[{id:"1",label:"New File",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Open Recent",icon:e.jsx(R,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"2a",label:"project-alpha.ts"},{id:"2b",label:"dashboard.tsx"},{id:"2c",label:"settings.json"}]},"separator",{id:"3",label:"Share",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3a",label:"Copy Link",icon:e.jsx(X,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3b",label:"Email",icon:e.jsx(U,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3c",label:"Invite People",icon:e.jsx(_,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"3c1",label:"From contacts"},{id:"3c2",label:"By email"}]}]},{id:"4",label:"Export",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5}),submenu:[{id:"4a",label:"PDF"},{id:"4b",label:"CSV"},{id:"4c",label:"JSON"}]},"separator",{id:"5",label:"Delete",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[260px]"})})},h={name:"With Disabled Items",render:()=>e.jsx(s,{items:[{id:"1",label:"Edit",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Archive",disabled:!0},{id:"4",label:"Move",submenu:[{id:"4a",label:"Folder A"},{id:"4b",label:"Folder B"}]},"separator",{id:"5",label:"Delete",destructive:!0,icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[220px]"})},p={name:"With Descriptions",render:()=>e.jsx(s,{items:[{id:"1",label:"Item label"},{id:"2",label:"Item label",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),description:"Secondary Text"},"separator",{id:"3",label:"Import from file",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"4",label:"Connect service",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}],className:"w-[280px]"})},b={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-start",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Without icons"}),e.jsx(s,{items:[{id:"1",label:"Menu Item"},{id:"2",label:"Menu Item"},{id:"3",label:"Menu Item"}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With icons"}),e.jsx(s,{items:[{id:"1",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Share",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5})},{id:"3",label:"Download",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[200px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With shortcuts"}),e.jsx(s,{items:[{id:"1",label:"Cut",icon:e.jsx(J,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘X"},{id:"2",label:"Copy",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘C"},{id:"3",label:"Paste",icon:e.jsx(q,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘V"}],className:"w-[220px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With dividers"}),e.jsx(s,{items:[{id:"1",label:"Edit",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Duplicate",icon:e.jsx(l,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"3",label:"Download",icon:e.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"4",label:"Delete",icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}],className:"w-[220px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With disabled items"}),e.jsx(s,{items:[{id:"1",label:"Edit",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})},{id:"2",label:"Archive",disabled:!0},"separator",{id:"3",label:"Delete",destructive:!0,icon:e.jsx(t,{className:"h-4 w-4",strokeWidth:1.5})}],className:"w-[220px]"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With descriptions"}),e.jsx(s,{items:[{id:"1",label:"Import from file",icon:e.jsx(a,{className:"h-4 w-4",strokeWidth:1.5}),description:"Upload a CSV or JSON file"},{id:"2",label:"Connect service",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),description:"Link an external data source"}],className:"w-[260px]"})]})]})},u={name:"All Item States",render:()=>e.jsxs("div",{className:"flex flex-col gap-1 w-[320px]",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-2",children:"Hover and click items to see all interactive states — accent bar, hover bg, pressed bg, destructive variants."}),e.jsx(s,{items:[{id:"1",label:"Menu Item",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",submenu:[{id:"1a",label:"Sub Item"}]},{id:"2",label:"Menu Item (no icon)",shortcut:"⌘⌥S",submenu:[{id:"2a",label:"Sub Item"}]},"separator",{id:"3",label:"Menu Item",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S"},{id:"4",label:"Disabled Item",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),shortcut:"⌘⌥S",disabled:!0},"separator",{id:"5",label:"Destructive Item",icon:e.jsx(n,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0,shortcut:"⌘⌥S"}],className:"w-[320px]"})]})};var N,w,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Default",
  render: () => <Menu items={defaultItems} className="w-[260px]" />
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var W,y,j;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
  }]} className="w-[240px]" />
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,S,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  }]} className="w-[260px]" />
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var g,I,D;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    }]} className="w-[260px]" />
    </div>
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var M,C,F;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  }]} className="w-[220px]" />
}`,...(F=(C=h.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var A,V,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
  }]} className="w-[280px]" />
}`,...(O=(V=p.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var T,E,L;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      }]} className="w-[220px]" />
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
      }]} className="w-[220px]" />
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
      }]} className="w-[220px]" />
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
      }]} className="w-[260px]" />
      </div>
    </div>
}`,...(L=(E=b.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,B,H;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const ce=["Default","Simple","WithIconsAndShortcuts","WithSubmenus","WithDisabled","WithDescriptions","AllVariants","AllStates"];export{u as AllStates,b as AllVariants,o as Default,c as Simple,p as WithDescriptions,h as WithDisabled,d as WithIconsAndShortcuts,m as WithSubmenus,ce as __namedExportsOrder,oe as default};
