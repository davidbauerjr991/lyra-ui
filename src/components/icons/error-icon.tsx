import * as React from "react";

interface ErrorIconProps extends React.SVGAttributes<SVGSVGElement> {}

// No hardcoded `width`/`height`/default size class here — sized purely by
// whatever `className` the caller passes in (see `warning-icon.tsx`'s
// matching comment).
const ErrorIcon = React.forwardRef<SVGSVGElement, ErrorIconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="#B42318" />
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
ErrorIcon.displayName = "ErrorIcon";

export { ErrorIcon };
