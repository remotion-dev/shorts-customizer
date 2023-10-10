import React from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {SPONSORS} from '../infos';

export const SponsorLogo: React.FC<{
	sponsor: string;
}> = ({sponsor}) => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'flex-end',
				alignItems: 'center',
			}}
		>
			<Img
				style={{
					width: '30%',
					marginBottom: 30,
					opacity: sponsor === SPONSORS.isolutions ? 1 : 0.9,
				}}
				src={`https://jonnyburger.s3.eu-central-1.amazonaws.com/sponsor-${sponsor}.png`}
			/>
		</AbsoluteFill>
	);
};
