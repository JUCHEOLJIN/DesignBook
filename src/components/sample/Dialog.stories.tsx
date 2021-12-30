import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dialog from './Dialog';

export default {
  component: Dialog,
  title: 'Velog/Dialog',
  argTypes: {},
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '결제 성공',
  description: '결제가 성공적으로 이루어졌습니다.',
  visible: true,
  confirmText: '확인',
  cancelText: '취소',
  cancellable: false,
};

export const Cancellable = Template.bind({});
Cancellable.args = {
  ...Default.args,
  title: '포스트 삭제',
  description: '포스트를 정말로 삭제하시겠습니까?',
  confirmText: '삭제',
  cancellable: true,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  visible: true,
  hideButtons: true,
  children: 'Custom Content',
};
