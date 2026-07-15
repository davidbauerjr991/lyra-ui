import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as n}from"./chart-CfppZ6cd.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";const h={title:"Atoms/Chart",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{option:{table:{disable:!0}}}},a={render:()=>e.jsx("div",{className:"h-[280px] w-[420px]",children:e.jsx(n,{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri"]},yAxis:{type:"value"},series:[{type:"bar",data:[12,19,8,15,11]}]}})})},s={name:"AllVariants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Bar"}),e.jsx("div",{className:"h-[220px] w-[420px]",children:e.jsx(n,{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri"]},yAxis:{type:"value"},series:[{type:"bar",data:[12,19,8,15,11]}]}})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Line"}),e.jsx("div",{className:"h-[220px] w-[420px]",children:e.jsx(n,{option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri"]},yAxis:{type:"value"},series:[{type:"line",data:[12,19,8,15,11],smooth:!0}]}})})]})]})};var r,t,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var o,d,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default","AllVariants"];export{s as AllVariants,a as Default,v as __namedExportsOrder,h as default};
