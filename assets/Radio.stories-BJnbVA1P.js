import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as l,a}from"./radio-Cs5SiZTO.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-C5pUL7te.js";import"./index-CoT6TaLL.js";import"./label-nFez4jEO.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";const O={title:"Headless Primitives/Radio",component:l,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o={name:"Default",render:()=>e.jsxs(l,{defaultValue:"option1",name:"default-demo",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]})},s={name:"Unselected",render:()=>e.jsxs(l,{name:"unselected-demo",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]})},d={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-2",children:"Disabled unselected"}),e.jsx(l,{name:"disabled-unselected",disabled:!0,children:e.jsx(a,{value:"option1",label:"Radio label"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-2",children:"Disabled selected"}),e.jsx(l,{name:"disabled-selected",defaultValue:"option1",disabled:!0,children:e.jsx(a,{value:"option1",label:"Radio label"})})]})]})},i={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Unchecked states (hover the rows)"}),e.jsxs(l,{name:"states-unchecked",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]}),e.jsx("div",{className:"border-b border-lyra-border-subtle my-2"}),e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Checked states (hover the rows)"}),e.jsxs(l,{name:"states-checked",defaultValue:"option1",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]}),e.jsx("div",{className:"border-b border-lyra-border-subtle my-2"}),e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Disabled"}),e.jsx(l,{name:"states-disabled-unchecked",disabled:!0,children:e.jsx(a,{value:"option1",label:"Radio label"})}),e.jsx(l,{name:"states-disabled-checked",defaultValue:"option1",disabled:!0,children:e.jsx(a,{value:"option1",label:"Radio label"})})]})},n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Vertical — unselected"}),e.jsxs(l,{name:"allvariants-vertical-unselected",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Vertical — selected"}),e.jsxs(l,{name:"allvariants-vertical-selected",defaultValue:"option2",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Horizontal — unselected"}),e.jsxs(l,{name:"allvariants-horizontal-unselected",orientation:"horizontal",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Horizontal — selected"}),e.jsxs(l,{name:"allvariants-horizontal-selected",orientation:"horizontal",defaultValue:"option1",children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"}),e.jsx(a,{value:"option3",label:"Radio label"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Disabled"}),e.jsxs(l,{name:"allvariants-disabled",disabled:!0,children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Disabled with selection"}),e.jsxs(l,{name:"allvariants-disabled-selected",defaultValue:"option1",disabled:!0,children:[e.jsx(a,{value:"option1",label:"Radio label"}),e.jsx(a,{value:"option2",label:"Radio label"})]})]})]})};var t,r,p;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => <RadioGroup defaultValue="option1" name="default-demo">
      <RadioGroupItem value="option1" label="Radio label" />
      <RadioGroupItem value="option2" label="Radio label" />
      <RadioGroupItem value="option3" label="Radio label" />
    </RadioGroup>
}`,...(p=(r=o.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var b,u,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Unselected",
  render: () => <RadioGroup name="unselected-demo">
      <RadioGroupItem value="option1" label="Radio label" />
      <RadioGroupItem value="option2" label="Radio label" />
      <RadioGroupItem value="option3" label="Radio label" />
    </RadioGroup>
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,R,v;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-2">Disabled unselected</p>
        <RadioGroup name="disabled-unselected" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
        </RadioGroup>
      </div>
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-2">Disabled selected</p>
        <RadioGroup name="disabled-selected" defaultValue="option1" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
        </RadioGroup>
      </div>
    </div>
}`,...(v=(R=d.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var x,y,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-3">
      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Unchecked states (hover the rows)</p>
      <RadioGroup name="states-unchecked">
        <RadioGroupItem value="option1" label="Radio label" />
        <RadioGroupItem value="option2" label="Radio label" />
        <RadioGroupItem value="option3" label="Radio label" />
      </RadioGroup>

      <div className="border-b border-lyra-border-subtle my-2" />

      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Checked states (hover the rows)</p>
      <RadioGroup name="states-checked" defaultValue="option1">
        <RadioGroupItem value="option1" label="Radio label" />
        <RadioGroupItem value="option2" label="Radio label" />
        <RadioGroupItem value="option3" label="Radio label" />
      </RadioGroup>

      <div className="border-b border-lyra-border-subtle my-2" />

      <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Disabled</p>
      <RadioGroup name="states-disabled-unchecked" disabled>
        <RadioGroupItem value="option1" label="Radio label" />
      </RadioGroup>
      <RadioGroup name="states-disabled-checked" defaultValue="option1" disabled>
        <RadioGroupItem value="option1" label="Radio label" />
      </RadioGroup>
    </div>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,G,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-8">
      {/* Vertical layout (default) */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Vertical — unselected</p>
        <RadioGroup name="allvariants-vertical-unselected">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Vertical — selected</p>
        <RadioGroup name="allvariants-vertical-selected" defaultValue="option2">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Horizontal — unselected</p>
        <RadioGroup name="allvariants-horizontal-unselected" orientation="horizontal">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Horizontal — selected</p>
        <RadioGroup name="allvariants-horizontal-selected" orientation="horizontal" defaultValue="option1">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Disabled</p>
        <RadioGroup name="allvariants-disabled" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
        </RadioGroup>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Disabled with selection</p>
        <RadioGroup name="allvariants-disabled-selected" defaultValue="option1" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
        </RadioGroup>
      </div>
    </div>
}`,...(f=(G=n.parameters)==null?void 0:G.docs)==null?void 0:f.source}}};const P=["Default","Unselected","Disabled","AllStates","AllVariants"];export{i as AllStates,n as AllVariants,o as Default,d as Disabled,s as Unselected,P as __namedExportsOrder,O as default};
