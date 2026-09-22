import * as React from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Container } from "./container";
import { CXoneLogo } from "./cxone-logo";
import { Link } from "./link";

/* ── Placeholder QR code ──
   No real TOTP secret/QR-encoding is wired up here (per explicit request,
   "use a placeholder QR code for now") — this renders a static, QR-code-
   *shaped* graphic (three finder-pattern corners + a deterministic noise
   fill) as inline SVG, not an actual scannable code. Swap this out once a
   real secret/QR value is available; nothing else in the component depends
   on its content. */

const QR_MODULES = 21;

function isFinderModule(row: number, col: number, size: number) {
  const inBlock = (r: number, c: number) =>
    r >= 0 && r < 7 && c >= 0 && c < 7 && (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4));
  return inBlock(row, col) || inBlock(row, col - (size - 7)) || inBlock(row - (size - 7), col);
}

function PlaceholderQrCode({ className }: { className?: string }) {
  const modules = React.useMemo(() => {
    const grid: boolean[][] = [];
    for (let row = 0; row < QR_MODULES; row++) {
      const line: boolean[] = [];
      for (let col = 0; col < QR_MODULES; col++) {
        line.push(isFinderModule(row, col, QR_MODULES) || (row * 31 + col * 17) % 5 < 2);
      }
      grid.push(line);
    }
    return grid;
  }, []);

  return (
    <svg
      viewBox={`0 0 ${QR_MODULES} ${QR_MODULES}`}
      className={cn("h-[168px] w-[168px]", className)}
      role="img"
      aria-label="Placeholder QR code"
    >
      <rect width={QR_MODULES} height={QR_MODULES} fill="white" />
      {modules.map((line, row) =>
        line.map(
          (dark, col) => dark && <rect key={`${row}-${col}`} x={col} y={row} width={1} height={1} fill="black" />
        )
      )}
    </svg>
  );
}

/* ── Component ──
   Sixth LoginCard-style variant — a "pair authenticator app" 2FA setup
   step: heading + instructions, a QR code, a "Can't scan the QR code?"
   link, and a Back/Next button pair (same `flex-1`/`flex-1` split row
   `LoginCardSelectService` used before its Back button was removed).
   `CXoneLogo` header and the copyright + "Contact Us" footer were added per
   explicit request (matching `LoginCardLiveVox`'s treatment) even though
   neither was in the source screenshot. The logo, heading, and instruction
   paragraph (everything above the QR code) are left-aligned per a later
   explicit request — the QR code, "Can't scan the QR code?" link, and the
   copyright footer stay centered via `self-center` on each, since those
   read better centered under a left-aligned header. */

export interface LoginCardPairAuthenticatorProps {
  /** Called when "Back" is clicked */
  onBack?: () => void;
  /** Called when "Next" is clicked */
  onNext?: () => void;
  /** Called when "Can't scan the QR code?" is clicked */
  onCantScan?: () => void;
  /** Whether the card renders inside its modal chrome (background, border, drop shadow). Default: true. */
  contained?: boolean;
  className?: string;
}

const LoginCardPairAuthenticator = React.forwardRef<HTMLDivElement, LoginCardPairAuthenticatorProps>(
  ({ onBack, onNext, onCantScan, contained = true, className }, ref) => (
    <Container
      ref={ref}
      variant="modal"
      className={cn("w-[360px]", !contained && "bg-transparent border-0 shadow-none", className)}
    >
      <div className="flex flex-col items-start gap-4 px-6 pb-6 pt-6 text-left">
        <CXoneLogo size="md" />

        <p className="lyra-heading-md text-lyra-fg-default">Pair authenticator app with your account</p>

        <p className="lyra-body-md text-lyra-fg-secondary">
          Launch authenticator app on your mobile device, choose &ldquo;Set Up Account&rdquo; (or similar) and then
          scan this secret key:
        </p>

        <PlaceholderQrCode className="self-center" />

        <Link className="self-center" onClick={onCantScan}>
          Can&rsquo;t scan the QR code?
        </Link>

        <div className="flex w-full gap-2">
          <Button variant="outline" className="flex-1" onClick={onBack}>
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            Back
          </Button>
          <Button className="flex-1" onClick={onNext}>
            Next
          </Button>
        </div>

        <p className="self-center text-center lyra-body-sm text-lyra-fg-secondary">
          © 2005–2026 NiCE LTD. All Rights Reserved.
          <br />
          <Link>Contact Us</Link>
        </p>
      </div>
    </Container>
  )
);
LoginCardPairAuthenticator.displayName = "LoginCardPairAuthenticator";

export { LoginCardPairAuthenticator };
