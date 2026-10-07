import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { Autocomplete } from "../autocomplete";
import { COUNTRIES } from "./Autocomplete.shared";

/* One page per Autocomplete variant, shown under "Autocomplete/Variants" in
   the sidebar. Static references for design review; the interactive
   playground is Autocomplete → Default. "!autodocs" keeps this folder from
   getting a second Docs page. Previously one "States" story covering every
   row below — split per variant so each has its own clear name. */
const meta: Meta<typeof Autocomplete> = {
  title: "Custom Primitives/Autocomplete/Variants",
  component: Autocomplete,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const States: Story = {
  name: "States (Default, Required)",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Autocomplete label="Default" options={COUNTRIES} placeholder="Search…" />
      <Autocomplete label="Required" options={COUNTRIES} required placeholder="Search…" />
    </div>
  ),
};

export const WithValue: Story = {
  name: "With Value",
  render: () => (
    <div className="w-72">
      <Autocomplete label="With value" options={COUNTRIES} value="gb" placeholder="Search…" />
    </div>
  ),
};

export const DisabledAndReadOnly: Story = {
  name: "Disabled & Read Only",
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Autocomplete label="Disabled" options={COUNTRIES} disabled placeholder="Search…" />
      <Autocomplete label="Read Only" options={COUNTRIES} readonly value="au" placeholder="Search…" />
    </div>
  ),
};

/* ── Loading — `loading`: while the dropdown is open it shows a spinner and
   `loadingMessage` in place of the options, and screen readers hear it. ── */

export const Loading: Story = {
  name: "Loading",
  render: () => (
    <div className="w-72">
      <Autocomplete label="Loading" options={COUNTRIES} loading placeholder="Click to open…" />
    </div>
  ),
};

/* ── Async Search — a mock backend: `onInputChange` starts a (fake) 700 ms
   search, `loading` shows while it runs, and the results come back as
   `options`. `filterOptions={false}` because the "server" already filtered. ── */

function AsyncSearchDemo() {
  const [value, setValue] = useState<string | undefined>();
  const [results, setResults] = useState(COUNTRIES.slice(0, 0));
  const [loading, setLoading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const search = (text: string) => {
    if (timer.current) clearTimeout(timer.current);
    const q = text.trim().toLowerCase();
    if (!q) {
      setLoading(false);
      setResults([]);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(() => {
      setResults(COUNTRIES.filter((c) => c.label.toLowerCase().includes(q)));
      setLoading(false);
    }, 700);
  };

  return (
    <div className="w-72">
      <Autocomplete
        label="Country (type to search)"
        options={results}
        value={value}
        onChange={setValue}
        onInputChange={search}
        loading={loading}
        filterOptions={false}
        showAllOnEmpty={false}
        placeholder="Try “an”…"
      />
    </div>
  );
}

export const AsyncSearch: Story = {
  name: "Async Search",
  render: () => <AsyncSearchDemo />,
};
