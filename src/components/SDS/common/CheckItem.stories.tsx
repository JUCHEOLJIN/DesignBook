/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckItem from './CheckItem';

export default {
  component: CheckItem,
  title: 'SDS/EmployeeFilterModal/CheckItem',
  argTypes: {},
} as ComponentMeta<typeof CheckItem>;

const Template: ComponentStory<typeof CheckItem> = (args) => (
  <CheckItem
    {...args}
    css={css`
      width: 400px;
    `}
  />
);

export const Default = Template.bind({});
Default.args = {
  checkItem: {
    positionName: '사원',
    positionId: 'F865B344331209AF',
    isChecked: false,
  },
  name: 'position',
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  checkItem: { ...Default.args.checkItem, isChecked: true },
};
