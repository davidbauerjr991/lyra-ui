import * as React from "react";

interface InfoIconProps extends React.SVGAttributes<SVGSVGElement> {}

// No hardcoded `width`/`height`/default size class here — sized purely by
// whatever `className` the caller passes in (see `warning-icon.tsx`'s
// matching comment).
const InfoIcon = React.forwardRef<SVGSVGElement, InfoIconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="#3651D4" />
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
InfoIcon.displayName = "InfoIcon";

export { InfoIcon };
