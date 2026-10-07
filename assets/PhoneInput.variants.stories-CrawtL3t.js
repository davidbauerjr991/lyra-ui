import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DhMLlvMY.js";import{P as r}from"./phone-input-Brv_jdcT.js";import{C,S as l,a as x,E as S}from"./PhoneInput.shared-LpFtG9Xd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./label-amkU61wz.js";import"./tooltip-DKTByY8R.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./x-CzxgOx-T.js";const J={title:"Custom Primitives/PhoneInput/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},a={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{label:"Default",defaultCountry:"us"}),e.jsx(r,{label:"With value",value:l,onChange:()=>{}}),e.jsx(r,{label:"Required",defaultCountry:"us",required:!0}),e.jsx(r,{label:"Disabled",defaultCountry:"us",disabled:!0,value:x}),e.jsx(r,{label:"Read Only",defaultCountry:"gb",readonly:!0,value:l}),e.jsx(r,{label:"Error",defaultCountry:"us",value:{countryCode:"us",number:"55"},onChange:()=>{},forceShowError:!0})]})},o={name:"Different default countries",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-80",children:C.map(t=>e.jsx(r,{label:t.label,defaultCountry:t.code},t.code))})},n={name:"Without country selector",render:()=>{const[t,h]=b.useState(S);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{label:"Phone number",hideCountrySelector:!0,value:t,onChange:h}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:"No flag or dial-code picker — use when the app only ever needs a single, known country's numbers (the mask/format still comes from `defaultCountry`)."})]})}};var s,u,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-80">
      <PhoneInput label="Default" defaultCountry="us" />
      <PhoneInput label="With value" value={SAMPLE_GB} onChange={() => {}} />
      <PhoneInput label="Required" defaultCountry="us" required />
      <PhoneInput label="Disabled" defaultCountry="us" disabled value={SAMPLE_US} />
      <PhoneInput label="Read Only" defaultCountry="gb" readonly value={SAMPLE_GB} />
      <PhoneInput label="Error" defaultCountry="us" value={{
      countryCode: "us",
      number: "55"
    }} onChange={() => {}} forceShowError />
    </div>
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,i,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Different default countries",
  render: () => <div className="flex flex-col gap-4 w-80">
      {COUNTRIES.map(c => <PhoneInput key={c.code} label={c.label} defaultCountry={c.code} />)}
    </div>
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,f,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Without country selector",
  render: () => {
    const [value, setValue] = useState<PhoneValue>(EMPTY_US);
    return <div className="w-80">
        <PhoneInput label="Phone number" hideCountrySelector value={value} onChange={setValue} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
          No flag or dial-code picker — use when the app only ever needs a single, known
          country's numbers (the mask/format still comes from \`defaultCountry\`).
        </p>
      </div>;
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const K=["States","DefaultCountries","WithoutCountrySelector"];export{o as DefaultCountries,a as States,n as WithoutCountrySelector,K as __namedExportsOrder,J as default};
