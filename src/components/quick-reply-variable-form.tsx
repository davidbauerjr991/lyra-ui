import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import { Tag } from "./tag";
import { Label } from "./label";
import { Select } from "./select";
import { Input } from "./input";
import { DatePicker } from "./date-picker";
import { TimePicker } from "./time-picker";
import { Button } from "./button";

/* ── QuickReplyVariableForm ──
   The "fill in the blanks" step for a `rich` `QuickReplyMenu` item (one
   with `{placeholder}` tokens in its template that need a real value
   before the message makes sense to send) — e.g. picking a business-day
   range for "Please allow {days} business days for this to take effect."
   before it can be inserted.

   Deliberately generic over `fields`/`values` rather than one hand-built
   form per quick reply: the caller (wherever the actual quick-reply
   content lives — app-specific business data, not this library) supplies
   a small field-type schema per item, and this renders the matching
   control (`Select`/`Input`/`DatePicker`/`TimePicker`) for each one, same
   shape as this repo's other schema-driven forms rather than a new
   one-off component per template. `preview` is a plain string, not
   computed here — interpolating `{token}` placeholders against a
   template string is business logic the caller already owns (it's the
   same string the template itself lives in), not something this
   presentational form should duplicate.

   Same "swap the quick-reply list for this instead, in the same on-screen
   spot" positioning contract as `QuickReplyMenu` — the caller decides
   where this renders, this component only owns its own internal layout. */

export type QuickReplyFieldType = "select" | "text" | "date" | "time";

export interface QuickReplyFieldOption {
  value: string;
  label: string;
}

export interface QuickReplyField {
  /** Matches the `{key}` placeholder token this field fills in */
  key: string;
  label: string;
  type: QuickReplyFieldType;
  /** Required for `type: "select"` */
  options?: QuickReplyFieldOption[];
  placeholder?: string;
}

export interface QuickReplyVariableFormProps {
  title: string;
  /** The `#id` this item was reached by — shown as a chip next to `title`,
   *  matching `QuickReplyMenu`'s own chip for the same item. */
  hashtagId: string;
  /** Same as `QuickReplyMenu`'s own `triggerChar` — decorative only, see
   *  that prop's doc comment. Defaults to `"#"`. */
  triggerChar?: string;
  fields: QuickReplyField[];
  /** Current value per field `key` — a `string` for "select"/"text", a
   *  `Date` for "date"/"time" (matching `DatePicker`/`TimePicker`'s own
   *  `value` type), `undefined` for not-yet-set. */
  values: Record<string, string | Date | undefined>;
  onValueChange: (key: string, value: string | Date | undefined) => void;
  /** Fully interpolated (or partially, for still-unfilled fields) preview
   *  text — plain string, rendered as-is in a read-only preview box. */
  preview: string;
  onCancel: () => void;
  onInsert: () => void;
  /** Optional — omit to hide the header's dismiss button (Cancel still
   *  covers the same "back out without inserting" action). */
  onClose?: () => void;
  insertLabel?: string;
  className?: string;
}

const QuickReplyVariableForm = React.forwardRef<HTMLDivElement, QuickReplyVariableFormProps>(
  (
    {
      title,
      hashtagId,
      triggerChar = "#",
      fields,
      values,
      onValueChange,
      preview,
      onCancel,
      onInsert,
      onClose,
      insertLabel = "Insert Message",
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-active bg-lyra-bg-surface-overlay shadow-lg",
          className
        )}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-lyra-border-active bg-lyra-bg-active-subtle px-4 py-2.5">
          <span className="flex min-w-0 items-center gap-2">
            <span className="lyra-body-md-emphasis text-lyra-fg-default truncate">{title}</span>
            <Tag label={`${triggerChar}${hashtagId}`} variant="default" className="shrink-0 font-mono" />
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 rounded-lyra-sm p-0.5 text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default"
            >
              <X className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 px-4 py-3">
          {fields.map((field) => {
            const raw = values[field.key];
            switch (field.type) {
              case "select":
                return (
                  <Select
                    key={field.key}
                    label={field.label}
                    options={field.options ?? []}
                    value={typeof raw === "string" ? raw : undefined}
                    onValueChange={(v) => onValueChange(field.key, v)}
                    size="sm"
                  />
                );
              case "text":
                return (
                  <Input
                    key={field.key}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={typeof raw === "string" ? raw : ""}
                    onChange={(e) => onValueChange(field.key, e.target.value)}
                    size="sm"
                  />
                );
              case "date":
                return (
                  <DatePicker
                    key={field.key}
                    label={field.label}
                    value={raw instanceof Date ? raw : undefined}
                    onChange={(d) => onValueChange(field.key, d)}
                    size="sm"
                  />
                );
              case "time":
                return (
                  <TimePicker
                    key={field.key}
                    label={field.label}
                    value={raw instanceof Date ? raw : undefined}
                    onChange={(d) => onValueChange(field.key, d)}
                    size="sm"
                  />
                );
              default:
                return null;
            }
          })}

          <div>
            <Label label="Preview" className="mb-1.5" />
            <div className="rounded-lyra-sm border border-lyra-border-subtle bg-lyra-bg-surface-canvas px-3 py-2 lyra-body-md text-lyra-fg-default">
              {preview}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-end gap-2 border-t border-lyra-border-subtle px-4 py-3">
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="default" onClick={onInsert}>
            {insertLabel}
          </Button>
        </div>
      </div>
    );
  }
);
QuickReplyVariableForm.displayName = "QuickReplyVariableForm";

export { QuickReplyVariableForm };
