import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as t}from"./interaction-nav-item-BGtoJcFI.js";import{u as we,C as fe,O as C}from"./create-new-outbound-mock-DFYb1T26.js";import{e as Ce}from"./channel-row-Dp_rtFMP.js";import{B as Re}from"./badge-BsM2Tnvd.js";import{M as Se}from"./message-square-BpbTPZlK.js";import{M as be}from"./mail-CGsQAUqz.js";import{P as Ee}from"./phone-Di4N1bEU.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./popover-DzlchCUr.js";import"./index-C2HVhtBy.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-C1YDQLuO.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-BbK1XDO0.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./button-DTrF7KLq.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./chevron-down-BRCsRsv-.js";import"./user-rDz6zf5M.js";import"./circle-alert-B0P0YYAI.js";import"./triangle-alert-Btkn3DL5.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./input-ClCC3Kj0.js";import"./error-icon-solid-C6_pXXD0.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./select-DX3ulS80.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./search-aUstRSOi.js";import"./radio-button-group-BG015Mqn.js";import"./radio-BEZUIC79.js";import"./index-CWPvdnBY.js";import"./table-ClQPfkKE.js";import"./search-input-D5VKY8MN.js";import"./clear-button-vlto_6tR.js";import"./filter-chip-C4Al_gyy.js";import"./sliders-horizontal-_yHPUfpC.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./arrow-up-C-teBDU4.js";import"./favorite-button-BTpn-oWF.js";import"./star-BBKukw_S.js";import"./phone-input-Df7jXVBF.js";import"./tag-T7xhGMJ_.js";import"./plus-B2SVJpWV.js";import"./layout-grid-DIlLALBe.js";import"./kebab-menu-button-X2gEabCK.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./tabs-D-r7Vdll.js";import"./trash-2-yAnBWR5t.js";import"./textarea-DRq5Era_.js";import"./warning-icon-solid-C2gh2Y-U.js";import"./message-circle-C4dCosEG.js";import"./circle-check-Bqo3g0Bw.js";import"./clock-xCVatdV-.js";const S=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function a(){return S[Math.floor(Math.random()*S.length)]}const Ka={title:"UI/InteractionNavItem",component:t,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"}}},r={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},s={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},o={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},p={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},i={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},Ie=[{type:"chat",label:"Chat",icon:e.jsx(Se,{className:"h-2 w-2",strokeWidth:3})},{type:"email",label:"Email",icon:e.jsx(be,{className:"h-2 w-2",strokeWidth:3})},{type:"voice",label:"Voice",icon:e.jsx(Ee,{className:"h-2 w-2",strokeWidth:3})},{type:"whatsapp",label:"WhatsApp",icon:e.jsx(Ce,{className:"h-2 w-2"})}],c={name:"Compact — Channel Icon Badge",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:Ie.map(({type:n,label:R,icon:Ae})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-sm p-1.5",children:[e.jsxs("span",{className:"relative inline-flex",children:[e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis","aria-hidden":"true",children:n==="email"?"SM":"RT"}),e.jsx(Re,{shape:"circle",variant:"info",size:"md",className:"absolute -left-2 -top-2","aria-label":`${R} channel`,children:Ae})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary","aria-hidden":"true",children:"08:27"})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:R})]},n))})},f=[{type:"chat",elapsed:"08:00",preview:a(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:a(),removable:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:a(),current:!0,removable:!0}],A=[{type:"whatsapp",elapsed:"4m",preview:a(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0}],d={name:"Expanded — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},l={name:"Expanded — Active, Not Awaiting Response",args:{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:a()}]},parameters:{layout:"padded"}},m={name:"Expanded — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},u={name:"Expanded — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]},parameters:{layout:"padded"}},h={name:"Expanded — Multiple Channels (Active Card)",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:f},parameters:{layout:"padded"}},g={name:"Expanded — Multiple Channels (Inactive Card)",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:A},parameters:{layout:"padded"}},N={name:"Expanded — Voice Channel",args:{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:a()}]},parameters:{layout:"padded"}},v={name:"Expanded — Stacked (rail open)",render:()=>e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:f}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:A}),e.jsx(t,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]})]})},w={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:C.channelOptions,phoneOptions:C.phoneOptions,skillOptions:C.skillOptions,onStartCall:n=>{console.log("Start call:",n.channel,"→",n.contact.name)}},x={name:"Header — Add Outbound Button",render:()=>{const{getHeaderAction:n}=we(w);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(fe,{title:"New Outbound",outbound:w,expanded:!0}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:f,headerAction:n("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:A,headerAction:n("ray-torres")}),e.jsx(t,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:n("anonymous-voice")})]})}},y={name:"Compact — Hover Popover",render:()=>{const{getHeaderAction:n}=we(w);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(fe,{title:"New Outbound",outbound:w}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:f,headerAction:n("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:A,headerAction:n("ray-torres")}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:n("anonymous-voice")})]})}};var b,E,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(I=(E=r.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var M,O,_;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(O=s.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var j,H,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(H=o.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var k,z,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,U,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(U=i.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var F,V,G;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(V=c.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var P,W,Y;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Expanded — Active, Awaiting Response",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    channels: [{
      type: "chat",
      elapsed: "08:27",
      current: true,
      awaitingResponse: true,
      preview: randomSkill()
    }]
  },
  parameters: {
    layout: "padded"
  }
}`,...(Y=(W=d.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var q,X,$;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Expanded — Active, Not Awaiting Response",
  args: {
    customerName: "Priya Nair",
    active: true,
    awaitingResponse: false,
    elapsed: "03:41",
    expanded: true,
    channels: [{
      type: "chat",
      elapsed: "03:41",
      current: true,
      preview: randomSkill()
    }]
  },
  parameters: {
    layout: "padded"
  }
}`,...($=(X=l.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var K,J,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Expanded — Inactive, Awaiting Response",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "06:12",
    expanded: true,
    channels: [{
      type: "chat",
      elapsed: "06:12",
      current: true,
      awaitingResponse: true,
      preview: randomSkill()
    }]
  },
  parameters: {
    layout: "padded"
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ae;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Expanded — No Customer (not awaiting)",
  args: {
    active: false,
    awaitingResponse: false,
    elapsed: "02:05",
    expanded: true,
    channels: [{
      type: "voice",
      elapsed: "02:05",
      current: true,
      preview: randomSkill()
    }]
  },
  parameters: {
    layout: "padded"
  }
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Active Card)",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    channels: SOFIA_CHANNELS
  },
  parameters: {
    layout: "padded"
  }
}`,...(re=(te=h.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,pe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Inactive Card)",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "04:00",
    expanded: true,
    channels: RAY_CHANNELS
  },
  parameters: {
    layout: "padded"
  }
}`,...(pe=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var ie,ce,de;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Expanded — Voice Channel",
  args: {
    customerName: "Marcus Webb",
    active: true,
    awaitingResponse: false,
    elapsed: "01:12",
    expanded: true,
    channels: [{
      type: "voice",
      elapsed: "01:12",
      current: true,
      preview: randomSkill()
    }]
  },
  parameters: {
    layout: "padded"
  }
}`,...(de=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var le,me,ue;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Expanded — Stacked (rail open)",
  render: () => <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
      <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" expanded channels={SOFIA_CHANNELS} />
      <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="04:00" expanded channels={RAY_CHANNELS} />
      <InteractionNavItem elapsed="02:05" expanded channels={[{
      type: "voice",
      elapsed: "02:05",
      current: true,
      preview: randomSkill()
    }]} />
    </div>
}`,...(ue=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,ge,Ne;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: "Header — Add Outbound Button",
  render: () => {
    const {
      getHeaderAction
    } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    return <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
        <CreateNew title="New Outbound" outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG}
      // Every card below renders in expanded mode (full header row,
      // name + headerAction) — CreateNew's own trigger needs the same
      // \`expanded\` flag or it falls back to its default collapsed,
      // icon-only square button (see create-new.tsx's own \`expanded\`
      // doc comment), which looks disconnected from the fully-expanded
      // rail this story is otherwise depicting.
      expanded />
        <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" expanded channels={SOFIA_CHANNELS} headerAction={getHeaderAction("sofia-martinez")} />
        <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="04:00" expanded channels={RAY_CHANNELS} headerAction={getHeaderAction("ray-torres")} />
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
        preview: randomSkill()
      }]} headerAction={getHeaderAction("anonymous-voice")} />
      </div>;
  }
}`,...(Ne=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:Ne.source}}};var ve,xe,ye;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Compact — Hover Popover",
  render: () => {
    const {
      getHeaderAction
    } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    return <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
        <CreateNew title="New Outbound" outbound={NAV_ITEM_HEADER_OUTBOUND_CONFIG} />
        <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" channels={SOFIA_CHANNELS} headerAction={getHeaderAction("sofia-martinez")} />
        <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="04:00" channels={RAY_CHANNELS} headerAction={getHeaderAction("ray-torres")} />
        <InteractionNavItem elapsed="02:05" channels={[{
        type: "voice",
        elapsed: "02:05",
        current: true,
        preview: randomSkill()
      }]} headerAction={getHeaderAction("anonymous-voice")} />
      </div>;
  }
}`,...(ye=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const Ja=["Compact","CompactInactive","CompactNoCustomer","CompactMultiChannel","CompactStack","CompactChannelIconBadge","Expanded","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedStack","NavItemHeader","CompactHoverCard"];export{r as Compact,c as CompactChannelIconBadge,y as CompactHoverCard,s as CompactInactive,p as CompactMultiChannel,o as CompactNoCustomer,i as CompactStack,d as Expanded,l as ExpandedActiveNotAwaiting,m as ExpandedInactive,h as ExpandedMultiChannelActive,g as ExpandedMultiChannelInactive,u as ExpandedNoCustomer,v as ExpandedStack,N as ExpandedVoice,x as NavItemHeader,Ja as __namedExportsOrder,Ka as default};
