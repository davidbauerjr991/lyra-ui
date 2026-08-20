import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CXOcBcs0.js";import{T as a}from"./toggle-group-D7Tn-B2k.js";import{c as m}from"./utils-BLSKlp9E.js";import"./_commonjsHelpers-CqkleIqs.js";const k={title:"Custom Primitives/Toggle Group",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},c=[{value:"a",label:"Toggle"},{value:"b",label:"Toggle"},{value:"c",label:"Toggle"}],s={render:()=>{const[l,r]=u.useState("a");return e.jsx(a,{items:c,value:l,onValueChange:r})}},t={name:"Full Width",parameters:{layout:"padded"},render:()=>{const[l,r]=u.useState("main");return e.jsx("div",{className:"w-80 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-3",children:e.jsx(a,{fullWidth:!0,items:[{value:"main",label:"Alex Kowalski (CST-10000)"},{value:"panel",label:"Search"}],value:l,onValueChange:b=>b&&r(b)})})}},n={name:"Multiple Selection",render:()=>{const[l,r]=u.useState(["a"]);return e.jsx(a,{type:"multiple",items:c,values:l,onValuesChange:r})}},o={name:"All States",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-48",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Off"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}],disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Hover"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:"px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-surface-shell border border-lyra-border-default transition-colors",children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Press"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:"px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-disabled border border-lyra-border-default transition-colors",children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"On"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}],value:"x",onValueChange:()=>{}})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Selected Hover"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:m("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors","bg-lyra-state-hover-active-subtle border border-lyra-border-active text-lyra-fg-active-strong"),children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Selected Press"}),e.jsx("div",{className:"inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",children:e.jsx("button",{type:"button",className:m("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors","bg-lyra-state-pressed-active-subtle border border-lyra-border-active text-lyra-fg-active-strong"),children:"Toggle"})})]})]})},d={name:"With Disabled Item",render:()=>{const[l,r]=u.useState("a");return e.jsx(a,{items:[{value:"a",label:"Toggle"},{value:"b",label:"Toggle",disabled:!0},{value:"c",label:"Toggle"}],value:l,onValueChange:r})}},i={name:"Fully Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{items:c,disabled:!0}),e.jsx(a,{items:c,value:"b",onValueChange:()=>{},disabled:!0})]})};var g,y,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("a");
    return <ToggleGroup items={threeItems} value={value} onValueChange={setValue} />;
  }
}`,...(p=(y=s.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var x,f,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Full Width",
  parameters: {
    layout: "padded"
  },
  render: () => {
    const [value, setValue] = useState("main");
    return (
      // Narrow fixed-width wrapper (not full-viewport) so the truncation
      // this story exists to demonstrate is actually forced, matching the
      // real-world case that prompted \`fullWidth\` — a combined-panel-mode
      // region switch sharing a narrow (<768px) row with a long interaction
      // title, e.g. "Alex Kowalski (CST-10000)" — per explicit follow-up
      // request ("add a fullwidth story for toggle buttons... have the text
      // truncate instead of wrap for this story").
      <div className="w-80 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-3">
        <ToggleGroup fullWidth items={[{
          value: "main",
          label: "Alex Kowalski (CST-10000)"
        }, {
          value: "panel",
          label: "Search"
        }]} value={value} onValueChange={next => next && setValue(next)} />
      </div>
    );
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,N,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Multiple Selection",
  render: () => {
    const [values, setValues] = useState<string[]>(["a"]);
    return <ToggleGroup type="multiple" items={threeItems} values={values} onValuesChange={setValues} />;
  }
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var j,S,V;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var w,C,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var G,W,I;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Fully Disabled",
  render: () => <div className="flex flex-col gap-3">
      <ToggleGroup items={threeItems} disabled />
      <ToggleGroup items={threeItems} value="b" onValueChange={() => {}} disabled />
    </div>
}`,...(I=(W=i.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const M=["Default","FullWidth","MultipleSelection","AllStates","WithDisabledItem","FullyDisabled"];export{o as AllStates,s as Default,t as FullWidth,i as FullyDisabled,n as MultipleSelection,d as WithDisabledItem,M as __namedExportsOrder,k as default};
