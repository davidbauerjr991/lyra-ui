import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./tooltip-3keU6E-A.js";import{B as n}from"./button-Dd7BgKlB.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";const k={title:"Atoms/Tooltip",component:t,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},a={render:()=>e.jsx("div",{className:"pt-16",children:e.jsx(t,{content:"Tooltip text in here",placement:"top",children:e.jsx(n,{variant:"outline",size:"sm",children:"Hover me (top)"})})})},s={name:"All Placements",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-16 py-20",children:[e.jsx(t,{content:"Tooltip text in here",placement:"top",children:e.jsx(n,{variant:"outline",size:"sm",children:"Top"})}),e.jsx(t,{content:"Tooltip text in here",placement:"bottom",children:e.jsx(n,{variant:"outline",size:"sm",children:"Bottom"})}),e.jsxs("div",{className:"flex items-center gap-32",children:[e.jsx(t,{content:"Tooltip text in here",placement:"left",children:e.jsx(n,{variant:"outline",size:"sm",children:"Left"})}),e.jsx(t,{content:"Tooltip text in here",placement:"right",children:e.jsx(n,{variant:"outline",size:"sm",children:"Right"})})]})]})},i={name:"Long Content",render:()=>e.jsx("div",{className:"pt-20",children:e.jsx(t,{content:"This is a longer tooltip message that wraps across multiple lines to show how the component handles it.",placement:"top",children:e.jsx(n,{variant:"outline",size:"sm",children:"Hover for long tooltip"})})})},l={name:"Static Preview",parameters:{layout:"padded"},render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-20 p-16",children:["top","bottom","left","right"].map(o=>e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(t,{content:"Tooltip text in here",placement:o,delayMs:0,children:e.jsx(n,{variant:"outline",className:"capitalize",children:o})})},o))})},r={name:"All Variants",parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-col gap-12 p-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-6",children:"All Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-16",children:["top","bottom","left","right"].map(o=>e.jsx("div",{className:"flex items-center justify-center py-6",children:e.jsx(t,{content:"Tooltip text in here",placement:o,delayMs:0,children:e.jsx(n,{variant:"outline",className:"capitalize",children:o})})},o))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-6",children:"Content Length"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(t,{content:"Short tip",placement:"top",delayMs:0,children:e.jsx(n,{variant:"outline",children:"Short content"})}),e.jsx(t,{content:"This is a longer tooltip that wraps across multiple lines to demonstrate how the component handles extended text content.",placement:"top",delayMs:0,children:e.jsx(n,{variant:"outline",children:"Long content"})})]})]})]})};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="pt-16">
      <Tooltip content="Tooltip text in here" placement="top">
        <Button variant="outline" size="sm">Hover me (top)</Button>
      </Tooltip>
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,h,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All Placements",
  render: () => <div className="flex flex-col items-center gap-16 py-20">
      <Tooltip content="Tooltip text in here" placement="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip text in here" placement="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <div className="flex items-center gap-32">
        <Tooltip content="Tooltip text in here" placement="left">
          <Button variant="outline" size="sm">Left</Button>
        </Tooltip>
        <Tooltip content="Tooltip text in here" placement="right">
          <Button variant="outline" size="sm">Right</Button>
        </Tooltip>
      </div>
    </div>
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,v,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Long Content",
  render: () => <div className="pt-20">
      <Tooltip content="This is a longer tooltip message that wraps across multiple lines to show how the component handles it." placement="top">
        <Button variant="outline" size="sm">Hover for long tooltip</Button>
      </Tooltip>
    </div>
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var T,f,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Static Preview",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="grid grid-cols-2 gap-20 p-16">
      {(["top", "bottom", "left", "right"] as const).map(placement => <div key={placement} className="flex items-center justify-center">
          <Tooltip content="Tooltip text in here" placement={placement} delayMs={0}>
            <Button variant="outline" className="capitalize">{placement}</Button>
          </Tooltip>
        </div>)}
    </div>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,N,B;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All Variants",
  parameters: {
    layout: "padded"
  },
  render: () => <div className="flex flex-col gap-12 p-8">
      {/* All placements */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-6">All Placements</p>
        <div className="grid grid-cols-2 gap-16">
          {(["top", "bottom", "left", "right"] as const).map(placement => <div key={placement} className="flex items-center justify-center py-6">
              <Tooltip content="Tooltip text in here" placement={placement} delayMs={0}>
                <Button variant="outline" className="capitalize">{placement}</Button>
              </Tooltip>
            </div>)}
        </div>
      </div>

      {/* Short vs long content */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-6">Content Length</p>
        <div className="flex items-center gap-8">
          <Tooltip content="Short tip" placement="top" delayMs={0}>
            <Button variant="outline">Short content</Button>
          </Tooltip>
          <Tooltip content="This is a longer tooltip that wraps across multiple lines to demonstrate how the component handles extended text content." placement="top" delayMs={0}>
            <Button variant="outline">Long content</Button>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...(B=(N=r.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const R=["Default","Placements","LongContent","StaticPreview","AllVariants"];export{r as AllVariants,a as Default,i as LongContent,s as Placements,l as StaticPreview,R as __namedExportsOrder,k as default};
