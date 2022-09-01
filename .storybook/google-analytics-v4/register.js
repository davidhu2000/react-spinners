import { window } from "global";
import { addons } from "@storybook/addons";
import { STORY_CHANGED, STORY_ERRORED, STORY_MISSING } from "@storybook/core-events";

import ReactGa from "react-ga4";

addons.register("storybook/google-analytics-v4", (api) => {
  ReactGa.initialize(window.STORYBOOK_GA_V4_ID, window.STORYBOOK_REACT_GA_OPTIONS);

  api.on(STORY_CHANGED, () => {
    const { path } = api.getUrlState();
    ReactGa.send({ hitType: "pageview", page: path });
  });
  api.on(STORY_ERRORED, ({ description }) => {
    ReactGa.exception({
      description,
      fatal: true,
    });
  });
  api.on(STORY_MISSING, (id) => {
    ReactGa.exception({
      description: `attempted to render ${id}, but it is missing`,
      fatal: false,
    });
  });
});
