import React from 'react';
import { YELLOW } from './colors';

export const ArrowUp: React.FC<{
  style: React.CSSProperties;
}> = ({ style }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-alt-up"
      className="svg-inline--fa fa-arrow-alt-up fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style={{ height: 200, ...style }}
    >
      <path
        fill={YELLOW}
        d="M272 480h-96c-13.3 0-24-10.7-24-24V256H48.2c-21.4 0-32.1-25.8-17-41L207 39c9.4-9.4 24.6-9.4 34 0l175.8 176c15.1 15.1 4.4 41-17 41H296v200c0 13.3-10.7 24-24 24z"
      ></path>
    </svg>
  );
};
