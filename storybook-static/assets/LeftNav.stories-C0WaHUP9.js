import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-CXOcBcs0.js";import{T as D}from"./tree-menu-C14Xwehm.js";import{T as b}from"./tooltip-3keU6E-A.js";import{c as h}from"./utils-BLSKlp9E.js";import{C as z}from"./chevron-left-C6DiQdwt.js";import{C as _}from"./chevron-right-DZKRY3zX.js";import{C as A}from"./container-ChblM6WT.js";import{C as F}from"./content-area-sNeaqXFh.js";import{M as G}from"./monitor-DREitwVn.js";import{L as I}from"./layout-grid-DIlLALBe.js";import{S}from"./settings-Ddbozet5.js";import{c as B}from"./createLucideIcon-DEcfmm_F.js";import{F as u}from"./file-text-D-AW36xm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chevron-down-BRCsRsv-.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./index-1evVQkiP.js";import"./container-header-Bo-bv7NH.js";import"./x-N8aIqrq2.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=B("PencilRuler",[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);function U(r){return r.map(a=>({icon:a.icon,label:a.label,active:a.active,defaultOpen:a.defaultOpen,onClick:a.onClick,children:a.expandable?a.children:void 0}))}const o=n.forwardRef(({className:r,items:a,open:t=!0,onToggle:p,collapsible:W=!0,...M},P)=>{const R=n.useMemo(()=>U(a),[a]);return e.jsxs("aside",{ref:P,"aria-label":"Main navigation",className:h("relative z-10 flex flex-shrink-0 flex-col overflow-visible bg-lyra-bg-surface-shell transition-all duration-200",t?"w-[256px]":"w-[52px]",r),...M,children:[W&&e.jsx(b,{content:t?"Collapse sidebar":"Expand sidebar",placement:"right",asLabel:!0,children:e.jsx("button",{onClick:p,"aria-expanded":t,"aria-label":t?"Collapse sidebar":"Expand sidebar",className:"absolute -right-3 top-[25px] z-10 flex h-5 w-5 items-center justify-center rounded-full border border-lyra-border-default bg-lyra-bg-surface-base text-lyra-fg-secondary shadow-sm hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:t?e.jsx(z,{className:"h-3.5 w-3.5",strokeWidth:1.5,"aria-hidden":"true"}):e.jsx(_,{className:"h-3.5 w-3.5",strokeWidth:1.5,"aria-hidden":"true"})})}),t?e.jsx(D,{items:R,className:"flex-1 overflow-y-auto overflow-x-hidden px-2 py-3"}):e.jsx("nav",{"aria-label":"Main navigation",className:"flex flex-1 flex-col gap-0.5 items-center overflow-y-auto overflow-x-hidden px-2 py-3",children:a.map((s,E)=>{const f=s.active||s.children&&s.children.some(q=>q.active);return e.jsx(b,{content:s.label,placement:"right",asLabel:!0,children:e.jsx("button",{onClick:s.onClick,"aria-label":s.label,"aria-current":f?"page":void 0,className:h("flex h-8 w-8 items-center justify-center rounded-lyra-sm transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",f?"bg-lyra-bg-active-moderate text-lyra-fg-active-strong":"text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"),children:e.jsx("span",{"aria-hidden":"true",children:s.icon})})},E)})})]})});o.displayName="LeftNav";o.__docgenInfo={description:"",methods:[],displayName:"LeftNav",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:"Navigation items to render"},open:{required:!1,tsType:{name:"boolean"},description:"Whether the nav is expanded or collapsed",defaultValue:{value:"true",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the toggle button is clicked"},collapsible:{required:!1,tsType:{name:"boolean"},description:"Show/hide the collapse toggle button",defaultValue:{value:"true",computed:!1}}}};const m=[{icon:e.jsx(G,{className:"h-4 w-4",strokeWidth:1.5}),label:"Monitor"},{icon:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5}),label:"Dashboard"},{icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),label:"Configure",expandable:!0,defaultOpen:!1,children:[{label:"General"},{label:"Security"},{label:"Integrations"}]},{icon:e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5}),label:"Designer",expandable:!0,defaultOpen:!0,children:[{label:"Desktop Library",active:!0},{label:"Templates"},{label:"Components"}]},{icon:e.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),label:"Examples"},{icon:e.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),label:"Product Mockups"}],fe={title:"UI/LeftNav",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[r=>e.jsxs("div",{className:"flex h-[600px] bg-lyra-bg-surface-shell",children:[e.jsx(r,{}),e.jsx(F,{children:e.jsx(A,{className:"flex flex-1"})})]})]},l={render:()=>{const[r,a]=n.useState(!0);return e.jsx(o,{items:m,open:r,onToggle:()=>a(t=>!t)})}},i={name:"Collapsed",render:()=>{const[r,a]=n.useState(!1);return e.jsx(o,{items:m,open:r,onToggle:()=>a(t=>!t)})}},c={name:"No Toggle Button",render:()=>e.jsx(o,{items:m,open:!0,collapsible:!1})},d={name:"Custom Items",render:()=>{const[r,a]=n.useState(!0),t=[{icon:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5}),label:"Overview",active:!0},{icon:e.jsx(S,{className:"h-4 w-4",strokeWidth:1.5}),label:"Settings",expandable:!0,defaultOpen:!0,children:[{label:"Profile"},{label:"Notifications",active:!0},{label:"Privacy"}]},{icon:e.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),label:"Reports"}];return e.jsx(o,{items:t,open:r,onToggle:()=>a(p=>!p)})}};var g,v,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <LeftNav items={sampleItems} open={open} onToggle={() => setOpen(v => !v)} />;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,N,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Collapsed",
  render: () => {
    const [open, setOpen] = useState(false);
    return <LeftNav items={sampleItems} open={open} onToggle={() => setOpen(v => !v)} />;
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,k,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "No Toggle Button",
  render: () => <LeftNav items={sampleItems} open={true} collapsible={false} />
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var T,L,O;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const be=["Default","Collapsed","NoToggle","CustomItems"];export{i as Collapsed,d as CustomItems,l as Default,c as NoToggle,be as __namedExportsOrder,fe as default};
