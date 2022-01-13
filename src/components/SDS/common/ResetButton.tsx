/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from './Button';
import Icon from './Icon';
import theme from '../../../styles/Theme';
import styled from '@emotion/styled';

interface ResetButtonProps {}

const ResetButton = (props: ResetButtonProps) => {
  return (
    <ResetWrapper>
      <Icon icon="IcRefresh" size="1rem" />
      초기화
    </ResetWrapper>
  );
};

export default ResetButton;

const ResetWrapper = styled.div`
  display: flex;
  align-items: center;
  border: none;
  color: ${theme.colors.black};
  font-size: 14px;
  background: none;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: none;
  }
`;
