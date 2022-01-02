/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from './Modal';

export default {
  component: Modal,
  title: 'SDS/Modal',
  argTypes: {},
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '모달창',
  description: '모달창 컴포넌트입니다.',
  isOpened: true,
};
