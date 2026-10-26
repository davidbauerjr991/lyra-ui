import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a}from"./container-ipFdrjaG.js";import{C as Z,d as M,B as r,f as s,e as G,a as u,h as $,H as J,L as K,c as T,T as Q,b as X}from"./Container.shared-4iJXl9OC.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./container-footer-BSIaMmWX.js";import"./badge-DnlHYDBX.js";import"./button-DxuJ7r2Z.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./tag-Dcg-2iAh.js";import"./tabs-CPD8_j1Z.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const Me={title:"Custom Primitives/Container/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={name:"States (Header options)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{className:"p-5",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"No header"})}),e.jsx(a,{headerTitle:"Title only",className:"pb-5",children:e.jsx(r,{children:"Header with a title."})}),e.jsx(a,{headerTitle:"Title and subtitle",headerSubhead:"Supporting description",className:"pb-5",children:e.jsx(r,{children:"Header with a subtitle."})}),e.jsx(a,{headerTitle:"Divider below header",headerBordered:!0,className:"pb-5",children:e.jsx(r,{belowDivider:!0,children:"Header with a divider (headerBordered)."})}),e.jsx(a,{headerIcon:T,headerSubhead:"Icon and subtitle, no title",className:"pb-5",children:e.jsx(r,{children:"Header renders without title text."})}),e.jsx(a,{headerTitle:"Title with icon",headerIcon:T,className:"pb-5",children:e.jsx(r,{children:"Header with icon."})})]})},o={name:"Header Slots (Badge, Alert Tag, Actions, Tabs)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{headerTitle:"Title badge",headerTitleBadge:G,className:"pb-5",children:e.jsx(r,{children:"Badge right after the title."})}),e.jsx(a,{headerTitle:"Alert tag above",headerTopSlot:u,className:"pb-5",children:e.jsx(r,{children:"Status tag above the title."})}),e.jsx(a,{headerTitle:"Alert tag inline",headerTitleBadge:u,className:"pb-5",children:e.jsx(r,{children:"Status tag inline after the title."})}),e.jsx(a,{headerTitle:"Actions",headerActions:$,className:"pb-5",children:e.jsx(r,{children:"Action button on the right."})}),e.jsx(a,{headerTitle:"Tabs",headerSubhead:"Tab row below the title",headerTabs:e.jsx(J,{}),className:"pb-5",children:e.jsx(r,{belowDivider:!0,children:"Tabs supply their own bottom border."})})]})},i={name:"Footer (Left, Right, Full Width, Divider)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{headerTitle:"Left",footerActions:s,footerAlign:"left",children:e.jsx(r,{children:"Buttons grouped at the start."})}),e.jsx(a,{headerTitle:"Right (default)",footerActions:s,children:e.jsx(r,{children:"Buttons grouped at the end."})}),e.jsx(a,{headerTitle:"Full width",footerActions:s,footerAlign:"full",children:e.jsx(r,{children:"Buttons stretch equally."})}),e.jsx(a,{headerTitle:"Divider",footerActions:s,footerBordered:!0,children:e.jsx(r,{children:"Border above the footer."})})]})},d={name:"Title Sizes",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:Q.map(t=>e.jsx(a,{headerTitle:`Title size ${t}`,headerTitleClassName:X[t],className:"pb-3"},t))})},l={name:"Base Surfaces (Default, Popover, Modal)",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-3 w-full max-w-3xl",children:M.map(t=>e.jsx(a,{variant:t,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:t})},t))})},c={name:"All Colour Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-3xl",children:[Z.map(({label:t,variants:W})=>e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:t}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:W.map(x=>e.jsx(a,{variant:x,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:x})},x))})]},t)),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:"Base surfaces"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:M.map(t=>e.jsx(a,{variant:t,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:t})},t))})]})]})},m={name:"Legacy Aliases (Info, Success, Warning, Critical, Neutral)",render:()=>e.jsx(K,{})},p={name:"Nested Layout",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{headerTitle:"Header Section",className:"pb-5",children:e.jsx(r,{children:"Top-level container."})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{headerTitle:"Left Panel",className:"flex-1 pb-5",children:e.jsx(r,{children:"Side content area."})}),e.jsx(a,{headerTitle:"Main Content",className:"flex-[2] pb-5",children:e.jsx(r,{children:"Primary content area."})})]})]})},h={name:"Borders and Accent Bar",render:()=>e.jsxs("div",{className:"grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx(a,{variant:"neutral-subtle",radius:"md",borders:["top","bottom"],className:"p-4",children:e.jsx(r,{children:'borders=["top", "bottom"]'})}),e.jsx(a,{variant:"neutral-subtle",radius:"md",borders:["left"],className:"p-4",children:e.jsx(r,{children:'borders=["left"]'})}),e.jsx(a,{variant:"info-subtle",radius:"md",accent:"left",className:"p-4",children:e.jsx(r,{children:'accent="left" (all borders kept)'})}),e.jsx(a,{variant:"info-none",radius:"md",borders:"none",accent:"left",className:"p-4",children:e.jsx(r,{children:'borders="none" accent="left": a bar alone'})}),e.jsx(a,{variant:"success-subtle",radius:"lg",accent:"top",className:"p-4",children:e.jsx(r,{children:'accent="top" · success'})}),e.jsx(a,{variant:"error-subtle",radius:"none",accent:"left",className:"p-4",children:e.jsx(r,{children:'radius="none" · error'})})]})};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,N,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(N=o.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var v,C,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var S,A,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Title Sizes",
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {TITLE_SIZES.map(size => <Container key={size} headerTitle={\`Title size \${size}\`} headerTitleClassName={TITLE_SIZE_CLASSES[size]} className="pb-3" />)}
    </div>
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var L,H,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Base Surfaces (Default, Popover, Modal)",
  render: () => <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
      {BASE_SURFACES.map(v => <Container key={v} variant={v} className="px-3 py-3">
          <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
        </Container>)}
    </div>
}`,...(E=(H=l.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var q,I,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var D,R,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Legacy Aliases (Info, Success, Warning, Critical, Neutral)",
  render: () => <LegacyExamples />
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var P,k,z;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var O,U,V;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const We=["States","HeaderSlots","Footer","TitleSizes","BaseSurfaces","AllColorVariants","LegacyAliases","Nested","BordersAndAccent"];export{c as AllColorVariants,l as BaseSurfaces,h as BordersAndAccent,i as Footer,o as HeaderSlots,m as LegacyAliases,p as Nested,n as States,d as TitleSizes,We as __namedExportsOrder,Me as default};
