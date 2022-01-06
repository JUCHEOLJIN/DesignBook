/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmployeeFilterList from './EmployeeFilterList';

export default {
  component: EmployeeFilterList,
  title: 'SDS/EmployeeFilterModal/EmployeeFilterList',
  argTypes: {},
} as ComponentMeta<typeof EmployeeFilterList>;

const Template: ComponentStory<typeof EmployeeFilterList> = (args) => (
  <EmployeeFilterList
    {...args}
    css={css`
      max-width: 400px;
    `}
  />
);

export const Default = Template.bind({});
Default.args = {};

const USER_POSITION = {
  result: 'success',
  list: [
    {
      positionName: '테스트',
      positionId: '96461E59352E4A9E',
      isChecked: false,
      title: '테스트',
    },
    {
      positionName: '사원',
      positionId: 'F865B344331209AF',
      isChecked: false,
      title: '사원',
    },
    {
      positionName: '차장',
      positionId: 'D2BED602E177062E',
      isChecked: false,
      title: '차장',
    },
    {
      positionName: '주임',
      positionId: '7D1A20C42C0507B8',
      isChecked: true,
      title: '주입',
    },
    {
      positionName: '대리',
      positionId: 'B618C4A347B78B83',
      isChecked: true,
      title: '대리',
    },
  ],
};

const USER_GRADE = {
  result: '20000',
  list: [
    {
      userGradeId: '208E561E09C22A3F',
      userGradeIdx: 1,
      userGradeName: '다이아',
      userGradeIcon: '/img/icon/icon_grade_0.png',
      isChecked: false,
      title: '다이아',
    },
    {
      userGradeId: '50EF55A9B388D629',
      userGradeIdx: 2,
      userGradeName: '킹',
      userGradeIcon: '/img/icon/icon_grade_1.png',
      isChecked: false,
      title: '킹',
    },
  ],
};

const ADMIN_GROUP = {
  result: '20000',
  selectList: [
    {
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
    {
      groupId: 'BC63010A9F852818',
      groupName: 'eden story',
      parentGroupId: '1D9DA48B9870E5BB',
      groupDepth: '1D9DA48B9870E5BB/BC63010A9F852818',
      groupDepthLevel: 2,
      groupFullName: 'eden company/eden story',
      groupUserCnt: 1,
      groupStaffCnt: 1,
      groupLeaderCnt: 0,
      groupLeaderAprvCnt: 0,
      groupLeaderNoAprvCnt: 0,
      leaderCnt: 0,
      leaderAprvCnt: 0,
      leaderNoAprvCnt: 0,
      isLeader: '1',
      isPermitApproval: '1',
      isChecked: true,
      title: 'eden story',
    },
    {
      groupId: '12AC1B666DF10A22',
      groupName: 'eden task',
      parentGroupId: 'BC63010A9F852818',
      groupDepth: '1D9DA48B9870E5BB/BC63010A9F852818/12AC1B666DF10A22',
      groupDepthLevel: 3,
      groupFullName: 'eden company/eden story/eden task',
      groupUserCnt: 0,
      groupStaffCnt: 0,
      groupLeaderCnt: 0,
      groupLeaderAprvCnt: 0,
      groupLeaderNoAprvCnt: 0,
      leaderCnt: 0,
      leaderAprvCnt: 0,
      leaderNoAprvCnt: 0,
      isLeader: '1',
      isPermitApproval: '1',
      isChecked: false,
      title: 'eden task',
    },
    {
      groupId: '5E46573BC5CC62C6',
      groupName: 'eden task2',
      parentGroupId: 'BC63010A9F852818',
      groupDepth: '1D9DA48B9870E5BB/BC63010A9F852818/5E46573BC5CC62C6',
      groupDepthLevel: 3,
      groupFullName: 'eden company/eden story/eden task2',
      groupUserCnt: 0,
      groupStaffCnt: 0,
      groupLeaderCnt: 0,
      groupLeaderAprvCnt: 0,
      groupLeaderNoAprvCnt: 0,
      leaderCnt: 0,
      leaderAprvCnt: 0,
      leaderNoAprvCnt: 0,
      isLeader: '1',
      isPermitApproval: '1',
      isChecked: false,
      title: 'eden task2',
    },
  ],
};

export const Active = Template.bind({});
Active.args = {
  currentType: '직급',
  positionList: USER_POSITION.list,
  groupList: ADMIN_GROUP.selectList,
  gradeList: USER_GRADE.list,
};
