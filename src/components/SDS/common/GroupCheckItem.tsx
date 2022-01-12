/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from './Icon';

export interface CheckItemType {
  [key: string]: any;
  groupDepthLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

interface GroupCheckItemProps {
  checkItem: CheckItemType;
  onClick: (e: React.MouseEvent<HTMLElement>, name: string) => void;
  name: string;
  className?: string;
}

const GroupCheckItem = ({
  checkItem,
  checkItem: { isChecked, groupDepthLevel },
  className,
  name,
  onClick,
}: GroupCheckItemProps) => {
  return (
    <CheckItemWrapper
      className={className}
      isChecked={isChecked}
      onClick={(e) => onClick(e, name)}
      id={checkItem[`${name}Id`]}
      css={depthStyle[groupDepthLevel]}
    >
      <Icon
        icon={isChecked ? 'IcCheck' : 'IcUncheck'}
        size="20px"
        css={iconStyle}
      />
      {groupDepthLevel === 1 && (
        <Icon icon="IcGraph" size="1em" color={isChecked ? '#3299fe' : ''} />
      )}
      <Title>{checkItem[`${name}Name`]}</Title>
    </CheckItemWrapper>
  );
};

export default GroupCheckItem;

const CheckItemWrapper = styled.li<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.shoplBlue : theme.colors.black};
  list-style: none;
  cursor: pointer;
`;

const Title = styled.h3`
  margin-left: 0.5rem;
  font-size: 14px;
`;

const iconStyle = css`
  margin-right: 0.5rem;
`;

const depthStyle = {
  1: css`
    padding: 1.125rem 1.5rem;
  `,
  2: css`
    background-color: #fbfbfb;
    padding-left: 2.5rem;
  `,
  3: css`
    background-color: #f8f8f8;
    padding-left: 3.5rem;
  `,
  4: css`
    background-color: #f6f6f6;
    padding-left: 4.5rem;
  `,
  5: css`
    background-color: #f4f4f4;
    padding-left: 5.5rem;
  `,
  6: css`
    background-color: #f0f0f0;
    padding-left: 6.5rem;
  `,
};
