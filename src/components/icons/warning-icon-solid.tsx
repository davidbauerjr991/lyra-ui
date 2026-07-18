import * as React from "react";

interface WarningIconSolidProps extends React.SVGAttributes<SVGSVGElement> {}

/**
 * Solid/filled sibling of `WarningIcon` — same silhouette (a rounded
 * triangle with a "!" mark), but the triangle is `fill="currentColor"`
 * instead of a hardcoded hex, so it's recolorable via a `text-*` class (and
 * automatically follows dark mode) the way `WarningIcon` never could. The
 * "!" mark itself is drawn as two explicit `fill="white"` shapes on top of
 * the triangle (not, like the original, a transparent evenodd cutout that
 * reveals whatever's behind it) — that keeps it a crisp white mark
 * regardless of the surrounding page/card background, including in dark
 * mode where a cutout would show dark, not white.
 *
 * A new, separate file rather than editing `warning-icon.tsx` in place:
 * that file is still used, unchanged, by ~13 other components (action-bar,
 * modal headers, etc.) where flipping the fill to `currentColor` would
 * silently break their color (most of those call sites don't set an
 * explicit ambient text color matching the intended status hue). This one
 * is for contexts — like `Toast` — that explicitly want the token-driven
 * behavior.
 */
const WarningIconSolid = React.forwardRef<SVGSVGElement, WarningIconSolidProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6.62572 2.00001C7.23631 0.814808 8.76277 0.814808 9.37336 2.00001L15.7852 13.3328C16.3957 14.518 15.6321 16 14.4109 16H1.58834C0.367362 15.9997 -0.395627 14.5179 0.214906 13.3328L6.62572 2.00001Z"
        fill="currentColor"
      />
      <path
        d="M8.00003 4.99988C7.44775 4.99988 7.00004 5.4476 7.00004 5.99989V8.99993C7.00013 9.55214 7.44781 9.99994 8.00003 9.99994C8.55206 9.9997 8.99993 9.55199 9.00003 8.99993V5.99989C9.00003 5.44775 8.55211 5.00012 8.00003 4.99988Z"
        fill="white"
      />
      <path
        d="M8.00003 11.8015C7.33729 11.8015 6.80004 12.3388 6.80004 13.0015C6.80028 13.6641 7.33744 14.2015 8.00003 14.2015C8.66235 14.2012 9.19979 13.6639 9.20003 13.0015C9.20003 12.339 8.6625 11.8018 8.00003 11.8015Z"
        fill="white"
      />
    </svg>
  )
);
WarningIconSolid.displayName = "WarningIconSolid";

export { WarningIconSolid };
