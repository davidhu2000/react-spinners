import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GridLoader from "../src/GridLoader";

const argTypes = {
  size: { control: { type: "text" } },
  width: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: GridLoader,
  argTypes
} as ComponentMeta<typeof GridLoader>;

const Template: ComponentStory<typeof GridLoader> = (args) => <GridLoader {...args} />;

export const Main = Template.bind({});
