import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./textarea-CqWH3I5r.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./error-icon-solid-C6_pXXD0.js";import"./utils-BLSKlp9E.js";import"./label-DTtDlf5k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";const M={title:"Custom Primitives/Textarea",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"Default",render:()=>e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4})},l={name:"With Value",render:()=>e.jsx(r,{label:"Input Label",maxLength:100,defaultValue:"Text",rows:4})},t={name:"With Error Message",render:()=>e.jsx(r,{label:"Input Label",maxLength:100,error:"Required",rows:4})},o={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-sm",children:[e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4}),e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4,className:"[&_textarea]:border-lyra-state-border-hover-neutral"}),e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4,className:"[&_textarea]:border-lyra-border-active [&_textarea]:ring-2 [&_textarea]:ring-lyra-border-active/20"}),e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4,readonly:!0}),e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4,disabled:!0}),e.jsx(r,{label:"Input Label",placeholder:"Placeholder",maxLength:100,rows:4,error:"Required"})]})},s={render:()=>e.jsx(r,{label:"Description",labelHelpText:"Provide a detailed description of the issue.",required:!0,placeholder:"Enter description...",maxLength:500,rows:5})};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: () => <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} />
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,i,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With Value",
  render: () => <Textarea label="Input Label" maxLength={100} defaultValue="Text" rows={4} />
}`,...(m=(i=l.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "With Error Message",
  render: () => <Textarea label="Input Label" maxLength={100} error="Required" rows={4} />
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,g,L;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-6 max-w-sm">
      {/* Default */}
      <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} />

      {/* Hover — shown via CSS on hover; static preview uses same styling */}
      <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} className="[&_textarea]:border-lyra-state-border-hover-neutral" />

      {/* Active / Focus */}
      <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} className="[&_textarea]:border-lyra-border-active [&_textarea]:ring-2 [&_textarea]:ring-lyra-border-active/20" />

      {/* ReadOnly */}
      <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} readonly />

      {/* Disabled */}
      <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} disabled />

      {/* Error */}
      <Textarea label="Input Label" placeholder="Placeholder" maxLength={100} rows={4} error="Required" />
    </div>
}`,...(L=(g=o.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var w,I,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Textarea label="Description" labelHelpText="Provide a detailed description of the issue." required placeholder="Enter description..." maxLength={500} rows={5} />
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const H=["Default","WithValue","WithErrorMessage","AllStates","Required"];export{o as AllStates,a as Default,s as Required,t as WithErrorMessage,l as WithValue,H as __namedExportsOrder,M as default};
