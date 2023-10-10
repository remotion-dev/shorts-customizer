import React, {useContext} from 'react';
import {AbsoluteFill, Internals} from 'remotion';

export const SevenTwentyPScaler: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const ctx = useContext(Internals.CompositionManager);

	return (
		<AbsoluteFill
			style={{
				height: 1920,
				width: 1080,
				transform: `translateX(${-(1080 - 720) / 2}px) translateY(${
					-(1920 - 1280) / 2
				}px) scale(${720 / 1080})`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
