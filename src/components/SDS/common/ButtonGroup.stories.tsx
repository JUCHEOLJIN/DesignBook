import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

export default {
  component: ButtonGroup,
  title: 'SDS/Buttons/ButtonGroup',
  argTypes: {},
} as ComponentMeta<typeof ButtonGroup>;

const TemplateRow: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button theme="tertiary" width="110px">
      취소
    </Button>
    <Button width="110px">확인</Button>
  </ButtonGroup>
);

const TemplateCol: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button theme="tertiary">취소</Button>
    <Button>확인</Button>
  </ButtonGroup>
);

export const Default = TemplateRow.bind({});
Default.args = {};

export const RightAlign = TemplateRow.bind({});
RightAlign.args = {
  rightAlign: true,
};

export const Column = TemplateCol.bind({});
Column.args = {
  direction: 'column',
};

export const CustomGap = TemplateRow.bind({});
CustomGap.args = {
  gap: '3rem',
};

export const CustomGapColumn = TemplateCol.bind({});
CustomGapColumn.args = {
  direction: 'column',
  gap: '3rem',
};
