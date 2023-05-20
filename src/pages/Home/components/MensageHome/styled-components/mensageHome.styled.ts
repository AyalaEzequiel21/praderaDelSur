import { styled } from "styled-components";
import { colors, fontSizes } from "../../../../../data";


export const MensageHomeStyle = styled.div`
    align-items: center;
    color: ${colors.green};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    text-align: center;


    & h1{
        font-size: ${fontSizes.subTitle};
        max-width: 1000px;
        padding: 5px
    };

    & p{
        font-size: ${fontSizes.text};
        padding: 10px;
    }

`