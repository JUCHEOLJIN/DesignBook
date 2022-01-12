/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GroupCheckItem from './GroupCheckItem';
import GradeCheckList from './GradeCheckList';
import { ADMIN_GROUP } from '../../../utils/lists';
import handleData from '../../../utils/handleData';

export default {
  component: GroupCheckItem,
  title: 'SDS/EmployeeFilterModal/GroupCheckItem',
  argTypes: {},
} as ComponentMeta<typeof GroupCheckItem>;

const Template: ComponentStory<typeof GroupCheckItem> = (args) => (
  <GroupCheckItem
    {...args}
    css={css`
      width: 400px;
    `}
  />
);

export const Default = Template.bind({});
Default.args = {
  checkItem: {
    groupId: '1D9DA48B9870E5BB',
    groupName: 'eden company',
    parentGroupId: '1D9DA48B9870E5BB',
    groupDepth: '1D9DA48B9870E5BB',
    groupDepthLevel: 1,
    groupFullName: 'eden company',
    groupUserCnt: 2,
    groupStaffCnt: 1,
    groupLeaderCnt: 1,
    groupLeaderAprvCnt: 1,
    groupLeaderNoAprvCnt: 0,
    leaderCnt: 1,
    leaderAprvCnt: 1,
    leaderNoAprvCnt: 0,
    isLeader: '1',
    isPermitApproval: '1',
    isChecked: false,
    title: 'eden company',
  },
  name: 'group',
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  checkItem: { ...Default.args.checkItem, isChecked: true, groupDepthLevel: 1 },
};

export const DepthTree: ComponentStory<typeof GradeCheckList> = ({
  ...args
}) => {
  return (
    <>
      {ADMIN_GROUP.selectList.map((each: any) => (
        <GroupCheckItem
          checkItem={each}
          name="group"
          key={each.groupId}
          onClick={() => console.log('click')}
          handleToggle={() => console.log('Toggle')}
        />
      ))}
    </>
  );
};
