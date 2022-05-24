import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RotateLoader from "../src/RotateLoader";

const argTypes = {
  size: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: RotateLoader,
  argTypes
} as ComponentMeta<typeof RotateLoader>;

const Template: ComponentStory<typeof RotateLoader> = (args) => <RotateLoader {...args} />;

export const Main = Template.bind({});
