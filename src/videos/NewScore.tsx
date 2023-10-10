import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Background} from './Background';
import {TeamLogo} from './TeamLogo';
import {useFont} from './use-font';

const container: React.CSSProperties = {
	width: 120,
	display: 'block',
	textAlign: 'center',
	position: 'relative',
};

export const NewScore: React.FC<{
	awayTeam: string;
	homeScore: number;
	awayScore: number;
}> = ({awayTeam, homeScore, awayScore}) => {
	useFont();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(frame, [0, 10], [0, 1]);

	const animation = spring({
		fps,
		frame: frame - 8,
		config: {
			damping: 200,
		},
	});

	const oldTranslateY = interpolate(animation, [0, 1], [0, -200]);
	const newTranslateY = interpolate(animation, [0, 1], [200, 0]);

	return (
		<Background>
			<AbsoluteFill
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					opacity,
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						color: 'white',
						fontFamily: 'YB',
						fontSize: 200,
						justifyContent: 'center',
						alignItems: 'center',
						overflow: 'hidden',
					}}
				>
					<TeamLogo team="yb" />
					<div style={{width: 30}} />
					<div style={container}>
						<div
							style={{
								width: 120,
								top: 0,
								transform: `translateY(${oldTranslateY}px)`,
							}}
						>
							{homeScore - 1}
						</div>
						<div
							style={{
								width: 120,
								top: 0,
								position: 'absolute',
								transform: `translateY(${newTranslateY}px)`,
							}}
						>
							{homeScore}
						</div>
					</div>
					<div style={container}>-</div>
					<div style={container}>{awayScore}</div>
					<div style={{width: 30}} />
					<TeamLogo team={awayTeam} />
				</div>
			</AbsoluteFill>
		</Background>
	);
};
