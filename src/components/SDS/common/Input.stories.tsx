/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import Icon from './Icon';

export default {
  component: Input,
  title: 'SDS/Input',
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: '입력하세요',
  width: '90%',
  onChange: action('change'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  theme: 'secondary',
};

export const CustomBorderRadius = Template.bind({});
CustomBorderRadius.args = {
  ...Primary.args,
  borderRadius: '8px',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Primary.args,
  width: '50%',
};

export const WithIcon: ComponentStory<typeof Input> = (args) => {
  return (
    <Input {...args}>
      <Icon icon="IcUserInfoEmployeeno" />
    </Input>
  );
};
WithIcon.args = {
  placeholder: '입력하세요',
  width: '90%',
  withIcon: true,
  onChange: action('change'),
};

export const Login: ComponentStory<typeof Input> = (args) => {
  return (
    <div>
      <Input
        {...args}
        placeholder="이메일 또는 핸드폰 번호 입력"
        css={inputStyle}
      >
        <Icon icon="IcUserBlack" css={iconStyle} />
      </Input>
      <Input {...args} placeholder="비밀번호 입력" css={inputStyle}>
        <Icon icon="IcPwd" css={iconStyle} />
      </Input>
    </div>
  );
};
Login.args = {
  width: '26.25rem',
  theme: 'secondary',
  borderRadius: '8px',
  withIcon: true,
};

const inputStyle = css`
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  margin-bottom: 1rem;
`;

const iconStyle = css`
  opacity: 0.3;
`;
