import type { AgentNotification } from "../agent-notifications";

/* Sample data shared by the AgentNotifications Default playground and its Variants page. */
export const SAMPLE_NOTIFICATIONS: AgentNotification[] = [
  { id: "1", type: "new-case",    title: "New Case",     subtitle: "Noah Patel",    timestamp: "51m ago",  read: false },
  { id: "2", type: "new-chat",    title: "New Chat",     subtitle: "Sarah Miller",  timestamp: "56m ago",  read: false },
  { id: "3", type: "escalation",  title: "Escalation",   subtitle: "Lauren Kim",    timestamp: "1h ago",   read: false },
  { id: "4", type: "new-case",    title: "New Case",     subtitle: "Ethan Zhang",   timestamp: "1h ago",   read: true  },
  { id: "5", type: "new-chat",    title: "New Chat",     subtitle: "Olivia Reed",   timestamp: "1h ago",   read: true  },
  { id: "6", type: "missed-call", title: "Missed Call",  subtitle: "David Brown",   timestamp: "1h ago",   read: false },
  { id: "7", type: "new-case",    title: "New Case",     subtitle: "Mia Torres",    timestamp: "2h ago",   read: true  },
  { id: "8", type: "escalation",  title: "Escalation",   subtitle: "James Wilson",  timestamp: "2h ago",   read: true  },
];

export const NOTIFICATION_COUNTS = { none: 0, few: 3, many: SAMPLE_NOTIFICATIONS.length } as const;
export type NotificationCount = keyof typeof NOTIFICATION_COUNTS;
