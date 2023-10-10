import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { ChevronDown } from './ChevronDown';

export const Pattern: React.FC<{
  inverted: boolean;
  opacity: number;
}> = ({ inverted, opacity }) => {
  const { height } = useVideoConfig();
  const frame = useCurrentFrame();
  const translateY = interpolate(frame, [0, 300], [0, height]);
  return (
    <AbsoluteFill
      style={{
        transform: `translateY(${translateY * (inverted ? -1 : 1)}px)`,
        height: 2000,
        opacity,
      }}
    >
      <div style={{ marginTop: -1000 }}></div>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
      <ChevronDown inverted={inverted}></ChevronDown>
    </AbsoluteFill>
  );
};
