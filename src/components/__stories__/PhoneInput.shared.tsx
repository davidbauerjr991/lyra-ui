/* Shared example data for PhoneInput.stories.tsx (Default playground) and
   PhoneInput.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import type { PhoneValue } from "../phone-input";

export const COUNTRIES = [
  { code: "us", label: "United States", sample: "555 0100" },
  { code: "gb", label: "United Kingdom", sample: "7911 123456" },
  { code: "jp", label: "Japan", sample: "90 1234 5678" },
  { code: "ae", label: "UAE", sample: "50 123 4567" },
] as const;

export const EMPTY_US: PhoneValue = { countryCode: "us", number: "" };
export const SAMPLE_GB: PhoneValue = { countryCode: "gb", number: "7911 123456" };
export const SAMPLE_US: PhoneValue = { countryCode: "us", number: "555 0100" };
