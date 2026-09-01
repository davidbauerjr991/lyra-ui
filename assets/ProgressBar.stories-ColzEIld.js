import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CXOcBcs0.js";import"./index-DWcjTdiE.js";import{c as ie}from"./index-BDkVnVO1.js";import{c as ee}from"./index-1evVQkiP.js";import{c as A}from"./utils-BLSKlp9E.js";import{L as ae}from"./label-DTtDlf5k.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DujEZ9g2.js";import"./index-DNfP5j1O.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";function ce(e,r=[]){let t=[];function n(d,i){const l=c.createContext(i);l.displayName=d+"Context";const o=t.length;t=[...t,i];const f=p=>{var z;const{scope:m,children:L,...v}=p,x=((z=m==null?void 0:m[e])==null?void 0:z[o])||l,oe=c.useMemo(()=>v,Object.values(v));return a.jsx(x.Provider,{value:oe,children:L})};f.displayName=d+"Provider";function V(p,m){var x;const L=((x=m==null?void 0:m[e])==null?void 0:x[o])||l,v=c.useContext(L);if(v)return v;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${d}\``)}return[f,V]}const s=()=>{const d=t.map(i=>c.createContext(i));return function(l){const o=(l==null?void 0:l[e])||d;return c.useMemo(()=>({[`__scope${e}`]:{...l,[e]:o}}),[l,o])}};return s.scopeName=e,[n,ue(s,...r)]}function ue(...e){const r=e[0];if(e.length===1)return r;const t=()=>{const n=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(d){const i=n.reduce((l,{useScope:o,scopeName:f})=>{const p=o(d)[`__scope${f}`];return{...l,...p}},{});return c.useMemo(()=>({[`__scope${r.scopeName}`]:i}),[i])}};return t.scopeName=r.scopeName,t}var de=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],re=de.reduce((e,r)=>{const t=ie(`Primitive.${r}`),n=c.forwardRef((s,d)=>{const{asChild:i,...l}=s,o=i?t:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(o,{...l,ref:d})});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{}),S="Progress",C=100,[me]=ce(S),[fe,pe]=me(S),se=c.forwardRef((e,r)=>{const{__scopeProgress:t,value:n=null,max:s,getValueLabel:d=ve,...i}=e;(s||s===0)&&!E(s)&&console.error(xe(`${s}`,"Progress"));const l=E(s)?s:C;n!==null&&!I(n,l)&&console.error(ge(`${n}`,"Progress"));const o=I(n,l)?n:null,f=P(o)?d(o,l):void 0;return a.jsx(fe,{scope:t,value:o,max:l,children:a.jsx(re.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":P(o)?o:void 0,"aria-valuetext":f,role:"progressbar","data-state":ne(o,l),"data-value":o??void 0,"data-max":l,...i,ref:r})})});se.displayName=S;var le="ProgressIndicator",te=c.forwardRef((e,r)=>{const{__scopeProgress:t,...n}=e,s=pe(le,t);return a.jsx(re.div,{"data-state":ne(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...n,ref:r})});te.displayName=le;function ve(e,r){return`${Math.round(e/r*100)}%`}function ne(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function P(e){return typeof e=="number"}function E(e){return P(e)&&!isNaN(e)&&e>0}function I(e,r){return P(e)&&!isNaN(e)&&e<=r&&e>=0}function xe(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${C}\`.`}function ge(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${C} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var be=se,he=te;const ye=ee("relative w-full overflow-hidden rounded-full bg-lyra-border-subtle",{variants:{size:{sm:"h-1",md:"h-2",lg:"h-3"}},defaultVariants:{size:"md"}}),we=ee("h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out",{variants:{variant:{default:"bg-lyra-bg-active-strong",success:"bg-lyra-status-success-strong",warning:"bg-lyra-status-warning-strong",critical:"bg-lyra-status-critical-strong",neutral:"bg-lyra-fg-secondary"}},defaultVariants:{variant:"default"}}),u=c.forwardRef(({className:e,value:r=0,size:t,variant:n,showLabel:s,label:d,indicatorClassName:i,...l},o)=>a.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[a.jsx(be,{ref:o,value:r,max:100,className:A(ye({size:t}),"w-full",e),...l,children:a.jsx(he,{className:A(we({variant:n}),i),style:{transform:`translateX(-${100-Math.min(100,Math.max(0,r))}%)`}})}),s&&a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary tabular-nums",children:d??`${Math.round(r)}%`})]}));u.displayName="ProgressBar";u.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:"0–100",defaultValue:{value:"0",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show percentage label to the right of the track"},label:{required:!1,tsType:{name:"string"},description:'Override the label text (defaults to "{value}%")'},indicatorClassName:{required:!1,tsType:{name:"string"},description:'Escape hatch to override the indicator\'s transition (default\n`transition-all duration-300 ease-in-out`, from `indicatorVariants`) for\na specific usage — e.g. matching a particular reference animation curve\n— without changing the default for every other consumer. Merged in via\n`cn()`/tailwind-merge, so e.g. `"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"`\ncorrectly overrides just those two utility groups. See\n`ProgressBar.stories.tsx`\'s "Animated — Dashboard Loading" story for a\nreal usage (matching Radix\'s own Progress primitive docs easing curve).'}},composes:["VariantProps"]};const Re={title:"Headless Primitives/Progress Bar",component:u,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["default","success","warning","critical","neutral"]},size:{control:"select",options:["sm","md","lg"]},showLabel:{control:"boolean"}}},g={args:{value:60,variant:"default",size:"md",showLabel:!0}},Ne={default:"Default",success:"Success",warning:"Warning",critical:"Critical",neutral:"Neutral"},b={name:"All Variants",render:()=>a.jsx("div",{className:"flex flex-col gap-5 w-full max-w-md",children:["default","success","warning","critical","neutral"].map(e=>a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx(ae,{label:Ne[e],className:"text-lyra-fg-secondary"}),a.jsx(u,{value:65,variant:e,showLabel:!0})]},e))})},h={name:"Sizes",render:()=>a.jsx("div",{className:"flex flex-col gap-5 w-full max-w-md",children:["sm","md","lg"].map(e=>a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:e}),a.jsx(u,{value:70,size:e})]},e))})},y={name:"States",render:()=>a.jsxs("div",{className:"flex flex-col gap-5 w-full max-w-md",children:[a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Empty (0%)"}),a.jsx(u,{value:0,showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"In progress (45%)"}),a.jsx(u,{value:45,showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Complete (100%)"}),a.jsx(u,{value:100,variant:"success",showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Warning threshold (80%)"}),a.jsx(u,{value:80,variant:"warning",showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Critical (95%)"}),a.jsx(u,{value:95,variant:"critical",showLabel:!0})]})]})},w={name:"Animated",render:()=>{const[e,r]=c.useState(0);c.useEffect(()=>{const n=setInterval(()=>{r(s=>s>=100?(clearInterval(n),100):s+2)},80);return()=>clearInterval(n)},[]);const t=e>=100?"success":e>=80?"warning":"default";return a.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-md",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Loading…"}),a.jsx(u,{value:e,variant:t,size:"md",showLabel:!0})]})}},N={name:"Animated With Label",render:()=>{const[e,r]=c.useState(0);return c.useEffect(()=>{const t=setTimeout(()=>r(60),100);return()=>clearTimeout(t)},[]),a.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-md",children:[a.jsx(ae,{label:"Agent Skill Level"}),a.jsx(u,{value:e,variant:"default",size:"md",indicatorClassName:"duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"})]})}},j={name:"Custom Label",render:()=>a.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[a.jsx(u,{value:30,showLabel:!0,label:"3 / 10 steps"}),a.jsx(u,{value:48,showLabel:!0,label:"2,400 / 5,000 calls"})]})};var $,B,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: "default",
    size: "md",
    showLabel: true
  }
}`,...(_=(B=g.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var M,T,R;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      {(["default", "success", "warning", "critical", "neutral"] as const).map(v => <div key={v} className="flex flex-col gap-1">
          <Label label={variantLabels[v]} className="text-lyra-fg-secondary" />
          <ProgressBar value={65} variant={v} showLabel />
        </div>)}
    </div>
}`,...(R=(T=b.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var D,k,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      {(["sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col gap-1">
          <span className="lyra-label text-lyra-fg-secondary">{s}</span>
          <ProgressBar value={70} size={s} />
        </div>)}
    </div>
}`,...(O=(k=h.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var W,q,G;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,X,F;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(X=w.parameters)==null?void 0:X.docs)==null?void 0:F.source}}};var U,J,K;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(K=(J=N.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Custom Label",
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <ProgressBar value={30} showLabel label="3 / 10 steps" />
      <ProgressBar value={48} showLabel label="2,400 / 5,000 calls" />
    </div>
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const De=["Default","Variants","Sizes","States","Animated","AnimatedWithLabel","CustomLabel"];export{w as Animated,N as AnimatedWithLabel,j as CustomLabel,g as Default,h as Sizes,y as States,b as Variants,De as __namedExportsOrder,Re as default};
