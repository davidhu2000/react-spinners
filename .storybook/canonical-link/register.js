import { addons } from "@storybook/addons";

addons.register("storybook/canonical-link", (api) => {
  var link = document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", "https://www.davidhu.io/react-spinners/storybook");
  document.head.appendChild(link);
});
