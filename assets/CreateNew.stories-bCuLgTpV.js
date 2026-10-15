import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{O as e,C as O}from"./create-new-outbound-mock-DqaAHYel.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-t1I_d-Gy.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-CpMudak3.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DBL60R1n.js";import"./index-0SMGJ9Xv.js";import"./tooltip-B72fooV5.js";import"./index-CBF9FTDx.js";import"./index-C-870Axa.js";import"./circle-help-DYnzmdO5.js";import"./popover-tSwa707i.js";import"./index-BY5kmD2Q.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-ChWz-swr.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./select-N0jJDdGd.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-wvqFL4jd.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./button-DGWscpRe.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./search-CZxBQJsH.js";import"./radio-button-group-Dpdyg1D9.js";import"./radio-0NFvn28y.js";import"./index-wND48WOk.js";import"./index-DDAUwIz-.js";import"./table-B_IJf8T5.js";import"./search-input-DGfFydY0.js";import"./clear-button-DgMj9nmX.js";import"./arrow-right-DLDQNhbU.js";import"./filter-chip-D1SHYby4.js";import"./sliders-horizontal-DYIYVQYC.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./favorite-button-DiLCuCoS.js";import"./star-CKl-uXvS.js";import"./phone-input-c2qrcIRL.js";import"./plus-BKUBo5Qt.js";import"./create-new-customers-data-CrGRw0jz.js";import"./phone-BRlsjax8.js";import"./mail-BgfsS5Lx.js";import"./message-square-BL8DSnhx.js";const Be={title:"UI/CreateNew",component:O,parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},tags:["autodocs"]},o={name:"Icon Button",args:{title:"New Outbound",outbound:e,expanded:!1}},t={name:"Expanded (Full Button)",args:{title:"New Outbound",outbound:e,expanded:!0}};function w({voiceOnly:n=!0,expanded:b=!0}){return g.jsx(O,{title:"New Outbound",expanded:b,outbound:n?{...e,groups:e.groups.filter(h=>h.id==="dialpad"),defaultGroupId:"dialpad",skipGroupPicker:!0}:e})}const r={name:"Voice Only (Phase 1 Dial Pad)",args:{voiceOnly:!0,expanded:!0},argTypes:{voiceOnly:{control:"boolean",description:'When true, "New Outbound" skips the group picker entirely and opens straight to the Dial Pad — the same `groups`-filtered-to-"dialpad" + `defaultGroupId` + `skipGroupPicker` wiring agent-next-gen-v3\'s "Agent Workspace 2.0 | Phase 1" page uses for its own voice-only "New Outbound" button. When false, shows the full Favorites/Agents/Teams/Skills/Customers/Dial Pad group picker.'},expanded:{control:"boolean",description:"Full-width labeled button vs. collapsed icon-only trigger"}},render:n=>g.jsx(w,{...n})};var i,p,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Fe=["IconButton","Expanded","VoiceOnly"];export{t as Expanded,o as IconButton,r as VoiceOnly,Fe as __namedExportsOrder,Be as default};
