import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{V as S,C as i,a as t,R as e,N as y}from"./VoiceCallControls.shared-DQRd453n.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./badge-DnlHYDBX.js";import"./index-1evVQkiP.js";import"./avatar-CJbM1faC.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./menu-t1I_d-Gy.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./info-icon-CVWl96lq.js";import"./hold-sla-GrIMLDD5.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./slider-gXcIhODR.js";import"./index-pcZVUfq6.js";import"./index-CylpBFcA.js";import"./index-4W-125c9.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./circle-CiULE-tD.js";import"./grid-3x3-jse_dUe0.js";import"./file-text-DK8c8V5C.js";import"./mic-BV_p_-VJ.js";import"./ellipsis-DX1Uroy1.js";import"./clock-C3xVexPO.js";import"./play-AEg57g5O.js";const Da={title:"UI/VoiceCallControls/Variants",component:S,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s=({children:w})=>a.jsx("p",{className:"mb-2 lyra-body-sm-emphasis text-lyra-fg-secondary",children:w}),r={name:"Left Rail",render:()=>a.jsx(i,{layout:"rail",width:e,startAt:279,customerLabel:t.maya.label,customerInitials:t.maya.initials,showAddVideo:!1})},o={name:"Left Rail States",render:()=>a.jsxs("div",{className:"flex flex-wrap items-start gap-8",children:[a.jsxs("div",{children:[a.jsx(s,{children:"On hold"}),a.jsx(i,{layout:"rail",width:e,startAt:312,startOnHold:!0,customerLabel:t.maya.label,customerInitials:t.maya.initials,showAddVideo:!1})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Transcript open"}),a.jsx(i,{layout:"rail",width:e,startAt:88,startTranscriptOpen:!0,customerLabel:t.marcus.label,customerInitials:t.marcus.initials,showAddVideo:!1})]}),a.jsxs("div",{children:[a.jsx(s,{children:"With Add video (video on)"}),a.jsx(i,{layout:"rail",width:e,startAt:140,startVideoOpen:!0,customerLabel:t.sofia.label,customerInitials:t.sofia.initials})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Unmatched caller"}),a.jsx(i,{layout:"rail",width:e,startAt:45,customerLabel:t.unmatched.label,showAddVideo:!1})]}),a.jsxs("div",{children:[a.jsx(s,{children:"No transcript (button disabled)"}),a.jsx(i,{layout:"rail",width:e,startAt:64,transcript:!1,customerLabel:t.marcus.label,customerInitials:t.marcus.initials,showAddVideo:!1})]})]})},l={name:"States",render:()=>a.jsxs("div",{className:"flex flex-col gap-8",children:[a.jsxs("div",{children:[a.jsx(s,{children:"On hold (hold timer under the call timer)"}),a.jsx(i,{startAt:312,startOnHold:!0,customerLabel:t.marcus.label,customerInitials:t.marcus.initials})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Transcript open"}),a.jsx(i,{startAt:88,startTranscriptOpen:!0,customerLabel:t.marcus.label,customerInitials:t.marcus.initials})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Video on"}),a.jsx(i,{startAt:140,startVideoOpen:!0,customerLabel:t.sofia.label,customerInitials:t.sofia.initials})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Add video hidden"}),a.jsx(i,{startAt:27,showAddVideo:!1,customerLabel:"Priya Nair",customerInitials:"PN"})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Unmatched caller (no contact match: generic person avatar)"}),a.jsx(i,{startAt:45,customerLabel:t.unmatched.label})]}),a.jsxs("div",{children:[a.jsx(s,{children:'No transcript (Transcript button disabled, "Transcript not available" tooltip)'}),a.jsx(i,{startAt:64,transcript:!1,customerLabel:t.marcus.label,customerInitials:t.marcus.initials})]})]})},n={name:"Narrow (<600px) — Overflow Menu",render:()=>a.jsx(i,{width:y,startAt:58,customerLabel:t.marcus.label,customerInitials:t.marcus.initials})},d={name:"Masking Disables Record (click Mask)",render:()=>a.jsxs("div",{className:"flex flex-col gap-8",children:[a.jsxs("div",{children:[a.jsx(s,{children:"Bar"}),a.jsx(i,{startAt:132,customerLabel:t.sofia.label,customerInitials:t.sofia.initials})]}),a.jsxs("div",{children:[a.jsx(s,{children:"Left rail"}),a.jsx(i,{layout:"rail",width:e,startAt:132,customerLabel:t.sofia.label,customerInitials:t.sofia.initials,showAddVideo:!1})]})]})};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Left Rail",
  render: () => <CallDemo layout="rail" width={RAIL_WIDTH} startAt={279} customerLabel={CALLERS.maya.label} customerInitials={CALLERS.maya.initials} showAddVideo={false} />
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,L,A;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Left Rail States",
  render: () => <div className="flex flex-wrap items-start gap-8">
      <div>
        <Caption>On hold</Caption>
        <CallDemo layout="rail" width={RAIL_WIDTH} startAt={312} startOnHold customerLabel={CALLERS.maya.label} customerInitials={CALLERS.maya.initials} showAddVideo={false} />
      </div>
      <div>
        <Caption>Transcript open</Caption>
        <CallDemo layout="rail" width={RAIL_WIDTH} startAt={88} startTranscriptOpen customerLabel={CALLERS.marcus.label} customerInitials={CALLERS.marcus.initials} showAddVideo={false} />
      </div>
      <div>
        <Caption>With Add video (video on)</Caption>
        <CallDemo layout="rail" width={RAIL_WIDTH} startAt={140} startVideoOpen customerLabel={CALLERS.sofia.label} customerInitials={CALLERS.sofia.initials} />
      </div>
      <div>
        <Caption>Unmatched caller</Caption>
        <CallDemo layout="rail" width={RAIL_WIDTH} startAt={45} customerLabel={CALLERS.unmatched.label} showAddVideo={false} />
      </div>
      <div>
        <Caption>No transcript (button disabled)</Caption>
        <CallDemo layout="rail" width={RAIL_WIDTH} startAt={64} transcript={false} customerLabel={CALLERS.marcus.label} customerInitials={CALLERS.marcus.initials} showAddVideo={false} />
      </div>
    </div>
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var h,b,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex flex-col gap-8">
      <div>
        <Caption>On hold (hold timer under the call timer)</Caption>
        <CallDemo startAt={312} startOnHold customerLabel={CALLERS.marcus.label} customerInitials={CALLERS.marcus.initials} />
      </div>
      <div>
        <Caption>Transcript open</Caption>
        <CallDemo startAt={88} startTranscriptOpen customerLabel={CALLERS.marcus.label} customerInitials={CALLERS.marcus.initials} />
      </div>
      <div>
        <Caption>Video on</Caption>
        <CallDemo startAt={140} startVideoOpen customerLabel={CALLERS.sofia.label} customerInitials={CALLERS.sofia.initials} />
      </div>
      <div>
        <Caption>Add video hidden</Caption>
        <CallDemo startAt={27} showAddVideo={false} customerLabel="Priya Nair" customerInitials="PN" />
      </div>
      <div>
        <Caption>Unmatched caller (no contact match: generic person avatar)</Caption>
        <CallDemo startAt={45} customerLabel={CALLERS.unmatched.label} />
      </div>
      <div>
        <Caption>No transcript (Transcript button disabled, &quot;Transcript not available&quot; tooltip)</Caption>
        <CallDemo startAt={64} transcript={false} customerLabel={CALLERS.marcus.label} customerInitials={CALLERS.marcus.initials} />
      </div>
    </div>
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Narrow (<600px) — Overflow Menu",
  render: () => <CallDemo width={NARROW_BAR_WIDTH} startAt={58} customerLabel={CALLERS.marcus.label} customerInitials={CALLERS.marcus.initials} />
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var R,j,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Masking Disables Record (click Mask)",
  render: () => <div className="flex flex-col gap-8">
      <div>
        <Caption>Bar</Caption>
        <CallDemo startAt={132} customerLabel={CALLERS.sofia.label} customerInitials={CALLERS.sofia.initials} />
      </div>
      <div>
        <Caption>Left rail</Caption>
        <CallDemo layout="rail" width={RAIL_WIDTH} startAt={132} customerLabel={CALLERS.sofia.label} customerInitials={CALLERS.sofia.initials} showAddVideo={false} />
      </div>
    </div>
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const Ea=["LeftRail","LeftRailStates","States","NarrowOverflowMenu","MaskingDisablesRecord"];export{r as LeftRail,o as LeftRailStates,d as MaskingDisablesRecord,n as NarrowOverflowMenu,l as States,Ea as __namedExportsOrder,Da as default};
