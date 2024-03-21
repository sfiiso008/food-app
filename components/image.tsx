import React from 'react';
import Image from 'next/image';

const ImageComponent = ({ src, title }: { src: string; title: string }) => {
	return (
		<Image
			src={src}
			alt={title}
			width={0}
			height={0}
			sizes='100vw'
			style={{ width: '100%', height: '100%' }}
		/>
	);
};

export default ImageComponent;
