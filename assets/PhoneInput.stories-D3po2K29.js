import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-CXOcBcs0.js";import{P as n}from"./phone-input-B_QcdhnY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-5D2bSGQf.js";import"./tooltip-C4O8ztA7.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-D1UBFIOe.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-C6_pXXD0.js";import"./label-KUce3kYB.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./x-N8aIqrq2.js";const Y={title:"Custom Primitives/PhoneInput",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}}},a={name:"Default",args:{size:"md"},render:l=>{const[r,N]=S.useState({countryCode:"us",number:""});return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{label:"Phone number",value:r,onChange:N,size:l.size}),r.number&&e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Full number: ",r.number?`+${r.number}`:"—"]})]})}},t={name:"With value",render:()=>e.jsx("div",{className:"w-80",children:e.jsx(n,{label:"Phone number",value:{countryCode:"gb",number:"7911 123456"},onChange:()=>{}})})},o={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(n,{label:"Default",defaultCountry:"us"}),e.jsx(n,{label:"Required",defaultCountry:"us",required:!0}),e.jsx(n,{label:"Disabled",defaultCountry:"us",disabled:!0,value:{countryCode:"us",number:"555 0100"}}),e.jsx(n,{label:"Read Only",defaultCountry:"gb",readonly:!0,value:{countryCode:"gb",number:"7911 123456"}})]})},s={name:"Different default countries",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(n,{label:"United States",defaultCountry:"us"}),e.jsx(n,{label:"United Kingdom",defaultCountry:"gb"}),e.jsx(n,{label:"Japan",defaultCountry:"jp"}),e.jsx(n,{label:"UAE",defaultCountry:"ae"})]})},u={name:"Without country selector",render:()=>{const[l,r]=S.useState({countryCode:"us",number:""});return e.jsxs("div",{className:"w-80",children:[e.jsx(n,{label:"Phone number",hideCountrySelector:!0,value:l,onChange:r}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:"No flag or dial-code picker — use when the app only ever needs a single, known country's numbers (the mask/format still comes from `defaultCountry`)."})]})}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "md"
  },
  render: args => {
    const [value, setValue] = useState<PhoneValue>({
      countryCode: "us",
      number: ""
    });
    return <div className="w-80">
        <PhoneInput label="Phone number" value={value} onChange={setValue} size={args.size} />
        {value.number && <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
            Full number: {value.number ? \`+\${value.number}\` : "—"}
          </p>}
      </div>;
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,p,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,g,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Different default countries",
  render: () => <div className="flex flex-col gap-4 w-80">
      <PhoneInput label="United States" defaultCountry="us" />
      <PhoneInput label="United Kingdom" defaultCountry="gb" />
      <PhoneInput label="Japan" defaultCountry="jp" />
      <PhoneInput label="UAE" defaultCountry="ae" />
    </div>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,P,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const Z=["Default","WithValue","States","DefaultCountries","WithoutCountrySelector"];export{a as Default,s as DefaultCountries,o as States,t as WithValue,u as WithoutCountrySelector,Z as __namedExportsOrder,Y as default};
