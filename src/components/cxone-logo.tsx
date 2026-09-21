import * as React from "react";
import { useState, useEffect } from "react";
import cxoneLogoLight from "../assets/cxone-logo.svg";
import cxoneLogoDark from "../assets/cxone-logo-dark.svg";
import { cn } from "../lib/utils";

const CXONE_LOGO_SIZES = {
  sm: "h-4",
  md: "h-6",
} as const;

type CXoneLogoSize = keyof typeof CXONE_LOGO_SIZES;

interface CXoneLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Wordmark height. Default: "sm" (16px, the existing AppMenu-footer size). "md" is 24px, for contexts where the logo is the primary visual (e.g. a login screen). */
  size?: CXoneLogoSize;
}

/**
 * NICE CXone wordmark logo.
 * Automatically swaps between light and dark variants based on [data-theme].
 */
export const CXoneLogo = React.forwardRef<HTMLDivElement, CXoneLogoProps>(
  ({ className, size = "sm", ...props }, ref) => {
    const [isDark, setIsDark] = useState(
      () =>
        typeof document !== "undefined" &&
        document.documentElement.getAttribute("data-theme") === "dark"
    );

    useEffect(() => {
      const el = document.documentElement;
      const observer = new MutationObserver(() => {
        setIsDark(el.getAttribute("data-theme") === "dark");
      });
      observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
      return () => observer.disconnect();
    }, []);

    return (
      <div ref={ref} className={cn("inline-flex items-center", className)} {...props}>
        <img
          src={isDark ? cxoneLogoDark : cxoneLogoLight}
          alt="NICE CXone"
          className={CXONE_LOGO_SIZES[size]}
        />
      </div>
    );
  }
);
CXoneLogo.displayName = "CXoneLogo";
export type { CXoneLogoProps };
