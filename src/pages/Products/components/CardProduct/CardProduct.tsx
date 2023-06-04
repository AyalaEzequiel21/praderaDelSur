import React from 'react';
import { CardProductContainerStyle, ListProductsCard, ProductItemCard } from '.';
import { ProductData } from '../../../../data';
import { Carousel } from '../../../../components';

export interface CardProductProps {
	product: ProductData,
}

const CardProduct: React.FC<CardProductProps> = ({product}) => {
	return (
		<CardProductContainerStyle>
			<h3>{product.title}</h3>
			<Carousel images={product.images}/>
			<ListProductsCard>
				{product.items.map(product => (
					<ProductItemCard key={product}>{product}</ProductItemCard>
				))}
			</ListProductsCard>
		</CardProductContainerStyle>
	);
};

export default CardProduct;
