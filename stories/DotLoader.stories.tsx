import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DotLoader from "../src/DotLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: DotLoader,
  argTypes
} as ComponentMeta<typeof DotLoader>;

const Template: ComponentStory<typeof DotLoader> = (args) => <DotLoader {...args} />;

export const Main = Template.bind({});
