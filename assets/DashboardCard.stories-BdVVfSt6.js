import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as r}from"./dashboard-card-B7LJ1Qb_.js";import{D as Q}from"./donut-chart-BFuHzVfw.js";import{I as n}from"./icon-DhDr6fDF.js";import{T as X}from"./tag-DxwG2peS.js";import{g as Z,T as $,a as ee,b as N,c as x,d as ae,e as C}from"./table-CNrPw7Ry.js";import{c as v}from"./utils-BLSKlp9E.js";import{C as b}from"./clock-xCVatdV-.js";import{G as y}from"./gauge-CgEhWZVI.js";import{c as re}from"./createLucideIcon-DEcfmm_F.js";import{C as te}from"./circle-check-Bqo3g0Bw.js";import{C as se,a as ne}from"./circle-minus-B5ub-CVE.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-B2u1160h.js";import"./index-1evVQkiP.js";import"./container-header-Ca2x66t9.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./separator-CVEAaEyG.js";import"./filter-chip-C1wx3jdk.js";import"./error-icon-Jj0G9Pna.js";import"./select-DfePZdut.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-nFez4jEO.js";import"./circle-help-Bj2MpUE2.js";import"./popover-CyPBLJW1.js";import"./index-DhUdNGNr.js";import"./index-MFm5DvZf.js";import"./checkbox-cemurMBH.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-CJM7PgJi.js";import"./chevron-up-DaHnz2kU.js";import"./chevron-down-BRCsRsv-.js";import"./search-aUstRSOi.js";import"./kebab-menu-button-BDzzvji6.js";import"./menu-radix-D2E6cDL6.js";import"./index-DUC4V_Df.js";import"./chevron-right-DZKRY3zX.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./sparkline-TKbslkfe.js";import"./chart-CfppZ6cd.js";import"./pencil-DdhzNlrF.js";import"./refresh-cw-BqNuqggj.js";import"./trash-2-yAnBWR5t.js";import"./search-input-CP4Hs0kz.js";import"./clear-button-DmDUWwck.js";import"./button-GxCpv2fL.js";import"./index-BDkVnVO1.js";import"./badge-go1ZjKcF.js";import"./menu-Cb0mW4XG.js";import"./input-Bj9llYuD.js";import"./sliders-horizontal-_yHPUfpC.js";import"./panel-left-CWVFPQ0g.js";import"./chevron-left-C6DiQdwt.js";import"./panel-right-CgZ2ABSM.js";import"./arrow-up-C-teBDU4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=re("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]),ga={title:"UI/Dashboard Card",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}},argTypes:{metrics:{table:{disable:!0}},children:{table:{disable:!0}},headerIcon:{table:{disable:!0}},headerSubhead:{table:{disable:!0}},headerTopSlot:{table:{disable:!0}},headerActions:{table:{disable:!0}},filterChipProps:{table:{disable:!0}},kebabMenuItems:{table:{disable:!0}},metricVariant:{control:"select",options:["divided","contained"]},showFilterChip:{control:"boolean"},showKebabMenu:{control:"boolean"},showHeaderIcon:{control:"boolean"},showHeaderSubhead:{control:"boolean"},showHeaderTag:{control:"boolean"},showHeaderText:{control:"boolean"},showContainer:{control:"boolean"},showTrend:{control:"boolean"}}},i=[{value:70,label:"Metric Name"},{value:10,label:"Metric Name"},{value:58,label:"Metric Name"},{value:2,label:"Metric Name"}],G=i.map((a,t)=>({...a,selected:t===0})),Y=[{value:70,label:"Metric Name",trend:{direction:"up",percent:12.4},sparkline:[4,6,5,8,7,10,9,12,11,14,13,16]},{value:10,label:"Metric Name",trend:{direction:"flat",percent:.4},sparkline:[8,9,8,7,8,9,8,8,9,8,7,8]},{value:58,label:"Metric Name",trend:{direction:"down",percent:-3.1},sparkline:[16,14,15,12,13,10,11,8,9,6,7,4]},{value:2,label:"Metric Name",trend:{direction:"up",percent:5.8},sparkline:[5,6,6,7,6,8,8,9,8,10,9,11]}],l={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(r,{metrics:i,metricVariant:"divided",className:"w-full border-0 bg-transparent shadow-none"})})},j=[{label:"Available",value:22,colorVar:"var(--lyra-color-status-success-strong)",dotClassName:"bg-lyra-status-success-strong"},{label:"Working",value:61,colorVar:"var(--lyra-color-status-warning-strong)",dotClassName:"bg-lyra-status-warning-strong"},{label:"Unavailable",value:17,colorVar:"var(--lyra-color-status-critical-strong)",dotClassName:"bg-lyra-status-critical-strong"}];function f(){return e.jsxs("div",{className:"flex items-center gap-6 px-4 pb-4",children:[e.jsx("div",{className:"h-[120px] w-[120px] shrink-0",children:e.jsx(Q,{data:j})}),e.jsx("div",{className:"flex flex-1 flex-col gap-2.5",children:j.map(a=>e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-2 lyra-body-md text-lyra-fg-secondary",children:[e.jsx("span",{className:v("h-2.5 w-2.5 rounded-full",a.dotClassName),"aria-hidden":"true"}),a.label]}),e.jsxs("span",{className:"lyra-heading-sm text-lyra-fg-default",children:[a.value,"%"]})]},a.label))})]})}const d={name:"Chart Widget",render:()=>e.jsx("div",{className:"p-6",children:e.jsx(r,{variant:"neutral-subtle",className:"w-full",headerTitle:"Activity",headerIcon:e.jsx(n,{icon:b,size:"md",background:"active",shape:"rounded",decorative:!0}),showFilterChip:!0,showKebabMenu:!0,children:e.jsx(f,{})})})},ie=[{label:"Available",icon:te,iconColorClassName:"text-lyra-status-success-strong",percent:22,time:"01:45:12",teamPercent:28,teamTime:"02:14:40"},{label:"Working",icon:se,iconColorClassName:"text-lyra-status-warning-strong",percent:61,time:"04:53:08",teamPercent:55,teamTime:"04:24:00"},{label:"Unavailable",icon:ne,iconColorClassName:"text-lyra-status-critical-strong",percent:17,time:"01:21:40",teamPercent:17,teamTime:"01:21:20"}];function w(){return e.jsx("div",{className:"flex flex-col gap-4 px-4 pb-4",children:ie.map(a=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-2 lyra-body-md-emphasis text-lyra-fg-default",children:[e.jsx(a.icon,{className:v("h-4 w-4",a.iconColorClassName),strokeWidth:1.5}),a.label,e.jsxs("span",{className:"lyra-body-sm text-lyra-fg-secondary font-normal",children:["(",a.percent,"%)"]})]}),e.jsx("span",{className:"lyra-body-md-emphasis tabular-nums text-lyra-fg-default",children:a.time})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3 pl-6",children:[e.jsxs("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Team (",a.teamPercent,"%)"]}),e.jsx("span",{className:"lyra-body-sm tabular-nums text-lyra-fg-secondary",children:a.teamTime})]})]},a.label))})}const c={name:"Data Card",render:()=>e.jsx("div",{className:"p-6",children:e.jsx(r,{variant:"neutral-subtle",className:"w-full",headerTitle:"Productivity",headerIcon:e.jsx(n,{icon:y,size:"md",background:"info",shape:"rounded",decorative:!0}),showFilterChip:!0,showKebabMenu:!0,children:e.jsx(w,{})})})},oe=[{id:1,name:"Outbound Collections",status:"Active",owner:"John Smith"},{id:2,name:"Winback — Q3",status:"Paused",owner:"Kevin Jensen"},{id:3,name:"Escalations Overflow",status:"Active",owner:"Priya Nair"},{id:4,name:"VIP Renewals",status:"Draft",owner:"Wei Chen"},{id:5,name:"Billing Support",status:"Active",owner:"John Smith"},{id:6,name:"Technical Support Backlog",status:"Paused",owner:"Jamie Torres"}],le={Active:"text-lyra-status-success-strong",Paused:"text-lyra-status-warning-strong",Draft:"text-lyra-fg-secondary"};function T(){const{containerRef:a,rowsPerPage:t}=Z(41,41,3),o=oe.slice(0,t);return e.jsx("div",{ref:a,className:"h-[320px] px-4 pb-4",children:e.jsxs($,{children:[e.jsx(ee,{children:e.jsxs(N,{className:"hover:bg-transparent",children:[e.jsx(x,{className:"flex-[2]",children:"Campaign"}),e.jsx(x,{className:"flex-1",children:"Status"}),e.jsx(x,{className:"flex-1",children:"Owner"})]})}),e.jsx(ae,{children:o.map(s=>e.jsxs(N,{children:[e.jsx(C,{className:"flex-[2]",children:s.name}),e.jsx(C,{className:v("flex-1",le[s.status]),children:s.status}),e.jsx(C,{className:"flex-1",children:s.owner})]},s.id))})]})})}const m={name:"Table Card",render:()=>e.jsx("div",{className:"p-6",children:e.jsx(r,{variant:"neutral-subtle",className:"w-full",headerTitle:"Campaigns",headerIcon:e.jsx(n,{icon:g,size:"md",background:"neutral",shape:"rounded",decorative:!0}),showFilterChip:!0,showKebabMenu:!0,children:e.jsx(T,{})})})},de={chart:{title:"Activity",icon:b,background:"active"},data:{title:"Productivity",icon:y,background:"info"},table:{title:"Campaigns",icon:g,background:"neutral"},metric:{title:"Metrics",icon:b,background:"active"}},h={name:"Header Controls",args:{showFilterChip:!0,showKebabMenu:!0,showHeaderIcon:!0,showHeaderSubhead:!0,showHeaderTag:!1,showHeaderText:!0,showContainer:!0,showTrend:!1,metricVariant:"divided",contentType:"chart",metricCount:4},argTypes:{contentType:{control:"select",options:["chart","data","table","metric"]},metricCount:{control:"select",options:[1,2,3,4]}},render:a=>{const t=a.contentType??"chart",o=de[t],s=a.metricCount??4,q=a.showTrend?Y:i;return e.jsx("div",{className:"p-6",children:e.jsxs(r,{variant:"neutral-subtle",className:"w-full",headerTitle:a.showHeaderText??!0?o.title:void 0,headerIcon:a.showHeaderIcon?e.jsx(n,{icon:o.icon,size:"md",background:o.background,shape:"rounded",decorative:!0}):void 0,headerSubhead:a.showHeaderSubhead?"Jan 26, 2026 at 4:00 PM":void 0,headerTopSlot:a.showHeaderTag?e.jsx(X,{label:"Anomaly",variant:"critical",shape:"pill"}):void 0,showFilterChip:a.showFilterChip,showKebabMenu:a.showKebabMenu,showContainer:a.showContainer??!0,...t==="metric"?{metrics:q.slice(0,s),metricVariant:a.metricVariant}:{},children:[t==="chart"&&e.jsx(f,{}),t==="data"&&e.jsx(w,{}),t==="table"&&e.jsx(T,{})]})})}},u={name:"Metric Card",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Divided"}),e.jsx(r,{metrics:i,metricVariant:"divided",className:"w-full border-0 bg-transparent shadow-none"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Contained — first metric selected"}),e.jsx(r,{metrics:G,metricVariant:"contained",className:"w-full border-0 bg-transparent shadow-none"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Contained — 2 columns"}),e.jsx(r,{metrics:i.slice(0,2),metricVariant:"contained",className:"w-full border-0 bg-transparent shadow-none"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Divided — with trend + sparkline"}),e.jsx(r,{metrics:Y,metricVariant:"divided",className:"w-full border-0 bg-transparent shadow-none"})]})]})},p={name:"AllVariants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-6",children:[e.jsxs("div",{className:"flex flex-col gap-6 lg:flex-row",children:[e.jsx(r,{variant:"neutral-subtle",className:"w-full",headerTitle:"Activity",headerIcon:e.jsx(n,{icon:b,size:"md",background:"active",shape:"rounded",decorative:!0}),showFilterChip:!0,showKebabMenu:!0,children:e.jsx(f,{})}),e.jsx(r,{variant:"neutral-subtle",className:"w-full",headerTitle:"Productivity",headerIcon:e.jsx(n,{icon:y,size:"md",background:"info",shape:"rounded",decorative:!0}),showFilterChip:!0,showKebabMenu:!0,children:e.jsx(w,{})}),e.jsx(r,{variant:"neutral-subtle",className:"w-full",headerTitle:"Campaigns",headerIcon:e.jsx(n,{icon:g,size:"md",background:"neutral",shape:"rounded",decorative:!0}),showFilterChip:!0,showKebabMenu:!0,children:e.jsx(T,{})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Metric — divided"}),e.jsx(r,{metrics:i,metricVariant:"divided",className:"w-full border-0 bg-transparent shadow-none"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-2",children:"Metric — contained, first selected"}),e.jsx(r,{metrics:G,metricVariant:"contained",className:"w-full border-0 bg-transparent shadow-none"})]})]})};var M,I,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <DashboardCard metrics={METRICS} metricVariant="divided" className="w-full border-0 bg-transparent shadow-none" />
    </div>
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var k,S,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Chart Widget",
  render: () => <div className="p-6">
      <DashboardCard variant="neutral-subtle" className="w-full" headerTitle="Activity" headerIcon={<Icon icon={Clock} size="md" background="active" shape="rounded" decorative />} showFilterChip showKebabMenu>
        <ChartWidgetBody />
      </DashboardCard>
    </div>
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var H,A,V;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Data Card",
  render: () => <div className="p-6">
      <DashboardCard variant="neutral-subtle" className="w-full" headerTitle="Productivity" headerIcon={<Icon icon={Gauge} size="md" background="info" shape="rounded" decorative />} showFilterChip showKebabMenu>
        <DataCardBody />
      </DashboardCard>
    </div>
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var R,F,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Table Card",
  render: () => <div className="p-6">
      <DashboardCard variant="neutral-subtle" className="w-full" headerTitle="Campaigns" headerIcon={<Icon icon={List} size="md" background="neutral" shape="rounded" decorative />} showFilterChip showKebabMenu>
        <AutoFitTableCardBody />
      </DashboardCard>
    </div>
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var P,W,K;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Header Controls",
  args: {
    showFilterChip: true,
    showKebabMenu: true,
    showHeaderIcon: true,
    showHeaderSubhead: true,
    showHeaderTag: false,
    showHeaderText: true,
    showContainer: true,
    showTrend: false,
    metricVariant: "divided",
    contentType: "chart",
    metricCount: 4
  },
  argTypes: {
    contentType: {
      control: "select",
      options: ["chart", "data", "table", "metric"]
    },
    // Both only meaningful when contentType is "metric" — see below.
    metricCount: {
      control: "select",
      options: [1, 2, 3, 4]
    }
  },
  render: args => {
    const contentType: HeaderControlsContentType = args.contentType ?? "chart";
    const header = CONTENT_TYPE_HEADER[contentType];
    const metricCount = args.metricCount ?? 4;
    const metricSource = args.showTrend ? METRICS_WITH_TREND : METRICS;
    return <div className="p-6">
        <DashboardCard variant="neutral-subtle" className="w-full" headerTitle={args.showHeaderText ?? true ? header.title : undefined} headerIcon={args.showHeaderIcon ? <Icon icon={header.icon} size="md" background={header.background} shape="rounded" decorative /> : undefined} headerSubhead={args.showHeaderSubhead ? "Jan 26, 2026 at 4:00 PM" : undefined} headerTopSlot={args.showHeaderTag ? <Tag label="Anomaly" variant="critical" shape="pill" /> : undefined} showFilterChip={args.showFilterChip} showKebabMenu={args.showKebabMenu} showContainer={args.showContainer ?? true} {...contentType === "metric" ? {
        metrics: metricSource.slice(0, metricCount),
        metricVariant: args.metricVariant
      } : {}}>
          {contentType === "chart" && <ChartWidgetBody />}
          {contentType === "data" && <DataCardBody />}
          {contentType === "table" && <AutoFitTableCardBody />}
        </DashboardCard>
      </div>;
  }
}`,...(K=(W=h.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var z,B,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Metric Card",
  render: () => <div className="flex flex-col gap-8 p-6">
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Divided</p>
        <DashboardCard metrics={METRICS} metricVariant="divided" className="w-full border-0 bg-transparent shadow-none" />
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Contained — first metric selected</p>
        <DashboardCard metrics={METRICS_WITH_SELECTION} metricVariant="contained" className="w-full border-0 bg-transparent shadow-none" />
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Contained — 2 columns</p>
        <DashboardCard metrics={METRICS.slice(0, 2)} metricVariant="contained" className="w-full border-0 bg-transparent shadow-none" />
      </div>
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Divided — with trend + sparkline</p>
        <DashboardCard metrics={METRICS_WITH_TREND} metricVariant="divided" className="w-full border-0 bg-transparent shadow-none" />
      </div>
    </div>
}`,...(O=(B=u.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var L,J,U;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "AllVariants",
  render: () => <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-col gap-6 lg:flex-row">
        <DashboardCard variant="neutral-subtle" className="w-full" headerTitle="Activity" headerIcon={<Icon icon={Clock} size="md" background="active" shape="rounded" decorative />} showFilterChip showKebabMenu>
          <ChartWidgetBody />
        </DashboardCard>

        <DashboardCard variant="neutral-subtle" className="w-full" headerTitle="Productivity" headerIcon={<Icon icon={Gauge} size="md" background="info" shape="rounded" decorative />} showFilterChip showKebabMenu>
          <DataCardBody />
        </DashboardCard>

        <DashboardCard variant="neutral-subtle" className="w-full" headerTitle="Campaigns" headerIcon={<Icon icon={List} size="md" background="neutral" shape="rounded" decorative />} showFilterChip showKebabMenu>
          <AutoFitTableCardBody />
        </DashboardCard>
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Metric — divided</p>
        <DashboardCard metrics={METRICS} metricVariant="divided" className="w-full border-0 bg-transparent shadow-none" />
      </div>

      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-2">Metric — contained, first selected</p>
        <DashboardCard metrics={METRICS_WITH_SELECTION} metricVariant="contained" className="w-full border-0 bg-transparent shadow-none" />
      </div>
    </div>
}`,...(U=(J=p.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const fa=["Default","ChartWidget","DataCard","TableCard","HeaderControls","MetricCard","AllVariants"];export{p as AllVariants,d as ChartWidget,c as DataCard,l as Default,h as HeaderControls,u as MetricCard,m as TableCard,fa as __namedExportsOrder,ga as default};
