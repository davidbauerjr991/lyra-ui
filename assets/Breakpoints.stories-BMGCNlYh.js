import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-CXOcBcs0.js";import{D as Z}from"./dashboard-card-306VkGmb.js";import{T as oe,a as ne}from"./tabs-BrhZZjWf.js";import{P as ie}from"./page-header-rKFZyt_p.js";import{S as le}from"./separator-CVEAaEyG.js";import{c as de}from"./utils-BLSKlp9E.js";import{I as ce}from"./input-B6wjqCOy.js";import{S as pe}from"./select-DMNLnwue.js";import{T as he}from"./textarea-Cpw93wXN.js";import{S as me}from"./switch-EDCiJUC7.js";import{C as ye}from"./checkbox-B4rCSk8i.js";import{R as ue}from"./radio-button-group-By5ya3oH.js";import{D as xe}from"./date-picker-SSRqUwZB.js";import{P as fe}from"./phone-input-Ccd4tF7V.js";import{I as we}from"./interior-panel-aXRC0HMC.js";import{S as be}from"./side-panel-aPoRsfnJ.js";import{B as ge}from"./button-C9HuGDNI.js";import{P as ve}from"./panel-left-CWVFPQ0g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./container-DdHZIvij.js";import"./index-1evVQkiP.js";import"./container-header-yODun0G6.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./filter-chip-D8keiBov.js";import"./error-icon-Jj0G9Pna.js";import"./chevron-down-BRCsRsv-.js";import"./kebab-menu-button-B41D96xJ.js";import"./menu-radix-BemP-mIi.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./sparkline-8DyBXVpj.js";import"./chart-BRx7W-gw.js";import"./pencil-DdhzNlrF.js";import"./refresh-cw-BqNuqggj.js";import"./trash-2-yAnBWR5t.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./badge-go1ZjKcF.js";import"./breadcrumb-KE2OrVzD.js";import"./index-BDkVnVO1.js";import"./ellipsis-chVl1-lO.js";import"./panel-right-CgZ2ABSM.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./popover-B46F7YEu.js";import"./index-5dOKg3EE.js";import"./index-C1YDQLuO.js";import"./search-aUstRSOi.js";import"./index-CoT6TaLL.js";import"./check-DrRFj5bn.js";import"./minus-DYrWPnXn.js";import"./radio-BEZUIC79.js";import"./index-CWPvdnBY.js";import"./calendar-BM3lgpum.js";import"./calendar-BHEDU7EC.js";import"./use-panel-drag-resize-msSdmy1v.js";import"./minimize-2-BOwQ4FVI.js";const Ka={title:"Foundations/Breakpoints",tags:["autodocs"],parameters:{layout:"padded"}};function n({width:a=900,children:r}){return e.jsx("div",{className:"resize-x overflow-auto rounded-lyra-md border border-dashed border-lyra-border-default p-4",style:{width:a,maxWidth:"100%"},children:r})}const Ne=[{family:"Container Grid",wrap:".lyra-container-grid-wrap",query:".lyra-container-grid",thresholds:"991px, 768px",usedBy:"AgentDashboard, DashboardQueue"},{family:"Form Grid",wrap:".lyra-form-grid-wrap",query:".lyra-form-grid",thresholds:"768px, 480px",usedBy:"FormTemplate"},{family:"Card Split",wrap:".lyra-card-split-wrap",query:".lyra-card-split",thresholds:"480px",usedBy:"DashboardCard children composition; agent-next-gen-v1's Customer Information Overview tab (fields list + Latest Interaction, via -even)"},{family:"Metric Row",wrap:".lyra-metric-row-wrap",query:".lyra-metric-row",thresholds:"768px, 550px, 360px",usedBy:"DashboardCard's metrics mode"},{family:"Tab Overflow",wrap:".lyra-tab-overflow-wrap",query:".lyra-tab-overflow-full / -collapsed",thresholds:"400px",usedBy:"TabList overflowMenu"},{family:"Breadcrumb Collapse",wrap:".lyra-page-header-breadcrumb-wrap",query:"-full / -collapsed",thresholds:"480px",usedBy:"PageHeader"},{family:"Container Header Actions Boundary",wrap:".lyra-container-header-actions-wrap",query:"(boundary only — see the two families below)",thresholds:"480px",usedBy:"ContainerHeader actionsWrap prop"},{family:"Container Header Filter Collapse",wrap:".lyra-container-header-actions-wrap",query:"-filter-full / -filter-compact / -filter-trigger",thresholds:"480px (same boundary as Actions Boundary above)",usedBy:"agent-next-gen-v1's DateFilterChip / ContactHistoryDateFilterChip"},{family:"Container Header Search Inline/Below",wrap:".lyra-container-header-actions-wrap",query:"-search-inline / -search-below",thresholds:"480px (same boundary as Actions Boundary above)",usedBy:"agent-next-gen-v1's ContactHistoryCard (via ContainerHeader's tabs slot)"},{family:"Transcript Avatar Collapse",wrap:".lyra-transcript-wrap",query:".lyra-transcript-avatar",thresholds:"400px",usedBy:"agent-next-gen-v1's InteractionTranscript message bubbles"}],d={name:"Overview",render:()=>e.jsxs("div",{className:"max-w-[1100px]",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h2",{className:"lyra-heading-xl text-lyra-fg-default mb-1",children:"Breakpoints"}),e.jsxs("p",{className:"lyra-body-lg text-lyra-fg-secondary max-w-[700px]",children:["Almost every responsive threshold in lyra-ui is a CSS"," ",e.jsx("span",{className:"font-mono",children:"@container"})," query, not a"," ",e.jsx("span",{className:"font-mono",children:"@media"})," query — a plain"," ",e.jsx("span",{className:"font-mono",children:"@media"})," query only reacts to the browser window resizing, so it can't catch a side panel or nav opening and shrinking a component's actual available width while the window itself stays the same size. A container query measures the nearest ancestor container element instead, so it reacts correctly either way. Every story below is a real component (or real utility class) wrapped in a draggable box — drag its right edge to see the collapse happen live, at the exact pixel thresholds listed here."]})]}),e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-lyra-border-medium",children:[e.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Family"}),e.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Wrapper class"}),e.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Query class"}),e.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Thresholds"}),e.jsx("th",{className:"py-2 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Used by"})]})}),e.jsx("tbody",{children:Ne.map(a=>e.jsxs("tr",{className:"border-b border-lyra-border-subtle",children:[e.jsx("td",{className:"py-3 pr-4 lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap",children:a.family}),e.jsx("td",{className:"py-3 pr-4 lyra-body-md text-lyra-fg-disabled font-mono whitespace-nowrap",children:a.wrap}),e.jsx("td",{className:"py-3 pr-4 lyra-body-md text-lyra-fg-action font-mono whitespace-nowrap",children:a.query}),e.jsx("td",{className:"py-3 pr-4 lyra-body-md text-lyra-fg-secondary whitespace-nowrap",children:a.thresholds}),e.jsx("td",{className:"py-3 lyra-body-md text-lyra-fg-secondary",children:a.usedBy})]},a.family))})]}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-6 max-w-[700px]",children:'Two other, structurally different cases exist outside this table — see the "Viewport Media Query" and "JS-Measured Thresholds" stories further down.'})]})};function b({label:a}){return e.jsx("div",{className:"flex h-24 flex-1 items-center justify-center rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-shell lyra-body-sm-emphasis text-lyra-fg-secondary",children:a})}function je({count:a,showMetricRows:r,metricCount:s}){return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("span",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:[a," card",a>1?"s":""]}),e.jsx("div",{className:"lyra-container-grid-wrap",children:e.jsx("div",{className:"lyra-container-grid",children:Array.from({length:a},(t,o)=>r?e.jsx(Z,{metrics:ee.slice(0,s),metricVariant:"contained"},o):e.jsx(b,{label:`Card ${o+1}`},o))})})]})}const c={name:"Container Grid",argTypes:{showMetricRows:{name:"Show metric rows in card slots",control:"boolean"},metricCount:{name:"Metrics per row",control:{type:"range",min:1,max:4,step:1},if:{arg:"showMetricRows",truthy:!0}}},args:{showMetricRows:!1,metricCount:3},render:a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:'A row of summary cards (`AgentDashboard`\'s Performance/Productivity row). Cards stay inline and evenly split the row regardless of how many there are — 6-up down to 1-up are all shown below at full width — collapsing to a 2-up grid at ≤991px, then a single column at ≤768px, for every count. Container Grid holds any card type — turn on "Show metric rows" below to swap the placeholders for real `DashboardCard` metric rows, and use "Metrics per row" to see each one stay independently responsive to its own card\'s width (its own `.lyra-metric-row-wrap` boundary — see the Metric Row story) no matter how the outer grid has collapsed around it.'}),e.jsx(n,{width:1100,children:e.jsx("div",{className:"flex flex-col gap-6",children:[6,5,4,3,2,1].map(r=>e.jsx(je,{count:r,showMetricRows:a.showMetricRows,metricCount:a.metricCount},r))})})]})},Te=`
  .form-grid-static-field {
    flex: 0 0 auto;
    width: clamp(240px, calc((100cqi - 48px) / 4), 320px);
  }
  @container (max-width: 1007px) {
    .form-grid-static-field {
      width: clamp(240px, calc((100cqi - 32px) / 3), 320px);
    }
  }
  @container (max-width: 751px) {
    .form-grid-static-field {
      width: clamp(240px, calc((100cqi - 16px) / 2), 320px);
    }
  }
  @container (max-width: 495px) {
    .form-grid-static-field {
      width: 100%;
    }
  }
`,Se=[{value:"input",label:"Input Field"},{value:"select",label:"Select"},{value:"textarea",label:"Text Area"},{value:"switch",label:"Switch"},{value:"checkbox",label:"Checkbox"},{value:"radio-group",label:"Radio Group"},{value:"date-picker",label:"Date Picker"},{value:"phone-input",label:"Phone Input"}],Ce=[{value:"opt-1",label:"Option 1"},{value:"opt-2",label:"Option 2"},{value:"opt-3",label:"Option 3"}],Re=[{value:"a",label:"Option A"},{value:"b",label:"Option B"}];function ke({label:a,staticWidth:r,fieldType:s="input"}){let t;switch(s){case"select":t=e.jsx(pe,{label:a,placeholder:"Select...",options:Ce});break;case"textarea":t=e.jsx(he,{label:a,rows:2});break;case"switch":t=e.jsx(me,{label:a});break;case"checkbox":t=e.jsx(ye,{label:a});break;case"radio-group":t=e.jsx(ue,{label:a,options:Re,orientation:"horizontal"});break;case"date-picker":t=e.jsx(xe,{label:a});break;case"phone-input":t=e.jsx(fe,{label:a});break;case"input":default:t=e.jsx(ce,{label:a,placeholder:a});break}return e.jsx("div",{className:r?"form-grid-static-field":"flex-1",children:t})}const Be=["First Name","Last Name","Email","Phone"];function Pe({count:a,staticWidth:r,fieldType:s}){return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("span",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:[a," field",a>1?"s":""]}),e.jsx("div",{className:"lyra-form-grid-wrap",children:e.jsx("div",{className:de("lyra-form-grid",r&&"items-start"),style:r?{display:"flex",flexDirection:"row",flexWrap:"wrap"}:void 0,children:Be.slice(0,a).map(t=>e.jsx(ke,{label:t,staticWidth:r,fieldType:s},t))})})]})}const p={name:"Form Grid",args:{staticWidth:!1,fieldType:"input"},argTypes:{staticWidth:{name:"Static Width",control:"boolean"},fieldType:{name:"Field Type",control:"select",options:Se.map(a=>a.value)}},render:a=>{const r=a.staticWidth??!1,s=a.fieldType??"input";return e.jsxs("div",{className:"flex flex-col gap-4",children:[r&&e.jsx("style",{children:Te}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:`\`FormTemplate\`'s field grid — the same two-stage collapse as Container Grid, but its own narrower thresholds: 2-up at ≤768px, single column at ≤480px. 4-up down to 1-up are all shown below at full width. Each field is a real, swappable lyra-ui component — use "Field Type" to render every slot as an Input, Select, Text Area, Switch, Checkbox, Radio Group, Date Picker, or Phone Input. "Static Width" keeps every field between a 320px ceiling and a 240px floor — and every field is exactly the same size at any given width, regardless of which row it's in or how many fields that row happens to have (a size based on how many fields share a row would size a lone field very differently than one of four). Rather than one continuous shrink, sizing runs as four stages — one per "how many fields currently fit side by side" (4/3/2/1) — each ramping from the 320px ceiling down to the 240px floor as the row narrows, snapping back UP to the 320px ceiling the instant a field drops to the next line (there's now one fewer field splitting the same space), then shrinking again until the next drop. Fields hold their position and wrap onto the next line purely once they no longer fit at their current shared size, rather than snapping into the 2-up/1-up grid stages the stretchy fields above use. Once the row is too narrow to fit two fields at their 240px floor (≤495px), every field is necessarily alone on its own line — at that point it stretches to fill the full row width instead of snapping back to a 320px ceiling with nothing left to size against.`}),e.jsx(n,{width:1100,children:e.jsx("div",{className:"flex flex-col gap-6",children:[4,3,2,1].map(t=>e.jsx(Pe,{count:t,staticWidth:r,fieldType:s},t))})})]})}},h={name:"Card Split",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"A `DashboardCard` body split into a fixed stat column beside a chart/empty-state region — row layout by default, stacking to a column (divider hidden) at ≤480px."}),e.jsx(n,{width:600,children:e.jsx("div",{className:"lyra-card-split-wrap",children:e.jsxs("div",{className:"lyra-card-split",children:[e.jsxs("div",{className:"lyra-card-split-fixed flex flex-col gap-3",children:[e.jsx(b,{label:"Stat A"}),e.jsx(b,{label:"Stat B"})]}),e.jsx(le,{orientation:"vertical",className:"lyra-card-split-divider h-auto self-stretch"}),e.jsx("div",{className:"lyra-card-split-chart flex items-center justify-center rounded-lyra-lg border border-dashed border-lyra-border-subtle text-lyra-fg-disabled lyra-body-sm",children:"Chart area"})]})})})]})},ee=[{value:70,label:"Subhead"},{value:10,label:"Subhead"},{value:58,label:"Subhead"},{value:2,label:"Subhead"}];function Me({count:a}){return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("span",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:[a,"-up"]}),e.jsx(Z,{metrics:ee.slice(0,a),metricVariant:"contained",className:"w-full border-0 bg-transparent shadow-none"})]})}const m={name:"Metric Row (Dashboard Card)",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:'`DashboardCard`\'s `metrics` mode, "contained" variant (each metric in its own bordered box) — three ordered stages as it narrows: ≤768px moves any sparkline below its text (not shown here — these use plain generic numbers/subheads with no sparkline data), ≤550px becomes a 2-up grid, ≤360px drops to a single column. 4-up, 3-up, 2-up, and 1-up are shown below at full width. This is the real `DashboardCard` component — its own `.lyra-metric-row-wrap` boundary is applied internally.'}),e.jsx(n,{children:e.jsx("div",{className:"flex flex-col gap-6",children:[4,3,2,1].map(a=>e.jsx(Me,{count:a},a))})})]})},T=["Overview","Details","Tickets","Accounts","Interactions","Directory","History"];function De(){const[a,r]=i.useState(T[0]);return e.jsx(oe,{overflowMenu:!0,"aria-label":"Overflow demo tabs",children:T.map(s=>e.jsx(ne,{active:a===s,onClick:()=>r(s),children:s},s))})}const y={name:"Tab Overflow Menu",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:'`TabList overflowMenu="wide"` (the default) — the real `TabList` component, `.lyra-tab-overflow-wrap` applied internally. At ≤400px the whole row collapses to exactly two full-width slots: the active tab, and a "N More" dropdown holding every other tab in order.'}),e.jsx(n,{children:e.jsx(De,{})})]})},u={name:"Breadcrumb Collapse",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"`PageHeader`'s breadcrumb slot — below ≤480px of the slot's own width, every parent crumb collapses behind a single ellipsis trigger (its popover lists them all) so the current-page title truncates on one line instead of the trail wrapping onto a second."}),e.jsx(n,{width:560,children:e.jsx("div",{className:"rounded-lyra-md border border-lyra-border-subtle overflow-hidden",children:e.jsx(ie,{title:"This is a very long parent name that needs to truncate",breadcrumb:[{label:"Dashboards"},{label:"Sales"},{label:"Q3 Reports"}]})})})]})},x={name:"Viewport Media Query (TransferBox)",parameters:{docs:{description:{story:"TransferBox is the one component in lyra-ui using a real viewport @media query (Tailwind's `md:`, @media (min-width: 768px)) instead of a container query — it switches its two-list-plus-arrows layout from a column stack to a row arrangement at that width. Because this reacts to the actual browser viewport, not a container's own width, it CANNOT be demonstrated with a resize-x box the way every other story on this page is — dragging a box's edge has no effect on it. To see it collapse, shrink the Storybook preview panel itself (or use the toolbar's Viewport addon) below 768px."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary max-w-[700px]",children:["Unlike every other story on this page, this one is NOT driven by a container query — it's a real"," ",e.jsx("span",{className:"font-mono",children:"@media (min-width: 768px)"})," (Tailwind's `md:`) on `TransferBox`. A resize-x box can't demonstrate it, since it only reacts to the actual browser viewport, not a wrapping div's width. Shrink the Storybook preview panel itself below 768px (or use the toolbar's Viewport addon) to see its layout switch from a row of two lists to a stacked column."]}),e.jsxs("div",{className:"rounded-lyra-md border border-dashed border-lyra-border-default p-4 lyra-body-sm text-lyra-fg-secondary",children:["See ",e.jsx("span",{className:"font-mono",children:"Custom Primitives/TransferBox"})," for the live component."]})]})};function Ae(){const a=i.useRef(null),[r,s]=i.useState(9999);return i.useEffect(()=>{const t=a.current;if(!t)return;s(t.getBoundingClientRect().width);const o=new ResizeObserver(([w])=>s(w.contentRect.width));return o.observe(t),()=>o.disconnect()},[]),[a,r]}function Oe(){const[a,r]=i.useState(!0);return e.jsxs("div",{className:"relative flex h-[320px] overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsxs("div",{className:"flex flex-1 flex-col items-start gap-3 p-4",children:[e.jsx(ge,{onClick:()=>r(s=>!s),children:"Toggle Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Main content column."})]}),e.jsx(we,{side:"right",open:a,headerTitle:"Details",onClose:()=>r(!1),children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Panel content goes here."})})})]})}function S({threshold:a,label:r}){const[s,t]=Ae(),o=t<a,[w,ae]=i.useState(!0),[re,g]=i.useState(!1),v=i.useRef(),l=o?!1:w,te=l||re,N=()=>{clearTimeout(v.current),g(!0)},j=()=>{v.current=setTimeout(()=>g(!1),300)};return e.jsxs("div",{ref:s,className:"relative flex h-40 overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[e.jsx(be,{side:"left",open:te,pinned:l,onPinToggle:o?void 0:()=>ae(se=>!se),headerTitle:r,width:220,onMouseEnter:l?void 0:N,onMouseLeave:l?void 0:j}),e.jsxs("div",{className:"flex flex-1 flex-col items-start justify-center gap-2 p-4",children:[!l&&e.jsx("button",{onMouseEnter:N,onMouseLeave:j,className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary transition-colors hover:bg-lyra-state-hover","aria-label":"Hover to reveal panel",children:e.jsx(ve,{className:"h-5 w-5",strokeWidth:1.5,"aria-hidden":"true"})}),e.jsxs("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Measured width: ",Math.round(t),"px —"," ",o?`pin disabled, hover the icon to reveal (< ${a}px)`:`pinned (≥ ${a}px) — click the pin icon to unpin`]})]})]})}const f={name:"JS-Measured Thresholds",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary max-w-[700px]",children:'Three components measure their own rendered width with `ResizeObserver` and React state instead of a CSS container query — all three now share the same 1024px threshold, deliberately, rather than each picking its own nearby value. `InteriorPanel` measures its own PARENT element\'s width, switching from a normal inline flex child to a `position: absolute` overlay below 1024px (previously 1050px) — shown below as the real component (it renders standalone, so there\'s no reason to reproduce it separately). The other two are the real `SidePanel` component wired to the exact "container-width pin guard" `AdminShell` and the "Agent Next Gen" template each apply to it: below 1024px, `pinned` is forced to `false` and the pin button disappears entirely, falling back to hover-to-reveal — widening back out above it restores the pinned state automatically, rather than requiring a manual re-pin. `AdminShell`\'s real guard has always used 1024px; the "Agent Next Gen" template\'s own copy (`AgentNextGenTemplate.stories.tsx`, which isn\'t a standalone exported component, so it\'s not embeddable here directly) previously used 768px, unified per "the side panel components for admin and agent should functionally be the same ... from a responsiveness perspective they should not be different." Drag each box\'s edge to see it flip; use "Toggle Panel" on the first one to open/close it, the pin icon on the other two to pin/unpin, and hover the panel-toggle icon to reveal them when unpinned.'}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(n,{width:1200,children:e.jsx(Oe,{})}),e.jsx(n,{width:1200,children:e.jsx(S,{threshold:1024,label:"AdminShell (real threshold: 1024px)"})}),e.jsx(n,{width:1200,children:e.jsx(S,{threshold:1024,label:'"Agent Next Gen" template (real threshold: 1024px)'})})]})]})};var C,R,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Overview",
  render: () => <div className="max-w-[1100px]">
      <div className="mb-8">
        <h2 className="lyra-heading-xl text-lyra-fg-default mb-1">Breakpoints</h2>
        <p className="lyra-body-lg text-lyra-fg-secondary max-w-[700px]">
          Almost every responsive threshold in lyra-ui is a CSS{" "}
          <span className="font-mono">@container</span> query, not a{" "}
          <span className="font-mono">@media</span> query — a plain{" "}
          <span className="font-mono">@media</span> query only reacts to the
          browser window resizing, so it can't catch a side panel or nav
          opening and shrinking a component's actual available width while
          the window itself stays the same size. A container query measures
          the nearest ancestor container element instead, so it reacts
          correctly either way. Every story below is a real component (or
          real utility class) wrapped in a draggable box — drag its right
          edge to see the collapse happen live, at the exact pixel
          thresholds listed here.
        </p>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-lyra-border-medium">
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Family</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Wrapper class</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Query class</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Thresholds</th>
            <th className="py-2 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Used by</th>
          </tr>
        </thead>
        <tbody>
          {REGISTRY.map(r => <tr key={r.family} className="border-b border-lyra-border-subtle">
              <td className="py-3 pr-4 lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap">{r.family}</td>
              <td className="py-3 pr-4 lyra-body-md text-lyra-fg-disabled font-mono whitespace-nowrap">{r.wrap}</td>
              <td className="py-3 pr-4 lyra-body-md text-lyra-fg-action font-mono whitespace-nowrap">{r.query}</td>
              <td className="py-3 pr-4 lyra-body-md text-lyra-fg-secondary whitespace-nowrap">{r.thresholds}</td>
              <td className="py-3 lyra-body-md text-lyra-fg-secondary">{r.usedBy}</td>
            </tr>)}
        </tbody>
      </table>

      <p className="lyra-body-sm text-lyra-fg-secondary mt-6 max-w-[700px]">
        Two other, structurally different cases exist outside this table —
        see the "Viewport Media Query" and "JS-Measured Thresholds" stories
        further down.
      </p>
    </div>
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,P,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Container Grid",
  argTypes: {
    showMetricRows: {
      name: "Show metric rows in card slots",
      control: "boolean"
    },
    metricCount: {
      name: "Metrics per row",
      control: {
        type: "range",
        min: 1,
        max: 4,
        step: 1
      },
      if: {
        arg: "showMetricRows",
        truthy: true
      }
    }
  },
  args: {
    showMetricRows: false,
    metricCount: 3
  },
  render: args => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        A row of summary cards (\`AgentDashboard\`'s Performance/Productivity
        row). Cards stay inline and evenly split the row regardless of how
        many there are — 6-up down to 1-up are all shown below at full
        width — collapsing to a 2-up grid at ≤991px, then a single column
        at ≤768px, for every count. Container Grid holds any card type —
        turn on "Show metric rows" below to swap the placeholders for real
        \`DashboardCard\` metric rows, and use "Metrics per row" to see each
        one stay independently responsive to its own card's width (its own
        \`.lyra-metric-row-wrap\` boundary — see the Metric Row story) no
        matter how the outer grid has collapsed around it.
      </p>
      <ResizeBox width={1100}>
        <div className="flex flex-col gap-6">
          {[6, 5, 4, 3, 2, 1].map(count => <ContainerGridRow key={count} count={count} showMetricRows={args.showMetricRows} metricCount={args.metricCount} />)}
        </div>
      </ResizeBox>
    </div>
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var D,A,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Form Grid",
  args: {
    staticWidth: false,
    fieldType: "input" as FormFieldType
  },
  argTypes: {
    staticWidth: {
      name: "Static Width",
      control: "boolean"
    },
    fieldType: {
      name: "Field Type",
      control: "select",
      options: FIELD_TYPE_OPTIONS.map(o => o.value)
    }
  },
  render: args => {
    const staticWidth = (args as {
      staticWidth?: boolean;
    }).staticWidth ?? false;
    const fieldType = (args as {
      fieldType?: FormFieldType;
    }).fieldType ?? "input";
    return <div className="flex flex-col gap-4">
        {staticWidth && <style>{FORM_GRID_STATIC_FIELD_CSS}</style>}
        <p className="lyra-body-sm text-lyra-fg-secondary">
          \`FormTemplate\`'s field grid — the same two-stage collapse as
          Container Grid, but its own narrower thresholds: 2-up at ≤768px,
          single column at ≤480px. 4-up down to 1-up are all shown below at
          full width. Each field is a real, swappable lyra-ui component —
          use "Field Type" to render every slot as an Input, Select, Text
          Area, Switch, Checkbox, Radio Group, Date Picker, or Phone Input.
          "Static Width" keeps every field between a 320px ceiling and a
          240px floor — and every field is exactly the same size at any
          given width, regardless of which row it's in or how many fields
          that row happens to have (a size based on how many fields share
          a row would size a lone field very differently than one of
          four). Rather than one continuous shrink, sizing runs as four
          stages — one per "how many fields currently fit side by side"
          (4/3/2/1) — each ramping from the 320px ceiling down to the
          240px floor as the row narrows, snapping back UP to the 320px
          ceiling the instant a field drops to the next line (there's now
          one fewer field splitting the same space), then shrinking again
          until the next drop. Fields hold their position and wrap onto
          the next line purely once they no longer fit at their current
          shared size, rather than snapping into the 2-up/1-up grid stages
          the stretchy fields above use. Once the row is too narrow to fit
          two fields at their 240px floor (≤495px), every field is
          necessarily alone on its own line — at that point it stretches
          to fill the full row width instead of snapping back to a 320px
          ceiling with nothing left to size against.
        </p>
        <ResizeBox width={1100}>
          <div className="flex flex-col gap-6">
            {[4, 3, 2, 1].map(count => <FormGridRow key={count} count={count} staticWidth={staticWidth} fieldType={fieldType} />)}
          </div>
        </ResizeBox>
      </div>;
  }
}`,...(O=(A=p.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var z,F,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Card Split",
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        A \`DashboardCard\` body split into a fixed stat column beside a
        chart/empty-state region — row layout by default, stacking to a
        column (divider hidden) at ≤480px.
      </p>
      <ResizeBox width={600}>
        <div className="lyra-card-split-wrap">
          <div className="lyra-card-split">
            <div className="lyra-card-split-fixed flex flex-col gap-3">
              <PlaceholderCard label="Stat A" />
              <PlaceholderCard label="Stat B" />
            </div>
            <Separator orientation="vertical" className="lyra-card-split-divider h-auto self-stretch" />
            <div className="lyra-card-split-chart flex items-center justify-center rounded-lyra-lg border border-dashed border-lyra-border-subtle text-lyra-fg-disabled lyra-body-sm">
              Chart area
            </div>
          </div>
        </div>
      </ResizeBox>
    </div>
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var G,q,E;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Metric Row (Dashboard Card)",
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        \`DashboardCard\`'s \`metrics\` mode, "contained" variant (each metric in
        its own bordered box) — three ordered stages as it narrows: ≤768px
        moves any sparkline below its text (not shown here — these use plain
        generic numbers/subheads with no sparkline data), ≤550px becomes a
        2-up grid, ≤360px drops to a single column. 4-up, 3-up, 2-up, and
        1-up are shown below at full width. This is the real \`DashboardCard\`
        component — its own \`.lyra-metric-row-wrap\` boundary is applied
        internally.
      </p>
      <ResizeBox>
        <div className="flex flex-col gap-6">
          {[4, 3, 2, 1].map(count => <MetricRowDemoRow key={count} count={count} />)}
        </div>
      </ResizeBox>
    </div>
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var _,W,L;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Tab Overflow Menu",
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        \`TabList overflowMenu="wide"\` (the default) — the real \`TabList\`
        component, \`.lyra-tab-overflow-wrap\` applied internally. At ≤400px
        the whole row collapses to exactly two full-width slots: the active
        tab, and a "N More" dropdown holding every other tab in order.
      </p>
      <ResizeBox>
        <TabOverflowDemo />
      </ResizeBox>
    </div>
}`,...(L=(W=y.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var H,V,Q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Breadcrumb Collapse",
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        \`PageHeader\`'s breadcrumb slot — below ≤480px of the slot's own
        width, every parent crumb collapses behind a single ellipsis
        trigger (its popover lists them all) so the current-page title
        truncates on one line instead of the trail wrapping onto a second.
      </p>
      <ResizeBox width={560}>
        <div className="rounded-lyra-md border border-lyra-border-subtle overflow-hidden">
          <PageHeader title="This is a very long parent name that needs to truncate" breadcrumb={[{
          label: "Dashboards"
        }, {
          label: "Sales"
        }, {
          label: "Q3 Reports"
        }]} />
        </div>
      </ResizeBox>
    </div>
}`,...(Q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};var J,U,Y;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Viewport Media Query (TransferBox)",
  parameters: {
    docs: {
      description: {
        story: "TransferBox is the one component in lyra-ui using a real viewport @media query (Tailwind's \`md:\`, @media (min-width: 768px)) instead of a container query — it switches its two-list-plus-arrows layout from a column stack to a row arrangement at that width. Because this reacts to the actual browser viewport, not a container's own width, it CANNOT be demonstrated with a resize-x box the way every other story on this page is — dragging a box's edge has no effect on it. To see it collapse, shrink the Storybook preview panel itself (or use the toolbar's Viewport addon) below 768px."
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <p className="lyra-body-sm text-lyra-fg-secondary max-w-[700px]">
        Unlike every other story on this page, this one is NOT driven by a
        container query — it's a real{" "}
        <span className="font-mono">@media (min-width: 768px)</span> (Tailwind's
        \`md:\`) on \`TransferBox\`. A resize-x box can't demonstrate it, since it
        only reacts to the actual browser viewport, not a wrapping div's
        width. Shrink the Storybook preview panel itself below 768px (or use
        the toolbar's Viewport addon) to see its layout switch from a row of
        two lists to a stacked column.
      </p>
      <div className="rounded-lyra-md border border-dashed border-lyra-border-default p-4 lyra-body-sm text-lyra-fg-secondary">
        See <span className="font-mono">Custom Primitives/TransferBox</span> for
        the live component.
      </div>
    </div>
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,K,X;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "JS-Measured Thresholds",
  render: () => <div className="flex flex-col gap-6">
      <p className="lyra-body-sm text-lyra-fg-secondary max-w-[700px]">
        Three components measure their own rendered width with
        \`ResizeObserver\` and React state instead of a CSS container query —
        all three now share the same 1024px threshold, deliberately, rather
        than each picking its own nearby value. \`InteriorPanel\` measures
        its own PARENT element's width, switching from a normal inline flex
        child to a \`position: absolute\` overlay below 1024px (previously
        1050px) — shown below as the real component (it renders
        standalone, so there's no reason to reproduce it separately). The
        other two are the real \`SidePanel\` component wired to the exact
        "container-width pin guard" \`AdminShell\` and the "Agent Next Gen"
        template each apply to it: below 1024px, \`pinned\` is forced to
        \`false\` and the pin button disappears entirely, falling back to
        hover-to-reveal — widening back out above it restores the pinned
        state automatically, rather than requiring a manual re-pin.
        \`AdminShell\`'s real guard has always used 1024px; the "Agent Next
        Gen" template's own copy (\`AgentNextGenTemplate.stories.tsx\`, which
        isn't a standalone exported component, so it's not embeddable here
        directly) previously used 768px, unified per "the side panel
        components for admin and agent should functionally be the same ...
        from a responsiveness perspective they should not be different."
        Drag each box's edge to see it flip; use "Toggle Panel" on the
        first one to open/close it, the pin icon on the other two to
        pin/unpin, and hover the panel-toggle icon to reveal them when
        unpinned.
      </p>
      <div className="flex flex-col gap-4">
        <ResizeBox width={1200}>
          <InteriorPanelDemo />
        </ResizeBox>
        <ResizeBox width={1200}>
          <SidePanelPinGuardDemo threshold={1024} label="AdminShell (real threshold: 1024px)" />
        </ResizeBox>
        <ResizeBox width={1200}>
          <SidePanelPinGuardDemo threshold={1024} label='"Agent Next Gen" template (real threshold: 1024px)' />
        </ResizeBox>
      </div>
    </div>
}`,...(X=(K=f.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Xa=["Overview","ContainerGrid","FormGrid","CardSplit","MetricRow","TabOverflow","BreadcrumbCollapse","ViewportMediaQuery","JsMeasuredThresholds"];export{u as BreadcrumbCollapse,h as CardSplit,c as ContainerGrid,p as FormGrid,f as JsMeasuredThresholds,m as MetricRow,d as Overview,y as TabOverflow,x as ViewportMediaQuery,Xa as __namedExportsOrder,Ka as default};
