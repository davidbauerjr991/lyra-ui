import { useState } from "react";
import { cn } from "../lib/utils";
import { Input } from "./input";
import { PhoneInput, type PhoneValue } from "./phone-input";
import { EmailInput } from "./email-input";
import { Textarea } from "./textarea";
import { Select } from "./select";
import { ToggleGroup } from "./toggle-group";
import { Accordion } from "./accordion";

/* ── FormTemplate ──
   The record-detail form layout — Contact Information / Call Details /
   Action Taken / Resolution & Outcome sections inside a centered,
   1000px-max-width container — promoted here (Templates/Forms) from
   `lyra-form-generator`'s own hand-built `FormDetailPage.tsx` so any
   consumer needing this exact "Forms" detail layout can render one real
   component instead of hand-copying its markup — same "Composition over
   reimplementation" motivation as `AgentDashboard` (agent-dashboard.tsx).

   All field state (phone/email/outcome) is self-contained here, same
   pattern as `AgentDashboard`'s own internal subcomponents — nothing needs
   to be controlled from outside for this to render a faithful "Forms"
   template out of the box. The demo field values/options below are the
   same illustrative placeholder content the reference screenshot this was
   built from shows, not real business data.

   `max-w-[1000px]` + `lyra-form-grid-wrap` establishes the container-query
   boundary (`container-type: inline-size`, see lyra-tokens.css) once, at
   the root; every multi-field row inside uses `.lyra-form-grid` so they
   all collapse together, in sync, off that same boundary: a wide flex-row
   layout (2-up/3-up/4-up per row's item count) at the full 1000px width,
   stepping down to a 2-col grid at ≤768px, then a single column at ≤480px.
   `.lyra-form-grid` is its own class (not `AgentDashboard`'s
   `.lyra-container-grid`) specifically so it can use these narrower
   thresholds — a form's 2-4-field rows collapse well before a wider card
   grid would need to — without changing `.lyra-container-grid` itself and
   affecting `AgentDashboard`'s card rows. */

const CHANNEL_OPTIONS = [
  { value: "inbound-call", label: "Inbound Call" },
  { value: "outbound-call", label: "Outbound Call" },
  { value: "chat", label: "Chat" },
  { value: "email", label: "Email" },
];

const CATEGORY_OPTIONS = [
  { value: "technical-support", label: "Technical Support" },
  { value: "billing", label: "Billing" },
  { value: "general-inquiry", label: "General Inquiry" },
];

const SUB_CATEGORY_OPTIONS = [
  { value: "login-access", label: "Login / access issue" },
  { value: "bug-report", label: "Bug report" },
  { value: "feature-request", label: "Feature request" },
];

const REFERENCE_OPTIONS = [
  { value: "tkt-88412", label: "TKT_88412" },
  { value: "tkt-88413", label: "TKT_88413" },
  { value: "tkt-88414", label: "TKT_88414" },
];

const SYSTEM_ACCESS_OPTIONS = [
  { value: "crm-admin-auth", label: "CRM, Admin portal, Auth system" },
  { value: "crm-only", label: "CRM only" },
  { value: "billing-system", label: "Billing system" },
];

const OUTCOME_OPTIONS = [
  { value: "resolved", label: "Resolved" },
  { value: "escalated", label: "Escalated" },
  { value: "follow-up-required", label: "Follow-up required" },
  { value: "unresolved", label: "Unresolved" },
];

export interface FormTemplateProps {
  className?: string;
}

