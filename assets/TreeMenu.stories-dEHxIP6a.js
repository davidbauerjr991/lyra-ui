import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-CXOcBcs0.js";import{T as M,C as A}from"./tree-menu-Clac48HE.js";import{M as O}from"./monitor-DREitwVn.js";import{c as L}from"./createLucideIcon-DEcfmm_F.js";import{S as P}from"./settings-Ddbozet5.js";import{S as D}from"./scissors-BWG8HrAt.js";import{C as $}from"./chevron-down-BRCsRsv-.js";import{F as G}from"./file-text-D-AW36xm.js";import{U}from"./users-CNa7Nyqi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=L("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=L("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),te={title:"Custom Primitives/TreeMenu",component:M,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},decorators:[r=>e.jsx("div",{className:"w-[256px] bg-lyra-bg-surface-shell rounded-lyra-lg p-2",children:e.jsx(r,{})})]},E=[{icon:e.jsx(O,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Monitor"},{icon:e.jsx(W,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Dashboard"},{icon:e.jsx(P,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Configure",children:[{label:"General"},{label:"Permissions"},{label:"Integrations"}]},{icon:e.jsx(D,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Designer",defaultOpen:!0,children:[{label:"Desktop Library",active:!0},{label:"Templates"},{label:"Components"}]},{icon:e.jsx(G,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Examples"},{icon:e.jsx(q,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Product Mockups"}],n={name:"Default",args:{items:E}},J=[{icon:e.jsx(O,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Monitor"},{icon:e.jsx(W,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Dashboard"},{icon:e.jsx(P,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Configure",children:[{label:"General"},{label:"Permissions"}]},{icon:e.jsx(D,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Designer",children:[{label:"Desktop Library"},{label:"Templates"},{label:"Components"}]}],t={name:"All Collapsed",args:{items:J}},o={name:"Chevron Left",args:{items:E,chevronPosition:"left"}},K=[{label:"Getting Started"},{label:"Components",defaultOpen:!0,children:[{label:"Button"},{label:"Checkbox",active:!0},{label:"Input"}]},{label:"Patterns",children:[{label:"Forms"},{label:"Navigation"}]}],i={name:"No Icons",args:{items:K}},a=e.jsx(U,{className:"h-4 w-4 text-lyra-fg-active-strong",strokeWidth:1.5});function s(r){return[{label:`${r}_HCI`,icon:a},{label:`${r}_Manual`,icon:a},{label:`${r}_Message Only`,icon:a},{label:`${r}_Omni-Channel`,icon:a},{label:`${r}_Outbound_RPC`,icon:a},{label:`${r}_Preview`,icon:a}]}const B=[{label:"Financial Services",defaultOpen:!0,children:[{label:"FS_ Omni-Channel",icon:a},{label:"FS_HCI",icon:a},{label:"FS_Manual",icon:a},{label:"FS_Message Only",icon:a},{label:"FS_Outbound_RPC",icon:a},{label:"FS_Preview",icon:a}]},{label:"Hospitality",defaultOpen:!0,children:[{label:"H_HCI",icon:a},{label:"H_Manual",icon:a},{label:"H_Message Only",icon:a},{label:"H_Omni-Channel",icon:a},{label:"H_Outbound_RPC",icon:a},{label:"H_Preview",icon:a}]},{label:"Insurance",children:s("IN")},{label:"KJ_NewYork",children:s("KJ")},{label:"Lead Generation",children:s("LG")},{label:"Retail",children:s("RT")},{label:"Sales",children:s("SL")},{label:"Testing Call Center",children:s("TC")},{label:"Training Call Center",children:s("TR")},{label:"Utilities",children:s("UT")}];function l(){const[r,F]=R.useState(!0);return e.jsxs("div",{className:"rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",children:[e.jsxs("button",{onClick:()=>F(H=>!H),"aria-expanded":r,className:"flex w-full items-center gap-2 bg-lyra-bg-surface-container-subtle px-3 h-10 lyra-body-md-emphasis text-lyra-fg-active-strong",children:[e.jsx($,{className:"h-4 w-4 shrink-0 transition-transform duration-200",style:{transform:r?"rotate(0deg)":"rotate(-90deg)"},strokeWidth:1.5}),"Call Centers"]}),e.jsx(A,{open:r,children:e.jsx("div",{className:"px-1 pb-1",children:e.jsx(M,{items:B})})})]})}const c={name:"Call Centers",render:()=>e.jsx(l,{})};l.__docgenInfo={description:`The collapsible "Call Centers" header + tree, exported as a named
    function (not inlined in \`render\`) so Outbound-Campaigns' Monitor
    dashboard side menu can mirror this exact markup shape.`,methods:[],displayName:"CallCentersTree"};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Default",
  args: {
    items: defaultItems
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "All Collapsed",
  args: {
    items: collapsedItems
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,x,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Chevron Left",
  args: {
    items: defaultItems,
    chevronPosition: "left"
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,y,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "No Icons",
  args: {
    items: noIconItems
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var k,N,_,w,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`function CallCentersTree() {
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
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:`The collapsible "Call Centers" header + tree, exported as a named
function (not inlined in \`render\`) so Outbound-Campaigns' Monitor
dashboard side menu can mirror this exact markup shape.`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.description}}};var T,j,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Call Centers",
  render: () => <CallCentersTree />
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const oe=["Default","AllCollapsed","ChevronLeft","NoIcons","CallCentersTree","CallCenters"];export{t as AllCollapsed,c as CallCenters,l as CallCentersTree,o as ChevronLeft,n as Default,i as NoIcons,oe as __namedExportsOrder,te as default};
