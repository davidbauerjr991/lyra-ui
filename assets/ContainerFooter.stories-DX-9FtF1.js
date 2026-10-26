import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a as s}from"./container-footer-BSIaMmWX.js";import{f as i}from"./Container.shared-4iJXl9OC.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./container-ipFdrjaG.js";import"./index-1evVQkiP.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./badge-DnlHYDBX.js";import"./button-DxuJ7r2Z.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./tag-Dcg-2iAh.js";import"./tabs-CPD8_j1Z.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";const oe={title:"Custom Primitives/ContainerFooter",component:s,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},e={name:"Default",parameters:{controls:{include:["Alignment","Border top","Scroll shadow","Scroll fade","align","bordered","scrollShadow","scrollFade"],sort:"none"}},args:{align:"right",bordered:!1,scrollShadow:!1,scrollFade:!1},argTypes:{align:{name:"Alignment",control:"radio",options:["left","right","full"],description:"Where the buttons sit: left, right, or stretched to full width.",table:{category:"Appearance",defaultValue:{summary:"right"}}},bordered:{name:"Border top",control:"boolean",description:"Show a border along the top edge of the footer.",if:{arg:"scrollFade",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}},scrollShadow:{name:"Scroll shadow",control:"boolean",description:"Show a shadow above the footer while content is scrolled behind it. Scroll the sample content to see it. Not available together with Scroll fade.",if:{arg:"scrollFade",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}},scrollFade:{name:"Scroll fade",control:"boolean",description:"Fade the content out into the footer while it is scrolled behind it (`scrollFade`), instead of cutting it off at a hard edge. Scroll the sample content to see it. Not available together with Scroll shadow.",if:{arg:"scrollShadow",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}}},render:t=>o.jsxs("div",{className:"max-h-56 max-w-xl overflow-y-auto rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",children:[Array.from({length:6},(d,r)=>o.jsxs("p",{className:"lyra-body-md text-lyra-fg-secondary px-4 py-3",children:["Sample content ",r+1,". Scroll this area to see the footer shadow when it is on."]},r)),o.jsx(s,{...t,className:"sticky bottom-0 bg-lyra-bg-surface-base",actions:i},JSON.stringify(t))]})};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  parameters: {
    controls: {
      include: ["Alignment", "Border top", "Scroll shadow", "Scroll fade", "align", "bordered", "scrollShadow", "scrollFade"],
      sort: "none"
    }
  },
  args: {
    align: "right",
    bordered: false,
    scrollShadow: false,
    scrollFade: false
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
      if: {
        arg: "scrollFade",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    scrollShadow: {
      name: "Scroll shadow",
      control: "boolean",
      description: "Show a shadow above the footer while content is scrolled behind it. Scroll the sample content to see it. Not available together with Scroll fade.",
      if: {
        arg: "scrollFade",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    scrollFade: {
      name: "Scroll fade",
      control: "boolean",
      description: "Fade the content out into the footer while it is scrolled behind it (\`scrollFade\`), instead of cutting it off at a hard edge. Scroll the sample content to see it. Not available together with Scroll shadow.",
      if: {
        arg: "scrollShadow",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  // The footer is pinned to the bottom of a scrolling region so the shadow
  // has something to scroll behind.
  render: args => <div className="max-h-56 max-w-xl overflow-y-auto rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      {Array.from({
      length: 6
    }, (_, i) => <p key={i} className="lyra-body-md text-lyra-fg-secondary px-4 py-3">
          Sample content {i + 1}. Scroll this area to see the footer shadow when it is on.
        </p>)}
      <ContainerFooter key={JSON.stringify(args)} {...args} className="sticky bottom-0 bg-lyra-bg-surface-base" actions={footerButtons} />
    </div>
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const te=["Default"];export{e as Default,te as __namedExportsOrder,oe as default};
