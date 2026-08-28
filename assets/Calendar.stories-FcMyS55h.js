import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CXOcBcs0.js";import{C as s}from"./calendar-CixyQgsK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tooltip-C4O8ztA7.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./chevron-left-C6DiQdwt.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-right-DZKRY3zX.js";const B={title:"Headless Primitives/Calendar",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},c={name:"Single Date",render:()=>{const[e,n]=d.useState(new Date);return a.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:[a.jsx(s,{mode:"single",selected:e,onSelect:n}),a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-3 text-center",children:e?e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):"No date selected"})]})}},m={name:"Range Selection",render:()=>{const[e,n]=d.useState({from:new Date,to:(()=>{const t=new Date;return t.setDate(t.getDate()+6),t})()});return a.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:[a.jsx(s,{mode:"range",selected:e,onSelect:n}),a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-3 text-center",children:e!=null&&e.from&&(e!=null&&e.to)?`${e.from.toLocaleDateString()} – ${e.to.toLocaleDateString()}`:e!=null&&e.from?`From ${e.from.toLocaleDateString()}`:"Select a range"})]})}},g={name:"Week Selection",render:()=>{const[e,n]=d.useState(()=>{const r=new Date;return r.setDate(r.getDate()-r.getDay()),r}),t=r=>{const l=new Date(r);return l.setDate(r.getDate()+6),l};return a.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:[a.jsx(s,{mode:"week",selected:e,onSelect:n}),a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-3 text-center",children:e?`Week of ${e.toLocaleDateString()} – ${t(e).toLocaleDateString()}`:"Select a week"})]})}},i={name:"All Variants",render:()=>{const[e,n]=d.useState(new Date),[t,r]=d.useState(),[l,L]=d.useState(()=>{const o=new Date;return o.setDate(o.getDate()-o.getDay()),o});return a.jsxs("div",{className:"flex flex-wrap gap-6",children:[a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-default",children:"Single"}),a.jsx("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:a.jsx(s,{mode:"single",selected:e,onSelect:n})})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-default",children:"Range"}),a.jsx("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:a.jsx(s,{mode:"range",selected:t,onSelect:r})})]}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("span",{className:"lyra-label text-lyra-fg-default",children:"Week"}),a.jsx("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:a.jsx(s,{mode:"week",selected:l,onSelect:L})})]})]})}},b={name:"With Disabled Dates",render:()=>{const[e,n]=d.useState(),t=new Date;return new Date(t).setDate(t.getDate()-1),a.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]",children:[a.jsx(s,{mode:"single",selected:e,onSelect:n,disabled:{before:t}}),a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2 text-center",children:"Past dates are disabled"})]})}};var y,u,p;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Single Date",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-3 text-center">
          {date ? date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }) : "No date selected"}
        </p>
      </div>;
  }
}`,...(p=(u=c.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,D,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Range Selection",
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: (() => {
        const d = new Date();
        d.setDate(d.getDate() + 6);
        return d;
      })()
    });
    return <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
        <Calendar mode="range" selected={range} onSelect={setRange} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-3 text-center">
          {range?.from && range?.to ? \`\${range.from.toLocaleDateString()} – \${range.to.toLocaleDateString()}\` : range?.from ? \`From \${range.from.toLocaleDateString()}\` : "Select a range"}
        </p>
      </div>;
  }
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,w,h;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Week Selection",
  render: () => {
    const [weekStart, setWeekStart] = useState<Date | undefined>(() => {
      const today = new Date();
      today.setDate(today.getDate() - today.getDay());
      return today;
    });
    const getWeekEnd = (start: Date) => {
      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return end;
    };
    return <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
        <Calendar mode="week" selected={weekStart} onSelect={setWeekStart} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-3 text-center">
          {weekStart ? \`Week of \${weekStart.toLocaleDateString()} – \${getWeekEnd(weekStart).toLocaleDateString()}\` : "Select a week"}
        </p>
      </div>;
  }
}`,...(h=(w=g.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var N,k,v;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => {
    const [single, setSingle] = useState<Date | undefined>(new Date());
    const [range, setRange] = useState<DateRange | undefined>();
    const [week, setWeek] = useState<Date | undefined>(() => {
      const d = new Date();
      d.setDate(d.getDate() - d.getDay());
      return d;
    });
    return <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-2">
          <span className="lyra-label text-lyra-fg-default">Single</span>
          <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
            <Calendar mode="single" selected={single} onSelect={setSingle} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="lyra-label text-lyra-fg-default">Range</span>
          <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
            <Calendar mode="range" selected={range} onSelect={setRange} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="lyra-label text-lyra-fg-default">Week</span>
          <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
            <Calendar mode="week" selected={week} onSelect={setWeek} />
          </div>
        </div>
      </div>;
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var j,W,R;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "With Disabled Dates",
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-md p-4 w-[280px]">
        <Calendar mode="single" selected={date} onSelect={setDate} disabled={{
        before: today
      }} />
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2 text-center">
          Past dates are disabled
        </p>
      </div>;
  }
}`,...(R=(W=b.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const G=["SingleDate","RangeSelection","WeekSelection","AllVariants","WithDisabledDates"];export{i as AllVariants,m as RangeSelection,c as SingleDate,g as WeekSelection,b as WithDisabledDates,G as __namedExportsOrder,B as default};
