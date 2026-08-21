import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CXOcBcs0.js";import{R as re,A as ne,P as ae,C as ue}from"./index-C2HVhtBy.js";import{c as se}from"./utils-BLSKlp9E.js";import{L as ie}from"./label-DjGdKyh0.js";import{N as L}from"./number-field-B1PthiB6.js";import{C as oe}from"./clock-xCVatdV-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-C1YDQLuO.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./error-icon-solid-C6_pXXD0.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";function W(e){return String(e).padStart(2,"0")}function P(e,t,n){return`${W(e)}:${W(t)} ${n}`}function ce(e){const t=e.match(/^(\d{1,2}):(\d{2})\s*(AM|PM|am|pm)$/i);if(!t)return;let n=parseInt(t[1],10);const i=parseInt(t[2],10),m=t[3].toUpperCase();if(!(n<1||n>12||i<0||i>59))return{hour:n,minute:i,ampm:m}}function me(e,t){let n=e%12;return t==="PM"&&(n+=12),n}function H({hour:e,minute:t,ampm:n,onHourChange:i,onMinuteChange:m,onAmpmChange:v}){return r.jsxs("div",{className:"flex items-center gap-1.5 p-3",children:[r.jsx(L,{value:e,min:1,max:12,wrap:!0,padWidth:2,onChange:i,className:"flex-1 min-w-0","aria-label":"Hour"}),r.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary flex-shrink-0",children:":"}),r.jsx(L,{value:t,min:0,max:59,wrap:!0,padWidth:2,onChange:m,className:"flex-1 min-w-0","aria-label":"Minute"}),r.jsx("button",{type:"button",onClick:()=>v(n==="AM"?"PM":"AM"),className:"flex-shrink-0 w-12 h-9 rounded-lyra-sm lyra-label font-medium transition-colors bg-lyra-bg-primary text-lyra-fg-on-primary hover:bg-lyra-state-hover-primary active:bg-lyra-state-pressed-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus","aria-label":`Toggle AM/PM, currently ${n}`,"aria-pressed":n==="PM",children:n})]})}const le=(e,t,n)=>se("relative flex w-full items-center rounded-lyra-sm border lyra-body-md transition-colors cursor-text",n==="sm"?"h-8":"h-9","bg-lyra-bg-field text-lyra-fg-default","border-lyra-border-strong hover:border-lyra-state-border-hover-neutral","focus-within:border-lyra-border-active","[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-offset-2","[html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-2 [html:not([data-lyra-input-modality=keyboard])_&:focus-within]:ring-lyra-border-active/20",e&&"bg-lyra-bg-disabled border-transparent cursor-not-allowed pointer-events-none",t&&"bg-lyra-bg-surface-canvas cursor-default pointer-events-none");function de({children:e}){return r.jsx(ue,{side:"bottom",sideOffset:6,align:"start",avoidCollisions:!0,collisionPadding:4,className:se("z-50 w-[260px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg","animate-in fade-in-0 slide-in-from-top-2 duration-150","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"),children:e})}const u=e=>{if(!e)return{hour:12,minute:0,ampm:"PM"};let t=e.getHours();const n=t>=12?"PM":"AM";return t=t%12||12,{hour:t,minute:e.getMinutes(),ampm:n}},g=o.forwardRef(({value:e,onChange:t,placeholder:n="HH:MM AM",disabled:i,label:m,labelHelpText:v,required:z,readonly:d,className:A,id:V,size:_="md"},I)=>{const O=o.useId(),M=V??O,w=o.useRef(null),[N,S]=o.useState(!1),[x,h]=o.useState(u(e)),[y,b]=o.useState(e?P(u(e).hour,u(e).minute,u(e).ampm):"");o.useEffect(()=>{if(document.activeElement!==w.current){const a=u(e);h(a),b(e?P(a.hour,a.minute,a.ampm):"")}},[e]);const f=a=>{const l=e??new Date,c=new Date(l.getFullYear(),l.getMonth(),l.getDate(),me(a.hour,a.ampm),a.minute);b(P(a.hour,a.minute,a.ampm)),t==null||t(c)},T=a=>{const l={...x,...a};h(l),f(l)},k=a=>{const l=a.target.value;if(b(l),l===""){t==null||t(void 0);return}const c=ce(l);c&&(h(c),f(c))};return r.jsxs("div",{ref:I,className:A,children:[m&&r.jsx(ie,{label:m,labelFor:M,labelHelpText:v,required:z,disabled:i,readonly:d,className:"mb-1.5"}),r.jsxs(re,{open:!i&&!d&&N,onOpenChange:S,children:[r.jsx(ne,{asChild:!0,children:r.jsxs("div",{className:le(i,d,_),onClick:()=>!i&&!d&&S(!0),children:[r.jsx("input",{ref:w,id:M,type:"text",value:y,onChange:k,placeholder:n,disabled:i,readOnly:d,className:"flex-1 bg-transparent outline-none pl-3 pr-1 truncate placeholder:text-lyra-fg-disabled",role:"combobox","aria-expanded":N,"aria-haspopup":"dialog","aria-label":m??"Time",autoComplete:"off"}),r.jsx("span",{className:"pr-3 flex items-center text-lyra-fg-secondary flex-shrink-0",children:r.jsx(oe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})]})}),r.jsx(ae,{children:r.jsx(de,{children:r.jsx(H,{hour:x.hour,minute:x.minute,ampm:x.ampm,onHourChange:a=>T({hour:a}),onMinuteChange:a=>T({minute:a}),onAmpmChange:a=>T({ampm:a})})})})]})]})});g.displayName="TimePicker";function F(e){if(!e)return"";const t=u(e.from),n=u(e.to),i=e.from?P(t.hour,t.minute,t.ampm):"",m=e.to?P(n.hour,n.minute,n.ampm):"";return i&&m?`${i} – ${m}`:i}const E=o.forwardRef(({value:e,onChange:t,placeholder:n="HH:MM AM – HH:MM AM",disabled:i,label:m,labelHelpText:v,required:z,readonly:d,className:A,id:V,size:_="md"},I)=>{const O=o.useId(),M=V??O,w=o.useRef(null),[N,S]=o.useState(!1),[x,h]=o.useState(F(e)),[y,b]=o.useState(u(e==null?void 0:e.from)),[f,T]=o.useState(u(e==null?void 0:e.to));o.useEffect(()=>{document.activeElement!==w.current&&(b(u(e==null?void 0:e.from)),T(u(e==null?void 0:e.to)),h(F(e)))},[e]);const k=(s,p)=>{const j=p??new Date;return new Date(j.getFullYear(),j.getMonth(),j.getDate(),me(s.hour,s.ampm),s.minute)},a=(s,p)=>{const j={from:k(s,e==null?void 0:e.from),to:k(p,e==null?void 0:e.to)};h(F(j)),t==null||t(j)},l=s=>{const p={...y,...s};b(p),a(p,f)},c=s=>{const p={...f,...s};T(p),a(y,p)};return r.jsxs("div",{ref:I,className:A,children:[m&&r.jsx(ie,{label:m,labelFor:M,labelHelpText:v,required:z,disabled:i,readonly:d,className:"mb-1.5"}),r.jsxs(re,{open:!i&&!d&&N,onOpenChange:S,children:[r.jsx(ne,{asChild:!0,children:r.jsxs("div",{className:le(i,d,_),onClick:()=>!i&&!d&&S(!0),children:[r.jsx("input",{ref:w,id:M,type:"text",value:x,onChange:s=>h(s.target.value),placeholder:n,disabled:i,readOnly:d,className:"flex-1 bg-transparent outline-none pl-3 pr-1 truncate placeholder:text-lyra-fg-disabled",role:"combobox","aria-expanded":N,"aria-haspopup":"dialog","aria-label":m??"Time range",autoComplete:"off"}),r.jsx("span",{className:"pr-3 flex items-center text-lyra-fg-secondary flex-shrink-0",children:r.jsx(oe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})]})}),r.jsx(ae,{children:r.jsxs(de,{children:[r.jsx("div",{className:"px-3 pt-3 pb-1",children:r.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Start time"})}),r.jsx(H,{hour:y.hour,minute:y.minute,ampm:y.ampm,onHourChange:s=>l({hour:s}),onMinuteChange:s=>l({minute:s}),onAmpmChange:s=>l({ampm:s})}),r.jsx("div",{className:"border-t border-lyra-border-subtle mx-3"}),r.jsx("div",{className:"px-3 pt-3 pb-1",children:r.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"End time"})}),r.jsx(H,{hour:f.hour,minute:f.minute,ampm:f.ampm,onHourChange:s=>c({hour:s}),onMinuteChange:s=>c({minute:s}),onAmpmChange:s=>c({ampm:s})})]})})]})]})});E.displayName="TimeRangePicker";g.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"Date"},description:"Controlled value — 24h Date object (only time portion is used)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM AM"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelHelpText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:'Field height. "md" (36px, default) or "sm" (32px) for dense contexts.',defaultValue:{value:'"md"',computed:!1}}}};E.__docgenInfo={description:"",methods:[],displayName:"TimeRangePicker",props:{value:{required:!1,tsType:{name:"TimeRangeValue"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: TimeRangeValue | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"TimeRangeValue | undefined",elements:[{name:"TimeRangeValue"},{name:"undefined"}]},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"HH:MM AM – HH:MM AM"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelHelpText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'}]},description:'Field height. "md" (36px, default) or "sm" (32px) for dense contexts.',defaultValue:{value:'"md"',computed:!1}}}};H.__docgenInfo={description:"",methods:[],displayName:"TimeSelector",props:{hour:{required:!0,tsType:{name:"number"},description:""},minute:{required:!0,tsType:{name:"number"},description:""},ampm:{required:!0,tsType:{name:"union",raw:'"AM" | "PM"',elements:[{name:"literal",value:'"AM"'},{name:"literal",value:'"PM"'}]},description:""},onHourChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(h: number) => void",signature:{arguments:[{type:{name:"number"},name:"h"}],return:{name:"void"}}},description:""},onMinuteChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(m: number) => void",signature:{arguments:[{type:{name:"number"},name:"m"}],return:{name:"void"}}},description:""},onAmpmChange:{required:!0,tsType:{name:"signature",type:"function",raw:'(a: "AM" | "PM") => void',signature:{arguments:[{type:{name:"union",raw:'"AM" | "PM"',elements:[{name:"literal",value:'"AM"'},{name:"literal",value:'"PM"'}]},name:"a"}],return:{name:"void"}}},description:""}}};const ze={title:"Custom Primitives/TimePicker",tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},q={name:"Time Picker",argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}},args:{size:"md"},render:e=>{const[t,n]=o.useState();return r.jsxs("div",{className:"w-56",children:[r.jsx(g,{label:"Time",value:t,onChange:n,size:e.size}),t&&r.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Selected: ",t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}},C={name:"With default value",render:()=>{const e=new Date;e.setHours(9,30,0,0);const[t,n]=o.useState(e);return r.jsx("div",{className:"w-56",children:r.jsx(g,{label:"Meeting time",value:t,onChange:n})})}},D={name:"States",render:()=>r.jsxs("div",{className:"flex flex-col gap-4 w-56",children:[r.jsx(g,{label:"Default"}),r.jsx(g,{label:"Disabled",disabled:!0}),r.jsx(g,{label:"Read Only",readonly:!0,value:(()=>{const e=new Date;return e.setHours(14,30),e})()}),r.jsx(g,{label:"Required",required:!0})]})},R={name:"Time Range Picker",argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}},args:{size:"md"},render:e=>{const[t,n]=o.useState();return r.jsxs("div",{className:"w-72",children:[r.jsx(E,{label:"Time range",value:t,onChange:n,size:e.size}),(t==null?void 0:t.from)&&(t==null?void 0:t.to)&&r.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:[t.from.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," – ",t.to.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}};var $,Y,U;q.parameters={...q.parameters,docs:{...($=q.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Time Picker",
  argTypes: {
    /** "sm" (32px) is for dense contexts vs. the "md" (36px) default every
     *  other field in the library uses. */
    size: {
      control: "select",
      options: ["sm", "md"],
      name: "Size"
    }
  },
  args: {
    size: "md"
  },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <div className="w-56">
        <TimePicker label="Time" value={value} onChange={setValue} size={args.size} />
        {value && <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
            Selected: {value.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })}
          </p>}
      </div>;
  }
}`,...(U=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var B,G,J;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "With default value",
  render: () => {
    const defaultTime = new Date();
    defaultTime.setHours(9, 30, 0, 0);
    const [value, setValue] = useState<Date | undefined>(defaultTime);
    return <div className="w-56">
        <TimePicker label="Meeting time" value={value} onChange={setValue} />
      </div>;
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-4 w-56">
      <TimePicker label="Default" />
      <TimePicker label="Disabled" disabled />
      <TimePicker label="Read Only" readonly value={(() => {
      const d = new Date();
      d.setHours(14, 30);
      return d;
    })()} />
      <TimePicker label="Required" required />
    </div>
}`,...(X=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Time Range Picker",
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md"],
      name: "Size"
    }
  },
  args: {
    size: "md"
  },
  render: args => {
    const [value, setValue] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    return <div className="w-72">
        <TimeRangePicker label="Time range" value={value} onChange={setValue} size={args.size} />
        {value?.from && value?.to && <p className="lyra-body-sm text-lyra-fg-secondary mt-2">
            {value.from.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })}
            {" – "}
            {value.to.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })}
          </p>}
      </div>;
  }
}`,...(te=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ae=["Default","WithDefaultValue","States","Range"];export{q as Default,R as Range,D as States,C as WithDefaultValue,Ae as __namedExportsOrder,ze as default};
