import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Container } from "./container";
import { CXoneLogo } from "./cxone-logo";
import { Link } from "./link";
import { Select } from "./select";

/* ── Component ──
   Third LoginCard-style variant — a "choose a service" step, distinct from
   LoginCard's Phone Setup card and LoginCardLiveVox's credentials form.
   Rendered as a small (360px) modal-style Container, same convention as
   both other variants. The source screenshot had no header row, but a
   `CXoneLogo` (same "md" size as `LoginCardLiveVox`'s) was added above the
   eyebrow/dropdown per explicit request, matching the branded-header
   treatment the other two variants already have. The original screenshot's
   "Back" button, the `Separator` below the buttons, and the "Download the
   Agent Desktop Native App..." paragraph were removed per a later explicit
   request — "Sign In" is now a standalone full-width action, and "Get The
   App" sits directly below it with no separator/paragraph in between.

   "Select a Service" is `Select`'s own `label` prop — an earlier pass hand-
   rolled an uppercase eyebrow above the dropdown instead (since the source
   screenshot showed it in all caps), but per a later explicit request the
   label isn't uppercase after all, so the real `label` prop is the correct,
   simpler choice now — no reason to keep a custom composition once nothing
   about it actually differs from what `Select` already renders. */

const SERVICE_OPTIONS = [
  { value: "agent-desktop", label: "Agent Desktop" },
  { value: "digital-engagement", label: "Digital Engagement" },
  { value: "workforce-management", label: "Workforce Management" },
];

export interface LoginCardSelectServiceProps {
  /** Called with the selected service value when "Sign In" is clicked (only enabled once a service is selected) */
  onSignIn?: (service: string) => void;
  /** Whether the card renders inside its modal chrome (background, border, drop shadow). Default: true. */
  contained?: boolean;
  className?: string;
}

const LoginCardSelectService = React.forwardRef<HTMLDivElement, LoginCardSelectServiceProps>(
  ({ onSignIn, contained = true, className }, ref) => {
    const [service, setService] = React.useState("");
    const canSignIn = service !== "";

    return (
      <Container
        ref={ref}
        variant="modal"
        className={cn("w-[360px]", !contained && "bg-transparent border-0 shadow-none", className)}
      >
        <div className="flex flex-col px-6 pb-6 pt-6">
          <CXoneLogo size="md" className="mb-6" />

          <Select
            label="Select a Service"
            placeholder="Select a Service"
            options={SERVICE_OPTIONS}
            value={service}
            onValueChange={setService}
          />

          <Button
            size="lg"
            className={cn(
              "mt-6 w-full",
              // `Button`'s base disabled state only dims the solid primary
              // color (`disabled:opacity-40`) — this screenshot's disabled
              // "Sign In" is a flat light-gray/gray-text look instead, so
              // it's overridden with the same disabled tokens `Select`'s
              // own disabled trigger already uses (select.tsx).
              "disabled:bg-lyra-bg-disabled disabled:text-lyra-fg-disabled disabled:opacity-100"
            )}
            disabled={!canSignIn}
            onClick={() => onSignIn?.(service)}
          >
            Sign In
          </Button>

          <div className="mt-4 flex justify-center">
            <Link size="md">Get The App</Link>
          </div>
        </div>
      </Container>
    );
  }
);
LoginCardSelectService.displayName = "LoginCardSelectService";

export { LoginCardSelectService };
