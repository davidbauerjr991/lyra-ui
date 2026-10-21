import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{O as e,C as B}from"./create-new-outbound-mock-DpD2P51v.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-t1I_d-Gy.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-D4o1YJ5A.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-Cmi0QrKL.js";import"./index-0SMGJ9Xv.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./circle-help-DYnzmdO5.js";import"./popover-6UELhi_J.js";import"./index-DjOBIGyd.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./select-D9dW4MIp.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-KP4UZ6Eo.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-DxuJ7r2Z.js";import"./index-1evVQkiP.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./search-CZxBQJsH.js";import"./radio-button-group-tpZfuiSG.js";import"./radio-BHoD6kFR.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./table-DQEnfOgv.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./search-input-B8DT-PCU.js";import"./clear-button-C7HPU1Rg.js";import"./arrow-right-DLDQNhbU.js";import"./query-builder-CZ4lmIty.js";import"./filter-chip-J1borD9B.js";import"./toggle-group-CKd_DaOS.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sliders-horizontal-DYIYVQYC.js";import"./copy-CtBWyGKZ.js";import"./plus-BKUBo5Qt.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-hZHvfFdy.js";import"./star-CKl-uXvS.js";import"./phone-input-BZLIAdKi.js";import"./create-new-customers-data-CrGRw0jz.js";import"./phone-BRlsjax8.js";import"./mail-BgfsS5Lx.js";import"./message-square-BL8DSnhx.js";const Ze={title:"UI/CreateNew",component:B,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},tags:["autodocs"]},t={name:"Icon Button",args:{title:"New Outbound",outbound:e,expanded:!1}},r={name:"Expanded (Full Button)",args:{title:"New Outbound",outbound:e,expanded:!0}};function F({voiceOnly:o=!0,expanded:n=!0}){return I.jsx(B,{title:"New Outbound",expanded:n,outbound:o?{...e,groups:e.groups.filter(d=>d.id==="dialpad"),defaultGroupId:"dialpad",skipGroupPicker:!0}:e})}const a={name:"Voice Only (Phase 1 Dial Pad)",args:{voiceOnly:!0,expanded:!0},argTypes:{voiceOnly:{control:"boolean",description:'When true, "New Outbound" skips the group picker entirely and opens straight to the Dial Pad — the same `groups`-filtered-to-"dialpad" + `defaultGroupId` + `skipGroupPicker` wiring agent-next-gen-v3\'s "Agent Workspace 2.0 | Phase 1" page uses for its own voice-only "New Outbound" button. When false, shows the full Favorites/Agents/Teams/Skills/Customers/Dial Pad group picker.'},expanded:{control:"boolean",description:"Full-width labeled button vs. collapsed icon-only trigger"}},render:o=>I.jsx(F,{...o})},s={name:"Ad-hoc channels and address kinds",args:{title:"New Outbound",expanded:!0,outbound:{...e,adHocChannels:{phone:["voice","sms","whatsapp"],email:["email"]},channelOptions:e.channelOptions.map(o=>o.id==="whatsapp"?{...o,addressKind:"phone"}:o)}}},i={name:"Channel disabled with a reason",args:{title:"New Outbound",expanded:!0,outbound:{...e,channelDisabledReasons:{voice:"Go Available to call"}}}},p={name:"Open address listed with a reason",args:{title:"New Outbound",expanded:!0,outbound:{...e,groups:e.groups.map(o=>{var n;return{...o,contacts:(n=o.contacts)==null?void 0:n.map(d=>{var u,m;return{...d,openChannelAddresses:{sms:[((m=(u=e.phoneOptions)==null?void 0:u[0])==null?void 0:m.value)??""]},openAddressReason:"Already open"}})}})}}};var l,c,O;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Icon Button",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: false
  }
}`,...(O=(c=t.parameters)==null?void 0:c.docs)==null?void 0:O.source}}};var h,g,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Expanded (Full Button)",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: true
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var N,w,x;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Voice Only (Phase 1 Dial Pad)",
  args: {
    voiceOnly: true,
    expanded: true
  },
  argTypes: {
    voiceOnly: {
      control: "boolean",
      description: 'When true, "New Outbound" skips the group picker entirely and opens straight to the Dial Pad — the same \`groups\`-filtered-to-"dialpad" + \`defaultGroupId\` + \`skipGroupPicker\` wiring agent-next-gen-v3\\'s "Agent Workspace 2.0 | Phase 1" page uses for its own voice-only "New Outbound" button. When false, shows the full Favorites/Agents/Teams/Skills/Customers/Dial Pad group picker.'
    },
    expanded: {
      control: "boolean",
      description: "Full-width labeled button vs. collapsed icon-only trigger"
    }
  },
  render: args => <CreateNewVoiceOnlyDemo {...args} />
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,y,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Ad-hoc channels and address kinds",
  args: {
    title: "New Outbound",
    expanded: true,
    outbound: {
      ...OUTBOUND_CONFIG,
      adHocChannels: {
        phone: ["voice", "sms", "whatsapp"],
        email: ["email"]
      },
      channelOptions: OUTBOUND_CONFIG.channelOptions.map(option => option.id === "whatsapp" ? {
        ...option,
        addressKind: "phone" as const
      } : option)
    }
  }
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var v,f,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Channel disabled with a reason",
  args: {
    title: "New Outbound",
    expanded: true,
    outbound: {
      ...OUTBOUND_CONFIG,
      channelDisabledReasons: {
        voice: "Go Available to call"
      }
    }
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var U,A,G;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Open address listed with a reason",
  args: {
    title: "New Outbound",
    expanded: true,
    outbound: {
      ...OUTBOUND_CONFIG,
      groups: OUTBOUND_CONFIG.groups.map(group => ({
        ...group,
        contacts: group.contacts?.map(contact => ({
          ...contact,
          openChannelAddresses: {
            sms: [OUTBOUND_CONFIG.phoneOptions?.[0]?.value ?? ""]
          },
          openAddressReason: "Already open"
        }))
      }))
    }
  }
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const $e=["IconButton","Expanded","VoiceOnly","AdHocChannels","ChannelDisabledWithReason","OpenAddressWithReason"];export{s as AdHocChannels,i as ChannelDisabledWithReason,r as Expanded,t as IconButton,p as OpenAddressWithReason,a as VoiceOnly,$e as __namedExportsOrder,Ze as default};
