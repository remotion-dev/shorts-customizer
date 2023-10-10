import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from './Background';
import { Spieler } from './Spieler';

export const Goal: React.FC<{
  firstName: string;
  lastName: string;
  playerNumber: number;
  seasonGoal: number;
  portraitAction: string;
}> = ({ firstName, lastName, seasonGoal, playerNumber, portraitAction }) => {
  return (
    <Background>
      <Spieler
        firstName={firstName}
        lastName={lastName}
        seasonGoal={seasonGoal}
        portraitAction={portraitAction}
        playerNumber={playerNumber}
      />
    </Background>
  );
};
