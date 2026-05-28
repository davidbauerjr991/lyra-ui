import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

/* ── Types ── */

export interface TreeMenuChild {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface TreeMenuItem {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  children?: TreeMenuChild[];
  defaultOpen?: boolean;
  onClick?: () => void;
}

/* ── CollapsiblePanel (animated height) ── */

function CollapsiblePanel({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(open ? undefined as number | undefined : 0);
  const isOpen = useRef(open);
  const isAnimating = useRef(false);
  const isInitialRender = useRef(true);

  /* Keep content height in sync while open (handles dynamic content) */
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ro = new ResizeObserver(() => {
      if (isOpen.current && !isAnimating.current) {
        setHeight(content.scrollHeight);
      }
    });
    ro.observe(content);
    return () => ro.disconnect();
  }, []);

  /* Set explicit pixel height on first render if defaultOpen */
  useEffect(() => {
    if (open && contentRef.current && height === undefined) {
      setHeight(contentRef.current.scrollHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Animate open/close */
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const el = wrapperRef.current;
    const content = contentRef.current;
    if (!el || !content) return;

    isAnimating.current = true;
    isOpen.current = open;

    if (open) {
      setHeight(content.scrollHeight);
    } else {
      /* Pin to current scrollHeight, force reflow, then collapse to 0 */
      const scrollH = content.scrollHeight;
      setHeight(scrollH);
      requestAnimationFrame(() => {
        el.getBoundingClientRect();
        setHeight(0);
      });
    }
  }, [open]);

  const handleTransitionEnd = () => {
    isAnimating.current = false;
    /* Keep height as explicit pixels — never switch to auto */
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        height: height ?? 0,
        overflow: "hidden",
        transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

/* ── TreeMenu ── */

interface TreeMenuProps extends React.HTMLAttributes<HTMLElement> {
  /** Menu items to render */
  items: TreeMenuItem[];
}

const TreeMenu = React.forwardRef<HTMLElement, TreeMenuProps>(
  ({ className, items, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("flex flex-col gap-0.5 py-1", className)}
      {...props}
    >
      {items.map((item, i) => (
        <TreeMenuRow key={i} item={item} />
      ))}
    </nav>
  )
);
TreeMenu.displayName = "TreeMenu";

/* ── TreeMenuRow (internal) ── */

function TreeMenuRow({ item }: { item: TreeMenuItem }) {
  const [open, setOpen] = useState(item.defaultOpen ?? false);
  const hasChildren = item.children && item.children.length > 0;
  const isParentActive =
    item.active || (hasChildren && item.children!.some((c) => c.active));
  /* Leaf items (no children) that are active get the stronger moderate bg */
  const isLeafActive = item.active && !hasChildren;

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setOpen((v) => !v);
          item.onClick?.();
        }}
        className={cn(
          "flex w-full items-center gap-2.5 rounded-lyra-sm px-2.5 py-[7px] lyra-body-md transition-colors",
          isLeafActive
            ? "bg-lyra-bg-active-moderate text-lyra-fg-active-strong lyra-body-md-emphasis hover:bg-lyra-bg-active-moderate active:bg-lyra-bg-active-subtle"
            : isParentActive
              ? "bg-lyra-bg-active-subtle text-lyra-fg-active-strong lyra-body-md-emphasis hover:bg-lyra-bg-active-moderate active:bg-lyra-bg-active-subtle"
              : "text-lyra-fg-default hover:bg-lyra-state-hover active:bg-lyra-state-pressed"
        )}
      >
        {item.icon && (
          <span className={cn("flex-shrink-0", isParentActive || isLeafActive ? "text-lyra-fg-active-strong" : "text-lyra-fg-default")}>{item.icon}</span>
        )}
        <span className="flex-1 text-left truncate">{item.label}</span>
        {hasChildren && (
          <span
            className="text-lyra-fg-disabled transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        )}
      </button>

      {/* Children — animated expand/collapse */}
      {hasChildren && (
        <CollapsiblePanel open={open}>
          <div className="ml-[18px] mt-0.5 flex flex-col gap-0.5 pl-3">
            {item.children!.map((child, j) => (
              <button
                key={j}
                onClick={child.onClick}
                className={cn(
                  "w-full rounded-lyra-sm px-2.5 py-[6px] text-left lyra-body-md transition-colors",
                  child.active
                    ? "bg-lyra-bg-active-moderate text-lyra-fg-active-strong lyra-body-md-emphasis hover:bg-lyra-bg-active-moderate active:bg-lyra-bg-active-subtle"
                    : "text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default active:bg-lyra-state-pressed"
                )}
              >
                {child.label}
              </button>
            ))}
          </div>
        </CollapsiblePanel>
      )}
    </div>
  );
}

export { TreeMenu, CollapsiblePanel };
