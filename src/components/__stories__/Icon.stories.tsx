import type { Meta, StoryObj } from "@storybook/react";
import {
  Star,
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Bell,
  Settings,
  User,
  ChevronDown,
  Eye,
  EyeOff,
  Calendar,
  Lock,
  Mail,
  Phone,
  Home,
  Folder,
  FileText,
  Download,
  Check,
  Clock,
  AlertCircle,
  Loader,
  CircleDot,
  MinusCircle,
} from "lucide-react";
import { Icon } from "../icon";
import type { IconColor, IconSize, IconBackground, IconShape } from "../icon";
import { Input } from "../input";
import { WarningIconSolid } from "../icons/warning-icon-solid";
import { ErrorIconSolid } from "../icons/error-icon-solid";
import { InfoIconSolid } from "../icons/info-icon-solid";
import { SuccessIconSolid } from "../icons/success-icon-solid";

const meta = {
  title: "Custom Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"] satisfies IconSize[],
    },
    color: {
      control: "select",
      options: [
        "default", "secondary", "action", "disabled", "inverse",
        "on-primary", "active-strong", "active-subtle",
        "status-success", "status-warning", "status-critical", "status-info",
        "inherit",
      ] satisfies IconColor[],
    },
    background: {
      control: "select",
      options: ["none","primary","active","success","warning","critical","info","neutral","surface","shell"] satisfies IconBackground[],
    },
    shape: {
      control: "select",
      options: ["none","rounded","circle"] satisfies IconShape[],
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ── SOL-matched stories ── */

/**
 * Decorative icons are purely visual. They are hidden from assistive
 * technology with `aria-hidden` and should only be used when nearby
 * text already conveys the meaning.
 */
export const DecorativeIcon: Story = {
  name: "Decorative Icon",
  render: () => (
    <div className="flex items-center gap-2 rounded-lyra-md border border-lyra-border-subtle px-4 py-3">
      <Icon icon={Star} size="md" color="action" decorative />
      <span className="lyra-body-md text-lyra-fg-default">Saved to favorites</span>
    </div>
  ),
};

/**
 * Informative icons carry semantic meaning. Provide a `label` so screen
 * readers can announce the icon's purpose.
 */
export const InformativeIcon: Story = {
  name: "Informative Icon",
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Icon icon={CheckCircle} size="md" color="status-success" label="Success" />
        <Icon icon={AlertTriangle} size="md" color="status-warning" label="Warning" />
        <Icon icon={XCircle} size="md" color="status-critical" label="Error" />
        <Icon icon={Info} size="md" color="status-info" label="Info" />
      </div>
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Each icon has an <code>aria-label</code> and <code>role="img"</code>.
      </p>
    </div>
  ),
};

/**
 * Tooltip icons show a tooltip on hover using the `label` as content.
 * Useful when an icon appears without visible text.
 */
export const TooltipIcon: Story = {
  name: "Tooltip Icon",
  render: () => (
    <div className="flex items-center gap-4 p-6">
      <Icon icon={Bell} size="md" color="action" label="Notifications" tooltip />
      <Icon icon={Settings} size="md" color="action" label="Settings" tooltip />
      <Icon icon={User} size="md" color="action" label="Profile" tooltip />
      <Icon icon={Download} size="md" color="action" label="Download" tooltip />
    </div>
  ),
};

/**
 * Icons used inside Input components — passed as the `startIcon` or
 * `endIcon` render prop.
 */
export const InputLeadingIcon: Story = {
  name: "Input Leading Icon",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input
        label="Search"
        placeholder="Search..."
        startIcon={<Icon icon={Search} size="sm" color="secondary" decorative />}
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        startIcon={<Icon icon={Mail} size="sm" color="secondary" decorative />}
      />
      <Input
        label="Phone"
        placeholder="+1 (555) 000-0000"
        startIcon={<Icon icon={Phone} size="sm" color="secondary" decorative />}
      />
    </div>
  ),
};

