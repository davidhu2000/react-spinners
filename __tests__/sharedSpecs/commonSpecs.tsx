import * as React from "react";
import { mount } from "enzyme";
import { matchers } from "@emotion/jest";
expect.extend(matchers);

function commonSpecs(Loader: typeof React.Component, defaultProps: unknown): void {
  describe("common specs", () => {
    it("should match snapshot", () => {
      const loader = mount(<Loader />);
      expect(loader).toMatchSnapshot();
    });

    it("should contain default props if no props are passed", () => {
      const loader = mount(<Loader />);
      expect(loader.props()).toEqual(defaultProps);
    });

    it("should render null if loading prop is set as false", () => {
      const loader = mount(<Loader loading={false} />);
      expect(loader.isEmptyRender()).toBe(true);
    });

    it("should render an arial if it is passed into custom props", () => {
      const loader = mount(<Loader customProps={{"aria-label": "loading"}} />);
      expect(loader.find("span").at(0).props()).toHaveProperty("aria-label", "loading")
    });
  });
}

export default commonSpecs;
