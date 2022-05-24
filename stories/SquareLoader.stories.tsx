import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SquareLoader from "../src/SquareLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: SquareLoader,
  argTypes
} as ComponentMeta<typeof SquareLoader>;

const Template: ComponentStory<typeof SquareLoader> = (args) => <SquareLoader {...args} />;

export const Main = Template.bind({});
