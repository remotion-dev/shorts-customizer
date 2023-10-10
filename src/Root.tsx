import {Composition, staticFile} from 'remotion';
import {
	FPS,
	GOAL_VIDEO_DURATION,
	SPONSORS,
	VIDEO_HEIGHT,
	VIDEO_WIDTH,
} from './infos';
import {Main} from './videos/Main';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="Goal"
				height={VIDEO_HEIGHT}
				width={VIDEO_WIDTH}
				component={Main}
				durationInFrames={GOAL_VIDEO_DURATION}
				fps={FPS}
				defaultProps={{
					firstName: 'Christian',
					lastName: 'Fassnacht',
					portraitAction: staticFile('fassnacht-removebg.png'),
					seasonGoal: 10,
					minute: 10,
					homeScore: 1,
					awayScore: 0,
					awayTeam: 'zurich',
					playerNumber: 99,
				}}
			/>
		</>
	);
};
