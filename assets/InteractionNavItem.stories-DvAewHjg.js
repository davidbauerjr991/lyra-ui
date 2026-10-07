import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as qe}from"./index-DhMLlvMY.js";import{I as t}from"./interaction-nav-item-R0rJPbaI.js";import{O as g,u as Ge,C as Ye}from"./create-new-outbound-mock-mhbvyd7f.js";import{W as Ke}from"./channel-row-DDFypcmc.js";import{B as $e}from"./badge-BIS9woDA.js";import{M as Je}from"./message-square-BL8DSnhx.js";import{M as Qe}from"./mail-BgfsS5Lx.js";import{P as Ze}from"./phone-BRlsjax8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./spinner-xIhFAlhc.js";import"./phone-input-Brv_jdcT.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./user-BnR-bf5w.js";import"./circle-alert-DucVQP5w.js";import"./triangle-alert-C66Fwj6V.js";import"./input-CHxvM1hc.js";import"./select-Ct-JPb8f.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./radio-button-group-DL29POWk.js";import"./radio-sgkaDL_k.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./table-D1rGpBC3.js";import"./search-input-DbdcjRuV.js";import"./clear-button-Cb_QiePp.js";import"./arrow-right-DLDQNhbU.js";import"./filter-chip-CakUwLBw.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-BJq5peE4.js";import"./star-CKl-uXvS.js";import"./list-item-C6oN_CzY.js";import"./plus-BKUBo5Qt.js";import"./create-new-customers-data-CrGRw0jz.js";import"./tag-D8yJ2lBD.js";import"./kebab-menu-button-CUREWany.js";import"./menu-radix-9vcg5XDz.js";import"./tabs-jpxKbEMY.js";import"./trash-2-DTLo779S.js";import"./success-icon-solid-BP6tJnyF.js";import"./outcome-panel-DgHBMs2y.js";import"./textarea-DqEeGScW.js";import"./warning-icon-solid-CYvTRq-W.js";import"./phone-off-CmutIhkk.js";import"./clock-C3xVexPO.js";import"./circle-check-CVZLkmkV.js";import"./send-dvDSLghl.js";import"./phone-incoming-Cf4fZr2m.js";const V=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function o(){return V[Math.floor(Math.random()*V.length)]}const at={title:"UI/InteractionNavItem",component:t,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"},collapsible:{control:"boolean"}}},N={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},x={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},v={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},y={name:"Compact — New Assignment",args:{customerName:"Sofia Martinez",active:!1,awaitingResponse:!1,isNewAssignment:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},w={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},C={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},ea=[{type:"chat",label:"Chat",icon:e.jsx(Je,{className:"h-2 w-2",strokeWidth:3})},{type:"email",label:"Email",icon:e.jsx(Qe,{className:"h-2 w-2",strokeWidth:3})},{type:"voice",label:"Voice",icon:e.jsx(Ze,{className:"h-2 w-2",strokeWidth:3})},{type:"whatsapp",label:"WhatsApp",icon:e.jsx(Ke,{className:"h-2 w-2"})}],E={name:"Compact — Channel Icon Badge",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:ea.map(({type:a,label:s,icon:c})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-sm p-1.5",children:[e.jsxs("span",{className:"relative inline-flex",children:[e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis","aria-hidden":"true",children:a==="email"?"SM":"RT"}),e.jsx($e,{shape:"circle",variant:"info",size:"md",className:"absolute -left-2 -top-2","aria-label":`${s} channel`,children:c})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary","aria-hidden":"true",children:"08:27"})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:s})]},a))})},n=[{type:"chat",elapsed:"08:00",preview:o(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:o(),removable:!0},{type:"sms",elapsed:"Now",preview:o(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:o(),current:!0,removable:!0}],r=[{type:"whatsapp",elapsed:"4m",preview:o(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:o(),removable:!0}],aa=[{label:"Open",dotColor:"var(--lyra-color-status-info-strong)"},{label:"Pending",dotColor:"var(--lyra-color-status-warning-strong)"},{label:"Escalated",dotColor:"var(--lyra-color-status-critical-strong)"},{label:"Resolved",dotColor:"var(--lyra-color-status-success-strong)"},{label:"Closed",dotColor:"var(--lyra-color-fg-secondary)"}],na=[{label:"Billing",variant:"warning"},{label:"Technical",variant:"info"},{label:"Escalated",variant:"critical"},{label:"Follow-Up",variant:"purple"},{label:"Resolved",variant:"success"}],ta=[{value:"resolved-first-contact",label:"Resolved — First Contact",category:"Resolution"},{value:"resolved-follow-up",label:"Resolved — Follow-Up Required",category:"Resolution"},{value:"escalated-tier-2",label:"Escalated — Tier 2",category:"Escalation"},{value:"transferred-billing",label:"Transferred — Billing",category:"Transfer"},{value:"no-action-needed",label:"No Action Needed",category:"Resolution"}];function sa(a=[]){return{open:!1,resolution:"Open",selectedTags:a,dispositionCode:"",summary:""}}function i(a,s={}){const[c,m]=qe.useState(()=>Array.from({length:a},(h,p)=>sa(s[p]))),l=(h,p)=>m(d=>d.map((P,Xe)=>Xe===h?{...P,...p}:P));return c.map((h,p)=>({open:h.open,onOpenChange:d=>l(p,{open:d}),resolutionOptions:aa,resolution:h.resolution,onResolutionChange:d=>l(p,{resolution:d}),tagOptions:na,selectedTags:h.selectedTags,onTagsChange:d=>l(p,{selectedTags:d}),dispositionOptions:ta,dispositionCode:h.dispositionCode,onDispositionChange:d=>l(p,{dispositionCode:d}),summary:h.summary,onSummaryChange:d=>l(p,{summary:d}),onSave:()=>l(p,{open:!1}),onCancel:()=>l(p,{open:!1})}))}function u(a,s){return a.map((c,m)=>({...c,outcome:s[m]}))}const oa=o(),ra=o(),ia=o(),ca=o(),la=o(),pa=o(),da=o(),ma=o(),ua=o();function ha(){const[a]=i(1,{0:["Technical"]});return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:oa,outcome:a}]})}const f={name:"Expanded — Active, Awaiting Response",render:()=>e.jsx(ha,{}),parameters:{layout:"padded"}};function ga(){const[a]=i(1);return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!1,isNewAssignment:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,preview:ua,outcome:a}]})}const A={name:"Expanded — New Assignment",render:()=>e.jsx(ga,{}),parameters:{layout:"padded"}};function Na(){const[a]=i(1);return e.jsx(t,{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:ra,outcome:a}]})}const O={name:"Expanded — Active, Not Awaiting Response",render:()=>e.jsx(Na,{}),parameters:{layout:"padded"}};function xa(){const[a]=i(1);return e.jsx(t,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:ia,outcome:a}]})}const I={name:"Expanded — Inactive, Awaiting Response",render:()=>e.jsx(xa,{}),parameters:{layout:"padded"}};function va(){const[a]=i(1);return e.jsx(t,{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ca,outcome:a}]})}const S={name:"Expanded — No Customer (not awaiting)",render:()=>e.jsx(va,{}),parameters:{layout:"padded"}};function ya(){const a=i(n.length,{3:["Technical"]});return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:u(n,a)})}const b={name:"Expanded — Multiple Channels (Active Card)",render:()=>e.jsx(ya,{}),parameters:{layout:"padded"}};function wa(){const a=i(r.length);return e.jsx(t,{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:u(r,a)})}const R={name:"Expanded — Multiple Channels (Inactive Card)",render:()=>e.jsx(wa,{}),parameters:{layout:"padded"}},_={name:"Expanded — Voice Channel",args:{showDismissButton:!1},argTypes:{showDismissButton:{name:"Show Unassign & Dismiss",control:"boolean",description:'Toggles the voice channel row\'s standalone "Unassign & Dismiss" icon button (`InteractionChannel.showDismissButton`, channel-row.tsx). Off by default — that same action stays reachable from the row\'s kebab ("More Options") menu either way.'}},render:a=>{const[s]=i(1);return e.jsx(t,{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:la,showDismissButton:a.showDismissButton,outcome:s}]})},parameters:{layout:"padded"}};function Ca(){const a=i(n.length);return e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channelsExpandedOverride:{expanded:!1,version:1},channels:u(n,a)})}const D={name:"Expanded — Collapsible (Channels Collapsed)",render:()=>e.jsx(Ca,{}),parameters:{layout:"padded"}};function Ea(){const a=i(n.length+r.length+1),s=a.slice(0,n.length),c=a.slice(n.length,n.length+r.length),[m]=a.slice(n.length+r.length);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:u(n,s)}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:u(r,c)}),e.jsx(t,{elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:pa,outcome:m}]})]})}const T={name:"Expanded — Stacked (rail open)",render:()=>e.jsx(Ea,{})},B={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:g.channelOptions,phoneOptions:g.phoneOptions,skillOptions:g.skillOptions,onStartCall:a=>{console.log("Start call:",a.channel,"→",a.contact.name)}},M={name:"Header — Add Channel Button",render:()=>{const{getHeaderAction:a}=Ge(B),s=i(n.length+r.length+1),c=s.slice(0,n.length),m=s.slice(n.length,n.length+r.length),[l]=s.slice(n.length+r.length);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(Ye,{title:"New Outbound",outbound:B,expanded:!0}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:u(n,c),headerAction:a("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:u(r,m),headerAction:a("ray-torres")}),e.jsx(t,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:da,outcome:l}],headerAction:a("anonymous-voice")})]})}},j={name:"Compact — Hover Popover",render:()=>{const{getHeaderAction:a}=Ge(B),s=i(n.length+r.length+1),c=s.slice(0,n.length),m=s.slice(n.length,n.length+r.length),[l]=s.slice(n.length+r.length);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(Ye,{title:"New Outbound",outbound:B}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:u(n,c),headerAction:a("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:u(r,m),headerAction:a("ray-torres")}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:ma,outcome:l}],headerAction:a("anonymous-voice")})]})}},fa={id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},H={name:"Add Channel Button — Primitive",args:{contact:fa,channelOptions:g.channelOptions,phoneOptions:g.phoneOptions,skillOptions:g.skillOptions,onStartCall:a=>{console.log("Start call:",a.channel,"→",a.contact.name)}}};var U,k,L;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(L=(k=N.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var z,F,W;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(F=x.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var G,Y,X;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var q,K,$;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(K=y.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var J,Q,Z;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ae,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ie,ce;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Expanded — Active, Awaiting Response",
  render: () => <ExpandedDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,pe,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Expanded — New Assignment",
  render: () => <ExpandedNewAssignmentDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(de=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ue,he;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Expanded — Active, Not Awaiting Response",
  render: () => <ExpandedActiveNotAwaitingDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(he=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,Ne,xe;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Expanded — Inactive, Awaiting Response",
  render: () => <ExpandedInactiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(xe=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};var ve,ye,we;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Expanded — No Customer (not awaiting)",
  render: () => <ExpandedNoCustomerDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(we=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Ce,Ee,fe;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Active Card)",
  render: () => <ExpandedMultiChannelActiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(fe=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};var Ae,Oe,Ie;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Inactive Card)",
  render: () => <ExpandedMultiChannelInactiveDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Ie=(Oe=R.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var Se,be,Re;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(be=_.parameters)==null?void 0:be.docs)==null?void 0:Re.source}}};var _e,De,Te;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: "Expanded — Collapsible (Channels Collapsed)",
  render: () => <ExpandedCollapsedDemo />,
  parameters: {
    layout: "padded"
  }
}`,...(Te=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var Me,je,He;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: "Expanded — Stacked (rail open)",
  render: () => <ExpandedStackDemo />
}`,...(He=(je=T.parameters)==null?void 0:je.docs)==null?void 0:He.source}}};var Be,Pe,Ve;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ve=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Ue,ke,Le;j.parameters={...j.parameters,docs:{...(Ue=j.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Le=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var ze,Fe,We;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(We=(Fe=H.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};const nt=["Compact","CompactInactive","CompactNoCustomer","CompactNewAssignment","CompactMultiChannel","CompactStack","CompactChannelIconBadge","Expanded","ExpandedNewAssignment","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedCollapsed","ExpandedStack","NavItemHeader","CompactHoverCard","AddChannelButtonPrimitive"];export{H as AddChannelButtonPrimitive,N as Compact,E as CompactChannelIconBadge,j as CompactHoverCard,x as CompactInactive,w as CompactMultiChannel,y as CompactNewAssignment,v as CompactNoCustomer,C as CompactStack,f as Expanded,O as ExpandedActiveNotAwaiting,D as ExpandedCollapsed,I as ExpandedInactive,b as ExpandedMultiChannelActive,R as ExpandedMultiChannelInactive,A as ExpandedNewAssignment,S as ExpandedNoCustomer,T as ExpandedStack,_ as ExpandedVoice,M as NavItemHeader,nt as __namedExportsOrder,at as default};
