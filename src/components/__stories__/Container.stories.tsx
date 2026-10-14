import type { Meta, StoryObj } from "@storybook/react";
import { cn } from "../../lib/utils";
import { Container } from "../container";
import {
  ALL_VARIANTS,
  BodyText,
  HeaderTabs,
  TITLE_SIZES,
  TITLE_SIZE_CLASSES,
  FOOTER_ALIGNS,
  footerButtons,
  type FooterAlignChoice,
  headerActions,
  DRAG_HEADER_CLASS,
  headerIcon,
  withDragGrip,
  headerTag,
  type ContainerVariantName,
  type TitleSize,
} from "./Container.shared";

const meta: Meta<typeof Container> = {
  title: "Custom Primitives/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Every color/border variant, the header text and the header divider have
   their own pages under "Container/Variants" — see
   Container.variants.stories.tsx. Default drives them through the controls
   below; the Docs page still lists Container's real props. */

interface ContainerDemoProps {
  variant?: ContainerVariantName;
  showHeader?: boolean;
  titleSize?: TitleSize;
  showSubhead?: boolean;
  showTitle?: boolean;
  showDraggable?: boolean;
  showIcon?: boolean;
  tagPlacement?: "none" | "above" | "inline";
  showActions?: boolean;
  showTabs?: boolean;
  headerBordered?: boolean;
  footerAlign?: FooterAlignChoice;
  footerBordered?: boolean;
  footerScrollEffect?: "none" | "shadow" | "fade";
}

/* Container is stateless (no callbacks, no open/close), so the wrapper only
   maps the playground args onto Container's own `header*` props. */
function ContainerDemo({
  variant = "default",
  showHeader = true,
  titleSize = "md",
  showSubhead = false,
  showTitle = true,
  showDraggable = false,
  showIcon = false,
  tagPlacement = "none",
  showActions = false,
  showTabs = false,
  headerBordered = false,
  footerAlign = "none",
  footerBordered = false,
  footerScrollEffect = "none",
}: ContainerDemoProps) {
  // Tabs supply their own bottom border, so Container's divider is ignored
  // (and the body needs no extra gap under it) whenever tabs are on.
  const bordered = showHeader && headerBordered && !showTabs;
  const hasFooter = footerAlign !== "none";
  // With the scroll shadow on, the footer is pinned (sticky) inside a short
  // scrolling box so there is content to scroll behind it.
  const scrolls = hasFooter && footerScrollEffect !== "none";
  const container = (
    <Container
      variant={variant}
      headerTitle={showHeader && showTitle ? "Container" : undefined}
      headerClassName={showHeader && showDraggable ? DRAG_HEADER_CLASS : undefined}
      headerTitleClassName={TITLE_SIZE_CLASSES[titleSize]}
      headerSubhead={showHeader && showSubhead ? "Supporting description" : undefined}
      headerIcon={showHeader ? withDragGrip(showIcon ? headerIcon : undefined, showDraggable) : undefined}
      headerTitleBadge={showHeader && tagPlacement === "inline" ? headerTag : undefined}
      headerTopSlot={showHeader && tagPlacement === "above" ? headerTag : undefined}
      headerActions={showHeader && showActions ? headerActions : undefined}
      headerTabs={showHeader && showTabs ? <HeaderTabs /> : undefined}
      headerBordered={bordered}
      footerActions={hasFooter ? footerButtons : undefined}
      footerAlign={hasFooter ? footerAlign : undefined}
      footerBordered={hasFooter && footerBordered}
      footerScrollShadow={scrolls && footerScrollEffect === "shadow"}
      footerScrollFade={scrolls && footerScrollEffect === "fade"}
      footerClassName={scrolls ? "sticky bottom-0 bg-inherit" : undefined}
      className={cn(!scrolls && "max-w-xl", !showHeader && "pt-5", !hasFooter && "pb-5")}
    >
      {/* With a footer, the body carries its own bottom gap so the footer sits below it. */}
      <div className={hasFooter ? "pb-5" : undefined}>
        <BodyText belowDivider={bordered || (showHeader && showTabs)}>
          Use the Controls panel below to switch variant, header and footer options.
        </BodyText>
        {scrolls &&
          Array.from({ length: 6 }, (_, i) => (
            <BodyText key={i}>Sample content {i + 1}. Scroll to see the footer shadow.</BodyText>
          ))}
      </div>
    </Container>
  );
  return scrolls ? <div className="max-h-72 max-w-xl overflow-y-auto rounded-lyra-lg">{container}</div> : container;
}

type ContainerDemoStory = StoryObj<typeof ContainerDemo>;

const SHOW_WHEN_HEADER = { if: { arg: "showHeader", truthy: true } } as const;

export const Default: ContainerDemoStory = {
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches `include` against a control's display name when `name`
      // is set, so both the labels and the prop keys are listed.
      include: [
        "Header", "Title", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs",
        "Footer", "Title size", "Style", "Header divider", "Footer border", "Footer scroll effect",
        "showHeader", "showTitle", "showDraggable", "showSubhead", "showIcon", "tagPlacement",
        "showActions", "showTabs", "footerAlign", "titleSize", "variant", "headerBordered", "footerBordered", "footerScrollEffect",
      ],
      sort: "none",
    },
  },
  args: {
    variant: "default",
    showHeader: true,
    showTitle: true,
    showDraggable: false,
    titleSize: "md",
    showSubhead: false,
    showIcon: false,
    tagPlacement: "none",
    showActions: false,
    showTabs: false,
    headerBordered: false,
    footerAlign: "none",
    footerBordered: false,
    footerScrollEffect: "none",
  },
  argTypes: {
    showHeader: {
      name: "Header",
      control: "boolean",
      description: "Show the header (title) at the top of the container.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    showDraggable: {
      name: "Draggable",
      control: "boolean",
      description: "Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (`headerSubhead`).",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show an icon to the left of the title (`headerIcon`).",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    tagPlacement: {
      name: "Alert tag",
      control: "radio",
      options: ["none", "above", "inline"],
      description: "Show a status tag above the title (`headerTopSlot`) or inline right after it (`headerTitleBadge`).",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "none" } },
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show an action button on the right of the header (`headerActions`).",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Show a tab row below the title (`headerTabs`). Tabs draw their own bottom border, so the header divider is ignored while on.",
      ...SHOW_WHEN_HEADER,
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    footerAlign: {
      name: "Footer",
      control: "radio",
      options: FOOTER_ALIGNS,
      description: "Show a footer with two buttons, aligned left, right, or stretched to full width (`footerActions`, `footerAlign`).",
      table: { category: "Content", defaultValue: { summary: "none" } },
    },
    titleSize: {
      name: "Title size",
      control: "select",
      options: TITLE_SIZES,
      description: "Heading size of the title (`headerTitleClassName`, lyra-heading-{size}).",
      ...SHOW_WHEN_HEADER,
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    variant: {
      name: "Style",
      control: "select",
      options: ALL_VARIANTS,
      description: "Color and border style, as {color}-{border}. Popover and modal are overlay surfaces.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
    headerBordered: {
      name: "Header divider",
      control: "boolean",
      description: "Show a dividing line below the header (`headerBordered`).",
      ...SHOW_WHEN_HEADER,
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Show a border along the top edge of the footer (`footerBordered`). Only visible when a footer is on.",
      if: { arg: "footerScrollEffect", neq: "fade" },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    footerScrollEffect: {
      name: "Footer scroll effect",
      control: "radio",
      options: ["none", "shadow", "fade"],
      labels: { none: "None", shadow: "Shadow", fade: "Fade" },
      description: "What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",
      table: { category: "Appearance", defaultValue: { summary: "none" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <ContainerDemo key={JSON.stringify(args)} {...args} />
  ),
};
