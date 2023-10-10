import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {TEAM_API} from '../infos';
import {YELLOW} from './colors';
import {useFont} from './use-font';

export const PlayerPortrait: React.FC<{
	style: React.CSSProperties;
	height: number;
	playerNumber: number;
	orientiation: 'portrait' | 'square';
}> = ({style, height, playerNumber, orientiation}) => {
	useFont();
	return (
		<AbsoluteFill
			style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}
		>
			<div
				style={{
					...style,
					display: 'inline-flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<Img
					src={TEAM_API[playerNumber].assets.portrait}
					style={{
						height,
					}}
				/>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100%',
					}}
				>
					<div
						style={{
							backgroundColor: YELLOW,
							fontSize: orientiation === 'square' ? 80 : 60,
							lineHeight: 1.1,
							paddingLeft: 10,
							paddingRight: 10,
							fontFamily: 'YB',
							display: 'block',
							textAlign: 'center',
						}}
					>
						<span style={{color: 'white'}}>{playerNumber}</span>{' '}
						{TEAM_API[playerNumber].lastName.toUpperCase()}
					</div>
				</AbsoluteFill>
			</div>
		</AbsoluteFill>
	);
};
