// Side-effect only — registers the document-level keyboard/pointer
// listeners every text field's mouse-vs-keyboard focus ring depends on.
// See input-modality.ts's own doc comment for why this can't just be
// native `:focus-visible`. Imported here (the package entry point) so it's
// live exactly once, automatically, for every consumer.
import "./lib/input-modality";

/* ── Components ── */
export { Button, buttonVariants } from "./components/button";
export { TagsInput } from "./components/tags-input";
export type { TagsInputProps } from "./components/tags-input";
export { Tag, tagVariants } from "./components/tag";
export type { TagProps, TagVariant, TagShape } from "./components/tag";
export { TagPicker } from "./components/tag-picker";
export type { TagPickerOption, TagPickerProps } from "./components/tag-picker";
export { Calendar } from "./components/calendar";
export type { CalendarProps, CalendarMode, CalendarSingleProps, CalendarRangeProps, CalendarWeekProps, DateRange } from "./components/calendar";
export { DatePicker, DateRangePicker } from "./components/date-picker";
export { DateTimePicker, DateRangeTimePicker } from "./components/date-time-picker";
export { NumberField } from "./components/number-field";
export type { NumberFieldProps } from "./components/number-field";
export type { DateTimePickerProps, DateRangeTimePickerProps, DateRangeTimeValue } from "./components/date-time-picker";
export { QuickReplyMenu } from "./components/quick-reply-menu";
export type { QuickReplyMenuItem, QuickReplyMenuProps } from "./components/quick-reply-menu";
export { QuickReplyVariableForm } from "./components/quick-reply-variable-form";
export type { QuickReplyFieldType, QuickReplyFieldOption, QuickReplyField, QuickReplyVariableFormProps } from "./components/quick-reply-variable-form";
export type { DatePickerProps, DateRangePickerProps } from "./components/date-picker";
export { Accordion, AccordionHeadless, AccordionHeadlessItem, AccordionHeadlessContent } from "./components/accordion";
export type { AccordionProps, AccordionItem, AccordionHeadlessProps, AccordionHeadlessItemProps, AccordionHeadlessContentProps } from "./components/accordion";
export { ToggleGroup } from "./components/toggle-group";
export type { ToggleGroupProps, ToggleGroupItem, ToggleGroupType } from "./components/toggle-group";
export { Checkbox } from "./components/checkbox";
export type { CheckboxProps } from "./components/checkbox";
export { CheckboxGroup } from "./components/checkbox-group";
export type { CheckboxGroupProps, CheckboxGroupOption } from "./components/checkbox-group";
export { Switch } from "./components/switch";
export type { SwitchProps } from "./components/switch";
export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  SortableTableHead,
  TableToolbar,
  TableFooter,
  ColumnToggle,
  TableGroupRow,
  ColumnHeaderContextMenu,
  useColumnReorder,
  useTableGrouping,
  useAutoFitRows,
} from "./components/table";
export type { SortDirection, ColumnDragHandlers, TableProps, TableHeadProps, TableCellProps, TableToolbarProps, ToolbarFilterDef, ToolbarActionDef, TableFooterProps, ColumnToggleItem, ColumnToggleProps, TableGroupRowProps, GroupedData, UseTableGroupingReturn, UseAutoFitRowsReturn } from "./components/table";
export { TabList, Tab, TabPanel } from "./components/tabs";
export type { TabListProps, TabProps, TabPanelProps } from "./components/tabs";
export { AppName } from "./components/app-name";
export type { AppNameProps } from "./components/app-name";
export { AppHeader } from "./components/app-header";
export type { AppHeaderProps } from "./components/app-header";
export { AppMenu } from "./components/app-menu";
export type { AppMenuItem, AppMenuGroup, AppMenuProps } from "./components/app-menu";
export { AppNameMenu } from "./components/app-name-menu";
export type { AppNameMenuProps } from "./components/app-name-menu";
export { CreateNew, OutboundAddButton, useOutboundAddButton, looksLikeEmail, looksLikePhoneNumber } from "./components/create-new";
export type {
  CreateNewItem,
  CreateNewProps,
  CreateNewContact,
  CreateNewCategory,
  CreateNewChannel,
  CreateNewSelection,
  CreateNewOutboundContact,
  CreateNewOutboundGroup,
  CreateNewChannelOption,
  CreateNewOutboundConfig,
  OutboundAddButtonProps,
  UseOutboundAddButtonResult,
} from "./components/create-new";
export { InteractionNavItem } from "./components/interaction-nav-item";
export type { InteractionNavItemProps, InteractionChannel, ChannelType } from "./components/interaction-nav-item";
export {
  AssignmentsSectionCaption,
  AssignmentsSortButton,
  AssignmentsExpandCollapseAllButton,
  ASSIGNMENT_SORT_OPTIONS,
} from "./components/assignments-section-caption";
export type { AssignmentSortValue } from "./components/assignments-section-caption";
export {
  InteractionComposer,
  fillQuickReplyTemplate,
  QUICK_REPLY_TRIGGER_CHAR,
} from "./components/interaction-composer";
export type {
  InteractionComposerProps,
  InteractionComposerQuickReplyItem,
  InteractionComposerQuickReplyField,
} from "./components/interaction-composer";
export { SessionDetailsCard, SessionDetailsSection } from "./components/session-details";
export type {
  SessionDetailsCardProps,
  SessionDetailsSectionProps,
  SessionDetailsInfo,
  SessionDetailsFingerprint,
} from "./components/session-details";
export { ChatMessage } from "./components/chat-message";
export type { ChatMessageProps, ChatMessageTag } from "./components/chat-message";
export {
  ChannelRow,
  ChatChannelRow,
  EmailChannelRow,
  SmsChannelRow,
  WhatsAppChannelRow,
  VoiceChannelRow,
  CHANNEL_TYPE_META,
  CHANNEL_TYPE_TAG_VARIANT,
  WhatsAppIcon,
  ChannelTab,
  ChannelToggle,
  ChannelToggleGroup,
  PlainToggleTab,
  useOutcomePopoverState,
  buildOutcomePopoverSlots,
  ConsultTransferIcon,
} from "./components/channel-row";
export type { ChannelRowInstanceProps, ChannelTabProps, ChannelToggleProps, ChannelToggleGroupProps, PlainToggleTabProps, ChannelOutcomeConfig } from "./components/channel-row";
export { ActionIconButton, ActionAvatarButton } from "./components/actions";
export type { ActionIconButtonProps, ActionAvatarButtonProps } from "./components/actions";
export { ShellIconButton, ShellAvatarButton } from "./components/shell-button";
export { SearchInput } from "./components/search-input";
export type { SearchInputProps } from "./components/search-input";
export { Input } from "./components/input";
export type { InputProps } from "./components/input";
export { Textarea } from "./components/textarea";
export type { TextareaProps } from "./components/textarea";
export { RadioGroup, RadioGroupItem } from "./components/radio";
export type { RadioGroupProps, RadioGroupItemProps } from "./components/radio";
export { RadioButtonGroup } from "./components/radio-button-group";
export type { RadioButtonGroupProps, RadioButtonGroupOption } from "./components/radio-button-group";
export { LeftNav, NavRail } from "./components/left-nav";
export type { NavItem, NavChild, LeftNavProps } from "./components/left-nav";
export { CXoneLogo } from "./components/cxone-logo";
export type { CXoneLogoProps } from "./components/cxone-logo";
export { PageHeader } from "./components/page-header";
export type { PageHeaderBreadcrumb, PageHeaderProps } from "./components/page-header";
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./components/breadcrumb";
export type {
  BreadcrumbProps,
  BreadcrumbListProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
  BreadcrumbEllipsisProps,
} from "./components/breadcrumb";
export { SidePanel } from "./components/side-panel";
export type { SidePanelProps } from "./components/side-panel";
export { Container } from "./components/container";
export type { ContainerProps } from "./components/container";
export { PanelContent } from "./components/panel-content";
export type { PanelContentProps } from "./components/panel-content";
export { AdminShell } from "./components/admin-shell";
export type { AdminShellProps } from "./components/admin-shell";
export { InteriorPanel } from "./components/interior-panel";
export type { InteriorPanelProps } from "./components/interior-panel";
export { PanelHeader } from "./components/panel-header";
export type { PanelHeaderProps } from "./components/panel-header";
export { PanelFooter } from "./components/panel-footer";
export type { PanelFooterProps } from "./components/panel-footer";
export { PanelPinButton } from "./components/panel-pin-button";
export type { PanelPinButtonProps } from "./components/panel-pin-button";
export { CustomerInformationPanel } from "./components/customer-information-panel";
export type { CustomerInformationPanelProps, CustomerInformationPerson } from "./components/customer-information-panel";
export { ContentArea } from "./components/content-area";
export type { ContentAreaProps } from "./components/content-area";
export { Select } from "./components/select";
export type { SelectOption } from "./components/select";
export { DispositionSelect } from "./components/disposition-select";
export type { DispositionOption, DispositionSelectProps } from "./components/disposition-select";
export { Menu } from "./components/menu";
export type { MenuItemDef, MenuEntry, MenuProps, MenuSectionLabel } from "./components/menu";
export { TreeMenu, CollapsiblePanel } from "./components/tree-menu";
export type { TreeMenuItem, TreeMenuChild, TreeMenuProps } from "./components/tree-menu";
export { CXoneSmiley } from "./components/cxone-smiley";
export type { CXoneSmileyProps } from "./components/cxone-smiley";
export { ProfileMenu, defaultProfileMenuGroups } from "./components/profile-menu";
export type { ProfileMenuItem, ProfileMenuGroup, ProfileMenuProps } from "./components/profile-menu";

