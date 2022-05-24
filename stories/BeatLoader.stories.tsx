import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BeatLoader from "../src/BeatLoader";

const argTypes = {
  size: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: BeatLoader,
  argTypes
} as ComponentMeta<typeof BeatLoader>;

const Template: ComponentStory<typeof BeatLoader> = (args) => <BeatLoader {...args} />;

export const Main = Template.bind({});
