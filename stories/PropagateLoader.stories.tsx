import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PropagateLoader from "../src/PropagateLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: PropagateLoader,
  argTypes
} as ComponentMeta<typeof PropagateLoader>;

const Template: ComponentStory<typeof PropagateLoader> = (args) => <PropagateLoader {...args} />;

export const Main = Template.bind({});
