import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-CXOcBcs0.js";import{S as s}from"./switch-YE2uAROT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-C4O8ztA7.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-CoT6TaLL.js";import"./index-1evVQkiP.js";import"./label-KUce3kYB.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./check-DrRFj5bn.js";import"./minus-DYrWPnXn.js";const q={title:"Headless Primitives/Switch",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{checked:{control:"select",options:[!0,!1,"indeterminate","checked"]},disabled:{control:"boolean"},size:{control:"radio",options:["lg","sm"]},label:{control:"text"}}};function S(){const[a,t]=k.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{checked:a,onCheckedChange:t,label:"Switch Label",size:"lg"}),e.jsx(s,{checked:a,onCheckedChange:t,label:"Switch Label",size:"sm"})]})}const l={name:"Interactive",render:()=>e.jsx(S,{})};function j({size:a}){return e.jsxs("div",{className:"grid grid-cols-2 gap-x-12 gap-y-4",children:[e.jsx(s,{checked:!0,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!0,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!0,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!0,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!0,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!0,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!1,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!1,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!1,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!1,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!1,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!1,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!1,disabled:!0,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!1,disabled:!0,size:a,label:"Switch Label"})}),e.jsx(s,{checked:!0,disabled:!0,size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:!0,disabled:!0,size:a,label:"Switch Label"})}),e.jsx(s,{checked:"indeterminate",size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:"indeterminate",size:a,label:"Switch Label"})}),e.jsx(s,{checked:"checked",size:a,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(s,{checked:"checked",size:a,label:"Switch Label"})})]})}const r={name:"Large — All States",render:()=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-12 mb-3",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary font-medium w-[200px]",children:"Light"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary font-medium",children:"Dark"})]}),e.jsx(j,{size:"lg"})]})},c={name:"Small — All States",render:()=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-12 mb-3",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary font-medium w-[200px]",children:"Light"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary font-medium",children:"Dark"})]}),e.jsx(j,{size:"sm"})]})},d={name:"All Variants",render:()=>e.jsx("div",{className:"flex flex-col gap-8",children:["lg","sm"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:["Size: ",a==="lg"?"Large":"Small"]}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-8 gap-y-4",children:[e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Checked"}),e.jsx(s,{checked:!0,size:a,label:"Switch Label"})]}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Unchecked"}),e.jsx(s,{checked:!1,size:a,label:"Switch Label"})]}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Indeterminate"}),e.jsx(s,{checked:"indeterminate",size:a,label:"Switch Label"})]}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Checked variant"}),e.jsx(s,{checked:"checked",size:a,label:"Switch Label"})]}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled off"}),e.jsx(s,{checked:!1,disabled:!0,size:a,label:"Switch Label"})]}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled on"}),e.jsx(s,{checked:!0,disabled:!0,size:a,label:"Switch Label"})]})]})]},a))})};var n,i,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => <InteractiveDemo />
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var o,h,b;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Large — All States",
  render: () => <div>
      <div className="flex gap-12 mb-3">
        <span className="lyra-body-sm text-lyra-fg-secondary font-medium w-[200px]">Light</span>
        <span className="lyra-body-sm text-lyra-fg-secondary font-medium">Dark</span>
      </div>
      <AllStatesRow size="lg" />
    </div>
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,p,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Small — All States",
  render: () => <div>
      <div className="flex gap-12 mb-3">
        <span className="lyra-body-sm text-lyra-fg-secondary font-medium w-[200px]">Light</span>
        <span className="lyra-body-sm text-lyra-fg-secondary font-medium">Dark</span>
      </div>
      <AllStatesRow size="sm" />
    </div>
}`,...(y=(p=c.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,f,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-8">
      {(["lg", "sm"] as const).map(size => <div key={size}>
          <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">
            Size: {size === "lg" ? "Large" : "Small"}
          </p>
          <div className="grid grid-cols-4 gap-x-8 gap-y-4">
            <div className="flex flex-col items-start gap-2">
              <span className="lyra-body-sm text-lyra-fg-secondary">Checked</span>
              <Switch checked={true} size={size} label="Switch Label" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="lyra-body-sm text-lyra-fg-secondary">Unchecked</span>
              <Switch checked={false} size={size} label="Switch Label" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="lyra-body-sm text-lyra-fg-secondary">Indeterminate</span>
              <Switch checked="indeterminate" size={size} label="Switch Label" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="lyra-body-sm text-lyra-fg-secondary">Checked variant</span>
              <Switch checked="checked" size={size} label="Switch Label" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="lyra-body-sm text-lyra-fg-secondary">Disabled off</span>
              <Switch checked={false} disabled size={size} label="Switch Label" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="lyra-body-sm text-lyra-fg-secondary">Disabled on</span>
              <Switch checked={true} disabled size={size} label="Switch Label" />
            </div>
          </div>
        </div>)}
    </div>
}`,...(u=(f=d.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const B=["Interactive","Large","Small","AllVariants"];export{d as AllVariants,l as Interactive,r as Large,c as Small,B as __namedExportsOrder,q as default};
