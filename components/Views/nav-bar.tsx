import React, { Fragment } from 'react';
// @mui
import { styled, useTheme } from '@mui/material';
// @icons
import {
	Cottage,
	Restaurant,
	LunchDining,
	LocalPizza,
	Tty,
} from '@mui/icons-material';

const StyledNav = styled('nav')({
	width: '100%',
	height: '14rem',
	background: '#000',
	position: 'fixed',
	zIndex: 100,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: '.2rem .2rem .2rem #000',
	transition: 'top .4s',
});

const StyledLink = styled('a')(({ theme }) => ({
	color: '#aaa',
	margin: '0 4rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'color .3s, opacity .3s',
	textDecoration: 'none',
	'&:hover': {
		color: '#fff',
	},
	[theme.breakpoints.down('md')]: {
		margin: '2rem',
	},
	[theme.breakpoints.down('sm')]: {
		margin: '0 0.7rem',
	},
}));

const StyledSpan = styled('span')(({ theme }) => ({
	fontSize: '2.5rem',
	fontWeight: 900,
	letterSpacing: '.5rem',
	marginTop: '.5rem',
	[theme.breakpoints.down('md')]: {
		fontSize: '2rem',
	},
}));

const StyledDiv = styled('div')(({ theme }) => ({
	width: '4rem',
	height: '6rem',
	backgroundColor: '#000',
	position: 'fixed',
	left: '5rem',
	borderRadius: '30rem 30rem 15rem 15rem',
	boxShadow: '0.1rem 0.1rem 0.1rem #000, -0.1rem -0.1rem 0.1rem #000',
	cursor: 'pointer',
	transition: 'top .4s',
	zIndex: 1000,
	'&::before': {
		content: '""',
		width: '0.3rem',
		height: '15rem',
		position: 'absolute',
		background: '#000',
		top: '-15rem',
		left: 'calc(50% - 0.15rem)',
		boxShadow: '0.1rem 0 0.1rem #000',
	},
	[theme.breakpoints.down('md')]: {
		left: '2rem',
	},
}));

const NavBar = () => {
	const theme = useTheme();

	const iconStyle = {
		fontSize: '7rem',
		[theme.breakpoints.down('md')]: {
			fontSize: '4rem',
		},
	};

	const [isChanged, setIsChanged] = React.useState(false);

	const handleDivClick = () => {
		setIsChanged(!isChanged);
	};

	return (
		<Fragment>
			<StyledNav
				style={{
					top: isChanged ? 0 : '-14rem',
					transition: 'top .4s',
				}}
			>
				<StyledLink
					href='/'
					style={{
						opacity: isChanged ? 1 : 0,
						transition: isChanged
							? 'opacity .4s .5s'
							: 'opacity .4s',
					}}
				>
					<Cottage sx={iconStyle} />
					<StyledSpan>Home</StyledSpan>
				</StyledLink>
				<StyledLink
					href='/'
					style={{
						opacity: isChanged ? 1 : 0,
						transition: isChanged
							? 'opacity .4s .6s'
							: 'opacity .4s',
					}}
				>
					<Restaurant sx={iconStyle} />
					<StyledSpan>Meals</StyledSpan>
				</StyledLink>
				<StyledLink
					href='/'
					style={{
						opacity: isChanged ? 1 : 0,
						transition: isChanged
							? 'opacity .4s .7s'
							: 'opacity .4s',
					}}
				>
					<LunchDining sx={iconStyle} />
					<StyledSpan>Burger</StyledSpan>
				</StyledLink>
				<StyledLink
					href='/'
					style={{
						opacity: isChanged ? 1 : 0,
						transition: isChanged
							? 'opacity .4s .8s'
							: 'opacity .4s',
					}}
				>
					<LocalPizza sx={iconStyle} />
					<StyledSpan>Pizza</StyledSpan>
				</StyledLink>
				<StyledLink
					href='/'
					style={{
						opacity: isChanged ? 1 : 0,
						transition: isChanged
							? 'opacity .4s .9s'
							: 'opacity .4s',
					}}
				>
					<Tty sx={iconStyle} />
					<StyledSpan>Contact</StyledSpan>
				</StyledLink>
			</StyledNav>
			<StyledDiv
				onClick={handleDivClick}
				style={{
					top: isChanged ? '15rem' : '1rem',
					transition: 'top .4s',
				}}
			/>
		</Fragment>
	);
};

export default NavBar;
