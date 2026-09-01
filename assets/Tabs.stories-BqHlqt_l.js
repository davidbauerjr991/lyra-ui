import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CXOcBcs0.js";import{T as o,a as n,b}from"./tabs-RIPQUPRN.js";import{L as te}from"./layout-grid-DIlLALBe.js";import{S as ne}from"./settings-Ddbozet5.js";import{F as ie}from"./file-text-D-AW36xm.js";import{P as re}from"./pencil-DdhzNlrF.js";import{C as se}from"./copy-BRsdvqrt.js";import{T as oe}from"./trash-2-yAnBWR5t.js";import{E as ce}from"./ellipsis-vertical-CZvSBcNM.js";import{L as le}from"./lock-DfVEDs20.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./kebab-menu-button-X2gEabCK.js";import"./menu-radix-BLTbpF2b.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./badge-BsM2Tnvd.js";import"./index-1evVQkiP.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./tooltip-Dp368zAN.js";import"./index-De81K0_o.js";import"./index-DNfP5j1O.js";const qe={title:"Custom Primitives/Tabs",component:o,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},v={render:()=>{const[a,t]=c.useState("tab1");return e.jsxs("div",{children:[e.jsxs(o,{overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),children:"Tab Section"})]}),e.jsx(b,{active:a==="tab1",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 1"})}),e.jsx(b,{active:a==="tab2",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 2"})}),e.jsx(b,{active:a==="tab3",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 3"})})]})}},u={name:"Full Width",render:()=>{const[a,t]=c.useState("tab1");return e.jsxs(o,{fullWidth:!0,overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),children:"Tab Section"})]})}},h={name:"With Icons",render:()=>{const[a,t]=c.useState("tab1");return e.jsxs(o,{overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),icon:e.jsx(te,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),icon:e.jsx(ne,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),icon:e.jsx(ie,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"})]})}},p={name:"With Icons / Full Width",render:()=>{const[a,t]=c.useState("tab1");return e.jsxs(o,{fullWidth:!0,overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),icon:e.jsx(te,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),icon:e.jsx(ne,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),icon:e.jsx(ie,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"})]})}},T={name:"Tab States",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),e.jsx(o,{overflowMenu:!0,"aria-label":"Default state tabs",children:e.jsx(n,{children:"Tab Section"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover over to see)"}),e.jsx(o,{overflowMenu:!0,"aria-label":"Hover state tabs",children:e.jsx(n,{children:"Tab Section"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Active"}),e.jsx(o,{overflowMenu:!0,"aria-label":"Active state tabs",children:e.jsx(n,{active:!0,children:"Tab Section"})})]})]})};function de(){const[a,t]=c.useState([{id:"1",label:"1. Inbound Voice",locked:!1},{id:"2",label:"2. Blended Voice",locked:!0},{id:"3",label:"3. Outbound Digital",locked:!1}]),[r,i]=c.useState("2"),S=s=>{t(l=>{const d=l.filter(w=>w.id!==s);return r===s&&d.length>0&&i(d[0].id),d})};return e.jsx(o,{overflowMenu:!0,"aria-label":"Removable tabs",children:a.map(s=>e.jsx(n,{active:r===s.id,onClick:()=>i(s.id),icon:s.locked?e.jsx(le,{className:"h-3.5 w-3.5",strokeWidth:1.5}):void 0,onRemove:()=>S(s.id),removeLabel:`Remove ${s.label}`,children:s.label},s.id))})}const f={name:"Removable",render:()=>e.jsx(de,{})},x={name:"With Right Icon (Menu)",render:()=>{const[a,t]=c.useState("1"),r=[{id:"1",label:"1. Inbound Voice"},{id:"2",label:"2. Blended Voice"},{id:"3",label:"3. Outbound Digital"}];return e.jsx(o,{overflowMenu:!0,"aria-label":"Tabs with menu",children:r.map(i=>e.jsx(n,{active:a===i.id,onClick:()=>t(i.id),rightIcon:e.jsx(ce,{className:"h-3.5 w-3.5",strokeWidth:1.5}),children:i.label},i.id))})}},k={name:"With Kebab Menu (functional dropdown)",render:()=>{const[a,t]=c.useState("1"),r=[{id:"1",label:"1. Inbound Voice"},{id:"2",label:"2. Blended Voice"},{id:"3",label:"3. Outbound Digital"}];return e.jsx(o,{overflowMenu:!0,"aria-label":"Tabs with a real kebab menu",children:r.map(i=>e.jsx(n,{active:a===i.id,onClick:()=>t(i.id),menuAriaLabel:`More options for ${i.label}`,menuItems:[{id:"rename",label:"Rename",icon:e.jsx(re,{className:"h-4 w-4",strokeWidth:1.5})},{id:"duplicate",label:"Duplicate",icon:e.jsx(se,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"delete",label:"Delete",icon:e.jsx(oe,{className:"h-4 w-4",strokeWidth:1.5})}],children:i.label},i.id))})}},W=["Overview","Details","Tickets","Accounts","Interactions","Directory","Tasks","Scheduled Callbacks","History"];function be(){const[a,t]=c.useState(W[0]);return e.jsxs("div",{className:"resize-x overflow-auto rounded-lyra-md border border-dashed border-lyra-border-soft p-4",style:{width:1200,maxWidth:"100%"},children:[e.jsx(o,{overflowMenu:!0,"aria-label":"Agent record tabs",children:W.map(r=>e.jsx(n,{active:a===r,onClick:()=>t(r),children:r},r))}),e.jsx(b,{active:!0,children:e.jsxs("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:["Content for “",a,"”"]})})]})}const y={name:"Overflow Menu (Responsive)",render:()=>e.jsx(be,{})};function me(){var s;const[a,t]=c.useState([{id:"overview",label:"Overview"},{id:"details",label:"Details"},{id:"tickets",label:"Tickets"},{id:"accounts",label:"Accounts"},{id:"history",label:"History"}]),[r,i]=c.useState("overview"),S=l=>{t(d=>{const w=new Map(d.map(m=>[m.id,m]));return l.map(m=>w.get(m)).filter(Boolean)})};return e.jsxs("div",{children:[e.jsx(o,{overflowMenu:!0,reorderable:!0,onReorder:S,"aria-label":"Reorderable tabs",children:a.map(l=>e.jsx(n,{active:r===l.id,onClick:()=>i(l.id),children:l.label},l.id))}),e.jsx(b,{active:!0,children:e.jsxs("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:["Drag any tab by its body and drop it on another to reorder — content for “",(s=a.find(l=>l.id===r))==null?void 0:s.label,"”"]})})]})}const j={name:"Reorderable (Drag and Drop)",render:()=>e.jsx(me,{})};var g,C,A;v.parameters={...v.parameters,docs:{...(g=v.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState("tab1");
    return <div>
        <TabList overflowMenu>
          <Tab active={active === "tab1"} onClick={() => setActive("tab1")}>
            Tab Section
          </Tab>
          <Tab active={active === "tab2"} onClick={() => setActive("tab2")}>
            Tab Section
          </Tab>
          <Tab active={active === "tab3"} onClick={() => setActive("tab3")}>
            Tab Section
          </Tab>
        </TabList>
        <TabPanel active={active === "tab1"}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">
            Content for tab 1
          </div>
        </TabPanel>
        <TabPanel active={active === "tab2"}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">
            Content for tab 2
          </div>
        </TabPanel>
        <TabPanel active={active === "tab3"}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">
            Content for tab 3
          </div>
        </TabPanel>
      </div>;
  }
}`,...(A=(C=v.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var M,N,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Full Width",
  render: () => {
    const [active, setActive] = useState("tab1");
    return <TabList fullWidth overflowMenu>
        <Tab active={active === "tab1"} onClick={() => setActive("tab1")}>
          Tab Section
        </Tab>
        <Tab active={active === "tab2"} onClick={() => setActive("tab2")}>
          Tab Section
        </Tab>
        <Tab active={active === "tab3"} onClick={() => setActive("tab3")}>
          Tab Section
        </Tab>
      </TabList>;
  }
}`,...(D=(N=u.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var L,R,I;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "With Icons",
  render: () => {
    const [active, setActive] = useState("tab1");
    return <TabList overflowMenu>
        <Tab active={active === "tab1"} onClick={() => setActive("tab1")} icon={<LayoutGrid className="h-4 w-4" strokeWidth={1.5} />}>
          Tab Section
        </Tab>
        <Tab active={active === "tab2"} onClick={() => setActive("tab2")} icon={<Settings className="h-4 w-4" strokeWidth={1.5} />}>
          Tab Section
        </Tab>
        <Tab active={active === "tab3"} onClick={() => setActive("tab3")} icon={<FileText className="h-4 w-4" strokeWidth={1.5} />}>
          Tab Section
        </Tab>
      </TabList>;
  }
}`,...(I=(R=h.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var O,F,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "With Icons / Full Width",
  render: () => {
    const [active, setActive] = useState("tab1");
    return <TabList fullWidth overflowMenu>
        <Tab active={active === "tab1"} onClick={() => setActive("tab1")} icon={<LayoutGrid className="h-4 w-4" strokeWidth={1.5} />}>
          Tab Section
        </Tab>
        <Tab active={active === "tab2"} onClick={() => setActive("tab2")} icon={<Settings className="h-4 w-4" strokeWidth={1.5} />}>
          Tab Section
        </Tab>
        <Tab active={active === "tab3"} onClick={() => setActive("tab3")} icon={<FileText className="h-4 w-4" strokeWidth={1.5} />}>
          Tab Section
        </Tab>
      </TabList>;
  }
}`,...(V=(F=p.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var P,B,E;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Tab States",
  render: () => <div className="space-y-6">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Default
        </span>
        <TabList overflowMenu aria-label="Default state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Hover (hover over to see)
        </span>
        <TabList overflowMenu aria-label="Hover state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Active
        </span>
        <TabList overflowMenu aria-label="Active state tabs">
          <Tab active>Tab Section</Tab>
        </TabList>
      </div>
    </div>
}`,...(E=(B=T.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var H,_,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Removable",
  render: () => <RemovableDemo />
}`,...(G=(_=f.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var $,K,z;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "With Right Icon (Menu)",
  render: () => {
    const [active, setActive] = useState("1");
    const tabs = [{
      id: "1",
      label: "1. Inbound Voice"
    }, {
      id: "2",
      label: "2. Blended Voice"
    }, {
      id: "3",
      label: "3. Outbound Digital"
    }];
    return <TabList overflowMenu aria-label="Tabs with menu">
        {tabs.map(tab => <Tab key={tab.id} active={active === tab.id} onClick={() => setActive(tab.id)} rightIcon={<MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} />}>
            {tab.label}
          </Tab>)}
      </TabList>;
  }
}`,...(z=(K=x.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var q,J,Q;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "With Kebab Menu (functional dropdown)",
  render: () => {
    const [active, setActive] = useState("1");
    const tabs = [{
      id: "1",
      label: "1. Inbound Voice"
    }, {
      id: "2",
      label: "2. Blended Voice"
    }, {
      id: "3",
      label: "3. Outbound Digital"
    }];
    return <TabList overflowMenu aria-label="Tabs with a real kebab menu">
        {tabs.map(tab => <Tab key={tab.id} active={active === tab.id} onClick={() => setActive(tab.id)} menuAriaLabel={\`More options for \${tab.label}\`} menuItems={[{
        id: "rename",
        label: "Rename",
        icon: <Pencil className="h-4 w-4" strokeWidth={1.5} />
      }, {
        id: "duplicate",
        label: "Duplicate",
        icon: <Copy className="h-4 w-4" strokeWidth={1.5} />
      }, "separator", {
        id: "delete",
        label: "Delete",
        icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />
      }]}>
            {tab.label}
          </Tab>)}
      </TabList>;
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Overflow Menu (Responsive)",
  render: () => <OverflowMenuDemo />
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Reorderable (Drag and Drop)",
  render: () => <ReorderableDemo />
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Je=["Default","FullWidth","WithIcons","WithIconsFullWidth","States","Removable","WithRightIcon","WithMenuItems","OverflowMenu","Reorderable"];export{v as Default,u as FullWidth,y as OverflowMenu,f as Removable,j as Reorderable,T as States,h as WithIcons,p as WithIconsFullWidth,k as WithMenuItems,x as WithRightIcon,Je as __namedExportsOrder,qe as default};
