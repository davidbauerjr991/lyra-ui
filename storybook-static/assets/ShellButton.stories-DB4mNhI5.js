import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./actions-rDMhHy-A.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";const J={title:"UI/AppHeader/Avatar",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{initials:{control:"text"},avatarColor:{control:"color"}}},s={args:{initials:"JS",avatarColor:"#5d6a79"}},r={name:"States (Default / Hover / Pressed)",render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),a.jsx(t,{initials:"JS"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover to see)"}),a.jsx(t,{initials:"JS"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Pressed (click and hold)"}),a.jsx(t,{initials:"JS"})]})]})},e={args:{initials:"AB",avatarColor:"#166cca"}};var o,n,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    initials: "JS",
    avatarColor: "#5d6a79"
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "States (Default / Hover / Pressed)",
  render: () => <div className="space-y-6">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Default
        </span>
        <ActionAvatarButton initials="JS" />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Hover (hover to see)
        </span>
        <ActionAvatarButton initials="JS" />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Pressed (click and hold)
        </span>
        <ActionAvatarButton initials="JS" />
      </div>
    </div>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initials: "AB",
    avatarColor: "#166cca"
  }
}`,...(v=(p=e.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const N=["Default","AvatarStates","CustomColor"];export{r as AvatarStates,e as CustomColor,s as Default,N as __namedExportsOrder,J as default};
