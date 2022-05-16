import * as React from "react";
import { render } from "@testing-library/react";
import BarLoader from "./BarLoader";

describe("BarLoader", () => {
  it("should render with default props", () => {
    render(<BarLoader />);
  });
});
