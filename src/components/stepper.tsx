import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";
import { Avatar } from "./avatar";
import { Separator } from "./separator";
import { ProgressBar } from "./progress-bar";
import { Button, type ButtonProps } from "./button";
import { ContainerFooter } from "./container-footer";

/* ── Stepper ──
   Shows where someone is in a short, ordered process (a setup flow, a
   multi-part form): each step is a numbered circle with a title, joined by a
   line. Finished steps show a check, the current step is filled blue, later
   steps are outlined.

   Radix has no Stepper primitive, so this is composed from lyra-ui parts and
   no new component was added:
     - the circle is an `Avatar` (sm, 32px): `primary` for the current step, an
       outlined `surface` for upcoming ones, and `primary` recolored green for
       finished ones. Avatar has no "solid success" color of its own (its
       `success` is the pale tint), hence the one `className` override below;
     - the line between steps is a `Separator` (Radix Separator).
   Plain semantics: an `<ol>` of `<li>`s, the current one marked
   `aria-current="step"`. It is display-only — move the step by changing
   `currentStep`.

   Layout is two independent choices plus a stretch flag:
     - `orientation` — "horizontal" row or "vertical" column;
     - `labelPlacement` — the title sits "inline" (beside the circle) or
       "below" it;
     - `fill` — stretch the connectors to use the available width (horizontal)
       or height (vertical); off, the stepper hugs its content with short
       connectors.

   Narrow containers: a horizontal stepper with several titles does not fit a
   phone. Below `compactBelow` px (default 425, measured on the stepper's own
   container, so a narrow card collapses it too) it switches to a compact
   summary: the current step's circle and title with "Step 2 of 5" beneath, and
   a segmented bar (one `ProgressBar` per step: finished green, current blue,
   upcoming empty). The full list stays in the DOM, visually hidden, so screen
   readers still get every step. Vertical steppers already fit narrow widths and
   never collapse.

   Back / Next: optionally the stepper also renders the two buttons that move
   through it (`navigation`). "below" puts them right under the steps; "footer"
   makes a bordered footer bar (a `ContainerFooter`) at the bottom. They are
   lyra-ui `Button`s, so they are styled through `backButtonProps` /
   `nextButtonProps` (variant, size, loading, ...). The stepper still owns no
   state: the buttons call `onBack` / `onNext` / `onFinish` and the parent
   changes `currentStep`. */

const COMPACT_BELOW_DEFAULT = 425;

export type StepperOrientation = "horizontal" | "vertical";
export type StepperLabelPlacement = "inline" | "below";

export type StepperNavigation = "none" | "below" | "footer";
/** Where the Back / Next buttons sit in their row: grouped at the start, middle or end, spread to opposite edges (Back left, Next right), or each stretched to share the row. */
export type StepperNavigationAlign = "left" | "center" | "right" | "split" | "full";
/** Anything a `Button` takes except what the stepper controls itself (label, click, type). */
export type StepperButtonProps = Omit<ButtonProps, "children" | "onClick" | "type">;

export interface StepperStep {
  /** The step's name ("Account details"). */
  title: string;
  /** Adds the small "Optional" caption under the title. */
  optional?: boolean;
  /** Mutes this step (circle, title, caption and the line after it) with the disabled colors, e.g. a step that is not available right now. Its status text for screen readers becomes "disabled". */
  disabled?: boolean;
  /** Marks the step as having a problem: its circle becomes a red "!" (whatever its status was) and screen readers hear ", error". Disabled wins if both are set. */
  error?: boolean;
}

