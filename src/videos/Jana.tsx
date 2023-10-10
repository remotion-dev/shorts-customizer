import React from 'react';
import {
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from 'remotion';
import { Background } from './Background';

const player: React.CSSProperties = {
  position: 'absolute',
  right: '25%',
  bottom: '-10%',
};

export const Jana: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames, height } = useVideoConfig();
  const spr = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0]
  );

  return (
    <>
      <Video
        src="https://jonnyburger.s3.eu-central-1.amazonaws.com/jana.webm"
        style={{
          mixBlendMode: 'lighten',
          opacity: fadeOut,
          transform:
            height === 1080
              ? `translateY(-400px) translateX(300px)`
              : undefined,
        }}
      ></Video>
    </>
  );
};