/**
 * Icons used as trailing (end) decorations inside an Input.
 */
export const InputTrailingIcon: Story = {
  name: "Input Trailing Icon",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        endIcon={<Icon icon={Eye} size="sm" color="secondary" decorative />}
      />
      <Input
        label="Due date"
        placeholder="MM/DD/YYYY"
        endIcon={<Icon icon={Calendar} size="sm" color="secondary" decorative />}
      />
      <Input
        label="Token"
        placeholder="Paste token..."
        endIcon={<Icon icon={Lock} size="sm" color="disabled" decorative />}
      />
    </div>
  ),
};

/* ── Additional lyra stories ── */

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(["xs", "sm", "md", "lg"] as IconSize[]).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon icon={Star} size={size} color="action" decorative />
          <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      {(
        [
          ["default", "Default"],
          ["secondary", "Secondary"],
          ["action", "Action"],
          ["disabled", "Disabled"],
          ["active-strong", "Active Strong"],
          ["status-success", "Success"],
          ["status-warning", "Warning"],
          ["status-critical", "Critical"],
          ["status-info", "Info"],
        ] as [IconColor, string][]
      ).map(([color, label]) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <Icon icon={Star} size="md" color={color} decorative />
          <span className="lyra-body-sm text-lyra-fg-secondary">{label}</span>
        </div>
      ))}
    </div>
  ),
};

/* ── Background variants ── */

