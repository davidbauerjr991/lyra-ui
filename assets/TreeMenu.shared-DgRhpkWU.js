import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{M as i}from"./monitor-DvVmkaSK.js";import{c as s}from"./createLucideIcon-aII_sYFw.js";import{S as n}from"./settings-B3RqFsd1.js";import{S as h}from"./scissors-9SMedI4E.js";import{F as c}from"./file-text-DK8c8V5C.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),w=[{icon:t.jsx(i,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Monitor"},{icon:t.jsx(d,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Dashboard"},{icon:t.jsx(n,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Configure",children:[{label:"General"},{label:"Permissions"},{label:"Integrations"}]},{icon:t.jsx(h,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Designer",defaultOpen:!0,children:[{label:"Desktop Library",active:!0},{label:"Templates"},{label:"Components"}]},{icon:t.jsx(c,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Examples"},{icon:t.jsx(p,{className:"h-[18px] w-[18px]",strokeWidth:1.5}),label:"Product Mockups"}],g=[{label:"Getting Started"},{label:"Components",defaultOpen:!0,children:[{label:"Button"},{label:"Checkbox",active:!0},{label:"Input"}]},{label:"Patterns",children:[{label:"Forms"},{label:"Navigation"}]}];function x(r,a,l,o){return r.map(e=>e.children?{...e,defaultOpen:o,children:x(e.children,a,l,o)}:{...e,active:e.label===a,onClick:()=>l(e.label)})}export{w as d,g as n,x as w};
