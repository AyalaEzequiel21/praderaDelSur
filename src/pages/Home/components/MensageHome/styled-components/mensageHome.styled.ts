import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../../../data";


export const MensageHomeStyle = styled.div`
    align-items: center;
    color: ${colors.green};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
    max-width: 500px;
    padding: 20px;
    text-align: center;

    @media(min-width: ${breakpoints.mediumPX}){
        max-width: 800px;
    };

    & h1{
        font-size: ${fontSizes.subTitle};
        margin-bottom: 15px;
    };

    & p{
        font-size: ${fontSizes.text};
    }

`