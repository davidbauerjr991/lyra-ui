import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CXOcBcs0.js";import{c as g}from"./index-1evVQkiP.js";import{c as V}from"./utils-BLSKlp9E.js";import{I as U}from"./info-icon-solid-BHK4S1rL.js";import{W as _}from"./warning-icon-solid-C2gh2Y-U.js";import{E as L}from"./error-icon-solid-C6_pXXD0.js";import{B as e}from"./button-DTrF7KLq.js";import{c as M}from"./createLucideIcon-DEcfmm_F.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BDkVnVO1.js";import"./index-DNfP5j1O.js";import"./tooltip-Cy9hcxi2.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./badge-BsM2Tnvd.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=M("CircleStop",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]]),O=g("flex w-full items-center gap-4 px-4 py-3 border-b",{variants:{variant:{info:"bg-lyra-bg-active-subtle border-lyra-bg-active-moderate",warning:"bg-lyra-status-warning-subtle border-lyra-status-warning-strong/40",error:"bg-lyra-status-critical-subtle border-lyra-status-critical-strong/40"}},defaultVariants:{variant:"info"}}),P=g("h-5 w-5 shrink-0",{variants:{variant:{info:"text-lyra-bg-primary",warning:"text-lyra-status-warning-strong",error:"text-lyra-status-critical-strong"}},defaultVariants:{variant:"info"}}),z=g("lyra-body-md-emphasis",{variants:{variant:{info:"text-lyra-fg-default",warning:"text-lyra-status-warning-strong",error:"text-lyra-status-critical-strong"}},defaultVariants:{variant:"info"}}),D={info:r=>t.jsx(U,{...r}),warning:r=>t.jsx(_,{...r}),error:r=>t.jsx(L,{...r})},i=v.forwardRef(({className:r,variant:n="info",title:Y,description:m,actions:p,...W},E)=>{const F=D[n??"info"];return t.jsxs("div",{ref:E,className:V(O({variant:n}),r),role:"status","aria-live":"polite",...W,children:[t.jsx(F,{className:P({variant:n})}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:z({variant:n}),children:Y}),m&&t.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-0.5",children:m})]}),p&&t.jsx("div",{className:"flex items-center gap-2 shrink-0",children:p})]})});i.displayName="ActionBar";i.__docgenInfo={description:"",methods:[],displayName:"ActionBar",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{defaultValue:{value:'"info"',computed:!1},required:!1}},composes:["VariantProps"]};const dt={title:"UI/ActionBar",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["info","warning","error"]},title:{control:"text"},description:{control:"text"}}},a={name:"Info",render:()=>t.jsx(i,{variant:"info",title:"Reviewing this conversation",description:"You are reviewing the AI Agent's live conversation - immediate action is requested.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",children:"Guide Conversation"}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})})},o={name:"Warning",render:()=>{const[r,n]=v.useState(!0);return r?t.jsx(i,{variant:"warning",title:"Guiding this conversation",description:"You are guiding the AI agent in real time",actions:t.jsxs(t.Fragment,{children:[t.jsxs(e,{variant:"warning",className:"gap-1.5",onClick:()=>n(!1),children:[t.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),"Stop Guiding"]}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})}):t.jsx(i,{variant:"info",title:"Reviewing this conversation",description:"You are reviewing the AI Agent's live conversation - immediate action is requested.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",onClick:()=>n(!0),children:"Guide Conversation"}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})})}},s={name:"Error",render:()=>t.jsx(i,{variant:"error",title:"Connection lost",description:"The AI agent has disconnected. Immediate action is required.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",children:"Retry"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})})},c={name:"All States",render:()=>t.jsxs("div",{className:"flex flex-col",children:[t.jsx(i,{variant:"info",title:"Reviewing this conversation",description:"You are reviewing the AI Agent's live conversation - immediate action is requested.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",children:"Guide Conversation"}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})}),t.jsx(i,{variant:"warning",title:"Guiding this conversation",description:"You are guiding the AI agent in real time",actions:t.jsxs(t.Fragment,{children:[t.jsxs(e,{variant:"warning",className:"gap-1.5",children:[t.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),"Stop Guiding"]}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})}),t.jsx(i,{variant:"error",title:"Connection lost",description:"The AI agent has disconnected. Immediate action is required.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",children:"Retry"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})})]})},l={name:"All Variants",render:()=>t.jsxs("div",{className:"flex flex-col",children:[t.jsx(i,{variant:"info",title:"Reviewing this conversation",description:"You are reviewing the AI Agent's live conversation - immediate action is requested.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",children:"Guide Conversation"}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})}),t.jsx(i,{variant:"warning",title:"Guiding this conversation",description:"You are guiding the AI agent in real time",actions:t.jsxs(t.Fragment,{children:[t.jsxs(e,{variant:"warning",className:"gap-1.5",children:[t.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),"Stop Guiding"]}),t.jsx(e,{variant:"outline",children:"Transfer"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})}),t.jsx(i,{variant:"error",title:"Connection lost",description:"The AI agent has disconnected. Immediate action is required.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",children:"Retry"}),t.jsx(e,{variant:"destructive",children:"Takeover"})]})}),t.jsx(i,{variant:"info",title:"Update available",description:"A new version of the AI model is available.",actions:t.jsx(e,{variant:"outline",children:"Update now"})}),t.jsx(i,{variant:"warning",title:"Session expiring soon",actions:t.jsx(e,{variant:"warning",children:"Extend session"})})]})},d={name:"Interactive",render:()=>{const[r,n]=v.useState("reviewing");return r?r==="reviewing"?t.jsx(i,{variant:"info",title:"Reviewing this conversation",description:"You are reviewing the AI Agent's live conversation - immediate action is requested.",actions:t.jsxs(t.Fragment,{children:[t.jsx(e,{variant:"outline",onClick:()=>n("guiding"),children:"Guide Conversation"}),t.jsx(e,{variant:"outline",onClick:()=>n(null),children:"Transfer"}),t.jsx(e,{variant:"destructive",onClick:()=>n(null),children:"Takeover"})]})}):t.jsx(i,{variant:"warning",title:"Guiding this conversation",description:"You are guiding the AI agent in real time",actions:t.jsxs(t.Fragment,{children:[t.jsxs(e,{variant:"warning",className:"gap-1.5",onClick:()=>n("reviewing"),children:[t.jsx(u,{className:"h-4 w-4",strokeWidth:1.5}),"Stop Guiding"]}),t.jsx(e,{variant:"outline",onClick:()=>n(null),children:"Transfer"}),t.jsx(e,{variant:"destructive",onClick:()=>n(null),children:"Takeover"})]})}):t.jsx("div",{className:"p-8 flex justify-center",children:t.jsx(e,{onClick:()=>n("reviewing"),children:"Start review"})})}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Info",
  render: () => <ActionBar variant="info" title="Reviewing this conversation" description="You are reviewing the AI Agent's live conversation - immediate action is requested." actions={<>
          <Button variant="outline">Guide Conversation</Button>
          <Button variant="outline">Transfer</Button>
          <Button variant="destructive">Takeover</Button>
        </>} />
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,j,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Warning",
  render: () => {
    const [guiding, setGuiding] = useState(true);
    return guiding ? <ActionBar variant="warning" title="Guiding this conversation" description="You are guiding the AI agent in real time" actions={<>
            <Button variant="warning" className="gap-1.5" onClick={() => setGuiding(false)}>
              <StopCircle className="h-4 w-4" strokeWidth={1.5} />
              Stop Guiding
            </Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="destructive">Takeover</Button>
          </>} /> : <ActionBar variant="info" title="Reviewing this conversation" description="You are reviewing the AI Agent's live conversation - immediate action is requested." actions={<>
            <Button variant="outline" onClick={() => setGuiding(true)}>Guide Conversation</Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />;
  }
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,k,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Error",
  render: () => <ActionBar variant="error" title="Connection lost" description="The AI agent has disconnected. Immediate action is required." actions={<>
          <Button variant="outline">Retry</Button>
          <Button variant="destructive">Takeover</Button>
        </>} />
}`,...(I=(k=s.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var T,S,y;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col">
      <ActionBar variant="info" title="Reviewing this conversation" description="You are reviewing the AI Agent's live conversation - immediate action is requested." actions={<>
            <Button variant="outline">Guide Conversation</Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />
      <ActionBar variant="warning" title="Guiding this conversation" description="You are guiding the AI agent in real time" actions={<>
            <Button variant="warning" className="gap-1.5">
              <StopCircle className="h-4 w-4" strokeWidth={1.5} />
              Stop Guiding
            </Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />
      <ActionBar variant="error" title="Connection lost" description="The AI agent has disconnected. Immediate action is required." actions={<>
            <Button variant="outline">Retry</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />
    </div>
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,N,G;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-col">
      {/* Info — many actions */}
      <ActionBar variant="info" title="Reviewing this conversation" description="You are reviewing the AI Agent's live conversation - immediate action is requested." actions={<>
            <Button variant="outline">Guide Conversation</Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />

      {/* Warning — stop action */}
      <ActionBar variant="warning" title="Guiding this conversation" description="You are guiding the AI agent in real time" actions={<>
            <Button variant="warning" className="gap-1.5">
              <StopCircle className="h-4 w-4" strokeWidth={1.5} />
              Stop Guiding
            </Button>
            <Button variant="outline">Transfer</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />

      {/* Error — minimal actions */}
      <ActionBar variant="error" title="Connection lost" description="The AI agent has disconnected. Immediate action is required." actions={<>
            <Button variant="outline">Retry</Button>
            <Button variant="destructive">Takeover</Button>
          </>} />

      {/* Info — single action */}
      <ActionBar variant="info" title="Update available" description="A new version of the AI model is available." actions={<Button variant="outline">Update now</Button>} />

      {/* Warning — no description */}
      <ActionBar variant="warning" title="Session expiring soon" actions={<Button variant="warning">Extend session</Button>} />
    </div>
}`,...(G=(N=l.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var b,R,q;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Interactive",
  render: () => {
    const [state, setState] = useState<"reviewing" | "guiding" | null>("reviewing");
    if (!state) return <div className="p-8 flex justify-center">
        <Button onClick={() => setState("reviewing")}>Start review</Button>
      </div>;
    if (state === "reviewing") return <ActionBar variant="info" title="Reviewing this conversation" description="You are reviewing the AI Agent's live conversation - immediate action is requested." actions={<>
            <Button variant="outline" onClick={() => setState("guiding")}>Guide Conversation</Button>
            <Button variant="outline" onClick={() => setState(null)}>Transfer</Button>
            <Button variant="destructive" onClick={() => setState(null)}>Takeover</Button>
          </>} />;
    return <ActionBar variant="warning" title="Guiding this conversation" description="You are guiding the AI agent in real time" actions={<>
            <Button variant="warning" className="gap-1.5" onClick={() => setState("reviewing")}>
              <StopCircle className="h-4 w-4" strokeWidth={1.5} />
              Stop Guiding
            </Button>
            <Button variant="outline" onClick={() => setState(null)}>Transfer</Button>
            <Button variant="destructive" onClick={() => setState(null)}>Takeover</Button>
          </>} />;
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ut=["Info","Warning","Error","AllStates","AllVariants","Interactive"];export{c as AllStates,l as AllVariants,s as Error,a as Info,d as Interactive,o as Warning,ut as __namedExportsOrder,dt as default};
