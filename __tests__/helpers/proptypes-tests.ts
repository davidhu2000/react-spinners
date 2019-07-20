import {
  sizeKeys,
  sizeMarginKeys,
  heightWidthKeys,
  heightWidthRadiusKeys,
  sizeDefaults,
  DefaultProps,
  sizeMarginDefaults,
  heightWidthDefaults,
  heightWidthRadiusDefaults
} from "../../src/helpers";

describe("Arrays for onlyUpdateForKeys function", () => {
  describe("sizeKeys", () => {
    it("should be an array of length 5", () => {
      expect(Array.isArray(sizeKeys)).toBe(true);
      expect(sizeKeys).toHaveLength(5);
    });

    it("should contain the common props: loading, color, css", () => {
      expect(sizeKeys).toContain("loading");
      expect(sizeKeys).toContain("color");
      expect(sizeKeys).toContain("css");
    });

    it("should contain size and size unit keys", () => {
      expect(sizeKeys).toContain("size");
      expect(sizeKeys).toContain("sizeUnit");
    });
  });

  describe("sizeMarginKeys", () => {
    it("should be an array of length 6", () => {
      expect(Array.isArray(sizeMarginKeys)).toBe(true);
      expect(sizeMarginKeys).toHaveLength(6);
    });

    it("should contain the common props: loading, color, css", () => {
      expect(sizeMarginKeys).toContain("loading");
      expect(sizeMarginKeys).toContain("color");
      expect(sizeMarginKeys).toContain("css");
    });

    it("should contain size and size unit keys", () => {
      expect(sizeMarginKeys).toContain("size");
      expect(sizeMarginKeys).toContain("sizeUnit");
      expect(sizeMarginKeys).toContain("margin");
    });
  });

  describe("heightWidthKeys", () => {
    it("should be an array of length 7", () => {
      expect(Array.isArray(heightWidthKeys)).toBe(true);
      expect(heightWidthKeys).toHaveLength(7);
    });

    it("should contain the common props: loading, color, css", () => {
      expect(heightWidthKeys).toContain("loading");
      expect(heightWidthKeys).toContain("color");
      expect(heightWidthKeys).toContain("css");
    });

    it("should contain size and size unit keys", () => {
      expect(heightWidthKeys).toContain("height");
      expect(heightWidthKeys).toContain("heightUnit");
      expect(heightWidthKeys).toContain("width");
      expect(heightWidthKeys).toContain("widthUnit");
    });
  });

  describe("heightWidthRadiusKeys", () => {
    it("should be an array of length 7", () => {
      expect(Array.isArray(heightWidthRadiusKeys)).toBe(true);
      expect(heightWidthRadiusKeys).toHaveLength(10);
    });

    it("should contain the common props: loading, color, css", () => {
      expect(heightWidthRadiusKeys).toContain("loading");
      expect(heightWidthRadiusKeys).toContain("color");
      expect(heightWidthRadiusKeys).toContain("css");
    });

    it("should contain size and size unit keys", () => {
      expect(heightWidthRadiusKeys).toContain("height");
      expect(heightWidthRadiusKeys).toContain("heightUnit");
      expect(heightWidthRadiusKeys).toContain("width");
      expect(heightWidthRadiusKeys).toContain("widthUnit");
      expect(heightWidthRadiusKeys).toContain("radius");
      expect(heightWidthRadiusKeys).toContain("radiusUnit");
      expect(heightWidthRadiusKeys).toContain("margin");
    });
  });
});

