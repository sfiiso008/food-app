import React from 'react';
import Image from 'next/image';
// @mui
import { styled } from '@mui/material';

const StyledAnchor = styled('a')(({ theme }) => ({
	position: 'relative',
	margin: '4rem 1rem',
	'::before': {
		content: '""',
		position: 'absolute',
		backgroundColor: '#fff',
		top: '2vw',
		left: '80%',
		height: 0,
		width: '0.2rem',
		transition: 'height 0.5s',
		zIndex: 10,
	},
	'&::after': {
		content: '""',
		position: 'absolute',
		backgroundColor: '#fff',
		top: '30%',
		left: '2rem',
		height: '0.2rem',
		width: 0,
		transition: 'width 0.5s',
	},
	'&:hover::before': {
		height: '80%',
	},
	'&:hover::after': {
		width: '90%',
	},
	'&:hover h3': {
		width: '100%',
		transition: 'width 1.5s 0.5s',
	},
	'&:hover p': {
		opacity: 1,
		visibility: 'visible',
		transition: 'opacity 1s 1s',
	},
	'&:hover img': {
		boxShadow: `1rem 1rem 0.1rem #e92929,
		2rem 2rem 0.1rem #a2e946, 
		3rem 4rem 0.1rem #297ce9,
		4rem 4rem .1rem #e92999`,
		filter: 'blur(0.5rem)',
		opacity: 0.5,
		transform: 'scale(1.1)',
	},
	[theme.breakpoints.down('lg')]: {
		width: '40rem',
		height: '25rem',
	},
}));

const StyledH3 = styled('h3')({
	position: 'absolute',
	top: '3rem',
	left: '3rem',
	fontSize: '2rem',
	fontWeight: 700,
	textTransform: 'uppercase',
	letterSpacing: '0.1rem',
	color: '#fff',
	width: '0',
	overflow: 'hidden',
	transition: 'width 0.3s',
});

const StyledImage = styled(Image)(({ theme }) => ({
	boxShadow: `0.3rem 0.3rem 0.1rem #e92929,
			 .5rem .5rem 0.1rem #a2e946, 
			 .7rem .7rem 0.1rem #297ce9,
			  .9rem .9rem .1rem #e92999`,
	transition: 'all 0.5s',
	[theme.breakpoints.down('lg')]: {
		width: '100%',
		height: '100%',
	},
}));

const StyledP = styled('p')({
	position: 'absolute',
	bottom: '3vw',
	left: '3rem',
	width: '70%',
	fontSize: '1.5rem',
	fontWeight: 300,
	letterSpacing: '0.1rem',
	textTransform: 'uppercase',
	color: '#fff',
	opacity: 0,
	visibility: 'hidden',
	transition: 'opacity 0.3s',
});

const GalleryItem = ({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: string;
}) => {
	return (
		<StyledAnchor href='#' title='Order Now'>
			<StyledImage src={image} alt={title} width={400} height={300} />
			<StyledH3>{title}</StyledH3>
			<StyledP>{description}</StyledP>
		</StyledAnchor>
	);
};

export default GalleryItem;
