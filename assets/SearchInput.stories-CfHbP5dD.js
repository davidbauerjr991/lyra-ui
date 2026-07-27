import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CXOcBcs0.js";import{S as a}from"./search-input-BnaDnVK2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./clear-button-vlto_6tR.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./search-aUstRSOi.js";const q={title:"Custom Primitives/SearchInput",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"},size:{control:"select",options:["sm","md"],name:"Size"}}},t={args:{placeholder:"Search",size:"md"},render:s=>{const[r,d]=l.useState("");return e.jsx(a,{...s,value:r,onValueChange:d,className:"w-[260px]"})}},n={name:"With Value",render:()=>{const[s,r]=l.useState("Agent Desktop");return e.jsx(a,{placeholder:"Search",value:s,onValueChange:r,className:"w-[260px]"})}},c={name:"States",render:()=>{const[s,r]=l.useState(""),[d,f]=l.useState(""),[j,N]=l.useState(""),[k,C]=l.useState("Agent Desktop");return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 items-start max-w-[600px]",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),e.jsx(a,{placeholder:"Search",value:s,onValueChange:r,"aria-label":"Search default"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover to see)"}),e.jsx(a,{placeholder:"Search",value:d,onValueChange:f,"aria-label":"Search hover"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Focused (click to see)"}),e.jsx(a,{placeholder:"Search",value:j,onValueChange:N,"aria-label":"Search focused"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"With value + clear"}),e.jsx(a,{placeholder:"Search",value:k,onValueChange:C,"aria-label":"Search with value"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Disabled"}),e.jsx(a,{placeholder:"Search",value:"",disabled:!0,"aria-label":"Search disabled"})]})]})})}},o={name:"Full Width",render:()=>{const[s,r]=l.useState("");return e.jsx(a,{placeholder:"Search",value:s,onValueChange:r})}};var u,i,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    size: "md"
  },
  render: args => {
    const [value, setValue] = useState("");
    return <SearchInput {...args} value={value} onValueChange={setValue} className="w-[260px]" />;
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,m,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "With Value",
  render: () => {
    const [value, setValue] = useState("Agent Desktop");
    return <SearchInput placeholder="Search" value={value} onValueChange={setValue} className="w-[260px]" />;
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var S,b,g;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "States",
  render: () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState("Agent Desktop");
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
        </div>
      </div>;
  }
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,x,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Full Width",
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput placeholder="Search" value={value} onValueChange={setValue} />;
  }
}`,...(V=(x=o.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const B=["Default","WithValue","States","FullWidth"];export{t as Default,o as FullWidth,c as States,n as WithValue,B as __namedExportsOrder,q as default};
