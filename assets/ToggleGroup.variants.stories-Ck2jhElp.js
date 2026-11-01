import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-DhMLlvMY.js";import{T as a}from"./toggle-group-BD0QSWsY.js";import{c as p}from"./utils-BLSKlp9E.js";import{m as r}from"./ToggleGroup.shared-Cq9XI9v6.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-BnyLRSaS.js";import"./index-DOha2xPu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-C-870Axa.js";import"./index-Bbt6qZUg.js";import"./kebab-menu-button-RTa_65iY.js";import"./menu-radix-Bz1NtL8K.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-DnlHYDBX.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./list-erMbBqpB.js";import"./layout-grid-Be0M4-D4.js";import"./calendar-t4SqpSdm.js";import"./clock-C3xVexPO.js";import"./settings-B3RqFsd1.js";import"./pencil-IFm_bK0G.js";import"./copy-CtBWyGKZ.js";import"./trash-2-DTLo779S.js";const he={title:"Custom Primitives/Toggle Group/Variants",component:a,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n="inline-flex items-center rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-base p-0.5",t={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-80",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Off"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"With icons"}),e.jsx(a,{items:r(3,!1,{icons:!0}),defaultValue:"a"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Icon only"}),e.jsx(a,{items:r(3,!1,{icons:!0,label:!1}),defaultValue:"a"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"With menu"}),e.jsx(a,{items:r(3,!1,{menu:!0}),defaultValue:"a"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"With badge"}),e.jsx(a,{items:r(3,!1,{badge:!0}),defaultValue:"a"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"With alert badge"}),e.jsx(a,{items:r(3,!1,{badge:!0,badgeType:"alert"}),defaultValue:"a"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Disabled"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}],disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Hover"}),e.jsx("div",{className:n,children:e.jsx("button",{type:"button",className:"px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-surface-shell border border-lyra-border-soft transition-colors",children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Press"}),e.jsx("div",{className:n,children:e.jsx("button",{type:"button",className:"px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-disabled border border-lyra-border-soft transition-colors",children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"On"}),e.jsx(a,{items:[{value:"x",label:"Toggle"}],value:"x",onValueChange:()=>{}})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Selected Hover"}),e.jsx("div",{className:n,children:e.jsx("button",{type:"button",className:p("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors","bg-lyra-state-hover-active-subtle border border-lyra-border-active text-lyra-fg-active-strong"),children:"Toggle"})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:"Selected Press"}),e.jsx("div",{className:n,children:e.jsx("button",{type:"button",className:p("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors","bg-lyra-state-pressed-active-subtle border border-lyra-border-active text-lyra-fg-active-strong"),children:"Toggle"})})]})]})},o={name:"Full Width",render:()=>{const[l,s]=u.useState("main");return e.jsx("div",{className:"w-80 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-3",children:e.jsx(a,{fullWidth:!0,showTruncationTooltip:!0,items:[{value:"main",label:"Alex Kowalski (CST-10000)"},{value:"panel",label:"Search"}],value:l,onValueChange:y=>y&&s(y)})})}};function k(){const[l,s]=u.useState("a");return e.jsx(a,{ariaLabel:"Layout",items:r(3,!1,{icons:!0,label:!1}),value:l,onValueChange:s})}const d={name:"Icon Only",render:()=>e.jsx(k,{})};function C(){const[l,s]=u.useState("queue");return e.jsx(a,{ariaLabel:"Source",itemMaxWidth:120,showTruncationTooltip:!0,items:[{value:"queue",label:"My queue"},{value:"team",label:"Team escalations and callbacks"},{value:"all",label:"All open interactions"}],value:l,onValueChange:s})}const c={name:"Max Item Width",render:()=>e.jsx(C,{})};function M(){const[l,s]=u.useState("");return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{ariaLabel:"Outcome",allowDeselect:!0,items:[{value:"resolved",label:"Resolved"},{value:"follow-up",label:"Follow-up"},{value:"escalated",label:"Escalated"}],value:l,onValueChange:s}),e.jsxs("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Selected: ",l||"none"]})]})}const i={name:"Allow Deselect",render:()=>e.jsx(M,{})},m={name:"Disabled With Reason",render:()=>e.jsxs("div",{className:"flex flex-col gap-1.5",children:[e.jsx("span",{id:"tg-reason-label",className:"lyra-label text-lyra-fg-default",children:"Home layout"}),e.jsx(a,{ariaLabelledBy:"tg-reason-label",ariaDescribedBy:"tg-reason-text",items:[{value:"one",label:"One column"},{value:"two",label:"Two columns"}],value:"one",disabled:!0}),e.jsx("p",{id:"tg-reason-text",className:"lyra-body-sm text-lyra-fg-secondary",children:"Advanced layout is on."})]})};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col gap-6 w-80">
      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Off</span>
        <ToggleGroup items={[{
        value: "x",
        label: "Toggle"
      }]} />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">With icons</span>
        <ToggleGroup items={makeItems(3, false, {
        icons: true
      })} defaultValue="a" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Icon only</span>
        <ToggleGroup items={makeItems(3, false, {
        icons: true,
        label: false
      })} defaultValue="a" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">With menu</span>
        <ToggleGroup items={makeItems(3, false, {
        menu: true
      })} defaultValue="a" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">With badge</span>
        <ToggleGroup items={makeItems(3, false, {
        badge: true
      })} defaultValue="a" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">With alert badge</span>
        <ToggleGroup items={makeItems(3, false, {
        badge: true,
        badgeType: "alert"
      })} defaultValue="a" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Disabled</span>
        <ToggleGroup items={[{
        value: "x",
        label: "Toggle"
      }]} disabled />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Hover</span>
        <div className={previewShell}>
          <button type="button" className="px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-surface-shell border border-lyra-border-soft transition-colors">
            Toggle
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Press</span>
        <div className={previewShell}>
          <button type="button" className="px-4 py-1.5 lyra-body-md rounded-lyra-sm text-lyra-fg-default bg-lyra-bg-disabled border border-lyra-border-soft transition-colors">
            Toggle
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">On</span>
        <ToggleGroup items={[{
        value: "x",
        label: "Toggle"
      }]} value="x" onValueChange={() => {}} />
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Selected Hover</span>
        <div className={previewShell}>
          <button type="button" className={cn("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors", "bg-lyra-state-hover-active-subtle border border-lyra-border-active text-lyra-fg-active-strong")}>
            Toggle
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="lyra-body-sm text-lyra-fg-secondary">Selected Press</span>
        <div className={previewShell}>
          <button type="button" className={cn("px-4 py-1.5 lyra-body-md rounded-lyra-sm font-medium transition-colors", "bg-lyra-state-pressed-active-subtle border border-lyra-border-active text-lyra-fg-active-strong")}>
            Toggle
          </button>
        </div>
      </div>
    </div>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,v,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Full Width",
  render: () => {
    const [value, setValue] = useState("main");
    return <div className="w-80 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-3">
        <ToggleGroup fullWidth showTruncationTooltip items={[{
        value: "main",
        label: "Alex Kowalski (CST-10000)"
      }, {
        value: "panel",
        label: "Search"
      }]} value={value} onValueChange={next => next && setValue(next)} />
      </div>;
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,j,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Icon Only",
  render: () => <IconOnlyDemo />
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var V,w,S;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Max Item Width",
  render: () => <MaxItemWidthDemo />
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var W,D,I;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Allow Deselect",
  render: () => <AllowDeselectDemo />
}`,...(I=(D=i.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var A,O,G;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Disabled With Reason",
  render: () => <div className="flex flex-col gap-1.5">
      <span id="tg-reason-label" className="lyra-label text-lyra-fg-default">
        Home layout
      </span>
      <ToggleGroup ariaLabelledBy="tg-reason-label" ariaDescribedBy="tg-reason-text" items={[{
      value: "one",
      label: "One column"
    }, {
      value: "two",
      label: "Two columns"
    }]} value="one" disabled />
      <p id="tg-reason-text" className="lyra-body-sm text-lyra-fg-secondary">
        Advanced layout is on.
      </p>
    </div>
}`,...(G=(O=m.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Ne=["AllVariants","FullWidth","IconOnly","MaxItemWidth","AllowDeselect","DisabledWithReason"];export{t as AllVariants,i as AllowDeselect,m as DisabledWithReason,o as FullWidth,d as IconOnly,c as MaxItemWidth,Ne as __namedExportsOrder,he as default};
