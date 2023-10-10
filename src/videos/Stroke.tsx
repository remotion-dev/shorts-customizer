import React from 'react';
import {
	interpolate,
	interpolateColors,
	random,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import SimplexNoise from 'simplex-noise';
import {VIDEO_HEIGHT, VIDEO_WIDTH} from '../infos';
import {YELLOW} from './colors';

const n = new SimplexNoise();

export const Stroke: React.FC<{
	seed: number;
}> = ({seed}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, width: w, height: h} = useVideoConfig();
	const HEIGHT = h === VIDEO_HEIGHT ? 1920 : h;
	const WIDTH = w === VIDEO_WIDTH ? 1080 : w;

	const size = Math.sqrt(WIDTH * WIDTH + HEIGHT * HEIGHT);

	const color = YELLOW;

	const height = size;
	const width = size;
	const randomValue = n.noise2D(0, seed / 20) * 2 - 1;

	const radius = random(seed + 'i') * 800 + 300;
	const circumference = radius * Math.PI * 2;
	const delay = random(seed) * durationInFrames;

	const enterFrame = frame - delay;

	const offset = interpolate(enterFrame, [0, 25], [0, 800]);
	const translateX = Math.cos(randomValue * Math.PI * 2) * offset;
	const translateY = Math.sin(randomValue * Math.PI * 2) * offset;

	const surroundWidth = 10;
	const point1 = [
		Math.cos(randomValue * Math.PI * 2) * (radius - 150) + width / 2,
		Math.sin(randomValue * Math.PI * 2) * (radius - 150) + height / 2,
	];
	const point2 = [
		Math.cos(randomValue * Math.PI * 2) * radius + width / 2,
		Math.sin(randomValue * Math.PI * 2) * radius + height / 2,
	];
	const shift = surroundWidth / circumference;
	const point3 = [
		Math.cos((randomValue + shift) * Math.PI * 2) * radius + width / 2,
		Math.sin((randomValue + shift) * Math.PI * 2) * radius + height / 2,
	];

	const opacity = interpolate(enterFrame, [0, 15], [0, 1], {
		extrapolateRight: 'clamp',
	});

	if (frame < delay) return null;

	return (
		<path
			d={`
  M ${point1.join(' ')}
  L ${point2.join(' ')}
  L ${point3.join(' ')} z
  `}
			style={{
				transform: `translateX(${translateX}px) translateY(${translateY}px)`,
				opacity,
			}}
			fill={color}
		/>
	);
};
