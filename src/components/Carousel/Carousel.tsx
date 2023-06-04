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
				<img src={images[0]} alt="" />
			</ImageContainerStyle>
			<BtnCarouselStyle>{`>`}</BtnCarouselStyle>
		</CarouselContainerStyle>
	)
};

export default Carousel;
