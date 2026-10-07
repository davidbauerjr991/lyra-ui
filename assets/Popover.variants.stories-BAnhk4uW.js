import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as t}from"./popover-Cbqqiubp.js";import{B as r}from"./button-CLz1-b9g.js";import{M as x}from"./menu-BOmxrDJo.js";import{m as u}from"./Popover.shared-DRvzmvTb.js";import{E as b}from"./ellipsis-vertical-D6ttVBVO.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-CHxvM1hc.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./select-Ct-JPb8f.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./copy-CtBWyGKZ.js";import"./settings-B3RqFsd1.js";import"./trash-2-DTLo779S.js";const de={title:"Headless Primitives/Popover/Variants",component:t,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},a={name:"Menu Popover",render:()=>e.jsx(t,{placement:"bottom",showArrow:!1,bodyPadding:!1,content:e.jsx(x,{items:u,bare:!0,className:"w-[200px]"}),children:e.jsxs(r,{variant:"ghost",size:"sm",children:[e.jsx(b,{className:"h-4 w-4",strokeWidth:1.5}),"Actions"]})})},s={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["top","bottom","left","right"].map(o=>e.jsx(t,{placement:o,title:`Placement: ${o}`,content:e.jsx("div",{className:"pb-4",children:e.jsxs("p",{className:"lyra-body-md text-lyra-fg-secondary",children:["This popover opens to the ",e.jsx("strong",{children:o}),"."]})}),children:e.jsx(r,{variant:"outline",className:"w-full capitalize",children:o})},o))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Arrow variants"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{placement:"bottom",title:"With Arrow",showArrow:!0,content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Arrow is visible."})}),children:e.jsx(r,{variant:"outline",children:"With Arrow"})}),e.jsx(t,{placement:"bottom",title:"No Arrow",showArrow:!1,content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Arrow is hidden."})}),children:e.jsx(r,{variant:"outline",children:"No Arrow"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Title variants"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{placement:"bottom",title:"With Title",content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Title is shown in the header."})}),children:e.jsx(r,{variant:"outline",children:"With Title"})}),e.jsx(t,{placement:"bottom",content:e.jsx("div",{className:"py-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"No title header — content only."})}),children:e.jsx(r,{variant:"outline",children:"No Title"})})]})]})]})},n={name:"Screen Reader Hint",render:()=>e.jsx(t,{title:"Popover Title",screenReaderHint:!0,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary pt-2 pb-5",children:"Open with a screen reader to hear the hint."}),children:e.jsx(r,{children:"Open Popover"})})};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Menu Popover",
  render: () => <Popover placement="bottom" showArrow={false}
  // Menu's rows are edge-to-edge with their own p-1 inset — opt out
  // of Popover's default 20px body padding.
  bodyPadding={false} content={<Menu items={menuItems} bare className="w-[200px]" />}>
      <Button variant="ghost" size="sm">
        <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
        Actions
      </Button>
    </Popover>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-10 p-8">
      {/* Placements */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Placements</p>
        <div className="grid grid-cols-2 gap-4">
          {(["top", "bottom", "left", "right"] as const).map(placement => <Popover key={placement} placement={placement} title={\`Placement: \${placement}\`} content={<div className="pb-4">
                  <p className="lyra-body-md text-lyra-fg-secondary">
                    This popover opens to the <strong>{placement}</strong>.
                  </p>
                </div>}>
              <Button variant="outline" className="w-full capitalize">{placement}</Button>
            </Popover>)}
        </div>
      </div>

      {/* With / without arrow */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Arrow variants</p>
        <div className="flex gap-4">
          <Popover placement="bottom" title="With Arrow" showArrow content={<div className="pb-4"><p className="lyra-body-md text-lyra-fg-secondary">Arrow is visible.</p></div>}>
            <Button variant="outline">With Arrow</Button>
          </Popover>
          <Popover placement="bottom" title="No Arrow" showArrow={false} content={<div className="pb-4"><p className="lyra-body-md text-lyra-fg-secondary">Arrow is hidden.</p></div>}>
            <Button variant="outline">No Arrow</Button>
          </Popover>
        </div>
      </div>

      {/* With title / without title */}
      <div>
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-4">Title variants</p>
        <div className="flex gap-4">
          <Popover placement="bottom" title="With Title" content={<div className="pb-4"><p className="lyra-body-md text-lyra-fg-secondary">Title is shown in the header.</p></div>}>
            <Button variant="outline">With Title</Button>
          </Popover>
          <Popover placement="bottom" content={<div className="py-5"><p className="lyra-body-md text-lyra-fg-secondary">No title header — content only.</p></div>}>
            <Button variant="outline">No Title</Button>
          </Popover>
        </div>
      </div>
    </div>
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,v,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Screen Reader Hint",
  render: () => <Popover title="Popover Title" screenReaderHint content={<p className="lyra-body-md text-lyra-fg-secondary pt-2 pb-5">Open with a screen reader to hear the hint.</p>}>
      <Button>Open Popover</Button>
    </Popover>
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const ce=["MenuPopover","AllVariants","ScreenReaderHint"];export{s as AllVariants,a as MenuPopover,n as ScreenReaderHint,ce as __namedExportsOrder,de as default};
