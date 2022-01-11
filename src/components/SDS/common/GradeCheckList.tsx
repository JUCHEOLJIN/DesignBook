/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CheckItem, { CheckItemType } from './CheckItem';
import Input from './Input';
import Icon from './Icon';
import useDebounce from '../../hooks/useDebounce';

interface PositionCheckListProps {
  list: CheckItemType;
  value: string;
  onClick: (e: React.MouseEvent<HTMLElement>, name: string) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  className?: string;
}

const GradeCheckList = ({
  list,
  className,
  value,
  onClick,
  handleSearch,
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
        css={inputStyle}
        onChange={(e) =>
          handleSearch(e as React.ChangeEvent<HTMLInputElement>, 'userGrade')
        }
        value={value}
      >
        <Icon icon="IcSearch" color="#cacaca" size="1.5rem" />
      </Input>
      {Object.keys(newList).map((key) => (
        <CheckItem
          checkItem={newList[key]}
          onClick={onClick}
          key={key}
          name="userGrade"
        />
      ))}
    </CheckListWrapper>
  );
};

export default GradeCheckList;

const CheckListWrapper = styled.div`
  width: 400px;
`;

const inputStyle = css`
  height: 60px;
  border: none;
  border-bottom: 1px solid #eaeaea;

  input::placeholder {
    color: #ccc;
  }

  &:hover {
    border: none;
    border-bottom: 1px solid #eaeaea;
  }

  &:focus-within {
    padding: 0.5rem 0.875em 0.5rem 0.875rem;
    border: none;
    border-bottom: 1px solid #eaeaea;

    input::placeholder {
      color: #fff;
    }

    svg {
      display: none;
    }
  }
`;
