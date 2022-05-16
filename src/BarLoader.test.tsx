import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BarLoader from "./BarLoader";

describe("BarLoader", () => {
  it("should render nothing is loading prop is false", () => {
    const { container } = render(<BarLoader loading={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("should have allow style override on wrapper", () => {
    const style = { overflow: "scroll" };
    const { container } = render(<BarLoader css={style} />);
    expect(container.firstChild).toHaveStyle(style);
  });

  it("should have allow custom html props", () => {
    render(<BarLoader aria-label={"aria-label"} />);
    expect(screen.queryByLabelText("aria-label")).toBeTruthy();
  });
});
