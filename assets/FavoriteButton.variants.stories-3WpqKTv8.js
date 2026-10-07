import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as l}from"./favorite-button-BJq5peE4.js";import{D as r}from"./FavoriteButton.shared-BTZHIBRH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./star-CKl-uXvS.js";import"./createLucideIcon-aII_sYFw.js";const D={title:"Custom Primitives/FavoriteButton/Variants",component:l,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"States (Not Favorited, Favorited, At Cap)",render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1.5",children:"Not favorited — hover the row to reveal the star"}),e.jsx(r,{name:"Jamie Torres"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1.5",children:"Favorited — star stays visible without hovering"}),e.jsx(r,{name:"Priya Nair",initiallyFavorited:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1.5",children:"At favorites cap — un-favorited star is muted and inert"}),e.jsx(r,{name:"Wei Chen",disabled:!0})]})]})},t={name:"Inside a list",render:()=>e.jsxs("div",{className:"flex w-72 flex-col gap-1 rounded-lyra-lg border border-lyra-border-subtle p-2",children:[e.jsx(r,{name:"Jamie Torres",initiallyFavorited:!0}),e.jsx(r,{name:"Priya Nair"}),e.jsx(r,{name:"Wei Chen"})]})};var s,o,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "States (Not Favorited, Favorited, At Cap)",
  render: () => <div className="flex w-72 flex-col gap-3">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Not favorited — hover the row to reveal the star</p>
        <DemoRow name="Jamie Torres" />
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">Favorited — star stays visible without hovering</p>
        <DemoRow name="Priya Nair" initiallyFavorited />
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-1.5">At favorites cap — un-favorited star is muted and inert</p>
        <DemoRow name="Wei Chen" disabled />
      </div>
    </div>
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Inside a list",
  render: () => <div className="flex w-72 flex-col gap-1 rounded-lyra-lg border border-lyra-border-subtle p-2">
      <DemoRow name="Jamie Torres" initiallyFavorited />
      <DemoRow name="Priya Nair" />
      <DemoRow name="Wei Chen" />
    </div>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const R=["States","InList"];export{t as InList,a as States,R as __namedExportsOrder,D as default};
