import React from 'react';
import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Background} from './Background';

const player: React.CSSProperties = {
	position: 'absolute',
	bottom: 0,
	right: '-5%',
};

export const DefaultSpieler: React.FC<{
	playerNumber: number;
	portrait: string;
}> = ({portrait, playerNumber}) => {
	const {fps, durationInFrames, height} = useVideoConfig();
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

	let translateX = 0;
	let translateY = 0;

	const isSquare = height === 1080;

	if (playerNumber === 30) {
		playerScale *= 2;
		translateX += 100;
		translateY += 200;
	}

	if (playerNumber === 20) {
		playerScale *= 1.1;
		if (isSquare) {
			translateY += 300;
			translateX += 200;
		}
	}
	if (playerNumber === 6) {
		playerScale *= 1.6;
		if (isSquare) {
			translateY += 200;
			translateX += 100;
		}
	}
	if (playerNumber === 16) {
		if (isSquare) {
			playerScale *= 0.8;
			translateX += 340;
		}
	}
	if (playerNumber === 26) {
		if (isSquare) {
			playerScale *= 2;
		} else {
			playerScale *= 4;
			translateY += 0;
		}
	}

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
					...player,
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
					...player,
					transform: `scale(${playerScale}) translateX(${translateX}px) translateY(${translateY}px)`,
					transformOrigin: '75% 75%',
					opacity: opacity * 0.4,
				}}
				src={portrait}
			/>
		</>
	);
};
