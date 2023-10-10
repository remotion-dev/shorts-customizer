import {staticFile} from 'remotion';
import {z} from 'zod';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Background} from './Background';
import {DefaultSpieler} from './DefaultSpieler';
import {SlidingText} from './SlidingText';
import {YELLOW} from './colors';
import {useFont} from './use-font';

export const player = z.enum(['Christian Fassnacht', 'Jean-Pierre Nsame']);

function getOrdinalNum(n: number): string {
	return (
		n +
		(n > 0
			? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
			: '')
	);
}

export const Spieler: React.FC<{
	player: z.infer<typeof player>;
	seasonGoal: number;
}> = ({player, seasonGoal}) => {
	useFont();

	const portraitAction =
		player === 'Jean-Pierre Nsame'
			? staticFile('nsame.png')
			: staticFile('fassnacht-removebg.png');

	const firstName =
		player === 'Christian Fassnacht' ? 'CHRISTIAN' : 'JEAN-PIERRE';
	const lastName = player === 'Christian Fassnacht' ? 'FASSNACHT' : 'NSAME';

	return (
		<AbsoluteFill>
			<AbsoluteFill>
				<Background>
					<AbsoluteFill>
						<DefaultSpieler player={player} portrait={portraitAction} />
					</AbsoluteFill>
				</Background>
			</AbsoluteFill>
			<SlidingText delay={0} fontSize={200} color="white" left={100} top={120}>
				{firstName}
			</SlidingText>
			<SlidingText delay={3} fontSize={200} color="white" left={100} top={320}>
				{lastName}
			</SlidingText>
			<SlidingText delay={30} fontSize={80} color={YELLOW} left={100} top={530}>
				{getOrdinalNum(seasonGoal)} SEASON GOAL
			</SlidingText>
		</AbsoluteFill>
	);
};
