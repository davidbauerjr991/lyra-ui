import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{L as z}from"./link-CwyGuOYt.js";import{P as b}from"./pencil-IFm_bK0G.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-aII_sYFw.js";const E={title:"Custom Primitives/Link",component:z,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{size:{control:"select",options:["sm","md"]},disabled:{control:"boolean"}}},e={args:{children:"View customer info",size:"md"}},r={args:{children:"View customer info",size:"sm"}},s={name:"With Leading Icon",render:w=>o.jsxs(z,{...w,children:[o.jsx(b,{className:"h-3.5 w-3.5",strokeWidth:1.5,"aria-hidden":"true"}),"Edit"]}),args:{size:"md"}},a={args:{children:"View customer info",size:"md",disabled:!0}};var i,n,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "View customer info",
    size: "md"
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "View customer info",
    size: "sm"
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "With Leading Icon",
  render: args => <Link {...args}>
      <Pencil className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
      Edit
    </Link>,
  args: {
    size: "md"
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "View customer info",
    size: "md",
    disabled: true
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const I=["Default","Small","WithIcon","Disabled"];export{e as Default,a as Disabled,r as Small,s as WithIcon,I as __namedExportsOrder,E as default};
