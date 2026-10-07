import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-DhMLlvMY.js";import{T as y,C as O}from"./tree-menu-BQrQoyaz.js";import{d as S,n as w}from"./TreeMenu.shared-DgRhpkWU.js";import{C as L}from"./chevron-down-gMYAX9-q.js";import{U as M}from"./users-jAzTZfU5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./monitor-DvVmkaSK.js";import"./createLucideIcon-aII_sYFw.js";import"./settings-B3RqFsd1.js";import"./scissors-9SMedI4E.js";import"./file-text-DK8c8V5C.js";const K={title:"Custom Primitives/TreeMenu/Variants",component:y,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},decorators:[n=>r.jsx("div",{className:"w-[256px] bg-lyra-bg-surface-shell rounded-lyra-lg p-2",children:r.jsx(n,{})})]},l={name:"Chevron Left",args:{items:S,chevronPosition:"left"}},o={name:"No Icons",args:{items:w}},e=r.jsx(M,{className:"h-4 w-4 text-lyra-fg-active-strong",strokeWidth:1.5});function a(n){return[{label:`${n}_HCI`,icon:e},{label:`${n}_Manual`,icon:e},{label:`${n}_Message Only`,icon:e},{label:`${n}_Omni-Channel`,icon:e},{label:`${n}_Outbound_RPC`,icon:e},{label:`${n}_Preview`,icon:e}]}const j=[{label:"Financial Services",defaultOpen:!0,children:[{label:"FS_ Omni-Channel",icon:e},{label:"FS_HCI",icon:e},{label:"FS_Manual",icon:e},{label:"FS_Message Only",icon:e},{label:"FS_Outbound_RPC",icon:e},{label:"FS_Preview",icon:e}]},{label:"Hospitality",defaultOpen:!0,children:[{label:"H_HCI",icon:e},{label:"H_Manual",icon:e},{label:"H_Message Only",icon:e},{label:"H_Omni-Channel",icon:e},{label:"H_Outbound_RPC",icon:e},{label:"H_Preview",icon:e}]},{label:"Insurance",children:a("IN")},{label:"KJ_NewYork",children:a("KJ")},{label:"Lead Generation",children:a("LG")},{label:"Retail",children:a("RT")},{label:"Sales",children:a("SL")},{label:"Testing Call Center",children:a("TC")},{label:"Training Call Center",children:a("TR")},{label:"Utilities",children:a("UT")}];function s(){const[n,T]=I.useState(!0);return r.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[r.jsxs("button",{onClick:()=>T(N=>!N),"aria-expanded":n,className:"flex w-full items-center gap-2 bg-lyra-bg-surface-container-subtle px-3 h-10 lyra-body-md-emphasis text-lyra-fg-active-strong",children:[r.jsx(L,{className:"h-4 w-4 shrink-0 transition-transform duration-200",style:{transform:n?"rotate(0deg)":"rotate(-90deg)"},strokeWidth:1.5}),"Call Centers"]}),r.jsx(O,{open:n,children:r.jsx("div",{className:"px-1 pb-1",children:r.jsx(y,{items:j})})})]})}const t={name:"Call Centers",render:()=>r.jsx(s,{})};s.__docgenInfo={description:`The collapsible "Call Centers" header + tree, exported as a named
    function (not inlined in \`render\`) so Outbound-Campaigns' Monitor
    dashboard side menu can mirror this exact markup shape.`,methods:[],displayName:"CallCentersTree"};var i,c,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Chevron Left",
  args: {
    items: defaultItems,
    chevronPosition: "left"
  }
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "No Icons",
  args: {
    items: noIconItems
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,b,h,g,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`function CallCentersTree() {
  const [open, setOpen] = useState(true);
  return <div className="rounded-lyra-lg border border-lyra-border-subtle overflow-hidden">
      <button onClick={() => setOpen(v => !v)} aria-expanded={open} className="flex w-full items-center gap-2 bg-lyra-bg-surface-container-subtle px-3 h-10 lyra-body-md-emphasis text-lyra-fg-active-strong">
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" style={{
        transform: open ? "rotate(0deg)" : "rotate(-90deg)"
      }} strokeWidth={1.5} />
        Call Centers
      </button>
      <CollapsiblePanel open={open}>
        <div className="px-1 pb-1">
          <TreeMenu items={CALL_CENTER_ITEMS} />
        </div>
      </CollapsiblePanel>
    </div>;
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:`The collapsible "Call Centers" header + tree, exported as a named
function (not inlined in \`render\`) so Outbound-Campaigns' Monitor
dashboard side menu can mirror this exact markup shape.`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var _,v,x;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Call Centers",
  render: () => <CallCentersTree />
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const V=["ChevronLeft","NoIcons","CallCentersTree","CallCenters"];export{t as CallCenters,s as CallCentersTree,l as ChevronLeft,o as NoIcons,V as __namedExportsOrder,K as default};
