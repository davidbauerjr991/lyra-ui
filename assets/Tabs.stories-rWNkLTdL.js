import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CXOcBcs0.js";import{T as s,a as n,b as f}from"./tabs-DIs1Zp2P.js";import{L as J}from"./layout-grid-DIlLALBe.js";import{S as Q}from"./settings-Ddbozet5.js";import{F as U}from"./file-text-D-AW36xm.js";import{P as ee}from"./pencil-DdhzNlrF.js";import{C as ae}from"./copy-BRsdvqrt.js";import{T as te}from"./trash-2-yAnBWR5t.js";import{E as ne}from"./ellipsis-vertical-CZvSBcNM.js";import{L as ie}from"./lock-DfVEDs20.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./kebab-menu-button-78LMphvU.js";import"./menu-radix-D077YTVY.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./index-DUC4V_Df.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";const Pe={title:"Custom Primitives/Tabs",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={render:()=>{const[a,t]=c.useState("tab1");return e.jsxs("div",{children:[e.jsxs(s,{overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),children:"Tab Section"})]}),e.jsx(f,{active:a==="tab1",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 1"})}),e.jsx(f,{active:a==="tab2",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 2"})}),e.jsx(f,{active:a==="tab3",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 3"})})]})}},d={name:"Full Width",render:()=>{const[a,t]=c.useState("tab1");return e.jsxs(s,{fullWidth:!0,overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),children:"Tab Section"})]})}},b={name:"With Icons",render:()=>{const[a,t]=c.useState("tab1");return e.jsxs(s,{overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),icon:e.jsx(J,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),icon:e.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),icon:e.jsx(U,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"})]})}},m={name:"With Icons / Full Width",render:()=>{const[a,t]=c.useState("tab1");return e.jsxs(s,{fullWidth:!0,overflowMenu:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),icon:e.jsx(J,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),icon:e.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),icon:e.jsx(U,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"})]})}},v={name:"Tab States",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),e.jsx(s,{overflowMenu:!0,"aria-label":"Default state tabs",children:e.jsx(n,{children:"Tab Section"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover over to see)"}),e.jsx(s,{overflowMenu:!0,"aria-label":"Hover state tabs",children:e.jsx(n,{children:"Tab Section"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Active"}),e.jsx(s,{overflowMenu:!0,"aria-label":"Active state tabs",children:e.jsx(n,{active:!0,children:"Tab Section"})})]})]})};function se(){const[a,t]=c.useState([{id:"1",label:"1. Inbound Voice",locked:!1},{id:"2",label:"2. Blended Voice",locked:!0},{id:"3",label:"3. Outbound Digital",locked:!1}]),[r,i]=c.useState("2"),X=o=>{t(Y=>{const x=Y.filter(Z=>Z.id!==o);return r===o&&x.length>0&&i(x[0].id),x})};return e.jsx(s,{overflowMenu:!0,"aria-label":"Removable tabs",children:a.map(o=>e.jsx(n,{active:r===o.id,onClick:()=>i(o.id),icon:o.locked?e.jsx(ie,{className:"h-3.5 w-3.5",strokeWidth:1.5}):void 0,onRemove:()=>X(o.id),removeLabel:`Remove ${o.label}`,children:o.label},o.id))})}const u={name:"Removable",render:()=>e.jsx(se,{})},h={name:"With Right Icon (Menu)",render:()=>{const[a,t]=c.useState("1"),r=[{id:"1",label:"1. Inbound Voice"},{id:"2",label:"2. Blended Voice"},{id:"3",label:"3. Outbound Digital"}];return e.jsx(s,{overflowMenu:!0,"aria-label":"Tabs with menu",children:r.map(i=>e.jsx(n,{active:a===i.id,onClick:()=>t(i.id),rightIcon:e.jsx(ne,{className:"h-3.5 w-3.5",strokeWidth:1.5}),children:i.label},i.id))})}},p={name:"With Kebab Menu (functional dropdown)",render:()=>{const[a,t]=c.useState("1"),r=[{id:"1",label:"1. Inbound Voice"},{id:"2",label:"2. Blended Voice"},{id:"3",label:"3. Outbound Digital"}];return e.jsx(s,{overflowMenu:!0,"aria-label":"Tabs with a real kebab menu",children:r.map(i=>e.jsx(n,{active:a===i.id,onClick:()=>t(i.id),menuAriaLabel:`More options for ${i.label}`,menuItems:[{id:"rename",label:"Rename",icon:e.jsx(ee,{className:"h-4 w-4",strokeWidth:1.5})},{id:"duplicate",label:"Duplicate",icon:e.jsx(ae,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"delete",label:"Delete",icon:e.jsx(te,{className:"h-4 w-4",strokeWidth:1.5})}],children:i.label},i.id))})}},k=["Overview","Details","Tickets","Accounts","Interactions","Directory","Tasks","Scheduled Callbacks","History"];function re(){const[a,t]=c.useState(k[0]);return e.jsxs("div",{className:"resize-x overflow-auto rounded-lyra-md border border-dashed border-lyra-border-default p-4",style:{width:1200,maxWidth:"100%"},children:[e.jsx(s,{overflowMenu:!0,"aria-label":"Agent record tabs",children:k.map(r=>e.jsx(n,{active:a===r,onClick:()=>t(r),children:r},r))}),e.jsx(f,{active:!0,children:e.jsxs("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:["Content for “",a,"”"]})})]})}const T={name:"Overflow Menu (Responsive)",render:()=>e.jsx(re,{})};var S,j,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var w,W,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(W=d.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var g,A,N;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(N=(A=b.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var M,L,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var D,R,O;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(R=v.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var F,V,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Removable",
  render: () => <RemovableDemo />
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,B,H;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var _,G,$;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(G=p.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var K,z,q;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Overflow Menu (Responsive)",
  render: () => <OverflowMenuDemo />
}`,...(q=(z=T.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const Ee=["Default","FullWidth","WithIcons","WithIconsFullWidth","States","Removable","WithRightIcon","WithMenuItems","OverflowMenu"];export{l as Default,d as FullWidth,T as OverflowMenu,u as Removable,v as States,b as WithIcons,m as WithIconsFullWidth,p as WithMenuItems,h as WithRightIcon,Ee as __namedExportsOrder,Pe as default};
