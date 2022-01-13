/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Button from './Button';
import Icon from './Icon';
import theme from '../../../styles/Theme';

interface ResetButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <Button theme="quaternary" css={buttonStyled} onClick={onClick}>
      <Icon icon="IcRefresh" />
      초기화
    </Button>
  );
};

export default ResetButton;

const buttonStyled = css`
  border: none;
  color: ${theme.colors.black};
  font-size: 14px;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: none;
  }
`;
