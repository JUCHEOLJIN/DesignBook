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
  onClick: (e: React.MouseEvent<HTMLElement>, name: string) => void;
  name: string;
  className?: string;
}

const CheckItem = ({
  checkItem,
  checkItem: { isChecked, userGradeIcon },
  className,
  name,
  onClick,
}: CheckItemProps) => {
  return (
    <CheckItemWrapper
      className={className}
      isChecked={isChecked}
      onClick={(e) => onClick(e, name)}
      id={checkItem[`${name}Id`]}
    >
      <Icon
        icon={isChecked ? 'IcCheck' : 'IcUncheck'}
        size="20px"
        css={iconStyle}
      />
      {userGradeIcon && (
        <Icon icon={userGradeIcon} size="25px" css={iconStyle} />
      )}
      <Title>{checkItem[`${name}Name`]}</Title>
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
  cursor: pointer;
`;

const Title = styled.h3`
  margin-left: 0.5rem;
  font-size: 14px;
`;

const iconStyle = css`
  margin-right: 0.5rem;
`;
