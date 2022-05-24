import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ClimbingBoxLoader from "../src/ClimbingBoxLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: ClimbingBoxLoader,
  argTypes
} as ComponentMeta<typeof ClimbingBoxLoader>;

const Template: ComponentStory<typeof ClimbingBoxLoader> = (args) => <ClimbingBoxLoader {...args} />;

export const Main = Template.bind({});
