/* Shared example data for AIProcess.stories.tsx (Default playground) and
   AIProcess.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import type { AIProcessStep } from "../ai-process";

export const doneSteps: AIProcessStep[] = [
  { id: "1", label: "Reviewing account history", status: "done" },
  { id: "2", label: "Checking recent login events", status: "done" },
  { id: "3", label: "Verifying 2FA configuration", status: "done" },
  { id: "4", label: "Identifying likely root cause", status: "done" },
  { id: "5", label: "Generating recommended action", status: "done" },
];

export const inProgressSteps: AIProcessStep[] = [
  { id: "1", label: "Reviewing account history", status: "done" },
  { id: "2", label: "Checking recent login events", status: "done" },
  { id: "3", label: "Verifying 2FA configuration", status: "active", description: "Analysing device fingerprint…" },
  { id: "4", label: "Identifying likely root cause", status: "pending" },
  { id: "5", label: "Generating recommended action", status: "pending" },
];

export const errorSteps: AIProcessStep[] = [
  { id: "1", label: "Reviewing account history", status: "done" },
  {
    id: "2",
    label: "Checking recent login events",
    status: "error",
    description: "Unable to retrieve login logs — service timeout",
  },
  { id: "3", label: "Verifying 2FA configuration", status: "pending" },
];

export const describedSteps: AIProcessStep[] = [
  { id: "1", label: "Analysing conversation sentiment", status: "done", description: "3 frustrated signals detected" },
  { id: "2", label: "Pulling CRM profile", status: "done", description: "Customer since 2019 · Tier: Premium" },
  { id: "3", label: "Checking SLA status", status: "active", description: "Billing queue — projected breach in ~8 min" },
  { id: "4", label: "Drafting escalation recommendation", status: "pending" },
];

export const collapsedSteps: AIProcessStep[] = [
  { id: "1", label: "Step one", status: "done" },
  { id: "2", label: "Step two", status: "done" },
  { id: "3", label: "Step three", status: "active" },
];

/* Every status once, for the "Step Statuses" reference page. */
export const allStatusSteps: AIProcessStep[] = [
  { id: "1", label: "Done", status: "done" },
  { id: "2", label: "Active", status: "active" },
  { id: "3", label: "Pending", status: "pending" },
  { id: "4", label: "Error", status: "error" },
];

/* Playground scenarios — each carries a description on every step so the
   "Step descriptions" control can show or hide them uniformly. */
export type Scenario = "done" | "in-progress" | "error";

export const scenarioSteps: Record<Scenario, AIProcessStep[]> = {
  done: doneSteps.map((s, i) => ({
    ...s,
    description: [
      "12 events in the last 30 days",
      "No failed attempts found",
      "Authenticator app enrolled",
      "Expired session token",
      "Ask the customer to sign in again",
    ][i],
  })),
  "in-progress": inProgressSteps.map((s, i) => ({
    ...s,
    description: [
      "12 events in the last 30 days",
      "No failed attempts found",
      "Analysing device fingerprint…",
      "Waiting on previous step",
      "Waiting on previous step",
    ][i],
  })),
  error: errorSteps.map((s, i) => ({
    ...s,
    description: [
      "12 events in the last 30 days",
      "Unable to retrieve login logs — service timeout",
      "Waiting on previous step",
    ][i],
  })),
};
