import React from 'react';
import { css } from '@emotion/react';
import * as icons from '../../assets/SVG';

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
   * 커스텀을 위한 클래스 명
   */
  className?: string;
}

const Icon = ({ icon, color, size = '1em', className }: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <>
      <SVGIcon fill={color} width={size} height={size} className={className} />
    </>
  );
};

export default Icon;
