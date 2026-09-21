import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./index-DhMLlvMY.js";import{A as n,a as Z,b as $,c as ee}from"./accordion-CGI9HJ8O.js";import{T as ae}from"./tag-DKZdDztl.js";import{B as ne}from"./button-C_xtDadR.js";import{M as i}from"./dashboard-card-C0mfwYFP.js";import{T as te,a as se,b as g,c as l,d as le,e as r}from"./table-5klnyyL8.js";import{C as re}from"./clock-C3xVexPO.js";import{B as ie}from"./box-DjPaLKGI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CojK3Emx.js";import"./index-3Mvvhvj2.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-Cjx2M-Ur.js";import"./index-CylpBFcA.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./index-1evVQkiP.js";import"./tooltip-B7WaxDQZ.js";import"./x-CzxgOx-T.js";import"./badge-CSIGLv9X.js";import"./container-Ccjj9lGu.js";import"./container-header-an86y9Fl.js";import"./separator-97dXnQFu.js";import"./filter-chip-RqH2l1l4.js";import"./error-icon-solid-eVlwMcX6.js";import"./select-DDPZKH4f.js";import"./index-pcZVUfq6.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./label-DV0nvecx.js";import"./circle-help-DYnzmdO5.js";import"./popover-DUzeR3mw.js";import"./index-BmfIz0--.js";import"./checkbox-BRQPSInb.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./search-CZxBQJsH.js";import"./kebab-menu-button-D0ZFfmrb.js";import"./menu-radix-C_ibCbQi.js";import"./index-BuRg0FgW.js";import"./index-DDAUwIz-.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./sparkline-D_MY-7Zh.js";import"./chart-C8WwCP2A.js";import"./pencil-IFm_bK0G.js";import"./refresh-cw-D4nVfeiS.js";import"./trash-2-DTLo779S.js";import"./search-input-BL7U0eKP.js";import"./clear-button-BKe3j28R.js";import"./menu-DHWjv2EM.js";import"./menu-item-4wA6Phz8.js";import"./input-BalbX2Cc.js";import"./sliders-horizontal-DYIYVQYC.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";const Na={title:"Headless Primitives/Accordion",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},s=e.jsx(ie,{className:"h-5 w-5",strokeWidth:1.5}),t=[{id:"1",title:"Section Title",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1. This area expands when the item is opened."})},{id:"2",title:"Section Title",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2. Any React node can go here."})},{id:"3",title:"Section Title",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 3."})}],o={render:()=>e.jsx(n,{items:t})},c={name:"All States",render:()=>e.jsx(n,{type:"multiple",defaultValues:["2"],items:[{...t[0]},{...t[1]},{id:"disabled",title:"Section Title",icon:s,disabled:!0,content:null}]})},d={name:"Single — One Open",render:()=>e.jsx(n,{items:t,defaultValue:"1"})},m={name:"Multiple — Many Open",render:()=>e.jsx(n,{type:"multiple",defaultValues:["1","3"],items:t})},p={name:"With Disabled Item",render:()=>e.jsx(n,{items:[t[0],{...t[1],disabled:!0},t[2]],defaultValue:"1"})},u={name:"No Icons",render:()=>e.jsx(n,{items:t.map(({icon:a,...y})=>y),defaultValue:"2"})},h={name:"With Subhead",render:()=>e.jsx(n,{items:[{id:"1",title:"Section Title",subhead:"Supporting description text",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1."})},{id:"2",title:"Section Title",subhead:"Supporting description text",icon:s,content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2."})},{id:"3",title:"Section Title",subhead:"Supporting description text",icon:s,disabled:!0,content:null}]})},oe=[{id:"1",when:"09/05/25 7:53 PM",agent:"Kevin Jensen",status:"Closed",queue:"CXi SME Email",skill:"Email_General"},{id:"2",when:"09/05/25 8:11 PM",agent:"Andres Arenas",status:"Closed",queue:"Chat_General",skill:"Chat_General"},{id:"3",when:"09/07/25 12:56 PM",agent:"KrishnaCharan Mohanrao",status:"Closed",queue:"CXi SME Email",skill:"Email_General"}],x={name:"Rich Header + Table Content",render:()=>e.jsx(n,{defaultValue:"1",items:[{id:"1",title:e.jsxs("span",{className:"inline-flex items-center gap-2",children:["Lily Chen",e.jsx(ae,{label:"open",variant:"success",shape:"pill"})]}),subhead:e.jsxs("span",{className:"flex flex-col gap-0.5",children:[e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Unaccompanied minor (age 11) stuck at ORD — connecting flight canceled"}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:["Atlas",e.jsx("span",{"aria-hidden":"true",children:"•"}),e.jsx(re,{className:"h-3 w-3",strokeWidth:1.5}),"Wait: 1m",e.jsx("span",{"aria-hidden":"true",children:"•"}),"CST-21009"]})]}),content:e.jsx("div",{className:"rounded-lyra-lg border border-lyra-border-subtle overflow-hidden",style:{height:160},children:e.jsxs(te,{children:[e.jsx(se,{children:e.jsxs(g,{className:"hover:bg-transparent",children:[e.jsx(l,{className:"flex-1",children:"Date/Time"}),e.jsx(l,{className:"flex-[1.3]",children:"Name"}),e.jsx(l,{className:"flex-1",children:"Status"}),e.jsx(l,{className:"flex-[1.3]",children:"Queue"}),e.jsx(l,{className:"flex-[1.3]",children:"Skill"})]})}),e.jsx(le,{children:oe.map(a=>e.jsxs(g,{children:[e.jsx(r,{className:"flex-1",children:a.when}),e.jsx(r,{className:"flex-[1.3]",children:a.agent}),e.jsx(r,{className:"flex-1",children:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx("span",{className:"h-2 w-2 rounded-full bg-lyra-status-critical-strong shrink-0","aria-hidden":"true"}),a.status]})}),e.jsx(r,{className:"flex-[1.3]",children:a.queue}),e.jsx(r,{className:"flex-[1.3]",children:a.skill})]},a.id))})]})})}]})},b={name:"With End Slot (Metrics)",render:()=>e.jsx(n,{items:[{id:"1",title:"Digital",subhead:"12 contacts in queue",endSlot:e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"flex-none",metric:{value:4,label:"Skills"}}),e.jsx(i,{className:"flex-none",metric:{value:8,label:"Contacts"}})]}),content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 1."})},{id:"2",title:"Inbound Voice",subhead:"5 contacts in queue",endSlot:e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"flex-none",metric:{value:2,label:"Skills"}}),e.jsx(i,{className:"flex-none",metric:{value:5,label:"Contacts"}})]}),content:e.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary",children:"Content for section 2."})}]})};function ce(){const[a,y]=Y.useState(!0);return e.jsxs("div",{className:"w-[420px]",children:[e.jsx(ne,{variant:"outline",size:"sm",onClick:()=>y(J=>!J),children:a?"Hide details":"Show details"}),e.jsx(Z,{type:"single",collapsible:!0,value:a?"details":"",onValueChange:()=>{},children:e.jsx($,{value:"details",className:"border-none",children:e.jsx(ee,{children:e.jsx("p",{className:"pt-3 lyra-body-md text-lyra-fg-secondary",children:"Collapsible content with the standard accordion height animation — no built-in trigger row, no divider; the button above owns the open state."})})})})]})}const f={render:()=>e.jsx(ce,{})};var N,S,T;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Accordion items={sampleItems} />
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,C,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var A,v,w;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Single — One Open",
  render: () => <Accordion items={sampleItems} defaultValue="1" />
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,I,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Multiple — Many Open",
  render: () => <Accordion type="multiple" defaultValues={["1", "3"]} items={sampleItems} />
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var W,V,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "With Disabled Item",
  render: () => <Accordion items={[sampleItems[0], {
    ...sampleItems[1],
    disabled: true
  }, sampleItems[2]]} defaultValue="1" />
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var O,E,R;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "No Icons",
  render: () => <Accordion items={sampleItems.map(({
    icon: _icon,
    ...item
  }) => item)} defaultValue="2" />
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,_,B;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(_=h.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,P,F;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(F=(P=x.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var K,L,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <HeadlessDemo />
}`,...(z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const Sa=["Default","AllStates","SingleOpen","MultipleOpen","WithDisabledItem","NoIcons","WithSubhead","WithRichHeaderAndTable","WithEndSlot","Headless"];export{c as AllStates,o as Default,f as Headless,m as MultipleOpen,u as NoIcons,d as SingleOpen,p as WithDisabledItem,b as WithEndSlot,x as WithRichHeaderAndTable,h as WithSubhead,Sa as __namedExportsOrder,Na as default};
