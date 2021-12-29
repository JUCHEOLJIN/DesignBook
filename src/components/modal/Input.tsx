import styled from '@emotion/styled';
import React from 'react';

interface InputProps {
  /**
   * 입력 전에 보여줄 메세지를 적어주세요.
   */
  placeholder?: string;

  /**
   *  입력된 값입니다. 초기 값을 줄 수 있습니다.
   */
  value?: string;

  /**
   *  입력 시에 발생하는 동작입니다.
   */
  onChange?: () => void;
}

const Input = ({ placeholder, onChange, value }: InputProps) => (
  <InputBar onChange={onChange} value={value} placeholder={placeholder} />
);

export default Input;

const InputBar = styled.input`
  width: 100%;
  max-width: 600px;
  margin: 1rem;
  padding: 0.5rem 18.563rem 0.5rem 0.875rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  color: #333;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }

  &:hover,
  &:focus {
    border: ${({ theme }) => '1px solid ' + theme.colors.shoplBlue};
  }
`;
