import React from 'react';
import { BtnCarouselStyle, CarouselContainerStyle, ImageContainerStyle } from '.';

export interface CarouselProps {
	images: string[]
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
	return (
		<CarouselContainerStyle>
			<BtnCarouselStyle>{`<`}</BtnCarouselStyle>
			<ImageContainerStyle>
				
			</ImageContainerStyle>
			<BtnCarouselStyle>{`>`}</BtnCarouselStyle>
		</CarouselContainerStyle>
	)
};

export default Carousel;
