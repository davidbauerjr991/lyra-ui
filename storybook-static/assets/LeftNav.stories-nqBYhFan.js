import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CXOcBcs0.js";import{L as r}from"./left-nav-LQ54lI92.js";import{C as w}from"./container-ChblM6WT.js";import{C}from"./content-area-sNeaqXFh.js";import{M as T}from"./monitor-DREitwVn.js";import{L as O}from"./layout-grid-DIlLALBe.js";import{S}from"./settings-Ddbozet5.js";import{c as I}from"./createLucideIcon-DEcfmm_F.js";import{F as m}from"./file-text-D-AW36xm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tree-menu-C14Xwehm.js";import"./utils-BLSKlp9E.js";import"./chevron-down-BRCsRsv-.js";import"./tooltip-3keU6E-A.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-right-DZKRY3zX.js";import"./index-1evVQkiP.js";import"./container-header-Bo-bv7NH.js";import"./x-N8aIqrq2.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=I("PencilRuler",[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),p=[{icon:e.jsx(T,{className:"h-4 w-4",strokeWidth:1.5}),label:"Monitor"},{icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5}),label:"Dashboard"},{icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),label:"Configure",expandable:!0,defaultOpen:!1,children:[{label:"General"},{label:"Security"},{label:"Integrations"}]},{icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5}),label:"Designer",expandable:!0,defaultOpen:!0,children:[{label:"Desktop Library",active:!0},{label:"Templates"},{label:"Components"}]},{icon:e.jsx(m,{className:"h-4 w-4",strokeWidth:1.5}),label:"Examples"},{icon:e.jsx(m,{className:"h-4 w-4",strokeWidth:1.5}),label:"Product Mockups"}],te={title:"UI/LeftNav",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>e.jsxs("div",{className:"flex h-[600px] bg-lyra-bg-surface-shell",children:[e.jsx(t,{}),e.jsx(C,{children:e.jsx(w,{className:"flex flex-1"})})]})]},o={render:()=>{const[t,s]=c.useState(!0);return e.jsx(r,{items:p,open:t,onToggle:()=>s(a=>!a)})}},n={name:"Collapsed",render:()=>{const[t,s]=c.useState(!1);return e.jsx(r,{items:p,open:t,onToggle:()=>s(a=>!a)})}},l={name:"No Toggle Button",render:()=>e.jsx(r,{items:p,open:!0,collapsible:!1})},i={name:"Custom Items",render:()=>{const[t,s]=c.useState(!0),a=[{icon:e.jsx(O,{className:"h-4 w-4",strokeWidth:1.5}),label:"Overview",active:!0},{icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),label:"Settings",expandable:!0,defaultOpen:!0,children:[{label:"Profile"},{label:"Notifications",active:!0},{label:"Privacy"}]},{icon:e.jsx(m,{className:"h-4 w-4",strokeWidth:1.5}),label:"Reports"}];return e.jsx(r,{items:a,open:t,onToggle:()=>s(y=>!y)})}};var u,d,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <LeftNav items={sampleItems} open={open} onToggle={() => setOpen(v => !v)} />;
  }
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,b,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Collapsed",
  render: () => {
    const [open, setOpen] = useState(false);
    return <LeftNav items={sampleItems} open={open} onToggle={() => setOpen(v => !v)} />;
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,N,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "No Toggle Button",
  render: () => <LeftNav items={sampleItems} open={true} collapsible={false} />
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var k,j,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Custom Items",
  render: () => {
    const [open, setOpen] = useState(true);
    const items: NavItem[] = [{
      icon: <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />,
      label: "Overview",
      active: true
    }, {
      icon: <Settings className="h-4 w-4" strokeWidth={1.5} />,
      label: "Settings",
      expandable: true,
      defaultOpen: true,
      children: [{
        label: "Profile"
      }, {
        label: "Notifications",
        active: true
      }, {
        label: "Privacy"
      }]
    }, {
      icon: <FileText className="h-4 w-4" strokeWidth={1.5} />,
      label: "Reports"
    }];
    return <LeftNav items={items} open={open} onToggle={() => setOpen(v => !v)} />;
  }
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const se=["Default","Collapsed","NoToggle","CustomItems"];export{n as Collapsed,i as CustomItems,o as Default,l as NoToggle,se as __namedExportsOrder,te as default};
