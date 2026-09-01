import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-CXOcBcs0.js";import{T as s}from"./tag-Lo5TNvOI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";const ra={title:"Custom Primitives/Tag",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["default","success","warning","critical","info","neutral"]}}},r={args:{label:"Tag label"}},l={render:()=>{const[a,q]=F.useState(["React","TypeScript","Tailwind","Lyra"]);return e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(d=>e.jsx(s,{label:d,onRemove:()=>q(a.filter(z=>z!==d))},d))})}},i={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(s,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a},a))})},n={name:"Removable Variants",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(s,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,onRemove:()=>{}},a))})},t={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{label:"Disabled",disabled:!0}),e.jsx(s,{label:"Disabled removable",disabled:!0,onRemove:()=>{}})]})},c={name:"Pill Shape",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(s,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill"},a))})},p={name:"Pill — Removable",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","success","warning","critical","info","neutral"].map(a=>e.jsx(s,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill",onRemove:()=>{}},a))})},o={name:"Default vs Pill",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Tailwind"].map(a=>e.jsx(s,{label:a},a))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["React","TypeScript","Tailwind"].map(a=>e.jsx(s,{label:a,shape:"pill"},a))})]})},m={name:"Hover State",render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex gap-8 lyra-body-sm-emphasis text-lyra-fg-secondary",children:[e.jsx("span",{className:"w-24",children:"Rest"}),e.jsx("span",{className:"w-24",children:"Hover"})]}),["default","success","warning","critical","info","neutral"].map(a=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("div",{className:"w-24",children:e.jsx(s,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill"})}),e.jsx("div",{className:"w-24",children:e.jsx(s,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill",className:"brightness-95 dark:brightness-125"})})]},a))]})};var v,g,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Tag label"
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,u,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Lyra"]);
    return <div className="flex flex-wrap gap-2">
        {tags.map(t => <Tag key={t} label={t} onRemove={() => setTags(tags.filter(x => x !== t))} />)}
      </div>;
  }
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,w,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} />)}
    </div>
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var N,j,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Removable Variants",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} onRemove={() => {}} />)}
    </div>
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var R,S,C;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="Disabled" disabled />
      <Tag label="Disabled removable" disabled onRemove={() => {}} />
    </div>
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,U,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Pill Shape",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />)}
    </div>
}`,...(k=(U=c.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var P,V,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Pill — Removable",
  render: () => <div className="flex flex-wrap gap-2">
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <Tag key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" onRemove={() => {}} />)}
    </div>
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var H,E,B;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Default vs Pill",
  render: () => <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} />)}
      </div>
      <div className="flex flex-wrap gap-2">
        {["React", "TypeScript", "Tailwind"].map(t => <Tag key={t} label={t} shape="pill" />)}
      </div>
    </div>
}`,...(B=(E=o.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var L,_,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Hover State",
  render: () => <div className="flex flex-col gap-2">
      <div className="flex gap-8 lyra-body-sm-emphasis text-lyra-fg-secondary">
        <span className="w-24">Rest</span>
        <span className="w-24">Hover</span>
      </div>
      {(["default", "success", "warning", "critical", "info", "neutral"] as TagVariant[]).map(v => <div key={v} className="flex items-center gap-8">
          <div className="w-24">
            <Tag label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />
          </div>
          <div className="w-24">
            <Tag label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" className="brightness-95 dark:brightness-125" />
          </div>
        </div>)}
    </div>
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const la=["Default","Removable","Variants","RemovableVariants","Disabled","PillShape","PillRemovable","BothShapes","HoverState"];export{o as BothShapes,r as Default,t as Disabled,m as HoverState,p as PillRemovable,c as PillShape,l as Removable,n as RemovableVariants,i as Variants,la as __namedExportsOrder,ra as default};
