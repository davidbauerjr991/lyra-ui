/* Shared example data for Autocomplete.stories.tsx (Default playground) and
   Autocomplete.variants.stories.tsx (Variants pages). Not a stories file —
   it only holds the fixtures both use, so the two can't drift apart. */

// Convert ISO 3166-1 alpha-2 code to flag emoji (no library needed)
export function flag(code: string): string {
  return code.toUpperCase().replace(/./g, (c) =>
    String.fromCodePoint(c.charCodeAt(0) + 127397)
  );
}

export const COUNTRIES = [
  { value: "us", label: "United States",  icon: flag("us") },
  { value: "ca", label: "Canada",          icon: flag("ca") },
  { value: "gb", label: "United Kingdom",  icon: flag("gb") },
  { value: "au", label: "Australia",       icon: flag("au") },
  { value: "de", label: "Germany",         icon: flag("de") },
  { value: "fr", label: "France",          icon: flag("fr") },
  { value: "jp", label: "Japan",           icon: flag("jp") },
  { value: "br", label: "Brazil",          icon: flag("br") },
  { value: "in", label: "India",           icon: flag("in") },
  { value: "mx", label: "Mexico",          icon: flag("mx") },
  { value: "es", label: "Spain",           icon: flag("es") },
  { value: "it", label: "Italy",           icon: flag("it") },
];
