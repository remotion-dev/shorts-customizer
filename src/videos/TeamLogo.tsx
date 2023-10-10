import React from 'react';
import { Img } from 'remotion';

export const TeamLogo: React.FC<{
  team: string;
}> = ({ team }) => {
  return (
    <Img
      style={{
        height: 180,
        width: 180,
      }}
      src={`https://jonnyburger.s3.eu-central-1.amazonaws.com/team-${team}.png`}
    />
  );
};
