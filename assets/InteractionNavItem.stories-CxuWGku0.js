import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./interaction-nav-item-BA7uGvQ8.js";import{u as Ne,C as we,O as C}from"./create-new-outbound-mock-BGUiKDGp.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./channel-row-gFdTDUzZ.js";import"./tag-vFMi8jZv.js";import"./index-1evVQkiP.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./kebab-menu-button-BG6m3PIv.js";import"./menu-C3iBPI2b.js";import"./chevron-right-DZKRY3zX.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./tabs-QuTI4Gjp.js";import"./chevron-down-BRCsRsv-.js";import"./phone-Di4N1bEU.js";import"./message-square-BpbTPZlK.js";import"./mail-CGsQAUqz.js";import"./clock-xCVatdV-.js";import"./triangle-alert-Btkn3DL5.js";import"./circle-check-Bqo3g0Bw.js";import"./user-rDz6zf5M.js";import"./popover-B7lHmnGD.js";import"./index-Cfrq8Ckk.js";import"./Combination-BD090wx7.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-Bfsb3MJm.js";import"./input-BgypaUyl.js";import"./error-icon-DM5nl_7y.js";import"./label-DRpt0Xe7.js";import"./select-CzSY58Al.js";import"./checkbox-BbegBx1f.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./search-aUstRSOi.js";import"./button-5FlDPGRL.js";import"./index-BDkVnVO1.js";import"./table-f6fiU3Iq.js";import"./search-input-BPFwehGD.js";import"./filter-chip-C3l-TRr7.js";import"./panel-left-CWVFPQ0g.js";import"./chevron-left-C6DiQdwt.js";import"./panel-right-CgZ2ABSM.js";import"./arrow-up-C-teBDU4.js";import"./favorite-button-DNbJO1Tv.js";import"./star-BBKukw_S.js";import"./phone-input-Df6Apnf-.js";import"./plus-B2SVJpWV.js";const S=["Chat_General","CXi SME Email","CXoneSMS_1-833-457-2672"];function a(){return S[Math.floor(Math.random()*S.length)]}const ya={title:"UI/InteractionNavItem",component:n,parameters:{backgrounds:{default:"lyra-shell"}},tags:["autodocs"],argTypes:{expanded:{control:"boolean"},active:{control:"boolean"},awaitingResponse:{control:"boolean"}}},s={name:"Compact — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:27",current:!0}]}},o={name:"Compact — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!1,channels:[{type:"chat",elapsed:"06:12",current:!0}]}},p={name:"Compact — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!1,channels:[{type:"voice",elapsed:"02:05",current:!0}]}},i={name:"Compact — Multiple Channels Open",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!1,channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}},d={name:"Compact — Stacked (rail collapsed)",render:()=>e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:[{type:"chat",elapsed:"08:00"},{type:"email",elapsed:"Now"},{type:"sms",elapsed:"Now"},{type:"whatsapp",elapsed:"Now",current:!0}]}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"06:12",channels:[{type:"chat",elapsed:"06:12",current:!0}]}),e.jsx(n,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0}]})]})},R=[{type:"chat",elapsed:"08:00",preview:a(),awaitingResponse:!0},{type:"email",elapsed:"Now",preview:a(),removable:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0},{type:"whatsapp",elapsed:"Now",preview:a(),current:!0,removable:!0}],f=[{type:"whatsapp",elapsed:"4m",preview:a(),current:!0,awaitingResponse:!0},{type:"sms",elapsed:"Now",preview:a(),removable:!0}],c={name:"Expanded — Active, Awaiting Response",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:[{type:"chat",elapsed:"08:27",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},l={name:"Expanded — Active, Not Awaiting Response",args:{customerName:"Priya Nair",active:!0,awaitingResponse:!1,elapsed:"03:41",expanded:!0,channels:[{type:"chat",elapsed:"03:41",current:!0,preview:a()}]},parameters:{layout:"padded"}},u={name:"Expanded — Inactive, Awaiting Response",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"06:12",expanded:!0,channels:[{type:"chat",elapsed:"06:12",current:!0,awaitingResponse:!0,preview:a()}]},parameters:{layout:"padded"}},m={name:"Expanded — No Customer (not awaiting)",args:{active:!1,awaitingResponse:!1,elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]},parameters:{layout:"padded"}},g={name:"Expanded — Multiple Channels (Active Card)",args:{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:R},parameters:{layout:"padded"}},h={name:"Expanded — Multiple Channels (Inactive Card)",args:{customerName:"Ray Torres",active:!1,awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:f},parameters:{layout:"padded"}},v={name:"Expanded — Voice Channel",args:{customerName:"Marcus Webb",active:!0,awaitingResponse:!1,elapsed:"01:12",expanded:!0,channels:[{type:"voice",elapsed:"01:12",current:!0,preview:a()}]},parameters:{layout:"padded"}},N={name:"Expanded — Stacked (rail open)",render:()=>e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:R}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:f}),e.jsx(n,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}]})]})},y={outboundTitle:"New Outbound",groups:[{id:"contacts",label:"Contacts",contacts:[{id:"sofia-martinez",name:"Sofia Martinez",initials:"SM",channels:["voice","email","sms","whatsapp"]},{id:"ray-torres",name:"Ray Torres",initials:"RT",channels:["voice","sms","whatsapp"]}]}],channelOptions:C.channelOptions,phoneOptions:C.phoneOptions,skillOptions:C.skillOptions,onStartCall:r=>{console.log("Start call:",r.channel,"→",r.contact.name)}},w={name:"Header — Add Outbound Button",render:()=>{const{launchRequest:r,onLaunchRequestHandled:A,getHeaderAction:t}=Ne(y);return e.jsxs("div",{className:"flex w-[320px] flex-col gap-2 rounded-lyra-lg bg-lyra-bg-surface-shell p-3",children:[e.jsx(we,{title:"New Outbound",outbound:{...y,launchRequest:r,onLaunchRequestHandled:A},expanded:!0}),e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",expanded:!0,channels:R,headerAction:t("sofia-martinez")}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",expanded:!0,channels:f,headerAction:t("ray-torres")}),e.jsx(n,{elapsed:"02:05",expanded:!0,channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:t("anonymous-voice")})]})}},x={name:"Compact — Hover Popover",render:()=>{const{launchRequest:r,onLaunchRequestHandled:A,getHeaderAction:t}=Ne(y);return e.jsxs("div",{className:"flex flex-col items-center gap-1 rounded-lyra-lg bg-lyra-bg-surface-shell p-2",children:[e.jsx(we,{title:"New Outbound",outbound:{...y,launchRequest:r,onLaunchRequestHandled:A}}),e.jsx(n,{customerName:"Sofia Martinez",active:!0,awaitingResponse:!0,elapsed:"08:27",channels:R,headerAction:t("sofia-martinez")}),e.jsx(n,{customerName:"Ray Torres",awaitingResponse:!0,elapsed:"04:00",channels:f,headerAction:t("ray-torres")}),e.jsx(n,{elapsed:"02:05",channels:[{type:"voice",elapsed:"02:05",current:!0,preview:a()}],headerAction:t("anonymous-voice")})]})}};var E,I,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var O,M,H;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(M=o.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var _,T,k;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(k=(T=p.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var z,j,L;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var q,U,B;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(U=d.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var D,F,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var G,Y,P;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var W,X,K;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(K=(X=u.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var J,Q,Z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,ae;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=h.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,pe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(pe=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var ie,de,ce;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=N.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,ue,me;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,he,ve;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const Ra=["Compact","CompactInactive","CompactNoCustomer","CompactMultiChannel","CompactStack","Expanded","ExpandedActiveNotAwaiting","ExpandedInactive","ExpandedNoCustomer","ExpandedMultiChannelActive","ExpandedMultiChannelInactive","ExpandedVoice","ExpandedStack","NavItemHeader","CompactHoverCard"];export{s as Compact,x as CompactHoverCard,o as CompactInactive,i as CompactMultiChannel,p as CompactNoCustomer,d as CompactStack,c as Expanded,l as ExpandedActiveNotAwaiting,u as ExpandedInactive,g as ExpandedMultiChannelActive,h as ExpandedMultiChannelInactive,m as ExpandedNoCustomer,N as ExpandedStack,v as ExpandedVoice,w as NavItemHeader,Ra as __namedExportsOrder,ya as default};
