import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s,d as p}from"./profile-menu-BKg4Ggqu.js";import{U as u}from"./user-rDz6zf5M.js";import{C as c}from"./circle-help-Bj2MpUE2.js";import{L as d}from"./log-out-DlmIeUuQ.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./menu-radix-D077YTVY.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./sun-BZYaDLgK.js";const E={title:"UI/AppHeader/ProfileMenu",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},r={render:()=>e.jsx("div",{className:"flex justify-end p-8",children:e.jsx(s,{initials:"JS",avatarColor:"#5d6a79",groups:p,showThemeToggle:!0})})},o={name:"Custom Groups",render:()=>e.jsx("div",{className:"flex justify-end p-8",children:e.jsx(s,{initials:"DB",avatarColor:"#166cca",groups:[{items:[{label:"My Profile",icon:e.jsx(u,{className:"h-4 w-4",strokeWidth:1.5})}]},{items:[{label:"Help Center",icon:e.jsx(c,{className:"h-4 w-4",strokeWidth:1.5})},{label:"Support & Downloads"},{label:"Contact Us"}]},{items:[{label:"Sign Out",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5})}]}]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end p-8">
      <ProfileMenu initials="JS" avatarColor="#5d6a79" groups={defaultProfileMenuGroups} showThemeToggle />
    </div>
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const J=["Default","CustomGroups"];export{o as CustomGroups,r as Default,J as __namedExportsOrder,E as default};
