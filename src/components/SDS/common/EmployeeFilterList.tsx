import React from 'react';
import styled from '@emotion/styled';
import EmployeeFilter, { FilterType } from './EmployeeFilter';

interface ListType {
  [key: string]: any;
}

interface EmployeeFilterListProps {
  currentType?: '그룹' | '직급' | '등급' | null;
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  groupList: ListType[];
  gradeList: ListType[];
  positionList: ListType[];
}

const EmployeeFilterList = ({
  currentType,
  className,
  groupList,
  gradeList,
  positionList,
  onClick,
}: EmployeeFilterListProps) => {
  const FILTERLIST: FilterType[] = [
    {
      filterId: 'group',
      nameKey: 'groupName',
      type: '그룹',
      icon: 'IcGrade',
      list: groupList,
    },
    {
      filterId: 'position',
      nameKey: 'positionName',
      type: '직급',
      icon: 'IcGrade',
      list: positionList,
    },
    {
      filterId: 'grade',
      nameKey: 'userGradeName',
      type: '등급',
      icon: 'IcGrade',
      list: gradeList,
    },
  ];

  return (
    <FiltersWrapper className={className}>
      {FILTERLIST.map((filter) => (
        <EmployeeFilter
          filter={filter}
          onClick={onClick}
          isActive={currentType === filter.type}
          key={filter.filterId}
        />
      ))}
    </FiltersWrapper>
  );
};

export default EmployeeFilterList;

const FiltersWrapper = styled.ul`
  min-height: 500px;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background-color: #f4f4f4;
`;
