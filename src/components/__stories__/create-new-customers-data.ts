/**
 * Mock "Customers" dataset for the CreateNew → Outbound flow story.
 *
 * Kept in its own file rather than inline in CreateNew.stories.tsx — same
 * reasoning as create-new-agents-data.ts.
 *
 * Also doubles as the "customer database" backing agent-next-gen-v2's
 * Dashboard "Customers" list view (a Contacts-style table) — the
 * firstName/lastName/group/firstPhone/emailAddress/address1/city/state/
 * postalCode fields below exist to give that list view real columns to
 * render, on top of the `channels` field this file already had for the
 * Outbound picker's per-row hover flyout. originalCustomerId/dateOfBirth/
 * agent/agentTeam/paymentBalance were added on top of that so the same
 * list view's "Add Filter" menu has a real, filterable field behind every
 * option it offers (Customer ID, Original customer ID, Phone, Email
 * address, Date of birth, Group, Agent, Agent team, Address 1, Payment
 * balance, First name, Last name) instead of a menu entry with nothing to
 * actually filter on.
 */
import type { ChannelType } from "../channel-row";

export interface CreateNewCustomerRecord {
  id: string;
  name: string;
  customerId: string;
  /** Which channels this customer can be reached on — drives the per-row
   *  hover flyout in the Outbound picker (only supported channels show),
   *  and the equivalent hover icon buttons in the Customers list view. */
  channels: ChannelType[];
  avatarClassName: string;
  /** Same person as `name`, split into individual fields for consumers
   *  (e.g. a Contacts list view) that render first/last name as separate
   *  columns rather than re-parsing `name`. */
  firstName: string;
  lastName: string;
  /** Customer segment/tag shown in list views. */
  group: string;
  firstPhone: string;
  emailAddress: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  /** Legacy/pre-migration id for this same customer — distinct from the
   *  live `customerId` above, just another filterable identifier field. */
  originalCustomerId: string;
  /** "MM/DD/YYYY" — rotates through a fixed set of representative dates
   *  (not one unique value per record) so a checkbox-style filter on this
   *  field has a manageable option list, same reasoning as `group`/`state`
   *  rotating through a small fixed set instead of being unique per row. */
  dateOfBirth: string;
  /** Assigned agent's display name. */
  agent: string;
  /** Assigned agent's team name. */
  agentTeam: string;
  /** Formatted balance string (e.g. "$149.99") — rotates through a small
   *  fixed set of representative amounts for the same "manageable filter
   *  option list" reason as `dateOfBirth` above. */
  paymentBalance: string;
}

// Disjoint from `create-new-agents-data.ts`'s own FIRST_NAMES/LAST_NAMES —
// see that file's identical comment for why (per explicit request, "de-dupe
// the database so customers and agent records are unique" — these two
// pools used to share ~18 of 20 first/last names each, producing 47
// exact-duplicate full names between the 100 generated agents and 60
// generated customers).
const FIRST_NAMES = [
  "Alex", "Sarah", "David", "Miguel", "Sofia", "Lucas", "Yuki", "Noah", "Liam", "Isabella",
  "Ethan", "Maya", "Caleb", "Zara", "Owen", "Meera", "Julian", "Ana", "Ravi", "Camille",
];
const LAST_NAMES = [
  "Miller", "Brown", "Santos", "Alvarez", "Sullivan", "Castillo", "Costa", "Ibrahim", "Whitfield", "Delgado",
  "Park", "Nkemelu", "Fischer", "Duarte", "Novello", "Grant", "Barros", "Halvorsen", "Yamada", "Silva",
];
const AVATAR_COLORS = [
  "blue", "purple", "green", "orange", "teal", "red", "pink", "yellow", "lime", "slate",
];
// Customers skew toward email/sms — most don't take a direct "voice" agent
// line the way internal agents do, which also gives the flyout some
// realistic variety row to row.
const ALL_CHANNELS: ChannelType[] = ["email", "sms", "whatsapp", "voice"];

const GROUPS = ["VIP", "Standard", "Enterprise", "Prospect"];

// city/state/postalCode rotate through this list — real-ish combos, not
// meant to be geographically exhaustive, just varied enough for a list
// view's State filter chip to have more than one option.
const CITY_STATE_ZIP: { city: string; state: string; postalCode: string }[] = [
  { city: "Columbus", state: "OH", postalCode: "43215" },
  { city: "San Francisco", state: "CA", postalCode: "94105" },
  { city: "Dunwoody", state: "GA", postalCode: "30338" },
  { city: "Campbell", state: "CA", postalCode: "95008" },
  { city: "Austin", state: "TX", postalCode: "78701" },
  { city: "Denver", state: "CO", postalCode: "80202" },
  { city: "Portland", state: "OR", postalCode: "97201" },
  { city: "Raleigh", state: "NC", postalCode: "27601" },
  { city: "Boise", state: "ID", postalCode: "83702" },
  { city: "Madison", state: "WI", postalCode: "53703" },
];

const STREET_NAMES = [
  "Clinton Heights Ave", "Spear St", "Sandell Dr", "Main St", "Congress Ave",
  "Larimer St", "Burnside St", "Fayetteville St", "Capitol Blvd", "State St",
];

