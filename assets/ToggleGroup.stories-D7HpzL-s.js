import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CXOcBcs0.js";import{T as a}from"./toggle-group-TdfGY6OI.js";import{c as u}from"./utils-BLSKlp9E.js";import"./_commonjsHelpers-CqkleIqs.js";const w={title:"Custom Primitives/Toggle Group",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},c=[{value:"a",label:"Toggle"},{value:"b",label:"Toggle"},{value:"c",label:"Toggle"}],s={render:()=>{const[l,r]=i.useState("a");return e.jsx(a,{items:c,value:l,onValueChange:r})}},t={name:"Multiple Selection",render:()=>{const[l,r]=i.useState(["a"]);return e.jsx(a,{type:"multiple",items:c,values:l,onValuesChange:r})}},n={name:"All States",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-48",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Off"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}],disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Hover"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:"px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-surface-shell border border-lyra-border-default transition-colors",children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Press"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:"px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-disabled border border-lyra-border-default transition-colors",children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"On"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}],value:"x",onValueChange:()=>{}})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Selected Hover"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:u("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors","bg-lyra-state-hover-active-subtle border border-lyra-border-active text-lyra-fg-active-strong"),children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Selected Press"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:u("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors","bg-lyra-state-pressed-active-subtle border border-lyra-border-active text-lyra-fg-active-strong"),children:"Toggle"})})]})]})},o={name:"With Disabled Item",render:()=>{const[l,r]=i.useState("a");return e.jsx(a,{items:[{value:"a",label:"Toggle"},{value:"b",label:"Toggle",disabled:!0},{value:"c",label:"Toggle"}],value:l,onValueChange:r})}},d={name:"Fully Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{items:c,disabled:!0}),e.jsx(a,{items:c,value:"b",onValueChange:()=>{},disabled:!0})]})};var b,m,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("a");
    return <ToggleGroup items={threeItems} value={value} onValueChange={setValue} />;
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,p,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Multiple Selection",
  render: () => {
    const [values, setValues] = useState<string[]>(["a"]);
    return <ToggleGroup type="multiple" items={threeItems} values={values} onValuesChange={setValues} />;
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,v,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "All States",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-col gap-6 w-48">
      {/* 1. Off */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Off</span>
        <ToggleGroup items={[{
        value: "x",
        label: "Toggle"
      }]} />
      </div>

      {/* 2. Disabled */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Disabled</span>
        <ToggleGroup items={[{
        value: "x",
        label: "Toggle"
      }]} disabled />
      </div>

      {/* 3. Hover — static preview */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Hover</span>
        <div className="inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5">
          <button type="button" className="px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-surface-shell border border-lyra-border-default transition-colors">
            Toggle
          </button>
        </div>
      </div>

      {/* 4. Press — static preview */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Press</span>
        <div className="inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5">
          <button type="button" className="px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-disabled border border-lyra-border-default transition-colors">
            Toggle
          </button>
        </div>
      </div>

      {/* 5. On / Selected */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">On</span>
        <ToggleGroup items={[{
        value: "x",
        label: "Toggle"
      }]} value="x" onValueChange={() => {}} />
      </div>

      {/* 6. Selected Hover — static preview */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Selected Hover</span>
        <div className="inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5">
          <button type="button" className={cn("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors", "bg-lyra-state-hover-active-subtle border border-lyra-border-active text-lyra-fg-active-strong")}>
            Toggle
          </button>
        </div>
      </div>

      {/* 7. Selected Press — static preview */}
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Selected Press</span>
        <div className="inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5">
          <button type="button" className={cn("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors", "bg-lyra-state-pressed-active-subtle border border-lyra-border-active text-lyra-fg-active-strong")}>
            Toggle
          </button>
        </div>
      </div>
    </div>
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,j,T;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "With Disabled Item",
  render: () => {
    const [value, setValue] = useState("a");
    return <ToggleGroup items={[{
      value: "a",
      label: "Toggle"
    }, {
      value: "b",
      label: "Toggle",
      disabled: true
    }, {
      value: "c",
      label: "Toggle"
    }]} value={value} onValueChange={setValue} />;
  }
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var S,V,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Fully Disabled",
  render: () => <div className="flex flex-col gap-3">
      <ToggleGroup items={threeItems} disabled />
      <ToggleGroup items={threeItems} value="b" onValueChange={() => {}} disabled />
    </div>
}`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const H=["Default","MultipleSelection","AllStates","WithDisabledItem","FullyDisabled"];export{n as AllStates,s as Default,d as FullyDisabled,t as MultipleSelection,o as WithDisabledItem,H as __namedExportsOrder,w as default};
