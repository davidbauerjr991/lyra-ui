import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Container } from "./container";
import { CXoneLogo } from "./cxone-logo";
import { Input } from "./input";
import { Link } from "./link";
import { PasswordInput } from "./password-input";

/* ── Component ──
   A second, differently-branded LoginCard-style variant — CXone's own
   Client Code / Login ID / Password flow, distinct from LoginCard's Phone
   Setup card. Rendered as a small (360px) modal-style Container, same
   convention LoginCard itself follows, but with no `headerTitle` (the
   CXoneLogo wordmark is the header here, not an icon+title row). */

export interface LoginCardLiveVoxProps {
  /** Called with the entered field values when "Next" is clicked (only enabled once all three fields are filled) */
  onNext?: (values: { clientCode: string; loginId: string; password: string; rememberMe: boolean }) => void;
  /** Whether the card renders inside its modal chrome (background, border, drop shadow). Default: true. */
  contained?: boolean;
  className?: string;
}

const LoginCardLiveVox = React.forwardRef<HTMLDivElement, LoginCardLiveVoxProps>(
  ({ onNext, contained = true, className }, ref) => {
    const [clientCode, setClientCode] = React.useState("");
    const [loginId, setLoginId] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);

    const canSubmit = clientCode.trim() !== "" && loginId.trim() !== "" && password.trim() !== "";

    const handleClear = () => {
      setClientCode("");
      setLoginId("");
      setPassword("");
    };

    const handleNext = () => {
      if (!canSubmit) return;
      onNext?.({ clientCode, loginId, password, rememberMe });
    };

    return (
      <Container
        ref={ref}
        variant="modal"
        className={cn("w-[360px]", !contained && "bg-transparent border-0 shadow-none", className)}
      >
        <div className="flex flex-col px-6 pb-6 pt-6">
          <CXoneLogo size="md" />

          <div className="mt-6 flex flex-col gap-4">
            <Input label="Client Code" value={clientCode} onChange={(e) => setClientCode(e.target.value)} />
            <Input label="Login ID" value={loginId} onChange={(e) => setLoginId(e.target.value)} />
            <PasswordInput label="Password" value={password} onChange={setPassword} />
          </div>

          <Button size="lg" className="mt-6 w-full" disabled={!canSubmit} onClick={handleNext}>
            Next
          </Button>

          <div className="mt-4 flex justify-center">
            <Link onClick={handleClear}>Clear All Fields</Link>
          </div>

          <label className="mt-6 flex items-center justify-center gap-2 cursor-pointer">
            <Checkbox checked={rememberMe} onCheckedChange={(checked) => setRememberMe(!!checked)} />
            <span className="lyra-body-md text-lyra-fg-default">Remember Me</span>
          </label>

          <p className="mt-8 text-center lyra-body-sm text-lyra-fg-secondary">
            © 2005–2026 NiCE LTD. All Rights Reserved.
            <br />
            <Link>Contact Us</Link>
          </p>
        </div>
      </Container>
    );
  }
);
LoginCardLiveVox.displayName = "LoginCardLiveVox";

export { LoginCardLiveVox };
