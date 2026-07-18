import * as React from "react";

interface ErrorIconSolidProps extends React.SVGAttributes<SVGSVGElement> {}

/**
 * Solid/filled sibling of `ErrorIcon` — same silhouette (a circle with a "!"
 * mark), but the circle is `fill="currentColor"` instead of a hardcoded hex,
 * so it's recolorable via a `text-*` class and follows dark mode. See
 * `warning-icon-solid.tsx`'s doc comment for why this is a separate file
 * rather than an edit to `error-icon.tsx` in place.
 */
const ErrorIconSolid = React.forwardRef<SVGSVGElement, ErrorIconSolidProps>(
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
        d="M8 4.5V9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11.25" r="0.75" fill="white" />
    </svg>
  )
);
ErrorIconSolid.displayName = "ErrorIconSolid";

export { ErrorIconSolid };
