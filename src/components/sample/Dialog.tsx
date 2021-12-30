import React from 'react';
import { css } from '@emotion/react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import styled from '@emotion/styled';

interface DialogProps {
  /**
   * 보여주고 싶다면 true을 설정해주세요
   */
  visible: boolean;
  /**
   *  제목을 설정할 수 있습니다.
   */
  title?: string;
  /**
   *  설명을 설정할 수 있습니다.
   */
  description?: string;
  /**
   *  안에 컨텐츠를 넣을 수 있습니다.
   */
  children?: React.ReactNode;
  /**
   *  버튼을 숨길 수 있습니다.
   */
  hideButtons?: boolean;
  /**
   * 취소 버튼을 숨길 수 있습니다.
   */
  cancellable?: boolean;
  /**
   *  취소 버튼의 내용을 설정할 수 있습니다.
   */
  cancelText: string;
  /**
   * 확인 버튼의 내용을 설정할 수 있습니다.
   */
  confirmText: string;
  /**
   * 취소 버튼 클릭 시 동작을 설정할 수 있습니다.
   */
  onCancel?: () => void;
  /**
   *  확인 버튼 클릭 시 동작을 설정할 수 있습니다.
   */
  onConfirm?: () => void;
}

const Dialog = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText = '취소',
  confirmText = '확인',
  children,
  onCancel,
  onConfirm,
}: DialogProps) => {
  if (!visible) return null;

  return (
    <>
      <DarkLayer css={fullscreen} />
      <BoxWrapper css={fullscreen}>
        <Box>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
          {children}
          {!hideButtons && (
            <ButtonGroup className="button-group" rightAlign>
              {cancellable && (
                <Button type="tertiary" onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button onClick={onConfirm}>{confirmText}</Button>
            </ButtonGroup>
          )}
        </Box>
      </BoxWrapper>
    </>
  );
};

export default Dialog;

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DarkLayer = styled.div`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  ${(props) => props.css}
`;

const BoxWrapper = styled.div`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.css}
`;

const Box = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  .button-group {
    margin-top: 3rem;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #343a40;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin: 0;
  color: #868e96;
`;
