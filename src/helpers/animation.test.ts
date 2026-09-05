import { createAnimation } from "./animation";

describe("createAnimation", () => {
  it("should return name with suffix if passed in", () => {
    const name = createAnimation(
      "TestLoader",
      "0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}",
      "my-suffix"
    );
    expect(name).toEqual("react-spinners-TestLoader-my-suffix");
  });

  it("should handle a missing stylesheet", () => {
    const originalCreateElement = document.createElement.bind(document);
    const createElement = jest.spyOn(document, "createElement").mockImplementation((tagName) => {
      const element = originalCreateElement(tagName);
      if (tagName === "style") Object.defineProperty(element, "sheet", { value: null });
      return element;
    });

    expect(createAnimation("TestLoader", "", "missing-stylesheet")).toBe(
      "react-spinners-TestLoader-missing-stylesheet"
    );

    createElement.mockRestore();
  });
});
