import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{A as o}from"./app-name-DzjI6G9T.js";import{d as e}from"./app-icon-BTTpRY0S.js";import{L as N}from"./layout-grid-DIlLALBe.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";const S={title:"UI/AppHeader/AppName",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{name:{control:"text"}}},s={args:{icon:a.jsx("img",{src:e,alt:"App",className:"h-6 w-6"}),name:"Agent Workspace Premium"}},r={name:"States (Default / Hover / Pressed)",render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),a.jsx(o,{icon:a.jsx("img",{src:e,alt:"App",className:"h-6 w-6"}),name:"Analytics"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover to see)"}),a.jsx(o,{icon:a.jsx("img",{src:e,alt:"App",className:"h-6 w-6"}),name:"Analytics"})]}),a.jsxs("div",{children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Pressed (click and hold to see)"}),a.jsx(o,{icon:a.jsx("img",{src:e,alt:"App",className:"h-6 w-6"}),name:"Analytics"})]})]})},n={name:"With Lucide Icon",args:{icon:a.jsx(N,{className:"h-6 w-6 text-lyra-fg-action",strokeWidth:1.5}),name:"Dashboard"}},c={name:"Long App Name",args:{icon:a.jsx("img",{src:e,alt:"App",className:"h-6 w-6"}),name:"Agent Workspace Premium Extended Edition"}};var t,m,p;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: <img src={appIcon} alt="App" className="h-6 w-6" />,
    name: "Agent Workspace Premium"
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "States (Default / Hover / Pressed)",
  render: () => <div className="space-y-6">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Default
        </span>
        <AppName icon={<img src={appIcon} alt="App" className="h-6 w-6" />} name="Analytics" />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Hover (hover to see)
        </span>
        <AppName icon={<img src={appIcon} alt="App" className="h-6 w-6" />} name="Analytics" />
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Pressed (click and hold to see)
        </span>
        <AppName icon={<img src={appIcon} alt="App" className="h-6 w-6" />} name="Analytics" />
      </div>
    </div>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,y,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With Lucide Icon",
  args: {
    icon: <LayoutGrid className="h-6 w-6 text-lyra-fg-action" strokeWidth={1.5} />,
    name: "Dashboard"
  }
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var h,x,A;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Long App Name",
  args: {
    icon: <img src={appIcon} alt="App" className="h-6 w-6" />,
    name: "Agent Workspace Premium Extended Edition"
  }
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const D=["Default","States","WithLucideIcon","LongName"];export{s as Default,c as LongName,r as States,n as WithLucideIcon,D as __namedExportsOrder,S as default};
