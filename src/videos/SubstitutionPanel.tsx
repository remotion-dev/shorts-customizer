import React from 'react';
import { Pattern } from './Pattern';
import { PlayerPortrait } from './PlayerPortrait';
import { YELLOW } from './colors';

export const SubstitutionPanel: React.FC<{
  type: 'up' | 'down';
  height: number;
  slide: number;
  backgroundColor: string;
  playerNumber: number;
  opacity: number;
  orientation: 'portrait' | 'square';
}> = ({
  type,
  height,
  slide,
  backgroundColor,
  orientation,
  playerNumber,
  opacity,
}) => {
  const actualHeight = height * 0.8;
  const slideOffset = slide * actualHeight;
  return (
    <div
      style={{
        width: '100%',
        backgroundColor,
        display: 'flex',
        height,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Pattern opacity={opacity} inverted={type === 'down'} />
      <PlayerPortrait
        height={actualHeight}
        playerNumber={playerNumber}
        orientiation={orientation}
        style={{ bottom: -slideOffset, position: 'absolute' }}
      ></PlayerPortrait>
    </div>
  );
};
