import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as pe}from"./index-CXOcBcs0.js";import{I as n}from"./input-B6wjqCOy.js";import{L as a}from"./label-DjGdKyh0.js";import{A as H}from"./actions-DM5yTiKA.js";import{B as O}from"./button-C9HuGDNI.js";import{S as ae}from"./separator-CVEAaEyG.js";import{S as be}from"./switch-EDCiJUC7.js";import{E as xe}from"./error-icon-Jj0G9Pna.js";import{c as fe}from"./utils-BLSKlp9E.js";import{P as se}from"./pencil-DdhzNlrF.js";import{S as oe}from"./settings-Ddbozet5.js";import{C as we}from"./copy-BRsdvqrt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./tooltip-Cy9hcxi2.js";import"./index-DNfP5j1O.js";import"./floating-ui.react-dom-B7A2Lg_k.js";import"./circle-help-Bj2MpUE2.js";import"./createLucideIcon-DEcfmm_F.js";import"./chevron-down-BRCsRsv-.js";import"./index-BDkVnVO1.js";import"./index-1evVQkiP.js";import"./badge-go1ZjKcF.js";import"./index-CoT6TaLL.js";import"./check-DrRFj5bn.js";import"./minus-DYrWPnXn.js";const Je={title:"Custom Primitives/Input",component:n,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{required:{control:"boolean"},size:{control:"select",options:["sm","md"],name:"Size"},showLabelOnly:{control:"boolean",name:"Label only"},showWithButtons:{control:"boolean",name:"With buttons"},buttonsPosition:{control:"select",options:["left","right","both"],name:"Buttons position"},buttonVariant:{control:"select",options:["default","destructive","warning","success","outline","ghost"],name:"Button type"},buttonIconOnly:{control:"boolean",name:"Icon buttons"},buttonSize:{control:"select",options:["sm","default","lg","xl"],name:"Button size"},buttonCount:{control:"select",options:[1,2,3],name:"Button count"},showHelp:{control:"boolean",name:"Help"},showHorizontal:{control:"boolean",name:"Horizontal"},showError:{control:"boolean",name:"Error"},maxWidth:{control:"boolean",name:"Max width"}}},c={name:"Default",args:{label:"Input Label",placeholder:"Text",required:!1,size:"md",showLabelOnly:!1,showWithButtons:!1,buttonsPosition:"left",buttonVariant:"ghost",buttonIconOnly:!0,buttonSize:"sm",buttonCount:2,showHelp:!1,showHorizontal:!1,showError:!1,maxWidth:!1},render:re=>{const{showLabelOnly:w,showWithButtons:i,buttonsPosition:t,buttonVariant:N,buttonIconOnly:le,buttonSize:I,buttonCount:L,showHelp:ie,showHorizontal:ce,showError:g,maxWidth:S,required:o,label:r,...j}=re,[de,ue]=pe.useState(!1),he={sm:"icon-sm",default:"icon-md",lg:"icon-lg",xl:"icon-xl"},me=[se,oe,we],s=()=>le?e.jsx(e.Fragment,{children:me.slice(0,L).map((B,v)=>e.jsx(O,{variant:N,size:he[I],title:"Placeholder action",children:e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5})},v))}):e.jsx(e.Fragment,{children:Array.from({length:L}).map((B,v)=>e.jsx(O,{variant:N,size:I,children:"Action"},v))}),l=ie?"Helpful context about this field.":void 0,y=g&&e.jsxs("div",{className:"flex items-center gap-1 mt-1.5",children:[e.jsx(xe,{className:"h-3.5 w-3.5 flex-shrink-0","aria-hidden":"true"}),e.jsx("span",{className:"lyra-body-sm text-lyra-status-critical-strong",children:"Required"})]});return ce?e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx(a,{label:r,required:o,labelHelpText:l}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[i&&(t==="left"||t==="both")&&s(),w?e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:"Sarah Connor"}):e.jsx(be,{checked:de,onCheckedChange:ue}),i&&(t==="right"||t==="both")&&s()]})]}),y,e.jsx(ae,{className:"mt-3"})]}):w&&i?e.jsxs("div",{className:"w-72",children:[e.jsx(a,{label:r,required:o,labelHelpText:l}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[(t==="left"||t==="both")&&s(),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:"Read-only value"}),(t==="right"||t==="both")&&s()]}),y]}):w?e.jsxs("div",{className:"w-72",children:[e.jsx(a,{label:r,supportingText:"Read-only value",required:o,labelHelpText:l}),y]}):i?e.jsxs("div",{className:fe("flex flex-col gap-1.5",S?"min-w-[240px] max-w-[320px]":"w-full"),children:[e.jsx(a,{label:r,required:o,labelHelpText:l}),e.jsxs("div",{className:"flex items-start gap-0.5",children:[(t==="left"||t==="both")&&s(),e.jsx(n,{...j,className:"flex-1 min-w-0",error:g?"Required":void 0}),(t==="right"||t==="both")&&s()]})]}):e.jsx(n,{...j,label:r,required:o,labelHelpText:l,error:g?"Required":void 0,className:S?"min-w-[240px] max-w-[320px]":void 0})}},d={name:"Filled",args:{label:"Input Label",defaultValue:"Text"}},u={name:"Disabled",args:{label:"Input Label",placeholder:"Text",disabled:!0}},h={name:"Readonly",args:{label:"Input Label",value:"Read-only value",readonly:!0}},m={name:"Label Only",render:()=>e.jsx("div",{className:"w-72",children:e.jsx(a,{label:"Input Label",supportingText:"Read-only value"})})},p={name:"Label With Buttons",render:()=>e.jsxs("div",{className:"flex flex-col gap-0 w-72",children:[e.jsx(a,{label:"Campaign State"}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[e.jsx(H,{size:"sm",title:"Placeholder action",children:e.jsx(se,{className:"h-4 w-4",strokeWidth:1.5})}),e.jsx(H,{size:"sm",title:"Placeholder action",children:e.jsx(oe,{className:"h-4 w-4",strokeWidth:1.5})})]})]})},b={name:"Label Horizontal With Separator",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{label:"Agent Name"}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-secondary",children:"Sarah Connor"})]}),e.jsx(ae,{})]})},x={name:"Error",args:{label:"Input Label",defaultValue:"Text",error:"Required"}},f={name:"All States",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[400px]",children:[e.jsx(n,{label:"Input Label",placeholder:"Text"}),e.jsx(n,{label:"Input Label",defaultValue:"Text"}),e.jsx(n,{label:"Input Label",disabled:!0,placeholder:"Text"}),e.jsx(n,{label:"Input Label",defaultValue:"Text",error:"Required"})]})};var P,z,T;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Default",
  args: {
    label: "Input Label",
    placeholder: "Text",
    required: false,
    size: "md",
    showLabelOnly: false,
    showWithButtons: false,
    buttonsPosition: "left",
    buttonVariant: "ghost",
    buttonIconOnly: true,
    buttonSize: "sm",
    buttonCount: 2,
    showHelp: false,
    showHorizontal: false,
    showError: false,
    maxWidth: false
  } as Story["args"],
  render: (args: any) => {
    const {
      showLabelOnly,
      showWithButtons,
      buttonsPosition,
      buttonVariant,
      buttonIconOnly,
      buttonSize,
      buttonCount,
      showHelp,
      showHorizontal,
      showError,
      maxWidth,
      required,
      label,
      ...rest
    } = args;
    const [switchOn, setSwitchOn] = useState(false);

    // Matches each text-button height exactly (button.tsx's own scale:
    // sm/icon-sm=24px, default|md/icon-md=32px, lg/icon-lg=36px,
    // xl/icon-xl=40px) — NOT \`ActionIconButton\`'s legacy size names
    // (actions.tsx), which intentionally map its "sm" a tier bigger than
    // \`Button\`'s own "sm". This story's \`buttonSize\` control is meant to
    // read as one shared height scale across both shapes, so an icon
    // button and a text button at the same size sit flush.
    const ICON_SIZE_MAP: Record<string, string> = {
      sm: "icon-sm",
      default: "icon-md",
      lg: "icon-lg",
      xl: "icon-xl"
    };

    // One icon per possible \`buttonCount\` slot — sliced below rather than
    // repeating the same icon three times, so each placeholder button still
    // reads as a distinct action.
    const PLACEHOLDER_ICONS = [Pencil, Settings, Copy];
    const renderButtons = () => buttonIconOnly ? <>
          {PLACEHOLDER_ICONS.slice(0, buttonCount).map((Icon, i) => <Button key={i} variant={buttonVariant} size={ICON_SIZE_MAP[buttonSize]} title="Placeholder action">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </Button>)}
        </> : <>
          {Array.from({
        length: buttonCount
      }).map((_, i) => <Button key={i} variant={buttonVariant} size={buttonSize}>Action</Button>)}
        </>;
    const labelHelpText = showHelp ? "Helpful context about this field." : undefined;

    // Same error markup Input itself renders (input.tsx) below its field —
    // these layouts have no input box to attach it to, but "Required"/error
    // should still surface the same way when the toggle is on.
    const errorMessage = showError && <div className="flex items-center gap-1 mt-1.5">
        <ErrorIcon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
        <span className="lyra-body-sm text-lyra-status-critical-strong">Required</span>
      </div>;

    // Layout toggles are mutually exclusive alternate renderings, not
    // modifiers of the plain \`Input\` below — \`horizontal\` is checked first
    // since it's a distinct row layout that still needs to know whether
    // "Label only" is on (static value text) or off (an actual, editable
    // \`Switch\` — no \`label\` prop on it, since the caption on the left
    // already serves that role) rather than always assuming one or the
    // other. \`required\`, \`showHelp\`, and \`showError\` apply across every
    // layout here, not just the plain \`Input\`.
    if (showHorizontal) {
      return <div className="w-full">
          <div className="flex items-center justify-between gap-3">
            <Label label={label} required={required} labelHelpText={labelHelpText} />
            <div className="flex items-center gap-0.5">
              {showWithButtons && (buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
              {showLabelOnly ? <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span> : <Switch checked={switchOn} onCheckedChange={setSwitchOn} />}
              {showWithButtons && (buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
            </div>
          </div>
          {/* Neither the static value text nor the label-less \`Switch\` has
              its own built-in error text (unlike \`Input\`, which renders it
              below itself) — always show the shared \`errorMessage\` here. */}
          {errorMessage}
          <Separator className="mt-3" />
        </div>;
    }
    if (showLabelOnly && showWithButtons) {
      // Combined: buttons sit inline next to the supporting-text value
      // (not below the label like the buttons-only case), since there's no
      // separate value row here to place them under — this *is* the value
      // row. \`buttonsPosition\` controls which side(s) they land on.
      return <div className="w-72">
          <Label label={label} required={required} labelHelpText={labelHelpText} />
          <div className="flex items-center gap-0.5">
            {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
            <span className="lyra-body-md text-lyra-fg-secondary">Read-only value</span>
            {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
          </div>
          {errorMessage}
        </div>;
    }
    if (showLabelOnly) {
      return <div className="w-72">
          <Label label={label} supportingText="Read-only value" required={required} labelHelpText={labelHelpText} />
          {errorMessage}
        </div>;
    }
    if (showWithButtons) {
      // Reached only once "Label only" is already ruled out by the branches
      // above, so this always has a real, editable \`Input\` — buttons sit
      // alongside it in the same row, positioned by \`buttonsPosition\`,
      // instead of the field disappearing whenever buttons are shown.
      // No \`justify-center\` — dropping it left-aligns the input directly
      // under the label (a standard field's own layout) whenever the
      // buttons trail on the right, rather than centering the whole group.
      // \`items-start\`, not \`items-center\` — \`Input\` renders its own error
      // text below itself (input.tsx) when \`error\` is set, which makes its
      // wrapper taller than the buttons; centering the row would then
      // center the buttons against that taller *block* instead of against
      // the input box itself, drifting them out of line with it. Aligning
      // tops keeps the buttons level with the input box regardless of
      // whether the error text is showing.
      // \`gap-1.5\` between the label and this row matches \`Input\`'s own
      // label-to-field spacing (input.tsx's \`mb-1.5\` on its internal
      // \`Label\`), not the \`gap-0\` the buttons-only/no-input layouts above
      // use.
      // No separate \`errorMessage\` here — \`Input\` already renders its own
      // error text below the field; adding the shared one too would show
      // "Required" twice.
      // \`maxWidth\` was previously ignored entirely here — a hardcoded
      // \`w-72\`/\`w-48\` regardless of the control, so toggling "Max width"
      // off still left the field capped instead of going full width. Now
      // matches the plain branch below: no cap by default (the wrapper is
      // full width, and \`Input\`'s own \`flex-1\` grows to fill whatever
      // room the buttons leave), \`min-w-[240px] max-w-[320px]\` on the
      // wrapper when "Max width" is on — a 320px ceiling and 240px floor,
      // same standard as the plain branch below and Form Grid's "Static
      // Width" fields (Breakpoints.stories.tsx).
      return <div className={cn("flex flex-col gap-1.5", maxWidth ? "min-w-[240px] max-w-[320px]" : "w-full")}>
          <Label label={label} required={required} labelHelpText={labelHelpText} />
          <div className="flex items-start gap-0.5">
            {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
            <Input {...rest} className="flex-1 min-w-0" error={showError ? "Required" : undefined} />
            {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
          </div>
        </div>;
    }
    return <Input {...rest} label={label} required={required} labelHelpText={labelHelpText} error={showError ? "Required" : undefined} className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined} />;
  }
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var W,C,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Filled",
  args: {
    label: "Input Label",
    defaultValue: "Text"
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var E,q,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    label: "Input Label",
    placeholder: "Text",
    disabled: true
  }
}`,...(k=(q=u.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var A,V,M;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Readonly",
  args: {
    label: "Input Label",
    value: "Read-only value",
    readonly: true
  }
}`,...(M=(V=h.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var _,D,F;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Label Only",
  render: () => <div className="w-72">
      <Label label="Input Label" supportingText="Read-only value" />
    </div>
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var Z,G,J;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Label With Buttons",
  render: () => <div className="flex flex-col gap-0 w-72">
      <Label label="Campaign State" />
      <div className="flex items-center gap-0.5">
        <ActionIconButton size="sm" title="Placeholder action">
          <Pencil className="h-4 w-4" strokeWidth={1.5} />
        </ActionIconButton>
        <ActionIconButton size="sm" title="Placeholder action">
          <Settings className="h-4 w-4" strokeWidth={1.5} />
        </ActionIconButton>
      </div>
    </div>
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Label Horizontal With Separator",
  render: () => <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <Label label="Agent Name" />
        <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span>
      </div>
      <Separator />
    </div>
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Error",
  args: {
    label: "Input Label",
    defaultValue: "Text",
    error: "Required"
  }
}`,...($=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "All States",
  render: () => <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Input Label" placeholder="Text" />
      <Input label="Input Label" defaultValue="Text" />
      <Input label="Input Label" disabled placeholder="Text" />
      <Input label="Input Label" defaultValue="Text" error="Required" />
    </div>
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Ke=["Default","Filled","Disabled","Readonly","LabelOnly","LabelWithButtons","LabelHorizontalWithSeparator","Error","AllStates"];export{f as AllStates,c as Default,u as Disabled,x as Error,d as Filled,b as LabelHorizontalWithSeparator,m as LabelOnly,p as LabelWithButtons,h as Readonly,Ke as __namedExportsOrder,Je as default};
