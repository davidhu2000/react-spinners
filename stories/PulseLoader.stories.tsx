import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PulseLoader from "../src/PulseLoader";

const argTypes = {
  size: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: PulseLoader,
  argTypes
} as ComponentMeta<typeof PulseLoader>;

const Template: ComponentStory<typeof PulseLoader> = (args) => <PulseLoader {...args} />;

export const Main = Template.bind({});
