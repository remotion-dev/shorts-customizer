import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Background } from './Background';
import { Publikum } from './Publikum';
import { Whirl } from './Whirl';
import { useFont } from './use-font';

export const Score: React.FC = () => {
  useFont();
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const progress =
    spring({
      fps,
      frame,
      config: {
        mass: 0.3,
        damping: 200,
      },
    }) +
    frame / 3000;
  const scale = interpolate(progress, [0, 1], [10, 1]);
  const offset = interpolate(progress, [0, 1], [-216, 0]);
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames - 1],
    [1, 0]
  );

  const ole = (i: number) =>
    interpolate(
      spring({
        fps,
        frame: frame - i * 4,
      }),
      [0, 0.7, 1],
      [200, 280, 200]
    );
  return (
    <Background>
      <AbsoluteFill
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Whirl />
        <Img
          src="https://jonnyburger.s3.eu-central-1.amazonaws.com/splash.png"
          style={{
            mixBlendMode: 'soft-light',
            position: 'absolute',
            transform: `scale(${progress})`,
            opacity: fadeOut,
          }}
        />
        <h1
          style={{
            fontSize: 200,
            color: 'white',
            fontFamily: 'YB',
            transform: `scale(${scale})`,
            position: 'relative',
            marginLeft: offset,
            opacity: fadeOut,
          }}
        >
          {'GOOOOOAL!!'.split('').map((letter, i) => {
            return (
              <span
                key={i}
                style={{
                  fontSize: ole(i),
                }}
              >
                {letter}
              </span>
            );
          })}
        </h1>
      </AbsoluteFill>
    </Background>
  );
};
