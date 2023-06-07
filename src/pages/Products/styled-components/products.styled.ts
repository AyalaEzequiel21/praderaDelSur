import { styled } from "styled-components";
import { titleStyles } from "../../../data";

export const ProductsContainerStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
    width: 90%;
    max-width: 1500px;

    & h1{
        ${titleStyles};
        margin-bottom: 10px;
    }
`

export const CardsProductsContainer = styled.div`
    
    margin: 20px 0;
    width: 100%;
`