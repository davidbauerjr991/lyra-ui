/* Shared example content for SidePanel.stories.tsx (Default playground).
   Not a stories file — it holds the fixtures so Default and any Variants page
   can't drift apart.

   NOTE: the two stories that `lyra-sol-compare/compare.config.json` pairs with
   Sol's Side Panel stories (Left, Right — also named as the reference in
   lyra-ux-templates' AgentNextGenPage.tsx) are kept verbatim in
   SidePanel.stories.tsx and don't import from here. */
import { Button } from "../button";

export const sideFooterButtons = (
  <>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </>
);

/* Dummy main-content text so it's visible whether the panel pushes the content
   (pinned) or floats over it (unpinned). */
export function MainContent({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-hidden bg-lyra-bg-surface-base p-6">
      {children}
      <h2 className="lyra-heading-md text-lyra-fg-default">Main content</h2>
      {Array.from({ length: 6 }, (_, i) => (
        <p key={i} className="lyra-body-md text-lyra-fg-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      ))}
    </div>
  );
}
