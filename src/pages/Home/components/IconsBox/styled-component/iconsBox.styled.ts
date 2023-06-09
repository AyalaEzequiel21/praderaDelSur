import { styled } from "styled-components";
import { breakpoints, colors, fontSizes, stylesShadow } from "../../../../../data";


export const IconsBoxStyle = styled.div`
    align-items: center;
    ${stylesShadow};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px 0;
    padding: 20px 0;
    width: 65%;
    min-width: 225px;
    max-width: 306px;

    @media(min-width: ${breakpoints.mediumPX}){
        flex-direction: row;
        padding: 10px 20px;
        width: 100%;
        max-width: 930px;
    };

    @media(min-width: ${breakpoints.largePX}){
        width: 80%;
    }
`

export const IconItemStyle = styled.div`
    align-items: center;
    display: flex;
    color: ${colors.green};
    flex-direction: column;
    margin: 25px 0;
    width: 180px;

    @media(min-width: ${breakpoints.mediumPX}){
        margin: 25px;
    };

    & svg{
        font-size: 40px;
        margin-bottom: 5px
    }

    & p{
        font-size: ${fontSizes.text};
        text-align: center;
    }
`