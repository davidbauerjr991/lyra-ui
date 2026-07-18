import * as React from "react";

interface InfoIconSolidProps extends React.SVGAttributes<SVGSVGElement> {}

/**
 * Solid/filled sibling of `InfoIcon` — same silhouette (a circle with an
 * "i" mark), but the circle is `fill="currentColor"` instead of a
 * hardcoded hex, so it's recolorable via a `text-*` class and follows dark
 * mode. See `warning-icon-solid.tsx`'s doc comment for why this is a
 * separate file rather than an edit to `info-icon.tsx` in place.
 */
const InfoIconSolid = React.forwardRef<SVGSVGElement, InfoIconSolidProps>(
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
      <circle cx="8" cy="4.75" r="0.75" fill="white" />
      <path
        d="M8 7V11.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
);
InfoIconSolid.displayName = "InfoIconSolid";

export { InfoIconSolid };
