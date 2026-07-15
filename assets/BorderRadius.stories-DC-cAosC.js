import{j as a}from"./jsx-runtime-D_zvdyIk.js";const o={title:"Foundations/Border Radius",tags:["autodocs"],parameters:{layout:"padded"}},t=[{token:"rounded-none",cssVar:"lyra-radius-none",tailwind:"rounded-lyra-none",rem:"0px",px:"0px"},{token:"rounded-xs",cssVar:"lyra-radius-xs",tailwind:"rounded-lyra-xs",rem:"0.25rem",px:"4px"},{token:"rounded-sm",cssVar:"lyra-radius-sm",tailwind:"rounded-lyra-sm",rem:"0.375rem",px:"6px"},{token:"rounded-md",cssVar:"lyra-radius-md",tailwind:"rounded-lyra-md",rem:"0.5rem",px:"8px"},{token:"rounded-lg",cssVar:"lyra-radius-lg",tailwind:"rounded-lyra-lg",rem:"0.75rem",px:"12px"},{token:"rounded-xl",cssVar:"lyra-radius-xl",tailwind:"rounded-lyra-xl",rem:"1rem",px:"16px"},{token:"rounded-full",cssVar:"lyra-radius-round",tailwind:"rounded-lyra-round",rem:"999px",px:"999px"}],r={name:"Table",render:()=>a.jsxs("div",{className:"max-w-[1200px]",children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("h2",{className:"lyra-heading-xl text-lyra-fg-default mb-1",children:"Border Radius Table"}),a.jsx("p",{className:"lyra-body-lg text-lyra-fg-secondary",children:"Lyra border radius tokens for controlling corner rounding on elements."})]}),a.jsxs("table",{className:"w-full border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-lyra-border-medium",children:[a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Token"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"CSS Variable"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Class"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Value"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Pixels"}),a.jsx("th",{className:"py-2 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Preview"})]})}),a.jsx("tbody",{children:t.map(e=>a.jsxs("tr",{className:"border-b border-lyra-border-subtle",children:[a.jsx("td",{className:"py-lyra-7 pr-4 lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap align-middle",children:e.token}),a.jsx("td",{className:"py-lyra-7 pr-4 lyra-body-md text-lyra-fg-disabled font-mono whitespace-nowrap align-middle",children:e.cssVar}),a.jsx("td",{className:"py-lyra-7 pr-4 lyra-body-md text-lyra-fg-action font-mono whitespace-nowrap align-middle",children:e.tailwind}),a.jsx("td",{className:"py-lyra-7 pr-4 lyra-body-md text-lyra-fg-secondary font-mono whitespace-nowrap align-middle",children:e.rem}),a.jsx("td",{className:"py-lyra-7 pr-4 lyra-body-md text-lyra-fg-secondary font-mono whitespace-nowrap align-middle",children:e.px}),a.jsx("td",{className:"py-lyra-7 align-middle",children:a.jsx("div",{style:{width:48,height:48,backgroundColor:"var(--lyra-color-bg-primary)",borderRadius:e.px==="999px"?"999px":e.px}})})]},e.token))})]})]})};var l,s,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Table",
  render: () => <div className="max-w-[1200px]">
      <div className="mb-8">
        <h2 className="lyra-heading-xl text-lyra-fg-default mb-1">Border Radius Table</h2>
        <p className="lyra-body-lg text-lyra-fg-secondary">
          Lyra border radius tokens for controlling corner rounding on elements.
        </p>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-lyra-border-medium">
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Token</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">CSS Variable</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Class</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Value</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Pixels</th>
            <th className="py-2 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Preview</th>
          </tr>
        </thead>
        <tbody>
          {radiusScale.map(r => <tr key={r.token} className="border-b border-lyra-border-subtle">
              <td className="py-lyra-7 pr-4 lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap align-middle">{r.token}</td>
              <td className="py-lyra-7 pr-4 lyra-body-md text-lyra-fg-disabled font-mono whitespace-nowrap align-middle">{r.cssVar}</td>
              <td className="py-lyra-7 pr-4 lyra-body-md text-lyra-fg-action font-mono whitespace-nowrap align-middle">{r.tailwind}</td>
              <td className="py-lyra-7 pr-4 lyra-body-md text-lyra-fg-secondary font-mono whitespace-nowrap align-middle">{r.rem}</td>
              <td className="py-lyra-7 pr-4 lyra-body-md text-lyra-fg-secondary font-mono whitespace-nowrap align-middle">{r.px}</td>
              <td className="py-lyra-7 align-middle">
                <div style={{
              width: 48,
              height: 48,
              backgroundColor: "var(--lyra-color-bg-primary)",
              borderRadius: r.px === "999px" ? "999px" : r.px
            }} />
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const y=["Table"];export{r as Table,y as __namedExportsOrder,o as default};
