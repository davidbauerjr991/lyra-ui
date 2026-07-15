import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ee}from"./index-CXOcBcs0.js";import{C as a}from"./checkbox-BbegBx1f.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DNfP5j1O.js";import"./tooltip-DsDWII6n.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./index-CoT6TaLL.js";import"./label-DRpt0Xe7.js";import"./createLucideIcon-DEcfmm_F.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";const ye={title:"Atoms/Checkbox",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{checked:{control:"select",options:[!0,!1,"indeterminate"]},disabled:{control:"boolean"}}},s={render:()=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(a,{}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Checkbox label"})]})},r={render:()=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(a,{defaultChecked:!0}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Checkbox label"})]})},d={render:()=>e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(a,{checked:"indeterminate"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Checkbox label"})]})},c={name:"Required",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Accept terms and conditions",required:!0}),e.jsx(a,{label:"Subscribe to newsletter",required:!0,checked:!0})]})},n={name:"Readonly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked (read-only)",readonly:!0,labelHelpText:"This value cannot be changed."}),e.jsx(a,{label:"Checked (read-only)",readonly:!0,checked:!0,labelHelpText:"This value cannot be changed."}),e.jsx(a,{label:"Indeterminate (read-only)",readonly:!0,checked:"indeterminate"})]})},t={render:()=>e.jsxs("label",{className:"flex items-center gap-2 cursor-not-allowed",children:[e.jsx(a,{disabled:!0}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-disabled",children:"Checkbox label"})]})},i={render:()=>e.jsxs("label",{className:"flex items-center gap-2 cursor-not-allowed",children:[e.jsx(a,{disabled:!0,checked:!0}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-disabled",children:"Checkbox label"})]})},o={render:()=>e.jsxs("label",{className:"flex items-center gap-2 cursor-not-allowed",children:[e.jsx(a,{disabled:!0,checked:"indeterminate"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-disabled",children:"Checkbox label"})]})},m={name:"State Matrix",render:()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"All States (hover and click to see interactive states)"}),e.jsxs("div",{className:"grid grid-cols-4 gap-x-8 gap-y-4 items-center",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"State"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Unchecked"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Checked"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Indeterminate"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Default"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"d-unc"}),e.jsx("label",{htmlFor:"d-unc",className:"lyra-body-md text-lyra-fg-default",children:"Checkbox label"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"d-chk",defaultChecked:!0}),e.jsx("label",{htmlFor:"d-chk",className:"lyra-body-md text-lyra-fg-default",children:"Checkbox label"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"d-ind",checked:"indeterminate"}),e.jsx("label",{htmlFor:"d-ind",className:"lyra-body-md text-lyra-fg-default",children:"Checkbox label"})]}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"dis-unc",disabled:!0}),e.jsx("label",{htmlFor:"dis-unc",className:"lyra-body-md text-lyra-fg-disabled",children:"Checkbox label"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"dis-chk",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"dis-chk",className:"lyra-body-md text-lyra-fg-disabled",children:"Checkbox label"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"dis-ind",disabled:!0,checked:"indeterminate"}),e.jsx("label",{htmlFor:"dis-ind",className:"lyra-body-md text-lyra-fg-disabled",children:"Checkbox label"})]})]})]})})},b={name:"Interactive",render:()=>{const[h,f]=ee.useState([{id:"a",label:"Option A",checked:!1},{id:"b",label:"Option B",checked:!0},{id:"c",label:"Option C",checked:!1}]),u=h.every(l=>l.checked),$=!u&&h.some(l=>l.checked);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"select-all",checked:u?!0:$?"indeterminate":!1,onCheckedChange:l=>f(y=>y.map(p=>({...p,checked:!!l})))}),e.jsx("label",{htmlFor:"select-all",className:"lyra-body-md-emphasis text-lyra-fg-default",children:"Select all"})]}),e.jsx("div",{className:"ml-6 space-y-2",children:h.map(l=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:l.id,checked:l.checked,onCheckedChange:y=>f(p=>p.map(k=>k.id===l.id?{...k,checked:!!y}:k))}),e.jsx("label",{htmlFor:l.id,className:"lyra-body-md text-lyra-fg-default",children:l.label})]},l.id))})]})}},x={name:"With Secondary Text",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(a,{id:"sec-1",className:"mt-0.5"}),e.jsx("label",{htmlFor:"sec-1",children:e.jsx("span",{className:"lyra-body-md text-lyra-fg-default block",children:"Checkbox label"})})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(a,{id:"sec-2",className:"mt-0.5"}),e.jsxs("label",{htmlFor:"sec-2",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default block",children:"Checkbox label"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary block",children:"Secondary Text"})]})]})]})};var g,N,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox />
      <span className="lyra-body-md text-lyra-fg-default">Checkbox label</span>
    </label>
}`,...(C=(N=s.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var j,v,S;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox defaultChecked />
      <span className="lyra-body-md text-lyra-fg-default">Checkbox label</span>
    </label>
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var F,I,T;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox checked="indeterminate" />
      <span className="lyra-body-md text-lyra-fg-default">Checkbox label</span>
    </label>
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,R,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Required",
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Accept terms and conditions" required />
      <Checkbox label="Subscribe to newsletter" required checked />
    </div>
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var w,A,O;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Readonly",
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked (read-only)" readonly labelHelpText="This value cannot be changed." />
      <Checkbox label="Checked (read-only)" readonly checked labelHelpText="This value cannot be changed." />
      <Checkbox label="Indeterminate (read-only)" readonly checked="indeterminate" />
    </div>
}`,...(O=(A=n.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var H,M,U;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 cursor-not-allowed">
      <Checkbox disabled />
      <span className="lyra-body-md text-lyra-fg-disabled">Checkbox label</span>
    </label>
}`,...(U=(M=t.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var W,E,B;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 cursor-not-allowed">
      <Checkbox disabled checked />
      <span className="lyra-body-md text-lyra-fg-disabled">Checkbox label</span>
    </label>
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var _,z,G;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <label className="flex items-center gap-2 cursor-not-allowed">
      <Checkbox disabled checked="indeterminate" />
      <span className="lyra-body-md text-lyra-fg-disabled">Checkbox label</span>
    </label>
}`,...(G=(z=o.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "State Matrix",
  render: () => <div className="space-y-8">
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">
          All States (hover and click to see interactive states)
        </h3>
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 items-center">
          {/* Headers */}
          <span className="lyra-body-sm text-lyra-fg-secondary">State</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Unchecked</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Checked</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Indeterminate</span>

          {/* Default */}
          <span className="lyra-body-sm text-lyra-fg-secondary">Default</span>
          <div className="flex items-center gap-2">
            <Checkbox id="d-unc" />
            <label htmlFor="d-unc" className="lyra-body-md text-lyra-fg-default">Checkbox label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="d-chk" defaultChecked />
            <label htmlFor="d-chk" className="lyra-body-md text-lyra-fg-default">Checkbox label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="d-ind" checked="indeterminate" />
            <label htmlFor="d-ind" className="lyra-body-md text-lyra-fg-default">Checkbox label</label>
          </div>

          {/* Disabled */}
          <span className="lyra-body-sm text-lyra-fg-secondary">Disabled</span>
          <div className="flex items-center gap-2">
            <Checkbox id="dis-unc" disabled />
            <label htmlFor="dis-unc" className="lyra-body-md text-lyra-fg-disabled">Checkbox label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="dis-chk" disabled checked />
            <label htmlFor="dis-chk" className="lyra-body-md text-lyra-fg-disabled">Checkbox label</label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="dis-ind" disabled checked="indeterminate" />
            <label htmlFor="dis-ind" className="lyra-body-md text-lyra-fg-disabled">Checkbox label</label>
          </div>
        </div>
      </div>
    </div>
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,Q,V;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => {
    const [items, setItems] = useState([{
      id: "a",
      label: "Option A",
      checked: false
    }, {
      id: "b",
      label: "Option B",
      checked: true
    }, {
      id: "c",
      label: "Option C",
      checked: false
    }]);
    const allChecked = items.every(i => i.checked);
    const someChecked = !allChecked && items.some(i => i.checked);
    return <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Checkbox id="select-all" checked={allChecked ? true : someChecked ? "indeterminate" : false} onCheckedChange={checked => setItems(prev => prev.map(i => ({
          ...i,
          checked: !!checked
        })))} />
          <label htmlFor="select-all" className="lyra-body-md-emphasis text-lyra-fg-default">
            Select all
          </label>
        </div>
        <div className="ml-6 space-y-2">
          {items.map(item => <div key={item.id} className="flex items-center gap-2">
              <Checkbox id={item.id} checked={item.checked} onCheckedChange={checked => setItems(prev => prev.map(i => i.id === item.id ? {
            ...i,
            checked: !!checked
          } : i))} />
              <label htmlFor={item.id} className="lyra-body-md text-lyra-fg-default">
                {item.label}
              </label>
            </div>)}
        </div>
      </div>;
  }
}`,...(V=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "With Secondary Text",
  render: () => <div className="space-y-4">
      <div className="flex items-start gap-2">
        <Checkbox id="sec-1" className="mt-0.5" />
        <label htmlFor="sec-1">
          <span className="lyra-body-md text-lyra-fg-default block">Checkbox label</span>
        </label>
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="sec-2" className="mt-0.5" />
        <label htmlFor="sec-2">
          <span className="lyra-body-md text-lyra-fg-default block">Checkbox label</span>
          <span className="lyra-body-sm text-lyra-fg-secondary block">Secondary Text</span>
        </label>
      </div>
    </div>
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const pe=["Default","Checked","Indeterminate","Required","Readonly","Disabled","DisabledChecked","DisabledIndeterminate","StateMatrix","Interactive","WithSecondaryText"];export{r as Checked,s as Default,t as Disabled,i as DisabledChecked,o as DisabledIndeterminate,d as Indeterminate,b as Interactive,n as Readonly,c as Required,m as StateMatrix,x as WithSecondaryText,pe as __namedExportsOrder,ye as default};
