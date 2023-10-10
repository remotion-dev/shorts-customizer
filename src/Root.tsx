import {Composition, staticFile} from 'remotion';
import {FPS, GOAL_VIDEO_DURATION, VIDEO_HEIGHT, VIDEO_WIDTH} from './infos';
import {Main} from './videos/Main';
import {schema} from './videos/MainComp';

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
				schema={schema}
				defaultProps={{
					seasonGoal: 10,
					minute: 10,
					homeScore: 1,
					awayScore: 0,
					awayTeam: 'zurich',
					player: 'Christian Fassnacht',
				}}
			/>
		</>
	);
};
