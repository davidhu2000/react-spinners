import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CircleLoader from "../src/CircleLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: CircleLoader,
  argTypes
} as ComponentMeta<typeof CircleLoader>;

const Template: ComponentStory<typeof CircleLoader> = (args) => <CircleLoader {...args} />;

export const Main = Template.bind({});
