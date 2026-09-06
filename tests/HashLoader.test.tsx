import * as React from "react";
import { render } from "@testing-library/react";

import HashLoader from "../src/HashLoader";

describe("HashLoader", () => {
  it("uses different animations for different colors", () => {
    const { getByTestId } = render(
      <>
        <HashLoader color="red" data-testid="red" />
        <HashLoader color="green" data-testid="green" />
      </>
    );

    const redAnimation = (getByTestId("red").firstElementChild as HTMLElement).style.animation;
    const greenAnimation = (getByTestId("green").firstElementChild as HTMLElement).style.animation;

    expect(redAnimation).not.toEqual(greenAnimation);
  });
});
