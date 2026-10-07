import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./switch-BcDXqIbO.js";import{S as f,R as g}from"./Switch.shared-DrarV60A.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./error-icon-solid-eVlwMcX6.js";import"./check-Dr3vGcdY.js";import"./minus-CVnigrff.js";const C={title:"Headless Primitives/Switch/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"All Variants",render:()=>e.jsx("div",{className:"flex flex-col gap-10",children:["lg","sm"].map(r=>e.jsxs("div",{children:[e.jsxs("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:["Size: ",r==="lg"?"Large":"Small"]}),e.jsxs("div",{className:"grid grid-cols-[200px_auto_auto] items-center gap-x-12 gap-y-4",children:[e.jsx("span",{}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary font-medium",children:"Light"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary font-medium",children:"Dark"}),f.map(({caption:n,checked:c,disabled:o})=>e.jsxs("div",{className:"contents",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n}),e.jsx(a,{checked:c,disabled:o,size:r,label:"Switch Label"}),e.jsx("div",{"data-theme":"dark",className:"bg-lyra-bg-surface-base rounded-lyra-md p-3",children:e.jsx(a,{checked:c,disabled:o,size:r,label:"Switch Label"})})]},n))]})]},r))})},l={name:"Read-only",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{checked:!0,readonly:!0,label:"Read-only, on"}),e.jsx(a,{checked:!1,readonly:!0,label:"Read-only, off"}),e.jsx(a,{checked:!0,disabled:!0,label:"Disabled, on (for comparison)"})]})},d={name:"Required + Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{children:e.jsx(a,{checked:!1,required:!0,label:"Accept terms",error:g})}),e.jsx("div",{children:e.jsx(a,{checked:!0,required:!0,label:"Accept terms (on, no error)"})})]})};var i,t,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-10">
      {(["lg", "sm"] as const).map(size => <div key={size}>
          <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">
            Size: {size === "lg" ? "Large" : "Small"}
          </p>
          <div className="grid grid-cols-[200px_auto_auto] items-center gap-x-12 gap-y-4">
            <span />
            <span className="lyra-body-sm text-lyra-fg-secondary font-medium">Light</span>
            <span className="lyra-body-sm text-lyra-fg-secondary font-medium">Dark</span>
            {SWITCH_STATES.map(({
          caption,
          checked,
          disabled
        }) => <div key={caption} className="contents">
                <span className="lyra-body-sm text-lyra-fg-secondary">{caption}</span>
                <Switch checked={checked} disabled={disabled} size={size} label="Switch Label" />
                <div data-theme="dark" className="bg-lyra-bg-surface-base rounded-lyra-md p-3">
                  <Switch checked={checked} disabled={disabled} size={size} label="Switch Label" />
                </div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(m=(t=s.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var p,y,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Read-only",
  render: () => <div className="flex flex-col gap-4">
      <Switch checked readonly label="Read-only, on" />
      <Switch checked={false} readonly label="Read-only, off" />
      <Switch checked disabled label="Disabled, on (for comparison)" />
    </div>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,b,u;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Required + Error",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <Switch checked={false} required label="Accept terms" error={REQUIRED_ERROR} />
      </div>
      <div>
        <Switch checked required label="Accept terms (on, no error)" />
      </div>
    </div>
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const Q=["AllVariants","ReadOnly","RequiredError"];export{s as AllVariants,l as ReadOnly,d as RequiredError,Q as __namedExportsOrder,C as default};
