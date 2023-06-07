import React from 'react';
import { CardsProductsContainer, ProductsContainerStyle } from '..';
import { messageProducts, productsList } from '../../data';
import { CardProduct } from './components/CardProduct';
import { Separator } from '../../components';

export interface ProductsProps {
}

const Products: React.FC<ProductsProps> = () => {

	function isTheLast<T>(index: number, array: T[]): boolean {
		return index === array.length - 1;
	}

	return (
		<ProductsContainerStyle>
			<h1>{messageProducts}</h1>
			<CardsProductsContainer>
				{productsList.map((item, index) => (
					<div key={item.id} id={item.title}>
						<CardProduct key={item.id} product={item}/>
						{!isTheLast(index, productsList) && <Separator key={index}/>}
					</div>
				))}
			</CardsProductsContainer>
		</ProductsContainerStyle>
	)
};

export default Products;
