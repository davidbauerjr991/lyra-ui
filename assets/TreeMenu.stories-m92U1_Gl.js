import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-DhMLlvMY.js";import{T as f}from"./tree-menu-BQrQoyaz.js";import{d as b,n as S,w as k}from"./TreeMenu.shared-DgRhpkWU.js";import{F as I}from"./file-text-DK8c8V5C.js";import{c as l}from"./createLucideIcon-aII_sYFw.js";import{L as M}from"./layout-grid-Be0M4-D4.js";import{S as C}from"./sliders-horizontal-DYIYVQYC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./monitor-DvVmkaSK.js";import"./settings-B3RqFsd1.js";import"./scissors-9SMedI4E.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=l("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=l("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=l("Puzzle",[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=l("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),K={title:"Custom Primitives/TreeMenu",component:f,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},decorators:[n=>t.jsx("div",{className:"w-[256px] bg-lyra-bg-surface-shell rounded-lyra-lg p-2",children:t.jsx(n,{})})]},P=n=>{const e="h-4 w-4";switch(n){case"General":return t.jsx(C,{className:e,strokeWidth:1.5});case"Permissions":return t.jsx(O,{className:e,strokeWidth:1.5});case"Integrations":return t.jsx(j,{className:e,strokeWidth:1.5});case"Desktop Library":return t.jsx(M,{className:e,strokeWidth:1.5});case"Templates":return t.jsx(L,{className:e,strokeWidth:1.5});case"Components":return t.jsx(T,{className:e,strokeWidth:1.5});default:return t.jsx(I,{className:e,strokeWidth:1.5})}};function y(n){return n.map(e=>({...e,icon:e.icon??P(e.label),children:e.children?y(e.children):void 0}))}function W(n,e,s){const o=(a,i)=>a.map(r=>r.children?{...r,children:o(r.children,i+1)}:i>=e||r.label===s?r:{...r,children:o([{label:`${r.label} 1`},{label:`${r.label} 2`}],i+1)});return n.map(a=>e<=1?{...a,children:void 0}:a.children?{...a,children:o(a.children,2)}:a)}function N(n,e,s){return n.map(o=>({...o,icon:e?o.icon:void 0,children:o.children&&s?y(o.children):o.children}))}function z({menu:n="with-icons",levels:e=2,mainIcons:s=!0,interiorIcons:o=!1,startState:a="closed",exactSelection:i=!1,chevronPosition:r="right"}){const[w,v]=p.useState(n==="with-icons"?"Desktop Library":"Checkbox"),h=n==="with-icons"?b:S,x=p.useMemo(()=>{const d=W(h,e,n==="with-icons"?"Desktop Library":"Checkbox");return n==="with-icons"?N(d,s,o):d},[h,n,e,s,o]);return t.jsx(f,{items:k(x,w,v,a==="expanded"),exactSelection:i,chevronPosition:r})}const c={args:{menu:"with-icons",levels:2,mainIcons:!0,interiorIcons:!1,startState:"closed",exactSelection:!1,chevronPosition:"right"},parameters:{controls:{include:["menu","levels","Levels","mainIcons","interiorIcons","Main icons","Interior icons","startState","exactSelection","chevronPosition","Menu","Start state","Exact selection","Chevron position"],sort:"none"}},argTypes:{startState:{name:"Start state",control:"radio",options:["closed","expanded"],description:"Whether every group is closed or open on first render (`defaultOpen`). Groups can still be opened and closed afterwards.",table:{category:"Behavior"}},exactSelection:{name:"Exact selection",control:"boolean",description:"Off: a group looks active when one of its children is. On: only the row you clicked looks selected, at any depth (`exactSelection`).",table:{category:"Behavior"}},menu:{name:"Menu",control:"radio",options:["with-icons","no-icons"],description:"App navigation with a leading icon on each row, or a plain text menu.",table:{category:"Content"}},levels:{name:"Levels",control:"select",options:[1,2,3,4],description:"How many levels deep the menu goes. 1 is top-level rows only; each level after that nests rows one step further (e.g. Templates 1 under Templates). Open the groups to see them.",table:{category:"Content"}},mainIcons:{name:"Main icons",control:"boolean",description:"Shows the leading icon on each top-level row (`icon`).",if:{arg:"menu",eq:"with-icons"},table:{category:"Content"}},interiorIcons:{name:"Interior icons",control:"boolean",description:"Shows a smaller icon on each nested row too (`icon` on a child). Open a group to see them.",if:{arg:"menu",eq:"with-icons"},table:{category:"Content"}},chevronPosition:{name:"Chevron position",control:"radio",options:["right","left"],description:"Which end of an expandable row the chevron sits on. Left puts it just after the icon, before the label — or first when the row has no icon (`chevronPosition`).",table:{category:"Appearance"}}},render:n=>t.jsx(z,{...n},JSON.stringify(n))};var m,u,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    menu: "with-icons",
    levels: 2,
    mainIcons: true,
    interiorIcons: false,
    startState: "closed",
    exactSelection: false,
    chevronPosition: "right"
  },
  parameters: {
    controls: {
      include: ["menu", "levels", "Levels", "mainIcons", "interiorIcons", "Main icons", "Interior icons", "startState", "exactSelection", "chevronPosition", "Menu", "Start state", "Exact selection", "Chevron position"],
      sort: "none"
    }
  },
  argTypes: {
    startState: {
      name: "Start state",
      control: "radio",
      options: ["closed", "expanded"],
      description: "Whether every group is closed or open on first render (\`defaultOpen\`). Groups can still be opened and closed afterwards.",
      table: {
        category: "Behavior"
      }
    },
    exactSelection: {
      name: "Exact selection",
      control: "boolean",
      description: "Off: a group looks active when one of its children is. On: only the row you clicked looks selected, at any depth (\`exactSelection\`).",
      table: {
        category: "Behavior"
      }
    },
    menu: {
      name: "Menu",
      control: "radio",
      options: ["with-icons", "no-icons"],
      description: "App navigation with a leading icon on each row, or a plain text menu.",
      table: {
        category: "Content"
      }
    },
    levels: {
      name: "Levels",
      control: "select",
      options: [1, 2, 3, 4],
      description: "How many levels deep the menu goes. 1 is top-level rows only; each level after that nests rows one step further (e.g. Templates 1 under Templates). Open the groups to see them.",
      table: {
        category: "Content"
      }
    },
    mainIcons: {
      name: "Main icons",
      control: "boolean",
      description: "Shows the leading icon on each top-level row (\`icon\`).",
      if: {
        arg: "menu",
        eq: "with-icons"
      },
      table: {
        category: "Content"
      }
    },
    interiorIcons: {
      name: "Interior icons",
      control: "boolean",
      description: "Shows a smaller icon on each nested row too (\`icon\` on a child). Open a group to see them.",
      if: {
        arg: "menu",
        eq: "with-icons"
      },
      table: {
        category: "Content"
      }
    },
    chevronPosition: {
      name: "Chevron position",
      control: "radio",
      options: ["right", "left"],
      description: "Which end of an expandable row the chevron sits on. Left puts it just after the icon, before the label — or first when the row has no icon (\`chevronPosition\`).",
      table: {
        category: "Appearance"
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes — each group's open
  // state only reads \`defaultOpen\` on first mount.
  <TreeMenuDemo key={JSON.stringify(args)} {...args} />
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const Q=["Default"];export{c as Default,Q as __namedExportsOrder,K as default};
