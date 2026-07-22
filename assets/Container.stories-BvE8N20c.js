import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./container-C6WaNDbb.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./container-header-DwQg5U0B.js";import"./tooltip-ughTrHl0.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./createLucideIcon-DEcfmm_F.js";const R=["default","info-none","info-subtle","info-strong","info-dotted","success-none","success-subtle","success-strong","success-dotted","warning-none","warning-subtle","warning-solid","warning-dotted","error-none","error-subtle","error-strong","error-dotted","neutral-none","neutral-subtle","neutral-strong","neutral-dotted","popover","modal"],na={title:"Custom Primitives/Container",component:e,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{}},n={name:"Default",args:{variant:"default"},argTypes:{variant:{control:"select",options:R,description:"Color and border style. Format: {color}-{border-style}"}},render:p=>a.jsx(e,{...p,headerTitle:"Container",className:"pb-5",children:a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary px-5",children:"Use the Controls panel below to switch variant, background and border combinations."})})},s={name:"Nested Layout",render:()=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(e,{headerTitle:"Header Section",className:"pb-5",children:a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary px-5",children:"Top-level container."})}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx(e,{headerTitle:"Left Panel",className:"flex-1 pb-5",children:a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary px-5",children:"Side content area."})}),a.jsx(e,{headerTitle:"Main Content",className:"flex-[2] pb-5",children:a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary px-5",children:"Primary content area."})})]})]})},t={name:"Info (blue)",render:()=>a.jsx(e,{variant:"info",className:"p-5 max-w-sm",children:a.jsx("p",{className:"lyra-body-md text-lyra-fg-active-strong",children:"AI Confidence: 78% — Based on 3 similar resolved cases and firmware documentation match."})})},l={name:"Success (green)",render:()=>a.jsx(e,{variant:"success",className:"p-5 max-w-sm",children:a.jsx("p",{className:"lyra-body-md text-lyra-status-success-strong",children:"Jordan's case has been successfully resolved. Configuration backed up."})})},o={name:"Warning (dotted amber)",render:()=>a.jsxs(e,{variant:"warning",className:"p-5 max-w-sm",children:[a.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-status-warning-strong uppercase tracking-wide mb-1",children:"Internal Note"}),a.jsx("p",{className:"lyra-body-md text-lyra-status-warning-strong",children:"Awaiting Human Agent intervention — click to review AI recommendation."})]})},c={name:"Critical (red)",render:()=>a.jsx(e,{variant:"critical",className:"p-5 max-w-sm",children:a.jsx("p",{className:"lyra-body-md text-lyra-status-critical-strong",children:"Action failed. Please review and try again."})})},i={name:"Neutral flat (no border)",render:()=>a.jsxs(e,{variant:"neutral-flat",className:"p-5 max-w-sm",children:[a.jsx("p",{className:"lyra-heading-md text-lyra-fg-default mb-1",children:"Welcome Back, Sarah Jones"}),a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Last login Wed, Jun 3, 4:50 PM"})]})},d={name:"Neutral card (with border)",render:()=>a.jsxs(e,{variant:"neutral-card",className:"p-5 max-w-sm",children:[a.jsx("p",{className:"lyra-heading-md text-lyra-fg-default mb-1",children:"Total Scenarios"}),a.jsx("p",{className:"text-[40px] font-bold text-lyra-fg-default leading-none",children:"519"}),a.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:"Completed simulation runs"})]})},m={name:"All Colour Variants",render:()=>{const p=[{label:"Info",variants:["info-none","info-subtle","info-strong","info-dotted"]},{label:"Success",variants:["success-none","success-subtle","success-strong","success-dotted"]},{label:"Warning",variants:["warning-none","warning-subtle","warning-solid","warning-dotted"]},{label:"Error",variants:["error-none","error-subtle","error-strong","error-dotted"]},{label:"Neutral",variants:["neutral-none","neutral-subtle","neutral-strong","neutral-dotted"]}];return a.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-3xl",children:[p.map(({label:r,variants:_})=>a.jsxs("div",{children:[a.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:r}),a.jsx("div",{className:"grid grid-cols-4 gap-3",children:_.map(u=>a.jsx(e,{variant:u,className:"px-3 py-3",children:a.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:u})},u))})]},r)),a.jsxs("div",{children:[a.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:"Base surfaces"}),a.jsx("div",{className:"grid grid-cols-3 gap-3",children:["default","popover","modal"].map(r=>a.jsx(e,{variant:r,className:"px-3 py-3",children:a.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:r})},r))})]})]})}};var y,g,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Default",
  args: {
    variant: "default"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ALL_VARIANTS,
      description: "Color and border style. Format: {color}-{border-style}"
    }
  },
  render: args => <Container {...args} headerTitle="Container" className="pb-5">
      <p className="lyra-body-md text-lyra-fg-secondary px-5">
        Use the Controls panel below to switch variant, background and border combinations.
      </p>
    </Container>
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,N;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Nested Layout",
  render: () => <div className="flex flex-col gap-4">
      <Container headerTitle="Header Section" className="pb-5">
        <p className="lyra-body-md text-lyra-fg-secondary px-5">Top-level container.</p>
      </Container>
      <div className="flex gap-4">
        <Container headerTitle="Left Panel" className="flex-1 pb-5">
          <p className="lyra-body-md text-lyra-fg-secondary px-5">Side content area.</p>
        </Container>
        <Container headerTitle="Main Content" className="flex-[2] pb-5">
          <p className="lyra-body-md text-lyra-fg-secondary px-5">Primary content area.</p>
        </Container>
      </div>
    </div>
}`,...(N=(b=s.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var v,h,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Info (blue)",
  render: () => <Container variant="info" className="p-5 max-w-sm">
      <p className="lyra-body-md text-lyra-fg-active-strong">
        AI Confidence: 78% — Based on 3 similar resolved cases and firmware documentation match.
      </p>
    </Container>
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var w,j,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Success (green)",
  render: () => <Container variant="success" className="p-5 max-w-sm">
      <p className="lyra-body-md text-lyra-status-success-strong">
        Jordan's case has been successfully resolved. Configuration backed up.
      </p>
    </Container>
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var A,T,k;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Warning (dotted amber)",
  render: () => <Container variant="warning" className="p-5 max-w-sm">
      <p className="lyra-body-sm-emphasis text-lyra-status-warning-strong uppercase tracking-wide mb-1">
        Internal Note
      </p>
      <p className="lyra-body-md text-lyra-status-warning-strong">
        Awaiting Human Agent intervention — click to review AI recommendation.
      </p>
    </Container>
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var I,V,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Critical (red)",
  render: () => <Container variant="critical" className="p-5 max-w-sm">
      <p className="lyra-body-md text-lyra-status-critical-strong">
        Action failed. Please review and try again.
      </p>
    </Container>
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var W,P,B;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Neutral flat (no border)",
  render: () => <Container variant="neutral-flat" className="p-5 max-w-sm">
      <p className="lyra-heading-md text-lyra-fg-default mb-1">Welcome Back, Sarah Jones</p>
      <p className="lyra-body-sm text-lyra-fg-secondary">Last login Wed, Jun 3, 4:50 PM</p>
    </Container>
}`,...(B=(P=i.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var J,D,E;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Neutral card (with border)",
  render: () => <Container variant="neutral-card" className="p-5 max-w-sm">
      <p className="lyra-heading-md text-lyra-fg-default mb-1">Total Scenarios</p>
      <p className="text-[40px] font-bold text-lyra-fg-default leading-none">519</p>
      <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Completed simulation runs</p>
    </Container>
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,H,M;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "All Colour Variants",
  render: () => {
    const groups = [{
      label: "Info",
      variants: ["info-none", "info-subtle", "info-strong", "info-dotted"]
    }, {
      label: "Success",
      variants: ["success-none", "success-subtle", "success-strong", "success-dotted"]
    }, {
      label: "Warning",
      variants: ["warning-none", "warning-subtle", "warning-solid", "warning-dotted"]
    }, {
      label: "Error",
      variants: ["error-none", "error-subtle", "error-strong", "error-dotted"]
    }, {
      label: "Neutral",
      variants: ["neutral-none", "neutral-subtle", "neutral-strong", "neutral-dotted"]
    }] as const;
    return <div className="flex flex-col gap-6 w-full max-w-3xl">
        {groups.map(({
        label,
        variants
      }) => <div key={label}>
            <p className="lyra-label text-lyra-fg-secondary mb-2">{label}</p>
            <div className="grid grid-cols-4 gap-3">
              {variants.map(v => <Container key={v} variant={v} className="px-3 py-3">
                  <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
                </Container>)}
            </div>
          </div>)}
        <div>
          <p className="lyra-label text-lyra-fg-secondary mb-2">Base surfaces</p>
          <div className="grid grid-cols-3 gap-3">
            {(["default", "popover", "modal"] as const).map(v => <Container key={v} variant={v} className="px-3 py-3">
                <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
              </Container>)}
          </div>
        </div>
      </div>;
  }
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const sa=["Default","Nested","InfoVariant","SuccessVariant","WarningVariant","CriticalVariant","NeutralFlat","NeutralCard","AllColorVariants"];export{m as AllColorVariants,c as CriticalVariant,n as Default,t as InfoVariant,s as Nested,d as NeutralCard,i as NeutralFlat,l as SuccessVariant,o as WarningVariant,sa as __namedExportsOrder,na as default};
