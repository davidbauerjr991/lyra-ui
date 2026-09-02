import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as J}from"./index-CXOcBcs0.js";import{C as t}from"./container-header--vgxnvXX.js";import{B as o}from"./button-C72EbL54.js";import{B as g}from"./badge-BsM2Tnvd.js";import{I as v}from"./info-icon-DZC0cSDr.js";import{T as Y}from"./tooltip-Dp368zAN.js";import{T as Z,a as $}from"./tabs-RIPQUPRN.js";import{S as K}from"./settings-Ddbozet5.js";import{M as ee,a as te}from"./minimize-2-BOwQ4FVI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./index-1evVQkiP.js";import"./index-De81K0_o.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./kebab-menu-button-X2gEabCK.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./trash-2-yAnBWR5t.js";const Qe={title:"UI/ContainerHeader",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{title:{control:"text"},bordered:{control:"boolean"},background:{control:"select",options:["none","subtle"]},showClose:{control:"boolean",name:"Close button"},showIcon:{control:"boolean",name:"With icon"},showActions:{control:"boolean",name:"With actions"},showBadge:{control:"boolean",name:"With badge"},showSubhead:{control:"boolean",name:"With subhead"},showButtons:{control:"boolean",name:"With buttons"}}},l={args:{title:"Container Title",bordered:!1,background:"none",showClose:!1,showIcon:!1,showActions:!1,showBadge:!1,showSubhead:!1,showButtons:!1},render:s=>{const{showClose:n,showIcon:r,showActions:a,showBadge:i,showSubhead:P,showButtons:w,...X}=s;return e.jsx(t,{...X,icon:r?e.jsx(v,{className:"h-5 w-5"}):void 0,onClose:n?()=>{}:void 0,titleBadge:i?e.jsx(g,{shape:"circle",count:5,variant:"critical",size:"sm"}):void 0,subhead:P?"Filter and search across all records":void 0,actions:a||w?e.jsxs(e.Fragment,{children:[w&&e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",size:"md",children:"Action"}),e.jsx(o,{variant:"outline",size:"md",children:"Action"})]}),a&&e.jsx(o,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx(K,{className:"h-4 w-4",strokeWidth:1.5})})]}):void 0})}},d={name:"With close button",render:()=>e.jsx(t,{title:"Dialog Title",bordered:!1,onClose:()=>{}})},c={name:"With icon",render:()=>e.jsx(t,{title:"Important notice",icon:e.jsx(v,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}})},u={name:"With actions",render:()=>{const[s,n]=J.useState(!1);return e.jsx(t,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx(K,{className:"h-4 w-4",strokeWidth:1.5})}),e.jsx(Y,{content:s?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":s?"Restore":"Fullscreen",onClick:()=>n(r=>!r),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:s?e.jsx(ee,{className:"h-4 w-4",strokeWidth:1.5}):e.jsx(te,{className:"h-4 w-4",strokeWidth:1.5})})})]}),onClose:()=>{}})}},h={name:"With badge",render:()=>e.jsx(t,{title:"Notifications",titleBadge:e.jsx(g,{shape:"circle",count:5,variant:"critical",size:"sm"}),bordered:!1,onClose:()=>{}})},m={name:"With subhead",render:()=>e.jsx(t,{title:"Query Builder",subhead:"Filter and search across all records",bordered:!1,onClose:()=>{}})},b={name:"With buttons",render:()=>e.jsx(t,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",size:"md",children:"Action"}),e.jsx(o,{variant:"outline",size:"md",children:"Action"})]}),onClose:()=>{}})},p={name:"With tabs",render:()=>{const[s,n]=J.useState(0),r=["Overview","Detail","History"];return e.jsx(t,{title:"Customer Information",subhead:"Noah Bennett · CST-10296",onClose:()=>{},tabs:e.jsx(Z,{className:"px-4",children:r.map((a,i)=>e.jsx($,{active:s===i,onClick:()=>n(i),children:a},a))})})}},f={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base",children:[e.jsx(t,{title:"Title only",bordered:!1}),e.jsx(t,{title:"With close",bordered:!1,onClose:()=>{}}),e.jsx(t,{title:"With icon",icon:e.jsx(v,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}}),e.jsx(t,{title:"With actions",bordered:!1,onClose:()=>{},actions:e.jsx(o,{variant:"outline",size:"md",children:"Action"})}),e.jsx(t,{title:"With buttons",bordered:!1,onClose:()=>{},actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outline",size:"md",children:"Action"}),e.jsx(o,{variant:"outline",size:"md",children:"Action"})]})}),e.jsx(t,{title:"With badge",bordered:!1,onClose:()=>{},titleBadge:e.jsx(g,{shape:"circle",count:3,variant:"default",size:"sm"})}),e.jsx(t,{title:"With subhead",subhead:"Secondary description text",bordered:!1,onClose:()=>{}})]})};var x,C,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var W,y,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "With close button",
  render: () => <ContainerHeader title="Dialog Title" bordered={false} onClose={() => {}} />
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,A,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "With icon",
  render: () => <ContainerHeader title="Important notice" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var T,I,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var F,k,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "With badge",
  render: () => <ContainerHeader title="Notifications" titleBadge={<Badge shape="circle" count={5} variant="critical" size="sm" />} bordered={false} onClose={() => {}} />
}`,...(H=(k=h.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var D,L,Q;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "With subhead",
  render: () => <ContainerHeader title="Query Builder" subhead="Filter and search across all records" bordered={false} onClose={() => {}} />
}`,...(Q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var M,R,O;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "With buttons",
  render: () => <ContainerHeader title="Query Builder" bordered={false} actions={<>
          <Button variant="outline" size="md">Action</Button>
          <Button variant="outline" size="md">Action</Button>
        </>} onClose={() => {}} />
}`,...(O=(R=b.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var E,V,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "With tabs",
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Overview", "Detail", "History"];
    return <ContainerHeader title="Customer Information" subhead="Noah Bennett · CST-10296" onClose={() => {}}
    // \`tabs\` renders below the title/subhead row, inside this same
    // header — see \`tabs\`'s own doc comment in container-header.tsx
    // for why (keeps a panel's tabs outside its scrolling body
    // entirely, rather than a \`sticky\` row living inside it). Bottom
    // padding and \`bordered\`'s border are both dropped automatically
    // whenever \`tabs\` is set, so the tab row sits flush with no gap
    // and no doubled-up border above its own \`border-b\`.
    tabs={<TabList className="px-4">
            {tabs.map((label, i) => <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                {label}
              </Tab>)}
          </TabList>} />;
  }
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,U,G;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(U=f.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const Me=["Default","WithClose","WithIcon","WithActions","WithBadge","WithSubhead","WithButtons","WithTabs","AllVariants"];export{f as AllVariants,l as Default,u as WithActions,h as WithBadge,b as WithButtons,d as WithClose,c as WithIcon,m as WithSubhead,p as WithTabs,Me as __namedExportsOrder,Qe as default};
