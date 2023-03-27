import { addons } from "@storybook/addons";

addons.register("storybook/umami", (api) => {
  var script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.setAttribute("src", "https://analytics.umami.is/script.js");
  script.setAttribute("data-website-id", "fb8e65fb-2f7b-45b6-b0ab-90328407ebb0");
  document.head.appendChild(script);
});
