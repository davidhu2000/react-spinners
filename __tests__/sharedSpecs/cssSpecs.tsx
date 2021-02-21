import React from "react";
import { css } from "@emotion/react";
import { mount } from "enzyme";

function cssSpecs(Loader: typeof React.Component): void {
  describe("css props", () => {
    it("should apply the override if passed a string", () => {
      const loader = mount(
        <Loader css={"backface-visibility: hidden; box-decoration-break: slice;"} />
      );
      expect(loader).toHaveStyleRule("backface-visibility", "hidden");
      expect(loader).toHaveStyleRule("box-decoration-break", "slice");
    });

    it("should apply the override if passed an object", () => {
      const loader = mount(
        <Loader css={{ backfaceVisibility: "hidden", boxDecorationBreak: "slice" }} />
      );
      expect(loader).toHaveStyleRule("backface-visibility", "hidden");
      expect(loader).toHaveStyleRule("box-decoration-break", "slice");
    });

    it("should apply the override if passed an css template using emotion", () => {
      const loader = mount(
        <Loader
          css={css`
            backface-visibility: hidden;
            box-decoration-break: slice;
          `}
        />
      );
      expect(loader).toHaveStyleRule("backface-visibility", "hidden");
      expect(loader).toHaveStyleRule("box-decoration-break", "slice");
    });
  });
}

export default cssSpecs;
