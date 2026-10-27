import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DhMLlvMY.js";import{T as l}from"./tag-DQ3sj_Kb.js";import{a as b,T as V,v as g}from"./Tag.shared-BDvc4Lnm.js";import{C as E}from"./calendar-days-soqEfQAB.js";import{P as G}from"./phone-call-LXWpUPVm.js";import{M as P}from"./message-square-BL8DSnhx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";const ne={title:"Custom Primitives/Tag/Variants",component:l,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},m={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:V.map(a=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary capitalize",children:[a," shape"]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(r=>e.jsx(l,{label:g(r),variant:r,shape:a},r))}),e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(r=>e.jsx(l,{label:g(r),variant:r,shape:a,onRemove:()=>{}},r))})]},a))})},x={name:"States (Disabled)",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{label:"Disabled",disabled:!0}),e.jsx(l,{label:"Disabled removable",disabled:!0,onRemove:()=>{}})]})};function L(){const[a,r]=p.useState(["React","TypeScript","Tailwind","Lyra"]),d=p.useRef(null),o=p.useRef(null);return p.useEffect(()=>{var i;if(o.current===null)return;const t=o.current;o.current=null;const n=(i=d.current)==null?void 0:i.querySelectorAll("button[aria-label^='Remove']"),s=n&&n.length>0?n[Math.min(t,n.length-1)]:d.current;s==null||s.focus()},[a]),e.jsx("div",{ref:d,role:"group","aria-label":"Tags",tabIndex:-1,className:"flex min-h-6 min-w-6 flex-wrap gap-2 rounded-lyra-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:a.map((t,n)=>e.jsx(l,{label:t,onRemove:()=>{o.current=n,r(a.filter(s=>s!==t))}},t))})}const v={render:()=>e.jsx(L,{})},f={name:"Hover State",render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex gap-8 lyra-body-sm-emphasis text-lyra-fg-secondary",children:[e.jsx("span",{className:"w-24",children:"Rest"}),e.jsx("span",{className:"w-24",children:"Hover"})]}),b.map(a=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("div",{className:"w-24",children:e.jsx(l,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill"})}),e.jsx("div",{className:"w-24",children:e.jsx(l,{label:a.charAt(0).toUpperCase()+a.slice(1),variant:a,shape:"pill",className:"brightness-95 dark:brightness-125"})})]},a))]})};function M(){const[a,r]=p.useState(new Set),[d,o]=p.useState(new Set(["Callback"])),t=(s,i)=>{const c=new Set(s);return c.has(i)?c.delete(i):c.add(i),c},n={Conversation:e.jsx(P,{strokeWidth:1.5}),Callback:e.jsx(G,{strokeWidth:1.5}),Meeting:e.jsx(E,{strokeWidth:1.5})};return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(n).map(([s,i])=>e.jsx(l,{label:s,shape:"pill",variant:"neutral",icon:i,selected:d.has(s),onClick:()=>o(c=>t(c,s))},s))}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{label:"All",shape:"pill",variant:"neutral",selected:a.size===0,onClick:()=>r(new Set)}),e.jsx(l,{label:"Assignments",count:7,shape:"pill",variant:"neutral",selected:a.has("a"),onClick:()=>r(s=>t(s,"a"))}),e.jsx(l,{label:"History",count:3,shape:"pill",variant:"neutral",selected:a.has("h"),onClick:()=>r(s=>t(s,"h"))}),e.jsx(l,{label:"Disabled",count:0,shape:"pill",variant:"neutral",selected:!1,onClick:()=>{},disabled:!0})]})]})}const u={render:()=>e.jsx(M,{})};var h,j,N;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,y,T;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "States (Disabled)",
  render: () => <div className="flex flex-wrap gap-2">
      <Tag label="Disabled" disabled />
      <Tag label="Disabled removable" disabled onRemove={() => {}} />
    </div>
}`,...(T=(y=x.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var w,A,R;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <RemovableTagsDemo />
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var k,C,D;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(C=f.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var H,_,I;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SelectableRows />
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const ie=["Variants","States","Removable","HoverState","Selectable"];export{f as HoverState,v as Removable,u as Selectable,x as States,m as Variants,ie as __namedExportsOrder,ne as default};
