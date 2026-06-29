import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-CXOcBcs0.js";import{c as i}from"./utils-BLSKlp9E.js";import{C as se}from"./tree-menu-C14Xwehm.js";import{C as re}from"./chevron-down-BRCsRsv-.js";import{B as ae}from"./box-Gl1aLw8q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-DEcfmm_F.js";const n=b.forwardRef(({items:h,type:l="single",value:S,values:j,defaultValue:K,defaultValues:L,onValueChange:g,onValuesChange:x,className:Q},U)=>{const[X,Y]=b.useState(K??""),[Z,$]=b.useState(L??[]),v=S!==void 0,A=j!==void 0,N=v?S:X,o=A?j:Z,ee=e=>l==="multiple"?o.includes(e):N===e,te=e=>{if(l==="multiple"){const s=o.includes(e)?o.filter(ne=>ne!==e):[...o,e];A||$(s),x==null||x(s)}else{const s=N===e?"":e;v||Y(s),g==null||g(s)}};return t.jsx("div",{ref:U,className:i("w-full",Q),children:h.map(e=>{const s=ee(e.id);return t.jsxs("div",{children:[t.jsxs("button",{type:"button",disabled:e.disabled,"aria-expanded":s,onClick:()=>!e.disabled&&te(e.id),className:i("w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset",e.disabled?"cursor-not-allowed":"hover:bg-lyra-state-hover active:bg-lyra-state-pressed cursor-pointer"),children:[e.icon&&t.jsx("span",{className:i("flex-shrink-0",e.disabled?"text-lyra-fg-disabled":"text-lyra-fg-secondary"),children:e.icon}),t.jsxs("span",{className:"flex-1 flex flex-col min-w-0",children:[t.jsx("span",{className:i("lyra-body-md",e.disabled?"text-lyra-fg-disabled":"text-lyra-fg-default"),children:e.title}),e.subhead&&t.jsx("span",{className:i("lyra-body-sm",e.disabled?"text-lyra-fg-disabled":"text-lyra-fg-secondary"),children:e.subhead})]}),t.jsx(re,{className:i("h-5 w-5 flex-shrink-0 transition-transform duration-200",s&&"rotate-180",e.disabled?"text-lyra-fg-disabled":"text-lyra-fg-secondary"),strokeWidth:1.5,"aria-hidden":"true"})]}),t.jsx(se,{open:s,children:t.jsx("div",{className:"p-4",children:e.content})}),t.jsx("div",{className:"border-b border-lyra-border-subtle"})]},e.id)})})});n.displayName="Accordion";n.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:"Accordion items"},type:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:`"single" — only one item open at a time (default)
"multiple" — multiple items can be open simultaneously`,defaultValue:{value:'"single"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled open id (single mode)"},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Controlled open ids (multiple mode)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default open id (single, uncontrolled)"},defaultValues:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default open ids (multiple, uncontrolled)"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when open item changes (single mode)"},onValuesChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Called when open items change (multiple mode)"},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element"}}};const fe={title:"Atoms/Accordion",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a=t.jsx(ae,{className:"h-5 w-5",strokeWidth:1.5}),r=[{id:"1",title:"Section Title",icon:a,content:t.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1. This area expands when the item is opened."})},{id:"2",title:"Section Title",icon:a,content:t.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2. Any React node can go here."})},{id:"3",title:"Section Title",icon:a,content:t.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 3."})}],d={render:()=>t.jsx(n,{items:r})},c={name:"All States",render:()=>t.jsx(n,{type:"multiple",defaultValues:["2"],items:[{...r[0]},{...r[1]},{id:"disabled",title:"Section Title",icon:a,disabled:!0,content:null}]})},m={name:"Single — One Open",render:()=>t.jsx(n,{items:r,defaultValue:"1"})},p={name:"Multiple — Many Open",render:()=>t.jsx(n,{type:"multiple",defaultValues:["1","3"],items:r})},u={name:"With Disabled Item",render:()=>t.jsx(n,{items:[r[0],{...r[1],disabled:!0},r[2]],defaultValue:"1"})},f={name:"No Icons",render:()=>t.jsx(n,{items:r.map(({icon:h,...l})=>l),defaultValue:"2"})},y={name:"With Subhead",render:()=>t.jsx(n,{items:[{id:"1",title:"Section Title",subhead:"Supporting description text",icon:a,content:t.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1."})},{id:"2",title:"Section Title",subhead:"Supporting description text",icon:a,content:t.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2."})},{id:"3",title:"Section Title",subhead:"Supporting description text",icon:a,disabled:!0,content:null}]})};var I,T,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Accordion items={sampleItems} />
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var V,C,O;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "All States",
  render: () => <Accordion type="multiple" defaultValues={["2"]} items={[{
    ...sampleItems[0]
  }, {
    ...sampleItems[1]
  }, {
    id: "disabled",
    title: "Section Title",
    icon,
    disabled: true,
    content: null
  }]} />
}`,...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var W,q,D;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Single — One Open",
  render: () => <Accordion items={sampleItems} defaultValue="1" />
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var M,k,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Multiple — Many Open",
  render: () => <Accordion type="multiple" defaultValues={["1", "3"]} items={sampleItems} />
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var E,R,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "With Disabled Item",
  render: () => <Accordion items={[sampleItems[0], {
    ...sampleItems[1],
    disabled: true
  }, sampleItems[2]]} defaultValue="1" />
}`,...(B=(R=u.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var P,z,F;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "No Icons",
  render: () => <Accordion items={sampleItems.map(({
    icon: _icon,
    ...item
  }) => item)} defaultValue="2" />
}`,...(F=(z=f.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "With Subhead",
  render: () => <Accordion items={[{
    id: "1",
    title: "Section Title",
    subhead: "Supporting description text",
    icon,
    content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 1.</p>
  }, {
    id: "2",
    title: "Section Title",
    subhead: "Supporting description text",
    icon,
    content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 2.</p>
  }, {
    id: "3",
    title: "Section Title",
    subhead: "Supporting description text",
    icon,
    disabled: true,
    content: null
  }]} />
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ye=["Default","AllStates","SingleOpen","MultipleOpen","WithDisabledItem","NoIcons","WithSubhead"];export{c as AllStates,d as Default,p as MultipleOpen,f as NoIcons,m as SingleOpen,u as WithDisabledItem,y as WithSubhead,ye as __namedExportsOrder,fe as default};
