import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DhMLlvMY.js";import{c as g}from"./utils-BLSKlp9E.js";import{S as O}from"./spinner-xIhFAlhc.js";import{c as P}from"./createLucideIcon-aII_sYFw.js";import{C as L}from"./chevron-right-BP9ksYh_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=P("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);function u({title:i,timestamp:o,by:c,pending:l,pendingLabel:d="AI agent is performing this now…",active:t,onOpen:A,className:m}){return l?e.jsxs("div",{className:g("flex items-center gap-2 px-1 lyra-body-sm text-lyra-fg-secondary",m),children:[e.jsx(O,{size:"sm"}),d]}):e.jsxs("button",{type:"button",onClick:A,"aria-current":t?"true":void 0,className:g("flex w-full animate-in fade-in-0 slide-in-from-bottom-4 duration-200 items-center gap-3 rounded-lyra-md border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lyra-border-focus",t?"border-lyra-border-active bg-lyra-status-info-subtle":"border-lyra-border-subtle bg-lyra-bg-surface-base hover:border-lyra-state-border-hover-neutral",m),children:[e.jsx(M,{className:"h-4 w-4 shrink-0 text-lyra-fg-secondary",strokeWidth:1.5,"aria-hidden":"true"}),e.jsx("span",{className:"min-w-0 flex-1 truncate lyra-body-md-emphasis text-lyra-fg-default",children:i}),e.jsx("span",{className:"shrink-0 lyra-body-sm text-lyra-fg-secondary",children:o}),e.jsx("span",{className:"shrink-0 lyra-body-sm text-lyra-fg-secondary",children:c}),e.jsx(L,{className:"h-4 w-4 shrink-0 text-lyra-fg-secondary",strokeWidth:1.5,"aria-hidden":"true"})]})}u.__docgenInfo={description:"A logged agent action in the chat. Spinner while pending, then a clickable row that turns blue while its panel is open.",methods:[],displayName:"Interstitial",props:{title:{required:!0,tsType:{name:"string"},description:"Row title (e.g. the Copilot question or action taken)."},timestamp:{required:!0,tsType:{name:"string"},description:"Time the action was logged."},by:{required:!0,tsType:{name:"string"},description:"Who performed it (John Smith, Checkout AI Agent…)."},pending:{required:!1,tsType:{name:"boolean"},description:'While true, shows "AI agent is performing this now…" with a spinner instead of the row.'},pendingLabel:{required:!1,tsType:{name:"string"},description:"Pending label.",defaultValue:{value:'"AI agent is performing this now…"',computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"True while this row's panel is open in the side panel: blue selected look."},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Fires when the row is clicked (opens/closes its side panel)."},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"UI/Interstitial",component:u,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},args:{title:"Show the charges",timestamp:"1:01 PM",by:"John Smith"}},s={args:{pending:!0}},n={},r={args:{active:!0}},a={name:"Lifecycle (click to open/close panel)",render:i=>{const[o,c]=p.useState(!0),[l,d]=p.useState(!1);return p.useEffect(()=>{const t=setTimeout(()=>c(!1),1800);return()=>clearTimeout(t)},[]),e.jsx("div",{className:"max-w-xl",children:e.jsx(u,{...i,pending:o,active:l,onOpen:()=>d(t=>!t)})})}};var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    pending: true
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,x,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var v,k,S,T,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"Selected look while the row's side panel is open (blue background, active border).",...(j=(T=r.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var q,I,N;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Lifecycle (click to open/close panel)",
  render: args => {
    const [pending, setPending] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const t = setTimeout(() => setPending(false), 1800);
      return () => clearTimeout(t);
    }, []);
    return <div className="max-w-xl">
        <Interstitial {...args} pending={pending} active={open} onOpen={() => setOpen(o => !o)} />
      </div>;
  }
}`,...(N=(I=a.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const V=["Pending","Default","Active","Lifecycle"];export{r as Active,n as Default,a as Lifecycle,s as Pending,V as __namedExportsOrder,J as default};
