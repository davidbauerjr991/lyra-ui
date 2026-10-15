import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { RadioGroup, RadioGroupItem } from "./radio";
import { Separator } from "./separator";
import { ConversationMessage } from "./conversation-message";
import { Input } from "./input";
import { Container } from "./container";
import defaultAppIconSrc from "../assets/app-icon.svg";
import type { AIProcessStep, AIProcessStepStatus } from "./ai-process";

/* ── Types ── */

export type LoginCardPhoneSetup = "soft-phone" | "phone-number" | "work-station";

/** What the agent chose on the card, handed to `onLaunch`. */
export interface LoginCardPreferences {
  phoneSetup: LoginCardPhoneSetup;
  phoneNumber: string;
  stationId: string;
  savePreferences: boolean;
}

type LaunchStepId = "auth" | "sync" | "queue";

export interface LoginCardProps {
  /** App name shown at the top of the card. Default: "Agent Next Gen" */
  appName?: string;
  /** App icon shown beside the name. Default: the shared app-icon.svg mark */
  appIcon?: React.ReactNode;
  /** Seeds which phone setup option is selected on mount. Default: "soft-phone" */
  defaultPhoneSetup?: LoginCardPhoneSetup;
  /**
   * Renders the card already mid-launch and starts the launch sequence on mount.
   * Useful for demoing the "Compiling Experience" state. Default: false
   */
  defaultLaunching?: boolean;
  /** Seeds the phone number field on mount (e.g. from saved preferences). Default: "" */
  defaultPhoneNumber?: string;
  /** Seeds the Station ID field on mount (e.g. from saved preferences). Default: "" */
  defaultStationId?: string;
  /** Seeds the "Save Preferences" checkbox on mount. Default: false */
  defaultSavePreferences?: boolean;
  /**
   * Controlled dark mode. When set, the card shows this value and calls
   * `onDarkModeToggle` instead of writing `data-theme` itself — the app owns
   * the theme. Omit both for the original self-contained behavior.
   */
  isDarkMode?: boolean;
  /** Called when the dark-mode button is clicked (controlled mode). */
  onDarkModeToggle?: () => void;
  /**
   * Called once the launch sequence finishes and the card has fully faded out,
   * with what the agent chose on the card. Callers that ignore the argument
   * are unaffected.
   */
  onLaunch?: (preferences: LoginCardPreferences) => void;
  /**
   * Message shown under the Launch button when the application fails to load. Shift-clicking Launch simulates that failure:
   * the card still runs the loading steps, then returns to idle with this message instead of calling `onLaunch`.
   */
  launchErrorMessage?: string;
  /**
   * Idle-state label for the launch button — defaults to `Launch ${appName}`
   * (unchanged from before this prop existed). Per explicit request
   * (agent-next-gen-v2's own `LoginPage.tsx`, whose card already shows its
   * app name once in the header just above), pass a plain `"Launch"` here
   * to drop the app-name repetition from the button specifically, without
   * touching `appName` itself (still used for the header title and for the
   * in-progress `"Launching {appName}…"` status text below, which is
   * genuinely informative during the wait rather than a repeat of the
   * header).
   */
  launchButtonLabel?: string;
  /**
   * Whether the card renders inside its modal chrome (background, border,
   * drop shadow). Default: true. Set false to render the same content bare
   * — e.g. when the surrounding page already supplies its own framing.
   */
  contained?: boolean;
  className?: string;
}

/* ── Launch sequence config ── */

const LAUNCH_STEPS: { id: LaunchStepId; label: string }[] = [
  { id: "auth",  label: "Authenticating Agent" },
  { id: "sync",  label: "Checking Connection" },
  { id: "queue", label: "Loading Application" },
];

const STEP_DURATION = 700;
const CARD_FADE_DURATION = 400;
const VALID_STATION_ID = "12345";

/* ── Component ──
   Rendered as a small (360px) modal-style Container — matches the "Small (360px)"
   convention from Custom Primitives/Modal (Container variant="modal" + w-[360px]), rather than
   a hand-rolled card div. */

