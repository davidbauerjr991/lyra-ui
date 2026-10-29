import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DhMLlvMY.js";import{w as j,u}from"./index-C3Z0PGzo.js";import{P as a}from"./phone-input-CUXtUNnJ.js";import{C as U,S as i,a as N,E as w}from"./PhoneInput.shared-LpFtG9Xd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DjOBIGyd.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./utils-BLSKlp9E.js";import"./label-FhkANc9R.js";import"./tooltip-BnyLRSaS.js";import"./circle-help-DYnzmdO5.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./x-CzxgOx-T.js";const ne={title:"Custom Primitives/PhoneInput/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o={name:"States",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{label:"Default",defaultCountry:"us"}),e.jsx(a,{label:"With value",value:i,onChange:()=>{}}),e.jsx(a,{label:"Required",defaultCountry:"us",required:!0}),e.jsx(a,{label:"Disabled",defaultCountry:"us",disabled:!0,value:N}),e.jsx(a,{label:"Read Only",defaultCountry:"gb",readonly:!0,value:i}),e.jsx(a,{label:"Error",defaultCountry:"us",value:{countryCode:"us",number:"55"},onChange:()=>{},forceShowError:!0})]})},n={name:"Different default countries",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-80",children:U.map(t=>e.jsx(a,{label:t.label,defaultCountry:t.code},t.code))})},s={name:"Without country selector",render:()=>{const[t,r]=S.useState(w);return e.jsxs("div",{className:"w-80",children:[e.jsx(a,{label:"Phone number",hideCountrySelector:!0,value:t,onChange:r}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:"No flag or dial-code picker — use when the app only ever needs a single, known country's numbers (the mask/format still comes from `defaultCountry`)."})]})}};function d({label:t,hint:r}){const[P,E]=S.useState(w);return e.jsxs("div",{children:[e.jsx(a,{label:t,value:P,onChange:E}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:r})]})}const l={name:"Typed country code",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsx(d,{label:"Typed +44",hint:'Types "+44 20 7946 0958": the code is certain at "+44", so the UK is selected and the "+44" leaves the field The UK mask is 11 digits, so leaving the field adds the leading 0 (02079 460958).'}),e.jsx(d,{label:"Typed +1",hint:'Types "+1 555 010 0000": +1 is shared by the US and Canada, so the current country (US) is kept.'}),e.jsx(d,{label:"Try It Yourself",hint:'Try "+3" or "+35" (waits, no error), "+351" (Portugal), "+99" (Unknown country code), or paste "+447911123456" (UK, leading 0 added).'})]}),play:async({canvasElement:t})=>{const r=j(t);await u.type(r.getByLabelText("Typed +44"),"+44 20 7946 0958",{delay:60}),await u.type(r.getByLabelText("Typed +1"),"+1 555 010 0000",{delay:60})}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,h,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Different default countries",
  render: () => <div className="flex flex-col gap-4 w-80">
      {COUNTRIES.map(c => <PhoneInput key={c.code} label={c.label} defaultCountry={c.code} />)}
    </div>
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,g,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Typed country code",
  render: () => <div className="flex flex-col gap-6 w-80">
      <TypedCodeField label="Typed +44" hint='Types "+44 20 7946 0958": the code is certain at "+44", so the UK is selected and the "+44" leaves the field The UK mask is 11 digits, so leaving the field adds the leading 0 (02079 460958).' />
      <TypedCodeField label="Typed +1" hint='Types "+1 555 010 0000": +1 is shared by the US and Canada, so the current country (US) is kept.' />
      <TypedCodeField label="Try It Yourself" hint='Try "+3" or "+35" (waits, no error), "+351" (Portugal), "+99" (Unknown country code), or paste "+447911123456" (UK, leading 0 added).' />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Typed +44"), "+44 20 7946 0958", {
      delay: 60
    });
    await userEvent.type(canvas.getByLabelText("Typed +1"), "+1 555 010 0000", {
      delay: 60
    });
  }
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const se=["States","DefaultCountries","WithoutCountrySelector","TypedCountryCode"];export{n as DefaultCountries,o as States,l as TypedCountryCode,s as WithoutCountrySelector,se as __namedExportsOrder,ne as default};
