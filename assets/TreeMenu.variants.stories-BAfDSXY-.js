import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-DhMLlvMY.js";import{T as x,C as W}from"./tree-menu-DXQQjqAW.js";import{B as h}from"./button-D4EbXLB3.js";import{d as f,n as D}from"./TreeMenu.shared-DgRhpkWU.js";import{C as J}from"./chevron-down-gMYAX9-q.js";import{U as K}from"./users-jAzTZfU5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./badge-BpOJAIFg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";import"./monitor-DvVmkaSK.js";import"./settings-B3RqFsd1.js";import"./scissors-9SMedI4E.js";import"./file-text-DK8c8V5C.js";const ve={title:"Custom Primitives/TreeMenu/Variants",component:x,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},decorators:[e=>r.jsx("div",{className:"w-[256px] bg-lyra-bg-surface-shell rounded-lyra-lg p-2",children:r.jsx(e,{})})]},d={name:"Chevron Left",args:{items:f,chevronPosition:"left"}},m={name:"No Icons",args:{items:D}},n=r.jsx(K,{className:"h-4 w-4 text-lyra-fg-active-strong",strokeWidth:1.5});function o(e){return[{label:`${e}_HCI`,icon:n},{label:`${e}_Manual`,icon:n},{label:`${e}_Message Only`,icon:n},{label:`${e}_Omni-Channel`,icon:n},{label:`${e}_Outbound_RPC`,icon:n},{label:`${e}_Preview`,icon:n}]}const V=[{label:"Financial Services",defaultOpen:!0,children:[{label:"FS_ Omni-Channel",icon:n},{label:"FS_HCI",icon:n},{label:"FS_Manual",icon:n},{label:"FS_Message Only",icon:n},{label:"FS_Outbound_RPC",icon:n},{label:"FS_Preview",icon:n}]},{label:"Hospitality",defaultOpen:!0,children:[{label:"H_HCI",icon:n},{label:"H_Manual",icon:n},{label:"H_Message Only",icon:n},{label:"H_Omni-Channel",icon:n},{label:"H_Outbound_RPC",icon:n},{label:"H_Preview",icon:n}]},{label:"Insurance",children:o("IN")},{label:"KJ_NewYork",children:o("KJ")},{label:"Lead Generation",children:o("LG")},{label:"Retail",children:o("RT")},{label:"Sales",children:o("SL")},{label:"Testing Call Center",children:o("TC")},{label:"Training Call Center",children:o("TR")},{label:"Utilities",children:o("UT")}];function s(){const[e,t]=g.useState(!0);return r.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[r.jsxs("button",{onClick:()=>t(l=>!l),"aria-expanded":e,className:"flex w-full items-center gap-2 bg-lyra-bg-surface-container-subtle px-3 h-10 lyra-body-md-emphasis text-lyra-fg-active-strong",children:[r.jsx(J,{className:"h-4 w-4 shrink-0 transition-transform duration-200",style:{transform:e?"rotate(0deg)":"rotate(-90deg)"},strokeWidth:1.5}),"Call Centers"]}),r.jsx(W,{open:e,children:r.jsx("div",{className:"px-1 pb-1",children:r.jsx(x,{items:V})})})]})}const p={name:"Call Centers",render:()=>r.jsx(s,{})};function $(e){return e.flatMap(t=>t.children?[t.label,...$(t.children)]:[])}function A(e,t,l){return e.map(a=>a.children?{...a,open:t.has(a.label),onOpenChange:C=>l(a.label,C),children:A(a.children,t,l)}:a)}function i(){const[e,t]=g.useState(()=>new Set),[l,a]=g.useState(0),C=(c,G)=>t(U=>{const b=new Set(U);return G?b.add(c):b.delete(c),b});return r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(h,{size:"sm",variant:"outline",onClick:()=>t(new Set($(f))),children:"Expand all"}),r.jsx(h,{size:"sm",variant:"outline",onClick:()=>t(new Set),children:"Collapse all"}),r.jsx(h,{size:"sm",variant:"outline",onClick:()=>a(c=>c+1),children:"Rebuild tree"})]}),r.jsx(x,{items:A(f,e,C)},l),r.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Open: ",e.size?Array.from(e).join(", "):"none"]})]})}const u={name:"Controlled",render:()=>r.jsx(i,{})};s.__docgenInfo={description:`The collapsible "Call Centers" header + tree, exported as a named
    function (not inlined in \`render\`) so Outbound-Campaigns' Monitor
    dashboard side menu can mirror this exact markup shape.`,methods:[],displayName:"CallCentersTree"};i.__docgenInfo={description:"",methods:[],displayName:"ControlledTree"};var v,S,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Chevron Left",
  args: {
    items: defaultItems,
    chevronPosition: "left"
  }
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,N,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "No Icons",
  args: {
    items: noIconItems
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,w,j,I,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`function CallCentersTree() {
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
}`,...(j=(w=s.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:`The collapsible "Call Centers" header + tree, exported as a named
function (not inlined in \`render\`) so Outbound-Campaigns' Monitor
dashboard side menu can mirror this exact markup shape.`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};var M,P,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Call Centers",
  render: () => <CallCentersTree />
}`,...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var L,R,H;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`function ControlledTree() {
  const [openSet, setOpenSet] = useState<Set<string>>(() => new Set());
  const [generation, setGeneration] = useState(0);
  const toggle = (label: string, open: boolean) => setOpenSet(prev => {
    const next = new Set(prev);
    if (open) next.add(label);else next.delete(label);
    return next;
  });
  return <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => setOpenSet(new Set(collectParents(defaultItems)))}>
          Expand all
        </Button>
        <Button size="sm" variant="outline" onClick={() => setOpenSet(new Set())}>
          Collapse all
        </Button>
        <Button size="sm" variant="outline" onClick={() => setGeneration(g => g + 1)}>
          Rebuild tree
        </Button>
      </div>
      <TreeMenu key={generation} items={bindOpen(defaultItems, openSet, toggle)} />
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Open: {openSet.size ? Array.from(openSet).join(", ") : "none"}
      </p>
    </div>;
}`,...(H=(R=i.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var z,B,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Controlled",
  render: () => <ControlledTree />
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Se=["ChevronLeft","NoIcons","CallCentersTree","CallCenters","ControlledTree","Controlled"];export{p as CallCenters,s as CallCentersTree,d as ChevronLeft,u as Controlled,i as ControlledTree,m as NoIcons,Se as __namedExportsOrder,ve as default};
