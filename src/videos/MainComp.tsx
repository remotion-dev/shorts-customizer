import React from 'react';
import {Series} from 'remotion';
import {Goal} from './Goal';
import {Minute} from './Minute';
import {NewScore} from './NewScore';
import {Score} from './Score';
import {z} from 'zod';
import {player} from './Spieler';

export const schema = z.object({
	player,
	seasonGoal: z.number().min(1),
	minute: z.number().min(1).max(90),
	awayScore: z.number(),
	homeScore: z.number(),
	awayTeam: z.string(),
});

export const MainComp: React.FC<z.infer<typeof schema>> = ({
	seasonGoal,
	minute,
	awayScore,
	awayTeam,
	homeScore,
	player,
}) => {
	return (
		<Series>
			<Series.Sequence durationInFrames={40}>
				<Minute minute={minute} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={70}>
				<Score />
			</Series.Sequence>
			<Series.Sequence durationInFrames={90}>
				<Goal player={player} seasonGoal={seasonGoal} />
			</Series.Sequence>
			<Series.Sequence durationInFrames={65}>
				<NewScore
					awayScore={awayScore}
					awayTeam={awayTeam}
					homeScore={homeScore}
				/>
			</Series.Sequence>
		</Series>
	);
};
