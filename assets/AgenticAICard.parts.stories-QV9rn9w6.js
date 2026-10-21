import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DhMLlvMY.js";import{A as f,S as x,M as n,a as b,W as y,b as v,c as P,P as o,L as N}from"./agentic-parts-CntPBPPf.js";import{A as l}from"./ai-process-DKgPSbgS.js";import{B as S}from"./button-D4EbXLB3.js";import{C as k}from"./citation-CApf8U1b.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./ai-card-Y6384akd.js";import"./accordion-aheRZdMc.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";import"./container-footer-CU6hpAek.js";import"./container-header-CBuOVN33.js";import"./tooltip-E_6y_wR5.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./x-CzxgOx-T.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./external-link-Ck0ibvsS.js";import"./tag-CyzxDD7d.js";import"./badge-BpOJAIFg.js";import"./progress-bar-CuQqxcLC.js";import"./show-more-zdMS6Dq2.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./skeleton-DWrO-N3-.js";import"./container-DJxnCK6G.js";import"./inline-notification-CgfrlBB5.js";import"./icon-J1e0iagV.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./menu-item-uivF4bHz.js";import"./link-Ds4ntLOd.js";import"./circle-CiULE-tD.js";import"./circle-x-DWiWalIH.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./file-text-DK8c8V5C.js";import"./lock-CXrNv7Qc.js";import"./clock-C3xVexPO.js";import"./check-Dr3vGcdY.js";const we={title:"UI/AgenticAICard/Parts",component:f,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function t({name:a,spec:i,children:s}){return e.jsxs("div",{className:"flex flex-col gap-3 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-4",children:[e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default",children:a}),s,e.jsx("code",{className:"lyra-body-xs text-lyra-fg-secondary",children:i})]})}const r={name:"All parts",render:()=>{const[a,i]=h.useState(0),s=["The tablet keeps freezing with a blinking red light."," It is inside the 24-month warranty."," A replacement claim is being raised."],c=s.slice(0,a+1).join(""),u=s.slice(0,a).join("");return e.jsxs("div",{className:"grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(340px,1fr))] items-start gap-4",children:[e.jsx(t,{name:"Status checklist (Spinner ring)",spec:"items: [{ label, detail?, state, tag? }]  ·  state: done | needs-you | failed | running | todo",children:e.jsx(x,{items:[{label:"Order found",detail:"NR-10871",state:"done"},{label:"Approve the replacement",state:"needs-you",tag:"Needs you"},{label:"Update the customer record",state:"failed",tag:"Failed"},{label:"Book technician",state:"running"},{label:"Email the summary",state:"todo"}]})}),e.jsx(t,{name:"Progress steps (AIProcess · progress)",spec:'<AIProcess variant="progress" title meta steps={[{ id, label, status, at? }]} />',children:e.jsx(l,{variant:"progress",title:"Refund review",meta:"Back office · stage 3 of 5",steps:[{id:"1",label:"Review opened",status:"done",at:"2:00"},{id:"2",label:"Photo verified",status:"done",at:"2:01"},{id:"3",label:"Waiting on approval",status:"active"},{id:"4",label:"Refund issued",status:"pending"}]})}),e.jsxs(t,{name:"Meter (ProgressBars or Tags)",spec:"levels, value, tones?, label?, display: bars | tags",children:[e.jsx(n,{levels:["Negative","Neutral","Positive"],value:"Neutral",label:"Sentiment"}),e.jsx(n,{display:"tags",levels:["Angry","Frustrated","Neutral","Calmer","Satisfied"],value:"Calmer",label:"Mood"})]}),e.jsxs(t,{name:"Streamed text",spec:"text, previous?, foldAfter?, markFor?",children:[e.jsx(b,{text:c,previous:u},a),e.jsx(S,{variant:"outline",size:"sm",className:"self-start",onClick:()=>i(g=>(g+1)%s.length),children:"Next update"})]}),e.jsx(t,{name:"Waiting state (Skeleton)",spec:"message, lines?",children:e.jsx(y,{message:"Nothing to summarise yet.",lines:2})}),e.jsx(t,{name:"Memory list",spec:"title, items: string[]",children:e.jsx(v,{title:"From Experience Memory",items:["Paid by PayPal on 3 of the last 5 orders","Asked about the launch on 26 Sep"]})}),e.jsx(t,{name:"Citation",spec:"text, citations: [{ text, source }]",children:e.jsx(k,{text:"Tablets carry a 24-month parts warranty that runs from the delivery date.",citations:[{text:"24-month parts warranty that runs from the delivery date",source:"Tablet warranty coverage, section 2"}]})}),e.jsx(t,{name:"Source links (Link + Tag)",spec:"links: [{ title, href?, tag?, tagVariant?, internal? }]",children:e.jsx(P,{links:[{title:"Tablet warranty coverage",tag:"New",tagVariant:"info"},{title:"Board faults — replace, not repair",internal:!0}]})}),e.jsx(t,{name:"Numbered steps (AIProcess · numbered)",spec:'<AIProcess variant="numbered" steps={[{ id, label, description? }]} />',children:e.jsx(l,{variant:"numbered",steps:[{id:"1",label:"Confirm the delivery date",description:"It is on the account."},{id:"2",label:"Raise a replacement claim",description:"Choose “Board fault” as the reason."}]})}),e.jsxs(t,{name:"Policy note (InlineNotification)",spec:"tone: within | outside, heading?",children:[e.jsx(o,{children:"Within your limit: refunds up to $500 with a photo check."}),e.jsx(o,{tone:"outside",children:"Over your limit: refunds above $500 need a supervisor."})]}),e.jsx(t,{name:"Line items (MenuItem)",spec:"rows: [{ name, detail?, amount? }]",children:e.jsx(N,{rows:[{name:"Espresso machine",detail:"NR-10871 · 25 Sep",amount:"$412.00"},{name:"Milk frother",detail:"NR-10544 · 18 Jun",amount:"$49.00"}]})})]})}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "All parts",
  render: () => {
    const [text, setText] = React.useState(0);
    const SENTENCES = ["The tablet keeps freezing with a blinking red light.", " It is inside the 24-month warranty.", " A replacement claim is being raised."];
    const full = SENTENCES.slice(0, text + 1).join("");
    const prev = SENTENCES.slice(0, text).join("");
    return <div className="grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(340px,1fr))] items-start gap-4">
        <Panel name="Status checklist (Spinner ring)" spec="items: [{ label, detail?, state, tag? }]  ·  state: done | needs-you | failed | running | todo">
          <StatusChecklist items={[{
          label: "Order found",
          detail: "NR-10871",
          state: "done"
        }, {
          label: "Approve the replacement",
          state: "needs-you",
          tag: "Needs you"
        }, {
          label: "Update the customer record",
          state: "failed",
          tag: "Failed"
        }, {
          label: "Book technician",
          state: "running"
        }, {
          label: "Email the summary",
          state: "todo"
        }]} />
        </Panel>
        <Panel name="Progress steps (AIProcess · progress)" spec='<AIProcess variant="progress" title meta steps={[{ id, label, status, at? }]} />'>
          <AIProcess variant="progress" title="Refund review" meta="Back office · stage 3 of 5" steps={[{
          id: "1",
          label: "Review opened",
          status: "done",
          at: "2:00"
        }, {
          id: "2",
          label: "Photo verified",
          status: "done",
          at: "2:01"
        }, {
          id: "3",
          label: "Waiting on approval",
          status: "active"
        }, {
          id: "4",
          label: "Refund issued",
          status: "pending"
        }]} />
        </Panel>
        <Panel name="Meter (ProgressBars or Tags)" spec="levels, value, tones?, label?, display: bars | tags">
          <Meter levels={["Negative", "Neutral", "Positive"]} value="Neutral" label="Sentiment" />
          <Meter display="tags" levels={["Angry", "Frustrated", "Neutral", "Calmer", "Satisfied"]} value="Calmer" label="Mood" />
        </Panel>
        <Panel name="Streamed text" spec="text, previous?, foldAfter?, markFor?">
          <StreamedText key={text} text={full} previous={prev} />
          <Button variant="outline" size="sm" className="self-start" onClick={() => setText(t => (t + 1) % SENTENCES.length)}>
            Next update
          </Button>
        </Panel>
        <Panel name="Waiting state (Skeleton)" spec="message, lines?">
          <WaitingState message="Nothing to summarise yet." lines={2} />
        </Panel>
        <Panel name="Memory list" spec="title, items: string[]">
          <MemoryList title="From Experience Memory" items={["Paid by PayPal on 3 of the last 5 orders", "Asked about the launch on 26 Sep"]} />
        </Panel>
        <Panel name="Citation" spec="text, citations: [{ text, source }]">
          <Citation text="Tablets carry a 24-month parts warranty that runs from the delivery date." citations={[{
          text: "24-month parts warranty that runs from the delivery date",
          source: "Tablet warranty coverage, section 2"
        }]} />
        </Panel>
        <Panel name="Source links (Link + Tag)" spec="links: [{ title, href?, tag?, tagVariant?, internal? }]">
          <SourceLinks links={[{
          title: "Tablet warranty coverage",
          tag: "New",
          tagVariant: "info"
        }, {
          title: "Board faults — replace, not repair",
          internal: true
        }]} />
        </Panel>
        <Panel name="Numbered steps (AIProcess · numbered)" spec='<AIProcess variant="numbered" steps={[{ id, label, description? }]} />'>
          <AIProcess variant="numbered" steps={[{
          id: "1",
          label: "Confirm the delivery date",
          description: "It is on the account."
        }, {
          id: "2",
          label: "Raise a replacement claim",
          description: "Choose “Board fault” as the reason."
        }]} />
        </Panel>
        <Panel name="Policy note (InlineNotification)" spec="tone: within | outside, heading?">
          <PolicyNote>Within your limit: refunds up to $500 with a photo check.</PolicyNote>
          <PolicyNote tone="outside">Over your limit: refunds above $500 need a supervisor.</PolicyNote>
        </Panel>
        <Panel name="Line items (MenuItem)" spec="rows: [{ name, detail?, amount? }]">
          <LineItems rows={[{
          name: "Espresso machine",
          detail: "NR-10871 · 25 Sep",
          amount: "$412.00"
        }, {
          name: "Milk frother",
          detail: "NR-10544 · 18 Jun",
          amount: "$49.00"
        }]} />
        </Panel>
      </div>;
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const Ae=["Gallery"];export{r as Gallery,Ae as __namedExportsOrder,we as default};
