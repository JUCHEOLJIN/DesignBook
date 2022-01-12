/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Input from './Input';
import Icon from './Icon';
import GroupCheckItem from './GroupCheckItem';
import CheckItem, { CheckItemType } from './CheckItem';
import handleData from '../../../utils/handleData';
import useDebounce from '../../hooks/useDebounce';

interface GroupCheckListProps {
  list: CheckItemType;
  value: string;
  isTopDownCheck: boolean;
  closedToggles?: string[];
  onClick: (e: React.MouseEvent<HTMLElement>, name: string) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  handleTopDownCheck: () => void;
  setTargetList: (name: string, checked: CheckItemType) => void;
  handleToggle: (id: string) => void;
  className?: string;
}

const GroupCheckList = ({
  list,
  value,
  isTopDownCheck,
  closedToggles,
  className,
  onClick,
  handleSearch,
  handleTopDownCheck,
  handleToggle,
  setTargetList,
}: GroupCheckListProps) => {
  const debounceValue = useDebounce(value);

  const getSearchResult = () => {
    const newList: CheckItemType = {};
    Object.keys(list).forEach((key: string) => {
      if (list[key]['groupName'].includes(debounceValue)) {
        newList[key] = { ...list[key] };
      }
    });
    return newList;
  };

  const newList = getSearchResult();

  const onTopDownClick = (e: React.MouseEvent<HTMLElement>, name: string) => {
    const { id } = e?.currentTarget as HTMLLIElement;
    const listArray = Object.values(list).map((value) => {
      if (!value.groupDepth.includes(id)) {
        return value;
      }
      return { ...value, isChecked: !list[id].isChecked };
    });
    const newListArray = handleData(listArray, 'group');
    setTargetList('topDownGroup', newListArray);
  };

  const handleCheck = (e: React.MouseEvent<HTMLElement>, name: string) => {
    if (!isTopDownCheck) {
      onClick(e, name);
    } else {
      onTopDownClick(e, name);
    }
  };

  return (
    <CheckListWrapper className={className}>
      <Input
        placeholder="검색어를 입력하세요"
        withIcon
        borderRadius="0"
        css={inputStyle}
        onChange={(e) =>
          handleSearch(e as React.ChangeEvent<HTMLInputElement>, 'group')
        }
        value={value}
      >
        <Icon icon="IcSearch" color="#cacaca" size="1.5rem" />
      </Input>
      {!value && (
        <OptionBox>
          <BtnWrapper onClick={handleTopDownCheck}>
            <OptionBtn isTopDownCheck={isTopDownCheck}>
              <div />
            </OptionBtn>
            <OptionLabel isTopDownCheck={isTopDownCheck}>
              하위그룹도 한번에 체크
            </OptionLabel>
          </BtnWrapper>
        </OptionBox>
      )}
      <ul>
        {!value
          ? Object.keys(newList).map((key) => (
              <GroupCheckItem
                checkItem={newList[key]}
                list={list}
                onClick={handleCheck}
                key={key}
                name="group"
                closedToggles={closedToggles}
                handleToggle={handleToggle}
              />
            ))
          : Object.keys(newList).map((key) => (
              <CheckItem
                checkItem={newList[key]}
                onClick={onClick}
                key={key}
                name="group"
              />
            ))}
      </ul>
    </CheckListWrapper>
  );
};

export default GroupCheckList;

const CheckListWrapper = styled.div`
  width: 540px;
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

const OptionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 48px;
  padding-right: 1.25rem;
  border-bottom: 1px solid #eaeaea;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const OptionBtn = styled.div<{ isTopDownCheck: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 50%;

  div {
    width: 8px;
    height: 8px;
    background-color: ${({ theme, isTopDownCheck }) =>
      !isTopDownCheck ? theme.colors.lightGrey : theme.colors.shoplBlue};
    border-radius: 50%;
  }
`;

const OptionLabel = styled.span<{ isTopDownCheck: boolean }>`
  margin-left: 0.5rem;
  color: ${({ theme, isTopDownCheck }) =>
    !isTopDownCheck ? '#999' : theme.colors.shoplBlue};
  font-size: 14px;
`;
