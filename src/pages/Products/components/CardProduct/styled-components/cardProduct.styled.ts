import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../../../data";

export const CardProductContainerStyle = styled.article`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;

    @media(min-width: ${breakpoints.mediumPX}){
        display: grid;
        grid-template-areas: 
            'message message'
            'carousel list';
        grid-template-columns: 60% 40%;
        justify-items: center;
        justify-content: space-around;
        margin: 20px auto;
        max-width: 770px;
    };

    @media(min-width: ${breakpoints.largePX}){
        max-width: 850px;
    };

    & h3{
        color: ${colors.green};
        font-size: ${fontSizes.btn};
        grid-area: message;
        margin-bottom: 20px;
    }
`

export const ListProductsCard = styled.ul`
    color: ${colors.green};
    font-size: ${fontSizes.itemNav};
    grid-area: list;
    margin-top: 30px;
    width: 270px;
`

export const ProductItemCard = styled.li`
    margin: 10px;
    list-style-type: circle;

    @media(min-width: ${breakpoints.mediumPX}){
        font-size: ${fontSizes.btn};
    };

    @media(min-width: ${breakpoints.largePX}){
        margin: 15px;
    }
`