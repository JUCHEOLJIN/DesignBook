/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CheckItem, { CheckItemType } from './CheckItem';
import Input from './Input';
import Icon from './Icon';
import { valueStyle, inputStyle } from './GroupCheckList';
import EmptyList from './EmptyList';
import useDebounce from '../../hooks/useDebounce';

interface PositionCheckListProps {
  list: CheckItemType;
  value: string;
  onClick: (e: React.MouseEvent<HTMLElement>, name: string) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  closeSearch: (name: string) => void;
  className?: string;
}

const GradeCheckList = ({
  list,
  className,
  value,
  onClick,
  handleSearch,
  closeSearch,
}: PositionCheckListProps) => {
  const debounceValue = useDebounce(value);

  const getSearchResult = () => {
    const newList: CheckItemType = {};
    Object.keys(list).forEach((key: string) => {
      if (list[key]['userGradeName'].includes(debounceValue)) {
        newList[key] = { ...list[key] };
      }
    });
    return newList;
  };

  const newList = getSearchResult();

  return (
    <CheckListWrapper className={className}>
      <Input
        placeholder="검색어를 입력하세요"
        withIcon
        borderRadius="0"
        css={[inputStyle, value && valueStyle]}
        onChange={(e) =>
          handleSearch(e as React.ChangeEvent<HTMLInputElement>, 'userGrade')
        }
        onClose={() => closeSearch('userGrade')}
        value={value}
        withClose
      >
        <Icon icon="IcSearch" color="#cacaca" size="1.5rem" />
      </Input>
      {Object.values(newList).length > 0 ? (
        Object.keys(newList).map((key) => (
          <CheckItem
            checkItem={newList[key]}
            onClick={onClick}
            key={key}
            name="userGrade"
          />
        ))
      ) : (
        <EmptyList />
      )}
    </CheckListWrapper>
  );
};

export default GradeCheckList;

const CheckListWrapper = styled.div`
  width: 400px;
`;
