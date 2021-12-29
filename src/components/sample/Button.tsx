import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  type?: 'primary' | 'secondary' | 'tertiary';
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
}

/**
 * 'Button' 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.
 */
const Button = ({
  children,
  type = 'primary',
  size = 'medium',
  disabled,
  width,
  iconOnly,
  onClick,
}: ButtonProps) => (
  <ButtonWrapper
    css={[types[type], sizes[size], { width }]}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </ButtonWrapper>
);

export default Button;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  font-weight: 600;

  svg {
    width: 1em;
    margin-right: 1em;
  }

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${(props) => props.css}
`;

const types = {
  primary: css`
    background: #20c997;
    color: white;

    svg {
      fill: white;
    }

    &:hover {
      background: #38d9a9;
    }

    &:active {
      background: #12b886;
    }

    &:disabled {
      background: #aed9cc;
    }
  `,

  secondary: css`
    background: #e9ecef;
    color: #343a40;

    svg {
      fill: #343a40;
    }

    &:hover {
      background: #f1f3f5;
    }

    &:active {
      background: #dee2e6;
    }

    &:disabled {
      color: #c6d3e1;

      svg {
        fill: #c6d3e1;
      }
    }
  `,

  tertiary: css`
    background: none;
    color: #20c997;

    svg {
      fill: #20c997;
    }

    &:hover {
      background: #e6fcf5;
    }

    &:active {
      background: #c3fae8;
    }

    &:disabled {
      color: #bcd9d0;

      svg {
        fill: #bcd9d0;
      }
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
  `,
  big: css`
    width: 3rem;
  `,
};
