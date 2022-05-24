import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BarLoader from "../src/BarLoader";

const argTypes = {
  height: { control: { type: "text" } },
  width: { control: { type: "text" } },
}

export default {
  component: BarLoader,
  argTypes
} as ComponentMeta<typeof BarLoader>;

const Template: ComponentStory<typeof BarLoader> = (args) => <BarLoader {...args} />;

export const Main = Template.bind({});
