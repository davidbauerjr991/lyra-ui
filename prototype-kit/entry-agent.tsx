/* Prototype-kit entry — Agent Next Gen With Page Header template.
   See entry-admin.tsx for how this works. */
import React from "react";
import { createRoot } from "react-dom/client";
import { composeStories } from "@storybook/react";
import * as stories from "../src/components/__stories__/AgentNextGenTemplate.stories";

const { WithPageHeader } = composeStories(stories);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WithPageHeader />
  </React.StrictMode>
);
