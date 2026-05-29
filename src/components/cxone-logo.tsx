import { useState, useEffect } from "react";
import cxoneLogoLight from "../assets/cxone-logo.svg";
import cxoneLogoDark from "../assets/cxone-logo-dark.svg";
import { cn } from "../lib/utils";

interface CXoneLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * NICE CXone wordmark logo.
 * Automatically swaps between light and dark variants based on [data-theme].
 */
export function CXoneLogo({ className, ...props }: CXoneLogoProps) {
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
    <div className={cn("inline-flex items-center", className)} {...props}>
      <img
        src={isDark ? cxoneLogoDark : cxoneLogoLight}
        alt="NICE CXone"
        className="h-4"
      />
    </div>
  );
}
