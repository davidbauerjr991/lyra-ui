import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./button-C9HuGDNI.js";import{E as a}from"./ellipsis-vertical-CZvSBcNM.js";import{c as K}from"./createLucideIcon-DEcfmm_F.js";import{C as x}from"./chevron-down-BRCsRsv-.js";import{T as Q}from"./trash-2-yAnBWR5t.js";import{R as U}from"./refresh-cw-BqNuqggj.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-Cy9hcxi2.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./badge-go1ZjKcF.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=K("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),ps={title:"Custom Primitives/Button",component:e,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["default","destructive","outline","ghost","icon"]},size:{control:"select",options:["sm","default","md","lg","xl","icon-sm","icon","icon-md","icon-lg","icon-xl","icon-2xl"]},disabled:{control:"boolean"}}},h={startIcon:{control:"boolean",name:"Include start icon"},endIcon:{control:"boolean",name:"Include end icon"}};function u({startIcon:t,endIcon:q,children:F,...J}){return s.jsxs(e,{...J,children:[t&&s.jsx(p,{className:"h-4 w-4",strokeWidth:1.5}),F,q&&s.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})]})}const n={args:{children:"Button",variant:"default",startIcon:!1,endIcon:!1},argTypes:h,render:t=>s.jsx(u,{...t})},r={args:{children:"Button",variant:"destructive",startIcon:!1,endIcon:!1},argTypes:h,render:t=>s.jsx(u,{...t})},o={args:{children:"Button",variant:"outline"}},i={args:{children:"Button",variant:"ghost",startIcon:!1,endIcon:!1},argTypes:h,render:t=>s.jsx(u,{...t})},l={args:{variant:"icon",size:"icon",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}},c={args:{children:"Button",disabled:!0}},d={render:()=>s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Text Buttons"}),s.jsxs("div",{className:"flex items-end gap-4",children:[s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{size:"sm",children:"Button"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"24px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{size:"default",children:"Button"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"32px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{size:"lg",children:"Button"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"36px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{size:"xl",children:"Button"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"40px"})]})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Icon Buttons"}),s.jsxs("div",{className:"flex items-end gap-4",children:[s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon-sm",title:"More options",children:s.jsx(a,{className:"h-3.5 w-3.5",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"24px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"32px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon-lg",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"36px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon-xl",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"40px"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon-2xl",title:"More options",children:s.jsx(a,{className:"h-5 w-5",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"44px (AppHeader standard)"})]})]})]})]})},m={name:"Icon Button — With Badge",render:()=>s.jsxs("div",{className:"flex items-end gap-4",children:[s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon-2xl",title:"Notifications",badge:4,children:s.jsx(a,{className:"h-5 w-5",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"badge=4"})]}),s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx(e,{variant:"icon",size:"icon-2xl",title:"Notifications",badge:128,children:s.jsx(a,{className:"h-5 w-5",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"badge=128 → 99+"})]})]})},y={name:"Variant Matrix",render:()=>s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Text Buttons"}),s.jsxs("div",{className:"grid grid-cols-5 gap-x-6 gap-y-3 items-center",children:[s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"State"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Outline"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Primary"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Destructive"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Ghost"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Default"}),s.jsx(e,{variant:"outline",children:"Button"}),s.jsx(e,{variant:"default",children:"Button"}),s.jsx(e,{variant:"destructive",children:"Button"}),s.jsx(e,{variant:"ghost",children:"Button"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled"}),s.jsx(e,{variant:"outline",disabled:!0,children:"Button"}),s.jsx(e,{variant:"default",disabled:!0,children:"Button"}),s.jsx(e,{variant:"destructive",disabled:!0,children:"Button"}),s.jsx(e,{variant:"ghost",disabled:!0,children:"Button"})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Icon Buttons"}),s.jsxs("div",{className:"grid grid-cols-5 gap-x-6 gap-y-3 items-center",children:[s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"State"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Outline"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Primary"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Destructive"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Ghost"}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Default"}),s.jsx(e,{variant:"outline",size:"icon",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx(e,{variant:"default",size:"icon",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx(e,{variant:"destructive",size:"icon",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx(e,{variant:"icon",size:"icon",title:"More options",children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled"}),s.jsx(e,{variant:"outline",size:"icon",title:"More options",disabled:!0,children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx(e,{variant:"default",size:"icon",title:"More options",disabled:!0,children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx(e,{variant:"destructive",size:"icon",title:"More options",disabled:!0,children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})}),s.jsx(e,{variant:"icon",size:"icon",title:"More options",disabled:!0,children:s.jsx(a,{className:"h-4 w-4",strokeWidth:1.5})})]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"With Icons"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs(e,{variant:"outline",children:[s.jsx(p,{className:"h-4 w-4",strokeWidth:1.5}),"Button",s.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})]}),s.jsxs(e,{variant:"default",children:[s.jsx(p,{className:"h-4 w-4",strokeWidth:1.5}),"Button",s.jsx(x,{className:"h-4 w-4",strokeWidth:1.5})]}),s.jsxs(e,{variant:"destructive",children:[s.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5}),"Delete"]}),s.jsxs(e,{variant:"ghost",children:[s.jsx(U,{className:"h-4 w-4",strokeWidth:1.5}),"Refresh"]})]})]})]})};var g,v,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    startIcon: false,
    endIcon: false
  },
  argTypes: iconControlArgTypes,
  render: args => <ButtonWithOptionalIcons {...args} />
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var N,B,j;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "destructive",
    startIcon: false,
    endIcon: false
  },
  argTypes: iconControlArgTypes,
  render: args => <ButtonWithOptionalIcons {...args} />
}`,...(j=(B=r.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var b,k,W;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "outline"
  }
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var w,M,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "ghost",
    startIcon: false,
    endIcon: false
  },
  argTypes: iconControlArgTypes,
  render: args => <ButtonWithOptionalIcons {...args} />
}`,...(z=(M=i.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var I,D,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "icon",
    size: "icon",
    title: "More options",
    children: <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var S,T,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Button",
    disabled: true
  }
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,O,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Text Buttons</h3>
        <div className="flex items-end gap-4">
          <div className="flex flex-col items-center gap-1">
            <Button size="sm">Button</Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">24px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button size="default">Button</Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">32px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button size="lg">Button</Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">36px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button size="xl">Button</Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">40px</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Icon Buttons</h3>
        <div className="flex items-end gap-4">
          <div className="flex flex-col items-center gap-1">
            <Button variant="icon" size="icon-sm" title="More options">
              <MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">24px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button variant="icon" size="icon" title="More options">
              <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
            </Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">32px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button variant="icon" size="icon-lg" title="More options">
              <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
            </Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">36px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button variant="icon" size="icon-xl" title="More options">
              <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
            </Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">40px</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button variant="icon" size="icon-2xl" title="More options">
              <MoreVertical className="h-5 w-5" strokeWidth={1.5} />
            </Button>
            <span className="lyra-body-sm text-lyra-fg-secondary">44px (AppHeader standard)</span>
          </div>
        </div>
      </div>
    </div>
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var G,R,E;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Icon Button — With Badge",
  render: () => <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Button variant="icon" size="icon-2xl" title="Notifications" badge={4}>
          <MoreVertical className="h-5 w-5" strokeWidth={1.5} />
        </Button>
        <span className="lyra-body-sm text-lyra-fg-secondary">badge=4</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button variant="icon" size="icon-2xl" title="Notifications" badge={128}>
          <MoreVertical className="h-5 w-5" strokeWidth={1.5} />
        </Button>
        <span className="lyra-body-sm text-lyra-fg-secondary">badge=128 → 99+</span>
      </div>
    </div>
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var H,L,_;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Variant Matrix",
  render: () => <div className="space-y-8">
      {/* Text buttons */}
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Text Buttons</h3>
        <div className="grid grid-cols-5 gap-x-6 gap-y-3 items-center">
          {/* Header row */}
          <span className="lyra-body-sm text-lyra-fg-secondary">State</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Outline</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Primary</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Destructive</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Ghost</span>

          {/* Default */}
          <span className="lyra-body-sm text-lyra-fg-secondary">Default</span>
          <Button variant="outline">Button</Button>
          <Button variant="default">Button</Button>
          <Button variant="destructive">Button</Button>
          <Button variant="ghost">Button</Button>

          {/* Disabled */}
          <span className="lyra-body-sm text-lyra-fg-secondary">Disabled</span>
          <Button variant="outline" disabled>Button</Button>
          <Button variant="default" disabled>Button</Button>
          <Button variant="destructive" disabled>Button</Button>
          <Button variant="ghost" disabled>Button</Button>
        </div>
      </div>

      {/* Icon buttons */}
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Icon Buttons</h3>
        <div className="grid grid-cols-5 gap-x-6 gap-y-3 items-center">
          <span className="lyra-body-sm text-lyra-fg-secondary">State</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Outline</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Primary</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Destructive</span>
          <span className="lyra-body-sm text-lyra-fg-secondary">Ghost</span>

          <span className="lyra-body-sm text-lyra-fg-secondary">Default</span>
          <Button variant="outline" size="icon" title="More options">
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="default" size="icon" title="More options">
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="destructive" size="icon" title="More options">
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="icon" size="icon" title="More options">
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>

          <span className="lyra-body-sm text-lyra-fg-secondary">Disabled</span>
          <Button variant="outline" size="icon" title="More options" disabled>
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="default" size="icon" title="More options" disabled>
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="destructive" size="icon" title="More options" disabled>
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="icon" size="icon" title="More options" disabled>
            <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      {/* Base: with leading icon + trailing chevron */}
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">With Icons</h3>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            Button
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="default">
            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            Button
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </Button>
          <Button variant="destructive">
            <Trash2 className="h-4 w-4" strokeWidth={1.5} />
            Delete
          </Button>
          <Button variant="ghost">
            <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
            Refresh
          </Button>
        </div>
      </div>
    </div>
}`,...(_=(L=y.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const hs=["Primary","Destructive","Outline","Ghost","IconButton","Disabled","Sizes","IconButtonWithBadge","AllVariants"];export{y as AllVariants,r as Destructive,c as Disabled,i as Ghost,l as IconButton,m as IconButtonWithBadge,o as Outline,n as Primary,d as Sizes,hs as __namedExportsOrder,ps as default};
