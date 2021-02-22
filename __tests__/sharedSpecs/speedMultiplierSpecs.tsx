import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

type ExpectFunc = (loader: ReactWrapper, multiplier: number) => void;

function speedMultiplierSpecs(Loader: typeof React.Component, expectFunction: ExpectFunc): void {
  describe("speedMultipler props", () => {
    let loader = mount(<Loader />);

    it("should use default speed and delay if speedMultipler is not passed in", () => {
      expectFunction(loader, 1);
    });

    it("should double the animation speed if passed in as 2", () => {
      const speedMultiplier = 2;
      loader = mount(<Loader speedMultiplier={speedMultiplier} />);
      expectFunction(loader, 0.5);
    });

    it("should half the animation speed if passed in as 0.5", () => {
      const speedMultiplier = 0.5;
      loader = mount(<Loader speedMultiplier={speedMultiplier} />);
      expectFunction(loader, 2);
    });

    it("should stop animating if passed in as 0", () => {
      const speedMultiplier = 0;
      loader = mount(<Loader speedMultiplier={speedMultiplier} />);
      expectFunction(loader, Infinity);
    });
  });
}

export default speedMultiplierSpecs;
