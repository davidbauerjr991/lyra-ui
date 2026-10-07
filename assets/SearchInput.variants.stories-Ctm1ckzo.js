import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DhMLlvMY.js";import{S as a}from"./search-input-DbdcjRuV.js";import{S as d}from"./SearchInput.shared-CtoUZUpq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./clear-button-Cb_QiePp.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";const O={title:"Custom Primitives/SearchInput/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={name:"States",render:()=>{const[r,s]=l.useState(""),[f,j]=l.useState(""),[N,k]=l.useState(""),[C,I]=l.useState(d);return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 items-start max-w-[600px]",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),e.jsx(a,{placeholder:"Search",value:r,onValueChange:s,"aria-label":"Search default"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover to see)"}),e.jsx(a,{placeholder:"Search",value:f,onValueChange:j,"aria-label":"Search hover"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Focused (click to see)"}),e.jsx(a,{placeholder:"Search",value:N,onValueChange:k,"aria-label":"Search focused"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"With value + clear"}),e.jsx(a,{placeholder:"Search",value:C,onValueChange:I,"aria-label":"Search with value"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Disabled"}),e.jsx(a,{placeholder:"Search",value:"",disabled:!0,"aria-label":"Search disabled"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Read only"}),e.jsx(a,{placeholder:"Search",value:d,readonly:!0,"aria-label":"Search read only"})]})]})})}},t={name:"With Submit Button",render:()=>{const[r,s]=l.useState(d);return e.jsx(a,{placeholder:"Search",value:r,onValueChange:s,onSubmit:()=>{},className:"w-[260px]"})}},c={name:"Full Width",render:()=>{const[r,s]=l.useState("");return e.jsx(a,{placeholder:"Search",value:r,onValueChange:s})}},o={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-[260px]",children:[e.jsx(a,{placeholder:"Small (32px)",size:"sm","aria-label":"Search small"}),e.jsx(a,{placeholder:"Medium (36px, default)",size:"md","aria-label":"Search medium"})]})};var i,u,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "States",
  render: () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState(SAMPLE_QUERY);
    return <div className="space-y-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 items-start max-w-[600px]">
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Default
            </span>
            <SearchInput placeholder="Search" value={val1} onValueChange={setVal1} aria-label="Search default" />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Hover (hover to see)
            </span>
            <SearchInput placeholder="Search" value={val2} onValueChange={setVal2} aria-label="Search hover" />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Focused (click to see)
            </span>
            <SearchInput placeholder="Search" value={val3} onValueChange={setVal3} aria-label="Search focused" />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              With value + clear
            </span>
            <SearchInput placeholder="Search" value={val4} onValueChange={setVal4} aria-label="Search with value" />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Disabled
            </span>
            <SearchInput placeholder="Search" value="" disabled aria-label="Search disabled" />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Read only
            </span>
            <SearchInput placeholder="Search" value={SAMPLE_QUERY} readonly aria-label="Search read only" />
          </div>
        </div>
      </div>;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,p,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With Submit Button",
  render: () => {
    const [value, setValue] = useState(SAMPLE_QUERY);
    return <SearchInput placeholder="Search" value={value} onValueChange={setValue} onSubmit={() => {}} className="w-[260px]" />;
  }
}`,...(S=(p=t.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var v,b,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Full Width",
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput placeholder="Search" value={value} onValueChange={setValue} />;
  }
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,g,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="flex flex-col gap-4 w-[260px]">
      <SearchInput placeholder="Small (32px)" size="sm" aria-label="Search small" />
      <SearchInput placeholder="Medium (36px, default)" size="md" aria-label="Search medium" />
    </div>
}`,...(V=(g=o.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};const q=["States","WithSubmitButton","FullWidth","Sizes"];export{c as FullWidth,o as Sizes,n as States,t as WithSubmitButton,q as __namedExportsOrder,O as default};
