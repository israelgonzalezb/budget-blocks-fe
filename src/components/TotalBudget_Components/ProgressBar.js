import React from 'react';
import { useState } from 'react';

//I: Used in TotalBudget, uses css classes defined in ./index.css which is imported by the parent container

const ProgressBar = ({ done }) => {
	const [style, setStyle] = useState({});
	setTimeout(() => {
		const newStyle = { opacity: 1, width: `${done}%` };
		setStyle(newStyle);
	}, 200);
	return (
		<div className='progress'>
			<div className='progress-done' style={style}>
				{done}%
			</div>
		</div>
	);
};

export default ProgressBar;