export interface StepperProps
  extends Omit<React.OlHTMLAttributes<HTMLOListElement>, "children"> {
  /** The steps in order. */
  steps: StepperStep[];
  /** Zero-based index of the current step. Earlier steps show as finished, later ones as upcoming. Pass `steps.length` to show every step finished. Default 0. */
  currentStep?: number;
  /** "horizontal" (default) lays the steps in a row; "vertical" stacks them. */
  orientation?: StepperOrientation;
  /** "inline" (default) puts each title beside its circle; "below" puts it underneath. */
  labelPlacement?: StepperLabelPlacement;
  /** Stretch the connectors to fill the width (horizontal) or height (vertical) of the container. Off, the stepper is only as big as its content. Default false. */
  fill?: boolean;
  /** Wording of the caption shown for steps marked `optional`. Default "Optional". */
  optionalLabel?: string;
  /** Mutes the whole stepper with the disabled colors, same as setting `disabled` on every step. Use it while the process it shows is unavailable (a locked form, a paused flow). It is display-only, so nothing else changes. */
  disabled?: boolean;
  /** Back / Next buttons: "none" (default), "below" (right under the steps) or "footer" (a bordered bar at the bottom). */
  navigation?: StepperNavigation;
  /** How the buttons sit in their row. Default: "left" for "below", "right" for "footer". */
  navigationAlign?: StepperNavigationAlign;
  /** Called by the Back button. Move `currentStep` back in here. */
  onBack?: () => void;
  /** Called by the Next button. Move `currentStep` forward in here. */
  onNext?: () => void;
  /** Called by the button on the last step (labelled `finishLabel`). Falls back to `onNext`. */
  onFinish?: () => void;
  /** Back button text. Default "Back". */
  backLabel?: string;
  /** Next button text. Default "Next". */
  nextLabel?: string;
  /** Text of the Next button on the last step. Default "Finish". */
  finishLabel?: string;
  /** Style the Back button with any `Button` prop (`variant`, `size`, `disabled`, `loading`...). Default variant "outline". */
  backButtonProps?: StepperButtonProps;
  /** Style the Next button with any `Button` prop. Default variant "default" (primary). */
  nextButtonProps?: StepperButtonProps;
  /** Compact summary for narrow spaces (horizontal only): "auto" (default) turns it on when the stepper's container is narrower than `compactBelow`; `true` always, `false` never. */
  compact?: "auto" | boolean;
  /** Container width in px under which "auto" compact turns on. Default 425. */
  compactBelow?: number;
  /** Builds the compact caption, e.g. "Step 2 of 5". Override it to translate. */
  stepOfLabel?: (current: number, total: number) => string;
}

type StepStatus = "complete" | "current" | "upcoming";

/* Circle colors per status. Complete reuses Avatar's `primary` and swaps the
   blue for the success green; upcoming is the outlined `surface` Avatar with an
   active-colored ring and number. */
const INDICATOR_CLASS: Record<StepStatus, string> = {
  complete: "bg-lyra-status-success-strong",
  current: "",
  upcoming: "border-lyra-border-active text-lyra-fg-active-strong",
};

/* Disabled circle: the same shape per status, in disabled colors (upcoming keeps
   its outline, finished and current become a flat disabled fill). */
const DISABLED_INDICATOR_CLASS: Record<StepStatus, string> = {
  complete: "bg-lyra-bg-disabled text-lyra-fg-disabled",
  current: "bg-lyra-bg-disabled text-lyra-fg-disabled",
  upcoming: "border-lyra-border-disabled text-lyra-fg-disabled",
};

const STATUS_TEXT: Record<StepStatus, string> = {
  complete: "completed",
  current: "current step",
  upcoming: "not started",
};

/* Circle height in px terms (Avatar `sm` = 32px = h-8). The connector wrapper
   below borrows `h-8` / `w-8` so the line meets the circle's center exactly. */

function StepIndicator({
  index,
  status,
  disabled = false,
  error = false,
}: {
  index: number;
  status: StepStatus;
  disabled?: boolean;
  error?: boolean;
}) {
  // Error replaces the numbered/check circle with a red "!" (Avatar's `critical` tint plus a red ring).
  if (error && !disabled) {
    return <Avatar size="sm" color="critical" initials="!" className="border border-lyra-status-critical-strong [&>span]:text-base [&>span]:font-bold" />;
  }
  return (
    <Avatar
      size="sm"
      color={status === "upcoming" ? "surface" : "primary"}
      {...(status === "complete" ? { icon: Check } : { initials: String(index + 1) })}
      className={disabled ? DISABLED_INDICATOR_CLASS[status] : INDICATOR_CLASS[status]}
    />
  );
}

