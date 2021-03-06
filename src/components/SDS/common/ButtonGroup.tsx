/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonGroupProps {
  /**
   * 버튼을 보여줄 방향
   */
  direction?: 'row' | 'column';
  /**
   * 버튼을 우측에 보여줍니다.
   */
  rightAlign?: boolean;
  /**
   * 버튼과 버튼사이의 간격을 설정합니다.
   */
  gap?: number | string;
  /**
   * 버튼 그룹에서 보여줄 버튼들
   */
  children: React.ReactNode;
  /**
   *  스타일 커스터마이징 하고싶을 때 사용
   */
  className?: string;
}

const ButtonGroup = ({
  direction = 'row',
  rightAlign,
  children,
  gap = '0.5rem',
  className,
}: ButtonGroupProps) => {
  return (
    <Wrapper
      css={[gapStyle(direction, gap), rightAlign && rightAlignStyle]}
      direction={direction}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

export default ButtonGroup;

const Wrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${(props) => props.css}
`;

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap,
    },
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;
