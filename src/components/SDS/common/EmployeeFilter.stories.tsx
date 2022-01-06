/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmployeeFilter from './EmployeeFilter';

export default {
  component: EmployeeFilter,
  title: 'SDS/EmployeeFilter',
  argTypes: {},
} as ComponentMeta<typeof EmployeeFilter>;

const Template: ComponentStory<typeof EmployeeFilter> = (args) => (
  <EmployeeFilter
    {...args}
    css={css`
      max-width: 400px;
    `}
  />
);

export const Default = Template.bind({});
Default.args = {
  filter: {
    filterId: 'group',
    type: '그룹',
    icon: 'IcGrade',
    nameKey: 'groupName',
    list: [],
  },
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  isActive: true,
};
