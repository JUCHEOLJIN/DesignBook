import React from 'react';
import styled from '@emotion/styled';
import EmployeeFilter, { FilterProps } from './EmployeeFilter';

interface EmployeeFilterListProps {
  currentType?: '그룹' | '직급' | '등급' | null;
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  groupList: Object[];
  gradeList: Object[];
  positionList: Object[];
}

const EmployeeFilterList = ({
  currentType,
  className,
  groupList,
  gradeList,
  positionList,
  onClick,
}: EmployeeFilterListProps) => {
  const FILTERLIST: FilterProps[] = [
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
  background-color: #f4f4f4;
`;
