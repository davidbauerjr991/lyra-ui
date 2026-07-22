import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./interaction-nav-item-mr_2z-ZD.js";import{u as fe,C as Re,O as S}from"./create-new-outbound-mock-DQfa6Nh0.js";import{c as Ce}from"./channel-row-OwWel_OX.js";import{B as Ae}from"./badge-go1ZjKcF.js";import{M as Se}from"./message-square-BpbTPZlK.js";import{M as be}from"./mail-CGsQAUqz.js";import{P as Ee}from"./phone-Di4N1bEU.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./popover-CyPBLJW1.js";import"./index-DhUdNGNr.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-MFm5DvZf.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-Ca2x66t9.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./menu-Cb0mW4XG.js";import"./chevron-right-DZKRY3zX.js";import"./input-Bj9llYuD.js";import"./error-icon-Jj0G9Pna.js";import"./label-nFez4jEO.js";import"./circle-help-Bj2MpUE2.js";import"./select-DfePZdut.js";import"./checkbox-cemurMBH.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";import"./button-GxCpv2fL.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./table-CNrPw7Ry.js";import"./search-input-CP4Hs0kz.js";import"./clear-button-DmDUWwck.js";import"./filter-chip-C1wx3jdk.js";import"./sliders-horizontal-_yHPUfpC.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./panel-left-CWVFPQ0g.js";import"./chevron-left-C6DiQdwt.js";import"./panel-right-CgZ2ABSM.js";import"./arrow-up-C-teBDU4.js";import"./favorite-button-tyyNLg2I.js";import"./star-BBKukw_S.js";import"./phone-input-BDc2a93p.js";import"./tag-DxwG2peS.js";import"./plus-B2SVJpWV.js";import"./kebab-menu-button-BDzzvji6.js";import"./menu-radix-D2E6cDL6.js";import"./index-DUC4V_Df.js";import"./tabs-BoyRwRa4.js";import"./clock-xCVatdV-.js";import"./triangle-alert-Btkn3DL5.js";import"./circle-check-Bqo3g0Bw.js";import"./user-rDz6zf5M.js";const b=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function a(){return b[Math.floor(Math.random()*b.length)]}const Da={title:"UI/InteractionNavItem",component:n,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"}}},o={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},p={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},i={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},c={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},d={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(n,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},Ie=[{type:"chat",label:"Chat",icon:e.jsx(Se,{className:"h-2 w-2",strokeWidth:3})},{type:"email",label:"Email",icon:e.jsx(be,{className:"h-2 w-2",strokeWidth:3})},{type:"voice",label:"Voice",icon:e.jsx(Ee,{className:"h-2 w-2",strokeWidth:3})},{type:"whatsapp",label:"WhatsApp",icon:e.jsx(Ce,{className:"h-2 w-2"})}],l={name:"Compact — Channel Icon Badge",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:Ie.map(({type:t,label:s,icon:r})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-sm p-1.5",children:[e.jsxs("span",{className:"relative inline-flex",children:[e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis","aria-hidden":"true",children:t==="email"?"SM":"RT"}),e.jsx(Ae,{shape:"circle",variant:"info",size:"md",className:"absolute -left-2 -top-2","aria-label":`${s} channel`,children:r})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary","aria-hidden":"true",children:"08:27"})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:s})]},t))})},C=[{type:"chat",elapsed:"08:00",preview:a(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:a(),removable:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:a(),current:!0,removable:!0}],A=[{type:"whatsapp",elapsed:"4m",preview:a(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0}],m={name:"Expanded — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},u={name:"Expanded — Active, Not Awaiting Response",args:{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:a()}]},parameters:{layout:"padded"}},h={name:"Expanded — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},g={name:"Expanded — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]},parameters:{layout:"padded"}},N={name:"Expanded — Multiple Channels (Active Card)",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:C},parameters:{layout:"padded"}},x={name:"Expanded — Multiple Channels (Inactive Card)",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:A},parameters:{layout:"padded"}},v={name:"Expanded — Voice Channel",args:{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:a()}]},parameters:{layout:"padded"}},y={name:"Expanded — Stacked (rail open)",render:()=>e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:C}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:A}),e.jsx(n,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]})]})},R={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:S.channelOptions,phoneOptions:S.phoneOptions,skillOptions:S.skillOptions,onStartCall:t=>{console.log("Start call:",t.channel,"→",t.contact.name)}},w={name:"Header — Add Outbound Button",render:()=>{const{launchRequest:t,onLaunchRequestHandled:s,getHeaderAction:r}=fe(R);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(Re,{title:"New Outbound",outbound:{...R,launchRequest:t,onLaunchRequestHandled:s},expanded:!0}),e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:C,headerAction:r("sofia-martinez")}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:A,headerAction:r("ray-torres")}),e.jsx(n,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:r("anonymous-voice")})]})}},f={name:"Compact — Hover Popover",render:()=>{const{launchRequest:t,onLaunchRequestHandled:s,getHeaderAction:r}=fe(R);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(Re,{title:"New Outbound",outbound:{...R,launchRequest:t,onLaunchRequestHandled:s}}),e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:C,headerAction:r("sofia-martinez")}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:A,headerAction:r("ray-torres")}),e.jsx(n,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:r("anonymous-voice")})]})}};var E,I,M;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,H,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var j,T,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var z,B,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var q,D,U;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(D=d.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var F,V,G;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(V=l.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var P,W,Y;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var X,$,K;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=($=u.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var J,Q,Z;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ae,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,se;N.parameters={...N.parameters,docs:{...(te=N.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(re=N.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,pe,ie;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var ce,de,le;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(de=v.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var me,ue,he;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,Ne,xe;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Header — Add Outbound Button",
  render: () => {
    const {
      launchRequest,
      onLaunchRequestHandled,
      getHeaderAction
    } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    return <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
        <CreateNew title="New Outbound" outbound={{
        ...NAV_ITEM_HEADER_OUTBOUND_CONFIG,
        launchRequest,
        onLaunchRequestHandled
      }}
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
            in the real app) — demonstrates getHeaderAction's fallback to
            the full unfiltered channel list instead of hiding the button. */}
        <InteractionNavItem elapsed="02:05" expanded channels={[{
        type: "voice",
        elapsed: "02:05",
        current: true,
        preview: randomSkill()
      }]} headerAction={getHeaderAction("anonymous-voice")} />
      </div>;
  }
}`,...(xe=(Ne=w.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};var ve,ye,we;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: "Compact — Hover Popover",
  render: () => {
    const {
      launchRequest,
      onLaunchRequestHandled,
      getHeaderAction
    } = useOutboundAddButton(NAV_ITEM_HEADER_OUTBOUND_CONFIG);
    return <div className="flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2">
        <CreateNew title="New Outbound" outbound={{
        ...NAV_ITEM_HEADER_OUTBOUND_CONFIG,
        launchRequest,
        onLaunchRequestHandled
      }} />
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
}`,...(we=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};const Ua=["Compact","CompactInactive","CompactNoCustomer","CompactMultiChannel","CompactStack","CompactChannelIconBadge","Expanded","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedStack","NavItemHeader","CompactHoverCard"];export{o as Compact,l as CompactChannelIconBadge,f as CompactHoverCard,p as CompactInactive,c as CompactMultiChannel,i as CompactNoCustomer,d as CompactStack,m as Expanded,u as ExpandedActiveNotAwaiting,h as ExpandedInactive,N as ExpandedMultiChannelActive,x as ExpandedMultiChannelInactive,g as ExpandedNoCustomer,y as ExpandedStack,v as ExpandedVoice,w as NavItemHeader,Ua as __namedExportsOrder,Da as default};
