import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as d}from"./chart-CfppZ6cd.js";import{D as i}from"./donut-chart-BFuHzVfw.js";import{c as b}from"./utils-BLSKlp9E.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tslib.es6-Ytcc2UEA.js";const I={title:"Custom Primitives/Chart",component:d,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{option:{table:{disable:!0}}}},n={render:()=>a.jsx("div",{className:"h-[280px] w-[420px]",children:a.jsx(d,{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri"]},yAxis:{type:"value"},series:[{type:"bar",data:[12,19,8,15,11]}]}})})},r={name:"AllVariants",render:()=>a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsxs("div",{children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Bar"}),a.jsx("div",{className:"h-[220px] w-[420px]",children:a.jsx(d,{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri"]},yAxis:{type:"value"},series:[{type:"bar",data:[12,19,8,15,11]}]}})})]}),a.jsxs("div",{children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Line"}),a.jsx("div",{className:"h-[220px] w-[420px]",children:a.jsx(d,{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri"]},yAxis:{type:"value"},series:[{type:"line",data:[12,19,8,15,11],smooth:!0}]}})})]})]})},e=[{label:"Available",value:22,colorVar:"var(--lyra-color-status-success-strong)",dotClassName:"bg-lyra-status-success-strong"},{label:"Working",value:61,colorVar:"var(--lyra-color-status-warning-strong)",dotClassName:"bg-lyra-status-warning-strong"},{label:"Unavailable",value:17,colorVar:"var(--lyra-color-status-critical-strong)",dotClassName:"bg-lyra-status-critical-strong"}],l={name:"Donut",render:()=>a.jsx("div",{className:"h-[160px] w-[160px]",children:a.jsx(i,{data:e})})},t={name:"Donut - All Variants",render:()=>a.jsxs("div",{className:"flex flex-wrap gap-10",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Default ring"}),a.jsx("div",{className:"h-[140px] w-[140px]",children:a.jsx(i,{data:e})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Thinner ring"}),a.jsx("div",{className:"h-[140px] w-[140px]",children:a.jsx(i,{data:e,innerRadius:"80%",outerRadius:"95%"})})]}),a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Ring + external legend"}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"h-[120px] w-[120px] shrink-0",children:a.jsx(i,{data:e,showTooltip:!1})}),a.jsx("div",{className:"flex flex-col gap-2",children:e.map(s=>a.jsxs("div",{className:"flex items-center justify-between gap-3",children:[a.jsxs("span",{className:"inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary",children:[a.jsx("span",{className:b("h-2.5 w-2.5 rounded-full",s.dotClassName),"aria-hidden":"true"}),s.label]}),a.jsxs("span",{className:"lyra-heading-sm text-lyra-fg-default",children:[s.value,"%"]})]},s.label))})]})]})]})};var o,c,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="h-[280px] w-[420px]">
      <Chart option={{
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri"]
      },
      yAxis: {
        type: "value"
      },
      series: [{
        type: "bar",
        data: [12, 19, 8, 15, 11]
      }]
    }} />
    </div>
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,x,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "AllVariants",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Bar</p>
        <div className="h-[220px] w-[420px]">
          <Chart option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri"]
          },
          yAxis: {
            type: "value"
          },
          series: [{
            type: "bar",
            data: [12, 19, 8, 15, 11]
          }]
        }} />
        </div>
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Line</p>
        <div className="h-[220px] w-[420px]">
          <Chart option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri"]
          },
          yAxis: {
            type: "value"
          },
          series: [{
            type: "line",
            data: [12, 19, 8, 15, 11],
            smooth: true
          }]
        }} />
        </div>
      </div>
    </div>
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var u,h,v;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Donut",
  render: () => <div className="h-[160px] w-[160px]">
      <DonutChart data={ACTIVITY_DATA} />
    </div>
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,N;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Donut - All Variants",
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
}`,...(N=(f=t.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const _=["Default","AllVariants","Donut","DonutVariants"];export{r as AllVariants,n as Default,l as Donut,t as DonutVariants,_ as __namedExportsOrder,I as default};
