import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FadeLoader from "../src/FadeLoader";

const argTypes = {
  height: { control: { type: "text" } },
  width: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: FadeLoader,
  argTypes
} as ComponentMeta<typeof FadeLoader>;

const Template: ComponentStory<typeof FadeLoader> = (args) => <FadeLoader {...args} />;

export const Main = Template.bind({});
