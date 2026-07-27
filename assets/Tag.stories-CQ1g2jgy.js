import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-CXOcBcs0.js";import{T as r}from"./tag-T2fDNVaT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";const Z={title:"Custom Primitives/Tag",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["default","success","warning","critical","info","neutral"]}}},s={args:{label:"Tag label"}},l={render:()=>{const[e,L]=O.useState(["React","TypeScript","Tailwind","Lyra"]);return a.jsx("div",{className:"flex flex-wrap gap-2",children:e.map(m=>a.jsx(r,{label:m,onRemove:()=>L(e.filter(_=>_!==m))},m))})}},t={render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(e=>a.jsx(r,{label:e.charAt(0).toUpperCase()+e.slice(1),variant:e},e))})},i={name:"Removable Variants",render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(e=>a.jsx(r,{label:e.charAt(0).toUpperCase()+e.slice(1),variant:e,onRemove:()=>{}},e))})},n={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{label:"Disabled",disabled:!0}),a.jsx(r,{label:"Disabled removable",disabled:!0,onRemove:()=>{}})]})},c={name:"Pill Shape",render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(e=>a.jsx(r,{label:e.charAt(0).toUpperCase()+e.slice(1),variant:e,shape:"pill"},e))})},o={name:"Pill — Removable",render:()=>a.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(e=>a.jsx(r,{label:e.charAt(0).toUpperCase()+e.slice(1),variant:e,shape:"pill",onRemove:()=>{}},e))})},p={name:"Default vs Pill",render:()=>a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Tailwind"].map(e=>a.jsx(r,{label:e},e))}),a.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Tailwind"].map(e=>a.jsx(r,{label:e,shape:"pill"},e))})]})};var d,u,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var P,D,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Pill Shape",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />)}
    </div>
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var C,k,A;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Pill — Removable",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" onRemove={() => {}} />)}
    </div>
}`,...(A=(k=o.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var U,E,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Default vs Pill",
  render: () => <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} />)}
      </div>
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} shape="pill" />)}
      </div>
    </div>
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const $=["Default","Removable","Variants","RemovableVariants","Disabled","PillShape","PillRemovable","BothShapes"];export{p as BothShapes,s as Default,n as Disabled,o as PillRemovable,c as PillShape,l as Removable,i as RemovableVariants,t as Variants,$ as __namedExportsOrder,Z as default};
