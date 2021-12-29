import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './Input'

export default {
  component: Input,
  title: 'Modal/Input',
  argTypes: {},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: '입력하세요',
  onChange: action('change'),
}
