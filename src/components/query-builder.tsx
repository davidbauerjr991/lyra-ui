import * as React from "react";
import ReactDOM from "react-dom";
import { Check, Copy, Plus, SlidersHorizontal } from "lucide-react";
import { cn } from "../lib/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from "./button";
import { Input } from "./input";
import { Popover } from "./popover";
import { FilterChip } from "./filter-chip";
import { ToggleGroup } from "./toggle-group";

/* ── QueryBuilder ──
 *  Builds a query out of criteria chips (a field, an operator and one or more
 *  values) joined by And / Or / Not, with nestable groups and a copyable
 *  plain-text description of the result. It is the body of `TableToolbar`'s
 *  Query Builder popover (pass it as `advancedSearchContent`), but it owns no
 *  popover or saving of its own — it only edits the query it is given, so it can
 *  also sit inline on a page or in any other container. An optional `footer`
 *  adds Cancel / Apply (and Save Search, when `onSave` is given) buttons; the
 *  Table popover uses the same `QueryBuilderFooter` in its own footer slot.
 *
 *  `popover` swaps the inline builder for a button that opens it in a popover
 *  and then shows the applied query with a Clear button — the standalone
 *  version of `TableToolbar`'s Query Builder button. In that mode `value` is the
 *  applied query and `onChange` fires on Apply / Clear (edits stay in a draft
 *  until then), rather than on every edit.
 *
 *  Fully controlled (CONTRIBUTING §3): the caller owns the `QueryGroup` and
 *  receives every edit through `onChange`. Which fields can be queried is
 *  entirely the caller's `criteria`; the component has no built-in field list.
 *  Evaluating a query against data is also the caller's job — walk the
 *  `QueryGroup` (`chips` + `subGroups`, joined by `logicOperator`). */

/* ── Types ── */

export interface QueryOption {
  value: string;
  label: string;
}

/** One field the user can build a condition on. */
export interface QueryCriteria {
  /** Stable id stored on each chip (`QueryChip.criteriaId`). */
  id: string;
  /** Field name shown on the chip and in the "Criteria" menu (e.g. "Department"). */
  label: string;
  /** Operators offered for this field; the first one is the default. */
  operators: QueryOption[];
  /** Values the user can pick for this field. */
  options: QueryOption[];
}

export type QueryLogic = "and" | "or" | "not";

/** One condition: `<criteria> <operator> <values>`. */
export interface QueryChip {
  uid: string;
  criteriaId: string;
  operator: string;
  values: string[];
}

/** A set of conditions and nested groups joined by one logic operator. */
export interface QueryGroup {
  id: string;
  logicOperator: QueryLogic;
  chips: QueryChip[];
  subGroups: QueryGroup[];
}

/* ── Helpers (also exported — callers need them to apply / describe a query) ── */

/** An empty query. */
export const emptyQuery = (): QueryGroup => ({ id: "query-root", logicOperator: "and", chips: [], subGroups: [] });

/** True when the query has at least one condition anywhere in it. */
export const queryHasCriteria = (g: QueryGroup): boolean =>
  g.chips.length > 0 || g.subGroups.some(queryHasCriteria);

/**
 * Plain-text description of a query, e.g. `(Department Equals 'Sales' AND Age Greater Than '30')`.
 * `criteria` supplies the field, operator and value labels. Returns "" for an empty query.
 */
export function describeQuery(g: QueryGroup, criteria: QueryCriteria[], depth = 0): string {
  const joiner = g.logicOperator === "not" ? " AND " : ` ${g.logicOperator.toUpperCase()} `;
  const parts = [
    ...g.chips.map((c) => {
      const def = criteria.find((d) => d.id === c.criteriaId);
      const field = def?.label ?? c.criteriaId;
      const op = def?.operators.find((o) => o.value === c.operator)?.label ?? c.operator;
      const vals =
        c.values.length > 0
          ? c.values.map((v) => `'${def?.options.find((o) => o.value === v)?.label ?? v}'`).join(", ")
          : "''";
      return `${field} ${op} ${vals}`;
    }),
    ...g.subGroups.map((s) => describeQuery(s, criteria, depth + 1)),
  ].filter(Boolean);
  if (!parts.length) return "";
  const inner = parts.join(joiner);
  if (g.logicOperator === "not") return `NOT (${inner})`;
  return depth === 0 && parts.length === 1 ? inner : `(${inner})`;
}

