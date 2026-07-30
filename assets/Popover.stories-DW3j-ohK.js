import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as o}from"./popover-B46F7YEu.js";import{B as t}from"./button-C9HuGDNI.js";import{I as M}from"./input-B6wjqCOy.js";import{S as p}from"./select-B58CS87l.js";import{M as T}from"./menu-B5sfcyl8.js";import{E as C}from"./ellipsis-vertical-CZvSBcNM.js";import{C as E}from"./copy-BRsdvqrt.js";import{c as O}from"./createLucideIcon-DEcfmm_F.js";import{S as H}from"./settings-Ddbozet5.js";import{T as V}from"./trash-2-yAnBWR5t.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-5dOKg3EE.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./utils-BLSKlp9E.js";import"./index-C1YDQLuO.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./container-header-yODun0G6.js";import"./x-N8aIqrq2.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-go1ZjKcF.js";import"./error-icon-Jj0G9Pna.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-down-BRCsRsv-.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";import"./menu-item-CR5qklhf.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=O("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),We={title:"Headless Primitives/Popover",component:o,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},n={name:"Simple Popover",render:()=>e.jsx(o,{title:"Popover Title",placement:"bottom",content:e.jsxs("div",{className:"pb-5",children:[e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-1",children:"Contextual content related to the trigger element."}),e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-5",children:"If the popover is used for action confirmation, explain the consequences of the action here."}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{children:"Confirm"})]})]}),children:e.jsx(t,{children:"Open Popover"})})},r={name:"Menu Popover",render:()=>{const a=[{id:"duplicate",label:"Duplicate",icon:e.jsx(E,{className:"h-4 w-4",strokeWidth:1.5})},{id:"open",label:"Open in new tab",icon:e.jsx(z,{className:"h-4 w-4",strokeWidth:1.5})},{id:"settings",label:"Settings",icon:e.jsx(H,{className:"h-4 w-4",strokeWidth:1.5})},"separator",{id:"delete",label:"Delete",icon:e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5}),destructive:!0}];return e.jsx(o,{placement:"bottom",showArrow:!1,bodyPadding:!1,content:e.jsx(T,{items:a,bare:!0,className:"w-[200px]"}),children:e.jsxs(t,{variant:"ghost",size:"sm",children:[e.jsx(C,{className:"h-4 w-4",strokeWidth:1.5}),"Actions"]})})}},s={name:"Max Height Popover",render:()=>e.jsx(o,{title:"Long Content",placement:"bottom",maxHeight:"240px",content:e.jsx("div",{className:"pb-5 flex flex-col gap-3",children:Array.from({length:8},(a,d)=>e.jsxs("p",{className:"lyra-body-md text-lyra-fg-secondary",children:["Content row ",d+1," — this popover has a max height and scrolls."]},d))}),children:e.jsx(t,{children:"Scrollable Content"})})},l={name:"Max Width Popover",render:()=>e.jsx(o,{title:"Wide Popover",placement:"bottom",maxWidth:"560px",content:e.jsxs("div",{className:"pb-5 flex flex-col gap-4",children:[e.jsx(M,{label:"Name",placeholder:"Enter name"}),e.jsx(p,{label:"Type",options:[{value:"back-office",label:"Back Office"},{value:"knowledge",label:"Knowledge Worker"},{value:"bpo",label:"BPO"}]}),e.jsx(p,{label:"Region",options:[{value:"na1",label:"NA1"},{value:"eu1",label:"EU1"}]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-2",children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{children:"Save"})]})]}),children:e.jsx(t,{children:"Wide Form Popover"})})},i={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-6 p-8",children:["top","bottom","left","right"].map(a=>e.jsx(o,{placement:a,title:"Popover",content:e.jsx("div",{className:"pb-4",children:e.jsxs("p",{className:"lyra-body-md text-lyra-fg-secondary",children:["Placement: ",e.jsx("strong",{children:a})]})}),children:e.jsx(t,{variant:"outline",className:"w-full capitalize",children:a})},a))})},c={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["top","bottom","left","right"].map(a=>e.jsx(o,{placement:a,title:`Placement: ${a}`,content:e.jsx("div",{className:"pb-4",children:e.jsxs("p",{className:"lyra-body-md text-lyra-fg-secondary",children:["This popover opens to the ",e.jsx("strong",{children:a}),"."]})}),children:e.jsx(t,{variant:"outline",className:"w-full capitalize",children:a})},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Arrow variants"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{placement:"bottom",title:"With Arrow",showArrow:!0,content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Arrow is visible."})}),children:e.jsx(t,{variant:"outline",children:"With Arrow"})}),e.jsx(o,{placement:"bottom",title:"No Arrow",showArrow:!1,content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Arrow is hidden."})}),children:e.jsx(t,{variant:"outline",children:"No Arrow"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Title variants"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{placement:"bottom",title:"With Title",content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Title is shown in the header."})}),children:e.jsx(t,{variant:"outline",children:"With Title"})}),e.jsx(o,{placement:"bottom",content:e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"No title header — content only."})}),children:e.jsx(t,{variant:"outline",children:"No Title"})})]})]})]})};var m,h,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Simple Popover",
  render: () => <Popover title="Popover Title" placement="bottom" content={<div className="pb-5">
          <p className="lyra-body-md text-lyra-fg-secondary mb-1">
            Contextual content related to the trigger element.
          </p>
          <p className="lyra-body-md text-lyra-fg-secondary mb-5">
            If the popover is used for action confirmation, explain the
            consequences of the action here.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </div>
        </div>}>
      <Button>Open Popover</Button>
    </Popover>
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,u,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Menu Popover",
  render: () => {
    const items: MenuEntry[] = [{
      id: "duplicate",
      label: "Duplicate",
      icon: <Copy className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "open",
      label: "Open in new tab",
      icon: <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
    }, {
      id: "settings",
      label: "Settings",
      icon: <Settings className="h-4 w-4" strokeWidth={1.5} />
    }, "separator", {
      id: "delete",
      label: "Delete",
      icon: <Trash2 className="h-4 w-4" strokeWidth={1.5} />,
      destructive: true
    }];
    return <Popover placement="bottom" showArrow={false}
    // Menu's rows are edge-to-edge with their own p-1 inset — opt out
    // of Popover's default 20px body padding.
    bodyPadding={false} content={<Menu items={items} bare className="w-[200px]" />}>
        <Button variant="ghost" size="sm">
          <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
          Actions
        </Button>
      </Popover>;
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Max Height Popover",
  render: () => <Popover title="Long Content" placement="bottom" maxHeight="240px" content={<div className="pb-5 flex flex-col gap-3">
          {Array.from({
      length: 8
    }, (_, i) => <p key={i} className="lyra-body-md text-lyra-fg-secondary">
              Content row {i + 1} — this popover has a max height and scrolls.
            </p>)}
        </div>}>
      <Button>Scrollable Content</Button>
    </Popover>
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var N,j,P;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Max Width Popover",
  render: () => <Popover title="Wide Popover" placement="bottom" maxWidth="560px" content={<div className="pb-5 flex flex-col gap-4">
          <Input label="Name" placeholder="Enter name" />
          <Select label="Type" options={[{
      value: "back-office",
      label: "Back Office"
    }, {
      value: "knowledge",
      label: "Knowledge Worker"
    }, {
      value: "bpo",
      label: "BPO"
    }]} />
          <Select label="Region" options={[{
      value: "na1",
      label: "NA1"
    }, {
      value: "eu1",
      label: "EU1"
    }]} />
          <div className="flex justify-end gap-2 mt-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>}>
      <Button>Wide Form Popover</Button>
    </Popover>
}`,...(P=(j=l.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var w,B,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 p-8">
      {(["top", "bottom", "left", "right"] as const).map(placement => <Popover key={placement} placement={placement} title="Popover" content={<div className="pb-4">
              <p className="lyra-body-md text-lyra-fg-secondary">
                Placement: <strong>{placement}</strong>
              </p>
            </div>}>
          <Button variant="outline" className="w-full capitalize">
            {placement}
          </Button>
        </Popover>)}
    </div>
}`,...(W=(B=i.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var A,k,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
          <Popover placement="bottom" content={<div className="py-4"><p className="lyra-body-md text-lyra-fg-secondary">No title header — content only.</p></div>}>
            <Button variant="outline">No Title</Button>
          </Popover>
        </div>
      </div>
    </div>
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const Ae=["SimplePopover","MenuPopover","MaxHeightPopover","MaxWidthPopover","Placements","AllVariants"];export{c as AllVariants,s as MaxHeightPopover,l as MaxWidthPopover,r as MenuPopover,i as Placements,n as SimplePopover,Ae as __namedExportsOrder,We as default};
