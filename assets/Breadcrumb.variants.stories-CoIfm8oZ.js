import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./index-DhMLlvMY.js";import{B as d,a as u,b as a,c as l,d as o,f as B,e as Z}from"./breadcrumb-DuojP_LY.js";import{P as J}from"./page-header-CmidXqoq.js";import{e,a as n,b as i,F as m,C as I,c as rr,d as er}from"./Breadcrumb.shared-CAfLYp8P.js";import{C as L}from"./chevron-right-BP9ksYh_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./kebab-menu-button-CUREWany.js";import"./menu-radix-9vcg5XDz.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-left-CtyUClJQ.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-BIS9woDA.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";import"./tooltip-DKTByY8R.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";const Or={title:"Custom Primitives/Breadcrumb/Variants",component:d,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},p={name:"Two Levels",render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(a,{children:r.jsx(l,{onClick:()=>alert(`Go to ${e}`),children:e})}),r.jsx(o,{}),r.jsx(a,{"aria-current":"page",children:r.jsx(B,{children:I})})]})})},b={name:"Multiple Levels",render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(a,{children:r.jsx(l,{onClick:()=>alert(`Go to ${e}`),children:e})}),r.jsx(o,{}),r.jsx(a,{children:r.jsx(l,{onClick:()=>alert(`Go to ${n}`),children:n})}),r.jsx(o,{}),r.jsx(a,{"aria-current":"page",children:r.jsx(B,{children:i})})]})})},x={name:"With Ellipsis",render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(a,{children:r.jsx(l,{onClick:()=>alert(`Go to ${e}`),children:e})}),r.jsx(o,{}),r.jsx(a,{children:r.jsx(Z,{items:[n,rr,er].map(s=>({id:s,label:s,onClick:()=>alert(`Go to ${s}`)}))})}),r.jsx(o,{}),r.jsx(a,{"aria-current":"page",children:r.jsx(B,{children:i})})]})})},h={name:"Chevron Separator",render:()=>r.jsx(d,{children:r.jsxs(u,{children:[r.jsx(a,{children:r.jsx(l,{onClick:()=>alert(`Go to ${e}`),children:e})}),r.jsx(o,{children:r.jsx(L,{className:"h-3.5 w-3.5",strokeWidth:1.5})}),r.jsx(a,{children:r.jsx(l,{onClick:()=>alert(`Go to ${n}`),children:n})}),r.jsx(o,{children:r.jsx(L,{className:"h-3.5 w-3.5",strokeWidth:1.5})}),r.jsx(a,{"aria-current":"page",children:r.jsx(B,{children:i})})]})})},S={name:"Inside PageHeader",render:()=>r.jsx(J,{title:I,breadcrumb:[{label:e,onClick:()=>alert(`Go to ${e}`)},{label:n,onClick:()=>alert(`Go to ${n}`)}]})};function t({labels:s,href:K=!1,...X}){return r.jsx(d,{children:r.jsx(u,{...X,children:s.map((c,M)=>r.jsxs(Y.Fragment,{children:[M>0&&r.jsx(o,{}),r.jsx(a,{"aria-current":M===s.length-1?"page":void 0,children:M===s.length-1?r.jsx(B,{children:c}):K?r.jsx(l,{href:`#${c.toLowerCase()}`,children:c}):r.jsx(l,{onClick:()=>alert(`Go to ${c}`),children:c})})]},c))})})}const C={name:"Real Links",render:()=>r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsx(t,{labels:[e,I],href:!0}),r.jsx(t,{labels:[e,n,i],href:!0}),r.jsx(J,{title:i,breadcrumb:[{label:e,href:"#dashboards"},{label:n,href:"#sales"}]})]})},R={name:"Max Items",render:()=>r.jsxs("div",{className:"flex flex-col gap-6",children:[r.jsx(t,{labels:m.slice(1),maxItems:4}),r.jsx(t,{labels:m,maxItems:4}),r.jsx(t,{labels:m,maxItems:4,href:!0})]})},j={name:"Collapse On Overflow",render:()=>r.jsxs("div",{className:"flex flex-col gap-6",children:[["w-[520px]","w-[320px]","w-[200px]"].map(s=>r.jsx("div",{className:`${s} max-w-full border border-dashed border-lyra-border-subtle p-2`,children:r.jsx(t,{labels:m,collapseOnOverflow:!0})},s)),r.jsx("div",{className:"w-[480px] max-w-full resize-x overflow-hidden border border-dashed border-lyra-border-subtle p-2",children:r.jsx(t,{labels:m,collapseOnOverflow:!0})})]})};var A,_,f;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Two Levels",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(\`Go to \${CRUMB_DASHBOARDS}\`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_DASHBOARD_NAME}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(f=(_=p.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var g,U,k;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Multiple Levels",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(\`Go to \${CRUMB_DASHBOARDS}\`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(\`Go to \${CRUMB_SALES}\`)}>
            {CRUMB_SALES}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_PIPELINE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(k=(U=b.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var v,E,P;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With Ellipsis",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(\`Go to \${CRUMB_DASHBOARDS}\`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis items={[CRUMB_SALES, CRUMB_Q2, CRUMB_Q3].map(label => ({
          id: label,
          label,
          onClick: () => alert(\`Go to \${label}\`)
        }))} />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_PIPELINE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(P=(E=x.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var D,O,w;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Chevron Separator",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(\`Go to \${CRUMB_DASHBOARDS}\`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(\`Go to \${CRUMB_SALES}\`)}>
            {CRUMB_SALES}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_PIPELINE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(w=(O=h.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var H,N,$;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Inside PageHeader",
  render: () => <PageHeader title={CRUMB_DASHBOARD_NAME} breadcrumb={[{
    label: CRUMB_DASHBOARDS,
    onClick: () => alert(\`Go to \${CRUMB_DASHBOARDS}\`)
  }, {
    label: CRUMB_SALES,
    onClick: () => alert(\`Go to \${CRUMB_SALES}\`)
  }]} />
}`,...($=(N=S.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var G,T,F;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Real Links",
  render: () => <div className="flex flex-col gap-6">
      <PlainTrail labels={[CRUMB_DASHBOARDS, CRUMB_DASHBOARD_NAME]} href />
      <PlainTrail labels={[CRUMB_DASHBOARDS, CRUMB_SALES, CRUMB_PIPELINE]} href />
      <PageHeader title={CRUMB_PIPELINE} breadcrumb={[{
      label: CRUMB_DASHBOARDS,
      href: "#dashboards"
    }, {
      label: CRUMB_SALES,
      href: "#sales"
    }]} />
    </div>
}`,...(F=(T=C.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var W,y,V;R.parameters={...R.parameters,docs:{...(W=R.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Max Items",
  render: () => <div className="flex flex-col gap-6">
      <PlainTrail labels={FIVE_CRUMBS.slice(1)} maxItems={4} />
      <PlainTrail labels={FIVE_CRUMBS} maxItems={4} />
      <PlainTrail labels={FIVE_CRUMBS} maxItems={4} href />
    </div>
}`,...(V=(y=R.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var Q,z,q;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Collapse On Overflow",
  render: () => <div className="flex flex-col gap-6">
      {["w-[520px]", "w-[320px]", "w-[200px]"].map(width => <div key={width} className={\`\${width} max-w-full border border-dashed border-lyra-border-subtle p-2\`}>
          <PlainTrail labels={FIVE_CRUMBS} collapseOnOverflow />
        </div>)}
      <div className="w-[480px] max-w-full resize-x overflow-hidden border border-dashed border-lyra-border-subtle p-2">
        <PlainTrail labels={FIVE_CRUMBS} collapseOnOverflow />
      </div>
    </div>
}`,...(q=(z=j.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};const wr=["TwoLevels","MultipleLevels","WithEllipsis","ChevronSeparator","InPageHeader","RealLinks","MaxItems","CollapseOnOverflow"];export{h as ChevronSeparator,j as CollapseOnOverflow,S as InPageHeader,R as MaxItems,b as MultipleLevels,C as RealLinks,p as TwoLevels,x as WithEllipsis,wr as __namedExportsOrder,Or as default};
