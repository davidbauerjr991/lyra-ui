import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DhMLlvMY.js";import{c as d}from"./utils-BLSKlp9E.js";import{C as ge,a as te,b as fe}from"./channel-row-DLL00VxD.js";import{P as we}from"./popover-Di03N3uO.js";import{B as M,g as be}from"./badge-CSIGLv9X.js";import{B as ye}from"./button-C_xtDadR.js";import{f as ve}from"./phone-input-switUA1g.js";import{C as xe}from"./chevron-down-gMYAX9-q.js";import{U as ke}from"./user-BnR-bf5w.js";import{C as Ne}from"./circle-alert-DucVQP5w.js";import{T as Ce}from"./triangle-alert-C66Fwj6V.js";function Te(i){const h=(i==null?void 0:i.trim().split(/\s+/).filter(Boolean))??[];return h.length===0?"C":h.length===1?h[0].charAt(0).toUpperCase():(h[0].charAt(0)+h[h.length-1].charAt(0)).toUpperCase()}function u(i){return i.id??i.type}const ne=o.forwardRef(({customerName:i,customerIdentified:h,channels:r=[],elapsed:T,awaitingResponse:L=!1,awaitingSeverity:ae,active:s=!1,onHold:j=!1,expanded:re=!1,onClick:p,onDismiss:E,onDismissChannel:I,headerAction:W,currentChannelKey:V,onCurrentChannelChange:w,collapsible:v=!1,channelsExpandedOverride:m,onChannelsExpandedChange:K,className:$},x)=>{const[l,O]=o.useState(!0);o.useEffect(()=>{K==null||K(l)},[l]);const F=o.useRef(m==null?void 0:m.version);m&&m.version!==F.current&&(F.current=m.version,l!==m.expanded&&O(m.expanded));const se=Te(i),z=ve(i)||"Customer",c=r.length,oe=h??!!(i!=null&&i.trim()),q=o.useRef(null),ie=e=>{q.current=e,typeof x=="function"?x(e):x&&(x.current=e)},[U,H]=o.useState(null),k=r.map(u),[S,le]=o.useState(k);if(k.length!==S.length||k.some((e,n)=>e!==S[n])){le(k);const e=k.find(n=>!S.includes(n));e!==void 0&&(H(e),w==null||w(e))}const Y=[...r].reverse().find(e=>e.current)??r[r.length-1],ce=Y?u(Y):void 0,de=V!==void 0?V:r.some(e=>u(e)===U)?U:ce,[G,_]=o.useState(!1),g=o.useRef(null),A=o.useRef(new Set),N=()=>{g.current&&(clearTimeout(g.current),g.current=null),_(!0)},C=()=>{g.current&&clearTimeout(g.current),!(A.current.size>0)&&(g.current=setTimeout(()=>_(!1),150))},X=(e,n)=>{n?(A.current.add(e),N()):(A.current.delete(e),A.current.size===0&&C())};o.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);const a=L?ae??"critical":null,D=j&&!s?{bg:"bg-lyra-status-warning-subtle",text:"text-lyra-status-warning-strong",border:"border-lyra-status-warning-strong"}:a==="critical"?{bg:"bg-lyra-status-critical-subtle",text:"text-lyra-status-critical-strong",border:s?"border-lyra-status-critical-strong":"border-lyra-status-critical-medium/30"}:a==="warning"?{bg:"bg-lyra-status-warning-subtle",text:"text-lyra-status-warning-strong",border:s?"border-lyra-status-warning-strong":"border-lyra-status-warning-strong/30"}:a==="success"?{bg:"bg-lyra-status-success-subtle",text:"text-lyra-status-success-strong",border:s?"border-lyra-status-success-strong":"border-lyra-status-success-strong/30"}:{bg:"bg-lyra-status-info-subtle",text:"text-lyra-status-info-strong",border:s?"border-lyra-status-info-strong":"border-lyra-status-info-medium/30"},P=(e,n=()=>p==null?void 0:p())=>{e.target===e.currentTarget&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),n())},b=o.useRef(null),ue=()=>{const e=b.current;return e?Array.from(e.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')):[]},he=e=>{P(e),e.key==="Tab"&&!e.shiftKey&&b.current&&(e.preventDefault(),b.current.focus())},pe=e=>{var R,f;if(P(e),e.key!=="Tab")return;const n=ue();if(e.shiftKey){document.activeElement===b.current&&(e.preventDefault(),(R=q.current)==null||R.focus());return}const y=n.length>0?n[n.length-1]:b.current;document.activeElement===y&&(e.preventDefault(),(f=q.current)==null||f.focus())},B=`${z}${L?", awaiting response":""}${c>1?`, ${c} open channels`:""}${T?`, ${T}`:""}`,J=r.map((e,n)=>{const y=s&&u(e)===de,R=ge[e.type];return t.jsx(R,{elapsed:e.elapsed,elapsedOverride:e.elapsedOverride,preview:e.preview,highlighted:y,isFirst:n===0,awaitingResponse:e.awaitingResponse,awaitingSeverity:e.awaitingSeverity,removable:e.removable,removeVariant:e.removeVariant,menuItems:e.menuItems,showConsultTransfer:e.showConsultTransfer,showKebab:e.showKebab,alwaysShowOutcome:e.alwaysShowOutcome,showDismissButton:e.showDismissButton,onEndCall:e.onEndCall,direction:e.direction,onMenuOpenChange:f=>X(u(e),f),onDismiss:()=>{r.length>1?I==null||I(e):E==null||E()},onSelect:()=>{H(u(e)),w==null||w(u(e))},outcome:e.outcome&&{...e.outcome,onOpenChange:f=>{X(`outcome:${u(e)}`,f),e.outcome.onOpenChange(f)}}},`${u(e)}-${n}`)}),me=r.length>0&&t.jsx(ye,{variant:"icon",size:"icon-sm",title:l?"Collapse channels":"Expand channels","aria-expanded":l,onClick:e=>{e.stopPropagation(),O(n=>!n)},children:t.jsx(xe,{className:d("h-3.5 w-3.5 transition-transform duration-200",l&&"rotate-180"),strokeWidth:1.5,"aria-hidden":"true"})}),Q=t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex items-center gap-2 px-3 pt-1 pb-1",children:[c>1&&t.jsx(M,{shape:"circle",size:"sm",count:c,className:"shrink-0","aria-label":`${c} open channels`}),v&&!l&&c===1&&r[0]&&t.jsx(M,{shape:"circle",size:"sm",className:"shrink-0",style:be("subtle",fe[r[0].type]),"aria-label":`${te[r[0].type].label} channel open`,children:o.cloneElement(te[r[0].type].icon,{className:"h-2.5 w-2.5"})}),t.jsx("span",{className:"min-w-0 flex-1 truncate lyra-heading-sm text-lyra-fg-default",children:z}),(v||W)&&t.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[W,v&&me]})]}),r.length>0&&(v?t.jsx("div",{className:d("grid transition-[grid-template-rows] duration-200 ease-in-out",l?"grid-rows-[1fr]":"grid-rows-[0fr]"),children:t.jsx("div",{className:"overflow-hidden",children:t.jsx("div",{className:"flex flex-col",children:J})})}):t.jsx("div",{className:"flex flex-col",children:J}))]}),Z=d("flex w-full cursor-pointer flex-col overflow-hidden rounded-lyra-sm border-y border-r text-left transition-colors",j?"bg-lyra-status-warning-subtle":"bg-lyra-bg-surface-base","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",s?"border-l-4":"border-l",s&&"shadow-md",j?"border-lyra-status-warning-strong hover:border-[color-mix(in_srgb,var(--lyra-color-status-warning-strong)_80%,black_20%)]":s?a==="critical"?"border-lyra-status-critical-strong hover:border-[color-mix(in_srgb,var(--lyra-color-status-critical-strong)_80%,black_20%)]":a==="warning"?"border-lyra-status-warning-strong hover:border-[color-mix(in_srgb,var(--lyra-color-status-warning-strong)_80%,black_20%)]":a==="success"?"border-lyra-status-success-strong hover:border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_80%,black_20%)]":"border-lyra-border-active hover:border-[color-mix(in_srgb,var(--lyra-color-border-active)_80%,black_20%)]":"border-lyra-border-subtle hover:border-lyra-border-soft");if(!re)return t.jsx(we,{open:G,onOpenChange:_,placement:"right",align:"start",sideOffset:8,showArrow:!1,onOpenAutoFocus:e=>e.preventDefault(),onCloseAutoFocus:e=>e.preventDefault(),onInteractOutside:e=>{var n,y;(y=(n=e.target)==null?void 0:n.closest)!=null&&y.call(n,"[data-radix-popper-content-wrapper]")&&e.preventDefault()},className:"z-[9999] w-64 rounded-lyra-sm border-0 bg-transparent p-0 shadow-none",bodyPadding:!1,content:t.jsx("div",{onMouseEnter:N,onMouseLeave:C,onFocus:N,onBlur:C,role:"button",tabIndex:0,onClick:p,onKeyDown:pe,ref:b,"aria-label":B,className:d(Z,!s&&"shadow-md"),children:Q}),children:t.jsxs("div",{ref:ie,role:"button",tabIndex:0,onClick:p,onKeyDown:he,onMouseEnter:N,onMouseLeave:C,onFocus:N,onBlur:C,"aria-label":B,"aria-current":s?"true":void 0,className:d("flex cursor-pointer flex-col items-center gap-1 rounded-lyra-sm p-1.5 mb-2 transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",s?"bg-lyra-bg-surface-base shadow-sm":G&&"bg-lyra-state-hover",$),children:[t.jsxs("span",{className:"relative inline-flex",children:[t.jsx("span",{className:d("flex h-8 w-8 items-center justify-center rounded-lyra-sm border lyra-body-sm-emphasis",D.bg,D.text,D.border),"aria-hidden":"true",children:oe?se:t.jsx(ke,{className:"h-4 w-4",strokeWidth:1.5})}),c>1&&t.jsx("span",{className:d("absolute -left-1.5 -top-1.5 flex h-[18px] items-center justify-center rounded-full font-bold text-lyra-fg-on-primary",a==="critical"||a==="warning"?"w-[18px]":"min-w-[18px] px-1 text-[10px]",a==="critical"?"bg-lyra-bg-destructive":a==="warning"?"bg-lyra-status-warning-strong":a==="success"?"bg-lyra-status-success-strong":"bg-lyra-bg-primary"),"aria-label":a==="critical"?"SLA breached":a==="warning"?"Nearing SLA breach":`${c} open channels`,children:a==="critical"?t.jsx(Ne,{className:"h-2.5 w-2.5 shrink-0",strokeWidth:2.25,"aria-hidden":"true"}):a==="warning"?t.jsx(Ce,{className:"h-2.5 w-2.5 shrink-0",strokeWidth:2.25,"aria-hidden":"true"}):t.jsx("span",{"aria-hidden":"true",children:c})}),a&&t.jsx(M,{shape:"circle",dot:!0,variant:a,size:"sm",className:"absolute bottom-[-2px] right-[-2px] ring-2 ring-lyra-bg-surface-shell","aria-hidden":"true"})]}),T&&t.jsx("span",{className:d("lyra-body-xs",a==="critical"?"text-lyra-status-critical-strong":a==="warning"?"text-lyra-status-warning-strong":a==="success"?"text-lyra-status-success-strong":"text-lyra-fg-secondary"),"aria-hidden":"true",children:T})]})});const ee=()=>{v&&!l&&O(!0),p==null||p()};return t.jsx("div",{ref:x,role:"button",tabIndex:0,onClick:ee,onKeyDown:e=>P(e,ee),"aria-label":B,"aria-current":s?"true":void 0,className:d(Z,"mb-2",$),children:Q})});ne.displayName="InteractionNavItem";ne.__docgenInfo={description:"",methods:[],displayName:"InteractionNavItem",props:{customerName:{required:!1,tsType:{name:"string"},description:`Customer's full name — OR, for an interaction with no matched
 customer, whatever raw address identifies it instead (a dialed phone
 number, a typed email/WhatsApp handle) — the card's title (expanded
 mode) and, by default, its compact-mode initials are both derived from
 this. Falls back to "C" / "Customer" only when this is left entirely
 unset.`},customerIdentified:{required:!1,tsType:{name:"boolean"},description:`Whether \`customerName\` above is an actual customer's name, as opposed
to a raw address standing in for one (see that prop's own doc comment).
Only affects the compact tile's AVATAR: a real name still gets initials
either way \`customerName\` is used for the title text itself, but a raw
address has no real initials to speak of — passing \`false\` here shows a
generic person icon in the avatar instead of \`getInitials\` deriving a
stray, meaningless leading character off the address (e.g. "1" off a
phone number starting with a "1" country code). Previously this showed
the interaction's own current-channel icon instead — changed per
explicit request, since the channel icon read as "this is an email/
voice/etc. conversation" rather than clearly communicating "unknown
customer" the way a person icon does.
Omit when the consumer doesn't distinguish the two cases — inferred
from whether \`customerName\` is non-empty, same as before this prop
existed.`},channels:{required:!1,tsType:{name:"Array",elements:[{name:"InteractionChannel"}],raw:"InteractionChannel[]"},description:"Open channels/conversations for this interaction. A compact-mode count\n badge appears when there's more than one; the expanded card lists each\n as its own row (chip + elapsed time + preview), dispatched to the\n matching per-type row component (`ChatChannelRow`/`EmailChannelRow`/\n `SmsChannelRow`/`WhatsAppChannelRow`/`VoiceChannelRow` in\n `channel-row.tsx`) based on `type`.",defaultValue:{value:"[]",computed:!1}},elapsed:{required:!0,tsType:{name:"string"},description:`Elapsed time label as 4-digit MM:SS (e.g. "00:02" = 2 seconds since the
 customer's last response) — shown under the compact avatar tile.`},awaitingResponse:{required:!1,tsType:{name:"boolean"},description:`True when the customer has sent a message the agent hasn't replied to
yet: the avatar switches from primary (blue) to success (green)/warning
(amber)/critical (red) — see \`awaitingSeverity\` below — and a badge dot
appears. Default (false) is primary with no badge.`,defaultValue:{value:"false",computed:!1}},awaitingSeverity:{required:!1,tsType:{name:"union",raw:'"success" | "warning" | "critical"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"critical"'}]},description:'When `awaitingResponse` is true, which visual tier to render —\n `"success"` (green) for a reply that just landed and is still well\n within SLA, `"warning"` (amber) once the wait\'s gotten old enough to\n need attention, `"critical"` (red) once it\'s genuinely overdue.\n Ignored when `awaitingResponse` is false, and defaults to `"critical"`\n when left unset while `awaitingResponse` IS true — matching this\n prop\'s own pre-existing binary behavior, so any consumer that doesn\'t\n pass it (this file\'s own stories included) renders exactly as\n before.'},active:{required:!1,tsType:{name:"boolean"},description:"Whether this is the currently-open/selected interaction.",defaultValue:{value:"false",computed:!1}},onHold:{required:!1,tsType:{name:"boolean"},description:`Tints the whole expanded card (background + outer border) with the
 warning/yellow treatment — per explicit request ("make the ENTIRE card
 background yellow and give the entire card background a warning
 border"). Overrides \`expandedCardClassName\`'s normal background AND
 its normal active/inactive/severity border logic unconditionally
 while true, regardless of \`active\`/\`awaitingSeverity\` — a consumer
 drives this off its own domain state (e.g. "this interaction has a
 live call the agent has navigated away from"); this component has no
 opinion on what "on hold" means, just how to paint the card once told
 it applies. Shared by both the real expanded card and the compact
 tile's hover-preview popover below (both reuse the same
 \`expandedCardClassName\`), so a held interaction reads the same way in
 either. Default \`false\` (every existing consumer renders exactly as
 before).`,defaultValue:{value:"false",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:"Whether the parent LeftNav rail is expanded. False renders the compact\navatar tile (icon-rail mode); true renders the full detail card. Mirrors\nCreateNew's `expanded` prop so it can be used the same way as a LeftNav\n`header`/`footer` slot.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Called when the agent chooses "Unassign & Dismiss" from a channel's
kebab menu while this card has only that *one* channel open — with
nothing left once it's gone, the whole card goes with it, so the
consumer should remove it entirely (e.g. filter it out of whatever list
rendered it). When a card has more than one open channel, "Unassign &
Dismiss" calls \`onDismissChannel\` instead (see below) — this component
decides which of the two applies based on \`channels.length\` at click
time, so the consumer never has to duplicate that check itself. Omit to
leave "Unassign & Dismiss" inert on a single-channel card — e.g. for a
fixed demo card with no backing state to remove it from. Only wired onto
each channel's *default* menu; a channel with a \`menuItems\` override
handles its own actions instead.`},onDismissChannel:{required:!1,tsType:{name:"signature",type:"function",raw:"(channel: InteractionChannel) => void",signature:{arguments:[{type:{name:"InteractionChannel"},name:"channel"}],return:{name:"void"}}},description:`Called with the specific channel object when the agent chooses
"Unassign & Dismiss" from a card that has *more than one* open channel —
ends just that one channel (the consumer should drop it from this
interaction's own channel list, matching on \`channel.id ?? channel.type\`
since two open channels can share the same \`type\`), leaving the rest of
the card and its other channels open. See \`onDismiss\` above for the
single-channel case, where the whole card goes instead.`},headerAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Rendered at the end of the expanded card's header row, next to the
 customer name — e.g. an "Add Outbound" button (see \`OutboundAddButton\`
 in \`create-new.tsx\`) letting the agent start another channel with this
 same contact without leaving the card. Kept as a generic slot (not a
 dedicated \`onAddOutbound\` prop) so this component has no direct
 dependency on \`create-new.tsx\`'s outbound-picker types — the consumer
 composes whatever trigger it needs. Compact (icon-rail) mode has no
 header row of its own to put this in, but it isn't dropped there —
 hovering the compact tile opens a popover previewing the full expanded
 card (see the compact-mode branch below), and that preview's header
 row renders this exact same \`headerAction\`. If whatever's passed here
 opens its own popover (like \`OutboundAddButton\` does), make sure its
 z-index accounts for sometimes being nested inside that hover
 popover — see \`OutboundAddButton\`'s own doc comment in create-new.tsx.`},currentChannelKey:{required:!1,tsType:{name:"string"},description:'Controls which open channel is "current" (the blue-highlighted row on\nan `active` card) from outside this component — e.g. a `ChannelTab` bar\nrendered elsewhere (under a record-header `PageHeader`) that needs to\nstay in lockstep with this same card. When provided, this always wins\nover whatever the card would otherwise compute on its own (a row click,\nor a newly-opened channel taking over as current); when omitted, the\ncard manages its own current-channel state exactly as before — every\nexisting consumer that doesn\'t pass this keeps working unchanged. Pass\nthe same key `onCurrentChannelChange` reports back (see below) — a\n`channelKey`: `channel.id` when set, else `channel.type`.'},onCurrentChannelChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Fired whenever the effective current channel changes — from a row\nclick, from a newly-opened channel auto-taking over, or (if this\ncomponent is uncontrolled) just to notify a listener without it having\nto own `currentChannelKey` itself. A consumer building a synced\n`ChannelTab` bar should store this in the same piece of state it passes\nback in as `currentChannelKey`, so a click on either side updates both."},collapsible:{required:!1,tsType:{name:"boolean"},description:`Adds a chevron toggle to the expanded card's header row that expands/
collapses the channel list below it — opt-in (default \`false\`, every
existing consumer's header row is completely unchanged) rather than a
behavior change applied to every consumer of this component at once,
per explicit request. Each card manages its own expanded/collapsed
state internally (defaults to expanded, matching this component's
pre-existing always-shown behavior) — nothing outside this component
needs to read or coordinate it, so it isn't lifted into a controlled
prop pair the way \`currentChannelKey\` above is. Only takes effect
when there's at least one channel to collapse; with none AND no
\`headerAction\` either, the header row renders with no trailing action
at all.

Per a later explicit follow-up request, this no longer REPLACES
\`headerAction\` in that same slot the way it originally did — the two
now render side by side (chevron, then \`headerAction\`) whenever both
are present, so a consumer can keep its existing "Add Channel"
trigger on screen even once a card is also collapsible.`,defaultValue:{value:"false",computed:!1}},channelsExpandedOverride:{required:!1,tsType:{name:"signature",type:"object",raw:"{ expanded: boolean; version: number }",signature:{properties:[{key:"expanded",value:{name:"boolean",required:!0}},{key:"version",value:{name:"number",required:!0}}]}},description:`External one-shot override for the channel list's expanded/collapsed
state — e.g. a page-level "Collapse all"/"Expand all" bulk action
controlling every card in a list at once. Deliberately NOT a normal
continuously-controlled prop pair (there's no plain \`channelsExpanded\`/
\`onChannelsExpandedChange\`, unlike \`currentChannelKey\` above): a simple
controlled boolean would PERMANENTLY link every card to the same
state, so toggling one card's own chevron afterward would have to
either fight the controlling parent or stop working entirely. The
whole point here is a one-time "set them all to X right now" — after
which each card goes right back to toggling independently via its own
chevron, exactly as if this prop were never passed.

\`version\` is a nonce, not a value to diff against \`expanded\` itself:
bump it (e.g. an incrementing counter) any time \`expanded\` should be
re-applied, even if \`expanded\`'s own value hasn't changed since the
last bump (e.g. two consecutive "Collapse all" clicks in a row with no
individual card toggled in between — \`expanded\` would be \`false\` both
times, but the second click still needs to re-collapse any card the
agent individually re-expanded since the first one).`},onChannelsExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:`Reports this card's own current channel-list expanded/collapsed state
— fired on mount and every time it changes, whether that's from the
per-card chevron, the "click a collapsed card to expand it" behavior
below, or \`channelsExpandedOverride\` above. Purely informational (this
component's \`channelsExpanded\` stays its own internally-owned state
either way — see \`channelsExpandedOverride\`'s own doc comment for why
it isn't a controlled prop); a consumer driving a page-level "Collapse
all"/"Expand all" toggle (\`AssignmentsExpandCollapseAllButton\`,
assignments-section-caption.tsx) can use this to notice once every
card happens to already agree with one direction — e.g. the agent
manually expanded every card by hand — and flip that toggle's own
\`allExpanded\` to match, without having to wait for another bulk click.`},className:{required:!1,tsType:{name:"string"},description:""}}};export{ne as I};
