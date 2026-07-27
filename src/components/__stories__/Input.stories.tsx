import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pencil, Settings, Copy } from "lucide-react";
import { Input } from "../input";
import { Label } from "../label";
import { ActionIconButton } from "../actions";
import { Button } from "../button";
import { Separator } from "../separator";
import { Switch } from "../switch";
import { ErrorIcon } from "../icons/error-icon";
import { cn } from "../../lib/utils";

const meta: Meta<typeof Input> = {
  title: "Custom Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    required: { control: "boolean" },
    /** "sm" (32px) is for dense contexts — a table toolbar's quick search/
     *  filter row is the motivating case — vs. the "md" (36px) default
     *  every other field in the library uses. */
    size: { control: "select", options: ["sm", "md"], name: "Size" },
    /* Story-only toggles below — not real `Input` props. Same pattern as
       Label.stories.tsx/ContainerHeader.stories.tsx's own Default: lets this
       story act as an interactive playground across every documented
       layout (Label Only, Label With Buttons, Horizontal), not just the
       plain input's own states. Consumed and stripped out of `args` inside
       Default's `render`, below, before the rest are spread onto `Input`. */
    showLabelOnly:   { control: "boolean", name: "Label only" },
    showWithButtons: { control: "boolean", name: "With buttons" },
    /* Only takes effect when both "Label only" and "With buttons" are
       checked — that's the one layout where the buttons sit inline next to
       an actual value (the "Read-only value" text) for "left"/"right" to
       mean anything; the buttons-only layout (no label only) has no value
       to position around. */
    buttonsPosition: {
      control: "select",
      options: ["left", "right", "both"],
      name: "Buttons position",
    },
    /* Color/style, independent of shape (below) — every real `Button`
       variant (button.tsx) except its own "icon" one: that's just `ghost`
       with an extra hover tweak, redundant here now that "Icon buttons"
       below already controls icon-vs-text shape on its own. Works on icon
       *or* text buttons, e.g. "default" + "Icon buttons" on gives a
       primary-colored icon button, not just the one neutral look
       `ActionIconButton` was previously the only way to reach. */
    buttonVariant: {
      control: "select",
      options: ["default", "destructive", "warning", "success", "outline", "ghost"],
      name: "Button type",
    },
    /* Shape: on renders icon-only buttons (Pencil/Settings), off renders
       text buttons labeled "Action" (matching ContainerHeader.stories.tsx's
       own "With buttons" toggle). Independent of `buttonVariant` above —
       any color works with either shape. */
    buttonIconOnly: { control: "boolean", name: "Icon buttons" },
    /* Maps onto `Button`'s icon-size scale (icon-md/icon-lg/icon-xl/icon-2xl
       — button.tsx) when `buttonIconOnly` is on, or its matching non-icon
       size names otherwise. */
    buttonSize: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      name: "Button size",
    },
    /* How many placeholder buttons render — 3 is the cap, matching the
       widest real usage this documents (no layout in this library composes
       more than a small handful of trailing actions). */
    buttonCount: {
      control: "select",
      options: [1, 2, 3],
      name: "Button count",
    },
    showHelp:        { control: "boolean", name: "Help" },
    showHorizontal:  { control: "boolean", name: "Horizontal" },
    showError:       { control: "boolean", name: "Error" },
    /* Off (default): the plain field is full width, same as every other
       `Input` state above (Default/Filled/Disabled/etc. — no width
       constraint of their own). On: bounds it between a 240px min-width
       and a 320px max-width — the same range `Select.stories.tsx` wraps
       every one of its own demos in (and Form Grid's "Static Width"
       fields, Breakpoints.stories.tsx, use for the same reason), reused
       here rather than picking an arbitrary new value. */
    maxWidth: { control: "boolean", name: "Max width" },
  } as Meta<typeof Input>["argTypes"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
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
    maxWidth: false,
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
    // xl/icon-xl=40px) — NOT `ActionIconButton`'s legacy size names
    // (actions.tsx), which intentionally map its "sm" a tier bigger than
    // `Button`'s own "sm". This story's `buttonSize` control is meant to
    // read as one shared height scale across both shapes, so an icon
    // button and a text button at the same size sit flush.
    const ICON_SIZE_MAP: Record<string, string> = {
      sm: "icon-sm",
      default: "icon-md",
      lg: "icon-lg",
      xl: "icon-xl",
    };

    // One icon per possible `buttonCount` slot — sliced below rather than
    // repeating the same icon three times, so each placeholder button still
    // reads as a distinct action.
    const PLACEHOLDER_ICONS = [Pencil, Settings, Copy];

    const renderButtons = () =>
      buttonIconOnly ? (
        <>
          {PLACEHOLDER_ICONS.slice(0, buttonCount).map((Icon, i) => (
            <Button key={i} variant={buttonVariant} size={ICON_SIZE_MAP[buttonSize]} title="Placeholder action">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          ))}
        </>
      ) : (
        <>
          {Array.from({ length: buttonCount }).map((_, i) => (
            <Button key={i} variant={buttonVariant} size={buttonSize}>Action</Button>
          ))}
        </>
      );

    const labelHelpText = showHelp ? "Helpful context about this field." : undefined;

    // Same error markup Input itself renders (input.tsx) below its field —
    // these layouts have no input box to attach it to, but "Required"/error
    // should still surface the same way when the toggle is on.
    const errorMessage = showError && (
      <div className="flex items-center gap-1 mt-1.5">
        <ErrorIcon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
        <span className="lyra-body-sm text-lyra-status-critical-strong">Required</span>
      </div>
    );

    // Layout toggles are mutually exclusive alternate renderings, not
    // modifiers of the plain `Input` below — `horizontal` is checked first
    // since it's a distinct row layout that still needs to know whether
    // "Label only" is on (static value text) or off (an actual, editable
    // `Switch` — no `label` prop on it, since the caption on the left
    // already serves that role) rather than always assuming one or the
    // other. `required`, `showHelp`, and `showError` apply across every
    // layout here, not just the plain `Input`.
    if (showHorizontal) {
      return (
        <div className="w-full">
          <div className="flex items-center justify-between gap-3">
            <Label label={label} required={required} labelHelpText={labelHelpText} />
            <div className="flex items-center gap-0.5">
              {showWithButtons &&
                (buttonsPosition === "left" || buttonsPosition === "both") &&
                renderButtons()}
              {showLabelOnly ? (
                <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span>
              ) : (
                <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
              )}
              {showWithButtons &&
                (buttonsPosition === "right" || buttonsPosition === "both") &&
                renderButtons()}
            </div>
          </div>
          {/* Neither the static value text nor the label-less `Switch` has
              its own built-in error text (unlike `Input`, which renders it
              below itself) — always show the shared `errorMessage` here. */}
          {errorMessage}
          <Separator className="mt-3" />
        </div>
      );
    }

    if (showLabelOnly && showWithButtons) {
      // Combined: buttons sit inline next to the supporting-text value
      // (not below the label like the buttons-only case), since there's no
      // separate value row here to place them under — this *is* the value
      // row. `buttonsPosition` controls which side(s) they land on.
      return (
        <div className="w-72">
          <Label label={label} required={required} labelHelpText={labelHelpText} />
          <div className="flex items-center gap-0.5">
            {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
            <span className="lyra-body-md text-lyra-fg-secondary">Read-only value</span>
            {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
          </div>
          {errorMessage}
        </div>
      );
    }

    if (showLabelOnly) {
      return (
        <div className="w-72">
          <Label
            label={label}
            supportingText="Read-only value"
            required={required}
            labelHelpText={labelHelpText}
          />
          {errorMessage}
        </div>
      );
    }

    if (showWithButtons) {
      // Reached only once "Label only" is already ruled out by the branches
      // above, so this always has a real, editable `Input` — buttons sit
      // alongside it in the same row, positioned by `buttonsPosition`,
      // instead of the field disappearing whenever buttons are shown.
      // No `justify-center` — dropping it left-aligns the input directly
      // under the label (a standard field's own layout) whenever the
      // buttons trail on the right, rather than centering the whole group.
      // `items-start`, not `items-center` — `Input` renders its own error
      // text below itself (input.tsx) when `error` is set, which makes its
      // wrapper taller than the buttons; centering the row would then
      // center the buttons against that taller *block* instead of against
      // the input box itself, drifting them out of line with it. Aligning
      // tops keeps the buttons level with the input box regardless of
      // whether the error text is showing.
      // `gap-1.5` between the label and this row matches `Input`'s own
      // label-to-field spacing (input.tsx's `mb-1.5` on its internal
      // `Label`), not the `gap-0` the buttons-only/no-input layouts above
      // use.
      // No separate `errorMessage` here — `Input` already renders its own
      // error text below the field; adding the shared one too would show
      // "Required" twice.
      // `maxWidth` was previously ignored entirely here — a hardcoded
      // `w-72`/`w-48` regardless of the control, so toggling "Max width"
      // off still left the field capped instead of going full width. Now
      // matches the plain branch below: no cap by default (the wrapper is
      // full width, and `Input`'s own `flex-1` grows to fill whatever
      // room the buttons leave), `min-w-[240px] max-w-[320px]` on the
      // wrapper when "Max width" is on — a 320px ceiling and 240px floor,
      // same standard as the plain branch below and Form Grid's "Static
      // Width" fields (Breakpoints.stories.tsx).
      return (
        <div className={cn("flex flex-col gap-1.5", maxWidth ? "min-w-[240px] max-w-[320px]" : "w-full")}>
          <Label label={label} required={required} labelHelpText={labelHelpText} />
          <div className="flex items-start gap-0.5">
            {(buttonsPosition === "left" || buttonsPosition === "both") && renderButtons()}
            <Input
              {...rest}
              className="flex-1 min-w-0"
              error={showError ? "Required" : undefined}
            />
            {(buttonsPosition === "right" || buttonsPosition === "both") && renderButtons()}
          </div>
        </div>
      );
    }

    return (
      <Input
        {...rest}
        label={label}
        required={required}
        labelHelpText={labelHelpText}
        error={showError ? "Required" : undefined}
        className={maxWidth ? "min-w-[240px] max-w-[320px]" : undefined}
      />
    );
  },
};

export const Filled: Story = {
  name: "Filled",
  args: {
    label: "Input Label",
    defaultValue: "Text",
  },
};

export const Disabled: Story = {
  name: "Disabled",
  args: {
    label: "Input Label",
    placeholder: "Text",
    disabled: true,
  },
};

export const Readonly: Story = {
  name: "Readonly",
  args: {
    label: "Input Label",
    value: "Read-only value",
    readonly: true,
  },
};

/* ── Label only — no input box at all ──
   For plain display values (not an editable-looking control), use `Label`'s
   own `supportingText` instead of this component's `readonly` state:
   `readonly` still renders an actual (locked) input box, just muted, which
   implies a control that could theoretically be unlocked. `Label` +
   `supportingText` renders a caption with a value line underneath and
   nothing that reads as an input at all — see `CampaignDetailsModal`'s
   `LabelField` in the Outbound-Campaigns app for the real usage this
   documents. */
export const LabelOnly: Story = {
  name: "Label Only",
  render: () => (
    <div className="w-72">
      <Label label="Input Label" supportingText="Read-only value" />
    </div>
  ),
};

/* ── Label with buttons — action content instead of a value ──
   Some fields show button(s) instead of a plain value or an input at all
   (e.g. Campaign State's edit-pencil `ActionIconButton` in the
   Outbound-Campaigns app's Campaign Details modal). That app was hand-
   rolling the caption as `<span className="lyra-label text-lyra-fg-
   secondary">`, which mutes it to the same gray `readonly` uses — wrong,
   since these aren't locked/readonly controls, just a label paired with
   arbitrary action content. Use the real `Label` component instead (no
   `supportingText`, no `readonly`) so the caption renders at its correct
   default `lyra-label text-lyra-fg-default`, then place any buttons
   directly below it — placeholders here, but any button composition
   works the same way. */
export const LabelWithButtons: Story = {
  name: "Label With Buttons",
  render: () => (
    <div className="flex flex-col gap-0 w-72">
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
  ),
};

/* ── Label horizontal with separator — label left, value right, then a rule ──
   Same label-left/value-right row as Label.stories.tsx's "Horizontal" story
   (value styled with `supportingText`'s own typography,
   `lyra-body-md text-lyra-fg-secondary`), plus a `Separator` underneath to
   close off the row — e.g. a stack of detail rows where each one needs its
   own dividing line rather than relying on a single border around the
   whole list. */
export const LabelHorizontalWithSeparator: Story = {
  name: "Label Horizontal With Separator",
  render: () => (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <Label label="Agent Name" />
        <span className="lyra-body-md text-lyra-fg-secondary">Sarah Connor</span>
      </div>
      <Separator />
    </div>
  ),
};

export const Error: Story = {
  name: "Error",
  args: {
    label: "Input Label",
    defaultValue: "Text",
    error: "Required",
  },
};

export const AllStates: Story = {
  name: "All States",
  render: () => (
    <div className="flex flex-col gap-6 max-w-[400px]">
      <Input label="Input Label" placeholder="Text" />
      <Input label="Input Label" defaultValue="Text" />
      <Input label="Input Label" disabled placeholder="Text" />
      <Input label="Input Label" defaultValue="Text" error="Required" />
    </div>
  ),
};
