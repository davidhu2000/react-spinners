import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RingLoader from "../src/RingLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: RingLoader,
  argTypes
} as ComponentMeta<typeof RingLoader>;

const Template: ComponentStory<typeof RingLoader> = (args) => <RingLoader {...args} />;

export const Main = Template.bind({});
