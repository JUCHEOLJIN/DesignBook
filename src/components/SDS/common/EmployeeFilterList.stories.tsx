/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmployeeFilterList from './EmployeeFilterList';
import { USER_POSITION, ADMIN_GROUP, USER_GRADE } from '../../../utils/lists';

export default {
  component: EmployeeFilterList,
  title: 'SDS/EmployeeFilterModal/EmployeeFilterList',
  argTypes: {},
} as ComponentMeta<typeof EmployeeFilterList>;

const Template: ComponentStory<typeof EmployeeFilterList> = (args) => (
  <EmployeeFilterList
    {...args}
    css={css`
      max-width: 400px;
    `}
  />
);

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  currentType: '직급',
  positionList: USER_POSITION.list,
  groupList: ADMIN_GROUP.selectList,
  gradeList: USER_GRADE.list,
};
