import * as React from "react";
import { cn } from "../lib/utils";
import { Container } from "./container";
import { Link } from "./link";
import brokenIconSrc from "../assets/empty-state-broken.svg";

/* ── Component ──
   Fourth LoginCard-style variant — a static "browser no longer supported"
   message, distinct from the other three (no form fields/actions at all).
   `EmptyState` (empty-state.tsx) was considered first but only supports one
   icon + one message + one optional description `<p>` — this screen needs
   two body paragraphs plus a third sentence with an inline `Link`, which
   doesn't fit that single-slot shape, so it's hand-composed the same way
   `LoginCardLiveVox`/`LoginCardSelectService` already compose their own
   centered secondary text + inline `Link` combinations. */

export interface LoginCardIeUnsupportedProps {
  /** Called when the "contact us" link is clicked */
  onContactUs?: () => void;
  /** Whether the card renders inside its modal chrome (background, border, drop shadow). Default: true. */
  contained?: boolean;
  className?: string;
}

const LoginCardIeUnsupported = React.forwardRef<HTMLDivElement, LoginCardIeUnsupportedProps>(
  ({ onContactUs, contained = true, className }, ref) => (
    <Container
      ref={ref}
      variant="modal"
      className={cn("w-[360px]", !contained && "bg-transparent border-0 shadow-none", className)}
    >
      <div className="flex flex-col items-center gap-4 px-6 pb-6 pt-6 text-center">
        <img src={brokenIconSrc} alt="" className="h-[72px] w-[72px]" />

        <p className="lyra-heading-md text-lyra-fg-default">IE is no longer supported</p>

        <p className="lyra-body-md text-lyra-fg-secondary">
          We know it&rsquo;s a hassle to switch browsers, but we want your experience to be fast, secure and the
          best it possibly can be.
        </p>

        <p className="lyra-body-md text-lyra-fg-secondary">
          To continue, please switch to a supported browser (Chrome, Firefox, Safari, or Edge).
        </p>

        <p className="lyra-body-md text-lyra-fg-secondary">
          As always, feel free to <Link onClick={onContactUs}>contact us</Link> if you have any questions.
        </p>
      </div>
    </Container>
  )
);
LoginCardIeUnsupported.displayName = "LoginCardIeUnsupported";

export { LoginCardIeUnsupported };
