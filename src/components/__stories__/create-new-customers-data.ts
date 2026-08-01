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
 * Outbound picker's per-row hover flyout.
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
}

const FIRST_NAMES = [
  "Alex", "Sarah", "David", "Priya", "Miguel", "Elena", "Omar", "Grace", "Noah", "Fatima",
  "Liam", "Sofia", "Kenji", "Amara", "Lucas", "Ingrid", "Diego", "Yuki", "Hannah", "Tariq",
];
const LAST_NAMES = [
  "Kowalski", "Miller", "Brown", "Nair", "Santos", "Petrov", "Haddad", "Okafor", "Bennett", "Rahman",
  "Sullivan", "Alvarez", "Tanaka", "Mensah", "Fontaine", "Larsen", "Reyes", "Mori", "Costa", "Ibrahim",
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
    });
  }
  return customers;
}

export const CREATE_NEW_CUSTOMERS: CreateNewCustomerRecord[] = buildCustomers(60);
