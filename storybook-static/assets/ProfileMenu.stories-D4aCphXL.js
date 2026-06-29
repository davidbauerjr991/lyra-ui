import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as o,d as p}from"./profile-menu-B1AxbGgH.js";import{U as u}from"./user-rDz6zf5M.js";import{C as c}from"./circle-help-Bj2MpUE2.js";import{L as d}from"./moon-twi9AqRm.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./menu-BPKqDbWq.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-down-BRCsRsv-.js";const G={title:"UI/AppHeader/ProfileMenu",component:o,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},r={render:()=>e.jsx("div",{className:"flex justify-end p-8",children:e.jsx(o,{initials:"JS",avatarColor:"#5d6a79",groups:p,showThemeToggle:!0})})},s={name:"Custom Groups",render:()=>e.jsx("div",{className:"flex justify-end p-8",children:e.jsx(o,{initials:"DB",avatarColor:"#166cca",groups:[{items:[{label:"My Profile",icon:e.jsx(u,{className:"h-4 w-4",strokeWidth:1.5})}]},{items:[{label:"Help Center",icon:e.jsx(c,{className:"h-4 w-4",strokeWidth:1.5})},{label:"Support & Downloads"},{label:"Contact Us"}]},{items:[{label:"Sign Out",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5})}]}]})})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end p-8">
      <ProfileMenu initials="JS" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} showThemeToggle />
    </div>
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var n,l,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Custom Groups",
  render: () => <div className="flex justify-end p-8">
      <ProfileMenu initials="DB" avatarColor="#166cca" groups={[{
      items: [{
        label: "My Profile",
        icon: <User className="h-4 w-4" strokeWidth={1.5} />
      }]
    }, {
      items: [{
        label: "Help Center",
        icon: <HelpCircle className="h-4 w-4" strokeWidth={1.5} />
      }, {
        label: "Support & Downloads"
      }, {
        label: "Contact Us"
      }]
    }, {
      items: [{
        label: "Sign Out",
        icon: <LogOut className="h-4 w-4" strokeWidth={1.5} />
      }]
    }]} />
    </div>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const U=["Default","CustomGroups"];export{s as CustomGroups,r as Default,U as __namedExportsOrder,G as default};
