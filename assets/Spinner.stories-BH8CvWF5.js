import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-DhMLlvMY.js";import{S as r}from"./spinner-DXpCQdYn.js";import{B as C}from"./button-C_xtDadR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-B7WaxDQZ.js";import"./index-3Mvvhvj2.js";import"./badge-CSIGLv9X.js";const F={title:"Custom Primitives/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["bar","circle"]},size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","inverse"]}}},s={name:"Spinner Bar",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{variant:"bar",size:"sm"}),e.jsx(r,{variant:"bar",size:"md"}),e.jsx(r,{variant:"bar",size:"lg"})]})},i={name:"Spinner Circle",render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(r,{variant:"circle",size:"sm"}),e.jsx(r,{variant:"circle",size:"md"}),e.jsx(r,{variant:"circle",size:"lg"})]})},t={name:"Multiple Spinner",render:()=>{const[n,h]=A.useState({1:!0,2:!0}),B=a=>h(o=>({...o,[a]:!o[a]}));return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{className:"flex gap-3",children:[1,2,3,4].map(a=>e.jsxs(C,{variant:n[a]?"primary":"outline",size:"sm",onClick:()=>B(a),children:["Toggle ",a]},a))}),e.jsx("div",{className:"flex items-center gap-8 h-10",children:[1,2,3,4].map(a=>n[a]?e.jsx(r,{variant:"bar",size:"md",label:`Loading ${a}`},a):null)})]})}},l={name:"On Dark Background",parameters:{backgrounds:{default:"lyra-shell"}},render:()=>e.jsxs("div",{className:"flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse",children:[e.jsx(r,{variant:"bar",color:"inverse",size:"md"}),e.jsx(r,{variant:"circle",color:"inverse",size:"md"})]})},c={name:"All Variants",render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:["sm","md","lg"].map(n=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary w-6",children:n}),e.jsx(r,{variant:"bar",size:n}),e.jsx(r,{variant:"circle",size:n})]},n))})};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Spinner Bar",
  render: () => <div className="flex items-center gap-8">
      <Spinner variant="bar" size="sm" />
      <Spinner variant="bar" size="md" />
      <Spinner variant="bar" size="lg" />
    </div>
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var v,g,u;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Spinner Circle",
  render: () => <div className="flex items-center gap-8">
      <Spinner variant="circle" size="sm" />
      <Spinner variant="circle" size="md" />
      <Spinner variant="circle" size="lg" />
    </div>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,S,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Multiple Spinner",
  render: () => {
    const [active, setActive] = useState<Record<number, boolean>>({
      1: true,
      2: true
    });
    const toggle = (id: number) => setActive(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    return <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          {[1, 2, 3, 4].map(id => <Button key={id} variant={active[id] ? "primary" : "outline"} size="sm" onClick={() => toggle(id)}>
              Toggle {id}
            </Button>)}
        </div>
        <div className="flex items-center gap-8 h-10">
          {[1, 2, 3, 4].map(id => active[id] ? <Spinner key={id} variant="bar" size="md" label={\`Loading \${id}\`} /> : null)}
        </div>
      </div>;
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var b,z,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "On Dark Background",
  parameters: {
    backgrounds: {
      default: "lyra-shell"
    }
  },
  render: () => <div className="flex items-center gap-8 p-6 rounded-lyra-md bg-lyra-bg-surface-inverse">
      <Spinner variant="bar" color="inverse" size="md" />
      <Spinner variant="circle" color="inverse" size="md" />
    </div>
}`,...(j=(z=l.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var y,N,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-8">
          <span className="lyra-body-sm text-lyra-fg-secondary w-6">{size}</span>
          <Spinner variant="bar" size={size} />
          <Spinner variant="circle" size={size} />
        </div>)}
    </div>
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const G=["SpinnerBar","SpinnerCircle","MultipleSpinner","OnDarkBackground","AllVariants"];export{c as AllVariants,t as MultipleSpinner,l as OnDarkBackground,s as SpinnerBar,i as SpinnerCircle,G as __namedExportsOrder,F as default};
