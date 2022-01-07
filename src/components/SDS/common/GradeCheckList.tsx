/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CheckItem, { CheckItemType } from './CheckItem';
import Input from './Input';
import Icon from './Icon';

interface PositionCheckListProps {
  list: CheckItemType[];
  onClick: () => void;
  className?: string;
}

const GradeCheckList = ({
  list,
  className,
  onClick,
}: PositionCheckListProps) => {
  return (
    <CheckListWrapper className={className}>
      <Input
        placeholder="검색어를 입력하세요"
        withIcon
        borderRadius="0"
        css={inputStyle}
      >
        <Icon icon="IcSearch" color="#cacaca" size="1.5rem" />
      </Input>
      {list.map((item, idx) => (
        <CheckItem checkItem={item} onClick={onClick} key={idx} />
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
