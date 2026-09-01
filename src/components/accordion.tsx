import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Built on `@radix-ui/react-accordion`. Previously hand-rolled (own
 * open/close state, plain `<button>` rows, and a `CollapsiblePanel` —
 * still in tree-menu.tsx, shared with `TreeMenu` — that measured
 * `scrollHeight` via a `ResizeObserver` and animated height in JS). Radix's
 * `Root` now owns all open/close and single-vs-multiple toggle logic
 * directly, and the height animation runs off `AccordionPrimitive.Content`'s
 * own `--radix-accordion-content-height` CSS variable (see the
 * `accordion-down`/`accordion-up` keyframes in tailwind.config.js — 200ms
 * ease-in-out, matching the original's own transition timing exactly) —
 * see CONTRIBUTING.md / the "Headless Primitives" exercise for the side-by-side
 * comparison this replaced. Public API (`AccordionProps`, `AccordionItem`)
 * is unchanged from before this swap — every existing caller (`dashboard-
 * queue.tsx`, and this component's own Storybook stories) needed zero
 * changes.
 *
 * `collapsible` is set on the single-mode `Root` so clicking the currently
 * open item closes it again — Radix's own default (without that flag) is
 * that one item is always open and re-clicking it does nothing, which
 * doesn't match this component's original behavior.
 */

/* ── Types ── */

export interface AccordionItem {
  /** Unique identifier */
  id: string;
  /** Trigger label. Accepts a plain string or richer content (e.g. a name + status Tag) */
  title: React.ReactNode;
  /** Optional secondary text rendered below the title. Accepts a plain string or richer content (e.g. a multi-line summary) */
  subhead?: React.ReactNode;
  /** Optional icon rendered left of the title */
  icon?: React.ReactNode;
  /** Content rendered when the item is open */
  content: React.ReactNode;
  /**
   * Extra content rendered at the end of the trigger row, between the
   * title/subhead and the chevron — e.g. a couple of `DashboardCard`'s
   * `Metric`s ("Skills" "4", "Contacts" "8") inline with a queue row.
   * Rendered inside the same trigger button as the rest of the row, so
   * anything passed here should stay non-interactive (display-only); an
   * interactive control here would be a button-inside-a-button.
   */
  endSlot?: React.ReactNode;
  /** Prevent this item from being opened */
  disabled?: boolean;
}

export interface AccordionProps {
  /** Accordion items */
  items: AccordionItem[];
  /**
   * "single" — only one item open at a time (default)
   * "multiple" — multiple items can be open simultaneously
   */
  type?: "single" | "multiple";
  /** Controlled open id (single mode) */
  value?: string;
  /** Controlled open ids (multiple mode) */
  values?: string[];
  /** Default open id (single, uncontrolled) */
  defaultValue?: string;
  /** Default open ids (multiple, uncontrolled) */
  defaultValues?: string[];
  /** Called when open item changes (single mode) */
  onValueChange?: (value: string) => void;
  /** Called when open items change (multiple mode) */
  onValuesChange?: (values: string[]) => void;
  /** Additional className on the root element */
  className?: string;
}

/* ── Per-item row (trigger + content + divider) ── */

function AccordionRow({ item, isOnlyItem }: { item: AccordionItem; isOnlyItem: boolean }) {
  return (
    <AccordionPrimitive.Item value={item.id} disabled={item.disabled}>
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          className={cn(
            "group w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-inset",
            item.disabled
              ? "cursor-not-allowed"
              : "hover:bg-lyra-state-hover active:bg-lyra-state-pressed cursor-pointer"
          )}
        >
          {/* Title (+ icon) row + optional subhead below. Icon sits in its
              own inner row with the title — not as a sibling of the whole
              title+subhead+endSlot block — so it centers against the title
              text specifically rather than against whichever sibling is
              tallest (the metric `endSlot` boxes, once those shipped). */}
          <span className="flex-1 flex flex-col min-w-0">
            <span className="flex items-center gap-2 min-w-0">
              {item.icon && (
                <span
                  className={cn(
                    "flex-shrink-0",
                    item.disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary"
                  )}
                >
                  {item.icon}
                </span>
              )}
              <span
                className={cn(
                  "lyra-body-md truncate",
                  item.disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-default"
                )}
              >
                {item.title}
              </span>
            </span>
            {item.subhead && (
              <span
                className={cn(
                  "lyra-body-sm",
                  // Indent to align under the title text (not the icon) —
                  // only when there is an icon to clear; pl-7 (28px) = the
                  // icon's own width (h-5, 20px) plus the gap-2 (8px)
                  // between it and the title.
                  item.icon && "pl-7",
                  item.disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary"
                )}
              >
                {item.subhead}
              </span>
            )}
          </span>

          {/* End slot — e.g. a couple of DashboardCard `Metric`s inline with the row */}
          {item.endSlot && (
            <span className="flex flex-shrink-0 items-center gap-2">{item.endSlot}</span>
          )}

          {/* Chevron — `data-state` lives on Trigger itself (Radix mirrors
              it from the parent Item), so the unnamed "group" on Trigger
              is all that's needed here. */}
          <ChevronDown
            className={cn(
              "h-5 w-5 flex-shrink-0 transition-transform duration-200",
              "group-data-[state=open]:rotate-180",
              item.disabled ? "text-lyra-fg-disabled" : "text-lyra-fg-secondary"
            )}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>

      {/* Collapsible content — height animation via
          --radix-accordion-content-height (tailwind.config.js). */}
      <AccordionPrimitive.Content
        className={cn(
          "overflow-hidden",
          "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
        )}
      >
        <div className="p-4">{item.content}</div>
      </AccordionPrimitive.Content>

      {/* Divider — rendered after every item, including the last one, EXCEPT
          when this Accordion only has one item total. A single-item
          Accordion's own outer container already ends in a rounded border
          right below the content (see `CUSTOMER_INFO_ACCORDION_CLASSNAME`
          in AgentNextGenPage.tsx and similar single-item usages) — with
          only one row, this divider sits directly above that border with
          nothing below it to separate from, reading as a stray extra line
          rather than an actual divider between rows. Multi-item Accordions
          keep it after the last row too (unchanged) since removing it there
          would make the last row visually stick to the container's bottom
          edge closer than every other row sticks to its own divider above —
          this is specifically about the single-item case having nothing to
          divide in the first place. */}
      {!isOnlyItem && <div className="border-b border-lyra-border-subtle" />}
    </AccordionPrimitive.Item>
  );
}

/* ── Accordion ── */

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      type = "single",
      value,
      values,
      defaultValue,
      defaultValues,
      onValueChange,
      onValuesChange,
      className,
    },
    ref
  ) => {
    const isControlledSingle = value !== undefined;
    const isControlledMulti = values !== undefined;

    if (type === "multiple") {
      return (
        <AccordionPrimitive.Root
          ref={ref}
          type="multiple"
          className={cn("w-full", className)}
          value={isControlledMulti ? values : undefined}
          defaultValue={!isControlledMulti ? defaultValues : undefined}
          onValueChange={onValuesChange}
        >
          {items.map((item) => (
            <AccordionRow key={item.id} item={item} isOnlyItem={items.length === 1} />
          ))}
        </AccordionPrimitive.Root>
      );
    }

    return (
      <AccordionPrimitive.Root
        ref={ref}
        type="single"
        collapsible
        className={cn("w-full", className)}
        value={isControlledSingle ? value : undefined}
        defaultValue={!isControlledSingle ? defaultValue : undefined}
        onValueChange={onValueChange}
      >
        {items.map((item) => (
          <AccordionRow key={item.id} item={item} isOnlyItem={items.length === 1} />
        ))}
      </AccordionPrimitive.Root>
    );
  }
);

