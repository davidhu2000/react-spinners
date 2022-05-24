import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SkewLoader from "../src/SkewLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: SkewLoader,
  argTypes
} as ComponentMeta<typeof SkewLoader>;

const Template: ComponentStory<typeof SkewLoader> = (args) => <SkewLoader {...args} />;

export const Main = Template.bind({});
