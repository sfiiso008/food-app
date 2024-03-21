import React from 'react';
// @mui
import { styled } from '@mui/material';

const StyledCard = styled('div')(({ theme }) => ({
	width: '30rem',
	backgroundColor: '#a79a2d',
	padding: '4rem',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	boxShadow: '1rem 1rem 1rem #000',
	position: 'relative',
	transform: 'rotateY(20deg) skewX(-2deg)',
	transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
	'&::before': {
		content: '""',
		position: 'absolute',
		height: '100%',
		width: '1rem',
		backgroundColor: '#817824',
		top: 0,
		left: '0.00000000001rem',
		transform: 'skewY(45deg)',
		transformOrigin: 'right',
		boxShadow: '-0.1rem -0.1rem 0.1rem #000',
	},
	'&::after': {
		content: '" "',
		position: 'absolute',
		height: '1rem%',
		width: '100%',
		backgroundColor: '#red',
		top: '0.00000000001rem',
		left: 0,
		transform: 'skewY(45deg)',
		transformOrigin: 'right',
		boxShadow: '-0.1rem -0.1rem 0.1rem #000',
	},
	'&:hover': {
		transform: 'rotateY(20deg) skewX(-2deg) translateY(-3rem)',
		boxShadow: '2rem 2rem 2rem #000',
	},
	[theme.breakpoints.down('lg')]: {
		margin: '5rem',
	},
}));

export const CardComponent = ({ children }: { children: React.ReactNode }) => {
	return <StyledCard>{children}</StyledCard>;
};

export default CardComponent;
