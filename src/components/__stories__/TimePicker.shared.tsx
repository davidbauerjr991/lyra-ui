import { useEffect, useId, useRef, type ReactNode } from "react";
import { ErrorIconSolid } from "../icons/error-icon-solid";

/* Shared by TimePicker.stories.tsx and TimePicker.variants.stories.tsx. */

export const HELP_TEXT = "Helpful context about this field.";

/* Today at the given hour and minute (24h). */
export function timeAt(hours: number, minutes = 0): Date {
  const d = new Date();
  d.setHours(hours, minutes, 0, 0);
  return d;
}

export function formatSelected(d: Date): string {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export const ERROR_TEXT = "Required";

/* `TimePicker` has no error prop, so this wrapper draws the error itself: a red
   border and tint on the field, "Required" under it, and `aria-invalid` /
   `aria-describedby` on the field's input for screen readers. */
export function TimePickerError({ error, children }: { error: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const errorId = useId();
  useEffect(() => {
    const input = ref.current?.querySelector<HTMLInputElement>("[role=combobox]");
    if (!input) return;
    if (error) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", errorId);
    } else {
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
  }, [error, errorId]);
  return (
    <div
      ref={ref}
      className={
        error
          ? "[&_div:has(>[role=combobox])]:!border-lyra-status-critical-strong [&_div:has(>[role=combobox])]:!bg-lyra-status-critical-subtle"
          : undefined
      }
    >
      {children}
      {error && (
        <div id={errorId} role="alert" className="flex items-center gap-1 mt-1.5">
          <ErrorIconSolid className="h-3.5 w-3.5 flex-shrink-0 text-lyra-status-critical-strong" aria-hidden="true" />
          <span className="lyra-body-sm text-lyra-status-critical-strong">{ERROR_TEXT}</span>
        </div>
      )}
    </div>
  );
}
