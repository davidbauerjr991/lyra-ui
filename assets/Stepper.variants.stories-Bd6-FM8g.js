import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as r}from"./stepper-Bz3e8iEv.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./createLucideIcon-aII_sYFw.js";import"./separator-97dXnQFu.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./progress-bar-BUzWCp3j.js";import"./index-C-870Axa.js";import"./button-DxuJ7r2Z.js";import"./tooltip-E_6y_wR5.js";import"./index-DOha2xPu.js";import"./index-Bbt6qZUg.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./container-footer-BSIaMmWX.js";import"./check-Dr3vGcdY.js";const ae={title:"Custom Primitives/Stepper/Variants",component:r,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-base"}}},s=l=>[0,1,2].map(()=>({title:"Step title",optional:l})),t=({children:l})=>e.jsx("p",{className:"mb-3 lyra-body-sm-emphasis text-lyra-fg-secondary",children:l}),i={render:()=>e.jsxs("div",{className:"flex w-full max-w-3xl flex-col gap-10",children:[e.jsxs("div",{children:[e.jsx(t,{children:"Inline, fill"}),e.jsx(r,{"aria-label":"Progress",steps:s(!0),currentStep:1,fill:!0})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Inline, compact"}),e.jsx(r,{"aria-label":"Progress",steps:s(!0),currentStep:1})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Below, fill"}),e.jsx(r,{"aria-label":"Progress",steps:s(!0),currentStep:1,labelPlacement:"below",fill:!0})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Below, compact"}),e.jsx(r,{"aria-label":"Progress",steps:s(!0),currentStep:1,labelPlacement:"below"})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Without the Optional caption"}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:1,fill:!0})]})]})},n={render:()=>e.jsx("div",{className:"flex flex-wrap gap-16",children:[["Inline","inline",!1],["Inline, Optional","inline",!0],["Below","below",!1],["Below, Optional","below",!0]].map(([l,a,m])=>e.jsxs("div",{className:"flex h-[380px] w-44 flex-col",children:[e.jsx(t,{children:l}),e.jsx("div",{className:"min-h-0 flex-1",children:e.jsx(r,{"aria-label":"Progress",orientation:"vertical",labelPlacement:a,steps:s(m),currentStep:1,fill:!0})})]},l))})},o={render:()=>e.jsx("div",{className:"flex w-full max-w-3xl flex-col gap-10",children:[["Not started (step 1 current)",0],["In progress (step 2 current)",1],["Last step current",2],["All finished",3]].map(([l,a])=>e.jsxs("div",{children:[e.jsx(t,{children:l}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:a,fill:!0})]},l))})},p={render:()=>e.jsx("div",{className:"flex flex-wrap items-start gap-10",children:[["First step, Optional",0,!0],["Middle step, Optional",1,!0],["Last step",2,!1],["All finished",3,!1]].map(([l,a,m])=>e.jsxs("div",{className:"w-[375px] rounded-lyra-md border border-lyra-border-subtle p-4",children:[e.jsx(t,{children:l}),e.jsx(r,{"aria-label":"Progress",steps:s(m),currentStep:a,fill:!0})]},l))})},c={render:()=>e.jsxs("div",{className:"flex w-full max-w-3xl flex-col gap-10",children:[e.jsxs("div",{children:[e.jsx(t,{children:"Whole stepper disabled"}),e.jsx(r,{"aria-label":"Progress",steps:s(!0),currentStep:1,fill:!0,disabled:!0})]}),e.jsxs("div",{children:[e.jsx(t,{children:"One step disabled (step 3)"}),e.jsx(r,{"aria-label":"Progress",steps:[{title:"Step title"},{title:"Step title"},{title:"Step title",disabled:!0}],currentStep:1,fill:!0})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Title below, vertical"}),e.jsx("div",{className:"flex gap-16",children:e.jsx("div",{className:"h-72 w-44",children:e.jsx(r,{"aria-label":"Progress",orientation:"vertical",labelPlacement:"below",steps:s(!0),currentStep:1,fill:!0,disabled:!0})})})]})]})},d={render:()=>{const l=[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4",error:!0}];return e.jsxs("div",{className:"flex w-full max-w-3xl flex-col gap-10",children:[e.jsxs("div",{children:[e.jsx(t,{children:"Inline, error on step 4"}),e.jsx(r,{"aria-label":"Progress",steps:l,currentStep:2,fill:!0})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Below, error on the current step"}),e.jsx(r,{"aria-label":"Progress",labelPlacement:"below",steps:[{title:"Step 1"},{title:"Step 2",error:!0},{title:"Step 3"}],currentStep:1,fill:!0})]}),e.jsxs("div",{className:"h-72 w-44",children:[e.jsx(t,{children:"Vertical"}),e.jsx(r,{"aria-label":"Progress",orientation:"vertical",steps:l,currentStep:2,fill:!0})]})]})}},u={render:()=>e.jsxs("div",{className:"flex w-full max-w-3xl flex-col gap-12",children:[e.jsxs("div",{children:[e.jsx(t,{children:"Below, left"}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:1,fill:!0,navigation:"below"})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Below, split"}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:1,fill:!0,navigation:"below",navigationAlign:"split"})]}),e.jsx("div",{className:"rounded-lyra-md border border-lyra-border-subtle",children:e.jsxs("div",{className:"p-4",children:[e.jsx(t,{children:"Footer, right (a bordered bar)"}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:1,fill:!0,navigation:"footer"})]})}),e.jsx("div",{className:"rounded-lyra-md border border-lyra-border-subtle",children:e.jsxs("div",{className:"p-4",children:[e.jsx(t,{children:"Footer, split, last step (Next becomes Finish)"}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:2,fill:!0,navigation:"footer",navigationAlign:"split"})]})}),e.jsxs("div",{children:[e.jsx(t,{children:"Styled with Button props (success Next, ghost Back, size sm)"}),e.jsx(r,{"aria-label":"Progress",steps:s(!1),currentStep:1,fill:!0,navigation:"below",backButtonProps:{variant:"ghost",size:"sm"},nextButtonProps:{variant:"success",size:"sm"}})]})]})};var x,v,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-3xl flex-col gap-10">
      <div>
        <Caption>Inline, fill</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} fill />
      </div>
      <div>
        <Caption>Inline, compact</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} />
      </div>
      <div>
        <Caption>Below, fill</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} labelPlacement="below" fill />
      </div>
      <div>
        <Caption>Below, compact</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} labelPlacement="below" />
      </div>
      <div>
        <Caption>Without the Optional caption</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill />
      </div>
    </div>
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,h,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-16">
      {([["Inline", "inline", false], ["Inline, Optional", "inline", true], ["Below", "below", false], ["Below, Optional", "below", true]] as const).map(([caption, placement, optional]) => <div key={caption} className="flex h-[380px] w-44 flex-col">
          <Caption>{caption}</Caption>
          <div className="min-h-0 flex-1">
            <Stepper aria-label="Progress" orientation="vertical" labelPlacement={placement} steps={withOptional(optional)} currentStep={1} fill />
          </div>
        </div>)}
    </div>
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,w,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-3xl flex-col gap-10">
      {([["Not started (step 1 current)", 0], ["In progress (step 2 current)", 1], ["Last step current", 2], ["All finished", 3]] as const).map(([caption, current]) => <div key={caption}>
          <Caption>{caption}</Caption>
          <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={current} fill />
        </div>)}
    </div>
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,N,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-start gap-10">
      {([["First step, Optional", 0, true], ["Middle step, Optional", 1, true], ["Last step", 2, false], ["All finished", 3, false]] as const).map(([caption, current, optional]) => <div key={caption} className="w-[375px] rounded-lyra-md border border-lyra-border-subtle p-4">
          <Caption>{caption}</Caption>
          <Stepper aria-label="Progress" steps={withOptional(optional)} currentStep={current} fill />
        </div>)}
    </div>
}`,...(C=(N=p.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var O,y,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-3xl flex-col gap-10">
      <div>
        <Caption>Whole stepper disabled</Caption>
        <Stepper aria-label="Progress" steps={withOptional(true)} currentStep={1} fill disabled />
      </div>
      <div>
        <Caption>One step disabled (step 3)</Caption>
        <Stepper aria-label="Progress" steps={[{
        title: "Step title"
      }, {
        title: "Step title"
      }, {
        title: "Step title",
        disabled: true
      }]} currentStep={1} fill />
      </div>
      <div>
        <Caption>Title below, vertical</Caption>
        <div className="flex gap-16">
          <div className="h-72 w-44">
            <Stepper aria-label="Progress" orientation="vertical" labelPlacement="below" steps={withOptional(true)} currentStep={1} fill disabled />
          </div>
        </div>
      </div>
    </div>
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var I,k,z;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      title: "Step 1"
    }, {
      title: "Step 2"
    }, {
      title: "Step 3"
    }, {
      title: "Step 4",
      error: true
    }];
    return <div className="flex w-full max-w-3xl flex-col gap-10">
        <div>
          <Caption>Inline, error on step 4</Caption>
          <Stepper aria-label="Progress" steps={steps} currentStep={2} fill />
        </div>
        <div>
          <Caption>Below, error on the current step</Caption>
          <Stepper aria-label="Progress" labelPlacement="below" steps={[{
          title: "Step 1"
        }, {
          title: "Step 2",
          error: true
        }, {
          title: "Step 3"
        }]} currentStep={1} fill />
        </div>
        <div className="h-72 w-44">
          <Caption>Vertical</Caption>
          <Stepper aria-label="Progress" orientation="vertical" steps={steps} currentStep={2} fill />
        </div>
      </div>;
  }
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,F,V;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-3xl flex-col gap-12">
      <div>
        <Caption>Below, left</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="below" />
      </div>
      <div>
        <Caption>Below, split</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="below" navigationAlign="split" />
      </div>
      <div className="rounded-lyra-md border border-lyra-border-subtle">
        <div className="p-4">
          <Caption>Footer, right (a bordered bar)</Caption>
          <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="footer" />
        </div>
      </div>
      <div className="rounded-lyra-md border border-lyra-border-subtle">
        <div className="p-4">
          <Caption>Footer, split, last step (Next becomes Finish)</Caption>
          <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={2} fill navigation="footer" navigationAlign="split" />
        </div>
      </div>
      <div>
        <Caption>Styled with Button props (success Next, ghost Back, size sm)</Caption>
        <Stepper aria-label="Progress" steps={withOptional(false)} currentStep={1} fill navigation="below" backButtonProps={{
        variant: "ghost",
        size: "sm"
      }} nextButtonProps={{
        variant: "success",
        size: "sm"
      }} />
      </div>
    </div>
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const ie=["Horizontal","Vertical","States","Compact","Disabled","ErrorState","Navigation"];export{p as Compact,c as Disabled,d as ErrorState,i as Horizontal,u as Navigation,o as States,n as Vertical,ie as __namedExportsOrder,ae as default};
