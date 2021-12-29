import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

import styled from '@emotion/styled';

export default {
  component: ButtonGroup,
  title: 'Velog/ButtonGroup',
  argTypes: {},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button type="tertiary">취소</Button>
    <Button>확인</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const RightAlign = Template.bind({});
RightAlign.args = {
  rightAlign: true,
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const CustomGap = Template.bind({});
CustomGap.args = {
  gap: '3rem',
};

export const CustomGapColumn = Template.bind({});
CustomGapColumn.args = {
  direction: 'column',
  gap: '3rem',
};
