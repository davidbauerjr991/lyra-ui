import{j as a}from"./jsx-runtime-D_zvdyIk.js";const m={title:"Foundations/Shadows",tags:["autodocs"],parameters:{layout:"padded"}},y=[{token:"shadow-xs",cssVar:"lyra-shadow-xs",tailwind:"shadow-xs",opacity:"6%",twClass:"shadow"},{token:"shadow-sm",cssVar:"lyra-shadow-sm",tailwind:"shadow-sm",opacity:"10%",twClass:"shadow-sm"},{token:"shadow-md",cssVar:"lyra-shadow-md",tailwind:"shadow-md",opacity:"12%",twClass:"shadow-md"},{token:"shadow-lg",cssVar:"lyra-shadow-lg",tailwind:"shadow-lg",opacity:"14%",twClass:"shadow-lg"},{token:"shadow-xl",cssVar:"lyra-shadow-xl",tailwind:"shadow-xl",opacity:"16%",twClass:"shadow-xl"},{token:"shadow-2xl",cssVar:"lyra-shadow-2xl",tailwind:"shadow-2xl",opacity:"18%",twClass:"shadow-2xl"}],s={name:"Table",render:()=>a.jsxs("div",{className:"max-w-[1200px]",children:[a.jsxs("div",{className:"mb-8",children:[a.jsx("h2",{className:"lyra-heading-xl text-lyra-fg-default mb-1",children:"Shadows Table"}),a.jsx("p",{className:"lyra-body-lg text-lyra-fg-secondary",children:"Elevation shadows used for cards, dropdowns, modals, and overlays."})]}),a.jsxs("table",{className:"w-full border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-lyra-border-medium",children:[a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Token"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"CSS Variable"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Class"}),a.jsx("th",{className:"py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Opacity"}),a.jsx("th",{className:"py-2 text-left lyra-body-sm-emphasis text-lyra-fg-secondary",children:"Preview"})]})}),a.jsx("tbody",{children:y.map(e=>a.jsxs("tr",{className:"border-b border-lyra-border-subtle",children:[a.jsx("td",{className:"py-8 pr-4 lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap align-middle",children:e.token}),a.jsx("td",{className:"py-8 pr-4 lyra-body-md text-lyra-fg-disabled font-mono whitespace-nowrap align-middle",children:e.cssVar}),a.jsx("td",{className:"py-8 pr-4 lyra-body-md text-lyra-fg-action font-mono whitespace-nowrap align-middle",children:e.tailwind}),a.jsx("td",{className:"py-8 pr-4 lyra-body-md text-lyra-fg-secondary font-mono whitespace-nowrap align-middle",children:e.opacity}),a.jsx("td",{className:"align-middle",children:a.jsx("div",{style:{paddingTop:24,paddingBottom:24},children:a.jsx("div",{className:"rounded-lyra-md",style:{width:56,height:56,backgroundColor:"#ffffff",boxShadow:e.token==="shadow-xs"?"0 1px 2px 0 rgba(0,0,0,0.05)":e.token==="shadow-sm"?"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)":e.token==="shadow-md"?"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)":e.token==="shadow-lg"?"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)":e.token==="shadow-xl"?"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)":"0 25px 50px -12px rgba(0,0,0,0.25)"}})})})]},e.token))})]})]})},r={name:"Usage",render:()=>{const e={xs:"0 1px 2px 0 rgba(0,0,0,0.05)",sm:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)"};return a.jsxs("div",{className:"space-y-12 max-w-[1200px]",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"lyra-heading-xl text-lyra-fg-default mb-1",children:"Shadow Usage"}),a.jsx("p",{className:"lyra-body-lg text-lyra-fg-secondary",children:"Guidelines for applying elevation shadows across different UI elements."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"lyra-heading-md text-lyra-fg-default mb-1",children:"Cards"}),a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-4",children:"Use shadow-sm for flat cards, shadow-md for elevated cards, and shadow-lg for featured or floating cards."}),a.jsxs("div",{className:"flex items-stretch gap-lyra-6 p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg",children:[a.jsxs("div",{className:"flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md",style:{boxShadow:e.sm},children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-2",children:"shadow-sm"}),a.jsx("div",{className:"lyra-heading-sm text-lyra-fg-default mb-1",children:"Flat Card"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary",children:"Used for standard content cards and list items."})]}),a.jsxs("div",{className:"flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md",style:{boxShadow:e.md},children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-2",children:"shadow-md"}),a.jsx("div",{className:"lyra-heading-sm text-lyra-fg-default mb-1",children:"Elevated Card"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary",children:"Used for cards that need more visual prominence."})]}),a.jsxs("div",{className:"flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md",style:{boxShadow:e.lg},children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-2",children:"shadow-lg"}),a.jsx("div",{className:"lyra-heading-sm text-lyra-fg-default mb-1",children:"Featured Card"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary",children:"Used for floating or featured content."})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"lyra-heading-md text-lyra-fg-default mb-1",children:"Buttons"}),a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-4",children:"Use shadow-xs for subtle button depth and shadow-sm for raised buttons. Avoid heavy shadows on buttons."}),a.jsxs("div",{className:"flex items-center gap-lyra-4 p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg",children:[a.jsx("div",{className:"inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm lyra-label",children:"No Shadow"}),a.jsx("div",{className:"inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm lyra-label",style:{boxShadow:e.xs},children:"shadow-xs"}),a.jsx("div",{className:"inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm lyra-label",style:{boxShadow:e.sm},children:"shadow-sm"}),a.jsx("div",{className:"inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-control text-lyra-fg-default border border-lyra-border-soft rounded-lyra-sm lyra-label",style:{boxShadow:e.xs},children:"Outline + shadow-xs"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"lyra-heading-md text-lyra-fg-default mb-1",children:"Modals & Overlays"}),a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-4",children:"Use shadow-xl or shadow-2xl for modals, dialogs, and popovers to create clear separation from the page."}),a.jsxs("div",{className:"relative flex items-center justify-center p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg",style:{height:360},children:[a.jsx("div",{className:"absolute inset-8 bg-lyra-bg-surface-base rounded-lyra-md opacity-60",children:a.jsxs("div",{className:"p-6",children:[a.jsx("div",{className:"rounded-lyra-xs bg-lyra-bg-disabled mb-3",style:{width:200,height:12}}),a.jsx("div",{className:"rounded-lyra-xs bg-lyra-bg-disabled mb-2",style:{width:300,height:8,opacity:.5}}),a.jsx("div",{className:"rounded-lyra-xs bg-lyra-bg-disabled mb-2",style:{width:260,height:8,opacity:.5}}),a.jsx("div",{className:"rounded-lyra-xs bg-lyra-bg-disabled",style:{width:280,height:8,opacity:.5}})]})}),a.jsxs("div",{className:"relative z-10 p-lyra-8 bg-lyra-bg-surface-base rounded-lyra-lg text-center",style:{boxShadow:e["2xl"],width:400},children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-3",children:"shadow-2xl"}),a.jsx("div",{className:"lyra-heading-md text-lyra-fg-default mb-2",children:"Delete Item?"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary mb-6",children:"This action cannot be undone. Are you sure you want to continue?"}),a.jsxs("div",{className:"flex gap-3 justify-center",children:[a.jsx("div",{className:"inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-control text-lyra-fg-default border border-lyra-border-soft rounded-lyra-sm lyra-label",children:"Cancel"}),a.jsx("div",{className:"inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-destructive text-lyra-fg-on-primary rounded-lyra-sm lyra-label",children:"Delete"})]})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"lyra-heading-md text-lyra-fg-default mb-1",children:"Hover Transitions"}),a.jsx("p",{className:"lyra-body-md text-lyra-fg-secondary mb-4",children:"Use CSS transitions to animate between shadow levels on hover. This creates a lifting effect that signals interactivity."}),a.jsxs("div",{className:"flex items-stretch gap-lyra-6 p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg",children:[a.jsx("style",{children:`
              .shadow-hover-demo-1 { box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1); transition: box-shadow 0.2s ease; }
              .shadow-hover-demo-1:hover { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); }
              .shadow-hover-demo-2 { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); transition: box-shadow 0.2s ease; }
              .shadow-hover-demo-2:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1); }
              .shadow-hover-demo-3 { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); transition: box-shadow 0.2s ease, transform 0.2s ease; }
              .shadow-hover-demo-3:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); transform: translateY(-2px); }
            `}),a.jsxs("div",{className:"shadow-hover-demo-1 flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md cursor-pointer",children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-2",children:"sm → md"}),a.jsx("div",{className:"lyra-heading-sm text-lyra-fg-default mb-1",children:"Subtle Lift"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary",children:"Hover me to see a gentle shadow increase."})]}),a.jsxs("div",{className:"shadow-hover-demo-2 flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md cursor-pointer",children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-2",children:"md → lg"}),a.jsx("div",{className:"lyra-heading-sm text-lyra-fg-default mb-1",children:"Medium Lift"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary",children:"Hover me for a more pronounced elevation change."})]}),a.jsxs("div",{className:"shadow-hover-demo-3 flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md cursor-pointer",children:[a.jsx("div",{className:"lyra-body-sm-emphasis text-lyra-fg-disabled mb-2",children:"xs → xl + lift"}),a.jsx("div",{className:"lyra-heading-sm text-lyra-fg-default mb-1",children:"Dramatic Lift"}),a.jsx("div",{className:"lyra-body-md text-lyra-fg-secondary",children:"Hover me for a full lift effect with translate."})]})]})]})]})}};var d,l,t;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Table",
  render: () => <div className="max-w-[1200px]">
      <div className="mb-8">
        <h2 className="lyra-heading-xl text-lyra-fg-default mb-1">Shadows Table</h2>
        <p className="lyra-body-lg text-lyra-fg-secondary">
          Elevation shadows used for cards, dropdowns, modals, and overlays.
        </p>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-lyra-border-medium">
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Token</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">CSS Variable</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Class</th>
            <th className="py-2 pr-4 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Opacity</th>
            <th className="py-2 text-left lyra-body-sm-emphasis text-lyra-fg-secondary">Preview</th>
          </tr>
        </thead>
        <tbody>
          {shadowScale.map(s => <tr key={s.token} className="border-b border-lyra-border-subtle">
              <td className="py-8 pr-4 lyra-body-md-emphasis text-lyra-fg-default whitespace-nowrap align-middle">{s.token}</td>
              <td className="py-8 pr-4 lyra-body-md text-lyra-fg-disabled font-mono whitespace-nowrap align-middle">{s.cssVar}</td>
              <td className="py-8 pr-4 lyra-body-md text-lyra-fg-action font-mono whitespace-nowrap align-middle">{s.tailwind}</td>
              <td className="py-8 pr-4 lyra-body-md text-lyra-fg-secondary font-mono whitespace-nowrap align-middle">{s.opacity}</td>
              <td className="align-middle">
                <div style={{
              paddingTop: 24,
              paddingBottom: 24
            }}>
                  <div className="rounded-lyra-md" style={{
                width: 56,
                height: 56,
                backgroundColor: "#ffffff",
                boxShadow: s.token === "shadow-xs" ? "0 1px 2px 0 rgba(0,0,0,0.05)" : s.token === "shadow-sm" ? "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" : s.token === "shadow-md" ? "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)" : s.token === "shadow-lg" ? "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)" : s.token === "shadow-xl" ? "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)" : "0 25px 50px -12px rgba(0,0,0,0.25)"
              }} />
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>
}`,...(t=(l=s.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var n,o,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Usage",
  render: () => {
    const shadows = {
      xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
      sm: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
      md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
      lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
      xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
      "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)"
    };
    return <div className="space-y-12 max-w-[1200px]">
        <div>
          <h2 className="lyra-heading-xl text-lyra-fg-default mb-1">Shadow Usage</h2>
          <p className="lyra-body-lg text-lyra-fg-secondary">
            Guidelines for applying elevation shadows across different UI elements.
          </p>
        </div>

        {/* Cards */}
        <div>
          <h3 className="lyra-heading-md text-lyra-fg-default mb-1">Cards</h3>
          <p className="lyra-body-md text-lyra-fg-secondary mb-4">
            Use shadow-sm for flat cards, shadow-md for elevated cards, and shadow-lg for featured or floating cards.
          </p>
          {/* gap-6 = 24px (lyra-spacing-6), p-8 = 32px (lyra-spacing-8) */}
          <div className="flex items-stretch gap-lyra-6 p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg">
            <div className="flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md" style={{
            boxShadow: shadows.sm
          }}>
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-2">shadow-sm</div>
              <div className="lyra-heading-sm text-lyra-fg-default mb-1">Flat Card</div>
              <div className="lyra-body-md text-lyra-fg-secondary">Used for standard content cards and list items.</div>
            </div>
            <div className="flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md" style={{
            boxShadow: shadows.md
          }}>
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-2">shadow-md</div>
              <div className="lyra-heading-sm text-lyra-fg-default mb-1">Elevated Card</div>
              <div className="lyra-body-md text-lyra-fg-secondary">Used for cards that need more visual prominence.</div>
            </div>
            <div className="flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md" style={{
            boxShadow: shadows.lg
          }}>
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-2">shadow-lg</div>
              <div className="lyra-heading-sm text-lyra-fg-default mb-1">Featured Card</div>
              <div className="lyra-body-md text-lyra-fg-secondary">Used for floating or featured content.</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div>
          <h3 className="lyra-heading-md text-lyra-fg-default mb-1">Buttons</h3>
          <p className="lyra-body-md text-lyra-fg-secondary mb-4">
            Use shadow-xs for subtle button depth and shadow-sm for raised buttons. Avoid heavy shadows on buttons.
          </p>
          {/* gap-4 = 16px (lyra-spacing-4), p-8 = 32px (lyra-spacing-8) */}
          <div className="flex items-center gap-lyra-4 p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg">
            <div className="inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm lyra-label">
              No Shadow
            </div>
            <div className="inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm lyra-label" style={{
            boxShadow: shadows.xs
          }}>
              shadow-xs
            </div>
            <div className="inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-primary text-lyra-fg-on-primary rounded-lyra-sm lyra-label" style={{
            boxShadow: shadows.sm
          }}>
              shadow-sm
            </div>
            <div className="inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-control text-lyra-fg-default border border-lyra-border-soft rounded-lyra-sm lyra-label" style={{
            boxShadow: shadows.xs
          }}>
              Outline + shadow-xs
            </div>
          </div>
        </div>

        {/* Modals & Overlays */}
        <div>
          <h3 className="lyra-heading-md text-lyra-fg-default mb-1">Modals & Overlays</h3>
          <p className="lyra-body-md text-lyra-fg-secondary mb-4">
            Use shadow-xl or shadow-2xl for modals, dialogs, and popovers to create clear separation from the page.
          </p>
          <div className="relative flex items-center justify-center p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg" style={{
          height: 360
        }}>
            {/* Fake page content behind */}
            <div className="absolute inset-8 bg-lyra-bg-surface-base rounded-lyra-md opacity-60">
              <div className="p-6">
                <div className="rounded-lyra-xs bg-lyra-bg-disabled mb-3" style={{
                width: 200,
                height: 12
              }} />
                <div className="rounded-lyra-xs bg-lyra-bg-disabled mb-2" style={{
                width: 300,
                height: 8,
                opacity: 0.5
              }} />
                <div className="rounded-lyra-xs bg-lyra-bg-disabled mb-2" style={{
                width: 260,
                height: 8,
                opacity: 0.5
              }} />
                <div className="rounded-lyra-xs bg-lyra-bg-disabled" style={{
                width: 280,
                height: 8,
                opacity: 0.5
              }} />
              </div>
            </div>
            {/* Modal — p-8 = 32px (lyra-spacing-8) */}
            <div className="relative z-10 p-lyra-8 bg-lyra-bg-surface-base rounded-lyra-lg text-center" style={{
            boxShadow: shadows["2xl"],
            width: 400
          }}>
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-3">shadow-2xl</div>
              <div className="lyra-heading-md text-lyra-fg-default mb-2">Delete Item?</div>
              <div className="lyra-body-md text-lyra-fg-secondary mb-6">This action cannot be undone. Are you sure you want to continue?</div>
              {/* gap-3 = 12px (lyra-spacing-3) */}
              <div className="flex gap-3 justify-center">
                <div className="inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-control text-lyra-fg-default border border-lyra-border-soft rounded-lyra-sm lyra-label">
                  Cancel
                </div>
                <div className="inline-flex items-center justify-center h-9 px-4 bg-lyra-bg-destructive text-lyra-fg-on-primary rounded-lyra-sm lyra-label">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Transitions */}
        <div>
          <h3 className="lyra-heading-md text-lyra-fg-default mb-1">Hover Transitions</h3>
          <p className="lyra-body-md text-lyra-fg-secondary mb-4">
            Use CSS transitions to animate between shadow levels on hover. This creates a lifting effect that signals interactivity.
          </p>
          {/* gap-6 = 24px (lyra-spacing-6), p-8 = 32px (lyra-spacing-8) */}
          <div className="flex items-stretch gap-lyra-6 p-lyra-8 bg-lyra-bg-surface-shell rounded-lyra-lg">
            <style>{\`
              .shadow-hover-demo-1 { box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1); transition: box-shadow 0.2s ease; }
              .shadow-hover-demo-1:hover { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); }
              .shadow-hover-demo-2 { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); transition: box-shadow 0.2s ease; }
              .shadow-hover-demo-2:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1); }
              .shadow-hover-demo-3 { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); transition: box-shadow 0.2s ease, transform 0.2s ease; }
              .shadow-hover-demo-3:hover { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); transform: translateY(-2px); }
            \`}</style>
            {/* p-6 = 24px (lyra-spacing-6) */}
            <div className="shadow-hover-demo-1 flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md cursor-pointer">
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-2">sm → md</div>
              <div className="lyra-heading-sm text-lyra-fg-default mb-1">Subtle Lift</div>
              <div className="lyra-body-md text-lyra-fg-secondary">Hover me to see a gentle shadow increase.</div>
            </div>
            <div className="shadow-hover-demo-2 flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md cursor-pointer">
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-2">md → lg</div>
              <div className="lyra-heading-sm text-lyra-fg-default mb-1">Medium Lift</div>
              <div className="lyra-body-md text-lyra-fg-secondary">Hover me for a more pronounced elevation change.</div>
            </div>
            <div className="shadow-hover-demo-3 flex-1 p-lyra-6 bg-lyra-bg-surface-base rounded-lyra-md cursor-pointer">
              <div className="lyra-body-sm-emphasis text-lyra-fg-disabled mb-2">xs → xl + lift</div>
              <div className="lyra-heading-sm text-lyra-fg-default mb-1">Dramatic Lift</div>
              <div className="lyra-body-md text-lyra-fg-secondary">Hover me for a full lift effect with translate.</div>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const c=["Table","Usage"];export{s as Table,r as Usage,c as __namedExportsOrder,m as default};
