import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ScaleLoader from "../src/ScaleLoader";

const argTypes = {
  height: { control: { type: "text" } },
  width: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: ScaleLoader,
  argTypes
} as ComponentMeta<typeof ScaleLoader>;

const Template: ComponentStory<typeof ScaleLoader> = (args) => <ScaleLoader {...args} />;

export const Main = Template.bind({});
