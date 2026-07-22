import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CXOcBcs0.js";import{D as d}from"./draggable-Dnmku3zT.js";import{C as g}from"./container-header-DwQg5U0B.js";import{P as E}from"./page-header-DQP0a98o.js";import{B as Y}from"./button-GxCpv2fL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./createLucideIcon-DEcfmm_F.js";import"./panel-right-CgZ2ABSM.js";import"./x-N8aIqrq2.js";import"./badge-go1ZjKcF.js";import"./index-1evVQkiP.js";import"./breadcrumb-CV7VLbTL.js";import"./index-BDkVnVO1.js";import"./kebab-menu-button-BDzzvji6.js";import"./menu-radix-D2E6cDL6.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-right-DZKRY3zX.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./ellipsis-chVl1-lO.js";import"./panel-left-CWVFPQ0g.js";const Ne={title:"Custom Primitives/Draggable",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},f={name:"Float (default)",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{className:"relative w-full h-screen",children:e.jsx("div",{className:"absolute top-4 left-4",children:e.jsxs(d,{defaultWidth:300,defaultHeight:200,className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg",children:[e.jsx(g,{title:"Drag me by the header",bordered:!1}),e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Resize from the bottom-right corner"})})]})})})},u={name:"Docked (right side)",parameters:{layout:"fullscreen"},render:()=>e.jsxs("div",{className:"flex h-screen overflow-hidden bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Main content — drag the left edge of the panel to resize"})}),e.jsx("div",{className:"h-full pr-3 pb-3",children:e.jsxs(d,{variant:"docked",defaultWidth:320,minWidth:280,lockVariant:!0,className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",children:[e.jsx(g,{title:"Docked Panel",bordered:!1}),e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Drag left edge to resize"})})]})})]})},m={name:"With main container",parameters:{layout:"fullscreen"},render:()=>{const[n,h]=a.useState(!0),[i,V]=a.useState(!0),[l,b]=a.useState("open"),[c,B]=a.useState("docked"),[s,M]=a.useState(320),[F,I]=a.useState(!1),r=a.useRef(null),o=a.useRef(null),y=a.useRef();a.useEffect(()=>{if(clearTimeout(y.current),n){if(r.current&&o.current===null){const t=r.current.getBoundingClientRect();o.current=t.left+r.current.offsetWidth-s-16}V(!0),b("open")}else b("closing"),y.current=setTimeout(()=>b("closed"),150);return()=>clearTimeout(y.current)},[n]);const L=t=>{if(t==="float"&&r.current){const v=r.current.getBoundingClientRect();o.current=v.left+r.current.offsetWidth-s-16}else o.current=null;B(t)},O=()=>{var N;const t=(N=r.current)==null?void 0:N.getBoundingClientRect(),v=o.current!==null?o.current:r.current?((t==null?void 0:t.left)??0)+r.current.offsetWidth-s-16:0;return{position:"fixed",top:(t==null?void 0:t.top)??0,left:v,zIndex:40}},x=i?e.jsxs(d,{variant:c,defaultWidth:s,defaultHeight:500,minWidth:280,minHeight:200,onVariantChange:L,onWidthChange:M,onResizeStateChange:I,className:["rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",c==="float"?"shadow-lg":"h-full"].join(" "),children:[e.jsx(g,{title:"Panel",bordered:!1}),e.jsx("div",{className:"flex-1"})]}):null;return e.jsxs("div",{className:"flex h-screen overflow-hidden bg-lyra-bg-surface-shell p-4",children:[e.jsxs("div",{ref:r,className:"relative flex flex-1 min-w-0 overflow-hidden",children:[e.jsx("div",{className:"flex flex-col flex-1 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden",children:e.jsx(E,{title:"Page Title",actions:e.jsx(Y,{variant:"outline",onClick:()=>h(t=>!t),children:"Toggle right panel"})})}),c==="float"&&i&&e.jsx("div",{style:{...O(),pointerEvents:l==="closed"?"none":"auto",visibility:l==="closed"?"hidden":"visible",opacity:l==="open"?1:0,transform:l==="open"?"translateY(0)":"translateY(-8px)",transition:l==="open"?"opacity 150ms ease, transform 150ms ease":"opacity 100ms ease, transform 100ms ease"},children:x})]}),c==="docked"&&e.jsx("div",{style:{width:l==="open"?s+16:0,overflow:"hidden",flexShrink:0,transition:F?"none":"width 250ms cubic-bezier(0.4, 0, 0.2, 1)"},children:e.jsx("div",{className:"h-full pl-4",style:{width:s+16,display:l==="open"?"block":"none"},children:x})})]})}},p={name:"Interactive (toggle float ↔ docked)",parameters:{layout:"fullscreen"},render:()=>{const[n,h]=a.useState("float"),i=e.jsxs(d,{variant:n,defaultWidth:320,defaultHeight:420,minWidth:280,minHeight:200,onVariantChange:h,className:["rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",n==="float"?"shadow-lg":""].join(" "),children:[e.jsx(g,{title:"Panel",bordered:!1}),e.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary text-center",children:["Currently ",e.jsx("strong",{children:n}),".",e.jsx("br",{}),"Use the icon in the top-right to toggle."]})})]});return e.jsxs("div",{className:"flex h-screen overflow-hidden bg-lyra-bg-surface-shell",children:[e.jsx("div",{className:"flex-1 flex items-center justify-center",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Main content area"})}),n==="docked"?e.jsx("div",{className:"h-full pr-3 pb-3",children:i}):e.jsx("div",{className:"absolute top-16 left-16",children:i})]})}};var j,S,w;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Float (default)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="relative w-full h-screen">
    <div className="absolute top-4 left-4">
    <Draggable defaultWidth={300} defaultHeight={200} className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg">
      <ContainerHeader title="Drag me by the header" bordered={false} />
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-sm text-lyra-fg-secondary">Resize from the bottom-right corner</p>
      </div>
    </Draggable>
    </div>
    </div>
}`,...(w=(S=f.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var R,C,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Docked (right side)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-md text-lyra-fg-secondary">Main content — drag the left edge of the panel to resize</p>
      </div>
      <div className="h-full pr-3 pb-3">
        <Draggable variant="docked" defaultWidth={320} minWidth={280} lockVariant className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay">
          <ContainerHeader title="Docked Panel" bordered={false} />
          <div className="flex-1 flex items-center justify-center">
            <p className="lyra-body-sm text-lyra-fg-secondary">Drag left edge to resize</p>
          </div>
        </Draggable>
      </div>
    </div>
}`,...(W=(C=u.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var k,D,P;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "With main container",
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    type PanelState = "closed" | "open" | "closing";
    const [panelOpen, setPanelOpen] = useState(true);
    const [mounted, setMounted] = useState(true);
    const [panelState, setPanelState] = useState<PanelState>("open");
    const [variant, setVariant] = useState<DraggableVariant>("docked");
    const [width, setWidth] = useState(320);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const floatLeft = useRef<number | null>(null);
    const animTimer = useRef<ReturnType<typeof setTimeout>>();

    // Open/close state machine (matches AgentNextGen pattern)
    useEffect(() => {
      clearTimeout(animTimer.current);
      if (panelOpen) {
        if (containerRef.current && floatLeft.current === null) {
          const r = containerRef.current.getBoundingClientRect();
          floatLeft.current = r.left + containerRef.current.offsetWidth - width - 16;
        }
        setMounted(true);
        setPanelState("open");
      } else {
        setPanelState("closing");
        animTimer.current = setTimeout(() => setPanelState("closed"), 150);
      }
      return () => clearTimeout(animTimer.current);
    }, [panelOpen]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleVariantChange = (v: DraggableVariant) => {
      if (v === "float" && containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        floatLeft.current = r.left + containerRef.current.offsetWidth - width - 16;
      } else {
        floatLeft.current = null;
      }
      setVariant(v);
    };

    // Float position — absolute viewport coordinates so panel doesn't shift when layout changes
    const getFloatStyle = (): React.CSSProperties => {
      const rect = containerRef.current?.getBoundingClientRect();
      const left = floatLeft.current !== null ? floatLeft.current : containerRef.current ? (rect?.left ?? 0) + containerRef.current.offsetWidth - width - 16 : 0;
      return {
        position: "fixed",
        top: rect?.top ?? 0,
        left,
        zIndex: 40
      };
    };
    const panel = mounted ? <Draggable variant={variant} defaultWidth={width} defaultHeight={500} minWidth={280} minHeight={200} onVariantChange={handleVariantChange} onWidthChange={setWidth} onResizeStateChange={setIsResizing} className={["rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay", variant === "float" ? "shadow-lg" : "h-full"].join(" ")}>
        <ContainerHeader title="Panel" bordered={false} />
        <div className="flex-1" />
      </Draggable> : null;
    return <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell p-4">

        {/* Content area — ref used to position float panel */}
        <div ref={containerRef} className="relative flex flex-1 min-w-0 overflow-hidden">
          <div className="flex flex-col flex-1 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden">
            <PageHeader title="Page Title" actions={<Button variant="outline" onClick={() => setPanelOpen(v => !v)}>
                  Toggle right panel
                </Button>} />
          </div>

          {/* Float: position:fixed viewport coords, visibility+opacity transition */}
          {variant === "float" && mounted && <div style={{
          ...getFloatStyle(),
          pointerEvents: panelState === "closed" ? "none" : "auto",
          visibility: panelState === "closed" ? "hidden" : "visible",
          opacity: panelState === "open" ? 1 : 0,
          transform: panelState === "open" ? "translateY(0)" : "translateY(-8px)",
          transition: panelState === "open" ? "opacity 150ms ease, transform 150ms ease" : "opacity 100ms ease, transform 100ms ease"
        }}>
              {panel}
            </div>}
        </div>

        {/* Docked: sibling of containerRef — gap (pl-4) is baked into the animating width
             so it collapses to zero with the panel. No extra padding on the content area. */}
        {variant === "docked" && <div style={{
        width: panelState === "open" ? width + 16 : 0,
        overflow: "hidden",
        flexShrink: 0,
        transition: isResizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)"
      }}>
            <div className="h-full pl-4" style={{
          width: width + 16,
          display: panelState === "open" ? "block" : "none"
        }}>
              {panel}
            </div>
          </div>}

      </div>;
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var z,H,T;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Interactive (toggle float ↔ docked)",
  parameters: {
    layout: "fullscreen"
  },
  render: () => {
    const [variant, setVariant] = useState<DraggableVariant>("float");
    const panel = <Draggable variant={variant} defaultWidth={320} defaultHeight={420} minWidth={280} minHeight={200} onVariantChange={setVariant} className={["rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay", variant === "float" ? "shadow-lg" : ""].join(" ")}>
        <ContainerHeader title="Panel" bordered={false} />
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="lyra-body-sm text-lyra-fg-secondary text-center">
            Currently <strong>{variant}</strong>.<br />
            Use the icon in the top-right to toggle.
          </p>
        </div>
      </Draggable>;
    return <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
        <div className="flex-1 flex items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
        </div>
        {variant === "docked" ? <div className="h-full pr-3 pb-3">{panel}</div> : <div className="absolute top-16 left-16">{panel}</div>}
      </div>;
  }
}`,...(T=(H=p.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const je=["Float","Docked","WithMainContainer","Interactive"];export{u as Docked,f as Float,p as Interactive,m as WithMainContainer,je as __namedExportsOrder,Ne as default};
