import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CXOcBcs0.js";import"./index-DWcjTdiE.js";import{c as se}from"./index-BDkVnVO1.js";import{c as J}from"./index-1evVQkiP.js";import{c as re}from"./utils-BLSKlp9E.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DujEZ9g2.js";import"./index-DNfP5j1O.js";function le(e,s=[]){let t=[];function n(i,c){const l=u.createContext(c);l.displayName=i+"Context";const o=t.length;t=[...t,c];const p=f=>{var V;const{scope:m,children:P,...x}=f,v=((V=m==null?void 0:m[e])==null?void 0:V[o])||l,ae=u.useMemo(()=>x,Object.values(x));return a.jsx(v.Provider,{value:ae,children:P})};p.displayName=i+"Provider";function C(f,m){var v;const P=((v=m==null?void 0:m[e])==null?void 0:v[o])||l,x=u.useContext(P);if(x)return x;if(c!==void 0)return c;throw new Error(`\`${f}\` must be used within \`${i}\``)}return[p,C]}const r=()=>{const i=t.map(c=>u.createContext(c));return function(l){const o=(l==null?void 0:l[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...l,[e]:o}}),[l,o])}};return r.scopeName=e,[n,ne(r,...s)]}function ne(...e){const s=e[0];if(e.length===1)return s;const t=()=>{const n=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const c=n.reduce((l,{useScope:o,scopeName:p})=>{const f=o(i)[`__scope${p}`];return{...l,...f}},{});return u.useMemo(()=>({[`__scope${s.scopeName}`]:c}),[c])}};return t.scopeName=s.scopeName,t}var te=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],K=te.reduce((e,s)=>{const t=se(`Primitive.${s}`),n=u.forwardRef((r,i)=>{const{asChild:c,...l}=r,o=c?t:s;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(o,{...l,ref:i})});return n.displayName=`Primitive.${s}`,{...e,[s]:n}},{}),S="Progress",L=100,[oe]=le(S),[ce,ie]=oe(S),Q=u.forwardRef((e,s)=>{const{__scopeProgress:t,value:n=null,max:r,getValueLabel:i=de,...c}=e;(r||r===0)&&!$(r)&&console.error(ue(`${r}`,"Progress"));const l=$(r)?r:L;n!==null&&!I(n,l)&&console.error(me(`${n}`,"Progress"));const o=I(n,l)?n:null,p=j(o)?i(o,l):void 0;return a.jsx(ce,{scope:t,value:o,max:l,children:a.jsx(K.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":j(o)?o:void 0,"aria-valuetext":p,role:"progressbar","data-state":ee(o,l),"data-value":o??void 0,"data-max":l,...c,ref:s})})});Q.displayName=S;var Y="ProgressIndicator",Z=u.forwardRef((e,s)=>{const{__scopeProgress:t,...n}=e,r=ie(Y,t);return a.jsx(K.div,{"data-state":ee(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...n,ref:s})});Z.displayName=Y;function de(e,s){return`${Math.round(e/s*100)}%`}function ee(e,s){return e==null?"indeterminate":e===s?"complete":"loading"}function j(e){return typeof e=="number"}function $(e){return j(e)&&!isNaN(e)&&e>0}function I(e,s){return j(e)&&!isNaN(e)&&e<=s&&e>=0}function ue(e,s){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${L}\`.`}function me(e,s){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${L} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var pe=Q,fe=Z;const xe=J("relative w-full overflow-hidden rounded-full bg-lyra-border-subtle",{variants:{size:{sm:"h-1",md:"h-2",lg:"h-3"}},defaultVariants:{size:"md"}}),ve=J("h-full w-full flex-1 rounded-full transition-all duration-300 ease-in-out",{variants:{variant:{default:"bg-lyra-bg-active-strong",success:"bg-lyra-status-success-strong",warning:"bg-lyra-status-warning-strong",critical:"bg-lyra-status-critical-strong",neutral:"bg-lyra-fg-secondary"}},defaultVariants:{variant:"default"}}),d=u.forwardRef(({className:e,value:s=0,size:t,variant:n,showLabel:r,label:i,...c},l)=>a.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[a.jsx(pe,{ref:l,value:s,max:100,className:re(xe({size:t}),"w-full",e),...c,children:a.jsx(fe,{className:ve({variant:n}),style:{transform:`translateX(-${100-Math.min(100,Math.max(0,s))}%)`}})}),r&&a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary tabular-nums",children:i??`${Math.round(s)}%`})]}));d.displayName="Progress";d.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"0–100",defaultValue:{value:"0",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Show percentage label to the right of the track"},label:{required:!1,tsType:{name:"string"},description:'Override the label text (defaults to "{value}%")'}},composes:["VariantProps"]};const Le={title:"Atoms/Progress",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},variant:{control:"select",options:["default","success","warning","critical","neutral"]},size:{control:"select",options:["sm","md","lg"]},showLabel:{control:"boolean"}}},g={args:{value:60,variant:"default",size:"md",showLabel:!0}},y={name:"All Variants",render:()=>a.jsx("div",{className:"flex flex-col gap-5 w-full max-w-md",children:["default","success","warning","critical","neutral"].map(e=>a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary capitalize",children:e}),a.jsx(d,{value:65,variant:e,showLabel:!0})]},e))})},b={name:"Sizes",render:()=>a.jsx("div",{className:"flex flex-col gap-5 w-full max-w-md",children:["sm","md","lg"].map(e=>a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:e}),a.jsx(d,{value:70,size:e})]},e))})},h={name:"States",render:()=>a.jsxs("div",{className:"flex flex-col gap-5 w-full max-w-md",children:[a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Empty (0%)"}),a.jsx(d,{value:0,showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"In progress (45%)"}),a.jsx(d,{value:45,showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Complete (100%)"}),a.jsx(d,{value:100,variant:"success",showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Warning threshold (80%)"}),a.jsx(d,{value:80,variant:"warning",showLabel:!0})]}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Critical (95%)"}),a.jsx(d,{value:95,variant:"critical",showLabel:!0})]})]})},w={name:"Animated",render:()=>{const[e,s]=u.useState(0);u.useEffect(()=>{const n=setInterval(()=>{s(r=>r>=100?(clearInterval(n),100):r+2)},80);return()=>clearInterval(n)},[]);const t=e>=100?"success":e>=80?"warning":"default";return a.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-md",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-secondary",children:"Loading…"}),a.jsx(d,{value:e,variant:t,size:"md",showLabel:!0})]})}},N={name:"Custom Label",render:()=>a.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-md",children:[a.jsx(d,{value:30,showLabel:!0,label:"3 / 10 steps"}),a.jsx(d,{value:48,showLabel:!0,label:"2,400 / 5,000 calls"})]})};var _,z,E;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: "default",
    size: "md",
    showLabel: true
  }
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var A,M,R;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      {(["default", "success", "warning", "critical", "neutral"] as const).map(v => <div key={v} className="flex flex-col gap-1">
          <span className="lyra-label text-lyra-fg-secondary capitalize">{v}</span>
          <Progress value={65} variant={v} showLabel />
        </div>)}
    </div>
}`,...(R=(M=y.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var D,O,T;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      {(["sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col gap-1">
          <span className="lyra-label text-lyra-fg-secondary">{s}</span>
          <Progress value={70} size={s} />
        </div>)}
    </div>
}`,...(T=(O=b.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var k,q,G;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-5 w-full max-w-md">
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Empty (0%)</span>
        <Progress value={0} showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">In progress (45%)</span>
        <Progress value={45} showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Complete (100%)</span>
        <Progress value={100} variant="success" showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Warning threshold (80%)</span>
        <Progress value={80} variant="warning" showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Critical (95%)</span>
        <Progress value={95} variant="critical" showLabel />
      </div>
    </div>
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var W,X,B;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
        <Progress value={value} variant={variant} size="md" showLabel />
      </div>;
  }
}`,...(B=(X=w.parameters)==null?void 0:X.docs)==null?void 0:B.source}}};var F,H,U;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Custom Label",
  render: () => <div className="flex flex-col gap-4 w-full max-w-md">
      <Progress value={30} showLabel label="3 / 10 steps" />
      <Progress value={48} showLabel label="2,400 / 5,000 calls" />
    </div>
}`,...(U=(H=N.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Ce=["Default","Variants","Sizes","States","Animated","CustomLabel"];export{w as Animated,N as CustomLabel,g as Default,b as Sizes,h as States,y as Variants,Ce as __namedExportsOrder,Le as default};