const LOGIC_ITEMS = [
  { value: "and", label: "And" },
  { value: "or", label: "Or" },
  { value: "not", label: "Not" },
];

let uidCounter = 100;
const nextUid = () => String(++uidCounter);
const makeChip = (def: QueryCriteria): QueryChip => ({
  uid: nextUid(),
  criteriaId: def.id,
  operator: def.operators[0]?.value ?? "",
  values: [],
});
const makeGroup = (): QueryGroup => ({ id: nextUid(), logicOperator: "and", chips: [], subGroups: [] });

/* ── Criteria menu ──
   Portal at z-[9999] (CONTRIBUTING §4 "portal wrappers"): the builder normally
   lives inside a Popover whose body clips overflow, so the list can't render
   in place. */
function CriteriaMenu({ criteria, onSelect }: { criteria: QueryCriteria[]; onSelect: (def: QueryCriteria) => void }) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState({ top: 0, left: 0 });
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 4, left: r.left });
    }
    setOpen((v) => !v);
  };
  React.useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return;
      if (btnRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  return (
    <>
      <Button ref={btnRef} variant="outline" size="md" onClick={handleOpen} aria-haspopup="menu" aria-expanded={open}>
        <Plus className="h-3.5 w-3.5" strokeWidth={2} /> Criteria
      </Button>
      {open &&
        ReactDOM.createPortal(
          <div
            ref={menuRef}
            role="menu"
            style={{ position: "fixed", top: pos.top, left: pos.left }}
            className="z-[9999] min-w-[180px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay p-2 shadow-lg"
          >
            {criteria.map((def) => (
              <button
                key={def.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  onSelect(def);
                  setOpen(false);
                }}
                className="flex w-full items-center rounded-lyra-sm px-3 py-2 text-left lyra-body-md text-lyra-fg-default transition-colors hover:bg-lyra-state-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lyra-border-focus"
              >
                {def.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}

/* ── One group (the root, or a nested sub-group) ── */
function GroupRow({
  group,
  criteria,
  isRoot,
  onUpdate,
  onDelete,
}: {
  group: QueryGroup;
  criteria: QueryCriteria[];
  isRoot?: boolean;
  onUpdate: (g: QueryGroup) => void;
  onDelete?: () => void;
}) {
  const addChip = (def: QueryCriteria) => onUpdate({ ...group, chips: [...group.chips, makeChip(def)] });
  const removeChip = (uid: string) => onUpdate({ ...group, chips: group.chips.filter((c) => c.uid !== uid) });
  const updateChip = (uid: string, p: Partial<QueryChip>) =>
    onUpdate({ ...group, chips: group.chips.map((c) => (c.uid === uid ? { ...c, ...p } : c)) });
  const addSub = () => onUpdate({ ...group, subGroups: [...group.subGroups, makeGroup()] });
  const updateSub = (id: string, g: QueryGroup) =>
    onUpdate({ ...group, subGroups: group.subGroups.map((s) => (s.id === id ? g : s)) });
  const removeSub = (id: string) => onUpdate({ ...group, subGroups: group.subGroups.filter((s) => s.id !== id) });

  return (
    <div className={!isRoot ? "w-full rounded-lyra-md border border-lyra-border-subtle bg-lyra-bg-surface-canvas p-3" : "w-full"}>
      <div className="mb-2 flex items-center gap-2">
        <ToggleGroup
          items={LOGIC_ITEMS}
          value={group.logicOperator}
          onValueChange={(v) => v && onUpdate({ ...group, logicOperator: v as QueryLogic })}
        />
        <span className="lyra-body-sm text-lyra-fg-secondary">
          {group.logicOperator === "and"
            ? "All conditions must match"
            : group.logicOperator === "or"
              ? "Any one condition must match"
              : "No conditions must match"}
        </span>
      </div>
      <div className="flex w-full flex-wrap items-center gap-2">
        {group.chips.map((chip) => {
          const def = criteria.find((d) => d.id === chip.criteriaId);
          // A chip whose field was removed from `criteria` can't be edited; drop it from view.
          if (!def) return null;
          return (
            <FilterChip
              key={chip.uid}
              label={def.label}
              operators={def.operators}
              selectedOperator={chip.operator}
              onOperatorChange={(op) => updateChip(chip.uid, { operator: op })}
              options={def.options}
              selectedValues={chip.values}
              onSelectionChange={(vals) => updateChip(chip.uid, { values: vals })}
              onRemove={() => removeChip(chip.uid)}
            />
          );
        })}
        <CriteriaMenu criteria={criteria} onSelect={addChip} />
        <Button variant="outline" size="md" onClick={addSub}>
          <Plus className="h-3.5 w-3.5" strokeWidth={2} />
          Group
        </Button>
        {!isRoot && onDelete && (
          <Button variant="ghost" size="md" onClick={onDelete}>
            Delete
          </Button>
        )}
      </div>
      {group.subGroups.length > 0 && (
        <div className="mt-3 flex flex-col gap-2">
          {group.subGroups.map((sub) => (
            <GroupRow
              key={sub.id}
              group={sub}
              criteria={criteria}
              onUpdate={(g) => updateSub(sub.id, g)}
              onDelete={() => removeSub(sub.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── QueryBuilder ── */

/* ── QueryBuilderFooter ──
 *  Cancel / Apply buttons with an optional "Save Search" button that asks for a
 *  name in a small popover. Used by `QueryBuilder`'s `footer` and by
 *  `TableToolbar`'s Query Builder popover, so both look and behave the same.
 *  Stateless about the query itself: it only reports which button was pressed. */

export interface QueryBuilderFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Called when Apply is pressed. */
  onApply?: () => void;
  /** Called when Cancel is pressed. */
  onCancel?: () => void;
  /** When provided, a Save Search button is shown; called with the trimmed name the user entered. */
  onSave?: (name: string) => void;
}

const QueryBuilderFooter = React.forwardRef<HTMLDivElement, QueryBuilderFooterProps>(
  ({ onApply, onCancel, onSave, className, ...props }, ref) => {
    const [saveOpen, setSaveOpen] = React.useState(false);
    const [saveName, setSaveName] = React.useState("");

    const closeSave = () => {
      setSaveOpen(false);
      setSaveName("");
    };
    const commitSave = () => {
      const name = saveName.trim();
      if (!name || !onSave) return;
      onSave(name);
      closeSave();
    };

    return (
      <div ref={ref} className={cn("flex items-center justify-end gap-2", className)} {...props}>
        {onSave && (
          <PopoverPrimitive.Root
            open={saveOpen}
            onOpenChange={(o) => {
              setSaveOpen(o);
              if (!o) setSaveName("");
            }}
          >
            {/* Anchor instead of Trigger — avoids aria-controls on a portal that may be unmounted */}
            <PopoverPrimitive.Anchor asChild>
              <Button variant="outline" onClick={() => setSaveOpen((v) => !v)}>
                Save Search
              </Button>
            </PopoverPrimitive.Anchor>
            <PopoverPrimitive.Portal>
              <PopoverPrimitive.Content
                side="top"
                sideOffset={8}
                avoidCollisions
                collisionPadding={4}
                className="z-50 w-[320px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg animate-in fade-in-0 slide-in-from-top-2 duration-150 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
              >
                <div className="px-4 pt-4 pb-1">
                  <h3 className="lyra-heading-sm text-lyra-fg-default mb-3">Save Search</h3>
                </div>
                <div className="flex flex-col gap-4 px-4 pb-4">
                  <Input
                    label="Search name"
                    placeholder="e.g. Active agents in Engineering"
                    value={saveName}
                    onChange={(e) => setSaveName(e.target.value)}
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === "Enter") commitSave();
                    }}
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={closeSave}>
                      Cancel
                    </Button>
                    <Button disabled={!saveName.trim()} onClick={commitSave}>
                      Save
                    </Button>
                  </div>
                </div>
              </PopoverPrimitive.Content>
            </PopoverPrimitive.Portal>
          </PopoverPrimitive.Root>
        )}
        <div className="flex-1" />
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onApply}>Apply</Button>
      </div>
    );
  },
);
QueryBuilderFooter.displayName = "QueryBuilderFooter";

export interface QueryBuilderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "popover"> {
  /** The fields the user can build conditions on. */
  criteria: QueryCriteria[];
  /** The current query. Use `emptyQuery()` for a blank one. In `popover` mode this is the APPLIED query. */
  value: QueryGroup;
  /** Called with the full updated query on every edit. In `popover` mode it is called on Apply (the new query) and on Clear (`emptyQuery()`) instead. */
  onChange: (query: QueryGroup) => void;
  /** Show the plain-text description of the query below the builder, with a copy button on hover (default: true). */
  showDescription?: boolean;
  /** Show a footer with Cancel and Apply buttons below the builder (default: false). Always on in `popover` mode. */
  footer?: boolean;
  /** Footer: called when Apply is pressed. Not used in `popover` mode (use `onChange`). */
  onApply?: () => void;
  /** Footer: called when Cancel is pressed. */
  onCancel?: () => void;
  /** Footer: when provided (and the footer is showing), a Save Search button asks for a name and calls this with it. */
  onSave?: (name: string) => void;
  /** Render a button that opens the builder in a popover, then shows what was applied with a Clear button, instead of the builder inline (default: false). */
  popover?: boolean;
  /** Popover mode: button text while nothing is applied (default: "Query Builder"). */
  label?: string;
  /** Popover mode: button text once a query is applied (default: "Applied Filters"). */
  appliedLabel?: string;
  /** Popover mode: popover title (default: "Query Builder"). */
  title?: string;
  /** Popover mode: show the applied query as text next to the button (default: true). */
  showSummary?: boolean;
  /** Popover mode: show the Clear button while a query is applied (default: true). */
  showClear?: boolean;
  /** Popover mode: controlled open state (leave out and it manages itself). */
  open?: boolean;
  /** Popover mode: called when the popover opens or closes. */
  onOpenChange?: (open: boolean) => void;
}

type QueryBuilderPanelProps = Omit<
  QueryBuilderProps,
  "popover" | "label" | "appliedLabel" | "title" | "showSummary" | "showClear" | "open" | "onOpenChange"
>;

/** The inline builder (description, optional footer). */
const QueryBuilderPanel = React.forwardRef<HTMLDivElement, QueryBuilderPanelProps>(
  ({ criteria, value, onChange, showDescription = true, footer = false, onApply, onCancel, onSave, className, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);
    const copiedTimer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    React.useEffect(() => () => clearTimeout(copiedTimer.current), []);
    const description = describeQuery(value, criteria) || "No criteria defined";

    const handleCopy = () => {
      navigator.clipboard.writeText(description).then(() => {
        setCopied(true);
        clearTimeout(copiedTimer.current);
        copiedTimer.current = setTimeout(() => setCopied(false), 2000);
      });
    };

    return (
      // Root has no padding of its own: the builder area carries `p-4` (the Query Builder
      // popover renders its content with no body padding — `TableToolbar` sets
      // `bodyPadding={false}`) and the description sits directly below it with no divider.
      <div ref={ref} className={cn("flex w-full flex-col", className)} {...props}>
        <div className="p-4">
          <GroupRow group={value} criteria={criteria} isRoot onUpdate={onChange} />
        </div>
        {showDescription && (
          // `group`: the copy button stays out of the way until the pointer is over the text
          // block; it also shows on keyboard focus and always on touch screens (no hover).
          <div
            role="group"
            aria-label="Criteria description"
            className="group relative py-3 pl-4 pr-12"
          >
            <p className="break-words lyra-body-sm text-lyra-fg-secondary">{description}</p>
            <Button
              variant="icon"
              size="icon"
              aria-label="Copy criteria description"
              tooltip={copied ? "Copied" : "Copy"}
              onClick={handleCopy}
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
            >
              {copied ? (
                <Check className="h-4 w-4 text-lyra-status-success-strong" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              )}
            </Button>
            {/* Announces the copy to screen readers (the button's own label doesn't change). */}
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? "Copied" : ""}
            </span>
          </div>
        )}
        {footer && (
          <QueryBuilderFooter
            onApply={onApply}
            onCancel={onCancel}
            onSave={onSave}
            className="border-t border-lyra-border-subtle px-4 py-3"
          />
        )}
      </div>
    );
  }
);
QueryBuilderPanel.displayName = "QueryBuilderPanel";

/** `popover` mode: a button that opens the builder, then shows what was applied and lets the user clear it. */
const QueryBuilderPopover = React.forwardRef<HTMLDivElement, QueryBuilderPanelProps & Pick<QueryBuilderProps, "label" | "appliedLabel" | "title" | "showSummary" | "showClear" | "open" | "onOpenChange">>(
  (
    {
      criteria,
      value,
      onChange,
      label = "Query Builder",
      appliedLabel = "Applied Filters",
      title = "Query Builder",
      showSummary = true,
      showClear = true,
      onSave,
      open: openProp,
      onOpenChange,
      showDescription,
      className,
      // Inline-only props that mean nothing here.
      footer: _footer,
      onApply: _onApply,
      onCancel: _onCancel,
      ...props
    },
    ref,
  ) => {
    const [openState, setOpenState] = React.useState(false);
    const open = openProp ?? openState;
    // Edits made while the popover is open live in a draft until Apply.
    const [draft, setDraft] = React.useState<QueryGroup>(value);

    const setOpen = (next: boolean) => {
      if (next && !open) setDraft(value); // every edit session starts from what is applied
      if (openProp === undefined) setOpenState(next);
      onOpenChange?.(next);
    };

    const applied = queryHasCriteria(value);
    const description = applied ? describeQuery(value, criteria) : "";

    return (
      <div ref={ref} className={cn("inline-flex min-w-0 items-center gap-2", className)} {...props}>
        <Popover
          open={open}
          onOpenChange={setOpen}
          showArrow={false}
          placement="bottom"
          align="start"
          maxHeight="calc(100vh - 120px)"
          // The builder carries its own padding end to end.
          bodyPadding={false}
          title={title}
          className="w-[min(1024px,90vw)]"
          content={<QueryBuilderPanel criteria={criteria} value={draft} onChange={setDraft} showDescription={showDescription} />}
          footer={
            <QueryBuilderFooter
              className="px-4 pb-4 pt-2"
              onSave={onSave}
              onCancel={() => setOpen(false)}
              onApply={() => {
                onChange(draft);
                setOpen(false);
              }}
            />
          }
        >
          <Button variant={applied ? "default" : "outline"} size="md">
            <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            {applied ? appliedLabel : label}
          </Button>
        </Popover>
        {applied && showSummary && (
          <p className="min-w-0 truncate lyra-body-sm text-lyra-fg-secondary" title={description}>
            {description}
          </p>
        )}
        {applied && showClear && (
          <Button variant="ghost" size="default" onClick={() => onChange(emptyQuery())}>
            Clear
          </Button>
        )}
      </div>
    );
  },
);
QueryBuilderPopover.displayName = "QueryBuilderPopover";

const QueryBuilder = React.forwardRef<HTMLDivElement, QueryBuilderProps>(
  ({ popover = false, label, appliedLabel, title, showSummary, showClear, open, onOpenChange, ...panelProps }, ref) =>
    popover ? (
      <QueryBuilderPopover
        ref={ref}
        label={label}
        appliedLabel={appliedLabel}
        title={title}
        showSummary={showSummary}
        showClear={showClear}
        open={open}
        onOpenChange={onOpenChange}
        {...panelProps}
      />
    ) : (
      <QueryBuilderPanel ref={ref} {...panelProps} />
    ),
);
QueryBuilder.displayName = "QueryBuilder";

export { QueryBuilder, QueryBuilderFooter };
