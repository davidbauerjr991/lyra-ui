/* Builds a story's `parameters.controls.include` from its own `argTypes`.

   Why this exists: Storybook's Controls panel filters rows by the argType's
   DISPLAY `name` (when it has one), not by its key. A story that sets
   `argTypes.badge = { name: "Badge", … }` and lists `include: ["badge"]` shows
   nothing for it — the panel just omits the row, with no error. Hand-maintained
   include lists therefore silently drop any control whose display name is
   forgotten. Deriving the list from `argTypes` (both key and name) makes that
   impossible: add an argType and its control shows. */

type ArgTypesLike = Record<string, ({ name?: string } & Record<string, unknown>) | undefined>;

export const controlsInclude = (argTypes: ArgTypesLike | undefined): string[] =>
  Object.entries(argTypes ?? {}).flatMap(([key, def]) => (def?.name && def.name !== key ? [key, def.name] : [key]));

/** Returns the story with `parameters.controls.include` generated from its `argTypes`. */
export function withControlsFor<
  S extends { argTypes?: ArgTypesLike; parameters?: { controls?: Record<string, unknown> } & Record<string, unknown> },
>(story: S): S {
  return {
    ...story,
    parameters: {
      ...story.parameters,
      controls: { ...story.parameters?.controls, include: controlsInclude(story.argTypes) },
    },
  };
}
