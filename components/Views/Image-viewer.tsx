import React, { useState, useEffect } from 'react';
// @mui
import { Grow, styled, Typography, useTheme } from '@mui/material';
// @mui-icons
import {
	Egg,
	Icecream,
	Cake,
	RiceBowl,
	Tapas,
	KebabDining,
	LocalPizza,
	LunchDining,
	Bento,
	RamenDining,
	BakeryDining,
	SetMeal,
} from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
	width: '100%',
	height: '100vh',
	backgroundColor: '#333',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-evenly',
}));

const icons = [
	Egg,
	Icecream,
	Cake,
	RiceBowl,
	Tapas,
	KebabDining,
	LocalPizza,
	LunchDining,
	Bento,
	RamenDining,
	BakeryDining,
	SetMeal,
];

const ImageViewer = () => {
	const theme = useTheme();
	const [currentIconIndex, setCurrentIconIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Increment the index to switch to the next icon
			setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
		}, 3000);

		// Clear the interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	const CurrentIcon = icons[currentIconIndex];

	return (
		<StyledSection>
			<Typography variant='h1'>Variety of Food</Typography>
			<div>
				<Grow in={true}>
					<CurrentIcon
						sx={{
							fontSize: '35rem',
							color: '#a79a2d',
							transform: 'translate(-50%, -50%)',
							[theme.breakpoints.down('lg')]: {
								fontSize: '25rem',
							},
							[theme.breakpoints.down('md')]: {
								fontSize: '20rem',
							},
						}}
					/>
				</Grow>
			</div>
		</StyledSection>
	);
};

export default ImageViewer;
