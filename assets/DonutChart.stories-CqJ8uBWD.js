import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{D as s}from"./donut-chart-BFuHzVfw.js";import{c as p}from"./utils-BLSKlp9E.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chart-CfppZ6cd.js";import"./tslib.es6-Ytcc2UEA.js";const N={title:"Atoms/DonutChart",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{data:{table:{disable:!0}}}},e=[{label:"Available",value:22,colorVar:"var(--lyra-color-status-success-strong)",dotClassName:"bg-lyra-status-success-strong"},{label:"Working",value:61,colorVar:"var(--lyra-color-status-warning-strong)",dotClassName:"bg-lyra-status-warning-strong"},{label:"Unavailable",value:17,colorVar:"var(--lyra-color-status-critical-strong)",dotClassName:"bg-lyra-status-critical-strong"}],r={render:()=>a.jsx("div",{className:"h-[160px] w-[160px]",children:a.jsx(s,{data:e})})},n={name:"AllVariants",render:()=>a.jsxs("div",{className:"flex flex-wrap gap-10",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Default ring"}),a.jsx("div",{className:"h-[140px] w-[140px]",children:a.jsx(s,{data:e})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Thinner ring"}),a.jsx("div",{className:"h-[140px] w-[140px]",children:a.jsx(s,{data:e,innerRadius:"80%",outerRadius:"95%"})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Ring + external legend"}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"h-[120px] w-[120px] shrink-0",children:a.jsx(s,{data:e,showTooltip:!1})}),a.jsx("div",{className:"flex flex-col gap-2",children:e.map(l=>a.jsxs("div",{className:"flex items-center justify-between gap-3",children:[a.jsxs("span",{className:"inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary",children:[a.jsx("span",{className:p("h-2.5 w-2.5 rounded-full",l.dotClassName),"aria-hidden":"true"}),l.label]}),a.jsxs("span",{className:"lyra-heading-sm text-lyra-fg-default",children:[l.value,"%"]})]},l.label))})]})]})]})};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="h-[160px] w-[160px]">
      <DonutChart data={ACTIVITY_DATA} />
    </div>
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,o,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "AllVariants",
  render: () => <div className="flex flex-wrap gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Default ring</p>
        <div className="h-[140px] w-[140px]">
          <DonutChart data={ACTIVITY_DATA} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Thinner ring</p>
        <div className="h-[140px] w-[140px]">
          <DonutChart data={ACTIVITY_DATA} innerRadius="80%" outerRadius="95%" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Ring + external legend</p>
        <div className="flex items-center gap-4">
          <div className="h-[120px] w-[120px] shrink-0">
            <DonutChart data={ACTIVITY_DATA} showTooltip={false} />
          </div>
          <div className="flex flex-col gap-2">
            {ACTIVITY_DATA.map(d => <div key={d.label} className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary">
                  <span className={cn("h-2.5 w-2.5 rounded-full", d.dotClassName)} aria-hidden="true" />
                  {d.label}
                </span>
                <span className="lyra-heading-sm text-lyra-fg-default">{d.value}%</span>
              </div>)}
          </div>
        </div>
      </div>
    </div>
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const b=["Default","AllVariants"];export{n as AllVariants,r as Default,b as __namedExportsOrder,N as default};
