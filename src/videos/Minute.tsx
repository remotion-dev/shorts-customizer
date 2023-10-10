import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Background } from './Background';
import { YELLOW } from './colors';
import { useFont } from './use-font';

export const Minute: React.FC<{
  minute: number;
}> = ({ minute }) => {
  useFont();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog =
    spring({
      fps,
      frame: frame,
      config: {
        damping: 200,
      },
    }) +
    frame / 1000;
  return (
    <Background>
      <AbsoluteFill
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `scale(${interpolate(prog, [0, 1], [1, 1.2])})`,
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 400,
            fontFamily: 'YB',
            textAlign: 'center',
            lineHeight: 1,
            marginLeft: -20,
          }}
        >
          {Math.max(minute, 1)}.
        </div>
        <div
          style={{
            color: YELLOW,
            fontSize: 100,
            fontFamily: 'YB',
            textAlign: 'center',
            lineHeight: 1,
            letterSpacing: '0.3em',
          }}
        >
          Minute
        </div>
      </AbsoluteFill>
    </Background>
  );
};
