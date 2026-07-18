import * as React from "react";

interface SuccessIconSolidProps extends React.SVGAttributes<SVGSVGElement> {}

/**
 * Solid/filled sibling of `SuccessIcon` — same silhouette (a circle with a
 * checkmark), but the circle is `fill="currentColor"` instead of a
 * hardcoded hex, so it's recolorable via a `text-*` class and follows dark
 * mode. See `warning-icon-solid.tsx`'s doc comment for why this is a
 * separate file rather than an edit to `success-icon.tsx` in place.
 */
const SuccessIconSolid = React.forwardRef<SVGSVGElement, SuccessIconSolidProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        d="M4.5 8.5L6.5 10.5L11.5 5.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
SuccessIconSolid.displayName = "SuccessIconSolid";

export { SuccessIconSolid };
