import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as l}from"./list-item-CTIdLhdZ.js";import{M as a}from"./menu-item-CR5qklhf.js";import{B as M}from"./badge-BsM2Tnvd.js";import{H as U}from"./house-7dsFQekL.js";import{U as H}from"./users-CNa7Nyqi.js";import{S as P}from"./settings-Ddbozet5.js";import{T}from"./trash-2-yAnBWR5t.js";import{U as A}from"./user-plus-Dfrp8n7C.js";import{M as z}from"./message-square-BpbTPZlK.js";import{B as E}from"./bell-BjgN3fdD.js";import{C as R}from"./chevron-right-DZKRY3zX.js";import{S as q}from"./star-BBKukw_S.js";import{B as _}from"./box-Gl1aLw8q.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEcfmm_F.js";const ce={title:"Custom Primitives/ListItem",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={args:{title:"New Case",subtitle:"Noah Patel",meta:"51m ago"}},r={name:"With leading icon",render:()=>e.jsxs("div",{className:"w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden",children:[e.jsx(l,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong",children:e.jsx(A,{className:"h-4 w-4",strokeWidth:1.5})}),title:"New Case",subtitle:"Noah Patel",meta:"51m ago"}),e.jsx(l,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong",children:e.jsx(z,{className:"h-4 w-4",strokeWidth:1.5})}),title:"New Chat",subtitle:"Sarah Miller",meta:"56m ago"}),e.jsx(l,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary",children:e.jsx(E,{className:"h-4 w-4",strokeWidth:1.5})}),title:"System Update",subtitle:"Maintenance window at midnight",meta:"2h ago",trailing:e.jsx(M,{shape:"circle",variant:"info",size:"sm",children:"New"})})]})};function O({icon:i=!1,header:W=!1,description:C=!1,badge:c=!1,submenu:S=!1,rightSlot:d=!1,separator:B=!1,comfortable:D=!0}){const L=c||d;return e.jsxs("div",{className:"w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg",children:[e.jsx(a,{header:W?"New Case":void 0,label:"Menu Item",icon:i?e.jsx(_,{className:"h-4 w-4",strokeWidth:1.5}):void 0,description:C?"Supporting description text":void 0,rightElement:L?e.jsxs("div",{className:"flex items-center gap-2",children:[c&&e.jsx(M,{shape:"circle",variant:"info",size:"sm",children:"New"}),d&&e.jsx(q,{className:"h-4 w-4 text-lyra-fg-secondary flex-shrink-0",strokeWidth:1.5})]}):void 0,trailingIcon:S?e.jsx(R,{className:"h-4 w-4 text-lyra-fg-secondary flex-shrink-0",strokeWidth:1.5,"aria-hidden":"true"}):void 0,comfortable:D,onClick:()=>{}}),B&&e.jsx("div",{role:"separator",className:"border-b border-lyra-border-subtle my-1.5"})]})}const s={name:"MenuItem — Basic",args:{icon:!1,header:!1,description:!1,badge:!1,submenu:!1,rightSlot:!1,separator:!1,comfortable:!0},argTypes:{icon:{name:"Icon left",control:"boolean"},header:{name:"Header",control:"boolean"},description:{name:"With description",control:"boolean"},badge:{name:"With badge",control:"boolean"},submenu:{name:"With submenu",control:"boolean"},rightSlot:{name:"With right slot",control:"boolean"},separator:{name:"Separator",control:"boolean"},comfortable:{name:"Comfortable",control:"boolean"}},render:i=>e.jsx(O,{...i})},o={name:"MenuItem — States",render:()=>e.jsxs("div",{className:"w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg",children:[e.jsx(a,{label:"Default",onClick:()=>{}}),e.jsx(a,{label:"Active (current)",active:!0,onClick:()=>{}}),e.jsx(a,{label:"Destructive",destructive:!0,onClick:()=>{}}),e.jsx(a,{label:"Disabled",disabled:!0,onClick:()=>{}})]})},n={name:"MenuItem — Icon, description, shortcut",render:()=>e.jsxs("div",{className:"w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg",children:[e.jsx(a,{icon:e.jsx(U,{className:"h-4 w-4",strokeWidth:1.5}),label:"Home",active:!0,onClick:()=>{}}),e.jsx(a,{icon:e.jsx(H,{className:"h-4 w-4",strokeWidth:1.5}),label:"Team",description:"Manage members and roles",onClick:()=>{}}),e.jsx(a,{icon:e.jsx(P,{className:"h-4 w-4",strokeWidth:1.5}),label:"Settings",shortcut:"⌘,",onClick:()=>{}}),e.jsx(a,{icon:e.jsx(T,{className:"h-4 w-4",strokeWidth:1.5}),label:"Delete",destructive:!0,onClick:()=>{}})]})};var m,u,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "New Case",
    subtitle: "Noah Patel",
    meta: "51m ago"
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With leading icon",
  render: () => <div className="w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden">
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong"><UserPlus className="h-4 w-4" strokeWidth={1.5} /></div>} title="New Case" subtitle="Noah Patel" meta="51m ago" />
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong"><MessageSquare className="h-4 w-4" strokeWidth={1.5} /></div>} title="New Chat" subtitle="Sarah Miller" meta="56m ago" />
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary"><Bell className="h-4 w-4" strokeWidth={1.5} /></div>} title="System Update" subtitle="Maintenance window at midnight" meta="2h ago" trailing={<Badge shape="circle" variant="info" size="sm">New</Badge>} />
    </div>
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var p,x,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "MenuItem — Basic",
  args: {
    icon: false,
    header: false,
    description: false,
    badge: false,
    submenu: false,
    rightSlot: false,
    separator: false,
    comfortable: true
  },
  argTypes: {
    icon: {
      name: "Icon left",
      control: "boolean"
    },
    header: {
      name: "Header",
      control: "boolean"
    },
    description: {
      name: "With description",
      control: "boolean"
    },
    badge: {
      name: "With badge",
      control: "boolean"
    },
    submenu: {
      name: "With submenu",
      control: "boolean"
    },
    rightSlot: {
      name: "With right slot",
      control: "boolean"
    },
    separator: {
      name: "Separator",
      control: "boolean"
    },
    comfortable: {
      name: "Comfortable",
      control: "boolean"
    }
  },
  render: args => <MenuItemBasicDemo {...args as any} />
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,w,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "MenuItem — States",
  render: () => <div className="w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
      <MenuItem label="Default" onClick={() => {}} />
      <MenuItem label="Active (current)" active onClick={() => {}} />
      <MenuItem label="Destructive" destructive onClick={() => {}} />
      <MenuItem label="Disabled" disabled onClick={() => {}} />
    </div>
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var j,k,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "MenuItem — Icon, description, shortcut",
  render: () => <div className="w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
}`,...(I=(k=n.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const de=["Default","WithLeading","MenuItemBasic","MenuItemStates","MenuItemWithIconsAndMeta"];export{t as Default,s as MenuItemBasic,o as MenuItemStates,n as MenuItemWithIconsAndMeta,r as WithLeading,de as __namedExportsOrder,ce as default};
