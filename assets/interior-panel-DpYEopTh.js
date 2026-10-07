import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as e}from"./index-DhMLlvMY.js";import{C as he}from"./container-header-i6DKumQe.js";import{u as fe,P as pe}from"./use-panel-drag-resize-5yYjQ41o.js";import{P as me}from"./panel-footer-CovEXd4d.js";import{T as we}from"./tooltip-DKTByY8R.js";import{c as M}from"./utils-BLSKlp9E.js";import{M as ge,a as be}from"./minimize-2-8DCE4oLK.js";function ye(r){const a=document.cookie.match(new RegExp(`(?:^|; )${r}=([^;]*)`));return a?decodeURIComponent(a[1]):null}function ve(r,a){document.cookie=`${r}=${encodeURIComponent(a)}; path=/; SameSite=Lax`}function xe(r){const a=ye(r),i=a?Number(a):NaN;return Number.isFinite(i)?i:null}const B=e.forwardRef(({className:r,side:a="right",open:i=!0,onClose:A,closeIcon:D,resizable:H=!0,minWidth:f=350,maxWidth:O,onResizeStateChange:d,onWidthChange:c,width:b,storageKey:s,headerTitle:y,headerSubhead:V,headerIcon:L,onBack:U,backIcon:$,headerTitleBadge:G,headerActions:_,headerTabs:J,allowFullScreen:K=!1,exitFullScreenSignal:u,absoluteBreakpoint:X=1440,overlayHeader:v=!1,footer:x,children:Q,...R},h)=>{const T=O??(v?1/0:425),[Y]=e.useState(()=>b!==void 0?b:(s?xe(s):null)??f),[Z,ee]=e.useState(!1),te=e.useCallback(t=>{ee(t),d==null||d(t)},[d]),ne=e.useCallback(t=>{s&&ve(s,String(t)),c==null||c(t)},[s,c]),{width:k,onMouseDown:ae,onKeyDown:ie}=fe(a,Y,f,T,te,ne),[oe,p]=e.useState(!1),m=e.useRef(void 0);e.useEffect(()=>(i?(clearTimeout(m.current),p(!1)):(p(!0),m.current=setTimeout(()=>p(!1),260)),()=>clearTimeout(m.current)),[i]);const N=e.useRef(null),[w,q]=e.useState(9999),re=v||w<X,I=e.useCallback(t=>{N.current=t,typeof h=="function"?h(t):h&&(h.current=t)},[]);e.useLayoutEffect(()=>{var F;const t=(F=N.current)==null?void 0:F.parentElement;if(!t)return;q(t.getBoundingClientRect().width);const E=new ResizeObserver(([ue])=>q(ue.contentRect.width));return E.observe(t),()=>E.disconnect()},[]);const[o,z]=e.useState(!1),C=e.useRef(u);e.useEffect(()=>{u!==C.current&&z(!1),C.current=u},[u]);const j=e.useRef(o),se=j.current!==o;e.useEffect(()=>{j.current=o});const P=Z||se?"none":"width 250ms cubic-bezier(0.4, 0, 0.2, 1)",le=K?n.jsx(we,{content:o?"Exit full screen":"Full screen",placement:"bottom",asLabel:!0,children:n.jsx("button",{type:"button","aria-label":o?"Exit full screen":"Full screen",onClick:()=>z(t=>!t),className:"flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-action hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:o?n.jsx(ge,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}):n.jsx(be,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})}):null,de=H&&i&&!o?n.jsx("div",{onMouseDown:ae,role:"separator","aria-orientation":"vertical","aria-label":"Resize panel","aria-valuenow":Math.round(k),"aria-valuemin":f,"aria-valuemax":T,tabIndex:0,onKeyDown:ie,className:"absolute top-0 bottom-0 z-10 flex items-center justify-center group focus-visible:outline-none",style:{[a==="right"?"left":"right"]:-4,width:8,cursor:"col-resize"},children:n.jsx("div",{className:"w-0.5 h-8 rounded-full bg-lyra-border-soft opacity-0 group-hover:opacity-100 group-focus-visible:w-1 group-focus-visible:bg-lyra-border-focus group-focus-visible:opacity-100 transition-opacity"})}):null,l=o?w:Math.min(k,w),g=n.jsxs("div",{className:"relative flex flex-col h-full",style:{width:l,minWidth:l},children:[de,n.jsxs("div",{className:"flex flex-col flex-1 min-h-0",style:{opacity:i?1:0,visibility:i?"visible":"hidden",transition:i?"opacity 150ms ease 30ms":"none"},children:[y&&n.jsx(he,{title:y,subhead:V,icon:L,onBack:U,backIcon:$,titleBadge:G,actions:n.jsxs(n.Fragment,{children:[_,le]}),tabs:J,onClose:A,closeIcon:D,bordered:!1}),n.jsx(pe,{children:Q}),x&&n.jsx(me,{children:x})]})]}),W=i||oe?a==="right"?"border-l border-lyra-border-subtle":"border-r border-lyra-border-subtle":"",S=i?l:0,ce=a==="right"?"right-0":"left-0";return re||o?n.jsx("div",{ref:I,className:M("absolute top-0 z-[5] h-full overflow-hidden bg-lyra-bg-surface-overlay shadow-lg",ce,W,r),style:{width:S,transition:P},...R,children:g}):n.jsx("div",{ref:I,className:M("relative flex flex-col h-full bg-lyra-bg-surface-overlay shrink-0",W,r),style:{width:S,minWidth:0,overflow:"hidden",transition:P},...R,children:a==="left"?n.jsx("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:l,minWidth:l},children:g}):g})});B.displayName="InteriorPanel";B.__docgenInfo={description:"",methods:[],displayName:"InteriorPanel",props:{side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:'Which edge of the main container the panel is docked to (default: "right")',defaultValue:{value:'"right"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the panel is open (default: true)",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the header's close (×) button is clicked"},closeIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon rendered inside the header's close button — see `ContainerHeaderProps.closeIcon`'s\n own doc comment. Default: lucide `X`, unchanged for every existing consumer."},resizable:{required:!1,tsType:{name:"boolean"},description:"Allow drag-to-resize on the panel's leading border (default: true)",defaultValue:{value:"true",computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:"Min width when resizing, px (default: 350)",defaultValue:{value:"350",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"Max width when resizing, px. Default: 425 — unless `overlayHeader` is\n true and this is left unset, in which case it defaults to unconstrained\n (no resize cap), matching `InContactInteriorPanel`'s own\n `maxWidth={Infinity}`. Passing this explicitly always wins either way."},onResizeStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isResizing: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isResizing"}],return:{name:"void"}}},description:"Fired when a resize drag starts (true) or ends (false)"},onWidthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:"Fired whenever the width changes during a drag"},width:{required:!1,tsType:{name:"number"},description:"Width in px. Defaults to `minWidth` (opens at its narrowest, per\nexplicit request) — unless `storageKey` is set and a previously\ndrag-resized width was found under that key, in which case that\nremembered width is used instead. Passing this prop explicitly always\nwins over both."},storageKey:{required:!1,tsType:{name:"string"},description:`Cookie key to remember this panel's drag-resized width under, across
opens/closes and even full remounts (e.g. navigating away from the page
and back, which unmounts the component and would otherwise lose the
resize). Omit to keep the current per-mount-only behavior (resizes
persist while the component stays mounted, same as before this prop
existed, but reset to \`maxWidth\` on a fresh mount). Give each distinct
interior panel in an app its own key — sharing one between two
different panels (e.g. two different pages' own interior panels) would
incorrectly apply one's remembered size to the other.`},headerTitle:{required:!1,tsType:{name:"string"},description:""},headerSubhead:{required:!1,tsType:{name:"string"},description:"Optional line below `headerTitle`, e.g. a record's name + id"},headerIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Forwarded to `PanelHeader`/`ContainerHeader`'s own `onBack` — a real\n back-arrow button to the left of `headerIcon`/the title, for content\n that drills into a sub-view within this SAME panel rather than\n opening a second, nested one (this component doesn't support\n nesting). Omit for a panel with no drill-down navigation."},backIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Forwarded to `PanelHeader`/`ContainerHeader`'s own `backIcon`.\n Default: lucide `ArrowLeft`."},headerTitleBadge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Rendered inline immediately after `headerTitle`, same row (forwarded to\n`PanelHeader`/`ContainerHeader`'s own `titleBadge` slot) — e.g. an\naction button that needs to float next to the title itself rather than\njoin the far-right `headerActions` cluster (useful once this panel is\nwide enough — full-screen, say — to have real room beside the title).\nMirrors `SidePanel`'s identically-named prop for consistency between\nthe two panel types."},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},headerTabs:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"A `TabList` rendered inside the header itself, below the title/subhead\nrow — forwarded straight to `PanelHeader`'s own `tabs` prop (see\ncontainer-header.tsx). This keeps the tabs genuinely fixed: they sit\noutside `PanelContent` (the `flex-1 overflow-y-auto` scroll region\n`children` renders into), not inside it with a hand-rolled `sticky`\nwrapper — see CONTRIBUTING.md's \"Composing panel body content\" for why\nthat used to be the only option and what was wrong with it (the\nsurrounding scroll container's own scrollbar still ran alongside a\nmerely-`sticky` tab row, and selecting from a collapsed \"N More\"\noverflow menu had its own separate bug on top of that). Pass the same\n`TabList` you'd otherwise have put at the top of `children` — nothing\nelse about how you build it changes."},allowFullScreen:{required:!1,tsType:{name:"boolean"},description:`Adds a full-screen toggle button to the header (a \`Maximize2\`/
\`Minimize2\` icon, matching \`ContainerHeader.stories.tsx\`'s own
fullscreen-toggle reference) that expands the panel to the full width
of its container — same overlay mechanism the panel already uses below
its \`absoluteBreakpoint\` (default 1440px) of its parent's width
(\`isNarrow\`, see the class doc comment above and \`absoluteBreakpoint\`'s
own doc comment), just user-triggered instead of width-triggered, so it needs no
extra cooperation from whatever main-content column sits next to this
panel: the panel simply covers it, rather than requiring that sibling
to shrink out of the way itself. Default \`false\` — every existing
panel is unaffected; opt in per usage for whichever ones actually
benefit from more room on demand (e.g. a wide table or transcript
inside the panel). Self-contained open/closed state (not controlled
from outside) — same "the component owns this interaction, not the
consumer" status as the resize drag state already has. Resizing
(\`resizable\`) is disabled while full-screen, since dragging a width
that's currently clamped to the full measured container width doesn't
mean anything; it resumes at whatever width was active before entering
full-screen once toggled back off.`,defaultValue:{value:"false",computed:!1}},exitFullScreenSignal:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Bump this (e.g. an ever-incrementing counter) to force the panel OUT
of full-screen mode from outside — for a case like "a new assignment
just opened behind this panel while it happened to be full-screen,
and the newly-opened content needs to actually be visible again."
\`isFullScreen\` is otherwise deliberately self-contained/uncontrolled
(see that state's own doc comment below) — this is a narrow one-way
escape hatch, not a switch to a fully controlled \`fullScreen\`/
\`onFullScreenChange\` pair: the consumer can force it closed, but can't
read or fully drive the value. Compared via reference equality against
the previous render inside a \`useEffect\`, so any distinct value works
(a counter, a timestamp, the id of whatever triggered the exit) as
long as it changes each time an exit should happen; passing the exact
same value twice in a row (including leaving this \`undefined\`, the
default) is a no-op both times. No effect if the panel isn't currently
full-screen.`},absoluteBreakpoint:{required:!1,tsType:{name:"number"},description:`Width (px) of the panel's PARENT container below which it switches to
an absolute overlay instead of squeezing the main content column
further — see this component's own top doc comment for the "why" and
this value's own history. Default: 1440, unchanged for every existing
consumer (\`AdminShell\` and every other app built on this design system)
— per explicit request, scoped per-consumer rather than changed
globally: a lower value here flips to overlay mode sooner (at a wider
parent width), which suits a narrower/busier main content column (e.g.
one already sharing space with a docked Customer Information panel)
without affecting any other app's own interior panels, which have no
reason to change behavior just because one consumer wanted a different
threshold.`,defaultValue:{value:"1440",computed:!1}},overlayHeader:{required:!1,tsType:{name:"boolean"},description:`Forces the panel permanently into its absolute-overlay layout (the
same one \`isNarrow\`/\`absoluteBreakpoint\` switches to below the
threshold above), regardless of how wide its parent container is —
equivalent to \`absoluteBreakpoint={Infinity}\`, just named for what a
consumer is actually opting into rather than the width-threshold
mechanism underneath. Default: false (every existing consumer is
unaffected).

This is what lets the panel render OVER a page-level header instead of
being squeezed beside the main content below one — but only because
of where it's mounted, not anything this prop repositions on its own:
the overlay always positions \`absolute; top: 0\` against the panel's
nearest positioned (\`relative\`/etc.) ancestor, covering whatever else
lives inside that SAME ancestor. Mount the panel inside a \`relative\`
box that also contains the header (as a normal-flow sibling before the
panel, the way agent-next-gen-v3's "Customer Information" overlay
sits alongside its own record header — see \`InContactConfiguration\` in
this component's own stories) and it renders on top of that header;
mount it below/outside that header's own container (every other
consumer's existing pattern — see the \`Right\`/\`Left\`/\`WithFullScreen\`/
\`WithTabs\` stories) and this prop makes no visible difference to the
header at all, only to whether the main content column ever gets
squeezed instead of overlaid.

Also defaults \`maxWidth\` to unconstrained when left unset (see that
prop's own doc comment) — an overlay covering a header is meant to
read as a full detail view, not a narrow drawer capped at 425px.

Added to formalize agent-next-gen-v3's \`InContactInteriorPanel\`
wrapper (agent-next-gen-in-contact-panel.tsx), which hardcoded this
exact combination (\`absoluteBreakpoint={Infinity}\` +
\`maxWidth={Infinity}\`) for its two "in-contact" overlay call sites —
per an explicit request, that wrapper now sets this prop directly
instead of the two it stood in for.`,defaultValue:{value:"false",computed:!1}},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{B as I};
