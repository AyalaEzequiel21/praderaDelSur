import { styled } from "styled-components";
import { textStyle } from "../../../data";

export const ProductsContainerStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
    width: 90%;
    max-width: 1200px;

    & p{
        ${textStyle};
        margin: 35px 0;
    }
`

export const CardsProductsContainer = styled.div`
    margin: 20px 0;
    width: 100%;
`