import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-CXOcBcs0.js";import{T as s,a as n,b as x}from"./tabs-Dt1hjaoE.js";import{L as O}from"./layout-grid-DIlLALBe.js";import{S as B}from"./settings-Ddbozet5.js";import{F as G}from"./file-text-D-AW36xm.js";import{E as q}from"./ellipsis-vertical-CZvSBcNM.js";import{L as z}from"./lock-DfVEDs20.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DEcfmm_F.js";const se={title:"Atoms/Tabs",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},l={render:()=>{const[a,t]=r.useState("tab1");return e.jsxs("div",{children:[e.jsxs(s,{children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),children:"Tab Section"})]}),e.jsx(x,{active:a==="tab1",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 1"})}),e.jsx(x,{active:a==="tab2",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 2"})}),e.jsx(x,{active:a==="tab3",children:e.jsx("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:"Content for tab 3"})})]})}},b={name:"Full Width",render:()=>{const[a,t]=r.useState("tab1");return e.jsxs(s,{fullWidth:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),children:"Tab Section"})]})}},d={name:"With Icons",render:()=>{const[a,t]=r.useState("tab1");return e.jsxs(s,{children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),icon:e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),icon:e.jsx(G,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"})]})}},v={name:"With Icons / Full Width",render:()=>{const[a,t]=r.useState("tab1");return e.jsxs(s,{fullWidth:!0,children:[e.jsx(n,{active:a==="tab1",onClick:()=>t("tab1"),icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab2",onClick:()=>t("tab2"),icon:e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"}),e.jsx(n,{active:a==="tab3",onClick:()=>t("tab3"),icon:e.jsx(G,{className:"h-4 w-4",strokeWidth:1.5}),children:"Tab Section"})]})}},m={name:"Tab States",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Default"}),e.jsx(s,{"aria-label":"Default state tabs",children:e.jsx(n,{children:"Tab Section"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Hover (hover over to see)"}),e.jsx(s,{"aria-label":"Hover state tabs",children:e.jsx(n,{children:"Tab Section"})})]}),e.jsxs("div",{children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary mb-2 block",children:"Active"}),e.jsx(s,{"aria-label":"Active state tabs",children:e.jsx(n,{active:!0,children:"Tab Section"})})]})]})};function J(){const[a,t]=r.useState([{id:"1",label:"1. Inbound Voice",locked:!1},{id:"2",label:"2. Blended Voice",locked:!0},{id:"3",label:"3. Outbound Digital",locked:!1}]),[o,c]=r.useState("2"),M=i=>{t(_=>{const u=_.filter($=>$.id!==i);return o===i&&u.length>0&&c(u[0].id),u})};return e.jsx(s,{"aria-label":"Removable tabs",children:a.map(i=>e.jsx(n,{active:o===i.id,onClick:()=>c(i.id),icon:i.locked?e.jsx(z,{className:"h-3.5 w-3.5",strokeWidth:1.5}):void 0,onRemove:()=>M(i.id),removeLabel:`Remove ${i.label}`,children:i.label},i.id))})}const h={name:"Removable",render:()=>e.jsx(J,{})},T={name:"With Right Icon (Menu)",render:()=>{const[a,t]=r.useState("1"),o=[{id:"1",label:"1. Inbound Voice"},{id:"2",label:"2. Blended Voice"},{id:"3",label:"3. Outbound Digital"}];return e.jsx(s,{"aria-label":"Tabs with menu",children:o.map(c=>e.jsx(n,{active:a===c.id,onClick:()=>t(c.id),rightIcon:e.jsx(q,{className:"h-3.5 w-3.5",strokeWidth:1.5}),children:c.label},c.id))})}};var p,S,k;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState("tab1");
    return <div>
        <TabList>
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
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var j,y,f;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Full Width",
  render: () => {
    const [active, setActive] = useState("tab1");
    return <TabList fullWidth>
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
}`,...(f=(y=b.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var W,g,C;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "With Icons",
  render: () => {
    const [active, setActive] = useState("tab1");
    return <TabList>
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
}`,...(C=(g=d.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var A,N,L;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "With Icons / Full Width",
  render: () => {
    const [active, setActive] = useState("tab1");
    return <TabList fullWidth>
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
}`,...(L=(N=v.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var w,I,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Tab States",
  render: () => <div className="space-y-6">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Default
        </span>
        <TabList aria-label="Default state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Hover (hover over to see)
        </span>
        <TabList aria-label="Hover state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Active
        </span>
        <TabList aria-label="Active state tabs">
          <Tab active>Tab Section</Tab>
        </TabList>
      </div>
    </div>
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var F,D,V;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Removable",
  render: () => <RemovableDemo />
}`,...(V=(D=h.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var P,E,H;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    return <TabList aria-label="Tabs with menu">
        {tabs.map(tab => <Tab key={tab.id} active={active === tab.id} onClick={() => setActive(tab.id)} rightIcon={<MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} />}>
            {tab.label}
          </Tab>)}
      </TabList>;
  }
}`,...(H=(E=T.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const ce=["Default","FullWidth","WithIcons","WithIconsFullWidth","States","Removable","WithRightIcon"];export{l as Default,b as FullWidth,h as Removable,m as States,d as WithIcons,v as WithIconsFullWidth,T as WithRightIcon,ce as __namedExportsOrder,se as default};
