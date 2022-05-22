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
});
