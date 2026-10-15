import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Qe}from"./index-DhMLlvMY.js";import{I as n}from"./interaction-nav-item-C3dOX-VD.js";import{O as g,u as Ke,C as $e}from"./create-new-outbound-mock-DqaAHYel.js";import{W as Ze}from"./channel-row-Bd6gcWe_.js";import{B as ea}from"./badge-Bcxq6Iyh.js";import{M as aa}from"./message-square-BL8DSnhx.js";import{M as na}from"./mail-BgfsS5Lx.js";import{P as ta}from"./phone-BRlsjax8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./popover-tSwa707i.js";import"./index-BY5kmD2Q.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./hold-sla-D6S8pU02.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./spinner-xIhFAlhc.js";import"./phone-input-c2qrcIRL.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./clock-C3xVexPO.js";import"./user-BnR-bf5w.js";import"./circle-alert-DucVQP5w.js";import"./triangle-alert-C66Fwj6V.js";import"./input-CpMudak3.js";import"./select-N0jJDdGd.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-wvqFL4jd.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./radio-button-group-Dpdyg1D9.js";import"./radio-0NFvn28y.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./table-B_IJf8T5.js";import"./search-input-DGfFydY0.js";import"./clear-button-DgMj9nmX.js";import"./arrow-right-DLDQNhbU.js";import"./filter-chip-D1SHYby4.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-DiLCuCoS.js";import"./star-CKl-uXvS.js";import"./plus-BKUBo5Qt.js";import"./create-new-customers-data-CrGRw0jz.js";import"./tag-CePNn257.js";import"./kebab-menu-button-BSR_HWz7.js";import"./menu-radix-DwqQneqx.js";import"./tabs-sC7PiW5A.js";import"./trash-2-DTLo779S.js";import"./warning-icon-solid-B8WDO-kD.js";import"./outcome-panel-Btt4PeTz.js";import"./textarea-CCnTGxxJ.js";import"./message-circle-bT9yJ9gm.js";import"./circle-check-CVZLkmkV.js";import"./send-dvDSLghl.js";import"./phone-incoming-Cf4fZr2m.js";import"./arrow-left-right-Cg1yeikD.js";const V=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function o(){return V[Math.floor(Math.random()*V.length)]}const it={title:"UI/InteractionNavItem",component:n,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"},collapsible:{control:"boolean"}}},N={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},x={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},v={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},E={name:"Compact — New Assignment",args:{customerName:"Sofia Martinez",active:!1,awaitingResponse:!1,isNewAssignment:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},y={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},C={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(n,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},sa=[{type:"chat",label:"Chat",icon:e.jsx(aa,{className:"h-2 w-2",strokeWidth:3})},{type:"email",label:"Email",icon:e.jsx(na,{className:"h-2 w-2",strokeWidth:3})},{type:"voice",label:"Voice",icon:e.jsx(ta,{className:"h-2 w-2",strokeWidth:3})},{type:"whatsapp",label:"WhatsApp",icon:e.jsx(Ze,{className:"h-2 w-2"})}],w={name:"Compact — Channel Icon Badge",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:sa.map(({type:a,label:s,icon:c})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-sm p-1.5",children:[e.jsxs("span",{className:"relative inline-flex",children:[e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis","aria-hidden":"true",children:a==="email"?"SM":"RT"}),e.jsx(ea,{shape:"circle",variant:"info",size:"md",className:"absolute -left-2 -top-2","aria-label":`${s} channel`,children:c})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary","aria-hidden":"true",children:"08:27"})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:s})]},a))})},t=[{type:"chat",elapsed:"08:00",preview:o(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:o(),removable:!0},{type:"sms",elapsed:"Now",preview:o(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:o(),current:!0,removable:!0}],r=[{type:"whatsapp",elapsed:"4m",preview:o(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:o(),removable:!0}],oa=[{label:"Open",dotColor:"var(--lyra-color-status-info-strong)"},{label:"Pending",dotColor:"var(--lyra-color-status-warning-strong)"},{label:"Escalated",dotColor:"var(--lyra-color-status-critical-strong)"},{label:"Resolved",dotColor:"var(--lyra-color-status-success-strong)"},{label:"Closed",dotColor:"var(--lyra-color-fg-secondary)"}],ra=[{label:"Billing",variant:"warning"},{label:"Technical",variant:"info"},{label:"Escalated",variant:"critical"},{label:"Follow-Up",variant:"purple"},{label:"Resolved",variant:"success"}],ia=[{value:"resolved-first-contact",label:"Resolved — First Contact",category:"Resolution"},{value:"resolved-follow-up",label:"Resolved — Follow-Up Required",category:"Resolution"},{value:"escalated-tier-2",label:"Escalated — Tier 2",category:"Escalation"},{value:"transferred-billing",label:"Transferred — Billing",category:"Transfer"},{value:"no-action-needed",label:"No Action Needed",category:"Resolution"}];function ca(a=[]){return{open:!1,resolution:"Open",selectedTags:a,dispositionCode:"",summary:""}}function i(a,s={}){const[c,m]=Qe.useState(()=>Array.from({length:a},(h,p)=>ca(s[p]))),l=(h,p)=>m(d=>d.map((U,Je)=>Je===h?{...U,...p}:U));return c.map((h,p)=>({open:h.open,onOpenChange:d=>l(p,{open:d}),resolutionOptions:oa,resolution:h.resolution,onResolutionChange:d=>l(p,{resolution:d}),tagOptions:ra,selectedTags:h.selectedTags,onTagsChange:d=>l(p,{selectedTags:d}),dispositionOptions:ia,dispositionCode:h.dispositionCode,onDispositionChange:d=>l(p,{dispositionCode:d}),summary:h.summary,onSummaryChange:d=>l(p,{summary:d}),onSave:()=>l(p,{open:!1}),onCancel:()=>l(p,{open:!1})}))}function u(a,s){return a.map((c,m)=>({...c,outcome:s[m]}))}const la=o(),pa=o(),da=o(),ma=o(),ua=o(),ha=o(),ga=o(),Na=o(),xa=o(),va=o();function Ea(){const[a]=i(1,{0:["Technical"]});return e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:la,outcome:a}]})}const f={name:"Expanded — Active, Awaiting Response",render:()=>e.jsx(Ea,{}),parameters:{layout:"padded"}};function ya(){const[a]=i(1);return e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!1,isNewAssignment:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,preview:xa,outcome:a}]})}const A={name:"Expanded — New Assignment",render:()=>e.jsx(ya,{}),parameters:{layout:"padded"}};function Ca(){const[a]=i(1);return e.jsx(n,{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:pa,outcome:a}]})}const O={name:"Expanded — Active, Not Awaiting Response",render:()=>e.jsx(Ca,{}),parameters:{layout:"padded"}};function wa(){const[a]=i(1);return e.jsx(n,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:da,outcome:a}]})}const I={name:"Expanded — Inactive, Awaiting Response",render:()=>e.jsx(wa,{}),parameters:{layout:"padded"}};function fa(){const[a]=i(1);return e.jsx(n,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,awaitingSeverity:"critical",elapsed:"09:48",expanded:!0,collapsible:!0,channelsExpandedOverride:{expanded:!1,version:1},channels:[{type:"chat",elapsed:"09:48",current:!0,awaitingResponse:!0,awaitingSeverity:"critical",preview:va,outcome:a}]})}const S={name:"Expanded — Unselected, Critical",render:()=>e.jsx(fa,{}),parameters:{layout:"padded"}};function Aa(){const[a]=i(1);return e.jsx(n,{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ma,outcome:a}]})}const b={name:"Expanded — No Customer (not awaiting)",render:()=>e.jsx(Aa,{}),parameters:{layout:"padded"}};function Oa(){const a=i(t.length,{3:["Technical"]});return e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:u(t,a)})}const R={name:"Expanded — Multiple Channels (Active Card)",render:()=>e.jsx(Oa,{}),parameters:{layout:"padded"}};function Ia(){const a=i(r.length);return e.jsx(n,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:u(r,a)})}const _={name:"Expanded — Multiple Channels (Inactive Card)",render:()=>e.jsx(Ia,{}),parameters:{layout:"padded"}},D={name:"Expanded — Voice Channel",args:{showDismissButton:!1},argTypes:{showDismissButton:{name:"Show Unassign & Dismiss",control:"boolean",description:'Toggles the voice channel row\'s standalone "Unassign & Dismiss" icon button (`InteractionChannel.showDismissButton`, channel-row.tsx). Off by default — that same action stays reachable from the row\'s kebab ("More Options") menu either way.'}},render:a=>{const[s]=i(1);return e.jsx(n,{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:ua,showDismissButton:a.showDismissButton,outcome:s}]})},parameters:{layout:"padded"}};function Sa(){const a=i(t.length);return e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channelsExpandedOverride:{expanded:!1,version:1},channels:u(t,a)})}const T={name:"Expanded — Collapsible (Channels Collapsed)",render:()=>e.jsx(Sa,{}),parameters:{layout:"padded"}};function ba(){const a=i(t.length+r.length+1),s=a.slice(0,t.length),c=a.slice(t.length,t.length+r.length),[m]=a.slice(t.length+r.length);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:u(t,s)}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:u(r,c)}),e.jsx(n,{elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ha,outcome:m}]})]})}const M={name:"Expanded — Stacked (rail open)",render:()=>e.jsx(ba,{})},P={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:g.channelOptions,phoneOptions:g.phoneOptions,skillOptions:g.skillOptions,onStartCall:a=>{console.log("Start call:",a.channel,"→",a.contact.name)}},j={name:"Header — Add Channel Button",render:()=>{const{getHeaderAction:a}=Ke(P),s=i(t.length+r.length+1),c=s.slice(0,t.length),m=s.slice(t.length,t.length+r.length),[l]=s.slice(t.length+r.length);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx($e,{title:"New Outbound",outbound:P,expanded:!0}),e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:u(t,c),headerAction:a("sofia-martinez")}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:u(r,m),headerAction:a("ray-torres")}),e.jsx(n,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ga,outcome:l}],headerAction:a("anonymous-voice")})]})}},H={name:"Compact — Hover Popover",render:()=>{const{getHeaderAction:a}=Ke(P),s=i(t.length+r.length+1),c=s.slice(0,t.length),m=s.slice(t.length,t.length+r.length),[l]=s.slice(t.length+r.length);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx($e,{title:"New Outbound",outbound:P}),e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:u(t,c),headerAction:a("sofia-martinez")}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:u(r,m),headerAction:a("ray-torres")}),e.jsx(n,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:Na,outcome:l}],headerAction:a("anonymous-voice")})]})}},Ra={id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},B={name:"Add Channel Button — Primitive",args:{contact:Ra,channelOptions:g.channelOptions,phoneOptions:g.phoneOptions,skillOptions:g.skillOptions,onStartCall:a=>{console.log("Start call:",a.channel,"→",a.contact.name)}}};var k,L,z;N.parameters={...N.parameters,docs:{...(k=N.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Compact — Active, Awaiting Response",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: false,
    channels: [{
      type: "chat",
      elapsed: "08:27",
      current: true
    }]
  }
}`,...(z=(L=N.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,W,G;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Compact — Inactive, Awaiting Response",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "06:12",
    expanded: false,
    channels: [{
      type: "chat",
      elapsed: "06:12",
      current: true
    }]
  }
}`,...(G=(W=x.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var Y,X,q;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Compact — No Customer (not awaiting)",
  args: {
    active: false,
    awaitingResponse: false,
    elapsed: "02:05",
    expanded: false,
    channels: [{
      type: "voice",
      elapsed: "02:05",
      current: true
    }]
  }
}`,...(q=(X=v.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var K,$,J;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Compact — New Assignment",
  args: {
    customerName: "Sofia Martinez",
    active: false,
    awaitingResponse: false,
    isNewAssignment: true,
    elapsed: "08:27",
    expanded: false,
    channels: [{
      type: "chat",
      elapsed: "08:27",
      current: true
    }]
  }
}`,...(J=($=E.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Compact — Multiple Channels Open",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: false,
    channels: [{
      type: "chat",
      elapsed: "08:00"
    }, {
      type: "email",
      elapsed: "Now"
    }, {
      type: "sms",
      elapsed: "Now"
    }, {
      type: "whatsapp",
      elapsed: "Now",
      current: true
    }]
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Compact — Stacked (rail collapsed)",
  render: () => <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
      <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" channels={[{
      type: "chat",
      elapsed: "08:00"
    }, {
      type: "email",
      elapsed: "Now"
    }, {
      type: "sms",
      elapsed: "Now"
    }, {
      type: "whatsapp",
      elapsed: "Now",
      current: true
    }]} />
      <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="06:12" channels={[{
      type: "chat",
      elapsed: "06:12",
      current: true
    }]} />
      <InteractionNavItem elapsed="02:05" channels={[{
      type: "voice",
      elapsed: "02:05",
      current: true
    }]} />
    </div>
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,oe,re;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Compact — Channel Icon Badge",
  render: () => <div className="flex items-end gap-6">
      {ICON_BADGE_TYPES.map(({
      type,
      label,
      icon
    }) => <div key={type} className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-1 rounded-lyra-sm p-1.5">
            <span className="relative inline-flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis" aria-hidden="true">
                {type === "email" ? "SM" : "RT"}
              </span>
              <Badge shape="circle" variant="info" size="md" className="absolute -left-2 -top-2" aria-label={\`\${label} channel\`}>
                {icon}
              </Badge>
            </span>
            <span className="lyra-body-xs text-lyra-fg-secondary" aria-hidden="true">08:27</span>
          </div>
          <span className="lyra-body-xs text-lyra-fg-secondary">{label}</span>
        </div>)}
    </div>
}`,...(re=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,ce,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Expanded — Active, Awaiting Response",
  render: () => <ExpandedDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,de,me;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Expanded — New Assignment",
  render: () => <ExpandedNewAssignmentDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(me=(de=A.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,he,ge;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: "Expanded — Active, Not Awaiting Response",
  render: () => <ExpandedActiveNotAwaitingDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(ge=(he=O.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var Ne,xe,ve;I.parameters={...I.parameters,docs:{...(Ne=I.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: "Expanded — Inactive, Awaiting Response",
  render: () => <ExpandedInactiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(ve=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Ee,ye,Ce;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "Expanded — Unselected, Critical",
  render: () => <ExpandedUnselectedCriticalDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Ce=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var we,fe,Ae;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Expanded — No Customer (not awaiting)",
  render: () => <ExpandedNoCustomerDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Ae=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:Ae.source}}};var Oe,Ie,Se;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Active Card)",
  render: () => <ExpandedMultiChannelActiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Se=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var be,Re,_e;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Inactive Card)",
  render: () => <ExpandedMultiChannelInactiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(_e=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var De,Te,Me;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "Expanded — Voice Channel",
  // \`channels\` (a nested array prop) isn't something Storybook's
  // autogenerated Controls can reach into on its own, so this story adds
  // its own top-level \`showDismissButton\` arg/control (not a real
  // \`InteractionNavItem\` prop — same "custom arg feeding a nested field"
  // pattern \`MenuItemBasic\` uses in ListItem.stories.tsx) and a \`render\`
  // that threads it onto the one voice channel's own
  // \`InteractionChannel.showDismissButton\` (channel-row.tsx) below.
  args: {
    showDismissButton: false
  },
  argTypes: {
    showDismissButton: {
      name: "Show Unassign & Dismiss",
      control: "boolean",
      description: 'Toggles the voice channel row\\'s standalone "Unassign & Dismiss" icon button (\`InteractionChannel.showDismissButton\`, channel-row.tsx). Off by default — that same action stays reachable from the row\\'s kebab ("More Options") menu either way.'
    }
  },
  render: args => {
    const [outcome] = useOutcomeDemos(1);
    return <InteractionNavItem customerName="Marcus Webb" active awaitingResponse={false} elapsed="01:12" expanded collapsible channels={[{
      type: "voice",
      elapsed: "01:12",
      current: true,
      preview: EXPANDED_VOICE_PREVIEW,
      showDismissButton: args.showDismissButton,
      outcome
    }]} />;
  },
  parameters: {
    layout: "padded"
  }
}`,...(Me=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var je,He,Be;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: "Expanded — Collapsible (Channels Collapsed)",
  render: () => <ExpandedCollapsedDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Be=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Be.source}}};var Pe,Ue,Ve;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "Expanded — Stacked (rail open)",
  render: () => <ExpandedStackDemo />
}`,...(Ve=(Ue=M.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var ke,Le,ze;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "Header — Add Channel Button",
  render: () => {
    const {
      getHeaderAction
    } = useAddChannelButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length + RAY_CHANNELS.length + 1);
    const sofiaOutcomes = outcomes.slice(0, SOFIA_CHANNELS.length);
    const rayOutcomes = outcomes.slice(SOFIA_CHANNELS.length, SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    const [voiceOutcome] = outcomes.slice(SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    return <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
        <CreateNew title="New Outbound" outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG}
      // Every card below renders in expanded mode (full header row,
      // name + headerAction) — CreateNew's own trigger needs the same
      // \`expanded\` flag or it falls back to its default collapsed,
      // icon-only square button (see create-new.tsx's own \`expanded\`
      // doc comment), which looks disconnected from the fully-expanded
      // rail this story is otherwise depicting.
      expanded />
        <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" expanded channels={withOutcomes(SOFIA_CHANNELS, sofiaOutcomes)} headerAction={getHeaderAction("sofia-martinez")} />
        <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="04:00" expanded channels={withOutcomes(RAY_CHANNELS, rayOutcomes)} headerAction={getHeaderAction("ray-torres")} />
        {/* No matching contact for this one (same as a quick-dialed number
            in the real app) — demonstrates that getHeaderAction returns
            \`null\` rather than rendering a "+" button with no contact to
            back it (a button that would open but whose selection could
            never actually resolve an address). No headerAction renders
            here at all. */}
        <InteractionNavItem elapsed="02:05" expanded channels={[{
        type: "voice",
        elapsed: "02:05",
        current: true,
        preview: NAV_HEADER_VOICE_PREVIEW,
        outcome: voiceOutcome
      }]} headerAction={getHeaderAction("anonymous-voice")} />
      </div>;
  }
}`,...(ze=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Fe,We,Ge;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: "Compact — Hover Popover",
  render: () => {
    const {
      getHeaderAction
    } = useAddChannelButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    const outcomes = useOutcomeDemos(SOFIA_CHANNELS.length + RAY_CHANNELS.length + 1);
    const sofiaOutcomes = outcomes.slice(0, SOFIA_CHANNELS.length);
    const rayOutcomes = outcomes.slice(SOFIA_CHANNELS.length, SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    const [voiceOutcome] = outcomes.slice(SOFIA_CHANNELS.length + RAY_CHANNELS.length);
    return <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
        <CreateNew title="New Outbound" outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG} />
        <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" channels={withOutcomes(SOFIA_CHANNELS, sofiaOutcomes)} headerAction={getHeaderAction("sofia-martinez")} />
        <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="04:00" channels={withOutcomes(RAY_CHANNELS, rayOutcomes)} headerAction={getHeaderAction("ray-torres")} />
        <InteractionNavItem elapsed="02:05" channels={[{
        type: "voice",
        elapsed: "02:05",
        current: true,
        preview: HOVER_CARD_VOICE_PREVIEW,
        outcome: voiceOutcome
      }]} headerAction={getHeaderAction("anonymous-voice")} />
      </div>;
  }
}`,...(Ge=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var Ye,Xe,qe;B.parameters={...B.parameters,docs:{...(Ye=B.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: "Add Channel Button — Primitive",
  args: {
    contact: ADD_CHANNEL_BUTTON_PRIMITIVE_CONTACT,
    channelOptions: OUTBOUND_CONFIG.channelOptions,
    phoneOptions: OUTBOUND_CONFIG.phoneOptions,
    skillOptions: OUTBOUND_CONFIG.skillOptions,
    onStartCall: selection => {
      // eslint-disable-next-line no-console
      console.log("Start call:", selection.channel, "→", selection.contact.name);
    }
  }
}`,...(qe=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};const ct=["Compact","CompactInactive","CompactNoCustomer","CompactNewAssignment","CompactMultiChannel","CompactStack","CompactChannelIconBadge","Expanded","ExpandedNewAssignment","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedUnselectedCritical","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedCollapsed","ExpandedStack","NavItemHeader","CompactHoverCard","AddChannelButtonPrimitive"];export{B as AddChannelButtonPrimitive,N as Compact,w as CompactChannelIconBadge,H as CompactHoverCard,x as CompactInactive,y as CompactMultiChannel,E as CompactNewAssignment,v as CompactNoCustomer,C as CompactStack,f as Expanded,O as ExpandedActiveNotAwaiting,T as ExpandedCollapsed,I as ExpandedInactive,R as ExpandedMultiChannelActive,_ as ExpandedMultiChannelInactive,A as ExpandedNewAssignment,b as ExpandedNoCustomer,M as ExpandedStack,S as ExpandedUnselectedCritical,D as ExpandedVoice,j as NavItemHeader,ct as __namedExportsOrder,it as default};
