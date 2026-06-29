import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-CXOcBcs0.js";import{c as u}from"./index-1evVQkiP.js";import{c as q}from"./utils-BLSKlp9E.js";import{B as D}from"./button-Dd7BgKlB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./tooltip-3keU6E-A.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";const L=u("flex items-center",{variants:{size:{sm:"gap-[2px]",md:"gap-0.5",lg:"gap-[3px]"}},defaultVariants:{size:"md"}}),O=u("rounded-sm origin-center",{variants:{size:{sm:"h-3 w-[3px]",md:"h-5 w-1",lg:"h-6 w-[5px]"}},defaultVariants:{size:"md"}}),_=u("relative rounded-full",{variants:{size:{sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"}},defaultVariants:{size:"md"}}),A={primary:"var(--lyra-color-bg-primary)",inverse:"var(--lyra-color-fg-inverse)"},v="lyra-spinner-keyframes";function T(){if(typeof document>"u"||document.getElementById(v))return;const r=document.createElement("style");r.id=v,r.textContent=`
    @keyframes lyra-bar-pulse {
      0%, 100% { transform: scaleY(0.35); opacity: 0.5; }
      50%       { transform: scaleY(1);    opacity: 1;   }
    }
    @keyframes lyra-circle-pulse {
      0%   { transform: scale(0); opacity: 0.8; }
      100% { transform: scale(1); opacity: 0;   }
    }
  `,document.head.appendChild(r)}const M=({size:r,color:s})=>{p.useEffect(()=>{T()},[]);const i=A[s];return e.jsx("div",{className:L({size:r}),children:[.1,.2,.3].map((a,t)=>e.jsx("span",{className:O({size:r}),style:{backgroundColor:i,animation:`lyra-bar-pulse 0.6s linear ${a}s infinite`}},t))})},$=({size:r,color:s})=>{p.useEffect(()=>{T()},[]);const i=A[s];return e.jsx("div",{className:_({size:r}),children:[0,.5].map((a,t)=>e.jsx("span",{className:"absolute inset-0 rounded-full",style:{backgroundColor:i,animation:`lyra-circle-pulse 1s ease-out ${a}s infinite`}},t))})},n=p.forwardRef(({variant:r="bar",size:s="md",color:i="primary",label:a="Loading",className:t},E)=>e.jsx("div",{ref:E,role:"status","aria-label":a,className:q("inline-flex items-center justify-center",t),children:r==="bar"?e.jsx(M,{size:s,color:i}):e.jsx($,{size:s,color:i})}));n.displayName="Spinner";n.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{variant:{required:!1,tsType:{name:"union",raw:'"bar" | "circle"',elements:[{name:"literal",value:'"bar"'},{name:"literal",value:'"circle"'}]},description:"Visual style of the spinner",defaultValue:{value:'"bar"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "inverse"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inverse"'}]},description:"Color — primary (blue) for light surfaces, inverse (white) for dark surfaces",defaultValue:{value:'"primary"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label announced by screen readers",defaultValue:{value:'"Loading"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};const W={title:"Atoms/Spinner",component:n,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["bar","circle"]},size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","inverse"]}}},l={name:"Spinner Bar",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(n,{variant:"bar",size:"sm"}),e.jsx(n,{variant:"bar",size:"md"}),e.jsx(n,{variant:"bar",size:"lg"})]})},c={name:"Spinner Circle",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(n,{variant:"circle",size:"sm"}),e.jsx(n,{variant:"circle",size:"md"}),e.jsx(n,{variant:"circle",size:"lg"})]})},o={name:"Multiple Spinner",render:()=>{const[r,s]=p.useState({1:!0,2:!0}),i=a=>s(t=>({...t,[a]:!t[a]}));return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{className:"flex gap-3",children:[1,2,3,4].map(a=>e.jsxs(D,{variant:r[a]?"primary":"outline",size:"sm",onClick:()=>i(a),children:["Toggle ",a]},a))}),e.jsx("div",{className:"flex items-center gap-8 h-10",children:[1,2,3,4].map(a=>r[a]?e.jsx(n,{variant:"bar",size:"md",label:`Loading ${a}`},a):null)})]})}},m={name:"On Dark Background",parameters:{backgrounds:{default:"lyra-shell"}},render:()=>e.jsxs("div",{className:"flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse",children:[e.jsx(n,{variant:"bar",color:"inverse",size:"md"}),e.jsx(n,{variant:"circle",color:"inverse",size:"md"})]})},d={name:"All Variants",render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:["sm","md","lg"].map(r=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary w-6",children:r}),e.jsx(n,{variant:"bar",size:r}),e.jsx(n,{variant:"circle",size:r})]},r))})};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Spinner Bar",
  render: () => <div className="flex items-center gap-8">
      <Spinner variant="bar" size="sm" />
      <Spinner variant="bar" size="md" />
      <Spinner variant="bar" size="lg" />
    </div>
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,b,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Spinner Circle",
  render: () => <div className="flex items-center gap-8">
      <Spinner variant="circle" size="sm" />
      <Spinner variant="circle" size="md" />
      <Spinner variant="circle" size="lg" />
    </div>
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var h,j,z;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Multiple Spinner",
  render: () => {
    const [active, setActive] = useState<Record<number, boolean>>({
      1: true,
      2: true
    });
    const toggle = (id: number) => setActive(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    return <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          {[1, 2, 3, 4].map(id => <Button key={id} variant={active[id] ? "primary" : "outline"} size="sm" onClick={() => toggle(id)}>
              Toggle {id}
            </Button>)}
        </div>
        <div className="flex items-center gap-8 h-10">
          {[1, 2, 3, 4].map(id => active[id] ? <Spinner key={id} variant="bar" size="md" label={\`Loading \${id}\`} /> : null)}
        </div>
      </div>;
  }
}`,...(z=(j=o.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var N,k,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "On Dark Background",
  parameters: {
    backgrounds: {
      default: "lyra-shell"
    }
  },
  render: () => <div className="flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
      <Spinner variant="bar" color="inverse" size="md" />
      <Spinner variant="circle" color="inverse" size="md" />
    </div>
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var V,w,C;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-8">
          <span className="lyra-body-sm text-lyra-fg-secondary w-6">{size}</span>
          <Spinner variant="bar" size={size} />
          <Spinner variant="circle" size={size} />
        </div>)}
    </div>
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const X=["SpinnerBar","SpinnerCircle","MultipleSpinner","OnDarkBackground","AllVariants"];export{d as AllVariants,o as MultipleSpinner,m as OnDarkBackground,l as SpinnerBar,c as SpinnerCircle,X as __namedExportsOrder,W as default};
