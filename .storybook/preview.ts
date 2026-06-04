import type { Preview } from "@storybook/react";
import "../src/storybook.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Foundations", ["Colors", "Typography", "Spacing", "Border Radius", "Shadows"], "Atoms", "UI"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "lyra-base",
      values: [
        { name: "lyra-base", value: "#ffffff" },
        { name: "lyra-shell", value: "#f3f5f6" },
        { name: "dark", value: "#1a2733" },
      ],
    },
  },
};

export default preview;
