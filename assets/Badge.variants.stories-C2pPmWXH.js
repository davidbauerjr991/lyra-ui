import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as s}from"./badge-DnlHYDBX.js";import{B as U}from"./button-DxuJ7r2Z.js";import{C as p,B as x,P as D,b as Z,S as M}from"./Badge.shared-CcH10gYD.js";import{B as J}from"./bell-16x-NcfM.js";import{C as R}from"./check-Dr3vGcdY.js";import{M as G}from"./minus-CVnigrff.js";import{I as X}from"./info-DsZieFkE.js";import{T as H}from"./triangle-alert-C66Fwj6V.js";import{X as q}from"./x-CzxgOx-T.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./createLucideIcon-aII_sYFw.js";const ue={title:"Custom Primitives/Badge/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},r={name:"Pill - All Variants",render:()=>e.jsx("div",{className:"flex gap-12",children:D.map(a=>e.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1 capitalize",children:a}),Z.map(l=>e.jsx(s,{shape:"pill",color:l,variant:a,children:l.charAt(0).toUpperCase()+l.slice(1)},l))]},a))})},i={name:"Pill - Status Colors",render:()=>e.jsx("div",{className:"flex gap-12",children:D.map(a=>e.jsxs("div",{className:"flex flex-col gap-2 items-start",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mb-1 capitalize",children:a}),M.map(l=>e.jsx(s,{shape:"pill",color:l,variant:a,children:l==="critical"?"Critical (error)":l.charAt(0).toUpperCase()+l.slice(1)},l))]},a))})},c={name:"Pill - With Icon",render:()=>e.jsx("div",{className:"flex flex-col gap-4 items-start",children:["left","right","both"].map(a=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary w-12",children:a}),e.jsx(s,{shape:"pill",color:"success",icon:e.jsx(R,{strokeWidth:2}),iconPosition:a,children:"Success"}),e.jsx(s,{shape:"pill",color:"info",icon:e.jsx(X,{strokeWidth:2}),iconPosition:a,children:"Info"}),e.jsx(s,{shape:"pill",color:"warning",icon:e.jsx(H,{strokeWidth:2}),iconPosition:a,children:"Warning"}),e.jsx(s,{shape:"pill",color:"critical",variant:"solid",icon:e.jsx(q,{strokeWidth:2}),iconPosition:a,children:"Error"})]},a))})},t={name:"Circle - All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Number badges"}),e.jsx("div",{className:"flex items-center gap-3 flex-wrap",children:p.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",variant:a,count:7}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary capitalize",children:a})]},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Dot badges"}),e.jsx("div",{className:"flex items-center gap-4 flex-wrap",children:p.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",variant:a,dot:!0,size:"md"}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary capitalize",children:a})]},a))})]})]})},n={name:"Circle - Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Number — sm / md / lg"}),e.jsx("div",{className:"flex items-end gap-4",children:x.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",size:a,count:12}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:a})]},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Dot — sm / md / lg"}),e.jsx("div",{className:"flex items-end gap-4",children:x.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",variant:"critical",dot:!0,size:a}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:a})]},a))})]})]})},d={name:"Circle - Count overflow (max cap)",render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",count:5}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"5"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",count:99}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"99"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",count:100}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"100 → 99+"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{shape:"circle",count:999,max:999}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:"custom max 999"})]})]})},F=[{size:"icon-sm",iconClass:"h-3.5 w-3.5",label:"Small (24px)"},{size:"icon",iconClass:"h-4 w-4",label:"Medium (32px)"},{size:"icon-lg",iconClass:"h-4 w-4",label:"Large (36px)"},{size:"icon-xl",iconClass:"h-4 w-4",label:"40px"},{size:"icon-2xl",iconClass:"h-5 w-5",label:"44px (AppHeader)"}],K=[{size:"sm",label:"Small (16px)"},{size:"md",label:"Medium (20px)"},{size:"lg",label:"Large (24px)"}],o={name:"Circle - Positioned on element",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"On icon buttons (24 / 32 / 36 / 40 / 44px)"}),e.jsx("div",{className:"flex items-end gap-8",children:F.map(({size:a,iconClass:l,label:L})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(U,{variant:"icon",size:a,title:"Notifications",badge:3,children:e.jsx(J,{className:l,strokeWidth:1.5})}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:L})]},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"On an avatar (status dot)"}),e.jsx("div",{className:"flex items-end gap-8",children:K.map(({size:a,label:l})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center",children:e.jsx("span",{className:"lyra-label text-white",children:"JD"})}),e.jsx(s,{shape:"circle",dot:!0,variant:"success",size:a,className:"absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"})]}),e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center",children:e.jsx("span",{className:"lyra-label text-white",children:"AB"})}),e.jsx(s,{shape:"circle",dot:!0,variant:"critical",size:a,className:"absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"})]})]}),e.jsx("span",{className:"lyra-body-xs text-lyra-fg-secondary",children:l})]},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"On an avatar (status icon — matches AgentProfile's StatusIcon)"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center",children:e.jsx("span",{className:"lyra-label text-white",children:"JD"})}),e.jsx(s,{shape:"circle",variant:"success",size:"sm",className:"absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base",children:e.jsx(R,{className:"h-2 w-2",strokeWidth:3,"aria-hidden":"true"})})]}),e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("div",{className:"w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center",children:e.jsx("span",{className:"lyra-label text-white",children:"AB"})}),e.jsx(s,{shape:"circle",variant:"critical",size:"sm",className:"absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base",children:e.jsx(G,{className:"h-2 w-2",strokeWidth:3,"aria-hidden":"true"})})]})]})]})]})},m={name:"Circle - Text / custom content",render:()=>e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx(s,{shape:"circle",variant:"success",children:"New"}),e.jsx(s,{shape:"circle",variant:"warning",children:"Beta"}),e.jsx(s,{shape:"circle",variant:"info",children:"Pro"}),e.jsx(s,{shape:"circle",variant:"critical",children:"!"}),e.jsx(s,{shape:"circle",variant:"neutral",size:"lg",children:"Draft"})]})};var f,v,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Pill - All Variants",
  render: () => <div className="flex gap-12">
      {PILL_VARIANTS.map(variant => <div key={variant} className="flex flex-col gap-2 items-start">
          <p className="lyra-body-sm text-lyra-fg-secondary mb-1 capitalize">{variant}</p>
          {COLORS.map(color => <Badge key={color} shape="pill" color={color} variant={variant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>)}
        </div>)}
    </div>
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,y,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Pill - Status Colors",
  render: () => <div className="flex gap-12">
      {PILL_VARIANTS.map(variant => <div key={variant} className="flex flex-col gap-2 items-start">
          <p className="lyra-body-sm text-lyra-fg-secondary mb-1 capitalize">{variant}</p>
          {STATUS_COLORS.map(color => <Badge key={color} shape="pill" color={color} variant={variant}>
              {color === "critical" ? "Critical (error)" : color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>)}
        </div>)}
    </div>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var N,u,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Pill - With Icon",
  render: () => <div className="flex flex-col gap-4 items-start">
      {(["left", "right", "both"] as const).map(pos => <div key={pos} className="flex items-center gap-3">
          <span className="lyra-body-sm text-lyra-fg-secondary w-12">{pos}</span>
          <Badge shape="pill" color="success" icon={<Check strokeWidth={2} />} iconPosition={pos}>Success</Badge>
          <Badge shape="pill" color="info" icon={<Info strokeWidth={2} />} iconPosition={pos}>Info</Badge>
          <Badge shape="pill" color="warning" icon={<AlertTriangle strokeWidth={2} />} iconPosition={pos}>Warning</Badge>
          <Badge shape="pill" color="critical" variant="solid" icon={<X strokeWidth={2} />} iconPosition={pos}>Error</Badge>
        </div>)}
    </div>
}`,...(j=(u=c.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var C,B,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Circle - All Variants",
  render: () => <div className="flex flex-col gap-6">
      {/* Number badges */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Number badges</p>
        <div className="flex items-center gap-3 flex-wrap">
          {CIRCLE_VARIANTS.map(v => <div key={v} className="flex flex-col items-center gap-1">
              <Badge shape="circle" variant={v} count={7} />
              <span className="lyra-body-xs text-lyra-fg-secondary capitalize">{v}</span>
            </div>)}
        </div>
      </div>

      {/* Dot badges */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Dot badges</p>
        <div className="flex items-center gap-4 flex-wrap">
          {CIRCLE_VARIANTS.map(v => <div key={v} className="flex flex-col items-center gap-1">
              <Badge shape="circle" variant={v} dot size="md" />
              <span className="lyra-body-xs text-lyra-fg-secondary capitalize">{v}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(w=(B=t.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var S,A,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Circle - Sizes",
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Number — sm / md / lg</p>
        <div className="flex items-end gap-4">
          {BADGE_SIZES.map(s => <div key={s} className="flex flex-col items-center gap-1">
              <Badge shape="circle" size={s} count={12} />
              <span className="lyra-body-xs text-lyra-fg-secondary">{s}</span>
            </div>)}
        </div>
      </div>
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Dot — sm / md / lg</p>
        <div className="flex items-end gap-4">
          {BADGE_SIZES.map(s => <div key={s} className="flex flex-col items-center gap-1">
              <Badge shape="circle" variant="critical" dot size={s} />
              <span className="lyra-body-xs text-lyra-fg-secondary">{s}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(z=(A=n.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var I,P,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Circle - Count overflow (max cap)",
  render: () => <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={5} />
        <span className="lyra-body-xs text-lyra-fg-secondary">5</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={99} />
        <span className="lyra-body-xs text-lyra-fg-secondary">99</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={100} />
        <span className="lyra-body-xs text-lyra-fg-secondary">100 → 99+</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={999} max={999} />
        <span className="lyra-body-xs text-lyra-fg-secondary">custom max 999</span>
      </div>
    </div>
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var O,T,_;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Circle - Positioned on element",
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">On icon buttons (24 / 32 / 36 / 40 / 44px)</p>
        <div className="flex items-end gap-8">
          {ICON_BUTTON_SIZES.map(({
          size,
          iconClass,
          label
        }) => <div key={size} className="flex flex-col items-center gap-2">
              <Button variant="icon" size={size} title="Notifications" badge={3}>
                <Bell className={iconClass} strokeWidth={1.5} />
              </Button>
              <span className="lyra-body-xs text-lyra-fg-secondary">{label}</span>
            </div>)}
        </div>
      </div>

      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">On an avatar (status dot)</p>
        <div className="flex items-end gap-8">
          {AVATAR_DOT_SIZES.map(({
          size,
          label
        }) => <div key={size} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                {/* Avatar available */}
                <div className="relative inline-flex">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
                    <span className="lyra-label text-white">JD</span>
                  </div>
                  <Badge shape="circle" dot variant="success" size={size} className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base" />
                </div>

                {/* Avatar unavailable */}
                <div className="relative inline-flex">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
                    <span className="lyra-label text-white">AB</span>
                  </div>
                  <Badge shape="circle" dot variant="critical" size={size} className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base" />
                </div>
              </div>
              <span className="lyra-body-xs text-lyra-fg-secondary">{label}</span>
            </div>)}
        </div>
      </div>

      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">On an avatar (status icon — matches AgentProfile's StatusIcon)</p>
        <div className="flex items-center gap-8">
          {/* Avatar — available (Check icon) */}
          <div className="relative inline-flex">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
              <span className="lyra-label text-white">JD</span>
            </div>
            <Badge shape="circle" variant="success" size="sm" className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base">
              <Check className="h-2 w-2" strokeWidth={3} aria-hidden="true" />
            </Badge>
          </div>

          {/* Avatar — unavailable (Minus icon) */}
          <div className="relative inline-flex">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
              <span className="lyra-label text-white">AB</span>
            </div>
            <Badge shape="circle" variant="critical" size="sm" className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base">
              <Minus className="h-2 w-2" strokeWidth={3} aria-hidden="true" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
}`,...(_=(T=o.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var W,E,V;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Circle - Text / custom content",
  render: () => <div className="flex items-center gap-3 flex-wrap">
      <Badge shape="circle" variant="success">New</Badge>
      <Badge shape="circle" variant="warning">Beta</Badge>
      <Badge shape="circle" variant="info">Pro</Badge>
      <Badge shape="circle" variant="critical">!</Badge>
      <Badge shape="circle" variant="neutral" size="lg">Draft</Badge>
    </div>
}`,...(V=(E=m.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const je=["PillAllVariants","PillStatusColors","PillWithIcon","CircleAllVariants","CircleSizes","CircleOverflow","CirclePositionedOnIcon","CircleTextContent"];export{t as CircleAllVariants,d as CircleOverflow,o as CirclePositionedOnIcon,n as CircleSizes,m as CircleTextContent,r as PillAllVariants,i as PillStatusColors,c as PillWithIcon,je as __namedExportsOrder,ue as default};
