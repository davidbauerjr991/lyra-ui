import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./link-BFT11_ys.js";import{L as s,e as b,c}from"./Link.shared-r00HOtYx.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./pencil-IFm_bK0G.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-right-BP9ksYh_.js";const D={title:"Custom Primitives/Link/Variants",component:n,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(n,{size:"md",children:s}),e.jsx(n,{size:"sm",children:s})]})},a={name:"With Leading Icon",render:()=>e.jsxs(n,{size:"md",children:[b,"Edit"]})},i={name:"With Trailing Icon",render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsxs(n,{size:"md",children:["View all",c]}),e.jsxs(n,{size:"sm",children:["View all",c]}),e.jsxs(n,{size:"md",children:[b,"Edit",c]})]})},l={name:"States (Default, Disabled, Anchor, Disabled Anchor)",render:()=>e.jsxs("div",{className:"flex flex-col items-start gap-3",children:[e.jsx(n,{children:s}),e.jsx(n,{disabled:!0,children:s}),e.jsxs(n,{href:"#example",children:[s," (anchor)"]}),e.jsxs(n,{href:"#example",disabled:!0,children:[s," (disabled anchor)"]})]})},t={name:"Inline in text",render:()=>e.jsxs("p",{className:"max-w-md lyra-body-md text-lyra-fg-default",children:["Your callback was scheduled for 3:00 PM. You can"," ",e.jsx(n,{underline:"always",size:"md",href:"#reschedule",className:"inline",children:"reschedule it"})," ","or"," ",e.jsx(n,{underline:"always",size:"md",className:"inline",onClick:()=>{},children:"view customer info"})," ","before the call starts."]})};var d,o,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col items-start gap-3">
      <Link size="md">{LINK_LABEL}</Link>
      <Link size="sm">{LINK_LABEL}</Link>
    </div>
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var h,L,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With Leading Icon",
  render: () => <Link size="md">
      {editIcon}
      Edit
    </Link>
}`,...(p=(L=a.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};var u,x,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "With Trailing Icon",
  render: () => <div className="flex flex-col items-start gap-3">
      <Link size="md">
        View all
        {chevronIcon}
      </Link>
      <Link size="sm">
        View all
        {chevronIcon}
      </Link>
      <Link size="md">
        {editIcon}
        Edit
        {chevronIcon}
      </Link>
    </div>
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,I,g;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "States (Default, Disabled, Anchor, Disabled Anchor)",
  render: () => <div className="flex flex-col items-start gap-3">
      <Link>{LINK_LABEL}</Link>
      <Link disabled>{LINK_LABEL}</Link>
      <Link href="#example">{LINK_LABEL} (anchor)</Link>
      <Link href="#example" disabled>{LINK_LABEL} (disabled anchor)</Link>
    </div>
}`,...(g=(I=l.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var z,N,j;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Inline in text",
  render: () => <p className="max-w-md lyra-body-md text-lyra-fg-default">
      Your callback was scheduled for 3:00 PM. You can{" "}
      <Link underline="always" size="md" href="#reschedule" className="inline">
        reschedule it
      </Link>{" "}
      or{" "}
      <Link underline="always" size="md" className="inline" onClick={() => {}}>
        view customer info
      </Link>{" "}
      before the call starts.
    </p>
}`,...(j=(N=t.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const T=["Sizes","WithIcon","WithTrailingIcon","States","InlineInText"];export{t as InlineInText,r as Sizes,l as States,a as WithIcon,i as WithTrailingIcon,T as __namedExportsOrder,D as default};
