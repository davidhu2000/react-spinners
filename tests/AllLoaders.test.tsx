import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as Loaders from "../src";
import { LoaderHeightWidthRadiusProps, LoaderSizeMarginProps } from "../src/helpers/props";

Object.entries(Loaders).forEach((loader) => {
  const name = loader[0];

  const Loader = loader[1] as React.ComponentType<LoaderHeightWidthRadiusProps & LoaderSizeMarginProps>;

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
  });
});
