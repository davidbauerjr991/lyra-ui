import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as m}from"./chip-CgDre8Tq.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";const h={title:"Atoms/Chip",component:m,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{color:{control:"select",options:["slate","red","orange","yellow","lime","green","teal","blue","purple","pink"]},variant:{control:"select",options:["subtle","solid"]}}},r={args:{color:"blue",variant:"subtle",children:"Blue"}},d=["slate","red","orange","yellow","lime","green","teal","blue","purple","pink"],u=["subtle","solid"],s={name:"All Variants",render:()=>a.jsx("div",{className:"flex gap-12",children:u.map(l=>a.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1 capitalize",children:l}),d.map(e=>a.jsx(m,{color:e,variant:l,children:e.charAt(0).toUpperCase()+e.slice(1)},e))]},l))})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: "blue",
    variant: "subtle",
    children: "Blue"
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex gap-12">
      {VARIANTS.map(variant => <div key={variant} className="flex flex-col gap-2 items-start">
          <p className="lyra-body-sm text-lyra-fg-secondary mb-1 capitalize">{variant}</p>
          {COLORS.map(color => <Chip key={color} color={color} variant={variant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Chip>)}
        </div>)}
    </div>
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const v=["Default","AllVariants"];export{s as AllVariants,r as Default,v as __namedExportsOrder,h as default};
