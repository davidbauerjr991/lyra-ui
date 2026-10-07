import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as a}from"./empty-state-aA-_Z9ee.js";import{E as s,S as i,s as m}from"./EmptyState.shared-BrmjBuCl.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./chart-column-N6fAo0kL.js";import"./createLucideIcon-aII_sYFw.js";const T={title:"UI/EmptyState/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded"}},r={name:"With icon",render:()=>e.jsx(s,{children:e.jsx(a,{icon:m,message:"No data available"})})},n={name:"With description",render:()=>e.jsx(s,{children:e.jsx(a,{message:"No data available",description:i})})},o={name:"Icon and description",render:()=>e.jsx(s,{children:e.jsx(a,{icon:m,message:"No data available",description:i})})},t={name:"Tones (Secondary, Disabled)",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{children:e.jsx(a,{tone:"secondary",icon:m,message:"Secondary (default)",description:i})}),e.jsx(s,{children:e.jsx(a,{tone:"disabled",icon:m,message:"Disabled",description:i})})]})};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With icon",
  render: () => <EmptyFrame>
      <EmptyState icon={sampleIcon} message="No data available" />
    </EmptyFrame>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,E,S;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With description",
  render: () => <EmptyFrame>
      <EmptyState message="No data available" description={SAMPLE_DESCRIPTION} />
    </EmptyFrame>
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,I,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Icon and description",
  render: () => <EmptyFrame>
      <EmptyState icon={sampleIcon} message="No data available" description={SAMPLE_DESCRIPTION} />
    </EmptyFrame>
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Tones (Secondary, Disabled)",
  render: () => <div className="flex flex-col gap-4">
      <EmptyFrame>
        <EmptyState tone="secondary" icon={sampleIcon} message="Secondary (default)" description={SAMPLE_DESCRIPTION} />
      </EmptyFrame>
      <EmptyFrame>
        <EmptyState tone="disabled" icon={sampleIcon} message="Disabled" description={SAMPLE_DESCRIPTION} />
      </EmptyFrame>
    </div>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const W=["WithIcon","WithDescription","IconAndDescription","Tones"];export{o as IconAndDescription,t as Tones,n as WithDescription,r as WithIcon,W as __namedExportsOrder,T as default};
