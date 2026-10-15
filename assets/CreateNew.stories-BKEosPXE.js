import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{O as o,C as N}from"./create-new-outbound-mock-B4Fj5ihh.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-t1I_d-Gy.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-CpMudak3.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DBL60R1n.js";import"./index-0SMGJ9Xv.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./popover-tSwa707i.js";import"./index-BY5kmD2Q.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-ChWz-swr.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./select-N0jJDdGd.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-wvqFL4jd.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./search-CZxBQJsH.js";import"./radio-button-group-Dpdyg1D9.js";import"./radio-0NFvn28y.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./table-B_IJf8T5.js";import"./search-input-DGfFydY0.js";import"./clear-button-DgMj9nmX.js";import"./arrow-right-DLDQNhbU.js";import"./filter-chip-D1SHYby4.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-DiLCuCoS.js";import"./star-CKl-uXvS.js";import"./phone-input-c2qrcIRL.js";import"./plus-BKUBo5Qt.js";import"./create-new-customers-data-CrGRw0jz.js";import"./phone-BRlsjax8.js";import"./mail-BgfsS5Lx.js";import"./message-square-BL8DSnhx.js";const Te={title:"UI/CreateNew",component:N,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},tags:["autodocs"]},t={name:"Icon Button",args:{title:"New Outbound",outbound:o,expanded:!1}},r={name:"Expanded (Full Button)",args:{title:"New Outbound",outbound:o,expanded:!0}};function f({voiceOnly:e=!0,expanded:x=!0}){return w.jsx(N,{title:"New Outbound",expanded:x,outbound:e?{...o,groups:o.groups.filter(y=>y.id==="dialpad"),defaultGroupId:"dialpad",skipGroupPicker:!0}:o})}const n={name:"Voice Only (Phase 1 Dial Pad)",args:{voiceOnly:!0,expanded:!0},argTypes:{voiceOnly:{control:"boolean",description:'When true, "New Outbound" skips the group picker entirely and opens straight to the Dial Pad — the same `groups`-filtered-to-"dialpad" + `defaultGroupId` + `skipGroupPicker` wiring agent-next-gen-v3\'s "Agent Workspace 2.0 | Phase 1" page uses for its own voice-only "New Outbound" button. When false, shows the full Favorites/Agents/Teams/Skills/Customers/Dial Pad group picker.'},expanded:{control:"boolean",description:"Full-width labeled button vs. collapsed icon-only trigger"}},render:e=>w.jsx(f,{...e})},a={name:"Ad-hoc channels and address kinds",args:{title:"New Outbound",expanded:!0,outbound:{...o,adHocChannels:{phone:["voice","sms","whatsapp"],email:["email"]},channelOptions:o.channelOptions.map(e=>e.id==="whatsapp"?{...e,addressKind:"phone"}:e)}}};var i,p,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Icon Button",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: false
  }
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Expanded (Full Button)",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: true
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,c,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var h,O,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(O=a.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const Ae=["IconButton","Expanded","VoiceOnly","AdHocChannels"];export{a as AdHocChannels,r as Expanded,t as IconButton,n as VoiceOnly,Ae as __namedExportsOrder,Te as default};
