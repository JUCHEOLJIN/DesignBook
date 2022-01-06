import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from './Icon';

interface CheckItemProps {
  checkItem: {
    [key: string]: any;
  };
  className: string;
}

const CheckItem = ({
  checkItem: { isChecked, title },
  className,
}: CheckItemProps) => {
  return (
    <CheckItemWrapper className={className} isChecked={isChecked}>
      <Icon icon={isChecked ? 'IcCheck' : 'IcUncheck'} size="20px" />
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
  list-style: none;
`;

const Title = styled.div`
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.deepGrey};
  font-size: 14px;
`;
