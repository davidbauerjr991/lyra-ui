import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./show-more-zdMS6Dq2.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C3zmQXEb.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./chevron-down-gMYAX9-q.js";import"./createLucideIcon-aII_sYFw.js";const K={title:"Headless Primitives/Show More/Variants",component:s,parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},o=()=>e.jsx("p",{className:"mt-2 lyra-body-md text-lyra-fg-default",children:"The extra content that opens and closes."}),a={render:()=>e.jsx("div",{className:"flex w-full max-w-md flex-col gap-4",children:["sm","md","lg"].map(r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(s,{label:`Chevron at the end (${r})`,textSize:r,children:e.jsx(o,{})}),e.jsx(s,{label:`Chevron at the start (${r})`,textSize:r,chevronPosition:"start",children:e.jsx(o,{})})]},r))})},t={render:()=>e.jsx("div",{className:"flex w-full max-w-md flex-col gap-2",children:["down","up","right","left"].map(r=>e.jsx(s,{label:`Closed chevron points ${r}`,chevronDirection:r,children:e.jsx(o,{})},r))})},l={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(s,{label:"Thought process",emphasis:!0,meta:"12 s",children:e.jsx(o,{})})})},d={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(s,{label:"Show details",preview:e.jsx("p",{className:"mt-1 lyra-body-sm text-lyra-fg-secondary",children:"Always visible summary line."}),children:e.jsx(o,{})})})},n={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(s,{label:"Show less",defaultOpen:!0,children:e.jsx(o,{})})})};var i,c,m,p,h;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-md flex-col gap-4">
      {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex flex-col gap-2">
          <ShowMore label={\`Chevron at the end (\${size})\`} textSize={size}><Body /></ShowMore>
          <ShowMore label={\`Chevron at the start (\${size})\`} textSize={size} chevronPosition="start"><Body /></ShowMore>
        </div>)}
    </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Every text size with the chevron at the end and at the start.",...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var x,w,v,u,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-md flex-col gap-2">
      {(["down", "up", "right", "left"] as const).map(d => <ShowMore key={d} label={\`Closed chevron points \${d}\`} chevronDirection={d}><Body /></ShowMore>)}
    </div>
}`,...(v=(w=t.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"The four chevron directions (closed state).",...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var y,S,g,j,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <ShowMore label="Thought process" emphasis meta="12 s"><Body /></ShowMore>
    </div>
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source},description:{story:"Bold trigger, and `meta` text at the far end of the row.",...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};var M,N,B,C,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <ShowMore label="Show details" preview={<p className="mt-1 lyra-body-sm text-lyra-fg-secondary">Always visible summary line.</p>}>
        <Body />
      </ShowMore>
    </div>
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"`preview` stays visible between the trigger and the folded content.",...(z=(C=d.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var O,$,P,A,D;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <ShowMore label="Show less" defaultOpen><Body /></ShowMore>
    </div>
}`,...(P=($=n.parameters)==null?void 0:$.docs)==null?void 0:P.source},description:{story:"Opens on first render.",...(D=(A=n.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};const L=["SizesAndChevron","ChevronDirections","BoldWithMeta","WithPreview","StartsOpen"];export{l as BoldWithMeta,t as ChevronDirections,a as SizesAndChevron,n as StartsOpen,d as WithPreview,L as __namedExportsOrder,K as default};
