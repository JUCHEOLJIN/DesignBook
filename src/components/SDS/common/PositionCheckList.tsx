/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CheckItem, { CheckItemType } from './CheckItem';
import Input from './Input';
import Icon from './Icon';
import { valueStyle, inputStyle } from './GroupCheckList';
import useDebounce from '../../hooks/useDebounce';
import EmptyList from './EmptyList';

interface PositionCheckListProps {
  list: CheckItemType;
  value: string;
  onClick: (e: React.MouseEvent<HTMLElement>, name: string) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  closeSearch: (name: string) => void;
  className?: string;
}

const PositionCheckList = ({
  list,
  value,
  className,
  onClick,
  handleSearch,
  closeSearch,
}: PositionCheckListProps) => {
  const debounceValue = useDebounce(value);

  const getSearchResult = () => {
    const newList: CheckItemType = {};
    Object.keys(list).forEach((key: string) => {
      if (list[key]['positionName'].includes(debounceValue)) {
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
          handleSearch(e as React.ChangeEvent<HTMLInputElement>, 'position')
        }
        onClose={() => closeSearch('position')}
        value={value}
        withClose
      >
        <Icon icon="IcSearch" color="#cacaca" size="1.5rem" />
      </Input>
      <ul>
        {Object.values(newList).length > 0 ? (
          Object.keys(newList).map((key) => (
            <CheckItem
              checkItem={newList[key]}
              onClick={onClick}
              name="position"
              key={key}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
    </CheckListWrapper>
  );
};

export default PositionCheckList;

const CheckListWrapper = styled.div`
  width: 400px;
`;