function Connector({
  orientation,
  labelPlacement,
  fill,
  disabled,
}: {
  orientation: StepperOrientation;
  labelPlacement: StepperLabelPlacement;
  fill: boolean;
  disabled: boolean;
}) {
  const line = disabled ? "border-lyra-border-disabled" : "border-lyra-border-medium";
  if (orientation === "horizontal") {
    return (
      <span
        aria-hidden="true"
        className={cn(
          // `h-8` = the circle's height, so the line sits on its center even when
          // the title is below the circle and the row is top-aligned.
          "flex h-8 items-center px-2",
          fill ? "min-w-6 flex-1" : labelPlacement === "inline" ? "w-12" : "w-24"
        )}
      >
        <Separator decorative className={line} />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      // `w-8` = the circle's width, so the line runs down its center.
      className={cn("flex w-8 justify-center py-2", fill ? "min-h-8 flex-1" : "h-10")}
    >
      <Separator orientation="vertical" decorative className={line} />
    </span>
  );
}

/* The compact (phone) view: where you are, in one line, plus a segmented bar.
   Decorative (`aria-hidden`): the real list is the visually hidden `<ol>`. */
function CompactSummary({
  steps,
  currentStep,
  optionalLabel,
  stepOfLabel,
  disabled,
}: {
  steps: StepperStep[];
  currentStep: number;
  optionalLabel: string;
  stepOfLabel: (current: number, total: number) => string;
  disabled: boolean;
}) {
  const total = steps.length;
  const done = currentStep >= total;
  const index = Math.min(Math.max(currentStep, 0), total - 1);
  const step = steps[index];
  const muted = disabled || !!step.disabled;
  const caption = [stepOfLabel(index + 1, total), step.optional ? optionalLabel : null].filter(Boolean).join(" · ");
  return (
    <div aria-hidden="true" className="flex w-full flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <StepIndicator index={index} status={done ? "complete" : "current"} disabled={muted} error={!!step.error} />
        <span className="flex min-w-0 flex-col">
          <span className={cn("truncate lyra-body-md-emphasis", muted ? "text-lyra-fg-disabled" : "text-lyra-fg-default")}>{step.title}</span>
          <span className={cn("break-words lyra-body-sm", muted ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary")}>{caption}</span>
        </span>
      </div>
      <div className="flex gap-1">
        {steps.map((segment, i) => (
          <span key={i} className="flex-1">
            <ProgressBar
              size="sm"
              indicatorClassName={disabled || segment.disabled ? "bg-lyra-border-medium" : undefined}
              value={i <= currentStep || segment.error ? 100 : 0}
              variant={segment.error ? "critical" : i < currentStep ? "success" : "default"}
              label={`Step ${i + 1}`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/* The Back / Next row. Back is disabled on the first step and Next once every
   step is finished; a disabled stepper disables both. */
function StepperButtons({
  placement,
  align,
  currentStep,
  total,
  disabled,
  onBack,
  onNext,
  onFinish,
  backLabel,
  nextLabel,
  finishLabel,
  backButtonProps,
  nextButtonProps,
}: {
  placement: "below" | "footer";
  align: StepperNavigationAlign;
  currentStep: number;
  total: number;
  disabled: boolean;
  onBack?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  backLabel: string;
  nextLabel: string;
  finishLabel: string;
  backButtonProps?: StepperButtonProps;
  nextButtonProps?: StepperButtonProps;
}) {
  const first = currentStep <= 0;
  const last = currentStep === total - 1;
  const finished = currentStep >= total;
  return (
    <ContainerFooter
      align={align === "split" || align === "center" ? "left" : align}
      bordered={placement === "footer"}
      className={cn(
        align === "split" && "justify-between",
        align === "center" && "justify-center",
        // No side padding so the buttons line up with the steps. Below sits right under them; the footer's
        // border has room above it and the bar drops to the bottom of any extra height (`mt-auto`).
        placement === "below" ? "p-0" : "mt-auto px-0 pb-0 pt-4"
      )}
      actions={
        <>
          <Button variant="outline" {...backButtonProps} disabled={disabled || first || backButtonProps?.disabled} onClick={onBack}>
            {backLabel}
          </Button>
          <Button
            variant="default"
            {...nextButtonProps}
            disabled={disabled || finished || nextButtonProps?.disabled}
            onClick={last ? (onFinish ?? onNext) : onNext}
          >
            {last || finished ? finishLabel : nextLabel}
          </Button>
        </>
      }
    />
  );
}

/**
 * A numbered step indicator: finished steps get a check, the current step is
 * filled, later steps are outlined, with a line between them.
 */
const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  (
    {
      steps,
      currentStep = 0,
      orientation = "horizontal",
      labelPlacement = "inline",
      fill = false,
      optionalLabel = "Optional",
      disabled = false,
      navigation = "none",
      navigationAlign,
      onBack,
      onNext,
      onFinish,
      backLabel = "Back",
      nextLabel = "Next",
      finishLabel = "Finish",
      backButtonProps,
      nextButtonProps,
      compact = "auto",
      compactBelow = COMPACT_BELOW_DEFAULT,
      stepOfLabel = (current, total) => `Step ${current} of ${total}`,
      className,
      ...props
    },
    ref
  ) => {
    const horizontal = orientation === "horizontal";
    const below = labelPlacement === "below";

    // Measure the container (not the window) so a narrow card collapses it too.
    const wrapRef = React.useRef<HTMLDivElement>(null);
    const [narrow, setNarrow] = React.useState(false);
    React.useLayoutEffect(() => {
      const el = wrapRef.current;
      if (compact !== "auto" || !el) return;
      const update = () => setNarrow(el.getBoundingClientRect().width < compactBelow);
      update();
      const observer = new ResizeObserver(update);
      observer.observe(el);
      return () => observer.disconnect();
    }, [compact, compactBelow]);
    const showCompact = horizontal && steps.length > 0 && (compact === true || (compact === "auto" && narrow));

    const list = (
      <ol
        ref={ref}
        className={cn(
          "m-0 list-none p-0",
          showCompact
            ? "sr-only"
            : horizontal
              ? cn("flex", fill ? "w-full" : "inline-flex")
              : cn("flex flex-col", fill && (navigation === "none" ? "h-full" : "min-h-0 flex-1"), below ? "items-center" : "items-start"),
          className
        )}
        {...props}
      >
        {steps.map((step, i) => {
          const status: StepStatus = i < currentStep ? "complete" : i === currentStep ? "current" : "upcoming";
          const last = i === steps.length - 1;
          const muted = disabled || !!step.disabled;
          return (
            <li
              key={`${i}-${step.title}`}
              aria-current={status === "current" ? "step" : undefined}
              className={cn(
                "flex",
                // Horizontal rows: centered when the title is beside the circle,
                // top-aligned when it is below (the connector then lines up with
                // the circle, not the whole block).
                horizontal ? cn(below ? "items-start" : "items-center", fill && !last && "flex-1") : cn("flex-col", below ? "items-center" : "items-start", fill && !last && "flex-1")
              )}
            >
              <div className={cn("flex", below ? "flex-col items-center gap-2 text-center" : "items-center gap-2.5")}>
                <StepIndicator index={i} status={status} disabled={muted} error={!!step.error} />
                {/* Capped width + `break-words`: long titles and captions wrap onto more lines (even one
                    unbroken word) instead of stretching the step. */}
                <span className={cn("flex min-w-0 flex-col break-words", below ? "max-w-48" : "max-w-56")}>
                  <span className={cn("lyra-body-md-emphasis", muted ? "text-lyra-fg-disabled" : "text-lyra-fg-default")}>{step.title}</span>
                  {step.optional && <span className={cn("lyra-body-sm", muted ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary")}>{optionalLabel}</span>}
                  <span className="sr-only">, {muted ? `${STATUS_TEXT[status]}, disabled` : step.error ? `${STATUS_TEXT[status]}, error` : STATUS_TEXT[status]}</span>
                </span>
              </div>
              {!last && <Connector orientation={orientation} labelPlacement={labelPlacement} fill={fill} disabled={muted} />}
            </li>
          );
        })}
      </ol>
    );

    const buttons =
      navigation !== "none" ? (
        <StepperButtons
          placement={navigation}
          align={navigationAlign ?? (navigation === "footer" ? "right" : "left")}
          currentStep={currentStep}
          total={steps.length}
          disabled={disabled}
          onBack={onBack}
          onNext={onNext}
          onFinish={onFinish}
          backLabel={backLabel}
          nextLabel={nextLabel}
          finishLabel={finishLabel}
          backButtonProps={backButtonProps}
          nextButtonProps={nextButtonProps}
        />
      ) : null;

    if (!horizontal && !buttons) return list;
    return (
      // Outer box: the container's full width (measured for compact mode) and, when filling, its full height.
      <div ref={wrapRef} className={cn("w-full", buttons && fill && "h-full")}>
        {/* Inner column: steps, then the button row. Filling, it spans the container (so a footer can sit at the
            bottom); otherwise it is only as wide as the steps, so the buttons line up with them. The compact
            summary always uses the full width. */}
        <div
          className={cn(
            buttons && "flex flex-col gap-5",
            buttons && (fill || showCompact ? "w-full" : "w-fit max-w-full"),
            buttons && fill && "h-full"
          )}
        >
          {list}
          {showCompact && (
            <CompactSummary steps={steps} currentStep={currentStep} optionalLabel={optionalLabel} stepOfLabel={stepOfLabel} disabled={disabled} />
          )}
          {buttons}
        </div>
      </div>
    );
  }
);
Stepper.displayName = "Stepper";

export { Stepper };
