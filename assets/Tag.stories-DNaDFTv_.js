import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-CXOcBcs0.js";import{T as r}from"./tag-vFMi8jZv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";const Y={title:"Atoms/Tag",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["default","success","warning","critical","info","neutral"]}}},s={args:{label:"Tag label"}},l={render:()=>{const[a,L]=O.useState(["React","TypeScript","Tailwind","Lyra"]);return e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(m=>e.jsx(r,{label:m,onRemove:()=>L(a.filter(_=>_!==m))},m))})}},t={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(r,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a},a))})},i={name:"Removable Variants",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(r,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,onRemove:()=>{}},a))})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{label:"Disabled",disabled:!0}),e.jsx(r,{label:"Disabled removable",disabled:!0,onRemove:()=>{}})]})},c={name:"Pill Shape",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(r,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill"},a))})},o={name:"Pill — Removable",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(r,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill",onRemove:()=>{}},a))})},p={name:"Default vs Pill",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Tailwind"].map(a=>e.jsx(r,{label:a},a))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Tailwind"].map(a=>e.jsx(r,{label:a,shape:"pill"},a))})]})};var d,u,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Tag label"
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Lyra"]);
    return <div className="flex flex-wrap gap-2">
        {tags.map(t => <Tag key={t} label={t} onRemove={() => setTags(tags.filter(x => x !== t))} />)}
      </div>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,T,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} />)}
    </div>
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var w,R,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Removable Variants",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} onRemove={() => {}} />)}
    </div>
}`,...(S=(R=i.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var j,y,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="Disabled" disabled />
      <Tag label="Disabled removable" disabled onRemove={() => {}} />
    </div>
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var D,P,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Pill Shape",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />)}
    </div>
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var A,k,C;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Pill — Removable",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" onRemove={() => {}} />)}
    </div>
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var U,E,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Default vs Pill",
  render: () => <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} />)}
      </div>
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} shape="pill" />)}
      </div>
    </div>
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const Z=["Default","Removable","Variants","RemovableVariants","Disabled","PillShape","PillRemovable","BothShapes"];export{p as BothShapes,s as Default,n as Disabled,o as PillRemovable,c as PillShape,l as Removable,i as RemovableVariants,t as Variants,Z as __namedExportsOrder,Y as default};
