import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CXOcBcs0.js";import{c as f}from"./utils-BLSKlp9E.js";import{D as A,G as P}from"./draggable-Dnmku3zT.js";import{C as E}from"./container-header-DwQg5U0B.js";import{T as _}from"./tooltip-ughTrHl0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-DEcfmm_F.js";import"./panel-right-CgZ2ABSM.js";import"./x-N8aIqrq2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";const a=d.forwardRef(({title:n,headerContent:t,children:r,onClose:C,defaultWidth:D=320,maxWidth:T,defaultHeight:q=480,height:R,draggableVariant:c="float",onVariantChange:u,onWidthChange:V,onResizeStateChange:W,onInteract:I,className:H},S)=>{const[m,g]=d.useState(c);return d.useEffect(()=>{g(c)},[c]),e.jsx(A,{ref:S,variant:m,defaultWidth:D,defaultHeight:R??q,minWidth:280,maxWidth:T,minHeight:200,onVariantChange:s=>{g(s),u==null||u(s)},onWidthChange:V,onResizeStateChange:W,onInteract:I,className:f("rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",m==="float"?"shadow-lg":"h-full",H),renderHeaderControls:({gripProps:s,dockButtonProps:h,dockIcon:z,variant:M})=>e.jsxs(e.Fragment,{children:[e.jsx(E,{title:n,icon:M==="float"?e.jsx("div",{...s,children:e.jsx(P,{className:"h-4 w-4",strokeWidth:1.5})}):void 0,actions:e.jsx(_,{content:h["aria-label"],placement:"bottom",asLabel:!0,children:e.jsx("button",{...h,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:z})}),onClose:C,bordered:!t}),t&&e.jsx("div",{className:"shrink-0 px-4 pb-3 border-b border-lyra-border-subtle",children:t})]}),children:e.jsx("div",{className:f("overflow-y-auto flex-1 flex p-4",r?"flex-col items-stretch":"items-center justify-center"),children:r??e.jsx("p",{className:"lyra-body-md text-lyra-fg-disabled text-center",children:"Nothing here yet."})})})});a.displayName="DraggablePanel";a.__docgenInfo={description:"",methods:[],displayName:"DraggablePanel",props:{title:{required:!0,tsType:{name:"string"},description:"Header title — should match the trigger button's label"},headerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Extra content rendered directly below the title row, still above the
header's bottom divider — e.g. a filter or app-select field that should
stay fixed at the top of the panel (outside the scrollable body below)
rather than scroll away with \`children\`. Omit for the plain title-only
header every other panel uses.`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Panel body — defaults to a blank empty-state placeholder when omitted"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},defaultWidth:{required:!1,tsType:{name:"number"},description:"Restored width on each remount so resize is preserved across float↔docked switches",defaultValue:{value:"320",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"Max width for the Draggable wrapper (default: unlimited)"},defaultHeight:{required:!1,tsType:{name:"number"},description:"Default height in float mode (default: 480)",defaultValue:{value:"480",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Controlled height — overrides defaultHeight (e.g. for viewport-responsive sizing)"},draggableVariant:{required:!1,tsType:{name:"union",raw:'"float" | "docked"',elements:[{name:"literal",value:'"float"'},{name:"literal",value:'"docked"'}]},description:'Initial Draggable variant (default: "float")',defaultValue:{value:'"float"',computed:!1}},onVariantChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(variant: DraggableVariant) => void",signature:{arguments:[{type:{name:"union",raw:'"float" | "docked"',elements:[{name:"literal",value:'"float"'},{name:"literal",value:'"docked"'}]},name:"variant"}],return:{name:"void"}}},description:"Called when variant changes (float ↔ docked)"},onWidthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"Called when the draggable width changes (for animating a docked wrapper)"},onResizeStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isResizing: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isResizing"}],return:{name:"void"}}},description:"Called when resize drag starts/ends (suppress transition during drag)"},onInteract:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Called on any mousedown inside the panel — use for z-index "bring to front" logic'},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"UI/DraggablePanel",component:a,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},l={name:"Blank (default)",render:()=>e.jsx("div",{style:{width:320,height:480},children:e.jsx(a,{title:"Messages",onClose:()=>alert("Close")})})},i={name:"With content",render:()=>e.jsx("div",{style:{width:320,height:480},children:e.jsx(a,{title:"Schedule",onClose:()=>alert("Close"),children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-default text-center",children:"Any content can go here — this is just the shared draggable/dockable shell used by Notifications and Ask AI."})})})},o={name:"Interactive (toggle float ↔ docked)",parameters:{layout:"fullscreen"},render:()=>{const[n,t]=d.useState("float"),r=e.jsx(a,{title:"Messages",draggableVariant:n,onVariantChange:t,defaultWidth:320,defaultHeight:420});return e.jsxs("div",{className:"flex h-screen overflow-hidden bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Main content area — use the dock icon in the panel's header to toggle."})}),n==="docked"?e.jsx("div",{className:"h-full pr-3 pb-3",children:r}):e.jsx("div",{className:"absolute top-16 left-16",children:r})]})}};var p,b,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Blank (default)",
  render: () => <div style={{
    width: 320,
    height: 480
  }}>
      <DraggablePanel title="Messages" onClose={() => alert("Close")} />
    </div>
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,x,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With content",
  render: () => <div style={{
    width: 320,
    height: 480
  }}>
      <DraggablePanel title="Schedule" onClose={() => alert("Close")}>
        <p className="lyra-body-md text-lyra-fg-default text-center">
          Any content can go here — this is just the shared draggable/dockable
          shell used by Notifications and Ask AI.
        </p>
      </DraggablePanel>
    </div>
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var j,N,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Interactive (toggle float ↔ docked)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    const [variant, setVariant] = useState<DraggableVariant>("float");
    const panel = <DraggablePanel title="Messages" draggableVariant={variant} onVariantChange={setVariant} defaultWidth={320} defaultHeight={420} />;
    return <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
        <div className="flex-1 flex items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">
            Main content area — use the dock icon in the panel's header to toggle.
          </p>
        </div>
        {variant === "docked" ? <div className="h-full pr-3 pb-3">{panel}</div> : <div className="absolute top-16 left-16">{panel}</div>}
      </div>;
  }
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const te=["Blank","WithContent","Interactive"];export{l as Blank,o as Interactive,i as WithContent,te as __namedExportsOrder,ae as default};
