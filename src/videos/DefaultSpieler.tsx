import {z} from 'zod';
import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {player} from './Spieler';

const playe: React.CSSProperties = {
	position: 'absolute',
	bottom: 0,
	right: '-5%',
};

export const DefaultSpieler: React.FC<{
	portrait: string;
	player: z.infer<typeof player>;
}> = ({portrait, player}) => {
	const {fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	let playerScale =
		interpolate(frame, [0, 50], [1.1, 1.15]) *
		interpolate(spr, [0, 1], [0.9, 1.05]);

	if (player === 'Jean-Pierre Nsame') {
		playerScale *= 3;
	}

	const translateX = 0;
	const translateY = 0;

	const opacity = interpolate(
		frame,
		[0, 10, durationInFrames - 10, durationInFrames - 1],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<>
			<Img
				style={{
					...playe,
					mixBlendMode: 'color-dodge',
					transform: `scale(${playerScale}) translateX(${translateX}px) translateY(${translateY}px)`,
					transformOrigin: '75% 75%',
					filter: `drop-shadow(0 0 20px black)`,
					opacity,
				}}
				src={portrait}
			/>
			<Img
				style={{
					...playe,
					transform: `scale(${playerScale}) translateX(${translateX}px) translateY(${translateY}px)`,
					transformOrigin: '75% 75%',
					opacity: opacity * 0.4,
				}}
				src={portrait}
			/>
		</>
	);
};
