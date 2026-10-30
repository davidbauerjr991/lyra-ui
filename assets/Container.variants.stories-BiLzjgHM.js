import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a}from"./container-Bh-BiJmm.js";import{C as ve,d as fe,B as r,f as o,e as Be,a as S,h as Se,H as Ce,L as je,c as C,T as Ae,b as we}from"./Container.shared-B6Pxw3I1.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./badge-DnlHYDBX.js";import"./button-Cje2PXGX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./tag-DQ3sj_Kb.js";import"./tabs-CB4kH1Fe.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const Na={title:"Custom Primitives/Container/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},i={name:"States (Header options)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{className:"p-5",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"No header"})}),e.jsx(a,{headerTitle:"Title only",className:"pb-5",children:e.jsx(r,{children:"Header with a title."})}),e.jsx(a,{headerTitle:"Title and subtitle",headerSubhead:"Supporting description",className:"pb-5",children:e.jsx(r,{children:"Header with a subtitle."})}),e.jsx(a,{headerTitle:"Divider below header",headerBordered:!0,className:"pb-5",children:e.jsx(r,{belowDivider:!0,children:"Header with a divider (headerBordered)."})}),e.jsx(a,{headerIcon:C,headerSubhead:"Icon and subtitle, no title",className:"pb-5",children:e.jsx(r,{children:"Header renders without title text."})}),e.jsx(a,{headerTitle:"Title with icon",headerIcon:C,className:"pb-5",children:e.jsx(r,{children:"Header with icon."})})]})},d={name:"Header Slots (Badge, Alert Tag, Actions, Tabs)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{headerTitle:"Title badge",headerTitleBadge:Be,className:"pb-5",children:e.jsx(r,{children:"Badge right after the title."})}),e.jsx(a,{headerTitle:"Alert tag above",headerTopSlot:S,className:"pb-5",children:e.jsx(r,{children:"Status tag above the title."})}),e.jsx(a,{headerTitle:"Alert tag inline",headerTitleBadge:S,className:"pb-5",children:e.jsx(r,{children:"Status tag inline after the title."})}),e.jsx(a,{headerTitle:"Actions",headerActions:Se,className:"pb-5",children:e.jsx(r,{children:"Action button on the right."})}),e.jsx(a,{headerTitle:"Tabs",headerSubhead:"Tab row below the title",headerTabs:e.jsx(Ce,{}),className:"pb-5",children:e.jsx(r,{belowDivider:!0,children:"Tabs supply their own bottom border."})})]})},l={name:"Footer (Left, Right, Full Width, Divider)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{headerTitle:"Left",footerActions:o,footerAlign:"left",children:e.jsx(r,{children:"Buttons grouped at the start."})}),e.jsx(a,{headerTitle:"Right (default)",footerActions:o,children:e.jsx(r,{children:"Buttons grouped at the end."})}),e.jsx(a,{headerTitle:"Full width",footerActions:o,footerAlign:"full",children:e.jsx(r,{children:"Buttons stretch equally."})}),e.jsx(a,{headerTitle:"Divider",footerActions:o,footerBordered:!0,children:e.jsx(r,{children:"Border above the footer."})})]})},c={name:"Title Sizes",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:Ae.map(t=>e.jsx(a,{headerTitle:`Title size ${t}`,headerTitleClassName:we[t],className:"pb-3"},t))})},m={name:"Base Surfaces (Default, Popover, Modal)",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-3 w-full max-w-3xl",children:fe.map(t=>e.jsx(a,{variant:t,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:t})},t))})},p={name:"All Colour Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-3xl",children:[ve.map(({label:t,variants:n})=>e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:t}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:n.map(B=>e.jsx(a,{variant:B,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:B})},B))})]},t)),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:"Base surfaces"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:fe.map(t=>e.jsx(a,{variant:t,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:t})},t))})]})]})},h={name:"Legacy Aliases (Info, Success, Warning, Critical, Neutral)",render:()=>e.jsx(je,{})},u={name:"Nested Layout",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{headerTitle:"Header Section",className:"pb-5",children:e.jsx(r,{children:"Top-level container."})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{headerTitle:"Left Panel",className:"flex-1 pb-5",children:e.jsx(r,{children:"Side content area."})}),e.jsx(a,{headerTitle:"Main Content",className:"flex-[2] pb-5",children:e.jsx(r,{children:"Primary content area."})})]})]})},x={name:"Borders and Accent Bar",render:()=>e.jsxs("div",{className:"grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(a,{variant:"neutral-subtle",radius:"md",borders:["top","bottom"],className:"p-4",children:e.jsx(r,{children:'borders=["top", "bottom"]'})}),e.jsx(a,{variant:"neutral-subtle",radius:"md",borders:["left"],className:"p-4",children:e.jsx(r,{children:'borders=["left"]'})}),e.jsx(a,{variant:"info-subtle",radius:"md",accent:"left",className:"p-4",children:e.jsx(r,{children:'accent="left" (all borders kept)'})}),e.jsx(a,{variant:"info-none",radius:"md",borders:"none",accent:"left",className:"p-4",children:e.jsx(r,{children:'borders="none" accent="left": a bar alone'})}),e.jsx(a,{variant:"success-subtle",radius:"lg",accent:"top",className:"p-4",children:e.jsx(r,{children:'accent="top" · success'})}),e.jsx(a,{variant:"error-subtle",radius:"none",accent:"left",className:"p-4",children:e.jsx(r,{children:'radius="none" · error'})})]})},Ge=["brand","info","success","warning","critical","neutral"];function Ne({name:t}){return e.jsx(a,{background:`gradient-${t}`,headerTitle:`gradient-${t}`,headerSubhead:"Fades to the surface",className:"h-40 w-72",children:e.jsx("div",{className:"px-5 pb-5",children:e.jsx(r,{children:"Content on the gradient stays on the surface tone at the bottom."})})})}const s=t=>({name:`Gradient · ${t}`,render:()=>e.jsx(Ne,{name:t})}),g=s("brand"),b=s("info"),T=s("success"),y=s("warning"),f=s("critical"),N=s("neutral"),v={name:"Gradients · light and dark",render:()=>e.jsx("div",{className:"flex flex-wrap gap-6",children:["light","dark"].map(t=>e.jsx("div",{"data-theme":t==="dark"?"dark":void 0,className:"grid grid-cols-1 gap-4 rounded-lyra-lg bg-lyra-bg-surface-canvas p-4 sm:grid-cols-2",children:Ge.map(n=>e.jsx(Ne,{name:n},n))},t))})};var j,A,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "States (Header options)",
  render: () => <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <Container className="p-5">
        <p className="lyra-body-sm text-lyra-fg-secondary">No header</p>
      </Container>
      <Container headerTitle="Title only" className="pb-5">
        <BodyText>Header with a title.</BodyText>
      </Container>
      <Container headerTitle="Title and subtitle" headerSubhead="Supporting description" className="pb-5">
        <BodyText>Header with a subtitle.</BodyText>
      </Container>
      <Container headerTitle="Divider below header" headerBordered className="pb-5">
        <BodyText belowDivider>Header with a divider (headerBordered).</BodyText>
      </Container>
      <Container headerIcon={headerIcon} headerSubhead="Icon and subtitle, no title" className="pb-5">
        <BodyText>Header renders without title text.</BodyText>
      </Container>
      <Container headerTitle="Title with icon" headerIcon={headerIcon} className="pb-5">
        <BodyText>Header with icon.</BodyText>
      </Container>
    </div>
}`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var G,L,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Header Slots (Badge, Alert Tag, Actions, Tabs)",
  render: () => <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <Container headerTitle="Title badge" headerTitleBadge={headerTitleBadge} className="pb-5">
        <BodyText>Badge right after the title.</BodyText>
      </Container>
      <Container headerTitle="Alert tag above" headerTopSlot={headerTag} className="pb-5">
        <BodyText>Status tag above the title.</BodyText>
      </Container>
      <Container headerTitle="Alert tag inline" headerTitleBadge={headerTag} className="pb-5">
        <BodyText>Status tag inline after the title.</BodyText>
      </Container>
      <Container headerTitle="Actions" headerActions={headerActions} className="pb-5">
        <BodyText>Action button on the right.</BodyText>
      </Container>
      <Container headerTitle="Tabs" headerSubhead="Tab row below the title" headerTabs={<HeaderTabs />} className="pb-5">
        <BodyText belowDivider>Tabs supply their own bottom border.</BodyText>
      </Container>
    </div>
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var H,I,k;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Footer (Left, Right, Full Width, Divider)",
  render: () => <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <Container headerTitle="Left" footerActions={footerButtons} footerAlign="left">
        <BodyText>Buttons grouped at the start.</BodyText>
      </Container>
      <Container headerTitle="Right (default)" footerActions={footerButtons}>
        <BodyText>Buttons grouped at the end.</BodyText>
      </Container>
      <Container headerTitle="Full width" footerActions={footerButtons} footerAlign="full">
        <BodyText>Buttons stretch equally.</BodyText>
      </Container>
      <Container headerTitle="Divider" footerActions={footerButtons} footerBordered>
        <BodyText>Border above the footer.</BodyText>
      </Container>
    </div>
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var q,D,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Title Sizes",
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {TITLE_SIZES.map(size => <Container key={size} headerTitle={\`Title size \${size}\`} headerTitleClassName={TITLE_SIZE_CLASSES[size]} className="pb-3" />)}
    </div>
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,F,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Base Surfaces (Default, Popover, Modal)",
  render: () => <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
      {BASE_SURFACES.map(v => <Container key={v} variant={v} className="px-3 py-3">
          <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
        </Container>)}
    </div>
}`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var z,O,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "All Colour Variants",
  render: () => <div className="flex flex-col gap-6 w-full max-w-3xl">
      {COLOR_GROUPS.map(({
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
          {BASE_SURFACES.map(v => <Container key={v} variant={v} className="px-3 py-3">
              <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
            </Container>)}
        </div>
      </div>
    </div>
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var U,V,$;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Legacy Aliases (Info, Success, Warning, Critical, Neutral)",
  render: () => <LegacyExamples />
}`,...($=(V=h.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var M,Z,J;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Nested Layout",
  render: () => <div className="flex flex-col gap-4">
      <Container headerTitle="Header Section" className="pb-5">
        <BodyText>Top-level container.</BodyText>
      </Container>
      <div className="flex gap-4">
        <Container headerTitle="Left Panel" className="flex-1 pb-5">
          <BodyText>Side content area.</BodyText>
        </Container>
        <Container headerTitle="Main Content" className="flex-[2] pb-5">
          <BodyText>Primary content area.</BodyText>
        </Container>
      </div>
    </div>
}`,...(J=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Borders and Accent Bar",
  render: () => <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
      <Container variant="neutral-subtle" radius="md" borders={["top", "bottom"]} className="p-4">
        <BodyText>borders=[&quot;top&quot;, &quot;bottom&quot;]</BodyText>
      </Container>
      <Container variant="neutral-subtle" radius="md" borders={["left"]} className="p-4">
        <BodyText>borders=[&quot;left&quot;]</BodyText>
      </Container>
      <Container variant="info-subtle" radius="md" accent="left" className="p-4">
        <BodyText>accent=&quot;left&quot; (all borders kept)</BodyText>
      </Container>
      <Container variant="info-none" radius="md" borders="none" accent="left" className="p-4">
        <BodyText>borders=&quot;none&quot; accent=&quot;left&quot;: a bar alone</BodyText>
      </Container>
      <Container variant="success-subtle" radius="lg" accent="top" className="p-4">
        <BodyText>accent=&quot;top&quot; · success</BodyText>
      </Container>
      <Container variant="error-subtle" radius="none" accent="left" className="p-4">
        <BodyText>radius=&quot;none&quot; · error</BodyText>
      </Container>
    </div>
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:'gradientStory("brand")',...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:'gradientStory("info")',...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,ie;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:'gradientStory("success")',...(ie=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var de,le,ce;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:'gradientStory("warning")',...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,pe,he;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:'gradientStory("critical")',...(he=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,xe,ge;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:'gradientStory("neutral")',...(ge=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var be,Te,ye;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: "Gradients · light and dark",
  render: () => <div className="flex flex-wrap gap-6">
      {(["light", "dark"] as const).map(theme => <div key={theme} data-theme={theme === "dark" ? "dark" : undefined} className="grid grid-cols-1 gap-4 rounded-lyra-lg bg-lyra-bg-surface-canvas p-4 sm:grid-cols-2">
          {GRADIENTS.map(name => <GradientCard key={name} name={name} />)}
        </div>)}
    </div>
}`,...(ye=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};const va=["States","HeaderSlots","Footer","TitleSizes","BaseSurfaces","AllColorVariants","LegacyAliases","Nested","BordersAndAccent","GradientBrand","GradientInfo","GradientSuccess","GradientWarning","GradientCritical","GradientNeutral","AllGradients"];export{p as AllColorVariants,v as AllGradients,m as BaseSurfaces,x as BordersAndAccent,l as Footer,g as GradientBrand,f as GradientCritical,b as GradientInfo,N as GradientNeutral,T as GradientSuccess,y as GradientWarning,d as HeaderSlots,h as LegacyAliases,u as Nested,i as States,c as TitleSizes,va as __namedExportsOrder,Na as default};
