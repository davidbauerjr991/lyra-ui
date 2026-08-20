/**
 * Mock "Agents" dataset for the CreateNew → Outbound flow story.
 *
 * Kept in its own file rather than inline in CreateNew.stories.tsx so the
 * story file isn't dominated by a 100-row fixture — see CONTRIBUTING.md
 * (avoid inline code bloat for generated/large mock datasets).
 */
import type { ChannelType } from "../channel-row";
import type { AgentPresenceStatus } from "../create-new";

export interface CreateNewAgentRecord {
  id: string;
  name: string;
  agentId: string;
  /** Which channels this agent can be reached on — drives the per-row
   *  hover flyout in the Outbound picker (only supported channels show). */
  channels: ChannelType[];
  avatarClassName: string;
  /** Current availability — rendered as a status chip next to the agent's
   *  name in the Outbound picker's "Select Agent" list. */
  status: AgentPresenceStatus;
}

// Disjoint from `create-new-customers-data.ts`'s own FIRST_NAMES/LAST_NAMES
// — per explicit request ("de-dupe the database so customers and agent
// records are unique"), an agent record and a customer record must never
// be able to land on the same full name. Both pools used to draw from
// nearly the same 20 first names/20 last names (just reordered), which
// with 100 agents cycling against 60 customers produced 47 exact-duplicate
// full names between the two lists — e.g. "Alex Kowalski" existed as both
// an agent and a customer, which is exactly the confusing overlap this
// fixes. Disjoint FIRST_NAMES alone is sufficient to guarantee zero
// cross-list duplicates (a shared last name can't produce a matching full
// name if the first name never matches), but LAST_NAMES is kept disjoint
// too so the two rosters don't even *read* as related when scanned side
// by side. See that file's own identical comment for the customer side of
// this pairing.
const FIRST_NAMES = [
  "Jamie", "Priya", "Wei", "Marcus", "Elena", "Omar", "Grace", "Fatima", "Kenji", "Amara",
  "Ingrid", "Diego", "Hannah", "Tariq", "Aisha", "Viktor", "Naomi", "Rafael", "Chidi", "Petra",
];
const LAST_NAMES = [
  "Torres", "Nair", "Chen", "Kowalski", "Petrov", "Haddad", "Okafor", "Bennett", "Rahman", "Tanaka",
  "Mensah", "Fontaine", "Larsen", "Mori", "Novak", "Osei", "Lindqvist", "Abara", "Suzuki", "Kessler",
];
const AVATAR_COLORS = [
  "blue", "orange", "teal", "purple", "green", "red", "pink", "yellow", "lime", "slate",
];
const ALL_CHANNELS: ChannelType[] = ["voice", "email", "sms", "whatsapp"];
// Weighted so most agents are actually reachable (available/away) rather
// than an unrealistic even 1-in-5 split — busy/in-call/offline are real but
// less common states on a roster like this.
const STATUS_CYCLE: AgentPresenceStatus[] = [
  "available", "available", "busy", "available", "away",
  "available", "in-call", "available", "offline", "available",
];

/** Deterministic (no Math.random) so the story renders identically every
 *  time — cycles through name/color pools and varies channel support per
 *  agent instead of giving every agent all four channels. */
function buildAgents(count: number): CreateNewAgentRecord[] {
  const agents: CreateNewAgentRecord[] = [];
  for (let i = 0; i < count; i++) {
    const first = FIRST_NAMES[i % FIRST_NAMES.length];
    const last = LAST_NAMES[(i + Math.floor(i / FIRST_NAMES.length)) % LAST_NAMES.length];
    const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
    // Vary channel support: every agent gets voice, and a rotating subset
    // of the remaining three so the flyout isn't identical for every row.
    const extra = ALL_CHANNELS.slice(1).filter((_, idx) => (i + idx) % 3 !== 0);
    agents.push({
      id: `agent-${i + 1}`,
      name: `${first} ${last}`,
      agentId: `AGT-${2000 + i}`,
      channels: ["voice", ...extra],
      avatarClassName: `bg-lyra-accent-${color}-soft text-lyra-accent-${color}-strong`,
      status: STATUS_CYCLE[i % STATUS_CYCLE.length],
    });
  }
  return agents;
}

export const CREATE_NEW_AGENTS: CreateNewAgentRecord[] = buildAgents(100);
