import React from 'react';
// @mui
import { Typography, styled } from '@mui/material';
// @local
import GalleryItem from '../gallery-item';

const StyledDiv = styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	marginTop: '10rem',
	padding: '0 20rem',
	[theme.breakpoints.down('xl')]: {
		padding: '0',
	},
}));

const StyledSection = styled('section')(({ theme }) => ({
	backgroundColor: '#333',
	padding: '5rem 0',
}));

const galleryItems = [
	{
		id: 1,
		title: 'Pancake',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus eveniet? Itaque eveniet reprehenderit quae fugit quo ratione esse, quia dolorum, iure quibusdam maiores sint iusto ullam explicabo rerum doloremque.',
		image: '/images/gallery-img-1.jpg',
	},
	{
		id: 1,
		title: 'Cupcake',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus eveniet? Itaque eveniet reprehenderit quae fugit quo ratione esse, quia dolorum, iure quibusdam maiores sint iusto ullam explicabo rerum doloremque.',
		image: '/images/gallery-img-2.jpg',
	},
	{
		id: 1,
		title: 'Hummus',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus eveniet? Itaque eveniet reprehenderit quae fugit quo ratione esse, quia dolorum, iure quibusdam maiores sint iusto ullam explicabo rerum doloremque.',
		image: '/images/gallery-img-3.jpg',
	},
	{
		id: 1,
		title: 'Hamburger',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus eveniet? Itaque eveniet reprehenderit quae fugit quo ratione esse, quia dolorum, iure quibusdam maiores sint iusto ullam explicabo rerum doloremque.',
		image: '/images/gallery-img-4.jpg',
	},
	{
		id: 1,
		title: 'Salmon',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus eveniet? Itaque eveniet reprehenderit quae fugit quo ratione esse, quia dolorum, iure quibusdam maiores sint iusto ullam explicabo rerum doloremque.',
		image: '/images/gallery-img-5.jpg',
	},
	{
		id: 1,
		title: 'Vegetables',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus eveniet? Itaque eveniet reprehenderit quae fugit quo ratione esse, quia dolorum, iure quibusdam maiores sint iusto ullam explicabo rerum doloremque.',
		image: '/images/gallery-img-6.jpg',
	},
];

const Gallery = () => {
	return (
		<StyledSection>
			<Typography variant='h1'>Gallery</Typography>
			<StyledDiv>
				{galleryItems.map((item) => (
					<GalleryItem
						key={item.id}
						title={item.title}
						image={item.image}
						description={item.description}
					/>
				))}
			</StyledDiv>
		</StyledSection>
	);
};

export default Gallery;
