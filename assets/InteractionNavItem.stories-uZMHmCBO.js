import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as t}from"./interaction-nav-item-BxaJVSX7.js";import{u as Ae,C as Re,O as A}from"./create-new-outbound-mock-CcPBtd6_.js";import{e as Ee}from"./channel-row-CYnewjbh.js";import{B as Ie}from"./badge-BsM2Tnvd.js";import{M as Me}from"./message-square-BpbTPZlK.js";import{M as Oe}from"./mail-CGsQAUqz.js";import{P as _e}from"./phone-Di4N1bEU.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./popover-CcjbzLVC.js";import"./index-BCx7cCMR.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./index-DGPY9VoV.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header--vgxnvXX.js";import"./tooltip-Dp368zAN.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./button-C72EbL54.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./chevron-down-BRCsRsv-.js";import"./user-rDz6zf5M.js";import"./circle-alert-B0P0YYAI.js";import"./triangle-alert-Btkn3DL5.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./input-CR4qwn7s.js";import"./error-icon-solid-C6_pXXD0.js";import"./label-DTtDlf5k.js";import"./circle-help-Bj2MpUE2.js";import"./select-BYXQMkla.js";import"./checkbox-ExbItJLA.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./search-aUstRSOi.js";import"./radio-button-group-D2WN6WHM.js";import"./radio-DU5uc1z_.js";import"./index-ZkoUpr8J.js";import"./table-Wcwa9dkO.js";import"./search-input-DYs2wuFz.js";import"./clear-button-Bldem66W.js";import"./filter-chip-BKrdhwZA.js";import"./sliders-horizontal-_yHPUfpC.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./arrow-up-C-teBDU4.js";import"./favorite-button-N2jDD4ol.js";import"./star-BBKukw_S.js";import"./phone-input-D-gYLtGe.js";import"./tag-Lo5TNvOI.js";import"./plus-B2SVJpWV.js";import"./layout-grid-DIlLALBe.js";import"./create-new-customers-data-cRxyiMHh.js";import"./kebab-menu-button-X2gEabCK.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./tabs-RIPQUPRN.js";import"./trash-2-yAnBWR5t.js";import"./textarea-CqWH3I5r.js";import"./warning-icon-solid-C2gh2Y-U.js";import"./circle-check-Bqo3g0Bw.js";import"./clock-xCVatdV-.js";import"./send-DPaJS59W.js";const S=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function a(){return S[Math.floor(Math.random()*S.length)]}const nn={title:"UI/InteractionNavItem",component:t,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"},collapsible:{control:"boolean"}}},s={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},o={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},p={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},i={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},l={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},He=[{type:"chat",label:"Chat",icon:e.jsx(Me,{className:"h-2 w-2",strokeWidth:3})},{type:"email",label:"Email",icon:e.jsx(Oe,{className:"h-2 w-2",strokeWidth:3})},{type:"voice",label:"Voice",icon:e.jsx(_e,{className:"h-2 w-2",strokeWidth:3})},{type:"whatsapp",label:"WhatsApp",icon:e.jsx(Ee,{className:"h-2 w-2"})}],c={name:"Compact — Channel Icon Badge",render:()=>e.jsx("div",{className:"flex items-end gap-6",children:He.map(({type:n,label:R,icon:Se})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-sm p-1.5",children:[e.jsxs("span",{className:"relative inline-flex",children:[e.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm border bg-lyra-status-info-subtle text-lyra-status-info-strong border-lyra-status-info-medium/30 lyra-body-sm-emphasis","aria-hidden":"true",children:n==="email"?"SM":"RT"}),e.jsx(Ie,{shape:"circle",variant:"info",size:"md",className:"absolute -left-2 -top-2","aria-label":`${R} channel`,children:Se})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary","aria-hidden":"true",children:"08:27"})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:R})]},n))})},r=[{type:"chat",elapsed:"08:00",preview:a(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:a(),removable:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:a(),current:!0,removable:!0}],C=[{type:"whatsapp",elapsed:"4m",preview:a(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0}],d={name:"Expanded — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},m={name:"Expanded — Active, Not Awaiting Response",args:{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:a()}]},parameters:{layout:"padded"}},u={name:"Expanded — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,collapsible:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},h={name:"Expanded — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]},parameters:{layout:"padded"}},g={name:"Expanded — Multiple Channels (Active Card)",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:r},parameters:{layout:"padded"}},N={name:"Expanded — Multiple Channels (Inactive Card)",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:C},parameters:{layout:"padded"}},x={name:"Expanded — Voice Channel",args:{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:a()}]},parameters:{layout:"padded"}},v={name:"Expanded — Collapsible (Channels Collapsed)",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channelsExpandedOverride:{expanded:!1,version:1},channels:r},parameters:{layout:"padded"}},y={name:"Expanded — Stacked (rail open)",render:()=>e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,collapsible:!0,channels:r}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,collapsible:!0,channels:C}),e.jsx(t,{elapsed:"02:05",expanded:!0,collapsible:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]})]})},b={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:A.channelOptions,phoneOptions:A.phoneOptions,skillOptions:A.skillOptions,onStartCall:n=>{console.log("Start call:",n.channel,"→",n.contact.name)}},w={name:"Header — Add Outbound Button",render:()=>{const{getHeaderAction:n}=Ae(b);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(Re,{title:"New Outbound",outbound:b,expanded:!0}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:r,headerAction:n("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:C,headerAction:n("ray-torres")}),e.jsx(t,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:n("anonymous-voice")})]})}},f={name:"Compact — Hover Popover",render:()=>{const{getHeaderAction:n}=Ae(b);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(Re,{title:"New Outbound",outbound:b}),e.jsx(t,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:r,headerAction:n("sofia-martinez")}),e.jsx(t,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:C,headerAction:n("ray-torres")}),e.jsx(t,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:n("anonymous-voice")})]})}};var E,I,M;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(I=s.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,_,H;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(_=o.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var j,T,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(T=p.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var z,B,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var L,U,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(U=l.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var V,G,P;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var W,Y,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Expanded — Active, Awaiting Response",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    // Per v2: every real card is \`collapsible\` unconditionally — the
    // chevron replaces \`headerAction\` in the header row and toggles this
    // card's own channel list independently of any other card's.
    collapsible: true,
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
}`,...(q=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var X,$,K;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Expanded — Active, Not Awaiting Response",
  args: {
    customerName: "Priya Nair",
    active: true,
    awaitingResponse: false,
    elapsed: "03:41",
    expanded: true,
    collapsible: true,
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
}`,...(K=($=m.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var J,Q,Z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Expanded — Inactive, Awaiting Response",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "06:12",
    expanded: true,
    collapsible: true,
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
}`,...(Z=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ae,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "Expanded — No Customer (not awaiting)",
  args: {
    active: false,
    awaitingResponse: false,
    elapsed: "02:05",
    expanded: true,
    collapsible: true,
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
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,re,se;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Active Card)",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    collapsible: true,
    channels: SOFIA_CHANNELS
  },
  parameters: {
    layout: "padded"
  }
}`,...(se=(re=g.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,pe,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "Expanded — Multiple Channels (Inactive Card)",
  args: {
    customerName: "Ray Torres",
    active: false,
    awaitingResponse: true,
    elapsed: "04:00",
    expanded: true,
    collapsible: true,
    channels: RAY_CHANNELS
  },
  parameters: {
    layout: "padded"
  }
}`,...(ie=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var le,ce,de;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "Expanded — Voice Channel",
  args: {
    customerName: "Marcus Webb",
    active: true,
    awaitingResponse: false,
    elapsed: "01:12",
    expanded: true,
    collapsible: true,
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
}`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,he;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "Expanded — Collapsible (Channels Collapsed)",
  args: {
    customerName: "Sofia Martinez",
    active: true,
    awaitingResponse: true,
    elapsed: "08:27",
    expanded: true,
    collapsible: true,
    channelsExpandedOverride: {
      expanded: false,
      version: 1
    },
    channels: SOFIA_CHANNELS
  },
  parameters: {
    layout: "padded"
  }
}`,...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,Ne,xe;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Expanded — Stacked (rail open)",
  render: () => <div className="flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3">
      <InteractionNavItem customerName="Sofia Martinez" active awaitingResponse elapsed="08:27" expanded collapsible channels={SOFIA_CHANNELS} />
      <InteractionNavItem customerName="Ray Torres" awaitingResponse elapsed="04:00" expanded collapsible channels={RAY_CHANNELS} />
      <InteractionNavItem elapsed="02:05" expanded collapsible channels={[{
      type: "voice",
      elapsed: "02:05",
      current: true,
      preview: randomSkill()
    }]} />
    </div>
}`,...(xe=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};var ve,ye,we;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var fe,be,Ce;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(be=f.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};const tn=["Compact","CompactInactive","CompactNoCustomer","CompactMultiChannel","CompactStack","CompactChannelIconBadge","Expanded","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedCollapsed","ExpandedStack","NavItemHeader","CompactHoverCard"];export{s as Compact,c as CompactChannelIconBadge,f as CompactHoverCard,o as CompactInactive,i as CompactMultiChannel,p as CompactNoCustomer,l as CompactStack,d as Expanded,m as ExpandedActiveNotAwaiting,v as ExpandedCollapsed,u as ExpandedInactive,g as ExpandedMultiChannelActive,N as ExpandedMultiChannelInactive,h as ExpandedNoCustomer,y as ExpandedStack,x as ExpandedVoice,w as NavItemHeader,tn as __namedExportsOrder,nn as default};
