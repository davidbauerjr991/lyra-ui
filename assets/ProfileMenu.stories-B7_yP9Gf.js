import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s,d as p}from"./profile-menu-kber_VpC.js";import{U as u}from"./user-BnR-bf5w.js";import{C as c}from"./circle-help-DYnzmdO5.js";import{L as d}from"./log-out-POwLzLp_.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./menu-radix-BHyM5alN.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-BuRg0FgW.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./sun-BCrCqAo4.js";const A={title:"UI/AppHeader/ProfileMenu",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},r={render:()=>e.jsx("div",{className:"flex justify-end p-8",children:e.jsx(s,{initials:"JS",avatarColor:"#5d6a79",groups:p,showThemeToggle:!0})})},o={name:"Custom Groups",render:()=>e.jsx("div",{className:"flex justify-end p-8",children:e.jsx(s,{initials:"DB",avatarColor:"#166cca",groups:[{items:[{label:"My Profile",icon:e.jsx(u,{className:"h-4 w-4",strokeWidth:1.5})}]},{items:[{label:"Help Center",icon:e.jsx(c,{className:"h-4 w-4",strokeWidth:1.5})},{label:"Support & Downloads"},{label:"Contact Us"}]},{items:[{label:"Sign Out",icon:e.jsx(d,{className:"h-4 w-4",strokeWidth:1.5})}]}]})})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const I=["Default","CustomGroups"];export{o as CustomGroups,r as Default,I as __namedExportsOrder,A as default};
