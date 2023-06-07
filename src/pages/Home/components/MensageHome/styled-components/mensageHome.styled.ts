import { styled } from "styled-components";
import { breakpoints, textStyle, titleStyles } from "../../../../../data";


export const MensageHomeStyle = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
    max-width: 500px;

    @media(min-width: ${breakpoints.mediumPX}){
        max-width: 800px;
    };

    & h1{
        ${titleStyles};
        margin-bottom: 15px;
    };

    & p{
        ${textStyle};
    }

`