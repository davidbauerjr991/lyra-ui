import * as React from "react";
import { MenuItem } from "./menu-item";

/* ── ListItem (deprecated) ──
   `MenuItem` is now the single row component. `ListItem` is kept only as a
   thin compatibility wrapper (prototypes import it from the live lyra-ui
   source) and maps its props onto `MenuItem`:
   leading → icon, title → header, subtitle → label, meta → description,
   trailing → rightElement. Title-only rows render the title as the label. */

export interface ListItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onClick"> {
  leading?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
  trailing?: React.ReactNode;
  /** Show a bottom divider (default true) */
  divider?: boolean;
  /** Disable hover state */
  static?: boolean;
  /** Highlighted (e.g. unread) row */
  active?: boolean;
  onClick?: () => void;
}

/** @deprecated Use `MenuItem` (`as="div"` for rows with their own controls). */
const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ leading, title, subtitle, meta, trailing, divider = true, static: isStatic = false, active = false, ...props }, ref) => (
    <MenuItem
      ref={ref}
      as="div"
      divider={divider}
      static={isStatic}
      active={active}
      icon={leading}
      header={subtitle || meta ? title : undefined}
      label={subtitle || meta ? subtitle : title}
      description={meta}
      rightElement={trailing}
      {...props}
    />
  )
);
ListItem.displayName = "ListItem";

export { ListItem };
