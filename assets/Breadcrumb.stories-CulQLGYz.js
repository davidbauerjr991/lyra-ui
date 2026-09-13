import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as n,a as c,b as e,c as s,d as a,f as d,e as C}from"./breadcrumb-x1r93SJg.js";import{C as u}from"./chevron-right-BP9ksYh_.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./kebab-menu-button-C4KbZmtO.js";import"./menu-radix-C_ibCbQi.js";import"./index-3Mvvhvj2.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-BuRg0FgW.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-left-CtyUClJQ.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-CSIGLv9X.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./ellipsis-DX1Uroy1.js";const ar={title:"Custom Primitives/Breadcrumb",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},m={name:"Default",render:()=>r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{onClick:()=>alert("Go to Dashboards"),children:"Dashboards"})}),r.jsx(a,{}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Dashboard Name"})})]})})},l={name:"Multiple Levels",render:()=>r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{onClick:()=>alert("Go to Dashboards"),children:"Dashboards"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(s,{onClick:()=>alert("Go to Sales"),children:"Sales"})}),r.jsx(a,{}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Q3 Pipeline"})})]})})},i={name:"With Ellipsis",render:()=>r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{onClick:()=>alert("Go to Dashboards"),children:"Dashboards"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(C,{items:[{id:"sales",label:"Sales",onClick:()=>alert("Go to Sales")},{id:"q2",label:"Q2",onClick:()=>alert("Go to Q2")},{id:"q3",label:"Q3",onClick:()=>alert("Go to Q3")}]})}),r.jsx(a,{}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Q3 Pipeline"})})]})})},t={name:"Custom Separator (Chevron)",render:()=>r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{onClick:()=>alert("Go to Dashboards"),children:"Dashboards"})}),r.jsx(a,{children:r.jsx(u,{className:"h-3.5 w-3.5",strokeWidth:1.5})}),r.jsx(e,{children:r.jsx(s,{onClick:()=>alert("Go to Sales"),children:"Sales"})}),r.jsx(a,{children:r.jsx(u,{className:"h-3.5 w-3.5",strokeWidth:1.5})}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Q3 Pipeline"})})]})})},o={name:"All Variants",render:()=>r.jsxs("div",{className:"flex flex-col gap-6 items-start",children:[r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Default (2 levels)"}),r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{children:"Dashboards"})}),r.jsx(a,{}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Dashboard Name"})})]})})]}),r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Multiple levels"}),r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{children:"Dashboards"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(s,{children:"Sales"})}),r.jsx(a,{}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Q3 Pipeline"})})]})})]}),r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"With ellipsis (click to open)"}),r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{children:"Dashboards"})}),r.jsx(a,{}),r.jsx(e,{children:r.jsx(C,{items:[{id:"sales",label:"Sales"},{id:"q2",label:"Q2"},{id:"q3",label:"Q3"}]})}),r.jsx(a,{}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Q3 Pipeline"})})]})})]}),r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Custom (chevron) separator"}),r.jsx(n,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{children:"Dashboards"})}),r.jsx(a,{children:r.jsx(u,{className:"h-3.5 w-3.5",strokeWidth:1.5})}),r.jsx(e,{"aria-current":"page",children:r.jsx(d,{children:"Q3 Pipeline"})})]})})]})]})};var b,p,B;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Dashboard Name</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(B=(p=m.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var h,x,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Multiple Levels",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Sales")}>Sales</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(j=(x=l.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,k,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "With Ellipsis",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis items={[{
          id: "sales",
          label: "Sales",
          onClick: () => alert("Go to Sales")
        }, {
          id: "q2",
          label: "Q2",
          onClick: () => alert("Go to Q2")
        }, {
          id: "q3",
          label: "Q3",
          onClick: () => alert("Go to Q3")
        }]} />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var I,S,f;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Custom Separator (Chevron)",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Sales")}>Sales</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,D,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Default (2 levels)</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Dashboard Name</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Multiple levels</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Sales</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With ellipsis (click to open)</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis items={[{
              id: "sales",
              label: "Sales"
            }, {
              id: "q2",
              label: "Q2"
            }, {
              id: "q3",
              label: "Q3"
            }]} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Custom (chevron) separator</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </BreadcrumbSeparator>
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const sr=["Default","MultipleLevels","WithEllipsis","CustomSeparator","AllVariants"];export{o as AllVariants,t as CustomSeparator,m as Default,l as MultipleLevels,i as WithEllipsis,sr as __namedExportsOrder,ar as default};
