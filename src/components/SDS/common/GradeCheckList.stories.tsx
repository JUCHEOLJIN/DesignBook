import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PositionCheckList from './PositionCheckList';
import { USER_GRADE } from '../../../utils/lists';

export default {
  component: PositionCheckList,
  title: 'SDS/EmployeeFilterModal/GradeCheckList',
  argTypes: {},
} as ComponentMeta<typeof PositionCheckList>;

const Template: ComponentStory<typeof PositionCheckList> = (args) => (
  <PositionCheckList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: USER_GRADE.list,
};
