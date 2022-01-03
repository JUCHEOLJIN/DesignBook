/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './Modal';
import Input from '../Input';

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

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <div css={sampleStyle}>Content</div>
  </Modal>
);

const sampleStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
  font-size: 36px;
`;

export const Default = Template.bind({});
Default.args = {
  title: '모달창',
  isOpened: true,
  width: '500px',
  height: '400px',
};

export const InputModal: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <div css={contentStyle}>
        <div css={elementStyle}>
          <Title>명칭</Title>
          <Input placeholder="입력하세요" />
        </div>
        <div css={elementStyle}>
          <Title>날짜</Title>
          <Input placeholder="입력하세요" />
        </div>
        <div>
          <Title>유형</Title>
          <Input placeholder="입력하세요" />
        </div>
      </div>
    </Modal>
  );
};
InputModal.args = {
  title: '쉬는날 추가',
  isOpened: true,
  confirmText: '저장',
};

const contentStyle = css`
  padding: 1rem;
`;

const elementStyle = css`
  margin-bottom: 2.2rem;
`;

const Title = styled.h1`
  width: 440px;
  margin-bottom: 16px;
`;
