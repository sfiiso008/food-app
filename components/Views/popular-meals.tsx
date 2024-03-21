import React from 'react';
// @mui
import { Button, Typography, styled } from '@mui/material';
// @local
import CardComponent from '../card';
import ImageComponent from '../image';

// @styled

const StyledButton = styled(Button)({
	width: '70%',
	backgroundColor: '#111',
	color: '#888',
	borderRadius: '5rem',
	fontSize: '1.5rem',
	fontWeight: 800,
	textTransform: 'capitalize',
	border: 'none',
	padding: '0.5rem 0',
	cursor: 'pointer',
	boxShadow: '-0.2rem -0.2rem 0.2rem #000',
	':hover': {
		backgroundColor: '#111',
		color: '#888',
	},
});

const StyledH3 = styled('h3')({
	fontSize: '3rem',
	fontWeight: 900,
	textTransform: 'uppercase',
	letterSpacing: '0.5rem',
	color: '#111',
	margin: '2rem 0',
	textShadow: '0.15rem 0.15rem 0.15rem #000',
});

const StyledSection = styled('section')(({ theme }) => ({
	width: '100%',
	height: '100vh',
	backgroundColor: '#222',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	padding: '10rem 0',
	[theme.breakpoints.down('lg')]: {
		height: 'auto',
		padding: '10rem 0 12rem 0',
	},
}));

const StyledContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-evenly',
	[theme.breakpoints.down('lg')]: {
		marginTop: '10rem',
		flexWrap: 'wrap',
	},
}));

const PopularMeals = () => {
	return (
		<StyledSection>
			<Typography variant='h1'>Popular Meals</Typography>
			<StyledContainer>
				<CardComponent>
					<ImageComponent
						src={'/images/card-img-1.png'}
						title='Image One'
					/>
					<StyledH3>Fish</StyledH3>
					<StyledButton>Order Now</StyledButton>
				</CardComponent>
				<CardComponent>
					<ImageComponent
						src={'/images/card-img-2.png'}
						title='Image Two'
					/>
					<StyledH3>Cake</StyledH3>
					<StyledButton>Order Now</StyledButton>
				</CardComponent>
				<CardComponent>
					<ImageComponent
						src={'/images/card-img-3.png'}
						title='Image Three'
					/>
					<StyledH3>Lobster</StyledH3>
					<StyledButton>Order Now</StyledButton>
				</CardComponent>
			</StyledContainer>
		</StyledSection>
	);
};

export default PopularMeals;
