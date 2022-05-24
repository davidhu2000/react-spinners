import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HashLoader from "../src/HashLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: HashLoader,
  argTypes
} as ComponentMeta<typeof HashLoader>;

const Template: ComponentStory<typeof HashLoader> = (args) => <HashLoader {...args} />;

export const Main = Template.bind({});
