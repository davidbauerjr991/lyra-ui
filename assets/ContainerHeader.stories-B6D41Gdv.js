import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Z}from"./index-DhMLlvMY.js";import{C as t}from"./container-header-5uZSWjxx.js";import{B as s}from"./button-CRbHmIRe.js";import{B}from"./badge-Bcxq6Iyh.js";import{I as x}from"./info-icon-CVWl96lq.js";import{T as se}from"./tooltip-DKTByY8R.js";import{T as oe,a as re}from"./tabs-ClByxZoj.js";import{B as ne,a as ae,b as C,c as ie,d as le,f as de}from"./breadcrumb-7-0zfi1h.js";import{S as $}from"./settings-B3RqFsd1.js";import{M as ce,a as me}from"./minimize-2-8DCE4oLK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./spinner-xIhFAlhc.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./kebab-menu-button-BsRniZjC.js";import"./menu-radix-9vcg5XDz.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./trash-2-DTLo779S.js";import"./ellipsis-DX1Uroy1.js";const $e={title:"UI/ContainerHeader",component:t,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{title:{control:"text"},bordered:{control:"boolean"},background:{control:"select",options:["none","subtle"]},showClose:{control:"boolean",name:"Close button"},showIcon:{control:"boolean",name:"With icon"},showActions:{control:"boolean",name:"With actions"},showBadge:{control:"boolean",name:"With badge"},showSubhead:{control:"boolean",name:"With subhead"},showButtons:{control:"boolean",name:"With buttons"}}},l={args:{title:"Container Title",bordered:!1,background:"none",showClose:!1,showIcon:!1,showActions:!1,showBadge:!1,showSubhead:!1,showButtons:!1},render:o=>{const{showClose:r,showIcon:n,showActions:a,showBadge:i,showSubhead:ee,showButtons:v,...te}=o;return e.jsx(t,{...te,icon:n?e.jsx(x,{className:"h-5 w-5"}):void 0,onClose:r?()=>{}:void 0,titleBadge:i?e.jsx(B,{shape:"circle",count:5,variant:"critical",size:"sm"}):void 0,subhead:ee?"Filter and search across all records":void 0,actions:a||v?e.jsxs(e.Fragment,{children:[v&&e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",size:"md",children:"Action"}),e.jsx(s,{variant:"outline",size:"md",children:"Action"})]}),a&&e.jsx(s,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx($,{className:"h-4 w-4",strokeWidth:1.5})})]}):void 0})}},d={name:"With close button",render:()=>e.jsx(t,{title:"Dialog Title",bordered:!1,onClose:()=>{}})},c={name:"With icon",render:()=>e.jsx(t,{title:"Important notice",icon:e.jsx(x,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}})},m={name:"With actions",render:()=>{const[o,r]=Z.useState(!1);return e.jsx(t,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx($,{className:"h-4 w-4",strokeWidth:1.5})}),e.jsx(se,{content:o?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":o?"Restore":"Fullscreen",onClick:()=>r(n=>!n),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:o?e.jsx(ce,{className:"h-4 w-4",strokeWidth:1.5}):e.jsx(me,{className:"h-4 w-4",strokeWidth:1.5})})})]}),onClose:()=>{}})}},u={name:"With badge",render:()=>e.jsx(t,{title:"Notifications",titleBadge:e.jsx(B,{shape:"circle",count:5,variant:"critical",size:"sm"}),bordered:!1,onClose:()=>{}})},h={name:"With subhead",render:()=>e.jsx(t,{title:"Query Builder",subhead:"Filter and search across all records",bordered:!1,onClose:()=>{}})},b={name:"With buttons",render:()=>e.jsx(t,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",size:"md",children:"Action"}),e.jsx(s,{variant:"outline",size:"md",children:"Action"})]}),onClose:()=>{}})},p={name:"With tabs",render:()=>{const[o,r]=Z.useState(0),n=["Overview","Detail","History"];return e.jsx(t,{title:"Customer Information",subhead:"Noah Bennett · CST-10296",onClose:()=>{},tabs:e.jsx(oe,{className:"px-4",children:n.map((a,i)=>e.jsx(re,{active:o===i,onClick:()=>r(i),children:a},a))})})}},f={name:"With element title",parameters:{docs:{description:{story:'`title` can be an element, e.g. a `Breadcrumb`. It renders in a plain `div` instead of the `h2` (a heading can\'t contain a `nav`), so pass `titleText` too: the close button is labelled "Close Search" and an sr-only `h2` "Search" keeps the header\'s heading for screen readers.'}}},render:()=>e.jsx(t,{title:e.jsx(ne,{children:e.jsxs(ae,{children:[e.jsx(C,{children:e.jsx(ie,{onClick:()=>{},children:"Search"})}),e.jsx(le,{}),e.jsx(C,{"aria-current":"page",children:e.jsx(de,{children:"Customers"})})]})}),titleText:"Search",bordered:!1,onClose:()=>{}})},g={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base",children:[e.jsx(t,{title:"Title only",bordered:!1}),e.jsx(t,{title:"With close",bordered:!1,onClose:()=>{}}),e.jsx(t,{title:"With icon",icon:e.jsx(x,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}}),e.jsx(t,{title:"With actions",bordered:!1,onClose:()=>{},actions:e.jsx(s,{variant:"outline",size:"md",children:"Action"})}),e.jsx(t,{title:"With buttons",bordered:!1,onClose:()=>{},actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",size:"md",children:"Action"}),e.jsx(s,{variant:"outline",size:"md",children:"Action"})]})}),e.jsx(t,{title:"With badge",bordered:!1,onClose:()=>{},titleBadge:e.jsx(B,{shape:"circle",count:3,variant:"default",size:"sm"})}),e.jsx(t,{title:"With subhead",subhead:"Secondary description text",bordered:!1,onClose:()=>{}})]})};var w,W,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var y,S,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "With close button",
  render: () => <ContainerHeader title="Dialog Title" bordered={false} onClose={() => {}} />
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,A,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "With icon",
  render: () => <ContainerHeader title="Important notice" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
}`,...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var k,N,F;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var H,L,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With badge",
  render: () => <ContainerHeader title="Notifications" titleBadge={<Badge shape="circle" count={5} variant="critical" size="sm" />} bordered={false} onClose={() => {}} />
}`,...(D=(L=u.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var Q,E,M;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "With subhead",
  render: () => <ContainerHeader title="Query Builder" subhead="Filter and search across all records" bordered={false} onClose={() => {}} />
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,O,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "With buttons",
  render: () => <ContainerHeader title="Query Builder" bordered={false} actions={<>
          <Button variant="outline" size="md">Action</Button>
          <Button variant="outline" size="md">Action</Button>
        </>} onClose={() => {}} />
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,_,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var U,G,J;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With element title",
  parameters: {
    docs: {
      description: {
        story: "\`title\` can be an element, e.g. a \`Breadcrumb\`. It renders in a plain \`div\` instead of the \`h2\` " + "(a heading can't contain a \`nav\`), so pass \`titleText\` too: the close button is labelled " + "\\"Close Search\\" and an sr-only \`h2\` \\"Search\\" keeps the header's heading for screen readers."
      }
    }
  },
  render: () => <ContainerHeader title={<Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => {}}>Search</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Customers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>} titleText="Search" bordered={false} onClose={() => {}} />
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,X,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const et=["Default","WithClose","WithIcon","WithActions","WithBadge","WithSubhead","WithButtons","WithTabs","WithElementTitle","AllVariants"];export{g as AllVariants,l as Default,m as WithActions,u as WithBadge,b as WithButtons,d as WithClose,f as WithElementTitle,c as WithIcon,h as WithSubhead,p as WithTabs,et as __namedExportsOrder,$e as default};
