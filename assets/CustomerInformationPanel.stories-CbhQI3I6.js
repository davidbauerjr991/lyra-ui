import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CXOcBcs0.js";import{C as o}from"./customer-information-panel-C_sH8AbT.js";import{B as f}from"./button-BxQnLjgV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./side-panel-DLXJdFqq.js";import"./container-header-BbK1XDO0.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";import"./use-panel-drag-resize-CoDT4W-X.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-go1ZjKcF.js";const K={title:"UI/CustomerInformationPanel",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"Side Panel",render:()=>{const[s,x]=l.useState(!0),[t,y]=l.useState(!0);return e.jsxs("div",{className:"relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(o,{open:s,pinned:t,person:{name:"Sarah Miller",id:"CST-10591"},onPinToggle:()=>y(a=>!a),children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Customer details go here."})})}),e.jsxs("div",{className:"flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2",children:[e.jsx(f,{onClick:()=>x(a=>!a),variant:"outline",children:s?"Close Panel":"Open Panel"}),e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:t?"Pinned — pushes content":"Unpinned — hovers as overlay"})]})]})}},n={name:"Agent Subject",render:()=>e.jsxs("div",{className:"relative h-[400px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle",children:[e.jsx(o,{open:!0,pinned:!0,person:{name:"Alex Kowalski",id:"AGT-2003"},children:e.jsx("div",{className:"px-4 py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Customer details go here."})})}),e.jsx("div",{className:"flex flex-1 bg-lyra-bg-surface-base"})]})};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Side Panel",
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(true);
    return <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <CustomerInformationPanel open={open} pinned={pinned} person={{
        name: "Sarah Miller",
        id: "CST-10591"
      }} onPinToggle={() => setPinned(v => !v)}>
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Customer details go here.</p>
          </div>
        </CustomerInformationPanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen(v => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>;
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Agent Subject",
  render: () => <div className="relative h-[400px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      <CustomerInformationPanel open pinned person={{
      name: "Alex Kowalski",
      id: "AGT-2003"
    }}>
        <div className="px-4 py-4">
          <p className="lyra-body-md text-lyra-fg-secondary">Customer details go here.</p>
        </div>
      </CustomerInformationPanel>
      <div className="flex flex-1 bg-lyra-bg-surface-base" />
    </div>
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const M=["Side","AgentSubject"];export{n as AgentSubject,r as Side,M as __namedExportsOrder,K as default};