export const BackgroundVariants: Story = {
  name: "Background variants",
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      {/* Rounded */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Rounded</p>
        <div className="flex flex-wrap gap-4">
          {(["primary","active","success","warning","critical","info","neutral","surface","shell"] as const).map((bg) => (
            <div key={bg} className="flex flex-col items-center gap-2">
              <Icon icon={Bell} size="md" background={bg} shape="rounded" decorative />
              <span className="lyra-body-sm text-lyra-fg-secondary">{bg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Circle */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Circle</p>
        <div className="flex flex-wrap gap-4">
          {(["primary","active","success","warning","critical","info","neutral","surface","shell"] as const).map((bg) => (
            <div key={bg} className="flex flex-col items-center gap-2">
              <Icon icon={Bell} size="md" background={bg} shape="circle" decorative />
              <span className="lyra-body-sm text-lyra-fg-secondary">{bg}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Sizes</p>
        <div className="flex items-end gap-4">
          {(["xs","sm","md","lg"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Icon icon={Bell} size={size} background="active" shape="circle" decorative />
              <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};


/**
 * Two real "colored circle + glyph" status-indicator patterns, both built
 * from `Icon` (`background` + `shape="circle"`) rather than hand-rolled
 * markup: `AIProcess`'s step icons (`size="xs"`, one glyph per step status —
 * `done`/`active`/`error`/`pending` — with heavier `strokeWidth` on the
 * done/active/error glyphs to stay legible at 14px, plus `spin` on the
 * in-progress loader) and the "Queue Agent status" icons from
 * `agent-dashboard.tsx`'s `AgentDashboardQueueDrilldown` (`size="sm"`,
 * available/working/unavailable agent counts). Kept as one story since both
 * are the same underlying pattern at different sizes/glyphs, not two
 * different components.
 */
export const StatusIcons: Story = {
  name: "Status icons (AIProcess steps / Queue agent status)",
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">AIProcess step icons (xs)</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Check} size="xs" background="success" shape="circle" strokeWidth={2.5} decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">done</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Loader} size="xs" background="active" shape="circle" strokeWidth={2} spin decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">active</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={AlertCircle} size="xs" background="critical" shape="circle" strokeWidth={2} decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">error</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Clock} size="xs" background="shell" shape="circle" strokeWidth={1.5} decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">pending</span>
          </div>
        </div>
      </div>

      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Queue agent status icons (sm)</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Icon icon={CheckCircle} size="sm" background="success" shape="circle" decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">available</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={CircleDot} size="sm" background="warning" shape="circle" decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">working</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={MinusCircle} size="sm" background="critical" shape="circle" decorative />
            <span className="lyra-body-xs text-lyra-fg-secondary">unavailable</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * `*IconSolid` (`src/components/icons/*-icon-solid.tsx`) — self-contained
 * solid/filled glyphs (a colored circle or triangle with a white mark baked
 * into one SVG), used by `Toast`'s top-left status icon. Unlike the
 * `background`+`shape="circle"` composition above (a plain outline glyph
 * layered on top of a separate `Icon` container), these are a single asset
 * where the colored shape itself is `fill="currentColor"` — driven here via
 * `Icon`'s `color` prop, so they're still fully token-driven and theme-aware
 * despite not going through `background`. Siblings of the original
 * `WarningIcon`/`ErrorIcon`/`InfoIcon`/`SuccessIcon` (same silhouette), which
 * remain hardcoded-hex and untouched for their ~13 existing call sites — see
 * each `*-icon-solid.tsx` file's own doc comment for why these are separate.
 */
export const SolidStatusIcons: Story = {
  name: "Solid status icons (Toast)",
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={WarningIconSolid} size="md" color="status-warning" decorative />
        <span className="lyra-body-xs text-lyra-fg-secondary">warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={ErrorIconSolid} size="md" color="status-critical" decorative />
        <span className="lyra-body-xs text-lyra-fg-secondary">error</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={InfoIconSolid} size="md" color="status-info" decorative />
        <span className="lyra-body-xs text-lyra-fg-secondary">info</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={SuccessIconSolid} size="md" color="status-success" decorative />
        <span className="lyra-body-xs text-lyra-fg-secondary">success</span>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => {
    const sizes = ["sm", "md", "lg"] as IconSize[];
    const colors = [
      ["default", "Default"],
      ["secondary", "Secondary"],
      ["action", "Action"],
      ["disabled", "Disabled"],
      ["active-strong", "Active Strong"],
      ["status-success", "Success"],
      ["status-warning", "Warning"],
      ["status-critical", "Critical"],
      ["status-info", "Info"],
    ] as [IconColor, string][];

    return (
      <div className="flex flex-col gap-8 p-4">
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="text-left pr-6 pb-3 lyra-body-sm text-lyra-fg-secondary font-medium">Color \ Size</th>
                {sizes.map((size) => (
                  <th key={size} className="px-6 pb-3 lyra-body-sm text-lyra-fg-secondary font-medium text-center">
                    {size}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {colors.map(([color, label]) => (
                <tr key={color}>
                  <td className="pr-6 py-3 lyra-body-sm text-lyra-fg-secondary whitespace-nowrap">{label}</td>
                  {sizes.map((size) => (
                    <td key={size} className="px-6 py-3 text-center">
                      <Icon icon={Star} size={size} color={color} decorative />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },
};

export const CommonIcons: Story = {
  name: "Common Icons",
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {[
        [Search, "Search"],
        [Bell, "Bell"],
        [Settings, "Settings"],
        [User, "User"],
        [Home, "Home"],
        [Folder, "Folder"],
        [FileText, "FileText"],
        [Mail, "Mail"],
        [Phone, "Phone"],
        [Calendar, "Calendar"],
        [Lock, "Lock"],
        [Download, "Download"],
        [ChevronDown, "ChevronDown"],
        [Eye, "Eye"],
        [EyeOff, "EyeOff"],
        [Star, "Star"],
        [Info, "Info"],
        [AlertTriangle, "AlertTriangle"],
        [CheckCircle, "CheckCircle"],
        [XCircle, "XCircle"],
      ].map(([LIcon, name]) => (
        <div key={name as string} className="flex flex-col items-center gap-1 w-16">
          <Icon icon={LIcon as any} size="md" color="default" decorative />
          <span className="lyra-body-sm text-lyra-fg-secondary text-center leading-tight">
            {name as string}
          </span>
        </div>
      ))}
    </div>
  ),
};
