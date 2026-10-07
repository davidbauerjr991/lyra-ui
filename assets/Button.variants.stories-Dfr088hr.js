import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{B as s}from"./button-CLz1-b9g.js";import{M as i,B as t,T as J,a as Q,S as g}from"./Button.shared-D_ALAx7H.js";import{R as r}from"./refresh-cw-D4nVfeiS.js";import{T as K}from"./trash-2-DTLo779S.js";import{C as N}from"./chevron-down-gMYAX9-q.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./createLucideIcon-aII_sYFw.js";import"./ellipsis-vertical-D6ttVBVO.js";const ya={title:"Custom Primitives/Button/Variants",component:s,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n="lyra-body-sm text-lyra-fg-secondary",l={name:"Styles",render:()=>a.jsx("div",{className:"flex items-center gap-3",children:t.map(e=>a.jsx(s,{variant:e.variant,children:"Button"},e.label))})},o={name:"States",render:()=>a.jsxs("div",{className:"grid grid-cols-5 gap-x-6 gap-y-3 items-center",children:[a.jsx("span",{className:n,children:"State"}),t.map(e=>a.jsx("span",{className:n,children:e.label},e.label)),a.jsx("span",{className:n,children:"Default"}),t.map(e=>a.jsx(s,{variant:e.variant,children:"Button"},e.label)),a.jsx("span",{className:n,children:"Disabled"}),t.map(e=>a.jsx(s,{variant:e.variant,disabled:!0,children:"Button"},e.label))]})},c={name:"Sizes",render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Text Buttons"}),a.jsx("div",{className:"flex items-end gap-4",children:J.map(e=>a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsx(s,{size:e.size,children:"Button"}),a.jsx("span",{className:n,children:e.px})]},e.size))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-3",children:"Icon Buttons"}),a.jsx("div",{className:"flex items-end gap-4",children:Q.map(e=>a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsx(s,{variant:"icon",size:e.size,title:"More options",children:a.jsx(i,{className:e.iconClass})}),a.jsx("span",{className:n,children:e.px})]},e.size))})]})]})},d={name:"Icon Buttons",render:()=>a.jsxs("div",{className:"grid grid-cols-5 gap-x-6 gap-y-3 items-center",children:[a.jsx("span",{className:n,children:"State"}),t.map(e=>a.jsx("span",{className:n,children:e.label},e.label)),a.jsx("span",{className:n,children:"Default"}),t.map(e=>a.jsx(s,{variant:e.iconVariant,size:"icon",title:"More options",children:a.jsx(i,{})},e.label)),a.jsx("span",{className:n,children:"Disabled"}),t.map(e=>a.jsx(s,{variant:e.iconVariant,size:"icon",title:"More options",disabled:!0,children:a.jsx(i,{})},e.label))]})},m={name:"With Icons",render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs(s,{variant:"outline",children:[a.jsx(g,{className:"h-4 w-4",strokeWidth:1.5}),"Button",a.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})]}),a.jsxs(s,{variant:"default",children:[a.jsx(g,{className:"h-4 w-4",strokeWidth:1.5}),"Button",a.jsx(N,{className:"h-4 w-4",strokeWidth:1.5})]}),a.jsxs(s,{variant:"destructive",children:[a.jsx(K,{className:"h-4 w-4",strokeWidth:1.5}),"Delete"]}),a.jsxs(s,{variant:"ghost",children:[a.jsx(r,{className:"h-4 w-4",strokeWidth:1.5}),"Refresh"]})]})},p={name:"Icon Button — With Badge",render:()=>a.jsxs("div",{className:"flex items-end gap-4",children:[a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsx(s,{variant:"icon",size:"icon-2xl",title:"Notifications, 4 unread",badge:4,children:a.jsx(i,{className:"h-5 w-5"})}),a.jsx("span",{className:n,children:"badge=4"})]}),a.jsxs("div",{className:"flex flex-col items-center gap-1",children:[a.jsx(s,{variant:"icon",size:"icon-2xl",title:"Notifications, 99+ unread",badge:128,children:a.jsx(i,{className:"h-5 w-5"})}),a.jsx("span",{className:n,children:"badge=128 → 99+"})]})]})},h={name:"Loading",render:()=>a.jsxs("div",{className:"flex flex-col gap-6",children:[a.jsx("div",{className:"flex flex-wrap items-center gap-4",children:t.map(e=>a.jsx(s,{variant:e.variant,loading:!0,children:e.label},e.label))}),a.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[J.map(e=>a.jsx(s,{size:e.size,loading:!0,children:e.px},e.size)),a.jsx(s,{variant:"icon",size:"icon","aria-label":"Refresh",loading:!0,children:a.jsx(r,{className:"h-4 w-4",strokeWidth:1.5})})]})]})},x={name:"Icon Tooltip",render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(s,{variant:"icon",size:"icon","aria-label":"Refresh",tooltip:!0,children:a.jsx(r,{className:"h-4 w-4",strokeWidth:1.5})}),a.jsx(s,{variant:"icon",size:"icon","aria-label":"Delete",tooltip:"Delete this item",children:a.jsx(K,{className:"h-4 w-4",strokeWidth:1.5})}),a.jsx(s,{variant:"icon",size:"icon","aria-label":"No tooltip (default)",children:a.jsx(r,{className:"h-4 w-4",strokeWidth:1.5})})]})},u={name:"Disabled Contrast",render:()=>a.jsxs("div",{className:"grid grid-cols-[120px_auto_auto] items-center gap-x-8 gap-y-4",children:[a.jsx("span",{}),a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Default"}),a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"High"}),a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Ghost"}),a.jsx(s,{variant:"ghost",disabled:!0,children:"Clear"}),a.jsx(s,{variant:"ghost",disabled:!0,disabledContrast:"high",children:"Clear"}),a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Icon"}),a.jsx(s,{variant:"icon",size:"icon","aria-label":"Refresh",disabled:!0,children:a.jsx(r,{className:"h-4 w-4",strokeWidth:1.5})}),a.jsx(s,{variant:"icon",size:"icon","aria-label":"Refresh",disabled:!0,disabledContrast:"high",children:a.jsx(r,{className:"h-4 w-4",strokeWidth:1.5})})]})},b={default:{hover:"bg-lyra-state-hover-primary",pressed:"bg-lyra-state-pressed-primary"},destructive:{hover:"bg-lyra-state-hover-destructive",pressed:"bg-lyra-state-pressed-destructive"},outline:{hover:"bg-lyra-state-hover",pressed:"bg-lyra-state-pressed"},ghost:{hover:"bg-lyra-state-hover",pressed:"bg-lyra-state-pressed"}},$="ring-2 ring-lyra-border-focus ring-offset-2",v={name:"State Sheet",render:()=>a.jsxs("div",{className:"grid grid-cols-[120px_repeat(5,auto)] items-center gap-x-6 gap-y-4",children:[a.jsx("span",{}),["Rest","Hover","Pressed","Focus","Disabled"].map(e=>a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:e},e)),t.map(e=>a.jsxs("div",{className:"contents",children:[a.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:e.label}),a.jsx(s,{variant:e.variant,children:e.label}),a.jsx(s,{variant:e.variant,className:b[e.variant].hover,children:e.label}),a.jsx(s,{variant:e.variant,className:b[e.variant].pressed,children:e.label}),a.jsx(s,{variant:e.variant,className:$,children:e.label}),a.jsx(s,{variant:e.variant,disabled:!0,children:e.label})]},e.label))]})};var y,f,B;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Styles",
  render: () => <div className="flex items-center gap-3">
      {BUTTON_STYLES.map(s => <Button key={s.label} variant={s.variant}>
          Button
        </Button>)}
    </div>
}`,...(B=(f=l.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var j,S,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "States",
  render: () => <div className="grid grid-cols-5 gap-x-6 gap-y-3 items-center">
      <span className={caption}>State</span>
      {BUTTON_STYLES.map(s => <span key={s.label} className={caption}>{s.label}</span>)}

      <span className={caption}>Default</span>
      {BUTTON_STYLES.map(s => <Button key={s.label} variant={s.variant}>Button</Button>)}

      <span className={caption}>Disabled</span>
      {BUTTON_STYLES.map(s => <Button key={s.label} variant={s.variant} disabled>Button</Button>)}
    </div>
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,z,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => <div className="space-y-6">
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Text Buttons</h3>
        <div className="flex items-end gap-4">
          {TEXT_SIZES.map(s => <div key={s.size} className="flex flex-col items-center gap-1">
              <Button size={s.size}>Button</Button>
              <span className={caption}>{s.px}</span>
            </div>)}
        </div>
      </div>

      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Icon Buttons</h3>
        <div className="flex items-end gap-4">
          {ICON_SIZES.map(s => <div key={s.size} className="flex flex-col items-center gap-1">
              <Button variant="icon" size={s.size} title="More options">
                <MoreIcon className={s.iconClass} />
              </Button>
              <span className={caption}>{s.px}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,I,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Icon Buttons",
  render: () => <div className="grid grid-cols-5 gap-x-6 gap-y-3 items-center">
      <span className={caption}>State</span>
      {BUTTON_STYLES.map(s => <span key={s.label} className={caption}>{s.label}</span>)}

      <span className={caption}>Default</span>
      {BUTTON_STYLES.map(s => <Button key={s.label} variant={s.iconVariant} size="icon" title="More options">
          <MoreIcon />
        </Button>)}

      <span className={caption}>Disabled</span>
      {BUTTON_STYLES.map(s => <Button key={s.label} variant={s.iconVariant} size="icon" title="More options" disabled>
          <MoreIcon />
        </Button>)}
    </div>
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var _,E,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "With Icons",
  render: () => <div className="flex items-center gap-3">
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
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var R,L,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Icon Button — With Badge",
  render: () => <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Button variant="icon" size="icon-2xl" title="Notifications, 4 unread" badge={4}>
          <MoreIcon className="h-5 w-5" />
        </Button>
        <span className={caption}>badge=4</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button variant="icon" size="icon-2xl" title="Notifications, 99+ unread" badge={128}>
          <MoreIcon className="h-5 w-5" />
        </Button>
        <span className={caption}>badge=128 → 99+</span>
      </div>
    </div>
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var M,U,Y;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Loading",
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        {BUTTON_STYLES.map(b => <Button key={b.label} variant={b.variant} loading>
            {b.label}
          </Button>)}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {TEXT_SIZES.map(s => <Button key={s.size} size={s.size} loading>
            {s.px}
          </Button>)}
        <Button variant="icon" size="icon" aria-label="Refresh" loading>
          <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
        </Button>
      </div>
    </div>
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var A,V,Z;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Icon Tooltip",
  render: () => <div className="flex items-center gap-4">
      <Button variant="icon" size="icon" aria-label="Refresh" tooltip>
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="icon" size="icon" aria-label="Delete" tooltip="Delete this item">
        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="icon" size="icon" aria-label="No tooltip (default)">
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
    </div>
}`,...(Z=(V=x.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var F,H,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Disabled Contrast",
  render: () => <div className="grid grid-cols-[120px_auto_auto] items-center gap-x-8 gap-y-4">
      <span />
      <span className="lyra-body-sm text-lyra-fg-secondary">Default</span>
      <span className="lyra-body-sm text-lyra-fg-secondary">High</span>
      <span className="lyra-body-sm text-lyra-fg-secondary">Ghost</span>
      <Button variant="ghost" disabled>Clear</Button>
      <Button variant="ghost" disabled disabledContrast="high">Clear</Button>
      <span className="lyra-body-sm text-lyra-fg-secondary">Icon</span>
      <Button variant="icon" size="icon" aria-label="Refresh" disabled>
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="icon" size="icon" aria-label="Refresh" disabled disabledContrast="high">
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
    </div>
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var X,G,q;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "State Sheet",
  render: () => <div className="grid grid-cols-[120px_repeat(5,auto)] items-center gap-x-6 gap-y-4">
      <span />
      {["Rest", "Hover", "Pressed", "Focus", "Disabled"].map(h => <span key={h} className="lyra-body-sm text-lyra-fg-secondary">{h}</span>)}
      {BUTTON_STYLES.map(b => <div key={b.label} className="contents">
          <span className="lyra-body-sm text-lyra-fg-secondary">{b.label}</span>
          <Button variant={b.variant}>{b.label}</Button>
          <Button variant={b.variant} className={STATE_CLASSES[b.variant].hover}>{b.label}</Button>
          <Button variant={b.variant} className={STATE_CLASSES[b.variant].pressed}>{b.label}</Button>
          <Button variant={b.variant} className={FOCUS_CLASS}>{b.label}</Button>
          <Button variant={b.variant} disabled>{b.label}</Button>
        </div>)}
    </div>
}`,...(q=(G=v.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const fa=["Styles","States","Sizes","IconButtons","WithIcons","IconButtonWithBadge","Loading","IconTooltip","DisabledContrast","StateSheet"];export{u as DisabledContrast,p as IconButtonWithBadge,d as IconButtons,x as IconTooltip,h as Loading,c as Sizes,v as StateSheet,o as States,l as Styles,m as WithIcons,fa as __namedExportsOrder,ya as default};
