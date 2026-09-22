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

   Field labels ("Login ID", "Old Password", etc.) are `Input`/`PasswordInput`'s
   own `label` prop — an earlier pass hand-rolled an uppercase eyebrow above
   each field instead (matching the source screenshot's all-caps look), but
   per a later explicit request none of these labels should be uppercase, so
   the real `label` prop is the correct, simpler choice — no reason to
   bypass it once nothing about it actually differs from the custom
   composition it replaced. */

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

          <Input label="Login ID" value={loginId} disabled />

          <PasswordInput label="Old Password" value={oldPassword} onChange={setOldPassword} />

          <PasswordInput label="New Password" value={newPassword} onChange={setNewPassword} />

          <PasswordInput label="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} />

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
