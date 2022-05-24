import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ClockLoader from "../src/ClockLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: ClockLoader,
  argTypes
} as ComponentMeta<typeof ClockLoader>;

const Template: ComponentStory<typeof ClockLoader> = (args) => <ClockLoader {...args} />;

export const Main = Template.bind({});
