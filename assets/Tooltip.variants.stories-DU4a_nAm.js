import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./tooltip-DKTByY8R.js";import{B as s}from"./button-CLz1-b9g.js";import{T as m,S as y,L as u}from"./Tooltip.shared-B0QnOrWH.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";const B={title:"Headless Primitives/Tooltip/Variants",component:t,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-12 p-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-6",children:"All Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-16",children:m.map(r=>e.jsx("div",{className:"flex items-center justify-center py-6",children:e.jsx(t,{content:y,placement:r,delayMs:0,children:e.jsx(s,{variant:"outline",className:"capitalize",children:r})})},r))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-6",children:"Content Length"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(t,{content:"Short tip",placement:"top",delayMs:0,children:e.jsx(s,{variant:"outline",children:"Short content"})}),e.jsx(t,{content:u,placement:"top",delayMs:0,children:e.jsx(s,{variant:"outline",children:"Long content"})})]})]})]})},a={name:"Only When Truncated",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-8",children:[e.jsx(t,{content:"A long label that gets cut off by its container",onlyWhenTruncated:!0,delayMs:0,children:e.jsx("span",{tabIndex:0,className:"lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1",children:"A long label that gets cut off by its container"})}),e.jsx(t,{content:"Fits",onlyWhenTruncated:!0,delayMs:0,children:e.jsx("span",{tabIndex:0,className:"lyra-body-md block w-40 truncate rounded-lyra-sm border border-lyra-border-soft px-2 py-1",children:"Fits"})})]})};var o,l,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const W=["AllVariants","OnlyWhenTruncated"];export{n as AllVariants,a as OnlyWhenTruncated,W as __namedExportsOrder,B as default};
