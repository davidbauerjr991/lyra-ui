import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a}from"./container-D2ud9AWn.js";import{C as V,d as k,f as s,B as r,e as M,a as x,h as W,H as Z,L as q,b as T,T as G,c as $}from"./Container.shared-C8FhVtPt.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./container-header-5uZSWjxx.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./badge-Bcxq6Iyh.js";import"./button-CRbHmIRe.js";import"./spinner-xIhFAlhc.js";import"./tag-D8yJ2lBD.js";import"./tabs-ClByxZoj.js";import"./kebab-menu-button-BsRniZjC.js";import"./menu-radix-9vcg5XDz.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";const Fe={title:"Custom Primitives/Container/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={name:"States (Header options)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{className:"p-5",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:"No header"})}),e.jsx(a,{headerTitle:"Title only",className:"pb-5",children:e.jsx(r,{children:"Header with a title."})}),e.jsx(a,{headerTitle:"Title and subtitle",headerSubhead:"Supporting description",className:"pb-5",children:e.jsx(r,{children:"Header with a subtitle."})}),e.jsx(a,{headerTitle:"Divider below header",headerBordered:!0,className:"pb-5",children:e.jsx(r,{belowDivider:!0,children:"Header with a divider (headerBordered)."})}),e.jsx(a,{headerIcon:T,headerSubhead:"Icon and subtitle, no title",className:"pb-5",children:e.jsx(r,{children:"Header renders without title text."})}),e.jsx(a,{headerTitle:"Title with icon",headerIcon:T,className:"pb-5",children:e.jsx(r,{children:"Header with icon."})})]})},i={name:"Header Slots (Badge, Alert Tag, Actions, Tabs)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{headerTitle:"Title badge",headerTitleBadge:M,className:"pb-5",children:e.jsx(r,{children:"Badge right after the title."})}),e.jsx(a,{headerTitle:"Alert tag above",headerTopSlot:x,className:"pb-5",children:e.jsx(r,{children:"Status tag above the title."})}),e.jsx(a,{headerTitle:"Alert tag inline",headerTitleBadge:x,className:"pb-5",children:e.jsx(r,{children:"Status tag inline after the title."})}),e.jsx(a,{headerTitle:"Actions",headerActions:W,className:"pb-5",children:e.jsx(r,{children:"Action button on the right."})}),e.jsx(a,{headerTitle:"Tabs",headerSubhead:"Tab row below the title",headerTabs:e.jsx(Z,{}),className:"pb-5",children:e.jsx(r,{belowDivider:!0,children:"Tabs supply their own bottom border."})})]})},o={name:"Footer (Left, Right, Full Width, Divider)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 max-w-3xl",children:[e.jsx(a,{headerTitle:"Left",footerActions:s,footerAlign:"left",children:e.jsx(r,{children:"Buttons grouped at the start."})}),e.jsx(a,{headerTitle:"Right (default)",footerActions:s,children:e.jsx(r,{children:"Buttons grouped at the end."})}),e.jsx(a,{headerTitle:"Full width",footerActions:s,footerAlign:"full",children:e.jsx(r,{children:"Buttons stretch equally."})}),e.jsx(a,{headerTitle:"Divider",footerActions:s,footerBordered:!0,children:e.jsx(r,{children:"Border above the footer."})})]})},l={name:"Title Sizes",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:G.map(t=>e.jsx(a,{headerTitle:`Title size ${t}`,headerTitleClassName:$[t],className:"pb-3"},t))})},d={name:"Base Surfaces (Default, Popover, Modal)",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-3 w-full max-w-3xl",children:k.map(t=>e.jsx(a,{variant:t,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:t})},t))})},c={name:"All Colour Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-3xl",children:[V.map(({label:t,variants:U})=>e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:t}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:U.map(h=>e.jsx(a,{variant:h,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:h})},h))})]},t)),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-2",children:"Base surfaces"}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:k.map(t=>e.jsx(a,{variant:t,className:"px-3 py-3",children:e.jsx("p",{className:"lyra-body-sm text-lyra-fg-default",children:t})},t))})]})]})},m={name:"Legacy Aliases (Info, Success, Warning, Critical, Neutral)",render:()=>e.jsx(q,{})},p={name:"Nested Layout",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{headerTitle:"Header Section",className:"pb-5",children:e.jsx(r,{children:"Top-level container."})}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{headerTitle:"Left Panel",className:"flex-1 pb-5",children:e.jsx(r,{children:"Side content area."})}),e.jsx(a,{headerTitle:"Main Content",className:"flex-[2] pb-5",children:e.jsx(r,{children:"Primary content area."})})]})]})};var g,u,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,f,N;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(f=i.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var v,B,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var C,j,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Title Sizes",
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {TITLE_SIZES.map(size => <Container key={size} headerTitle={\`Title size \${size}\`} headerTitleClassName={TITLE_SIZE_CLASSES[size]} className="pb-3" />)}
    </div>
}`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var w,L,H;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Base Surfaces (Default, Popover, Modal)",
  render: () => <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
      {BASE_SURFACES.map(v => <Container key={v} variant={v} className="px-3 py-3">
          <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
        </Container>)}
    </div>
}`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var E,I,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var P,z,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const Pe=["States","HeaderSlots","Footer","TitleSizes","BaseSurfaces","AllColorVariants","LegacyAliases","Nested"];export{c as AllColorVariants,d as BaseSurfaces,o as Footer,i as HeaderSlots,m as LegacyAliases,p as Nested,n as States,l as TitleSizes,Pe as __namedExportsOrder,Fe as default};
