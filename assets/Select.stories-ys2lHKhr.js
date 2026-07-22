import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-CXOcBcs0.js";import{S as a}from"./select-DfePZdut.js";import{C as le}from"./chevron-down-BRCsRsv-.js";import{S as re}from"./sliders-horizontal-_yHPUfpC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-Jj0G9Pna.js";import"./label-nFez4jEO.js";import"./utils-BLSKlp9E.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./popover-CyPBLJW1.js";import"./index-DhUdNGNr.js";import"./index-MFm5DvZf.js";import"./container-header-Ca2x66t9.js";import"./x-N8aIqrq2.js";import"./checkbox-cemurMBH.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";const Te={title:"Headless Primitives/Select",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r=[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"},{value:"opt4",label:"Option 4"},{value:"opt5",label:"Option 5"},{value:"opt6",label:"Option 6"}],S=Array.from({length:20},(t,l)=>({value:`item-${l+1}`,label:`Item label ${l+1}`})),s={name:"Default",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:r})})},o={name:"With Placeholder",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",placeholder:"Choose an option...",options:r})})},i={name:"Disabled",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:r,disabled:!0})})},p={name:"Error",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:r,error:"Required"})})},c={name:"Searchable",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:S,searchable:!0})})},d={name:"Multi-Select",render:()=>{const[t,l]=n.useState(["item-1","item-2","item-3"]);return e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:S,multiple:!0,searchable:!0,showSelectAll:!0,values:t,onValuesChange:l})})}},m={name:"Max Selection",render:()=>{const[t,l]=n.useState([]),v=[{value:"yellow",label:"Yellow"},{value:"blue",label:"Blue"},{value:"white",label:"White"},{value:"selected-white",label:"Selected White"},{value:"red",label:"Red"},{value:"magenta",label:"Magenta"},{value:"cyan",label:"Cyan"},{value:"dark-red",label:"Dark Red"},{value:"green",label:"Green"},{value:"orange",label:"Orange"}];return e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Color",options:v,multiple:!0,searchable:!0,maxSelection:4,values:t,onValuesChange:l})})}},u={name:"Multi-Select (Empty)",render:()=>e.jsx("div",{className:"max-w-[320px]",children:e.jsx(a,{label:"Input Label",options:S,multiple:!0,searchable:!0,showSelectAll:!0})})},b={name:"Controlled",render:()=>{const[t,l]=n.useState("opt2");return e.jsxs("div",{className:"max-w-[320px] flex flex-col gap-4",children:[e.jsx(a,{label:"Input Label",options:r,value:t,onValueChange:l}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Selected: ",e.jsx("span",{className:"text-lyra-fg-default",children:t})]})]})}},g={name:"Custom Trigger (Icon, Single-Select)",render:()=>{const[t,l]=n.useState("opt2");return e.jsxs("div",{className:"flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default mr-auto",children:"Card header"}),e.jsx(a,{options:r,value:t,onValueChange:l,trigger:e.jsx(re,{className:"h-4 w-4","aria-hidden":"true"}),dropdownAlign:"right"})]})}},h={name:"Custom Trigger (Button, Multi-Select)",render:()=>{const[t,l]=n.useState(["opt1","opt3"]),[v,te]=n.useState(!1);return e.jsx("div",{className:"flex justify-end w-72",children:e.jsx(a,{multiple:!0,options:r,values:t,onValuesChange:l,onOpenChange:te,dropdownAlign:"right",trigger:e.jsxs("button",{type:"button",className:"inline-flex items-center gap-1.5 h-8 px-3 rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field hover:border-lyra-state-border-hover-neutral transition-colors",children:[e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default",children:t.length>0?`${t.length} selected`:"Filter"}),e.jsx(le,{className:`h-3.5 w-3.5 flex-shrink-0 transition-transform ${v?"rotate-180":""}`,strokeWidth:1.5,"aria-hidden":"true"})]})})})}},x={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[320px]",children:[e.jsx(a,{label:"Input Label",placeholder:"Select...",options:r}),e.jsx(a,{label:"Input Label",options:r,disabled:!0}),e.jsx(a,{label:"Input Label",options:r,error:"Required"})]})};var f,w,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Default",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} />
    </div>
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,C,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With Placeholder",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" placeholder="Choose an option..." options={sampleOptions} />
    </div>
}`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var O,I,V;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} disabled />
    </div>
}`,...(V=(I=i.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var L,M,A;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Error",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var D,k,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Searchable",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={manyOptions} searchable />
    </div>
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var T,W,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Multi-Select",
  render: () => {
    const [vals, setVals] = useState<string[]>(["item-1", "item-2", "item-3"]);
    return <div className="max-w-[320px]">
        <Select label="Input Label" options={manyOptions} multiple searchable showSelectAll values={vals} onValuesChange={setVals} />
      </div>;
  }
}`,...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var B,$,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Max Selection",
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const colorOptions: SelectOption[] = [{
      value: "yellow",
      label: "Yellow"
    }, {
      value: "blue",
      label: "Blue"
    }, {
      value: "white",
      label: "White"
    }, {
      value: "selected-white",
      label: "Selected White"
    }, {
      value: "red",
      label: "Red"
    }, {
      value: "magenta",
      label: "Magenta"
    }, {
      value: "cyan",
      label: "Cyan"
    }, {
      value: "dark-red",
      label: "Dark Red"
    }, {
      value: "green",
      label: "Green"
    }, {
      value: "orange",
      label: "Orange"
    }];
    return <div className="max-w-[320px]">
        <Select label="Color" options={colorOptions} multiple searchable maxSelection={4} values={values} onValuesChange={setValues} />
      </div>;
  }
}`,...(P=($=m.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var q,H,_;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Multi-Select (Empty)",
  render: () => <div className="max-w-[320px]">
      <Select label="Input Label" options={manyOptions} multiple searchable showSelectAll />
    </div>
}`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var z,F,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Controlled",
  render: () => {
    const [val, setVal] = useState("opt2");
    return <div className="max-w-[320px] flex flex-col gap-4">
        <Select label="Input Label" options={sampleOptions} value={val} onValueChange={setVal} />
        <p className="lyra-body-sm text-lyra-fg-secondary">
          Selected: <span className="text-lyra-fg-default">{val}</span>
        </p>
      </div>;
  }
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var Y,J,K;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Custom Trigger (Icon, Single-Select)",
  render: () => {
    const [val, setVal] = useState("opt2");
    return <div className="flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72">
        <span className="lyra-body-md text-lyra-fg-default mr-auto">Card header</span>
        {/* Bare icon (not a <button>) — same pattern as \`table.tsx\`'s
            \`ColumnToggle\`, which passes \`trigger={<ColumnsIcon .../>}\`.
            Wrapped in the default icon-button shell for non-button
            triggers. \`dropdownAlign="right"\` pins the dropdown's
            preferred side to the trigger's right edge (still
            collision-aware — Radix flips if it would overflow), matching
            how a header-aligned trigger like this needs its dropdown to
            open left instead of overflowing off-screen. */}
        <Select options={sampleOptions} value={val} onValueChange={setVal} trigger={<SlidersHorizontal className="h-4 w-4" aria-hidden="true" />} dropdownAlign="right" />
      </div>;
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Custom Trigger (Button, Multi-Select)",
  render: () => {
    const [vals, setVals] = useState<string[]>(["opt1", "opt3"]);
    const [open, setOpen] = useState(false);
    return <div className="flex justify-end w-72">
        {/* A full <button> trigger — same pattern as \`filter-chip.tsx\`'s
            \`chipTrigger\`/\`operatorTrigger\`: a plain button with its own
            visual content and no onClick of its own (Select supplies the
            interactivity). */}
        <Select multiple options={sampleOptions} values={vals} onValuesChange={setVals} onOpenChange={setOpen} dropdownAlign="right" trigger={<button type="button" className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field hover:border-lyra-state-border-hover-neutral transition-colors">
              <span className="lyra-body-md-emphasis text-lyra-fg-default">
                {vals.length > 0 ? \`\${vals.length} selected\` : "Filter"}
              </span>
              <ChevronDown className={\`h-3.5 w-3.5 flex-shrink-0 transition-transform \${open ? "rotate-180" : ""}\`} strokeWidth={1.5} aria-hidden="true" />
            </button>} />
      </div>;
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ae;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-6 max-w-[320px]">
      <Select label="Input Label" placeholder="Select..." options={sampleOptions} />
      <Select label="Input Label" options={sampleOptions} disabled />
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const We=["Default","WithPlaceholder","Disabled","ErrorState","Searchable","MultiSelect","MaxSelectionSelect","MultiSelectEmpty","Controlled","CustomIconTrigger","CustomButtonTrigger","AllStates"];export{x as AllStates,b as Controlled,h as CustomButtonTrigger,g as CustomIconTrigger,s as Default,i as Disabled,p as ErrorState,m as MaxSelectionSelect,d as MultiSelect,u as MultiSelectEmpty,c as Searchable,o as WithPlaceholder,We as __namedExportsOrder,Te as default};
