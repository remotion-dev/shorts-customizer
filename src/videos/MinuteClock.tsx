import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFont } from './use-font';

export const MinuteClock: React.FC<{
  minute: number;
}> = ({ minute }) => {
  useFont();
  return (
    <AbsoluteFill>
      <div
        style={{
          height: 120,
          width: 120,
          right: 40,
          top: 40,
          position: 'absolute',
          background: '#222',
          color: 'white',
          fontSize: 70,
          fontFamily: 'YB',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {minute}
        {"'"}
      </div>
    </AbsoluteFill>
  );
};
