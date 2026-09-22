import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Container } from "./container";
import { CXoneLogo } from "./cxone-logo";
import { Input } from "./input";
import { Link } from "./link";
import { PasswordInput } from "./password-input";

/* ── Component ──
   Fifth LoginCard-style variant — a forced "change password" step (e.g. an
   expired-password flow): a `CXoneLogo` header (per explicit request,
   matching `LoginCardLiveVox`'s size="md" treatment), a disabled/readonly
   Login ID field, Old/New/Confirm Password fields, a full-width primary
   action, a "Clear All Fields" link, a "Password Expired" status line, and
   the same copyright + "Contact Us" footer `LoginCardLiveVox` uses.

   The screenshot's uppercase field labels ("LOGIN ID", "OLD PASSWORD", etc.)
   aren't `Input`/`PasswordInput`'s own `label` prop — both render through the
   shared `Label` component (label.tsx), which has no uppercase option and no
   className passthrough for its text. Same situation as
   `LoginCardSelectService`'s "SELECT A SERVICE" eyebrow: uses the manual
   `lyra-body-sm-emphasis uppercase tracking-wide` composition already
   established for section eyebrows (donut-chart.tsx, create-new.tsx) above
   each field instead of fabricating an unsupported label override, and
   passes no `label` prop to the fields themselves to avoid a double label. */

function FieldEyebrow({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p
      className={cn(
        "lyra-body-sm-emphasis uppercase tracking-wide",
        muted ? "text-lyra-fg-secondary" : "text-lyra-fg-default"
      )}
    >
      {children}
    </p>
  );
}

export interface LoginCardChangePasswordProps {
  /** Read-only login ID shown at the top. Default: "anil_u15_4" (the demo value from the source screenshot) */
  loginId?: string;
  /** Whether the "Password Expired" status line shows below the form. Default: true */
  passwordExpired?: boolean;
  /** Called with the entered passwords when "Change Password" is clicked (only enabled once all three fields are filled) */
  onChangePassword?: (values: { oldPassword: string; newPassword: string; confirmPassword: string }) => void;
  /** Whether the card renders inside its modal chrome (background, border, drop shadow). Default: true. */
  contained?: boolean;
  className?: string;
}

const LoginCardChangePassword = React.forwardRef<HTMLDivElement, LoginCardChangePasswordProps>(
  ({ loginId = "anil_u15_4", passwordExpired = true, onChangePassword, contained = true, className }, ref) => {
    const [oldPassword, setOldPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const canSubmit = oldPassword !== "" && newPassword !== "" && confirmPassword !== "";

    const handleClear = () => {
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    };

    const handleChangePassword = () => {
      if (!canSubmit) return;
      onChangePassword?.({ oldPassword, newPassword, confirmPassword });
    };

    return (
      <Container
        ref={ref}
        variant="modal"
        className={cn("w-[360px]", !contained && "bg-transparent border-0 shadow-none", className)}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-6">
          <CXoneLogo size="md" />

          <div>
            <FieldEyebrow muted>Login ID</FieldEyebrow>
            <Input value={loginId} disabled className="mt-1.5" />
          </div>

          <div>
            <FieldEyebrow>Old Password</FieldEyebrow>
            <PasswordInput value={oldPassword} onChange={setOldPassword} className="mt-1.5" />
          </div>

          <div>
            <FieldEyebrow>New Password</FieldEyebrow>
            <PasswordInput value={newPassword} onChange={setNewPassword} className="mt-1.5" />
          </div>

          <div>
            <FieldEyebrow>Confirm Password</FieldEyebrow>
            <PasswordInput value={confirmPassword} onChange={setConfirmPassword} className="mt-1.5" />
          </div>

          <Button size="lg" className="mt-2 w-full" disabled={!canSubmit} onClick={handleChangePassword}>
            Change Password
          </Button>

          <div className="flex justify-center">
            <Link onClick={handleClear}>Clear All Fields</Link>
          </div>

          {passwordExpired && (
            <p className="text-center lyra-body-md text-lyra-status-critical-strong">Password Expired</p>
          )}

          <p className="text-center lyra-body-sm text-lyra-fg-secondary">
            © 2005–2026 NiCE LTD. All Rights Reserved.
            <br />
            <Link>Contact Us</Link>
          </p>
        </div>
      </Container>
    );
  }
);
LoginCardChangePassword.displayName = "LoginCardChangePassword";

export { LoginCardChangePassword };
