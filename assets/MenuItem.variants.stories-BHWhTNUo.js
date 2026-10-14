import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as t}from"./menu-item-uivF4bHz.js";import{M as o}from"./MenuItem.shared-cuszaFXn.js";import{H as b}from"./house-BNgCXuAi.js";import{U as k}from"./users-jAzTZfU5.js";import{S as N}from"./settings-B3RqFsd1.js";import{T as i}from"./trash-2-DTLo779S.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";const U={title:"Custom Primitives/MenuItem/Variants",component:t,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"States",render:()=>e.jsxs("div",{className:`w-64 ${o} p-1`,children:[e.jsx(t,{label:"Default",onClick:()=>{}}),e.jsx(t,{label:"Active (current)",active:!0,onClick:()=>{}}),e.jsx(t,{label:"Destructive",destructive:!0,onClick:()=>{}}),e.jsx(t,{label:"Disabled",disabled:!0,onClick:()=>{}})]})},a={name:"Icon, description, shortcut",render:()=>e.jsxs("div",{className:`w-72 ${o} p-1`,children:[e.jsx(t,{icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5}),label:"Home",active:!0,onClick:()=>{}}),e.jsx(t,{icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),label:"Team",description:"Manage members and roles",onClick:()=>{}}),e.jsx(t,{icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5}),label:"Settings",shortcut:"⌘,",onClick:()=>{}}),e.jsx(t,{icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),label:"Delete",destructive:!0,onClick:()=>{}})]})},r={name:"List row (as div)",render:()=>e.jsxs("div",{className:`w-80 ${o} p-1`,children:[e.jsx(t,{as:"div",divider:!0,icon:e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5}),header:"Title and subtitle",label:"Subtitle",description:"2 min ago",active:!0,onClick:()=>{}}),e.jsx(t,{as:"div",divider:!0,icon:e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),label:"Title only (centered)",onClick:()=>{}}),e.jsx(t,{as:"div",divider:!0,static:!0,icon:e.jsx(N,{className:"h-4 w-4",strokeWidth:1.5}),header:"Static row",label:"No hover or cursor"}),e.jsx(t,{as:"div",icon:e.jsx(i,{className:"h-4 w-4",strokeWidth:1.5}),label:"With trailing control",onClick:()=>{},rightElement:e.jsx("button",{type:"button","aria-label":"Remove",className:"rounded p-1 hover:bg-lyra-state-hover",children:e.jsx(i,{className:"h-3.5 w-3.5",strokeWidth:1.5})})})]})};var n,l,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className={\`w-64 \${MENU_PANEL_SURFACE} p-1\`}>
      <MenuItem label="Default" onClick={() => {}} />
      <MenuItem label="Active (current)" active onClick={() => {}} />
      <MenuItem label="Destructive" destructive onClick={() => {}} />
      <MenuItem label="Disabled" disabled onClick={() => {}} />
    </div>
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Icon, description, shortcut",
  render: () => <div className={\`w-72 \${MENU_PANEL_SURFACE} p-1\`}>
      <MenuItem icon={<Home className="h-4 w-4" strokeWidth={1.5} />} label="Home" active onClick={() => {}} />
      <MenuItem icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Team" description="Manage members and roles" onClick={() => {}} />
      <MenuItem icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} label="Settings" shortcut="⌘," onClick={() => {}} />
      <MenuItem icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="Delete" destructive onClick={() => {}} />
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "List row (as div)",
  render: () => <div className={\`w-80 \${MENU_PANEL_SURFACE} p-1\`}>
      <MenuItem as="div" divider icon={<Home className="h-4 w-4" strokeWidth={1.5} />} header="Title and subtitle" label="Subtitle" description="2 min ago" active onClick={() => {}} />
      <MenuItem as="div" divider icon={<Users className="h-4 w-4" strokeWidth={1.5} />} label="Title only (centered)" onClick={() => {}} />
      <MenuItem as="div" divider static icon={<Settings className="h-4 w-4" strokeWidth={1.5} />} header="Static row" label="No hover or cursor" />
      <MenuItem as="div" icon={<Trash2 className="h-4 w-4" strokeWidth={1.5} />} label="With trailing control" onClick={() => {}} rightElement={<button type="button" aria-label="Remove" className="rounded p-1 hover:bg-lyra-state-hover"><Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} /></button>} />
    </div>
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};const f=["MenuItemStates","MenuItemWithIconsAndMeta","MenuItemAsRow"];export{r as MenuItemAsRow,s as MenuItemStates,a as MenuItemWithIconsAndMeta,f as __namedExportsOrder,U as default};
