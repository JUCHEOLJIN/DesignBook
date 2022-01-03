/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import emotionTheme from '../../../styles/Theme';

interface ButtonProps {
  /**
   *  버튼 안에 들어갈 내용
   */
  children: React.ReactNode;
  /**
   * 클릭 했을 때 일어나는 기능
   */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   *  버튼의 생김새를 설정합니다.
   */
  theme?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  /**
   *  버튼의 크기를 설정합니다.
   */
  size?: 'small' | 'medium' | 'big';
  /**
   * 버튼을 비활성화 시킵니다.
   */
  disabled?: boolean;
  /**
   * 버튼의 너비를 임의로 설정합니다.
   */
  width?: string;
  /**
   * 버튼에서 아이콘만 보여줄 때 이 값을 `true` 로 설정하세요/
   */
  iconOnly?: boolean;
  /**
   * 커스텀을 위한 클래스 네임을 제공합니다.
   */
  className?: string;
}

const Button = ({
  children,
  theme = 'primary',
  size = 'medium',
  disabled,
  width,
  iconOnly,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      css={[themes[theme], sizes[size], { width }]}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background: #fff;
  color: #fff;
  font-size: 14px;
  line-height: 1.57;
  outline: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    background-color: ${emotionTheme.button.primary.background};
    color: #fff;

    &:hover {
      background-color: #2d89e4;
    }

    &:active {
      background-color: #236bb1;
    }

    &:disabled {
      background-color: #eaeaea;
      color: #ccc;
    }
  `,

  secondary: css`
    background-color: ${emotionTheme.button.secondary.background};

    &:disabled {
      background-color: #eaeaea;
      color: #ccc;
    }
  `,

  tertiary: css`
    border: 1px solid ${emotionTheme.colors.shoplBlue};
    background-color: ${emotionTheme.button.tertiary.background};
    color: ${emotionTheme.colors.shoplBlue};

    &:hover {
      background-color: ${emotionTheme.colors.paleGray};
    }

    &:disabled {
      border: none;
      background-color: #eaeaea;
      color: #ccc;
    }
  `,

  quaternary: css`
    border: 1px solid ${emotionTheme.colors.gray};
    color: ${emotionTheme.colors.gray};

    &:hover {
      background-color: ${emotionTheme.colors.stone};
    }

    &:disabled {
      border: none;
      background-color: #eaeaea;
      color: #ccc;
    }
  `,
};

const sizes = {
  small: css`
    height: 2.25rem;
    padding: 0.438rem 1rem;
  `,
  medium: css`
    height: 2.5rem;
    padding: 0.563rem 1rem;
  `,
  big: css`
    height: 3rem;
    padding: 0.875rem 1.25rem;
  `,
};