describe("Default Props functions for different loaders", () => {
  describe("sizeDefaults", () => {
    it("should be a function", () => {
      expect(typeof sizeDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      let defaultProps: DefaultProps = sizeDefaults(1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual({});
    });

    it("should return the size as the passed in size value", () => {
      let defaultProps1: DefaultProps = sizeDefaults(1);
      expect(defaultProps1).toHaveProperty("size");
      expect(defaultProps1.size).toEqual(1);
      expect(defaultProps1).toHaveProperty("sizeUnit");
      expect(defaultProps1.sizeUnit).toEqual("px");

      let defaultProps2: DefaultProps = sizeDefaults(2);
      expect(defaultProps2).toHaveProperty("size");
      expect(defaultProps2.size).toEqual(2);
    });
  });

  describe("sizeMarginDefaults", () => {
    it("should be a function", () => {
      expect(typeof sizeMarginDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      let defaultProps: DefaultProps = sizeMarginDefaults(1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual({});
    });

    it("should return the size as the passed in size value", () => {
      let defaultProps1: DefaultProps = sizeMarginDefaults(1);
      expect(defaultProps1).toHaveProperty("size");
      expect(defaultProps1.size).toEqual(1);
      expect(defaultProps1).toHaveProperty("sizeUnit");
      expect(defaultProps1.sizeUnit).toEqual("px");
      expect(defaultProps1).toHaveProperty("margin");
      expect(defaultProps1.margin).toEqual("2px");

      let defaultProps2: DefaultProps = sizeMarginDefaults(2);
      expect(defaultProps2).toHaveProperty("size");
      expect(defaultProps2.size).toEqual(2);
    });
  });

  describe("heightWidthDefaults", () => {
    it("should be a function", () => {
      expect(typeof heightWidthDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      let defaultProps: DefaultProps = heightWidthDefaults(1, 1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual({});
    });

    it("should return the height/width as the passed in height/width value", () => {
      let defaultProps1: DefaultProps = heightWidthDefaults(1, 2);
      expect(defaultProps1).toHaveProperty("height");
      expect(defaultProps1.height).toEqual(1);
      expect(defaultProps1).toHaveProperty("width");
      expect(defaultProps1.width).toEqual(2);
      expect(defaultProps1).toHaveProperty("heightUnit");
      expect(defaultProps1.heightUnit).toEqual("px");
      expect(defaultProps1).toHaveProperty("widthUnit");
      expect(defaultProps1.widthUnit).toEqual("px");

      let defaultProps2: DefaultProps = heightWidthDefaults(3, 4);
      expect(defaultProps2).toHaveProperty("height");
      expect(defaultProps2.height).toEqual(3);
      expect(defaultProps2).toHaveProperty("width");
      expect(defaultProps2.width).toEqual(4);
    });
  });

  describe("heightWidthRadiusDefaults", () => {
    it("should be a function", () => {
      expect(typeof heightWidthRadiusDefaults).toEqual("function");
    });

    it("should return an object containing the common props: loading, color, css", () => {
      let defaultProps: DefaultProps = heightWidthRadiusDefaults(1, 1, 1);
      expect(defaultProps).toHaveProperty("loading");
      expect(defaultProps.loading).toEqual(true);
      expect(defaultProps).toHaveProperty("color");
      expect(defaultProps.color).toEqual("#000000");
      expect(defaultProps).toHaveProperty("css");
      expect(defaultProps.css).toEqual({});
    });

    it("should return the height/width as the passed in height/width value", () => {
      let defaultProps1: DefaultProps = heightWidthRadiusDefaults(1, 2, 3);
      expect(defaultProps1).toHaveProperty("height");
      expect(defaultProps1.height).toEqual(1);
      expect(defaultProps1).toHaveProperty("width");
      expect(defaultProps1.width).toEqual(2);
      expect(defaultProps1).toHaveProperty("radius");
      expect(defaultProps1.radius).toEqual(3);
      expect(defaultProps1).toHaveProperty("heightUnit");
      expect(defaultProps1.heightUnit).toEqual("px");
      expect(defaultProps1).toHaveProperty("widthUnit");
      expect(defaultProps1.widthUnit).toEqual("px");
      expect(defaultProps1).toHaveProperty("radiusUnit");
      expect(defaultProps1.widthUnit).toEqual("px");

      let defaultProps2: DefaultProps = heightWidthRadiusDefaults(4, 5, 6);
      expect(defaultProps2).toHaveProperty("height");
      expect(defaultProps2.height).toEqual(4);
      expect(defaultProps2).toHaveProperty("width");
      expect(defaultProps2.width).toEqual(5);
      expect(defaultProps2).toHaveProperty("radius");
      expect(defaultProps2.radius).toEqual(6);
    });
  });
});