export function FormTemplate({ className }: FormTemplateProps) {
  const [outcome, setOutcome] = useState("");
  const [phone, setPhone] = useState<PhoneValue>({ countryCode: "us", number: "6465550198" });
  const [email, setEmail] = useState("m.santos@email.com");
  // `Select` is controlled-only (`value`/`onValueChange` — no `defaultValue`
  // prop exists on `SelectProps`, see select.tsx); the inline version this
  // was promoted from passed `defaultValue` on every `Select` here, which
  // TypeScript would have flagged (Property 'defaultValue' does not exist on
  // type '... & SelectProps ...') but silently compiled anyway because the
  // app's `vite build` only transpiles with esbuild and never runs `tsc`, so
  // it went unnoticed — each of these initial values did nothing, every
  // Select rendered with no preselection. Fixed here by giving each one its
  // own controlled state seeded with the same initial value.
  const [channel, setChannel] = useState("inbound-call");
  const [category, setCategory] = useState("technical-support");
  const [subCategory, setSubCategory] = useState("login-access");
  const [reference, setReference] = useState("tkt-88412");
  const [systemAccess, setSystemAccess] = useState("crm-admin-auth");

  return (
    // `w-full` matters here, not just for symmetry with `AgentDashboard`'s
    // identical `w-full max-w-[1200px] mx-auto lyra-container-grid-wrap`
    // root: this element also carries `container-type: inline-size` (via
    // `lyra-form-grid-wrap`), and in a flex-stretch context (e.g. the
    // `Templates/Forms` story's `flex flex-col` shell) relying on stretch
    // alone to size a container-query element is exactly the kind of thing
    // that can collapse to near-zero width — containment forces the
    // element's own intrinsic/content-based size contribution to be
    // ignored, so without an explicit, non-content-based width (a `100%`
    // via `w-full`) it has nothing reliable to size itself from. In the app
    // (`FormDetailPage.tsx`), this div sits in a plain block container
    // instead, so plain block width:auto masked the issue there — but
    // Storybook's flex shell exposed it.
    <div className={cn("w-full max-w-[1000px] mx-auto flex flex-col gap-8 lyra-form-grid-wrap", className)}>

      {/* ════ Contact Information ════ */}
      <section className="flex flex-col gap-4">
        <h2 className="lyra-heading-md text-lyra-fg-default">Contact Information</h2>
        <div className="lyra-form-grid">
          <Input label="Full Name" defaultValue="Maria Santos" />
          <Input label="Account ID" defaultValue="ACC-2049-B" />
        </div>
        <div className="lyra-form-grid">
          <PhoneInput label="Phone" value={phone} onChange={setPhone} />
          <EmailInput label="Email" value={email} onChange={setEmail} />
          <Select label="Channel" options={CHANNEL_OPTIONS} value={channel} onValueChange={setChannel} />
        </div>
        <div className="lyra-form-grid">
          {["Field 1", "Field 2", "Field 3", "Field 4"].map((label) => (
            <Input key={label} label={label} placeholder="Placeholder" />
          ))}
        </div>
      </section>

      {/* ════ Call Details ════ */}
      <section className="flex flex-col gap-4">
        <h2 className="lyra-heading-md text-lyra-fg-default">Call Details</h2>
        <div className="lyra-form-grid">
          <Select label="Category" options={CATEGORY_OPTIONS} value={category} onValueChange={setCategory} />
          <Select label="Sub-Category" options={SUB_CATEGORY_OPTIONS} value={subCategory} onValueChange={setSubCategory} />
        </div>
        <Textarea label="Reason for contact" placeholder="Placeholder" maxLength={100} />
      </section>

      {/* ════ Action Taken ════ */}
      <section className="flex flex-col gap-4">
        <h2 className="lyra-heading-md text-lyra-fg-default">Action Taken</h2>
        <Textarea label="Summary of actions" placeholder="Placeholder" maxLength={100} />
        <div className="lyra-form-grid">
          <Select label="Reference / ticket no." options={REFERENCE_OPTIONS} value={reference} onValueChange={setReference} />
          <Select label="System access" options={SYSTEM_ACCESS_OPTIONS} value={systemAccess} onValueChange={setSystemAccess} />
        </div>
      </section>

      {/* ════ Resolution & Outcome ════ */}
      <section className="flex flex-col gap-4">
        <h2 className="lyra-heading-md text-lyra-fg-default">Resolution &amp; Outcome</h2>
        {/* `self-start` — ToggleGroup's own root is `inline-flex` (content-
            sized), but this section is a `flex flex-col` parent, whose
            default `align-items: stretch` was forcing it to fill the full
            row width regardless. `self-start` opts this child out of that
            stretch so its background hugs just the buttons. */}
        <ToggleGroup items={OUTCOME_OPTIONS} value={outcome} onValueChange={setOutcome} className="self-start" />
        <Textarea label="Follow-up notes" placeholder="Placeholder" maxLength={100} />
      </section>

      {/* ════ Placement (Accordion) ════
          An `Accordion` used inside a form still needs to respect the
          form's own 1000px max-width — its root is plain `w-full`
          (accordion.tsx), so left alone it would stretch to whatever
          container it's placed in, not to this template's centered
          1000px column. It's not wrapped in a max-width div of its own
          here because it doesn't need one: sitting directly inside this
          component's `max-w-[1000px] mx-auto` root already caps it, the
          same as every section above. Consumers that render an accordion
          *outside* this root (e.g. inside a wider tab panel, as
          Outbound-Campaigns' Campaign Details modal does) need to apply
          `max-w-[1000px] mx-auto` to the `Accordion` itself (its
          `className` prop) so the header row and content cap/center
          together — capping only the content, not the accordion's own
          trigger row, leaves the header full-width and misaligned with
          the fields underneath it. This section's content is real,
          editable input fields (not a display-only label/value section)
          — that's the case this example exists to cover. */}
      <Accordion
        defaultValue="placement"
        items={[
          {
            id: "placement",
            title: "Placement Information",
            content: (
              <div className="lyra-form-grid">
                <Input label="Location" placeholder="Placeholder" />
                <Input label="Department" placeholder="Placeholder" />
              </div>
            ),
          },
        ]}
      />

    </div>
  );
}
