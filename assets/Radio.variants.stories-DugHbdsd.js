import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as o,a as l}from"./radio-sgkaDL_k.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-ufxNB_-2.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-DDAUwIz-.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";const T={title:"Headless Primitives/Radio/Variants",component:o,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t=["option1","option2","option3"];function i({title:a,children:b}){return e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:a}),b]})}const n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(i,{title:"Vertical — unselected (hover the rows)",children:e.jsx(o,{name:"allvariants-vertical-unselected",children:t.map(a=>e.jsx(l,{value:a,label:"Radio label"},a))})}),e.jsx(i,{title:"Vertical — selected (hover the rows)",children:e.jsx(o,{name:"allvariants-vertical-selected",defaultValue:"option2",children:t.map(a=>e.jsx(l,{value:a,label:"Radio label"},a))})}),e.jsx(i,{title:"Horizontal — unselected",children:e.jsx(o,{name:"allvariants-horizontal-unselected",orientation:"horizontal",children:t.map(a=>e.jsx(l,{value:a,label:"Radio label"},a))})}),e.jsx(i,{title:"Horizontal — selected",children:e.jsx(o,{name:"allvariants-horizontal-selected",orientation:"horizontal",defaultValue:"option1",children:t.map(a=>e.jsx(l,{value:a,label:"Radio label"},a))})}),e.jsx(i,{title:"Disabled",children:e.jsxs(o,{name:"allvariants-disabled",disabled:!0,children:[e.jsx(l,{value:"option1",label:"Radio label"}),e.jsx(l,{value:"option2",label:"Radio label"})]})}),e.jsx(i,{title:"Disabled with selection",children:e.jsxs(o,{name:"allvariants-disabled-selected",defaultValue:"option1",disabled:!0,children:[e.jsx(l,{value:"option1",label:"Radio label"}),e.jsx(l,{value:"option2",label:"Radio label"})]})})]})},r={name:"Keyboard",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Tab into a group, then press ←/→/↑/↓, Home or End."}),e.jsx(i,{title:"Horizontal",children:e.jsx(o,{name:"keyboard-horizontal",orientation:"horizontal",defaultValue:"option1",children:t.map(a=>e.jsx(l,{value:a,label:"Radio label"},a))})}),e.jsx(i,{title:"Vertical, with a disabled option (skipped)",children:e.jsxs(o,{name:"keyboard-vertical",defaultValue:"option1",children:[e.jsx(l,{value:"option1",label:"Radio label"}),e.jsx(l,{value:"option2",label:"Disabled",disabled:!0}),e.jsx(l,{value:"option3",label:"Radio label"})]})})]})};var d,s,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-8">
      <Section title="Vertical — unselected (hover the rows)">
        <RadioGroup name="allvariants-vertical-unselected">
          {OPTIONS.map(o => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Vertical — selected (hover the rows)">
        <RadioGroup name="allvariants-vertical-selected" defaultValue="option2">
          {OPTIONS.map(o => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Horizontal — unselected">
        <RadioGroup name="allvariants-horizontal-unselected" orientation="horizontal">
          {OPTIONS.map(o => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Horizontal — selected">
        <RadioGroup name="allvariants-horizontal-selected" orientation="horizontal" defaultValue="option1">
          {OPTIONS.map(o => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Disabled">
        <RadioGroup name="allvariants-disabled" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
        </RadioGroup>
      </Section>
      <Section title="Disabled with selection">
        <RadioGroup name="allvariants-disabled-selected" defaultValue="option1" disabled>
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Radio label" />
        </RadioGroup>
      </Section>
    </div>
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Keyboard",
  render: () => <div className="flex flex-col gap-8">
      <p className="lyra-body-sm text-lyra-fg-secondary">Tab into a group, then press ←/→/↑/↓, Home or End.</p>
      <Section title="Horizontal">
        <RadioGroup name="keyboard-horizontal" orientation="horizontal" defaultValue="option1">
          {OPTIONS.map(o => <RadioGroupItem key={o} value={o} label="Radio label" />)}
        </RadioGroup>
      </Section>
      <Section title="Vertical, with a disabled option (skipped)">
        <RadioGroup name="keyboard-vertical" defaultValue="option1">
          <RadioGroupItem value="option1" label="Radio label" />
          <RadioGroupItem value="option2" label="Disabled" disabled />
          <RadioGroupItem value="option3" label="Radio label" />
        </RadioGroup>
      </Section>
    </div>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const P=["AllVariants","Keyboard"];export{n as AllVariants,r as Keyboard,P as __namedExportsOrder,T as default};
