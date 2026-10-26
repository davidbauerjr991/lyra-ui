import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Te}from"./index-DhMLlvMY.js";import{B as Fe}from"./badge-DnlHYDBX.js";import{c as f,E as T,S as je,d as j,V as i,e as s}from"./channel-row-BddCoHqk.js";import{T as y}from"./tabs-CPD8_j1Z.js";import{C as Me}from"./circle-check-CVZLkmkV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./hold-sla-GrIMLDD5.js";import"./createLucideIcon-aII_sYFw.js";import"./tag-Dcg-2iAh.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./x-CzxgOx-T.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./button-DxuJ7r2Z.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./popover-6UELhi_J.js";import"./index-DjOBIGyd.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./warning-icon-solid-B8WDO-kD.js";import"./phone-input-BZLIAdKi.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./outcome-panel-CM6HiPZw.js";import"./select-D9dW4MIp.js";import"./index-pcZVUfq6.js";import"./checkbox-KP4UZ6Eo.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./search-input-B8DT-PCU.js";import"./clear-button-C7HPU1Rg.js";import"./arrow-right-DLDQNhbU.js";import"./favorite-button-hZHvfFdy.js";import"./star-CKl-uXvS.js";import"./textarea-BEyST0ZA.js";import"./mail-BgfsS5Lx.js";import"./phone-BRlsjax8.js";import"./message-square-BL8DSnhx.js";import"./circle-alert-DucVQP5w.js";import"./triangle-alert-C66Fwj6V.js";import"./trash-2-DTLo779S.js";import"./circle-CiULE-tD.js";import"./clock-C3xVexPO.js";import"./send-dvDSLghl.js";import"./phone-incoming-Cf4fZr2m.js";import"./arrow-left-right-Cg1yeikD.js";import"./circle-play-VUnuHOtC.js";function a({children:r}){return e.jsx("div",{className:"w-[360px] overflow-hidden rounded-lyra-sm border border-lyra-border-subtle bg-lyra-bg-surface-base",children:r})}const Ua={title:"UI/ChannelRow",parameters:{backgrounds:{default:"lyra-shell"},layout:"padded"},tags:["autodocs"]},d={render:()=>e.jsx(a,{children:e.jsx(f,{elapsed:"08:27",preview:"Chat_General",isFirst:!0})})},l={render:()=>e.jsx(a,{children:e.jsx(T,{elapsed:"Now",preview:"CXi SME Email",isFirst:!0})})},p={name:"SMS",render:()=>e.jsx(a,{children:e.jsx(je,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",isFirst:!0})})},c={render:()=>e.jsx(a,{children:e.jsx(j,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",isFirst:!0})})},m={render:()=>e.jsx(a,{children:e.jsx(i,{elapsed:"01:12",preview:"Chat_General",isFirst:!0})})},t={name:"Voice — Recording",render:()=>e.jsx(a,{children:e.jsx(i,{elapsed:"03:41",preview:"General Support",isFirst:!0,recording:!0})})},o={name:"Voice — Status badge (needs outcome)",render:()=>e.jsx(a,{children:e.jsx(i,{elapsed:"03:41",preview:"General Support",isFirst:!0,statusBadge:e.jsx(Fe,{shape:"pill",color:"info",variant:"subtle",fontSize:12,icon:e.jsx(Me,{strokeWidth:2}),children:"Needs outcome · 00:42"})})})},h={name:"Chat — Awaiting Response (red chip + red time)",render:()=>e.jsx(a,{children:e.jsx(f,{elapsed:"08:27",preview:"Chat_General",awaitingResponse:!0,isFirst:!0})})},u={name:"WhatsApp — Highlighted (current + active card)",render:()=>e.jsx(a,{children:e.jsx(j,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",highlighted:!0,isFirst:!0})})},w={name:"Email — No Kebab Menu (removable=false)",render:()=>e.jsx(a,{children:e.jsx(T,{elapsed:"Now",preview:"CXi SME Email",removable:!1,isFirst:!0})})},C={name:"Voice — Different Default Menu (Listen/Download Recording)",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-2",children:"Chat/Email/SMS/WhatsApp share one default kebab menu (Send/Download Transcript, Translate Messages). Voice swaps those for recording-appropriate actions instead — open each kebab to compare."})}),e.jsx(a,{children:e.jsx(f,{elapsed:"08:27",preview:"Chat_General",isFirst:!0})}),e.jsx(a,{children:e.jsx(i,{elapsed:"01:12",preview:"Chat_General",isFirst:!0})})]})},v={name:"ChannelTab — Bar (SMS icon + label + address, kebab)",render:()=>{const[r,n]=Te.useState("sms:1");return e.jsxs(y,{children:[e.jsx(s,{type:"sms",address:"(456) 383-3329",messageCount:16,interactionId:"707535188548",active:r==="sms:1",onClick:()=>n("sms:1")}),e.jsx(s,{type:"sms",address:"(456) 555-9981",messageCount:4,interactionId:"707535188611",active:r==="sms:2",onClick:()=>n("sms:2")})]})}},g={name:"ChannelTab — No Address (redialed voice call)",render:()=>e.jsx(y,{children:e.jsx(s,{type:"voice",interactionId:"707535188720",active:!0,onClick:()=>{}})})},b={name:"ChannelTab — New Outbound (0 messages)",render:()=>e.jsx(y,{children:e.jsx(s,{type:"whatsapp",address:"@Jamie Torres",messageCount:0,interactionId:"707535188799",active:!0,onClick:()=>{}})})},x={name:"ChannelTab — Responsive Collapse (overflowMenu)",render:()=>{const[r,n]=Te.useState("sms:1");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:[`Drag the dashed box's right edge narrower than 400px — the row collapses to the active tab plus a "`,"{n}",' More" dropdown listing every other channel, same as any other `TabList overflowMenu`. Hover any tab at any width — its Tooltip always shows the full "Label address" plus message count/conversation id.']}),e.jsx("div",{className:"w-[560px] resize-x overflow-auto border border-dashed border-lyra-border-subtle p-2",children:e.jsxs(y,{overflowMenu:!0,children:[e.jsx(s,{type:"sms",address:"(456) 383-3329",messageCount:16,interactionId:"707535188548",active:r==="sms:1",onClick:()=>n("sms:1")}),e.jsx(s,{type:"whatsapp",address:"@Jamie Torres",messageCount:4,interactionId:"707535188611",active:r==="sms:2",onClick:()=>n("sms:2")}),e.jsx(s,{type:"voice",interactionId:"707535188720",active:r==="sms:3",onClick:()=>n("sms:3")}),e.jsx(s,{type:"email",address:"jamie.torres@example.com",messageCount:2,interactionId:"707535188799",active:r==="sms:4",onClick:()=>n("sms:4")})]})})]})}},S={name:"All Types — Stacked in One Card",render:()=>e.jsxs(a,{children:[e.jsx(f,{elapsed:"08:00",preview:"Chat_General",awaitingResponse:!0,isFirst:!0}),e.jsx(T,{elapsed:"Now",preview:"CXi SME Email"}),e.jsx(je,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672"}),e.jsx(j,{elapsed:"Now",preview:"CXoneSMS_1-833-457-2672",highlighted:!0}),e.jsx(i,{elapsed:"01:12",preview:"Chat_General"})]})};var F,M,N;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Frame>
      <ChatChannelRow elapsed="08:27" preview="Chat_General" isFirst />
    </Frame>
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var R,k,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" isFirst />
    </Frame>
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,_,V;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "SMS",
  render: () => <Frame>
      <SmsChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" isFirst />
    </Frame>
}`,...(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var G,I,L;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Frame>
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" isFirst />
    </Frame>
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var X,D,W;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Frame>
      <VoiceChannelRow elapsed="01:12" preview="Chat_General" isFirst />
    </Frame>
}`,...(W=(D=m.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var B,O,H,z,J;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Voice — Recording",
  render: () => <Frame>
      <VoiceChannelRow elapsed="03:41" preview="General Support" isFirst recording />
    </Frame>
}`,...(H=(O=t.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"`recording`: the timer's clock becomes a pulsing red dot while the call\n is recorded; the timer keeps counting.",...(J=(z=t.parameters)==null?void 0:z.docs)==null?void 0:J.description}}};var K,U,q,P,Q;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Voice — Status badge (needs outcome)",
  render: () => <Frame>
      <VoiceChannelRow elapsed="03:41" preview="General Support" isFirst statusBadge={<Badge shape="pill" color="info" variant="subtle" fontSize={12} icon={<CircleCheck strokeWidth={2} />}>
            Needs outcome · 00:42
          </Badge>} />
    </Frame>
}`,...(q=(U=o.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:"`statusBadge`: a consumer-supplied chip on its own line below the\n preview/timer line — here a call that ended and still needs an outcome.\n The call timer stays where it is.",...(Q=(P=o.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Chat — Awaiting Response (red chip + red time)",
  render: () => <Frame>
      <ChatChannelRow elapsed="08:27" preview="Chat_General" awaitingResponse isFirst />
    </Frame>
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "WhatsApp — Highlighted (current + active card)",
  render: () => <Frame>
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" highlighted isFirst />
    </Frame>
}`,...(re=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,te;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Email — No Kebab Menu (removable=false)",
  render: () => <Frame>
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" removable={false} isFirst />
    </Frame>
}`,...(te=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ie,de;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,pe,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "ChannelTab — Bar (SMS icon + label + address, kebab)",
  render: () => {
    const [active, setActive] = useState("sms:1");
    return <TabList>
        <ChannelTab type="sms" address="(456) 383-3329" messageCount={16} interactionId="707535188548" active={active === "sms:1"} onClick={() => setActive("sms:1")} />
        <ChannelTab type="sms" address="(456) 555-9981" messageCount={4} interactionId="707535188611" active={active === "sms:2"} onClick={() => setActive("sms:2")} />
      </TabList>;
  }
}`,...(ce=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var me,he,ue;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: "ChannelTab — No Address (redialed voice call)",
  render: () =>
  // No \`address\` and no \`messageCount\` — a redialed voice call has no
  // stored number, and voice has no message concept at all, so its
  // Tooltip's second line shows only "#{interactionId}", no address on
  // the face or first Tooltip line, no "Messages" segment either.
  <TabList>
      <ChannelTab type="voice" interactionId="707535188720" active onClick={() => {}} />
    </TabList>
}`,...(ue=(he=g.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var we,Ce,ve;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "ChannelTab — New Outbound (0 messages)",
  render: () =>
  // A freshly started outbound channel — \`messageCount={0}\` renders "0
  // Messages" on the Tooltip's second line, not a blank/missing segment.
  <TabList>
      <ChannelTab type="whatsapp" address="@Jamie Torres" messageCount={0} interactionId="707535188799" active onClick={() => {}} />
    </TabList>
}`,...(ve=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var ge,be,xe;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(xe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Se,fe,ye;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: "All Types — Stacked in One Card",
  render: () => <Frame>
      <ChatChannelRow elapsed="08:00" preview="Chat_General" awaitingResponse isFirst />
      <EmailChannelRow elapsed="Now" preview="CXi SME Email" />
      <SmsChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" />
      <WhatsAppChannelRow elapsed="Now" preview="CXoneSMS_1-833-457-2672" highlighted />
      <VoiceChannelRow elapsed="01:12" preview="Chat_General" />
    </Frame>
}`,...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};const qa=["Chat","Email","Sms","WhatsApp","Voice","VoiceRecording","VoiceWithStatusBadge","AwaitingResponse","Highlighted","NoKebabMenu","VoiceMenuDiffersFromDigital","ChannelTabBar","ChannelTabNoAddress","ChannelTabNewOutbound","ChannelTabResponsive","AllTypesStacked"];export{S as AllTypesStacked,h as AwaitingResponse,v as ChannelTabBar,b as ChannelTabNewOutbound,g as ChannelTabNoAddress,x as ChannelTabResponsive,d as Chat,l as Email,u as Highlighted,w as NoKebabMenu,p as Sms,m as Voice,C as VoiceMenuDiffersFromDigital,t as VoiceRecording,o as VoiceWithStatusBadge,c as WhatsApp,qa as __namedExportsOrder,Ua as default};
