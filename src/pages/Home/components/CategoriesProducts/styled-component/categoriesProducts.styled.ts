import { styled } from "styled-components";
import { breakpoints, textStyle, titleStyles } from "../../../../../data";


export const CategoriesContainerStyle = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    & h1{
        ${titleStyles};
    };

    & p{
        ${textStyle};
        margin: 10px 0;
    }
`

export const CardsContainerStyle = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;

    @media(min-width: ${breakpoints.largePX}){
        display: grid;
        grid-template-columns: 45% 45%;
        justify-content: center;
        justify-items: center;
    }
`