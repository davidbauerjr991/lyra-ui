import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./list-item-C6oN_CzY.js";import{M as t}from"./menu-item-5A6Jq-l-.js";import{B as w}from"./badge-BIS9woDA.js";import{M as x}from"./ListItem.shared-cuszaFXn.js";import{H as v}from"./house-BNgCXuAi.js";import{U as j}from"./users-jAzTZfU5.js";import{S as M}from"./settings-B3RqFsd1.js";import{T as k}from"./trash-2-DTLo779S.js";import{U as I}from"./user-plus-CaUNCbPY.js";import{M as y}from"./message-square-BL8DSnhx.js";import{B as C}from"./bell-16x-NcfM.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./createLucideIcon-aII_sYFw.js";const O={title:"Custom Primitives/ListItem/Variants",component:l,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"ListItem — Basic",args:{title:"New Case",subtitle:"Noah Patel",meta:"51m ago"}},a={name:"With leading icon",render:()=>e.jsxs("div",{className:"w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden",children:[e.jsx(l,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong",children:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5})}),title:"New Case",subtitle:"Noah Patel",meta:"51m ago"}),e.jsx(l,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong",children:e.jsx(y,{className:"h-4 w-4",strokeWidth:1.5})}),title:"New Chat",subtitle:"Sarah Miller",meta:"56m ago"}),e.jsx(l,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary",children:e.jsx(C,{className:"h-4 w-4",strokeWidth:1.5})}),title:"System Update",subtitle:"Maintenance window at midnight",meta:"2h ago",trailing:e.jsx(w,{shape:"circle",variant:"info",size:"sm",children:"New"})})]})},r={name:"MenuItem — States",render:()=>e.jsxs("div",{className:`w-64 ${x} p-1`,children:[e.jsx(t,{label:"Default",onClick:()=>{}}),e.jsx(t,{label:"Active (current)",active:!0,onClick:()=>{}}),e.jsx(t,{label:"Destructive",destructive:!0,onClick:()=>{}}),e.jsx(t,{label:"Disabled",disabled:!0,onClick:()=>{}})]})},i={name:"MenuItem — Icon, description, shortcut",render:()=>e.jsxs("div",{className:`w-72 ${x} p-1`,children:[e.jsx(t,{icon:e.jsx(v,{className:"h-4 w-4",strokeWidth:1.5}),label:"Home",active:!0,onClick:()=>{}}),e.jsx(t,{icon:e.jsx(j,{className:"h-4 w-4",strokeWidth:1.5}),label:"Team",description:"Manage members and roles",onClick:()=>{}}),e.jsx(t,{icon:e.jsx(M,{className:"h-4 w-4",strokeWidth:1.5}),label:"Settings",shortcut:"⌘,",onClick:()=>{}}),e.jsx(t,{icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),label:"Delete",destructive:!0,onClick:()=>{}})]})};var n,o,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "ListItem — Basic",
  args: {
    title: "New Case",
    subtitle: "Noah Patel",
    meta: "51m ago"
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "With leading icon",
  render: () => <div className="w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden">
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong"><UserPlus className="h-4 w-4" strokeWidth={1.5} /></div>} title="New Case" subtitle="Noah Patel" meta="51m ago" />
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong"><MessageSquare className="h-4 w-4" strokeWidth={1.5} /></div>} title="New Chat" subtitle="Sarah Miller" meta="56m ago" />
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary"><Bell className="h-4 w-4" strokeWidth={1.5} /></div>} title="System Update" subtitle="Maintenance window at midnight" meta="2h ago" trailing={<Badge shape="circle" variant="info" size="sm">New</Badge>} />
    </div>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,g,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "MenuItem — States",
  render: () => <div className={\`w-64 \${MENU_PANEL_SURFACE} p-1\`}>
      <MenuItem label="Default" onClick={() => {}} />
      <MenuItem label="Active (current)" active onClick={() => {}} />
      <MenuItem label="Destructive" destructive onClick={() => {}} />
      <MenuItem label="Disabled" disabled onClick={() => {}} />
    </div>
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var p,f,N;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "MenuItem — Icon, description, shortcut",
  render: () => <div className={\`w-72 \${MENU_PANEL_SURFACE} p-1\`}>
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const V=["ListItemBasic","WithLeading","MenuItemStates","MenuItemWithIconsAndMeta"];export{s as ListItemBasic,r as MenuItemStates,i as MenuItemWithIconsAndMeta,a as WithLeading,V as __namedExportsOrder,O as default};
