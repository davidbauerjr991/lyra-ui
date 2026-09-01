import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-CXOcBcs0.js";import{F as v}from"./favorite-button-N2jDD4ol.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./star-BBKukw_S.js";import"./createLucideIcon-DEcfmm_F.js";const V={title:"Custom Primitives/FavoriteButton",component:v,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{placement:{control:"select",options:["top","bottom","left","right"]},favorited:{control:"boolean"},onClick:{table:{disable:!0}}}};function r({name:t,initiallyFavorited:x}){const[f,b]=g.useState(!!x);return e.jsxs("div",{className:"group/row flex w-full items-center justify-between rounded-lyra-sm border border-lyra-border-subtle px-3 py-2.5",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:t}),e.jsx(v,{favorited:f,onClick:()=>b(h=>!h),label:t,placement:"left"})]})}const a={name:"Default",render:()=>e.jsx("div",{className:"w-72",children:e.jsx(r,{name:"Jamie Torres"})})},o={name:"All Variants",render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1.5",children:"Not favorited — hover the row to reveal the star"}),e.jsx(r,{name:"Jamie Torres"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1.5",children:"Favorited — star stays visible without hovering"}),e.jsx(r,{name:"Priya Nair",initiallyFavorited:!0})]})]})},s={name:"Inside a list",render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-1 rounded-lyra-lg border border-lyra-border-subtle p-2",children:[e.jsx(r,{name:"Jamie Torres",initiallyFavorited:!0}),e.jsx(r,{name:"Priya Nair"}),e.jsx(r,{name:"Wei Chen"})]})};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="w-72">
      <DemoRow name="Jamie Torres" />
    </div>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,d,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex w-72 flex-col gap-3">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Not favorited — hover the row to reveal the star</p>
        <DemoRow name="Jamie Torres" />
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Favorited — star stays visible without hovering</p>
        <DemoRow name="Priya Nair" initiallyFavorited />
      </div>
    </div>
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Inside a list",
  render: () => <div className="flex w-72 flex-col gap-1 rounded-lyra-lg border border-lyra-border-subtle p-2">
      <DemoRow name="Jamie Torres" initiallyFavorited />
      <DemoRow name="Priya Nair" />
      <DemoRow name="Wei Chen" />
    </div>
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const k=["Default","AllVariants","InList"];export{o as AllVariants,a as Default,s as InList,k as __namedExportsOrder,V as default};
