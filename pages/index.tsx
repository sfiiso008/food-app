import React from 'react';
// @components
import ImageViewer from '@/components/Views/Image-viewer';
import PopularMeals from '@/components/Views/popular-meals';
import Gallery from '@/components/Views/gallery';
import Footer from '@/components/Views/footer';
import NavBar from '@/components/Views/nav-bar';

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<ImageViewer />
			<PopularMeals />
			<Gallery />
			<Footer />
		</div>
	);
};

export default HomePage;
