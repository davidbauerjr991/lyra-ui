import * as React from "react";
import { cn } from "../lib/utils";
import { Container } from "./container";
import { Link } from "./link";
import accessDeniedIconSrc from "../assets/empty-state-access-denied.svg";

/* ── Component ──
   Seventh LoginCard-style variant — a static "access denied" message,
   the same shape as `LoginCardIeUnsupported` (icon + heading + secondary
   body copy + a "contact us" sentence with an inline `Link`), just one
   body paragraph instead of two. No form fields/actions, same as that
   sibling. Left-aligned per explicit request (the source screenshot was
   centered), matching `LoginCardIeUnsupported`'s own left-alignment. */

export interface LoginCardAccessDeniedProps {
  /** Called when the "contact us" link is clicked */
  onContactUs?: () => void;
  /** Whether the card renders inside its modal chrome (background, border, drop shadow). Default: true. */
  contained?: boolean;
  className?: string;
}

const LoginCardAccessDenied = React.forwardRef<HTMLDivElement, LoginCardAccessDeniedProps>(
  ({ onContactUs, contained = true, className }, ref) => (
    <Container
      ref={ref}
      variant="modal"
      className={cn("w-[360px]", !contained && "bg-transparent border-0 shadow-none", className)}
    >
      <div className="flex flex-col items-start gap-4 px-6 pb-6 pt-6 text-left">
        <img src={accessDeniedIconSrc} alt="" className="h-[72px] w-[72px]" />

        <p className="lyra-heading-md text-lyra-fg-default">Access Denied</p>

        <p className="lyra-body-md text-lyra-fg-secondary">
          Sorry, you do not have authorization to view this page.
        </p>

        <p className="lyra-body-md text-lyra-fg-secondary">
          As always, feel free to <Link onClick={onContactUs}>contact us</Link> if you have any questions.
        </p>
      </div>
    </Container>
  )
);
LoginCardAccessDenied.displayName = "LoginCardAccessDenied";

export { LoginCardAccessDenied };
