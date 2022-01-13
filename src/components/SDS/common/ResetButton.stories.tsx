/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ResetButton from './ResetButton';

export default {
  component: ResetButton,
  title: 'SDS/Buttons/ResetButton',
  argTypes: {},
} as ComponentMeta<typeof ResetButton>;

const Template: ComponentStory<typeof ResetButton> = (args) => (
  <ResetButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
