import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PuffLoader from "../src/PuffLoader";

const argTypes = {
  size: { control: { type: "text" } },
}

export default {
  component: PuffLoader,
  argTypes
} as ComponentMeta<typeof PuffLoader>;

const Template: ComponentStory<typeof PuffLoader> = (args) => <PuffLoader {...args} />;

export const Main = Template.bind({});
