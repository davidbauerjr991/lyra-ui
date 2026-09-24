import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DhMLlvMY.js";import{c as t}from"./utils-BLSKlp9E.js";const r=m.forwardRef(({icon:s,message:o="No data available",description:n,tone:l="secondary",className:d,...i},c)=>{const a=l==="secondary"?"text-lyra-fg-secondary":"text-lyra-fg-disabled";return e.jsxs("div",{ref:c,className:t("flex h-full w-full flex-col items-center justify-center gap-2 py-8 text-center",d),...i,children:[s&&e.jsx("span",{className:a,"aria-hidden":"true",children:s}),e.jsx("p",{className:t("lyra-body-md",a),children:o}),n&&e.jsx("p",{className:t("lyra-body-sm",a),children:n})]})});r.displayName="EmptyState";r.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon/illustration rendered above the message"},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Main message (default: "No data available")',defaultValue:{value:'"No data available"',computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional secondary line rendered under the message, smaller/muted"},tone:{required:!1,tsType:{name:"union",raw:'"disabled" | "secondary"',elements:[{name:"literal",value:'"disabled"'},{name:"literal",value:'"secondary"'}]},description:`Text color for the icon/message/description. Default is now
\`"secondary"\` (2026-09-23): \`"disabled"\`'s \`text-lyra-fg-disabled\`
measured ~2:1 in light mode and ~1.9:1 in dark, well under WCAG
1.4.3's 4.5:1 for real text — that token is only exempt on genuinely
disabled controls. \`"disabled"\` stays available as an explicit opt-in
but fails contrast wherever it's used for readable text.
Original description: \`"disabled"\` is the original/most muted tone,
meant for a bounded "nothing here yet" box (a card body, a history
panel). \`"secondary"\` (\`text-lyra-fg-secondary\`, one step brighter) is
for a placeholder that needs to read clearly against a busier
surrounding UI — the same token the app's own hand-rolled "Nothing to
Display" (Contact History) placeholder already uses, per an explicit
request/screenshot comparing the two ("it should match the Nothing to
Display in My Contact History"). Off by default so every existing
consumer (\`DraggablePanel\`'s default body, \`AiPanel\`'s history view,
the \`EmptyState\` stories) is completely unaffected.`,defaultValue:{value:'"secondary"',computed:!1}}}};export{r as E};
