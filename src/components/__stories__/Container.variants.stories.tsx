import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../container";
import {
  BASE_SURFACES,
  BodyText,
  COLOR_GROUPS,
  HeaderTabs,
  LegacyExamples,
  TITLE_SIZES,
  TITLE_SIZE_CLASSES,
  footerButtons,
  headerActions,
  headerIcon,
  headerTag,
  headerTitleBadge,
} from "./Container.shared";

/* One page per Container variant or scenario, shown under
   "Container/Variants" in the sidebar. Static references for design review;
   the interactive playground is Container → Default. "!autodocs" keeps this
   folder from getting a second Docs page. */
const meta: Meta<typeof Container> = {
  title: "Custom Primitives/Container/Variants",
  component: Container,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const States: Story = {
  name: "States (Header options)",
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <Container className="p-5">
        <p className="lyra-body-sm text-lyra-fg-secondary">No header</p>
      </Container>
      <Container headerTitle="Title only" className="pb-5">
        <BodyText>Header with a title.</BodyText>
      </Container>
      <Container headerTitle="Title and subtitle" headerSubhead="Supporting description" className="pb-5">
        <BodyText>Header with a subtitle.</BodyText>
      </Container>
      <Container headerTitle="Divider below header" headerBordered className="pb-5">
        <BodyText belowDivider>Header with a divider (headerBordered).</BodyText>
      </Container>
      <Container
        headerIcon={headerIcon}
        headerSubhead="Icon and subtitle, no title"
        className="pb-5"
      >
        <BodyText>Header renders without title text.</BodyText>
      </Container>
      <Container
        headerTitle="Title with icon"
        headerIcon={headerIcon}
        className="pb-5"
      >
        <BodyText>Header with icon.</BodyText>
      </Container>
    </div>
  ),
};

export const HeaderSlots: Story = {
  name: "Header Slots (Badge, Alert Tag, Actions, Tabs)",
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <Container headerTitle="Title badge" headerTitleBadge={headerTitleBadge} className="pb-5">
        <BodyText>Badge right after the title.</BodyText>
      </Container>
      <Container headerTitle="Alert tag above" headerTopSlot={headerTag} className="pb-5">
        <BodyText>Status tag above the title.</BodyText>
      </Container>
      <Container headerTitle="Alert tag inline" headerTitleBadge={headerTag} className="pb-5">
        <BodyText>Status tag inline after the title.</BodyText>
      </Container>
      <Container headerTitle="Actions" headerActions={headerActions} className="pb-5">
        <BodyText>Action button on the right.</BodyText>
      </Container>
      <Container
        headerTitle="Tabs"
        headerSubhead="Tab row below the title"
        headerTabs={<HeaderTabs />}
        className="pb-5"
      >
        <BodyText belowDivider>Tabs supply their own bottom border.</BodyText>
      </Container>
    </div>
  ),
};

export const Footer: Story = {
  name: "Footer (Left, Right, Full Width, Divider)",
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-3xl">
      <Container headerTitle="Left" footerActions={footerButtons} footerAlign="left">
        <BodyText>Buttons grouped at the start.</BodyText>
      </Container>
      <Container headerTitle="Right (default)" footerActions={footerButtons}>
        <BodyText>Buttons grouped at the end.</BodyText>
      </Container>
      <Container headerTitle="Full width" footerActions={footerButtons} footerAlign="full">
        <BodyText>Buttons stretch equally.</BodyText>
      </Container>
      <Container headerTitle="Divider" footerActions={footerButtons} footerBordered>
        <BodyText>Border above the footer.</BodyText>
      </Container>
    </div>
  ),
};

export const TitleSizes: Story = {
  name: "Title Sizes",
  render: () => (
    <div className="flex flex-col gap-3 max-w-xl">
      {TITLE_SIZES.map((size) => (
        <Container
          key={size}
          headerTitle={`Title size ${size}`}
          headerTitleClassName={TITLE_SIZE_CLASSES[size]}
          className="pb-3"
        />
      ))}
    </div>
  ),
};

export const BaseSurfaces: Story = {
  name: "Base Surfaces (Default, Popover, Modal)",
  render: () => (
    <div className="grid grid-cols-3 gap-3 w-full max-w-3xl">
      {BASE_SURFACES.map((v) => (
        <Container key={v} variant={v} className="px-3 py-3">
          <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
        </Container>
      ))}
    </div>
  ),
};

export const AllColorVariants: Story = {
  name: "All Colour Variants",
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-3xl">
      {COLOR_GROUPS.map(({ label, variants }) => (
        <div key={label}>
          <p className="lyra-label text-lyra-fg-secondary mb-2">{label}</p>
          <div className="grid grid-cols-4 gap-3">
            {variants.map((v) => (
              <Container key={v} variant={v} className="px-3 py-3">
                <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
              </Container>
            ))}
          </div>
        </div>
      ))}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-2">Base surfaces</p>
        <div className="grid grid-cols-3 gap-3">
          {BASE_SURFACES.map((v) => (
            <Container key={v} variant={v} className="px-3 py-3">
              <p className="lyra-body-sm text-lyra-fg-default">{v}</p>
            </Container>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const LegacyAliases: Story = {
  name: "Legacy Aliases (Info, Success, Warning, Critical, Neutral)",
  render: () => <LegacyExamples />,
};

export const Nested: Story = {
  name: "Nested Layout",
  render: () => (
    <div className="flex flex-col gap-4">
      <Container headerTitle="Header Section" className="pb-5">
        <BodyText>Top-level container.</BodyText>
      </Container>
      <div className="flex gap-4">
        <Container headerTitle="Left Panel" className="flex-1 pb-5">
          <BodyText>Side content area.</BodyText>
        </Container>
        <Container headerTitle="Main Content" className="flex-[2] pb-5">
          <BodyText>Primary content area.</BodyText>
        </Container>
      </div>
    </div>
  ),
};
