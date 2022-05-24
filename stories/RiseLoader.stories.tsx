import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RiseLoader from "../src/RiseLoader";

const argTypes = {
  size: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: RiseLoader,
  argTypes
} as ComponentMeta<typeof RiseLoader>;

const Template: ComponentStory<typeof RiseLoader> = (args) => <RiseLoader {...args} />;

export const Main = Template.bind({});
