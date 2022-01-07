/** @jsxImportSource @emotion/react */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmployeeFilterModal from './EmployeeFilterModal';
import { USER_POSITION, ADMIN_GROUP, USER_GRADE } from '../../../utils/lists';

export default {
  component: EmployeeFilterModal,
  title: 'SDS/EmployeeFilterModal/EmployeeFilterModal',
  argTypes: {},
} as ComponentMeta<typeof EmployeeFilterModal>;

const Template: ComponentStory<typeof EmployeeFilterModal> = (args) => (
  <EmployeeFilterModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpened: true,
};

export const Active = Template.bind({});
Active.args = {
  isOpened: true,
  positionList: USER_POSITION.list,
  groupList: ADMIN_GROUP.selectList,
  gradeList: USER_GRADE.list,
};
