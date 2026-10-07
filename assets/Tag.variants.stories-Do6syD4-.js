import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DhMLlvMY.js";import{T as r}from"./tag-D8yJ2lBD.js";import{a as x,T as H,v as b}from"./Tag.shared-BDvc4Lnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const J={title:"Custom Primitives/Tag/Variants",component:r,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},c={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:H.map(a=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary capitalize",children:[a," shape"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:x.map(s=>e.jsx(r,{label:b(s),variant:s,shape:a},s))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:x.map(s=>e.jsx(r,{label:b(s),variant:s,shape:a,onRemove:()=>{}},s))})]},a))})},m={name:"States (Disabled)",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{label:"Disabled",disabled:!0}),e.jsx(r,{label:"Disabled removable",disabled:!0,onRemove:()=>{}})]})};function _(){const[a,s]=o.useState(["React","TypeScript","Tailwind","Lyra"]),v=o.useRef(null),i=o.useRef(null);return o.useEffect(()=>{var f;if(i.current===null)return;const n=i.current;i.current=null;const l=(f=v.current)==null?void 0:f.querySelectorAll("button[aria-label^='Remove']"),t=l&&l.length>0?l[Math.min(n,l.length-1)]:v.current;t==null||t.focus()},[a]),e.jsx("div",{ref:v,role:"group","aria-label":"Tags",tabIndex:-1,className:"flex min-h-6 min-w-6 flex-wrap gap-2 rounded-lyra-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:a.map((n,l)=>e.jsx(r,{label:n,onRemove:()=>{i.current=l,s(a.filter(t=>t!==n))}},n))})}const p={render:()=>e.jsx(_,{})},d={name:"Hover State",render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex gap-8 lyra-body-sm-emphasis text-lyra-fg-secondary",children:[e.jsx("span",{className:"w-24",children:"Rest"}),e.jsx("span",{className:"w-24",children:"Hover"})]}),x.map(a=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("div",{className:"w-24",children:e.jsx(r,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill"})}),e.jsx("div",{className:"w-24",children:e.jsx(r,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill",className:"brightness-95 dark:brightness-125"})})]},a))]})};var g,u,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {TAG_SHAPES.map(shape => <div key={shape} className="flex flex-col gap-2">
          <p className="lyra-body-sm-emphasis text-lyra-fg-secondary capitalize">{shape} shape</p>
          <div className="flex flex-wrap gap-2">
            {TAG_VARIANTS.map(v => <Tag key={v} label={variantLabel(v)} variant={v} shape={shape} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            {TAG_VARIANTS.map(v => <Tag key={v} label={variantLabel(v)} variant={v} shape={shape} onRemove={() => {}} />)}
          </div>
        </div>)}
    </div>
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var N,y,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "States (Disabled)",
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="Disabled" disabled />
      <Tag label="Disabled removable" disabled onRemove={() => {}} />
    </div>
}`,...(T=(y=m.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,S,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <RemovableTagsDemo />
}`,...(A=(S=p.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var R,w,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Hover State",
  render: () => <div className="flex flex-col gap-2">
      <div className="flex gap-8 lyra-body-sm-emphasis text-lyra-fg-secondary">
        <span className="w-24">Rest</span>
        <span className="w-24">Hover</span>
      </div>
      {TAG_VARIANTS.map(v => <div key={v} className="flex items-center gap-8">
          <div className="w-24">
            <Tag label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" />
          </div>
          <div className="w-24">
            <Tag label={v.charAt(0).toUpperCase() + v.slice(1)} variant={v} shape="pill" className="brightness-95 dark:brightness-125" />
          </div>
        </div>)}
    </div>
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const K=["Variants","States","Removable","HoverState"];export{d as HoverState,p as Removable,m as States,c as Variants,K as __namedExportsOrder,J as default};
