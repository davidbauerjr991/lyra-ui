import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DhMLlvMY.js";import{a as re}from"./index-3Mvvhvj2.js";import{P as U}from"./index-0SMGJ9Xv.js";import{c as J}from"./index-1evVQkiP.js";import{c as S}from"./utils-BLSKlp9E.js";import{L as K}from"./label-DV0nvecx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-B7WaxDQZ.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";var se=Object.defineProperty,i=(a,r)=>se(a,"name",{value:r,configurable:!0}),Q="Progress",L=100,[le,Ie]=re(Q),[te,ne]=le(Q),oe=u.forwardRef(i(function(r,n){const{__scopeProgress:c,value:t=null,max:s,getValueLabel:y=Y,...w}=r;(s||s===0)&&!N(s)&&console.error(Z(`${s}`,"Progress"));const o=N(s)?s:L;t!==null&&!P(t,o)&&console.error(ee(`${t}`,"Progress"));const d=P(t,o)?t:null,ae=m(d)?y(d,o):void 0;return e.jsx(te,{scope:c,value:d,max:o,children:e.jsx(U.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":m(d)?d:void 0,"aria-valuetext":ae,role:"progressbar","data-state":j(d,o),"data-value":d??void 0,"data-max":o,...w,ref:n})})},"Progress")),ie="ProgressIndicator",ce=u.forwardRef(i(function(r,n){const{__scopeProgress:c,...t}=r,s=ne(ie,c);return e.jsx(U.div,{"data-state":j(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...t,ref:n})},"ProgressIndicator"));function Y(a,r){return`${Math.round(a/r*100)}%`}i(Y,"defaultGetValueLabel");function j(a,r){return a==null?"indeterminate":a===r?"complete":"loading"}i(j,"getProgressState");function m(a){return typeof a=="number"}i(m,"isNumber");function N(a){return m(a)&&!isNaN(a)&&a>0}i(N,"isValidMaxNumber");function P(a,r){return m(a)&&!isNaN(a)&&a<=r&&a>=0}i(P,"isValidValueNumber");function Z(a,r){return`Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${L}\`.`}i(Z,"getInvalidMaxError");function ee(a,r){return`Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${L} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}i(ee,"getInvalidValueError");var de=oe,ue=ce;const me=J("relative w-full overflow-hidden rounded-full bg-lyra-border-subtle",{variants:{size:{sm:"h-1",md:"h-2",lg:"h-3"}},defaultVariants:{size:"md"}}),fe=J("h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out",{variants:{variant:{default:"bg-lyra-bg-active-strong",success:"bg-lyra-status-success-strong",warning:"bg-lyra-status-warning-strong",critical:"bg-lyra-status-critical-strong",neutral:"bg-lyra-fg-secondary"}},defaultVariants:{variant:"default"}}),l=u.forwardRef(({className:a,value:r=0,size:n,variant:c,showLabel:t,label:s,indicatorClassName:y,...w},o)=>e.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[e.jsx(de,{ref:o,value:r,max:100,className:S(me({size:n}),"w-full",a),"aria-label":s??"Progress",...w,children:e.jsx(ue,{className:S(fe({variant:c}),y),style:{transform:`translateX(-${100-Math.min(100,Math.max(0,r))}%)`}})}),t&&e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary tabular-nums",children:s??`${Math.round(r)}%`})]}));l.displayName="ProgressBar";l.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:"0–100",defaultValue:{value:"0",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show percentage label to the right of the track"},label:{required:!1,tsType:{name:"string"},description:'Override the label text (defaults to "{value}%")'},indicatorClassName:{required:!1,tsType:{name:"string"},description:'Escape hatch to override the indicator\'s transition (default\n`transition-all duration-300 ease-in-out`, from `indicatorVariants`) for\na specific usage — e.g. matching a particular reference animation curve\n— without changing the default for every other consumer. Merged in via\n`cn()`/tailwind-merge, so e.g. `"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"`\ncorrectly overrides just those two utility groups. See\n`ProgressBar.stories.tsx`\'s "Animated — Dashboard Loading" story for a\nreal usage (matching Radix\'s own Progress primitive docs easing curve).'}},composes:["VariantProps"]};const ze={title:"Headless Primitives/Progress Bar",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["default","success","warning","critical","neutral"]},size:{control:"select",options:["sm","md","lg"]},showLabel:{control:"boolean"}}},f={args:{value:60,variant:"default",size:"md",showLabel:!0}},pe={default:"Default",success:"Success",warning:"Warning",critical:"Critical",neutral:"Neutral"},p={name:"All Variants",render:()=>e.jsx("div",{className:"flex flex-col gap-5 w-full max-w-md",children:["default","success","warning","critical","neutral"].map(a=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(K,{label:pe[a],className:"text-lyra-fg-secondary"}),e.jsx(l,{value:65,variant:a,showLabel:!0})]},a))})},g={name:"Sizes",render:()=>e.jsx("div",{className:"flex flex-col gap-5 w-full max-w-md",children:["sm","md","lg"].map(a=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:a}),e.jsx(l,{value:70,size:a})]},a))})},v={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-5 w-full max-w-md",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Empty (0%)"}),e.jsx(l,{value:0,showLabel:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"In progress (45%)"}),e.jsx(l,{value:45,showLabel:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Complete (100%)"}),e.jsx(l,{value:100,variant:"success",showLabel:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Warning threshold (80%)"}),e.jsx(l,{value:80,variant:"warning",showLabel:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Critical (95%)"}),e.jsx(l,{value:95,variant:"critical",showLabel:!0})]})]})},x={name:"Animated",render:()=>{const[a,r]=u.useState(0);u.useEffect(()=>{const c=setInterval(()=>{r(t=>t>=100?(clearInterval(c),100):t+2)},80);return()=>clearInterval(c)},[]);const n=a>=100?"success":a>=80?"warning":"default";return e.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-md",children:[e.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Loading…"}),e.jsx(l,{value:a,variant:n,size:"md",showLabel:!0})]})}},b={name:"Animated With Label",render:()=>{const[a,r]=u.useState(0);return u.useEffect(()=>{const n=setTimeout(()=>r(60),100);return()=>clearTimeout(n)},[]),e.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-md",children:[e.jsx(K,{label:"Agent Skill Level"}),e.jsx(l,{value:a,variant:"default",size:"md",indicatorClassName:"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"})]})}},h={name:"Custom Label",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[e.jsx(l,{value:30,showLabel:!0,label:"3 / 10 steps"}),e.jsx(l,{value:48,showLabel:!0,label:"2,400 / 5,000 calls"})]})};var V,I,z;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: "default",
    size: "md",
    showLabel: true
  }
}`,...(z=(I=f.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,E,B;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      {(["default", "success", "warning", "critical", "neutral"] as const).map(v => <div key={v} className="flex flex-col gap-1">
          <Label label={variantLabels[v]} className="text-lyra-fg-secondary" />
          <ProgressBar value={65} variant={v} showLabel />
        </div>)}
    </div>
}`,...(B=(E=p.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var C,_,M;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      {(["sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col gap-1">
          <span className="lyra-label text-lyra-fg-secondary">{s}</span>
          <ProgressBar value={70} size={s} />
        </div>)}
    </div>
}`,...(M=(_=g.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var T,$,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Empty (0%)</span>
        <ProgressBar value={0} showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">In progress (45%)</span>
        <ProgressBar value={45} showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Complete (100%)</span>
        <ProgressBar value={100} variant="success" showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Warning threshold (80%)</span>
        <ProgressBar value={80} variant="warning" showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Critical (95%)</span>
        <ProgressBar value={95} variant="critical" showLabel />
      </div>
    </div>
}`,...(R=($=v.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var D,k,W;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Animated",
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = setInterval(() => {
        setValue(v => {
          if (v >= 100) {
            clearInterval(id);
            return 100;
          }
          return v + 2;
        });
      }, 80);
      return () => clearInterval(id);
    }, []);
    const variant = value >= 100 ? "success" : value >= 80 ? "warning" : "default";
    return <div className="flex flex-col gap-2 w-full max-w-md">
        <span className="lyra-label text-lyra-fg-secondary">Loading…</span>
        <ProgressBar value={value} variant={variant} size="md" showLabel />
      </div>;
  }
}`,...(W=(k=x.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var O,q,G;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Animated With Label",
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = setTimeout(() => setValue(60), 100);
      return () => clearTimeout(id);
    }, []);
    return <div className="flex flex-col gap-2 w-full max-w-md">
        <Label label="Agent Skill Level" />
        <ProgressBar value={value} variant="default" size="md" indicatorClassName="duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]" />
      </div>;
  }
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var X,F,H;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Custom Label",
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <ProgressBar value={30} showLabel label="3 / 10 steps" />
      <ProgressBar value={48} showLabel label="2,400 / 5,000 calls" />
    </div>
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const Ae=["Default","Variants","Sizes","States","Animated","AnimatedWithLabel","CustomLabel"];export{x as Animated,b as AnimatedWithLabel,h as CustomLabel,f as Default,g as Sizes,v as States,p as Variants,Ae as __namedExportsOrder,ze as default};
