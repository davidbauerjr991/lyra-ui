import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DhMLlvMY.js";import{w as v,u as y,e as x}from"./index-C3Z0PGzo.js";import{P as o}from"./popover-tSwa707i.js";import{B as t}from"./button-DGWscpRe.js";import{M as C}from"./menu-t1I_d-Gy.js";import{m as W}from"./Popover.shared-CTRhuNYE.js";import{E as V}from"./ellipsis-vertical-D6ttVBVO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BY5kmD2Q.js";import"./index-CBF9FTDx.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./container-header-ChWz-swr.js";import"./tooltip-B72fooV5.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-1evVQkiP.js";import"./badge-Bcxq6Iyh.js";import"./spinner-xIhFAlhc.js";import"./menu-item-uivF4bHz.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-CpMudak3.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-DBL60R1n.js";import"./circle-help-DYnzmdO5.js";import"./select-D9KdkaGD.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-wvqFL4jd.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./copy-CtBWyGKZ.js";import"./external-link-Ck0ibvsS.js";import"./settings-B3RqFsd1.js";import"./trash-2-DTLo779S.js";const Te={title:"Headless Primitives/Popover/Variants",component:o,tags:["!autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},c={name:"Menu Popover",render:()=>e.jsx(o,{placement:"bottom",showArrow:!1,bodyPadding:!1,content:e.jsx(C,{items:W,bare:!0,className:"w-[200px]"}),children:e.jsxs(t,{variant:"ghost",size:"sm",children:[e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5}),"Actions"]})})},d={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-10 p-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Placements"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["top","bottom","left","right"].map(r=>e.jsx(o,{placement:r,title:`Placement: ${r}`,content:e.jsx("div",{className:"pb-4",children:e.jsxs("p",{className:"lyra-body-md text-lyra-fg-secondary",children:["This popover opens to the ",e.jsx("strong",{children:r}),"."]})}),children:e.jsx(t,{variant:"outline",className:"w-full capitalize",children:r})},r))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Arrow variants"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{placement:"bottom",title:"With Arrow",showArrow:!0,content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Arrow is visible."})}),children:e.jsx(t,{variant:"outline",children:"With Arrow"})}),e.jsx(o,{placement:"bottom",title:"No Arrow",showArrow:!1,content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Arrow is hidden."})}),children:e.jsx(t,{variant:"outline",children:"No Arrow"})})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-body-sm-emphasis text-lyra-fg-secondary mb-4",children:"Title variants"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{placement:"bottom",title:"With Title",content:e.jsx("div",{className:"pb-4",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Title is shown in the header."})}),children:e.jsx(t,{variant:"outline",children:"With Title"})}),e.jsx(o,{placement:"bottom",content:e.jsx("div",{className:"py-5",children:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"No title header — content only."})}),children:e.jsx(t,{variant:"outline",children:"No Title"})})]})]})]})},m={name:"Screen Reader Hint",render:()=>e.jsx(o,{title:"Popover Title",screenReaderHint:!0,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary pt-2 pb-5",children:"Open with a screen reader to hear the hint."}),children:e.jsx(t,{children:"Open Popover"})})};function S(){const[r,n]=u.useState(!1),[h,s]=u.useState(!0),a=u.useRef(null);return e.jsxs("div",{className:"flex flex-col items-start gap-24 pt-24 pl-48",children:[e.jsx(o,{open:r,onOpenChange:n,virtualAnchorRef:a,placement:"bottom",align:"start",showArrow:!1,title:"Dial Pad",content:e.jsx("div",{className:"pb-5",children:e.jsx(t,{onClick:()=>{n(!1),s(!1)},children:"Connect"})}),children:e.jsx(t,{variant:"outline",children:"New Outbound"})}),h?e.jsx(t,{variant:"outline",onClick:i=>{a.current=i.currentTarget,n(!0)},children:"Redial"}):e.jsx(t,{variant:"ghost",onClick:()=>s(!0),children:"Reset"})]})}const p={name:"Virtual Anchor Removed While Closing",parameters:{layout:"fullscreen"},render:()=>e.jsx(S,{}),play:async({canvasElement:r})=>{const n=v(r),h=v(document.body);await y.click(await n.findByText("Redial"));const s=await h.findByText("Connect"),a=s.closest("[data-radix-popper-content-wrapper]"),i=a.getBoundingClientRect();if(await y.click(s),await new Promise(l=>requestAnimationFrame(()=>requestAnimationFrame(l))),a.isConnected){const l=a.getBoundingClientRect();await x(Math.round(l.top)).toBe(Math.round(i.top)),await x(Math.round(l.left)).toBe(Math.round(i.left))}}};var w,f,g;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,N,j;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var A,P,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Screen Reader Hint",
  render: () => <Popover title="Popover Title" screenReaderHint content={<p className="lyra-body-md text-lyra-fg-secondary pt-2 pb-5">Open with a screen reader to hear the hint.</p>}>
      <Button>Open Popover</Button>
    </Popover>
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var R,T,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Virtual Anchor Removed While Closing",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <VirtualAnchorRemovedDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(await canvas.findByText("Redial"));
    const connect = await body.findByText("Connect");
    const wrapper = connect.closest("[data-radix-popper-content-wrapper]") as HTMLElement;
    const before = wrapper.getBoundingClientRect();
    await userEvent.click(connect);
    // Let positioning re-run against the removed anchor (two frames).
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    // Still fading out: it must not have jumped to the window's top-left.
    if (wrapper.isConnected) {
      const during = wrapper.getBoundingClientRect();
      await expect(Math.round(during.top)).toBe(Math.round(before.top));
      await expect(Math.round(during.left)).toBe(Math.round(before.left));
    }
  }
}`,...(M=(T=p.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};const Me=["MenuPopover","AllVariants","ScreenReaderHint","VirtualAnchorRemovedWhileClosing"];export{d as AllVariants,c as MenuPopover,m as ScreenReaderHint,p as VirtualAnchorRemovedWhileClosing,Me as __namedExportsOrder,Te as default};
