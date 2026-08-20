// Tracks whether the user's most recent interaction was keyboard- or
// pointer-based, and reflects it as `data-lyra-input-modality="keyboard"`
// (present) / absent on `<html>`.
//
// Why this exists: native CSS `:focus-visible` is NOT a reliable "was this
// focus keyboard-triggered" signal for text-entry elements. Per the
// browsers' own `:focus-visible` heuristics (see the WICG focus-visible
// explainer/polyfill, which every major engine's native implementation
// mirrors), a handful of element types — `input[type=text/search/email/
// tel/url/password/number]`, `textarea`, and `[contenteditable]` — ALWAYS
// match `:focus-visible` when focused, regardless of whether that focus
// came from a keyboard Tab or a plain mouse click. The reasoning is sound
// for the browser's own default outline (a sighted mouse user still needs
// to see where their typed characters will land) — but it means
// `:focus-visible`/`:not(:focus-visible)`/`:has(:focus-visible)` can never
// distinguish mouse from keyboard focus on any of lyra-ui's text fields
// specifically (`Input`, `Textarea`, `SearchInput`, the real `<input>`
// inside `EmailInput`/`PasswordInput`/`PhoneInput`/`DatePicker`/
// `DateTimePicker`/`TimePicker`/`Autocomplete`/`NumberField`/`TagsInput`,
// etc.) — confirmed via a real user report: clicking into a search field
// with the mouse still showed the bold keyboard-only ring, because
// `:focus-visible` had already matched regardless.
//
// This module is the fix: track real input modality ourselves, in JS, the
// same way the underlying browser heuristic itself does — the most recent
// of a keydown or a pointerdown/mousedown wins. Every ring class this
// drives (see input.tsx and its many siblings) reads `html[data-lyra-
// input-modality="keyboard"] &`/`html:not([data-lyra-input-modality=
// keyboard]) &` ancestor selectors instead of `:focus-visible` directly.
// Native `:focus-visible` is left completely alone everywhere else in the
// library (Button, Tab, Checkbox, etc.) — those aren't text-entry elements,
// so the browser's own heuristic already does the right thing for them.
//
// A module-level singleton (not a hook) — the listeners need to exist
// exactly once per page regardless of how many components/instances of
// this library are mounted, and need to be live from the very first
// interaction, before any particular component has necessarily rendered.
// Importing this file (for its side effect only) from `index.ts` guarantees
// every consumer gets it registered exactly once, automatically.
let initialized = false;

export function initInputModalityTracking(): void {
  if (initialized || typeof document === "undefined") return;
  initialized = true;

  const setModality = (modality: "keyboard" | "mouse") => {
    if (document.documentElement.dataset.lyraInputModality === modality) return;
    document.documentElement.dataset.lyraInputModality = modality;
  };

  // Any keydown at all counts as "keyboard" — mirrors the native
  // :focus-visible heuristic's own intent (a keypress signals the user is
  // currently operating the page via keyboard), not just Tab specifically.
  document.addEventListener("keydown", () => setModality("keyboard"), { capture: true });
  // Both pointerdown and mousedown are listened for — pointerdown covers
  // touch/pen too (treated the same as mouse: no visible focus ring
  // needed), mousedown is kept alongside it for older browsers/environments
  // where PointerEvent might not fire for a real mouse.
  document.addEventListener("pointerdown", () => setModality("mouse"), { capture: true });
  document.addEventListener("mousedown", () => setModality("mouse"), { capture: true });
}

initInputModalityTracking();
