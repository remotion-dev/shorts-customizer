import React, {Children} from 'react';
import {AbsoluteFill} from 'remotion';
import {Publikum} from './Publikum';
import {Spieler} from './Spieler';
import texture from './texture.jpg';

const container: React.CSSProperties = {
	backgroundColor: '#222',
};

const background: React.CSSProperties = {
	backgroundImage: `url(${texture})`,
	backgroundSize: 'cover',
	opacity: 0.12,
};

export const Background: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<AbsoluteFill style={container}>
			<AbsoluteFill style={background} />
			<Publikum />

			<AbsoluteFill>{children}</AbsoluteFill>
		</AbsoluteFill>
	);
};
