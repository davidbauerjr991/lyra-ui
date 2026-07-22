import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-CXOcBcs0.js";import{P as n}from"./phone-input-DUQ64qmK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DhUdNGNr.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-MFm5DvZf.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-Jj0G9Pna.js";import"./label-BSWV0633.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./menu-Cb0mW4XG.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-down-BRCsRsv-.js";import"./x-N8aIqrq2.js";const L={title:"Custom Primitives/PhoneInput",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"Default",render:()=>{const[r,l]=S.useState({countryCode:"us",number:""});return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{label:"Phone number",value:r,onChange:l}),r.number&&e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Full number: ",r.number?`+${r.number}`:"—"]})]})}},t={name:"With value",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(n,{label:"Phone number",value:{countryCode:"gb",number:"7911 123456"},onChange:()=>{}})})},o={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(n,{label:"Default",defaultCountry:"us"}),e.jsx(n,{label:"Required",defaultCountry:"us",required:!0}),e.jsx(n,{label:"Disabled",defaultCountry:"us",disabled:!0,value:{countryCode:"us",number:"555 0100"}}),e.jsx(n,{label:"Read Only",defaultCountry:"gb",readonly:!0,value:{countryCode:"gb",number:"7911 123456"}})]})},u={name:"Different default countries",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(n,{label:"United States",defaultCountry:"us"}),e.jsx(n,{label:"United Kingdom",defaultCountry:"gb"}),e.jsx(n,{label:"Japan",defaultCountry:"jp"}),e.jsx(n,{label:"UAE",defaultCountry:"ae"})]})},s={name:"Without country selector",render:()=>{const[r,l]=S.useState({countryCode:"us",number:""});return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{label:"Phone number",hideCountrySelector:!0,value:r,onChange:l}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:"No flag or dial-code picker — use when the app only ever needs a single, known country's numbers (the mask/format still comes from `defaultCountry`)."})]})}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Default",
  render: () => {
    const [value, setValue] = useState<PhoneValue>({
      countryCode: "us",
      number: ""
    });
    return <div className="w-80">
        <PhoneInput label="Phone number" value={value} onChange={setValue} />
        {value.number && <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
            Full number: {value.number ? \`+\${value.number}\` : "—"}
          </p>}
      </div>;
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,b;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "With value",
  render: () => <div className="w-80">
      <PhoneInput label="Phone number" value={{
      countryCode: "gb",
      number: "7911 123456"
    }} onChange={() => {}} />
    </div>
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,f,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <PhoneInput label="Default" defaultCountry="us" />
      <PhoneInput label="Required" defaultCountry="us" required />
      <PhoneInput label="Disabled" defaultCountry="us" disabled value={{
      countryCode: "us",
      number: "555 0100"
    }} />
      <PhoneInput label="Read Only" defaultCountry="gb" readonly value={{
      countryCode: "gb",
      number: "7911 123456"
    }} />
    </div>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,v,g;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Different default countries",
  render: () => <div className="flex flex-col gap-4 w-80">
      <PhoneInput label="United States" defaultCountry="us" />
      <PhoneInput label="United Kingdom" defaultCountry="gb" />
      <PhoneInput label="Japan" defaultCountry="jp" />
      <PhoneInput label="UAE" defaultCountry="ae" />
    </div>
}`,...(g=(v=u.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,P,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Without country selector",
  render: () => {
    const [value, setValue] = useState<PhoneValue>({
      countryCode: "us",
      number: ""
    });
    return <div className="w-80">
        <PhoneInput label="Phone number" hideCountrySelector value={value} onChange={setValue} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          No flag or dial-code picker — use when the app only ever needs a single, known
          country's numbers (the mask/format still comes from \`defaultCountry\`).
        </p>
      </div>;
  }
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const M=["Default","WithValue","States","DefaultCountries","WithoutCountrySelector"];export{a as Default,u as DefaultCountries,o as States,t as WithValue,s as WithoutCountrySelector,M as __namedExportsOrder,L as default};