export { Badge } from "./components/badge";
export type { BadgeProps, BadgeShape, BadgeColor, BadgePillVariant, BadgeCircleVariant, BadgeSize } from "./components/badge";

export { FilterChip, filterChipVariants, filterChipRemoveButtonVariants } from "./components/filter-chip";
export type { FilterChipProps, FilterChipOption, FilterChipVariant } from "./components/filter-chip";

export { FavoriteButton } from "./components/favorite-button";
export type { FavoriteButtonProps } from "./components/favorite-button";

export { KebabMenuButton } from "./components/kebab-menu-button";
export type { KebabMenuButtonProps } from "./components/kebab-menu-button";

export { Tooltip } from "./components/tooltip";
export { InlineNotification } from "./components/inline-notification";
export type { InlineNotificationProps } from "./components/inline-notification";
export { Toast, ToastContainer, useToast } from "./components/toast";
export type { TooltipProps, TooltipPlacement } from "./components/tooltip";
export type { ToastProps, ToastVariant, ToastItem } from "./components/toast";
export { AgentLegDisconnectedToast } from "./components/agent-leg-disconnected-toast";
export type { AgentLegDisconnectedToastProps } from "./components/agent-leg-disconnected-toast";

/* ── Spinner ── */
export { Spinner, spinnerBarVariants, spinnerCircleVariants } from "./components/spinner";
export type { SpinnerProps, SpinnerVariant, SpinnerSize, SpinnerColor } from "./components/spinner";

