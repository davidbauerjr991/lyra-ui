import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./tooltip-BnyLRSaS.js";import{B as s}from"./button-Cje2PXGX.js";import{T as x,S as T,L as f}from"./Tooltip.shared-B0QnOrWH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";const I={title:"Headless Primitives/Tooltip/Variants",component:t,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-12 p-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-6",children:"All Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-16",children:x.map(o=>e.jsx("div",{className:"flex items-center justify-center py-6",children:e.jsx(t,{content:T,placement:o,delayMs:0,children:e.jsx(s,{variant:"outline",className:"capitalize",children:o})})},o))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-6",children:"Content Length"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(t,{content:"Short tip",placement:"top",delayMs:0,children:e.jsx(s,{variant:"outline",children:"Short content"})}),e.jsx(t,{content:f,placement:"top",delayMs:0,children:e.jsx(s,{variant:"outline",children:"Long content"})})]})]})]})},a={name:"Only When Truncated",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-8",children:[e.jsx(t,{content:"A long label that gets cut off by its container",onlyWhenTruncated:!0,delayMs:0,children:e.jsx("span",{tabIndex:0,className:"lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1",children:"A long label that gets cut off by its container"})}),e.jsx(t,{content:"Fits",onlyWhenTruncated:!0,delayMs:0,children:e.jsx("span",{tabIndex:0,className:"lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1",children:"Fits"})})]})},r={name:"Only When Truncated — Focus Target",render:()=>e.jsx("div",{className:"p-8",children:e.jsx(s,{variant:"outline",className:"w-48 justify-start",children:e.jsx(t,{content:"A long header title that gets cut off",onlyWhenTruncated:!0,focusTarget:"ancestor",delayMs:0,children:e.jsx("span",{className:"block min-w-0 truncate",children:"A long header title that gets cut off"})})})})};var l,c,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-12 p-8">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-6">All Placements</p>
        <div className="grid grid-cols-2 gap-16">
          {TOOLTIP_PLACEMENTS.map(placement => <div key={placement} className="flex items-center justify-center py-6">
              <Tooltip content={SHORT_TEXT} placement={placement} delayMs={0}>
                <Button variant="outline" className="capitalize">{placement}</Button>
              </Tooltip>
            </div>)}
        </div>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-6">Content Length</p>
        <div className="flex items-center gap-8">
          <Tooltip content="Short tip" placement="top" delayMs={0}>
            <Button variant="outline">Short content</Button>
          </Tooltip>
          <Tooltip content={LONG_TEXT} placement="top" delayMs={0}>
            <Button variant="outline">Long content</Button>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Only When Truncated",
  render: () => <div className="flex flex-col gap-6 p-8">
      <Tooltip content="A long label that gets cut off by its container" onlyWhenTruncated delayMs={0}>
        <span tabIndex={0} className="lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1">
          A long label that gets cut off by its container
        </span>
      </Tooltip>
      <Tooltip content="Fits" onlyWhenTruncated delayMs={0}>
        <span tabIndex={0} className="lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1">
          Fits
        </span>
      </Tooltip>
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Only When Truncated — Focus Target",
  render: () => <div className="p-8">
      <Button variant="outline" className="w-48 justify-start">
        <Tooltip content="A long header title that gets cut off" onlyWhenTruncated focusTarget="ancestor" delayMs={0}>
          <span className="block min-w-0 truncate">A long header title that gets cut off</span>
        </Tooltip>
      </Button>
    </div>
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const V=["AllVariants","OnlyWhenTruncated","FocusTarget"];export{n as AllVariants,r as FocusTarget,a as OnlyWhenTruncated,V as __namedExportsOrder,I as default};
