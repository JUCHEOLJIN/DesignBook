import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GradeCheckList from './GradeCheckList';
import { USER_GRADE } from '../../../utils/lists';
import handleData from '../../../utils/handleData';

export default {
  component: GradeCheckList,
  title: 'SDS/EmployeeFilterModal/GradeCheckList',
  argTypes: {},
} as ComponentMeta<typeof GradeCheckList>;

const Template: ComponentStory<typeof GradeCheckList> = (args) => (
  <GradeCheckList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: handleData(USER_GRADE.list, 'userGrade'),
  value: '',
};
