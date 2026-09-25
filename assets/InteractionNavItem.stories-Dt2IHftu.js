import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as We}from"./index-DhMLlvMY.js";import{I as t}from"./interaction-nav-item-BYiCd2Bq.js";import{u as ze,C as Ue,O as H}from"./create-new-outbound-mock-EiJ7Bx0T.js";import{W as Ge}from"./channel-row-B78teEyp.js";import{B as Ye}from"./badge-CJVmnMhy.js";import{M as Xe}from"./message-square-BL8DSnhx.js";import{M as qe}from"./mail-BgfsS5Lx.js";import{P as Ke}from"./phone-BRlsjax8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./popover-BCWMVAq6.js";import"./index-BmfIz0--.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-an86y9Fl.js";import"./tooltip-B7WaxDQZ.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./button-C7ty1faS.js";import"./index-1evVQkiP.js";import"./phone-input-switUA1g.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DV0nvecx.js";import"./circle-help-DYnzmdO5.js";import"./menu-DHWjv2EM.js";import"./menu-item-4wA6Phz8.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./user-BnR-bf5w.js";import"./circle-alert-DucVQP5w.js";import"./triangle-alert-C66Fwj6V.js";import"./input-BalbX2Cc.js";import"./select-tYPTu2FK.js";import"./index-pcZVUfq6.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./checkbox-oHaKtVcR.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./radio-button-group-C613LISO.js";import"./radio-BDYSQh6W.js";import"./index-BuRg0FgW.js";import"./index-DDAUwIz-.js";import"./spinner-DXpCQdYn.js";import"./table-DjzNU4BH.js";import"./search-input-BL7U0eKP.js";import"./clear-button-BKe3j28R.js";import"./filter-chip-ByJ0zB37.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-D88b1F4a.js";import"./star-CKl-uXvS.js";import"./list-item-C6oN_CzY.js";import"./plus-BKUBo5Qt.js";import"./create-new-customers-data-CrGRw0jz.js";import"./tag-DKZdDztl.js";import"./kebab-menu-button-nQ0cBypH.js";import"./menu-radix-BHyM5alN.js";import"./tabs-BWtinmOI.js";import"./trash-2-DTLo779S.js";import"./success-icon-solid-BP6tJnyF.js";import"./outcome-panel-DuQsRpDA.js";import"./textarea-JsicVW8m.js";import"./warning-icon-solid-CYvTRq-W.js";import"./phone-off-CmutIhkk.js";import"./clock-C3xVexPO.js";import"./circle-check-CVZLkmkV.js";import"./send-dvDSLghl.js";import"./phone-incoming-Cf4fZr2m.js";const V=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function o(){return V[Math.floor(Math.random()*V.length)]}const Xn={title:"UI/InteractionNavItem",component:t,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"},collapsible:{control:"boolean"}}},g={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},N={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},x={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},v={name:"Compact — New Assignment",args:{customerName:"Sofia Martinez",active:!1,awaitingResponse:!1,isNewAssignment:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},y={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},w={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},$e=[{type:"chat",label:"Chat",icon:e.jsx(Xe,{className:"h-2 w-2",strokeWidth:3})},{type:"email",label:"Email",icon:e.jsx(qe,{className:"h-2 w-2",strokeWidth:3})},{type:"voice",label:"Voice",icon:e.jsx(Ke,{className:"h-2 w-2",strokeWidth:3})},{type:"whatsapp",label:"WhatsApp",icon:e.jsx(Ge,{className:"h-2 w-2"})}],E={name:"Compact — Channel Icon Badge",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:$e.map(({type:a,label:s,icon:c})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-sm p-1.5",children:[e.jsxs("span",{className:"relative inline-flex",children:[e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis","aria-hidden":"true",children:a==="email"?"SM":"RT"}),e.jsx(Ye,{shape:"circle",variant:"info",size:"md",className:"absolute -left-2 -top-2","aria-label":`${s} channel`,children:c})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary","aria-hidden":"true",children:"08:27"})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:s})]},a))})},n=[{type:"chat",elapsed:"08:00",preview:o(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:o(),removable:!0},{type:"sms",elapsed:"Now",preview:o(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:o(),current:!0,removable:!0}],r=[{type:"whatsapp",elapsed:"4m",preview:o(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:o(),removable:!0}],Je=[{label:"Open",dotColor:"var(--lyra-color-status-info-strong)"},{label:"Pending",dotColor:"var(--lyra-color-status-warning-strong)"},{label:"Escalated",dotColor:"var(--lyra-color-status-critical-strong)"},{label:"Resolved",dotColor:"var(--lyra-color-status-success-strong)"},{label:"Closed",dotColor:"var(--lyra-color-fg-secondary)"}],Qe=[{label:"Billing",variant:"warning"},{label:"Technical",variant:"info"},{label:"Escalated",variant:"critical"},{label:"Follow-Up",variant:"purple"},{label:"Resolved",variant:"success"}],Ze=[{value:"resolved-first-contact",label:"Resolved — First Contact",category:"Resolution"},{value:"resolved-follow-up",label:"Resolved — Follow-Up Required",category:"Resolution"},{value:"escalated-tier-2",label:"Escalated — Tier 2",category:"Escalation"},{value:"transferred-billing",label:"Transferred — Billing",category:"Transfer"},{value:"no-action-needed",label:"No Action Needed",category:"Resolution"}];function ea(a=[]){return{open:!1,resolution:"Open",selectedTags:a,dispositionCode:"",summary:""}}function i(a,s={}){const[c,m]=We.useState(()=>Array.from({length:a},(h,p)=>ea(s[p]))),l=(h,p)=>m(d=>d.map((B,Fe)=>Fe===h?{...B,...p}:B));return c.map((h,p)=>({open:h.open,onOpenChange:d=>l(p,{open:d}),resolutionOptions:Je,resolution:h.resolution,onResolutionChange:d=>l(p,{resolution:d}),tagOptions:Qe,selectedTags:h.selectedTags,onTagsChange:d=>l(p,{selectedTags:d}),dispositionOptions:Ze,dispositionCode:h.dispositionCode,onDispositionChange:d=>l(p,{dispositionCode:d}),summary:h.summary,onSummaryChange:d=>l(p,{summary:d}),onSave:()=>l(p,{open:!1}),onCancel:()=>l(p,{open:!1})}))}function u(a,s){return a.map((c,m)=>({...c,outcome:s[m]}))}const aa=o(),na=o(),ta=o(),sa=o(),oa=o(),ra=o(),ia=o(),ca=o(),la=o();function pa(){const[a]=i(1,{0:["Technical"]});return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:aa,outcome:a}]})}const f={name:"Expanded — Active, Awaiting Response",render:()=>e.jsx(pa,{}),parameters:{layout:"padded"}};function da(){const[a]=i(1);return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!1,isNewAssignment:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,preview:la,outcome:a}]})}const C={name:"Expanded — New Assignment",render:()=>e.jsx(da,{}),parameters:{layout:"padded"}};function ma(){const[a]=i(1);return e.jsx(t,{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:na,outcome:a}]})}const A={name:"Expanded — Active, Not Awaiting Response",render:()=>e.jsx(ma,{}),parameters:{layout:"padded"}};function ua(){const[a]=i(1);return e.jsx(t,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:ta,outcome:a}]})}const O={name:"Expanded — Inactive, Awaiting Response",render:()=>e.jsx(ua,{}),parameters:{layout:"padded"}};function ha(){const[a]=i(1);return e.jsx(t,{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:sa,outcome:a}]})}const b={name:"Expanded — No Customer (not awaiting)",render:()=>e.jsx(ha,{}),parameters:{layout:"padded"}};function ga(){const a=i(n.length,{3:["Technical"]});return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:u(n,a)})}const I={name:"Expanded — Multiple Channels (Active Card)",render:()=>e.jsx(ga,{}),parameters:{layout:"padded"}};function Na(){const a=i(r.length);return e.jsx(t,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:u(r,a)})}const S={name:"Expanded — Multiple Channels (Inactive Card)",render:()=>e.jsx(Na,{}),parameters:{layout:"padded"}},R={name:"Expanded — Voice Channel",args:{showDismissButton:!1},argTypes:{showDismissButton:{name:"Show Unassign & Dismiss",control:"boolean",description:'Toggles the voice channel row\'s standalone "Unassign & Dismiss" icon button (`InteractionChannel.showDismissButton`, channel-row.tsx). Off by default — that same action stays reachable from the row\'s kebab ("More Options") menu either way.'}},render:a=>{const[s]=i(1);return e.jsx(t,{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:oa,showDismissButton:a.showDismissButton,outcome:s}]})},parameters:{layout:"padded"}};function xa(){const a=i(n.length);return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channelsExpandedOverride:{expanded:!1,version:1},channels:u(n,a)})}const _={name:"Expanded — Collapsible (Channels Collapsed)",render:()=>e.jsx(xa,{}),parameters:{layout:"padded"}};function va(){const a=i(n.length+r.length+1),s=a.slice(0,n.length),c=a.slice(n.length,n.length+r.length),[m]=a.slice(n.length+r.length);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:u(n,s)}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:u(r,c)}),e.jsx(t,{elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ra,outcome:m}]})]})}const D={name:"Expanded — Stacked (rail open)",render:()=>e.jsx(va,{})},j={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:H.channelOptions,phoneOptions:H.phoneOptions,skillOptions:H.skillOptions,onStartCall:a=>{console.log("Start call:",a.channel,"→",a.contact.name)}},M={name:"Header — Add Outbound Button",render:()=>{const{getHeaderAction:a}=ze(j),s=i(n.length+r.length+1),c=s.slice(0,n.length),m=s.slice(n.length,n.length+r.length),[l]=s.slice(n.length+r.length);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(Ue,{title:"New Outbound",outbound:j,expanded:!0}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:u(n,c),headerAction:a("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:u(r,m),headerAction:a("ray-torres")}),e.jsx(t,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ia,outcome:l}],headerAction:a("anonymous-voice")})]})}},T={name:"Compact — Hover Popover",render:()=>{const{getHeaderAction:a}=ze(j),s=i(n.length+r.length+1),c=s.slice(0,n.length),m=s.slice(n.length,n.length+r.length),[l]=s.slice(n.length+r.length);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(Ue,{title:"New Outbound",outbound:j}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:u(n,c),headerAction:a("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:u(r,m),headerAction:a("ray-torres")}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ca,outcome:l}],headerAction:a("anonymous-voice")})]})}};var P,k,L;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(k=g.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var z,U,F;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(U=N.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var W,G,Y;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var X,q,K;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(q=v.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var $,J,Q;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ae;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(te=E.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,re,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Expanded — Active, Awaiting Response",
  render: () => <ExpandedDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(ie=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,le,pe;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "Expanded — New Assignment",
  render: () => <ExpandedNewAssignmentDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(pe=(le=C.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,me,ue;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "Expanded — Active, Not Awaiting Response",
  render: () => <ExpandedActiveNotAwaitingDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(ue=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,ge,Ne;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Expanded — Inactive, Awaiting Response",
  render: () => <ExpandedInactiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Ne=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:Ne.source}}};var xe,ve,ye;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: "Expanded — No Customer (not awaiting)",
  render: () => <ExpandedNoCustomerDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(ye=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var we,Ee,fe;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Active Card)",
  render: () => <ExpandedMultiChannelActiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(fe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};var Ce,Ae,Oe;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Inactive Card)",
  render: () => <ExpandedMultiChannelInactiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Oe=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var be,Ie,Se;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var Re,_e,De;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: "Expanded — Collapsible (Channels Collapsed)",
  render: () => <ExpandedCollapsedDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(De=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var Me,Te,je;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: "Expanded — Stacked (rail open)",
  render: () => <ExpandedStackDemo />
}`,...(je=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var He,Be,Ve;M.parameters={...M.parameters,docs:{...(He=M.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: "Header — Add Outbound Button",
  render: () => {
    const {
      getHeaderAction
    } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
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
}`,...(Ve=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Pe,ke,Le;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: "Compact — Hover Popover",
  render: () => {
    const {
      getHeaderAction
    } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
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
}`,...(Le=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};const qn=["Compact","CompactInactive","CompactNoCustomer","CompactNewAssignment","CompactMultiChannel","CompactStack","CompactChannelIconBadge","Expanded","ExpandedNewAssignment","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedCollapsed","ExpandedStack","NavItemHeader","CompactHoverCard"];export{g as Compact,E as CompactChannelIconBadge,T as CompactHoverCard,N as CompactInactive,y as CompactMultiChannel,v as CompactNewAssignment,x as CompactNoCustomer,w as CompactStack,f as Expanded,A as ExpandedActiveNotAwaiting,_ as ExpandedCollapsed,O as ExpandedInactive,I as ExpandedMultiChannelActive,S as ExpandedMultiChannelInactive,C as ExpandedNewAssignment,b as ExpandedNoCustomer,D as ExpandedStack,R as ExpandedVoice,M as NavItemHeader,qn as __namedExportsOrder,Xn as default};
