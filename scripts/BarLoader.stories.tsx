import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BarLoader from "../src/BarLoader";

export default {
  component: BarLoader,
} as ComponentMeta<typeof BarLoader>;

const Template: ComponentStory<typeof BarLoader> = (args) => <BarLoader {...args} />;

export const Main = Template.bind({});
