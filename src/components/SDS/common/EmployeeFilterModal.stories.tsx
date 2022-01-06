/** @jsxImportSource @emotion/react */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmployeeFilterModal from './EmployeeFilterModal';

export default {
  component: EmployeeFilterModal,
  title: 'SDS/EmployeeFilterModal',
  argTypes: {},
} as ComponentMeta<typeof EmployeeFilterModal>;

const Template: ComponentStory<typeof EmployeeFilterModal> = (args) => (
  <EmployeeFilterModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpened: true,
};
