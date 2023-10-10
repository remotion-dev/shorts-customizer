import React from 'react';
import {SevenTwentyPScaler} from './1080pScaler';
import {MainComp} from './MainComp';

export const Main: React.FC<{
	firstName: string;
	lastName: string;
	seasonGoal: number;
	minute: number;
	awayScore: number;
	homeScore: number;
	awayTeam: string;
	portraitAction: string;
	playerNumber: number;
}> = (props) => {
	return (
		<SevenTwentyPScaler>
			<MainComp {...props} />
		</SevenTwentyPScaler>
	);
};
