import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DhMLlvMY.js";import{P as s}from"./progress-bar-BUzWCp3j.js";import{L as r}from"./label-Cmi0QrKL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-Bbt6qZUg.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const Y={title:"Headless Primitives/Progress Bar/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},E=[{variant:"default",caption:"Default"},{variant:"success",caption:"Success"},{variant:"warning",caption:"Warning"},{variant:"critical",caption:"Critical"},{variant:"neutral",caption:"Neutral"}],I=["sm","md","lg"],C=[{caption:"Empty (0%)",value:0,variant:"default"},{caption:"In progress (45%)",value:45,variant:"default"},{caption:"Complete (100%)",value:100,variant:"success"},{caption:"Warning threshold (80%)",value:80,variant:"warning"},{caption:"Critical (95%)",value:95,variant:"critical"}],V=[{value:30,label:"3 / 10 steps"},{value:48,label:"2,400 / 5,000 calls"}];function i({title:a,children:l}){return e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"lyra-heading-sm text-lyra-fg-primary",children:a}),l]})}const t={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[e.jsx(i,{title:"Variants",children:E.map(({variant:a,caption:l})=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{label:l,className:"text-lyra-fg-secondary"}),e.jsx(s,{value:65,variant:a,showLabel:!0})]},a))}),e.jsx(i,{title:"Sizes",children:I.map(a=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{label:a,className:"text-lyra-fg-secondary"}),e.jsx(s,{value:70,size:a})]},a))}),e.jsx(i,{title:"States",children:C.map(({caption:a,value:l,variant:n})=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(r,{label:a,className:"text-lyra-fg-secondary"}),e.jsx(s,{value:l,variant:n,showLabel:!0})]},a))}),e.jsx(i,{title:"Custom labels",children:V.map(({value:a,label:l})=>e.jsx(s,{value:a,showLabel:!0,label:l},l))})]})};function T(){const[a,l]=p.useState(0);p.useEffect(()=>{const x=setInterval(()=>{l(u=>u>=100?(clearInterval(x),100):u+2)},80);return()=>clearInterval(x)},[]);const n=a>=100?"success":a>=80?"warning":"default";return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Loading…",className:"text-lyra-fg-secondary"}),e.jsx(s,{value:a,variant:n,size:"md",showLabel:!0})]})}function R(){const[a,l]=p.useState(0);return p.useEffect(()=>{const n=setTimeout(()=>l(60),100);return()=>clearTimeout(n)},[]),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Agent Skill Level"}),e.jsx(s,{value:a,variant:"default",size:"md",indicatorClassName:"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"})]})}const c={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[e.jsx(T,{}),e.jsx(R,{})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-md",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Indeterminate"}),e.jsx(s,{indeterminate:!0})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Indeterminate with label"}),e.jsx(s,{indeterminate:!0,showLabel:!0,label:"Preparing export…"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{label:"Sizes and variants"}),e.jsx(s,{indeterminate:!0,size:"sm"}),e.jsx(s,{indeterminate:!0,size:"lg",variant:"success"})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-md",children:[e.jsx(s,{value:45,showLabel:!0,label:"Uploading 3 of 8 files"}),e.jsx(s,{value:80,showLabel:!0})]})},m={name:"Ring",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{shape:"ring",ringSize:18,value:25,label:"25 percent"}),e.jsx(s,{shape:"ring",ringSize:28,value:60,label:"60 percent"}),e.jsx(s,{shape:"ring",ringSize:40,value:75,label:"75 percent"}),e.jsx(s,{shape:"ring",ringSize:40,value:100,variant:"success",label:"Complete"}),e.jsx(s,{shape:"ring",ringSize:40,value:40,variant:"critical",label:"Failed"}),e.jsx(s,{shape:"ring",ringSize:40,indeterminate:!0,label:"Loading"})]})};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,h,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-full max-w-md">
      <LoadingRamp />
      <EasedFill />
    </div>
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var j,w,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var L,z,y;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-full max-w-md">
      <ProgressBar value={45} showLabel label="Uploading 3 of 8 files" />
      <ProgressBar value={80} showLabel />
    </div>
}`,...(y=(z=d.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var P,B,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Ring",
  /* \`shape="ring"\` draws the progress as a circle. Colors follow \`variant\`; it spins when \`indeterminate\`. */
  render: () => <div className="flex items-center gap-4">
      <ProgressBar shape="ring" ringSize={18} value={25} label="25 percent" />
      <ProgressBar shape="ring" ringSize={28} value={60} label="60 percent" />
      <ProgressBar shape="ring" ringSize={40} value={75} label="75 percent" />
      <ProgressBar shape="ring" ringSize={40} value={100} variant="success" label="Complete" />
      <ProgressBar shape="ring" ringSize={40} value={40} variant="critical" label="Failed" />
      <ProgressBar shape="ring" ringSize={40} indeterminate label="Loading" />
    </div>
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const $=["AllVariants","Animated","Indeterminate","Labelled","Ring"];export{t as AllVariants,c as Animated,o as Indeterminate,d as Labelled,m as Ring,$ as __namedExportsOrder,Y as default};
