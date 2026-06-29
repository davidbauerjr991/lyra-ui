import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-CXOcBcs0.js";import{C as r}from"./container-header-Bo-bv7NH.js";import{B as z}from"./button-Dd7BgKlB.js";import{S as T}from"./status-badge-D0LQdY0j.js";import{I as k}from"./info-icon-kjQaNeot.js";import{T as D}from"./tooltip-3keU6E-A.js";import{S as Q}from"./settings-Ddbozet5.js";import{M as E,a as L}from"./minimize-2-BOwQ4FVI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./index-1evVQkiP.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";const ae={title:"Atoms/ContainerHeader",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{title:{control:"text"},bordered:{control:"boolean"}}},t={args:{title:"Container Title",bordered:!1}},s={name:"With close button",render:()=>e.jsx(r,{title:"Dialog Title",bordered:!1,onClose:()=>{}})},o={name:"With icon",render:()=>e.jsx(r,{title:"Important notice",icon:e.jsx(k,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}})},a={name:"With actions",render:()=>{const[d,A]=R.useState(!1);return e.jsx(r,{title:"Query Builder",bordered:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5})}),e.jsx(D,{content:d?"Restore":"Fullscreen",placement:"bottom",asLabel:!0,children:e.jsx("button",{"aria-label":d?"Restore":"Fullscreen",onClick:()=>A(M=>!M),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:d?e.jsx(E,{className:"h-4 w-4",strokeWidth:1.5}):e.jsx(L,{className:"h-4 w-4",strokeWidth:1.5})})})]}),onClose:()=>{}})}},n={name:"With badge",render:()=>e.jsx(r,{title:"Notifications",titleBadge:e.jsx(T,{count:5,variant:"critical",size:"sm"}),bordered:!1,onClose:()=>{}})},i={name:"With subhead",render:()=>e.jsx(r,{title:"Query Builder",subhead:"Filter and search across all records",bordered:!1,onClose:()=>{}})},l={name:"All variants",render:()=>e.jsxs("div",{className:"flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base",children:[e.jsx(r,{title:"Title only",bordered:!1}),e.jsx(r,{title:"With close",bordered:!1,onClose:()=>{}}),e.jsx(r,{title:"With icon",icon:e.jsx(k,{className:"h-5 w-5"}),bordered:!1,onClose:()=>{}}),e.jsx(r,{title:"With actions",bordered:!1,onClose:()=>{},actions:e.jsx(z,{variant:"outline",size:"sm",children:"Action"})}),e.jsx(r,{title:"With badge",bordered:!1,onClose:()=>{},titleBadge:e.jsx(T,{count:3,variant:"default",size:"sm"})}),e.jsx(r,{title:"With subhead",subhead:"Secondary description text",bordered:!1,onClose:()=>{}})]})};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "Container Title",
    bordered: false
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With close button",
  render: () => <ContainerHeader title="Dialog Title" bordered={false} onClose={() => {}} />
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var p,g,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With icon",
  render: () => <ContainerHeader title="Important notice" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,W,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(W=a.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var v,j,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With badge",
  render: () => <ContainerHeader title="Notifications" titleBadge={<StatusBadge count={5} variant="critical" size="sm" />} bordered={false} onClose={() => {}} />
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,N,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "With subhead",
  render: () => <ContainerHeader title="Query Builder" subhead="Filter and search across all records" bordered={false} onClose={() => {}} />
}`,...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var w,I,H;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex flex-col divide-y divide-lyra-border-subtle border border-lyra-border-subtle rounded-lyra-lg overflow-hidden bg-lyra-bg-surface-base">
      <ContainerHeader title="Title only" bordered={false} />
      <ContainerHeader title="With close" bordered={false} onClose={() => {}} />
      <ContainerHeader title="With icon" icon={<InfoIcon className="h-5 w-5" />} bordered={false} onClose={() => {}} />
      <ContainerHeader title="With actions" bordered={false} onClose={() => {}} actions={<Button variant="outline" size="sm">Action</Button>} />
      <ContainerHeader title="With badge" bordered={false} onClose={() => {}} titleBadge={<StatusBadge count={3} variant="default" size="sm" />} />
      <ContainerHeader title="With subhead" subhead="Secondary description text" bordered={false} onClose={() => {}} />
    </div>
}`,...(H=(I=l.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};const ne=["Default","WithClose","WithIcon","WithActions","WithBadge","WithSubhead","AllVariants"];export{l as AllVariants,t as Default,a as WithActions,n as WithBadge,s as WithClose,o as WithIcon,i as WithSubhead,ne as __namedExportsOrder,ae as default};
