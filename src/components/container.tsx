import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelHeader } from "./panel-header";
import { cn } from "../lib/utils";

const containerVariants = cva("rounded-lyra-lg", {
  variants: {
    variant: {
      default: "bg-lyra-bg-surface-base border border-lyra-border-subtle shadow-sm",
      popover: "bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-lg",
      modal: "bg-lyra-bg-surface-overlay border border-lyra-border-subtle shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** Optional header title rendered at the top of the container */
  headerTitle?: string;
  /** Optional icon rendered to the left of the header title */
  headerIcon?: React.ReactNode;
  /** Additional actions rendered to the right of the header title */
  headerActions?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, headerTitle, headerIcon, headerActions, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ variant }), className)}
      {...props}
    >
      {headerTitle && (
        <PanelHeader
          title={headerTitle}
          icon={headerIcon}
          actions={headerActions}
        />
      )}
      {children}
    </div>
  )
);
Container.displayName = "Container";

export { Container, containerVariants };
