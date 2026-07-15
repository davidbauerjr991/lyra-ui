import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./sparkline-TKbslkfe.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chart-CfppZ6cd.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";const u={title:"Atoms/Sparkline",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{data:{table:{disable:!0}}}},l=[4,6,5,8,7,10,9,12,11,14,13,16],p=[16,14,15,12,13,10,11,8,9,6,7,4],m=[8,9,8,7,8,9,8,8,9,8,7,8],e={render:()=>a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(s,{data:l})})},r={name:"AllVariants",render:()=>a.jsxs("div",{className:"flex flex-wrap gap-10",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Up (success)"}),a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(s,{data:l,colorVar:"var(--lyra-color-status-success-strong)"})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Flat (warning)"}),a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(s,{data:m,colorVar:"var(--lyra-color-status-warning-strong)"})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Down (critical)"}),a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(s,{data:p,colorVar:"var(--lyra-color-status-critical-strong)"})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Default (active blue)"}),a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(s,{data:l})})]})]})};var c,t,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="h-[60px] w-[160px]">
      <Sparkline data={TREND_UP} />
    </div>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,o,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "AllVariants",
  render: () => <div className="flex flex-wrap gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Up (success)</p>
        <div className="h-[60px] w-[160px]">
          <Sparkline data={TREND_UP} colorVar="var(--lyra-color-status-success-strong)" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Flat (warning)</p>
        <div className="h-[60px] w-[160px]">
          <Sparkline data={TREND_FLAT} colorVar="var(--lyra-color-status-warning-strong)" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Down (critical)</p>
        <div className="h-[60px] w-[160px]">
          <Sparkline data={TREND_DOWN} colorVar="var(--lyra-color-status-critical-strong)" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Default (active blue)</p>
        <div className="h-[60px] w-[160px]">
          <Sparkline data={TREND_UP} />
        </div>
      </div>
    </div>
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const j=["Default","AllVariants"];export{r as AllVariants,e as Default,j as __namedExportsOrder,u as default};
