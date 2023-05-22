import React from 'react';
import { IconsBox, MensageHome } from '.';
import { HomeStyle } from './styled-components/home.styled';
import { Separator } from '../../components';
import { CategoriesProducts } from './components/CategoriesProducts';
import { categories, titleProducts, subTitleProducts, iconsBoxData } from '../../data';


export interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
	return (
		<HomeStyle>
			<MensageHome/>
			<IconsBox data={iconsBoxData}/>
			<Separator/>
			<CategoriesProducts dataCategories={categories} title={titleProducts} subTitle={subTitleProducts}/>
		</HomeStyle>
	)
};

export default Home;
