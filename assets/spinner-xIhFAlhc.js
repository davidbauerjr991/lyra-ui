import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DhMLlvMY.js";import{c as t}from"./index-1evVQkiP.js";import{c as o}from"./utils-BLSKlp9E.js";const v=t("flex items-center",{variants:{size:{sm:"gap-lyra-05",md:"gap-0.5",lg:"gap-[3px]"}},defaultVariants:{size:"md"}}),x=t("rounded-sm origin-center",{variants:{size:{sm:"h-3 w-[3px]",md:"h-5 w-1",lg:"h-6 w-[5px]"}},defaultVariants:{size:"md"}}),b=t("relative rounded-full",{variants:{size:{sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"}},defaultVariants:{size:"md"}}),c={primary:"var(--lyra-color-bg-primary)",inverse:"var(--lyra-color-fg-inverse)"},d="lyra-spinner-keyframes";function u(){if(typeof document>"u"||document.getElementById(d))return;const a=document.createElement("style");a.id=d,a.textContent=`
    @keyframes lyra-bar-pulse {
      0%, 100% { transform: scaleY(0.35); opacity: 0.5; }
      50%       { transform: scaleY(1);    opacity: 1;   }
    }
    @keyframes lyra-circle-pulse {
      0%   { transform: scale(0); opacity: 0.8; }
      100% { transform: scale(1); opacity: 0;   }
    }
    @keyframes lyra-spinner-fade {
      0%, 100% { opacity: 0.35; }
      50%      { opacity: 1;    }
    }
    /* Reduced motion: no scaling or pulsing size. Bars stay full height and
       fade slowly; a circle shows one small dot fading in and out. */
    @media (prefers-reduced-motion: reduce) {
      [data-lyra-spinner] [data-lyra-bar],
      [data-lyra-spinner] [data-lyra-ripple] {
        animation: lyra-spinner-fade 1.6s ease-in-out infinite !important;
        transform: none !important;
      }
      [data-lyra-spinner] [data-lyra-ripple="0"] { inset: 25%; }
      [data-lyra-spinner] [data-lyra-ripple="1"] { display: none; }
    }
  `,document.head.appendChild(a)}const m=({size:a,color:s})=>{i.useEffect(()=>{u()},[]);const r=c[s];return e.jsx("div",{className:v({size:a}),children:[.1,.2,.3].map((l,n)=>e.jsx("span",{"data-lyra-bar":"",className:x({size:a}),style:{backgroundColor:r,animation:`lyra-bar-pulse 0.6s linear ${l}s infinite`}},n))})},p=({size:a,color:s})=>{i.useEffect(()=>{u()},[]);const r=c[s];return e.jsxs("div",{className:b({size:a}),children:[[0,.5].map((l,n)=>e.jsx("span",{"data-lyra-ripple":n,className:"absolute inset-0 rounded-full",style:{backgroundColor:r,animation:`lyra-circle-pulse 1s ease-out ${l}s infinite`}},n)),s==="primary"&&e.jsx("span",{"data-lyra-dot":!0,className:"absolute inset-[30%] rounded-full",style:{backgroundColor:r}})]})},f=i.forwardRef(({variant:a="bar",size:s="md",color:r="primary",label:l="Loading",showLabel:n=!1,className:y},g)=>e.jsx("div",{ref:g,role:"status","aria-label":n?void 0:l,"data-lyra-spinner":"",className:o("inline-flex items-center justify-center",n&&"gap-2",y),children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{"aria-hidden":"true",className:"inline-flex",children:a==="bar"?e.jsx(m,{size:s,color:r}):e.jsx(p,{size:s,color:r})}),e.jsx("span",{className:o("lyra-body-sm",r==="inverse"?"text-lyra-fg-inverse":"text-lyra-fg-secondary"),children:l})]}):a==="bar"?e.jsx(m,{size:s,color:r}):e.jsx(p,{size:s,color:r})}));f.displayName="Spinner";f.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{variant:{required:!1,tsType:{name:"union",raw:'"bar" | "circle"',elements:[{name:"literal",value:'"bar"'},{name:"literal",value:'"circle"'}]},description:"Visual style of the spinner",defaultValue:{value:'"bar"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "inverse"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inverse"'}]},description:"Color — primary (blue) for light surfaces, inverse (white) for dark surfaces",defaultValue:{value:'"primary"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label announced by screen readers",defaultValue:{value:'"Loading"',computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Also show `label` as visible text next to the spinner (default: false —\n the label is announced to screen readers only).",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};export{f as S};
