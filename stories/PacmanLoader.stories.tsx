import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PacmanLoader from "../src/PacmanLoader";

const argTypes = {
  size: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: PacmanLoader,
  argTypes
} as ComponentMeta<typeof PacmanLoader>;

const Template: ComponentStory<typeof PacmanLoader> = (args) => <PacmanLoader {...args} />;

export const Main = Template.bind({});
