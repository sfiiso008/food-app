import React from 'react';
// @mui
import { Typography, styled } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const StyledSection = styled('section')(({ theme }) => ({
	width: '100%',
	height: '30vh',
	backgroundColor: '#222',
	display: 'flex',
	justifyContent: 'space-around',
	padding: '3rem 0',
	position: 'relative',
	alignItems: 'flex-start',
	[theme.breakpoints.down('lg')]: {
		height: '30rem',
	},
	[theme.breakpoints.down('md')]: {
		height: '40rem',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
}));

const StyledInput = styled('input')({
	width: '35rem',
	height: '5rem',
	padding: '1rem',
	border: '.2rem solid #a79a2d',
	fontSize: '1.6rem',
	fontWeight: 700,
	letterSpacing: '.1rem',
	color: '#a79a2d',
	'&:placeholder': {
		color: '#a79a2d',
	},
});

const Footer = () => {
	return (
		<StyledSection>
			<div
				style={{
					textTransform: 'uppercase',
					marginBottom: '8rem',
				}}
			>
				<Typography variant='h2'>Sign me up</Typography>
				<p
					style={{
						fontSize: '1.5rem',
						color: '#888',
					}}
				>
					Be the first to know about new products
				</p>
			</div>
			<form
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<StyledInput type='email' placeholder='Email Address' />
				<button
					type='submit'
					style={{
						position: 'relative',
						left: '-4.5rem',
						width: '4rem',
						height: '4rem',
						backgroundColor: '#333',
						color: '#a79a2d',
						border: 'none',
						fontSize: '2rem',
						cursor: 'pointer',
					}}
				>
					<ArrowForward />
				</button>
			</form>
			<p
				style={{
					position: 'absolute',
					bottom: '3rem',
					fontSize: '1.7rem',
					fontWeight: 200,
					color: '#eee',
					letterSpacing: '.1rem',
					borderTop: '.1rem solid #888',
					paddingTop: '6rem',
					width: '100%',
					textAlign: 'center',
				}}
			>
				CodeAndCreate &copy; 2024 All rights reserved
			</p>
		</StyledSection>
	);
};

export default Footer;
