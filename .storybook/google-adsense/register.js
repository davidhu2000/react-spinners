import { addons } from "@storybook/addons";

addons.register("storybook/google-adsense", (api) => {
  var script = document.createElement("script");
  script.async = true;
  script.setAttribute(
    "src",
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5203413376871291"
  );
  script.setAttribute("crossorigin", "anonymous");
  document.head.appendChild(script);
});
