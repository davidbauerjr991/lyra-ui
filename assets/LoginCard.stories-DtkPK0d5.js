import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./login-card-B-8FaTNp.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./button-D4EbXLB3.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-BpOJAIFg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./checkbox-KP4UZ6Eo.js";import"./label-Cmi0QrKL.js";import"./circle-help-DYnzmdO5.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./radio-BHoD6kFR.js";import"./index-DiXulCDa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./index-DDAUwIz-.js";import"./separator-97dXnQFu.js";import"./conversation-message-BlMtx5r0.js";import"./ai-process-DKgPSbgS.js";import"./icon-J1e0iagV.js";import"./progress-bar-CuQqxcLC.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./chevron-down-gMYAX9-q.js";import"./clock-C3xVexPO.js";import"./circle-alert-DucVQP5w.js";import"./rotate-ccw-DAuhNo5i.js";import"./copy-CtBWyGKZ.js";import"./triangle-alert-C66Fwj6V.js";import"./input-D4o1YJ5A.js";import"./error-icon-solid-eVlwMcX6.js";import"./container-DJxnCK6G.js";import"./container-header-CBuOVN33.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./container-footer-CU6hpAek.js";import"./app-icon-BTTpRY0S.js";import"./sun-BCrCqAo4.js";const xe={title:"UI/LoginCard",component:r,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{defaultPhoneSetup:{control:"select",options:["soft-phone","phone-number","work-station"]},defaultLaunching:{control:"boolean"}}},t={name:"Phone Setup / Integrated Soft Phone",render:()=>e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{defaultPhoneSetup:"soft-phone"})})},o={name:"Phone Setup / Phone Number",render:()=>e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{defaultPhoneSetup:"phone-number"})})},n={name:"Phone Setup / Station ID",render:()=>e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{defaultPhoneSetup:"work-station"})})},a={name:"Seeded from saved preferences",render:()=>e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{defaultPhoneSetup:"work-station",defaultStationId:"12345",defaultSavePreferences:!0,onLaunch:L=>console.log("onLaunch",L)})})},s={name:"Launching",render:()=>e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{defaultLaunching:!0})})};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Phone Setup / Integrated Soft Phone",
  render: () => <div className="flex justify-center">
      <LoginCard defaultPhoneSetup="soft-phone" />
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Phone Setup / Phone Number",
  render: () => <div className="flex justify-center">
      <LoginCard defaultPhoneSetup="phone-number" />
    </div>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,f,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Phone Setup / Station ID",
  render: () => <div className="flex justify-center">
      <LoginCard defaultPhoneSetup="work-station" />
    </div>
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,g,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Seeded from saved preferences",
  render: () => <div className="flex justify-center">
      <LoginCard defaultPhoneSetup="work-station" defaultStationId="12345" defaultSavePreferences onLaunch={preferences => console.log("onLaunch", preferences)} />
    </div>
}`,...(P=(g=a.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var x,j,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Launching",
  render: () => <div className="flex justify-center">
      <LoginCard defaultLaunching />
    </div>
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const je=["IntegratedSoftPhone","PhoneNumber","StationId","SeededFromSavedPreferences","Launching"];export{t as IntegratedSoftPhone,s as Launching,o as PhoneNumber,a as SeededFromSavedPreferences,n as StationId,je as __namedExportsOrder,xe as default};