const LoginCard = React.forwardRef<HTMLDivElement, LoginCardProps>(
  (
    {
      appName = "Agent Next Gen",
      appIcon,
      defaultPhoneSetup = "soft-phone",
      defaultLaunching = false,
      defaultPhoneNumber = "",
      defaultStationId = "",
      defaultSavePreferences = false,
      isDarkMode,
      onDarkModeToggle,
      onLaunch,
      launchErrorMessage = "An error has occurred. Please try again or contact your administrator.",
      launchButtonLabel,
      contained = true,
      className,
    },
    ref
  ) => {
    const [phoneSetup, setPhoneSetup] = React.useState<LoginCardPhoneSetup>(defaultPhoneSetup);
    // Plain, unformatted digits — was a masked `PhoneValue` (country selector
    // + auto-formatted `PhoneInput`), per explicit request: a login field
    // just needs a real, dialable number typed in as-is, not formatted or
    // scoped to one country's mask. `phoneNumberTouched` mirrors the Station
    // ID field's own "only show its error after the agent has actually left
    // the field" pattern just below, rather than showing "not valid" before
    // the agent has typed anything at all.
    const [phoneNumber, setPhoneNumber] = React.useState(defaultPhoneNumber);
    const [phoneNumberTouched, setPhoneNumberTouched] = React.useState(false);
    const [stationId, setStationId] = React.useState(defaultStationId);
    const [stationIdTouched, setStationIdTouched] = React.useState(false);
    const [savePreferences, setSavePreferences] = React.useState(defaultSavePreferences);
    const [uncontrolledDarkMode, setUncontrolledDarkMode] = React.useState(
      () => document.documentElement.getAttribute("data-theme") === "dark"
    );
    const darkMode = isDarkMode ?? uncontrolledDarkMode;
    // The launch sequence calls `onLaunch` from a timer, so it reads the
    // latest choices through a ref rather than a stale closure.
    const preferencesRef = React.useRef<LoginCardPreferences>({ phoneSetup, phoneNumber, stationId, savePreferences });
    preferencesRef.current = { phoneSetup, phoneNumber, stationId, savePreferences };

    const [launching, setLaunching] = React.useState(defaultLaunching);
    const [fadingOut, setFadingOut] = React.useState(false);
    const [stepStatus, setStepStatus] = React.useState<Record<LaunchStepId, AIProcessStepStatus>>({
      auth: defaultLaunching ? "active" : "pending",
      sync: "pending",
      queue: "pending",
    });
    const [launchError, setLaunchError] = React.useState(false);
    const timers = React.useRef<ReturnType<typeof setTimeout>[]>([]);

    const needsPhoneNumber = phoneSetup === "phone-number";
    const needsStationId = phoneSetup === "work-station";
    // At least 7 digits — per explicit request, a plain length/digit-count
    // check rather than a country-mask-derived exact length (there's no
    // country selector anymore for this field, so there's no one mask to
    // validate against — see `phoneNumber`'s own state comment above).
    // `replace(/\D/g, "")` strips any punctuation the agent happens to type
    // (dashes/parens/spaces) before counting, so "555-123-4567" and
    // "5551234567" validate the same.
    const isPhoneValid = !needsPhoneNumber || phoneNumber.replace(/\D/g, "").length >= 7;
    const isStationIdValid = !needsStationId || stationId === VALID_STATION_ID;
    const isFormValid = isPhoneValid && isStationIdValid;
    const stationIdError =
      needsStationId && stationIdTouched && stationId !== VALID_STATION_ID
        ? "Invalid Station ID"
        : undefined;
    const phoneNumberError =
      needsPhoneNumber && phoneNumberTouched && !isPhoneValid
        ? "Phone number is not valid. Please enter a different number."
        : undefined;

    const launchSteps: AIProcessStep[] = LAUNCH_STEPS.map((s) => ({
      id: s.id,
      label: s.label,
      status: stepStatus[s.id],
    }));

    const runLaunchSequence = React.useCallback((simulateFailure = false) => {
      setStepStatus({ auth: "active", sync: "pending", queue: "pending" });
      timers.current.push(
        setTimeout(() => setStepStatus((s) => ({ ...s, auth: "done", sync: "active" })), STEP_DURATION),
        setTimeout(() => setStepStatus((s) => ({ ...s, sync: "done", queue: "active" })), STEP_DURATION * 2)
      );
      if (simulateFailure) {
        // Same steps as a normal launch, but the application never loads: back to idle with the error shown.
        timers.current.push(
          setTimeout(() => {
            setLaunching(false);
            setStepStatus({ auth: "pending", sync: "pending", queue: "pending" });
            setLaunchError(true);
          }, STEP_DURATION * 3)
        );
        return;
      }
      timers.current.push(
        setTimeout(() => setStepStatus((s) => ({ ...s, queue: "done" })), STEP_DURATION * 3),
        setTimeout(() => setFadingOut(true), STEP_DURATION * 3 + 500),
        setTimeout(() => onLaunch?.(preferencesRef.current), STEP_DURATION * 3 + 500 + CARD_FADE_DURATION)
      );
    }, [onLaunch]);

    React.useEffect(() => {
      if (defaultLaunching) runLaunchSequence();
      return () => timers.current.forEach(clearTimeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDarkModeToggle = () => {
      if (isDarkMode !== undefined) {
        onDarkModeToggle?.();
        return;
      }
      setUncontrolledDarkMode((prev) => {
        const next = !prev;
        document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
        return next;
      });
    };

    const handleLaunch = (e: React.MouseEvent) => {
      if (!isFormValid || launching) return;
      setLaunchError(false);
      setLaunching(true);
      // Shift-click simulates a load failure (prototype aid).
      runLaunchSequence(e.shiftKey);
    };

    return (
      <Container
        ref={ref}
        variant="modal"
        headerTitle={appName}
        headerTitleClassName="lyra-heading-lg"
        headerIcon={appIcon ?? <img src={defaultAppIconSrc} alt="" className="h-5 w-5" />}
        className={cn(
          "w-[360px] transition-opacity ease-out",
          fadingOut ? "opacity-0" : "opacity-100",
          !contained && "bg-transparent border-0 shadow-none",
          className
        )}
        style={{ transitionDuration: `${CARD_FADE_DURATION}ms` }}
      >
        <div className="flex flex-col px-5 pb-5 pt-4">
          {/* ── Phone setup panel ── */}
          <div className="rounded-lyra-md bg-lyra-bg-surface-container-subtle p-5">
            <RadioGroup
              label="Phone Setup"
              value={phoneSetup}
              onValueChange={(value) => setPhoneSetup(value as LoginCardPhoneSetup)}
              disabled={launching}
            >
              <RadioGroupItem value="soft-phone" label="Integrated Soft Phone" />
              <RadioGroupItem value="phone-number" label="Phone Number" />
              <RadioGroupItem value="work-station" label="Station ID" />
            </RadioGroup>

            <Separator className="my-5" />

            <Button variant="ghost" onClick={handleDarkModeToggle} disabled={launching}>
              {darkMode ? <Sun className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
              {darkMode ? "Experience In Light Mode" : "Experience In Dark Mode"}
            </Button>

            {/* Grid-rows trick animates the container's height smoothly (height: auto can't be transitioned directly) */}
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                needsPhoneNumber ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
              aria-hidden={!needsPhoneNumber}
              // `inert` as well — aria-hidden alone left the collapsed
              // section's fields tabbable (axe aria-hidden-focus).
              inert={!needsPhoneNumber}
            >
              <div className={cn("min-h-0", needsPhoneNumber ? "overflow-visible" : "overflow-hidden")}>
                <Separator
                  className={cn(
                    "my-5 transition-opacity duration-200",
                    needsPhoneNumber ? "opacity-100 delay-100" : "opacity-0"
                  )}
                />

                <Input
                  label="Enter Phone Number"
                  type="tel"
                  disabled={launching}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onBlur={() => setPhoneNumberTouched(true)}
                  error={phoneNumberError}
                  className={cn(
                    "transition-all duration-200",
                    needsPhoneNumber
                      ? "opacity-100 translate-y-0 delay-200"
                      : "opacity-0 -translate-y-1"
                  )}
                />
              </div>
            </div>

            {/* Grid-rows trick animates the container's height smoothly (height: auto can't be transitioned directly) */}
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                needsStationId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
              aria-hidden={!needsStationId}
              // `inert` as well — aria-hidden alone left the collapsed
              // section's fields tabbable (axe aria-hidden-focus).
              inert={!needsStationId}
            >
              <div className={cn("min-h-0", needsStationId ? "overflow-visible" : "overflow-hidden")}>
                <Separator
                  className={cn(
                    "my-5 transition-opacity duration-200",
                    needsStationId ? "opacity-100 delay-100" : "opacity-0"
                  )}
                />

                <Input
                  label="Enter Station ID"
                  value={stationId}
                  onChange={(e) => setStationId(e.target.value)}
                  onBlur={() => setStationIdTouched(true)}
                  error={stationIdError}
                  disabled={launching}
                  className={cn(
                    "transition-all duration-200",
                    needsStationId
                      ? "opacity-100 translate-y-0 delay-200"
                      : "opacity-0 -translate-y-1"
                  )}
                />
              </div>
            </div>
          </div>

          {/* ── Launch action ── */}
          <Button
            size="lg"
            className="mt-6 w-full"
            disabled={!isFormValid || launching}
            onClick={handleLaunch}
          >
            {launching ? `Launching ${appName}…` : launchButtonLabel ?? `Launch ${appName}`}
          </Button>

          {/* ── Launch failure ── */}
          {launchError && (
            <p
              role="alert"
              className="mt-2 flex items-start gap-2 lyra-body-md text-lyra-status-critical-strong animate-in fade-in-0 duration-200"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lyra-status-critical-strong text-[11px] font-bold leading-none text-lyra-fg-on-primary"
              >
                !
              </span>
              {launchErrorMessage}
            </p>
          )}

          {/* ── Save preferences ── */}
          <label className="mt-4 flex items-center gap-2 cursor-pointer">
            <Checkbox
              checked={savePreferences}
              onCheckedChange={(checked) => setSavePreferences(!!checked)}
              disabled={launching}
            />
            <span className="lyra-body-md text-lyra-fg-default">Save Preferences</span>
          </label>

          {/* ── Compiling experience — opens beneath Save Preferences once launch starts ── */}
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              launching ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
            )}
            aria-hidden={!launching}
              // `inert` as well — aria-hidden alone left the collapsed
              // section's fields tabbable (axe aria-hidden-focus).
              inert={!launching}
          >
            <div className="overflow-hidden min-h-0">
              <div
                className={cn(
                  "transition-opacity duration-200",
                  launching ? "opacity-100 delay-150" : "opacity-0"
                )}
              >
                <ConversationMessage
                  variant="ai"
                  process={launchSteps}
                  processLabel="Compiling Experience"
                  processExpanded
                  showActions={false}
                >
                  {null}
                </ConversationMessage>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
);
LoginCard.displayName = "LoginCard";

export { LoginCard };
