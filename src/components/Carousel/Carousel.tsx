import React, { useEffect, useState } from 'react';
import { BtnCarouselStyle, CarouselContainerStyle, ImageContainerStyle } from '.';

export interface CarouselProps {
	images: string[]
}

const Carousel: React.FC<CarouselProps> = ({images}) => {

	// console.log(images.length);
	

	const [selectedIndex, setSelectedIndex] = useState<number>(0)
	const [selectedImage, setSelectedImage] = useState<string>(images[selectedIndex])

	const next = (selectedIndex: number, images: string[]) => {
		const nextIndex: number = selectedIndex + 1
		nextIndex === images.length ? setSelectedIndex(0) : setSelectedIndex(nextIndex)
	}

	const prev = (selectedIndex: number, images: string[]) => {
		const nextIndex: number = selectedIndex - 1 
		nextIndex < 0 ? setSelectedIndex(images.length -1) : setSelectedIndex(nextIndex)
	}

	useEffect(() => {
		setSelectedImage(images[selectedIndex])
	}, [selectedIndex])

	return (
		<CarouselContainerStyle>
			<BtnCarouselStyle onClick={() => prev(selectedIndex, images)}>{`<`}</BtnCarouselStyle>
			<ImageContainerStyle>
				<img src={selectedImage} alt="Product's image" />
			</ImageContainerStyle>
			<BtnCarouselStyle onClick={() => next(selectedIndex, images)}>{`>`}</BtnCarouselStyle>
		</CarouselContainerStyle>
	)
};

export default Carousel;
