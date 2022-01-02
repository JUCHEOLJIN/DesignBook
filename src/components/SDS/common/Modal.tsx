/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

interface ModalProps {
  /**
   * Modal을 보여주고 true를 설정하세요.
   */
  isOpened?: boolean;

  /**
   * 모달의 제목을 설정할 수 있습니다.
   */
  title?: string;

  /**
   *  모달의 설명을 작성할 수 있습니다.
   */
  description?: string;

  /**
   *  안에 컨텐츠를 넣을 수 있습니다.
   */
  children?: React.ReactNode;

  /**
   * 버튼을 숨길 수 있습니다ㅣ.
   */
  isHideButtons?: boolean;

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

const Modal = ({
  isOpened,
  title,
  description,
  children,
  isHideButtons,
  cancellable,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
}: ModalProps) => {
  if (!isOpened) return null;

  return (
    <>
      <DarkLayer css={fullscreen} />
      <BoxWrapper css={fullscreen}>
        <Box>
          <Header>{title && <Title>{title}</Title>}</Header>
          {description && <Description>{description}</Description>}
          {children}
          {!isHideButtons && (
            <Footer>
              <ButtonGroup className="button-group">
                {cancellable && (
                  <Button theme="tertiary" onClick={onCancel} width="7rem">
                    {cancelText}
                  </Button>
                )}
                <Button width="7rem" onClick={onConfirm}>
                  {confirmText}
                </Button>
              </ButtonGroup>
            </Footer>
          )}
        </Box>
      </BoxWrapper>
    </>
  );
};

export default Modal;

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
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; // 임시
  max-width: 25rem; // 임시
  height: 25rem; // 임시
  border-radius: 8px;
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid #eaeaea;
  background-color: #fbfbfb;
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h3`
  color: #363636;
  font-size: 18px;
  line-height: 2.47;
`;

const Description = styled.p`
  width: 100%;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.625rem 0;
  border-top: 1px solid #eaeaea;
`;
