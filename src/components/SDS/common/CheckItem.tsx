/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from './Icon';

export interface CheckItemType {
  [key: string]: any;
}

interface CheckItemProps {
  checkItem: CheckItemType;
  onClick: () => void;
  className?: string;
}

const CheckItem = ({
  checkItem: { isChecked, title, userGradeIcon },
  className,
  onClick,
}: CheckItemProps) => {
  return (
    <CheckItemWrapper
      className={className}
      isChecked={isChecked}
      onClick={onClick}
    >
      <Icon
        icon={isChecked ? 'IcCheck' : 'IcUncheck'}
        size="20px"
        css={iconStyle}
      />
      {userGradeIcon && (
        <Icon icon={userGradeIcon} size="25px" css={iconStyle} />
      )}
      <Title>{title}</Title>
    </CheckItemWrapper>
  );
};

export default CheckItem;

const CheckItemWrapper = styled.li<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.paleGrey : theme.colors.white};
  color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.shoplBlue : theme.colors.deepGrey};
  list-style: none;
`;

const Title = styled.div`
  margin-left: 0.5rem;
  font-size: 14px;
`;

const iconStyle = css`
  margin-right: 0.5rem;
`;
