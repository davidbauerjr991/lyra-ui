import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{A as s}from"./agent-notifications-CrIx6gnu.js";import{S as e}from"./AgentNotifications.shared-CHlbs00M.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./menu-item-uivF4bHz.js";import"./badge-Bcxq6Iyh.js";import"./index-1evVQkiP.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./draggable-BeYKS1jS.js";import"./grip-vertical-B5uO6fqM.js";import"./createLucideIcon-aII_sYFw.js";import"./panel-right-D5VBrIHO.js";import"./container-header-D4Ea_yH4.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./kebab-menu-button-9ocCcIsG.js";import"./menu-radix-CvLtHTnr.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./actions-DUeLY6Td.js";import"./button-CRbHmIRe.js";import"./spinner-xIhFAlhc.js";import"./empty-state-D8d0leFe.js";import"./maximize-2--TlG5VuC.js";import"./bell-16x-NcfM.js";import"./trash-2-DTLo779S.js";import"./ellipsis-DX1Uroy1.js";import"./triangle-alert-C66Fwj6V.js";import"./users-jAzTZfU5.js";import"./message-square-BL8DSnhx.js";const ro={title:"UI/AgentNotifications/Variants",component:s,tags:["!autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}}},t=()=>{},r={name:"States",render:()=>o.jsx("div",{className:"flex gap-6 overflow-x-auto bg-lyra-bg-surface-shell p-6",children:[{label:"Unread (some highlighted, count badge)",items:e},{label:'All read (no badge, no "Mark all as read")',items:e.map(a=>({...a,read:!0}))},{label:"Empty",items:[]}].map(({label:a,items:l})=>o.jsxs("div",{className:"flex shrink-0 flex-col gap-2",children:[o.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:a}),o.jsx("div",{className:"h-[520px] w-[320px]",children:o.jsx(s,{notifications:l,draggableVariant:"docked",onMarkAllRead:t,onClearAll:t,onDismiss:t,onNotificationClick:t,onClose:t})})]},a))})};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="flex gap-6 overflow-x-auto bg-lyra-bg-surface-shell p-6">
      {[{
      label: "Unread (some highlighted, count badge)",
      items: SAMPLE_NOTIFICATIONS
    }, {
      label: "All read (no badge, no \\"Mark all as read\\")",
      items: SAMPLE_NOTIFICATIONS.map(n => ({
        ...n,
        read: true
      }))
    }, {
      label: "Empty",
      items: []
    }].map(({
      label,
      items
    }) => <div key={label} className="flex shrink-0 flex-col gap-2">
          <p className="lyra-body-sm text-lyra-fg-secondary">{label}</p>
          <div className="h-[520px] w-[320px]">
            <AgentNotifications notifications={items} draggableVariant="docked" onMarkAllRead={noop} onClearAll={noop} onDismiss={noop} onNotificationClick={noop} onClose={noop} />
          </div>
        </div>)}
    </div>
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const eo=["States"];export{r as States,eo as __namedExportsOrder,ro as default};
