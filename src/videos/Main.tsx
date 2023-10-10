import {z} from 'zod';
import React from 'react';
import {SevenTwentyPScaler} from './1080pScaler';
import {MainComp, schema} from './MainComp';

export const Main: React.FC<z.infer<typeof schema>> = (props) => {
	return (
		<SevenTwentyPScaler>
			<MainComp {...props} />
		</SevenTwentyPScaler>
	);
};
