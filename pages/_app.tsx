import Head from 'next/head';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
// @styles
import '../styles/globals.css';
import GlobalTheme from '@/styles/globalTheme';

function MyApp({
	Component,
	pageProps,
}: {
	Component: React.ElementType;
	pageProps: any;
}) {
	return (
		<ThemeProvider theme={GlobalTheme}>
			<CssBaseline />
			<Head>
				<title>Next Food App</title>
				<meta
					name='description'
					content='Find a lot of great events that allow you to evolve...'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
