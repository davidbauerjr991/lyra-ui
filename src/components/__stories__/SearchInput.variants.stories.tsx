import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "../search-input";
import { SAMPLE_QUERY } from "./SearchInput.shared";

/* One page per SearchInput variant, shown under "SearchInput/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is SearchInput → Default. "!autodocs" keeps this folder from getting a
   second Docs page. */
const meta: Meta<typeof SearchInput> = {
  title: "Custom Primitives/SearchInput/Variants",
  component: SearchInput,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const States: Story = {
  name: "States",
  render: () => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    const [val3, setVal3] = useState("");
    const [val4, setVal4] = useState(SAMPLE_QUERY);

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 items-start max-w-[600px]">
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Default
            </span>
            <SearchInput
              placeholder="Search"
              value={val1}
              onValueChange={setVal1}
              aria-label="Search default"
            />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Hover (hover to see)
            </span>
            <SearchInput
              placeholder="Search"
              value={val2}
              onValueChange={setVal2}
              aria-label="Search hover"
            />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Focused (click to see)
            </span>
            <SearchInput
              placeholder="Search"
              value={val3}
              onValueChange={setVal3}
              aria-label="Search focused"
            />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              With value + clear
            </span>
            <SearchInput
              placeholder="Search"
              value={val4}
              onValueChange={setVal4}
              aria-label="Search with value"
            />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Disabled
            </span>
            <SearchInput placeholder="Search" value="" disabled aria-label="Search disabled" />
          </div>
          <div>
            <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
              Read only
            </span>
            <SearchInput placeholder="Search" value={SAMPLE_QUERY} readonly aria-label="Search read only" />
          </div>
        </div>
      </div>
    );
  },
};

export const WithSubmitButton: Story = {
  name: "With Submit Button",
  render: () => {
    const [value, setValue] = useState(SAMPLE_QUERY);
    return (
      <SearchInput
        placeholder="Search"
        value={value}
        onValueChange={setValue}
        onSubmit={() => {}}
        className="w-[260px]"
      />
    );
  },
};

export const FullWidth: Story = {
  name: "Full Width",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <SearchInput
        placeholder="Search"
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex flex-col gap-4 w-[260px]">
      <SearchInput placeholder="Small (32px)" size="sm" aria-label="Search small" />
      <SearchInput placeholder="Medium (36px, default)" size="md" aria-label="Search medium" />
    </div>
  ),
};
