import { styled } from "styled-components";
import { breakpoints, colors, fontSizes } from "../../../../../data";


export const MensageHomeStyle = styled.div`
    align-items: center;
    color: ${colors.green};
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    padding: 20px 0;
    text-align: center;


    & h1{
        font-size: ${fontSizes.subTitle};
        padding: 5px;

        @media(min-width: ${breakpoints.mediumPX}){
            padding: 5px 30px;
        }
    };

    & p{
        font-size: ${fontSizes.text};
        padding: 15px;

        @media(min-width: ${breakpoints.mediumPX}){
            padding: 5px 35px;
        }
    }

`