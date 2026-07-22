import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-CXOcBcs0.js";import{D as n,a as g}from"./date-picker-CZ2dDDeK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DhUdNGNr.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-MFm5DvZf.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-nFez4jEO.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./calendar-DXmx7okA.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-right-DZKRY3zX.js";import"./calendar-BHEDU7EC.js";const se={title:"Custom Primitives/DatePicker",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={render:()=>{const[a,t]=r.useState();return e.jsx("div",{className:"w-72",children:e.jsx(n,{label:"Date",value:a,onChange:t})})}},d={name:"With Value",render:()=>{const[a,t]=r.useState(new Date);return e.jsx("div",{className:"w-72",children:e.jsx(n,{label:"Date",labelHelpText:"Select any date.",value:a,onChange:t,required:!0})})}},c={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{label:"Date",value:new Date,disabled:!0})})},i={render:()=>e.jsx("div",{className:"w-72",children:e.jsx(n,{label:"Date",value:new Date,readonly:!0})})},u={name:"Date Range Picker",render:()=>{const[a,t]=r.useState();return e.jsx("div",{className:"w-96",children:e.jsx(g,{label:"Date Range",value:a,onChange:t})})}},m={name:"Date Range — With Value",render:()=>{const a=new Date,t=new Date(a);t.setDate(a.getDate()+7);const[s,o]=r.useState({from:a,to:t});return e.jsx("div",{className:"w-96",children:e.jsx(g,{label:"Date Range",labelHelpText:"Select start and end dates.",required:!0,value:s,onChange:o})})}},D={name:"All Variants",render:()=>{const[a,t]=r.useState(new Date),s=new Date,o=new Date(s);o.setDate(s.getDate()+7);const[T,_]=r.useState({from:s,to:o});return e.jsxs("div",{className:"flex flex-col gap-6 max-w-sm pb-[420px]",children:[e.jsx(n,{label:"Single date",value:a,onChange:t}),e.jsx(n,{label:"Disabled",value:new Date,disabled:!0}),e.jsx(n,{label:"Readonly",value:new Date,readonly:!0}),e.jsx(g,{label:"Date range",value:T,onChange:_})]})}};var p,v,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <div className="w-72">
        <DatePicker label="Date" value={date} onChange={setDate} />
      </div>;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,w,R;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "With Value",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div className="w-72">
        <DatePicker label="Date" labelHelpText="Select any date." value={date} onChange={setDate} required />
      </div>;
  }
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var h,S,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <DatePicker label="Date" value={new Date()} disabled />
    </div>
}`,...(k=(S=c.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,f,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <DatePicker label="Date" value={new Date()} readonly />
    </div>
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var P,W,N;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Date Range Picker",
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    return <div className="w-96">
        <DateRangePicker label="Date Range" value={range} onChange={setRange} />
      </div>;
  }
}`,...(N=(W=u.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var C,V,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Date Range — With Value",
  render: () => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const [range, setRange] = useState<DateRange | undefined>({
      from: today,
      to: nextWeek
    });
    return <div className="w-96">
        <DateRangePicker label="Date Range" labelHelpText="Select start and end dates." required value={range} onChange={setRange} />
      </div>;
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var A,E,H;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const [range, setRange] = useState<DateRange | undefined>({
      from: today,
      to: nextWeek
    });
    return /* Extra bottom padding reserves space so the last calendar opens below */<div className="flex flex-col gap-6 max-w-sm pb-[420px]">
        <DatePicker label="Single date" value={date} onChange={setDate} />
        <DatePicker label="Disabled" value={new Date()} disabled />
        <DatePicker label="Readonly" value={new Date()} readonly />
        <DateRangePicker label="Date range" value={range} onChange={setRange} />
      </div>;
  }
}`,...(H=(E=D.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const oe=["Default","WithValue","Disabled","Readonly","DateRange","DateRangeWithValue","AllVariants"];export{D as AllVariants,u as DateRange,m as DateRangeWithValue,l as Default,c as Disabled,i as Readonly,d as WithValue,oe as __namedExportsOrder,se as default};
