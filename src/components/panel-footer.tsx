import * as React from "react";
import { cn } from "../lib/utils";

interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const PanelFooter = React.forwardRef<HTMLDivElement, PanelFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-end gap-2 px-4 py-3 shrink-0 border-t border-lyra-border-subtle",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
PanelFooter.displayName = "PanelFooter";

export { PanelFooter };
export type { PanelFooterProps };
