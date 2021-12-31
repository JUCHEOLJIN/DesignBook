import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { iconTypes } from './Icon';
import styled from '@emotion/styled';

export default {
  component: Icon,
  title: 'SDS/Icon',
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'IcUserInfoEmployeeno',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  icon: 'IcUserInfoEmployeeno',
  size: '4rem',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  icon: 'IcUserInfoWorking',
  color: 'red',
};

const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

export const ListOfIcons: ComponentStory<typeof Icon> = ({ icon, ...args }) => {
  return (
    <Wrapper>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon {...args} icon={icon} />
          {icon}
        </li>
      ))}
    </Wrapper>
  );
};
ListOfIcons.args = {};
