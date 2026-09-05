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

  it("reuses the existing keyframes when an animation is rendered again", () => {
    const frames = "0% {opacity: 0} 100% {opacity: 1}";

    const firstName = createAnimation("TestLoader", frames, "deduplicated");
    const secondName = createAnimation("TestLoader", frames, "deduplicated");

    expect(firstName).toEqual(secondName);
    expect(
      Array.from(document.styleSheets).filter((sheet) =>
        Array.from(sheet.cssRules).some((rule) => rule.cssText.includes(firstName))
      )
    ).toHaveLength(1);
    expect(
      Array.from(document.querySelectorAll("style")).filter((style) => style.textContent?.includes(firstName))
    ).toHaveLength(1);
  });
});
