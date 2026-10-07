import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a}from"./checkbox-CfX6-3Wq.js";import{V as m,S as r,I as L}from"./Checkbox.shared-ClIuIIKX.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-DGBzHazk.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";const O={title:"Headless Primitives/Checkbox/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},d="lyra-body-sm text-lyra-fg-secondary",j=[{key:"default",label:"Default",props:{},labelClass:"text-lyra-fg-default"},{key:"disabled",label:"Disabled",props:{disabled:!0},labelClass:"text-lyra-fg-disabled"},{key:"readonly",label:"Read-only",props:{readonly:!0},labelClass:"text-lyra-fg-default"}],l={name:"All Variants",render:()=>e.jsxs("div",{children:[e.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"All States (hover and click to see interactive states)"}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-8 gap-y-4 items-center",children:[e.jsx("span",{className:d,children:"State"}),m.map(s=>e.jsx("span",{className:d,children:s.label},s.key)),j.map(s=>e.jsxs("div",{className:"contents",children:[e.jsx("span",{className:d,children:s.label}),m.map(i=>{const c=`${s.key}-${i.key}`;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:c,checked:i.checked,...s.props}),e.jsx("label",{htmlFor:c,className:`lyra-body-md ${s.labelClass}`,children:r})]},c)})]},s.key))]})]})},t={name:"Interactive",render:()=>e.jsx(L,{})},n={name:"With Secondary Text",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(a,{id:"sec-1",className:"mt-0.5"}),e.jsx("label",{htmlFor:"sec-1",children:e.jsx("span",{className:"lyra-body-md text-lyra-fg-default block",children:r})})]}),e.jsx(a,{label:r,secondaryText:"Secondary Text"})]})},o={name:"Keyboard Focus",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Press Tab to move through these. Click one with the mouse: no ring."}),e.jsx(a,{label:r}),e.jsx(a,{label:r,secondaryText:"Secondary Text",checked:!0}),e.jsx(a,{label:r,readonly:!0,checked:!0}),e.jsx(a,{label:r,error:!0}),e.jsx(a,{"aria-label":"No label (rings the box only)"})]})};var p,y,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div>
      <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">
        All States (hover and click to see interactive states)
      </h3>
      <div className="grid grid-cols-4 gap-x-8 gap-y-4 items-center">
        <span className={caption}>State</span>
        {VALUES.map(v => <span key={v.key} className={caption}>{v.label}</span>)}

        {ROWS.map(row => <div key={row.key} className="contents">
            <span className={caption}>{row.label}</span>
            {VALUES.map(v => {
          const id = \`\${row.key}-\${v.key}\`;
          return <div key={id} className="flex items-center gap-2">
                  <Checkbox id={id} checked={v.checked} {...row.props} />
                  <label htmlFor={id} className={\`lyra-body-md \${row.labelClass}\`}>
                    {SAMPLE_LABEL}
                  </label>
                </div>;
        })}
          </div>)}
      </div>
    </div>
}`,...(x=(y=l.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,h,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => <InteractiveDemo />
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,v,g;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "With Secondary Text",
  render: () => <div className="space-y-4">
      <div className="flex items-start gap-2">
        <Checkbox id="sec-1" className="mt-0.5" />
        <label htmlFor="sec-1">
          <span className="lyra-body-md text-lyra-fg-default block">{SAMPLE_LABEL}</span>
        </label>
      </div>
      <Checkbox label={SAMPLE_LABEL} secondaryText="Secondary Text" />
    </div>
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var N,S,f;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Keyboard Focus",
  render: () => <div className="flex flex-col gap-6">
      <p className="lyra-body-sm text-lyra-fg-secondary">Press Tab to move through these. Click one with the mouse: no ring.</p>
      <Checkbox label={SAMPLE_LABEL} />
      <Checkbox label={SAMPLE_LABEL} secondaryText="Secondary Text" checked />
      <Checkbox label={SAMPLE_LABEL} readonly checked />
      <Checkbox label={SAMPLE_LABEL} error />
      <Checkbox aria-label="No label (rings the box only)" />
    </div>
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const U=["AllVariants","Interactive","WithSecondaryText","KeyboardFocus"];export{l as AllVariants,t as Interactive,o as KeyboardFocus,n as WithSecondaryText,U as __namedExportsOrder,O as default};
