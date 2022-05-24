import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MoonLoader from "../src/MoonLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: MoonLoader,
  argTypes
} as ComponentMeta<typeof MoonLoader>;

const Template: ComponentStory<typeof MoonLoader> = (args) => <MoonLoader {...args} />;

export const Main = Template.bind({});
