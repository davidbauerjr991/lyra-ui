import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as e}from"./actions-C1Yi6SFh.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./button-C7ty1faS.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";const D={title:"UI/AppHeader/Avatar",component:e,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{initials:{control:"text"},avatarColor:{control:"color"}}},r={args:{initials:"JS",avatarColor:"#5d6a79"}},s={name:"States (Default / Hover / Pressed)",render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),a.jsx(e,{initials:"JS"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover to see)"}),a.jsx(e,{initials:"JS"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Pressed (click and hold)"}),a.jsx(e,{initials:"JS"})]})]})},t={args:{initials:"AB",avatarColor:"#166cca"}};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    initials: "JS",
    avatarColor: "#5d6a79"
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initials: "AB",
    avatarColor: "#166cca"
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const H=["Default","AvatarStates","CustomColor"];export{s as AvatarStates,t as CustomColor,r as Default,H as __namedExportsOrder,D as default};
