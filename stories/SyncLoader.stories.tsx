import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SyncLoader from "../src/SyncLoader";

const argTypes = {
  size: { control: { type: "text" } },
  margin: { control: { type: "text" } },
}

export default {
  component: SyncLoader,
  argTypes
} as ComponentMeta<typeof SyncLoader>;

const Template: ComponentStory<typeof SyncLoader> = (args) => <SyncLoader {...args} />;

export const Main = Template.bind({});
