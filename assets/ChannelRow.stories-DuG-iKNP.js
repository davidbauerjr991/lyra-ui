import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ce}from"./index-CXOcBcs0.js";import{c as g,E as S,S as he,W as T,V as y,d as r}from"./channel-row-Dp_rtFMP.js";import{T as x}from"./tabs-D-r7Vdll.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./tag-T7xhGMJ_.js";import"./index-1evVQkiP.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./kebab-menu-button-X2gEabCK.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./badge-BsM2Tnvd.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./button-DTrF7KLq.js";import"./index-BDkVnVO1.js";import"./popover-DzlchCUr.js";import"./index-C2HVhtBy.js";import"./index-C1YDQLuO.js";import"./container-header-BbK1XDO0.js";import"./select-DX3ulS80.js";import"./error-icon-solid-C6_pXXD0.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./search-aUstRSOi.js";import"./search-input-D5VKY8MN.js";import"./clear-button-vlto_6tR.js";import"./favorite-button-BTpn-oWF.js";import"./star-BBKukw_S.js";import"./textarea-DRq5Era_.js";import"./warning-icon-solid-C2gh2Y-U.js";import"./phone-Di4N1bEU.js";import"./message-square-BpbTPZlK.js";import"./mail-CGsQAUqz.js";import"./message-circle-C4dCosEG.js";import"./circle-alert-B0P0YYAI.js";import"./triangle-alert-Btkn3DL5.js";import"./circle-check-Bqo3g0Bw.js";import"./trash-2-yAnBWR5t.js";import"./clock-xCVatdV-.js";import"./user-rDz6zf5M.js";function a({children:s}){return e.jsx("div",{className:"w-[360px] overflow-hidden rounded-lyra-sm border border-lyra-border-subtle bg-lyra-bg-surface-base",children:s})}const xa={title:"UI/ChannelRow",parameters:{backgrounds:{default:"lyra-shell"},layout:"padded"},tags:["autodocs"]},t={render:()=>e.jsx(a,{children:e.jsx(g,{elapsed:"08:27",preview:"Chat_General",isFirst:!0})})},o={render:()=>e.jsx(a,{children:e.jsx(S,{elapsed:"Now",preview:"CXi SME Email",isFirst:!0})})},i={name:"SMS",render:()=>e.jsx(a,{children:e.jsx(he,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",isFirst:!0})})},l={render:()=>e.jsx(a,{children:e.jsx(T,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",isFirst:!0})})},d={render:()=>e.jsx(a,{children:e.jsx(y,{elapsed:"01:12",preview:"Chat_General",isFirst:!0})})},p={name:"Chat — Awaiting Response (red chip + red time)",render:()=>e.jsx(a,{children:e.jsx(g,{elapsed:"08:27",preview:"Chat_General",awaitingResponse:!0,isFirst:!0})})},m={name:"WhatsApp — Highlighted (current + active card)",render:()=>e.jsx(a,{children:e.jsx(T,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",highlighted:!0,isFirst:!0})})},c={name:"Email — No Kebab Menu (removable=false)",render:()=>e.jsx(a,{children:e.jsx(S,{elapsed:"Now",preview:"CXi SME Email",removable:!1,isFirst:!0})})},h={name:"Voice — Different Default Menu (Listen/Download Recording)",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-2",children:"Chat/Email/SMS/WhatsApp share one default kebab menu (Send/Download Transcript, Translate Messages). Voice swaps those for recording-appropriate actions instead — open each kebab to compare."})}),e.jsx(a,{children:e.jsx(g,{elapsed:"08:27",preview:"Chat_General",isFirst:!0})}),e.jsx(a,{children:e.jsx(y,{elapsed:"01:12",preview:"Chat_General",isFirst:!0})})]})},u={name:"ChannelTab — Bar (SMS icon + label + address, kebab)",render:()=>{const[s,n]=ce.useState("sms:1");return e.jsxs(x,{children:[e.jsx(r,{type:"sms",address:"(456) 383-3329",messageCount:16,interactionId:"707535188548",active:s==="sms:1",onClick:()=>n("sms:1")}),e.jsx(r,{type:"sms",address:"(456) 555-9981",messageCount:4,interactionId:"707535188611",active:s==="sms:2",onClick:()=>n("sms:2")})]})}},C={name:"ChannelTab — No Address (redialed voice call)",render:()=>e.jsx(x,{children:e.jsx(r,{type:"voice",interactionId:"707535188720",active:!0,onClick:()=>{}})})},w={name:"ChannelTab — New Outbound (0 messages)",render:()=>e.jsx(x,{children:e.jsx(r,{type:"whatsapp",address:"@Jamie Torres",messageCount:0,interactionId:"707535188799",active:!0,onClick:()=>{}})})},v={name:"ChannelTab — Responsive Collapse (overflowMenu)",render:()=>{const[s,n]=ce.useState("sms:1");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:[`Drag the dashed box's right edge narrower than 400px — the row collapses to the active tab plus a "`,"{n}",' More" dropdown listing every other channel, same as any other `TabList overflowMenu`. Hover any tab at any width — its Tooltip always shows the full "Label address" plus message count/conversation id.']}),e.jsx("div",{className:"w-[560px] resize-x overflow-auto border border-dashed border-lyra-border-subtle p-2",children:e.jsxs(x,{overflowMenu:!0,children:[e.jsx(r,{type:"sms",address:"(456) 383-3329",messageCount:16,interactionId:"707535188548",active:s==="sms:1",onClick:()=>n("sms:1")}),e.jsx(r,{type:"whatsapp",address:"@Jamie Torres",messageCount:4,interactionId:"707535188611",active:s==="sms:2",onClick:()=>n("sms:2")}),e.jsx(r,{type:"voice",interactionId:"707535188720",active:s==="sms:3",onClick:()=>n("sms:3")}),e.jsx(r,{type:"email",address:"jamie.torres@example.com",messageCount:2,interactionId:"707535188799",active:s==="sms:4",onClick:()=>n("sms:4")})]})})]})}},b={name:"All Types — Stacked in One Card",render:()=>e.jsxs(a,{children:[e.jsx(g,{elapsed:"08:00",preview:"Chat_General",awaitingResponse:!0,isFirst:!0}),e.jsx(S,{elapsed:"Now",preview:"CXi SME Email"}),e.jsx(he,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672"}),e.jsx(T,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",highlighted:!0}),e.jsx(y,{elapsed:"01:12",preview:"Chat_General"})]})};var f,j,F;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Frame>
      <ChatChannelRow elapsed="08:27" preview="Chat_General" isFirst />
    </Frame>
}`,...(F=(j=t.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var M,N,R;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" isFirst />
    </Frame>
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var A,k,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "SMS",
  render: () => <Frame>
      <SmsChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" isFirst />
    </Frame>
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,I,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Frame>
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" isFirst />
    </Frame>
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var X,D,G;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Frame>
      <VoiceChannelRow elapsed="01:12" preview="Chat_General" isFirst />
    </Frame>
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var V,W,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Chat — Awaiting Response (red chip + red time)",
  render: () => <Frame>
      <ChatChannelRow elapsed="08:27" preview="Chat_General" awaitingResponse isFirst />
    </Frame>
}`,...(O=(W=p.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var H,B,J;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "WhatsApp — Highlighted (current + active card)",
  render: () => <Frame>
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" highlighted isFirst />
    </Frame>
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var K,z,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Email — No Kebab Menu (removable=false)",
  render: () => <Frame>
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" removable={false} isFirst />
    </Frame>
}`,...(U=(z=c.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var q,P,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Voice — Different Default Menu (Listen/Download Recording)",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-body-sm text-lyra-fg-secondary mb-2">
          Chat/Email/SMS/WhatsApp share one default kebab menu (Send/Download Transcript, Translate Messages).
          Voice swaps those for recording-appropriate actions instead — open each kebab to compare.
        </p>
      </div>
      <Frame>
        <ChatChannelRow elapsed="08:27" preview="Chat_General" isFirst />
      </Frame>
      <Frame>
        <VoiceChannelRow elapsed="01:12" preview="Chat_General" isFirst />
      </Frame>
    </div>
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "ChannelTab — Bar (SMS icon + label + address, kebab)",
  render: () => {
    const [active, setActive] = useState("sms:1");
    return <TabList>
        <ChannelTab type="sms" address="(456) 383-3329" messageCount={16} interactionId="707535188548" active={active === "sms:1"} onClick={() => setActive("sms:1")} />
        <ChannelTab type="sms" address="(456) 555-9981" messageCount={4} interactionId="707535188611" active={active === "sms:2"} onClick={() => setActive("sms:2")} />
      </TabList>;
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,se;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "ChannelTab — No Address (redialed voice call)",
  render: () =>
  // No \`address\` and no \`messageCount\` — a redialed voice call has no
  // stored number, and voice has no message concept at all, so its
  // Tooltip's second line shows only "#{interactionId}", no address on
  // the face or first Tooltip line, no "Messages" segment either.
  <TabList>
      <ChannelTab type="voice" interactionId="707535188720" active onClick={() => {}} />
    </TabList>
}`,...(se=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,ne,te;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "ChannelTab — New Outbound (0 messages)",
  render: () =>
  // A freshly started outbound channel — \`messageCount={0}\` renders "0
  // Messages" on the Tooltip's second line, not a blank/missing segment.
  <TabList>
      <ChannelTab type="whatsapp" address="@Jamie Torres" messageCount={0} interactionId="707535188799" active onClick={() => {}} />
    </TabList>
}`,...(te=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: "ChannelTab — Responsive Collapse (overflowMenu)",
  render: () => {
    const [active, setActive] = useState("sms:1");
    // \`ChannelTab\` no longer has its own bespoke text-shedding collapse —
    // it's a normal \`Tab\`, so its \`TabList\` just uses the standard
    // \`overflowMenu\` prop like any other tab bar. Drag the dashed box's
    // right edge narrower than 400px and the row collapses to the active
    // tab + a "{n} More" dropdown listing the rest, in original order.
    return <div className="flex flex-col gap-4">
        <p className="lyra-body-sm text-lyra-fg-secondary">
          Drag the dashed box's right edge narrower than 400px — the row
          collapses to the active tab plus a "{"{n}"} More" dropdown listing
          every other channel, same as any other \`TabList overflowMenu\`.
          Hover any tab at any width — its Tooltip always shows the full
          "Label address" plus message count/conversation id.
        </p>
        <div className="w-[560px] resize-x overflow-auto border border-dashed border-lyra-border-subtle p-2">
          <TabList overflowMenu>
            <ChannelTab type="sms" address="(456) 383-3329" messageCount={16} interactionId="707535188548" active={active === "sms:1"} onClick={() => setActive("sms:1")} />
            <ChannelTab type="whatsapp" address="@Jamie Torres" messageCount={4} interactionId="707535188611" active={active === "sms:2"} onClick={() => setActive("sms:2")} />
            <ChannelTab type="voice" interactionId="707535188720" active={active === "sms:3"} onClick={() => setActive("sms:3")} />
            <ChannelTab type="email" address="jamie.torres@example.com" messageCount={2} interactionId="707535188799" active={active === "sms:4"} onClick={() => setActive("sms:4")} />
          </TabList>
        </div>
      </div>;
  }
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "All Types — Stacked in One Card",
  render: () => <Frame>
      <ChatChannelRow elapsed="08:00" preview="Chat_General" awaitingResponse isFirst />
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" />
      <SmsChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" />
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" highlighted />
      <VoiceChannelRow elapsed="01:12" preview="Chat_General" />
    </Frame>
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Sa=["Chat","Email","Sms","WhatsApp","Voice","AwaitingResponse","Highlighted","NoKebabMenu","VoiceMenuDiffersFromDigital","ChannelTabBar","ChannelTabNoAddress","ChannelTabNewOutbound","ChannelTabResponsive","AllTypesStacked"];export{b as AllTypesStacked,p as AwaitingResponse,u as ChannelTabBar,w as ChannelTabNewOutbound,C as ChannelTabNoAddress,v as ChannelTabResponsive,t as Chat,o as Email,m as Highlighted,c as NoKebabMenu,i as Sms,d as Voice,h as VoiceMenuDiffersFromDigital,l as WhatsApp,Sa as __namedExportsOrder,xa as default};
