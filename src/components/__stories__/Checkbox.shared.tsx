/* Shared example data and demo components for Checkbox.stories.tsx (Default
   playground) and Checkbox.variants.stories.tsx (Variants pages). Not a
   stories file — it only holds what both use, so the two can't drift apart. */
import { useState } from "react";
import { Checkbox } from "../checkbox";

export const SAMPLE_LABEL = "Checkbox label";
export const SECONDARY_TEXT = "Secondary Text";
export const LONG_TEXT =
  "This is a very long checkbox text that should wrap to the next line when it exceeds the available width of the container. It demonstrates how text wrapping works in radio buttons.";

/** Checkbox values shown as matrix columns. `checked` is Checkbox's own prop value. */
export const VALUES = [
  { key: "unchecked", label: "Unchecked", checked: false },
  { key: "checked", label: "Checked", checked: true },
  { key: "indeterminate", label: "Indeterminate", checked: "indeterminate" },
] as const;

/** Select-all checkbox over three options, with the indeterminate state. */
export function InteractiveDemo() {
  const [items, setItems] = useState([
    { id: "a", label: "Option A", checked: false },
    { id: "b", label: "Option B", checked: true },
    { id: "c", label: "Option C", checked: false },
  ]);

  const allChecked = items.every((i) => i.checked);
  const someChecked = !allChecked && items.some((i) => i.checked);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Checkbox
          id="select-all"
          checked={allChecked ? true : someChecked ? "indeterminate" : false}
          onCheckedChange={(checked) =>
            setItems((prev) => prev.map((i) => ({ ...i, checked: !!checked })))
          }
        />
        <label htmlFor="select-all" className="lyra-body-md-emphasis text-lyra-fg-default">
          Select all
        </label>
      </div>
      <div className="ml-6 space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Checkbox
              id={item.id}
              checked={item.checked}
              onCheckedChange={(checked) =>
                setItems((prev) =>
                  prev.map((i) => (i.id === item.id ? { ...i, checked: !!checked } : i))
                )
              }
            />
            <label htmlFor={item.id} className="lyra-body-md text-lyra-fg-default">
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
