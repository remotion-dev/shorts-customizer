import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SlidingText: React.FC<{
	left: number;
	top: number;
	color: string;
	fontSize: number;
	delay: number;
	children: React.ReactNode;
}> = ({left, delay, top, color, children, fontSize}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const trans = spring({
		fps,
		frame: frame - delay,
		config: {
			mass: 0.5,
			damping: 200,
		},
	});
	const fadeOut = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames - 1],
		[1, 0]
	);
	return (
		<div
			style={{
				position: 'absolute',
				height: fontSize * 0.87,
				width: '100%',
				left,
				top,
				overflow: 'hidden',
				opacity: fadeOut,
			}}
		>
			<h1
				style={{
					color,
					fontSize,
					fontFamily: 'YB',
					lineHeight: 1,
					marginTop: 0,
					transform: `translateY(${interpolate(trans, [0, 1], [200, 0])}px)`,
				}}
			>
				{children}
			</h1>
		</div>
	);
};
