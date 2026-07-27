/* Prototype-kit entry — Admin UI With Page Header template.
   Renders the real Storybook story (single source of truth) via
   composeStories; no template markup is duplicated here. The product name
   is injected by build-prototype.mjs, which patches the story's appName
   string in the SANDBOX copy of the repo before bundling. */
import React from "react";
import { createRoot } from "react-dom/client";
import { composeStories } from "@storybook/react";
import * as stories from "../src/components/__stories__/AdminShell.stories";

const { WithPageHeader } = composeStories(stories);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WithPageHeader />
  </React.StrictMode>
);
