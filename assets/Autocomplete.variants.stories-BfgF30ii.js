import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DhMLlvMY.js";import{A as a,C as r}from"./Autocomplete.shared-DwIt5RQK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./clear-button-Cb_QiePp.js";import"./x-CzxgOx-T.js";import"./spinner-xIhFAlhc.js";import"./index-1evVQkiP.js";const de={title:"Custom Primitives/Autocomplete/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"States (Default, Required)",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{label:"Default",options:r,placeholder:"Search…"}),e.jsx(a,{label:"Required",options:r,required:!0,placeholder:"Search…"})]})},l={name:"With Value",render:()=>e.jsx("div",{className:"w-72",children:e.jsx(a,{label:"With value",options:r,value:"gb",placeholder:"Search…"})})},n={name:"Disabled & Read Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{label:"Disabled",options:r,disabled:!0,placeholder:"Search…"}),e.jsx(a,{label:"Read Only",options:r,readonly:!0,value:"au",placeholder:"Search…"})]})},c={name:"Loading",render:()=>e.jsx("div",{className:"w-72",children:e.jsx(a,{label:"Loading",options:r,loading:!0,placeholder:"Click to open…"})})};function U(){const[w,D]=t.useState(),[E,p]=t.useState(r.slice(0,0)),[T,d]=t.useState(!1),o=t.useRef(null);t.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]);const L=I=>{o.current&&clearTimeout(o.current);const m=I.trim().toLowerCase();if(!m){d(!1),p([]);return}d(!0),o.current=setTimeout(()=>{p(r.filter(q=>q.label.toLowerCase().includes(m))),d(!1)},700)};return e.jsx("div",{className:"w-72",children:e.jsx(a,{label:"Country (type to search)",options:E,value:w,onChange:D,onInputChange:L,loading:T,filterOptions:!1,showAllOnEmpty:!1,placeholder:"Try “an”…"})})}const i={name:"Async Search",render:()=>e.jsx(U,{})};var u,h,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "States (Default, Required)",
  render: () => <div className="flex flex-col gap-4 w-72">
      <Autocomplete label="Default" options={COUNTRIES} placeholder="Search…" />
      <Autocomplete label="Required" options={COUNTRIES} required placeholder="Search…" />
    </div>
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,x,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "With Value",
  render: () => <div className="w-72">
      <Autocomplete label="With value" options={COUNTRIES} value="gb" placeholder="Search…" />
    </div>
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Disabled & Read Only",
  render: () => <div className="flex flex-col gap-4 w-72">
      <Autocomplete label="Disabled" options={COUNTRIES} disabled placeholder="Search…" />
      <Autocomplete label="Read Only" options={COUNTRIES} readonly value="au" placeholder="Search…" />
    </div>
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var R,A,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Loading",
  render: () => <div className="w-72">
      <Autocomplete label="Loading" options={COUNTRIES} loading placeholder="Click to open…" />
    </div>
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var N,O,j;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Async Search",
  render: () => <AsyncSearchDemo />
}`,...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const pe=["States","WithValue","DisabledAndReadOnly","Loading","AsyncSearch"];export{i as AsyncSearch,n as DisabledAndReadOnly,c as Loading,s as States,l as WithValue,pe as __namedExportsOrder,de as default};
