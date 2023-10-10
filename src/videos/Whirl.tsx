import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {VIDEO_HEIGHT, VIDEO_WIDTH} from '../infos';
import {Stroke} from './Stroke';

export const Whirl: React.FC = () => {
	const {durationInFrames, height, width} = useVideoConfig();

	const HEIGHT = height === VIDEO_HEIGHT ? 1920 : height;
	const WIDTH = width === VIDEO_WIDTH ? 1080 : width;
	const frame = useCurrentFrame();
	const rotation = interpolate(frame, [0, durationInFrames], [0, Math.PI]);
	const size = Math.sqrt(WIDTH * WIDTH + HEIGHT * HEIGHT);
	const opacity = interpolate(
		frame,
		[0, 10, durationInFrames - 30, durationInFrames - 1],
		[0, 1, 1, 0]
	);
	return (
		<AbsoluteFill
			style={{
				width: size,
				height: size,
				opacity,
				transform: `translateY(${(HEIGHT - size) / 2}px) translateX(${
					(WIDTH - size) / 2
				}px) rotate(${rotation}rad)`,
			}}
		>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				{new Array(1000).fill(1).map((key, i) => {
					return <Stroke key={i} seed={i} />;
				})}
			</svg>
		</AbsoluteFill>
	);
};
