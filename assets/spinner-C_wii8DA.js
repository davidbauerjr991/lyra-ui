import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DhMLlvMY.js";import{c as l}from"./index-1evVQkiP.js";import{c as p}from"./utils-BLSKlp9E.js";import{L as v}from"./loader-D8U98l95.js";const h=l("flex items-center",{variants:{size:{sm:"gap-lyra-05",md:"gap-0.5",lg:"gap-[3px]"}},defaultVariants:{size:"md"}}),x=l("rounded-sm origin-center",{variants:{size:{sm:"h-3 w-[3px]",md:"h-5 w-1",lg:"h-6 w-[5px]"}},defaultVariants:{size:"md"}}),u=l("relative rounded-full",{variants:{size:{sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"}},defaultVariants:{size:"md"}}),o={primary:"var(--lyra-color-bg-primary)",inverse:"var(--lyra-color-fg-inverse)"},c="lyra-spinner-keyframes";function d(){if(typeof document>"u"||document.getElementById(c))return;const a=document.createElement("style");a.id=c,a.textContent=`
    @keyframes lyra-bar-pulse {
      0%, 100% { transform: scaleY(0.35); opacity: 0.5; }
      50%       { transform: scaleY(1);    opacity: 1;   }
    }
    @keyframes lyra-circle-pulse {
      0%   { transform: scale(0); opacity: 0.8; }
      100% { transform: scale(1); opacity: 0;   }
    }
    @keyframes lyra-ring-spin {
      to { transform: rotate(360deg); }
    }
    @keyframes lyra-spinner-fade {
      0%, 100% { opacity: 0.35; }
      50%      { opacity: 1;    }
    }
    /* Reduced motion: no scaling or pulsing size. Bars stay full height and
       fade slowly; a circle shows one small dot fading in and out. */
    @media (prefers-reduced-motion: reduce) {
      [data-lyra-spinner] [data-lyra-bar],
      [data-lyra-spinner] [data-lyra-ripple],
      [data-lyra-spinner] [data-lyra-ring] {
        animation: lyra-spinner-fade 1.6s ease-in-out infinite !important;
        transform: none !important;
      }
      [data-lyra-spinner] [data-lyra-ripple="0"] { inset: 25%; }
      [data-lyra-spinner] [data-lyra-ripple="1"] { display: none; }
    }
  `,document.head.appendChild(a)}const b=({size:a,color:r})=>{t.useEffect(()=>{d()},[]);const n=o[r];return e.jsx("div",{className:h({size:a}),children:[.1,.2,.3].map((i,s)=>e.jsx("span",{"data-lyra-bar":"",className:x({size:a}),style:{backgroundColor:n,animation:`lyra-bar-pulse 0.6s linear ${i}s infinite`}},s))})},j=({size:a,color:r})=>{t.useEffect(()=>{d()},[]);const n=o[r];return e.jsxs("div",{className:u({size:a}),children:[[0,.5].map((i,s)=>e.jsx("span",{"data-lyra-ripple":s,className:"absolute inset-0 rounded-full",style:{backgroundColor:n,animation:`lyra-circle-pulse 1s ease-out ${i}s infinite`}},s)),r==="primary"&&e.jsx("span",{"data-lyra-dot":!0,className:"absolute inset-[30%] rounded-full",style:{backgroundColor:n}})]})},w=({size:a,color:r})=>(t.useEffect(()=>{d()},[]),e.jsx(v,{"aria-hidden":"true","data-lyra-ring":"",strokeWidth:2,className:u({size:a}),style:{color:o[r],animation:"lyra-ring-spin 1s linear infinite"}})),f=t.forwardRef(({variant:a="bar",size:r="md",color:n="primary",label:i="Loading",showLabel:s=!1,className:y},g)=>{const m=a==="bar"?e.jsx(b,{size:r,color:n}):a==="ring"?e.jsx(w,{size:r,color:n}):e.jsx(j,{size:r,color:n});return e.jsx("div",{ref:g,role:"status","aria-label":s?void 0:i,"data-lyra-spinner":"",className:p("inline-flex items-center justify-center",s&&"gap-2",y),children:s?e.jsxs(e.Fragment,{children:[e.jsx("span",{"aria-hidden":"true",className:"inline-flex",children:m}),e.jsx("span",{className:p("lyra-body-sm",n==="inverse"?"text-lyra-fg-inverse":"text-lyra-fg-secondary"),children:i})]}):m})});f.displayName="Spinner";f.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{variant:{required:!1,tsType:{name:"union",raw:'"bar" | "circle" | "ring"',elements:[{name:"literal",value:'"bar"'},{name:"literal",value:'"circle"'},{name:"literal",value:'"ring"'}]},description:"Visual style of the spinner",defaultValue:{value:'"bar"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "inverse"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"inverse"'}]},description:"Color — primary (blue) for light surfaces, inverse (white) for dark surfaces",defaultValue:{value:'"primary"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label announced by screen readers",defaultValue:{value:'"Loading"',computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Also show `label` as visible text next to the spinner (default: false —\n the label is announced to screen readers only).",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};export{f as S};
