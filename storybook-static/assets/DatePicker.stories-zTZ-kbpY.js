import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-CXOcBcs0.js";import{R as le,A as ce,P as ue,C as be}from"./index-CF9u0XqS.js";import{c as w}from"./utils-BLSKlp9E.js";import{L as me}from"./label-98nUxQ8o.js";import{C as pe}from"./calendar-DuPMOqu8.js";import{C as fe}from"./calendar-BHEDU7EC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./Combination-PupZwBmU.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-right-DZKRY3zX.js";const E="MM/DD/YYYY";function x(e){const t=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}/${n}/${e.getFullYear()}`}function h(e){const t=e.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);if(!t)return;const[,n,r,o]=t.map(Number);if(n<1||n>12||r<1||r>31)return;const m=new Date(o,n-1,r);return isNaN(m.getTime())?void 0:m}function A(e){return e?e.from&&e.to?`${x(e.from)} – ${x(e.to)}`:e.from?x(e.from):"":""}function H(e){const t=e.split(/\s*[–-]\s*/);if(t.length===2){const r=h(t[0].trim()),o=h(t[1].trim());if(r&&o)return{from:r,to:o};if(r)return{from:r}}const n=h(e.trim());return n?{from:n}:void 0}const ge=w("relative flex h-9 w-full items-center rounded-lyra-sm border lyra-body-md transition-colors","bg-lyra-bg-field text-lyra-fg-default cursor-text","border-lyra-border-strong hover:border-lyra-state-border-hover-neutral","focus-within:border-lyra-border-active focus-within:ring-2 focus-within:ring-lyra-border-active/20","data-[disabled=true]:bg-lyra-bg-disabled data-[disabled=true]:border-transparent","data-[disabled=true]:text-lyra-fg-disabled data-[disabled=true]:cursor-not-allowed","data-[readonly=true]:bg-lyra-bg-surface-canvas data-[readonly=true]:cursor-default data-[readonly=true]:pointer-events-none"),De=w("flex-1 bg-transparent outline-none pl-3 pr-1 truncate h-full","placeholder:text-lyra-fg-disabled");function xe({children:e}){return a.jsx(be,{side:"bottom",sideOffset:6,align:"start",avoidCollisions:!0,collisionPadding:4,className:w("z-50 w-[288px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg p-3","animate-in fade-in-0 slide-in-from-top-2 duration-150","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"),children:e})}const u=s.forwardRef(({value:e,onChange:t,placeholder:n=E,disabled:r,label:o,labelHelpText:m,required:W,readonly:d,defaultMonth:V,className:C,id:M},I)=>{const O=s.useId(),b=M??O,g=s.useRef(null),[y,D]=s.useState(!1),[v,p]=s.useState(e?x(e):"");s.useEffect(()=>{document.activeElement!==g.current&&p(e?x(e):"")},[e]);const Y=i=>{const l=i.target.value;p(l);const c=h(l);c?t==null||t(c):l===""&&(t==null||t(void 0))},$=i=>{var l;p(i?x(i):""),t==null||t(i),D(!1),(l=g.current)==null||l.blur()},f=h(v)??e;return a.jsxs("div",{ref:I,className:C,children:[o&&a.jsx(me,{label:o,labelFor:b,labelHelpText:m,required:W,disabled:r,readonly:d,className:"block mb-1.5"}),a.jsxs(le,{open:!r&&!d&&y,onOpenChange:D,children:[a.jsx(ce,{asChild:!0,children:a.jsxs("div",{"data-disabled":r||void 0,"data-readonly":d||void 0,className:ge,onClick:()=>!r&&!d&&D(!0),children:[a.jsx("input",{ref:g,id:b,type:"text",value:v,onChange:Y,placeholder:n,disabled:r,readOnly:d,className:w(De,(r||d)&&"cursor-not-allowed"),role:"combobox","aria-expanded":y,"aria-haspopup":"dialog","aria-label":o??"Date",autoComplete:"off"}),a.jsx("span",{className:"pr-3 flex items-center text-lyra-fg-secondary flex-shrink-0",children:a.jsx(fe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})]})}),a.jsx(ue,{children:a.jsx(xe,{children:a.jsx(pe,{mode:"single",selected:f,onSelect:$,defaultMonth:V??f})})})]})]})});u.displayName="DatePicker";const R=s.forwardRef(({value:e,onChange:t,placeholder:n=`${E} – ${E}`,disabled:r,label:o,labelHelpText:m,required:W,readonly:d,defaultMonth:V,className:C,id:M},I)=>{const O=s.useId(),b=M??O,g=s.useRef(null),[y,D]=s.useState(!1),[v,p]=s.useState(A(e));s.useEffect(()=>{document.activeElement!==g.current&&p(A(e))},[e]);const Y=i=>{const l=i.target.value;if(p(l),l===""){t==null||t(void 0);return}const c=H(l);c!=null&&c.from&&(c!=null&&c.to)&&(t==null||t(c))},$=i=>{p(A(i)),t==null||t(i)},f=H(v)??e;return a.jsxs("div",{ref:I,className:C,children:[o&&a.jsx(me,{label:o,labelFor:b,labelHelpText:m,required:W,disabled:r,readonly:d,className:"block mb-1.5"}),a.jsxs(le,{open:!r&&!d&&y,onOpenChange:D,children:[a.jsx(ce,{asChild:!0,children:a.jsxs("div",{"data-disabled":r||void 0,"data-readonly":d||void 0,className:ge,onClick:()=>!r&&!d&&D(i=>!i),children:[a.jsx("input",{ref:g,id:b,type:"text",value:v,onChange:Y,placeholder:n,disabled:r,readOnly:d,className:w(De,(r||d)&&"cursor-not-allowed"),role:"combobox","aria-expanded":y,"aria-haspopup":"dialog","aria-label":o??"Date range",autoComplete:"off"}),a.jsx("span",{className:"pr-3 flex items-center text-lyra-fg-secondary flex-shrink-0",children:a.jsx(fe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})]})}),a.jsx(ue,{children:a.jsx(xe,{children:a.jsx(pe,{mode:"range",selected:f,onSelect:$,defaultMonth:V??(f==null?void 0:f.from)})})})]})]})});R.displayName="DateRangePicker";u.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"MM/DD/YYYY"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelHelpText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{value:{required:!1,tsType:{name:"DateRange"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | undefined",elements:[{name:"DateRange"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelHelpText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const Ie={title:"Atoms/DatePicker",component:u,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},j={render:()=>{const[e,t]=s.useState();return a.jsx("div",{className:"w-72",children:a.jsx(u,{label:"Date",value:e,onChange:t})})}},S={name:"With Value",render:()=>{const[e,t]=s.useState(new Date);return a.jsx("div",{className:"w-72",children:a.jsx(u,{label:"Date",labelHelpText:"Select any date.",value:e,onChange:t,required:!0})})}},k={render:()=>a.jsx("div",{className:"w-72",children:a.jsx(u,{label:"Date",value:new Date,disabled:!0})})},N={render:()=>a.jsx("div",{className:"w-72",children:a.jsx(u,{label:"Date",value:new Date,readonly:!0})})},T={name:"Date Range Picker",render:()=>{const[e,t]=s.useState();return a.jsx("div",{className:"w-96",children:a.jsx(R,{label:"Date Range",value:e,onChange:t})})}},q={name:"Date Range — With Value",render:()=>{const e=new Date,t=new Date(e);t.setDate(e.getDate()+7);const[n,r]=s.useState({from:e,to:t});return a.jsx("div",{className:"w-96",children:a.jsx(R,{label:"Date Range",labelHelpText:"Select start and end dates.",required:!0,value:n,onChange:r})})}},P={name:"All Variants",render:()=>{const[e,t]=s.useState(new Date),n=new Date,r=new Date(n);r.setDate(n.getDate()+7);const[o,m]=s.useState({from:n,to:r});return a.jsxs("div",{className:"flex flex-col gap-6 max-w-sm pb-[420px]",children:[a.jsx(u,{label:"Single date",value:e,onChange:t}),a.jsx(u,{label:"Disabled",value:new Date,disabled:!0}),a.jsx(u,{label:"Readonly",value:new Date,readonly:!0}),a.jsx(R,{label:"Date range",value:o,onChange:m})]})}};var _,F,L;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return <div className="w-72">
        <DatePicker label="Date" value={date} onChange={setDate} />
      </div>;
  }
}`,...(L=(F=j.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var z,B,G;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "With Value",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div className="w-72">
        <DatePicker label="Date" labelHelpText="Select any date." value={date} onChange={setDate} required />
      </div>;
  }
}`,...(G=(B=S.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <DatePicker label="Date" value={new Date()} disabled />
    </div>
}`,...(Q=(K=k.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <DatePicker label="Date" value={new Date()} readonly />
    </div>
}`,...(Z=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Date Range Picker",
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    return <div className="w-96">
        <DateRangePicker label="Date Range" value={range} onChange={setRange} />
      </div>;
  }
}`,...(te=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ne,se;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,de,ie;P.parameters={...P.parameters,docs:{...(oe=P.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};const Oe=["Default","WithValue","Disabled","Readonly","DateRange","DateRangeWithValue","AllVariants"];export{P as AllVariants,T as DateRange,q as DateRangeWithValue,j as Default,k as Disabled,N as Readonly,S as WithValue,Oe as __namedExportsOrder,Ie as default};
