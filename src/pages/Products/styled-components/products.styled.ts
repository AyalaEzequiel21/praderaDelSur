import { styled } from "styled-components";
import { colors, fontSizes } from "../../../data";

export const ProductsContainerStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
    width: 90%;
    max-width: 1500px;

    & h1{
        color: ${colors.green};
        font-size: ${fontSizes.subTitle};
        margin-bottom: 10px;
        text-align: center;
        max-width: 1000px;
    }
`

export const CardsProductsContainer = styled.div`
    
    margin: 20px 0;
    width: 100%;
`