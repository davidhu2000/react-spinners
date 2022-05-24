import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BounceLoader from "../src/BounceLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: BounceLoader,
  argTypes
} as ComponentMeta<typeof BounceLoader>;

const Template: ComponentStory<typeof BounceLoader> = (args) => <BounceLoader {...args} />;

export const Main = Template.bind({});
