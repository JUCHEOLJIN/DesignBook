import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GroupCheckList from './GroupCheckList';
import { ADMIN_GROUP } from '../../../utils/lists';
import handleData from '../../../utils/handleData';

export default {
  component: GroupCheckList,
  title: 'SDS/EmployeeFilterModal/GroupCheckList',
  argTypes: {},
} as ComponentMeta<typeof GroupCheckList>;

const Template: ComponentStory<typeof GroupCheckList> = (args) => (
  <GroupCheckList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: handleData(ADMIN_GROUP.selectList, 'group'),
  value: '',
};
