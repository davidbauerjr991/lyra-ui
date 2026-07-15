import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-CXOcBcs0.js";import{P as o}from"./panel-pin-button-B4dXEUQg.js";import{U as g}from"./user-rDz6zf5M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DEcfmm_F.js";const S={title:"Atoms/PanelPinButton",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={render:()=>{const[n,a]=u.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(o,{pinned:n,onToggle:()=>a(t=>!t)}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}},s={name:"Custom Icon (Designer panel trigger)",render:()=>{const[n,a]=u.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3",children:[e.jsx(o,{pinned:n,onToggle:()=>a(t=>!t),icon:e.jsx(g,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"}),pinnedLabel:"Unpin Designer panel",unpinnedLabel:"Pin Designer panel"}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:n?"Pinned":"Unpinned"})]})}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Custom Icon (Designer panel trigger)",
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <div className="flex items-center gap-3 rounded-lyra-md border border-lyra-border-subtle p-3">
        <PanelPinButton pinned={pinned} onToggle={() => setPinned(v => !v)} icon={<User className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />} pinnedLabel="Unpin Designer panel" unpinnedLabel="Pin Designer panel" />
        <span className="lyra-body-sm text-lyra-fg-secondary">{pinned ? "Pinned" : "Unpinned"}</span>
      </div>;
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Default","CustomIcon"];export{s as CustomIcon,r as Default,B as __namedExportsOrder,S as default};
