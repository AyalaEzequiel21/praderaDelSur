import { styled } from "styled-components";

export const CardProductContainerStyle = styled.article`
    display: grid;
    grid-template-areas: 
    'message message'
    'carousel list';
    justify-items: center;
    margin: 20px;

    & h3{
        grid-area: message;
    }
`

export const ListProductsCard = styled.ul`
    grid-area: list
`

export const ProductItemCard = styled.li`

`