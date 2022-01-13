/** @jsxImportSource @emotion/react */
import React, { useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Icon from './Icon';

interface InputProps {
  /**
   * 아이콘 등이 들어올 수 있습니다.
   */
  children?: React.ReactNode;

  /**
   * 입력 전에 보여줄 메세지를 적어주세요.
   */
  placeholder?: string;

  /**
   *  입력된 값입니다. 초기 값을 줄 수 있습니다.
   */
  value?: string;

  /**
   * 인풋의 테마를 설정할 수 있습니다.
   */
  theme?: 'primary' | 'secondary';

  /**
   *  커스텀을 위해 클래스명을 제공합니다.
   */
  className?: string;

  /**
   * border-radius 를 조절할 수 있습니다.
   */
  borderRadius?: string;

  /**
   * width 를 조절할 수 있습니다.
   */
  width?: string;

  /**
   * 아이콘과 함께 보여주는 경우에 설정합니다.
   */
  withIcon?: boolean;

  /**
   *  입력을 지울 수 있는 버튼을 함께 보여주는 경우에 설정합니다.
   */
  withClose?: boolean;

  /**
   *  입력 시에 발생하는 동작입니다.
   */
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   *  입력을 지울 수 있는 동작입니다.
   */
  onClose?: () => void;
}

const Input = ({
  placeholder,
  value,
  theme = 'primary',
  className,
  borderRadius,
  width,
  withIcon,
  withClose,
  children,
  onChange,
  onClose,
}: InputProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeAndBlur = useCallback(() => {
    onClose && onClose();
    buttonRef?.current?.blur();
  }, []);

  return (
    <InputBox
      css={[{ borderRadius, width }, themes[theme], withIcon && withIconStyle]}
      className={className}
    >
      <InputBar value={value} placeholder={placeholder} onChange={onChange} />
      {children}
      {withClose && (
        <button css={closeBtnStyle} onClick={closeAndBlur} ref={buttonRef}>
          <Icon icon="IcSearchCloseBtn" size="2rem" color="" />
        </button>
      )}
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.5rem 0.875em 0.5rem 0.875rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;

  svg {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
  }

  &:hover,
  &:focus-within {
    border: ${({ theme }) => '1px solid ' + theme.colors.shoplBlue};
  }

  &:focus-within {
    button {
      display: block;
    }
  }
`;

const InputBar = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  color: #333;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }
`;

const themes = {
  primary: css`
    background-color: #fff;
  `,
  secondary: css`
    background-color: #fbfbfb;

    input::placeholder {
      color: #ccc;
    }

    &:focus-within {
      background-color: #fff;
    }
  `,
};

const withIconStyle = css`
  padding: 0.5rem 0.875rem 0.5rem 3.875rem;
`;

const closeBtnStyle = css`
  display: none;
  position: absolute;
  right: 3.5rem;
  background: transparent;
  cursor: pointer;
`;
