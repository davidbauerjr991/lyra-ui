import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DhMLlvMY.js";import{P as l}from"./progress-bar-DiX3DXMU.js";import{L as r}from"./label-amkU61wz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const G={title:"Headless Primitives/Progress Bar/Variants",component:l,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},P=[{variant:"default",caption:"Default"},{variant:"success",caption:"Success"},{variant:"warning",caption:"Warning"},{variant:"critical",caption:"Critical"},{variant:"neutral",caption:"Neutral"}],A=["sm","md","lg"],B=[{caption:"Empty (0%)",value:0,variant:"default"},{caption:"In progress (45%)",value:45,variant:"default"},{caption:"Complete (100%)",value:100,variant:"success"},{caption:"Warning threshold (80%)",value:80,variant:"warning"},{caption:"Critical (95%)",value:95,variant:"critical"}],E=[{value:30,label:"3 / 10 steps"},{value:48,label:"2,400 / 5,000 calls"}];function t({title:a,children:s}){return e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"lyra-heading-sm text-lyra-fg-primary",children:a}),s]})}const i={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[e.jsx(t,{title:"Variants",children:P.map(({variant:a,caption:s})=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{label:s,className:"text-lyra-fg-secondary"}),e.jsx(l,{value:65,variant:a,showLabel:!0})]},a))}),e.jsx(t,{title:"Sizes",children:A.map(a=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{label:a,className:"text-lyra-fg-secondary"}),e.jsx(l,{value:70,size:a})]},a))}),e.jsx(t,{title:"States",children:B.map(({caption:a,value:s,variant:n})=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{label:a,className:"text-lyra-fg-secondary"}),e.jsx(l,{value:s,variant:n,showLabel:!0})]},a))}),e.jsx(t,{title:"Custom labels",children:E.map(({value:a,label:s})=>e.jsx(l,{value:a,showLabel:!0,label:s},s))})]})};function I(){const[a,s]=m.useState(0);m.useEffect(()=>{const x=setInterval(()=>{s(p=>p>=100?(clearInterval(x),100):p+2)},80);return()=>clearInterval(x)},[]);const n=a>=100?"success":a>=80?"warning":"default";return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Loading…",className:"text-lyra-fg-secondary"}),e.jsx(l,{value:a,variant:n,size:"md",showLabel:!0})]})}function z(){const[a,s]=m.useState(0);return m.useEffect(()=>{const n=setTimeout(()=>s(60),100);return()=>clearTimeout(n)},[]),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Agent Skill Level"}),e.jsx(l,{value:a,variant:"default",size:"md",indicatorClassName:"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"})]})}const c={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[e.jsx(I,{}),e.jsx(z,{})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-md",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Indeterminate"}),e.jsx(l,{indeterminate:!0})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Indeterminate with label"}),e.jsx(l,{indeterminate:!0,showLabel:!0,label:"Preparing export…"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Sizes and variants"}),e.jsx(l,{indeterminate:!0,size:"sm"}),e.jsx(l,{indeterminate:!0,size:"lg",variant:"success"})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-md",children:[e.jsx(l,{value:45,showLabel:!0,label:"Uploading 3 of 8 files"}),e.jsx(l,{value:80,showLabel:!0})]})};var u,f,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-8 w-full max-w-md">
      <Section title="Variants">
        {VARIANTS.map(({
        variant,
        caption
      }) => <div key={variant} className="flex flex-col gap-1">
            <Label label={caption} className="text-lyra-fg-secondary" />
            <ProgressBar value={65} variant={variant} showLabel />
          </div>)}
      </Section>
      <Section title="Sizes">
        {SIZES.map(s => <div key={s} className="flex flex-col gap-1">
            <Label label={s} className="text-lyra-fg-secondary" />
            <ProgressBar value={70} size={s} />
          </div>)}
      </Section>
      <Section title="States">
        {STATES.map(({
        caption,
        value,
        variant
      }) => <div key={caption} className="flex flex-col gap-1">
            <Label label={caption} className="text-lyra-fg-secondary" />
            <ProgressBar value={value} variant={variant} showLabel />
          </div>)}
      </Section>
      <Section title="Custom labels">
        {CUSTOM_LABELS.map(({
        value,
        label
      }) => <ProgressBar key={label} value={value} showLabel label={label} />)}
      </Section>
    </div>
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,b,j;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-full max-w-md">
      <LoadingRamp />
      <EasedFill />
    </div>
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var h,S,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="flex flex-col gap-2">
        <Label label="Indeterminate" />
        <ProgressBar indeterminate />
      </div>
      <div className="flex flex-col gap-2">
        <Label label="Indeterminate with label" />
        <ProgressBar indeterminate showLabel label="Preparing export…" />
      </div>
      <div className="flex flex-col gap-2">
        <Label label="Sizes and variants" />
        <ProgressBar indeterminate size="sm" />
        <ProgressBar indeterminate size="lg" variant="success" />
      </div>
    </div>
}`,...(N=(S=o.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,L,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-full max-w-md">
      <ProgressBar value={45} showLabel label="Uploading 3 of 8 files" />
      <ProgressBar value={80} showLabel />
    </div>
}`,...(y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const J=["AllVariants","Animated","Indeterminate","Labelled"];export{i as AllVariants,c as Animated,o as Indeterminate,d as Labelled,J as __namedExportsOrder,G as default};
