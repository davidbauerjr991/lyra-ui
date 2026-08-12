import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CXOcBcs0.js";import{S as t}from"./select-Crmq7WdN.js";import{L as Se}from"./label-DjGdKyh0.js";import{B}from"./button-DTrF7KLq.js";import{C as ve}from"./chevron-down-BRCsRsv-.js";import{S as we}from"./sliders-horizontal-_yHPUfpC.js";import{P as ye}from"./pencil-DdhzNlrF.js";import{S as Ce}from"./settings-Ddbozet5.js";import{C as Oe}from"./copy-BRsdvqrt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-Jj0G9Pna.js";import"./popover-DzlchCUr.js";import"./index-C2HVhtBy.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./utils-BLSKlp9E.js";import"./index-C1YDQLuO.js";import"./container-header-BbK1XDO0.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";import"./circle-help-Bj2MpUE2.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-BsM2Tnvd.js";const ct={title:"Headless Primitives/Select",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},size:{control:"select",options:["sm","md"],name:"Size"},showWithButtons:{control:"boolean",name:"With buttons"},buttonsPosition:{control:"select",options:["left","right","both"],name:"Buttons position"},buttonVariant:{control:"select",options:["default","destructive","warning","success","outline","ghost"],name:"Button type"},buttonIconOnly:{control:"boolean",name:"Icon buttons"},buttonSize:{control:"select",options:["sm","default","lg","xl"],name:"Button size"},buttonCount:{control:"select",options:[1,2,3],name:"Button count"},showHelp:{control:"boolean",name:"Help"},showError:{control:"boolean",name:"Error"},maxWidth:{control:"boolean",name:"Max width"}}},a=[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"},{value:"opt4",label:"Option 4"},{value:"opt5",label:"Option 5"},{value:"opt6",label:"Option 6"}],y=Array.from({length:20},(n,o)=>({value:`item-${o+1}`,label:`Item label ${o+1}`})),i={name:"Default",args:{label:"Input Label",required:!1,size:"md",showWithButtons:!1,buttonsPosition:"left",buttonVariant:"ghost",buttonIconOnly:!0,buttonSize:"sm",buttonCount:2,showHelp:!1,showError:!1,maxWidth:!1},render:n=>{const{required:o,size:r,showWithButtons:v,buttonsPosition:s,buttonVariant:C,buttonIconOnly:he,buttonSize:O,buttonCount:I,showHelp:ge,showError:j,maxWidth:N,label:V}=n,L=ge?"Helpful context about this field.":void 0,xe={sm:"icon-sm",default:"icon-md",lg:"icon-lg",xl:"icon-xl"},fe=[ye,Ce,Oe],E=()=>he?e.jsx(e.Fragment,{children:fe.slice(0,I).map((W,w)=>e.jsx(B,{variant:C,size:xe[O],title:"Placeholder action",children:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},w))}):e.jsx(e.Fragment,{children:Array.from({length:I}).map((W,w)=>e.jsx(B,{variant:C,size:O,children:"Action"},w))});return v?e.jsx("div",{className:N?"min-w-[240px] max-w-[320px]":void 0,children:e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx(Se,{label:V,required:o,labelHelpText:L}),e.jsxs("div",{className:"flex items-start gap-0.5",children:[(s==="left"||s==="both")&&E(),e.jsx(t,{options:a,error:j?"Required":void 0,size:r,className:"flex-1"}),(s==="right"||s==="both")&&E()]})]})}):e.jsx("div",{className:N?"min-w-[240px] max-w-[320px]":void 0,children:e.jsx(t,{label:V,labelHelpText:L,required:o,size:r,options:a,error:j?"Required":void 0})})}},u={name:"With Placeholder",render:()=>e.jsx(t,{label:"Input Label",placeholder:"Choose an option...",options:a})},c={name:"Disabled",render:()=>e.jsx(t,{label:"Input Label",options:a,disabled:!0})},p={name:"Error",render:()=>e.jsx(t,{label:"Input Label",options:a,error:"Required"})},d={name:"Searchable",render:()=>e.jsx(t,{label:"Input Label",options:y,searchable:!0})},m={name:"Multi-Select",render:()=>{const[n,o]=l.useState(["item-1","item-2","item-3"]);return e.jsx(t,{label:"Input Label",options:y,multiple:!0,searchable:!0,showSelectAll:!0,values:n,onValuesChange:o})}},b={name:"Max Selection",render:()=>{const[n,o]=l.useState([]),r=[{value:"yellow",label:"Yellow"},{value:"blue",label:"Blue"},{value:"white",label:"White"},{value:"selected-white",label:"Selected White"},{value:"red",label:"Red"},{value:"magenta",label:"Magenta"},{value:"cyan",label:"Cyan"},{value:"dark-red",label:"Dark Red"},{value:"green",label:"Green"},{value:"orange",label:"Orange"}];return e.jsx(t,{label:"Color",options:r,multiple:!0,searchable:!0,maxSelection:4,values:n,onValuesChange:o})}},h={name:"Multi-Select (Empty)",render:()=>e.jsx(t,{label:"Input Label",options:y,multiple:!0,searchable:!0,showSelectAll:!0})},g={name:"Controlled",render:()=>{const[n,o]=l.useState("opt2");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{label:"Input Label",options:a,value:n,onValueChange:o}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Selected: ",e.jsx("span",{className:"text-lyra-fg-default",children:n})]})]})}},x={name:"Custom Trigger (Icon, Single-Select)",render:()=>{const[n,o]=l.useState("opt2");return e.jsxs("div",{className:"flex items-center justify-end rounded-lyra-md border border-lyra-border-subtle p-2 w-72",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default mr-auto",children:"Card header"}),e.jsx(t,{options:a,value:n,onValueChange:o,trigger:e.jsx(we,{className:"h-4 w-4","aria-hidden":"true"}),dropdownAlign:"right"})]})}},f={name:"Custom Trigger (Button, Multi-Select)",render:()=>{const[n,o]=l.useState(["opt1","opt3"]),[r,v]=l.useState(!1);return e.jsx("div",{className:"flex justify-end w-72",children:e.jsx(t,{multiple:!0,options:a,values:n,onValuesChange:o,onOpenChange:v,dropdownAlign:"right",trigger:e.jsxs("button",{type:"button",className:"inline-flex items-center gap-1.5 h-8 px-3 rounded-lyra-sm border border-lyra-border-strong bg-lyra-bg-field hover:border-lyra-state-border-hover-neutral transition-colors",children:[e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default",children:n.length>0?`${n.length} selected`:"Filter"}),e.jsx(ve,{className:`h-3.5 w-3.5 flex-shrink-0 transition-transform ${r?"rotate-180":""}`,strokeWidth:1.5,"aria-hidden":"true"})]})})})}},S={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(t,{label:"Input Label",placeholder:"Select...",options:a}),e.jsx(t,{label:"Input Label",options:a,disabled:!0}),e.jsx(t,{label:"Input Label",options:a,error:"Required"})]})};var P,z,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Input Label",
    required: false,
    size: "md",
    showWithButtons: false,
    buttonsPosition: "left",
    buttonVariant: "ghost",
    buttonIconOnly: true,
    buttonSize: "sm",
    buttonCount: 2,
    showHelp: false,
    showError: false,
    maxWidth: false
  } as Story["args"],
  render: (args: any) => {
    const {
      required,
      size,
      showWithButtons,
      buttonsPosition,
      buttonVariant,
      buttonIconOnly,
      buttonSize,
      buttonCount,
      showHelp,
      showError,
      maxWidth,
      label
    } = args;
    const labelHelpText = showHelp ? "Helpful context about this field." : undefined;

    // Same height-matched icon-size scale as Input.stories.tsx's own
    // Default playground (button.tsx: icon-sm/icon-md/icon-lg/icon-xl line
    // up with sm/default|md/lg/xl exactly).
    const ICON_SIZE_MAP: Record<string, string> = {
      sm: "icon-sm",
      default: "icon-md",
      lg: "icon-lg",
      xl: "icon-xl"
    };

    // One icon per possible \`buttonCount\` slot — sliced below rather than
    // repeating the same icon three times.
    const PLACEHOLDER_ICONS = [Pencil, Settings, Copy];
    const renderButtons = () => buttonIconOnly ? <>
          {PLACEHOLDER_ICONS.slice(0, buttonCount).map((Icon, i) => <Button key={i} variant={buttonVariant} size={ICON_SIZE_MAP[buttonSize]} title="Placeholder action">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </Button>)}
        </> : <>
          {Array.from({
        length: buttonCount
      }).map((_, i) => <Button key={i} variant={buttonVariant} size={buttonSize}>Action</Button>)}
        </>;
    if (showWithButtons) {
      // Same composition as Input.stories.tsx's own "With buttons" branch —
      // the caption renders separately (not through \`Select\`'s own \`label\`
      // prop) so it sits above the row while the buttons flank the trigger
      // itself, positioned by \`buttonsPosition\`. \`items-start\`, not
      // \`items-center\` — same reason as Input.stories.tsx: \`Select\` renders
      // its own error text below its trigger (select.tsx) when \`error\` is
      // set, which makes its wrapper taller than the buttons; aligning tops
      // keeps the buttons level with the trigger itself regardless of
      // whether that error text is showing.
      return <div className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}>
          <div className="flex flex-col gap-1.5">
            <Label label={label} required={required} labelHelpText={labelHelpText} />
            <div className="flex items-start gap-0.5">
              {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
              <Select options={sampleOptions} error={showError ? "Required" : undefined} size={size} className="flex-1" />
              {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
            </div>
          </div>
        </div>;
    }
    return <div className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}>
        <Select label={label} labelHelpText={labelHelpText} required={required} size={size} options={sampleOptions} error={showError ? "Required" : undefined} />
      </div>;
  }
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,M,k;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With Placeholder",
  render: () => <Select label="Input Label" placeholder="Choose an option..." options={sampleOptions} />
}`,...(k=(M=u.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var R,T,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => <Select label="Input Label" options={sampleOptions} disabled />
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,_,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Error",
  render: () => <Select label="Input Label" options={sampleOptions} error="Required" />
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var F,Z,G;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Searchable",
  render: () => <Select label="Input Label" options={manyOptions} searchable />
}`,...(G=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var Y,J,K;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Multi-Select",
  render: () => {
    const [vals, setVals] = useState<string[]>(["item-1", "item-2", "item-3"]);
    return <Select label="Input Label" options={manyOptions} multiple searchable showSelectAll values={vals} onValuesChange={setVals} />;
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
    return <Select label="Color" options={colorOptions} multiple searchable maxSelection={4} values={values} onValuesChange={setValues} />;
  }
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var ee,te,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Multi-Select (Empty)",
  render: () => <Select label="Input Label" options={manyOptions} multiple searchable showSelectAll />
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,re;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Controlled",
  render: () => {
    const [val, setVal] = useState("opt2");
    return <div className="flex flex-col gap-4">
        <Select label="Input Label" options={sampleOptions} value={val} onValueChange={setVal} />
        <p className="lyra-body-sm text-lyra-fg-secondary">
          Selected: <span className="text-lyra-fg-default">{val}</span>
        </p>
      </div>;
  }
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,se,ie;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,ce,pe;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,me,be;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-6">
      <Select label="Input Label" placeholder="Select..." options={sampleOptions} />
      <Select label="Input Label" options={sampleOptions} disabled />
      <Select label="Input Label" options={sampleOptions} error="Required" />
    </div>
}`,...(be=(me=S.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const pt=["Default","WithPlaceholder","Disabled","ErrorState","Searchable","MultiSelect","MaxSelectionSelect","MultiSelectEmpty","Controlled","CustomIconTrigger","CustomButtonTrigger","AllStates"];export{S as AllStates,g as Controlled,f as CustomButtonTrigger,x as CustomIconTrigger,i as Default,c as Disabled,p as ErrorState,b as MaxSelectionSelect,m as MultiSelect,h as MultiSelectEmpty,d as Searchable,u as WithPlaceholder,pt as __namedExportsOrder,ct as default};