Accordion.displayName = "Accordion";

/* ── Headless accordion — trigger-less building blocks ── */

/**
 * Bare, unstyled counterparts to `Accordion` for layouts its opinionated
 * rows can't express: an external element (e.g. a pill button) drives the
 * open state, there is no built-in trigger row, and no divider chrome —
 * the shape agent-next-gen-v2's transcript needs for its Session Details
 * and collapsed-session animations, which previously imported
 * `@radix-ui/react-accordion` directly to get it.
 *
 * Same Radix mechanism as `Accordion` (`Root`/`Item`/`Content` pass-
 * throughs), and `AccordionHeadlessContent` bakes in the same
 * `--radix-accordion-content-height`-driven `accordion-down`/`accordion-up`
 * height animation (tailwind.config.js, 200ms ease-in-out) — so consumers
 * get the canonical animation without ever touching the Radix package
 * themselves. Everything else (open-state wiring via `value`/
 * `onValueChange`, `type`/`collapsible`, classNames on any part) passes
 * straight through, per Radix's own API.
 */

export type AccordionHeadlessProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;

const AccordionHeadless = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionHeadlessProps
>((props, ref) => <AccordionPrimitive.Root ref={ref} {...props} />);
AccordionHeadless.displayName = "AccordionHeadless";

export type AccordionHeadlessItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

const AccordionHeadlessItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionHeadlessItemProps
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />);
AccordionHeadlessItem.displayName = "AccordionHeadlessItem";

export type AccordionHeadlessContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

const AccordionHeadlessContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionHeadlessContentProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      className
    )}
    {...props}
  />
));
AccordionHeadlessContent.displayName = "AccordionHeadlessContent";

export { Accordion, AccordionHeadless, AccordionHeadlessItem, AccordionHeadlessContent };
