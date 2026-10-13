import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a as e}from"./container-D2ud9AWn.js";import{f as o}from"./Container.shared-C8FhVtPt.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./container-header-5uZSWjxx.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./badge-Bcxq6Iyh.js";import"./button-CRbHmIRe.js";import"./spinner-xIhFAlhc.js";import"./tag-D8yJ2lBD.js";import"./tabs-ClByxZoj.js";import"./kebab-menu-button-BsRniZjC.js";import"./menu-radix-9vcg5XDz.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";const $={title:"UI/ContainerFooter",component:e,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},t={name:"Default",parameters:{controls:{include:["Alignment","Border top","align","bordered"],sort:"none"}},args:{align:"right",bordered:!1},argTypes:{align:{name:"Alignment",control:"radio",options:["left","right","full"],description:"Where the buttons sit: left, right, or stretched to full width.",table:{category:"Appearance",defaultValue:{summary:"right"}}},bordered:{name:"Border top",control:"boolean",description:"Show a border along the top edge of the footer.",table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:n=>r.jsx("div",{className:"max-w-xl rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:r.jsx(e,{...n,actions:o},JSON.stringify(n))})},a={name:"All variants",render:()=>r.jsxs("div",{className:"flex flex-col divide-y divide-lyra-border-subtle max-w-xl rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden",children:[r.jsx(e,{align:"left",actions:o}),r.jsx(e,{align:"right",actions:o}),r.jsx(e,{align:"full",actions:o}),r.jsx(e,{align:"right",bordered:!0,actions:o})]})};var i,l,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      include: ["Alignment", "Border top", "align", "bordered"],
      sort: "none"
    }
  },
  args: {
    align: "right",
    bordered: false
  },
  argTypes: {
    align: {
      name: "Alignment",
      control: "radio",
      options: ["left", "right", "full"],
      description: "Where the buttons sit: left, right, or stretched to full width.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "right"
        }
      }
    },
    bordered: {
      name: "Border top",
      control: "boolean",
      description: "Show a border along the top edge of the footer.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args => <div className="max-w-xl rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      <ContainerFooter key={JSON.stringify(args)} {...args} actions={footerButtons} />
    </div>
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All variants",
  render: () => <div className="flex flex-col divide-y divide-lyra-border-subtle max-w-xl rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden">
      <ContainerFooter align="left" actions={footerButtons} />
      <ContainerFooter align="right" actions={footerButtons} />
      <ContainerFooter align="full" actions={footerButtons} />
      <ContainerFooter align="right" bordered actions={footerButtons} />
    </div>
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const rr=["Default","AllVariants"];export{a as AllVariants,t as Default,rr as __namedExportsOrder,$ as default};
