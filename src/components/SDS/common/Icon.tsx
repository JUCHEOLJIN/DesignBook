/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import * as icons from '../../../assets/icons';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

interface IconProps {
  /**
   * 사용 할 아이콘 타입
   */
  icon: IconType;
  /**
   * 아이콘 색상
   */
  color?: string;
  /**
   *  아이콘 크기
   */
  size?: string | number;
  /**
   * 채워진 아이콘인지 아닌 아이콘인지를 설정합니다. 색상이 설정된 아이콘을 가져다 쓰는 것을 권장합니다.
   */
  isFilled?: boolean;
  /**
   * 커스텀을 위한 클래스 명
   */
  className?: string;
}

const Icon = ({
  icon,
  color,
  size = '1em',
  isFilled = false,
  className,
}: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <>
      <SVGIcon
        css={[{ width: size, height: size }, customColor(isFilled, color)]}
        className={className}
      />
    </>
  );
};

export default Icon;

const customColor = (isFilled: boolean, color: string | undefined) => {
  if (!color) {
    return;
  }

  if (isFilled) {
    return css`
      * {
        stroke: ${color};
      }
    `;
  }
  return css`
    path {
      fill: ${color};
    }
  `;
};
