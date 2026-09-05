import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Loaders from "../src";
import { LoaderHeightWidthRadiusProps, LoaderSizeMarginProps } from "../src/helpers/props";

type LoaderProps = LoaderHeightWidthRadiusProps & LoaderSizeMarginProps & { barCount?: number };

Object.entries(Loaders).forEach((loader) => {
  const name = loader[0];

  const Loader = loader[1] as React.ComponentType<
    LoaderHeightWidthRadiusProps & LoaderSizeMarginProps
  >;

  describe(name, () => {
    it("should render nothing is loading prop is false", () => {
      const { container } = render(<Loader loading={false} />);
      expect(container.firstChild).toBeNull();
    });

    it("should have allow style override on wrapper", () => {
      const style = { overflow: "scroll" };
      const { container } = render(<Loader cssOverride={style} />);
      expect(container.firstChild).toHaveStyle(style);
    });

    it("should have allow custom html props", () => {
      render(<Loader aria-label={"aria-label"} />);
      expect(screen.queryByLabelText("aria-label")).toBeTruthy();
    });

    it("should support custom loader props", () => {
      const props: LoaderProps = {
        color: "red",
        speedMultiplier: 2,
        cssOverride: { opacity: 0.5 },
      };

      if (name === "BarLoader") {
        Object.assign(props, { height: "10%", width: "20%" });
      } else if (name === "FadeLoader" || name === "ScaleLoader") {
        Object.assign(props, { height: "10%", width: "5%", radius: "2px", margin: "3em" });
        if (name === "ScaleLoader") Object.assign(props, { barCount: 3 });
      } else if (
        [
          "BeatLoader",
          "GridLoader",
          "PacmanLoader",
          "PulseLoader",
          "RiseLoader",
          "RotateLoader",
          "SyncLoader",
        ].includes(name)
      ) {
        Object.assign(props, { size: "15%", margin: "3em" });
      } else {
        Object.assign(props, { size: "15%" });
      }

      const { container } = render(<Loader {...props} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