// Fixed, small rotating sets for the filter-only fields below — deliberately
// NOT one unique value per record (60 unique birthdates/balances would make
// a checkbox-style filter's option list unusably long), same reasoning
// `GROUPS`/`CITY_STATE_ZIP` already use.
const DATES_OF_BIRTH = [
  "03/14/1985", "07/22/1990", "11/02/1978", "01/30/1995", "05/18/1988",
  "09/09/1972", "12/25/1993", "02/17/1982", "06/11/1998", "10/05/1965",
];
const AGENTS = ["Jordan Blake", "Casey Nguyen", "Morgan Lee", "Taylor Reyes", "Riley Chen", "Avery Kim"];
const AGENT_TEAMS = ["Tier 1 Support", "Tier 2 Escalations", "Billing Support", "VIP Concierge"];
const PAYMENT_BALANCES = ["$0.00", "$24.99", "$49.50", "$99.00", "$149.99", "$249.50", "$499.00", "$999.99"];

function buildCustomers(count: number): CreateNewCustomerRecord[] {
  const customers: CreateNewCustomerRecord[] = [];
  for (let i = 0; i < count; i++) {
    const first = FIRST_NAMES[i % FIRST_NAMES.length];
    const last = LAST_NAMES[(i + Math.floor(i / FIRST_NAMES.length)) % LAST_NAMES.length];
    const color = AVATAR_COLORS[i % AVATAR_COLORS.length];
    const extra = ALL_CHANNELS.slice(1).filter((_, idx) => (i + idx) % 3 !== 0);
    const loc = CITY_STATE_ZIP[i % CITY_STATE_ZIP.length];
    const street = STREET_NAMES[i % STREET_NAMES.length];
    const streetNumber = 100 + ((i * 37) % 900);
    const areaCode = 200 + (i % 8) * 100;
    const phoneMid = 200 + ((i * 13) % 800);
    const phoneEnd = 1000 + ((i * 71) % 9000);
    customers.push({
      id: `customer-${i + 1}`,
      name: `${first} ${last}`,
      customerId: `CST-${10000 + i * 37}`,
      channels: ["email", ...extra],
      avatarClassName: `bg-lyra-accent-${color}-soft text-lyra-accent-${color}-strong`,
      firstName: first,
      lastName: last,
      group: GROUPS[i % GROUPS.length],
      firstPhone: `(${areaCode}) ${phoneMid}-${phoneEnd}`,
      emailAddress: `${first.toLowerCase()}.${last.toLowerCase().replace(/\s+/g, "")}@example.com`,
      address1: `${streetNumber} ${street}`,
      city: loc.city,
      state: loc.state,
      postalCode: loc.postalCode,
      originalCustomerId: `ORIG-${100000 + i * 91}`,
      dateOfBirth: DATES_OF_BIRTH[i % DATES_OF_BIRTH.length],
      agent: AGENTS[i % AGENTS.length],
      agentTeam: AGENT_TEAMS[i % AGENT_TEAMS.length],
      paymentBalance: PAYMENT_BALANCES[i % PAYMENT_BALANCES.length],
    });
  }
  return customers;
}

// One hand-authored record appended after the 60 generated ones above —
// backs agent-next-gen-v2's own scripted "Marcus Webb" inbound-chat demo
// (`AgentWorkspace2WithDeskPage.tsx`/`agent-next-gen-marcus-webb-scenario.ts`,
// Premium tier only), added here per explicit request ("add marcus webb to
// the customer database"). `id`/`customerId`/`emailAddress` below MUST stay
// in sync with that module's own `MARCUS_WEBB_ID`/`MARCUS_WEBB_CUSTOMER_ID`/
// `MARCUS_WEBB_EMAIL_ADDRESS` constants — duplicated as plain string
// literals rather than a shared import since lyra-ui doesn't (and
// shouldn't) depend on one specific consuming app's own scenario data.
// Every other field below is ordinary invented-but-plausible demo data,
// same treatment `buildCustomers` already gives the other 60.
const MARCUS_WEBB_CUSTOMER_RECORD: CreateNewCustomerRecord = {
  id: "marcus-webb-scenario",
  name: "Marcus Webb",
  customerId: "MW-DEMO-0001",
  channels: ["chat", "email"],
  avatarClassName: "bg-lyra-accent-green-soft text-lyra-accent-green-strong",
  firstName: "Marcus",
  lastName: "Webb",
  group: "Standard",
  firstPhone: "(503) 555-0142",
  emailAddress: "marcus.webb@personalmail.com",
  address1: "482 Birchwood Ter",
  city: "Portland",
  state: "OR",
  postalCode: "97201",
  originalCustomerId: "ORIG-500001",
  dateOfBirth: "08/14/1991",
  agent: "Jordan Blake",
  agentTeam: "Tier 1 Support",
  paymentBalance: "$0.00",
};

export const CREATE_NEW_CUSTOMERS: CreateNewCustomerRecord[] = [
  ...buildCustomers(60),
  MARCUS_WEBB_CUSTOMER_RECORD,
];
