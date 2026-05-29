import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabList, Tab, TabPanel } from "../tabs";
import { LayoutGrid, Settings, FileText, Lock, MoreVertical } from "lucide-react";

const meta: Meta<typeof TabList> = {
  title: "Atoms/Tabs",
  component: TabList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TabList>;

/* ── Auto-width tabs ── */

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState("tab1");
    return (
      <div>
        <TabList>
          <Tab active={active === "tab1"} onClick={() => setActive("tab1")}>
            Tab Section
          </Tab>
          <Tab active={active === "tab2"} onClick={() => setActive("tab2")}>
            Tab Section
          </Tab>
          <Tab active={active === "tab3"} onClick={() => setActive("tab3")}>
            Tab Section
          </Tab>
        </TabList>
        <TabPanel active={active === "tab1"}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">
            Content for tab 1
          </div>
        </TabPanel>
        <TabPanel active={active === "tab2"}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">
            Content for tab 2
          </div>
        </TabPanel>
        <TabPanel active={active === "tab3"}>
          <div className="p-4 lyra-body-md text-lyra-fg-default">
            Content for tab 3
          </div>
        </TabPanel>
      </div>
    );
  },
};

/* ── Full-width tabs ── */

export const FullWidth: Story = {
  name: "Full Width",
  render: () => {
    const [active, setActive] = useState("tab1");
    return (
      <TabList fullWidth>
        <Tab active={active === "tab1"} onClick={() => setActive("tab1")}>
          Tab Section
        </Tab>
        <Tab active={active === "tab2"} onClick={() => setActive("tab2")}>
          Tab Section
        </Tab>
        <Tab active={active === "tab3"} onClick={() => setActive("tab3")}>
          Tab Section
        </Tab>
      </TabList>
    );
  },
};

/* ── With Icons ── */

export const WithIcons: Story = {
  name: "With Icons",
  render: () => {
    const [active, setActive] = useState("tab1");
    return (
      <TabList>
        <Tab
          active={active === "tab1"}
          onClick={() => setActive("tab1")}
          icon={<LayoutGrid className="h-4 w-4" strokeWidth={1.5} />}
        >
          Tab Section
        </Tab>
        <Tab
          active={active === "tab2"}
          onClick={() => setActive("tab2")}
          icon={<Settings className="h-4 w-4" strokeWidth={1.5} />}
        >
          Tab Section
        </Tab>
        <Tab
          active={active === "tab3"}
          onClick={() => setActive("tab3")}
          icon={<FileText className="h-4 w-4" strokeWidth={1.5} />}
        >
          Tab Section
        </Tab>
      </TabList>
    );
  },
};

/* ── With Icons Full Width ── */

export const WithIconsFullWidth: Story = {
  name: "With Icons / Full Width",
  render: () => {
    const [active, setActive] = useState("tab1");
    return (
      <TabList fullWidth>
        <Tab
          active={active === "tab1"}
          onClick={() => setActive("tab1")}
          icon={<LayoutGrid className="h-4 w-4" strokeWidth={1.5} />}
        >
          Tab Section
        </Tab>
        <Tab
          active={active === "tab2"}
          onClick={() => setActive("tab2")}
          icon={<Settings className="h-4 w-4" strokeWidth={1.5} />}
        >
          Tab Section
        </Tab>
        <Tab
          active={active === "tab3"}
          onClick={() => setActive("tab3")}
          icon={<FileText className="h-4 w-4" strokeWidth={1.5} />}
        >
          Tab Section
        </Tab>
      </TabList>
    );
  },
};

/* ── Tab States (Base section from Figma) ── */

export const States: Story = {
  name: "Tab States",
  render: () => (
    <div className="space-y-6">
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Default
        </span>
        <TabList aria-label="Default state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Hover (hover over to see)
        </span>
        <TabList aria-label="Hover state tabs">
          <Tab>Tab Section</Tab>
        </TabList>
      </div>
      <div>
        <span className="lyra-body-sm text-lyra-fg-secondary mb-2 block">
          Active
        </span>
        <TabList aria-label="Active state tabs">
          <Tab active>Tab Section</Tab>
        </TabList>
      </div>
    </div>
  ),
};

/* ── Removable Tabs ── */

function RemovableDemo() {
  const [tabs, setTabs] = useState([
    { id: "1", label: "1. Inbound Voice", locked: false },
    { id: "2", label: "2. Blended Voice", locked: true },
    { id: "3", label: "3. Outbound Digital", locked: false },
  ]);
  const [activeTab, setActiveTab] = useState("2");

  const removeTab = (id: string) => {
    setTabs((prev) => {
      const next = prev.filter((t) => t.id !== id);
      if (activeTab === id && next.length > 0) {
        setActiveTab(next[0].id);
      }
      return next;
    });
  };

  return (
    <TabList aria-label="Removable tabs">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
          icon={tab.locked ? <Lock className="h-3.5 w-3.5" strokeWidth={1.5} /> : undefined}
          onRemove={() => removeTab(tab.id)}
          removeLabel={`Remove ${tab.label}`}
        >
          {tab.label}
        </Tab>
      ))}
    </TabList>
  );
}

export const Removable: Story = {
  name: "Removable",
  render: () => <RemovableDemo />,
};

/* ── With Right Icon (Menu) ── */

export const WithRightIcon: Story = {
  name: "With Right Icon (Menu)",
  render: () => {
    const [active, setActive] = useState("1");
    const tabs = [
      { id: "1", label: "1. Inbound Voice" },
      { id: "2", label: "2. Blended Voice" },
      { id: "3", label: "3. Outbound Digital" },
    ];
    return (
      <TabList aria-label="Tabs with menu">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={active === tab.id}
            onClick={() => setActive(tab.id)}
            rightIcon={<MoreVertical className="h-3.5 w-3.5" strokeWidth={1.5} />}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
    );
  },
};
