import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { FilterChip } from "../filter-chip";
import { Button } from "../button";
import { Select } from "../select";
import { Plus } from "lucide-react";

const addFilterOptions = Array.from({ length: 50 }, (_, i) => ({
  value: `filter-${i + 1}`,
  label: `Filter ${i + 1}`,
}));

const meta: Meta<typeof FilterChip> = {
  title: "Atoms/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

const sampleOptions = Array.from({ length: 50 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Option ${i + 1}`,
}));

/* ── Empty (default) ── */

function EmptyDemo() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <FilterChip
      label="Filter"
      options={sampleOptions}
      selectedValues={selected}
      onSelectionChange={setSelected}
    />
  );
}

export const Default: Story = {
  name: "Empty",
  render: () => <EmptyDemo />,
};

/* ── Active (with values) ── */

function ActiveDemo() {
  const [selected, setSelected] = useState<string[]>([
    "back-office",
    "custom",
    "bpo",
    "collections",
  ]);
  return (
    <FilterChip
      label="Filter"
      options={sampleOptions}
      selectedValues={selected}
      onSelectionChange={setSelected}
    />
  );
}

export const Active: Story = {
  name: "Active (with values)",
  render: () => <ActiveDemo />,
};

/* ── Error ── */

function ErrorDemo() {
  const [selected, setSelected] = useState<string[]>([
    "back-office",
    "custom",
    "bpo",
    "collections",
  ]);
  return (
    <FilterChip
      label="Filter"
      options={sampleOptions}
      selectedValues={selected}
      onSelectionChange={setSelected}
      error
    />
  );
}

export const Error: Story = {
  name: "Error",
  render: () => <ErrorDemo />,
};

/* ── Disabled ── */

export const Disabled: Story = {
  name: "Disabled (empty)",
  render: () => (
    <FilterChip
      label="Filter"
      options={sampleOptions}
      selectedValues={[]}
      disabled
    />
  ),
};

export const DisabledWithValues: Story = {
  name: "Disabled (with values)",
  render: () => (
    <FilterChip
      label="Filter"
      options={sampleOptions}
      selectedValues={["back-office", "custom", "bpo", "collections"]}
      disabled
    />
  ),
};

/* ── Removable ── */

interface ActiveFilter {
  id: string;
  label: string;
  selectedValues: string[];
}

function RemovableDemo() {
  const [filters, setFilters] = useState<ActiveFilter[]>([
    { id: "filter-1", label: "Filter 1", selectedValues: ["option-2", "option-3", "option-4"] },
    { id: "filter-2", label: "Filter 2", selectedValues: ["option-1"] },
  ]);
  const [addedFilters, setAddedFilters] = useState<string[]>(["filter-1", "filter-2"]);
  const [visibleCount, setVisibleCount] = useState<number>(Infinity);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const overflowRef = useRef<HTMLDivElement>(null);

  const removeFilter = (id: string) => {
    setFilters((f) => f.filter((item) => item.id !== id));
    setAddedFilters((v) => v.filter((v2) => v2 !== id));
  };

  const updateFilterValues = (id: string, values: string[]) => {
    setFilters((f) => f.map((item) => item.id === id ? { ...item, selectedValues: values } : item));
  };

  const handleAddFilters = (values: string[]) => {
    setAddedFilters(values);
    const existing = new Set(filters.map((f) => f.id));
    const toAdd = values.filter((v) => !existing.has(v));
    if (toAdd.length > 0) {
      setFilters((f) => [
        ...f,
        ...toAdd.map((v) => ({
          id: v,
          label: addFilterOptions.find((o) => o.value === v)?.label ?? v,
          selectedValues: [],
        })),
      ]);
    }
    const keep = new Set(values);
    setFilters((f) => f.filter((item) => keep.has(item.id)));
  };

  const sortedFilters = filters.sort((a, b) => addedFilters.indexOf(a.id) - addedFilters.indexOf(b.id));

  /* Measure which chips fit */
  const measureOverflow = useCallback(() => {
    const container = containerRef.current;
    const chips = chipsRef.current;
    if (!container || !chips) return;

    const containerWidth = container.offsetWidth;
    // Reserve space for +N button, + Filter button, and Clear button (~220px)
    const reserved = 220;
    const maxWidth = containerWidth - reserved;

    const children = Array.from(chips.children) as HTMLElement[];
    let usedWidth = 0;
    let count = 0;

    for (const child of children) {
      usedWidth += child.offsetWidth + 12; // 12px = gap-3
      if (usedWidth > maxWidth && count > 0) break;
      count++;
    }

    setVisibleCount(count);
  }, []);

  useEffect(() => {
    measureOverflow();
    const ro = new ResizeObserver(measureOverflow);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measureOverflow, filters.length]);

  // Re-measure when filters change
  useEffect(() => {
    measureOverflow();
  }, [filters, measureOverflow]);

  /* Close overflow on outside click */
  useEffect(() => {
    if (!overflowOpen) return;
    function handleClick(e: MouseEvent) {
      if (overflowRef.current && !overflowRef.current.contains(e.target as Node)) {
        setOverflowOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [overflowOpen]);

  const visibleFilters = sortedFilters.slice(0, visibleCount);
  const overflowFilters = sortedFilters.slice(visibleCount);

  return (
    <div ref={containerRef} className="flex items-center gap-3 w-full">
      {/* Hidden measurement container */}
      <div ref={chipsRef} className="absolute invisible flex items-center gap-3" aria-hidden="true">
        {sortedFilters.map((f) => (
          <FilterChip
            key={`measure-${f.id}`}
            label={f.label}
            options={sampleOptions}
            selectedValues={f.selectedValues}
            onRemove={() => {}}
          />
        ))}
      </div>

      {/* Visible chips */}
      {visibleFilters.map((f) => (
        <FilterChip
          key={f.id}
          label={f.label}
          options={sampleOptions}
          selectedValues={f.selectedValues}
          onSelectionChange={(vals) => updateFilterValues(f.id, vals)}
          onRemove={() => removeFilter(f.id)}
        />
      ))}

      {/* +N overflow button */}
      {overflowFilters.length > 0 && (
        <div ref={overflowRef} className="relative inline-flex">
          <button
            type="button"
            onClick={() => setOverflowOpen((v) => !v)}
            className="inline-flex items-center justify-center h-8 px-3 rounded-lyra-md border border-lyra-border-default bg-lyra-bg-control-subtle text-lyra-fg-action lyra-body-md-emphasis hover:bg-lyra-state-hover active:bg-lyra-state-pressed transition-colors"
          >
            +{overflowFilters.length}
          </button>
          {overflowOpen && (
            <div className="absolute left-0 top-full z-50 mt-1 min-w-[280px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg">
              <div className="max-h-[320px] overflow-y-auto p-3 flex flex-col gap-2">
                {overflowFilters.map((f) => (
                  <div key={f.id} className="relative">
                    <FilterChip
                      label={f.label}
                      options={sampleOptions}
                      selectedValues={f.selectedValues}
                      onSelectionChange={(vals) => updateFilterValues(f.id, vals)}
                      onRemove={() => removeFilter(f.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <Select
        options={addFilterOptions}
        multiple
        searchable
        showSelectAll
        dropdownAlign="left"
        values={addedFilters}
        onValuesChange={handleAddFilters}
        trigger={
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lyra-sm lyra-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 border border-lyra-border-default bg-lyra-bg-control text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed h-8 px-3"
          >
            <Plus className="h-4 w-4" />Filter
          </button>
        }
        className="inline-flex relative"
      />
      <Button variant="ghost" size="sm" onClick={() => { setFilters([]); setAddedFilters([]); }}>Clear</Button>
    </div>
  );
}

export const Removable: Story = {
  name: "Removable",
  render: () => <RemovableDemo />,
};

/* ── All States ── */

function AllStatesDemo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Row 1: Empty chips in sizes */}
      <div className="flex items-center gap-3">
        <FilterChip label="Filter" options={sampleOptions} selectedValues={[]} />
        <FilterChip label="Filter" options={sampleOptions} selectedValues={[]} />
        <FilterChip label="Filter" options={sampleOptions} selectedValues={[]} />
        <FilterChip label="Filter" options={sampleOptions} selectedValues={[]} />
        <Select
          options={addFilterOptions}
          multiple
          searchable
          showSelectAll
          dropdownAlign="left"
          trigger={
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lyra-sm lyra-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2 border border-lyra-border-default bg-lyra-bg-control text-lyra-fg-action hover:bg-lyra-state-hover active:bg-lyra-state-pressed h-8 px-3"
            >
              <Plus className="h-4 w-4" />Filter
            </button>
          }
          className="inline-flex relative"
        />
        <Button variant="ghost" size="sm">Clear</Button>
      </div>

      {/* Row 2: Active chips */}
      <div className="flex items-center gap-3">
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
        />
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
        />
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
        />
      </div>

      {/* Row 3: Error chips */}
      <div className="flex items-center gap-3">
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
          error
        />
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
          error
        />
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
          error
        />
      </div>

      {/* Row 4: Disabled */}
      <div className="flex items-center gap-3">
        <FilterChip
          label="Filter"
          options={sampleOptions}
          selectedValues={["back-office", "custom", "bpo", "collections"]}
          disabled
        />
      </div>
    </div>
  );
}

export const AllStates: Story = {
  name: "All States",
  render: () => <AllStatesDemo />,
};
