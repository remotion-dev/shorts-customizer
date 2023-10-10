import {z} from 'zod';
import React from 'react';
import {Background} from './Background';
import {player, Spieler} from './Spieler';

export const Goal: React.FC<{
	player: z.infer<typeof player>;
	seasonGoal: number;
}> = ({player, seasonGoal}) => {
	return (
		<Background>
			<Spieler player={player} seasonGoal={seasonGoal} />
		</Background>
	);
};
