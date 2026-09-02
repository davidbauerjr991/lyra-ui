import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{E as t}from"./empty-state-BBJWQ0ph.js";import{C as b}from"./chart-column-BD5V0Ndt.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DEcfmm_F.js";const w={title:"UI/EmptyState",component:t,tags:["autodocs"],parameters:{layout:"padded"}},e={render:()=>r.jsx("div",{className:"h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md",children:r.jsx(t,{})})},a={name:"With icon",render:()=>r.jsx("div",{className:"h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md",children:r.jsx(t,{icon:r.jsx(b,{className:"h-8 w-8",strokeWidth:1.5}),message:"No data available"})})},s={name:"With description",render:()=>r.jsx("div",{className:"h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md",children:r.jsx(t,{message:"No data available",description:"Data will appear here once this campaign starts sending."})})};var o,d,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      <EmptyState />
    </div>
}`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With icon",
  render: () => <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      <EmptyState icon={<BarChart3 className="h-8 w-8" strokeWidth={1.5} />} message="No data available" />
    </div>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With description",
  render: () => <div className="h-[240px] w-full border border-lyra-border-subtle rounded-lyra-md">
      <EmptyState message="No data available" description="Data will appear here once this campaign starts sending." />
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const W=["Default","WithIcon","WithDescription"];export{e as Default,s as WithDescription,a as WithIcon,W as __namedExportsOrder,w as default};