/* ── Popover ── */
export { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "./components/popover";
export type { PopoverProps, PopoverPlacement } from "./components/popover";

/* ── Label ── */
export { Label } from "./components/label";
export type { LabelProps } from "./components/label";

/* ── Separator ── */
export { Separator } from "./components/separator";
export type { SeparatorProps, SeparatorOrientation } from "./components/separator";

/* ── Chart ── */
export { Chart } from "./components/chart";
export type { ChartProps, EChartsOption } from "./components/chart";
export { DonutChart } from "./components/donut-chart";
export type { DonutChartProps, DonutChartDatum } from "./components/donut-chart";
export { Sparkline } from "./components/sparkline";
export type { SparklineProps } from "./components/sparkline";
export { BarChart } from "./components/bar-chart";
export type { BarChartProps, BarChartSeries } from "./components/bar-chart";

/* ── Dashboard Card ── */
export { DashboardCard, Metric } from "./components/dashboard-card";
export type { DashboardCardProps, DashboardCardMetric, DashboardCardMetricVariant, MetricProps } from "./components/dashboard-card";
export { EmptyState } from "./components/empty-state";
export type { EmptyStateProps } from "./components/empty-state";

/* ── Dashboard Queue ── */
export { DashboardQueue } from "./components/dashboard-queue";
export type { DashboardQueueProps, DashboardQueueItem, DashboardQueueVariant } from "./components/dashboard-queue";

/* ── Dashboard Template (the generic container/width/breakpoint shell —
   NOT AgentDashboard, which is one specific persona's fully-baked content;
   see dashboard-template.tsx's own doc comment) ── */
export { DashboardTemplate } from "./components/dashboard-template";
export type { DashboardTemplateProps } from "./components/dashboard-template";

/* ── Date Range Filter Chip (a single-select, radio-popover date-range
   filter styled as a FilterChip trigger — extracted out of AgentDashboard,
   which used to define this locally; see date-range-filter-chip.tsx's own
   doc comment) ── */
export { DateRangeFilterChip, DATE_RANGE_FILTER_OPTIONS } from "./components/date-range-filter-chip";
export type { DateRangeFilterChipProps, DateRangeFilterValue, DateRangeFilterOption } from "./components/date-range-filter-chip";

/* ── Agent Dashboard (the Agent Next Gen "Home" tab's specific content, built on DashboardTemplate) ── */
export {
  AgentDashboard,
  AgentDashboardQueueDrilldown,
  AGENT_DASHBOARD_QUEUE_ITEMS,
  AGENT_DASHBOARD_QUEUE_SUB_ITEMS,
} from "./components/agent-dashboard";
export type {
  AgentDashboardProps,
  AgentDashboardDateRange,
  AgentDashboardContactHistoryEntry,
  AgentDashboardQueueSubItem,
  ContactHistoryCardProps,
} from "./components/agent-dashboard";

/* ── Form Template (the "Forms" record-detail template) ── */
export { FormTemplate } from "./components/form-template";
export type { FormTemplateProps } from "./components/form-template";

/* ── Login Card ── */
export { LoginCard } from "./components/login-card";
export type { LoginCardProps, LoginCardPhoneSetup } from "./components/login-card";

/* ── Agent Welcome Message ── */
export { AgentWelcomeMessage } from "./components/agent-welcome-message";
export type { AgentWelcomeMessageProps } from "./components/agent-welcome-message";

/* ── Icon ── */
export { Icon, iconVariants, iconContainerVariants } from "./components/icon";
export type { IconProps, IconSize, IconColor } from "./components/icon";

/* ── Icons ── */
export { AiIcon } from "./components/icons/ai-icon";
export { AiSparkleIcon } from "./components/icons/ai-sparkle-icon";
export { DashboardIcon } from "./components/icons/dashboard-icon";
export { WarningIcon } from "./components/icons/warning-icon";
export { ErrorIcon } from "./components/icons/error-icon";
export { InfoIcon } from "./components/icons/info-icon";
export { SuccessIcon } from "./components/icons/success-icon";
export { WarningIconSolid } from "./components/icons/warning-icon-solid";
export { ErrorIconSolid } from "./components/icons/error-icon-solid";
export { InfoIconSolid } from "./components/icons/info-icon-solid";
export { SuccessIconSolid } from "./components/icons/success-icon-solid";
export { ColumnsIcon } from "./components/icons/columns-icon";

export { ProgressBar } from "./components/progress-bar";
export type { ProgressBarProps } from "./components/progress-bar";
export { Overlay, OverlayBackdrop } from "./components/overlay";
export { Modal } from "./components/modal";
export type { ModalProps } from "./components/modal";
export { TimePicker, TimeRangePicker } from "./components/time-picker";
export { ActionBar } from "./components/action-bar";
export { TransferBox } from "./components/transfer-box";
export type { TransferBoxOption, TransferBoxProps } from "./components/transfer-box";
export { Autocomplete } from "./components/autocomplete";
export type { AutocompleteOption, AutocompleteProps } from "./components/autocomplete";
export { PhoneInput, PHONE_COUNTRIES, isPhoneNumberComplete } from "./components/phone-input";
export type { PhoneInputProps } from "./components/phone-input";
export { EmailInput } from "./components/email-input";
export { Slider, SliderRange } from "./components/slider";
export { ContainerHeader } from "./components/container-header";
export type { IconBackground, IconShape } from "./components/icon";
export { AIInput } from "./components/ai-input";
export { AIProcess } from "./components/ai-process";
export { AiPanel, AiIndicatorSmall, AiIndicatorLarge, useAiPanelContent } from "./components/ai-panel";
export type { AiPanelProps, AiPanelSuggestion, AiPanelContentProps } from "./components/ai-panel";
export type { AIProcessStep, AIProcessStepStatus } from "./components/ai-process";
export { ContactOverview } from "./components/contact-overview";
export type { ContactOverviewInfo, ContactOverviewProps } from "./components/contact-overview";
export { ConversationMessage, ConversationDateStamp } from "./components/conversation-message";
export { Draggable } from "./components/draggable";
export type { DraggableProps, DraggableVariant, EmbeddablePanelContent } from "./components/draggable";
export { DraggablePanel } from "./components/draggable-panel";
export type { DraggablePanelProps } from "./components/draggable-panel";
export { ListItem } from "./components/list-item";
export type { ListItemProps } from "./components/list-item";
export { AgentNotifications, useAgentNotificationsContent } from "./components/agent-notifications";
export type { AgentNotification, NotificationType, AgentNotificationsProps, AgentNotificationsContentProps } from "./components/agent-notifications";
export { AgentSearch, useAgentSearchContent } from "./components/agent-search";
export type { AgentSearchProps, AgentSearchContentProps } from "./components/agent-search";
export { AgentChat } from "./components/agent-chat";
export type { AgentChatProps } from "./components/agent-chat";
export { ScreenPop, useScreenPopContent, SCREEN_POP_APPS } from "./components/screen-pop";
export type { ScreenPopProps, ScreenPopContentProps } from "./components/screen-pop";
export { SchedulePanel, useScheduleContent } from "./components/schedule-panel";
export type { SchedulePanelProps, ScheduleContentProps, ScheduleView } from "./components/schedule-panel";
export { AgentProfile } from "./components/agent-profile";
export type { AgentStatus, AgentProfileProps } from "./components/agent-profile";
export { NotificationsBell } from "./components/notifications-bell";
export type { NotificationsBellProps } from "./components/notifications-bell";
export { ConnectedAppsPanel } from "./components/connected-apps";
export type { ConnectedApp, AppConnectionStatus, ConnectedAppsPanelProps } from "./components/connected-apps";
export type { ConversationVariant, ConversationMessageProps, ConversationAlertProps } from "./components/conversation-message";
export { PasswordInput, ChangePassword, DEFAULT_REQUIREMENTS } from "./components/password-input";
export type { PasswordInputProps, ChangePasswordProps, PasswordRequirement } from "./components/password-input";
export type { ContainerHeaderProps } from "./components/container-header";
export type { PhoneValue, PhoneCountry } from "./components/phone-input";

/* ── Utilities ── */
export { cn } from "./lib/utils";
