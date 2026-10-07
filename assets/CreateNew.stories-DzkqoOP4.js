import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{O as e,C as O}from"./create-new-outbound-mock-CbqToJUx.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-BOmxrDJo.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-CHxvM1hc.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./index-0SMGJ9Xv.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./select-DJKQGHZg.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-BLVj2C8E.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./search-CZxBQJsH.js";import"./radio-button-group-DL29POWk.js";import"./radio-sgkaDL_k.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./table-D1WqFmix.js";import"./search-input-CqvFZNyq.js";import"./clear-button-Cb_QiePp.js";import"./arrow-right-DLDQNhbU.js";import"./filter-chip-ChuqENFM.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-BJq5peE4.js";import"./star-CKl-uXvS.js";import"./list-item-C6oN_CzY.js";import"./phone-input-B6TiK49x.js";import"./plus-BKUBo5Qt.js";import"./create-new-customers-data-CrGRw0jz.js";import"./phone-BRlsjax8.js";import"./mail-BgfsS5Lx.js";import"./message-square-BL8DSnhx.js";const Fe={title:"UI/CreateNew",component:O,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},tags:["autodocs"]},o={name:"Icon Button",args:{title:"New Outbound",outbound:e,expanded:!1}},t={name:"Expanded (Full Button)",args:{title:"New Outbound",outbound:e,expanded:!0}};function w({voiceOnly:n=!0,expanded:b=!0}){return g.jsx(O,{title:"New Outbound",expanded:b,outbound:n?{...e,groups:e.groups.filter(h=>h.id==="dialpad"),defaultGroupId:"dialpad",skipGroupPicker:!0}:e})}const r={name:"Voice Only (Phase 1 Dial Pad)",args:{voiceOnly:!0,expanded:!0},argTypes:{voiceOnly:{control:"boolean",description:'When true, "New Outbound" skips the group picker entirely and opens straight to the Dial Pad — the same `groups`-filtered-to-"dialpad" + `defaultGroupId` + `skipGroupPicker` wiring agent-next-gen-v3\'s "Agent Workspace 2.0 | Phase 1" page uses for its own voice-only "New Outbound" button. When false, shows the full Favorites/Agents/Teams/Skills/Customers/Dial Pad group picker.'},expanded:{control:"boolean",description:"Full-width labeled button vs. collapsed icon-only trigger"}},render:n=>g.jsx(w,{...n})};var i,p,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Icon Button",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: false
  }
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var s,m,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Expanded (Full Button)",
  args: {
    title: "New Outbound",
    outbound: OUTBOUND_CONFIG,
    expanded: true
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Ge=["IconButton","Expanded","VoiceOnly"];export{t as Expanded,o as IconButton,r as VoiceOnly,Ge as __namedExportsOrder,Fe as default};
