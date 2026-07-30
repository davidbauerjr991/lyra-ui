import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as a}from"./accordion-BPLp3YEU.js";import{T as Q}from"./tag-BrkT8Lrr.js";import{M as i}from"./dashboard-card-CqzgVQWI.js";import{T as U,a as X,b as f,c as l,d as J,e as r}from"./table-h7okUFLr.js";import{C as z}from"./clock-xCVatdV-.js";import{B as Y}from"./box-Gl1aLw8q.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./utils-BLSKlp9E.js";import"./chevron-down-BRCsRsv-.js";import"./createLucideIcon-DEcfmm_F.js";import"./index-1evVQkiP.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./x-N8aIqrq2.js";import"./container-DdHZIvij.js";import"./container-header-yODun0G6.js";import"./separator-CVEAaEyG.js";import"./filter-chip-D33rqkk0.js";import"./error-icon-Jj0G9Pna.js";import"./select-B58CS87l.js";import"./Combination-CgjdYmp6.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-DjGdKyh0.js";import"./circle-help-Bj2MpUE2.js";import"./popover-B46F7YEu.js";import"./index-5dOKg3EE.js";import"./index-C1YDQLuO.js";import"./checkbox-B4rCSk8i.js";import"./index-CoT6TaLL.js";import"./minus-DYrWPnXn.js";import"./check-DrRFj5bn.js";import"./scroll-chevron-DwoFwDLx.js";import"./chevron-right-DZKRY3zX.js";import"./chevron-left-C6DiQdwt.js";import"./chevron-up-DaHnz2kU.js";import"./search-aUstRSOi.js";import"./kebab-menu-button-CH1sKapZ.js";import"./menu-radix-BLTbpF2b.js";import"./index-DUC4V_Df.js";import"./ellipsis-vertical-CZvSBcNM.js";import"./sparkline-8DyBXVpj.js";import"./chart-BRx7W-gw.js";import"./pencil-DdhzNlrF.js";import"./refresh-cw-BqNuqggj.js";import"./trash-2-yAnBWR5t.js";import"./search-input-BnaDnVK2.js";import"./clear-button-vlto_6tR.js";import"./button-BxQnLjgV.js";import"./index-BDkVnVO1.js";import"./badge-go1ZjKcF.js";import"./menu-B5sfcyl8.js";import"./menu-item-CR5qklhf.js";import"./input-B6wjqCOy.js";import"./sliders-horizontal-_yHPUfpC.js";import"./panel-left-CWVFPQ0g.js";import"./panel-right-CgZ2ABSM.js";import"./arrow-up-C-teBDU4.js";const ia={title:"Headless Primitives/Accordion",component:a,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s=e.jsx(Y,{className:"h-5 w-5",strokeWidth:1.5}),n=[{id:"1",title:"Section Title",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1. This area expands when the item is opened."})},{id:"2",title:"Section Title",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2. Any React node can go here."})},{id:"3",title:"Section Title",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 3."})}],o={render:()=>e.jsx(a,{items:n})},c={name:"All States",render:()=>e.jsx(a,{type:"multiple",defaultValues:["2"],items:[{...n[0]},{...n[1]},{id:"disabled",title:"Section Title",icon:s,disabled:!0,content:null}]})},d={name:"Single — One Open",render:()=>e.jsx(a,{items:n,defaultValue:"1"})},m={name:"Multiple — Many Open",render:()=>e.jsx(a,{type:"multiple",defaultValues:["1","3"],items:n})},p={name:"With Disabled Item",render:()=>e.jsx(a,{items:[n[0],{...n[1],disabled:!0},n[2]],defaultValue:"1"})},u={name:"No Icons",render:()=>e.jsx(a,{items:n.map(({icon:t,...L})=>L),defaultValue:"2"})},h={name:"With Subhead",render:()=>e.jsx(a,{items:[{id:"1",title:"Section Title",subhead:"Supporting description text",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1."})},{id:"2",title:"Section Title",subhead:"Supporting description text",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2."})},{id:"3",title:"Section Title",subhead:"Supporting description text",icon:s,disabled:!0,content:null}]})},Z=[{id:"1",when:"09/05/25 7:53 PM",agent:"Kevin Jensen",status:"Closed",queue:"CXi SME Email",skill:"Email_General"},{id:"2",when:"09/05/25 8:11 PM",agent:"Andres Arenas",status:"Closed",queue:"Chat_General",skill:"Chat_General"},{id:"3",when:"09/07/25 12:56 PM",agent:"KrishnaCharan Mohanrao",status:"Closed",queue:"CXi SME Email",skill:"Email_General"}],x={name:"Rich Header + Table Content",render:()=>e.jsx(a,{defaultValue:"1",items:[{id:"1",title:e.jsxs("span",{className:"inline-flex items-center gap-2",children:["Lily Chen",e.jsx(Q,{label:"open",variant:"success",shape:"pill"})]}),subhead:e.jsxs("span",{className:"flex flex-col gap-0.5",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Unaccompanied minor (age 11) stuck at ORD — connecting flight canceled"}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:["Atlas",e.jsx("span",{"aria-hidden":"true",children:"•"}),e.jsx(z,{className:"h-3 w-3",strokeWidth:1.5}),"Wait: 1m",e.jsx("span",{"aria-hidden":"true",children:"•"}),"CST-21009"]})]}),content:e.jsx("div",{className:"rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",style:{height:160},children:e.jsxs(U,{children:[e.jsx(X,{children:e.jsxs(f,{className:"hover:bg-transparent",children:[e.jsx(l,{className:"flex-1",children:"Date/Time"}),e.jsx(l,{className:"flex-[1.3]",children:"Name"}),e.jsx(l,{className:"flex-1",children:"Status"}),e.jsx(l,{className:"flex-[1.3]",children:"Queue"}),e.jsx(l,{className:"flex-[1.3]",children:"Skill"})]})}),e.jsx(J,{children:Z.map(t=>e.jsxs(f,{children:[e.jsx(r,{className:"flex-1",children:t.when}),e.jsx(r,{className:"flex-[1.3]",children:t.agent}),e.jsx(r,{className:"flex-1",children:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx("span",{className:"h-2 w-2 rounded-full bg-lyra-status-critical-strong shrink-0","aria-hidden":"true"}),t.status]})}),e.jsx(r,{className:"flex-[1.3]",children:t.queue}),e.jsx(r,{className:"flex-[1.3]",children:t.skill})]},t.id))})]})})}]})},b={name:"With End Slot (Metrics)",render:()=>e.jsx(a,{items:[{id:"1",title:"Digital",subhead:"12 contacts in queue",endSlot:e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"flex-none",metric:{value:4,label:"Skills"}}),e.jsx(i,{className:"flex-none",metric:{value:8,label:"Contacts"}})]}),content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1."})},{id:"2",title:"Inbound Voice",subhead:"5 contacts in queue",endSlot:e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"flex-none",metric:{value:2,label:"Skills"}}),e.jsx(i,{className:"flex-none",metric:{value:5,label:"Contacts"}})]}),content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2."})}]})};var y,g,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Accordion items={sampleItems} />
}`,...(N=(g=o.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var T,S,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "All States",
  render: () => <Accordion type="multiple" defaultValues={["2"]} items={[{
    ...sampleItems[0]
  }, {
    ...sampleItems[1]
  }, {
    id: "disabled",
    title: "Section Title",
    icon,
    disabled: true,
    content: null
  }]} />
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,A,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Single — One Open",
  render: () => <Accordion items={sampleItems} defaultValue="1" />
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var I,w,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Multiple — Many Open",
  render: () => <Accordion type="multiple" defaultValues={["1", "3"]} items={sampleItems} />
}`,...(M=(w=m.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var v,H,W;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With Disabled Item",
  render: () => <Accordion items={[sampleItems[0], {
    ...sampleItems[1],
    disabled: true
  }, sampleItems[2]]} defaultValue="1" />
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var V,O,R;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "No Icons",
  render: () => <Accordion items={sampleItems.map(({
    icon: _icon,
    ...item
  }) => item)} defaultValue="2" />
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,E,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "With Subhead",
  render: () => <Accordion items={[{
    id: "1",
    title: "Section Title",
    subhead: "Supporting description text",
    icon,
    content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 1.</p>
  }, {
    id: "2",
    title: "Section Title",
    subhead: "Supporting description text",
    icon,
    content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 2.</p>
  }, {
    id: "3",
    title: "Section Title",
    subhead: "Supporting description text",
    icon,
    disabled: true,
    content: null
  }]} />
}`,...(q=(E=h.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var _,B,G;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Rich Header + Table Content",
  render: () => <Accordion defaultValue="1" items={[{
    id: "1",
    title: <span className="inline-flex items-center gap-2">
              Lily Chen
              <Tag label="open" variant="success" shape="pill" />
            </span>,
    subhead: <span className="flex flex-col gap-0.5">
              <span className="lyra-body-md text-lyra-fg-default">
                Unaccompanied minor (age 11) stuck at ORD — connecting flight canceled
              </span>
              <span className="inline-flex items-center gap-1">
                Atlas
                <span aria-hidden="true">•</span>
                <Clock className="h-3 w-3" strokeWidth={1.5} />
                Wait: 1m
                <span aria-hidden="true">•</span>
                CST-21009
              </span>
            </span>,
    content: <div className="rounded-lyra-lg border border-lyra-border-subtle overflow-hidden" style={{
      height: 160
    }}>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="flex-1">Date/Time</TableHead>
                    <TableHead className="flex-[1.3]">Name</TableHead>
                    <TableHead className="flex-1">Status</TableHead>
                    <TableHead className="flex-[1.3]">Queue</TableHead>
                    <TableHead className="flex-[1.3]">Skill</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {richInteractions.map(row => <TableRow key={row.id}>
                      <TableCell className="flex-1">{row.when}</TableCell>
                      <TableCell className="flex-[1.3]">{row.agent}</TableCell>
                      <TableCell className="flex-1">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-lyra-status-critical-strong shrink-0" aria-hidden="true" />
                          {row.status}
                        </span>
                      </TableCell>
                      <TableCell className="flex-[1.3]">{row.queue}</TableCell>
                      <TableCell className="flex-[1.3]">{row.skill}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </div>
  }]} />
}`,...(G=(B=x.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var P,F,K;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "With End Slot (Metrics)",
  render: () => <Accordion items={[{
    id: "1",
    title: "Digital",
    subhead: "12 contacts in queue",
    endSlot: <>
              <Metric className="flex-none" metric={{
        value: 4,
        label: "Skills"
      }} />
              <Metric className="flex-none" metric={{
        value: 8,
        label: "Contacts"
      }} />
            </>,
    content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 1.</p>
  }, {
    id: "2",
    title: "Inbound Voice",
    subhead: "5 contacts in queue",
    endSlot: <>
              <Metric className="flex-none" metric={{
        value: 2,
        label: "Skills"
      }} />
              <Metric className="flex-none" metric={{
        value: 5,
        label: "Contacts"
      }} />
            </>,
    content: <p className="lyra-body-md text-lyra-fg-secondary">Content for section 2.</p>
  }]} />
}`,...(K=(F=b.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const oa=["Default","AllStates","SingleOpen","MultipleOpen","WithDisabledItem","NoIcons","WithSubhead","WithRichHeaderAndTable","WithEndSlot"];export{c as AllStates,o as Default,m as MultipleOpen,u as NoIcons,d as SingleOpen,p as WithDisabledItem,b as WithEndSlot,x as WithRichHeaderAndTable,h as WithSubhead,oa as __namedExportsOrder,ia as default};
