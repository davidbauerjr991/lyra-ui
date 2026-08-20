import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../lib/utils";
import { Label } from "./label";
import { Menu } from "./menu";
import { ClearButton } from "./clear-button";

/* ── Types ── */

export interface AutocompleteOption {
  value: string;
  label: string;
  /** Optional icon/element rendered before the label in the dropdown and input */
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  labelHelpText?: string;
  required?: boolean;
  /** Show all options when input is empty (default: true) */
  showAllOnEmpty?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  className?: string;
  id?: string;
  /**
   * Field height. "md" (36px, default) or "sm" (32px) for dense contexts.
   * Only the closed field shrinks — the open dropdown's rows stay
   * full-size, same as `Select`'s trigger-only sizing.
   */
  size?: "sm" | "md";
}

/* ── Component ── */

const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  ({
    options,
    value,
    onChange,
    placeholder = "Search…",
    disabled,
    readonly,
    label,
    labelHelpText,
    required,
    showAllOnEmpty = true,
    emptyMessage = "No Items Found",
    className,
    id,
    size = "md",
  }, ref) => {
    const autoId   = React.useId();
    const inputId  = id ?? autoId;
    const listId   = `${inputId}-list`;
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Find the label of the currently selected value
    const selectedOption = options.find((o) => o.value === value);

    const [open,        setOpen]        = React.useState(false);
    const [inputValue,  setInputValue]  = React.useState(selectedOption?.label ?? "");
    const [activeIndex, setActiveIndex] = React.useState<number>(-1);

    // Sync external value changes
    React.useEffect(() => {
      if (!open) {
        setInputValue(selectedOption?.label ?? "");
      }
    }, [value, open]);

    // Filter options based on input
    const filtered = React.useMemo(() => {
      const q = inputValue.trim().toLowerCase();
      if (!q && showAllOnEmpty) return options;
      if (!q) return [];
      return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [inputValue, options, showAllOnEmpty]);

    // Reset active index when filtered list changes
    React.useEffect(() => {
      setActiveIndex(-1);
    }, [filtered.length]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setOpen(true);
      // If user edits text, clear the selection
      if (selectedOption && e.target.value !== selectedOption.label) {
        onChange?.(undefined);
      }
    };

    const handleSelect = (option: AutocompleteOption) => {
      setInputValue(option.label);
      onChange?.(option.value);
      setOpen(false);
      inputRef.current?.focus();
    };

    const handleClear = () => {
      setInputValue("");
      onChange?.(undefined);
      setOpen(false);
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!open) {
        if (e.key === "ArrowDown" || e.key === "Enter") {
          setOpen(true);
          return;
        }
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((i) => Math.max(i - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0 && filtered[activeIndex] && !filtered[activeIndex].disabled) {
            handleSelect(filtered[activeIndex]);
          }
          break;
        case "Escape":
          setOpen(false);
          setInputValue(selectedOption?.label ?? "");
          break;
        case "Tab":
          setOpen(false);
          break;
      }
    };

    const inputShell = cn(
      "relative flex w-full items-center rounded-lyra-sm border lyra-body-md transition-colors",
      size === "sm" ? "h-8" : "h-9",
      "bg-lyra-bg-field text-lyra-fg-default",
      "border-lyra-border-strong hover:border-lyra-state-border-hover-neutral",
      // ADA-compliance focus indicator: same focus-visible ring
      // buttons/tabs use (see input.tsx for the fuller comment).
      // `focus-within` covers real keyboard focus on the <input>;
      // `open` is kept alongside it so the ring also shows while the
      // dropdown itself is open (e.g. right after a mouse-driven open).
      // Per explicit follow-up request, the `focus-within` ring is scoped
      // to keyboard-only via our own tracked input-modality attribute
      // (input-modality.ts), NOT `:has(:focus-visible)` — that pseudo-class
      // can't distinguish mouse from keyboard focus on a text field (see
      // input-modality.ts's own fuller comment) — unlike the other fields
      // touched by that follow-up, there's no PRE-unification mouse-focus
      // ring to restore here (this field had none — see task history), so
      // mouse focus on its own still shows nothing, matching that true
      // "before". `open`'s own ring is untouched — it's a distinct
      // "dropdown is open" indicator, not a focus-quality one, per its own
      // comment.
      "focus-within:border-lyra-border-active",
      "[html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-2 [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-lyra-border-focus [html[data-lyra-input-modality=keyboard]_&:focus-within]:ring-offset-2",
      open && "border-lyra-border-active ring-2 ring-lyra-border-focus ring-offset-2",
      disabled && "bg-lyra-bg-disabled border-transparent cursor-not-allowed pointer-events-none",
      readonly && "bg-lyra-bg-surface-canvas cursor-default pointer-events-none"
    );

    return (
      <div ref={ref} className={className}>
        {label && (
          <Label
            label={label}
            labelFor={inputId}
            labelHelpText={labelHelpText}
            required={required}
            disabled={disabled}
            readonly={readonly}
            className="mb-1.5"
          />
        )}

        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <PopoverPrimitive.Anchor asChild>
            <div
              className={inputShell}
              onClick={() => !disabled && !readonly && setOpen(true)}
            >
              {/* Show selected option's icon inside the input */}
              {selectedOption?.icon && !open && (
                <span className="pl-3 flex items-center shrink-0 text-base leading-none select-none">
                  {selectedOption.icon}
                </span>
              )}
              <input
                ref={inputRef}
                id={inputId}
                type="text"
                role="combobox"
                aria-expanded={open}
                aria-autocomplete="list"
                aria-controls={listId}
                aria-activedescendant={activeIndex >= 0 ? `${inputId}-opt-${activeIndex}` : undefined}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readonly}
                autoComplete="off"
                className={cn(
                  "flex-1 bg-transparent outline-none pr-1 truncate placeholder:text-lyra-fg-disabled disabled:cursor-not-allowed",
                  selectedOption?.icon && !open ? "pl-2" : "pl-3"
                )}
              />
              {inputValue && !disabled && !readonly && (
                <ClearButton
                  onClick={handleClear}
                  aria-label="Clear"
                  className="mr-2 flex-shrink-0"
                />
              )}
            </div>
          </PopoverPrimitive.Anchor>

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              id={listId}
              onOpenAutoFocus={(e) => e.preventDefault()}
              onInteractOutside={() => {
                setOpen(false);
                setInputValue(selectedOption?.label ?? "");
              }}
              side="bottom"
              sideOffset={4}
              align="start"
              avoidCollisions
              collisionPadding={4}
              style={{ width: "var(--radix-popover-trigger-width)" }}
              className={cn(
                "z-50",
                "animate-in fade-in-0 slide-in-from-top-2 duration-150",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1 data-[state=closed]:duration-100"
              )}
            >
              {filtered.length === 0 ? (
                <div className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg px-3 py-2.5 lyra-body-md text-lyra-fg-disabled select-none">
                  {emptyMessage}
                </div>
              ) : (
                <Menu
                  aria-label={label ?? "Options"}
                  menuRole="listbox"
                  itemRole="option"
                  className="max-h-60"
                  items={filtered.map((option) => ({
                    id: option.value,
                    label: option.label,
                    icon: option.icon,
                    disabled: option.disabled,
                    active: option.value === value,
                    onClick: () => handleSelect(option),
                  }))}
                />
              )}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </div>
    );
  }
);
Autocomplete.displayName = "Autocomplete";

export { Autocomplete };
