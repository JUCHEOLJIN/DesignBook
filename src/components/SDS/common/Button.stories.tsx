/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  component: Button,
  title: 'SDS/Button',
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'DEFAULT',
  onClick: action('Click'),
  theme: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'PRIMARY',
  onClick: action('Click'),
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'SECONDARY',
  onClick: action('Click'),
  theme: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'TERTIARY',
  onClick: action('Click'),
  theme: 'tertiary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  children: 'QUATERNARY',
  onClick: action('Click'),
  theme: 'quaternary',
};

const sizes: ('small' | 'medium' | 'big')[] = ['small', 'medium', 'big'];

export const Size: ComponentStory<typeof Button> = ({
  children,
  size,
  ...args
}) => {
  return (
    <>
      <div css={wrapper}>
        {sizes.map((each) => (
          <div>
            <p>{each[0].toUpperCase() + each.slice(1)}</p>
            <Button {...args} size={each}>
              {children ?? each.toUpperCase()}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

const wrapper = css`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  & div {
    margin-right: 24px;
  }

  & p {
    text-align: center;
    margin-bottom: 12px;
  }
`;
