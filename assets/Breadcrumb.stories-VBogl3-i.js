import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-DhMLlvMY.js";import{B,d as l,a as j,b as c,f as O,c as A,e as D}from"./breadcrumb-B7SFl9AG.js";import{F as M,C as S,a as y,b as d,c as T,d as R,e as I}from"./Breadcrumb.shared-CAfLYp8P.js";import{C as F}from"./chevron-right-BP9ksYh_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./kebab-menu-button-ELtDHAkh.js";import"./menu-radix-CtpLdDaB.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-left-CtyUClJQ.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-CJVmnMhy.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";const me={title:"Custom Primitives/Breadcrumb",component:B,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function _({levels:o="two",separator:C="slash",links:L="buttons",appearance:m="auto",maxItems:u="none",collapseOnOverflow:h=!1}){const[f,b]=w.useState(null),r=C==="chevron"?e.jsx(F,{className:"h-3.5 w-3.5",strokeWidth:1.5}):void 0,p=n=>e.jsx(c,{children:e.jsx(A,{href:L==="href"?`#${n.toLowerCase().replace(/\s+/g,"-")}`:void 0,appearance:m==="auto"?void 0:m,onClick:a=>{var v;(v=a==null?void 0:a.preventDefault)==null||v.call(a),b(n)},children:n})},n);let t=null,s=S;return o==="three"?(t=e.jsxs(e.Fragment,{children:[p(y),e.jsx(l,{children:r})]}),s=d):o==="deep"?(t=e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(D,{items:[y,T,R].map(n=>({id:n,label:n,onClick:()=>b(n)}))})}),e.jsx(l,{children:r})]}),s=d):o==="five"&&(t=e.jsx(e.Fragment,{children:M.slice(1,-1).map(n=>e.jsxs(w.Fragment,{children:[p(n),e.jsx(l,{children:r})]},n))}),s=d),e.jsxs("div",{className:h?"w-[480px] max-w-full resize-x overflow-hidden border border-dashed border-lyra-border-subtle p-2":void 0,children:[e.jsx(B,{children:e.jsxs(j,{maxItems:u==="none"?void 0:Number(u),collapseOnOverflow:h,children:[p(I),e.jsx(l,{children:r}),t,e.jsx(c,{"aria-current":"page",children:e.jsx(O,{children:s})})]})}),f&&e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:["Last clicked: ",f]})]})}const i={parameters:{controls:{include:["Levels","Separator","Links","Appearance","Max items","Collapse on overflow","levels","separator","links","appearance","maxItems","collapseOnOverflow"],sort:"none"}},args:{levels:"two",separator:"slash",links:"buttons",appearance:"auto",maxItems:"none",collapseOnOverflow:!1},argTypes:{levels:{name:"Levels",control:"radio",options:["two","three","deep","five"],labels:{two:"Two",three:"Three",deep:"Deep (manual ellipsis)",five:"Five (plain)"},description:'Two levels (default), three levels, a deep trail with the middle collapsed by hand behind an ellipsis, or a plain five-crumb trail for trying "Max items" and "Collapse on overflow".',table:{category:"Content"}},separator:{name:"Separator",control:"radio",options:["slash","chevron"],description:'The divider between crumbs — "/" (default) or a chevron icon.',table:{category:"Appearance"}},links:{name:"Links",control:"radio",options:["buttons","href"],labels:{buttons:"Buttons (onClick)",href:"Real links (href)"},description:"Parent crumbs as buttons with `onClick` (default), or real `<a href>` links (`href`) that can be opened in a new tab, copied and previewed.",table:{category:"Behavior",defaultValue:{summary:"buttons"}}},appearance:{name:"Appearance",control:"radio",options:["auto","default","link"],labels:{auto:"Auto (link when href)",default:"Default (gray)",link:"Link (blue, underline on hover)"},description:"How parent crumbs look (`appearance`). Auto uses the link look for `href` crumbs and today's gray look for buttons.",table:{category:"Appearance",defaultValue:{summary:"auto"}}},maxItems:{name:"Max items",control:"select",options:["none","3","4"],description:'Most crumbs to show before the middle ones fold into a "…" menu (`maxItems` on `BreadcrumbList`). Try it with Levels "Five (plain)": 4 shows "Dashboards / … / Q3 / Q3 Pipeline".',table:{category:"Behavior",defaultValue:{summary:"none"}}},collapseOnOverflow:{name:"Collapse on overflow",control:"boolean",description:'When the trail doesn\'t fit, fold crumbs into the "…" menu until it does (`collapseOnOverflow` on `BreadcrumbList`). The demo puts the trail in a box you can resize from its corner.',table:{category:"Behavior",defaultValue:{summary:"false"}}}},render:o=>e.jsx(_,{...o},JSON.stringify(o))};var k,x,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  // Curated via \`controls.include\` (not by disabling props on \`meta\`) so
  // the Docs page's autodocs table still lists every real Breadcrumb prop
  // — only this story's own Controls panel is scoped down to the two args
  // its render function actually reads.
  parameters: {
    controls: {
      include: ["Levels", "Separator", "Links", "Appearance", "Max items", "Collapse on overflow", "levels", "separator", "links", "appearance", "maxItems", "collapseOnOverflow"],
      sort: "none"
    }
  },
  args: {
    levels: "two",
    separator: "slash",
    links: "buttons",
    appearance: "auto",
    maxItems: "none",
    collapseOnOverflow: false
  },
  argTypes: {
    levels: {
      name: "Levels",
      control: "radio",
      options: ["two", "three", "deep", "five"],
      labels: {
        two: "Two",
        three: "Three",
        deep: "Deep (manual ellipsis)",
        five: "Five (plain)"
      },
      description: 'Two levels (default), three levels, a deep trail with the middle collapsed by hand behind an ellipsis, or a plain five-crumb trail for trying "Max items" and "Collapse on overflow".',
      table: {
        category: "Content"
      }
    },
    separator: {
      name: "Separator",
      control: "radio",
      options: ["slash", "chevron"],
      description: 'The divider between crumbs — "/" (default) or a chevron icon.',
      table: {
        category: "Appearance"
      }
    },
    links: {
      name: "Links",
      control: "radio",
      options: ["buttons", "href"],
      labels: {
        buttons: "Buttons (onClick)",
        href: "Real links (href)"
      },
      description: "Parent crumbs as buttons with \`onClick\` (default), or real \`<a href>\` links (\`href\`) that can be opened in a new tab, copied and previewed.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "buttons"
        }
      }
    },
    appearance: {
      name: "Appearance",
      control: "radio",
      options: ["auto", "default", "link"],
      labels: {
        auto: "Auto (link when href)",
        default: "Default (gray)",
        link: "Link (blue, underline on hover)"
      },
      description: "How parent crumbs look (\`appearance\`). Auto uses the link look for \`href\` crumbs and today's gray look for buttons.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "auto"
        }
      }
    },
    maxItems: {
      name: "Max items",
      control: "select",
      options: ["none", "3", "4"],
      description: 'Most crumbs to show before the middle ones fold into a "…" menu (\`maxItems\` on \`BreadcrumbList\`). Try it with Levels "Five (plain)": 4 shows "Dashboards / … / Q3 / Q3 Pipeline".',
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "none"
        }
      }
    },
    collapseOnOverflow: {
      name: "Collapse on overflow",
      control: "boolean",
      description: 'When the trail doesn\\'t fit, fold crumbs into the "…" menu until it does (\`collapseOnOverflow\` on \`BreadcrumbList\`). The demo puts the trail in a box you can resize from its corner.',
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo whenever a control changes — \`useState\`'s
  // initial value only applies on first mount.
  <BreadcrumbDemo key={JSON.stringify(args)} {...args} />
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const ue=["Default"];export{i as Default,ue as __namedExportsOrder,me as default};
