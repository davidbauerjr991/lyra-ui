import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CXOcBcs0.js";import{T as r,a as b}from"./time-picker-Cfknfa0B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-5D2bSGQf.js";import"./tooltip-C4O8ztA7.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-D1UBFIOe.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-KUce3kYB.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./number-field-DqhhgVe8.js";import"./error-icon-solid-C6_pXXD0.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./clock-xCVatdV-.js";const I={title:"Custom Primitives/TimePicker",tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s={name:"Time Picker",argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}},args:{size:"md"},render:t=>{const[e,n]=m.useState();return a.jsxs("div",{className:"w-56",children:[a.jsx(r,{label:"Time",value:e,onChange:n,size:t.size}),e&&a.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Selected: ",e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}},i={name:"With default value",render:()=>{const t=new Date;t.setHours(9,30,0,0);const[e,n]=m.useState(t);return a.jsx("div",{className:"w-56",children:a.jsx(r,{label:"Meeting time",value:e,onChange:n})})}},o={name:"States",render:()=>a.jsxs("div",{className:"flex flex-col gap-4 w-56",children:[a.jsx(r,{label:"Default"}),a.jsx(r,{label:"Disabled",disabled:!0}),a.jsx(r,{label:"Read Only",readonly:!0,value:(()=>{const t=new Date;return t.setHours(14,30),t})()}),a.jsx(r,{label:"Required",required:!0})]})},l={name:"Time Range Picker",argTypes:{size:{control:"select",options:["sm","md"],name:"Size"}},args:{size:"md"},render:t=>{const[e,n]=m.useState();return a.jsxs("div",{className:"w-72",children:[a.jsx(b,{label:"Time range",value:e,onChange:n,size:t.size}),(e==null?void 0:e.from)&&(e==null?void 0:e.to)&&a.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:[e.from.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," – ",e.to.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})}};var d,u,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,g,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With default value",
  render: () => {
    const defaultTime = new Date();
    defaultTime.setHours(9, 30, 0, 0);
    const [value, setValue] = useState<Date | undefined>(defaultTime);
    return <div className="w-56">
        <TimePicker label="Meeting time" value={value} onChange={setValue} />
      </div>;
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,T,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var y,h,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const J=["Default","WithDefaultValue","States","Range"];export{s as Default,l as Range,o as States,i as WithDefaultValue,J as __namedExportsOrder,I as default};
