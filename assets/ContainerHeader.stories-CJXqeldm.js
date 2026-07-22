import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as G}from"./index-CXOcBcs0.js";import{C as t}from"./container-header-Ca2x66t9.js";import{B as o}from"./button-GxCpv2fL.js";import{B as b}from"./badge-go1ZjKcF.js";import{I as f}from"./info-icon-DZC0cSDr.js";import{T as J}from"./tooltip-ughTrHl0.js";import{S as V}from"./settings-Ddbozet5.js";import{M as K,a as P}from"./minimize-2-BOwQ4FVI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./index-1evVQkiP.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";const fe={title:"UI/ContainerHeader",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{title:{control:"text"},bordered:{control:"boolean"},background:{control:"select",options:["none","subtle"]},showClose:{control:"boolean",name:"Close button"},showIcon:{control:"boolean",name:"With icon"},showActions:{control:"boolean",name:"With actions"},showBadge:{control:"boolean",name:"With badge"},showSubhead:{control:"boolean",name:"With subhead"},showButtons:{control:"boolean",name:"With buttons"}}},n={args:{title:"Container Title",bordered:!1,background:"none",showClose:!1,showIcon:!1,showActions:!1,showBadge:!1,showSubhead:!1,showButtons:!1},render:s=>{const{showClose:h,showIcon:m,showActions:g,showBadge:_,showSubhead:q,showButtons:p,...U}=s;return e.jsx(t,{...U,icon:m?e.jsx(f,{className:"h-5 w-5"}):void 0,onClose:h?()=>{}:void 0,titleBadge:_?e.jsx(b,{shape:"circle",count:5,variant:"critical",size:"sm"}):void 0,subhead:q?"Filter and search across all records":void 0,actions:g||p?e.jsxs(e.Fragment,{children:[p&&e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",size:"md",children:"Action"}),e.jsx(o,{variant:"outline",size:"md",children:"Action"})]}),g&&e.jsx(o,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5})})]}):void 0})}},r={name:"With close button",render:()=>e.jsx(t,{title:"Dialog Title",bordered:!1,onClose:()=>{}})},a={name:"With icon",render:()=>e.jsx(t,{title:"Important notice",icon:e.jsx(f,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}})},i={name:"With actions",render:()=>{const[s,h]=G.useState(!1);return e.jsx(t,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5})}),e.jsx(J,{content:s?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":s?"Restore":"Fullscreen",onClick:()=>h(m=>!m),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:s?e.jsx(K,{className:"h-4 w-4",strokeWidth:1.5}):e.jsx(P,{className:"h-4 w-4",strokeWidth:1.5})})})]}),onClose:()=>{}})}},l={name:"With badge",render:()=>e.jsx(t,{title:"Notifications",titleBadge:e.jsx(b,{shape:"circle",count:5,variant:"critical",size:"sm"}),bordered:!1,onClose:()=>{}})},d={name:"With subhead",render:()=>e.jsx(t,{title:"Query Builder",subhead:"Filter and search across all records",bordered:!1,onClose:()=>{}})},c={name:"With buttons",render:()=>e.jsx(t,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",size:"md",children:"Action"}),e.jsx(o,{variant:"outline",size:"md",children:"Action"})]}),onClose:()=>{}})},u={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base",children:[e.jsx(t,{title:"Title only",bordered:!1}),e.jsx(t,{title:"With close",bordered:!1,onClose:()=>{}}),e.jsx(t,{title:"With icon",icon:e.jsx(f,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}}),e.jsx(t,{title:"With actions",bordered:!1,onClose:()=>{},actions:e.jsx(o,{variant:"outline",size:"md",children:"Action"})}),e.jsx(t,{title:"With buttons",bordered:!1,onClose:()=>{},actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",size:"md",children:"Action"}),e.jsx(o,{variant:"outline",size:"md",children:"Action"})]})}),e.jsx(t,{title:"With badge",bordered:!1,onClose:()=>{},titleBadge:e.jsx(b,{shape:"circle",count:3,variant:"default",size:"sm"})}),e.jsx(t,{title:"With subhead",subhead:"Secondary description text",bordered:!1,onClose:()=>{}})]})};var x,w,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Container Title",
    bordered: false,
    background: "none",
    showClose: false,
    showIcon: false,
    showActions: false,
    showBadge: false,
    showSubhead: false,
    showButtons: false
  } as Story["args"],
  render: (args: any) => {
    const {
      showClose,
      showIcon,
      showActions,
      showBadge,
      showSubhead,
      showButtons,
      ...rest
    } = args;
    return <ContainerHeader {...rest} icon={showIcon ? <InfoIcon className="h-5 w-5" /> : undefined} onClose={showClose ? () => {} : undefined} titleBadge={showBadge ? <Badge shape="circle" count={5} variant="critical" size="sm" /> : undefined} subhead={showSubhead ? "Filter and search across all records" : undefined} actions={showActions || showButtons ? <>
              {/* Left-to-right order: buttons, then actions (gear), then the
                  component's own built-in close button — actions sits
                  immediately to the left of close, buttons sits to the left
                  of actions. */}
              {showButtons && <>
                  {/* No literal "secondary" button variant exists in \`Button\`
                      — \`outline\` is the design system's non-primary/bordered
                      button, i.e. the closest equivalent (see
                      Button.stories.tsx, which labels this same variant
                      "Outline" in its legend). */}
                  <Button variant="outline" size="md">Action</Button>
                  <Button variant="outline" size="md">Action</Button>
                </>}
              {showActions && <Button variant="ghost" size="icon" title="Settings">
                  <Settings className="h-4 w-4" strokeWidth={1.5} />
                </Button>}
            </> : undefined} />;
  }
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,v,W;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "With close button",
  render: () => <ContainerHeader title="Dialog Title" bordered={false} onClose={() => {}} />
}`,...(W=(v=r.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var j,y,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With icon",
  render: () => <ContainerHeader title="Important notice" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,A,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "With actions",
  render: () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    return <ContainerHeader title="Query Builder" bordered={false} actions={<>
            <Button variant="ghost" size="icon" title="Settings">
              <Settings className="h-4 w-4" strokeWidth={1.5} />
            </Button>
            <Tooltip content={isFullscreen ? "Restore" : "Fullscreen"} placement="bottom" asLabel>
              <button aria-label={isFullscreen ? "Restore" : "Fullscreen"} onClick={() => setIsFullscreen(v => !v)} className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus">
                {isFullscreen ? <Minimize2 className="h-4 w-4" strokeWidth={1.5} /> : <Maximize2 className="h-4 w-4" strokeWidth={1.5} />}
              </button>
            </Tooltip>
          </>} onClose={() => {}} />;
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var F,N,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With badge",
  render: () => <ContainerHeader title="Notifications" titleBadge={<Badge shape="circle" count={5} variant="critical" size="sm" />} bordered={false} onClose={() => {}} />
}`,...(H=(N=l.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var k,T,Q;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "With subhead",
  render: () => <ContainerHeader title="Query Builder" subhead="Filter and search across all records" bordered={false} onClose={() => {}} />
}`,...(Q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:Q.source}}};var M,R,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "With buttons",
  render: () => <ContainerHeader title="Query Builder" bordered={false} actions={<>
          <Button variant="outline" size="md">Action</Button>
          <Button variant="outline" size="md">Action</Button>
        </>} onClose={() => {}} />
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,L,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base">
      <ContainerHeader title="Title only" bordered={false} />
      <ContainerHeader title="With close" bordered={false} onClose={() => {}} />
      <ContainerHeader title="With icon" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
      <ContainerHeader title="With actions" bordered={false} onClose={() => {}} actions={<Button variant="outline" size="md">Action</Button>} />
      <ContainerHeader title="With buttons" bordered={false} onClose={() => {}} actions={<>
            <Button variant="outline" size="md">Action</Button>
            <Button variant="outline" size="md">Action</Button>
          </>} />
      <ContainerHeader title="With badge" bordered={false} onClose={() => {}} titleBadge={<Badge shape="circle" count={3} variant="default" size="sm" />} />
      <ContainerHeader title="With subhead" subhead="Secondary description text" bordered={false} onClose={() => {}} />
    </div>
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ge=["Default","WithClose","WithIcon","WithActions","WithBadge","WithSubhead","WithButtons","AllVariants"];export{u as AllVariants,n as Default,i as WithActions,l as WithBadge,c as WithButtons,r as WithClose,a as WithIcon,d as WithSubhead,ge as __namedExportsOrder,fe as default};
