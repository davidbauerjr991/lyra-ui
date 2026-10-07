import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as e}from"./sparkline-BywDx1SH.js";import{a as s,C as o,b as C,c as g}from"./Sparkline.shared-BNMdzeh4.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chart-C8WwCP2A.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";const L={title:"Custom Primitives/Sparkline/Variants",component:e,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function l({label:r,children:j}){return a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:r}),a.jsx("div",{className:"h-[60px] w-[160px]",children:j})]})}const n={name:"Trend Colors",render:()=>a.jsxs("div",{className:"flex flex-wrap gap-10",children:[a.jsx(l,{label:"Up (success)",children:a.jsx(e,{data:s,colorVar:o.success,"aria-label":"Upward trend"})}),a.jsx(l,{label:"Flat (warning)",children:a.jsx(e,{data:C,colorVar:o.warning,"aria-label":"Flat trend"})}),a.jsx(l,{label:"Down (critical)",children:a.jsx(e,{data:g,colorVar:o.critical,"aria-label":"Downward trend"})}),a.jsx(l,{label:"Default (active blue)",children:a.jsx(e,{data:s,"aria-label":"Upward trend, default color"})})]})},t={name:"Smooth vs Sharp",render:()=>a.jsxs("div",{className:"flex flex-wrap gap-10",children:[a.jsx(l,{label:"Sharp (default)",children:a.jsx(e,{data:s,"aria-label":"Upward trend, sharp line"})}),a.jsx(l,{label:"Smooth",children:a.jsx(e,{data:s,smooth:!0,"aria-label":"Upward trend, smooth line"})})]})},d={name:"Line Widths",render:()=>a.jsx("div",{className:"flex flex-wrap gap-10",children:[1,2,3,4].map(r=>a.jsx(l,{label:`${r}px${r===2?" (default)":""}`,children:a.jsx(e,{data:s,strokeWidth:r,"aria-label":`Upward trend, ${r}px line`})},r))})},i={name:"Accessibility (Labelled & Decorative)",render:()=>a.jsxs("div",{className:"flex flex-wrap gap-10",children:[a.jsx(l,{label:"Labelled",children:a.jsx(e,{data:s,"aria-label":"Calls trend, last 12 hours, up 300%"})}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Decorative (value shown as text)"}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:"h-[60px] w-[160px]",children:a.jsx(e,{data:s,decorative:!0})}),a.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"+300% vs last week"})]})]})]})};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Trend Colors",
  render: () => <div className="flex flex-wrap gap-10">
      <Cell label="Up (success)">
        <Sparkline data={TREND_UP} colorVar={COLOR_VARS.success} aria-label="Upward trend" />
      </Cell>
      <Cell label="Flat (warning)">
        <Sparkline data={TREND_FLAT} colorVar={COLOR_VARS.warning} aria-label="Flat trend" />
      </Cell>
      <Cell label="Down (critical)">
        <Sparkline data={TREND_DOWN} colorVar={COLOR_VARS.critical} aria-label="Downward trend" />
      </Cell>
      <Cell label="Default (active blue)">
        <Sparkline data={TREND_UP} aria-label="Upward trend, default color" />
      </Cell>
    </div>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Smooth vs Sharp",
  render: () => <div className="flex flex-wrap gap-10">
      <Cell label="Sharp (default)">
        <Sparkline data={TREND_UP} aria-label="Upward trend, sharp line" />
      </Cell>
      <Cell label="Smooth">
        <Sparkline data={TREND_UP} smooth aria-label="Upward trend, smooth line" />
      </Cell>
    </div>
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,u,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  name: "Line Widths",\n  render: () => <div className="flex flex-wrap gap-10">\n      {[1, 2, 3, 4].map(w => <Cell key={w} label={`${w}px${w === 2 ? " (default)" : ""}`}>\n          <Sparkline data={TREND_UP} strokeWidth={w} aria-label={`Upward trend, ${w}px line`} />\n        </Cell>)}\n    </div>\n}',...(v=(u=d.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var w,N,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Accessibility (Labelled & Decorative)",
  render: () => <div className="flex flex-wrap gap-10">
      <Cell label="Labelled">
        <Sparkline data={TREND_UP} aria-label="Calls trend, last 12 hours, up 300%" />
      </Cell>
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Decorative (value shown as text)</p>
        <div className="flex items-center gap-4">
          <div className="h-[60px] w-[160px]">
            <Sparkline data={TREND_UP} decorative />
          </div>
          <span className="lyra-body-md text-lyra-fg-default">+300% vs last week</span>
        </div>
      </div>
    </div>
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const V=["TrendColors","SmoothVsSharp","LineWidths","Accessibility"];export{i as Accessibility,d as LineWidths,t as SmoothVsSharp,n as TrendColors,V as __namedExportsOrder,L as default};
