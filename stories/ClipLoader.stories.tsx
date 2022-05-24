import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ClipLoader from "../src/ClipLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: ClipLoader,
  argTypes
} as ComponentMeta<typeof ClipLoader>;

const Template: ComponentStory<typeof ClipLoader> = (args) => <ClipLoader {...args} />;

export const Main = Template.bind({});
