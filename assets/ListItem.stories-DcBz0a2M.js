import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-CXOcBcs0.js";import{c as q}from"./utils-BLSKlp9E.js";import{M as a}from"./menu-item-CR5qklhf.js";import{B}from"./badge-BsM2Tnvd.js";import{H as P}from"./house-7dsFQekL.js";import{U}from"./users-CNa7Nyqi.js";import{S as H}from"./settings-Ddbozet5.js";import{T as A}from"./trash-2-yAnBWR5t.js";import{U as E}from"./user-plus-Dfrp8n7C.js";import{M as _}from"./message-square-BpbTPZlK.js";import{B as z}from"./bell-BjgN3fdD.js";import{C as V}from"./chevron-right-DZKRY3zX.js";import{S as O}from"./star-BBKukw_S.js";import{B as F}from"./box-Gl1aLw8q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEcfmm_F.js";const r=L.forwardRef(({leading:t,title:b,subtitle:o,meta:s,trailing:n,divider:l=!0,static:h=!1,className:g,...f},D)=>e.jsxs("div",{ref:D,className:q("flex items-start gap-3 px-4 py-3",!h&&"cursor-pointer transition-colors hover:bg-lyra-state-hover",l&&"border-b border-lyra-border-subtle last:border-0",g),...f,children:[t&&e.jsx("div",{className:"shrink-0 mt-0.5",children:t}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"lyra-body-md-emphasis text-lyra-fg-default truncate",children:b}),o&&e.jsx("p",{className:"lyra-body-md text-lyra-fg-default truncate mt-0.5",children:o}),s&&e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-0.5",children:s})]}),n&&e.jsx("div",{className:"shrink-0 ml-2 mt-0.5",children:n})]}));r.displayName="ListItem";r.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{leading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Leading icon or avatar"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Primary/title text"},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Secondary/subtitle text"},meta:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tertiary/meta text (e.g. timestamp)"},trailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Trailing element (e.g. badge, button, chevron)"},divider:{required:!1,tsType:{name:"boolean"},description:"Show a bottom divider",defaultValue:{value:"true",computed:!1}},static:{required:!1,tsType:{name:"boolean"},description:"Disable hover state",defaultValue:{value:"false",computed:!1}}}};const me={title:"Custom Primitives/ListItem",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},i={args:{title:"New Case",subtitle:"Noah Patel",meta:"51m ago"}},c={name:"With leading icon",render:()=>e.jsxs("div",{className:"w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden",children:[e.jsx(r,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong",children:e.jsx(E,{className:"h-4 w-4",strokeWidth:1.5})}),title:"New Case",subtitle:"Noah Patel",meta:"51m ago"}),e.jsx(r,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong",children:e.jsx(_,{className:"h-4 w-4",strokeWidth:1.5})}),title:"New Chat",subtitle:"Sarah Miller",meta:"56m ago"}),e.jsx(r,{leading:e.jsx("div",{className:"h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary",children:e.jsx(z,{className:"h-4 w-4",strokeWidth:1.5})}),title:"System Update",subtitle:"Maintenance window at midnight",meta:"2h ago",trailing:e.jsx(B,{shape:"circle",variant:"info",size:"sm",children:"New"})})]})};function G({icon:t=!1,header:b=!1,description:o=!1,badge:s=!1,submenu:n=!1,rightSlot:l=!1,separator:h=!1,comfortable:g=!0}){const f=s||l;return e.jsxs("div",{className:"w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg",children:[e.jsx(a,{header:b?"New Case":void 0,label:"Menu Item",icon:t?e.jsx(F,{className:"h-4 w-4",strokeWidth:1.5}):void 0,description:o?"Supporting description text":void 0,rightElement:f?e.jsxs("div",{className:"flex items-center gap-2",children:[s&&e.jsx(B,{shape:"circle",variant:"info",size:"sm",children:"New"}),l&&e.jsx(O,{className:"h-4 w-4 text-lyra-fg-secondary flex-shrink-0",strokeWidth:1.5})]}):void 0,trailingIcon:n?e.jsx(V,{className:"h-4 w-4 text-lyra-fg-secondary flex-shrink-0",strokeWidth:1.5,"aria-hidden":"true"}):void 0,comfortable:g,onClick:()=>{}}),h&&e.jsx("div",{role:"separator",className:"border-b border-lyra-border-subtle my-1.5"})]})}const d={name:"MenuItem — Basic",args:{icon:!1,header:!1,description:!1,badge:!1,submenu:!1,rightSlot:!1,separator:!1,comfortable:!0},argTypes:{icon:{name:"Icon left",control:"boolean"},header:{name:"Header",control:"boolean"},description:{name:"With description",control:"boolean"},badge:{name:"With badge",control:"boolean"},submenu:{name:"With submenu",control:"boolean"},rightSlot:{name:"With right slot",control:"boolean"},separator:{name:"Separator",control:"boolean"},comfortable:{name:"Comfortable",control:"boolean"}},render:t=>e.jsx(G,{...t})},m={name:"MenuItem — States",render:()=>e.jsxs("div",{className:"w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg",children:[e.jsx(a,{label:"Default",onClick:()=>{}}),e.jsx(a,{label:"Active (current)",active:!0,onClick:()=>{}}),e.jsx(a,{label:"Destructive",destructive:!0,onClick:()=>{}}),e.jsx(a,{label:"Disabled",disabled:!0,onClick:()=>{}})]})},u={name:"MenuItem — Icon, description, shortcut",render:()=>e.jsxs("div",{className:"w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg",children:[e.jsx(a,{icon:e.jsx(P,{className:"h-4 w-4",strokeWidth:1.5}),label:"Home",active:!0,onClick:()=>{}}),e.jsx(a,{icon:e.jsx(U,{className:"h-4 w-4",strokeWidth:1.5}),label:"Team",description:"Manage members and roles",onClick:()=>{}}),e.jsx(a,{icon:e.jsx(H,{className:"h-4 w-4",strokeWidth:1.5}),label:"Settings",shortcut:"⌘,",onClick:()=>{}}),e.jsx(a,{icon:e.jsx(A,{className:"h-4 w-4",strokeWidth:1.5}),label:"Delete",destructive:!0,onClick:()=>{}})]})};var p,y,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "New Case",
    subtitle: "Noah Patel",
    meta: "51m ago"
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,N,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With leading icon",
  render: () => <div className="w-80 border border-lyra-border-subtle rounded-lyra-lg overflow-hidden">
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-active-subtle flex items-center justify-center text-lyra-fg-active-strong"><UserPlus className="h-4 w-4" strokeWidth={1.5} /></div>} title="New Case" subtitle="Noah Patel" meta="51m ago" />
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-status-success-subtle flex items-center justify-center text-lyra-status-success-strong"><MessageSquare className="h-4 w-4" strokeWidth={1.5} /></div>} title="New Chat" subtitle="Sarah Miller" meta="56m ago" />
      <ListItem leading={<div className="h-9 w-9 rounded-full bg-lyra-bg-surface-shell flex items-center justify-center text-lyra-fg-secondary"><Bell className="h-4 w-4" strokeWidth={1.5} /></div>} title="System Update" subtitle="Maintenance window at midnight" meta="2h ago" trailing={<Badge shape="circle" variant="info" size="sm">New</Badge>} />
    </div>
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,k,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,W,C;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "MenuItem — States",
  render: () => <div className="w-64 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
      <MenuItem label="Default" onClick={() => {}} />
      <MenuItem label="Active (current)" active onClick={() => {}} />
      <MenuItem label="Destructive" destructive onClick={() => {}} />
      <MenuItem label="Disabled" disabled onClick={() => {}} />
    </div>
}`,...(C=(W=m.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var S,R,T;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "MenuItem — Icon, description, shortcut",
  render: () => <div className="w-72 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-1 shadow-lg">
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const ue=["Default","WithLeading","MenuItemBasic","MenuItemStates","MenuItemWithIconsAndMeta"];export{i as Default,d as MenuItemBasic,m as MenuItemStates,u as MenuItemWithIconsAndMeta,c as WithLeading,ue as __namedExportsOrder,me as default};
