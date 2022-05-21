import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Loaders from "./index";
import { LoaderHeightWidthProps, LoaderSizeMarginProps } from "./helpers/props";

Object.entries(Loaders).forEach((loader) => {
  const name = loader[0];

  const Loader = loader[1] as React.ComponentType<LoaderHeightWidthProps | LoaderSizeMarginProps>;

  // TODO: remove from this list as loaders are converted to functional
  const oldLoaders = [
    "BounceLoader",
    "CircleLoader",
    "ClimbingBoxLoader",
    "ClipLoader",
    "ClockLoader",
    "DotLoader",
    "FadeLoader",
    "GridLoader",
    "HashLoader",
    "MoonLoader",
    "PacmanLoader",
    "PropagateLoader",
    "PulseLoader",
    "PuffLoader",
    "RingLoader",
    "RiseLoader",
    "RotateLoader",
    "ScaleLoader",
    "SkewLoader",
    "SquareLoader",
    "SyncLoader",
  ];

  if (oldLoaders.includes(name)) {
    return;
  }

  describe(name, () => {
    it("should render nothing is loading prop is false", () => {
      const { container } = render(<Loader loading={false} />);
      expect(container.firstChild).toBeNull();
    });

    it("should have allow style override on wrapper", () => {
      const style = { overflow: "scroll" };
      const { container } = render(<Loader css={style} />);
      expect(container.firstChild).toHaveStyle(style);
    });

    it("should have allow custom html props", () => {
      render(<Loader aria-label={"aria-label"} />);
      expect(screen.queryByLabelText("aria-label")).toBeTruthy();
    });
  });
});
