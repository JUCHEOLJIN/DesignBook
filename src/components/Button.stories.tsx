import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import {action} from "@storybook/addon-actions"

import Button from "./Button";



export default {
    component: Button,
    title: "Basic/Button",
    argTypes: {
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  onClick: action("default")
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: 'Secondary',
  onClick: action("실험")

};

export const Cancel = Template.bind({});
Cancel.args = {
  type: "cancel",
  label: "Cancel",
  onClick: action("default")

}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium"
}

export const Small = Template.bind({});
Small.args = {

  size: 'small',
  label: 'Small',
};