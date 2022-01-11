/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Icon from './Icon';
import { IconType } from './Icon';

export interface FilterType {
  filterId: string;
  nameKey: 'groupName' | 'positionName' | 'userGradeName';
  type: string;
  list: any;
  icon: IconType;
}

interface EmployeeFilterProps {
  isActive: boolean;
  filter: FilterType;
  className?: string;
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
}

const EmployeeFilter = ({
  isActive,
  filter: { type, list, nameKey, icon = 'IcGrade' },
  className,
  onClick,
}: EmployeeFilterProps) => {
  const handleList = () => {
    if (!list) {
      return list;
    }

    if (list) {
      const selectedList = Object.keys(list).filter(
        (key) => list[key].isChecked,
      );
      return selectedList;
    }
  };

  const getSelectedResult = () => {
    if (
      handleList() !== [] &&
      handleList() !== undefined &&
      handleList()[0] !== undefined
    ) {
      return `${list[handleList()[0]][nameKey]} ${
        handleList().length > 1 ? `+ ${handleList().length - 1}` : ''
      }`;
    } else {
      return '전체';
    }
  };

  return (
    <FilterWrapper
      isActive={isActive}
      className={className}
      onClick={onClick}
      id={type}
    >
      <Icon
        icon={icon}
        css={css`
          margin-top: -2px;
          margin-right: 15px;
        `}
      />
      <TextBox>
        <Type>{type}</Type>
        <Condition>{getSelectedResult()}</Condition>
      </TextBox>
    </FilterWrapper>
  );
};

export default EmployeeFilter;

const FilterWrapper = styled.li<{ isActive: boolean; id: string }>`
  display: flex;
  width: 25rem;
  padding: 1.125rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.paleGrey : theme.colors.white};
  list-style: none;
  cursor: pointer;
`;

const TextBox = styled.div`
  font-size: 14px;
`;

const Type = styled.p`
  margin-bottom: 0.6875rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Condition = styled.p`
  color: ${({ theme }) => theme.colors.shoplBlue};
`;
