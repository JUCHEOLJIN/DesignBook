import React from 'react';
import styled from '@emotion/styled';

const EmptyList = () => {
  return (
    <EmptyWrapper>
      <Description>검색 결과가 없습니다.</Description>
    </EmptyWrapper>
  );
};

export default EmptyList;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.815rem 0;
`;

const Description = styled.p`
  color: #ccc;
  font-size: 14px;
`;
