import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DhMLlvMY.js";import{I as C,H as S,T,C as q,R as te}from"./index-BNlU9RnX.js";import{c}from"./utils-BLSKlp9E.js";import{P as pe}from"./popover-Cbqqiubp.js";import{M}from"./menu-item-5A6Jq-l-.js";import{T as ae}from"./tag-D8yJ2lBD.js";import{S as fe}from"./sparkles-PRtIBnGT.js";import{U as ye}from"./user-BnR-bf5w.js";import{C as A}from"./chevron-down-gMYAX9-q.js";import{A as ge}from"./activity-CN8fWg6r.js";import{F as xe}from"./file-text-DK8c8V5C.js";import{P as ve}from"./phone-BRlsjax8.js";import{M as be}from"./message-circle-bT9yJ9gm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DGBzHazk.js";import"./index-CylpBFcA.js";import"./index-DRSiSFY5.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-1evVQkiP.js";const ne=f.forwardRef(({customerName:s,previousAgent:a,snapshot:r,journeySummary:o,customerCard:n,defaultExpanded:i=!0,className:y,onViewCustomerInfo:d,onViewInteractionHistory:m,onLaunchPreviousAgentInteraction:g},I)=>{const[k,p]=f.useState(!1);return e.jsx(te,{ref:I,type:"single",collapsible:!0,defaultValue:i?"contact-overview":void 0,className:c("w-full pt-4",y),children:e.jsxs(C,{value:"contact-overview",children:[e.jsx(S,{children:e.jsxs(T,{className:"group flex items-center gap-1.5 text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors focus-visible:outline-none",children:[e.jsx("span",{className:"lyra-body-md-emphasis",children:"Contextual Overview"}),e.jsx(A,{className:"h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180",strokeWidth:1.5,"aria-hidden":"true"})]})}),e.jsx(q,{className:"overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",children:e.jsxs("div",{className:"mt-3 flex flex-col gap-3",children:[n&&e.jsxs("div",{className:"flex flex-col gap-2.5 rounded-lyra-md border border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_30%,transparent)] bg-lyra-status-success-subtle p-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[e.jsx("div",{className:c("flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full lyra-label",n.avatarClassName),"aria-hidden":"true",children:n.avatarInitials}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default truncate",children:s}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary truncate",children:n.subtitle})]})]}),n.balance&&e.jsxs("div",{className:"flex flex-shrink-0 flex-col items-end",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Balance"}),e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default",children:n.balance})]})]}),n.tags&&n.tags.length>0&&e.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tags.map(h=>e.jsx(ae,{label:h,shape:"pill"},h))})]}),e.jsxs("p",{className:"lyra-body-md text-lyra-fg-default",children:["You are now working with ",s,".",a?e.jsxs(e.Fragment,{children:[" ","This is your first contact with ",s," although they have already been working with"," ",g?e.jsx(pe,{open:k,onOpenChange:p,placement:"bottom",align:"start",bodyPadding:!1,content:e.jsxs("div",{className:"flex flex-col py-1",children:[e.jsx(M,{icon:e.jsx(ve,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),label:"Call",onClick:()=>{p(!1),g("voice")}}),e.jsx(M,{icon:e.jsx(be,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),label:"Chat",onClick:()=>{p(!1),g("chat")}})]}),children:e.jsxs("button",{type:"button",className:"lyra-body-md-emphasis text-lyra-fg-link hover:underline focus-visible:outline-none",children:[a.name," (",a.agentId,")"]})}):e.jsxs("span",{className:"lyra-body-md-emphasis text-lyra-fg-default",children:[a.name," (",a.agentId,")"]}),"."]}):" This is your first contact with them."]}),r&&r.length>0||d?e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Contact Snapshot"}),d&&e.jsx("button",{type:"button",onClick:d,className:"lyra-body-sm text-lyra-fg-link hover:underline focus-visible:outline-none",children:"View customer info"})]}),r&&r.length>0&&e.jsx("ul",{className:"flex flex-col gap-1 pl-4 list-disc",children:r.map((h,x)=>e.jsx("li",{className:"lyra-body-sm text-lyra-fg-default",children:h},x))})]}):null,o||m?e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Journey Summary"}),m&&e.jsx("button",{type:"button",onClick:m,className:"lyra-body-sm text-lyra-fg-link hover:underline focus-visible:outline-none",children:"View Customer Contacts"})]}),o&&e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:o})]}):null]})})]})})});ne.displayName="ContactOverview";function we(s,a){if(!a||!s.includes("]("))return s;const r=[],o=/\[([^\]]+)\]\(([^)]+)\)/g;let n=0,i;for(;(i=o.exec(s))!==null;){i.index>n&&r.push(s.slice(n,i.index));const[,y,d]=i;r.push(e.jsx("button",{type:"button",onClick:()=>a(d),className:"inline text-lyra-fg-link hover:underline focus-visible:outline-none focus-visible:underline",children:y},`${d}-${i.index}`)),n=i.index+i[0].length}return n<s.length&&r.push(s.slice(n)),e.jsx(e.Fragment,{children:r})}const O=f.forwardRef(({customerName:s,customerCard:a,snapshot:r,onSnapshotLink:o,autosummaryBlue:n=!1,nextBestAction:i,nextBestActionContent:y,nextBestActionBare:d,detailedSummary:m,realTimeSummary:g,className:I,onViewCustomerInfo:k,onViewInteractionHistory:p,showNextBestAction:h=!0,showCustomerProfile:x=!0,showContactSnapshot:B=!0,showRealTimeSummary:l=!1,realTimeSummaryUpdatedLabel:R,onViewExperienceMemory:E},se)=>{var D;const re=(x?1:0)+(l||B?1:0)+(h?1:0),[P,ie]=f.useState(0);f.useEffect(()=>{const t=Array.from({length:re},(u,_)=>window.setTimeout(()=>ie(he=>Math.max(he,_+1)),200+_*260));return()=>t.forEach(u=>window.clearTimeout(u))},[]);const oe=[{value:"next-best-action",icon:e.jsx(fe,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),label:"Next Best Action",accent:!0,content:y??e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:i??"Confirm the reason for contact and proceed with the customer's request."})}].filter(t=>h||t.value!=="next-best-action");function le(t,u){return e.jsxs(C,{value:t.value,className:c("rounded-lyra-md border overflow-hidden transition-all ease-out","duration-700",t.accent?"border-[color-mix(in_srgb,var(--lyra-color-status-success-strong)_25%,transparent)] bg-lyra-status-success-subtle":"border-lyra-border-subtle bg-lyra-bg-control-subtle",u<P?"opacity-100 translate-y-0":"opacity-0 translate-y-2"),children:[e.jsx(S,{children:e.jsxs(T,{className:"group w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset hover:bg-lyra-state-hover active:bg-lyra-state-pressed cursor-pointer",children:[e.jsx("span",{className:"flex-shrink-0 text-lyra-fg-secondary",children:t.icon}),e.jsx("span",{className:"flex-1 text-left lyra-body-md truncate text-lyra-fg-default",children:t.label}),e.jsx(A,{className:"h-5 w-5 flex-shrink-0 text-lyra-fg-secondary transition-transform duration-200 group-data-[state=open]:rotate-180",strokeWidth:1.5,"aria-hidden":"true"})]})}),e.jsx(q,{className:"overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",children:e.jsx("div",{className:"p-4",children:t.content})})]},t.value)}const ce=e.jsxs("div",{className:"flex flex-col gap-2.5 p-4",children:[a?e.jsxs("div",{className:"flex flex-col gap-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[a.avatarInitials&&e.jsx("div",{className:c("flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full lyra-label",a.avatarClassName),"aria-hidden":"true",children:a.avatarInitials}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default truncate",children:s}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary truncate",children:a.subtitle})]})]}),(a.tags&&a.tags.length>0||a.sentiment)&&e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[a.sentiment&&e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full border border-[color-mix(in_srgb,var(--lyra-color-status-warning-strong)_45%,transparent)] bg-lyra-status-warning-subtle px-2.5 py-0.5 lyra-body-sm text-lyra-status-warning-strong",children:[e.jsx("span",{className:"font-semibold",children:a.sentiment.label??"Sentiment"}),e.jsx("span",{"aria-hidden":"true",children:"·"}),e.jsx("span",{children:a.sentiment.value})]}),(D=a.tags)==null?void 0:D.map(t=>e.jsx(ae,{label:t,shape:"pill"},t))]})]}):e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:s}),m&&m.length>0&&e.jsx("div",{className:"flex flex-col gap-2",children:m.map((t,u)=>e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:t},u))}),k&&e.jsx("button",{type:"button",onClick:k,className:"self-start lyra-body-md text-lyra-fg-link hover:underline focus-visible:outline-none",children:"View customer info"})]}),de=e.jsxs("div",{className:"flex flex-col gap-2.5 p-4",children:[r&&r.length>0?e.jsx("ul",{className:"flex flex-col gap-1 pl-4 list-disc",children:r.map((t,u)=>e.jsx("li",{className:"lyra-body-md text-lyra-fg-default",children:we(t,o)},u))}):e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"No prior contact history on file — this is a new conversation."}),p&&e.jsx("button",{type:"button",onClick:p,className:"self-start lyra-body-md text-lyra-fg-link hover:underline focus-visible:outline-none",children:"View Customer Contacts"})]}),ue=e.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[e.jsx("p",{className:"lyra-body-md text-lyra-fg-default",children:g??"No real-time summary is available for this contact yet."}),E&&e.jsx("button",{type:"button",onClick:E,className:"w-fit text-left lyra-body-md text-lyra-fg-link hover:underline focus-visible:outline-none focus-visible:underline",children:"View Experience Memory"}),R&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-t border-lyra-border-subtle"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:R})]})]});let V=0;const j=[],N=oe.find(t=>t.value==="next-best-action");if(x){const t=V++;j.push(e.jsxs(C,{value:"customer-profile",className:c("rounded-lyra-md border border-[color-mix(in_srgb,var(--lyra-color-status-info-strong)_25%,transparent)] overflow-hidden transition-all ease-out duration-700",t<P?"opacity-100 translate-y-0":"opacity-0 translate-y-2"),children:[e.jsx(S,{children:e.jsxs(T,{className:"group w-full flex items-center gap-2 bg-lyra-status-info-subtle px-4 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset hover:brightness-95 cursor-pointer",children:[e.jsx(ye,{className:"h-4 w-4 shrink-0 text-lyra-status-info-strong",strokeWidth:1.5,"aria-hidden":"true"}),e.jsx("span",{className:"flex-1 text-left lyra-body-md-emphasis text-lyra-fg-default truncate",children:"Customer Info"}),e.jsx(A,{className:"h-5 w-5 shrink-0 text-lyra-status-info-strong transition-transform duration-200 group-data-[state=open]:rotate-180",strokeWidth:1.5,"aria-hidden":"true"})]})}),e.jsx(q,{className:"overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",children:e.jsx("div",{className:"bg-lyra-bg-surface-base",children:ce})})]},"customer-profile"))}if(l||B){const t=V++;j.push(e.jsxs(C,{value:l?"real-time-summary":"customer-snapshot",className:c("rounded-lyra-md border border-lyra-border-subtle overflow-hidden transition-all ease-out duration-700",t<P?"opacity-100 translate-y-0":"opacity-0 translate-y-2"),children:[e.jsx(S,{children:e.jsxs(T,{className:c("group w-full flex items-center gap-2 px-4 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset hover:brightness-95 cursor-pointer",l||n?"bg-lyra-status-info-subtle":"lyra-purple-soft-header-fix"),children:[l?e.jsx(ge,{className:"h-4 w-4 shrink-0 text-lyra-status-info-strong",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(xe,{className:c("h-4 w-4 shrink-0",n?"text-lyra-status-info-strong":"text-lyra-accent-purple-strong"),strokeWidth:1.5,"aria-hidden":"true"}),e.jsx("span",{className:"flex-1 text-left lyra-body-md-emphasis text-lyra-fg-default truncate",children:l?"Real-Time Summary":"Autosummary"}),e.jsx(A,{className:c("h-5 w-5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",l?"text-lyra-status-info-strong":"text-lyra-accent-purple-strong"),strokeWidth:1.5,"aria-hidden":"true"})]})}),e.jsx(q,{className:"overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",children:e.jsx("div",{className:"bg-lyra-bg-surface-base",children:l?ue:de})})]},l?"real-time-summary":"customer-snapshot"))}N&&j.push(d?e.jsx("div",{children:N.content},"next-best-action"):le(N,V++));const me=[x&&"customer-profile",l?"real-time-summary":B&&"customer-snapshot",N&&!d&&"next-best-action"].filter(t=>typeof t=="string");return e.jsx("div",{ref:se,className:c("w-full pt-4 flex flex-col gap-6",I),children:e.jsx(te,{type:"multiple",defaultValue:me,className:"flex flex-col gap-6",children:j})})});O.displayName="CustomerContextOverview";ne.__docgenInfo={description:"",methods:[],displayName:"ContactOverview",props:{previousAgent:{required:!1,tsType:{name:"signature",type:"object",raw:"{ name: string; agentId: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"agentId",value:{name:"string",required:!0}}]}},description:`The agent this customer already has history with, if any — omit for a
 customer with genuinely no prior agent on record (the block still
 renders, just without that second sentence).`},snapshot:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Short "Contact Snapshot" bullet list — prior-contact context a
 consumer would otherwise have to dig for elsewhere before the
 conversation even starts. Omit for no snapshot (first-ever contact
 with no history to summarize).`},journeySummary:{required:!1,tsType:{name:"string"},description:`A one-paragraph recap of what's led up to this contact, rendered
 below Contact Snapshot as a plain "label + paragraph" block — same
 chromeless treatment \`snapshot\` gets, no card/border/icon (per
 explicit follow-up request; this originally reused agent-next-gen-v2's
 former Copilot tab's own bordered/bookmark-icon card markup
 (\`CopilotTabContent\`, agent-next-gen-customer-info-panel.tsx), toned
 down to match once it landed here instead). Omit for no journey to
 recap (same as \`snapshot\`).`},customerCard:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** e.g. "AS" for Alex Sanderson — same 2-letter convention every
   *  other initials avatar in this library uses. */
  avatarInitials: string;
  /** One of this library's own avatar background tokens (e.g.
   *  "bg-lyra-accent-blue-soft text-lyra-accent-blue-strong") — the
   *  caller resolves this the same way it resolves any other initials
   *  avatar's color, not a new scheme invented for this card. */
  avatarClassName: string;
  /** e.g. "Business Travel · 8 yrs tenure" — a single pre-formatted
   *  line under the customer's name; this component doesn't parse or
   *  re-derive it from anything else. */
  subtitle: string;
  /** Pre-formatted balance string (e.g. "$0.00") — omit to hide the
   *  "Balance" figure entirely rather than showing a placeholder. */
  balance?: string;
  /** Short status/context labels (e.g. "Platinum", "Storm Disruption")
   *  rendered as pill \`Tag\`s below the identity row. Omit/empty to show
   *  the identity row with no tags underneath. */
  tags?: string[];
}`,signature:{properties:[{key:"avatarInitials",value:{name:"string",required:!0},description:`e.g. "AS" for Alex Sanderson — same 2-letter convention every
 other initials avatar in this library uses.`},{key:"avatarClassName",value:{name:"string",required:!0},description:`One of this library's own avatar background tokens (e.g.
 "bg-lyra-accent-blue-soft text-lyra-accent-blue-strong") — the
 caller resolves this the same way it resolves any other initials
 avatar's color, not a new scheme invented for this card.`},{key:"subtitle",value:{name:"string",required:!0},description:`e.g. "Business Travel · 8 yrs tenure" — a single pre-formatted
 line under the customer's name; this component doesn't parse or
 re-derive it from anything else.`},{key:"balance",value:{name:"string",required:!1},description:`Pre-formatted balance string (e.g. "$0.00") — omit to hide the
 "Balance" figure entirely rather than showing a placeholder.`},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:'Short status/context labels (e.g. "Platinum", "Storm Disruption")\n rendered as pill `Tag`s below the identity row. Omit/empty to show\n the identity row with no tags underneath.'}]}},description:`A small identity-card summary — avatar, subtitle (e.g. segment +
tenure), account balance, and a handful of status/context tags —
rendered above everything else in the collapsible (per explicit
request, ahead of the intro paragraph). Uses the same green/success
treatment \`Tag\`'s own "success" variant does, per explicit follow-up
request (an earlier plain/neutral-toned version — a border + the
app's own surface color, no status tint — was reversed back to the
green/success look a reference mockup originally used).
The caller is expected to always supply this for any "known" contact
(backed by a real directory record or not — see
\`buildContactOverviewCustomerCard\`'s own doc comment,
agent-next-gen-shared-utils.ts, for the fallback synthesis that keeps
this true even with no real record). Omit only for a contact this
component has no information about at all.`},customerName:{required:!0,tsType:{name:"string"},description:"The customer this overview is about."},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Starts expanded by default (unlike, say, `AIProcess`'s own\n`defaultExpanded = false`) — this is meant to be the first thing read\non a brand-new contact, not something to opt into revealing.",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element."},onViewCustomerInfo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Renders a "View customer info" link directly beside the "Contact
 Snapshot" header's own label (per explicit request — this used to sit
 in its own row at the bottom of the overview). Omit to hide the link
 entirely (e.g. no customer info panel available in this context). The
 caller is responsible for opening whatever customer-info surface it
 has and focusing it on the right tab. Rendered even when \`snapshot\`
 itself is empty/omitted — the "Contact Snapshot" row still shows,
 just without any bullets under it, so this link always has a place
 to live.`},onViewInteractionHistory:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Renders a "View Customer Contacts" link directly beside the "Journey\n Summary" header\'s own label — per explicit request, a SEPARATE row\n from `onViewCustomerInfo` above (not `|`-joined alongside it on\n Contact Snapshot, which is where this used to live) — opens the same\n customer-info surface `onViewCustomerInfo` does, focused on that\n surface\'s own interaction/session-history ("Contacts") tab instead.\n Rendered even when `journeySummary` itself is empty/omitted — same\n "always has a header to attach to" reasoning `onViewCustomerInfo` gets\n from Contact Snapshot. Omit to hide.'},onLaunchPreviousAgentInteraction:{required:!1,tsType:{name:"signature",type:"function",raw:'(channel: "voice" | "chat") => void',signature:{arguments:[{type:{name:"union",raw:'"voice" | "chat"',elements:[{name:"literal",value:'"voice"'},{name:"literal",value:'"chat"'}]},name:"channel"}],return:{name:"void"}}},description:'Turns `previousAgent.name (previousAgent.agentId)` into a clickable\nlink (per explicit request) that opens a small popover offering\n"Call"/"Chat" — the caller launches whichever interaction makes sense\nfor reaching that colleague on `channel`. Has no effect (and the name/\nid renders as plain text, same as before) when `previousAgent` itself\nis unset, or when this is omitted — same "no callback, no\naffordance" convention `onViewCustomerInfo`/`onViewInteractionHistory`\nalready follow.'}}};O.__docgenInfo={description:"",methods:[],displayName:"CustomerContextOverview",props:{customerCard:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** e.g. "AS" for Alex Sanderson — same 2-letter initials convention
   *  every other initials avatar in this library uses. Omit for a raw,
   *  unidentified address standing in for a real name (a dialed number
   *  with no directory match, same distinction \`ChatMessage\`'s own
   *  \`identified\` prop makes, lyra-ui) — there are no real initials to
   *  derive off that, so per explicit request the avatar circle itself
   *  is omitted entirely rather than showing a meaningless character off
   *  the raw address (e.g. a stray "(" off a phone number); \`subtitle\`/
   *  \`tags\` below still render normally either way. */
  avatarInitials?: string;
  /** One of this library's own avatar background tokens. Per explicit
   *  request, callers should pass the SAME color \`ChatMessage\` itself
   *  uses for a customer-sender avatar ("bg-lyra-accent-green-soft
   *  text-lyra-accent-green-strong", chat-message.tsx) rather than a
   *  per-customer hashed color, so this identity card's avatar always
   *  matches how that same customer already reads elsewhere in the
   *  transcript. Ignored (no avatar renders at all) when
   *  \`avatarInitials\` is omitted. */
  avatarClassName?: string;
  /** e.g. "Business Travel · 8 yrs tenure" — a single pre-formatted
   *  line under the customer's name. */
  subtitle: string;
  /** Short status/context labels rendered as pill \`Tag\`s below the
   *  identity row. Omit/empty to show the identity row with no tags. */
  tags?: string[];
  /** Optional sentiment chip shown with the tags ("Sentiment · Frustrated"), in the warning color. */
  sentiment?: { label?: string; value: string };
}`,signature:{properties:[{key:"avatarInitials",value:{name:"string",required:!1},description:`e.g. "AS" for Alex Sanderson — same 2-letter initials convention
 every other initials avatar in this library uses. Omit for a raw,
 unidentified address standing in for a real name (a dialed number
 with no directory match, same distinction \`ChatMessage\`'s own
 \`identified\` prop makes, lyra-ui) — there are no real initials to
 derive off that, so per explicit request the avatar circle itself
 is omitted entirely rather than showing a meaningless character off
 the raw address (e.g. a stray "(" off a phone number); \`subtitle\`/
 \`tags\` below still render normally either way.`},{key:"avatarClassName",value:{name:"string",required:!1},description:`One of this library's own avatar background tokens. Per explicit
 request, callers should pass the SAME color \`ChatMessage\` itself
 uses for a customer-sender avatar ("bg-lyra-accent-green-soft
 text-lyra-accent-green-strong", chat-message.tsx) rather than a
 per-customer hashed color, so this identity card's avatar always
 matches how that same customer already reads elsewhere in the
 transcript. Ignored (no avatar renders at all) when
 \`avatarInitials\` is omitted.`},{key:"subtitle",value:{name:"string",required:!0},description:`e.g. "Business Travel · 8 yrs tenure" — a single pre-formatted
 line under the customer's name.`},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:"Short status/context labels rendered as pill `Tag`s below the\n identity row. Omit/empty to show the identity row with no tags."},{key:"sentiment",value:{name:"signature",type:"object",raw:"{ label?: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}}]},required:!1},description:'Optional sentiment chip shown with the tags ("Sentiment · Frustrated"), in the warning color.'}]}},description:`A small identity-card summary for the "Customer Profile" container —
avatar, name (via the separate \`customerName\` prop), a subtitle (e.g.
segment + tenure), and a handful of status/context tags. Same shape
\`ContactOverviewInfo.customerCard\` already defined (that field was
never wired up by any consumer) — reused here rather than inventing a
second, slightly-different shape. Omit for a contact with no profile
information at all — the container still renders, just with the
customer's name and nothing else.`},snapshot:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Short "Contact Snapshot" bullet list — for a returning/callback
 contact, a recap of the previous conversation; omit for a genuinely
 first-ever contact with no history to summarize (the container still
 renders, with a plain "new conversation" sentence in its place).`},nextBestAction:{required:!1,tsType:{name:"string"},description:'A single recommended-next-step sentence for the "Next Best Action"\n container. Omit to fall back to a generic "confirm the reason for\n contact" placeholder rather than hiding the container — unlike\n `snapshot`/`customerCard`, this container always has SOMETHING to\n suggest.'},nextBestActionContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Replaces the "Next Best Action" container's normal plain-sentence
 body (\`nextBestAction\` above, wrapped in a \`<p>\`) with arbitrary rich
 content instead — e.g. an interactive question with selectable option
 cards, for a consumer whose next-best-action isn't a single suggested
 sentence but an actual decision the agent needs to make. \`nextBestAction\`
 itself is left as-is when this is set (not read at all in that case) —
 a caller can still populate it for callers/analytics that only care
 about the plain-text summary, without it fighting this richer render.
 \`undefined\` (the default) leaves the existing plain-sentence behavior
 completely unaffected.`},nextBestActionBare:{required:!1,tsType:{name:"boolean"},description:'Drops the "Next Best Action" container\'s own accordion chrome\n entirely (the sparkle-icon title bar, chevron, and success-green\n background) — `nextBestActionContent` renders as a plain, uncollapsed\n block instead, still in the same position among Customer Profile/\n Contact Snapshot. Per explicit request, for a `nextBestActionContent`\n whose own content already provides enough visual structure (e.g. a\n question with its own bordered option cards, or a locked confirmation\n block) that a second layer of accordion framing around it just reads\n as redundant chrome. Only meaningful alongside `nextBestActionContent`\n — has no effect on the plain-sentence `nextBestAction` fallback.\n `undefined`/`false` (the default) keeps the normal accordion\n treatment for every other consumer.'},detailedSummary:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Per explicit request ("put the customer summary content inside the
 customer profile accordion"): a short AI-style narrative — a few
 paragraphs recapping why this customer has contacted support before,
 what that prior contact resolved to, and (when available) a quoted
 excerpt from that earlier conversation. Same shape/content callers
 already compute for the separate "AI Customer Summary" panel
 (\`detailedSummary\` from \`buildCustomerContextOverviewInfo\`,
 agent-next-gen-shared-utils.ts) — rendered here too now, as plain
 paragraphs inside the "Customer Profile" container, directly below
 the identity card and above the "View customer info" link. Distinct
 from \`snapshot\` (a short bullet recap) and \`nextBestAction\` (a single
 suggested next step) — this is the longer narrative form of the same
 prior-contact context. Omit for no narrative summary to show.`},realTimeSummary:{required:!1,tsType:{name:"string"},description:`Per explicit request ("replace the autosummary card in the contact
 details with the content depicted in the screenshot of the real time
 summary card"): a single flowing paragraph — grounded in this same
 contact's real facts (the caller joins the exact same per-contact
 \`snapshot\` lines \`buildCustomerContextOverviewInfo\` already computes,
 agent-next-gen-shared-utils.ts — never placeholder/random copy), NOT
 a bullet list. Only rendered by the "Real-Time Summary" container
 (see \`showRealTimeSummary\`'s own doc comment below) — \`snapshot\`
 itself is left completely untouched for the ordinary "Autosummary"
 container every other consumer keeps using. Omit for a generic "no
 summary available" fallback line.`},onSnapshotLink:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Snapshot lines may contain `[label](key)` tokens; they render as links calling this with `key`."},autosummaryBlue:{required:!1,tsType:{name:"boolean"},description:'Renders the "Autosummary" header in the subtle-blue (info) treatment instead of purple.',defaultValue:{value:"false",computed:!1}},customerName:{required:!0,tsType:{name:"string"},description:"The customer this overview is about."},className:{required:!1,tsType:{name:"string"},description:"Additional className on the root element."},onViewCustomerInfo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Renders a "View customer info" link inside the Customer Profile
 container. Omit to hide it.`},onViewInteractionHistory:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Renders a "View Customer Contacts" link inside the Contact Snapshot
 container. Omit to hide it.`},showNextBestAction:{required:!1,tsType:{name:"boolean"},description:`Hides the "Next Best Action" container entirely — per explicit
 request ("add these to the details tab"), the "Details" side panel's
 own reuse of this component (\`DetailsPanelAccordions\`, agent-next-
 gen-customer-info-panel.tsx) shows only Customer Profile/Contact
 Snapshot there (Next Best Action already has its own, more prominent
 home at the top of the main transcript column, so repeating it in a
 side panel would just be noise). Defaults to \`true\` — every other
 consumer of this component keeps showing all three containers exactly
 as before.`,defaultValue:{value:"true",computed:!1}},showCustomerProfile:{required:!1,tsType:{name:"boolean"},description:'Hides the "Customer Profile" container entirely — per explicit\n request ("if a new call is made or the customer does not have any\n information, do not display the customer profile"): callers pass\n `false` for an unidentified/no-information contact instead of letting\n the container render with just a bare `customerName` fallback (no\n `customerCard`) and nothing else useful in it. Defaults to `true` —\n every other consumer keeps showing this container exactly as before.',defaultValue:{value:"true",computed:!1}},showContactSnapshot:{required:!1,tsType:{name:"boolean"},description:`Hides the "Contact Snapshot" container entirely — per explicit
 request (Advanced/"Phase 1B"'s main transcript column shows only
 "Next Best Action" there, with Customer Profile/Contact Snapshot
 reserved for the Details side panel — see each page's own
 \`customerContextOverview\` render-site doc comment). Defaults to
 \`true\` — every other consumer keeps showing this container exactly
 as before, mirroring \`showCustomerProfile\`'s identical pattern.`,defaultValue:{value:"true",computed:!1}},showRealTimeSummary:{required:!1,tsType:{name:"boolean"},description:`Per explicit request ("replace the autosummary card in the contact
 details with the content depicted in the screenshot of the real time
 summary card ... ignore the edit/pin icons and keep it as an
 accordion"), then a follow-up clarification ("do not modify the
 autosummary card that is inline with the conversation - create a new
 card and call it 'Real-Time Summary'"): a SEPARATE, opt-in container
 — pulse (\`Activity\`) icon, "Real-Time Summary" title, \`realTimeSummary\`
 rendered as one flowing paragraph (not \`snapshot\`'s bullet list),
 a divider, then \`realTimeSummaryUpdatedLabel\` — that REPLACES
 "Contact Snapshot"/"Autosummary" in this same slot when \`true\`,
 rather than a new prop on that container itself. Deliberately no
 "View Customer Contacts" link here (the reference screenshot has no
 equivalent), and no pin/edit icons either — those belong to whatever
 dashboard-widget chrome the reference screenshot came from, not this
 accordion; this container still toggles open/closed exactly like its
 two siblings (per "keep it as an accordion"). Defaults to \`false\` —
 every existing consumer (in particular the main transcript column's
 own \`customerContextOverview\` render, which must keep showing the
 ORIGINAL "Autosummary" untouched per that follow-up clarification)
 keeps rendering \`showContactSnapshot\`'s plain bullet-list container
 exactly as before. \`DetailsPanelAccordions\` (agent-next-gen-customer-
 info-panel.tsx) is the one caller that opts in.`,defaultValue:{value:"false",computed:!1}},realTimeSummaryUpdatedLabel:{required:!1,tsType:{name:"string"},description:'`"Updated 8 seconds ago"`-style caption shown under `realTimeSummary`,\n below a divider — the caller owns the actual relative-time formatting\n (this component just renders the string as-is), same "caller resolves\n the content" division of labor every other pre-formatted string prop\n here already follows (`customerCard.subtitle`, etc.). Only meaningful\n alongside `showRealTimeSummary`; omit for no caption line at all.'},onViewExperienceMemory:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'When set, a "View Experience Memory" link renders under the Real-Time Summary text; the caller decides what it opens.'}}};const Ze={title:"UI/Autosummary",component:O,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},args:{customerName:"Maya Chen",showCustomerProfile:!1,showNextBestAction:!1,snapshot:["Calling for a $412.00 refund on [order NR-10871](maya-order), an espresso machine that arrived with a cracked water tank.","Wants a refund, not a replacement; the damage photo check passed.","Paid with [Visa 4417](maya-card); refunds up to $500 with a confirmed photo check are within your limit ([RET-1.3](maya-refund-steps))."]},decorators:[s=>e.jsx("div",{className:"max-w-2xl",children:e.jsx(s,{})})]},v={},b={args:{autosummaryBlue:!0}},w={name:"Links toggle a slide-out",args:{autosummaryBlue:!0},render:s=>{const[a,r]=f.useState(null);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(O,{...s,onSnapshotLink:o=>r(n=>n===o?null:o)}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Slide-out open: ",a??"none"]})]})}};var W,L,F,H,U;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(F=(L=v.parameters)==null?void 0:L.docs)==null?void 0:F.source},description:{story:"Purple header, the default treatment.",...(U=(H=v.parameters)==null?void 0:H.docs)==null?void 0:U.description}}};var $,G,z,J,Y;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    autosummaryBlue: true
  }
}`,...(z=(G=b.parameters)==null?void 0:G.docs)==null?void 0:z.source},description:{story:"Blue (info) header used for AI-led and cold-call cases.",...(Y=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Y.description}}};var K,Q,X,Z,ee;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Links toggle a slide-out",
  args: {
    autosummaryBlue: true
  },
  render: args => {
    const [open, setOpen] = React.useState<string | null>(null);
    return <div className="flex flex-col gap-3">
        <CustomerContextOverview {...args} onSnapshotLink={key => setOpen(cur => cur === key ? null : key)} />
        <p className="lyra-body-sm text-lyra-fg-secondary">Slide-out open: {open ?? "none"}</p>
      </div>;
  }
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Links toggle: the active key is highlighted and clicking it again clears it, mirroring the slide-out panel opening and closing.",...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};const et=["Default","Blue","LinksToggleSlideOut"];export{b as Blue,v as Default,w as LinksToggleSlideOut,et as __namedExportsOrder,Ze as default};
