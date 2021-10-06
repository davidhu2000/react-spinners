import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

type ExpectFunc = (loader: ReactWrapper, length: number, unit?: string) => void;

function lengthSpecs(Loader: typeof React.Component, property: string, expectFunction: ExpectFunc): void {
  const length = 18;

  describe(`${property} props`, () => {
    it(`should render the ${property} with px unit when size is a number`, () => {
      const props = { [property]: length };
      const loader = mount(<Loader {...props} />);
      expectFunction(loader, 18);
    });

    it(`should render the ${property} as is when ${property} is a string with valid css unit`, () => {
      const unit = "%";
      const props = { [property]: `${length}${unit}` };
      const loader = mount(<Loader {...props} />);
      expectFunction(loader, 18, unit);
    });

    it(`should render the ${property} with default unit of px when the unit is incorrect`, () => {
      const unit = "ad";
      const props = { [property]: `${length}${unit}` };
      const loader = mount(<Loader {...props} />);
      expectFunction(loader, 18);
    });
  });
}

export default lengthSpecs;
