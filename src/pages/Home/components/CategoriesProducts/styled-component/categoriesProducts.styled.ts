import { styled } from "styled-components";
import { breakpoints, colors, fontSizes, limits } from "../../../../../data";


export const CategoriesContainerStyle = styled.div`
    align-items: center;
    color: ${colors.green};
    display: flex;
    flex-direction: column;

    & h1{
        font-size: ${fontSizes.subTitle};
    };

    & p{
        font-size: ${fontSizes.text};
        margin: 10px 0;
        padding: 0 20px;
        text-align: center;

        @media(min-width: ${breakpoints.largePX}){
            max-width: ${limits.maxWidth};
            padding: 0 220px;
        }
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