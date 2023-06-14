import { styled } from "styled-components";
import { stylesShadow, titleStyles } from "../../../data";

export const MarketContainerStyle = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50vh;

    & h1{
        ${titleStyles};
    }
`