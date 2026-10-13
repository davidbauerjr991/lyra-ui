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
  headerIcon,
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
  showIcon?: boolean;
  tagPlacement?: "none" | "above" | "inline";
  showActions?: boolean;
  showTabs?: boolean;
  headerBordered?: boolean;
  footerAlign?: FooterAlignChoice;
  footerBordered?: boolean;
}

/* Container is stateless (no callbacks, no open/close), so the wrapper only
   maps the playground args onto Container's own `header*` props. */
function ContainerDemo({
  variant = "default",
  showHeader = true,
  titleSize = "md",
  showSubhead = false,
  showIcon = false,
  tagPlacement = "none",
  showActions = false,
  showTabs = false,
  headerBordered = false,
  footerAlign = "none",
  footerBordered = false,
}: ContainerDemoProps) {
  // Tabs supply their own bottom border, so Container's divider is ignored
  // (and the body needs no extra gap under it) whenever tabs are on.
  const bordered = showHeader && headerBordered && !showTabs;
  const hasFooter = footerAlign !== "none";
  return (
    <Container
      variant={variant}
      headerTitle={showHeader ? "Container" : undefined}
      headerTitleClassName={TITLE_SIZE_CLASSES[titleSize]}
      headerSubhead={showHeader && showSubhead ? "Supporting description" : undefined}
      headerIcon={showHeader && showIcon ? headerIcon : undefined}
      headerTitleBadge={showHeader && tagPlacement === "inline" ? headerTag : undefined}
      headerTopSlot={showHeader && tagPlacement === "above" ? headerTag : undefined}
      headerActions={showHeader && showActions ? headerActions : undefined}
      headerTabs={showHeader && showTabs ? <HeaderTabs /> : undefined}
      headerBordered={bordered}
      footerActions={hasFooter ? footerButtons : undefined}
      footerAlign={hasFooter ? footerAlign : undefined}
      footerBordered={hasFooter && footerBordered}
      className={cn("max-w-xl", !showHeader && "pt-5", !hasFooter && "pb-5")}
    >
      {/* With a footer, the body carries its own bottom gap so the footer sits below it. */}
      <div className={hasFooter ? "pb-5" : undefined}>
        <BodyText belowDivider={bordered || (showHeader && showTabs)}>
          Use the Controls panel below to switch variant, header and footer options.
        </BodyText>
      </div>
    </Container>
  );
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
        "Header", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs",
        "Footer", "Title size", "Style", "Header divider", "Footer border",
        "showHeader", "showSubhead", "showIcon", "tagPlacement",
        "showActions", "showTabs", "footerAlign", "titleSize", "variant", "headerBordered", "footerBordered",
      ],
      sort: "none",
    },
  },
  args: {
    variant: "default",
    showHeader: true,
    titleSize: "md",
    showSubhead: false,
    showIcon: false,
    tagPlacement: "none",
    showActions: false,
    showTabs: false,
    headerBordered: false,
    footerAlign: "none",
    footerBordered: false,
  },
  argTypes: {
    showHeader: {
      name: "Header",
      control: "boolean",
      description: "Show the header (title) at the top of the container.",
      table: { category: "Content", defaultValue: { summary: "true" } },
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
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <ContainerDemo key={JSON.stringify(args)} {...args} />
  ),
};
