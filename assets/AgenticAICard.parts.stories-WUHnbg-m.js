import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DhMLlvMY.js";import{A as P,S,M as m,a as j,W as w,b as N,c as A,P as p,L as C,d as u,e as i,f as o,g as I,h as R,T,i as l,j as d,k as B,l as E}from"./agentic-task-parts-Bkp9buI_.js";import{A as g}from"./ai-process-B-ii6DN-.js";import{B as F}from"./button-Cje2PXGX.js";import{P as c}from"./progress-bar-BUzWCp3j.js";import{C as q}from"./citation-CApf8U1b.js";import{X as M}from"./x-CzxgOx-T.js";import{C as W}from"./check-Dr3vGcdY.js";import{P as L}from"./pencil-IFm_bK0G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./ai-card-Cafz7oQN.js";import"./createLucideIcon-aII_sYFw.js";import"./accordion-aheRZdMc.js";import"./index-B22cGEQ6.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-DOha2xPu.js";import"./index-C3zmQXEb.js";import"./index-CylpBFcA.js";import"./chevron-down-gMYAX9-q.js";import"./container-footer-BSIaMmWX.js";import"./container-header-CRBwP-Mp.js";import"./tooltip-BnyLRSaS.js";import"./index-Bbt6qZUg.js";import"./arrow-left-Bi_-X62A.js";import"./avatar-CJbM1faC.js";import"./index-1evVQkiP.js";import"./user-BnR-bf5w.js";import"./external-link-Ck0ibvsS.js";import"./tag-DQ3sj_Kb.js";import"./badge-DnlHYDBX.js";import"./show-more-zdMS6Dq2.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./skeleton-DWrO-N3-.js";import"./container-Bh-BiJmm.js";import"./inline-notification-DeWvekn2.js";import"./icon-C3nOw4uh.js";import"./warning-icon-solid-B8WDO-kD.js";import"./error-icon-solid-eVlwMcX6.js";import"./info-icon-solid-B4Yq4FZA.js";import"./menu-item-uivF4bHz.js";import"./link-q-Nu3g6t.js";import"./circle-CiULE-tD.js";import"./circle-x-DWiWalIH.js";import"./circle-alert-DucVQP5w.js";import"./circle-check-CVZLkmkV.js";import"./history-DQoUpKZ-.js";import"./file-text-DK8c8V5C.js";import"./lock-CXrNv7Qc.js";import"./bot-DgIAlNMp.js";import"./sparkles-PRtIBnGT.js";import"./circle-play-VUnuHOtC.js";import"./clock-C3xVexPO.js";import"./zap-CIij0ToD.js";const Ve={title:"UI/AgenticAICard/Parts",component:P,tags:["!autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-base"}}};function t({name:a,spec:n,children:s}){return e.jsxs("div",{className:"flex flex-col gap-3 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base p-4",children:[e.jsx("span",{className:"lyra-body-md-emphasis text-lyra-fg-default",children:a}),s,e.jsx("code",{className:"lyra-body-xs text-lyra-fg-secondary",children:n})]})}const r={name:"All parts",render:()=>{const[a,n]=k.useState(0),s=["The tablet keeps freezing with a blinking red light."," It is inside the 24-month warranty."," A replacement claim is being raised."],v=s.slice(0,a+1).join(""),b=s.slice(0,a).join("");return e.jsxs("div",{className:"grid w-full max-w-[1100px] grid-cols-[repeat(auto-fill,minmax(340px,1fr))] items-start gap-4",children:[e.jsx(t,{name:"Status checklist (Spinner ring)",spec:"items: [{ label, detail?, state, tag? }]  ·  state: done | needs-you | failed | running | todo",children:e.jsx(S,{items:[{label:"Order found",detail:"NR-10871",state:"done"},{label:"Approve the replacement",state:"needs-you",tag:"Needs you"},{label:"Update the customer record",state:"failed",tag:"Failed"},{label:"Book technician",state:"running"},{label:"Email the summary",state:"todo"}]})}),e.jsx(t,{name:"Progress steps (AIProcess · progress)",spec:'<AIProcess variant="progress" title meta steps={[{ id, label, status, at? }]} />',children:e.jsx(g,{variant:"progress",title:"Refund review",meta:"Back office · stage 3 of 5",steps:[{id:"1",label:"Review opened",status:"done",at:"2:00"},{id:"2",label:"Photo verified",status:"done",at:"2:01"},{id:"3",label:"Waiting on approval",status:"active"},{id:"4",label:"Refund issued",status:"pending"}]})}),e.jsxs(t,{name:"Meter (ProgressBars or Tags)",spec:"levels, value, tones?, label?, display: bars | tags",children:[e.jsx(m,{levels:["Negative","Neutral","Positive"],value:"Neutral",label:"Sentiment"}),e.jsx(m,{display:"tags",levels:["Angry","Frustrated","Neutral","Calmer","Satisfied"],value:"Calmer",label:"Mood"})]}),e.jsxs(t,{name:"Streamed text",spec:"text, previous?, foldAfter?, markFor?",children:[e.jsx(j,{text:v,previous:b},a),e.jsx(F,{variant:"outline",size:"sm",className:"self-start",onClick:()=>n(x=>(x+1)%s.length),children:"Next update"})]}),e.jsx(t,{name:"Waiting state (Skeleton)",spec:"message, lines?",children:e.jsx(w,{message:"Nothing to summarise yet.",lines:2})}),e.jsx(t,{name:"Memory list",spec:"title, items: string[]",children:e.jsx(N,{title:"From Experience Memory",items:["Paid by PayPal on 3 of the last 5 orders","Asked about the launch on 26 Sep"]})}),e.jsx(t,{name:"Citation",spec:"text, citations: [{ text, source }]",children:e.jsx(q,{text:"Tablets carry a 24-month parts warranty that runs from the delivery date.",citations:[{text:"24-month parts warranty that runs from the delivery date",source:"Tablet warranty coverage, section 2"}]})}),e.jsx(t,{name:"Source links (Link + Tag)",spec:"links: [{ title, href?, tag?, tagVariant?, internal? }]",children:e.jsx(A,{links:[{title:"Tablet warranty coverage",tag:"New",tagVariant:"info"},{title:"Board faults — replace, not repair",internal:!0}]})}),e.jsx(t,{name:"Numbered steps (AIProcess · numbered)",spec:'<AIProcess variant="numbered" steps={[{ id, label, description? }]} />',children:e.jsx(g,{variant:"numbered",steps:[{id:"1",label:"Confirm the delivery date",description:"It is on the account."},{id:"2",label:"Raise a replacement claim",description:"Choose “Board fault” as the reason."}]})}),e.jsxs(t,{name:"Policy note (InlineNotification)",spec:"tone: within | outside, heading?",children:[e.jsx(p,{children:"Within your limit: refunds up to $500 with a photo check."}),e.jsx(p,{tone:"outside",children:"Over your limit: refunds above $500 need a supervisor."})]}),e.jsx(t,{name:"Line items (MenuItem)",spec:"rows: [{ name, detail?, amount? }]",children:e.jsx(C,{rows:[{name:"Espresso machine",detail:"NR-10871 · 25 Sep",amount:"$412.00"},{name:"Milk frother",detail:"NR-10544 · 18 Jun",amount:"$49.00"}]})}),e.jsxs(t,{name:"Action group (Button)",spec:"primary: { label, icon?, onClick?, disabled? }, secondary?: { … }",children:[e.jsx(u,{primary:{label:"Approve",icon:e.jsx(W,{className:"h-4 w-4",strokeWidth:1.5})},secondary:{label:"Decline",icon:e.jsx(M,{className:"h-4 w-4",strokeWidth:1.5})}}),e.jsx(u,{primary:{label:"Approve and run 4 tasks"},secondary:{label:"Edit answers",icon:e.jsx(L,{className:"h-4 w-4",strokeWidth:1.5})}})]}),e.jsx(t,{name:"AI-filled field (AIField)",spec:"label, value?, source?: conversation | self-service | lookup | agent, quote?, sensitive?, required?, fresh?, question?",children:e.jsxs("div",{className:"divide-y divide-lyra-border-subtle rounded-lyra-md border border-lyra-border-subtle",children:[e.jsx(i,{label:"Symptom",value:"Frozen, blinking red light",source:"conversation",quote:"It just freezes and the light keeps blinking red."}),e.jsx(i,{label:"Address",value:"•••• Elm Street, Leeds",source:"lookup",sensitive:!0}),e.jsx(i,{label:"Photo",question:"Could you send a photo of the crack?"})]})}),e.jsxs(t,{name:"Section dial (Badge + ProgressBar ring)",spec:"name, filled, of, opened?, onClick?",children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[e.jsx(o,{name:"Customer & product",filled:4,of:4}),e.jsx(o,{name:"Damage details",filled:1,of:2,opened:!0}),e.jsx(o,{name:"Technician visit",filled:1,of:3})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(c,{shape:"ring",ringSize:40,value:75,label:"9 of 12"}),e.jsx(c,{shape:"ring",ringSize:28,value:75,label:"9 of 12"}),e.jsx(c,{shape:"ring",ringSize:18,value:100,variant:"success",label:"12 of 12"})]})]}),e.jsx(t,{name:"Field section (Accordion)",spec:"name, filled, of, why?, open?, defaultOpen?, onOpenChange?",children:e.jsxs(I,{name:"Damage details",filled:1,of:2,why:"Opened because Jordan mentioned a crack",children:[e.jsx(i,{label:"Damage",value:"Small crack by the charging port",source:"conversation",quote:"There’s also a small crack by the charging port."}),e.jsx(i,{label:"Photo"})]})}),e.jsx(t,{name:"Suggested question (Button)",spec:"field, question, onInsert?, insertLabel?",children:e.jsx(R,{field:"Preferred slot",question:"Which day suits you for the technician visit?",onInsert:()=>{}})}),e.jsx(t,{name:"Task board (Spinner ring)",spec:"tasks: [{ id, name, flow?, state, output?, note?, error?, after?, onRetry? }]  ·  state: done | running | failed | waiting | queued | ready",children:e.jsx(T,{tasks:[{id:"1",name:"Raise replacement claim",flow:"Warranty check",state:"done",output:"WC-88214"},{id:"2",name:"Book technician",flow:"Book a technician",state:"running"},{id:"3",name:"Update the customer record",flow:"CRM sync",state:"failed",error:"CRM did not answer within 10 s · nothing was changed",onRetry:()=>{}},{id:"4",name:"Email the claim summary",flow:"Customer notifications",state:"waiting",after:"Raise replacement claim"},{id:"5",name:"Close the case",flow:"Case management",state:"queued"},{id:"6",name:"Verify identity",flow:"Identity verification",state:"ready",note:"Ready · runs when you approve"}]})}),e.jsxs(t,{name:"Stage trail",spec:"stages: string[], current: number",children:[e.jsx(l,{stages:["Capture","Review","Run"],current:0}),e.jsx(l,{stages:["Capture","Review","Run"],current:1}),e.jsx(l,{stages:["Capture","Review","Run"],current:2})]}),e.jsxs(t,{name:"Suggestion tag, reply and alternatives",spec:"SuggestionTag type: say | ask | do  ·  Alternatives: [{ type, text, onUse? }]",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx(d,{type:"say"}),e.jsx(d,{type:"ask"}),e.jsx(d,{type:"do"})]}),e.jsx(B,{children:"Is the red light blinking steadily, or flashing in a pattern?"}),e.jsx(E,{alternatives:[{type:"say",text:"Tell Jordan it is still covered",onUse:()=>{}},{type:"do",text:"Email Jordan the claim summary",onUse:()=>{}}]})]})]})}};var h,f,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <Panel name="Action group (Button)" spec="primary: { label, icon?, onClick?, disabled? }, secondary?: { … }">
          <ActionGroup primary={{
          label: "Approve",
          icon: <Check className="h-4 w-4" strokeWidth={1.5} />
        }} secondary={{
          label: "Decline",
          icon: <X className="h-4 w-4" strokeWidth={1.5} />
        }} />
          <ActionGroup primary={{
          label: "Approve and run 4 tasks"
        }} secondary={{
          label: "Edit answers",
          icon: <Pencil className="h-4 w-4" strokeWidth={1.5} />
        }} />
        </Panel>
        <Panel name="AI-filled field (AIField)" spec="label, value?, source?: conversation | self-service | lookup | agent, quote?, sensitive?, required?, fresh?, question?">
          <div className="divide-y divide-lyra-border-subtle rounded-lyra-md border border-lyra-border-subtle">
            <AIField label="Symptom" value="Frozen, blinking red light" source="conversation" quote="It just freezes and the light keeps blinking red." />
            <AIField label="Address" value="•••• Elm Street, Leeds" source="lookup" sensitive />
            <AIField label="Photo" question="Could you send a photo of the crack?" />
          </div>
        </Panel>
        <Panel name="Section dial (Badge + ProgressBar ring)" spec="name, filled, of, opened?, onClick?">
          <div className="flex flex-wrap gap-1.5">
            <SectionDial name="Customer & product" filled={4} of={4} />
            <SectionDial name="Damage details" filled={1} of={2} opened />
            <SectionDial name="Technician visit" filled={1} of={3} />
          </div>
          <div className="flex items-center gap-3">
            <ProgressBar shape="ring" ringSize={40} value={75} label="9 of 12" />
            <ProgressBar shape="ring" ringSize={28} value={75} label="9 of 12" />
            <ProgressBar shape="ring" ringSize={18} value={100} variant="success" label="12 of 12" />
          </div>
        </Panel>
        <Panel name="Field section (Accordion)" spec="name, filled, of, why?, open?, defaultOpen?, onOpenChange?">
          <AIFieldSection name="Damage details" filled={1} of={2} why="Opened because Jordan mentioned a crack">
            <AIField label="Damage" value="Small crack by the charging port" source="conversation" quote="There’s also a small crack by the charging port." />
            <AIField label="Photo" />
          </AIFieldSection>
        </Panel>
        <Panel name="Suggested question (Button)" spec="field, question, onInsert?, insertLabel?">
          <SuggestedQuestion field="Preferred slot" question="Which day suits you for the technician visit?" onInsert={() => {}} />
        </Panel>
        <Panel name="Task board (Spinner ring)" spec="tasks: [{ id, name, flow?, state, output?, note?, error?, after?, onRetry? }]  ·  state: done | running | failed | waiting | queued | ready">
          <TaskBoard tasks={[{
          id: "1",
          name: "Raise replacement claim",
          flow: "Warranty check",
          state: "done",
          output: "WC-88214"
        }, {
          id: "2",
          name: "Book technician",
          flow: "Book a technician",
          state: "running"
        }, {
          id: "3",
          name: "Update the customer record",
          flow: "CRM sync",
          state: "failed",
          error: "CRM did not answer within 10 s · nothing was changed",
          onRetry: () => {}
        }, {
          id: "4",
          name: "Email the claim summary",
          flow: "Customer notifications",
          state: "waiting",
          after: "Raise replacement claim"
        }, {
          id: "5",
          name: "Close the case",
          flow: "Case management",
          state: "queued"
        }, {
          id: "6",
          name: "Verify identity",
          flow: "Identity verification",
          state: "ready",
          note: "Ready · runs when you approve"
        }]} />
        </Panel>
        <Panel name="Stage trail" spec="stages: string[], current: number">
          <StageTrail stages={["Capture", "Review", "Run"]} current={0} />
          <StageTrail stages={["Capture", "Review", "Run"]} current={1} />
          <StageTrail stages={["Capture", "Review", "Run"]} current={2} />
        </Panel>
        <Panel name="Suggestion tag, reply and alternatives" spec="SuggestionTag type: say | ask | do  ·  Alternatives: [{ type, text, onUse? }]">
          <div className="flex gap-1.5">
            <SuggestionTag type="say" />
            <SuggestionTag type="ask" />
            <SuggestionTag type="do" />
          </div>
          <SuggestedReply>Is the red light blinking steadily, or flashing in a pattern?</SuggestedReply>
          <Alternatives alternatives={[{
          type: "say",
          text: "Tell Jordan it is still covered",
          onUse: () => {}
        }, {
          type: "do",
          text: "Email Jordan the claim summary",
          onUse: () => {}
        }]} />
        </Panel>
      </div>;
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ge=["Gallery"];export{r as Gallery,Ge as __namedExportsOrder,Ve as default};
